import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero, SectionTitle } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { ACTS, CHARACTERS, type Character } from "@/lib/game";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/grimorio")({
  head: () => ({
    meta: [
      { title: "Grimório — A lore de PURGATORIUM" },
      {
        name: "description",
        content:
          "A história de Elise, a Criança do Véu Branco, e das três guardiãs do Purgatório: Seraphina, Carmilla e Beatrice.",
      },
      { property: "og:title", content: "Grimório do Purgatório" },
      { property: "og:description", content: "A lore de Elise e das três guardiãs góticas." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GrimoirePage,
});

const TONE: Record<Character["tone"], string> = {
  ethereal: "text-ethereal border-ethereal/40",
  violet: "text-violet border-violet/40",
  crimson: "text-crimson-bright border-crimson-bright/40",
  gold: "text-gold-bright border-gold-bright/40",
};

function GrimoirePage() {
  return (
    <>
      <PageHero eyebrow="Registros arcanos" title="Grimório do Purgatório">
        Entre o último suspiro e o descanso eterno existe um lugar feito de cinzas, sangue e luz. Lá, uma alma
        pálida desperta — e precisa atravessá-lo sem empunhar uma única arma.
      </PageHero>

      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="gothic-frame space-y-5 rounded-2xl p-7 text-lg leading-relaxed sm:p-10 sm:text-xl">
          <p>
            <span className="float-left mr-3 font-gothic text-6xl leading-none text-crimson-bright">O</span>
            Purgatório não pune: ele <em>retém</em>. Cada alma que chega é recebida por três guardiãs que um
            dia também foram almas perdidas, e que agora decidem quem merece seguir adiante.
          </p>
          <p className="text-muted-foreground">
            Elise chegou vestida de branco, sem memória e sem armas. As guardiãs a chamam de
            <strong className="text-gold-bright"> Alma Pálida</strong>. Para elas, quem não luta não pode
            vencer. Mas Elise não precisa vencer — precisa apenas <strong className="text-foreground">resistir por três minutos</strong>,
            o tempo de um réquiem inteiro.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="A jornada" title="Os três atos" />
        <div className="grid gap-6 md:grid-cols-3">
          {ACTS.map((a) => (
            <div key={a.numeral} className="gothic-frame rounded-2xl p-7">
              <p className="font-gothic text-5xl text-crimson-bright text-glow-crimson">{a.numeral}</p>
              <h3 className="mt-3 font-title text-xl tracking-wider text-gold-bright">{a.name}</h3>
              <p className="font-pixel text-[10px] uppercase tracking-widest text-muted-foreground">
                Guardiã: {a.guardian}
              </p>
              <p className="mt-3 text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
        <SectionTitle eyebrow="Personagens" title="Fichas das almas" />
        {CHARACTERS.map((c, i) => (
          <article
            id={c.id}
            key={c.id}
            className={cn(
              "gothic-frame grid scroll-mt-28 items-center gap-8 overflow-hidden rounded-2xl p-4 sm:p-6 md:grid-cols-5",
            )}
          >
            <img
              src={c.image}
              alt={`${c.name}, ${c.epithet}, em pixel art`}
              loading="lazy"
              className={cn(
                "aspect-[3/4] w-full rounded-xl border object-cover md:col-span-2",
                TONE[c.tone],
                i % 2 === 1 && "md:order-2",
              )}
            />
            <div className="space-y-4 md:col-span-3">
              <span className={cn("inline-block rounded-full border px-3 py-1 font-pixel text-[10px] uppercase tracking-widest", TONE[c.tone])}>
                {c.role}
              </span>
              <h3 className="font-gothic text-3xl text-gold-bright sm:text-4xl">{c.name}</h3>
              <p className="font-title text-lg italic tracking-wide text-muted-foreground">{c.epithet}</p>
              {c.act && <p className="font-pixel text-xs uppercase tracking-widest text-crimson-bright">{c.act}</p>}
              <p className="text-lg leading-relaxed">{c.lore}</p>
              <p className="text-muted-foreground">{c.summary}</p>
              {c.spellCard && (
                <p className={cn("font-title tracking-wide", TONE[c.tone])}>Spell Card: {c.spellCard}</p>
              )}
            </div>
          </article>
        ))}
      </section>

      <div className="mt-16 text-center">
        <Button asChild variant="ritual" size="xl">
          <Link to="/jogar">⚔ Enfrente as guardiãs</Link>
        </Button>
      </div>
    </>
  );
}
