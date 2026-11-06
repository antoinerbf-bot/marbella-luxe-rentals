import React from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { waLink } from '../lib/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Reveal } from './ui/Reveal';
import { useLanguage } from '../lib/LanguageContext';

interface ZoneItem {
  id: string;
  image: string;
  neighborhoods: string[];
}

const zonesMeta: ZoneItem[] = [
  {
    id: 'marbella',
    image: '/marbella-golden-mile.jpg',
    neighborhoods: ['Golden Mile', 'Nueva Andalucía', 'Puerto Banús', 'Casco Antiguo', 'Sierra Blanca'],
  },
  {
    id: 'mijas-pueblo',
    image: '/mijas-pueblo-charme.jpg',
    neighborhoods: ['Village Historique', 'Sierra de Mijas', 'Cortijos Traditionnels', 'Valtocado'],
  },
  {
    id: 'la-cala',
    image: '/la-cala-de-mijas.jpg',
    neighborhoods: ['Front de Mer', 'Torrenueva', 'El Chaparral', 'La Noria Golf'],
  },
  {
    id: 'calahonda',
    image: '/calahonda-riviera-sol.jpg',
    neighborhoods: ['Sitio de Calahonda', 'Riviera del Sol', 'Miraflores', 'Torrenueva Park'],
  },
];

export const MarbellaMijasSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const sec = t.territorySection;

  const territoryWaMessage =
    lang === 'en'
      ? 'Hello Solveig, my property is on the Costa del Sol. I would like to know if it falls within your care zone.'
      : lang === 'es'
      ? 'Hola Solveig, mi propiedad está en la Costa del Sol. Deseo consultar si se encuentra en su zona de cobertura.'
      : 'Bonjour Solveig, ma propriété est située sur la Costa del Sol. Je souhaite savoir si elle se situe dans votre zone d’intervention.';

  const translateNeighborhood = (n: string) => {
    if (lang === 'en') {
      if (n === 'Village Historique') return 'Historic Village';
      if (n === 'Cortijos Traditionnels') return 'Traditional Cortijos';
      if (n === 'Front de Mer') return 'Beachfront';
    } else if (lang === 'es') {
      if (n === 'Village Historique') return 'Pueblo Histórico';
      if (n === 'Cortijos Traditionnels') return 'Cortijos Tradicionales';
      if (n === 'Front de Mer') return 'Primera Línea';
    }
    return n;
  };

  return (
    <section id="territoire" className="relative border-t border-ink/5 bg-travertine py-24 sm:py-32">
      <div className="container-site">
        {/* En-tête de section */}
        <Reveal className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-bronze/30 bg-sand px-3.5 py-1 text-xs font-semibold text-bronze-deep mb-3">
              <MapPin className="h-3.5 w-3.5 text-bronze" />
              <span>{sec.eyebrow}</span>
            </div>
            <h2 className="font-serif text-3xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              {sec.titleMain} <br />
              <span className="italic text-bronze">{sec.titleItalic}</span>
            </h2>
          </div>
          <p className="text-sm font-light leading-relaxed text-ink-soft sm:text-base">
            {sec.description}
          </p>
        </Reveal>

        {/* 4 Cartes Territoires */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:mt-18">
          {zonesMeta.map((zone, idx) => {
            const data = sec.zones[zone.id] || {
              name: zone.id,
              kicker: '',
              description: '',
              badge: '',
            };

            return (
              <Reveal key={zone.id} delay={idx * 100}>
                <div className="card-luxury group flex h-full flex-col justify-between overflow-hidden">
                  {/* Photo */}
                  <div className="relative h-56 overflow-hidden bg-sand sm:h-64">
                    <img
                      src={zone.image}
                      alt={data.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-106"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                    <span className="glass-pill absolute left-4 top-4 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F3DEB0]">
                      {data.badge}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#F3DEB0]">
                        {data.kicker}
                      </p>
                      <h3 className="font-serif text-2xl font-medium sm:text-3xl">
                        {data.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description & Quartiers */}
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 space-y-4">
                    <p className="text-xs font-light leading-relaxed text-ink-soft sm:text-[13px]">
                      {data.description}
                    </p>

                    <div className="border-t border-ink/5 pt-3">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted mb-2">
                        {sec.coveredZones}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {zone.neighborhoods.map((n, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-sand border border-ink/5 px-2.5 py-0.5 text-[10px] text-ink-soft font-medium"
                          >
                            {translateNeighborhood(n)}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Encadré d'engagement territorial */}
        <Reveal className="mt-14 card-luxury overflow-hidden p-8 sm:p-12 shadow-[0_16px_40px_rgba(28,26,23,0.06)]">
          <div className="grid gap-8 items-center lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-3">
              <p className="eyebrow">{sec.manifestoEyebrow}</p>
              <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl lg:text-4xl">
                {sec.manifestoTitle}
              </h3>
              <p className="text-sm font-light leading-relaxed text-ink-soft max-w-2xl">
                {sec.manifestoDesc}
              </p>
            </div>

            <div className="flex lg:justify-end">
              <a
                href={waLink(territoryWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                <WhatsAppIcon />
                <span>{sec.manifestoCta}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
