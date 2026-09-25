import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/gestion-propriete")({
  head: () => ({ meta: [
    { title: "Gestion de propriété à Marbella & Mijas — Solveig’s Prestige Service" },
    { name: "description", content: "Gestion de propriété à Marbella et Mijas : contrôles, entretien, coordination des prestataires et suivi propriétaire à distance." },
    { property: "og:title", content: "Gestion de propriété à Marbella & Mijas" },
    { property: "og:type", content: "website" },
  ]}),
  component: () => <ServiceDetailPage
    eyebrow="Gestion de propriété"
    title="Votre maison, entre de bonnes mains même lorsque vous êtes loin."
    description="Une présence locale pour surveiller, entretenir et préserver votre propriété à Marbella, Mijas et sur la Costa del Sol."
    intro="La tranquillité commence par savoir que quelqu’un veille réellement sur votre bien."
    points={["Visites et contrôles réguliers adaptés à votre rythme.", "Coordination des interventions et prestataires locaux.", "Préparation du logement avant votre arrivée ou celle de vos invités.", "Communication claire avec comptes rendus et suivi des besoins."]}
    steps={["Définir le niveau de présence souhaité et les priorités du bien.", "Mettre en place une routine de contrôle et les interlocuteurs nécessaires.", "Anticiper les interventions plutôt que subir les urgences.", "Vous tenir informé avec une communication simple et régulière."]}
    cta="Vous souhaitez un relais fiable pour votre propriété à Marbella ou Mijas ?"
  />,
});
