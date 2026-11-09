import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Pause, Sparkles, Compass, MessageCircle } from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

interface DroneViewpoint {
  id: string;
  code: string;
  label: string;
  location: string;
  caption: string;
  video: string;
  mimeType: string;
  poster: string;
}

interface HeroCinematicProps {
  onSelectService: (serviceId: string) => void;
}

const droneViewpoints: DroneViewpoint[] = [
  {
    id: 'horizon',
    code: '01',
    label: 'Survol Côtier & Horizon',
    location: 'Marbella · Golden Mile',
    caption: 'Lumière dorée sur le littoral méditerranéen et les domaines de bord de mer',
    video: '/videos/marbella-solaire-hero.mp4',
    mimeType: 'video/mp4',
    poster: '/property-management-charm.jpg',
  },
  {
    id: 'estates',
    code: '02',
    label: 'Domaines & Jardins Privés',
    location: 'Sierra Blanca & Mijas',
    caption: 'Vue aérienne au-dessus des demeures andalouses, palmeraies et jardins paysagers',
    video: '/videos/aerial-villa-resort.mp4',
    mimeType: 'video/mp4',
    poster: '/rental-management-charm.jpg',
  },
  {
    id: 'terrace',
    code: '03',
    label: 'Terrasses & Piscines',
    location: 'La Cala & Nueva Andalucía',
    caption: 'Immersion au cœur des terrasses ensoleillées et piscines à débordement',
    video: '/videos/luxury-villa-terrace.mp4',
    mimeType: 'video/mp4',
    poster: '/cortijo-charme-marbella.jpg',
  },
  {
    id: 'lifestyle',
    code: '04',
    label: 'Art de Recevoir en Villa',
    location: 'Costa del Sol · 7j/7',
    caption: 'Moments privilégiés, table privée et sérénité absolue pour vos proches',
    video: '/videos/champagne-convives.webm',
    mimeType: 'video/webm',
    poster: '/candidates/option1_yacht.jpg',
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
        className="w-6 h-6"
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
        className="w-6 h-6"
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
        className="w-6 h-6"
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
      'Un chef privé cuisine directement dans votre villa : menu imaginé avec vous, produits frais et service à table.',
    icon: (
      <svg
        className="w-6 h-6"
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
  const [activeViewIdx, setActiveViewIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Rotation fluide automatique entre les 4 points de vue drone toutes les 8.5 secondes
  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveViewIdx((prev) => (prev + 1) % droneViewpoints.length);
    }, 8500);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  // Lecture synchronisée lors du changement de point de vue
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeViewIdx) {
        if (isPlaying) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      } else {
        video.pause();
      }
    });
  }, [activeViewIdx, isPlaying]);

  const togglePlayPause = () => {
    const activeVideo = videoRefs.current[activeViewIdx];
    if (!activeVideo) return;
    if (isPlaying) {
      activeVideo.pause();
      setIsPlaying(false);
    } else {
      activeVideo.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const currentView = droneViewpoints[activeViewIdx];

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-6 sm:pb-8 bg-[#0b161b]"
      aria-label="Solveig’s Prestige Services — Marbella & Mijas"
    >
      {/* ========================================================================= */}
      {/* FOND VIDÉO DRONE MULTI-ANGLES (FONDU ENCHAÎNÉ CINÉMATIQUE FLUIDE)          */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#081217]">
        {droneViewpoints.map((view, idx) => {
          const isActive = idx === activeViewIdx;
          return (
            <div
              key={view.id}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              <video
                ref={(el) => {
                  videoRefs.current[idx] = el;
                }}
                autoPlay={idx === 0}
                muted
                loop
                playsInline
                preload={idx === 0 ? 'auto' : 'metadata'}
                poster={view.poster}
                className={`w-full h-full object-cover object-center transition-transform duration-[9000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              >
                <source src={view.video} type={view.mimeType} />
              </video>
            </div>
          );
        })}

        {/* Voile directionnel moderne : protège la lisibilité à gauche tout en laissant la vidéo lumineuse et dégagée */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#071116]/90 via-[#071116]/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#081318] via-transparent to-black/45 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_70%_35%,rgba(241,210,145,0.12),transparent_60%)] pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* CONTENU ÉDITORIAL MODERNE (ALIGNÉ À GAUCHE POUR NE PAS CASSER LA VIDÉO)   */}
      {/* ========================================================================= */}
      <div className="relative z-30 w-full max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 my-auto py-6 sm:py-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          {/* Colonne Gauche : Typographie Éditoriale Contemporaine */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left">
            {/* Pill Géographique & Signature */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#f1d291]/35 bg-[#0c1a20]/70 backdrop-blur-md px-4 py-1.5 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#f1d291]" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.26em] text-[#fbe8b5]">
                Marbella · Mijas · Costa del Sol
              </span>
            </div>

            {/* Titre Principal Moderne & Élégant */}
            <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl xl:text-[4.15rem] font-normal leading-[1.03] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
              L’art de veiller sur <br className="hidden sm:inline" />
              votre demeure,{' '}
              <span className="italic font-light text-gold-gradient block sm:inline">
                la sérénité en plus.
              </span>
            </h1>

            {/* Sous-titre fluide et lisible */}
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base md:text-[17px] text-white/90 font-light leading-relaxed drop-shadow">
              Avec <strong className="font-medium text-[#fbe8b5]">Solveig’s Prestige Services</strong>, profitez d’une présence locale de confiance toute l’année : intendance de propriété, conciergerie privée 7/7, location saisonnière et chef à domicile.
            </p>

            {/* Boutons d'Action Modernes */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#c29a52] via-[#e2bf78] to-[#c29a52] px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#0c161a] shadow-[0_10px_28px_rgba(194,154,82,0.35)] hover:brightness-110 hover:scale-[1.02] transition-all duration-300"
              >
                <span>Découvrir nos services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20je%20souhaite%20%C3%A9changer%20avec%20vous%20au%20sujet%20de%20vos%20services%20%C3%A0%20Marbella%20et%20Mijas."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-[#0d1c22]/65 hover:bg-white/15 hover:border-[#f1d291] backdrop-blur-md px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-white transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Direct 7/7</span>
              </a>
            </div>
          </div>

          {/* Colonne Droite : Sélecteur Interactif des 4 Points de Vue Drone */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col lg:items-end">
            <div className="w-full max-w-md rounded-2xl sm:rounded-3xl border border-[#f1d291]/25 bg-[#0a161b]/75 backdrop-blur-xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.55)]">
              {/* En-tête du contrôleur drone */}
              <div className="flex items-center justify-between gap-3 pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#f1d291] animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#fbe8b5]">
                    Exploration Drone · 4 Points de Vue
                  </span>
                </div>

                <button
                  type="button"
                  onClick={togglePlayPause}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 hover:border-[#f1d291] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/85 transition-colors"
                  aria-label={isPlaying ? 'Mettre la vidéo en pause' : 'Relancer la vidéo'}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3 h-3 text-[#f1d291]" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-[#f1d291]" />
                      <span>Lecture</span>
                    </>
                  )}
                </button>
              </div>

              {/* Description de la caméra active */}
              <div className="mb-3.5">
                <div className="flex items-center justify-between text-[11px] text-[#f1d291] font-medium">
                  <span>{currentView.location}</span>
                  <span className="font-mono text-[10px] text-white/60">
                    VUE {currentView.code} / 04
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-[13px] text-white/85 font-light leading-snug">
                  {currentView.caption}
                </p>
              </div>

              {/* Grille des 4 boutons de caméras drone */}
              <div className="grid grid-cols-2 gap-2">
                {droneViewpoints.map((view, idx) => {
                  const active = idx === activeViewIdx;
                  return (
                    <button
                      key={view.id}
                      type="button"
                      onClick={() => setActiveViewIdx(idx)}
                      className={`group relative overflow-hidden rounded-xl px-3 py-2.5 text-left transition-all duration-300 border ${
                        active
                          ? 'bg-[#c29a52]/25 border-[#f1d291] shadow-[0_0_15px_rgba(194,154,82,0.25)]'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span
                          className={`text-[9px] font-bold uppercase tracking-[0.18em] ${
                            active ? 'text-[#fbe8b5]' : 'text-white/50 group-hover:text-white/80'
                          }`}
                        >
                          Caméra {view.code}
                        </span>
                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#f1d291] animate-ping" />
                        )}
                      </div>
                      <p
                        className={`mt-0.5 text-[11px] sm:text-xs font-medium truncate ${
                          active ? 'text-white' : 'text-white/75 group-hover:text-white'
                        }`}
                      >
                        {view.label}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DOCK ARCHITECTURAL DES 4 SERVICES EN BAS DE L'ÉCRAN                       */}
      {/* ========================================================================= */}
      <div className="relative z-30 w-full max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 mt-auto pt-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
          {servicesData.map((service) => (
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
              className="group cursor-pointer rounded-2xl border border-[#f1d291]/25 bg-[#0a161b]/80 hover:bg-[#12252d]/90 hover:border-[#f1d291]/70 backdrop-blur-xl p-3.5 sm:p-4 lg:p-5 transition-all duration-300 flex items-center justify-between gap-3 shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#c29a52]/15 border border-[#f1d291]/30 text-[#f1d291] group-hover:bg-[#c29a52] group-hover:text-[#0a161b] flex items-center justify-center shrink-0 transition-all duration-300">
                  {service.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#edd088]">
                      {service.number}
                    </span>
                    <span className="hidden sm:inline text-[9px] text-white/40">•</span>
                    <span className="hidden sm:inline text-[9.5px] font-medium text-white/70 truncate">
                      {service.subtitle}
                    </span>
                  </div>
                  <h2 className="font-serif text-sm sm:text-lg font-semibold text-white group-hover:text-[#fbe8b5] transition-colors truncate mt-0.5">
                    {service.title}
                  </h2>
                </div>
              </div>

              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#f1d291]/40 bg-white/5 group-hover:bg-[#f1d291] group-hover:border-[#f1d291] flex items-center justify-center shrink-0 transition-all duration-300">
                <ArrowRight className="w-3.5 h-3.5 text-[#f1d291] group-hover:text-[#0a161b] transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
