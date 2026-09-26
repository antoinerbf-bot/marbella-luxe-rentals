import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPinned, Sailboat, Trees, Waves } from "lucide-react";

import { ContactBand, PageHero, SolveigLayout } from "@/components/SolveigLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/zones")({
  head: () => ({
    meta: [
      { title: "Marbella & Mijas — Zones couvertes par Solveig’s Prestige Service" },
      { name: "description", content: "Gestion locative locale à Marbella, Mijas, Mijas Costa, La Cala, Calahonda et Riviera del Sol." },
      { property: "og:title", content: "Marbella & Mijas — Zones couvertes" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ZonesPage,
});

const areas = [
  { icon: Sailboat, name: "Marbella", kicker: "Le cœur international", text: "Villas, appartements premium, résidences proches de la mer et propriétés du centre historique.", image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Marbella_-_Plaza_de_los_Naranjos_8.jpg" },
  { icon: Trees, name: "Mijas Pueblo", kicker: "L’Andalousie en hauteur", text: "Maisons de charme, vues ouvertes et propriétés intimistes au cœur du village blanc.", image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mijas_Pueblo_from_the_south_(Mijas,_Dec_2012).jpg" },
  { icon: Waves, name: "La Cala de Mijas", kicker: "Le littoral", text: "Séjours balnéaires, familles, locations saisonnières et résidences entre village et Méditerranée.", image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/PLAYAS_DE_MIJAS.jpg" },
  { icon: MapPinned, name: "Calahonda & Riviera del Sol", kicker: "La côte résidentielle", text: "Une présence régulière pour les propriétaires absents et les biens à usage saisonnier.", image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/PLAYAS_DE_MIJAS.jpg" },
];

function ZonesPage() {
  return (
    <SolveigLayout>
      <PageHero
        eyebrow="Marbella · Mijas · Costa del Sol"
        title={<>La proximité change tout.</>}
        description="Une connaissance locale précise permet d’intervenir plus vite, de mieux anticiper et de comprendre les attentes propres à chaque quartier."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-5 md:grid-cols-2">
            {areas.map((area) => {
              const Icon = area.icon;
              return (
                <article key={area.name} className="group relative min-h-[470px] overflow-hidden rounded-[2rem] bg-primary text-white">
                  <img src={area.image} alt={area.name} className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                  <div className="relative flex min-h-[470px] flex-col justify-between p-7 sm:p-10">
                    <div className="flex items-center justify-between"><span className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/10 backdrop-blur-md"><Icon size={18} className="text-gold" /></span><span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">Costa del Sol</span></div>
                    <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{area.kicker}</p><h2 className="mt-3 font-display text-5xl font-semibold">{area.name}</h2><p className="mt-4 max-w-lg text-sm leading-7 text-white/68">{area.text}</p></div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-32">
          <div><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Un territoire vivant</p><h2 className="mt-5 font-display text-5xl font-semibold leading-[.9] md:text-7xl">Du check de votre villa au dernier détail d’un séjour.</h2></div>
          <div className="space-y-0 border-t border-border">
            {["Marbella Old Town & Golden Mile","Nueva Andalucía & Puerto Banús","Mijas Pueblo & Mijas Costa","La Cala, Calahonda & Riviera del Sol"].map((item, i) => <div key={item} className="flex items-center justify-between gap-5 border-b border-border py-6"><div className="flex items-center gap-5"><span className="font-display text-2xl text-gold">0{i+1}</span><span className="font-semibold">{item}</span></div><ArrowRight size={17} className="text-coast" /></div>)}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="rounded-[2rem] border border-border bg-card p-8 md:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Votre adresse</p><h2 className="mt-4 font-display text-5xl font-semibold leading-[.9] md:text-6xl">Votre propriété est-elle dans notre périmètre ?</h2><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Si votre bien se trouve dans Marbella, Mijas ou un secteur voisin, échangeons sur le niveau de présence dont vous avez besoin.</p></div>
              <Button asChild variant="prestige" size="xl"><Link to="/contact">Vérifier mon secteur <ArrowRight /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}
