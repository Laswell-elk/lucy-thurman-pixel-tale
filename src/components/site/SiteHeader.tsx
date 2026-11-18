import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/jogar", label: "Jogar" },
  { to: "/grimorio", label: "Grimório" },
  { to: "/guia", label: "Guia" },
  { to: "/criadora", label: "Criadora" },
  { to: "/press-kit", label: "Press Kit" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 bg-secondary font-gothic text-lg text-gold-bright shadow-violet">
            ✦
          </span>
          <span className="leading-none">
            <span className="block font-gothic text-lg font-bold tracking-wider text-gold-bright text-glow-gold sm:text-xl">
              PURGATORIUM
            </span>
            <span className="mt-1 block font-pixel text-[10px] uppercase tracking-[0.2em] text-crimson-bright">
              Requiem of the Pale Soul
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 font-title text-sm tracking-wider text-muted-foreground transition-colors hover:text-gold-bright data-[status=active]:text-gold-bright data-[status=active]:text-glow-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ritual" size="sm" className="hidden sm:inline-flex">
            <Link to="/jogar">⚔ Jogar agora</Link>
          </Button>
          <Button
            variant="gothic"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 font-title tracking-wider text-muted-foreground hover:bg-secondary hover:text-gold-bright data-[status=active]:bg-secondary data-[status=active]:text-gold-bright"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
