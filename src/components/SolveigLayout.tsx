import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Globe2, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { UniverseLanguageMenu } from "@/components/UniverseLanguageMenu";
import { useSolveigLocale, type AppLocale } from "@/lib/locale";

const navigation = [
  { label: "home", to: "/" },
  { label: "navServices", to: "/services" },
  { label: "zones", to: "/zones" },
  { label: "contact", to: "/contact" },
] as const;

const contact = {
  phone: "+34 623 626 724",
  tel: "tel:+34623626724",
  email: "solveighybord@gmail.com",
  mailto: "mailto:solveighybord@gmail.com",
};

const whatsappMessages: Record<AppLocale, string> = {
  fr: "Bonjour, je souhaite discuter de la gestion de mon bien à Marbella ou Mijas.",
  en: "Hello, I’d like to discuss property management in Marbella or Mijas.",
  es: "Hola, me gustaría hablar sobre la gestión de mi propiedad en Marbella o Mijas.",
  ar: "مرحباً، أود التحدث عن إدارة عقاري في ماربيا أو ميخاس.",
};

function getWhatsappLink(locale: AppLocale) {
  return `https://wa.me/34623626724?text=${encodeURIComponent(whatsappMessages[locale])}`;
}

export function Logo({ light = false, large = false }: { light?: boolean; large?: boolean }) {
  return (
    <span
      className={`solveig-logo flex flex-col items-center ${light ? "text-[#fff7e8]" : "text-foreground"}`}
    >
      <span
        className={`solveig-wordmark font-display leading-none ${large ? "text-5xl" : "text-3xl"}`}
      >
        Solveig’s
      </span>
      <span
        className={`mt-2 text-[7px] font-bold uppercase tracking-[0.38em] ${light ? "text-[#d9c8ab]" : "text-muted-foreground"}`}
      >
        PRESTIGE SERVICE
      </span>
    </span>
  );
}

const shellCopy = {
  fr: {
    project: "Parlons de votre projet",
    morocco: "Séjours au Maroc",
    discoverMorocco: "Découvrir le Maroc",
    menu: "Menu",
    close: "Fermer",
    explore: "Explorer",
    contact: "Nous contacter",
    territory: "Marbella · Mijas · Costa del Sol",
    footer:
      "Gestion de propriété, conciergerie privée et location saisonnière pour les propriétaires qui veulent une présence locale fiable sur la Costa del Sol.",
    firstContact: "Organiser un premier échange",
    services: "Nos services",
    property: "Gestion de propriété",
    concierge: "Conciergerie privée",
    seasonal: "Location saisonnière",
    housekeeping: "Housekeeping & maintenance",
    home: "Accueil",
    navServices: "Services",
    zones: "Marbella & Mijas",
    discreetService: "Service discret et sur mesure",
    languages: "FR · EN · ES · AR",
    whatsapp: "WhatsApp",
  },
  en: {
    project: "Discuss your property",
    morocco: "Stays in Morocco",
    discoverMorocco: "Discover Morocco",
    menu: "Menu",
    close: "Close",
    explore: "Explore",
    contact: "Get in touch",
    territory: "Marbella · Mijas · Costa del Sol",
    footer:
      "Private property management, concierge and seasonal rental support for owners who expect a reliable local presence on the Costa del Sol.",
    firstContact: "Arrange a first conversation",
    services: "Our services",
    property: "Property management",
    concierge: "Private concierge",
    seasonal: "Seasonal rentals",
    housekeeping: "Housekeeping & maintenance",
    home: "Home",
    navServices: "Services",
    zones: "Marbella & Mijas",
    discreetService: "Discreet, tailored service",
    languages: "FR · EN · ES · AR",
    whatsapp: "WhatsApp",
  },
  es: {
    project: "Hablemos de su propiedad",
    morocco: "Estancias en Marruecos",
    discoverMorocco: "Descubrir Marruecos",
    menu: "Menú",
    close: "Cerrar",
    explore: "Explorar",
    contact: "Contactar",
    territory: "Marbella · Mijas · Costa del Sol",
    footer:
      "Gestión de propiedades, conserjería privada y alquileres de temporada para propietarios que buscan una presencia local fiable en la Costa del Sol.",
    firstContact: "Organizar una primera conversación",
    services: "Nuestros servicios",
    property: "Gestión de propiedad",
    concierge: "Conserjería privada",
    seasonal: "Alquiler de temporada",
    housekeeping: "Housekeeping & mantenimiento",
    home: "Inicio",
    navServices: "Servicios",
    zones: "Marbella y Mijas",
    discreetService: "Servicio discreto y a medida",
    languages: "FR · EN · ES · AR",
    whatsapp: "WhatsApp",
  },
  ar: {
    project: "لنتحدث عن مشروعك",
    morocco: "إقامات في المغرب",
    discoverMorocco: "اكتشف المغرب",
    menu: "القائمة",
    close: "إغلاق",
    explore: "اكتشف",
    contact: "تواصل معنا",
    territory: "ماربيا · ميخاس · كوستا ديل سول",
    footer:
      "إدارة العقارات وخدمات الكونسيرج والتأجير الموسمي مع حضور محلي موثوق على كوستا ديل سول.",
    firstContact: "رتّب محادثة أولى",
    services: "خدماتنا",
    property: "إدارة العقارات",
    concierge: "كونسيرج خاص",
    seasonal: "إيجارات موسمية",
    housekeeping: "التنظيف والصيانة",
    home: "الرئيسية",
    navServices: "الخدمات",
    zones: "ماربيا وميخاس",
    discreetService: "خدمة خاصة وسرية",
    languages: "FR · EN · ES · AR",
    whatsapp: "واتساب",
  },
} as const;

export function SolveigLayout({ children }: { children: ReactNode }) {
  const locale = useSolveigLocale();
  const copy = shellCopy[locale];
  const whatsappLink = getWhatsappLink(locale);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale === "ar" ? "ar-MA" : locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-3 max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="glass-nav flex min-h-[68px] items-center justify-between gap-4 rounded-full border border-white/30 px-3 pl-4 shadow-[0_18px_60px_-35px_rgba(0,0,0,.45)] sm:pl-5">
            <Link
              to="/"
              className="group flex shrink-0 items-center"
              aria-label="Solveig’s Prestige Service — Accueil"
              onClick={() => setMenuOpen(false)}
            >
              <Logo />
            </Link>

            <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigation principale">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeProps={{ className: "bg-primary text-primary-foreground" }}
                  className="rounded-full px-3 py-2.5 text-[12px] font-semibold text-muted-foreground transition-all hover:bg-primary/8 hover:text-foreground"
                >
                  {copy[item.label]}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div>
                <UniverseLanguageMenu universe="costa" />
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="hidden size-10 items-center justify-center rounded-full border border-border bg-background/70 text-[#2e8068] transition hover:-translate-y-0.5 md:flex"
                aria-label={copy.whatsapp}
              >
                <MessageCircle size={18} />
              </a>
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
                className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground xl:hidden"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="mobile-menu mt-2 rounded-[1.5rem] border border-border bg-background/96 p-4 shadow-2xl backdrop-blur-2xl xl:hidden">
              <div className="grid gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-4 py-4 text-base font-semibold transition-colors hover:bg-surface"
                  >
                    {copy[item.label]}
                  </Link>
                ))}
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
              <Logo light large />
              <p className="mt-7 max-w-xl text-sm leading-7 text-primary-foreground/68">
                {copy.footer}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="footer-contact">
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
                <a href={contact.tel} className="footer-contact">
                  <Phone size={15} />
                  {contact.phone}
                </a>
                <a href={contact.mailto} className="footer-contact">
                  <Mail size={15} />
                  {contact.email}
                </a>
              </div>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground hover:text-gold"
              >
                {copy.firstContact}
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="space-y-3 text-sm text-primary-foreground/65">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-gold">
                {copy.services}
              </p>
              <Link to="/gestion-propriete" className="block hover:text-white">
                {copy.property}
              </Link>
              <Link to="/conciergerie" className="block hover:text-white">
                {copy.concierge}
              </Link>
              <Link to="/location-saisonniere" className="block hover:text-white">
                {copy.seasonal}
              </Link>
              <Link to="/services/housekeeping" className="block hover:text-white">
                {copy.housekeeping}
              </Link>
              <Link to="/locations-maroc" className="block hover:text-white">
                {copy.morocco}
              </Link>
            </div>

            <div className="space-y-4 text-sm text-primary-foreground/65">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-gold">
                {copy.territory}
              </p>
              <p className="leading-7">
                Marbella · Mijas · Mijas Costa · La Cala · Calahonda · Riviera del Sol
              </p>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Check size={15} className="text-gold" /> {copy.discreetService}
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Globe2 size={15} className="text-gold" /> {copy.languages}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.12em] text-primary-foreground/40 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Solveig’s Prestige Service</span>
            <span>{copy.territory}</span>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label={copy.whatsapp}
        className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl ring-1 ring-white/15 transition-transform hover:scale-105"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-surface pt-28">
      <div className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-0 size-96 rounded-full bg-coast/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-5xl">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-10 bg-gold" />
            {eyebrow}
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[.88] tracking-[-.025em] text-balance sm:text-7xl md:text-[6.5rem]">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            {description}
          </p>
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
          <div
            key={number}
            className="flex gap-4 border-b border-border py-6 last:border-0 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"
          >
            <span className="font-display text-xl text-gold">{number}</span>
            <div>
              <p className="text-sm font-bold">{title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactBand() {
  const locale = useSolveigLocale();
  const whatsappLink = getWhatsappLink(locale);
  const text = {
    fr: {
      eyebrow: "Premier échange",
      title: "Votre propriété mérite une présence à sa hauteur.",
      description:
        "Décrivez-nous votre bien, votre rythme de présence et vos attentes. Nous construirons le niveau d’accompagnement adapté.",
      action: "Demander un échange",
    },
    en: {
      eyebrow: "A first conversation",
      title: "Your property deserves a presence to match.",
      description:
        "Tell us about your property, how often you are here and what you expect. We’ll shape the right level of support.",
      action: "Arrange a conversation",
    },
    es: {
      eyebrow: "Una primera conversación",
      title: "Su propiedad merece una presencia a su altura.",
      description:
        "Cuéntenos cómo es su propiedad, cuándo está presente y qué espera. Definiremos el acompañamiento adecuado.",
      action: "Solicitar una conversación",
    },
    ar: {
      eyebrow: "محادثة أولى",
      title: "عقارك يستحق حضوراً يليق به.",
      description:
        "أخبرنا عن عقارك وأوقات حضورك وما تتوقعه من الخدمة. سنحدد مستوى الدعم المناسب لك.",
      action: "رتّب محادثة",
    },
  }[locale];

  return (
    <section id="contact" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_85%_15%,rgba(211,174,96,.24),transparent_26%),linear-gradient(115deg,transparent,rgba(255,255,255,.04))]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10 lg:py-32">
        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/60">
            <span className="h-px w-10 bg-gold" />
            {text.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-5xl font-semibold leading-[.9] text-balance md:text-7xl">
            {text.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/65">
            {text.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="footer-contact bg-white/10"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <a href={contact.tel} className="footer-contact bg-white/10">
              <Phone size={15} />
              {contact.phone}
            </a>
            <a href={contact.mailto} className="footer-contact bg-white/10">
              <Mail size={15} />
              {contact.email}
            </a>
          </div>
        </div>
        <Button asChild variant="secondary" size="xl" className="group">
          <Link to="/contact">
            {text.action} <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
