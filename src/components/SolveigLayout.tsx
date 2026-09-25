import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Marbella & Mijas", to: "/zones" },
  { label: "Contact", to: "/contact" },
] as const;

export function SolveigLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/88 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link to="/" className="group flex items-center gap-3" aria-label="Solveig's Prestige Service">
            <span className="flex size-11 items-center justify-center rounded-md bg-primary text-base font-semibold text-primary-foreground shadow-soft">
              SP
            </span>
            <span className="leading-tight">
              <span className="block font-display text-xl font-semibold">Solveig’s</span>
              <span className="block text-xs font-semibold uppercase tracking-normal text-muted-foreground">
                Prestige Service
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-foreground" }}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button asChild variant="coastal" size="sm">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          <Button asChild variant="coastal" size="sm" className="md:hidden">
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
          <div>
            <p className="font-display text-3xl font-semibold">Solveig’s Prestige Service</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-primary-foreground/78">
              Gestion locative élégante et rigoureuse pour propriétaires exigeants sur la Costa del Sol.
            </p>
          </div>
          <div className="space-y-3 text-sm text-primary-foreground/80">
            <p className="font-semibold text-primary-foreground">Zones</p>
            <p>Marbella, Mijas, Mijas Costa, La Cala, Calahonda, Riviera del Sol.</p>
          </div>
          <div className="space-y-3 text-sm text-primary-foreground/80">
            <p className="font-semibold text-primary-foreground">Contact</p>
            <p>Coordonnées à ajouter pour recevoir les demandes propriétaires.</p>
            <p className="flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" />
              Marbella & Mijas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-normal text-gold">{eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-none text-balance text-foreground md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">{description}</p>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <div className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 text-sm font-semibold text-muted-foreground sm:px-8 md:grid-cols-3 lg:px-10">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-coast" size={20} aria-hidden="true" />
          Intendance locale et bilingue
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-coast" size={20} aria-hidden="true" />
          Standards hôteliers pour chaque séjour
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-coast" size={20} aria-hidden="true" />
          Suivi clair pour propriétaires absents
        </div>
      </div>
    </div>
  );
}

export function ContactBand() {
  return (
    <section className="bg-gradient-hero text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-normal text-primary-foreground/70">Premier échange</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
            Confiez votre bien à une présence locale fiable.
          </h2>
        </div>
        <Button asChild variant="secondary" size="xl">
          <Link to="/contact">
            Demander un audit
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}