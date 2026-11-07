import React, { useState, useRef } from 'react';
import { ArrowRight, Check, Award, Star, UtensilsCrossed, ZoomIn, Sparkles, Flame, Users, ChefHat, Utensils, Wine, MessageCircle, Play, Pause, Volume2, VolumeX, Plus, CheckCircle2 } from 'lucide-react';
import { ServiceId, waLink } from '../lib/site';
import { serviceHref } from '../lib/router';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Reveal } from './ui/Reveal';
import { Lightbox } from './ui/Lightbox';
import { useLanguage } from '../lib/LanguageContext';

interface ChefHomeSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
}

interface CulinaryDish {
  id: string;
  category: 'mains' | 'desserts' | 'tables';
  titleFr: string;
  titleEn: string;
  titleEs: string;
  descFr: string;
  descEn: string;
  descEs: string;
  src: string;
  wine: string;
  noteFr: string;
  noteEn: string;
  noteEs: string;
}

const culinaryDishes: CulinaryDish[] = [
  {
    id: 'agneau',
    category: 'mains',
    titleFr: 'Noisette d’Agneau Rôtie & Jus Corsé au Thym',
    titleEn: 'Roasted Lamb Saddle & Thyme-Infused Pan Jus',
    titleEs: 'Lomo de Cordero Asado y Jugo al Tomillo',
    descFr: 'Cuisson basse température, réduction de jus au romarin et légumes glacés du marché andalou.',
    descEn: 'Slow-cooked at gentle heat, rosemary reduction and glazed vegetables from the Andalusian morning market.',
    descEs: 'Cocción lenta a baja temperatura, reducción de romero y verduras glaseadas de la huerta andaluza.',
    src: '/archives-cuisine/2022-10-05 12.42.03.jpg',
    wine: 'Ribera del Duero Reserva',
    noteFr: 'Cuisson lente 12h à 62°C',
    noteEn: 'Slow cooked 12h at 62°C',
    noteEs: 'Cocción lenta 12h a 62°C',
  },
  {
    id: 'dressage',
    category: 'mains',
    titleFr: 'Dressage d’Exception & Finesse Botanique',
    titleEn: 'Haute Gastronomy Plating & Botanical Notes',
    titleEs: 'Emplatado de Autor y Pinceladas Botánicas',
    descFr: 'Herbes sauvages de l’arrière-pays, fleurs comestibles et émulsion légère d’huile d’olive extra vierge.',
    descEn: 'Wild inland herbs, delicate edible blossoms, and cold-pressed extra virgin olive oil emulsion.',
    descEs: 'Hierbas silvestres de monte, flores comestibles y emulsión ligera de aceite de oliva virgen extra.',
    src: '/archives-cuisine/2023-09-12 13.09.35.jpg',
    wine: 'Meursault Premier Cru',
    noteFr: 'Fleurs cueillies le matin',
    noteEn: 'Freshly gathered morning blossoms',
    noteEs: 'Flores frescas recolectadas al alba',
  },
  {
    id: 'peche',
    category: 'mains',
    titleFr: 'Pêche Locale & Nage aux Saveurs Méditerranéennes',
    titleEn: 'Fresh Morning Catch & Mediterranean Bouillon',
    titleEs: 'Pesca del Día y Fondo Ligero Mediterráneo',
    descFr: 'Poisson de ligne pêché du matin, tombée d’épinards frais et velouté safrané délicat.',
    descEn: 'Wild line-caught coastal fish, wilted baby spinach, and delicate saffron-infused velouté.',
    descEs: 'Pescado salvaje capturado al alba, espinacas frescas tiernas y suave velouté al azafrán.',
    src: '/archives-cuisine/2018-07-05 09.50.45.jpg',
    wine: 'Albariño de Rías Baixas',
    noteFr: 'Criée d’Estepona du jour',
    noteEn: 'Daily catch from Estepona auction',
    noteEs: 'Lonja de Estepona del día',
  },
  {
    id: 'boeuf',
    category: 'mains',
    titleFr: 'Filet de Bœuf Saisi & Purée Truffée',
    titleEn: 'Seared Prime Beef Fillet & Truffled Purée',
    titleEs: 'Solomillo de Ternera Marcado y Puré Trufado',
    descFr: 'Filet maturé poêlé minute, mousseline de céleri truffée et petits oignons caramélisés.',
    descEn: 'Dry-aged beef tenderloin seared to order, truffled celery silk, and caramelized shallots.',
    descEs: 'Solomillo madurado salteado al momento, muselina de apio trufada y chalotas caramelizadas.',
    src: '/archives-cuisine/2017-12-01 19.51.19.jpg',
    wine: 'Pauillac Grand Cru Classé',
    noteFr: 'Maturation 45 jours',
    noteEn: '45-day dry aged',
    noteEs: 'Maduración 45 días',
  },
  {
    id: 'saint-valentin',
    category: 'desserts',
    titleFr: 'Dégustation Romantique & Douceur Cacao',
    titleEn: 'Romantic Tasting & Pure Valrhona Chocolate',
    titleEs: 'Degustación Romántica y Cacao Puro Valrhona',
    descFr: 'Création sucrée-salée tout en volupté pour une soirée romantique inoubliable en villa.',
    descEn: 'Subtle sweet symphony of grand cru chocolate and fresh raspberries for private candlelight evenings.',
    descEs: 'Sinfonía golosa de chocolate gran reserva y frambuesas frescas para cenas íntimas a la luz de las velas.',
    src: '/archives-cuisine/2019-02-14 21.11.08.jpg',
    wine: 'Champagne Rosé Millésimé',
    noteFr: 'Chocolat Valrhona & framboises fraîches',
    noteEn: 'Valrhona Chocolate & fresh raspberries',
    noteEs: 'Chocolate Valrhona y frambuesas frescas',
  },
  {
    id: 'soleil',
    category: 'mains',
    titleFr: 'Harmonie Maraîchère & Primeurs d’Andalousie',
    titleEn: 'Andalusian Sun-Drenched Vegetable Harmony',
    titleEs: 'Armonía de la Huerta y Verduras del Sol',
    descFr: 'Légumes croquants du soleil, caviar d’aubergine fumé et réduction balsamique millésimée.',
    descEn: 'Crisp sun-ripened garden vegetables, smoked aubergine caviar, and vintage balsamic reduction.',
    descEs: 'Verduras crujientes al sol, caviar de berenjena ahumada y reducción balsámica envejecida.',
    src: '/archives-cuisine/2018-07-05 09.51.09.jpg',
    wine: 'Château Minuty Rosé Prestige',
    noteFr: 'Primeurs bio d’Andalousie',
    noteEn: 'Organic Andalusian produce',
    noteEs: 'Verduras ecológicas de Andalucía',
  },
  {
    id: 'table-palace',
    category: 'tables',
    titleFr: 'L’Art de la Table en Villa Privée',
    titleEn: 'Palace Table Setting in Your Private Villa',
    titleEs: 'El Arte de la Mesa en Villa Privada',
    descFr: 'Argenterie, verrerie en cristal, bougies et nappage de lin pour une ambiance de palace chez vous.',
    descEn: 'Fine silverware, crystal stemware, candles, and pure linen for five-star palace elegance at home.',
    descEs: 'Cubertería de plata, copas de cristal, velas y mantelería de lino para el ambiente de un palacio en su villa.',
    src: '/archives-cuisine/2018-01-21 08.25.03.jpg',
    wine: 'Sélection Sommelier Dédiée',
    noteFr: 'Mise en scène complète incluse',
    noteEn: 'Full palace mise-en-scène included',
    noteEs: 'Puesta en escena completa incluida',
  },
  {
    id: 'diner-mer',
    category: 'tables',
    titleFr: 'Dîner d’Été au Crépuscule face à la Mer',
    titleEn: 'Sunset Summer Dinner Overlooking the Bay',
    titleEs: 'Cena de Verano al Atardecer frente al Mar',
    descFr: 'Dégustation au crépuscule sur la terrasse avec vue imprenable sur la baie de Marbella.',
    descEn: 'Twilight tasting on your terrace with breathtaking panoramic vistas over Marbella bay.',
    descEs: 'Degustación al anochecer en la terraza con vistas panorámicas sobre la bahía de Marbella.',
    src: '/archives-cuisine/2016-07-21 21.02.39.jpg',
    wine: 'Vins Blancs Méditerranéens',
    noteFr: 'Cadre idyllique au coucher de soleil',
    noteEn: 'Idyllic sunset terrace setting',
    noteEs: 'Marco idílico al atardecer',
  },
];

export const ChefHomeSection: React.FC<ChefHomeSectionProps> = ({ onSelectService }) => {
  const { lang, t } = useLanguage();
  const c = t.chefSection;

  const [activeVideoTab, setActiveVideoTab] = useState<'cuisine' | 'convives' | 'plating'>('cuisine');
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [activeCategory, setActiveCategory] = useState<'all' | 'mains' | 'desserts' | 'tables'>('all');
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [activeDishModal, setActiveDishModal] = useState<CulinaryDish | null>(null);

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isVideoMuted;
    setIsVideoMuted(!isVideoMuted);
  };

  const getDishTitle = (d: CulinaryDish) =>
    lang === 'en' ? d.titleEn : lang === 'es' ? d.titleEs : d.titleFr;

  const getDishDesc = (d: CulinaryDish) =>
    lang === 'en' ? d.descEn : lang === 'es' ? d.descEs : d.descFr;

  const getDishNote = (d: CulinaryDish) =>
    lang === 'en' ? d.noteEn : lang === 'es' ? d.noteEs : d.noteFr;

  const toggleDishSelection = (dishTitle: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedDishes((prev) =>
      prev.includes(dishTitle) ? prev.filter((t) => t !== dishTitle) : [...prev, dishTitle]
    );
  };

  const filteredDishes =
    activeCategory === 'all'
      ? culinaryDishes
      : culinaryDishes.filter((d) => d.category === activeCategory);

  const chefWaMessage =
    lang === 'en'
      ? 'Hello Solveig, I would like to arrange a private dining experience with Chef Dominique Hybord in our villa.'
      : lang === 'es'
      ? 'Hola Solveig, deseo organizar una comida o cena privada con el Chef Dominique Hybord en nuestra villa.'
      : 'Bonjour Solveig, je souhaite organiser un repas privé avec le Chef Dominique Hybord dans notre villa.';

  const customMenuWaMessage =
    lang === 'en'
      ? `Hello Solveig, I have selected my ideal tasting menu with Chef Dominique Hybord:\n\n${selectedDishes
          .map((d, i) => `${i + 1}. ${d}`)
          .join('\n')}\n\nCould you please confirm availability for a private chef dinner in our villa?`
      : lang === 'es'
      ? `Hola Solveig, he seleccionado mi menú degustación con el Chef Dominique Hybord:\n\n${selectedDishes
          .map((d, i) => `${i + 1}. ${d}`)
          .join('\n')}\n\n¿Podría confirmarme la disponibilidad para una cena privada en nuestra villa?`
      : `Bonjour Solveig, j'ai composé mon menu idéal avec Dominique Hybord :\n\n${selectedDishes
          .map((d, i) => `${i + 1}. ${d}`)
          .join('\n')}\n\nPouvez-vous me confirmer les disponibilités pour un dîner privé en villa ?`;

  return (
    <section
      id="chef"
      className="relative overflow-hidden bg-gradient-to-b from-[#182A30] via-[#122227] to-[#0A1418] py-24 sm:py-32 text-[#EDE6DA] border-t border-[#C9A869]/25"
    >
      {/* Halo architectural d'ambiance or chaud */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C9A869]/25 via-transparent to-transparent opacity-70"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        {/* En-tête de section avec contrastes prestigieux */}
        <Reveal className="mx-auto max-w-3xl text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A869]/40 bg-[#C9A869]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-[#F3DEB0]">
            <Flame className="h-4 w-4 text-[#C9A869]" />
            <span>{c.eyebrow}</span>
          </div>

          <h2 className="mt-2 font-serif text-3xl font-medium leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {c.titleMain} <br />
            <span className="italic text-[#F3DEB0]">{c.titleItalic}</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base font-light leading-relaxed text-[#EDE6DA]/80 max-w-2xl mx-auto">
            {c.description}
          </p>
        </Reveal>

        {/* ========================================================================= */}
        {/* BLOC PRINCIPAL : VIDÉOS IMMERSIVES EN VILLA + HISTOIRE DU CHEF             */}
        {/* ========================================================================= */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-12 lg:gap-14 sm:mt-18">
          {/* Colonne gauche : Lecteur Vidéo Interactif 3 Moments */}
          <Reveal className="lg:col-span-6 space-y-3" delay={100}>
            {/* Onglets vidéos */}
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setActiveVideoTab('cuisine')}
                className={`flex items-center justify-center gap-1.5 rounded-xl px-2.5 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all ${
                  activeVideoTab === 'cuisine'
                    ? 'bg-gradient-to-r from-[#C9A869] to-[#EAD49E] text-[#0E1315] shadow-lg shadow-[#C9A869]/20'
                    : 'bg-black/40 text-white/70 hover:text-white border border-white/10'
                }`}
              >
                <ChefHat className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{c.videoTabs.cuisine}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveVideoTab('convives')}
                className={`flex items-center justify-center gap-1.5 rounded-xl px-2.5 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all ${
                  activeVideoTab === 'convives'
                    ? 'bg-gradient-to-r from-[#C9A869] to-[#EAD49E] text-[#0E1315] shadow-lg shadow-[#C9A869]/20'
                    : 'bg-black/40 text-white/70 hover:text-white border border-white/10'
                }`}
              >
                <Users className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{c.videoTabs.convives}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveVideoTab('plating')}
                className={`flex items-center justify-center gap-1.5 rounded-xl px-2.5 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all ${
                  activeVideoTab === 'plating'
                    ? 'bg-gradient-to-r from-[#C9A869] to-[#EAD49E] text-[#0E1315] shadow-lg shadow-[#C9A869]/20'
                    : 'bg-black/40 text-white/70 hover:text-white border border-white/10'
                }`}
              >
                <Utensils className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{c.videoTabs.plating}</span>
              </button>
            </div>

            {/* Fenêtre vidéo */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#C9A869]/30 bg-black shadow-2xl">
              {activeVideoTab === 'cuisine' && (
                <video
                  key="video-cuisine"
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isVideoMuted}
                  playsInline
                  poster="/archives-cuisine/2022-10-05 12.42.03.jpg"
                  className="h-full w-full object-cover"
                >
                  <source src="/videos/chef-flambe-pro.mp4" type="video/mp4" />
                  <source src="/videos/chefs-cuisine-pro.mp4" type="video/mp4" />
                </video>
              )}

              {activeVideoTab === 'convives' && (
                <video
                  key="video-convives"
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isVideoMuted}
                  playsInline
                  poster="/archives-cuisine/2018-01-21 08.25.03.jpg"
                  className="h-full w-full object-cover"
                >
                  <source src="/videos/champagne-convives.webm" type="video/webm" />
                </video>
              )}

              {activeVideoTab === 'plating' && (
                <video
                  key="video-plating"
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isVideoMuted}
                  playsInline
                  poster="/archives-cuisine/2023-09-12 13.09.35.jpg"
                  className="h-full w-full object-cover"
                >
                  <source src="/videos/gourmet-plating-pro.mp4" type="video/mp4" />
                </video>
              )}

              {/* Masque dégradé pour lisibilité */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Contrôles son & pause */}
              <div className="absolute right-4 top-4 flex items-center gap-2 z-10">
                <button
                  type="button"
                  onClick={toggleVideoPlay}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/90 backdrop-blur-md border border-white/20 hover:border-[#C9A869]"
                  aria-label={isVideoPlaying ? 'Pause' : 'Play'}
                >
                  {isVideoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 text-[#C9A869]" />}
                </button>
                <button
                  type="button"
                  onClick={toggleVideoMute}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/90 backdrop-blur-md border border-white/20 hover:border-[#C9A869]"
                  aria-label={isVideoMuted ? 'Activer le son' : 'Couper le son'}
                >
                  {isVideoMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5 text-[#C9A869]" />}
                </button>
              </div>

              {/* Légende du moment */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <p className="text-xs sm:text-sm font-light text-white/95 leading-snug drop-shadow-md">
                  {c.videoCaptions[activeVideoTab]}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Colonne droite : Portrait officiel, distinctions et histoire */}
          <Reveal className="lg:col-span-6 space-y-6" delay={200}>
            {/* Portrait avec distinction */}
            <div className="flex items-center gap-4 sm:gap-5 p-4 rounded-3xl bg-white/[0.04] border border-[#C9A869]/30 backdrop-blur-md">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl border border-[#C9A869]/50 shadow-md">
                <img
                  src="/chef-dominique-cepes.jpg"
                  alt="Le Chef Dominique Hybord portant des cèpes frais"
                  className="h-full w-full object-cover object-[center_20%]"
                  loading="lazy"
                />
              </div>

              <div className="space-y-1 min-w-0">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A869]/40 bg-[#C9A869]/15 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#F3DEB0]">
                  <UtensilsCrossed className="h-3 w-3 text-[#C9A869]" />
                  {c.legacyBadge}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-white truncate">
                  {c.chefName}
                </h3>
                <p className="text-xs font-light text-[#F3DEB0] leading-snug">
                  {c.chefDistinction}
                </p>
              </div>
            </div>

            {/* Biographie */}
            <div className="space-y-3">
              <h4 className="font-serif text-2xl sm:text-3xl font-medium text-white leading-tight">
                {c.headline}
              </h4>
              <p className="text-sm font-light leading-relaxed text-[#EDE6DA]/80">
                {c.biography}
              </p>
            </div>

            {/* 3 piliers concrets */}
            <div className="grid gap-3 sm:grid-cols-3">
              {c.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm hover:border-[#C9A869]/50 transition-colors"
                >
                  <p className="font-serif text-base font-medium text-white">{pillar.title}</p>
                  <p className="mt-1 text-xs font-light leading-relaxed text-[#EDE6DA]/70">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col gap-3 sm:flex-row pt-2">
              <a
                href={waLink(chefWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>{c.reserveCta}</span>
              </a>

              <a
                href={serviceHref('chef-a-domicile')}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectService('chef-a-domicile');
                }}
                className="btn-ghost-light"
              >
                <span>{c.detailsCta}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <p className="text-xs text-[#EDE6DA]/60">
              {c.disclaimer}
            </p>
          </Reveal>
        </div>

        {/* ========================================================================= */}
        {/* 4 FORMULES GASTRONOMIQUES SIGNATURE (CARTES LUXE DEEP NOCTURNE)            */}
        {/* ========================================================================= */}
        <div className="mt-24 border-t border-white/10 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="eyebrow text-[#C9A869]">{c.experiencesTitle}</span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-white">
              {c.experiencesSubtitle}
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.experiences.map((exp, idx) => (
              <div
                key={idx}
                className="card-luxury-dark p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-[#C9A869]/20 border border-[#C9A869]/50 px-3 py-0.5 text-[11px] font-bold text-[#F3DEB0]">
                      0{idx + 1}
                    </span>
                    <Sparkles className="h-4 w-4 text-[#C9A869]" />
                  </div>
                  <h4 className="font-serif text-xl font-medium text-white leading-snug mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#F3DEB0] mb-3">{exp.subtitle}</p>
                  <p className="text-xs font-light text-[#EDE6DA]/75 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#EDE6DA]/60">
                  <span className="font-medium text-[#F3DEB0]">{exp.guests}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* GALERIE DES CRÉATIONS CULINAIRES HAUTE DÉFINITION & SÉLECTION INTERACTIVE   */}
        {/* ========================================================================= */}
        <div className="mt-24 border-t border-white/10 pt-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-[#C9A869]">{c.galleryEyebrow}</p>
              <h3 className="font-serif text-2xl font-medium text-white sm:text-3xl lg:text-4xl">
                {c.galleryTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE6DA]/70 mt-1 max-w-xl">
                {c.galleryHint}
              </p>
            </div>

            {/* Filtres par catégories de plats */}
            <div className="flex items-center gap-1.5 sm:gap-2 p-1 rounded-full bg-black/40 border border-white/15 overflow-x-auto no-scrollbar">
              {(['all', 'mains', 'desserts', 'tables'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-[#C9A869] to-[#EAD49E] text-[#0E1315] shadow-md'
                      : 'text-[#EDE6DA]/70 hover:text-white'
                  }`}
                >
                  {c.categories[cat]}
                </button>
              ))}
            </div>
          </div>

          {/* Bannière interactive de composition de Menu si plats sélectionnés */}
          {selectedDishes.length > 0 && (
            <div className="mb-8 rounded-3xl border border-[#C9A869]/70 bg-gradient-to-r from-[#172B33] via-[#1E3842] to-[#14262D] p-5 sm:p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-fadeUp">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#F3DEB0]">
                    {c.menuBuilder.selectedBadge} · {selectedDishes.length} {c.menuBuilder.dishPlural}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 line-clamp-1">
                  {selectedDishes.join(' · ')}
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedDishes([])}
                  className="text-xs text-[#EDE6DA]/60 hover:text-white underline px-2 py-1"
                >
                  {c.menuBuilder.clearSelection}
                </button>

                <a
                  href={waLink(customMenuWaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#0E1315] font-bold text-xs px-5 py-2.5 shadow-lg shadow-emerald-500/25 transition-all w-full md:w-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{c.menuBuilder.bookMenuWhatsApp}</span>
                </a>
              </div>
            </div>
          )}

          {/* Grille des plats en couleurs vibrantes & appétissantes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredDishes.map((dish) => {
              const isSelected = selectedDishes.includes(getDishTitle(dish));

              return (
                <div
                  key={dish.id}
                  className="card-luxury-dark group overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Cadre image cliquable */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setActiveDishModal(dish)}
                      onKeyDown={(e) => e.key === 'Enter' && setActiveDishModal(dish)}
                      className="relative aspect-[4/3] w-full overflow-hidden bg-black/50 cursor-pointer focus:outline-none"
                    >
                      <img
                        src={dish.src}
                        alt={getDishTitle(dish)}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                      {/* Loupe de zoom */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30 pointer-events-none">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-night opacity-0 transition-opacity group-hover:opacity-100 shadow-lg">
                          <ZoomIn className="h-5 w-5" />
                        </span>
                      </div>

                      {/* Badge Accord Vin Sommelier */}
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/70 backdrop-blur-md border border-[#C9A869]/50 px-2.5 py-0.5 text-[10px] font-semibold text-[#F3DEB0]">
                          <Wine className="h-3 w-3 text-[#C9A869]" />
                          <span>{dish.wine}</span>
                        </span>
                      </div>
                    </div>

                    {/* Contenu textuel */}
                    <div className="p-5 space-y-2">
                      <h4 className="font-serif text-lg font-medium text-white leading-snug">
                        {getDishTitle(dish)}
                      </h4>
                      <p className="text-xs font-light text-[#EDE6DA]/75 leading-relaxed line-clamp-2">
                        {getDishDesc(dish)}
                      </p>
                      <p className="text-[11px] font-medium text-[#C9A869] pt-1">
                        ★ {getDishNote(dish)}
                      </p>
                    </div>
                  </div>

                  {/* Bouton d'ajout au menu */}
                  <div className="p-5 pt-0">
                    <button
                      type="button"
                      onClick={(e) => toggleDishSelection(getDishTitle(dish), e)}
                      className={`w-full flex items-center justify-center gap-2 rounded-xl py-2 px-3 text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-emerald-500 text-[#0E1315] shadow-md shadow-emerald-500/20'
                          : 'border border-white/20 bg-white/5 text-white hover:border-[#C9A869] hover:bg-white/10'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span>Sélectionné</span>
                        </>
                      ) : (
                        <>
                          <Plus className="h-3.5 w-3.5 text-[#C9A869]" />
                          <span>Ajouter au menu</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal Zoom haute résolution */}
      {activeDishModal && (
        <Lightbox
          src={activeDishModal.src}
          alt={getDishTitle(activeDishModal)}
          onClose={() => setActiveDishModal(null)}
        />
      )}
    </section>
  );
};
