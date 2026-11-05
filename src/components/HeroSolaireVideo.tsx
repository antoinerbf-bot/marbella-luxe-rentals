import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Play, Pause, Volume2, VolumeX, Sparkles, MessageCircle, Star, CheckCircle2, ChevronRight } from 'lucide-react';

interface HeroSolaireVideoProps {
  onSelectService: (serviceId: string) => void;
}

interface ServiceCard {
  id: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  image: string;
  badge: string;
  points: string[];
  ctaLabel: string;
}

const servicesData: ServiceCard[] = [
  {
    id: 'property-management',
    number: '01',
    category: 'Intendance de Domaine',
    title: 'Property Management',
    tagline: 'Votre villa veillée avec la même rigueur que si elle était la nôtre.',
    image: '/property-management-charm.jpg',
    badge: 'Présence active 365 jours / an',
    points: [
      'Visites de contrôle approfondies (climatisation, piscine, toiture, sécurité)',
      'Comptes-rendus réguliers avec photos HD directement sur WhatsApp',
      'Supervision directe des artisans locaux de confiance au juste prix',
    ],
    ctaLabel: 'Consulter l’intendance',
  },
  {
    id: 'concierge-services',
    number: '02',
    category: 'Conciergerie Privée 7/7',
    title: 'Concierge Services',
    tagline: 'Le sens du détail, sans jamais en faire trop.',
    image: '/candidates/option1_yacht.jpg',
    badge: 'Disponibilité 7 jours / 7',
    points: [
      'Réservations prioritaires aux tables étoilées et beach clubs de Marbella',
      'Échappées en mer en yacht privé au départ de Puerto Banús',
      'Chauffeurs VIP d’élite dès votre arrivée à l’aéroport de Malaga',
    ],
    ctaLabel: 'Découvrir la conciergerie 7/7',
  },
  {
    id: 'rental-management',
    number: '03',
    category: 'Location Saisonnière VIP',
    title: 'Rental Management',
    tagline: 'Deux formules modulables pour préserver et valoriser votre patrimoine.',
    image: '/rental-management-charm.jpg',
    badge: 'Gestion Clé en Main ou Intendance',
    points: [
      'Option 1 : Intendance & accueil sur place pour vos propres réservations',
      'Option 2 : Gestion locative intégrale avec sélection stricte des voyageurs',
      'Accueil personnalisé physique (Check-in VIP) et linge hôtelier 5★',
    ],
    ctaLabel: 'Explorer les formules locatives',
  },
  {
    id: 'chef-a-domicile',
    number: '04',
    category: 'Haute Gastronomie en Villa',
    title: 'Chef Dominique Hybord',
    tagline: 'Trente ans d’exigence gastronomique dans l’intimité de votre table.',
    image: '/chef-dominique-cepes.jpg',
    badge: 'Bib Gourmand Michelin · 2 Toques Gault & Millau',
    points: [
      'Un menu sur-mesure imaginé avec vous selon vos goûts et les saisons',
      'Produits nobles sélectionnés chaque matin sur les marchés locaux',
      'Service attentionné à votre table et cuisine remise à neuf à la fin',
    ],
    ctaLabel: 'Réserver le Chef en villa',
  },
];

export const HeroSolaireVideo: React.FC<HeroSolaireVideoProps> = ({ onSelectService }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-start video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

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

  const scrollToServices = () => {
    const el = document.getElementById('services-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-[#FAF7F2] text-[#241A14]">
      {/* ========================================================================= */}
      {/* 1. HERO : CINEMATIC DRONE VIDEO MARBELLA (SOLAIRE, AÉRÉ, HAUTE COUTURE)   */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden pt-28 sm:pt-36 pb-10 sm:pb-14 px-5 sm:px-12"
        aria-label="Solveig’s Prestige Services — Conciergerie de Prestige à Marbella"
      >
        {/* Real Aerial Drone Video Loop */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#18262C]">
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            poster="/hero-marbella.png"
            className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-1000"
          >
            <source src="/videos/aerial-villa-resort.mp4" type="video/mp4" />
          </video>

          {/* Warm Solar Mediterranean Lighting Shading */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/75 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(223,188,119,0.22),transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent pointer-events-none" />
        </div>

        {/* Video Controls (Mute / Pause) */}
        <div className="absolute top-28 right-4 sm:right-8 z-20 flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="p-2 sm:p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white/85 hover:text-white hover:border-[#DFBC77] transition-all"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#DFBC77]" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-2 sm:p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white/85 hover:text-white hover:border-[#DFBC77] transition-all"
            aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-white/70" /> : <Volume2 className="w-3.5 h-3.5 text-[#DFBC77]" />}
          </button>
        </div>

        {/* Top Tagline Pill */}
        <div className="relative z-10 mx-auto text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-black/40 backdrop-blur-md text-[#FFF5E0] text-[10px] sm:text-[11px] font-bold tracking-[0.28em] uppercase shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBC77]" />
            <span>Marbella & Mijas · Costa del Sol</span>
          </div>
        </div>

        {/* Main Monogram & Typography (Pure Luxury, High Breathing Room) */}
        <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center my-auto py-8">
          <h1 className="font-serif text-4xl min-[380px]:text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] font-normal tracking-[0.14em] uppercase text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] leading-[0.92]">
            SOLVEIG’S
          </h1>

          <p className="mt-2 sm:mt-3 text-[10px] min-[380px]:text-xs sm:text-sm md:text-base font-bold tracking-[0.45em] text-[#F3DEB0] uppercase drop-shadow">
            PRESTIGE SERVICES
          </p>

          {/* Golden Mediterranean Line */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-4 w-full max-w-xs">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DFBC77]/70 to-transparent" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#DFBC77] bg-[#C59B4B]/50" />
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#DFBC77]/70 to-transparent" />
          </div>

          <p className="mt-5 sm:mt-7 max-w-xl text-xs sm:text-base md:text-lg text-white/95 font-light leading-relaxed tracking-wide drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)] px-4">
            Une présence locale confidentielle pour des propriétés d’exception sur la Costa del Sol.
          </p>

          {/* Quick Luxury Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md px-4">
            <a
              href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20je%20souhaite%20un%20accompagnement%20sur-mesure%20pour%20ma%20propri%C3%A9t%C3%A9."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#C59B4B] to-[#DFBC77] text-[#1F1813] font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-2xl shadow-black/40 hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Demande Confidentielle</span>
            </a>

            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/40 bg-black/35 hover:bg-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all group"
            >
              <span>Explorer nos 4 Univers</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#F3DEB0] transition-transform group-hover:translate-y-1" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 mx-auto text-center flex flex-col items-center">
          <button
            onClick={scrollToServices}
            className="group inline-flex flex-col items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#C59B4B] font-semibold hover:text-[#1F1813] transition-colors"
          >
            <span>Défiler pour découvrir</span>
            <div className="w-px h-8 bg-gradient-to-b from-[#C59B4B] to-transparent group-hover:h-12 transition-all duration-300" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. GRILLE INTERACTIVE MODERNE & CARROUSEL FLUIDE DES 4 SERVICES           */}
      {/* Fond travertin/sable chaud, visuels imposants, typographie noble, aéré    */}
      {/* ========================================================================= */}
      <section id="services-grid" className="relative py-24 sm:py-36 px-5 sm:px-10 lg:px-16 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE8DE] border border-[#DFBC77]/40 text-[#8C6732] text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B4B]" />
            Collection de Services
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1F1813] font-medium leading-[1.05]">
            L’art de vivre méditerranéen, <br />
            <span className="italic text-[#C59B4B]">veillé dans les moindres détails.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#635548] font-light leading-relaxed max-w-xl mx-auto pt-2">
            Quatre expertises haut de gamme conçues pour préserver votre bien, sublimer vos séjours et vous offrir une tranquillité d’esprit absolue.
          </p>
        </div>

        {/* Modern 2x2 Interactive Grid (Grand Format, Ultra-Impactant) */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className="group cursor-pointer rounded-[2.2rem] overflow-hidden bg-white border border-[#E8DFD3] shadow-[0_10px_35px_rgba(31,24,19,0.06)] hover:shadow-[0_20px_50px_rgba(31,24,19,0.14)] hover:border-[#DFBC77] transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-[280px] sm:h-[380px] overflow-hidden bg-[#EAE2D7]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

                {/* Top Number & Badge */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#FFF8ED] text-xs font-serif font-bold border border-white/20">
                    {service.number}
                  </span>

                  <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1F1813] text-[10px] font-bold tracking-wider uppercase border border-[#DFBC77]/50 shadow-sm">
                    {service.badge}
                  </span>
                </div>

                {/* Bottom Category Title on Image */}
                <div className="absolute bottom-5 left-6 right-6">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#F3DEB0]">
                    {service.category}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mt-0.5 group-hover:text-[#F3DEB0] transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="font-serif italic text-base sm:text-lg text-[#1F1813] leading-snug mb-4">
                    « {service.tagline} »
                  </p>

                  {/* 3 Key Points */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#5C4F44]">
                    {service.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#C59B4B] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#F0E8DC] flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#8C6732] group-hover:text-[#1F1813] transition-colors">
                    {service.ctaLabel}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#E0D5C5] group-hover:border-[#C59B4B] group-hover:bg-[#C59B4B] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4 text-[#8C6732] group-hover:text-black transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. MANIFESTE SOLAIRE : L'ENGAGEMENT SOLVEIG'S PRESTIGE SERVICES           */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 sm:px-12 bg-[#F3ECE0] border-y border-[#E2D5C3]">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8C6732]">
            Engagement & Déontologie
          </span>

          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1F1813] font-medium leading-tight">
            « Le vrai luxe ne se remarque pas. Il se ressent à chaque instant passé dans votre villa. »
          </h3>

          <p className="text-sm sm:text-base text-[#66574B] font-light leading-relaxed max-w-2xl mx-auto">
            Solveig & Dominique Hybord mettent à votre service plus de trois décennies d’exigence hôtelière et gastronomique pour faire de chaque séjour sur la Costa del Sol une parenthèse d'une sérénité absolue.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold tracking-wider uppercase text-[#1F1813]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C59B4B]" />
              Présence locale 7j/7
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C59B4B]" />
              Confidentialité garantie
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C59B4B]" />
              Réseau d’artisans d’élite
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
