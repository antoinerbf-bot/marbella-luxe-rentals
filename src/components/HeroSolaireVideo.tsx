import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown, Check, ShieldCheck, Sparkles, Compass, KeyRound } from 'lucide-react';
import { ServiceId, waLink } from '../lib/site';
import { serviceHref } from '../lib/router';
import { useLanguage } from '../lib/LanguageContext';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Reveal } from './ui/Reveal';

interface HeroSolaireVideoProps {
  onSelectService: (serviceId: ServiceId) => void;
}

interface FpvShot {
  id: string;
  code: string;
  video: string;
  poster: string;
  labelFr: string;
  labelEn: string;
  labelEs: string;
  captionFr: string;
  captionEn: string;
  captionEs: string;
}

const fpvSequence: FpvShot[] = [
  {
    id: 'approach',
    code: '01',
    video: '/videos/aerial-villa-resort.mp4',
    poster: '/hero-marbella.jpg',
    labelFr: 'L’Approche',
    labelEn: 'The Approach',
    labelEs: 'La Aproximación',
    captionFr: 'Survol des domaines privés entre mer Méditerranée et Sierra Blanca',
    captionEn: 'Aerial glide above private estates between the Mediterranean and Sierra Blanca',
    captionEs: 'Vuelo sobre fincas privadas entre el Mediterráneo y Sierra Blanca',
  },
  {
    id: 'immersion',
    code: '02',
    video: '/videos/luxury-villa-terrace.mp4',
    poster: '/property-management-charm.jpg',
    labelFr: 'La Terrasse & Piscine',
    labelEn: 'The Terrace & Pool',
    labelEs: 'La Terraza y Piscina',
    captionFr: 'Immersion au cœur des espaces de réception et jardins méditerranéens',
    captionEn: 'Gliding across sunlit terraces, infinity pools, and landscaped gardens',
    captionEs: 'Inmersión en terrazas soleadas, piscinas y jardines mediterráneos',
  },
  {
    id: 'horizon',
    code: '03',
    video: '/videos/marbella-solaire-hero.mp4',
    poster: '/hero-marbella.png',
    labelFr: 'L’Art de Vivre',
    labelEn: 'The Art of Living',
    labelEs: 'El Arte de Vivir',
    captionFr: 'Lumière dorée de Marbella, horizon marin et sérénité absolue',
    captionEn: 'Golden Marbella light, endless sea views, and complete peace of mind',
    captionEs: 'Luz dorada de Marbella, horizonte marino y serenidad absoluta',
  },
];

export const HeroSolaireVideo: React.FC<HeroSolaireVideoProps> = ({ onSelectService }) => {
  const { lang, t } = useLanguage();
  const [activeShotIdx, setActiveShotIdx] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Progression cinématique fluide entre les 3 plans FPV (toutes les 9 secondes)
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveShotIdx((prev) => (prev + 1) % fpvSequence.length);
    }, 9000);
    return () => window.clearInterval(interval);
  }, []);

  // Relance propre du clip actif lors du fondu-enchaîné
  useEffect(() => {
    const activeVideo = videoRefs.current[activeShotIdx];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {
        // Autoplay silencieux géré gracieusement par le navigateur
      });
    }
  }, [activeShotIdx]);

  const currentShot = fpvSequence[activeShotIdx];

  const getShotLabel = (shot: FpvShot) =>
    lang === 'en' ? shot.labelEn : lang === 'es' ? shot.labelEs : shot.labelFr;

  const getShotCaption = (shot: FpvShot) =>
    lang === 'en' ? shot.captionEn : lang === 'es' ? shot.captionEs : shot.captionFr;

  const ownerWaMessage =
    lang === 'en'
      ? 'Hello Solveig, I am a property owner on the Costa del Sol and would like to discuss entrusting my villa to your care.'
      : lang === 'es'
      ? 'Hola Solveig, soy propietario de una villa en la Costa del Sol y deseo hablar sobre la gestión y el cuidado de mi propiedad.'
      : 'Bonjour Solveig, je suis propriétaire sur la Costa del Sol et je souhaite échanger avec vous pour vous confier l’intendance de ma villa.';

  const conciergeWaMessage =
    lang === 'en'
      ? 'Hello Solveig, I would like to organize a bespoke stay and private concierge services on the Costa del Sol.'
      : lang === 'es'
      ? 'Hola Solveig, deseo organizar una estancia a medida y servicios de conserjería privada en la Costa del Sol.'
      : 'Bonjour Solveig, je souhaite organiser un séjour sur mesure et solliciter votre conciergerie privée sur la Costa del Sol.';

  return (
    <div className="relative w-full bg-[#F7F3EB] text-[#1C1A17]">
      {/* ========================================================================= */}
      {/* 1. OPENING SEQUENCE — EXPÉRIENCE CINÉMATIQUE FPV MULTI-PLANS               */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden px-5 pb-10 pt-28 sm:px-10 sm:pb-12 sm:pt-32 lg:px-16"
        aria-label="Solveig’s Prestige Services — Marbella & Mijas"
      >
        {/* Séquence vidéo continue en fondu-enchaîné (aucun bouton de contrôle intrusif) */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#11191B]">
          {fpvSequence.map((shot, idx) => {
            const isActive = idx === activeShotIdx;
            return (
              <div
                key={shot.id}
                className={`absolute inset-0 transition-opacity duration-[1800ms] ease-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
                aria-hidden={!isActive}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload={idx === 0 ? 'auto' : 'metadata'}
                  poster={shot.poster}
                  className={`h-full w-full object-cover object-center transition-transform duration-[9500ms] ease-out ${
                    isActive ? 'scale-[1.05]' : 'scale-100'
                  }`}
                >
                  <source src={shot.video} type="video/mp4" />
                </video>
              </div>
            );
          })}

          {/* Voile de lisibilité subtil — préserve la clarté naturelle de la vidéo */}
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/45 via-black/15 to-black/65" />
          <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.22)_0%,transparent_70%)]" />
        </div>

        {/* Ligne supérieure : Ancrage géographique sobre */}
        <div className="relative z-30 flex items-center justify-between">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-black/30 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#F5EFE6] backdrop-blur-md sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4B57B]" />
            <span>{t.hero.locationTag}</span>
          </div>

          <span className="hidden text-[11px] font-light tracking-[0.22em] uppercase text-white/80 sm:inline-block">
            Solveig & Dominique Hybord
          </span>
        </div>

        {/* Cœur éditorial : Identité de marque, titre mémorable & double direction commerciale */}
        <div className="relative z-30 my-auto mx-auto max-w-4xl py-8 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.42em] text-[#E6CFA0] drop-shadow-sm sm:text-xs">
            SOLVEIG’S PRESTIGE SERVICES
          </p>

          <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.02] tracking-[0.02em] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.65)] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            {lang === 'en' ? (
              <>
                The Art of Exceptional Living, <br />
                <span className="italic font-light text-[#F3E3C3]">curated on the Costa del Sol.</span>
              </>
            ) : lang === 'es' ? (
              <>
                El Arte de Vivir lo Excepcional, <br />
                <span className="italic font-light text-[#F3E3C3]">cuidado en la Costa del Sol.</span>
              </>
            ) : (
              <>
                L’Art de Vivre l’Exception, <br />
                <span className="italic font-light text-[#F3E3C3]">veillé sur la Costa del Sol.</span>
              </>
            )}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] sm:text-base md:text-[17px]">
            {lang === 'en'
              ? 'Discreet property management, 7/7 private concierge services, and haute gastronomy in the privacy of your villa in Marbella & Mijas.'
              : lang === 'es'
              ? 'Gestión discreta de propiedades, conserjería privada 7d/7 y alta gastronomía en la intimidad de su villa en Marbella y Mijas.'
              : 'Intendance discrète de propriétés, conciergerie privée 7j/7 et haute gastronomie dans l’intimité de votre villa à Marbella et Mijas.'}
          </p>

          {/* Deux directions commerciales claires (Section 2.5 : Propriétaires vs Voyageurs) */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="#owners-journey"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F7F3EB] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#1C1A17] shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)] sm:w-auto"
            >
              <span>
                {lang === 'en'
                  ? 'Entrust us with your property'
                  : lang === 'es'
                  ? 'Confiarnos su propiedad'
                  : 'Confier votre propriété'}
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-[#8A6A2F]" />
            </a>

            <a
              href="#concierge-journey"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/40 bg-black/35 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/15 sm:w-auto"
            >
              <span>
                {lang === 'en'
                  ? 'Discover our concierge services'
                  : lang === 'es'
                  ? 'Descubrir nuestros servicios'
                  : 'Découvrir nos services de conciergerie'}
              </span>
            </a>
          </div>
        </div>

        {/* Barre inférieure : Séquence FPV interactive & invitation au défilement */}
        <div className="relative z-30 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-5 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {fpvSequence.map((shot, idx) => {
              const isCurrent = idx === activeShotIdx;
              return (
                <button
                  key={shot.id}
                  type="button"
                  onClick={() => setActiveShotIdx(idx)}
                  className={`group flex items-center gap-2 text-left transition-opacity ${
                    isCurrent ? 'opacity-100' : 'opacity-55 hover:opacity-85'
                  }`}
                >
                  <span className="font-serif text-xs font-medium text-[#E6CFA0]">{shot.code}</span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                    {getShotLabel(shot)}
                  </span>
                  <span
                    className={`h-0.5 transition-all duration-500 ${
                      isCurrent ? 'w-7 bg-[#E6CFA0]' : 'w-2 bg-white/30'
                    }`}
                  />
                </button>
              );
            })}
            <span className="hidden text-xs font-light italic text-white/75 xl:inline">
              — {getShotCaption(currentShot)}
            </span>
          </div>

          <a
            href="#editorial-transition"
            className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 transition hover:text-white"
          >
            <span>{t.hero.scrollHint}</span>
            <ArrowDown className="h-3.5 w-3.5 text-[#E6CFA0] transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRANSITION ÉDITORIALE APRÈS LE HERO (SECTION 2.6 & 04)                  */}
      {/* Grande composition architecturale & séparation claire des 2 audiences     */}
      {/* ========================================================================= */}
      <section
        id="editorial-transition"
        className="relative border-b border-[#1C1A17]/10 bg-[#F7F3EB] py-24 sm:py-32"
      >
        <div className="container-site">
          {/* Composition asymétrique : Photographie architecturale + Manifeste de la Maison */}
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <div className="relative">
                <div className="overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_rgba(28,26,23,0.12)]">
                  <img
                    src="/cortijo-charme-marbella.jpg"
                    alt="Architecture méditerranéenne et patio andalou à Marbella"
                    className="h-[380px] w-full object-cover sm:h-[520px] transition-transform duration-1000 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Encadré de réassurance factuelle superposé avec élégance */}
                <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-8 sm:right-8 sm:max-w-xs rounded-2xl border border-[#1C1A17]/10 bg-[#1B2624] p-6 text-[#F7F3EB] shadow-2xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#D4B57B]">
                    {lang === 'en'
                      ? 'Michelin Guide & Gault & Millau'
                      : lang === 'es'
                      ? 'Guía Michelin y Gault & Millau'
                      : 'Guide Michelin & Gault & Millau'}
                  </p>
                  <p className="mt-2 font-serif text-xl font-normal leading-snug text-white">
                    {lang === 'en'
                      ? '30+ years of hospitality and gastronomic standards brought to your private estate.'
                      : lang === 'es'
                      ? 'Más de 30 años de exigencia hotelera y gastronómica al servicio de su propiedad.'
                      : 'Plus de 30 ans d’exigence hôtelière et gastronomique dédiés à votre demeure.'}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5 space-y-6 lg:pl-4" delay={150}>
              <p className="eyebrow">
                {lang === 'en'
                  ? 'The Philosophy of the House'
                  : lang === 'es'
                  ? 'La Filosofía de la Casa'
                  : 'L’Esprit de la Maison'}
              </p>

              <h2 className="font-serif text-3xl font-normal leading-[1.1] text-[#1C1A17] sm:text-5xl">
                {lang === 'en' ? (
                  <>
                    A trusted human presence, <br />
                    <span className="italic text-[#8A6A2F]">on site every day of the year.</span>
                  </>
                ) : lang === 'es' ? (
                  <>
                    Una presencia humana de confianza, <br />
                    <span className="italic text-[#8A6A2F]">en el lugar todo el año.</span>
                  </>
                ) : (
                  <>
                    Une présence humaine de confiance, <br />
                    <span className="italic text-[#8A6A2F]">sur place toute l’année.</span>
                  </>
                )}
              </h2>

              <p className="text-sm font-light leading-relaxed text-[#57514A] sm:text-base">
                {lang === 'en'
                  ? 'True luxury is never ostentatious: it lies in knowing your property is watched over by experienced hands when you are away, and finding every detail effortlessly prepared the moment you arrive.'
                  : lang === 'es'
                  ? 'El verdadero lujo nunca es ostentoso: reside en saber que su propiedad está cuidada por manos expertas en su ausencia y encontrar cada detalle preparado a su llegada.'
                  : 'Le véritable luxe n’est jamais ostentatoire : il réside dans la certitude que votre propriété est veillée par des mains expertes en votre absence, et que chaque détail est prêt dès l’instant où vous franchissez votre porte.'}
              </p>

              {/* Repères factuels vérifiés */}
              <div className="grid grid-cols-2 gap-4 border-t border-[#1C1A17]/10 pt-6">
                <div>
                  <p className="font-serif text-2xl font-medium text-[#1C1A17] sm:text-3xl">
                    {t.reassurance.expValue}
                  </p>
                  <p className="mt-0.5 text-xs font-light text-[#57514A]">{t.reassurance.expLabel}</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-medium text-[#1C1A17] sm:text-3xl">
                    {t.reassurance.presenceValue}
                  </p>
                  <p className="mt-0.5 text-xs font-light text-[#57514A]">
                    {t.reassurance.presenceLabel}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sélecteur d'Audience (Section 04 : Propriétaires vs Voyageurs & Clients Privés) */}
          <Reveal className="mt-20 sm:mt-28">
            <div className="grid gap-6 md:grid-cols-2">
              {/* AUDIENCE A — PROPRIÉTAIRES */}
              <div className="group relative flex flex-col justify-between rounded-[1.75rem] border border-[#1C1A17]/12 bg-[#EFE8DA] p-8 sm:p-10 transition-all duration-500 hover:border-[#8A6A2F]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#8A6A2F]">
                      {lang === 'en'
                        ? 'For Property Owners'
                        : lang === 'es'
                        ? 'Para Propietarios'
                        : 'Pour les Propriétaires'}
                    </span>
                    <KeyRound className="h-5 w-5 text-[#8A6A2F]" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#1C1A17] sm:text-3xl">
                    {lang === 'en'
                      ? 'Property Management & Tailored Rental Care'
                      : lang === 'es'
                      ? 'Property Management y Gestión de Alquiler'
                      : 'Intendance de Propriété & Gestion Locative'}
                  </h3>
                  <p className="text-xs sm:text-sm font-light leading-relaxed text-[#57514A]">
                    {lang === 'en'
                      ? 'Regular technical inspections with HD photo reports, artisan supervision at real cost, owner arrival preparation, and two modular seasonal rental formulas.'
                      : lang === 'es'
                      ? 'Inspecciones técnicas periódicas con informes fotográficos HD, supervisión de artesanos sin sobrecoste, preparación de estancias y dos fórmulas de alquiler.'
                      : 'Inspections techniques régulières avec rapports photos HD, suivi des artisans sans marge cachée, préparation avant séjour et deux formules de location saisonnière.'}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#1C1A17]/10 flex items-center justify-between">
                  <a
                    href="#owners-journey"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1A17] group-hover:text-[#8A6A2F] transition-colors"
                  >
                    <span>
                      {lang === 'en'
                        ? 'Entrust us with your property'
                        : lang === 'es'
                        ? 'Confiarnos su propiedad'
                        : 'Confier votre propriété'}
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* AUDIENCE B — VOYAGEURS & CLIENTS PRIVÉS */}
              <div className="group relative flex flex-col justify-between rounded-[1.75rem] border border-[#1C1A17]/12 bg-[#1B2624] p-8 sm:p-10 text-[#F7F3EB] transition-all duration-500 hover:border-[#D4B57B]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#D4B57B]">
                      {lang === 'en'
                        ? 'For Travelers & Private Clients'
                        : lang === 'es'
                        ? 'Para Viajeros y Clientes Privados'
                        : 'Pour les Voyageurs & Hôtes Privés'}
                    </span>
                    <Compass className="h-5 w-5 text-[#D4B57B]" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-white sm:text-3xl">
                    {lang === 'en'
                      ? 'Private Concierge 7/7 & Chef at Home'
                      : lang === 'es'
                      ? 'Conserjería Privada 7/7 y Chef en Villa'
                      : 'Conciergerie Privée 7j/7 & Chef à Domicile'}
                  </h3>
                  <p className="text-xs sm:text-sm font-light leading-relaxed text-[#F7F3EB]/80">
                    {lang === 'en'
                      ? 'Priority reservations, private yacht charters in Puerto Banús, golf tee times, VIP chauffeurs, and bespoke gastronomic dinners crafted in your villa by Chef Dominique Hybord.'
                      : lang === 'es'
                      ? 'Reservas prioritarias, alquiler de yates en Puerto Banús, golf, chóferes VIP y cenas gastronómicas a medida en su villa por el Chef Dominique Hybord.'
                      : 'Réservations prioritaires, yacht privé à Puerto Banús, parcours de golf, chauffeurs VIP et dîners gastronomiques sur mesure en villa par le Chef Dominique Hybord.'}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between">
                  <a
                    href="#concierge-journey"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4B57B] group-hover:text-white transition-colors"
                  >
                    <span>
                      {lang === 'en'
                        ? 'Create your experience'
                        : lang === 'es'
                        ? 'Crear su experiencia'
                        : 'Créer votre expérience'}
                    </span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PARCOURS PROPRIÉTAIRES (SECTION 05 — PROPERTY & RENTAL MANAGEMENT)     */}
      {/* Présentation éditoriale grand format (sans grille de cartes répétitives)  */}
      {/* ========================================================================= */}
      <section
        id="services"
        className="relative bg-gradient-to-b from-[#F7F3EB] via-[#F2ECE1] to-[#ECE4D5] py-24 sm:py-32"
      >
        <div id="owners-journey" className="container-site scroll-mt-24 space-y-28 sm:space-y-36">
          {/* CHAPITRE 01 — PROPERTY MANAGEMENT */}
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl font-light text-[#8A6A2F]">01</span>
                <span className="h-px w-8 bg-[#8A6A2F]/50" />
                <span className="eyebrow">
                  {t.servicesSection.items['property-management'].category}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-normal leading-[1.08] text-[#1C1A17] sm:text-5xl">
                {t.servicesSection.items['property-management'].title}
              </h2>

              <p className="font-serif italic text-lg text-[#8A6A2F]">
                « {t.servicesSection.items['property-management'].tagline} »
              </p>

              <p className="text-sm font-light leading-relaxed text-[#57514A] sm:text-base">
                {t.servicesSection.items['property-management'].summary}
              </p>

              {/* Séquence opérationnelle claire en 4 étapes */}
              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                {[
                  lang === 'en'
                    ? '01 · Regular technical, garden & pool inspections'
                    : lang === 'es'
                    ? '01 · Inspecciones técnicas, jardín y piscina'
                    : '01 · Inspections techniques, jardin & piscine',
                  lang === 'en'
                    ? '02 · Detailed HD photo report on WhatsApp after every visit'
                    : lang === 'es'
                    ? '02 · Informe con fotos HD por WhatsApp tras cada visita'
                    : '02 · Compte-rendu photos HD sur WhatsApp à chaque passage',
                  lang === 'en'
                    ? '03 · Supervision of trusted artisans at real invoice cost'
                    : lang === 'es'
                    ? '03 · Supervisión de artesanos locales a coste real'
                    : '03 · Suivi des artisans locaux au prix réel sans surcoût',
                  lang === 'en'
                    ? '04 · Complete villa preparation before your arrival'
                    : lang === 'es'
                    ? '04 · Preparación integral de la villa antes de su llegada'
                    : '04 · Préparation intégrale de la villa avant votre arrivée',
                ].map((step, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-[#1C1A17]/10 bg-white/80 p-3.5 text-xs font-medium text-[#1C1A17]"
                  >
                    {step}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => onSelectService('property-management')}
                  className="btn-primary"
                >
                  <span>{t.servicesSection.discoverCta}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={waLink(ownerWaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#8A6A2F]" />
                  <span>
                    {lang === 'en'
                      ? 'Request a property assessment'
                      : lang === 'es'
                      ? 'Solicitar estudio de mi propiedad'
                      : 'Demander une étude de ma propriété'}
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6" delay={150}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => onSelectService('property-management')}
                onKeyDown={(e) => e.key === 'Enter' && onSelectService('property-management')}
                className="group relative overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(28,26,23,0.12)] cursor-pointer"
              >
                <img
                  src="/property-management-charm.jpg"
                  alt="Property Management Marbella & Mijas"
                  className="h-[360px] w-full object-cover sm:h-[480px] transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E6CFA0]">
                      {t.servicesSection.items['property-management'].badge}
                    </span>
                    <p className="font-serif text-xl sm:text-2xl mt-0.5">
                      Marbella · Golden Mile · Mijas
                    </p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#1C1A17] transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* CHAPITRE 02 — RENTAL MANAGEMENT (2 FORMULES MODULABLES) */}
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6 order-2 lg:order-1" delay={100}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => onSelectService('rental-management')}
                onKeyDown={(e) => e.key === 'Enter' && onSelectService('rental-management')}
                className="group relative overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(28,26,23,0.12)] cursor-pointer"
              >
                <img
                  src="/rental-management-charm.jpg"
                  alt="Rental Management Costa del Sol"
                  className="h-[360px] w-full object-cover sm:h-[480px] transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E6CFA0]">
                      {t.servicesSection.items['rental-management'].badge}
                    </span>
                    <p className="font-serif text-xl sm:text-2xl mt-0.5">
                      {lang === 'en'
                        ? 'In-person VIP Check-in · Never a lockbox'
                        : lang === 'es'
                        ? 'Bienvenida física VIP · Nunca cajas de llaves'
                        : 'Accueil physique VIP · Jamais de boîte à clés'}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#1C1A17] transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl font-light text-[#8A6A2F]">02</span>
                <span className="h-px w-8 bg-[#8A6A2F]/50" />
                <span className="eyebrow">
                  {t.servicesSection.items['rental-management'].category}
                </span>
              </div>

              <h2 className="font-serif text-3xl font-normal leading-[1.08] text-[#1C1A17] sm:text-5xl">
                {t.servicesSection.items['rental-management'].title}
              </h2>

              <p className="font-serif italic text-lg text-[#8A6A2F]">
                « {t.servicesSection.items['rental-management'].tagline} »
              </p>

              <p className="text-sm font-light leading-relaxed text-[#57514A] sm:text-base">
                {t.servicesSection.items['rental-management'].summary}
              </p>

              {/* Les 2 Formules confirmées */}
              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <div className="rounded-2xl border border-[#1C1A17]/10 bg-white p-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#8A6A2F]">
                    {lang === 'en' ? 'Formula 01' : lang === 'es' ? 'Fórmula 01' : 'Formule 01'}
                  </span>
                  <h4 className="font-serif text-xl font-medium text-[#1C1A17] mt-1">
                    {lang === 'en'
                      ? 'On-Site Guest Care'
                      : lang === 'es'
                      ? 'Asistencia Presencial'
                      : 'Intendance Sur-Place'}
                  </h4>
                  <p className="mt-1.5 text-xs font-light leading-relaxed text-[#57514A]">
                    {lang === 'en'
                      ? 'You manage your own bookings; we handle VIP check-in, inventory reports, 5-star cleaning, and hotel linen.'
                      : lang === 'es'
                      ? 'Usted gestiona sus reservas; nosotros asumimos el check-in VIP, inventario, limpieza 5★ y lencería.'
                      : 'Vous gérez vos réservations ; nous assurons l’accueil VIP en personne, l’état des lieux, le ménage 5★ et la blanchisserie.'}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#8A6A2F]/40 bg-[#1B2624] p-5 text-[#F7F3EB]">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4B57B]">
                    {lang === 'en' ? 'Formula 02' : lang === 'es' ? 'Fórmula 02' : 'Formule 02'}
                  </span>
                  <h4 className="font-serif text-xl font-medium text-white mt-1">
                    {lang === 'en'
                      ? 'Full Turnkey Management'
                      : lang === 'es'
                      ? 'Gestión Integral Llave en Mano'
                      : 'Gestion Intégrale Clé en Main'}
                  </h4>
                  <p className="mt-1.5 text-xs font-light leading-relaxed text-[#F7F3EB]/80">
                    {lang === 'en'
                      ? 'Complete delegation: marketing, strict guest vetting, contracts, deposits, 7/7 guest concierge, and monthly reporting.'
                      : lang === 'es'
                      ? 'Delegación total: comercialización, selección de viajeros, contratos, fianzas y conserjería 7d/7.'
                      : 'Délégation complète : commercialisation, sélection stricte des hôtes, contrats, cautions et conciergerie 7j/7.'}
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => onSelectService('rental-management')}
                  className="btn-primary"
                >
                  <span>
                    {lang === 'en'
                      ? 'Compare the 2 rental formulas'
                      : lang === 'es'
                      ? 'Comparar las 2 fórmulas de alquiler'
                      : 'Comparer les 2 formules locatives'}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          </div>

          {/* CHAPITRE 03 — PRIVATE CONCIERGE 7/7 (PARCOURS VOYAGEURS & HÔTES PRIVÉS) */}
          <div
            id="concierge-journey"
            className="scroll-mt-24 rounded-[2.25rem] border border-[#1C1A17]/10 bg-[#1B2624] p-8 sm:p-12 lg:p-16 text-[#F7F3EB] shadow-2xl"
          >
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <Reveal className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl font-light text-[#D4B57B]">03</span>
                  <span className="h-px w-8 bg-[#D4B57B]/50" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4B57B]">
                    {t.servicesSection.items['concierge-services'].category}
                  </span>
                </div>

                <h2 className="font-serif text-3xl font-normal leading-[1.08] text-white sm:text-5xl">
                  {t.servicesSection.items['concierge-services'].title}
                </h2>

                <p className="font-serif italic text-lg text-[#E6CFA0]">
                  « {t.servicesSection.items['concierge-services'].tagline} »
                </p>

                <p className="text-sm font-light leading-relaxed text-[#F7F3EB]/85 sm:text-base">
                  {t.servicesSection.items['concierge-services'].summary}
                </p>

                <ul className="space-y-3 pt-2 text-xs sm:text-sm text-[#F7F3EB]/90">
                  {[
                    lang === 'en'
                      ? 'Priority reservations at sought-after restaurants & beach clubs'
                      : lang === 'es'
                      ? 'Reservas prioritarias en restaurantes y beach clubs exclusivos'
                      : 'Réservations prioritaires aux tables prisées et beach clubs de la côte',
                    lang === 'en'
                      ? 'Private yacht charters departing from Puerto Banús'
                      : lang === 'es'
                      ? 'Alquiler de yates privados desde Puerto Banús'
                      : 'Échappées en mer en yacht privé au départ de Puerto Banús',
                    lang === 'en'
                      ? 'Championship golf tee times & private chauffeurs from Malaga airport'
                      : lang === 'es'
                      ? 'Reservas de golf y chófer privado desde el aeropuerto de Málaga'
                      : 'Parcours de golf de prestige & chauffeur privé dès l’aéroport de Malaga',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4B57B]/20 text-[#D4B57B]">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href={waLink(conciergeWaMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>
                      {lang === 'en'
                        ? 'Plan your bespoke stay'
                        : lang === 'es'
                        ? 'Organizar mi estancia a medida'
                        : 'Organiser mon séjour sur mesure'}
                    </span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectService('concierge-services')}
                    className="btn-ghost-light"
                  >
                    <span>{t.servicesSection.discoverCta}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </Reveal>

              <Reveal className="lg:col-span-6" delay={150}>
                <div className="grid gap-4 sm:grid-cols-12">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => onSelectService('concierge-services')}
                    onKeyDown={(e) => e.key === 'Enter' && onSelectService('concierge-services')}
                    className="sm:col-span-7 overflow-hidden rounded-2xl cursor-pointer group"
                  >
                    <img
                      src="/concierge-yacht-vip.jpg"
                      alt="Yacht privé à Puerto Banús"
                      className="h-72 sm:h-96 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="sm:col-span-5 flex flex-col gap-4">
                    <div className="overflow-hidden rounded-2xl flex-1">
                      <img
                        src="/candidates/option2_majordome.jpg"
                        alt="Accueil et service personnalisé en villa"
                        className="h-44 sm:h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="overflow-hidden rounded-2xl flex-1">
                      <img
                        src="/candidates/option3_chauffeur.jpg"
                        alt="Chauffeur privé VIP aéroport"
                        className="h-44 sm:h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
