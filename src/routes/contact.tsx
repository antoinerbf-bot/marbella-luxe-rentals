import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

import { PageHero, SolveigLayout } from "@/components/SolveigLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Solveig’s Prestige Service" },
      {
        name: "description",
        content:
          "Contactez Solveig’s Prestige Service pour une gestion locative sur mesure à Marbella, Mijas et alentours.",
      },
      { property: "og:title", content: "Contact — Solveig’s Prestige Service" },
      {
        property: "og:description",
        content:
          "Demandez un premier échange pour confier votre bien à une gestion locative locale et premium.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SolveigLayout>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre propriété à Marbella ou Mijas."
        description="Un premier échange permet d’évaluer les besoins du bien, les attentes des voyageurs et le niveau d’accompagnement souhaité."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div className="space-y-5">
            {[
              { icon: MapPin, title: "Secteur", text: "Marbella, Mijas, Mijas Costa et alentours." },
              { icon: Clock, title: "Premier retour", text: "Réponse rapide pour cadrer vos besoins et disponibilités." },
              { icon: ShieldCheck, title: "Approche", text: "Discrétion, précision et standards premium." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border border-border bg-card p-6 shadow-soft">
                  <Icon className="text-coast" size={24} aria-hidden="true" />
                  <h2 className="mt-5 text-lg font-bold">{item.title}</h2>
                  <p className="mt-2 leading-7 text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-primary p-8 text-primary-foreground shadow-elegant md:p-10">
            <MessageCircle size={32} aria-hidden="true" />
            <h2 className="mt-8 font-display text-5xl font-semibold leading-tight text-balance">
              Coordonnées à intégrer
            </h2>
            <p className="mt-5 text-lg leading-8 text-primary-foreground/78">
              Ajoutez ici le numéro, l’email ou le lien WhatsApp de Solveig pour transformer cette page en point de contact direct.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button variant="secondary" size="xl">Téléphone</Button>
              <Button variant="coastal" size="xl" className="bg-background/12 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground">
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SolveigLayout>
  );
}