const EMBERS = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 2 + (i % 3),
  duration: 9 + ((i * 7) % 9),
  delay: (i * 1.3) % 10,
  tone: i % 3,
}));

const TONES = ["bg-crimson-bright", "bg-gold", "bg-violet"];

export function Embers() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {EMBERS.map((e, i) => (
        <span
          key={i}
          className={`animate-ember absolute bottom-0 ${TONES[e.tone]}`}
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
