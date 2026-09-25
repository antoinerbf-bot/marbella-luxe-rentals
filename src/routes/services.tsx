import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, BedDouble, ClipboardCheck, KeyRound, Sparkles, Wrench } from "lucide-react";

import { ContactBand, PageHero, SolveigLayout } from "@/components/SolveigLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services de gestion locative à Marbella & Mijas — Solveig’s Prestige Service" },
      {
        name: "description",
        content:
          "Gestion de propriété, conciergerie privée, location saisonnière, housekeeping et maintenance à Marbella, Mijas et sur la Costa del Sol.",
      },
      { property: "og:title", content: "Services — Solveig’s Prestige Service" },
      {
        property: "og:description",
        content:
          "Un accompagnement premium pour protéger votre propriété, accueillir vos voyageurs et simplifier chaque séjour.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const offers = [
  { icon: KeyRound, number: "01", title: "Gestion de propriété", text: "Présence locale, contrôles, coordination et suivi pour les propriétaires qui ne sont pas toujours sur place.", link: "/gestion-propriete" },
  { icon: Sparkles, number: "02", title: "Conciergerie privée", text: "Accueil, assistance et organisation sur mesure pour propriétaires et voyageurs.", link: "/conciergerie" },
  { icon: BedDouble, number: "03", title: "Location saisonnière", text: "Préparation, arrivées, séjours, départs et coordination terrain avec une vraie exigence de détail.", link: "/location-saisonniere" },
  { icon: Wrench, number: "04", title: "Housekeeping & maintenance", text: "Ménage, linge, contrôle qualité, consommables et interventions légères.", link: "/services/housekeeping" },
  { icon: ClipboardCheck, number: "05", title: "Contrôles propriétaires", text: "Visites, points de vigilance et comptes rendus clairs pour garder le contrôle à distance.", link: "/gestion-propriete" },
  { icon: BadgeCheck, number: "06", title: "Relation voyageurs", text: "Une communication attentive et une continuité de service locale pendant les séjours.", link: "/conciergerie" },
];

function ServicesPage() {
  return (
    <SolveigLayout>
      <PageHero
        eyebrow="Prestations"
        title="Une gestion locative précise, discrète et haut de gamme."
        description="Solveig’s Prestige Service accompagne chaque étape entre deux réservations, pendant le séjour et lors du suivi propriétaire."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => {
              const Icon = offer.icon;
              return (
                <Link key={offer.title} to={offer.link} className="group bg-card p-8 transition-colors hover:bg-surface sm:p-9">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-2xl text-gold">{offer.number}</span>
                    <span className="flex size-11 items-center justify-center rounded-full border border-border text-coast transition-all group-hover:border-coast group-hover:bg-coast group-hover:text-coast-foreground">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                  </div>
                  <h2 className="mt-14 font-display text-3xl font-semibold">{offer.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{offer.text}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground group-hover:text-foreground">
                    Découvrir <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-3 lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Méthode</p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-tight text-balance">Un cadre clair, adapté à chaque propriété.</h2>
          </div>
          <div className="grid gap-4 lg:col-span-2">
            {["Audit du bien et des attentes", "Routine de préparation sur mesure", "Suivi terrain et compte rendu", "Optimisation continue de l’expérience"].map(
              (step, index) => (
                <div key={step} className="flex gap-5 border-b border-border pb-5">
                  <span className="font-display text-4xl font-semibold text-gold">0{index + 1}</span>
                  <p className="pt-2 text-lg font-semibold">{step}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}
