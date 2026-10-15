import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChefHat, ConciergeBell, UtensilsCrossed } from "lucide-react";
import { ContactBand, PageHero, SolveigLayout } from "@/components/SolveigLayout";

const stories = [
  {
    category: "L’art de recevoir",
    title: "Un chef privé français dans votre villa à Marbella",
    excerpt: "Un dîner imaginé autour de vos envies, des produits de saison et du plaisir de recevoir chez soi. Le luxe devient une expérience personnelle, sans les contraintes d’une réservation au restaurant.",
    readTime: "5 min de lecture",
  },
  {
    category: "Savoir-faire français",
    title: "La gastronomie française, une expérience à vivre sur la Costa del Sol",
    excerpt: "Du premier amuse-bouche au dernier détail du service, la cuisine française cultive l’équilibre, la précision et l’attention portée aux invités. Une approche idéale pour un séjour privé.",
    readTime: "4 min de lecture",
  },
  {
    category: "Séjours d’exception",
    title: "Comment organiser un dîner privé réussi dans une villa de luxe",
    excerpt: "Le nombre d’invités, le rythme du repas, les préférences alimentaires et l’ambiance de la table : quelques décisions en amont permettent de créer une soirée fluide et mémorable.",
    readTime: "6 min de lecture",
  },
];

export const Route = createFileRoute("/gastronomie-francaise")({
  head: () => ({
    meta: [
      { title: "Chef privé français à Marbella | Gastronomie & art de recevoir" },
      { name: "description", content: "Découvrez l’art de recevoir à la française à Marbella : expériences culinaires privées, chefs à domicile et gastronomie sur mesure pour vos séjours de prestige." },
      { name: "keywords", content: "chef privé Marbella, chef français Marbella, chef à domicile Marbella, dîner privé villa Marbella, gastronomie française Costa del Sol" },
      { property: "og:title", content: "L’art de recevoir à la française | Marbella" },
      { property: "og:description", content: "Des expériences culinaires privées pensées pour les villas et séjours d’exception sur la Costa del Sol." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GastronomiePage,
});

function GastronomiePage() {
  return (
    <SolveigLayout>
      <PageHero
        eyebrow="L’art de recevoir · Marbella · Costa del Sol"
        title={<>Le savoir-faire culinaire français, au cœur de votre séjour.</>}
        description="Une expérience gastronomique privée, pensée pour votre villa, vos invités et votre façon de recevoir. La discrétion d’un service sur mesure, le plaisir d’une table préparée avec soin."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-20 lg:px-12 lg:py-24">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.7rem] bg-[#263d35] p-8 text-white sm:p-12">
            <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_80%_15%,rgba(214,174,92,.35),transparent_35%),linear-gradient(145deg,transparent,rgba(0,0,0,.6))]" />
            <div className="relative flex h-full min-h-[280px] flex-col justify-between">
              <ChefHat size={34} strokeWidth={1.2} className="text-[#d9bd83]" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#d9bd83]">Une expérience personnelle</p>
                <h2 className="mt-4 max-w-lg font-display text-4xl font-semibold leading-tight sm:text-5xl">La cuisine comme une signature, pas comme une prestation standardisée.</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-bold uppercase tracking-[.2em] text-gold">L’expérience culinaire privée</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Votre villa devient une table d’exception.</h2>
            <p className="mt-6 text-sm leading-7 text-muted-foreground">Pour un dîner intimiste, une célébration ou un séjour entre amis, nous vous aidons à imaginer une expérience gastronomique adaptée à votre occasion. Le menu, le rythme du service et l’atmosphère sont définis avec vous, dans le respect de vos goûts et de ceux de vos invités.</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">Notre ambition : faire découvrir l’attention et le savoir-faire de la tradition culinaire française dans le cadre privilégié de Marbella et de la Costa del Sol.</p>
            <Link to="/contact" className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">Imaginer votre expérience <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-12 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[.2em] text-gold">Journal de l’art de vivre</p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-6xl">La gastronomie française à Marbella</h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">Des idées et des conseils pour recevoir avec élégance pendant votre séjour sur la Costa del Sol.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {stories.map((story, index) => (
              <article key={story.title} className="group flex min-h-[330px] flex-col rounded-[1.4rem] border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[.16em] text-gold">{story.category}</span>
                  <span className="font-display text-2xl text-muted-foreground/50">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-3xl font-semibold leading-tight">{story.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{story.excerpt}</p>
                <div className="mt-7 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
                  <span>{story.readTime}</span>
                  <span className="inline-flex items-center gap-2 font-semibold text-foreground">À découvrir <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-20 sm:px-8 lg:grid-cols-3 lg:px-12 lg:py-24">
          {[
            { icon: UtensilsCrossed, title: "Une cuisine à votre image", text: "Des préférences, allergies et contraintes alimentaires prises en compte dès la préparation." },
            { icon: ConciergeBell, title: "Un service coordonné", text: "Une organisation adaptée au lieu, au nombre d’invités et au déroulé souhaité." },
            { icon: ChefHat, title: "Le goût du détail", text: "Une attention portée à la présentation, au rythme du repas et à l’expérience globale." },
          ].map((item) => {
            const Icon = item.icon;
            return <article key={item.title} className="border-t border-border pt-6"><Icon size={23} className="text-gold" strokeWidth={1.5} /><h3 className="mt-5 font-display text-3xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p></article>;
          })}
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}
