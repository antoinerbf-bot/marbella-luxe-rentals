import React, { useState } from 'react';
import { ArrowRight, Check, KeyRound, Sparkles, ChefHat, MessageCircle, Phone, Mail, Play, ZoomIn, Utensils, X, Wine, Users, CalendarDays, Flame, Newspaper } from 'lucide-react';

interface SectionsShowcaseProps {
  onSelectService: (serviceId: string) => void;
}

export const SectionsShowcase: React.FC<SectionsShowcaseProps> = ({ onSelectService }) => {
  const [zoomedDish, setZoomedDish] = useState<{ src: string; title: string } | null>(null);

  // Galerie volontairement éditoriale : photos des assiettes, sans fiches de plats.
  const culinaryGallery = [
    '/archives-cuisine/2022-10-05 12.42.03.jpg',
    '/archives-cuisine/2023-09-12 13.09.35.jpg',
    '/archives-cuisine/2018-07-05 09.50.45.jpg',
    '/archives-cuisine/2018-07-05 09.51.09.jpg',
    '/archives-cuisine/2017-12-01 19.51.19.jpg',
    '/archives-cuisine/2015-09-16 11.01.56.jpg',
    '/archives-cuisine/2016-12-07 13.01.27.jpg',
    '/archives-cuisine/2017-11-29 13.03.41.jpg',
    '/archives-cuisine/2019-02-14 21.11.08.jpg',
    '/archives-cuisine/2019-08-01 10.10.16-1.jpg',
    '/archives-cuisine/2019-11-20 13.10.51-1.jpg',
    '/archives-cuisine/2018-01-21 08.25.03.jpg',
    '/archives-cuisine/2016-07-21 21.02.39.jpg',
    '/archives-cuisine/2024-01-23 16.31.12.jpg',
    '/archives-cuisine/2015-09-16 11.01.18.jpg',
  ];

  const pressGallery = [
    '/archives-cuisine/le dauphiné 5 fevrier 2015 001.jpg',
    '/archives-cuisine/article de La Savoie 001.jpg',
    '/archives-cuisine/pub schuss magazine 2011 001.jpg',
    '/archives-cuisine/tarentaise hebdo du 29 janvier 2015 001.jpg',
    '/archives-cuisine/infosnews 001.jpg',
    '/archives-cuisine/la vie nouvelle 001.jpg',
  ];

  return (
    <div className="w-full bg-[#fbf7f0] text-[#34271e] overflow-hidden relative">
      {/* SECTION 1: L'ART DU DÉTAIL — PALACE IMAGERY */}
      <section id="services" className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-28 max-w-[1440px] mx-auto">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#b28a50] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c29a52]" />
              L’art du détail · Marbella & Mijas
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-[0.95] text-[#34271e]">
              Un service qui se voit.<br />
              <span className="italic text-[#8c6742]">Une présence qui se ressent.</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-[#66584c] lg:justify-self-end">
            De la surveillance méticuleuse de votre propriété à l’accueil personnalisé de vos convives, chaque intervention est pensée comme une extension naturelle de votre art de vivre.
          </p>
        </div>

        {/* 4 Cards Grid - PALACE VISUALS */}
        <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {/* Card 1: Gestion de propriété */}
          <div
            onClick={() => onSelectService('property-management')}
            className="group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-[#fffdf8] border border-[#78664c]/15 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
          >
            <div className="relative h-44 sm:h-60 overflow-hidden">
              <img
                src="/property-management-charm.jpg"
                alt="Domaine de charme et villa andalouse d'exception à Marbella"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase border border-white/20">
                01 · Intendance & Domaine
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#c29a52]/15 text-[#987543] flex items-center justify-center mb-3 sm:mb-4">
                <KeyRound className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#34271e] group-hover:text-[#987543] transition-colors">
                Gestion de propriété
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#74665a] leading-relaxed">
                Votre maison, entre de bonnes mains même lorsque vous êtes loin. Surveillance attentive, visites régulières et coordination bienveillante des prestataires.
              </p>
              <div className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4f7f80] group-hover:text-[#2e8068]">
                <span>Découvrir</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* Card 2: Conciergerie privée */}
          <div
            onClick={() => onSelectService('concierge-services')}
            className="group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-[#fffdf8] border border-[#78664c]/15 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
          >
            <div className="relative h-44 sm:h-60 overflow-hidden">
              <img
                src="/candidates/option1_yacht.jpg"
                alt="Conciergerie privée et yacht charter au coucher de soleil à Puerto Banús"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase border border-white/20">
                02 · Conciergerie 24/7
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#c29a52]/15 text-[#987543] flex items-center justify-center mb-3 sm:mb-4">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#34271e] group-hover:text-[#987543] transition-colors">
                Conciergerie privée
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#74665a] leading-relaxed">
                Le sens du détail, sans jamais en faire trop. Une présence locale pour rendre les séjours plus fluides et les demandes plus simples, avec discrétion.
              </p>
              <div className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4f7f80] group-hover:text-[#2e8068]">
                <span>Découvrir</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* Card 3: Location saisonnière */}
          <div
            onClick={() => onSelectService('rental-management')}
            className="group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-[#fffdf8] border border-[#78664c]/15 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
          >
            <div className="relative h-44 sm:h-60 overflow-hidden">
              <img
                src="/rental-management-charm.jpg"
                alt="Domaine de villégiature et villa andalouse de prestige à Marbella"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase border border-white/20">
                03 · Location Saisonnière
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#c29a52]/15 text-[#987543] flex items-center justify-center mb-3 sm:mb-4">
                <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#34271e] group-hover:text-[#987543] transition-colors">
                Location saisonnière
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#74665a] leading-relaxed">
                Une expérience de séjour pensée avant même l’arrivée. Orchestrée pour préserver votre bien et la qualité de chaque séjour.
              </p>
              
              {/* 2 Formules Claires */}
              <div className="mt-3 pt-2.5 border-t border-[#78664c]/15 text-[10.5px] text-[#66584c] space-y-1">
                <p className="flex items-center gap-1.5 font-medium text-[#8c6742]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c29a52]" />
                  Option 1 · Réservations gérées par vous
                </p>
                <p className="flex items-center gap-1.5 font-medium text-[#8c6742]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c29a52]" />
                  Option 2 · Réservations gérées par nous
                </p>
              </div>

              <div className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4f7f80] group-hover:text-[#2e8068]">
                <span>Découvrir</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* Card 4: Chef à domicile */}
          <div
            onClick={() => onSelectService('chef-a-domicile')}
            className="group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl bg-[#fffdf8] border border-[#78664c]/15 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
          >
            <div className="relative h-44 sm:h-60 overflow-hidden">
              <img
                src="/chef-villa-gastro.jpg"
                alt="Chef privé en villa à Marbella"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#34241b]/85 backdrop-blur-md text-[#fbe8b5] text-[9px] sm:text-[10px] font-bold tracking-widest uppercase border border-[#c29a52]/40">
                04 · Chef à domicile
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#c29a52]/15 text-[#987543] flex items-center justify-center mb-3 sm:mb-4">
                <ChefHat className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#34271e] group-hover:text-[#987543] transition-colors">
                Chef à domicile
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#74665a] leading-relaxed">
                L’art de recevoir chez soi. Menus sur-mesure imaginés en direct avec le chef selon vos goûts, vos envies et votre budget.
              </p>
              <div className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4f7f80] group-hover:text-[#2e8068]">
                <span>Découvrir</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: UNE EXPÉRIENCE DE CHEF PRIVÉ, PAS UNE BRIGADE */}
      <section id="chef" className="relative overflow-hidden bg-[#f6f0e6] px-5 py-16 text-[#29231c] sm:px-8 sm:py-24 lg:px-12">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#d9bd82]/20 blur-3xl" />
        <div className="relative mx-auto max-w-[1440px]">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[1.8rem] bg-[#ddd0ba] shadow-2xl shadow-[#34271e]/15">
                <img
                  src="/chef-villa-gastro.jpg"
                  alt="Le chef Dominique Hybord préparant un dîner privé dans une villa"
                  className="h-[340px] w-full object-cover object-center sm:h-[520px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1711]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-5 sm:p-7">
                  <span className="w-fit rounded-full border border-white/35 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f6dfaa] backdrop-blur">
                    Marbella · Mijas · Costa del Sol
                  </span>
                  <p className="font-serif text-2xl text-white sm:text-3xl">Dominique Hybord</p>
                  <p className="text-sm text-white/80">Chef privé · Cuisine réalisée chez vous</p>
                </div>
              </div>
              <div className="absolute -bottom-5 right-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-[#f6f0e6] shadow-xl sm:block lg:-right-5">
                <img
                  src="/archives-cuisine/2023-09-12 13.09.35.jpg"
                  alt="Assiette préparée par le chef"
                  className="h-36 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="py-2 lg:py-8">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#987543] sm:text-xs">
                <ChefHat className="h-4 w-4" />
                Une table privée, à votre rythme
              </span>
              <h2 className="mt-4 max-w-xl font-serif text-4xl font-medium leading-[1.05] text-[#2b241d] sm:text-5xl lg:text-6xl">
                Le plaisir d’un chef
                <span className="block italic text-[#987543]">chez vous.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#62564a] sm:text-base">
                Le Chef Dominique Hybord imagine votre menu avec vous, puis cuisine directement dans votre villa. Des produits de saison, une inspiration méditerranéenne et le plaisir de profiter de vos proches pendant qu’il s’occupe du repas.
              </p>

              <div className="mt-7 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e7d7b4] text-[#795d30]"><Check className="h-4 w-4" /></span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#30271e] sm:text-base">Un menu imaginé avec vous</h3>
                    <p className="mt-1 text-xs leading-5 text-[#716355] sm:text-sm">Une proposition adaptée à l’occasion, à vos envies et à votre budget.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e7d7b4] text-[#795d30]"><Check className="h-4 w-4" /></span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#30271e] sm:text-base">Le chef cuisine dans votre villa</h3>
                    <p className="mt-1 text-xs leading-5 text-[#716355] sm:text-sm">Préparation sur place et dressage des assiettes au moment du repas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e7d7b4] text-[#795d30]"><Check className="h-4 w-4" /></span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#30271e] sm:text-base">Un moment à partager</h3>
                    <p className="mt-1 text-xs leading-5 text-[#716355] sm:text-sm">De 6 à 15 convives, avec le chef et une personne dédiée au service.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => onSelectService('chef-a-domicile')}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c29a52] to-[#edd088] px-6 py-3.5 text-sm font-semibold text-[#21180d] shadow-lg shadow-[#987543]/20 transition hover:-translate-y-0.5"
                >
                  Découvrir le service <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20je%20souhaite%20organiser%20un%20d%C3%AEner%20priv%C3%A9%20avec%20le%20chef%20%C3%A0%20domicile."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b9a98f] px-6 py-3.5 text-sm font-semibold text-[#403328] transition hover:bg-white/70"
                >
                  <MessageCircle className="h-4 w-4 text-[#2b9a63]" /> Échanger sur WhatsApp
                </a>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#cbbda7] pt-5 text-xs text-[#756653]">
                <span>30 ans d’expérience</span>
                <span>Produits frais de saison</span>
                <span>Chez vous, à Marbella & Mijas</span>
              </div>
            </div>
          </div>
          {/* ARCHIVES ET RECONNAISSANCE PRESSE — conservées sur l’accueil */}
          <div className="mt-10 border-t border-white/10 pt-10">
              <div className="mb-6 flex items-center gap-3">
                <Newspaper className="h-4 w-4 text-[#edd088]" />
                <h4 className="font-serif text-2xl sm:text-3xl text-white">Archives et reconnaissance presse</h4>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                {pressGallery.map((src) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setZoomedDish({ src, title: 'Article de presse' })}
                    aria-label="Agrandir l’article de presse"
                    className="group relative aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#edd088]"
                  >
                    <img
                      src={src}
                      alt="Archive de presse consacrée au parcours de chef de Dominique Hybord"
                      className="h-full w-full object-contain bg-[#f4f0e8] transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100">
                        <ZoomIn className="h-5 w-5" />
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* LIGHTBOX PHOTO — SANS FICHE DESCRIPTIVE */}
      {zoomedDish && (
        <div
          onClick={() => setZoomedDish(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={zoomedDish.title}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-[92vh] max-w-5xl items-center justify-center"
          >
            <img
              src={zoomedDish.src}
              alt={zoomedDish.title}
              className="max-h-[88vh] max-w-full rounded-xl object-contain"
            />
            <button
              type="button"
              onClick={() => setZoomedDish(null)}
              className="absolute -right-2 -top-2 rounded-full border border-white/30 bg-black/80 p-2 text-white hover:text-[#edd088]"
              aria-label="Fermer la photo"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* SECTION 3: PREMIER ÉCHANGE & CONTACT */}
      <section id="contact" className="relative px-5 py-24 sm:px-8 lg:px-12 text-white overflow-hidden">
        {/* Luxury Twilight Panoramic Background Image with Velvety Dark Shading */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/hero-marbella.png"
            alt="Vue panoramique crépuscule sur Marbella et la Méditerranée"
            className="w-full h-full object-cover object-[center_65%] scale-105 filter brightness-70 contrast-105"
            loading="lazy"
          />
          {/* Deep Dark Velvet Gradient Overlay for 100% legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#09151b]/96 via-[#0e1f27]/93 to-[#071116]/97 pointer-events-none" />
          <div className="absolute inset-0 bg-[#09151b]/45 pointer-events-none backdrop-blur-[2px]" />
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0c181c] to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#edd088] mb-4">
              <span className="w-8 h-px bg-[#c29a52]" />
              Premier échange privilégié
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.98] sm:leading-[0.95] text-white">
              Votre propriété mérite une présence à sa hauteur.
            </h2>
            <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base text-white/80 leading-relaxed font-light">
              Parlez-nous de votre bien, de votre rythme de présence et de vos attentes. Nous construirons ensemble l’accompagnement haute couture adapté à votre propriété sur la Costa del Sol.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20je%20souhaite%20discuter%20de%20la%20gestion%20de%20mon%20bien%20%C3%A0%20Marbella%20ou%20Mijas."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-black font-semibold text-xs sm:text-sm px-6 py-3.5 shadow-lg shadow-[#25D366]/25 hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Direct (+34 623 626 724)</span>
              </a>

              <a
                href="tel:+34623626724"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 transition-all"
              >
                <Phone className="w-4 h-4 text-[#edd088]" />
                <span>+34 623 626 724</span>
              </a>

              <a
                href="mailto:solveighybord@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 transition-all"
              >
                <Mail className="w-4 h-4 text-[#edd088]" />
                <span>solveighybord@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="bg-[#172830]/90 border border-gold-border/40 rounded-3xl p-7 sm:p-9 shadow-2xl backdrop-blur-md">
            <h3 className="font-serif text-2xl text-white font-semibold mb-1.5">
              Demande d'accompagnement
            </h3>
            <p className="text-xs text-white/70 mb-6">
              Remplissez ce formulaire et Solveig vous recontactera personnellement dans les 2 heures.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Votre demande a bien été envoyée. Solveig vous recontactera très prochainement.');
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-[#edd088] mb-1">
                  Nom & Prénom
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex: Jean de Montmirail"
                  className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#edd088]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-[#edd088] mb-1">
                  Numéro de Téléphone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+33 6 00 00 00 00"
                  className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#edd088]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-[#edd088] mb-1">
                  Nature de votre demande
                </label>
                <select className="w-full rounded-xl bg-[#122026] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#edd088]">
                  <option value="chef">Chef à domicile privé (dîner / séjour)</option>
                  <option value="gestion">Gestion de propriété (Marbella / Mijas)</option>
                  <option value="conciergerie">Conciergerie privée & Lifestyle</option>
                  <option value="location">Location saisonnière & Intendance</option>
                  <option value="maroc">Séjour Univers Marocain</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black font-semibold text-sm py-3.5 px-6 shadow-lg shadow-gold/25 hover:scale-[1.01] transition-all"
              >
                <span>Envoyer ma demande confidentielle</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
