import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

import { PageHero, SolveigLayout } from "@/components/SolveigLayout";
import { Button } from "@/components/ui/button";
import villaImage from "@/assets/marbella-prestige-villa.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Solveig’s Prestige Service | Marbella & Mijas" },
      {
        name: "description",
        content:
          "Échangez avec Solveig’s Prestige Service au sujet de votre propriété à Marbella, Mijas ou sur la Costa del Sol.",
      },
      { property: "og:title", content: "Contact — Solveig’s Prestige Service" },
      {
        property: "og:description",
        content:
          "Parlons de votre propriété, de vos attentes et du niveau de présence locale dont vous avez besoin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const reasons = [
  {
    icon: MapPin,
    title: "Une présence sur le terrain",
    text: "Marbella, Mijas, Mijas Costa et les secteurs voisins sont au cœur de notre accompagnement.",
  },
  {
    icon: Clock3,
    title: "Un premier échange simple",
    text: "Commencez par nous expliquer votre bien, votre situation et ce que vous souhaitez déléguer.",
  },
  {
    icon: ShieldCheck,
    title: "Une approche confidentielle",
    text: "Chaque propriété a ses contraintes. Nous privilégions un accompagnement discret et réellement sur mesure.",
  },
];

function ContactPage() {
  return (
    <SolveigLayout>
      <PageHero
        eyebrow="Premier échange"
        title="Parlons de votre propriété à Marbella ou Mijas."
        description="Que vous soyez propriétaire absent, investisseur ou à la recherche d’un accompagnement pour vos locations, commençons par comprendre vos besoins."
      />

      <section className="bg-background">\n        <div className="mx-auto max-w-[1440px] px-5 pt-8 sm:px-8 lg:px-12 lg:pt-12"><div className="relative overflow-hidden rounded-[2rem] bg-primary text-white shadow-elegant"><img src={villaImage} alt="Villa de prestige sur la Costa del Sol" className="absolute inset-0 h-full w-full object-cover opacity-45" /><div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" /><div className="relative max-w-3xl p-8 sm:p-12 lg:p-16"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Solveig’s Prestige Service</p><h2 className="mt-5 font-display text-5xl font-semibold leading-[.9] md:text-7xl">Une conversation peut commencer simplement.</h2><p className="mt-6 max-w-xl leading-7 text-white/65">Votre propriété, votre rythme, vos priorités. Donnez-nous le contexte ; nous vous aiderons à définir le niveau de présence pertinent.</p></div></div></div>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-5 md:grid-cols-3">
            {reasons.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border border-border bg-card p-7 shadow-soft">
                  <Icon className="text-coast" size={24} aria-hidden="true" />
                  <h2 className="mt-7 font-display text-3xl font-semibold">{item.title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 grid overflow-hidden rounded-2xl border border-border bg-primary shadow-elegant lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative overflow-hidden p-8 text-primary-foreground md:p-12">
              <div className="absolute -right-24 -top-24 size-72 rounded-full border border-gold/25" />
              <div className="absolute -bottom-28 -left-24 size-72 rounded-full border border-primary-foreground/10" />
              <div className="relative">
                <Sparkles className="text-gold" size={28} aria-hidden="true" />
                <p className="mt-10 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/60">
                  Votre projet
                </p>
                <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95]">
                  Parlons de ce qui compte vraiment.
                </h2>
                <p className="mt-6 leading-7 text-primary-foreground/70">
                  Type de propriété, localisation, fréquence d’occupation, location saisonnière, besoins d’entretien ou simple présence à distance : quelques éléments suffisent pour commencer.
                </p>
                <div className="mt-8 space-y-3 text-sm text-primary-foreground/80">
                  {["Votre localisation", "Votre niveau de présence souhaité", "Vos priorités et contraintes"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex size-6 items-center justify-center rounded-full border border-gold/50 text-gold">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="demande" className="bg-background p-8 md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Choisir la suite</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">
                Vous préférez commencer par un échange ou par nos services ?
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Les coordonnées directes de Solveig seront intégrées ici dès qu’elles auront été fournies, afin que les boutons téléphone, email et WhatsApp soient de vrais liens et non des informations fictives.
              </p>

              <div className="mt-8 grid gap-3">
                <Button asChild variant="prestige" size="xl">
                  <Link to="/services">
                    Explorer les services
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="coastal" size="xl">
                  <Link to="/zones">
                    Découvrir Marbella & Mijas
                    <MapPin aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex items-start gap-3 border-t border-border pt-6 text-xs leading-5 text-muted-foreground">
                <MessageCircle className="mt-0.5 shrink-0 text-coast" size={17} aria-hidden="true" />
                <span>Pas de numéro inventé, pas de faux formulaire : la prochaine étape sera de brancher les coordonnées officielles et le canal WhatsApp réel.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SolveigLayout>
  );
}
