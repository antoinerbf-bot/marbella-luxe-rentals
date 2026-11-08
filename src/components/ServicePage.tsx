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
import { LanguageSelector } from './ui/LanguageSelector';
import { useLanguage } from '../lib/LanguageContext';

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

const servicesDatabaseFr: Record<ServiceId, ServiceContent> = {
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

const servicesDatabaseEn: Record<ServiceId, ServiceContent> = {
  'property-management': {
    id: 'property-management',
    badge: 'Private Estate Care · Marbella & Mijas',
    title: 'Property Management',
    subtitle: 'Your home, in trustworthy hands even when you are away',
    tagline: '“Peace of mind begins with knowing someone is truly caring for your estate.”',
    heroImage: '/property-management-charm.jpg',
    heroImageAlt: 'Luxury villa estate with private pool and garden',
    heroDescription:
      'Owning an exceptional villa on the Costa del Sol must remain an effortless pleasure. Solveig’s Prestige Services provides comprehensive estate care, watchful surveillance, and contractor coordination. After each inspection, a crystal-clear report with HD photos is sent directly to your WhatsApp or email.',
    whatsappMessage:
      'Hello Solveig, I would like to discuss property management and estate care for my villa on the Costa del Sol.',
    stats: [
      { value: '30+', label: 'Years of exacting standards' },
      { value: '100%', label: 'Inspection reports with HD photos' },
      { value: '7/7', label: 'Availability & vigilant presence' },
      { value: '€0', label: 'Hidden contractor markups' },
    ],
    pillars: [
      {
        title: 'Watchful Surveillance & Routine Inspections',
        desc: 'Thorough, regular checks across all interior and exterior spaces.',
        icon: 'shield',
        details: [
          'Full check of air conditioning, heating, and ventilation systems',
          'Plumbing inspection, drain trap maintenance, and early leak detection',
          'Pool salt level, pH balance, and water clarity monitoring',
          'Perimeter security, gates, alarms, and camera verification',
        ],
      },
      {
        title: 'Contractor & Vendor Coordination',
        desc: 'Direct on-site supervision of trusted artisans at fair, verified rates.',
        icon: 'clock',
        details: [
          'Curated local craftsmen (landscaping, electrical, roofing, plumbing)',
          'Physical presence during interventions and quality verification',
          'Strict invoice and quote review to prevent any overcharging',
          'Preventive scheduling of annual equipment maintenance',
        ],
      },
      {
        title: 'VIP Owner Arrival Protocol',
        desc: 'Your villa perfectly prepped for seamless, immediate comfort upon arrival.',
        icon: 'star',
        details: [
          'Climate control pre-set 24h prior to arrival (cooling or heating)',
          'Complete airing out and preparation of living spaces',
          'Refrigerator stocking according to your custom grocery list',
          'Fresh cut flowers, turned-down beds, and crisp hotel-grade linens',
        ],
      },
      {
        title: 'Departure Winterization & Estate Protection',
        desc: 'Meticulous shutdown procedures to safeguard long-term estate value.',
        icon: 'file',
        details: [
          'Main water shutoff to prevent silent catastrophic water damage',
          'Outdoor furniture storm-proofing against coastal winds',
          'Mail collection and secure package receiving during your absence',
          'Emergency post-storm inspection after severe weather events',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Initial Estate Walkthrough',
        desc: 'We explore your property, understand your exact standards, and build a tailored checklist.',
      },
      {
        step: '02',
        title: 'Custom Care Schedule',
        desc: 'We adapt visit frequencies (weekly or bi-weekly) to your residence calendar.',
      },
      {
        step: '03',
        title: 'Active Estate Care & HD Reports',
        desc: 'After every visit, you receive a concise HD photo summary directly via WhatsApp.',
      },
      {
        step: '04',
        title: 'Turnkey Arrival Readiness',
        desc: 'Whenever you return, you step straight into a pristine, welcoming home.',
      },
    ],
    inclusions: [
      'Routine inspection visits with photographic HD reports',
      'Direct WhatsApp 7/7 access with Solveig',
      'Artisan and contractor oversight at genuine cost',
      'Automatic post-storm emergency inspections',
      'Pre-arrival ventilation and climate setting',
      'Custom pre-arrival grocery stocking on demand',
      'Coordination of pool maintenance and landscape gardeners',
      'Discreet property custody and care',
    ],
    faqs: [
      {
        q: 'How frequently are inspection visits conducted?',
        a: 'Depending on your selected plan, we inspect your estate weekly or bi-weekly. Following heavy storms or regional weather alerts on the Costa del Sol, a special inspection is performed promptly at no additional fee.',
      },
      {
        q: 'How do you keep us updated on the estate condition?',
        a: 'After every walkthrough, you receive a structured report with photos and brief videos on WhatsApp or email, detailing inspected areas (pool, grounds, roof, meters, HVAC).',
      },
      {
        q: 'Can you supervise renovation or maintenance works?',
        a: 'Yes. We collaborate with vetted, trusted craftsmen across Marbella and Mijas. We coordinate timelines, monitor progress on-site, and share regular photo updates.',
      },
    ],
  },

  'concierge-services': {
    id: 'concierge-services',
    badge: 'Private Concierge & Lifestyle 7/7 · Costa del Sol',
    title: 'Concierge Services',
    subtitle: 'Private concierge & lifestyle 7/7',
    tagline: '“True luxury is often invisible: someone has already considered every detail with discretion.”',
    heroImage: '/concierge-yacht-vip.jpg',
    heroImageAlt: 'Sunset cruise aboard a private yacht',
    heroDescription:
      'A discreet local presence to make your stays seamless and requests effortless. Securing a coveted restaurant reservation on the Costa del Sol, booking private golf tee times, arranging a coastal yacht charter, or providing private chauffeur transfers from the airport. Solveig’s Prestige Services anticipates every moment for absolute peace of mind.',
    whatsappMessage:
      'Hello Solveig, I would like to request private concierge services for my upcoming stay on the Costa del Sol.',
    stats: [
      { value: '7/7', label: 'Availability & concierge' },
      { value: 'VIP', label: 'Dining, golf & yacht charters' },
      { value: '100%', label: 'Discretion & confidentiality' },
      { value: 'Direct', label: 'Dedicated line with Solveig' },
    ],
  },

  'rental-management': {
    id: 'rental-management',
    badge: 'High-End Vacation Rental Management · Revenue & Peace of Mind',
    title: 'Rental Management',
    subtitle: 'A bespoke guest stay crafted well before arrival',
    tagline: '“Maximizing your estate yield while safeguarding its integrity with carefully vetted guests.”',
    heroImage: '/rental-management-charm.jpg',
    heroImageAlt: 'Panoramic sea-view villa terrace',
    heroDescription:
      'Renting out your prestige property on the Costa del Sol should always come with complete peace of mind. Solveig’s Prestige Services offers two flexible options: either dedicated on-site support when you handle your own bookings (VIP in-person meet & greet, inventory, 5-star cleaning and laundry), or end-to-end turnkey rental management with guest screening, contracts, and 7/7 guest concierge.',
    whatsappMessage:
      'Hello Solveig, I would like to optimize seasonal rentals for my villa in Marbella.',
    stats: [
      { value: '100%', label: 'Vetted and verified guests' },
      { value: 'VIP', label: 'In-person meet & greet' },
      { value: '2 Plans', label: 'On-site care or turnkey' },
      { value: '0', label: 'Hassle for the owner' },
    ],
    inclusions: [
      'Choice between On-Site Support Plan or Full Turnkey Management',
      'Strict guest screening and verification of visiting families',
      'Warm in-person VIP check-in and structured check-out walkthrough',
      'Detailed entry and exit inventories with comparative photo records',
      '5-star deep cleaning and luxury hotel-grade linen care',
      'Dedicated 7/7 guest assistance throughout their stay',
      'Clear, transparent monthly financial reporting',
    ],
    faqs: [
      {
        q: 'Can I still enjoy my villa whenever I wish?',
        a: 'Absolutely. You retain total priority over your calendar. Simply notify us of your planned dates, and we prepare the property exclusively for your personal stay.',
      },
      {
        q: 'What happens in the event of guest damage?',
        a: 'Our strict screening significantly minimizes risks. If an incident occurs, it is recorded immediately during the exit inspection with photo evidence, costs are deducted from the security deposit, and repairs are coordinated right away.',
      },
      {
        q: 'How are your management fees structured?',
        a: 'Fees depend on your chosen model (flat on-site hospitality fee or percentage commission on collected rental income). If your villa is not rented, there is no fixed commission: our interests remain 100% aligned with yours.',
      },
    ],
  },

  'chef-a-domicile': {
    id: 'chef-a-domicile',
    badge: 'Private In-Villa Chef · Dominique Hybord',
    title: 'Private Chef in Villa',
    subtitle: 'The mastery of an acclaimed chef in the privacy of your home',
    tagline: '“30 years of culinary passion, honest terroir cuisine, and the joy of hosting at home.”',
    heroImage: '/chef-dominique-cepes.jpg',
    heroImageAlt: 'Chef Dominique Hybord carrying a crate of fresh wild mushrooms',
    heroDescription:
      'Host your loved ones without ever leaving your villa. Chef Dominique Hybord crafts a bespoke menu inspired by Mediterranean seafood and seasonal morning market produce, preparing every course directly in your kitchen so you can fully enjoy your guests.',
    whatsappMessage:
      'Hello Solveig, I would like to book a private in-villa chef experience with Chef Dominique Hybord.',
    stats: [
      { value: '30+', label: 'Years of culinary mastery' },
      { value: 'Michelin', label: 'Bib Gourmand Michelin Guide' },
      { value: '2 Toques', label: 'Gault & Millau Distinction' },
      { value: '100%', label: 'Kitchen left spotless' },
    ],
    processSteps: [
      {
        step: '17:00',
        title: 'Discreet Arrival & Prep',
        desc: 'The Chef arrives at your villa with fresh market delicacies and quietly begins preparation.',
      },
      {
        step: '19:30',
        title: 'Table Styling & Amuse-Bouches',
        desc: 'Refined table setting and initial gourmet appetizers served to your guests poolside or in the lounge.',
      },
      {
        step: '20:30',
        title: 'Artful Seated Dinner',
        desc: 'Harmonious multi-course service, plated minute before your eyes with passionate dish introductions.',
      },
      {
        step: '23:00',
        title: 'Sparkling Clean Kitchen & Departure',
        desc: 'Your kitchen is meticulously cleaned, polished, and restored. You enjoy the rest of your evening with zero hassle.',
      },
    ],
    inclusions: [
      'Tailored menu consultation designed directly with the Chef to suit your palate',
      'Daily morning selection of noble ingredients from premier local Andalusian markets',
      'Live minute cooking, plating artistry, and dedicated tableside service',
      'Attentive service by the Chef and dedicated hospitality staff',
      'Complete kitchen cleanup, scrubbing, and spotless restoration after service',
    ],
    galleryImages: [
      { url: '/archives-cuisine/2022-10-05 12.42.03.jpg', caption: 'Signature gastronomic plating by Chef Dominique Hybord' },
      { url: '/archives-cuisine/2023-09-12 13.09.35.jpg', caption: 'Chef’s delicate seafood inspiration' },
      { url: '/archives-cuisine/2018-07-05 09.50.45.jpg', caption: 'Seasonal market produce and noble meats' },
      { url: '/archives-cuisine/2017-12-01 19.51.19.jpg', caption: 'Minute artful dish composed tableside' },
      { url: '/archives-cuisine/2016-07-21 21.02.39.jpg', caption: 'Mediterranean summer dining in villa' },
      { url: '/archives-cuisine/2024-01-23 16.31.12.jpg', caption: 'Exacting attention to textures and elegance' },
    ],
    faqs: [
      {
        q: 'Is my villa kitchen suitable for a private chef dinner?',
        a: 'Yes, absolutely. Chef Dominique Hybord brings his own professional tools (knives, specialized cookware, mandolines). Standard induction/gas hobs, an oven, and refrigeration are all that is required.',
      },
      {
        q: 'What is the guest capacity for private dinners?',
        a: 'The Chef caters for intimate gatherings of 6 to 15 guests, accompanied by a dedicated butler for seamless table service.',
      },
    ],
  },
};

const servicesDatabaseEs: Record<ServiceId, ServiceContent> = {
  'property-management': {
    id: 'property-management',
    badge: 'Mantenimiento y Gestión de Fincas · Marbella y Mijas',
    title: 'Property Management',
    subtitle: 'Su propiedad en las mejores manos, incluso cuando usted está lejos',
    tagline: '«La tranquilidad comienza sabiendo que alguien cuida de verdad de su hogar.»',
    heroImage: '/property-management-charm.jpg',
    heroImageAlt: 'Finca mediterránea de lujo con piscina y jardín',
    heroDescription:
      'Tener una villa de prestigio en la Costa del Sol debe ser un privilegio sin preocupaciones. Solveig’s Prestige Services asume la intendencia integral, la vigilancia atenta y la coordinación de proveedores. Tras cada visita, le enviamos un informe detallado con fotografías en alta definición por WhatsApp o correo electrónico.',
    whatsappMessage:
      'Hola Solveig, deseo información sobre la intendencia y gestión de mi villa en la Costa del Sol.',
    stats: [
      { value: '30+', label: 'Años de exigencia y experiencia' },
      { value: '100 %', label: 'Informes con fotografías en HD' },
      { value: '7d / 7', label: 'Disponibilidad y vigilancia activa' },
      { value: '0 €', label: 'Sin sobrecostes en profesionales' },
    ],
    pillars: [
      {
        title: 'Vigilancia Atenta e Inspecciones Periódicas',
        desc: 'Revisiones minuciosas de todos los espacios interiores y exteriores de su villa.',
        icon: 'shield',
        details: [
          'Control exhaustivo de climatización, calefacción y ventilación',
          'Comprobación de fontanería, sifones y detección temprana de fugas',
          'Control de salinidad, pH y transparencia del agua de la piscina',
          'Revisión de cierres perimetrales, portones, alarmas y cámaras',
        ],
      },
      {
        title: 'Coordinación Cuidadosa de Profesionales',
        desc: 'Supervisión presencial de cada técnico para un trabajo impecable al precio justo.',
        icon: 'clock',
        details: [
          'Selección de los mejores artesanos locales (jardinería, electricidad, tejados)',
          'Presencia física en la finca durante las obras e intervenciones',
          'Revisión minuciosa de presupuestos y facturas para evitar sobrecostes',
          'Programación preventiva de revisiones anuales de maquinaria',
        ],
      },
      {
        title: 'Protocolo de Llegada VIP para Propietarios',
        desc: 'Su villa lista para recibirle en el máximo confort desde el primer instante.',
        icon: 'star',
        details: [
          'Climatización programada 24h antes de su llegada (frío o calor)',
          'Ventilación completa y acondicionamiento de las estancias',
          'Nevera surtida según su lista de la compra personalizada',
          'Flores frescas cortadas, camas preparadas y ropa de cama impecable',
        ],
      },
      {
        title: 'Invernaje y Protección en sus Salidas',
        desc: 'Un cierre meticuloso para preservar el valor de su patrimonio a largo plazo.',
        icon: 'file',
        details: [
          'Cierre preventivo de llaves de paso para evitar fugas silenciosas',
          'Protección del mobiliario exterior frente a la brisa marina y tormentas',
          'Recogida de correspondencia y recepción segura de paquetes en su ausencia',
          'Inspección de urgencia tras episodios meteorológicos intensos',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Visita Inicial y Toma de Contacto',
        desc: 'Conocemos su propiedad y sus expectativas para diseñar un protocolo a medida.',
      },
      {
        step: '02',
        title: 'Pliego de Condiciones Personalizado',
        desc: 'Ajustamos la frecuencia de visitas (semanal o quincenal) a su calendario de estancia.',
      },
      {
        step: '03',
        title: 'Supervisión Activa e Informes HD',
        desc: 'Tras cada inspección, recibe un informe claro con fotos HD directo en WhatsApp.',
      },
      {
        step: '04',
        title: 'Bienvenida Llave en Mano',
        desc: 'En cada llegada a Marbella, encuentra su hogar cálido, perfecto y listo para disfrutar.',
      },
    ],
    inclusions: [
      'Inspecciones periódicas con informe fotográfico HD',
      'Contacto directo por WhatsApp 7d/7 con Solveig',
      'Gestión y control de artesanos a precio de coste real',
      'Visita de control sistemática tras temporales meteorológicos',
      'Climatización y ventilación previa a cada estancia',
      'Compra de víveres a su llegada bajo petición',
      'Coordinación de mantenimiento de piscina y paisajismo',
      'Custodia discreta y seguridad de su patrimonio',
    ],
    faqs: [
      {
        q: '¿Con qué frecuencia se realizan las inspecciones?',
        a: 'Según la modalidad elegida, acudimos semanal o quincenalmente. Tras alertas meteorológicas o tormentas en la Costa del Sol, realizamos una visita de control adicional de inmediato y sin coste.',
      },
      {
        q: '¿Cómo nos informan del estado de la finca?',
        a: 'Tras cada visita, recibe un informe sintético con fotos y vídeos breves por WhatsApp o email, detallando cada punto inspeccionado (jardín, piscina, tejado, climatización).',
      },
      {
        q: '¿Pueden supervisar reformas o reparaciones mayores?',
        a: 'Por supuesto. Colaboramos con profesionales contrastados en Marbella y Mijas. Supervisamos el calendario, controlamos la ejecución y le enviamos fotos de progreso.',
      },
    ],
  },

  'concierge-services': {
    id: 'concierge-services',
    badge: 'Conserjería privada y estilo de vida 7/7 · Costa del Sol',
    title: 'Concierge Services',
    subtitle: 'Conserjería privada y estilo de vida 7/7',
    tagline: '«El auténtico lujo suele ser invisible: alguien ya pensó en el detalle con absoluta discreción.»',
    heroImage: '/concierge-yacht-vip.jpg',
    heroImageAlt: 'Atardecer en el mar a bordo de un yate privado',
    heroDescription:
      'Una presencia local para que sus estancias sean más fluidas y cada deseo más sencillo con discreción. Reservar mesa en los mejores restaurantes de la Costa del Sol, acceder a campos de golf exclusivos, organizar una jornada en barco o disponer de chófer privado desde el aeropuerto. Solveig’s Prestige Services se anticipa a cada momento para brindarle una serenidad absoluta.',
    whatsappMessage:
      'Hola Solveig, deseo solicitar sus servicios de conserjería privada para mi estancia en la Costa del Sol.',
    stats: [
      { value: '7d / 7', label: 'Disponibilidad y conserjería' },
      { value: 'VIP', label: 'Mesas, golf y chárter de yates' },
      { value: '100 %', label: 'Discreción y secreto profesional' },
      { value: 'Directo', label: 'Línea exclusiva con Solveig' },
    ],
  },

  'rental-management': {
    id: 'rental-management',
    badge: 'Gestión de Alquiler Vacacional de Lujo · Rendimiento y Serenidad',
    title: 'Rental Management',
    subtitle: 'Una experiencia de estancia cuidada antes incluso de la llegada',
    tagline: '«Revalorizar su propiedad preservando su integridad con huéspedes seleccionados minuciosamente.»',
    heroImage: '/rental-management-charm.jpg',
    heroImageAlt: 'Terraza de villa con vistas panorámicas al mar',
    heroDescription:
      'Alquilar su villa de excepción en la Costa del Sol debe ir acompañado de total tranquilidad. Solveig’s Prestige Services le ofrece dos modalidades flexibles: bien la atención presencial integral cuando gestiona usted mismo sus reservas (bienvenida VIP en persona, inventario minucioso, limpieza 5 estrellas y lencería), o bien una gestión vacacional llave en mano con selección rigurosa de viajeros, contratos y conserjería.',
    whatsappMessage:
      'Hola Solveig, deseo optimizar el alquiler vacacional de mi villa en Marbella.',
    stats: [
      { value: '100 %', label: 'Huéspedes filtrados y verificados' },
      { value: 'VIP', label: 'Bienvenida presencial en persona' },
      { value: '2 Planes', label: 'Asistencia in situ o llave en mano' },
      { value: '0', label: 'Preocupaciones para el propietario' },
    ],
    inclusions: [
      'Elección entre Fórmula In Situ o Gestión Integral Llave en Mano',
      'Filtrado riguroso y selección de perfiles de familias y huéspedes',
      'Recepción presencial (Check-in VIP) y despedida (Check-out)',
      'Inventario minucioso de entrada y salida con reportaje fotográfico comparativo',
      'Limpieza 5 estrellas y lavandería de calidad hotelera',
      'Asistencia de conserjería 7d/7 para los huéspedes durante la estancia',
      'Informe financiero mensual claro, transparente y puntual',
    ],
    faqs: [
      {
        q: '¿Puedo seguir disfrutando de mi villa cuando lo desee?',
        a: 'Absolutamente. Mantiene la prioridad total sobre su calendario. Nos indica sus fechas personales y preparamos la casa para su disfrute exclusivo.',
      },
      {
        q: '¿Qué ocurre en caso de desperfectos causados por huéspedes?',
        a: 'Nuestra selección estricta minimiza este riesgo. Si surge una incidencia, se documenta fotográficamente en el check-out, se descuenta de la fianza y se repara sin demora.',
      },
      {
        q: '¿Cuáles son sus honorarios de gestión de alquiler?',
        a: 'Dependen de la fórmula elegida (tarifa fija de bienvenida e intendencia o comisión porcentual sobre alquileres). Si su villa no se alquila, no paga comisión: nuestros intereses van al 100% de la mano.',
      },
    ],
  },

  'chef-a-domicile': {
    id: 'chef-a-domicile',
    badge: 'Chef Privado en Villa · Dominique Hybord',
    title: 'Chef a Domicilio',
    subtitle: 'El talento de un gran chef en la intimidad de su villa',
    tagline: '«30 años de experiencia, cocina sincera y el placer de recibir en su propio hogar.»',
    heroImage: '/chef-dominique-cepes.jpg',
    heroImageAlt: 'El Chef Dominique Hybord con una caja de setas frescas silvestres',
    heroDescription:
      'Reciba a los suyos sin salir de su villa. El Chef Dominique Hybord diseña con usted un menú a medida, inspirado en el Mediterráneo y los productos frescos del mercado, cocinando en directo en su propia cocina para que disfrute plenamente de sus invitados.',
    whatsappMessage:
      'Hola Solveig, deseo reservar una experiencia privada de Chef a Domicilio en mi villa.',
    stats: [
      { value: '30+', label: 'Años de trayectoria gastronómica' },
      { value: 'Michelin', label: 'Bib Gourmand Guía Michelin' },
      { value: '2 Toques', label: 'Distinción Gault & Millau' },
      { value: '100 %', label: 'Cocina entregada reluciente' },
    ],
    processSteps: [
      {
        step: '17:00',
        title: 'Llegada Discreta y Preparación',
        desc: 'El Chef llega a su villa con los productos frescos del mercado e inicia los preparativos con máxima discreción.',
      },
      {
        step: '19:30',
        title: 'Montaje de Mesa y Primeros Bocados',
        desc: 'Montaje cuidado de mesa y primeros aperitivos gourmet servidos en la terraza o salón.',
      },
      {
        step: '20:30',
        title: 'Servicio en Mesa en su Villa',
        desc: 'Pase armonioso de platos emplatados al minuto ante sus ojos, con presentación cercana del Chef.',
      },
      {
        step: '23:00',
        title: 'Cocina Reluciente y Despedida',
        desc: 'La cocina queda impecablemente limpia y pulida. Usted continúa su velada con total serenidad.',
      },
    ],
    inclusions: [
      'Diseño de un menú a medida adaptado a sus gustos y preferencias',
      'Selección de ingredientes nobles el mismo día en mercados locales andaluces',
      'Cocinado en directo al minuto y emplatado de alta cocina',
      'Servicio de mesa atento y discreto con personal dedicado',
      'Limpieza completa y entrega de la cocina en estado impecable',
    ],
    galleryImages: [
      { url: '/archives-cuisine/2022-10-05 12.42.03.jpg', caption: 'Emplatado gastronómico de autor por el Chef Dominique Hybord' },
      { url: '/archives-cuisine/2023-09-12 13.09.35.jpg', caption: 'Inspiración marinera del Chef con pesca del día' },
      { url: '/archives-cuisine/2018-07-05 09.50.45.jpg', caption: 'Productos nobles de temporada y carnes selectas' },
      { url: '/archives-cuisine/2017-12-01 19.51.19.jpg', caption: 'Plato de autor emplatado al minuto en villa' },
      { url: '/archives-cuisine/2016-07-21 21.02.39.jpg', caption: 'Cocina mediterránea veraniega en villa privada' },
      { url: '/archives-cuisine/2024-01-23 16.31.12.jpg', caption: 'Atención al detalle y elegancia en cada plato' },
    ],
    faqs: [
      {
        q: '¿Es adecuada la cocina de mi villa para un servicio de chef privado?',
        a: 'Sí, totalmente. El Chef Dominique Hybord aporta su propio instrumental profesional (cuchillería especializada, sartenes técnicas, mandolinas). Con placas estándar, horno y nevera es suficiente.',
      },
      {
        q: '¿Para cuántos comensales puede cocinar el chef?',
        a: 'El Chef cocina para grupos de 6 a 15 comensales, acompañado de un camarero dedicado al servicio de mesa.',
      },
    ],
  },
};

export const ServicePage: React.FC<ServicePageProps> = ({ serviceId, onBack }) => {
  const { lang, t } = useLanguage();
  const db = lang === 'en' ? servicesDatabaseEn : lang === 'es' ? servicesDatabaseEs : servicesDatabaseFr;
  const content = db[serviceId] || db['property-management'];
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);

  return (
    <div className="min-h-screen bg-travertine text-ink selection:bg-bronze/20">
      {/* Barre de navigation supérieure fixe */}
      <nav className="sticky top-0 z-50 border-b border-ink/5 bg-travertine/95 backdrop-blur-md py-3.5 px-4 sm:px-8">
        <div className="container-site flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:border-bronze hover:bg-sand"
          >
            <ArrowLeft className="h-4 w-4 text-bronze" />
            <span className="hidden sm:inline">
              {lang === 'en' ? 'Back to all services' : lang === 'es' ? 'Volver a todos los servicios' : 'Retour aux services'}
            </span>
            <span className="sm:hidden">
              {lang === 'en' ? 'Services' : lang === 'es' ? 'Servicios' : 'Services'}
            </span>
          </button>

          <div className="flex flex-col text-center leading-none">
            <span className="font-serif text-lg tracking-[0.12em] text-ink sm:text-xl">SOLVEIG’S</span>
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-bronze">
              Prestige Services
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <LanguageSelector variant="light" />
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
                <span>
                  {lang === 'en'
                    ? 'Connect on WhatsApp'
                    : lang === 'es'
                    ? 'Contactar por WhatsApp'
                    : 'Échanger avec Solveig sur WhatsApp'}
                </span>
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
            <div className="overflow-hidden rounded-[2.2rem] border border-ink/10 bg-white shadow-[0_20px_45px_rgba(28,26,23,0.08)]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-black/70 p-4 backdrop-blur-md text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bronze/30 text-[#F3DEB0]">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold leading-tight">
                        Solveig’s Prestige Services
                      </p>
                      <p className="mt-0.5 text-[11px] font-light text-white/85">
                        Marbella & Mijas · Costa del Sol
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAS 1 : CONCIERGERIE PRIVÉE 7/7 — EXPÉRIENCE ÉDITORIALE & LIFESTYLE */}
      {serviceId === 'concierge-services' ? (
        <section className="border-t border-ink/5 bg-sand py-20 sm:py-24">
          <div className="container-site space-y-16">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="eyebrow">
                {lang === 'en' ? 'Discretion & 7/7 Availability' : lang === 'es' ? 'Discreción y Disponibilidad 7d/7' : 'Discrétion & Disponibilité 7/7'}
              </p>
              <h3 className="font-serif text-3xl font-medium text-ink sm:text-4xl lg:text-5xl">
                {lang === 'en'
                  ? 'Anticipating every moment to grant you absolute peace of mind.'
                  : lang === 'es'
                  ? 'Anticipar cada instante para brindarle una serenidad absoluta.'
                  : 'Anticiper chaque instant pour vous offrir une sérénité absolue.'}
              </h3>
              <p className="text-sm sm:text-base font-light leading-relaxed text-ink-soft">
                {lang === 'en'
                  ? 'Securing a priority table at an exclusive restaurant, chartering a private yacht from Puerto Banús, preparing your residence before arrival, or coordinating VIP airport transfers: Solveig remains personally at your disposal 7 days a week.'
                  : lang === 'es'
                  ? 'Conseguir mesa prioritaria en un restaurante de excepción, fletar un yate privado desde Puerto Banús, preparar su villa antes de su llegada o coordinar traslados VIP desde el aeropuerto: Solveig está a su escucha los 7 días de la semana.'
                  : 'Obtenir une table d’exception, affréter un yacht privé depuis Puerto Banús, préparer votre résidence avant votre arrivée ou coordonner vos transferts VIP dès l’aéroport : Solveig reste personnellement à votre écoute 7 jours sur 7.'}
              </p>
            </div>

            {/* Triptyque Photographique Lifestyle & Conciergerie */}
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  img: '/concierge-yacht-vip.jpg',
                  badge: lang === 'en' ? 'Mediterranean Sea' : lang === 'es' ? 'Mar Mediterráneo' : 'Mer Méditerranée',
                  title:
                    lang === 'en'
                      ? 'Private Yachting & Beach Clubs'
                      : lang === 'es'
                      ? 'Yates Privados y Beach Clubs'
                      : 'Yachting Privé & Beach Clubs',
                  desc:
                    lang === 'en'
                      ? 'Bespoke boat charters from Puerto Banús and Marbella Marina, Sunset cruises, and priority reservations at the finest coastal addresses.'
                      : lang === 'es'
                      ? 'Salidas privadas en barco desde Puerto Banús y Marbella, cruceros al atardecer y reservas prioritarias en los mejores Beach Clubs.'
                      : 'Sorties en mer privatives depuis Puerto Banús, croisières au coucher du soleil et réservations prioritaires dans les adresses les plus prisées.',
                },
                {
                  img: '/candidates/option2_majordome.jpg',
                  badge: lang === 'en' ? 'At Your Villa' : lang === 'es' ? 'En su Villa' : 'Au Cœur de Votre Villa',
                  title:
                    lang === 'en'
                      ? 'Pre-Arrival Provisioning & Wellness'
                      : lang === 'es'
                      ? 'Preparación de Villa y Bienestar'
                      : 'Préparation de Villa & Bien-Être',
                  desc:
                    lang === 'en'
                      ? 'Fine grocery & cellar pre-stocking before your arrival, fresh floral arrangements, in-villa massages, yoga instructors, and private events.'
                      : lang === 'es'
                      ? 'Abastecimiento gourmet y bodega antes de su llegada, flores frescas, masajes en la villa, profesores de yoga y eventos privados.'
                      : 'Approvisionnement gourmet et cave avant votre arrivée, bouquets frais, massages à domicile, coachs privés et réception sur mesure.',
                },
                {
                  img: '/candidates/option3_chauffeur.jpg',
                  badge: lang === 'en' ? 'Seamless Mobility' : lang === 'es' ? 'Movilidad VIP' : 'Mobilité & Golf',
                  title:
                    lang === 'en'
                      ? 'VIP Chauffeurs & Golf Green Fees'
                      : lang === 'es'
                      ? 'Chófer Privado y Green Fees de Golf'
                      : 'Chauffeurs VIP & Green Fees Golf',
                  desc:
                    lang === 'en'
                      ? 'Private airport transfers from Málaga AGP, luxury vehicles at disposal, and tee-time bookings on the finest Golf Valley courses.'
                      : lang === 'es'
                      ? 'Traslados privados desde el aeropuerto de Málaga, vehículos con chófer y reserva de salidas en los mejores campos del Valle del Golf.'
                      : 'Transferts privés depuis l’aéroport de Málaga, véhicules avec chauffeur et réservations de parcours dans les golfs prestigieux de Marbella.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group rounded-[2rem] border border-ink/10 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="relative h-64 overflow-hidden bg-ink">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md border border-[#C9A869]/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#F3DEB0]">
                      {item.badge}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7 space-y-2.5 flex-1">
                    <h4 className="font-serif text-2xl font-medium text-ink">{item.title}</h4>
                    <p className="text-xs sm:text-sm font-light leading-relaxed text-ink-soft">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

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
                <span>{lang === 'en' ? 'Back to all services' : lang === 'es' ? 'Volver a servicios' : 'Retour aux services'}</span>
              </button>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* CAS CHEF À DOMICILE : LES 4 EXPÉRIENCES GASTRONOMIQUES SIGNATURE */}
          {serviceId === 'chef-a-domicile' && (
            <section className="border-t border-ink/5 bg-sand py-20">
              <div className="container-site">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <p className="eyebrow">{t.chefSection.experiencesTitle}</p>
                  <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl mt-1">
                    {t.chefSection.experiencesSubtitle}
                  </h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                  {t.chefSection.experiences.map((exp, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-sand px-2.5 py-1 text-[11px] font-semibold text-bronze-deep mb-3">
                          <Sparkles className="h-3 w-3 text-bronze" />
                          <span>0{idx + 1}</span>
                        </span>
                        <h3 className="font-serif text-xl font-medium text-ink leading-snug mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-xs font-semibold text-bronze mb-3">{exp.subtitle}</p>
                        <p className="text-xs font-light text-ink-soft leading-relaxed">
                          {exp.desc}
                        </p>
                      </div>
                      <div className="mt-5 pt-3 border-t border-ink/5 flex items-center justify-between text-[11px] text-ink-muted">
                        <span>{exp.guests}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CAS LOCATION SAISONNIÈRE : COMPARAISON DES 2 FORMULES */}
          {serviceId === 'rental-management' && (
            <section className="border-t border-ink/5 bg-sand py-20">
              <div className="container-site">
                <div className="max-w-2xl mx-auto text-center mb-14">
                  <p className="eyebrow">
                    {lang === 'en' ? 'Two Flexible Formats' : lang === 'es' ? 'Dos Planes Modulares' : 'Deux Formules Modulables'}
                  </p>
                  <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl mt-1">
                    {lang === 'en'
                      ? 'Choose the care tailored to your lifestyle'
                      : lang === 'es'
                      ? 'Elija el plan adaptado a su forma de gestión'
                      : 'Choisissez la formule adaptée à votre gestion'}
                  </h2>
                  <p className="text-sm font-light text-ink-soft mt-2">
                    {lang === 'en'
                      ? 'Whether you wish to retain calendar control or delegate end-to-end rental operations.'
                      : lang === 'es'
                      ? 'Tanto si desea conservar el control de su calendario como delegar la gestión al completo.'
                      : 'Que vous souhaitiez conserver la maîtrise de votre calendrier ou déléguer l’intégralité de vos réservations.'}
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                  {/* Formule 1 */}
                  <div className="rounded-[2.2rem] border border-ink/10 bg-white p-7 sm:p-9 shadow-sm flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1 text-[11px] font-semibold text-ink-soft">
                        {lang === 'en' ? 'Plan 01' : lang === 'es' ? 'Plan 01' : 'Formule 01'}
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-ink">
                        {lang === 'en'
                          ? 'Bookings Managed by You (Owner)'
                          : lang === 'es'
                          ? 'Reservas Gestionadas por Usted (Propietario)'
                          : 'Réservations Gérées par Vous (Propriétaire)'}
                      </h3>
                      <p className="text-xs sm:text-sm font-light text-ink-soft leading-relaxed">
                        {lang === 'en'
                          ? 'You oversee your listings and reservations: we provide 5-star on-site hospitality and turnover care.'
                          : lang === 'es'
                          ? 'Usted gestiona sus anuncios y reservas: nosotros garantizamos una bienvenida 5 estrellas y un cuidado minucioso en la villa.'
                          : 'Vous pilotez vous-même vos annonces et réservations : nous assurons une intendance et un accueil physique 5 étoiles sur place.'}
                      </p>

                      <ul className="space-y-3 pt-3 border-t border-ink/5 text-xs sm:text-sm text-ink-soft">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>
                            {lang === 'en'
                              ? 'In-person VIP meet & greet (no lockbox ever)'
                              : lang === 'es'
                              ? 'Recepción física en persona y entrega de llaves (nunca cajas de llaves)'
                              : 'Accueil physique en personne et remise des clés (jamais de boîte à clés)'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>
                            {lang === 'en'
                              ? 'Meticulous entry and exit inventories with comparative photos'
                              : lang === 'es'
                              ? 'Inventario de entrada y salida detallado con reportaje fotográfico'
                              : 'État des lieux d’entrée et de sortie minutieux avec reportage photo comparatif'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>
                            {lang === 'en'
                              ? 'Deep post-stay cleaning and complete villa refreshment'
                              : lang === 'es'
                              ? 'Limpieza profunda de salida y puesta a punto integral de la villa'
                              : 'Ménage de départ approfondi et remise en beauté complète de la villa'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>
                            {lang === 'en'
                              ? 'Hotel-grade laundry service with crisp luxury linens'
                              : lang === 'es'
                              ? 'Lavandería de alta calidad hotelera y lencería impecable'
                              : 'Blanchisserie hôtelière soignée et mise en place du linge frais'}
                          </span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href={waLink(
                        lang === 'en'
                          ? 'Hello Solveig, I am interested in Plan 1 (On-site care for my own bookings).'
                          : lang === 'es'
                          ? 'Hola Solveig, deseo elegir el Plan 1 (Intendencia in situ para mis propias reservas).'
                          : 'Bonjour Solveig, je souhaite opter pour la Formule 1 (Intendance sur place pour mes réservations).'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full"
                    >
                      <WhatsAppIcon />
                      <span>{lang === 'en' ? 'Select On-Site Plan' : lang === 'es' ? 'Elegir Plan In Situ' : 'Choisir la Formule Sur-Place'}</span>
                    </a>
                  </div>

                  {/* Formule 2 */}
                  <div className="rounded-[2.2rem] border-2 border-bronze bg-white p-7 sm:p-9 shadow-md flex flex-col justify-between space-y-6 relative">
                    <span className="absolute -top-3.5 right-6 rounded-full bg-bronze px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                      {lang === 'en' ? 'Full Turnkey' : lang === 'es' ? 'Gestión Integral' : 'Délégation Totale'}
                    </span>

                    <div className="space-y-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1 text-[11px] font-semibold text-bronze-deep">
                        {lang === 'en' ? 'Plan 02' : lang === 'es' ? 'Plan 02' : 'Formule 02'}
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-ink">
                        {lang === 'en'
                          ? 'Turnkey Vacation Rental Management'
                          : lang === 'es'
                          ? 'Gestión Integral Llave en Mano'
                          : 'Gestion Locative Intégrale (Clé en Main)'}
                      </h3>
                      <p className="text-xs sm:text-sm font-light text-ink-soft leading-relaxed">
                        {lang === 'en'
                          ? 'Total peace of mind: we handle premier marketing, strict guest vetting, and full operations from A to Z.'
                          : lang === 'es'
                          ? 'Serenidad total: asumimos la comercialización de lujo, el filtrado de viajeros y la intendencia de principio a fin.'
                          : 'Sérénité absolue : nous prenons en charge la commercialisation, le filtrage des voyageurs et l’intendance complète de A à Z.'}
                      </p>

                      <ul className="space-y-3 pt-3 border-t border-ink/5 text-xs sm:text-sm text-ink-soft">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>
                            {lang === 'en'
                              ? 'Professional photography and luxury positioning'
                              : lang === 'es'
                              ? 'Fotografía profesional y difusión en canales de alta gama'
                              : 'Shooting photo professionnel et valorisation sur les canaux haut de gamme'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>
                            {lang === 'en'
                              ? 'Strict guest screening of families and verified visitors'
                              : lang === 'es'
                              ? 'Filtrado riguroso y selección de familias y huéspedes de confianza'
                              : 'Filtrage strict et sélection rigoureuse des profils de familles et invités'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>
                            {lang === 'en'
                              ? 'Rental contracts, bank deposit security, and dynamic pricing'
                              : lang === 'es'
                              ? 'Contratos de alquiler, fianzas bancarias y tarificación dinámica'
                              : 'Gestion des contrats, dépôts de garantie bancaires et tarification dynamique'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>
                            {lang === 'en'
                              ? 'VIP meet & greet, 7/7 guest concierge, and prompt monthly payouts'
                              : lang === 'es'
                              ? 'Bienvenida VIP, conserjería para huéspedes 7d/7 y liquidación mensual'
                              : 'Accueil VIP, conciergerie séjour 7j/7 et virement mensuel des loyers'}
                          </span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href={waLink(
                        lang === 'en'
                          ? 'Hello Solveig, I am interested in Plan 2 (Full turnkey rental management).'
                          : lang === 'es'
                          ? 'Hola Solveig, deseo elegir el Plan 2 (Gestión integral llave en mano).'
                          : 'Bonjour Solveig, je souhaite opter pour la Formule 2 (Gestion locative intégrale clé en main).'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full"
                    >
                      <WhatsAppIcon />
                      <span>{lang === 'en' ? 'Select Turnkey Plan' : lang === 'es' ? 'Elegir Gestión Integral' : 'Choisir la Gestion Intégrale'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CAS PROPERTY MANAGEMENT : LES 4 PILIERS DE L'INTENDANCE */}
          {content.pillars && (
            <section className="border-t border-ink/5 bg-sand py-20">
              <div className="container-site">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <p className="eyebrow">
                    {lang === 'en' ? 'Standard of Excellence' : lang === 'es' ? 'Protocolo de Excelencia' : 'Protocole d’Excellence'}
                  </p>
                  <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl mt-1">
                    {lang === 'en'
                      ? 'The 4 Pillars of Our Estate Care'
                      : lang === 'es'
                      ? 'Los 4 Pilares de Nuestra Intendencia'
                      : 'Les 4 Piliers de Notre Intendance'}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                  {content.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="rounded-[2.2rem] border border-ink/10 bg-white p-7 sm:p-9 shadow-sm hover:shadow-md transition-shadow"
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
                            {lang === 'en' ? 'Pillar' : lang === 'es' ? 'Pilar' : 'Pilier'} 0{idx + 1}
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
                  <p className="eyebrow">
                    {lang === 'en' ? 'Timeline & Process' : lang === 'es' ? 'Cronograma y Proceso' : 'Déroulement'}
                  </p>
                  <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl mt-1">
                    {serviceId === 'chef-a-domicile'
                      ? (lang === 'en'
                          ? 'The rhythm of a private gastronomic evening in villa'
                          : lang === 'es'
                          ? 'El ritmo de una velada gastronómica en villa'
                          : 'Le rythme d’une soirée gastronomique en villa')
                      : (lang === 'en'
                          ? 'How our estate care unfolds'
                          : lang === 'es'
                          ? 'Cómo se desarrolla nuestro acompañamiento'
                          : 'Comment se déroule notre accompagnement')}
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
                    <p className="eyebrow">
                      {lang === 'en' ? 'Culinary Gallery' : lang === 'es' ? 'Galería Culinaria' : 'Galerie photographique'}
                    </p>
                    <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl mt-1">
                      {lang === 'en'
                        ? 'Creations by Chef Dominique Hybord'
                        : lang === 'es'
                        ? 'Creaciones del Chef Dominique Hybord'
                        : 'Les créations du Chef Dominique Hybord'}
                    </h2>
                  </div>
                  <p className="text-xs text-ink-muted">
                    {lang === 'en' ? 'Click to enlarge dishes.' : lang === 'es' ? 'Haga clic para ampliar los platos.' : 'Cliquez pour agrandir les assiettes.'}
                  </p>
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
                  <div className="lg:col-span-5 rounded-[2.2rem] border border-ink/10 bg-white p-7 sm:p-9 shadow-sm">
                    <p className="eyebrow">
                      {lang === 'en' ? 'Included Services' : lang === 'es' ? 'Servicios Incluidos' : 'Prestations Incluses'}
                    </p>
                    <h3 className="font-serif text-2xl font-medium text-ink mt-1 mb-6">
                      {lang === 'en'
                        ? 'Everything included in our care'
                        : lang === 'es'
                        ? 'Todo lo que comprende nuestro servicio'
                        : 'Ce qui est compris dans l’accompagnement'}
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
                    <p className="eyebrow">
                      {lang === 'en' ? 'Frequently Asked Questions' : lang === 'es' ? 'Preguntas Frecuentes' : 'Questions Fréquentes'}
                    </p>
                    <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl mt-1 mb-6">
                      {lang === 'en'
                        ? 'All key details at a glance'
                        : lang === 'es'
                        ? 'Todo lo que necesita saber'
                        : 'Tout ce que vous devez savoir'}
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
              <p className="eyebrow">
                {lang === 'en'
                  ? 'Your Estate Deserves Excellence'
                  : lang === 'es'
                  ? 'Su Finca Merece la Excelencia'
                  : 'Votre Villa Mérite l’Excellence'}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ink">
                {lang === 'en'
                  ? 'Grant your property the care it deserves.'
                  : lang === 'es'
                  ? 'Brinde a su propiedad la atención que se merece.'
                  : 'Offrez à votre domaine l’attention qu’il mérite.'}
              </h2>
              <p className="text-sm sm:text-base font-light text-ink-soft leading-relaxed max-w-xl mx-auto">
                {lang === 'en'
                  ? 'Contact Solveig Hybord today for a confidential, non-binding discussion regarding your estate in Marbella or Mijas.'
                  : lang === 'es'
                  ? 'Contacte con Solveig Hybord hoy mismo para una consulta confidencial y sin compromiso sobre su propiedad en Marbella o Mijas.'
                  : 'Contactez Solveig Hybord dès aujourd’hui pour une étude confidentielle et sans engagement de vos besoins sur Marbella ou Mijas.'}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={waLink(content.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  <WhatsAppIcon />
                  <span>
                    {lang === 'en'
                      ? 'Contact Solveig on WhatsApp'
                      : lang === 'es'
                      ? 'Contactar con Solveig por WhatsApp'
                      : 'Contacter Solveig sur WhatsApp'}
                  </span>
                </a>

                <button onClick={onBack} className="btn-secondary w-full sm:w-auto">
                  <ArrowLeft className="h-4 w-4" />
                  <span>
                    {lang === 'en'
                      ? 'Back to all 4 services'
                      : lang === 'es'
                      ? 'Volver a los 4 servicios'
                      : 'Retour aux 4 services'}
                  </span>
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
