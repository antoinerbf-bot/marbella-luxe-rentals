import React from 'react';
import { ArrowRight, Sparkles, KeyRound, CalendarDays, ChefHat, Check } from 'lucide-react';
import { ServiceId, waLink } from '../lib/site';
import { useLanguage } from '../lib/LanguageContext';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Reveal } from './ui/Reveal';

interface HeroSolaireVideoProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export const HeroSolaireVideo: React.FC<HeroSolaireVideoProps> = ({ onSelectService }) => {
  const { lang } = useLanguage();

  const dockServices: {
    id: ServiceId;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: 'property-management',
      title: 'PROPERTY',
      subtitle: 'MANAGEMENT',
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
      title: 'CONCIERGE',
      subtitle: 'SERVICES',
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
      title: 'RENTAL',
      subtitle: 'MANAGEMENT',
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
      title: lang === 'en' ? 'PRIVATE' : 'CHEF',
      subtitle: lang === 'en' ? 'CHEF' : lang === 'es' ? 'A DOMICILIO' : 'À DOMICILE',
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 27a13 13 0 1 1 26 0v4H11z" />
          <path d="M15 31v10h18V31" />
          <path d="M20 41v3h8v-3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#fbf7f0] text-[#34271e] overflow-hidden relative">
      {/* ========================================================================= */}
      {/* 1. HERO PANORAMIQUE — VILLA MARBELLA AU COUCHER DE SOLEIL                  */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative w-full min-h-[100svh] lg:h-screen lg:max-h-[960px] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-6 sm:pb-8"
        aria-label="Solveig’s Prestige Services — Marbella & Mijas"
      >
        {/* Background Image: Cadrage Panoramique Fidèle */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#081218]">
          <img
            src="/hero-marbella.png"
            alt="Villa d'exception au coucher de soleil à Marbella"
            className="w-full h-full object-cover object-[48%_center] sm:object-[center_18%] transition-transform duration-1000 scale-100"
            loading="eager"
          />

          {/* Dégradés doux sans assombrir le coucher de soleil ni la terrasse */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-[#081218]/85 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-56 bg-gradient-to-t from-[#081218] via-[#081218]/60 to-transparent pointer-events-none" />
        </div>

        {/* Identité Centrale placée dans le ciel supérieur */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center mt-2 sm:mt-6 md:mt-8 flex flex-col items-center">
          <h1 className="font-serif text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[0.08em] uppercase text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] leading-[0.95]">
            SOLVEIG’S
          </h1>

          <p className="mt-1 sm:mt-2 text-[9px] min-[380px]:text-[10px] sm:text-[12px] md:text-[13px] font-bold tracking-[0.38em] text-[#f7e1a0] uppercase drop-shadow-md">
            PRESTIGE SERVICES
          </p>

          <div className="mt-2.5 sm:mt-4 flex items-center justify-center gap-2 sm:gap-3 w-full">
            <span className="h-[1px] w-8 min-[380px]:w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#f1d291]/80 to-transparent" />
            <p className="text-[9px] min-[380px]:text-[10px] sm:text-[12px] font-semibold tracking-[0.28em] text-[#fff6e0] uppercase drop-shadow">
              MARBELLA & MIJAS
            </p>
            <span className="h-[1px] w-8 min-[380px]:w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#f1d291]/80 to-transparent" />
          </div>

          <p className="mt-2 sm:mt-3 max-w-md text-[11px] min-[380px]:text-xs sm:text-sm md:text-base text-white/95 font-light leading-snug sm:leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] px-2">
            {lang === 'en' ? (
              <>
                A discreet local presence for <br className="hidden sm:inline" />
                exceptional properties on the Costa del Sol
              </>
            ) : lang === 'es' ? (
              <>
                Una presencia local discreta para <br className="hidden sm:inline" />
                propiedades excepcionales en la Costa del Sol
              </>
            ) : (
              <>
                Une présence locale discrète pour <br className="hidden sm:inline" />
                des propriétés d’exception sur la Costa del Sol
              </>
            )}
          </p>
        </div>

        {/* Barre inférieure des 4 Services avec icônes dorées */}
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-12 mt-auto pt-2 sm:pt-8 pb-1 sm:pb-0">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#f1d291]/60 to-transparent mb-2 sm:mb-5" />

          <div className="grid grid-cols-4 gap-0 w-full rounded-2xl overflow-hidden bg-black/40 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border border-[#f1d291]/25 sm:border-none">
            {dockServices.map((service, index) => (
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
                className={`group relative cursor-pointer text-center flex flex-col items-center justify-between py-2.5 px-1 sm:p-4 lg:p-5 transition-all duration-300 ${
                  index !== 0 ? 'border-l border-[#f1d291]/30' : ''
                } hover:bg-black/30 lg:rounded-2xl`}
              >
                <div className="text-[#f1d291] group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 mb-1 sm:mb-1.5 drop-shadow">
                  <div className="w-5 h-5 min-[380px]:w-6 min-[380px]:h-6 sm:w-8 sm:h-8 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                    {service.icon}
                  </div>
                </div>

                <div className="flex flex-col items-center leading-tight min-h-[24px] sm:min-h-[32px] justify-center">
                  <span className="text-[7.5px] min-[380px]:text-[8.5px] sm:text-[12px] lg:text-[13px] font-bold tracking-[0.06em] sm:tracking-[0.16em] uppercase text-white group-hover:text-[#f4dfa5] transition-colors drop-shadow">
                    {service.title}
                  </span>
                  <span className="text-[6.5px] min-[380px]:text-[7.5px] sm:text-[11px] lg:text-[12px] font-medium tracking-[0.04em] sm:tracking-[0.12em] uppercase text-white/90 group-hover:text-[#f4dfa5] transition-colors drop-shadow">
                    {service.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. L'ART DU DÉTAIL — LES 4 CARTES SERVICES EN COULEURS CHALEUREUSES        */}
      {/* ========================================================================= */}
      <section id="services" className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-28 max-w-[1440px] mx-auto">
        <Reveal className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#b28a50] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c29a52]" />
              {lang === 'en'
                ? 'The Art of Detail · Marbella & Mijas'
                : lang === 'es'
                ? 'El Arte del Detalle · Marbella y Mijas'
                : 'L’art du détail · Marbella & Mijas'}
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-[0.95] text-[#34271e]">
              {lang === 'en' ? (
                <>
                  A service you can see.<br />
                  <span className="italic text-[#8c6742]">A presence you can feel.</span>
                </>
              ) : lang === 'es' ? (
                <>
                  Un servicio que se ve.<br />
                  <span className="italic text-[#8c6742]">Una presencia que se siente.</span>
                </>
              ) : (
                <>
                  Un service qui se voit.<br />
                  <span className="italic text-[#8c6742]">Une présence qui se ressent.</span>
                </>
              )}
            </h2>
          </div>
          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-[#66584c] lg:justify-self-end">
            {lang === 'en'
              ? 'From the meticulous care of your property to the personalized welcome of your guests, every intervention is designed as a natural extension of your lifestyle.'
              : lang === 'es'
              ? 'Desde el cuidado meticuloso de su propiedad hasta la bienvenida personalizada de sus invitados, cada intervención está pensada como una extensión natural de su estilo de vida.'
              : 'De la surveillance méticuleuse de votre propriété à l’accueil personnalisé de vos convives, chaque intervention est pensée comme une extension naturelle de votre art de vivre.'}
          </p>
        </Reveal>

        {/* Grille des 4 Cartes Visuelles */}
        <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {/* Carte 1 : Gestion de propriété */}
          <div
            onClick={() => onSelectService('property-management')}
            className="group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-[#fffdf8] border border-[#78664c]/15 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 sm:h-60 overflow-hidden">
                <img
                  src="/property-management-charm.jpg"
                  alt="Domaine de charme et villa andalouse d'exception à Marbella"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase border border-white/20">
                  {lang === 'en' ? '01 · Property Care' : lang === 'es' ? '01 · Propiedad' : '01 · Intendance & Domaine'}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="w-10 h-10 rounded-2xl bg-[#c29a52]/15 text-[#987543] flex items-center justify-center mb-4">
                  <KeyRound className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#34271e] group-hover:text-[#987543] transition-colors">
                  {lang === 'en' ? 'Property Management' : lang === 'es' ? 'Gestión de Propiedad' : 'Gestion de propriété'}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#74665a] leading-relaxed">
                  {lang === 'en'
                    ? 'Your home in trusted hands even when you are away. Attentive inspections, regular visits, photo reports, and coordination of trusted craftsmen.'
                    : lang === 'es'
                    ? 'Su casa en buenas manos incluso en su ausencia. Supervisión atenta, visitas periódicas, informes fotográficos y coordinación de artesanos.'
                    : 'Votre maison, entre de bonnes mains même lorsque vous êtes loin. Surveillance attentive, visites régulières et coordination bienveillante des prestataires.'}
                </p>
              </div>
            </div>
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4f7f80] group-hover:text-[#2e8068]">
                <span>{lang === 'en' ? 'Discover' : lang === 'es' ? 'Descubrir' : 'Découvrir'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* Carte 2 : Conciergerie privée */}
          <div
            onClick={() => onSelectService('concierge-services')}
            className="group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-[#fffdf8] border border-[#78664c]/15 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 sm:h-60 overflow-hidden">
                <img
                  src="/candidates/option1_yacht.jpg"
                  alt="Conciergerie privée et yacht charter au coucher de soleil à Puerto Banús"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase border border-white/20">
                  {lang === 'en' ? '02 · Concierge 7/7' : lang === 'es' ? '02 · Conserjería 7/7' : '02 · Conciergerie 7/7'}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="w-10 h-10 rounded-2xl bg-[#c29a52]/15 text-[#987543] flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#34271e] group-hover:text-[#987543] transition-colors">
                  {lang === 'en'
                    ? 'Private Concierge & Lifestyle 7/7'
                    : lang === 'es'
                    ? 'Conserjería Privada y Lifestyle 7/7'
                    : 'Conciergerie privée et lifestyle 7/7'}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#74665a] leading-relaxed">
                  {lang === 'en'
                    ? 'A discreet local presence to make every stay effortless. Fine dining tables, golf, yacht charters, or private chauffeurs: Solveig’s Prestige Services anticipates every moment.'
                    : lang === 'es'
                    ? 'Una presencia local para hacer cada estancia más fluida con total discreción. Mesas excepcionales, golf, mar o chófer privado: anticipamos cada instante.'
                    : 'Une présence locale pour rendre les séjours plus fluides et les demandes plus simples avec discrétion. Tables d’exception, golf, mer ou chauffeur privé : Solveig’s Prestige Services anticipe chaque instant.'}
                </p>
              </div>
            </div>
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4f7f80] group-hover:text-[#2e8068]">
                <span>{lang === 'en' ? 'Discover' : lang === 'es' ? 'Descubrir' : 'Découvrir'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* Carte 3 : Location saisonnière */}
          <div
            onClick={() => onSelectService('rental-management')}
            className="group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-[#fffdf8] border border-[#78664c]/15 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 sm:h-60 overflow-hidden">
                <img
                  src="/rental-management-charm.jpg"
                  alt="Domaine de villégiature et villa andalouse de prestige à Marbella"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase border border-white/20">
                  {lang === 'en' ? '03 · Seasonal Rental' : lang === 'es' ? '03 · Alquiler Vacacional' : '03 · Location Saisonnière'}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="w-10 h-10 rounded-2xl bg-[#c29a52]/15 text-[#987543] flex items-center justify-center mb-4">
                  <CalendarDays className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#34271e] group-hover:text-[#987543] transition-colors">
                  {lang === 'en' ? 'Seasonal Rental' : lang === 'es' ? 'Alquiler de Temporada' : 'Location saisonnière'}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#74665a] leading-relaxed">
                  {lang === 'en'
                    ? 'A stay experience crafted before arrival, orchestrated to preserve your property and the quality of every stay.'
                    : lang === 'es'
                    ? 'Una experiencia pensada antes de la llegada, orquestada para preservar su propiedad y la calidad de cada estancia.'
                    : 'Une expérience de séjour pensée avant même l’arrivée. Orchestrée pour préserver votre bien et la qualité de chaque séjour.'}
                </p>

                {/* 2 Formules Claires */}
                <div className="mt-3 pt-2.5 border-t border-[#78664c]/15 text-[11px] text-[#66584c] space-y-1">
                  <p className="flex items-center gap-1.5 font-medium text-[#8c6742]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c29a52]" />
                    {lang === 'en'
                      ? 'Option 1 · Bookings managed by you'
                      : lang === 'es'
                      ? 'Opción 1 · Reservas gestionadas por usted'
                      : 'Option 1 · Réservations gérées par vous'}
                  </p>
                  <p className="flex items-center gap-1.5 font-medium text-[#8c6742]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c29a52]" />
                    {lang === 'en'
                      ? 'Option 2 · Bookings managed by us'
                      : lang === 'es'
                      ? 'Opción 2 · Reservas gestionadas por nosotros'
                      : 'Option 2 · Réservations gérées par nous'}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4f7f80] group-hover:text-[#2e8068]">
                <span>{lang === 'en' ? 'Discover' : lang === 'es' ? 'Descubrir' : 'Découvrir'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* Carte 4 : Chef à domicile */}
          <div
            onClick={() => onSelectService('chef-a-domicile')}
            className="group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-[#fffdf8] border border-[#78664c]/15 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 sm:h-60 overflow-hidden">
                <img
                  src="/chef-dominique-cepes.jpg"
                  alt="Le Chef Dominique Hybord à domicile à Marbella"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#34241b]/85 backdrop-blur-md text-[#fbe8b5] text-[10px] font-bold tracking-widest uppercase border border-[#c29a52]/40">
                  {lang === 'en' ? '04 · Private Chef' : lang === 'es' ? '04 · Chef a Domicilio' : '04 · Chef à domicile'}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="w-10 h-10 rounded-2xl bg-[#c29a52]/15 text-[#987543] flex items-center justify-center mb-4">
                  <ChefHat className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#34271e] group-hover:text-[#987543] transition-colors">
                  {lang === 'en' ? 'Private Chef at Home' : lang === 'es' ? 'Chef a Domicilio' : 'Chef à domicile'}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#74665a] leading-relaxed">
                  {lang === 'en'
                    ? 'The art of hosting at home. Bespoke menus crafted directly with the chef according to your tastes, desires, and budget.'
                    : lang === 'es'
                    ? 'El arte de recibir en casa. Menús a medida creados directamente con el chef según sus gustos, deseos y presupuesto.'
                    : 'L’art de recevoir chez soi. Menus sur-mesure imaginés en direct avec le chef selon vos goûts, vos envies et votre budget.'}
                </p>
              </div>
            </div>
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4f7f80] group-hover:text-[#2e8068]">
                <span>{lang === 'en' ? 'Discover' : lang === 'es' ? 'Descubrir' : 'Découvrir'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
