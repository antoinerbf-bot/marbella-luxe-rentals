import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';
import { DEFAULT_WA_MESSAGE, SERVICES, ServiceId, waLink } from '../lib/site';
import { serviceHref } from '../lib/router';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Reveal } from './ui/Reveal';

interface HeroSolaireVideoProps {
  onSelectService: (serviceId: ServiceId) => void;
}

export const HeroSolaireVideo: React.FC<HeroSolaireVideoProps> = ({ onSelectService }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full bg-travertine text-ink">
      {/* ========================================================================= */}
      {/* 1. HERO VIDÉO CINÉMATIQUE MARBELLA (SOLAIRE, AÉRÉ, LUXE MÉDITERRANÉEN)    */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden px-5 pb-10 pt-28 sm:px-10 sm:pb-14 sm:pt-36"
        aria-label="Solveig’s Prestige Services — Conciergerie de prestige à Marbella & Mijas"
      >
        {/* Vidéo de fond authentique Marbella */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-night">
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            poster="/hero-marbella.jpg"
            className="h-full w-full object-cover object-center scale-[1.02] transition-transform duration-1000"
          >
            <source src="/videos/marbella-solaire-hero.mp4" type="video/mp4" />
          </video>

          {/* Dégradés d'ombrage solaire pour lisibilité 100% sans ternir la lumière */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/65" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(201,168,105,0.22),transparent_70%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-travertine via-travertine/40 to-transparent" />
        </div>

        {/* Boutons de contrôle vidéo discrets */}
        <div className="absolute right-4 top-24 z-20 flex items-center gap-2 sm:right-8 sm:top-28">
          <button
            onClick={togglePlay}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white/85 backdrop-blur-md transition hover:border-bronze hover:text-white"
            aria-label={isPlaying ? 'Mettre en pause' : 'Lire la vidéo'}
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 text-bronze-light" />}
          </button>
          <button
            onClick={toggleMute}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white/85 backdrop-blur-md transition hover:border-bronze hover:text-white"
            aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
          >
            {isMuted ? <VolumeX className="h-3.5 w-3.5 text-white/70" /> : <Volume2 className="h-3.5 w-3.5 text-bronze-light" />}
          </button>
        </div>

        {/* Badge surtitre */}
        <div className="relative z-10 mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#FFF5E0] shadow-lg backdrop-blur-md sm:text-[11px]">
            <Sparkles className="h-3.5 w-3.5 text-bronze-light" />
            <span>Marbella & Mijas · Costa del Sol</span>
          </div>
        </div>

        {/* Titre & Identité Majestueuse */}
        <div className="relative z-10 my-auto flex max-w-4xl flex-col items-center py-6 text-center mx-auto">
          <h1 className="font-serif text-5xl font-normal leading-[0.9] tracking-[0.14em] uppercase text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] sm:text-7xl md:text-8xl lg:text-[6.6rem]">
            SOLVEIG’S
          </h1>

          <p className="mt-2 text-xs font-bold uppercase tracking-[0.45em] text-[#F3DEB0] drop-shadow sm:mt-3 sm:text-sm md:text-base">
            PRESTIGE SERVICES
          </p>

          {/* Ligne méditerranéenne bronze */}
          <div className="mt-5 flex w-full max-w-xs items-center justify-center gap-4 sm:mt-6">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-bronze-light/70 to-transparent" />
            <span className="h-1.5 w-1.5 rotate-45 border border-bronze-light bg-bronze/50" />
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-bronze-light/70 to-transparent" />
          </div>

          <p className="mt-5 max-w-xl px-4 text-sm font-light leading-relaxed tracking-wide text-white/95 drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)] sm:text-base md:text-lg">
            Une présence locale discrète pour des propriétés d’exception sur la Costa del Sol.
          </p>

          {/* Double Call to Action */}
          <div className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3.5 px-4 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-xs font-semibold uppercase tracking-wider text-ink shadow-2xl transition hover:bg-travertine sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Échanger avec Solveig</span>
            </a>

            <a
              href="#services"
              className="btn-ghost-light w-full sm:w-auto text-xs uppercase tracking-wider"
            >
              <span>Découvrir nos services</span>
              <ArrowDown className="h-3.5 w-3.5 text-bronze-light" />
            </a>
          </div>
        </div>

        {/* Indicateur de défilement vers le bas */}
        <div className="relative z-10 mx-auto flex flex-col items-center text-center">
          <a
            href="#services"
            className="group inline-flex flex-col items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.3em] text-bronze-light transition hover:text-white sm:text-[10px]"
          >
            <span>Défiler pour découvrir</span>
            <div className="h-8 w-px bg-gradient-to-b from-bronze-light to-transparent transition-all duration-300 group-hover:h-12" />
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. BANDEAU DE CRÉDIBILITÉ (SOBRIÉTÉ PALACE)                                */}
      {/* ========================================================================= */}
      <section className="border-y border-ink/5 bg-sand py-7">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            <div className="text-center">
              <p className="font-serif text-2xl font-normal text-ink sm:text-3xl">30+ Ans</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-ink-muted">De savoir-faire hôtelier</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl font-normal text-ink sm:text-3xl">Guide Michelin</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-ink-muted">Bib Gourmand & 2 Toques</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl font-normal text-ink sm:text-3xl">7j / 7</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-ink-muted">Présence locale Marbella & Mijas</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl font-normal text-ink sm:text-3xl">100 %</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-ink-muted">Discrétion & Confidentialité</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. GRILLE DE PRÉSENTATION DES 4 SERVICES                                 */}
      {/* ========================================================================= */}
      <section id="services" className="py-24 sm:py-32">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Collection de Services</p>
            <h2 className="mt-2 font-serif text-3xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              L’art de vivre méditerranéen, <br />
              <span className="italic text-bronze">veillé dans les moindres détails.</span>
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-ink-soft sm:text-base">
              Quatre expertises haut de gamme conçues pour préserver votre bien, fluidifier vos séjours et vous offrir une sérénité absolue sur la Costa del Sol.
            </p>
          </Reveal>

          {/* Grille 2x2 grand format */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10 sm:mt-20">
            {SERVICES.map((s, idx) => (
              <Reveal key={s.id} delay={idx * 100}>
                <a
                  href={serviceHref(s.id)}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectService(s.id);
                  }}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-[0_4px_24px_rgba(28,26,23,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:border-bronze hover:shadow-[0_16px_40px_rgba(28,26,23,0.09)]"
                >
                  {/* Cadre image soigné */}
                  <div className="relative h-64 overflow-hidden bg-sand sm:h-80">
                    <img
                      src={s.image}
                      alt={s.alt}
                      className={`h-full w-full object-cover ${s.imagePosition} transition-transform duration-700 group-hover:scale-105`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                    {/* Numéro & Kicker */}
                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                      <span className="rounded-full border border-white/25 bg-black/60 px-3.5 py-1 font-serif text-xs font-bold text-white backdrop-blur-md">
                        {s.number}
                      </span>
                      <span className="rounded-full border border-bronze/40 bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink backdrop-blur-md">
                        {s.english}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-6 right-6">
                      <h3 className="font-serif text-2xl font-medium text-white transition-colors group-hover:text-[#F3DEB0] sm:text-3xl">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  {/* Contenu textuel */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                    <p className="text-sm font-light leading-relaxed text-ink-soft sm:text-[15px]">
                      {s.summary}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-ink/5 pt-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-bronze transition-colors group-hover:text-ink">
                        Découvrir la prestation complète
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sand text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-travertine">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
