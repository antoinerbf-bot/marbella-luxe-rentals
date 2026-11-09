import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

interface AndalusianView {
  id: string;
  code: string;
  name: string;
  location: string;
  image: string;
  motionClass: string;
}

interface HeroCinematicProps {
  onSelectService: (serviceId: string) => void;
}

// 5 Points de vue 100% authentiques Andalousie, Marbella & Mijas (mouvement cinématique continu)
const andalusianViews: AndalusianView[] = [
  {
    id: 'golden-mile',
    code: '01',
    name: 'Golden Mile & La Concha',
    location: 'Marbella',
    image: '/marbella-golden-mile.jpg',
    motionClass: 'animate-drone-1',
  },
  {
    id: 'villa-andalouse',
    code: '02',
    name: 'Demeure Andalouse',
    location: 'Marbella & Mijas',
    image: '/property-management-charm.jpg',
    motionClass: 'animate-drone-2',
  },
  {
    id: 'panorama-mer',
    code: '03',
    name: 'Terrasses sur la Méditerranée',
    location: 'Costa del Sol',
    image: '/rental-management-charm.jpg',
    motionClass: 'animate-drone-3',
  },
  {
    id: 'cortijo',
    code: '04',
    name: 'Cortijo & Patio Fleuri',
    location: 'Sierra Blanca',
    image: '/cortijo-charme-marbella.jpg',
    motionClass: 'animate-drone-2',
  },
  {
    id: 'mijas-pueblo',
    code: '05',
    name: 'Village Blanc & Horizon',
    location: 'Mijas Pueblo',
    image: '/mijas-pueblo-charme.jpg',
    motionClass: 'animate-drone-1',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'property-management',
    number: '01',
    title: 'Gestion de Propriété',
    subtitle: 'Intendance & Veille 365j/an',
    description:
      'Surveillance attentive, visites régulières, coordination des prestataires et préparation soignée avant chaque séjour.',
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 22 24 5l20 17" />
        <path d="M10 19v24h28V19" />
        <path d="M20 43V29h8v14" />
      </svg>
    ),
  },
  {
    id: 'concierge-services',
    number: '02',
    title: 'Conciergerie 7/7',
    subtitle: 'Lifestyle & Sur-Mesure',
    description:
      'Accueil personnalisé, réservations prioritaires (beach clubs, tables prisées, yachts) et conciergerie privée 7/7.',
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 34h32l-4-6H12z" />
        <path d="M13 28a11 11 0 0 1 22 0" />
        <path d="M24 6v6" />
        <path d="M20 6h8" />
      </svg>
    ),
  },
  {
    id: 'rental-management',
    number: '03',
    title: 'Location Saisonnière',
    subtitle: '2 Formules au Choix',
    description:
      'Suivi sur place de vos propres réservations ou gestion intégrale clé en main pour valoriser votre propriété.',
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="31" cy="14" r="9" />
        <path d="m25 20-19 19 5 5 19-19" />
        <path d="M27 14h8" />
      </svg>
    ),
  },
  {
    id: 'chef-a-domicile',
    number: '04',
    title: 'Chef à Domicile',
    subtitle: 'Chef Dominique Hybord',
    description:
      'Un chef privé cuisine directement dans votre villa : un menu imaginé avec vous, des produits frais de saison et un service attentionné.',
    icon: (
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 27a13 13 0 1 1 26 0v4H11z" />
        <path d="M15 31v10h18V31" />
        <path d="M20 41v3h8v-3" />
      </svg>
    ),
  },
];

export const HeroCinematic: React.FC<HeroCinematicProps> = ({ onSelectService }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  // Transition fluide automatique toutes les 6.5 secondes entre les 5 vues d'Andalousie
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % andalusianViews.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] lg:h-screen lg:max-h-[980px] flex flex-col justify-end overflow-hidden pt-28 pb-6 sm:pb-8 bg-[#0b161b]"
      aria-label="Solveig’s Prestige Services — Marbella & Mijas"
    >
      {/* ========================================================================= */}
      {/* ARRIÈRE-PLAN CINÉMATIQUE MULTI-VUES ANDALOUSIE (MOUVEMENT DRONE FLUIDE)   */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a1418]">
        {andalusianViews.map((view, idx) => {
          const isActive = idx === activeIdx;
          return (
            <div
              key={view.id}
              className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={view.image}
                alt={`${view.name} — ${view.location}`}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className={`w-full h-full object-cover object-center ${
                  isActive ? view.motionClass : 'scale-105'
                }`}
              />
            </div>
          );
        })}

        {/* Dégradé subtil : laisse les 65% supérieurs de l'image totalement purs et lumineux */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/45 via-transparent to-[#071116]/95 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-80 z-20 bg-gradient-to-t from-[#071116] via-[#071116]/75 to-transparent pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* BLOC INFÉRIEUR INTÉGRÉ : ÉDITORIAL ÉPURÉ + SÉLECTEUR DE VUES + DOCK       */}
      {/* ========================================================================= */}
      <div className="relative z-30 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mt-auto">
        {/* Ligne Éditoriale & Sélecteur de Vues Discret */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-7">
          {/* Gauche : Titre élégant et accroche raffinée (sans surcharger l'image) */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-[#f1d291] mb-2.5 drop-shadow">
              <Sparkles className="w-3.5 h-3.5 text-[#f1d291]" />
              <span>Marbella & Mijas · Costa del Sol</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.5rem] font-normal text-white leading-[1.06] tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              L’élégance d’une présence discrète,{' '}
              <span className="italic font-light text-[#f4dfa5] block sm:inline">
                au cœur de l’Andalousie.
              </span>
            </h1>

            <p className="mt-2.5 text-xs sm:text-sm md:text-[15px] text-white/85 font-light leading-relaxed max-w-xl drop-shadow">
              Intendance de propriété à l’année, conciergerie privée 7/7, gestion locative sur-mesure et table privée du Chef Dominique Hybord.
            </p>
          </div>

          {/* Droite : Sélecteur minimaliste des 5 panoramas andalous */}
          <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#f1d291]/90 font-semibold">
              <span>{andalusianViews[activeIdx].location}</span>
              <span className="text-white/30">—</span>
              <span className="text-white/90 font-light">{andalusianViews[activeIdx].name}</span>
            </div>

            {/* Barre de sélection fine et épurée */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {andalusianViews.map((view, idx) => {
                const active = idx === activeIdx;
                return (
                  <button
                    key={view.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`Voir ${view.name}`}
                    className="group py-1.5 focus:outline-none flex items-center gap-1.5"
                  >
                    <span
                      className={`text-[9.5px] font-bold tracking-widest transition-colors ${
                        active ? 'text-[#f1d291]' : 'text-white/40 group-hover:text-white/75'
                      }`}
                    >
                      {view.code}
                    </span>
                    <span
                      className={`h-[2px] rounded-full transition-all duration-500 ${
                        active
                          ? 'w-7 sm:w-9 bg-[#f1d291]'
                          : 'w-2.5 sm:w-3.5 bg-white/25 group-hover:bg-white/50'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Filet d'or horizontal */}
        <div className="w-full h-px bg-gradient-to-r from-[#f1d291]/50 via-[#f1d291]/25 to-transparent mb-4" />

        {/* Dock unifié des 4 Prestations (1 seul bandeau vitré fluide et épuré) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden bg-[#0a151a]/70 backdrop-blur-xl border border-[#f1d291]/25 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectService(service.id);
                }
              }}
              className={`group cursor-pointer p-3.5 sm:p-4 lg:px-6 lg:py-4.5 transition-all duration-300 flex items-center justify-between gap-3 hover:bg-white/[0.06] ${
                index !== 0 ? 'border-t sm:border-t-0 lg:border-l border-[#f1d291]/15' : ''
              } ${index % 2 !== 0 ? 'border-l border-[#f1d291]/15' : ''}`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="text-[#f1d291] group-hover:text-white transition-colors duration-300 shrink-0">
                  {service.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#edd088]/80 truncate">
                    {service.number} · {service.subtitle}
                  </p>
                  <h2 className="font-serif text-sm sm:text-[17px] font-medium text-white group-hover:text-[#f4dfa5] transition-colors truncate mt-0.5">
                    {service.title}
                  </h2>
                </div>
              </div>

              <ArrowRight className="w-3.5 h-3.5 text-[#f1d291]/70 group-hover:text-[#f1d291] shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
