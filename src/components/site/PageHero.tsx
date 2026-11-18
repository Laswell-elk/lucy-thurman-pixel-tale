import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-14 pb-10 text-center sm:px-6 sm:pt-20">
      <p className="font-pixel text-xs uppercase tracking-[0.3em] text-crimson-bright">{eyebrow}</p>
      <h1 className="mt-4 font-gothic text-3xl font-bold text-gold-bright text-glow-gold sm:text-5xl">
        {title}
      </h1>
      <div className="ornament mx-auto mt-6 max-w-xs text-sm">❖</div>
      {children && (
        <div className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">{children}</div>
      )}
    </section>
  );
}

export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="font-pixel text-xs uppercase tracking-[0.3em] text-crimson-bright">{eyebrow}</p>
      <h2 className="mt-3 font-gothic text-2xl text-gold-bright text-glow-gold sm:text-4xl">{title}</h2>
    </div>
  );
}
