import React, { useRef, useState } from 'react';
import { ArrowRight, ArrowDown, Sparkles, MessageCircle, Phone, Check, Shield, Star, Clock, ChefHat, KeyRound } from 'lucide-react';

interface HeroEditorialResortProps {
  onSelectService: (serviceId: string) => void;
}

export const HeroEditorialResort: React.FC<HeroEditorialResortProps> = ({ onSelectService }) => {
  const scrollToServices = () => {
    const el = document.getElementById('editorial-services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-[#081115] text-[#f7f0e3]">
      {/* ========================================================================= */}
      {/* 1. HERO : LE MINIMALISME CONFIDENTIEL (DIRECTION 1)                       */}
      {/* Pureté absolue, zéro encombrement, respiration de grand domaine           */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden pt-28 sm:pt-36 pb-10 sm:pb-14 px-6 sm:px-12"
        aria-label="Solveig’s Prestige Services — Conciergerie Privée Marbella & Mijas"
      >
        {/* Visual Background: Slow subtle panoramic breath (Ken Burns luxury movement) */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#070e11]">
          <img
            src="/hero-marbella.png"
            alt="Domaine privé au coucher de soleil à Marbella"
            className="w-full h-full object-cover object-[52%_center] sm:object-[center_22%] scale-105 animate-[pulse_14s_ease-in-out_infinite] transition-transform duration-1000"
            loading="eager"
          />

          {/* Luxury Shading Gradients: Deep Mediterranean Twilight + Gentle Gold Reflection */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/30 to-[#081115] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(194,154,82,0.12),transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#081115] via-[#081115]/75 to-transparent pointer-events-none" />
        </div>

        {/* Top Minimal Badge */}
        <div className="relative z-10 mx-auto text-center animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c29a52]/40 bg-black/45 backdrop-blur-md text-[#fbe8b5] text-[10px] sm:text-[11px] font-bold tracking-[0.28em] uppercase shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#edd088]" />
            <span>Costa del Sol · Marbella & Mijas</span>
          </div>
        </div>

        {/* Centerpiece: Regal Monogram & Confident Minimalist Typography */}
        <div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center my-auto py-8">
          {/* Main Title: SOLVEIG'S */}
          <h1 className="font-serif text-4xl min-[380px]:text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-normal tracking-[0.14em] uppercase text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] leading-[0.92]">
            SOLVEIG’S
          </h1>

          {/* Subtitle with Perfect S */}
          <p className="mt-2 sm:mt-3 text-[10px] min-[380px]:text-xs sm:text-sm md:text-base font-bold tracking-[0.42em] text-[#edd088] uppercase drop-shadow">
            PRESTIGE SERVICES
          </p>

          {/* Ultra-fine Golden Hairline */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-4 w-full max-w-md">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c29a52]/60 to-transparent" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#edd088] bg-[#c29a52]/40" />
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c29a52]/60 to-transparent" />
          </div>

          {/* Single Poetic, Confident Line */}
          <p className="mt-5 sm:mt-7 max-w-xl text-xs sm:text-base md:text-lg text-white/90 font-light leading-relaxed tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] px-4">
            Une présence locale discrète pour des propriétés d’exception.
          </p>

          {/* Two Quiet Luxury Calls to Action */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md px-4">
            <a
              href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20je%20souhaite%20un%20accompagnement%20sur-mesure%20pour%20ma%20propri%C3%A9t%C3%A9."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-2xl shadow-[#c29a52]/25 hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Demande Confidentielle</span>
            </a>

            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/25 bg-black/40 hover:bg-white/10 hover:border-[#edd088] text-white/95 font-medium text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all group"
            >
              <span>Les Prestations</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#edd088] transition-transform group-hover:translate-y-1" />
            </button>
          </div>
        </div>

        {/* Bottom Editorial Scroll Cue: Sculptural, Quiet, Centered */}
        <div className="relative z-10 mx-auto text-center flex flex-col items-center">
          <button
            onClick={scrollToServices}
            className="group inline-flex flex-col items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[#edd088]/80 hover:text-white transition-colors"
          >
            <span>Défiler pour explorer</span>
            <div className="w-px h-8 bg-gradient-to-b from-[#edd088] to-transparent group-hover:h-11 transition-all duration-300" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ÉDITORIAL RESORT MÉDITERRANÉEN : LES 4 PRESTATIONS MAJEURES (DIR. 2)  */}
      {/* Grands panneaux panoramiques Lookbook, élégance calme, haute typographie */}
      {/* ========================================================================= */}
      <div id="editorial-services" className="relative z-10 divide-y divide-white/10">

        {/* ----------------------------------------------------------------------- */}
        {/* FEATURE 01 : INTENDANCE DE DOMAINE & PROPERTY MANAGEMENT                */}
        {/* ----------------------------------------------------------------------- */}
        <section className="py-20 sm:py-32 px-5 sm:px-10 lg:px-16 max-w-[1560px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div
                onClick={() => onSelectService('property-management')}
                className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-[#c29a52]/30 shadow-2xl bg-black/60"
              >
                <div className="relative h-[320px] sm:h-[480px] lg:h-[560px] overflow-hidden">
                  <img
                    src="/property-management-charm.jpg"
                    alt="Intendance et gardiennage de villa de prestige à Marbella"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Floating Micro Badge in Image */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-black/75 backdrop-blur-md border border-[#c29a52]/35 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#edd088]">
                        Protocole Propriétaire
                      </span>
                      <p className="font-serif text-base sm:text-xl text-white font-medium mt-0.5">
                        Comptes-rendus détaillés avec photos HD à chaque visite
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#c29a52]/20 border border-[#c29a52]/50 flex items-center justify-center text-[#edd088] shrink-0 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#c29a52]">01</span>
                <span className="h-px w-10 bg-[#c29a52]/40" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#edd088]">
                  Intendance de Domaine
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-[1.08]">
                Votre maison entre de bonnes mains, <br />
                <span className="italic text-[#edd088]">même lorsque vous êtes loin.</span>
              </h2>

              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                Posséder une villa de prestige sur la Costa del Sol doit demeurer un privilège sans contrainte. Solveig’s Prestige Services prend en charge l’intendance complète, la surveillance attentive et la coordination des prestataires de votre bien.
              </p>

              {/* 3 Pillars List */}
              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-white/85">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c29a52]/20 flex items-center justify-center text-[#edd088] shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Visites périodiques approfondies (climatisation, piscine, toiture, sécurité)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c29a52]/20 flex items-center justify-center text-[#edd088] shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Rapports photo et vidéo réguliers envoyés directement sur WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c29a52]/20 flex items-center justify-center text-[#edd088] shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Coordination rigoureuse des artisans locaux au juste prix sans surcoût</span>
                </li>
              </ul>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => onSelectService('property-management')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#edd088] hover:text-white transition-colors group"
                >
                  <span>Consulter le détail de l'intendance</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* FEATURE 02 : CONCIERGERIE PRIVÉE ET LIFESTYLE 7/7                       */}
        {/* ----------------------------------------------------------------------- */}
        <section className="py-20 sm:py-32 px-5 sm:px-10 lg:px-16 max-w-[1560px] mx-auto bg-[#0a1418]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Editorial Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#c29a52]">02</span>
                <span className="h-px w-10 bg-[#c29a52]/40" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#edd088]">
                  Conciergerie Privée 7/7
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-[1.08]">
                Le sens du détail, <br />
                <span className="italic text-[#edd088]">sans jamais en faire trop.</span>
              </h2>

              {/* Exact Text approved by client */}
              <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed">
                Une présence locale pour rendre les séjours plus fluides et les demandes plus simples avec discrétion. Obtenir une table dans un restaurant de la Costa del Sol, réserver un golf, une échappée en mer ou disposer d'un chauffeur dès votre arrivée à l’aéroport. Solveig’s Prestige Services anticipe chaque instant pour vous offrir une sérénité absolue.
              </p>

              {/* 3 Pillars List */}
              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-white/85">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c29a52]/20 flex items-center justify-center text-[#edd088] shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Ligne de conciergerie privée WhatsApp dédiée 7 jours sur 7</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c29a52]/20 flex items-center justify-center text-[#edd088] shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Tables d'exception, beach clubs prisés & yacht charter à Puerto Banús</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c29a52]/20 flex items-center justify-center text-[#edd088] shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Chauffeurs privés VIP pour transferts aéroports de Malaga & Gibraltar</span>
                </li>
              </ul>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20je%20souhaiterais%20solliciter%20vos%20services%20de%20conciergerie%20priv%C3%A9e%20pour%20mon%20s%C3%A9jour%20%C3%A0%20Marbella."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-black font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Échanger sur WhatsApp 7/7</span>
                </a>

                <button
                  onClick={() => onSelectService('concierge-services')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#edd088] hover:text-white transition-colors group"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-7">
              <div
                onClick={() => onSelectService('concierge-services')}
                className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-[#c29a52]/30 shadow-2xl bg-black/60"
              >
                <div className="relative h-[320px] sm:h-[480px] lg:h-[560px] overflow-hidden">
                  <img
                    src="/candidates/option1_yacht.jpg"
                    alt="Conciergerie privée et yacht charter à Marbella"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-black/75 backdrop-blur-md border border-[#c29a52]/35 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#edd088]">
                        Lifestyle & Méditerranée
                      </span>
                      <p className="font-serif text-base sm:text-xl text-white font-medium mt-0.5">
                        L’art de vivre sur la Costa del Sol, sans contrainte
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#c29a52]/20 border border-[#c29a52]/50 flex items-center justify-center text-[#edd088] shrink-0 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* FEATURE 03 : LOCATION SAISONNIÈRE DE PRESTIGE & GESTION LOCATIVE        */}
        {/* ----------------------------------------------------------------------- */}
        <section className="py-20 sm:py-32 px-5 sm:px-10 lg:px-16 max-w-[1560px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div
                onClick={() => onSelectService('rental-management')}
                className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-[#c29a52]/30 shadow-2xl bg-black/60"
              >
                <div className="relative h-[320px] sm:h-[480px] lg:h-[560px] overflow-hidden">
                  <img
                    src="/rental-management-charm.jpg"
                    alt="Gestion locative et intendance saisonnière à Marbella"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-black/75 backdrop-blur-md border border-[#c29a52]/35 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#edd088]">
                        Deux Formules Sur-Mesure
                      </span>
                      <p className="font-serif text-base sm:text-xl text-white font-medium mt-0.5">
                        Accueil VIP, blanchisserie hôtelière 5★ & état des lieux
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#c29a52]/20 border border-[#c29a52]/50 flex items-center justify-center text-[#edd088] shrink-0 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#c29a52]">03</span>
                <span className="h-px w-10 bg-[#c29a52]/40" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#edd088]">
                  Location Saisonnière
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-[1.08]">
                Une expérience pensée <br />
                <span className="italic text-[#edd088]">avant même l’arrivée.</span>
              </h2>

              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                Louer sa propriété d’exception sur la Costa del Sol doit s’accompagner d’une totale tranquillité d’esprit. Solveig’s Prestige Services vous propose deux formules modulables : la prise en charge exclusive sur place lorsque vous gérez vous-même vos réservations, ou une gestion locative intégrale clé en main.
              </p>

              {/* 2 Formulas Box */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="font-serif text-base font-semibold text-[#fbe8b5]">Formule Intendance</p>
                  <p className="text-xs text-white/70 mt-1 leading-snug">
                    Pour les propriétaires qui réservent eux-mêmes : accueil physique, état des lieux & ménage 5 étoiles.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="font-serif text-base font-semibold text-[#fbe8b5]">Formule Clé en Main</p>
                  <p className="text-xs text-white/70 mt-1 leading-snug">
                    Gestion locative intégrale : commercialisation, sélection attentive des voyageurs et conciergerie dédiée.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onSelectService('rental-management')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#edd088] hover:text-white transition-colors group"
                >
                  <span>Explorer les formules locatives</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------------- */}
        {/* FEATURE 04 : CHEF À DOMICILE · DOMINIQUE HYBORD (VRAIE PHOTO CÈPES)     */}
        {/* ----------------------------------------------------------------------- */}
        <section className="py-20 sm:py-32 px-5 sm:px-10 lg:px-16 max-w-[1560px] mx-auto bg-[#0a1418]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Editorial Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#c29a52]">04</span>
                <span className="h-px w-10 bg-[#c29a52]/40" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#edd088]">
                  Chef Privé en Villa
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-medium leading-[1.08]">
                Trente ans d’exigence, <br />
                <span className="italic text-[#edd088]">dans l’intimité de votre table.</span>
              </h2>

              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                Recevez vos proches sans quitter votre villa. Le Chef Dominique Hybord imagine avec vous un menu sur mesure, inspiré par la Méditerranée et les plus beaux produits de saison, puis le prépare directement dans votre cuisine pour que vous profitiez pleinement de vos invités.
              </p>

              {/* Chef Awards Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#fbe8b5]">
                  <Star className="w-3.5 h-3.5 text-[#edd088] fill-current" />
                  <span>Bib Gourmand Guide Michelin</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#fbe8b5]">
                  <ChefHat className="w-3.5 h-3.5 text-[#edd088]" />
                  <span>2 Toques Gault & Millau</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#fbe8b5]">
                  <Clock className="w-3.5 h-3.5 text-[#edd088]" />
                  <span>30+ Ans d'Expérience</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20je%20souhaite%20organiser%20une%20exp%C3%A9rience%20Chef%20%C3%A0%20Domicile%20priv%C3%A9e%20pour%20ma%20villa."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Réserver le Chef sur WhatsApp</span>
                </a>

                <button
                  onClick={() => onSelectService('chef-a-domicile')}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#edd088] hover:text-white transition-colors group"
                >
                  <span>Découvrir l'expérience culinaire</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Visual Column with Genuine Photo of Dominique Hybord carrying Cèpes */}
            <div className="lg:col-span-7">
              <div
                onClick={() => onSelectService('chef-a-domicile')}
                className="group relative cursor-pointer overflow-hidden rounded-[2rem] border border-[#c29a52]/40 shadow-2xl bg-black/60"
              >
                <div className="relative h-[360px] sm:h-[500px] lg:h-[600px] overflow-hidden">
                  <img
                    src="/chef-dominique-cepes.jpg"
                    alt="Le chef Dominique Hybord avec une caisse de cèpes d'exception pour un dîner privé"
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-black/80 backdrop-blur-md border border-[#c29a52]/40 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#edd088]">
                        Dominique Hybord · Chef Privé
                      </span>
                      <p className="font-serif text-base sm:text-xl text-white font-medium mt-0.5">
                        L’amour viscéral des produits d’exception cuisinés chez vous
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#c29a52]/20 border border-[#c29a52]/50 flex items-center justify-center text-[#edd088] shrink-0 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
