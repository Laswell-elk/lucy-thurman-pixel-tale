import { createFileRoute } from "@tanstack/react-router";
import { Download, Maximize2 } from "lucide-react";

import { GameFrame } from "@/components/site/GameFrame";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { GAME, gameUrl } from "@/lib/game";

export const Route = createFileRoute("/jogar")({
  head: () => ({
    meta: [
      { title: "Jogar PURGATORIUM grátis no navegador" },
      {
        name: "description",
        content:
          "Jogue PURGATORIUM: Requiem of the Pale Soul agora. Sobreviva 3 minutos às três guardiãs. Também disponível para baixar.",
      },
      { property: "og:title", content: "Jogar PURGATORIUM grátis" },
      { property: "og:description", content: "Sobreviva 3 minutos no Purgatório, direto no navegador." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlayPage,
});

const CONTROLS = [
  { keys: "WASD / Setas", action: "Mover Elise" },
  { keys: "Shift", action: "Foco (movimento lento e preciso)" },
  { keys: "Espaço", action: "Parry — Pulso Espiritual (recarga 3s)" },
  { keys: "E", action: "Bomb — Purificação Total" },
];

function PlayPage() {
  return (
    <>
      <PageHero eyebrow="Jogar agora" title="Entre no Purgatório">
        Clique dentro do jogo para usar o teclado. No celular, arraste para mover e use os botões abaixo da tela.
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <GameFrame
          src={gameUrl("game")}
          title="PURGATORIUM — jogo"
          className="h-[1480px] sm:h-[1360px] lg:h-[820px]"
        />

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild variant="gothic" size="lg">
            <a href={`${GAME.file}?tab=game`} target="_blank" rel="noreferrer">
              <Maximize2 /> Abrir em tela cheia
            </a>
          </Button>
          <Button asChild variant="ritual" size="lg">
            <a href={GAME.file} download={GAME.downloadName}>
              <Download /> Baixar o jogo (HTML)
            </a>
          </Button>
        </div>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          O arquivo baixado roda offline em qualquer navegador moderno — basta abrir com dois cliques.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-4xl px-4 sm:px-6">
        <div className="gothic-frame rounded-2xl p-6 sm:p-8">
          <h2 className="font-gothic text-2xl text-gold-bright">Controles</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {CONTROLS.map((c) => (
              <div key={c.keys} className="flex items-center gap-4 rounded-lg border border-border bg-abyss/60 p-3">
                <kbd className="min-w-28 rounded border border-gold/40 bg-secondary px-2 py-1 text-center font-pixel text-xs text-gold-bright">
                  {c.keys}
                </kbd>
                <span className="text-foreground">{c.action}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
