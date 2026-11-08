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
  ZoomIn,
} from 'lucide-react';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, ServiceId, waLink } from '../lib/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Lightbox } from './ui/Lightbox';
import { LanguageSelector } from './ui/LanguageSelector';
import { useLanguage } from '../lib/LanguageContext';
import { Footer } from './Footer';

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
  stats?: { value: string; label: string }[];
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

const chefInspirationalGallery: { url: string; caption: string }[] = [
  { url: '/archives-cuisine/2023-09-12 13.09.35.jpg', caption: 'Création du Chef Dominique Hybord' },
  { url: '/archives-cuisine/2022-10-05 12.42.03.jpg', caption: 'Création du Chef Dominique Hybord' },
  { url: '/archives-cuisine/2018-07-05 09.50.45.jpg', caption: 'Création du Chef Dominique Hybord' },
  { url: '/archives-cuisine/2017-12-01 19.51.19.jpg', caption: 'Création du Chef Dominique Hybord' },
  { url: '/archives-cuisine/2018-07-05 09.51.09.jpg', caption: 'Création du Chef Dominique Hybord' },
  { url: '/archives-cuisine/2019-02-14 21.11.08.jpg', caption: 'Création du Chef Dominique Hybord' },
  { url: '/archives-cuisine/2018-01-21 08.25.03.jpg', caption: 'Table dressée en villa' },
  { url: '/archives-cuisine/2016-07-21 21.02.39.jpg', caption: 'Table face à la mer' },
  { url: '/archives-cuisine/2015-09-16 11.01.18.jpg', caption: 'Réception conviviale' },
  { url: '/archives-cuisine/2015-09-16 11.01.56.jpg', caption: 'Table dressée pour vos convives' },
  { url: '/archives-cuisine/2016-12-07 13.01.27.jpg', caption: 'Création du Chef Dominique Hybord' },
  { url: '/archives-cuisine/2017-11-29 13.03.41.jpg', caption: 'Création du Chef Dominique Hybord' },
  { url: '/archives-cuisine/2019-08-01 10.10.16-1.jpg', caption: 'Création du Chef Dominique Hybord' },
  { url: '/archives-cuisine/2019-11-20 13.10.51-1.jpg', caption: 'Création du Chef Dominique Hybord' },
  { url: '/archives-cuisine/2024-01-23 16.31.12.jpg', caption: 'Création du Chef Dominique Hybord' },
  { url: '/archives-cuisine/2018-07-05 09.54.41.jpg', caption: 'Création du Chef Dominique Hybord' },
  { url: '/archives-cuisine/2018-07-05 09.56.49.jpg', caption: 'Création du Chef Dominique Hybord' },
  { url: '/archives-cuisine/2019-08-21 15.11.12.jpg', caption: 'Création du Chef Dominique Hybord' },
];

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
      'Posséder une villa sur la Costa del Sol doit demeurer un plaisir sans contrainte. Solveig’s Prestige Services prend en charge l’intendance complète, la surveillance attentive et la coordination des prestataires de votre bien. À chaque visite, un compte-rendu clair et détaillé avec photos HD vous est adressé directement sur WhatsApp ou par email.',
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
        desc: 'Visites périodiques approfondies de l’ensemble de vos espaces intérieurs et extérieurs.',
        icon: 'shield',
        details: [
          'Vérification du bon fonctionnement de la climatisation, du chauffage et de la ventilation',
          'Vérification de la plomberie et détection précoce d’anomalies ou de fuites',
          'Suivi de l’équilibre de l’eau et de la propreté de la piscine',
          'Vérification des fermetures de sécurité, portails et accès',
        ],
      },
      {
        title: 'Coordination Bienveillante des Prestataires',
        desc: 'Supervision directe de chaque intervenant pour une exécution soignée au juste prix.',
        icon: 'clock',
        details: [
          'Sélection auprès des artisans locaux de confiance (jardinage, électricité, toiture)',
          'Présence physique sur place lors des interventions et suivi des travaux',
          'Vérification attentive des devis et factures pour éviter toute surfacturation',
          'Planification préventive des entretiens annuels (climatisation, portails, arrosage)',
        ],
      },
      {
        title: 'Préparation de la Villa Avant Votre Arrivée',
        desc: 'Votre maison prête à vous accueillir sereinement lors de chacun de vos séjours.',
        icon: 'star',
        details: [
          'Mise en température des pièces avant votre arrivée (chauffage ou climatisation)',
          'Aération complète et ouverture des espaces de vie',
          'Coordination du ménage et de la mise en ordre avant votre venue',
          'Demandes particulières organisées sur mesure selon vos souhaits',
        ],
      },
      {
        title: 'Fermeture & Sécurisation Lors de Vos Départs',
        desc: 'Une fermeture soignée pour protéger durablement votre propriété en votre absence.',
        icon: 'file',
        details: [
          'Fermeture raisonnée des arrivées d’eau pour prévenir tout incident en votre absence',
          'Mise à l’abri du mobilier d’extérieur face au vent marin et aux intempéries',
          'Relevé du courrier et réception ponctuelle des livraisons en votre absence',
          'Visite de vérification supplémentaire après chaque épisode météorologique majeur',
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
        title: 'Rythme de Suivi Personnalisé',
        desc: 'Nous adaptons la fréquence des visites (hebdomadaire ou bi-mensuelle) à vos besoins.',
      },
      {
        step: '03',
        title: 'Intendance Active & Rapports HD',
        desc: 'Après chaque passage, vous recevez un compte-rendu clair avec photos HD directement sur WhatsApp.',
      },
      {
        step: '04',
        title: 'Préparation Avant Séjour',
        desc: 'À chacun de vos séjours, vous retrouvez une maison ouverte, aérée et prête à vivre.',
      },
    ],
    inclusions: [
      'Visites régulières avec compte-rendu photographique HD',
      'Accès direct WhatsApp 7/7 avec Solveig',
      'Coordination et suivi des interventions d’artisans au prix réel',
      'Visite de vérification systématique après intempéries',
      'Mise en température et aération avant votre arrivée',
      'Coordination du pisciniste et des jardiniers',
      'Surveillance discrète et relevé du courrier',
    ],
    faqs: [
      {
        q: 'À quelle fréquence les visites sont-elles effectuées ?',
        a: 'En fonction de vos besoins, nous intervenons chaque semaine ou toutes les deux semaines. En cas d’intempéries ou d’alerte météo sur la Costa del Sol, une visite de vérification supplémentaire est effectuée automatiquement.',
      },
      {
        q: 'Comment nous informez-vous de l’état de la propriété ?',
        a: 'Après chaque visite, vous recevez un rapport clair accompagné de photos et courtes vidéos sur WhatsApp ou par email, détaillant chaque point vérifié (jardin, piscine, toiture, compteurs, climatisation).',
      },
      {
        q: 'Pouvez-vous superviser des travaux ou des rénovations ?',
        a: 'Absolument. Nous travaillons avec des artisans et entrepreneurs de confiance à Marbella et Mijas. Nous supervisons l’avancement sur place et vous transmettons des photos régulières.',
      },
    ],
  },

  'concierge-services': {
    id: 'concierge-services',
    badge: 'Conciergerie privée et Lifestyle 7/7 · Costa del Sol',
    title: 'Conciergerie privée et Lifestyle 7/7',
    subtitle: 'Marbella & Mijas · Costa del Sol',
    tagline: '« Une présence locale discrète pour vivre pleinement chaque instant. »',
    heroImage: '/concierge-yacht-vip.jpg',
    heroImageAlt: 'Coucher de soleil en mer à bord d’un yacht privé',
    heroDescription:
      "Une présence locale pour rendre les séjours plus fluides et les demandes plus simples avec discrétion.\n\nObtenir une table dans un restaurant de la Costa del Sol, réserver un golf, une échappée en mer ou disposer d'un chauffeur dès votre arrivée à l'aéroport.\n\nSolveig’s Prestige Services anticipe chaque instant pour vous offrir une sérénité absolue.",
    whatsappMessage:
      'Bonjour Solveig, je souhaite solliciter vos services de conciergerie privée 7/7 pour mon séjour sur la Costa del Sol.',
  },

  'rental-management': {
    id: 'rental-management',
    badge: 'Gestion Locative · Marbella & Mijas',
    title: 'Rental Management',
    subtitle: 'Une expérience de séjour pensée avant même l’arrivée',
    tagline: '« Valoriser votre bien tout en préservant son intégrité, selon l’organisation qui vous convient. »',
    heroImage: '/rental-management-charm.jpg',
    heroImageAlt: 'Terrasse de villa avec vue mer panoramique',
    heroDescription:
      'Chaque propriétaire a sa propre façon de louer son bien sur la Costa del Sol. Solveig’s Prestige Services vous propose deux organisations possibles : soit les réservations sont gérées directement par vous et nous assurons l’accueil et le suivi sur place, soit les réservations sont gérées intégralement par Solveig’s Prestige Services.',
    whatsappMessage:
      'Bonjour Solveig, je souhaite échanger au sujet de la gestion locative de ma propriété sur la Costa del Sol.',
    stats: [
      { value: '2 Options', label: 'Gestion par vous ou par nous' },
      { value: 'En personne', label: 'Accueil physique des voyageurs' },
      { value: '7/7', label: 'Présence locale à Marbella & Mijas' },
      { value: 'Sur-mesure', label: 'Organisation adaptée à votre bien' },
    ],
    inclusions: [
      'Choix libre entre réservations gérées par le propriétaire ou gérées par Solveig’s Prestige Services',
      'Accueil personnalisé en personne à l’arrivée des voyageurs et remise des clés',
      'État des lieux d’entrée et de sortie attentif avec reportage photo',
      'Coordination de la remise en ordre et du ménage entre chaque séjour',
      'Interlocutrice locale disponible 7/7 sur place pour les voyageurs',
    ],
    faqs: [
      {
        q: 'Puis-je continuer à gérer moi-même mon calendrier et mes réservations ?',
        a: 'Oui, tout à fait. Avec la première option, vous conservez la gestion directe de vos annonces et de vos réservations, et nous intervenons uniquement sur place pour accueillir vos hôtes, effectuer l’état des lieux et coordonner la préparation de la maison.',
      },
      {
        q: 'Pouvez-vous également prendre en charge l’ensemble des réservations ?',
        a: 'Oui. Avec la seconde option, Solveig’s Prestige Services s’occupe des réservations ainsi que de l’ensemble du suivi sur place, tout en vous laissant la liberté de réserver vos propres dates de séjour personnel.',
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
      'Recevez vos proches sans quitter votre villa. Le Chef Dominique Hybord imagine avec vous un menu sur mesure, inspiré par la Méditerranée et les produits frais de saison, selon vos goûts, votre budget et les possibilités de votre cuisine.',
    whatsappMessage:
      'Bonjour Solveig, je souhaite organiser un repas privé avec le Chef Dominique Hybord dans notre villa.',
    stats: [
      { value: '30+', label: 'Ans d’expérience gastronomique' },
      { value: 'Michelin', label: 'Bib Gourmand Guide Michelin' },
      { value: '2 Toques', label: 'Distinction Gault & Millau' },
      { value: '6 à 15', label: 'Convives autour de votre table' },
    ],
    inclusions: [
      'De 6 à 15 personnes, avec le chef et une personne au service.',
      'Menu imaginé directement avec vous selon vos envies, vos goûts et votre budget',
      'Sélection des produits frais de saison sur les marchés locaux',
      'Préparation sur place dans votre villa et dressage des assiettes au moment du repas',
      'Remise en ordre complète de la cuisine à la fin du repas',
    ],
    galleryImages: chefInspirationalGallery,
  },
};

const servicesDatabaseEn: Record<ServiceId, ServiceContent> = {
  'property-management': {
    id: 'property-management',
    badge: 'Private Estate Care · Marbella & Mijas',
    title: 'Property Management',
    subtitle: 'Your home, in trustworthy hands even when you are away',
    tagline: '“Peace of mind begins with knowing someone is truly caring for your property.”',
    heroImage: '/property-management-charm.jpg',
    heroImageAlt: 'Luxury villa estate with private pool and garden',
    heroDescription:
      'Owning a villa on the Costa del Sol should remain an effortless pleasure. Solveig’s Prestige Services provides attentive property care, regular visits, and contractor coordination. After each visit, a clear report with HD photos is sent directly to your WhatsApp or email.',
    whatsappMessage:
      'Hello Solveig, I would like to discuss property management for my villa on the Costa del Sol.',
    stats: [
      { value: '30+', label: 'Years of experience' },
      { value: '100%', label: 'Visit reports with HD photos' },
      { value: '7/7', label: 'Availability & local presence' },
      { value: '€0', label: 'Hidden contractor markups' },
    ],
    pillars: [
      {
        title: 'Watchful Care & Regular Visits',
        desc: 'Periodic walkthroughs across all interior and exterior spaces of your property.',
        icon: 'shield',
        details: [
          'Checking air conditioning, heating, and ventilation systems',
          'Plumbing checks and early detection of any leaks or anomalies',
          'Monitoring pool water balance and cleanliness',
          'Checking perimeter locks, gates, and access points',
        ],
      },
      {
        title: 'Contractor & Craftsman Coordination',
        desc: 'Direct on-site supervision of trusted local professionals at fair, verified rates.',
        icon: 'clock',
        details: [
          'Trusted local craftsmen (gardening, electrical, roofing, plumbing)',
          'Physical presence on-site during works and interventions',
          'Careful review of quotes and invoices to avoid overcharging',
          'Scheduling of annual maintenance checks',
        ],
      },
      {
        title: 'Preparing Your Villa Before Arrival',
        desc: 'Your house ready to welcome you smoothly for every personal stay.',
        icon: 'star',
        details: [
          'Room temperature set prior to arrival (cooling or heating)',
          'Complete airing out and opening of living spaces',
          'Coordination of housekeeping prior to your arrival',
          'Bespoke preparations arranged individually upon request',
        ],
      },
      {
        title: 'Securing the Property Upon Departure',
        desc: 'Careful closing procedures to protect your home during your absence.',
        icon: 'file',
        details: [
          'Main water shutoff to prevent leaks while the house is unoccupied',
          'Securing outdoor furniture against coastal winds and weather',
          'Mail collection and package reception during your absence',
          'Additional check visit following major weather events',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Initial Property Walkthrough',
        desc: 'We visit your property, listen to your expectations, and define a tailored follow-up plan.',
      },
      {
        step: '02',
        title: 'Tailored Visit Schedule',
        desc: 'We adapt visit frequencies (weekly or bi-weekly) to your needs.',
      },
      {
        step: '03',
        title: 'Regular Care & HD Reports',
        desc: 'After every visit, you receive a concise HD photo summary directly via WhatsApp.',
      },
      {
        step: '04',
        title: 'Pre-Stay Preparation',
        desc: 'Whenever you return, you step into a freshly aired, welcoming home.',
      },
    ],
    inclusions: [
      'Regular visits with photographic HD reports',
      'Direct WhatsApp 7/7 contact with Solveig',
      'Artisan and contractor coordination at genuine cost',
      'Post-storm property checks',
      'Pre-arrival airing and temperature setting',
      'Coordination of pool and garden professionals',
      'Discreet property care and mail collection',
    ],
    faqs: [
      {
        q: 'How frequently are visits conducted?',
        a: 'Depending on your needs, we visit your property weekly or bi-weekly. Following heavy storms or weather alerts on the Costa del Sol, an additional check is performed promptly.',
      },
      {
        q: 'How do you keep us updated on the property condition?',
        a: 'After every visit, you receive a clear report with photos and brief videos on WhatsApp or email covering all checked areas (pool, garden, roof, meters, air conditioning).',
      },
      {
        q: 'Can you supervise renovation or maintenance works?',
        a: 'Yes. We collaborate with trusted craftsmen across Marbella and Mijas, monitor progress on-site, and share regular photo updates.',
      },
    ],
  },

  'concierge-services': {
    id: 'concierge-services',
    badge: 'Private Concierge and Lifestyle 7/7 · Costa del Sol',
    title: 'Private Concierge and Lifestyle 7/7',
    subtitle: 'Marbella & Mijas · Costa del Sol',
    tagline: '“A discreet local presence so you can enjoy every moment with complete peace of mind.”',
    heroImage: '/concierge-yacht-vip.jpg',
    heroImageAlt: 'Sunset cruise aboard a private yacht',
    heroDescription:
      'A local presence to make stays smoother and requests simpler with discretion.\n\nSecuring a table at a restaurant on the Costa del Sol, booking a golf course, a sea excursion, or having a chauffeur waiting upon your arrival at the airport.\n\nSolveig’s Prestige Services anticipates every moment to offer you absolute peace of mind.',
    whatsappMessage:
      'Hello Solveig, I would like to inquire about your 7/7 private concierge services on the Costa del Sol.',
  },

  'rental-management': {
    id: 'rental-management',
    badge: 'Rental Management · Marbella & Mijas',
    title: 'Rental Management',
    subtitle: 'A stay experience thoughtfully prepared before arrival',
    tagline: '“Valuing your property while preserving its integrity, according to the arrangement that suits you best.”',
    heroImage: '/rental-management-charm.jpg',
    heroImageAlt: 'Panoramic sea-view villa terrace',
    heroDescription:
      'Every property owner has their own preferred way of managing seasonal rentals on the Costa del Sol. Solveig’s Prestige Services offers two clear arrangements: either reservations are managed directly by you while we handle on-site guest reception and follow-up, or reservations are managed directly by Solveig’s Prestige Services.',
    whatsappMessage:
      'Hello Solveig, I would like to discuss rental management for my property on the Costa del Sol.',
    stats: [
      { value: '2 Options', label: 'Managed by you or by us' },
      { value: 'In Person', label: 'Personal guest welcome' },
      { value: '7/7', label: 'Local presence in Marbella & Mijas' },
      { value: 'Tailored', label: 'Adapted to your property' },
    ],
    inclusions: [
      'Choice between reservations managed by the owner or managed by Solveig’s Prestige Services',
      'Personal in-person guest welcome and key handover upon arrival',
      'Thorough check-in and check-out walkthroughs with photo reports',
      'Coordination of cleaning and property preparation between stays',
      'Dedicated 7/7 local point of contact for guests during their stay',
    ],
    faqs: [
      {
        q: 'Can I continue to manage my own calendar and reservations?',
        a: 'Yes, absolutely. With Option 1, you manage your own bookings and calendar directly, while we handle the on-site guest welcome, walkthroughs, and preparation of the property.',
      },
      {
        q: 'Can Solveig’s Prestige Services also manage the reservations?',
        a: 'Yes. With Option 2, Solveig’s Prestige Services handles the reservations as well as the complete on-site follow-up, while you retain full freedom to reserve your personal stay dates.',
      },
    ],
  },

  'chef-a-domicile': {
    id: 'chef-a-domicile',
    badge: 'Private Chef in Villa · Dominique Hybord',
    title: 'Private Chef',
    subtitle: 'The craftsmanship of an experienced chef in the privacy of your villa',
    tagline: '“30 years of experience, genuine cuisine, and the pleasure of hosting at home.”',
    heroImage: '/chef-dominique-cepes.jpg',
    heroImageAlt: 'Chef Dominique Hybord carrying a crate of fresh porcini mushrooms',
    heroDescription:
      'Host your loved ones without leaving your villa. Chef Dominique Hybord designs a bespoke menu with you, inspired by the Mediterranean and seasonal produce, adapted to your tastes, your budget, and the practical possibilities of your villa’s kitchen.',
    whatsappMessage:
      'Hello Solveig, I would like to arrange a private meal with Chef Dominique Hybord in our villa.',
    stats: [
      { value: '30+', label: 'Years of culinary experience' },
      { value: 'Michelin', label: 'Bib Gourmand Michelin Guide' },
      { value: '2 Toques', label: 'Gault & Millau Distinction' },
      { value: '6 to 15', label: 'Guests around your table' },
    ],
    inclusions: [
      'From 6 to 15 guests, with the chef and one service person.',
      'Bespoke menu designed directly with you according to your tastes and budget',
      'Selection of fresh seasonal produce from local markets',
      'On-site preparation in your villa kitchen and plating at mealtime',
      'Complete kitchen cleanup and restoration after the meal',
    ],
    galleryImages: chefInspirationalGallery,
  },
};

const servicesDatabaseEs: Record<ServiceId, ServiceContent> = {
  'property-management': {
    id: 'property-management',
    badge: 'Gestión de Propiedad · Marbella y Mijas',
    title: 'Property Management',
    subtitle: 'Su casa, en buenas manos incluso cuando está lejos',
    tagline: '«La tranquilidad comienza sabiendo que alguien vela realmente por su propiedad.»',
    heroImage: '/property-management-charm.jpg',
    heroImageAlt: 'Villa mediterránea con piscina y jardín',
    heroDescription:
      'Poseer una villa en la Costa del Sol debe ser un placer sin preocupaciones. Solveig’s Prestige Services se encarga de la supervisión atenta, las visitas periódicas y la coordinación de profesionales. Tras cada visita, recibirá un informe claro con fotografías en alta definición por WhatsApp o correo electrónico.',
    whatsappMessage:
      'Hola Solveig, deseo hablar sobre la gestión y el cuidado de mi propiedad en la Costa del Sol.',
    stats: [
      { value: '30+', label: 'Años de experiencia' },
      { value: '100 %', label: 'Informes con fotografías HD' },
      { value: '7/7', label: 'Disponibilidad y presencia local' },
      { value: '0 €', label: 'Sin sobrecostes en profesionales' },
    ],
    pillars: [
      {
        title: 'Supervisión Atenta y Visitas Periódicas',
        desc: 'Revisiones periódicas de todos los espacios interiores y exteriores de su propiedad.',
        icon: 'shield',
        details: [
          'Comprobación del buen funcionamiento de la climatización, calefacción y ventilación',
          'Revisión de fontanería y detección temprana de fugas o anomalías',
          'Seguimiento del estado del agua y limpieza de la piscina',
          'Verificación de cierres de seguridad, portones y accesos',
        ],
      },
      {
        title: 'Coordinación de Profesionales de Confianza',
        desc: 'Supervisión presencial de cada profesional para un trabajo cuidado al precio justo.',
        icon: 'clock',
        details: [
          'Selección de artesanos locales de confianza (jardinería, electricidad, tejados)',
          'Presencia en la propiedad durante las intervenciones y seguimiento de obras',
          'Revisión atenta de presupuestos y facturas para evitar sobrecostes',
          'Planificación preventiva del mantenimiento anual',
        ],
      },
      {
        title: 'Preparación de la Villa Antes de su Llegada',
        desc: 'Su casa lista para recibirle con total comodidad en cada estancia.',
        icon: 'star',
        details: [
          'Puesta en temperatura de las estancias antes de su llegada (frío o calor)',
          'Ventilación completa y apertura de los espacios de vida',
          'Coordinación de la limpieza y puesta a punto antes de su llegada',
          'Solicitudes particulares organizadas a medida según sus deseos',
        ],
      },
      {
        title: 'Cierre y Protección en sus Salidas',
        desc: 'Un cierre cuidadoso para proteger su propiedad durante su ausencia.',
        icon: 'file',
        details: [
          'Cierre preventivo de llaves de agua para evitar incidencias en su ausencia',
          'Protección del mobiliario exterior frente al viento marino y las lluvias',
          'Recogida de correo y recepción puntual de entregas en su ausencia',
          'Visita de verificación adicional tras episodios meteorológicos importantes',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Visita Inicial y Toma de Contacto',
        desc: 'Conocemos su propiedad y sus expectativas para establecer un seguimiento a medida.',
      },
      {
        step: '02',
        title: 'Frecuencia de Visitas Personalizada',
        desc: 'Adaptamos la frecuencia de las visitas (semanal o quincenal) a sus necesidades.',
      },
      {
        step: '03',
        title: 'Seguimiento Activo e Informes HD',
        desc: 'Tras cada visita, recibe un informe claro con fotos HD directamente en su WhatsApp.',
      },
      {
        step: '04',
        title: 'Preparación Antes de cada Estancia',
        desc: 'En cada visita a la Costa del Sol, encuentra su casa aireada y lista para disfrutar.',
      },
    ],
    inclusions: [
      'Visitas periódicas con informe fotográfico HD',
      'Contacto directo por WhatsApp 7/7 con Solveig',
      'Coordinación y seguimiento de profesionales a precio real',
      'Visita de verificación sistemática tras temporales meteorológicos',
      'Climatización y ventilación previa a su llegada',
      'Coordinación del mantenimiento de piscina y jardín',
      'Vigilancia discreta y recogida de correspondencia',
    ],
    faqs: [
      {
        q: '¿Con qué frecuencia se realizan las visitas?',
        a: 'Según sus necesidades, acudimos cada semana o cada dos semanas. En caso de tormenta o alerta meteorológica en la Costa del Sol, realizamos una visita de verificación adicional.',
      },
      {
        q: '¿Cómo nos informan del estado de la propiedad?',
        a: 'Tras cada visita, recibe un informe claro con fotos y vídeos breves por WhatsApp o email, detallando cada punto revisado (jardín, piscina, tejado, contadores, climatización).',
      },
      {
        q: '¿Pueden supervisar obras o reformas?',
        a: 'Por supuesto. Colaboramos con profesionales de confianza en Marbella y Mijas, supervisamos el avance en el lugar y le enviamos fotografías periódicas.',
      },
    ],
  },

  'concierge-services': {
    id: 'concierge-services',
    badge: 'Conserjería privada y Lifestyle 7/7 · Costa del Sol',
    title: 'Conserjería privada y Lifestyle 7/7',
    subtitle: 'Marbella y Mijas · Costa del Sol',
    tagline: '«Una presencia local discreta para disfrutar plenamente de cada instante.»',
    heroImage: '/concierge-yacht-vip.jpg',
    heroImageAlt: 'Atardecer en el mar a bordo de un yate privado',
    heroDescription:
      'Una presencia local para hacer que las estancias sean más fluidas y las solicitudes más sencillas con discreción.\n\nConseguir una mesa en un restaurante de la Costa del Sol, reservar un campo de golf, una escapada al mar o disponer de un chófer desde su llegada al aeropuerto.\n\nSolveig’s Prestige Services anticipa cada instante para ofrecerle una serenidad absoluta.',
    whatsappMessage:
      'Hola Solveig, deseo solicitar sus servicios de conserjería privada 7/7 para mi estancia en la Costa del Sol.',
  },

  'rental-management': {
    id: 'rental-management',
    badge: 'Gestión de Alquiler · Marbella y Mijas',
    title: 'Rental Management',
    subtitle: 'Una experiencia de estancia pensada antes incluso de la llegada',
    tagline: '«Valorizar su propiedad preservando su integridad, según la modalidad que mejor le convenga.»',
    heroImage: '/rental-management-charm.jpg',
    heroImageAlt: 'Terraza de villa con vistas panorámicas al mar',
    heroDescription:
      'Cada propietario tiene su propia manera de gestionar el alquiler de su vivienda en la Costa del Sol. Solveig’s Prestige Services le ofrece dos opciones claras: bien las reservas son gestionadas directamente por usted y nosotros nos ocupamos de la recepción y el seguimiento en el lugar, o bien las reservas son gestionadas directamente por Solveig’s Prestige Services.',
    whatsappMessage:
      'Hola Solveig, deseo hablar sobre la gestión de alquiler de mi propiedad en la Costa del Sol.',
    stats: [
      { value: '2 Opciones', label: 'Gestionado por usted o por nosotros' },
      { value: 'En persona', label: 'Bienvenida presencial de huéspedes' },
      { value: '7/7', label: 'Presencia local en Marbella y Mijas' },
      { value: 'A medida', label: 'Adaptado a su propiedad' },
    ],
    inclusions: [
      'Elección entre reservas gestionadas por el propietario o gestionadas por Solveig’s Prestige Services',
      'Recepción personalizada en persona a la llegada de los viajeros y entrega de llaves',
      'Revisión de entrada y salida con reportaje fotográfico',
      'Coordinación de la limpieza y preparación de la vivienda entre estancias',
      'Interlocutora local disponible 7/7 para los viajeros durante su estancia',
    ],
    faqs: [
      {
        q: '¿Puedo seguir gestionando directamente mi calendario y mis reservas?',
        a: 'Sí, por supuesto. Con la primera opción, usted gestiona directamente sus anuncios y reservas, y nosotros intervenimos en el lugar para recibir a sus huéspedes, realizar la revisión de entrada y salida y coordinar la preparación de la casa.',
      },
      {
        q: '¿Puede Solveig’s Prestige Services encargarse también de las reservas?',
        a: 'Sí. Con la segunda opción, Solveig’s Prestige Services gestiona las reservas así como todo el seguimiento presencial, manteniendo usted siempre la libertad de reservar sus fechas personales.',
      },
    ],
  },

  'chef-a-domicile': {
    id: 'chef-a-domicile',
    badge: 'Chef Privado en Villa · Dominique Hybord',
    title: 'Chef a Domicilio',
    subtitle: 'La experiencia de un gran chef, en la intimidad de su villa',
    tagline: '«30 años de experiencia, una cocina sincera y el placer de recibir en casa.»',
    heroImage: '/chef-dominique-cepes.jpg',
    heroImageAlt: 'El Chef Dominique Hybord con una caja de boletus frescos',
    heroDescription:
      'Reciba a sus seres queridos sin salir de su villa. El Chef Dominique Hybord diseña con usted un menú a medida, inspirado en el Mediterráneo y en los productos frescos de temporada, adaptándose a sus gustos, a su presupuesto y a las posibilidades prácticas de la cocina de su propiedad.',
    whatsappMessage:
      'Hola Solveig, deseo organizar una comida o cena privada con el Chef Dominique Hybord en nuestra villa.',
    stats: [
      { value: '30+', label: 'Años de experiencia gastronómica' },
      { value: 'Michelin', label: 'Bib Gourmand Guía Michelin' },
      { value: '2 Toques', label: 'Distinción Gault & Millau' },
      { value: '6 a 15', label: 'Comensales en su mesa' },
    ],
    inclusions: [
      'De 6 a 15 personas, con el chef y una persona de servicio.',
      'Menú diseñado directamente con usted según sus gustos, deseos y presupuesto',
      'Selección de productos frescos de temporada en los mercados locales',
      'Preparación en la cocina de su villa y emplatado en el momento de servir',
      'Limpieza y puesta en orden completa de la cocina al finalizar',
    ],
    galleryImages: chefInspirationalGallery,
  },
};

export const ServicePage: React.FC<ServicePageProps> = ({ serviceId, onBack }) => {
  const { lang } = useLanguage();
  const db = lang === 'en' ? servicesDatabaseEn : lang === 'es' ? servicesDatabaseEs : servicesDatabaseFr;
  const content = db[serviceId] || db['property-management'];
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);

  const whatsappButtonLabel =
    lang === 'en'
      ? 'Chat with Solveig on WhatsApp'
      : lang === 'es'
      ? 'Hablar con Solveig por WhatsApp'
      : 'Échanger avec Solveig sur WhatsApp';

  return (
    <div className="min-h-screen bg-travertine text-ink selection:bg-bronze/20 flex flex-col">
      {/* Barre de navigation supérieure fixe */}
      <nav className="sticky top-0 z-50 border-b border-ink/5 bg-travertine/95 backdrop-blur-md py-3.5 px-4 sm:px-8">
        <div className="container-site flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:border-bronze hover:bg-sand"
          >
            <ArrowLeft className="h-4 w-4 text-bronze" />
            <span className="hidden sm:inline">
              {lang === 'en' ? 'Back to all services' : lang === 'es' ? 'Volver a los servicios' : 'Retour aux services'}
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

      {/* ========================================================================= */}
      {/* CAS SPÉCIFIQUE SECTION 5 : CONCIERGERIE PRIVÉE ET LIFESTYLE 7/7           */}
      {/* S'arrête immédiatement après le CTA "Échanger avec Solveig sur WhatsApp"  */}
      {/* ========================================================================= */}
      {serviceId === 'concierge-services' ? (
        <section className="relative overflow-hidden py-16 sm:py-24 flex-1">
          <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-bronze/30 bg-sand px-3.5 py-1 text-xs font-semibold text-bronze-deep">
                <Sparkles className="h-3.5 w-3.5 text-bronze" />
                {content.badge}
              </span>

              <h1 className="font-serif text-4xl font-medium leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
                {content.title}
              </h1>

              <div className="space-y-4 text-sm sm:text-base font-light leading-relaxed text-ink-soft max-w-2xl">
                {content.heroDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={waLink(content.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <WhatsAppIcon />
                  <span>{whatsappButtonLabel}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[2.2rem] border border-ink/10 bg-white shadow-[0_20px_45px_rgba(28,26,23,0.08)]">
                <div className="relative h-80 sm:h-[460px] overflow-hidden bg-sand">
                  <img
                    src={content.heroImage}
                    alt={content.heroImageAlt}
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
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
                          Marbella & Mijas · 7/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* HERO SECTION POUR PROPERTY MANAGEMENT, RENTAL MANAGEMENT & CHEF À DOMICILE */}
          <section className="relative overflow-hidden py-14 sm:py-20">
            <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
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

                {/* Mention obligatoire capacité convives pour Chef à domicile (Section 8) */}
                {serviceId === 'chef-a-domicile' && (
                  <div className="rounded-2xl border border-bronze/35 bg-sand/70 px-5 py-4">
                    <p className="font-serif text-lg sm:text-xl font-medium text-ink">
                      {lang === 'en'
                        ? 'From 6 to 15 guests, with the chef and one service person.'
                        : lang === 'es'
                        ? 'De 6 a 15 personas, con el chef y una persona de servicio.'
                        : 'De 6 à 15 personnes, avec le chef et une personne au service.'}
                    </p>
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={waLink(content.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <WhatsAppIcon />
                    <span>{whatsappButtonLabel}</span>
                  </a>

                  <a href={PHONE_TEL} className="btn-secondary">
                    <Phone className="h-4 w-4 text-bronze" />
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                </div>

                {/* Rangée de repères */}
                {content.stats && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-ink/5">
                    {content.stats.map((s, idx) => (
                      <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-3.5 text-center shadow-sm">
                        <p className="font-serif text-xl font-bold text-ink">{s.value}</p>
                        <p className="mt-1 text-[11px] font-light text-ink-soft leading-snug">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}
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

          {/* LES 2 OPTIONS DE GESTION LOCATIVE (AFFICHÉES SUR PROPERTY MANAGEMENT ET RENTAL MANAGEMENT — SECTION 7) */}
          {(serviceId === 'rental-management' || serviceId === 'property-management') && (
            <section className="border-t border-ink/5 bg-sand py-20">
              <div className="container-site">
                <div className="max-w-2xl mx-auto text-center mb-14">
                  <p className="eyebrow">
                    {lang === 'en' ? 'Two Reservation Options' : lang === 'es' ? 'Dos Modalidades de Reserva' : 'Deux Organisations de Réservation'}
                  </p>
                  <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl mt-1">
                    {lang === 'en'
                      ? 'Choose the arrangement tailored to your property'
                      : lang === 'es'
                      ? 'Elija la modalidad adaptada a su propiedad'
                      : 'Deux modalités claires selon votre organisation'}
                  </h2>
                  <p className="text-sm font-light text-ink-soft mt-2">
                    {lang === 'en'
                      ? 'Whether you prefer to manage your reservations yourself or entrust them to Solveig’s Prestige Services.'
                      : lang === 'es'
                      ? 'Tanto si prefiere gestionar directamente sus reservas como si desea confiarlas a Solveig’s Prestige Services.'
                      : 'Que vous souhaitiez gérer directement vos réservations ou les confier à Solveig’s Prestige Services.'}
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                  {/* Option 1 */}
                  <div className="rounded-[2.2rem] border border-ink/10 bg-white p-7 sm:p-9 shadow-sm flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1 text-[11px] font-semibold text-ink-soft">
                        Option 01
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-ink">
                        {lang === 'en'
                          ? 'Reservations Managed Directly by the Owner'
                          : lang === 'es'
                          ? 'Reservas Gestionadas Directamente por el Propietario'
                          : 'Réservations Gérées Directement par le Propriétaire'}
                      </h3>
                      <p className="text-xs sm:text-sm font-light text-ink-soft leading-relaxed">
                        {lang === 'en'
                          ? 'You manage your own calendar and guest bookings directly: we step in on site in Marbella and Mijas for guest welcome and property follow-up.'
                          : lang === 'es'
                          ? 'Usted gestiona directamente su calendario y sus reservas: nosotros intervenimos en el lugar para recibir a sus huéspedes y cuidar de la propiedad.'
                          : 'Vous conservez la gestion directe de vos annonces et de votre calendrier : nous intervenons sur place à Marbella et Mijas pour accueillir vos hôtes et veiller sur votre bien.'}
                      </p>

                      <ul className="space-y-3 pt-3 border-t border-ink/5 text-xs sm:text-sm text-ink-soft">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>
                            {lang === 'en'
                              ? 'In-person guest welcome and key handover upon arrival'
                              : lang === 'es'
                              ? 'Recepción presencial y entrega de llaves a la llegada'
                              : 'Accueil physique en personne et remise des clés à l’arrivée'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>
                            {lang === 'en'
                              ? 'Attentive check-in and check-out inspection with photos'
                              : lang === 'es'
                              ? 'Revisión de entrada y salida con reportaje fotográfico'
                              : 'État des lieux d’entrée et de sortie attentif avec photos'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>
                            {lang === 'en'
                              ? 'Coordination of departure cleaning and property preparation'
                              : lang === 'es'
                              ? 'Coordinación de la limpieza de salida y preparación de la villa'
                              : 'Coordination du ménage de départ et remise en ordre de la villa'}
                          </span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href={waLink(
                        lang === 'en'
                          ? 'Hello Solveig, I would like to discuss Option 1 (Reservations managed by the owner).'
                          : lang === 'es'
                          ? 'Hola Solveig, deseo información sobre la Opción 1 (Reservas gestionadas por el propietario).'
                          : 'Bonjour Solveig, je souhaite échanger sur l’Option 1 (Réservations gérées par le propriétaire).'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full"
                    >
                      <WhatsAppIcon />
                      <span>{lang === 'en' ? 'Inquire about Option 1' : lang === 'es' ? 'Consultar Opción 1' : 'Échanger sur l’Option 1'}</span>
                    </a>
                  </div>

                  {/* Option 2 */}
                  <div className="rounded-[2.2rem] border-2 border-bronze bg-white p-7 sm:p-9 shadow-md flex flex-col justify-between space-y-6 relative">
                    <div className="space-y-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1 text-[11px] font-semibold text-bronze-deep">
                        Option 02
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-ink">
                        {lang === 'en'
                          ? 'Reservations Managed by Solveig’s Prestige Services'
                          : lang === 'es'
                          ? 'Reservas Gestionadas por Solveig’s Prestige Services'
                          : 'Réservations Gérées par Solveig’s Prestige Services'}
                      </h3>
                      <p className="text-xs sm:text-sm font-light text-ink-soft leading-relaxed">
                        {lang === 'en'
                          ? 'You entrust your seasonal rental reservations to Solveig’s Prestige Services: we coordinate both the bookings and the complete on-site follow-up.'
                          : lang === 'es'
                          ? 'Usted confía las reservas de su propiedad a Solveig’s Prestige Services: coordinamos tanto las reservas como el seguimiento completo en el lugar.'
                          : 'Vous confiez la gestion de vos réservations à Solveig’s Prestige Services : nous coordonnons les séjours ainsi que l’ensemble de l’accueil et du suivi sur place.'}
                      </p>

                      <ul className="space-y-3 pt-3 border-t border-ink/5 text-xs sm:text-sm text-ink-soft">
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>
                            {lang === 'en'
                              ? 'Presentation of your property and careful selection of guests'
                              : lang === 'es'
                              ? 'Presentación de su propiedad y selección cuidadosa de los viajeros'
                              : 'Présentation soignée de votre bien et sélection attentive des voyageurs'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>
                            {lang === 'en'
                              ? 'Coordination of reservations while preserving your personal dates'
                              : lang === 'es'
                              ? 'Organización de las reservas respetando siempre sus fechas personales'
                              : 'Organisation des réservations tout en préservant vos dates personnelles'}
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-bronze shrink-0 mt-0.5" />
                          <span>
                            {lang === 'en'
                              ? 'In-person welcome, check-in/check-out, and 7/7 guest assistance'
                              : lang === 'es'
                              ? 'Bienvenida en persona, revisión de entrada/salida y asistencia 7/7'
                              : 'Accueil en personne, états des lieux et accompagnement 7/7 des hôtes'}
                          </span>
                        </li>
                      </ul>
                    </div>

                    <a
                      href={waLink(
                        lang === 'en'
                          ? 'Hello Solveig, I would like to discuss Option 2 (Reservations managed by Solveig’s Prestige Services).'
                          : lang === 'es'
                          ? 'Hola Solveig, deseo información sobre la Opción 2 (Reservas gestionadas por Solveig’s Prestige Services).'
                          : 'Bonjour Solveig, je souhaite échanger sur l’Option 2 (Réservations gérées par Solveig’s Prestige Services).'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full"
                    >
                      <WhatsAppIcon />
                      <span>{lang === 'en' ? 'Inquire about Option 2' : lang === 'es' ? 'Consultar Opción 2' : 'Échanger sur l’Option 2'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CAS PROPERTY MANAGEMENT : LES 4 PILIERS DE L'INTENDANCE */}
          {content.pillars && (
            <section className="border-t border-ink/5 bg-travertine py-20">
              <div className="container-site">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <p className="eyebrow">
                    {lang === 'en' ? 'Property Care' : lang === 'es' ? 'Cuidado de su Propiedad' : 'Intendance sur Mesure'}
                  </p>
                  <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl mt-1">
                    {lang === 'en'
                      ? 'The 4 Pillars of Our Estate Care'
                      : lang === 'es'
                      ? 'Los 4 Pilares de Nuestra Gestión'
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

          {/* GALERIE PHOTOGRAPHIQUE INSPIRATIONNELLE DU CHEF (SANS BOUTONS DE COMMANDE NI PRIX NI FICHES PRODUITS) */}
          {serviceId === 'chef-a-domicile' && content.galleryImages && (
            <section className="border-t border-ink/5 bg-sand py-20">
              <div className="container-site">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                  <div>
                    <p className="eyebrow">
                      {lang === 'en' ? 'Photographic Gallery' : lang === 'es' ? 'Galería Fotográfica' : 'Galerie Photographique'}
                    </p>
                    <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl mt-1">
                      {lang === 'en'
                        ? 'Authentic Creations & Private Tables by Dominique Hybord'
                        : lang === 'es'
                        ? 'Creaciones Auténticas y Mesas Privadas de Dominique Hybord'
                        : 'Les créations authentiques et tables dressées de Dominique Hybord'}
                    </h2>
                  </div>
                  <p className="text-xs text-ink-muted">
                    {lang === 'en'
                      ? 'Click any photograph to enlarge.'
                      : lang === 'es'
                      ? 'Haga clic en cualquier fotografía para ampliar.'
                      : 'Cliquez sur une photographie pour l’agrandir.'}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
                  {content.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setLightboxImg(img.url)}
                      className="group relative aspect-square overflow-hidden rounded-2xl border border-ink/10 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                      aria-label={img.caption}
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/25">
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

          {/* PRESTATIONS & FAQS */}
          {(content.inclusions || content.faqs) && (
            <section className="border-t border-ink/5 bg-travertine py-20">
              <div className="container-site grid lg:grid-cols-12 gap-12 items-start">
                {content.inclusions && (
                  <div className={content.faqs ? 'lg:col-span-5 rounded-[2.2rem] border border-ink/10 bg-white p-7 sm:p-9 shadow-sm' : 'lg:col-span-8 lg:col-start-3 rounded-[2.2rem] border border-ink/10 bg-white p-7 sm:p-9 shadow-sm'}>
                    <p className="eyebrow">
                      {lang === 'en' ? 'Tailored Approach' : lang === 'es' ? 'Acompañamiento a Medida' : 'Accompagnement sur Mesure'}
                    </p>
                    <h3 className="font-serif text-2xl font-medium text-ink mt-1 mb-6">
                      {lang === 'en'
                        ? 'Key points of our service'
                        : lang === 'es'
                        ? 'Puntos clave de nuestro servicio'
                        : 'Les points essentiels de l’accompagnement'}
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
                  ? 'Privileged Contact'
                  : lang === 'es'
                  ? 'Contacto Privilegiado'
                  : 'Premier Échange Privilégié'}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ink">
                {lang === 'en'
                  ? 'Discuss your needs directly with Solveig.'
                  : lang === 'es'
                  ? 'Hable directamente de sus necesidades con Solveig.'
                  : 'Échangez directement de vos besoins avec Solveig.'}
              </h2>
              <p className="text-sm sm:text-base font-light text-ink-soft leading-relaxed max-w-xl mx-auto">
                {lang === 'en'
                  ? 'Contact Solveig Hybord for a confidential discussion regarding your property or stay in Marbella and Mijas.'
                  : lang === 'es'
                  ? 'Contacte con Solveig Hybord para una conversación confidencial sobre su propiedad o estancia en Marbella y Mijas.'
                  : 'Contactez Solveig Hybord pour un échange confidentiel et personnalisé autour de votre propriété ou de votre séjour à Marbella et Mijas.'}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={waLink(content.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  <WhatsAppIcon />
                  <span>{whatsappButtonLabel}</span>
                </a>

                <button onClick={onBack} className="btn-secondary w-full sm:w-auto">
                  <ArrowLeft className="h-4 w-4" />
                  <span>
                    {lang === 'en'
                      ? 'Back to all services'
                      : lang === 'es'
                      ? 'Volver a los servicios'
                      : 'Retour aux services'}
                  </span>
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Pied de page global du site */}
      <Footer />

      <Lightbox
        src={lightboxImg}
        alt="Photographie agrandie"
        onClose={() => setLightboxImg(null)}
      />
    </div>
  );
};
