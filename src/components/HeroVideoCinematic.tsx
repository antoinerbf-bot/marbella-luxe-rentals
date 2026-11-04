import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play, Pause, Volume2, VolumeX, Sparkles, MessageCircle, Phone, CheckCircle, ShieldCheck, Star } from 'lucide-react';

interface HeroVideoCinematicProps {
  onSelectService: (serviceId: string) => void;
}

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  tagline: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
  icon: React.ReactNode;
  highlights: string[];
}

const servicesCatalog: ServiceItem[] = [
  {
    id: 'property-management',
    number: '01',
    title: 'PROPERTY',
    subtitle: 'MANAGEMENT',
    badge: 'Intendance & Gardiennage · Marbella & Mijas',
    tagline: '« Votre demeure entre de bonnes mains, 365 jours par an. »',
    description: 'Surveillance attentive, visites périodiques détaillées avec photos HD et coordination bienveillante des meilleurs artisans locaux.',
    videoUrl: '/videos/champagne-convives.webm',
    posterUrl: '/hero-marbella.png',
    highlights: ['Visites de contrôle régulières', 'Rapport photo HD WhatsApp', 'Coordination artisans sans surcoût'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 20 24 6l18 14" />
        <path d="M10 18v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V18" />
        <path d="M20 42V26h8v16" />
      </svg>
    ),
  },
  {
    id: 'concierge-services',
    number: '02',
    title: 'CONCIERGE',
    subtitle: 'SERVICES 7/7',
    badge: 'Conciergerie Privée et Lifestyle 7/7 · Costa del Sol',
    tagline: '« Le vrai luxe est souvent invisible : quelqu’un a déjà pensé au détail. »',
    description: 'Une présence locale pour rendre les séjours plus fluides et les demandes plus simples avec discrétion. Tables d’exception, golf, mer ou chauffeur VIP.',
    videoUrl: '/videos/champagne-convives.webm',
    posterUrl: '/candidates/option1_yacht.jpg',
    highlights: ['Ligne directe dédiée 7/7', 'Réservations prioritaires tables & beach clubs', 'Yacht charter & chauffeurs VIP'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    badge: 'Gestion Locative Haute Couture · Costa del Sol',
    tagline: '« Deux formules modulables pour préserver et valoriser votre bien. »',
    description: 'Option intendance sur place pour vos propres réservations ou prise en charge intégrale clé en main avec sélection rigoureuse des voyageurs.',
    videoUrl: '/videos/champagne-convives.webm',
    posterUrl: '/rental-management-charm.jpg',
    highlights: ['Accueil physique personnalisé (Check-in VIP)', 'Linge 5 étoiles & blanchisserie', 'Filtrage strict des locataires'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    badge: 'Chef Privé en Villa · Dominique Hybord',
    tagline: '« 30 ans d’exigence gastronomique dans l’intimité de votre table. »',
    description: 'Recevez vos proches sans quitter votre villa. Le Chef Dominique Hybord imagine avec vous un menu d’auteur inspiré des produits nobles et de saison.',
    videoUrl: '/videos/chef-flambe-pro.mp4',
    posterUrl: '/chef-dominique-cepes.jpg',
    highlights: ['Menu sur-mesure imaginé avec vous', 'Distinction Guide Michelin & 2 Toques', 'Cuisine remise en état impeccable'],
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 27a13 13 0 1 1 26 0v4H11z" />
        <path d="M15 31v10h18V31" />
        <path d="M20 41v3h8v-3" />
      </svg>
    ),
  },
];

export const HeroVideoCinematic: React.FC<HeroVideoCinematicProps> = ({ onSelectService }) => {
  // Local Variant Mode Selector (Allows comparing 3 proposals locally)
  const [variant, setVariant] = useState<'fullscreen' | 'interactive' | 'splitscreen'>('fullscreen');
  const [activeServiceIdx, setActiveServiceIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentService = servicesCatalog[activeServiceIdx];

  // Sync video play/pause
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Autoplay policy fallback
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, activeServiceIdx, variant]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full">
      {/* LOCAL VARIANT PICKER (Floating Pill - Local preview tool only) */}
      <aside 
        aria-label="Mode Démo Locale"
        className="fixed bottom-4 left-4 z-50 flex flex-col gap-1.5 p-2 rounded-2xl bg-black/85 backdrop-blur-xl border border-[#c29a52]/40 shadow-2xl text-[11px]"
      >
        <div className="flex items-center gap-1.5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#fbe8b5]">
          <Sparkles className="w-3 h-3 text-[#edd088]" />
          <span>Propositions Homepage Locale</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setVariant('fullscreen')}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
              variant === 'fullscreen'
                ? 'bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black font-bold shadow-md'
                : 'text-white/70 hover:text-white bg-white/5'
            }`}
          >
            A · Plein Écran Cinéma
          </button>
          <button
            onClick={() => setVariant('interactive')}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
              variant === 'interactive'
                ? 'bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black font-bold shadow-md'
                : 'text-white/70 hover:text-white bg-white/5'
            }`}
          >
            B · Multi-Services Vidéo
          </button>
          <button
            onClick={() => setVariant('splitscreen')}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
              variant === 'splitscreen'
                ? 'bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black font-bold shadow-md'
                : 'text-white/70 hover:text-white bg-white/5'
            }`}
          >
            C · Split-Screen Haute Joaillerie
          </button>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* PROPOSITION 1 : PLEIN ÉCRAN CINÉMATOGRAPHIQUE & 4 PORTAILS DE SERVICES    */}
      {/* ========================================================================= */}
      {variant === 'fullscreen' && (
        <section
          id="hero"
          className="relative w-full min-h-[100svh] lg:h-screen lg:max-h-[1020px] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-6 sm:pb-8"
          aria-label="Solveig’s Prestige Services — Marbella & Mijas"
        >
          {/* Background Video: Fully Adaptive for Mobile & Desktop */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a1418]">
            <video
              ref={videoRef}
              key={currentService.videoUrl}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              poster={currentService.posterUrl}
              className="w-full h-full object-cover object-[center_35%] sm:object-center transition-all duration-1000 scale-100"
            >
              <source src={currentService.videoUrl} type="video/webm" />
              <source src={currentService.videoUrl} type="video/mp4" />
            </video>

            {/* Shading Gradients: Ensures 100% Text Legibility on all screens */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-[#081218]/90 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(194,154,82,0.15),transparent_65%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#081218] via-[#081218]/70 to-transparent pointer-events-none" />
          </div>

          {/* Video Control Buttons (Pause / Sound) */}
          <div className="absolute top-28 right-4 sm:right-8 z-20 flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="p-2 sm:p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white/80 hover:text-white hover:border-[#f1d291] transition-all"
              aria-label={isPlaying ? 'Mettre la vidéo en pause' : 'Lire la vidéo'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#edd088]" />}
            </button>
            <button
              onClick={toggleMute}
              className="p-2 sm:p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white/80 hover:text-white hover:border-[#f1d291] transition-all"
              aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/70" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#edd088]" />}
            </button>
          </div>

          {/* Center Brand Identity */}
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center mt-3 sm:mt-8 md:mt-12 flex flex-col items-center">
            {/* Title: SOLVEIG'S */}
            <h1 className="font-serif text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.08em] uppercase text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)] leading-[0.92]">
              SOLVEIG’S
            </h1>

            {/* Subtitle with Perfect S */}
            <p className="mt-1 sm:mt-2 text-[9px] min-[380px]:text-[10px] sm:text-[13px] md:text-[14px] font-bold tracking-[0.4em] text-[#f7e1a0] uppercase drop-shadow-md">
              PRESTIGE SERVICES
            </p>

            {/* Region Tag with Gold Accents */}
            <div className="mt-3 sm:mt-5 flex items-center justify-center gap-2 sm:gap-3 w-full">
              <span className="h-[1px] w-8 min-[380px]:w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#f1d291]/80 to-transparent" />
              <p className="text-[9px] min-[380px]:text-[10px] sm:text-[12px] font-semibold tracking-[0.28em] text-[#fff6e0] uppercase drop-shadow">
                MARBELLA & MIJAS
              </p>
              <span className="h-[1px] w-8 min-[380px]:w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#f1d291]/80 to-transparent" />
            </div>

            {/* Tagline */}
            <p className="mt-2.5 sm:mt-4 max-w-lg text-[11.5px] min-[380px]:text-xs sm:text-base text-white/95 font-light leading-snug sm:leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] px-2">
              Une présence locale discrète pour <br className="hidden sm:inline" />
              des propriétés d’exception sur la Costa del Sol.
            </p>

            {/* Direct Quick Actions */}
            <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20je%20souhaite%20un%20accompagnement%20sur-mesure%20pour%20ma%20propri%C3%A9t%C3%A9."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#25D366] text-black font-semibold text-xs sm:text-sm shadow-xl shadow-[#25D366]/20 hover:scale-105 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Concierge 7/7</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-white/25 bg-black/40 hover:bg-white/10 text-white font-medium text-xs sm:text-sm backdrop-blur-md transition-all"
              >
                <span>Explorer nos 4 Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#edd088]" />
              </a>
            </div>
          </div>

          {/* Bottom 4 Services Bar: Anchored gracefully at the bottom */}
          <div className="relative z-20 w-full max-w-[1440px] mx-auto px-2 sm:px-6 lg:px-12 mt-auto pt-4 sm:pt-8 pb-1 sm:pb-0">
            {/* Subtle horizontal gold border divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#f1d291]/60 to-transparent mb-2 sm:mb-4" />

            {/* 4 Glassmorphism Cards */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-3 w-full">
              {servicesCatalog.map((service, index) => (
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
                  className={`group relative cursor-pointer text-center flex flex-col items-center justify-between p-2 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 border border-white/15 bg-black/50 backdrop-blur-md hover:bg-black/70 hover:border-[#f1d291] hover:-translate-y-1`}
                >
                  {/* Number Badge */}
                  <span className="text-[7px] sm:text-[9px] font-bold tracking-widest text-[#edd088] uppercase mb-0.5">
                    {service.number}
                  </span>

                  {/* Service Icon */}
                  <div className="text-[#f1d291] group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 mb-1 drop-shadow">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex flex-col items-center leading-tight min-h-[22px] sm:min-h-[30px] justify-center">
                    <span className="text-[7px] min-[380px]:text-[8px] sm:text-[11.5px] lg:text-[12.5px] font-bold tracking-[0.05em] sm:tracking-[0.14em] uppercase text-white group-hover:text-[#f4dfa5] transition-colors drop-shadow">
                      {service.title}
                    </span>
                    <span className="text-[6.5px] min-[380px]:text-[7.5px] sm:text-[10px] lg:text-[11px] font-medium tracking-[0.04em] sm:tracking-[0.1em] uppercase text-white/80 group-hover:text-[#f4dfa5] transition-colors drop-shadow">
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Arrow Action */}
                  <div className="mt-1 sm:mt-2">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full border border-[#f1d291]/70 bg-black/40 group-hover:bg-[#c29a52] flex items-center justify-center transition-all duration-300">
                      <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 text-[#f1d291] group-hover:text-black transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* PROPOSITION 2 : MULTI-UNIVERS VIDÉO INTERACTIF PAR SERVICE                */}
      {/* ========================================================================= */}
      {variant === 'interactive' && (
        <section
          id="hero"
          className="relative w-full min-h-[100svh] lg:h-screen lg:max-h-[1020px] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-6 sm:pb-8"
          aria-label="Solveig’s Prestige Services — Multi-Univers"
        >
          {/* Background Dynamic Video */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#091115]">
            <video
              ref={videoRef}
              key={currentService.videoUrl + activeServiceIdx}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              poster={currentService.posterUrl}
              className="w-full h-full object-cover object-[center_35%] sm:object-center transition-all duration-700"
            >
              <source src={currentService.videoUrl} type="video/webm" />
              <source src={currentService.videoUrl} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-[#081218]/95 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_45%,rgba(194,154,82,0.18),transparent_60%)] pointer-events-none" />
          </div>

          {/* Interactive Service Bar on Top */}
          <div className="relative z-20 max-w-4xl mx-auto px-4 w-full">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 shadow-xl overflow-x-auto no-scrollbar">
              {servicesCatalog.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceIdx(idx)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    activeServiceIdx === idx
                      ? 'bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black shadow-lg scale-105'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{service.number}</span>
                  <span className="hidden sm:inline">·</span>
                  <span>{service.title} {service.subtitle}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Focused Service Spotlight Showcase */}
          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center mt-6 sm:mt-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#f1d291]/50 bg-black/50 text-[#fbe8b5] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md">
              <Star className="w-3.5 h-3.5 text-[#edd088] fill-current" />
              {currentService.badge}
            </span>

            <h2 className="mt-3 font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-medium leading-tight">
              {currentService.tagline}
            </h2>

            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-white/85 font-light leading-relaxed max-w-xl mx-auto">
              {currentService.description}
            </p>

            {/* 3 Key Highlights */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-white/90">
              {currentService.highlights.map((h, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md">
                  <CheckCircle className="w-3 h-3 text-[#edd088]" />
                  <span>{h}</span>
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onSelectService(currentService.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black font-semibold text-xs sm:text-sm shadow-xl shadow-[#c29a52]/20 hover:scale-105 transition-all"
              >
                <span>Découvrir l'expérience complète</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/34623626724"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-black/40 text-white font-medium text-xs sm:text-sm hover:bg-white/10 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Échanger sur WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Footer note */}
          <div className="relative z-10 text-center pb-2 text-[10px] text-white/50 tracking-widest uppercase">
            Solveig’s Prestige Services · Présence Confidentielle Marbella & Mijas
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* PROPOSITION 3 : SPLIT-SCREEN HAUTE JOAILLERIE (ÉCRIN ÉDITORIAL + VIDÉO)   */}
      {/* ========================================================================= */}
      {variant === 'splitscreen' && (
        <section
          id="hero"
          className="relative w-full min-h-[100svh] bg-[#0c161a] pt-24 sm:pt-32 pb-16 px-5 sm:px-8 lg:px-14 flex items-center"
          aria-label="Solveig’s Prestige Services — Haute Joaillerie"
        >
          <div className="max-w-[1520px] mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Editorial Column (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#edd088]/40 bg-[#c29a52]/10 text-[#fbe8b5] text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#edd088]" />
                Haute Intendance & Conciergerie Privée
              </div>

              <div className="space-y-2">
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[0.06em] uppercase text-white leading-[0.95]">
                  SOLVEIG’S
                </h1>
                <p className="text-xs sm:text-sm font-bold tracking-[0.4em] text-[#edd088] uppercase">
                  PRESTIGE SERVICES · MARBELLA & MIJAS
                </p>
              </div>

              <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed max-w-xl">
                Une présence locale discrète pour des propriétés d’exception sur la Costa del Sol.
                Intendance attentive de vos villas, conciergerie privée 7/7, gestion locative clé en main et cuisine d’auteur avec le Chef Dominique Hybord.
              </p>

              {/* 3 Prestige Pillars */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#fbe8b5]">30+ Ans</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-wider mt-0.5">Savoir-faire</p>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#fbe8b5]">7j / 7</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-wider mt-0.5">Veille active</p>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#fbe8b5]">100%</p>
                  <p className="text-[10px] text-white/60 uppercase tracking-wider mt-0.5">Discrétion</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                <a
                  href="https://wa.me/34623626724"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black font-semibold text-xs sm:text-sm shadow-xl shadow-[#c29a52]/20 hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Échanger avec Solveig sur WhatsApp</span>
                </a>

                <a
                  href="tel:+34623626724"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 text-white font-medium text-xs sm:text-sm hover:bg-white/10 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#edd088]" />
                  <span>+34 623 626 724</span>
                </a>
              </div>
            </div>

            {/* Right Video Showcase (6 Cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[2rem] overflow-hidden border border-[#c29a52]/40 shadow-2xl bg-black/60 group">
                <div className="relative h-[360px] sm:h-[480px] lg:h-[540px]">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    poster="/hero-marbella.png"
                    className="w-full h-full object-cover object-center"
                  >
                    <source src="/videos/champagne-convives.webm" type="video/webm" />
                    <source src="/videos/chef-flambe-pro.mp4" type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Floating Badge in Video */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-[#c29a52]/40 flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white">L'Art de Vivre sur la Costa del Sol</p>
                      <p className="text-[11px] text-[#edd088] mt-0.5">Marbella · Mijas · Puerto Banús</p>
                    </div>

                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
                      aria-label="Contrôle son"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#edd088]" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
