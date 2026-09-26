import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronRight,
  Home,
  KeyRound,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactBand, SolveigLayout, TrustStrip } from "@/components/SolveigLayout";
import villaImage from "@/assets/marbella-prestige-villa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solveig’s Prestige Service — Gestion locative haut de gamme à Marbella & Mijas" },
      {
        name: "description",
        content:
          "Gestion de propriété, conciergerie privée et location saisonnière à Marbella, Mijas et sur la Costa del Sol. Une présence locale, discrète et exigeante.",
      },
      {
        name: "keywords",
        content:
          "gestion propriété Marbella, conciergerie Marbella, location saisonnière Marbella, gestion locative Mijas, conciergerie Mijas, Costa del Sol",
      },
      { property: "og:title", content: "Solveig’s Prestige Service — Marbella & Mijas" },
      {
        property: "og:description",
        content:
          "Une présence locale et élégante pour protéger votre propriété, accueillir vos voyageurs et simplifier chaque séjour.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Home,
    number: "01",
    title: "Gestion de propriété",
    text: "Votre bien reste surveillé, entretenu et prêt à vivre, même lorsque vous êtes à des milliers de kilomètres.",
    link: "/gestion-propriete",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Conciergerie privée",
    text: "Une attention sur mesure pour vos propriétaires, vos invités et les moments qui méritent d’être parfaitement orchestrés.",
    link: "/conciergerie",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Location saisonnière",
    text: "De la préparation du logement au suivi des voyageurs, chaque étape est pensée pour une expérience premium.",
    link: "/location-saisonniere",
  },
  {
    icon: KeyRound,
    number: "04",
    title: "Housekeeping & maintenance",
    text: "Ménage, linge, contrôle qualité et petites interventions : les détails invisibles qui protègent la valeur de votre bien.",
    link: "/services",
  },
];

const places = [
  ["Marbella", "L’élégance, la mer et une clientèle internationale."],
  ["Mijas", "Le charme andalou entre village, collines et Méditerranée."],
  ["La Cala de Mijas", "Un littoral vivant pour des séjours tout en douceur."],
  ["Costa del Sol", "Une présence locale pensée autour de votre propriété."],
];

function Index() {
  return (
    <SolveigLayout>
      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={villaImage}
            alt="Villa de prestige sur la Costa del Sol"
            width={1600}
            height={1104}
            className="h-full w-full scale-[1.04] object-cover"
          />
          <div className="absolute inset-0 bg-primary/48" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/55 to-primary/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/15" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-between px-5 pb-8 pt-20 sm:px-8 lg:px-10 lg:pb-10">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground/70">
            <span>Marbella · Mijas · Costa del Sol</span>
            <span className="hidden sm:block">Private property & lifestyle management</span>
          </div>

          <div className="max-w-5xl pb-4 lg:pb-10">
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary-foreground/78">
              <span className="h-px w-10 bg-gold" />
              Une présence locale, une exigence internationale
            </p>
            <h1 className="max-w-5xl font-display text-[3.7rem] font-semibold leading-[0.82] tracking-[-0.025em] text-balance sm:text-6xl lg:text-[7.3rem] xl:text-[8.2rem]">
              Your property.
              <br />
              <span className="text-gold">Perfectly cared for.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-primary-foreground/82 sm:text-lg sm:leading-8">
              Solveig’s Prestige Service accompagne les propriétaires et voyageurs qui attendent davantage
              qu’une simple gestion : de la présence, du goût, de la discrétion et une vraie maîtrise du terrain.
            </p>

            <div className="mt-7 grid max-w-4xl gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <Button asChild variant="secondary" size="xl" className="group">
                <Link to="/contact">
                  Parlons de votre propriété
                  <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="coastal"
                size="xl"
                className="border border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground backdrop-blur-md hover:bg-primary-foreground/18 hover:text-primary-foreground"
              >
                <Link to="/services">Explorer les services</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 border-t border-primary-foreground/20 pt-5 sm:grid-cols-3">
            {[
              ["01", "Présence locale", "Une équipe de terrain au plus près de votre bien."],
              ["02", "Service sur mesure", "Aucun bien, aucun séjour, aucune demande identique."],
              ["03", "Marbella & Mijas", "Une connaissance concrète de la Costa del Sol."],
            ].map(([number, title, text]) => (
              <div key={number} className="flex gap-4 border-primary-foreground/15 sm:border-r sm:pr-5 last:border-0">
                <span className="font-display text-2xl text-gold">{number}</span>
                <div>
                  <p className="text-sm font-bold">{title}</p>
                  <p className="mt-1 max-w-xs text-xs leading-5 text-primary-foreground/65">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#services"
            className="absolute bottom-8 right-5 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/65 transition-colors hover:text-primary-foreground lg:flex"
          >
            Découvrir
            <ArrowDown size={16} className="animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </section>

      <TrustStrip />

      <section id="services" className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">L’art du détail</p>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.95] text-balance md:text-7xl">
                Bien plus qu’un service.
                <br />
                <span className="text-coast">Une présence.</span>
              </h2>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-lg leading-8 text-muted-foreground">
                Nous intervenons là où une propriété de prestige exige de la constance : avant l’arrivée,
                pendant le séjour, entre deux locations et lorsque le propriétaire n’est pas sur place.
              </p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground underline decoration-gold decoration-2 underline-offset-8"
              >
                Voir l’ensemble des services
                <ChevronRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.link}
                  className="group relative relative min-h-[430px] overflow-hidden rounded-[1.5rem] bg-primary p-0 text-primary-foreground shadow-elegant"
                >
                  <div className="relative flex min-h-[430px] flex-col justify-between p-7 sm:p-9"><div className="flex items-start justify-between">
                    <span className="font-display text-2xl text-gold">{service.number}</span>
                    <span className="flex size-12 items-center justify-center rounded-full border border-border text-coast transition-all group-hover:border-coast group-hover:bg-coast group-hover:text-coast-foreground">
                      <Icon size={21} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-auto max-w-lg">
                    <h3 className="font-display text-4xl font-semibold text-primary-foreground">{service.title}</h3>
                    <p className="mt-4 leading-7 text-muted-foreground">{service.text}</p>
                  </div>
                  <span className="absolute bottom-9 right-9 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-gold transition-colors group-hover:text-gold">
                    Découvrir <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-surface">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-10 lg:py-32">
          <div className="relative">
            <div className="absolute -left-5 -top-5 z-10 hidden rounded-full border border-gold/60 bg-background/90 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-foreground shadow-soft backdrop-blur md:block">
              Marbella · Mijas
            </div>
            <div className="overflow-hidden rounded-[1.5rem] shadow-elegant">
              <img
                src={villaImage}
                alt="Architecture méditerranéenne et terrasse de villa de prestige"
                width={1600}
                height={1104}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
              />
            </div>
            <div className="absolute -bottom-7 right-5 max-w-[230px] rounded-xl border border-border bg-background/95 p-5 shadow-elegant backdrop-blur sm:right-8">
              <p className="font-display text-2xl font-semibold">Discrétion.</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">Précision. Réactivité. Sens du détail.</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Une maison, une histoire</p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.95] text-balance text-foreground md:text-6xl">
              Votre propriété mérite une attention à sa hauteur.
            </h2>
            <p className="mt-7 text-lg leading-8 text-muted-foreground">
              Une belle propriété ne se résume pas à quatre murs. Elle vit, elle s’entretient, elle accueille.
              Notre rôle est de préserver cette qualité dans le temps et de rendre chaque interaction plus simple.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Contrôle et suivi régulier du bien",
                "Coordination des intervenants et prestataires",
                "Préparation soignée avant chaque arrivée",
                "Communication claire avec le propriétaire",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-foreground">
                  <Check className="mt-0.5 shrink-0 text-coast" size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="prestige" size="xl" className="mt-9">
              <Link to="/gestion-propriete">
                Découvrir la gestion de propriété
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">La Costa del Sol</p>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.95] md:text-7xl">
                Une connaissance locale qui change tout.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2">
              {places.map(([place, text]) => (
                <Link
                  key={place}
                  to="/zones"
                  className="group bg-primary p-7 transition-colors hover:bg-primary-foreground/8"
                >
                  <div className="flex items-center justify-between">
                    <MapPin size={18} className="text-gold" aria-hidden="true" />
                    <ArrowRight size={17} className="opacity-50 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                  <h3 className="mt-10 font-display text-3xl font-semibold">{place}</h3>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/65">{text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Pourquoi Solveig ?</p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.95] text-balance md:text-7xl">
              Le luxe commence lorsque tout semble simple.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Une organisation précise, une communication humaine et une présence réelle sur le terrain.
              Vous savez ce qui se passe. Nous nous occupons du reste.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              [ShieldCheck, "Sérénité", "Votre bien est suivi avec la même attention que s’il était à côté de vous."],
              [Waves, "Hospitalité", "Une expérience pensée dans les moindres détails, sans jamais perdre le naturel."],
              [MessageCircle, "Réactivité", "Un interlocuteur clair et une présence locale lorsque cela compte."],
            ].map(([Icon, title, text]) => {
              const FeatureIcon = Icon as typeof ShieldCheck;
              return (
                <article key={title as string} className="border border-border bg-card p-8">
                  <FeatureIcon className="text-coast" size={25} aria-hidden="true" />
                  <h3 className="mt-7 font-display text-3xl font-semibold">{title as string}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-gold">
              <Waves size={16} aria-hidden="true" />
              Marbella & Mijas
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Vous avez une propriété sur la Costa del Sol ?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Parlons de vos attentes, de votre bien et du niveau de présence que vous souhaitez. Le premier échange est simple, confidentiel et sans engagement.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild variant="prestige" size="xl">
              <Link to="/contact">
                Prendre contact
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="coastal" size="xl">
              <Link to="/contact">
                <MessageCircle aria-hidden="true" />
                Échanger sur WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}
