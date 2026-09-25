import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Home, KeyRound, Sparkles, Waves } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactBand, SolveigLayout, TrustStrip } from "@/components/SolveigLayout";
import villaImage from "@/assets/marbella-prestige-villa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solveig’s Prestige Service — Gestion locative à Marbella & Mijas" },
      {
        name: "description",
        content:
          "Gestion locative haut de gamme à Marbella et Mijas : accueil voyageurs, intendance, entretien et suivi propriétaire.",
      },
      { property: "og:title", content: "Solveig’s Prestige Service — Gestion locative à Marbella & Mijas" },
      {
        property: "og:description",
        content:
          "Une présence locale de confiance pour valoriser et protéger votre bien sur la Costa del Sol.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: KeyRound,
    title: "Accueil voyageurs",
    text: "Arrivées fluides, départs maîtrisés, attention portée aux détails qui font la différence.",
  },
  {
    icon: Sparkles,
    title: "Préparation premium",
    text: "Coordination du ménage, linge, consommables et contrôle qualité avant chaque séjour.",
  },
  {
    icon: Home,
    title: "Intendance propriétaire",
    text: "Visites régulières, petites interventions, reporting clair et tranquillité à distance.",
  },
  {
    icon: CalendarCheck,
    title: "Suivi locatif",
    text: "Organisation des réservations, disponibilité terrain et relation voyageurs soignée.",
  },
];

const numbers = [
  ["24h", "réactivité locale"],
  ["2", "zones fortes"],
  ["100%", "service sur mesure"],
];

function Index() {
  return (
    <SolveigLayout>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={villaImage}
            alt="Villa de prestige avec vue mer à Marbella"
            width={1600}
            height={1104}
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-86" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-end gap-12 px-5 pb-16 pt-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="max-w-3xl pb-8">
            <p className="text-sm font-bold uppercase tracking-normal text-primary-foreground/78">
              Gestion locative à Marbella & Mijas
            </p>
            <h1 className="mt-5 font-display text-6xl font-semibold leading-none text-balance md:text-8xl">
              Solveig’s Prestige Service
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/84 md:text-xl">
              Une gestion raffinée, humaine et locale pour les propriétaires qui veulent protéger leur bien,
              accueillir mieux et louer avec sérénité sur la Costa del Sol.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="xl">
                <Link to="/contact">
                  Demander un rendez-vous
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="coastal"
                size="xl"
                className="bg-background/12 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground"
              >
                <Link to="/services">Voir les services</Link>
              </Button>
            </div>
          </div>

          <div className="mb-4 grid gap-3 sm:grid-cols-3 lg:mb-10 lg:grid-cols-1 xl:grid-cols-3">
            {numbers.map(([value, label]) => (
              <div key={label} className="border border-primary-foreground/18 bg-background/12 p-5 backdrop-blur-md">
                <p className="font-display text-4xl font-semibold">{value}</p>
                <p className="mt-2 text-sm font-medium text-primary-foreground/76">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-normal text-gold">Service signature</p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-tight text-balance text-foreground">
              La tranquillité d’un concierge, la rigueur d’un gestionnaire.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Chaque propriété mérite un suivi précis : présence sur place, anticipation des besoins,
              coordination des prestataires et expérience voyageurs irréprochable.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="border border-border bg-card p-7 shadow-soft">
                  <Icon className="text-coast" size={28} aria-hidden="true" />
                  <h3 className="mt-7 text-xl font-bold text-card-foreground">{service.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-10">
          <div className="overflow-hidden rounded-md shadow-elegant">
            <img
              src={villaImage}
              alt="Terrasse méditerranéenne préparée pour une location de prestige"
              width={1600}
              height={1104}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-normal text-gold">Marbella, Mijas et alentours</p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-tight text-balance text-foreground">
              Une présence de terrain là où votre bien a le plus de valeur.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Marbella", "Mijas Pueblo", "La Cala de Mijas", "Calahonda"].map((area) => (
                <div key={area} className="flex items-center gap-3 border-b border-border pb-4 text-lg font-semibold">
                  <Waves className="text-coast" size={21} aria-hidden="true" />
                  {area}
                </div>
              ))}
            </div>
            <Button asChild variant="prestige" size="xl" className="mt-9">
              <Link to="/zones">
                Découvrir les zones
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}
