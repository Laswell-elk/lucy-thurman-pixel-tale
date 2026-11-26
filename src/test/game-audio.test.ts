import { readFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";

const html = readFileSync("public/game/purgatorium.html", "utf8");
const engineSource = html.slice(html.indexOf("class GothicAudioEngine"), html.indexOf("const audioEngine ="));

function setup() {
  const playedSources: unknown[] = [];
  const nodes: { gain: { value: number }; connect: ReturnType<typeof vi.fn> }[] = [];
  const parameter = () => ({ value: 0, setValueAtTime: vi.fn(), exponentialRampToValueAtTime: vi.fn() });
  class FakeAudio {
    src = "";
    currentTime = 0;
    volume = 1;
    loop = false;
    paused = true;
    play = vi.fn(async () => { this.paused = false; });
    pause = vi.fn(() => { this.paused = true; });
  }
  class FakeContext {
    state = "running";
    currentTime = 0;
    sampleRate = 100;
    destination = {};
    resume = vi.fn(async () => {});
    decodeAudioData = vi.fn(async () => ({ decoded: true }));
    createGain() {
      const node = { gain: parameter(), connect: vi.fn() };
      nodes.push(node);
      return node;
    }
    createDynamicsCompressor() {
      return { threshold: parameter(), knee: parameter(), ratio: parameter(), connect: vi.fn() };
    }
    createBufferSource() {
      const node = { buffer: null, connect: vi.fn(), start: vi.fn(() => playedSources.push(node)) };
      return node;
    }
    createBuffer(_channels: number, length: number) { return { getChannelData: () => new Float32Array(length) }; }
    createBiquadFilter() { return { type: "", frequency: parameter(), connect: vi.fn() }; }
    createOscillator() { return { type: "", frequency: parameter(), connect: vi.fn(), start: vi.fn(), stop: vi.fn() }; }
  }
  const factory = new Function("Audio", "window", "document", "fetch", `
    let gameState = 'menu', currentBossIdx = 0;
    ${engineSource}
    return { engine: new GothicAudioEngine(), setState(state, boss = 0) { gameState = state; currentBossIdx = boss; } };
  `);
  const result = factory(FakeAudio, { AudioContext: FakeContext }, {
    getElementById: () => null, querySelectorAll: () => [],
  }, async () => ({ ok: true, arrayBuffer: async () => new ArrayBuffer(1) }));
  return { ...result, playedSources, nodes };
}

describe("Game audio rules", () => {
  it("starts with sound enabled without playing music in the menu", () => {
    const { engine } = setup();
    expect(engine.enabled).toBe(true);
    engine.startBGM();
    expect(engine.music.play).not.toHaveBeenCalled();
  });

  it("stops music in the menu and resets to the first boss on retry", () => {
    const { engine, setState } = setup();
    setState("playing", 2);
    engine.startBGM();
    expect(engine.music.src).toBe("bgm-beatrice.mp3");
    setState("gameover");
    engine.stopBGM(true);
    expect(engine.music.paused).toBe(true);
    expect(engine.music.currentTime).toBe(0);
    expect(engine.music.src).toBe("bgm-seraphina.mp3");
    setState("playing", 0);
    engine.startBGM();
    expect(engine.music.paused).toBe(false);
    expect(engine.music.src).toBe("bgm-seraphina.mp3");
  });

  it.each([[0, "seraphina"], [1, "carmilla"], [2, "beatrice"]])("plays the matching theme for boss %s", (idx, name) => {
    const { engine, setState } = setup();
    setState("playing", idx);
    engine.startBGM();
    expect(engine.music.src).toBe(`bgm-${name}.mp3`);
  });

  it("keeps music louder than effects, softens boss explosions and lifts boss 2's theme", () => {
    const { engine } = setup();
    expect(engine.music.volume).toBe(0.65);
    expect(engine.effectsVolume).toBe(0.4);
    expect(engine.bossDefeatVolume).toBe(0.18);
    expect(engine.music.volume).toBeGreaterThan(engine.effectsVolume);
    expect(engine.bossDefeatVolume).toBeLessThan(0.8);

    engine.selectBoss(1);
    expect(engine.music.volume).toBe(0.75);
    engine.selectBoss(2);
    expect(engine.music.volume).toBe(0.65);
  });

  it("plays boss explosions after the music has stopped at victory", async () => {
    const { engine, setState, playedSources, nodes } = setup();
    setState("playing", 2);
    engine.startBGM();
    const pending = engine.playBossDefeatSFX();
    setState("victory");
    engine.stopBGM(true);
    await pending;
    expect(engine.music.paused).toBe(true);
    expect(playedSources).toHaveLength(1);
    expect(nodes.at(-1)?.connect).toHaveBeenCalledWith(engine.effects);
  });

  it("plays the player death sound with the context initialized and music stopped", () => {
    const { engine, setState, playedSources } = setup();
    setState("gameover");
    engine.stopBGM(true);
    engine.playDeathSFX();
    expect(engine.ctx).not.toBeNull();
    expect(playedSources).toHaveLength(1);
    expect(engine.music.paused).toBe(true);
  });

  it("never starts menu music when enabling audio", () => {
    const { engine } = setup();
    engine.toggle();
    engine.toggle();
    expect(engine.enabled).toBe(true);
    expect(engine.music.play).not.toHaveBeenCalled();
  });
});