import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

interface HeroCinematicProps {
  onSelectService: (serviceId: string) => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'property-management',
    number: '01',
    title: 'PROPERTY',
    subtitle: 'MANAGEMENT',
    description: 'Surveillance méticuleuse, entretien technique rigoureux, coordination des prestataires et préparation avant chaque séjour.',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22 24 5l20 17" />
        <path d="M10 19v24h28V19" />
        <path d="M20 43V29h8v14" />
      </svg>
    ),
  },
  {
    id: 'concierge-services',
    number: '02',
    title: 'CONCIERGE',
    subtitle: 'SERVICES',
    description: 'Accueil personnalisé, réservations prioritaires (beach clubs, tables étoilées, yachts) et conciergerie privée 24/7.',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    title: 'RENTAL',
    subtitle: 'MANAGEMENT',
    description: 'Commercialisation haut de gamme, sélection minutieuse des locataires, contrôle d’état des lieux et rentabilité optimisée.',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="31" cy="14" r="9" />
        <path d="m25 20-19 19 5 5 19-19" />
        <path d="M27 14h8" />
      </svg>
    ),
  },
  {
    id: 'chef-a-domicile',
    number: '04',
    title: 'CHEF',
    subtitle: 'À DOMICILE',
    description: 'Haute gastronomie sur-mesure préparée et servie directement dans votre villa. Menus raffinés et art de recevoir d’exception.',
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 27a13 13 0 1 1 26 0v4H11z" />
        <path d="M15 31v10h18V31" />
        <path d="M20 41v3h8v-3" />
      </svg>
    ),
  },
];

export const HeroCinematic: React.FC<HeroCinematicProps> = ({ onSelectService }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] lg:h-screen lg:max-h-[960px] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-6 sm:pb-8"
      aria-label="Solveig’s Prestige Service — Marbella & Mijas"
    >
      {/* Background Image: Cadrage Panoramique Fidèle (Palmier à droite et fleurs à gauche toujours visibles) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-marbella.png"
          alt="Villa d'exception au coucher de soleil à Marbella"
          className="w-full h-full object-cover object-[center_22%] sm:object-[center_18%] transition-transform duration-1000 scale-100"
          loading="eager"
        />



        {/* Shading Gradients: Contrast without darkening the sunset or the terrace */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-[#081218]/85 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-56 bg-gradient-to-t from-[#081218] via-[#081218]/60 to-transparent pointer-events-none" />
      </div>

      {/* Center Brand Identity: Positioned in the Upper Sky (NO SP MONOGRAM, NO SUPERPOSITION) */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center mt-4 sm:mt-6 md:mt-8 flex flex-col items-center">
        {/* Title: SOLVEIG'S */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[0.08em] uppercase text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] leading-[0.95]">
          SOLVEIG’S
        </h1>

        {/* Subtitle */}
        <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-[12px] md:text-[13px] font-bold tracking-[0.38em] text-[#f7e1a0] uppercase drop-shadow-md">
          PRESTIGE SERVICE
        </p>

        {/* Region Tag with Gold Accents */}
        <div className="mt-3 sm:mt-4 flex items-center justify-center gap-3 w-full">
          <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#f1d291]/80 to-transparent" />
          <p className="text-[10px] sm:text-[12px] font-semibold tracking-[0.28em] text-[#fff6e0] uppercase drop-shadow">
            MARBELLA & MIJAS
          </p>
          <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#f1d291]/80 to-transparent" />
        </div>

        {/* Tagline */}
        <p className="mt-3 max-w-xl text-xs sm:text-sm md:text-base text-white/95 font-light leading-snug sm:leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] px-2">
          Une présence locale discrète pour <br className="hidden sm:inline" />
          des propriétés d’exception sur la Costa del Sol
        </p>
      </div>

      {/* Bottom 4 Services Bar: Positioned Cleanly Over Water with ZERO Collisions */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mt-auto pt-6 sm:pt-8">
        {/* Subtle horizontal gold border divider on desktop */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#f1d291]/60 to-transparent mb-4 sm:mb-5 hidden sm:block" />

        {/* Desktop 4 columns over the pool / Mobile 2x2 clear tactile cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-0">
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
              className={`group relative cursor-pointer text-center flex flex-col items-center justify-between p-3 sm:p-4 lg:p-5 transition-all duration-300 rounded-2xl sm:rounded-none ${
                /* Mobile frosted luxury card effect */
                'bg-black/55 backdrop-blur-md border border-[#f1d291]/35 hover:border-[#f1d291]/80 hover:bg-black/75 shadow-xl'
              } ${
                /* Desktop border dividers */
                index !== 0 ? 'lg:border-l lg:border-[#f1d291]/30 lg:border-t-0 lg:border-r-0 lg:border-b-0' : 'lg:border-none'
              } ${
                'lg:bg-transparent lg:backdrop-blur-none lg:shadow-none lg:hover:bg-black/30 lg:rounded-2xl'
              }`}
            >
              {/* Service Icon with Golden Hue */}
              <div className="text-[#f1d291] group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 mb-1.5 drop-shadow">
                {service.icon}
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col items-center leading-tight">
                <span className="text-[11px] sm:text-[12px] lg:text-[13px] font-bold tracking-[0.16em] uppercase text-white group-hover:text-[#f4dfa5] transition-colors drop-shadow">
                  {service.title}
                </span>
                <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-medium tracking-[0.12em] uppercase text-white/90 group-hover:text-[#f4dfa5] transition-colors drop-shadow">
                  {service.subtitle}
                </span>
              </div>

              {/* Circular Action Button with Arrow */}
              <div className="mt-2.5">
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#f1d291]/70 bg-black/40 group-hover:border-[#f4dfa5] group-hover:bg-[#c29a52] flex items-center justify-center transition-all duration-300 shadow-[0_0_12px_rgba(241,210,145,0.25)] group-hover:shadow-[0_0_20px_rgba(244,223,165,0.7)] group-hover:scale-110"
                  aria-label={`Découvrir ${service.title} ${service.subtitle}`}
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#f1d291] group-hover:text-black transition-all duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>

              {/* Mobile Quick Tap Indicator */}
              <span className="text-[9px] tracking-wider text-[#f1d291]/90 mt-1 sm:hidden font-medium">
                Découvrir →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
