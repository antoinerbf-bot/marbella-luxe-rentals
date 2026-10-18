import React, { useState } from 'react';
import { ArrowRight, Check, KeyRound, Sparkles, ChefHat, MessageCircle, Phone, Mail, Play, ZoomIn, Utensils, X, Wine, Users, Plus, CheckCircle2, CalendarDays, Flame } from 'lucide-react';

interface SectionsShowcaseProps {
  onSelectService: (serviceId: string) => void;
}

export const SectionsShowcase: React.FC<SectionsShowcaseProps> = ({ onSelectService }) => {
  const [activeVideoTab, setActiveVideoTab] = useState<'cuisine' | 'convives' | 'plating'>('cuisine');
  const [activeDishCategory, setActiveDishCategory] = useState<'all' | 'mains' | 'desserts' | 'tables'>('all');
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [zoomedDish, setZoomedDish] = useState<{
    src: string;
    title: string;
    desc: string;
    category: string;
    wine?: string;
    note?: string;
  } | null>(null);

  const toggleDishInMenu = (dishTitle: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedDishes((prev) =>
      prev.includes(dishTitle) ? prev.filter((t) => t !== dishTitle) : [...prev, dishTitle]
    );
  };

  // ALL 16+ AUTHENTIC DISHES FROM DOMINIQUE HYBORD ARCHIVES WITH WINE PAIRING & CHEF NOTES
  const allCulinaryDishes = [
    {
      title: 'Noisette d’Agneau Rôtie & Jus Corsé au Thym',
      category: 'mains',
      desc: 'Cuisson basse température, réduction de jus au romarin et légumes glacés du marché andalou.',
      src: '/archives-cuisine/2022-10-05 12.42.03.jpg',
      wine: 'Ribera del Duero Reserva',
      note: 'Cuisson lente 12h à 62°C',
    },
    {
      title: 'Dressage d’Exception & Finesse Botanique',
      category: 'mains',
      desc: 'Herbes sauvages de l’arrière-pays, fleurs comestibles et émulsion légère d’huile d’olive extra vierge.',
      src: '/archives-cuisine/2023-09-12 13.09.35.jpg',
      wine: 'Meursault Premier Cru',
      note: 'Fleurs cueillies le matin',
    },
    {
      title: 'Pêche Locale & Nage aux Saveurs Méditerranéennes',
      category: 'mains',
      desc: 'Poisson de ligne pêché du matin, tombée d’épinards frais et velouté safrané délicat.',
      src: '/archives-cuisine/2018-07-05 09.50.45.jpg',
      wine: 'Albariño de Rías Baixas',
      note: 'Criée d’Estepona du jour',
    },
    {
      title: 'Harmonie de Saveurs Estivales',
      category: 'mains',
      desc: 'Légumes croquants du soleil, caviar d’aubergine fumé et réduction balsamique millésimée.',
      src: '/archives-cuisine/2018-07-05 09.51.09.jpg',
      wine: 'Château Minuty Rosé Prestige',
      note: 'Primeurs bio d’Andalousie',
    },
    {
      title: 'Pièce de Bœuf d’Exception & Accords Grands Crus',
      category: 'mains',
      desc: 'Filet maturé poêlé minute, mousseline de céleri truffée et petits oignons caramélisés.',
      src: '/archives-cuisine/2017-12-01 19.51.19.jpg',
      wine: 'Pauillac Grand Cru Classé',
      note: 'Maturation 45 jours',
    },
    {
      title: 'Création Gastronomique d’Auteur',
      category: 'mains',
      desc: 'Richesse des textures, foie gras poêlé et réduction aux épices douces.',
      src: '/archives-cuisine/2023-09-12 13.09.35.jpg',
      wine: 'Sauternes Millésimé',
      note: 'Recette signature Dominique Hybord',
    },
    {
      title: 'Médaillons Délicats & Velouté d’Antan',
      category: 'mains',
      desc: 'Technique française de haute précision alliant générosité montagnarde et soleil d’Espagne.',
      src: '/archives-cuisine/2015-09-16 11.01.56.jpg',
      wine: 'Condrieu Guigal',
      note: 'Tradition alpine réinventée',
    },
    {
      title: 'Entrée Fraîcheur & Émulsion Agrumes',
      category: 'mains',
      desc: 'Équilibre parfait entre acidité vive des citrons de Malaga et douceur des produits nobles.',
      src: '/archives-cuisine/2016-12-07 13.01.27.jpg',
      wine: 'Chablis Premier Cru',
      note: 'Agrumes bio de la vallée de Guadalhorce',
    },
    {
      title: 'Délice Festif & Dressage Contemporain',
      category: 'mains',
      desc: 'Assiette sculptée pour un dîner de prestige sous la tonnelle d’une villa à Marbella.',
      src: '/archives-cuisine/2017-11-29 13.03.41.jpg',
      wine: 'Champagne Laurent-Perrier Brut',
      note: 'Dressage minute en cuisine ouverte',
    },
    {
      title: 'Menu Dégustation Saint-Valentin Privé',
      category: 'desserts',
      desc: 'Création sucrée-salée tout en volupté pour une soirée romantique inoubliable en villa.',
      src: '/archives-cuisine/2019-02-14 21.11.08.jpg',
      wine: 'Champagne Rosé Millésimé',
      note: 'Chocolat Valrhona & framboises fraîches',
    },
    {
      title: 'Palette Maraîchère & Fraîcheur du Terroir',
      category: 'mains',
      desc: 'Sélection des primeurs biologiques cultivés avec passion en Andalousie.',
      src: '/archives-cuisine/2019-08-01 10.10.16-1.jpg',
      wine: 'Sancerre Blanc Domaine Vacheron',
      note: '100% végétal haute couture',
    },
    {
      title: 'Gibier Noble & Châtaignes Grillées',
      category: 'mains',
      desc: 'Inspiration des grands chalets alpins mariée à la chaleur des intérieurs de Marbella.',
      src: '/archives-cuisine/2019-11-20 13.10.51-1.jpg',
      wine: 'Hermitage Rouge',
      note: 'Héritage étoilé de Dominique Hybord',
    },
    {
      title: 'L’Art de la Table en Villa Privée',
      category: 'tables',
      desc: 'Argenterie, verrerie en cristal, bougies et nappage de lin pour une ambiance de palace chez vous.',
      src: '/archives-cuisine/2018-01-21 08.25.03.jpg',
      wine: 'Sélection Sommelier Dédiée',
      note: 'Mise en scène complète incluse',
    },
    {
      title: 'Dîner d’Été en Plein Air face à la Mer',
      category: 'tables',
      desc: 'Dégustation au crépuscule sur la terrasse avec vue imprenable sur la baie de Marbella.',
      src: '/archives-cuisine/2016-07-21 21.02.39.jpg',
      wine: 'Vins Blancs Méditerranéens',
      note: 'Cadre idyllique au coucher de soleil',
    },
    {
      title: 'Création Récente 2024 · Saveurs Sublimes',
      category: 'mains',
      desc: 'L’excellence continue d’une cuisine d’auteur vivante, généreuse et profondément raffinée.',
      src: '/archives-cuisine/2024-01-23 16.31.12.jpg',
      wine: 'Rioja Gran Reserva',
      note: 'Dernière création de saison',
    },
    {
      title: 'Apéritif Gourmand & Mignardises Salées',
      category: 'desserts',
      desc: 'Bouchées apéritives créatives servies au bord de la piscine lors des réceptions d’exception.',
      src: '/archives-cuisine/2015-09-16 11.01.18.jpg',
      wine: 'Cava Reserva Brut Nature',
      note: 'Cocktail dînatoire au bord de l’eau',
    },
  ];

  const filteredDishes = allCulinaryDishes.filter((dish) => {
    if (activeDishCategory === 'all') return true;
    return dish.category === activeDishCategory;
  });

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
                Surveillance régulière, contrôle technique, coordination d’artisans et préparation soignée avant chaque séjour.
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
                src="/concierge-private-vip.jpg"
                alt="Conciergerie privée et hospitalité de palace 24/7 à Marbella"
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
                Accueil VIP, réservations de tables d'exception, yachts privés et assistance sur-mesure disponible 7j/7.
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
                Valorisation de votre villa, accueil des hôtes, contrôle rigoureux et rentabilité optimisée en toute sérénité.
              </p>
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
                src="/archives-cuisine/2022-10-05 12.42.03.jpg"
                alt="Chef à domicile haute gastronomie Dominique Hybord"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#34241b]/85 backdrop-blur-md text-[#fbe8b5] text-[9px] sm:text-[10px] font-bold tracking-widest uppercase border border-[#c29a52]/40">
                04 · Gastronomie Privée
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
                L’art de recevoir chez soi. Menus gastronomiques sur-mesure imaginés et exécutés en direct dans votre villa.
              </p>
              <div className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4f7f80] group-hover:text-[#2e8068]">
                <span>Découvrir</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CHEF SERVICE SPOTLIGHT — VIDÉOS IMMERSIVES & CONVIVES EN VILLA */}
      <section id="chef" className="relative px-5 py-24 sm:px-8 lg:px-12 bg-gradient-to-b from-[#182a30] via-[#122227] to-[#0c181c] text-white">
        <div className="mx-auto max-w-[1440px]">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-border/50 bg-[#c29a52]/10 text-[#fbe8b5] text-[11px] font-bold tracking-[0.25em] uppercase mb-4">
              <Flame className="w-4 h-4 text-[#e5a872]" />
              Haute Gastronomie Privée · Dominique Hybord
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.02] text-white">
              Et si le chef venait chez vous ?
            </h2>
            <p className="mt-3 text-lg sm:text-xl font-serif italic text-[#edd088]">
              L’expérience gastronomique privée dans l’intimité exclusive de votre villa
            </p>
            <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed font-light">
              Dans la cuisine ouverte de votre villa avec vue sur la mer, observez le chef faire flamber des produits nobles, dresser vos assiettes sous vos yeux et servir vos convives réunis autour d'une table d'exception. Vous profitez pleinement de vos proches ; nous orchestrons un service de palace sur-mesure.
            </p>
          </div>

          {/* Main Showcase Grid: Interactive Video Player with 3 Switchable Villa Moments */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center rounded-3xl bg-[#15262c]/90 border border-gold-border/40 p-4 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
            {/* Video Player Box with 3 Tab Selectors */}
            <div className="flex flex-col space-y-3">
              {/* Video Tabs: Cuisine / Convives / Dressage */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                <button
                  onClick={() => setActiveVideoTab('cuisine')}
                  className={`flex items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:px-3 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all ${
                    activeVideoTab === 'cuisine'
                      ? 'bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black shadow-md'
                      : 'bg-black/40 text-white/70 hover:text-white border border-white/10'
                  }`}
                >
                  <ChefHat className="w-3.5 h-3.5 shrink-0" />
                  <span className="sm:hidden font-medium">Cuisine</span>
                  <span className="hidden sm:inline">1. En Cuisine</span>
                </button>
                <button
                  onClick={() => setActiveVideoTab('convives')}
                  className={`flex items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:px-3 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all ${
                    activeVideoTab === 'convives'
                      ? 'bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black shadow-md'
                      : 'bg-black/40 text-white/70 hover:text-white border border-white/10'
                  }`}
                >
                  <Users className="w-3.5 h-3.5 shrink-0" />
                  <span className="sm:hidden font-medium">Convives</span>
                  <span className="hidden sm:inline">2. Les Convives</span>
                </button>
                <button
                  onClick={() => setActiveVideoTab('plating')}
                  className={`flex items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:px-3 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all ${
                    activeVideoTab === 'plating'
                      ? 'bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black shadow-md'
                      : 'bg-black/40 text-white/70 hover:text-white border border-white/10'
                  }`}
                >
                  <Utensils className="w-3.5 h-3.5 shrink-0" />
                  <span className="sm:hidden font-medium">Dressage</span>
                  <span className="hidden sm:inline">3. Dressage</span>
                </button>
              </div>

              {/* Video Player Viewport */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 group min-h-[260px] sm:min-h-[440px] bg-black">
                {activeVideoTab === 'cuisine' && (
                  <video
                    key="video-cuisine"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/archives-cuisine/2022-10-05 12.42.03.jpg"
                    className="w-full h-full object-cover min-h-[260px] sm:min-h-[440px]"
                  >
                    <source src="/videos/chefs-cuisine-pro.mp4" type="video/mp4" />
                  </video>
                )}
                {activeVideoTab === 'convives' && (
                  <video
                    key="video-convives"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/archives-cuisine/2018-01-21 08.25.03.jpg"
                    className="w-full h-full object-cover min-h-[260px] sm:min-h-[440px]"
                  >
                    <source src="/videos/champagne-convives.webm" type="video/webm" />
                  </video>
                )}
                {activeVideoTab === 'plating' && (
                  <video
                    key="video-plating"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/archives-cuisine/2023-09-12 13.09.35.jpg"
                    className="w-full h-full object-cover min-h-[260px] sm:min-h-[440px]"
                  >
                    <source src="/videos/gourmet-plating-pro.mp4" type="video/mp4" />
                  </video>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex items-center justify-between gap-2">
                  <div className="min-w-0 pr-2">
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#edd088] flex items-center gap-1.5 truncate">
                      {activeVideoTab === 'cuisine' && <ChefHat className="w-3.5 h-3.5 text-[#edd088] shrink-0" />}
                      {activeVideoTab === 'convives' && <Users className="w-3.5 h-3.5 text-[#edd088] shrink-0" />}
                      {activeVideoTab === 'plating' && <Utensils className="w-3.5 h-3.5 text-[#edd088] shrink-0" />}
                      {activeVideoTab === 'cuisine' && 'Cuisine Ouverte · Savoir-Faire'}
                      {activeVideoTab === 'convives' && 'Les Convives · Art de Recevoir'}
                      {activeVideoTab === 'plating' && 'Dressage Haute Couture'}
                    </span>
                    <h4 className="font-serif text-base sm:text-2xl text-white font-medium mt-0.5 line-clamp-1 sm:line-clamp-none">
                      {activeVideoTab === 'cuisine' && 'Rigueur & Maîtrise Culinaire de Palace'}
                      {activeVideoTab === 'convives' && 'Moments Précieux Partagés en Villa'}
                      {activeVideoTab === 'plating' && 'Précision et Esthétique dans l’Assiette'}
                    </h4>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 border border-[#f1d291]/60 flex items-center justify-center text-[#f1d291] shrink-0">
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Inclusions */}
            <div className="flex flex-col justify-center space-y-5 sm:space-y-6">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c29a52]/20 border border-[#c29a52]/50 flex items-center justify-center shrink-0 mt-0.5 text-[#fbe8b5]">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-sm sm:text-base">Menu Dégustation Sur-Mesure</h5>
                    <p className="text-xs sm:text-sm text-white/75 mt-0.5 leading-relaxed">
                      Conçu exclusivement selon vos envies, le nombre de convives et vos exigences diététiques.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c29a52]/20 border border-[#c29a52]/50 flex items-center justify-center shrink-0 mt-0.5 text-[#fbe8b5]">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-sm sm:text-base">Approvisionnement Haute Qualité</h5>
                    <p className="text-xs sm:text-sm text-white/75 mt-0.5 leading-relaxed">
                      Pêche locale du jour, primeurs bio d'Andalousie et viandes d'exception sélectionnées chez les meilleurs artisans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c29a52]/20 border border-[#c29a52]/50 flex items-center justify-center shrink-0 mt-0.5 text-[#fbe8b5]">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-sm sm:text-base">Service & Discrétion Absolue</h5>
                    <p className="text-xs sm:text-sm text-white/75 mt-0.5 leading-relaxed">
                      Dressage minute, service à l'assiette soigné et remise en état immaculée de votre cuisine en fin de réception.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => onSelectService('chef-a-domicile')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black font-semibold text-xs sm:text-sm px-6 py-3.5 shadow-lg shadow-gold/25 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Découvrir l'Expérience Chef</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20je%20souhaite%20organiser%20un%20d%C3%AEner%20priv%C3%A9%20avec%20le%20chef%20%C3%A0%20domicile."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Réserver sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* GROS PLAN SUR TOUS LES PLATS RÉELS DE L'ARCHIVE DOMINIQUE HYBORD */}
          <div className="mt-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#edd088]">
                  Galerie Haute Gastronomie
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium mt-1">
                  Les Créations Authentiques de Dominique Hybord
                </h3>
                <p className="text-xs sm:text-sm text-white/70 mt-1">
                  Chaque plat est réalisé sur-mesure dans votre villa. Cliquez sur une photo pour zoomer en haute définition.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-1.5 sm:gap-2 mt-4 md:mt-0 p-1 sm:p-1.5 rounded-full bg-black/40 border border-white/15 overflow-x-auto max-w-full no-scrollbar">
                <button
                  onClick={() => setActiveDishCategory('all')}
                  className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    activeDishCategory === 'all'
                      ? 'bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Tous ({allCulinaryDishes.length})
                </button>
                <button
                  onClick={() => setActiveDishCategory('mains')}
                  className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    activeDishCategory === 'mains'
                      ? 'bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Plats & Mer
                </button>
                <button
                  onClick={() => setActiveDishCategory('desserts')}
                  className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    activeDishCategory === 'desserts'
                      ? 'bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Douceurs
                </button>
                <button
                  onClick={() => setActiveDishCategory('tables')}
                  className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    activeDishCategory === 'tables'
                      ? 'bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Tables Privées
                </button>
              </div>
            </div>

            {/* Interactive Menu Builder Summary Banner (When 1+ dishes selected) */}
            {selectedDishes.length > 0 && (
              <div className="mb-8 p-4 sm:p-6 rounded-3xl bg-gradient-to-r from-[#172b33] via-[#1a333d] to-[#122329] border border-gold-border/70 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-3 duration-300">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#edd088]">
                      Votre Dégustation Personnalisée · {selectedDishes.length} plat{selectedDishes.length > 1 ? 's' : ''} sélectionné{selectedDishes.length > 1 ? 's' : ''}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 line-clamp-1">
                    {selectedDishes.join(' · ')}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 w-full md:w-auto">
                  <button
                    onClick={() => setSelectedDishes([])}
                    className="text-xs text-white/60 hover:text-white underline px-3 py-2"
                  >
                    Effacer la sélection
                  </button>
                  <a
                    href={`https://wa.me/34623626724?text=${encodeURIComponent(
                      `Bonjour Solveig, j'ai composé mon menu idéal avec Dominique Hybord :\n\n${selectedDishes.map((d, i) => `${i + 1}. ${d}`).join('\n')}\n\nPouvez-vous me confirmer les disponibilités pour un dîner privé en villa ?`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-black text-xs font-bold px-6 py-3 shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Réserver ce Menu sur WhatsApp</span>
                  </a>
                </div>
              </div>
            )}

            {/* Gallery Grid: 16+ authentic dishes with interactive selection & zoom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredDishes.map((item, idx) => {
                const isSelected = selectedDishes.includes(item.title);
                return (
                  <div
                    key={idx}
                    className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#edd088] bg-[#1a2f37] ring-1 ring-[#edd088] shadow-2xl'
                        : 'border-white/15 bg-[#142329] hover:border-[#edd088]/60 shadow-lg hover:shadow-xl hover:-translate-y-1'
                    }`}
                  >
                    {/* Image Box */}
                    <div
                      onClick={() => setZoomedDish(item)}
                      className="relative h-44 sm:h-52 overflow-hidden bg-black/60 cursor-pointer"
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#142329] via-transparent to-black/30 pointer-events-none" />

                      {/* Wine Pairing Pill Badge */}
                      {item.wine && (
                        <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[9px] text-[#edd088] font-medium shadow-md">
                          <Wine className="w-3 h-3 text-[#f4cb99] shrink-0" />
                          <span className="truncate max-w-[140px]">{item.wine}</span>
                        </div>
                      )}

                      {/* Zoom Indicator on Hover */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-black/85 text-[#edd088] text-[10px] font-bold uppercase tracking-wider border border-[#edd088] flex items-center gap-1 shadow-lg">
                          <ZoomIn className="w-3 h-3" />
                          Gros Plan HD
                        </span>
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-grow">
                      <div>
                        {item.note && (
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[#c29a52] block mb-1">
                            ★ {item.note}
                          </span>
                        )}
                        <h5
                          onClick={() => setZoomedDish(item)}
                          className="text-xs sm:text-sm font-semibold text-white line-clamp-2 hover:text-[#edd088] cursor-pointer transition-colors"
                        >
                          {item.title}
                        </h5>
                        <p className="text-[10px] sm:text-[11px] text-white/65 line-clamp-2 mt-1 leading-snug">
                          {item.desc}
                        </p>
                      </div>

                      {/* Playful Interactive Menu Toggle Button */}
                      <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                        <button
                          onClick={(e) => toggleDishInMenu(item.title, e)}
                          className={`w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${
                            isSelected
                              ? 'bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black shadow-md'
                              : 'bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/15'
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                              <span>Sélectionné au Menu</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5 text-[#edd088]" />
                              <span>Ajouter au Menu</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DISH LIGHTBOX MODAL WITH FULLSCREEN ZOOM */}
      {zoomedDish && (
        <div
          onClick={() => setZoomedDish(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[92vh] bg-[#122026] border border-gold-border/70 rounded-3xl p-5 sm:p-7 overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            <div className="relative rounded-2xl overflow-hidden max-h-[62vh] bg-black">
              <img src={zoomedDish.src} alt={zoomedDish.title} className="w-full h-full max-h-[62vh] object-contain mx-auto" />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#edd088]">
                    Création Culinaire · Dominique Hybord
                  </span>
                  {zoomedDish.wine && (
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-[9px] text-[#edd088] font-medium flex items-center gap-1">
                      <Wine className="w-2.5 h-2.5" />
                      {zoomedDish.wine}
                    </span>
                  )}
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl text-white font-bold">{zoomedDish.title}</h4>
                <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-2xl">{zoomedDish.desc}</p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => toggleDishInMenu(zoomedDish.title)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-xs font-bold transition-all ${
                    selectedDishes.includes(zoomedDish.title)
                      ? 'bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black shadow-md'
                      : 'border border-white/20 bg-white/5 hover:bg-white/15 text-white'
                  }`}
                >
                  {selectedDishes.includes(zoomedDish.title) ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Retirer du menu</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Ajouter au menu</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/34623626724?text=${encodeURIComponent(`Bonjour Solveig, je souhaite inclure le plat « ${zoomedDish.title} » dans le menu de mon dîner privé à Marbella.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-black text-xs font-bold px-5 py-3 hover:scale-105 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Demander sur WhatsApp</span>
                </a>
              </div>
            </div>

            <button
              onClick={() => setZoomedDish(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 text-white/80 hover:text-white border border-white/20 hover:border-gold transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
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
