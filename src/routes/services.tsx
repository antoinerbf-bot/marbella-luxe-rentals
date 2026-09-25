import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, BedDouble, ClipboardCheck, KeyRound, Sparkles, Wrench } from "lucide-react";

import { ContactBand, PageHero, SolveigLayout } from "@/components/SolveigLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services de gestion locative — Solveig’s Prestige Service" },
      {
        name: "description",
        content:
          "Accueil, préparation, intendance, coordination ménage et suivi propriétaire pour locations à Marbella et Mijas.",
      },
      { property: "og:title", content: "Services de gestion locative — Solveig’s Prestige Service" },
      {
        property: "og:description",
        content:
          "Des services complets pour protéger votre propriété et offrir une expérience haut de gamme aux voyageurs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const offers = [
  {
    icon: KeyRound,
    title: "Check-in & check-out",
    text: "Accueil personnalisé, remise des clés, présentation du bien et contrôle de sortie.",
  },
  {
    icon: Sparkles,
    title: "Ménage & linge",
    text: "Coordination de prestataires fiables, inspection finale et préparation soignée des espaces.",
  },
  {
    icon: BedDouble,
    title: "Mise en scène du séjour",
    text: "Derniers détails, consommables, ambiance fraîche et impression immédiate de qualité.",
  },
  {
    icon: Wrench,
    title: "Maintenance légère",
    text: "Identification rapide des besoins, suivi des interventions et protection du standing du bien.",
  },
  {
    icon: ClipboardCheck,
    title: "Contrôles propriétaires",
    text: "Visites régulières, photos de suivi et compte rendu clair pour les propriétaires à distance.",
  },
  {
    icon: BadgeCheck,
    title: "Relation voyageurs",
    text: "Communication attentive, gestion des demandes courantes et continuité de service locale.",
  },
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
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-20 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <article key={offer.title} className="border border-border bg-card p-7 shadow-soft">
                <Icon className="text-coast" size={30} aria-hidden="true" />
                <h2 className="mt-7 text-xl font-bold text-card-foreground">{offer.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{offer.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-1">
            <p className="text-sm font-bold uppercase tracking-normal text-gold">Méthode</p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-tight text-balance">
              Un cadre clair, adapté à chaque propriété.
            </h2>
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