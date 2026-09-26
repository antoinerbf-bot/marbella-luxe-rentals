import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import villaImage from "@/assets/marbella-prestige-villa.jpg";

export const Route = createFileRoute("/services/housekeeping")({
  head: () => ({ meta: [
    { title: "Housekeeping & maintenance à Marbella & Mijas — Solveig’s Prestige Service" },
    { name: "description", content: "Housekeeping, linge, contrôle qualité et maintenance légère pour les propriétés à Marbella, Mijas et sur la Costa del Sol." },
    { property: "og:title", content: "Housekeeping & maintenance — Solveig’s Prestige Service" },
    { property: "og:type", content: "website" },
  ]}),
  component: () => <ServiceDetailPage
    eyebrow="Housekeeping & maintenance"
    title="Chaque détail doit être prêt avant que vous arriviez."
    description="Ménage, linge, contrôle qualité et petites interventions coordonnées avec rigueur pour garder votre propriété impeccable entre deux séjours."
    intro="La qualité d’un séjour se joue souvent dans les détails que personne ne remarque — parce qu’ils ont été parfaitement préparés."
    points={["Ménage et remise en état entre les séjours.", "Gestion du linge, consommables et préparation du logement.", "Contrôle qualité avant chaque arrivée.", "Coordination de petites interventions et maintenance légère."]}
    steps={["Définir les standards de votre propriété.", "Organiser ménage, linge et consommables selon le calendrier.", "Contrôler chaque pièce et signaler les besoins d’intervention.", "Valider la remise en état avant votre arrivée ou celle de vos invités."]}
    cta="Vous souhaitez un standard constant pour votre propriété ?"
    image={villaImage}
  />,
});
