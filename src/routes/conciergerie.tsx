import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/conciergerie")({
  head: () => ({ meta: [
    { title: "Conciergerie privée à Marbella & Mijas — Solveig’s Prestige Service" },
    { name: "description", content: "Conciergerie privée à Marbella et Mijas : accueil, assistance locale et organisation sur mesure pour propriétaires et voyageurs." },
    { property: "og:title", content: "Conciergerie privée à Marbella & Mijas" },
    { property: "og:type", content: "website" },
  ]}),
  component: () => <ServiceDetailPage
    eyebrow="Conciergerie privée"
    title="Le sens du détail, sans jamais en faire trop."
    description="Une conciergerie locale pensée pour rendre les séjours plus fluides et les demandes plus simples, avec discrétion et attention."
    intro="Le vrai luxe est souvent invisible : quelqu’un a déjà pensé au détail avant même que vous le demandiez."
    points={["Accueil et assistance adaptés au profil de chaque séjour.", "Coordination des demandes courantes et des intervenants locaux.", "Préparation attentive du logement avant l’arrivée.", "Une relation humaine, réactive et discrète."]}
    steps={["Comprendre vos habitudes, vos attentes et celles de vos invités.", "Préparer les détails qui rendent l’arrivée immédiate et naturelle.", "Rester disponible pendant le séjour selon le niveau d’accompagnement choisi.", "Clore chaque séjour avec le même niveau d’attention."]}
    cta="Parlons du niveau de service que vous souhaitez offrir."
  />,
});
