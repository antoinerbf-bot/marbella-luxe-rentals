import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Check,
  ShieldCheck,
  Star,
  Phone,
  Clock,
  Sparkles,
  FileText,
  ChevronDown,
  UtensilsCrossed,
  KeyRound,
  ZoomIn,
} from 'lucide-react';
import { DEFAULT_WA_MESSAGE, EMAIL, PHONE_DISPLAY, PHONE_TEL, ServiceId, waLink } from '../lib/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Lightbox } from './ui/Lightbox';
import { Reveal } from './ui/Reveal';

interface ServicePageProps {
  serviceId: ServiceId;
  onBack: () => void;
}

interface ServiceContent {
  id: ServiceId;
  badge: string;
  title: string;
  subtitle: string;
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  heroDescription: string;
  whatsappMessage: string;
  stats: { value: string; label: string }[];
  pillars?: {
    title: string;
    desc: string;
    icon: 'shield' | 'clock' | 'star' | 'file';
    details: string[];
  }[];
  processSteps?: {
    step: string;
    title: string;
    desc: string;
  }[];
  inclusions?: string[];
  galleryImages?: { url: string; caption: string }[];
  faqs?: { q: string; a: string }[];
}

const servicesDatabase: Record<ServiceId, ServiceContent> = {
  'property-management': {
    id: 'property-management',
    badge: 'Intendance Privée & Domaine · Marbella & Mijas',
    title: 'Property Management',
    subtitle: 'Votre maison, entre de bonnes mains même lorsque vous êtes loin',
    tagline: '« La tranquillité commence par savoir que quelqu’un veille réellement sur votre bien. »',
    heroImage: '/property-management-charm.jpg',
    heroImageAlt: 'Domaine de charme avec piscine et jardin méditerranéen',
    heroDescription:
      'Posséder une villa de prestige sur la Costa del Sol doit demeurer un privilège sans contrainte. Solveig’s Prestige Services prend en charge l’intendance complète, la surveillance attentive et la coordination des prestataires de votre bien. À chaque visite, un compte-rendu clair et détaillé avec photos HD vous est adressé directement sur WhatsApp ou par email.',
    whatsappMessage:
      'Bonjour Solveig, je souhaite échanger à propos de l’intendance et de la gestion de ma villa sur la Costa del Sol.',
    stats: [
      { value: '30+', label: 'Ans d’expérience et d’exigence' },
      { value: '100 %', label: 'Comptes-rendus avec photos HD' },
      { value: '7j / 7', label: 'Disponibilité & veille active' },
      { value: '0 €', label: 'Surcoût caché sur les artisans' },
    ],
    pillars: [
      {
        title: 'Surveillance Attentive & Visites Régulières',
        desc: 'Inspections périodiques approfondies de l’ensemble de vos espaces intérieurs et extérieurs.',
        icon: 'shield',
        details: [
          'Contrôle complet des systèmes de climatisation, chauffage et ventilation',
          'Vérification de la plomberie, suppression des odeurs de siphons et détection précoce de fuites',
          'Contrôle attentif du taux de sel, du pH et de la limpidité de la piscine',
          'Vérification des fermetures de sécurité, portails et caméras',
        ],
      },
      {
        title: 'Coordination Bienveillante des Prestataires',
        desc: 'Supervision directe de chaque intervenant pour une exécution soignée au juste prix.',
        icon: 'clock',
        details: [
          'Sélection auprès des meilleurs artisans locaux de confiance (jardinage, électricité, toiture)',
          'Présence physique sur place lors des interventions et contrôle des travaux finis',
          'Vérification attentive des devis et factures pour vous éviter toute surfacturation',
          'Planification préventive des révisions annuelles (pompes à chaleur, portails, arrosage)',
        ],
      },
      {
        title: 'Protocole d’Arrivée VIP Propriétaire',
        desc: 'Votre villa prête à vous accueillir dans un confort absolu à chaque séjour.',
        icon: 'star',
        details: [
          'Mise en température des pièces 24h avant votre arrivée (chauffage ou climatisation)',
          'Aération complète et préparation des espaces de vie',
          'Remplissage de votre réfrigérateur selon votre liste de courses personnalisée',
          'Fleurs fraîches coupées, lits faits avec soin et linge de maison impeccable',
        ],
      },
      {
        title: 'Hivernage & Sécurisation Lors de Vos Départs',
        desc: 'Une fermeture méticuleuse pour protéger durablement la valeur de votre patrimoine.',
        icon: 'file',
        details: [
          'Fermeture raisonnée des vannes principales d’eau pour éviter tout sinistre silencieux',
          'Protection des mobiliers d’extérieur face au vent marin et aux intempéries',
          'Gestion du courrier et réception des livraisons en votre absence',
          'Visite de contrôle renforcée après chaque épisode météorologique majeur',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Visite Initiale & Prise en Main',
        desc: 'Nous découvrons votre propriété, vos attentes précises et établissons un suivi sur-mesure.',
      },
      {
        step: '02',
        title: 'Cahier des Charges Personnalisé',
        desc: 'Nous adaptons la fréquence des visites (hebdomadaire ou bi-mensuelle) à votre rythme de séjour.',
      },
      {
        step: '03',
        title: 'Intendance Active & Rapports HD',
        desc: 'Après chaque passage, vous recevez un compte-rendu clair avec photos HD directement sur WhatsApp.',
      },
      {
        step: '04',
        title: 'Accueil & Préparation Sur-Mesure',
        desc: 'À chacun de vos séjours, vous posez vos valises dans une maison prête à vivre.',
      },
    ],
    inclusions: [
      'Visites d’inspection régulières avec compte-rendu photographique HD',
      'Accès direct WhatsApp 7j/7 avec Solveig',
      'Gestion et contrôle des interventions d’artisans au prix réel',
      'Visite de contrôle systématique après intempéries',
      'Mise en température et aération pré-séjour',
      'Courses d’arrivée personnalisées sur demande',
      'Coordination du pisciniste et des jardiniers paysagistes',
      'Gardiennage et surveillance discrète',
    ],
    faqs: [
      {
        q: 'À quelle fréquence les visites d’inspection sont-elles effectuées ?',
        a: 'En fonction de la formule choisie, nous intervenons chaque semaine ou toutes les deux semaines. En cas d’intempéries ou d’alerte météo sur la Costa del Sol, une visite de contrôle supplémentaire est effectuée automatiquement et sans frais.',
      },
      {
        q: 'Comment nous informez-vous de l’état de la propriété ?',
        a: 'Après chaque visite, vous recevez un rapport synthétique clair accompagné de photos et courtes vidéos sur WhatsApp ou par email, détaillant chaque point inspecté (jardin, piscine, toiture, compteurs, climatisation).',
      },
      {
        q: 'Pouvez-vous superviser des travaux ou des rénovations ?',
        a: 'Absolument. Nous travaillons avec des artisans et entrepreneurs de confiance à Marbella et Mijas. Nous supervisons le planning des travaux, assurons le suivi de chantier et vous transmettons des photos d’avancement.',
      },
    ],
  },

  'concierge-services': {
    id: 'concierge-services',
    badge: 'Conciergerie privée et lifestyle 7/7 · Costa del Sol',
    title: 'Concierge Services',
    subtitle: 'Conciergerie privée et lifestyle 7/7',
    tagline: '« Le vrai luxe est souvent invisible : quelqu’un a déjà pensé au détail avec discrétion. »',
    heroImage: '/concierge-yacht-vip.jpg',
    heroImageAlt: 'Coucher de soleil en mer à bord d’un yacht privé',
    heroDescription:
      "Une présence locale pour rendre les séjours plus fluides et les demandes plus simples avec discretion. Obtenir une table dans un restaurant de la costa del sol, réserver un golf, une échappée en mer ou disposer d'un chauffeur dès votre arrivée à l’aéroport. Solveig’s Prestige services anticipe chaque instant pour vous offrir une sérenité absolue.",
    whatsappMessage:
      'Bonjour Solveig, je souhaite solliciter vos services de conciergerie privée pour mon séjour sur la Costa del Sol.',
    stats: [
      { value: '7j / 7', label: 'Disponibilité & conciergerie' },
      { value: 'VIP', label: 'Tables, golfs & yacht charter' },
      { value: '100 %', label: 'Discrétion et secret professionnel' },
      { value: 'Direct', label: 'Ligne réservée avec Solveig' },
    ],
  },

  'rental-management': {
    id: 'rental-management',
    badge: 'Gestion Locative Haute Gamme · Rendement & Sérénité',
    title: 'Rental Management',
    subtitle: 'Une expérience de séjour pensée avant même l’arrivée',
    tagline: '« Valoriser votre bien tout en préservant son intégrité, avec des hôtes choisis avec soin. »',
    heroImage: '/rental-management-charm.jpg',
    heroImageAlt: 'Terrasse de villa avec vue mer panoramique',
    heroDescription:
      'Louer sa propriété d’exception sur la Costa del Sol doit s’accompagner d’une totale tranquillité d’esprit. Solveig’s Prestige Services vous propose deux formules modulables : soit la prise en charge exclusive sur place lorsque vous gérez vous-même vos réservations (accueil physique personnalisé, état des lieux, blanchisserie et ménage 5 étoiles), soit une gestion locative intégrale clé en main avec sélection attentive des voyageurs, contrats et conciergerie dédiée.',
    whatsappMessage:
      'Bonjour Solveig, je souhaite optimiser la location saisonnière de ma villa à Marbella.',
    stats: [
      { value: '100 %', label: 'Voyageurs contrôlés et vérifiés' },
      { value: 'VIP', label: 'Accueil physique en personne' },
      { value: '2 Formules', label: 'Sur place ou clé en main' },
      { value: '0', label: 'Contrainte pour le propriétaire' },
    ],
    inclusions: [
      'Choix entre Formule Sur-Place (accueil & intendance) ou Formule Clé en Main',
      'Filtrage strict et sélection soignée des profils de familles et voyageurs',
      'Accueil physique en personne (Check-in VIP) et départ (Check-out)',
      'État des lieux d’entrée et de sortie minutieux avec reportage photo comparatif',
      'Ménage 5 étoiles et blanchisserie de qualité hôtelière',
      'Assistance conciergerie pour les hôtes en séjour 7j/7',
      'Rapport financier mensuel clair et transparent',
    ],
    faqs: [
      {
        q: 'Puis-je continuer à profiter de ma villa quand je le souhaite ?',
        a: 'Tout à fait. Vous conservez la priorité absolue sur votre calendrier. Vous nous indiquez simplement vos dates de présence personnelle, et nous préparons votre venue sans aucune contrainte.',
      },
      {
        q: 'Que se passe-t-il en cas de dégradation par un locataire ?',
        a: 'Notre sélection stricte limite fortement ce risque. En cas d’incident, il est immédiatement consigné lors de l’état des lieux de sortie avec photos, les frais sont retenus sur la caution bancaire et la remise en état est coordonnée sans délai.',
      },
      {
        q: 'Quels sont vos honoraires de gestion locative ?',
        a: 'Nos honoraires dépendent de la formule choisie (forfait d’intendance d’accueil ou commission au pourcentage des loyers encaissés). Vous n’avez aucune commission fixe si votre villa n’est pas louée : nos intérêts sont 100% alignés avec les vôtres.',
      },
    ],
  },

  'chef-a-domicile': {
    id: 'chef-a-domicile',
    badge: 'Chef Privé en Villa · Dominique Hybord',
    title: 'Chef à Domicile',
    subtitle: 'Le savoir-faire d’un grand chef, dans l’intimité de votre villa',
    tagline: '« 30 ans d’expérience, une cuisine sincère et le plaisir de recevoir chez soi. »',
    heroImage: '/chef-dominique-cepes.jpg',
    heroImageAlt: 'Le Chef Dominique Hybord portant une caisse de cèpes frais',
    heroDescription:
      'Recevez vos proches sans quitter votre villa. Le Chef Dominique Hybord imagine avec vous un menu sur mesure, inspiré par la Méditerranée et les produits frais de saison, puis le prépare directement chez vous pour que vous profitiez pleinement de vos invités.',
    whatsappMessage:
      'Bonjour Solveig, je souhaite organiser une expérience Chef à Domicile privée pour ma villa.',
    stats: [
      { value: '30+', label: 'Ans d’expérience gastronomique' },
      { value: 'Michelin', label: 'Bib Gourmand Guide Michelin' },
      { value: '2 Toques', label: 'Distinction Gault & Millau' },
      { value: '100 %', label: 'Cuisine remise en état impeccable' },
    ],
    processSteps: [
      {
        step: '17:00',
        title: 'Arrivée Discrète & Mise en Place',
        desc: 'Le chef arrive dans votre villa avec les produits frais du jour et prend possession des lieux en toute discrétion.',
      },
      {
        step: '19:30',
        title: 'Dressage de la Table & Premières Bouchées',
        desc: 'Mise en place soignée de la table et premières bouchées apéritives servies à vos convives.',
      },
      {
        step: '20:30',
        title: 'Service à Table dans Votre Villa',
        desc: 'Enchaînement harmonieux des plats, dressés minute sous vos yeux avec présentation passionnée du Chef.',
      },
      {
        step: '23:00',
        title: 'Cuisine Étincelante & Départ',
        desc: 'La cuisine est entièrement nettoyée et briquée. Vous poursuivez votre soirée dans la sérénité la plus totale.',
      },
    ],
    inclusions: [
      'Conception d’un menu sur-mesure imaginé en direct avec le chef selon vos goûts',
      'Sélection soignée des ingrédients nobles le matin même sur les marchés locaux',
      'Préparation, cuissons minute et dressage raffiné dans votre cuisine',
      'Service à table attentionné assuré par le chef et une personne dédiée au service',
      'Nettoyage et remise en état intégrale de la cuisine en fin de prestation',
    ],
    galleryImages: [
      { url: '/archives-cuisine/2022-10-05 12.42.03.jpg', caption: 'Dressage gastronomique du Chef Dominique Hybord' },
      { url: '/archives-cuisine/2023-09-12 13.09.35.jpg', caption: 'Création du Chef aux saveurs marines' },
      { url: '/archives-cuisine/2018-07-05 09.50.45.jpg', caption: 'Le plaisir des produits de saison' },
      { url: '/archives-cuisine/2017-12-01 19.51.19.jpg', caption: 'Assiette d’auteur dressée minute' },
      { url: '/archives-cuisine/2016-07-21 21.02.39.jpg', caption: 'Cuisine méditerranéenne en villa' },
      { url: '/archives-cuisine/2024-01-23 16.31.12.jpg', caption: 'Le soin du détail et l’élégance du dressage' },
    ],
    faqs: [
      {
        q: 'Ma cuisine de villa est-elle adaptée pour une prestation de chef ?',
        a: 'Oui, tout à fait. Le Chef Dominique Hybord apporte son propre matériel professionnel (couteaux d’orfèvre, casseroles adaptées, mandolines). Une plaque de cuisson, un four et un réfrigérateur standard suffisent amplement.',
      },
      {
        q: 'Jusqu’à combien de convives le chef peut-il régaler ?',
        a: 'Le Chef intervient pour des tables de 6 à 15 personnes, accompagné d’une personne dédiée au service à table.',
      },
    ],
  },
};

export const ServicePage: React.FC<ServicePageProps> = ({ serviceId, onBack }) => {
  const content = servicesDatabase[serviceId] || servicesDatabase['property-management'];
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);

  return (
    <div className="min-h-screen bg-travertine text-ink selection:bg-bronze/20">
      {/* Barre de navigation supérieure fixe */}
      <nav className="sticky top-0 z-50 border-b border-ink/5 bg-travertine/95 backdrop-blur-md py-3.5 px-4 sm:px-8">
        <div className="container-site flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:border-bronze hover:bg-sand"
          >
            <ArrowLeft className="h-4 w-4 text-bronze" />
            <span>Retour aux services</span>
          </button>

          <div className="flex flex-col text-center leading-none">
            <span className="font-serif text-lg tracking-[0.12em] text-ink sm:text-xl">SOLVEIG’S</span>
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-bronze">
              Prestige Services
            </span>
          </div>

          <a
            href={waLink(content.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-travertine transition hover:bg-bronze-deep"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* HERO SECTION DU SERVICE */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Colonne texte gauche */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-bronze/30 bg-sand px-3.5 py-1 text-xs font-semibold text-bronze-deep">
              <Sparkles className="h-3.5 w-3.5 text-bronze" />
              {content.badge}
            </span>

            <h1 className="font-serif text-4xl font-medium leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              {content.title} <br />
              <span className="italic text-bronze text-3xl sm:text-4xl lg:text-5xl">
                {content.subtitle}
              </span>
            </h1>

            <p className="font-serif italic text-base sm:text-lg text-ink-soft">
              {content.tagline}
            </p>

            <p className="text-sm font-light leading-relaxed text-ink-soft sm:text-base">
              {content.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={waLink(content.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon />
                <span>Échanger avec Solveig sur WhatsApp</span>
              </a>

              <a href={PHONE_TEL} className="btn-secondary">
                <Phone className="h-4 w-4 text-bronze" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>

            {/* Rangée de statistiques / réassurance */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-ink/5">
              {content.stats.map((s, idx) => (
                <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-3.5 text-center shadow-sm">
                  <p className="font-serif text-xl font-bold text-ink">{s.value}</p>
                  <p className="mt-1 text-[11px] font-light text-ink-soft leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne visuelle droite */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-[0_16px_40px_rgba(28,26,23,0.08)]">
              <div
                className={`relative overflow-hidden bg-sand ${
                  serviceId === 'chef-a-domicile' ? 'aspect-[3/4]' : 'h-80 sm:h-[460px]'
                }`}
              >
                <img
                  src={content.heroImage}
                  alt={content.heroImageAlt}
                  className={`h-full w-full object-cover ${
                    serviceId === 'chef-a-domicile' ? 'object-[center_20%]' : 'object-center'
                  } transition-transform duration-700 hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-black/65 p-4 backdrop-blur-md text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze/30 text-[#F3DEB0]">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold leading-tight">
                        Solveig’s Prestige Services
                      </p>
                      <p className="mt-0.5 text-[11px] font-light text-white/80">
                        Interventions confidentielles à Marbella & Mijas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAS 1 : CONCIERGERIE PRIVÉE 7/7 (RESPECT STRICT DE LA DEMANDE DE LA CLIENTE) */}
      {serviceId === 'concierge-services' ? (
        <section className="border-t border-ink/5 bg-sand py-16">
          <div className="container-site max-w-3xl text-center space-y-6">
            <p className="eyebrow">Discrétion & Disponibilité 7/7</p>
            <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl">
              Anticiper chaque instant pour vous offrir une sérénité absolue.
            </h3>
            <p className="text-sm font-light leading-relaxed text-ink-soft">
              Obtenir une table d'exception, organiser une journée en mer ou coordonner vos déplacements dès l'aéroport : Solveig reste à votre écoute 7 jours sur 7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={waLink(content.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <WhatsAppIcon />
                <span>WhatsApp Conciergerie 7/7</span>
              </a>
              <button onClick={onBack} className="btn-secondary w-full sm:w-auto">
                <ArrowLeft className="h-4 w-4" />
                <span>Retour aux services</span>
              </button>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* CAS 2 : LOCATION SAISONNIÈRE (COMPARAISON VISUELLE DES 2 FORMULES) */}
          {serviceId === 'rental-management' && (
            <section className="border-t border-ink/5 bg-sand py-20">
              <div className="container-site">
                <div className="max-w-2xl mx-auto text-center mb-14">
                  <p className="eyebrow">Deux Formules Modulables</p>
                  <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl mt-1">
                    Choisissez la formule adaptée à votre gestion
                  </h2>
                  <p className="text-sm font-light text-ink-soft mt-2">
                    Que vous souhaitiez conserver la maîtrise de votre calendrier ou déléguer l’intégralité de vos réservations.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                  {/* Formule 1 */}
                  <div className="rounded-[2rem] border border-ink/10 bg-white p-7 sm:p-9 shadow-sm flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1 text-[11px] font-semibold text-ink-soft">
                        Formule 01
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-ink">
                        Réservations Gérées par Vous (Propriétaire)
                      </h3>
                      <p className="text-xs sm:text-sm font-light text-ink-soft leading-relaxed">
                        Vous pilotez vous-même vos annonces et réservations : nous assurons une intendance et un accueil physique 5 étoiles sur place.
                      </p>

                      <ul className="space-y-3 pt-3 border-t border-ink/5 text-xs sm:text-sm text-ink-soft">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>Accueil physique en personne et remise des clés (jamais de boîte à clés)</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>État des lieux d'entrée et de sortie minutieux avec reportage photo comparatif</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>Ménage de départ approfondi et remise en beauté complète de la villa</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>Blanchisserie hôtelière soignée et mise en place du linge frais</span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href={waLink('Bonjour Solveig, je souhaite opter pour la Formule 1 (Intendance sur place pour mes réservations).')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full"
                    >
                      <WhatsAppIcon />
                      <span>Choisir la Formule Sur-Place</span>
                    </a>
                  </div>

                  {/* Formule 2 */}
                  <div className="rounded-[2rem] border-2 border-bronze bg-white p-7 sm:p-9 shadow-md flex flex-col justify-between space-y-6 relative">
                    <span className="absolute -top-3.5 right-6 rounded-full bg-bronze px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                      Délégation Totale
                    </span>

                    <div className="space-y-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1 text-[11px] font-semibold text-bronze-deep">
                        Formule 02
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-ink">
                        Gestion Locative Intégrale (Clé en Main)
                      </h3>
                      <p className="text-xs sm:text-sm font-light text-ink-soft leading-relaxed">
                        Sérénité absolue : nous prenons en charge la commercialisation, le filtrage des voyageurs et l'intendance complète de A à Z.
                      </p>

                      <ul className="space-y-3 pt-3 border-t border-ink/5 text-xs sm:text-sm text-ink-soft">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>Shooting photo professionnel et valorisation sur les canaux haut de gamme</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>Filtrage strict et sélection rigoureuse des profils de familles et invités</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>Gestion des contrats, dépôts de garantie bancaires et tarification dynamique</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>Accueil VIP, conciergerie séjour 7/7 et virement mensuel des loyers</span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href={waLink('Bonjour Solveig, je souhaite opter pour la Formule 2 (Gestion locative intégrale clé en main).')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full"
                    >
                      <WhatsAppIcon />
                      <span>Choisir la Gestion Intégrale</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CAS 3 : PILIERS PROTOCOLE (PROPERTY MANAGEMENT) */}
          {content.pillars && (
            <section className="border-t border-ink/5 bg-sand py-20">
              <div className="container-site">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <p className="eyebrow">Protocole d'Excellence</p>
                  <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl mt-1">
                    Les 4 Piliers de Notre Intendance
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  {content.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="rounded-[2rem] border border-ink/10 bg-white p-7 sm:p-9 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand text-bronze-deep">
                          {pillar.icon === 'shield' && <ShieldCheck className="h-6 w-6" />}
                          {pillar.icon === 'clock' && <Clock className="h-6 w-6" />}
                          {pillar.icon === 'star' && <Star className="h-6 w-6" />}
                          {pillar.icon === 'file' && <FileText className="h-6 w-6" />}
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-bronze">
                            Pilier 0{idx + 1}
                          </span>
                          <h3 className="font-serif text-xl sm:text-2xl font-medium text-ink leading-tight">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm font-light text-ink-soft leading-relaxed mb-5">
                        {pillar.desc}
                      </p>

                      <ul className="space-y-2.5 pt-4 border-t border-ink/5">
                        {pillar.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs text-ink-soft">
                            <Check className="h-3.5 w-3.5 text-bronze shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* DÉROULEMENT / TIMELINE (CHEF OU PROPERTY MANAGEMENT) */}
          {content.processSteps && (
            <section className="border-t border-ink/5 bg-travertine py-20">
              <div className="container-site">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <p className="eyebrow">Déroulement</p>
                  <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl mt-1">
                    {serviceId === 'chef-a-domicile'
                      ? 'Le rythme d’une soirée gastronomique en villa'
                      : 'Comment se déroule notre accompagnement'}
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {content.processSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="font-serif text-3xl sm:text-4xl font-normal text-bronze mb-3">
                          {step.step}
                        </div>
                        <h4 className="font-serif text-lg font-medium text-ink mb-2">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm font-light text-ink-soft leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* GALERIE CULINAIRE DÉDIÉE DU CHEF */}
          {content.galleryImages && (
            <section className="border-t border-ink/5 bg-sand py-20">
              <div className="container-site">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                  <div>
                    <p className="eyebrow">Galerie photographique</p>
                    <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl mt-1">
                      Les créations du Chef Dominique Hybord
                    </h2>
                  </div>
                  <p className="text-xs text-ink-muted">Cliquez pour agrandir les assiettes.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                  {content.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setLightboxImg(img.url)}
                      className="group relative aspect-square overflow-hidden rounded-2xl border border-ink/10 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                      aria-label={`Agrandir : ${img.caption}`}
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/30">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 transition-opacity group-hover:opacity-100 shadow-md">
                          <ZoomIn className="h-4 w-4" />
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* PRESTATIONS INCLUSES & FAQS */}
          {(content.inclusions || content.faqs) && (
            <section className="border-t border-ink/5 bg-travertine py-20">
              <div className="container-site grid lg:grid-cols-12 gap-12 items-start">
                {/* Inclusions */}
                {content.inclusions && (
                  <div className="lg:col-span-5 rounded-[2rem] border border-ink/10 bg-white p-7 sm:p-9 shadow-sm">
                    <p className="eyebrow">Prestations Incluses</p>
                    <h3 className="font-serif text-2xl font-medium text-ink mt-1 mb-6">
                      Ce qui est compris dans l'accompagnement
                    </h3>
                    <ul className="space-y-3.5">
                      {content.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink-soft">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sand text-bronze mt-0.5">
                            <Check className="h-3.5 w-3.5" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* FAQ Accordion */}
                {content.faqs && (
                  <div className={content.inclusions ? 'lg:col-span-7' : 'lg:col-span-12'}>
                    <p className="eyebrow">Questions Fréquentes</p>
                    <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl mt-1 mb-6">
                      Tout ce que vous devez savoir
                    </h3>

                    <div className="space-y-3">
                      {content.faqs.map((faq, idx) => {
                        const isOpen = openFaqIdx === idx;
                        return (
                          <div
                            key={idx}
                            className="rounded-2xl border border-ink/10 bg-white overflow-hidden transition-all shadow-sm"
                          >
                            <button
                              type="button"
                              onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                              className="w-full text-left p-5 flex items-center justify-between gap-4 hover:text-bronze transition-colors"
                            >
                              <span className="font-medium text-sm sm:text-base text-ink">
                                {faq.q}
                              </span>
                              <ChevronDown
                                className={`h-4 w-4 text-bronze shrink-0 transition-transform duration-300 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            {isOpen && (
                              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-light text-ink-soft leading-relaxed border-t border-ink/5">
                                {faq.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* CALL TO ACTION FINAL */}
          <section className="border-t border-ink/5 bg-sand py-20 text-center">
            <div className="container-site max-w-3xl mx-auto space-y-6">
              <p className="eyebrow">Votre Villa Mérite l'Excellence</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ink">
                Offrez à votre domaine l'attention qu'il mérite.
              </h2>
              <p className="text-sm sm:text-base font-light text-ink-soft leading-relaxed max-w-xl mx-auto">
                Contactez Solveig Hybord dès aujourd’hui pour une étude confidentielle et sans engagement de vos besoins sur Marbella ou Mijas.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={waLink(content.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  <WhatsAppIcon />
                  <span>Contacter Solveig sur WhatsApp</span>
                </a>

                <button onClick={onBack} className="btn-secondary w-full sm:w-auto">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Retour aux 4 services</span>
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      <Lightbox
        src={lightboxImg}
        alt="Photographie agrandie"
        onClose={() => setLightboxImg(null)}
      />
    </div>
  );
};
