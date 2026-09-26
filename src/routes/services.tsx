import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, BedDouble, ClipboardCheck, KeyRound, MessageCircle, Sparkles, Wrench } from "lucide-react";

import { ContactBand, PageHero, SolveigLayout } from "@/components/SolveigLayout";
import { Button } from "@/components/ui/button";
import villaImage from "@/assets/marbella-prestige-villa.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services de gestion locative à Marbella & Mijas — Solveig’s Prestige Service" },
      { name: "description", content: "Gestion de propriété, conciergerie privée, location saisonnière, housekeeping et maintenance à Marbella, Mijas et sur la Costa del Sol." },
      { property: "og:title", content: "Services — Solveig’s Prestige Service" },
      { property: "og:description", content: "Un accompagnement premium pour protéger votre propriété, accueillir vos voyageurs et simplifier chaque séjour." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ServicesPage,
});

const images = {
  property: villaImage,
  concierge: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Marbella_-_Plaza_de_los_Naranjos_8.jpg",
  seasonal: "https://commons.wikimedia.org/wiki/Special:Redirect/file/PLAYAS_DE_MIJAS.jpg",
  housekeeping: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mijas_Pueblo_from_the_south_(Mijas,_Dec_2012).jpg",
};

const offers = [
  { icon: KeyRound, number: "01", title: "Gestion de propriété", text: "Présence locale, contrôles, coordination et suivi pour les propriétaires qui ne sont pas toujours sur place.", link: "/gestion-propriete", image: images.property },
  { icon: Sparkles, number: "02", title: "Conciergerie privée", text: "Accueil, assistance locale et organisation sur mesure pour propriétaires, familles et invités.", link: "/conciergerie", image: images.concierge },
  { icon: BadgeCheck, number: "03", title: "Location saisonnière", text: "Préparation, voyageurs, contrôle du logement et coordination entre chaque séjour.", link: "/location-saisonniere", image: images.seasonal },
  { icon: Wrench, number: "04", title: "Housekeeping & maintenance", text: "Ménage, linge, contrôle qualité et petites interventions coordonnées avec rigueur.", link: "/services/housekeeping", image: images.housekeeping },
  { icon: ClipboardCheck, number: "05", title: "Contrôles propriétaires", text: "Des visites et points de contrôle conçus autour du rythme réel de votre propriété.", link: "/gestion-propriete", image: images.property },
  { icon: BedDouble, number: "06", title: "Relation voyageurs", text: "Une présence humaine et discrète avant, pendant et après chaque séjour.", link: "/conciergerie", image: images.concierge },
];

function ServicesPage() {
  return (
    <SolveigLayout>
      <PageHero
        eyebrow="Services · Marbella · Mijas"
        title={<>Tout ce qui permet à une propriété d’exception de rester impeccable.</>}
        description="Une offre pensée comme une maison de services : gestion, hospitalité, préparation et coordination. Vous choisissez le niveau de présence. Nous organisons le reste."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-12 flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">La carte des services</p><h2 className="mt-3 font-display text-5xl font-semibold leading-[.9] md:text-6xl">Une réponse pour chaque moment.</h2></div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">Chaque service peut être combiné pour construire un accompagnement cohérent autour de votre propriété.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {offers.map((offer) => {
              const Icon = offer.icon;
              return (
                <Link key={offer.title} to={offer.link} className="group relative min-h-[410px] overflow-hidden rounded-[1.7rem] bg-primary text-white">
                  <img src={offer.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110" aria-hidden="true" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/5" />
                  <div className="relative flex min-h-[410px] flex-col justify-between p-7 sm:p-9">
                    <div className="flex items-start justify-between"><span className="font-display text-2xl text-gold">{offer.number}</span><span className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-black/10 backdrop-blur-md transition group-hover:border-gold group-hover:bg-gold group-hover:text-gold-foreground"><Icon size={18} /></span></div>
                    <div className="max-w-xl">
                      <h3 className="font-display text-4xl font-semibold leading-none sm:text-5xl">{offer.title}</h3>
                      <p className="mt-4 max-w-lg text-sm leading-7 text-white/68">{offer.text}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Découvrir <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-32">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Une seule équipe</p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[.9] md:text-7xl">Une propriété.<br />Un standard.</h2>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">L’objectif n’est pas de multiplier les prestataires, mais de rendre la gestion plus lisible, plus cohérente et plus sereine.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {[
              ["01","Observer","Contrôler le bien, identifier les besoins et anticiper."],
              ["02","Préparer","Organiser ménage, linge, consommables et interventions."],
              ["03","Accueillir","Créer une arrivée fluide et une présence adaptée."],
              ["04","Rendre compte","Vous tenir informé sans vous imposer la gestion quotidienne."],
            ].map(([n,t,d]) => <article key={n} className="bg-card p-7 sm:p-8"><span className="font-display text-3xl text-gold">{n}</span><h3 className="mt-8 font-display text-3xl font-semibold">{t}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary p-8 text-white shadow-elegant md:p-12 lg:p-16">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_85%_20%,rgba(214,174,92,.3),transparent_25%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl"><p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold"><MessageCircle size={14} />Votre propriété</p><h2 className="mt-5 font-display text-5xl font-semibold leading-[.9] md:text-7xl">Construisons le niveau de service qui vous ressemble.</h2><p className="mt-6 max-w-xl leading-7 text-white/65">Pas de formule rigide. Nous partons de votre bien, de votre rythme et de vos priorités.</p></div>
              <Button asChild variant="secondary" size="xl"><Link to="/contact">Parler de mon projet <ArrowRight /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}
