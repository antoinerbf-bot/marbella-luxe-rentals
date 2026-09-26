import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/location-saisonniere")({
  head: () => ({ meta: [
    { title: "Location saisonnière à Marbella & Mijas — Solveig’s Prestige Service" },
    { name: "description", content: "Accompagnement de location saisonnière à Marbella et Mijas : préparation, voyageurs, coordination terrain et suivi du bien." },
    { property: "og:title", content: "Location saisonnière à Marbella & Mijas" },
    { property: "og:type", content: "website" },
  ]}),
  component: () => <ServiceDetailPage
    eyebrow="Location saisonnière"
    title="Une expérience de séjour pensée avant même l’arrivée."
    description="De la préparation du logement au départ des voyageurs, chaque étape est orchestrée pour préserver votre bien et la qualité du séjour."
    intro="Une location premium ne se joue pas uniquement au moment de la réservation : elle se prépare dans les détails."
    points={["Préparation complète entre deux séjours.", "Check-in, check-out et contrôle du logement.", "Coordination ménage, linge, consommables et maintenance légère.", "Suivi local pour les propriétaires qui ne vivent pas sur place."]}
    steps={["Établir les standards de préparation propres à votre propriété.", "Préparer le logement et contrôler chaque détail avant l’arrivée.", "Accompagner le séjour avec une présence adaptée.", "Contrôler le bien après le départ et préparer la suite."]}
    cta="Vous souhaitez louer votre propriété avec une présence locale de confiance ?"
    image="https://commons.wikimedia.org/wiki/Special:Redirect/file/PLAYAS_DE_MIJAS.jpg"
  />,
});
