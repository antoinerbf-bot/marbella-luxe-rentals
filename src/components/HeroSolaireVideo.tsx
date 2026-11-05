import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown, ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
import { ServiceId, waLink } from '../lib/site';
import { serviceHref } from '../lib/router';
import { useLanguage } from '../lib/LanguageContext';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Reveal } from './ui/Reveal';

interface HeroSolaireVideoProps {
  onSelectService: (serviceId: ServiceId) => void;
}

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  kickerFr: string;
  kickerEn: string;
  kickerEs: string;
  captionFr: string;
  captionEn: string;
  captionEs: string;
}

const slides: HeroSlide[] = [
  {
    id: 'villa-sunset',
    image: '/hero-marbella.png',
    alt: 'Villa contemporaine d’exception face au coucher de soleil à Marbella',
    kickerFr: 'Costa del Sol · Marbella',
    kickerEn: 'Costa del Sol · Marbella',
    kickerEs: 'Costa del Sol · Marbella',
    captionFr: 'Terrasse d’exception & panorama infini sur la Méditerranée',
    captionEn: 'Prime terrace & endless Mediterranean sea views',
    captionEs: 'Terraza exclusiva y vistas infinitas al Mediterráneo',
  },
  {
    id: 'property-care',
    image: '/property-management-charm.jpg',
    alt: 'Domaine andalou avec piscine privée et jardin paysager méditerranéen',
    kickerFr: 'Intendance de Domaine · Mijas & Marbella',
    kickerEn: 'Estate Care · Mijas & Marbella',
    kickerEs: 'Cuidado de Fincas · Mijas y Marbella',
    captionFr: 'Surveillance méticuleuse et sérénité absolue toute l’année',
    captionEn: 'Meticulous oversight and complete year-round peace of mind',
    captionEs: 'Supervisión meticulosa y total serenidad todo el año',
  },
  {
    id: 'yacht-lifestyle',
    image: '/concierge-yacht-vip.jpg',
    alt: 'Journée en mer au coucher de soleil face à la baie de Puerto Banús',
    kickerFr: 'Conciergerie Privée 7/7 · Puerto Banús',
    kickerEn: 'Private Concierge 7/7 · Puerto Banús',
    kickerEs: 'Conserjería Privada 7/7 · Puerto Banús',
    captionFr: 'Yacht charter, tables prisées et privilèges exclusifs',
    captionEn: 'Private yacht charter, prime tables & bespoke privileges',
    captionEs: 'Alquiler de yates, mesas exclusivas y privilegios únicos',
  },
  {
    id: 'cortijo-andalou',
    image: '/cortijo-charme-marbella.jpg',
    alt: 'Patio andalou traditionnel baigné de lumière méditerranéenne',
    kickerFr: 'Art de Vivre · Sierra Blanca',
    kickerEn: 'Art of Living · Sierra Blanca',
    kickerEs: 'Arte de Vivir · Sierra Blanca',
    captionFr: 'La noblesse architecturale des grandes demeures andalouses',
    captionEn: 'Architectural nobility of authentic Andalusian estates',
    captionEs: 'La nobleza arquitectónica de las grandes fincas andaluzas',
  },
  {
    id: 'rental-horizon',
    image: '/rental-management-charm.jpg',
    alt: 'Villa de vacances de charme avec piscine à débordement sur la côte',
    kickerFr: 'Gestion Locative Haute Gamme',
    kickerEn: 'Luxury Rental Management',
    kickerEs: 'Gestión de Alquiler Vacacional VIP',
    captionFr: 'Accueil personnalisé et valorisation soignée de votre bien',
    captionEn: 'VIP personalized hosting and estate yield enhancement',
    captionEs: 'Atención personalizada y revalorización de su propiedad',
  },
];

export const HeroSolaireVideo: React.FC<HeroSolaireVideoProps> = ({ onSelectService }) => {
  const { lang, t } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<number | null>(null);

  // Défilement automatique fluide (6.5 secondes par image avec transition douce)
  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = window.setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  const goToSlide = (idx: number) => {
    setCurrentIdx(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    if (isAutoPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentIdx((prev) => (prev + 1) % slides.length);
      }, 6500);
    }
  };

  const nextSlide = () => goToSlide((currentIdx + 1) % slides.length);
  const prevSlide = () => goToSlide((currentIdx - 1 + slides.length) % slides.length);

  const currentSlide = slides[currentIdx];

  const getKicker = (s: HeroSlide) =>
    lang === 'en' ? s.kickerEn : lang === 'es' ? s.kickerEs : s.kickerFr;
  const getCaption = (s: HeroSlide) =>
    lang === 'en' ? s.captionEn : lang === 'es' ? s.captionEs : s.captionFr;

  return (
    <div className="relative w-full bg-travertine text-ink">
      {/* ========================================================================= */}
      {/* 1. HERO : COMPOSITION ÉDITORIALE LUXE & DÉFILEMENT CINÉMATIQUE FLUIDE     */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden px-5 pb-8 pt-28 sm:px-10 sm:pb-12 sm:pt-36 lg:px-16"
        aria-label="Solveig’s Prestige Services — Accueil"
      >
        {/* Galerie d'images en fondu-enchaîné GPU ultra-fluide */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-night">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentIdx ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
              aria-hidden={idx !== currentIdx}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className={`h-full w-full object-cover object-center ${
                  idx === currentIdx ? 'scale-105' : 'scale-100'
                } transition-transform duration-[7000ms] ease-out`}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          {/* Double masque de contraste architectural */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/55" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(201,168,105,0.18),transparent_75%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-travertine via-travertine/30 to-transparent" />
        </div>

        {/* Barre supérieure : Surtitre géographique discret */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#FFF5E0] shadow-lg backdrop-blur-md sm:text-[11px]">
            <Sparkles className="h-3.5 w-3.5 text-bronze-light" />
            <span>{t.hero.locationTag}</span>
          </div>

          {/* Boutons pause/lecture & flèches du carrousel */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-md transition hover:border-bronze hover:text-white"
              aria-label={isAutoPlaying ? 'Pause' : 'Play'}
            >
              {isAutoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 text-bronze-light" />}
            </button>
            <button
              onClick={prevSlide}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-md transition hover:border-bronze hover:text-white"
              aria-label="Image précédente"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/80 backdrop-blur-md transition hover:border-bronze hover:text-white"
              aria-label="Image suivante"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Cœur Typographique Architectural : Marque parfaitement intégrée */}
        <div className="relative z-10 my-auto flex max-w-4xl flex-col items-center py-6 text-center mx-auto">
          {/* Logo / Monogramme typographique majestueux */}
          <h1 className="font-serif text-5xl font-normal leading-[0.9] tracking-[0.14em] uppercase text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] sm:text-7xl md:text-8xl lg:text-[6.6rem]">
            {t.hero.brandName}
          </h1>

          <p className="mt-2 text-xs font-bold uppercase tracking-[0.45em] text-[#F3DEB0] drop-shadow sm:mt-3 sm:text-sm md:text-base">
            {t.hero.brandSubtitle}
          </p>

          {/* Ligne méditerranéenne bronze d'orfèvrerie */}
          <div className="mt-5 flex w-full max-w-xs items-center justify-center gap-4 sm:mt-6">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-bronze-light/70 to-transparent" />
            <span className="h-1.5 w-1.5 rotate-45 border border-bronze-light bg-bronze/50" />
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-bronze-light/70 to-transparent" />
          </div>

          {/* Tagline éditoriale claire */}
          <p className="mt-5 max-w-xl px-4 text-sm font-light leading-relaxed tracking-wide text-white/95 drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)] sm:text-base md:text-lg">
            {t.hero.tagline}
          </p>

          {/* Légende contextuelle dynamique du slide en cours */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-4 py-1 text-xs text-[#F3DEB0] backdrop-blur-md">
            <span className="font-semibold text-white">{getKicker(currentSlide)}</span>
            <span className="text-white/40">·</span>
            <span className="text-white/85 font-light">{getCaption(currentSlide)}</span>
          </div>

          {/* Double Call to Action */}
          <div className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3.5 px-4 sm:mt-9 sm:flex-row sm:gap-4">
            <a
              href={waLink(t.contactSection.availability)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-xs font-semibold uppercase tracking-wider text-ink shadow-2xl transition hover:bg-travertine sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>{t.hero.whatsappCta}</span>
            </a>

            <a
              href="#services"
              className="btn-ghost-light w-full sm:w-auto text-xs uppercase tracking-wider"
            >
              <span>{t.hero.exploreCta}</span>
              <ArrowDown className="h-3.5 w-3.5 text-bronze-light" />
            </a>
          </div>
        </div>

        {/* Barre inférieure : Indicateur de slide interactif & défilement */}
        <div className="relative z-10 flex flex-col items-center justify-between gap-4 pt-4 sm:flex-row sm:items-end">
          {/* Timeline / Progress dots */}
          <div className="flex items-center gap-2.5">
            <span className="font-serif text-xs font-semibold text-white/90">
              0{currentIdx + 1}
            </span>
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentIdx
                      ? 'w-8 bg-bronze-light'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Afficher la photo ${idx + 1}`}
                />
              ))}
            </div>
            <span className="font-serif text-xs text-white/50">
              0{slides.length}
            </span>
          </div>

          {/* Défiler vers les services */}
          <a
            href="#services"
            className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/75 transition hover:text-white"
          >
            <span>{t.hero.scrollHint}</span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 transition-transform group-hover:translate-y-0.5">
              <ArrowDown className="h-3 w-3 text-bronze-light" />
            </div>
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BANDEAU DE CRÉDIBILITÉ OFFICIEL                                        */}
      {/* ========================================================================= */}
      <section className="border-y border-ink/5 bg-sand py-7">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            <div className="text-center">
              <p className="font-serif text-2xl font-normal text-ink sm:text-3xl">{t.reassurance.expValue}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-ink-muted">{t.reassurance.expLabel}</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl font-normal text-ink sm:text-3xl">{t.reassurance.michelinValue}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-ink-muted">{t.reassurance.michelinLabel}</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl font-normal text-ink sm:text-3xl">{t.reassurance.presenceValue}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-ink-muted">{t.reassurance.presenceLabel}</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl font-normal text-ink sm:text-3xl">{t.reassurance.discretionValue}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-ink-muted">{t.reassurance.discretionLabel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. GRILLE DES 4 SERVICES                                                  */}
      {/* ========================================================================= */}
      <section id="services" className="py-24 sm:py-32">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{t.servicesSection.eyebrow}</p>
            <h2 className="mt-2 font-serif text-3xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              {t.servicesSection.titleMain} <br />
              <span className="italic text-bronze">{t.servicesSection.titleItalic}</span>
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-ink-soft sm:text-base">
              {t.servicesSection.description}
            </p>
          </Reveal>

          {/* Grille 2x2 grand format */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10 sm:mt-20">
            {Object.entries(t.servicesSection.items).map(([serviceId, item], idx) => {
              const imageMap: Record<string, string> = {
                'property-management': '/property-management-charm.jpg',
                'concierge-services': '/concierge-yacht-vip.jpg',
                'rental-management': '/rental-management-charm.jpg',
                'chef-a-domicile': '/chef-dominique-cepes.jpg',
              };
              const imagePos: Record<string, string> = {
                'property-management': 'object-center',
                'concierge-services': 'object-center',
                'rental-management': 'object-center',
                'chef-a-domicile': 'object-[center_20%]',
              };

              return (
                <Reveal key={serviceId} delay={idx * 100}>
                  <a
                    href={serviceHref(serviceId as ServiceId)}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectService(serviceId as ServiceId);
                    }}
                    className="group flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-[0_4px_24px_rgba(28,26,23,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:border-bronze hover:shadow-[0_16px_40px_rgba(28,26,23,0.09)]"
                  >
                    {/* Cadre image soigné */}
                    <div className="relative h-64 overflow-hidden bg-sand sm:h-80">
                      <img
                        src={imageMap[serviceId]}
                        alt={item.title}
                        className={`h-full w-full object-cover ${imagePos[serviceId]} transition-transform duration-700 group-hover:scale-105`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                      {/* Numéro & Badge */}
                      <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                        <span className="rounded-full border border-white/25 bg-black/60 px-3.5 py-1 font-serif text-xs font-bold text-white backdrop-blur-md">
                          0{idx + 1}
                        </span>
                        <span className="rounded-full border border-bronze/40 bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink backdrop-blur-md">
                          {item.badge}
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-6 right-6">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#F3DEB0]">
                          {item.category}
                        </p>
                        <h3 className="font-serif text-2xl font-medium text-white transition-colors group-hover:text-[#F3DEB0] sm:text-3xl mt-0.5">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Contenu textuel */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 space-y-4">
                      <p className="font-serif italic text-base text-ink leading-snug">
                        « {item.tagline} »
                      </p>

                      <p className="text-sm font-light leading-relaxed text-ink-soft sm:text-[14.5px]">
                        {item.summary}
                      </p>

                      <div className="mt-4 flex items-center justify-between border-t border-ink/5 pt-4">
                        <span className="text-xs font-semibold uppercase tracking-wider text-bronze transition-colors group-hover:text-ink">
                          {t.servicesSection.discoverCta}
                        </span>
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sand text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-travertine">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
