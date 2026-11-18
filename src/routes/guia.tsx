import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero, SectionTitle } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { DIFFICULTIES } from "@/lib/game";

export const Route = createFileRoute("/guia")({
  head: () => ({
    meta: [
      { title: "Guia de sobrevivência — PURGATORIUM" },
      {
        name: "description",
        content: "Mecânicas, controles, dificuldades e dicas para sobreviver 3 minutos em PURGATORIUM.",
      },
      { property: "og:title", content: "Guia de sobrevivência — PURGATORIUM" },
      { property: "og:description", content: "Parry, Bomb, Graze e dicas para sobreviver ao Purgatório." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GuidePage,
});

const MECHANICS = [
  {
    name: "Graze",
    key: "Passivo",
    text: "Passar raspando nos projéteis rende pontos e carrega o medidor de Risco. Quanto mais perto do perigo, mais poder.",
  },
  {
    name: "Parry — Pulso Espiritual",
    key: "Espaço",
    text: "Absorve projéteis próximos e os reflete contra a guardiã. Recarga de 3 segundos. Lasers não podem ser refletidos.",
  },
  {
    name: "Bomb — Purificação Total",
    key: "E",
    text: "Apaga todos os projéteis da tela, atordoa a guardiã e dá alguns segundos de invulnerabilidade. Você começa com 2 (máx. 5).",
  },
  {
    name: "Foco",
    key: "Shift",
    text: "Movimento lento e preciso para atravessar padrões densos. Sua área de colisão é minúscula — confie nela.",
  },
];

const FAQ = [
  {
    q: "Preciso instalar alguma coisa?",
    a: "Não. O jogo roda direto no navegador. Se preferir, baixe o arquivo na página Jogar e abra offline.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. Arraste o dedo na tela para mover e use os botões de Foco, Parry e Bomb abaixo do jogo.",
  },
  {
    q: "Como venço?",
    a: "Sobrevivendo até o relógio de 3:00 chegar a zero. Você tem 3 vidas e enfrenta as três guardiãs em sequência.",
  },
  {
    q: "O jogo tem som?",
    a: "Sim, uma trilha gótica gerada em tempo real. Ative pelo botão de som dentro do jogo.",
  },
];

function GuidePage() {
  return (
    <>
      <PageHero eyebrow="Manual da alma" title="Guia de sobrevivência">
        Tudo o que Elise precisa saber para resistir ao réquiem.
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {MECHANICS.map((m) => (
            <div key={m.name} className="gothic-frame rounded-2xl p-7">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-title text-xl tracking-wider text-gold-bright">{m.name}</h3>
                <kbd className="rounded border border-gold/40 bg-secondary px-2 py-1 font-pixel text-xs text-gold-bright">
                  {m.key}
                </kbd>
              </div>
              <p className="mt-3 text-muted-foreground">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="Dificuldades" title="Escolha sua penitência" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFICULTIES.map((d, i) => (
            <div key={d.name} className="gothic-frame rounded-2xl p-6 text-center">
              <p className="font-pixel text-xs text-crimson-bright">{"✦".repeat(i + 1)}</p>
              <h3 className="mt-2 font-gothic text-xl text-gold-bright">{d.name}</h3>
              <p className="mt-2 text-muted-foreground">{d.desc}</p>
              <p className="mt-3 font-pixel text-xs text-ethereal">Pontos {d.mult}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
        <Accordion type="single" collapsible className="gothic-frame rounded-2xl px-6">
          {FAQ.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="font-title text-lg tracking-wide text-gold-bright hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 text-center">
          <Button asChild variant="ritual" size="xl">
            <Link to="/jogar">Pôr em prática</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
