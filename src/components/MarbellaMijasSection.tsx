import React from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { waLink } from '../lib/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Reveal } from './ui/Reveal';

interface ZoneItem {
  id: string;
  name: string;
  kicker: string;
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
    description:
      'Villas d’exception, demeures andalouses de prestige, résidences en bord de mer et propriétés emblématiques du Golden Mile.',
    neighborhoods: ['Golden Mile', 'Nueva Andalucía', 'Puerto Banús', 'Casco Antiguo', 'Sierra Blanca'],
    image: '/marbella-golden-mile.jpg',
    badge: 'Golden Mile & Banús',
  },
  {
    id: 'mijas-pueblo',
    name: 'Mijas Pueblo',
    kicker: 'L’Andalousie en hauteur',
    description:
      'Maisons de charme blanchies à la chaux, vues plongeantes sur la Méditerranée et cortijos intimistes aux ruelles fleuries.',
    neighborhoods: ['Village Historique', 'Sierra de Mijas', 'Cortijos Traditionnels', 'Valtocado'],
    image: '/mijas-pueblo-charme.jpg',
    badge: 'Village Blanc d’Artistes',
  },
  {
    id: 'la-cala',
    name: 'La Cala de Mijas',
    kicker: 'Le littoral vivant',
    description:
      'Séjours balnéaires, villégiatures familiales, belles demeures côtières et terrasses ombragées le long de la Senda Litoral.',
    neighborhoods: ['Front de Mer', 'Torrenueva', 'El Chaparral', 'La Noria Golf'],
    image: '/la-cala-de-mijas.jpg',
    badge: 'Plages & Art de Vivre',
  },
  {
    id: 'calahonda',
    name: 'Calahonda & Riviera del Sol',
    kicker: 'La côte résidentielle',
    description:
      'Villas andalouses nichées dans les pinèdes maritimes, domaines privés avec piscines et vue panoramique sur les golfs.',
    neighborhoods: ['Sitio de Calahonda', 'Riviera del Sol', 'Miraflores', 'Torrenueva Park'],
    image: '/calahonda-riviera-sol.jpg',
    badge: 'Résidences & Golfs',
  },
];

export const MarbellaMijasSection: React.FC = () => {
  const territoryWaMessage =
    'Bonjour Solveig, ma propriété est située sur la Costa del Sol. Je souhaite savoir si elle se situe dans votre zone d’intervention.';

  return (
    <section id="territoire" className="relative border-t border-ink/5 bg-travertine py-24 sm:py-32">
      <div className="container-site">
        {/* En-tête de section */}
        <Reveal className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-bronze/30 bg-sand px-3.5 py-1 text-xs font-semibold text-bronze-deep mb-3">
              <MapPin className="h-3.5 w-3.5 text-bronze" />
              <span>Marbella · Mijas · Costa del Sol</span>
            </div>
            <h2 className="font-serif text-3xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              La proximité <br />
              <span className="italic text-bronze">change tout.</span>
            </h2>
          </div>
          <p className="text-sm font-light leading-relaxed text-ink-soft sm:text-base">
            Une connaissance locale précise permet d’intervenir plus vite, de mieux anticiper et de comprendre les exigences propres à chaque quartier et à chaque propriété sur la Costa del Sol.
          </p>
        </Reveal>

        {/* 4 Cartes Territoires */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:mt-18">
          {zonesData.map((zone, idx) => (
            <Reveal key={zone.id} delay={idx * 100}>
              <div className="group flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-[0_4px_24px_rgba(28,26,23,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:border-bronze hover:shadow-[0_16px_40px_rgba(28,26,23,0.09)]">
                {/* Photo */}
                <div className="relative h-56 overflow-hidden bg-sand sm:h-64">
                  <img
                    src={zone.image}
                    alt={zone.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-106"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F3DEB0] backdrop-blur-md">
                    {zone.badge}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#F3DEB0]">
                      {zone.kicker}
                    </p>
                    <h3 className="font-serif text-2xl font-medium sm:text-3xl">
                      {zone.name}
                    </h3>
                  </div>
                </div>

                {/* Description & Quartiers */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 space-y-4">
                  <p className="text-xs font-light leading-relaxed text-ink-soft sm:text-[13px]">
                    {zone.description}
                  </p>

                  <div className="border-t border-ink/5 pt-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted mb-2">
                      Secteurs clés :
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {zone.neighborhoods.map((n, i) => (
                        <span
                          key={i}
                          className="rounded-md bg-sand px-2 py-0.5 text-[10px] text-ink-soft"
                        >
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Encadré d'engagement territorial */}
        <Reveal className="mt-14 overflow-hidden rounded-[2rem] border border-ink/10 bg-sand p-8 sm:p-12 shadow-sm">
          <div className="grid gap-8 items-center lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-3">
              <p className="eyebrow">Présence Locale 7j/7</p>
              <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl lg:text-4xl">
                Du contrôle régulier de votre villa au moindre détail d’un séjour.
              </h3>
              <p className="text-sm font-light leading-relaxed text-ink-soft max-w-2xl">
                Que vous soyez propriétaire d’un domaine à Marbella, d’un cortijo à Mijas Pueblo ou d’une villa de vacances à La Cala, Solveig’s Prestige Services est votre relais de confiance sur place, réactif et disponible toute l’année.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <a
                href={waLink(territoryWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <WhatsAppIcon />
                <span>Vérifier mon secteur avec Solveig</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
