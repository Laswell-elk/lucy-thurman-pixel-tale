import { createFileRoute } from "@tanstack/react-router";
import { Download, Instagram } from "lucide-react";

import { PageHero, SectionTitle } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { CHARACTERS, CREATOR, GAME } from "@/lib/game";

export const Route = createFileRoute("/press-kit")({
  head: () => ({
    meta: [
      { title: "Press Kit — PURGATORIUM: Requiem of the Pale Soul" },
      {
        name: "description",
        content: "Ficha técnica, descrição, recursos e imagens oficiais de PURGATORIUM para imprensa e criadores.",
      },
      { property: "og:title", content: "Press Kit — PURGATORIUM" },
      { property: "og:description", content: "Ficha técnica e imagens oficiais para imprensa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PressKitPage,
});

const FACTS = [
  ["Título", "PURGATORIUM: Requiem of the Pale Soul"],
  ["Criadora", CREATOR.name],
  ["Gênero", "Bullet Hell / Danmaku de sobrevivência"],
  ["Plataforma", "Navegador (computador e celular)"],
  ["Duração da partida", "3 minutos"],
  ["Idioma", "Português (Brasil)"],
  ["Preço", "Gratuito"],
  ["Contato", CREATOR.instagram],
];

const FEATURES = [
  "Sobrevivência pura: a protagonista não dispara",
  "Três guardiãs com Spell Cards e padrões próprios",
  "Parry que reflete projéteis e Bomb de purificação total",
  "Sistema de Graze com medidor de Risco",
  "Quatro dificuldades: Fácil, Médio, Difícil e Lunático",
  "Trilha sonora gótica gerada em tempo real",
];

function PressKitPage() {
  const assets = [{ name: "Arte de capa", src: GAME.heroImg, file: "purgatorium-capa.jpg" }].concat(
    CHARACTERS.map((c) => ({ name: c.name, src: c.image, file: `purgatorium-${c.id}.jpg` })),
  );

  return (
    <>
      <PageHero eyebrow="Imprensa & criadores" title="Press Kit">
        Informações oficiais e imagens liberadas para matérias, vídeos e transmissões.
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-5">
        <div className="gothic-frame rounded-2xl p-7 lg:col-span-2">
          <h2 className="font-gothic text-xl text-gold-bright">Ficha técnica</h2>
          <dl className="mt-5 divide-y divide-border">
            {FACTS.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2.5">
                <dt className="font-pixel text-[10px] uppercase tracking-widest text-muted-foreground">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="gothic-frame space-y-5 rounded-2xl p-7 lg:col-span-3">
          <h2 className="font-gothic text-xl text-gold-bright">Descrição</h2>
          <p className="text-lg leading-relaxed">
            Em PURGATORIUM, você é Elise, uma alma pálida sem armas presa entre a vida e o descanso eterno.
            Três guardiãs góticas — Seraphina, Carmilla e Beatrice — tentam retê-la com sinfonias de
            projéteis. A única saída é resistir por três minutos.
          </p>
          <h3 className="font-title tracking-wider text-gold-bright">Destaques</h3>
          <ul className="space-y-2">
            {FEATURES.map((f) => (
              <li key={f} className="flex gap-3 text-muted-foreground">
                <span className="text-crimson-bright">✦</span> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="Recursos" title="Imagens oficiais" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {assets.map((a) => (
            <a
              key={a.file}
              href={a.src}
              download={a.file}
              className="group gothic-frame overflow-hidden rounded-xl"
            >
              <img src={a.src} alt={a.name} loading="lazy" className="aspect-[3/4] w-full object-cover" />
              <div className="flex items-center justify-between p-3">
                <span className="font-title text-sm text-gold-bright">{a.name}</span>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-gold-bright" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button asChild variant="ritual" size="lg">
            <a href={GAME.file} download={GAME.downloadName}>
              <Download /> Baixar build do jogo
            </a>
          </Button>
          <Button asChild variant="gothic" size="lg">
            <a href={CREATOR.instagramUrl} target="_blank" rel="noreferrer">
              <Instagram /> Falar com a criadora
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
