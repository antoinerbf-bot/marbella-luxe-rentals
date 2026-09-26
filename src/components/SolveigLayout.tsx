import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Globe2, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Marbella & Mijas", to: "/zones" },
  { label: "Contact", to: "/contact" },
] as const;

const languages = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
] as const;

function getLocale() {
  if (typeof window === "undefined") return "fr";
  const saved = window.localStorage.getItem("solveig-locale");
  if (saved === "en" || saved === "es" || saved === "fr") return saved;
  return "fr";
}

function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const [locale, setLocale] = useState(getLocale);

  const changeLocale = (value: string) => {
    setLocale(value);
    window.localStorage.setItem("solveig-locale", value);
    window.dispatchEvent(new CustomEvent("solveig-locale-change", { detail: value }));
  };

  const label = locale === "en" ? "EN" : locale === "es" ? "ES" : "FR";

  return (
    <div className={mobile ? "grid grid-cols-3 gap-2" : "flex items-center rounded-full border border-border bg-background/70 p-1"}>
      {languages.map((language) => (
        <button
          key={language.code}
          type="button"
          onClick={() => changeLocale(language.code)}
          aria-pressed={locale === language.code}
          className={`rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-all ${locale === language.code ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
          title={language.name}
        >
          {language.label}
        </button>
      ))}
      {!mobile && <span className="sr-only">{label}</span>}
    </div>
  );
}

export function useSolveigLocale() {
  const [locale, setLocale] = useState(getLocale);

  useEffect(() => {
    const handler = (event: Event) => setLocale((event as CustomEvent<string>).detail);
    window.addEventListener("solveig-locale-change", handler);
    return () => window.removeEventListener("solveig-locale-change", handler);
  }, []);

  return locale as "fr" | "en" | "es";
}

const shellCopy = {
  fr: {
    project: "Parlons de votre projet",
    menu: "Menu",
    close: "Fermer",
    explore: "Explorer",
    contact: "Nous contacter",
    territory: "Marbella · Mijas · Costa del Sol",
    footer: "Gestion de propriété, conciergerie privée et location saisonnière pour les propriétaires qui veulent une présence locale fiable sur la Costa del Sol.",
    firstContact: "Organiser un premier échange",
    services: "Nos services",
    property: "Gestion de propriété",
    concierge: "Conciergerie privée",
    seasonal: "Location saisonnière",
    housekeeping: "Housekeeping & maintenance",
  },
  en: {
    project: "Discuss your property",
    menu: "Menu",
    close: "Close",
    explore: "Explore",
    contact: "Get in touch",
    territory: "Marbella · Mijas · Costa del Sol",
    footer: "Private property management, concierge and seasonal rental support for owners who expect a reliable local presence on the Costa del Sol.",
    firstContact: "Arrange a first conversation",
    services: "Our services",
    property: "Property management",
    concierge: "Private concierge",
    seasonal: "Seasonal rentals",
    housekeeping: "Housekeeping & maintenance",
  },
  es: {
    project: "Hablemos de su propiedad",
    menu: "Menú",
    close: "Cerrar",
    explore: "Explorar",
    contact: "Contactar",
    territory: "Marbella · Mijas · Costa del Sol",
    footer: "Gestión de propiedades, conserjería privada y alquileres de temporada para propietarios que buscan una presencia local fiable en la Costa del Sol.",
    firstContact: "Organizar una primera conversación",
    services: "Nuestros servicios",
    property: "Gestión de propiedad",
    concierge: "Conserjería privada",
    seasonal: "Alquiler de temporada",
    housekeeping: "Housekeeping & mantenimiento",
  },
} as const;

export function SolveigLayout({ children }: { children: ReactNode }) {
  const locale = useSolveigLocale();
  const copy = shellCopy[locale];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-3 max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="glass-nav flex min-h-[68px] items-center justify-between gap-4 rounded-full border border-white/30 px-3 pl-4 shadow-[0_18px_60px_-35px_rgba(0,0,0,.45)] sm:pl-5">
            <Link to="/" className="group flex shrink-0 items-center gap-3" aria-label="Solveig's Prestige Service — Accueil" onClick={() => setMenuOpen(false)}>
              <span className="relative flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <span className="font-display text-lg font-semibold">S</span>
                <span className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full bg-gold ring-2 ring-background" />
              </span>
              <span className="hidden leading-none sm:block">
                <span className="block font-display text-[1.3rem] font-semibold tracking-tight">Solveig’s</span>
                <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.24em] text-muted-foreground">Prestige Service</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeProps={{ className: "bg-primary text-primary-foreground" }}
                  className="rounded-full px-4 py-2.5 text-[12px] font-semibold text-muted-foreground transition-all hover:bg-primary/8 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block"><LanguageSwitcher /></div>
              <Button asChild variant="prestige" size="sm" className="hidden md:inline-flex">
                <Link to="/contact">
                  {copy.project}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </Button>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? copy.close : copy.menu}
                className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground lg:hidden"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="mobile-menu mt-2 rounded-[1.5rem] border border-border bg-background/96 p-4 shadow-2xl backdrop-blur-2xl lg:hidden">
              <div className="grid gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-4 py-4 text-base font-semibold transition-colors hover:bg-surface"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-3 border-t border-border pt-4">
                <LanguageSwitcher mobile />
              </div>
              <Button asChild variant="prestige" size="xl" className="mt-3 w-full">
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  {copy.contact}
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </header>

      <main className="pt-0">{children}</main>

      <footer className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_80%_10%,rgba(214,174,92,.28),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(255,255,255,.08),transparent_26%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1.25fr_.75fr_.75fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full border border-gold/60 bg-white/5 font-display text-lg">S</span>
                <div>
                  <p className="font-display text-3xl font-semibold">Solveig’s</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-foreground/55">Prestige Service</p>
                </div>
              </div>
              <p className="mt-7 max-w-xl text-sm leading-7 text-primary-foreground/68">{copy.footer}</p>
              <Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground hover:text-gold">
                {copy.firstContact}<ArrowRight size={15} />
              </Link>
            </div>

            <div className="space-y-3 text-sm text-primary-foreground/65">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-gold">{copy.services}</p>
              <Link to="/gestion-propriete" className="block hover:text-white">{copy.property}</Link>
              <Link to="/conciergerie" className="block hover:text-white">{copy.concierge}</Link>
              <Link to="/location-saisonniere" className="block hover:text-white">{copy.seasonal}</Link>
              <Link to="/services/housekeeping" className="block hover:text-white">{copy.housekeeping}</Link>
            </div>

            <div className="space-y-4 text-sm text-primary-foreground/65">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-gold">{copy.territory}</p>
              <p className="leading-7">Marbella · Mijas · Mijas Costa · La Cala · Calahonda · Riviera del Sol</p>
              <div className="flex items-center gap-2 text-primary-foreground/80"><Check size={15} className="text-gold" /> Service discret et sur mesure</div>
              <div className="flex items-center gap-2 text-primary-foreground/80"><Globe2 size={15} className="text-gold" /> FR · EN · ES</div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.12em] text-primary-foreground/40 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Solveig’s Prestige Service</span>
            <span>{copy.territory}</span>
          </div>
        </div>
      </footer>

      <a
        href="#contact"
        aria-label={copy.contact}
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl ring-1 ring-white/15 transition-transform hover:scale-105"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-surface pt-28">
      <div className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-0 size-96 rounded-full bg-coast/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-5xl">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold"><span className="h-px w-10 bg-gold" />{eyebrow}</p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[.88] tracking-[-.025em] text-balance sm:text-7xl md:text-[6.5rem]">{title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{description}</p>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  return (
    <div className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-px px-5 py-0 sm:px-8 md:grid-cols-3 lg:px-10">
        {[
          ["01", "Présence locale", "Une vraie connaissance du terrain"],
          ["02", "Standards premium", "Chaque détail compte"],
          ["03", "Suivi propriétaire", "Une communication claire à distance"],
        ].map(([number, title, text]) => (
          <div key={number} className="flex gap-4 border-b border-border py-6 last:border-0 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
            <span className="font-display text-xl text-gold">{number}</span>
            <div><p className="text-sm font-bold">{title}</p><p className="mt-1 text-xs text-muted-foreground">{text}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactBand() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_85%_15%,rgba(211,174,96,.24),transparent_26%),linear-gradient(115deg,transparent,rgba(255,255,255,.04))]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10 lg:py-32">
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/60"><span className="h-px w-10 bg-gold" />Premier échange</p>
          <h2 className="mt-5 font-display text-5xl font-semibold leading-[.9] text-balance md:text-7xl">Votre propriété mérite une présence à sa hauteur.</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/65">Décrivez-nous votre bien, votre rythme de présence et vos attentes. Nous construirons le niveau d’accompagnement adapté.</p>
        </div>
        <Button asChild variant="secondary" size="xl" className="group">
          <Link to="/contact">Demander un échange <ArrowRight className="transition-transform group-hover:translate-x-1" /></Link>
        </Button>
      </div>
    </section>
  );
}
