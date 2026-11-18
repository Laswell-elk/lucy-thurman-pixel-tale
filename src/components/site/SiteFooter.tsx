import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

import { CREATOR, GAME } from "@/lib/game";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-abyss/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-2">
          <p className="font-gothic text-xl text-gold-bright text-glow-gold">PURGATORIUM</p>
          <p className="text-muted-foreground">
            {GAME.subtitle}. Um bullet hell gótico de pura sobrevivência.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 font-title text-sm tracking-wider">
          <Link to="/jogar" className="text-muted-foreground hover:text-gold-bright">Jogar</Link>
          <Link to="/grimorio" className="text-muted-foreground hover:text-gold-bright">Grimório</Link>
          <Link to="/guia" className="text-muted-foreground hover:text-gold-bright">Guia</Link>
          <Link to="/criadora" className="text-muted-foreground hover:text-gold-bright">Criadora</Link>
          <Link to="/press-kit" className="text-muted-foreground hover:text-gold-bright">Press Kit</Link>
        </div>
        <div className="space-y-2 md:text-right">
          <p className="font-title text-sm tracking-wider text-muted-foreground">Criado por</p>
          <p className="font-gothic text-lg text-gold-bright">{CREATOR.name}</p>
          <a
            href={CREATOR.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-crimson-bright hover:text-gold-bright"
          >
            <Instagram className="h-4 w-4" /> {CREATOR.instagram}
          </a>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center font-pixel text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        © {new Date().getFullYear()} {CREATOR.name} • Todos os direitos reservados
      </div>
    </footer>
  );
}
