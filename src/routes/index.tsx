import { createFileRoute, Link } from "@tanstack/react-router";
import { Ghost, Shield, Timer } from "lucide-react";

import { Embers } from "@/components/site/Embers";
import { GameFrame } from "@/components/site/GameFrame";
import { SectionTitle } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { CHARACTERS, CREATOR, GAME, gameUrl } from "@/lib/game";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PURGATORIUM: Requiem of the Pale Soul — Jogue grátis" },
      {
        name: "description",
        content:
          "Sobreviva 3 minutos no Purgatório. Bullet hell gótico em pixel art de Lucy Thurman, jogável direto no navegador.",
      },
      { property: "og:title", content: "PURGATORIUM: Requiem of the Pale Soul" },
      {
        property: "og:description",
        content: "Bullet hell gótico de sobrevivência. Jogue grátis no navegador.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PILLARS = [
  {
    icon: Timer,
    title: "3 minutos de ritual",
    text: "Não há vitória pela força. Resista até o relógio chegar a zero e a alma será libertada.",
  },
  {
    icon: Ghost,
    title: "Sem disparar",
    text: "Elise não ataca. Desvie, raspe nos projéteis para carregar poder e sobreviva à sinfonia.",
  },
  {
    icon: Shield,
    title: "Parry & Purificação",
    text: "Devolva projéteis com o Pulso Espiritual e limpe a tela com a Purificação Total.",
  },
];

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={GAME.heroImg}
          alt="Elise em pixel art caminhando pela Catedral das Cinzas"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 -z-10 bg-veil" />
        <Embers />
        <div className="mx-auto flex min-h-[86vh] max-w-7xl flex-col items-center justify-end px-4 pb-20 text-center sm:px-6">
          <p className="font-pixel text-xs uppercase tracking-[0.35em] text-crimson-bright">
            Bullet Hell gótico • Danmaku de sobrevivência
          </p>
          <h1 className="mt-5 font-gothic text-5xl font-black tracking-wider text-gold-bright text-glow-gold sm:text-7xl lg:text-8xl">
            PURGATORIUM
          </h1>
          <p className="mt-3 font-title text-lg tracking-[0.3em] text-foreground sm:text-2xl">
            REQUIEM OF THE PALE SOUL
          </p>
          <p className="mt-6 max-w-xl text-xl text-muted-foreground">
            Uma alma sem armas. Três guardiãs. Três minutos para atravessar o Purgatório.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="ritual" size="xl">
              <Link to="/jogar">✦ Iniciar ritual</Link>
            </Button>
            <Button asChild variant="gothic" size="xl">
              <Link to="/grimorio">Ler o Grimório</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="O ritual" title="Sobreviver é a única absolvição" />
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="gothic-frame rounded-2xl p-7">
              <Icon className="h-8 w-8 text-crimson-bright" />
              <h3 className="mt-4 font-title text-xl tracking-wider text-gold-bright">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <SectionTitle eyebrow="Trailer" title="Veja a Alma Pálida em ação" />
        <GameFrame src={gameUrl("trailer")} title="Trailer de PURGATORIUM" className="h-[440px] sm:h-[640px]" />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="Personagens" title="As almas do Purgatório" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {CHARACTERS.map((c) => (
            <Link
              key={c.id}
              to="/grimorio"
              hash={c.id}
              className="group gothic-frame overflow-hidden rounded-2xl"
            >
              <img
                src={c.image}
                alt={`${c.name}, ${c.epithet}, em pixel art`}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-4">
                <p className="font-pixel text-[10px] uppercase tracking-widest text-crimson-bright">{c.role}</p>
                <p className="mt-1 font-gothic text-lg text-gold-bright">{c.name}</p>
                <p className="text-sm italic text-muted-foreground">{c.epithet}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 text-center sm:px-6">
        <div className="gothic-frame rounded-3xl px-6 py-14">
          <h2 className="font-gothic text-3xl text-gold-bright text-glow-gold sm:text-4xl">
            O Purgatório espera
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Grátis, direto no navegador, no computador ou no celular. Criado por {CREATOR.name}.
          </p>
          <Button asChild variant="ritual" size="xl" className="mt-8">
            <Link to="/jogar">⚔ Entrar no Purgatório</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
