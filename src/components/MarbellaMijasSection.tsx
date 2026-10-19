import React from 'react';
import { ArrowRight, MapPin, Sailboat, Trees, Waves, Sparkles, Building2, ShieldCheck, Check } from 'lucide-react';

interface ZoneItem {
  id: string;
  name: string;
  kicker: string;
  tagline: string;
  description: string;
  neighborhoods: string[];
  image: string;
  badge: string;
}

const zonesData: ZoneItem[] = [
  {
    id: 'marbella',
    name: 'Marbella',
    kicker: 'Le cœur international',
    tagline: 'L’élégance cosmopolite entre mer et montagne',
    description:
      'Villas d’exception, appartements de prestige, résidences en bord de mer et propriétés emblématiques du centre historique.',
    neighborhoods: ['Golden Mile', 'Nueva Andalucía', 'Puerto Banús', 'Casco Antiguo', 'Sierra Blanca'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    badge: 'Golden Mile & Banús',
  },
  {
    id: 'mijas-pueblo',
    name: 'Mijas Pueblo',
    kicker: 'L’Andalousie en hauteur',
    tagline: 'L’authenticité du village blanc préservé',
    description:
      'Maisons de charme, vues panoramiques plongeantes sur la Méditerranée et propriétés intimistes au cœur des ruelles fleuries.',
    neighborhoods: ['Village Historique', 'Sierra de Mijas', 'Cortijos Traditionnels', 'Valtocado'],
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=85',
    badge: 'Village Blanc d’Artistes',
  },
  {
    id: 'la-cala',
    name: 'La Cala de Mijas',
    kicker: 'Le littoral vivant',
    tagline: 'L’art de vivre balnéaire les pieds dans l’eau',
    description:
      'Séjours balnéaires, villégiatures familiales, locations saisonnières et belles résidences entre village marin et plages dorées.',
    neighborhoods: ['Front de Mer', 'Torrenueva', 'El Chaparral', 'La Noria Golf'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    badge: 'Plages & Art de Vivre',
  },
  {
    id: 'calahonda',
    name: 'Calahonda & Riviera del Sol',
    kicker: 'La côte résidentielle',
    tagline: 'Sérénité et villégiature toute l’année',
    description:
      'Une présence continue pour les propriétaires absents et les biens destinés à la villégiature estivale et hivernale.',
    neighborhoods: ['Sitio de Calahonda', 'Riviera del Sol', 'Miraflores', 'Torrenueva Park'],
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=85',
    badge: 'Résidences & Golfs',
  },
];

export const MarbellaMijasSection: React.FC = () => {
  return (
    <section id="marbella" className="relative py-24 px-5 sm:px-8 lg:px-12 bg-[#122026] text-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#c29a52]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-[#4f7f80]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto">
        {/* Section Header with exact 1st project copy */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-border/40 bg-[#c29a52]/10 text-[#fbe8b5] text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#edd088]" />
              Marbella · Mijas · Costa del Sol
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[0.98] text-white">
              La proximité <br />
              <span className="italic text-[#edd088]">change tout.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light lg:justify-self-end max-w-xl">
            Une connaissance locale précise permet d’intervenir plus vite, de mieux anticiper et de comprendre les attentes propres à chaque quartier et à chaque propriété sur la Costa del Sol.
          </p>
        </div>

        {/* 4 Territory Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {zonesData.map((zone) => (
            <div
              key={zone.id}
              className="group relative overflow-hidden rounded-3xl bg-[#17272f] border border-gold-border/30 hover:border-gold-border/80 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Photo Box */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={zone.image}
                  alt={zone.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17272f] via-transparent to-black/30 pointer-events-none" />

                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#edd088] text-[9.5px] font-bold tracking-widest uppercase border border-white/15">
                  {zone.badge}
                </span>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#edd088] block mb-0.5">
                    {zone.kicker}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-medium">
                    {zone.name}
                  </h3>
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs sm:text-[13px] text-white/75 leading-relaxed font-light">
                    {zone.description}
                  </p>
                </div>

                {/* Neighborhoods tags */}
                <div className="pt-3 border-t border-white/10">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/50 block mb-2">
                    Secteurs couverts :
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {zone.neighborhoods.map((n, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-white/80 border border-white/10"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Territory Manifesto Band (From 1st project) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#172931] via-[#1c333e] to-[#14232a] border border-gold-border/40 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#edd088]">
                Un territoire vivant · Présence Locale 7j/7
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-snug">
                Du check de votre villa au dernier détail d’un séjour.
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light max-w-3xl">
                Que vous soyez propriétaire d’un domaine à Marbella, d’une maison de caractère à Mijas Pueblo ou d’une villa de vacances à La Cala, Solveig’s Prestige Service est votre relais de confiance sur place, réactif et disponible 365 jours par an.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20ma%20propri%C3%A9t%C3%A9%20est%20situ%C3%A9e%20sur%20la%20Costa%20del%20Sol,%20je%20souhaite%20%C3%A9changer%20avec%20vous."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black font-semibold text-xs sm:text-sm shadow-xl shadow-gold/20 hover:scale-105 transition-all"
              >
                <span>Vérifier mon secteur avec Solveig</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
