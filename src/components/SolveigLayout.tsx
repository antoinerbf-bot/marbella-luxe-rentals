import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, MapPin, Menu, ShieldCheck, Sparkles } from "lucide-react";
import { type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Marbella & Mijas", to: "/zones" },
  { label: "À propos", to: "/contact" },
] as const;

export function SolveigLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
          <Link to="/" className="group flex shrink-0 items-center gap-3" aria-label="Solveig's Prestige Service — Accueil">
            <span className="relative flex size-11 items-center justify-center rounded-full border border-gold/70 bg-primary text-primary-foreground shadow-soft">
              <span className="font-display text-lg font-semibold tracking-tight">S</span>
              <span className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full bg-gold" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[1.35rem] font-semibold tracking-tight">Solveig’s</span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Prestige Service
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-[13px] font-semibold text-muted-foreground lg:flex" aria-label="Navigation principale">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-foreground" }}
                className="relative py-3 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden rounded-full border border-border bg-surface px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground sm:inline-flex">
              FR
            </span>
            <Button asChild variant="prestige" size="sm" className="hidden sm:inline-flex">
              <Link to="/contact">
                Parlons de votre projet
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="coastal" size="sm" className="lg:hidden" aria-label="Ouvrir la navigation">
              <Link to="/services">
                <Menu size={18} aria-hidden="true" />
                <span className="sr-only">Menu</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-primary-foreground/10 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.7fr_0.7fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full border border-gold/60 bg-primary-foreground/5 font-display text-lg">S</span>
                <div>
                  <p className="font-display text-3xl font-semibold">Solveig’s</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-foreground/55">Prestige Service</p>
                </div>
              </div>
              <p className="mt-6 max-w-lg text-sm leading-7 text-primary-foreground/70">
                Gestion de propriété, conciergerie privée et location saisonnière pour les propriétaires qui veulent une présence locale fiable sur la Costa del Sol.
              </p>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground transition-colors hover:text-gold">
                Organiser un premier échange
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="space-y-4 text-sm text-primary-foreground/70">
              <p className="font-semibold text-primary-foreground">Explorer</p>
              <Link to="/services" className="block transition-colors hover:text-primary-foreground">Nos services</Link>
              <Link to="/gestion-propriete" className="block transition-colors hover:text-primary-foreground">Gestion de propriété</Link>
              <Link to="/conciergerie" className="block transition-colors hover:text-primary-foreground">Conciergerie privée</Link>
              <Link to="/location-saisonniere" className="block transition-colors hover:text-primary-foreground">Location saisonnière</Link>
            </div>

            <div className="space-y-4 text-sm text-primary-foreground/70">
              <p className="font-semibold text-primary-foreground">Territoire</p>
              <p className="leading-6">Marbella · Mijas · Mijas Costa · La Cala · Calahonda · Riviera del Sol</p>
              <p className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin size={15} aria-hidden="true" />
                Costa del Sol, Espagne
              </p>
              <p className="flex items-center gap-2 text-primary-foreground/80">
                <Sparkles size={15} aria-hidden="true" />
                Service discret et sur mesure
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/10 pt-6 text-[11px] text-primary-foreground/45 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Solveig’s Prestige Service</span>
            <span>Marbella · Mijas · Costa del Sol</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-soft">
      <div className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-72 rounded-full bg-coast/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-gold">
            <span className="h-px w-8 bg-gold" />
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.92] tracking-tight text-balance text-foreground sm:text-6xl md:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{description}</p>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <div className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-6 text-sm font-semibold text-muted-foreground sm:px-8 md:grid-cols-3 lg:px-10">
        {[
          ["Présence locale", "Une vraie connaissance du terrain"],
          ["Standards premium", "Chaque détail compte"],
          ["Suivi propriétaire", "Une communication claire à distance"],
        ].map(([title, text]) => (
          <div key={title} className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 shrink-0 text-coast" size={19} aria-hidden="true" />
            <div>
              <p className="text-foreground">{title}</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full border border-gold/20" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 size-96 rounded-full border border-primary-foreground/10" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/65">
            <span className="h-px w-8 bg-gold" />
            Premier échange
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.94] text-balance md:text-6xl">
            Votre propriété mérite une présence à sa hauteur.
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-primary-foreground/70">
            Décrivez-nous votre bien, votre rythme de présence et vos attentes. Nous construirons le niveau d’accompagnement adapté.
          </p>
        </div>
        <Button asChild variant="secondary" size="xl" className="group">
          <Link to="/contact">
            Demander un échange
            <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
