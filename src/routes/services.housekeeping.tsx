import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/housekeeping")({
  head: () => ({ meta: [
    { title: "Housekeeping & maintenance à Marbella — Solveig’s Prestige Service" },
    { name: "description", content: "Housekeeping, linge, contrôle qualité et maintenance légère pour propriétés de prestige à Marbella et Mijas." },
    { property: "og:title", content: "Housekeeping & maintenance à Marbella" },
    { property: "og:type", content: "website" },
  ]}),
  component: () => <ServiceDetailPage
    eyebrow="Housekeeping & maintenance"
    title="Les détails invisibles qui protègent la valeur de votre bien."
    description="Une préparation rigoureuse, des contrôles de qualité et une coordination terrain pour que votre propriété soit toujours prête."
    intro="La qualité d’un séjour se ressent dans ce que personne ne devrait avoir besoin de remarquer."
    points={["Coordination du ménage et du linge selon les standards du bien.", "Contrôle qualité avant l’arrivée des voyageurs ou des propriétaires.", "Suivi des consommables et des petits besoins courants.", "Identification et coordination rapide des interventions nécessaires."]}
    steps={["Définir vos standards de qualité et vos priorités.", "Organiser les passages et contrôles autour du calendrier du bien.", "Identifier immédiatement les écarts ou interventions nécessaires.", "Valider que le logement est prêt avant chaque utilisation."]}
    cta="Votre propriété mérite un niveau de préparation irréprochable ?"
  />,
});
