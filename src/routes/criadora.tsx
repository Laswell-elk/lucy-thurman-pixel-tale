import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { CREATOR } from "@/lib/game";
import perfilAsset from "@/assets/criadora-perfil.jpg.asset.json";

export const Route = createFileRoute("/criadora")({
  head: () => ({
    meta: [
      { title: "Lucy Thurman — Criadora de PURGATORIUM" },
      {
        name: "description",
        content: "Conheça Lucy Thurman, criadora do bullet hell gótico PURGATORIUM: Requiem of the Pale Soul.",
      },
      { property: "og:title", content: "Lucy Thurman — Criadora de PURGATORIUM" },
      { property: "og:description", content: "Sobre a criadora e como entrar em contato." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CreatorPage,
});

const VALUES = [
  { title: "Atmosfera primeiro", text: "Cada cor, som e padrão de projétil existe para contar a história." },
  { title: "Desafio honesto", text: "Padrões legíveis, colisão justa e quatro níveis para todos os jogadores." },
  { title: "Feito para a web", text: "Um único arquivo, sem instalação, que roda em qualquer navegador." },
];

function CreatorPage() {
  return (
    <>
      <PageHero eyebrow="Sobre a criadora" title={CREATOR.name}>
        Desenvolvedora independente e autora de PURGATORIUM: Requiem of the Pale Soul.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-5">
        <div className="gothic-frame flex flex-col items-center rounded-2xl p-8 text-center md:col-span-2">
          <div className="animate-soft-float h-36 w-36 overflow-hidden rounded-full border-2 border-gold/60 bg-secondary shadow-violet">
            <img
              src={perfilAsset.url}
              alt={`Foto de perfil de ${CREATOR.name}`}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className="mt-6 font-gothic text-2xl text-gold-bright">{CREATOR.name}</h2>
          <p className="font-pixel text-[10px] uppercase tracking-widest text-crimson-bright">Game Developer</p>
          <Button asChild variant="ritual" size="lg" className="mt-6">
            <a href={CREATOR.instagramUrl} target="_blank" rel="noreferrer">
              <Instagram /> {CREATOR.instagram}
            </a>
          </Button>
        </div>

        <div className="gothic-frame space-y-5 rounded-2xl p-8 text-lg leading-relaxed md:col-span-3">
          <h3 className="font-title text-xl tracking-wider text-gold-bright">A visão</h3>
          <p>
            PURGATORIUM nasceu da vontade de unir a intensidade dos bullet hells clássicos a uma estética
            gótica, melancólica e delicada. Em vez de uma heroína armada, uma alma que só pode resistir.
          </p>
          <p className="text-muted-foreground">
            Todo o jogo — trailer, trilha sonora, personagens e padrões de Danmaku — é gerado em tempo real
            dentro de um único arquivo, pensado para ser jogado em qualquer lugar.
          </p>
          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-lg border border-border bg-abyss/60 p-4">
                <p className="font-title text-sm tracking-wider text-gold-bright">{v.title}</p>
                <p className="mt-1 text-base text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-4 text-center sm:px-6">
        <div className="gothic-frame rounded-2xl p-10">
          <Mail className="mx-auto h-8 w-8 text-crimson-bright" />
          <h2 className="mt-4 font-gothic text-2xl text-gold-bright">Contato & parcerias</h2>
          <p className="mt-3 text-muted-foreground">
            Imprensa, criadores de conteúdo, eventos ou parcerias: mande uma mensagem direta no Instagram.
          </p>
          <a
            href={CREATOR.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block font-title text-lg tracking-wider text-crimson-bright hover:text-gold-bright"
          >
            instagram.com/{CREATOR.instagram.slice(1)}
          </a>
        </div>
      </section>
    </>
  );
}
