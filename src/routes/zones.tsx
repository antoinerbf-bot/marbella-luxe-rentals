import { createFileRoute } from "@tanstack/react-router";
import { MapPinned, Sailboat, Trees, Waves } from "lucide-react";

import { ContactBand, PageHero, SolveigLayout } from "@/components/SolveigLayout";

export const Route = createFileRoute("/zones")({
  head: () => ({
    meta: [
      { title: "Marbella & Mijas — Zones couvertes par Solveig’s Prestige Service" },
      {
        name: "description",
        content:
          "Gestion locative locale à Marbella, Mijas, Mijas Costa, La Cala, Calahonda et Riviera del Sol.",
      },
      { property: "og:title", content: "Marbella & Mijas — Zones couvertes" },
      {
        property: "og:description",
        content:
          "Une présence de proximité pour les propriétés de prestige sur les secteurs clés de la Costa del Sol.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ZonesPage,
});

const areas = [
  { icon: Sailboat, name: "Marbella", text: "Villas, appartements premium et résidences proches mer." },
  { icon: Trees, name: "Mijas Pueblo", text: "Biens de charme, maisons avec vues et séjours plus intimistes." },
  { icon: Waves, name: "La Cala de Mijas", text: "Locations balnéaires, familles et séjours courts exigeants." },
  { icon: MapPinned, name: "Calahonda & Riviera del Sol", text: "Gestion régulière pour propriétaires absents et biens saisonniers." },
];

function ZonesPage() {
  return (
    <SolveigLayout>
      <PageHero
        eyebrow="Zones couvertes"
        title="Marbella, Mijas et les adresses recherchées de la Costa del Sol."
        description="La proximité change tout : intervention rapide, connaissance du terrain et suivi cohérent avec les attentes des voyageurs internationaux."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-20 sm:px-8 md:grid-cols-2 lg:px-10">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <article key={area.name} className="border border-border bg-card p-8 shadow-soft">
                <Icon className="text-coast" size={30} aria-hidden="true" />
                <h2 className="mt-8 font-display text-4xl font-semibold">{area.name}</h2>
                <p className="mt-4 leading-7 text-muted-foreground">{area.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-18 sm:px-8 lg:px-10">
          <div className="grid gap-8 border-y border-border py-12 md:grid-cols-3">
            <p className="font-display text-4xl font-semibold leading-tight md:col-span-1">
              Un service pensé pour les propriétaires qui ne sont pas toujours sur place.
            </p>
            <p className="text-lg leading-8 text-muted-foreground md:col-span-2">
              De la vérification après un épisode météo à la préparation avant une arrivée tardive,
              Solveig’s Prestige Service agit comme votre relais local de confiance.
            </p>
          </div>
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}