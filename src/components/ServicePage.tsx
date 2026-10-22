import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Check,
  ShieldCheck,
  Star,
  MessageCircle,
  Phone,
  Clock,
  Sparkles,
  FileText,
  ChevronDown
} from 'lucide-react';

interface ServicePageProps {
  serviceId: string;
  onBack: () => void;
}

interface ServiceContent {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  tagline: string;
  heroImage: string;
  heroDescription: string;
  whatsappMessage: string;
  stats: { value: string; label: string }[];
  pillars: {
    title: string;
    desc: string;
    icon: 'shield' | 'clock' | 'star' | 'file';
    details: string[];
  }[];
  processSteps: {
    step: string;
    title: string;
    desc: string;
  }[];
  inclusions: string[];
  galleryImages: { url: string; caption: string }[];
  faqs: { q: string; a: string }[];
}

const servicesDatabase: Record<string, ServiceContent> = {
  'property-management': {
    id: 'property-management',
    badge: 'Intendance Privée & Domaine · Marbella & Mijas',
    title: 'Property Management',
    subtitle: 'Votre maison, entre de bonnes mains même lorsque vous êtes loin',
    tagline: '« La tranquillité commence par savoir que quelqu’un veille réellement sur votre bien. »',
    heroImage: '/property-management-charm.jpg',
    heroDescription:
      'Posséder une villa de prestige sur la Costa del Sol doit demeurer un privilège sans contrainte. Solveig’s Prestige Service prend en charge l’intendance complète, la surveillance attentive et la coordination des prestataires de votre bien. À chaque visite, un compte-rendu clair et détaillé avec photos HD vous est adressé directement sur WhatsApp ou email.',
    whatsappMessage: 'Bonjour Solveig, je souhaite échanger à propos de la gestion de ma villa sur la Costa del Sol.',
    stats: [
      { value: '30+', label: 'Ans d’expérience et d’exigence' },
      { value: '100%', label: 'Comptes-rendus détaillés avec photos HD' },
      { value: '24/7', label: 'Disponibilité & veille active' },
      { value: '0 €', label: 'Surcoût caché sur les artisans' },
    ],
    pillars: [
      {
        title: 'Surveillance Attentive & Présence Régulière',
        desc: 'Visites périodiques approfondies de l’ensemble de vos espaces intérieurs et extérieurs.',
        icon: 'shield',
        details: [
          'Contrôle complet des systèmes de climatisation, chauffage et ventilation',
          'Vérification soignée de la plomberie, suppression des odeurs de siphons et détection de fuites',
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
          'Présence physique sur place lors des interventions et vérification soignée des travaux finis',
          'Vérification attentive des devis et factures pour vous éviter toute surfacturation',
          'Planification préventive des révisions annuelles (pompes à chaleur, portails, climatisation)',
        ],
      },
      {
        title: 'Protocole d’Arrivée VIP Propriétaire',
        desc: 'Votre villa prête à vous accueillir dans un confort absolu à chaque séjour.',
        icon: 'star',
        details: [
          'Mise en température des pièces 24h avant votre arrivée (chauffage ou climatisation)',
          'Aération complète et diffusion de fragrances d’ambiance subtiles',
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
          'Gestion du courrier et des réceptions de colis en votre absence',
          'Visite de contrôle renforcée après chaque épisode météorologique majeur (tempête, fortes pluies)',
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
        title: 'Définition du Cahier des Charges',
        desc: 'Nous adaptons la fréquence des visites (hebdomadaire, bi-mensuelle) et la liste de nos interventions à votre calendrier.',
      },
      {
        step: '03',
        title: 'Intendance Active & Rapports Réguliers',
        desc: 'Chaque semaine, vous recevez un compte-rendu précis avec photos HD attestant du parfait état de votre domaine.',
      },
      {
        step: '04',
        title: 'Accueil & Préparation Sur-Mesure',
        desc: 'À chacun de vos séjours, vous n’avez qu’à poser vos valises et savourer l’art de vivre méditerranéen.',
      },
    ],
    inclusions: [
      'Visites d’inspection régulières avec compte-rendu photographique',
      'Accès direct WhatsApp avec Solveig et l’équipe de gestion',
      'Gestion et paiement sécurisé des charges courantes et prestataires',
      'Vérification après intempéries et tempêtes côtières',
      'Mise en température et aération pré-séjour',
      'Courses d’arrivée personnalisées (produits frais, vins, petit-déjeuner)',
      'Coordination du pisciniste et des jardiniers paysagistes',
      'Gardiennage et surveillance discrète',
    ],
    galleryImages: [
      { url: '/property-management-charm.jpg', caption: 'Domaine de caractère à Marbella' },
      { url: '/cortijo-charme-marbella.jpg', caption: 'Patio andalou traditionnel fleuri' },
      { url: '/about-villa-charm.jpg', caption: 'Demeure de charme entourée d’oliviers' },
    ],
    faqs: [
      {
        q: 'À quelle fréquence les visites d’inspection sont-elles effectuées ?',
        a: 'En fonction de la formule choisie, nous intervenons chaque semaine ou toutes les deux semaines. En cas d’intempéries ou d’alerte météo sur la Costa del Sol, une visite de contrôle supplémentaire est effectuée automatiquement et sans frais.',
      },
      {
        q: 'Comment nous informez-vous de l’état de la propriété ?',
        a: 'Après chaque visite, vous recevez un rapport synthétique clair et structuré accompagné de photos et de vidéos courtes sur WhatsApp ou par email, détaillant chaque point inspecté (jardin, piscine, toiture, compteurs, climatisation).',
      },
      {
        q: 'Pouvez-vous superviser de gros travaux ou des rénovations ?',
        a: 'Absolument. Nous travaillons avec des artisans et entrepreneurs de confiance à Marbella et Mijas. Nous supervisons le planning des travaux, assurons le suivi de chantier hebdomadaire et vous envoyons des photos d’avancement.',
      },
    ],
  },

  'concierge-services': {
    id: 'concierge-services',
    badge: 'Conciergerie Privée & Lifestyle 24/7 · Costa del Sol',
    title: 'Concierge Services',
    subtitle: 'Le sens du détail, sans jamais en faire trop',
    tagline: '« Le vrai luxe est souvent invisible : quelqu’un a déjà pensé au détail avant même que vous le demandiez. »',
    heroImage: '/candidates/option1_yacht.jpg',
    heroDescription:
      'Une présence locale pour rendre les séjours plus fluides et les demandes plus simples, avec discrétion. Obtenir une table d’exception à Puente Romano, réserver un yacht privé pour une échappée en mer au crépuscule ou disposer d’un chauffeur d’élite dès la sortie de votre avion : Solveig’s Prestige Service anticipe chaque instant pour vous offrir une sérénité absolue.',
    whatsappMessage: 'Bonjour Solveig, je souhaiterais solliciter vos services de conciergerie privée pour mon séjour à Marbella.',
    stats: [
      { value: '24/7', label: 'Ligne directe propriétaire' },
      { value: '< 15 min', label: 'Temps moyen de réponse WhatsApp' },
      { value: '100%', label: 'Discrétion et secret professionnel' },
      { value: 'VIP', label: 'Accès privilégié aux tables & beach clubs' },
    ],
    pillars: [
      {
        title: 'Mobilité & Chauffeurs Privés VIP',
        desc: 'Accueil direct tarmac et déplacements d’exception en berlines et vans de luxe.',
        icon: 'star',
        details: [
          'Accueil personnalisé à l’aéroport de Malaga (AGP) ou Gibraltar avec pancarte nominative',
          'Flotte de Mercedes Classe S, Maybach et Classe V haut de gamme',
          'Chauffeurs privés bilingues, discrets et fins connaisseurs de la Costa del Sol',
          'Mise à disposition à la journée ou transferts ponctuels',
        ],
      },
      {
        title: 'Tables Étoilées & Beach Clubs Inaccessibles',
        desc: 'Accès prioritaire aux adresses les plus courues de Marbella et Puerto Banús.',
        icon: 'clock',
        details: [
          'Réservations prioritaires aux restaurants étoilés (Dani García, Skina, El Lago)',
          'Lits balinais et tables VIP aux beach clubs prisés (La Cabane, Nikki Beach, Ocean Club)',
          'Conseils personnalisés selon l’ambiance recherchée (famille, fête, intimité)',
          'Organisation d’événements privés et soirées sous les étoiles',
        ],
      },
      {
        title: 'Yacht Charter & Expériences Maritimes',
        desc: 'Des journées inoubliables sur la Méditerranée avec équipage dévoué.',
        icon: 'shield',
        details: [
          'Location à la journée ou au week-end de yachts de 15 à 45 mètres au départ de Puerto Banús',
          'Itinéraires sur-mesure vers les criques de Cabopino, Gibraltar ou les côtes marocaines',
          'Catering raffiné à bord, champagne millésimé et équipage attentionné',
          'Activités nautiques : seabob, jet-ski, paddle et baignade dans les eaux cristallines',
        ],
      },
      {
        title: 'Bien-Être & Personnel de Maison en Villa',
        desc: 'Une équipe de confiance déployée au sein de votre propriété.',
        icon: 'file',
        details: [
          'Masseurs et thérapeutes professionnels pour soins en terrasse ou au bord de la piscine',
          'Coachs sportifs privés (yoga, pilates, tennis, padel) à domicile',
          'Gouvernantes, lingères et personnel de maison formés aux plus hauts standards',
          'Garde d’enfants qualifiée et bilingue pour vos soirées en toute sérénité',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Briefing Personnalisé',
        desc: 'Avant votre arrivée ou au fil de votre séjour, vous nous partagez vos envies et exigences via WhatsApp.',
      },
      {
        step: '02',
        title: 'Organisation & Confirmation',
        desc: 'Nous activons notre réseau exclusif pour réserver vos accès prioritaires et coordonner la logistique.',
      },
      {
        step: '03',
        title: 'Exécution d’Excellence',
        desc: 'Vous profitez de chaque moment sans attente, avec l’assurance d’un accueil d’exception.',
      },
      {
        step: '04',
        title: 'Assistance Continue',
        desc: 'Un changement de programme ? Une envie de dernière minute ? Nous réajustons tout instantanément.',
      },
    ],
    inclusions: [
      'Ligne de conciergerie privée WhatsApp dédiée 7j/7',
      'Réservations de tables VIP et beach clubs sans liste d’attente',
      'Organisation de croisières en yacht avec skipper privé',
      'Transferts aéroport et chauffeurs d’élite',
      'Séances de massages, yoga et coaching sportif en villa',
      'Baby-sitting bilingue de confiance',
      'Organisation de réceptions d’anniversaire ou dîners festifs privés',
      'Approvisionnement en grands crus, cigares et produits d’exception',
    ],
    galleryImages: [
      { url: '/candidates/option1_yacht.jpg', caption: 'Yacht charter privé au coucher de soleil à Puerto Banús' },
      { url: '/concierge-yacht-vip.jpg', caption: 'Journées en mer et expériences maritimes exclusives' },
      { url: '/candidates/option3_chauffeur.jpg', caption: 'Chauffeur d’élite et accueil aéroport' },
    ],
    faqs: [
      {
        q: 'Combien de temps à l’avance faut-il faire une demande ?',
        a: 'Nous traitons les demandes de dernière minute avec une grande réactivité (souvent en moins d’une heure). Toutefois, pour les tables les plus prisées en plein été (juillet/août) ou la location de grands yachts le week-end, une anticipation de quelques jours est appréciée.',
      },
      {
        q: 'Comment s’effectue le règlement des prestations de conciergerie ?',
        a: 'En toute transparence : nous refacturons les prestations de prestataires à prix coûtant sans marge dissimulée, accompagnées d’honoraires de conciergerie clairs préalablement validés avec vous.',
      },
      {
        q: 'Proposez-vous ce service pour les invités de ma villa ?',
        a: 'Absolument. Nous pouvons prendre en charge l’ensemble de vos invités pour leurs déplacements, loisirs et réservations, vous déchargeant ainsi de toute organisation.',
      },
    ],
  },

  'rental-management': {
    id: 'rental-management',
    badge: 'Gestion Locative Haute Gamme · Rendement & Sérénité',
    title: 'Rental Management',
    subtitle: 'Une expérience de séjour pensée avant même l’arrivée',
    tagline: '« Valoriser votre bien tout en préservant son intégrité, avec des hôtes choisis avec soin. »',
    heroImage: '/rental-management-charm.jpg',
    heroDescription:
      'Louer sa propriété d’exception sur la Costa del Sol doit s’accompagner d’une totale tranquillité d’esprit. Solveig’s Prestige Service vous propose deux formules modulables : soit la prise en charge exclusive sur place lorsque vous gérez vous-même vos réservations (accueil, état des lieux, blanchisserie et ménage 5 étoiles), soit une gestion locative intégrale clé en main avec sélection attentive des voyageurs, contrats et conciergerie dédiée.',
    whatsappMessage: 'Bonjour Solveig, je souhaite optimiser la location saisonnière de ma villa à Marbella.',
    stats: [
      { value: '100%', label: 'Voyageurs contrôlés et vérifiés' },
      { value: 'VIP', label: 'Accueil et suivi des voyageurs' },
      { value: '2 Formules', label: 'Gestion sur place ou clé en main' },
      { value: '0', label: 'Contrainte logistique pour le propriétaire' },
    ],
    pillars: [
      {
        title: 'Formule 1 : Réservations Gérées par Vous (Propriétaires)',
        desc: 'Vous pilotez vous-même vos réservations : nous assurons une intendance et un accueil irréprochables sur place.',
        icon: 'shield',
        details: [
          'Accueil physique soigné de vos voyageurs et remise en main propre des clés',
          'État des lieux d’entrée et de sortie minutieux avec reportage photo comparatif',
          
          'Ménage de départ approfondi et remise en beauté complète de la villa avant chaque séjour',
        ],
      },
      {
        title: 'Formule 2 : Gestion Locative Intégrale (Gérée par Nous)',
        desc: 'Délégation totale et sérénité absolue : nous prenons en charge la location de votre bien de A à Z.',
        icon: 'star',
        details: [
          'Création et mise en valeur de votre annonce sur les canaux de voyageurs haut de gamme',
          'Filtrage strict et sélection soignée des profils de familles et invités respectueux',
          'Gestion complète des réservations, contrats de séjour et dépôts de garantie',
          'Optimisation tarifaire selon la saisonnalité et les événements majeurs de la Costa del Sol',
        ],
      },
      {
        title: 'Accueil VIP en Personne & Présence Bienveillante',
        desc: 'Jamais de boîte à clés : chaque voyageur est reçu chaleureusement avec attention et égards.',
        icon: 'clock',
        details: [
          'Accueil physique chaleureux par l’équipe Solveig, visite guidée des équipements de la villa',
          
          'Assistance conciergerie locale dédiée aux locataires tout au long de leur séjour',
          'Disponibilité attentive en cas de besoin ou question durant le séjour',
        ],
      },
      {
        title: 'Gouvernance & Entretien de la Propriété',
        desc: 'Une propriété rendue dans un état d’hygiène et d’éclat irréprochable.',
        icon: 'file',
        details: [
          'Équipes de ménage professionnelles formées aux exigences de la belle hôtellerie',
        ],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Estimation & Choix de la Formule',
        desc: 'Nous évaluons vos besoins et convenons de la formule la plus adaptée : intendance d’accueil sur place ou gestion locative intégrale.',
      },
      {
        step: '02',
        title: 'Mise en Valeur & Shooting Photo HD',
        desc: 'Nous créons une annonce soignée et déployons la commercialisation sur les réseaux de voyageurs haut de gamme.',
      },
      {
        step: '03',
        title: 'Sélection & Accueil des Voyageurs',
        desc: 'Nous filtrons avec soin les profils de voyageurs et assurons l’accueil personnalisé en villa avec état des lieux.',
      },
      {
        step: '04',
        title: 'Rapport Financier & Versement',
        desc: 'Chaque mois, vous recevez un récapitulatif clair des séjours et vos revenus locatifs nets.',
      },
    ],
    inclusions: [
      'Choix entre Formule Sur-Place (accueil & intendance) ou Formule Clé en Main',
      'Sélection attentive et filtrage soigné des profils de voyageurs',
      'Gestion des cautions et formalités légales en Espagne',
      'Accueil physique personnalisé (Check-in VIP) et départ (Check-out)',
      
      'Ménage de départ et contrôles d’état des lieux méticuleux',
      'Assistance conciergerie 24/7 pour les hôtes en séjour',
      'Rapport financier mensuel clair et transparent',
    ],
    galleryImages: [
      { url: '/rental-management-charm.jpg', caption: 'Villa de vacances de charme avec vue mer panoramique' },
      { url: '/about-villa-charm.jpg', caption: 'Demeure andalouse idéale pour séjours familiaux' },
      { url: '/property-management-charm.jpg', caption: 'Espaces extérieurs de villégiature haut de gamme' },
    ],
    faqs: [
      {
        q: 'Puis-je continuer à profiter de ma villa quand je le souhaite ?',
        a: 'Tout à fait. Vous conservez la priorité totale sur votre calendrier. Vous nous indiquez simplement vos dates de présence personnelle, et nous bloquons ces périodes à la location pour préparer votre venue.',
      },
      {
        q: 'Que se passe-t-il en cas de dégradation par un locataire ?',
        a: 'Notre filtrage strict limite considérablement ce risque. Toutefois, si un incident survient, il est immédiatement relevé lors de l’état des lieux de sortie. Nous retenons les frais sur la caution bancaire et assurons la remise en état par nos artisans sans délai.',
      },
      {
        q: 'Quels sont vos honoraires de gestion locative ?',
        a: 'Nos honoraires dépendent de la formule choisie (forfait d’intendance d’accueil ou commission au pourcentage des loyers encaissés). Vous n’avez aucune commission fixe si votre villa n’est pas louée : nos intérêts sont 100% alignés avec les vôtres.',
      },
    ],
  },

  'chef-a-domicile': {
    id: 'chef-a-domicile',
    badge: 'Haute Gastronomie Privée · Dominique Hybord',
    title: 'Chef à Domicile',
    subtitle: 'La table d’un grand étoilé dans l’intimité exclusive de votre villa',
    tagline: '« 30 ans d’exigence gastronomique, saluée par le Guide Michelin et Gault & Millau. »',
    heroImage: '/chef-villa-gastro.jpg',
    heroDescription:
      'Offrez à vos proches une parenthèse gastronomique inoubliable sans quitter votre terrasse face à la mer. Formé dans les plus illustres maisons étoilées de France, le Chef Dominique Hybord compose des menus sur-mesure d’inspiration méditerranéenne, mariant la noblesse des produits de la mer à la chaleur du terroir andalou.',
    whatsappMessage: 'Bonjour Solveig, je souhaite organiser une expérience Chef à Domicile privée pour ma villa.',
    stats: [
      { value: '30+', label: 'Ans d’expérience gastronomique' },
      { value: 'Bib Michelin', label: 'Chef récompensé par le Guide Michelin' },
      { value: '2 Toques', label: 'Distinction Gault & Millau' },
      { value: '100%', label: 'Cuisine remise en état impeccable' },
    ],
    pillars: [
      {
        title: 'Menu Sur-Mesure en Dialogue Ouvert',
        desc: 'Un échange direct avec le Chef pour composer un menu adapté à vos goûts, vos envies et votre budget.',
        icon: 'star',
        details: [
          'Échange préalable pour définir le menu, vos goûts et le cadre de la prestation',
          'Inspiration terre-mer méditerranéenne alliant fraîcheur iodée et générosité d’auteur',
          'Choix entre menu gastronomique 4 à 7 temps, déjeuner d’été décontracté ou réception festive',
          
        ],
      },
      {
        title: 'Approvisionnement d’Exception & Produits Nobles',
        desc: 'Une sélection attentive auprès des meilleurs producteurs et criées locales.',
        icon: 'shield',
        details: [
          'Pêche locale du jour débarquée à la criée (bar de ligne, dorade royale, gambas rouges)',
          'Viandes maturées d’exception et agneau fermier élevé en plein air',
          'Légumes et herbes biologiques cueillis à maturité dans l’arrière-pays andalou',
          'Huiles d’olive extra vierge de première pression à froid et épices rares',
        ],
      },
      {
        title: 'Service Attentionné & Remise en État Complète',
        desc: 'Profitez de vos invités ; nous nous chargeons de tout, du premier toast au dernier éclat.',
        icon: 'file',
        details: [
          'Service discret et prévenant au rythme naturel de votre tablée',
          'Vaisselle débarrassée au fur et à mesure sans jamais troubler vos conversations',
          'Nettoyage intégral et remise en état parfaite de la cuisine en fin de prestation',
          'Plan de travail et four impeccables, poubelles évacuées : la magie d’une grande table chez soi',
        ],
      },
    ],
    processSteps: [
      {
        step: '17:00',
        title: 'Arrivée Discrète & Mise en Place',
        desc: 'Le chef arrive dans votre villa avec les produits frais du jour et prend possession des lieux en toute discrétion.',
      },
      {
        step: '19:30',
        title: 'Dressage de la Table & Amuse-Bouches',
        desc: 'Mise en place raffinée de la table, bougies allumées et premières bouchées apéritives servies à vos convives.',
      },
      {
        step: '20:30',
        title: 'Service Gastronomique à l’Assiette',
        desc: 'Enchaînement harmonieux des plats, dressés minute sous vos yeux avec explications passionnées du chef.',
      },
      {
        step: '23:00',
        title: 'Cuisine Étincelante & Départ',
        desc: 'La cuisine est entièrement nettoyée et briquée. Vous poursuivez votre soirée dans la sérénité la plus totale.',
      },
    ],
    inclusions: [
      'Conception d’un menu sur-mesure imaginé en direct avec le chef selon votre budget',
      'Sélection soignée des ingrédients nobles le matin même',
      'Préparation, cuissons minute et dressage dans votre cuisine',
      'Service à table assuré par le chef et une personne dédiée au service',
      'Nettoyage et remise en état intégrale de la cuisine',
      '',
      '',
    ],
    galleryImages: [
      { url: '/archives-cuisine/2022-10-05 12.42.03.jpg', caption: 'Noisette d’agneau rôtie & jus corsé au thym' },
      { url: '/archives-cuisine/2023-09-12 13.09.35.jpg', caption: 'Dressage d’exception & finesse botanique' },
      { url: '/archives-cuisine/2018-01-21 08.25.03.jpg', caption: 'L’Art de la table et ambiance festive' },
      { url: '/archives-cuisine/2017-12-01 19.51.19.jpg', caption: 'Création du Chef' },
      { url: '/archives-cuisine/2015-09-16 11.01.18.jpg', caption: 'Cuisine gastronomique' },
      { url: '/archives-cuisine/2015-09-16 11.01.56.jpg', caption: 'Création du Chef' },
      { url: '/archives-cuisine/2016-07-21 21.02.39.jpg', caption: 'Dressage à l’assiette' },
      { url: '/archives-cuisine/2016-12-07 13.01.27.jpg', caption: 'Cuisine gastronomique' },
      { url: '/archives-cuisine/2017-11-29 13.03.41.jpg', caption: 'Création du Chef' },
      { url: '/archives-cuisine/2018-01-14 13.48.44.jpg', caption: 'Dressage à l’assiette' },
      { url: '/archives-cuisine/2018-01-14 13.49.22-1-2.jpg', caption: 'Création du Chef' },
      { url: '/archives-cuisine/2018-01-14 13.49.22-1-3.jpg', caption: 'Cuisine gastronomique' },
      { url: '/archives-cuisine/2018-07-05 09.54.41.jpg', caption: 'Création du Chef' },
      { url: '/archives-cuisine/2019-02-14 21.11.08.jpg', caption: 'Dressage à l’assiette' },
      { url: '/archives-cuisine/2024-01-23 16.31.12.jpg', caption: 'Cuisine gastronomique' },
    ],
    faqs: [
      {
        q: 'Ma cuisine de villa est-elle adaptée pour une prestation de chef ?',
        a: 'Oui, tout à fait. Le Chef Dominique Hybord apporte son propre matériel professionnel (couteaux d’orfèvre, casseroles adaptées, mandolines, thermo-plongeur). Une plaque de cuisson, un four et un réfrigérateur standard suffisent amplement.',
      },
      {
        q: 'Jusqu’à combien de convives le chef peut-il régaler ?',
        a: 'Le Chef intervient pour des tables de 6 à 15 personnes, accompagné d’une personne dédiée au service.',
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

  const whatsappUrl = `https://wa.me/34623626724?text=${encodeURIComponent(content.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-[#111f25] text-white selection:bg-[#c29a52]/40 selection:text-white">
      {/* STICKY TOP NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-[#0e1a1f]/95 backdrop-blur-md border-b border-gold-border/20 py-3.5 px-4 sm:px-8 lg:px-12 transition-all">
        <div className="max-w-[1560px] mx-auto flex items-center justify-between">
          {/* Back button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 bg-black/40 hover:bg-[#c29a52]/20 hover:border-[#f1d291] text-xs sm:text-sm font-semibold text-white/90 hover:text-[#fbe8b5] transition-all group shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#edd088]" />
            <span>Retour à l’accueil</span>
          </button>

          {/* Center Brand Identity */}
          <div className="flex flex-col text-center">
            <span className="font-serif text-base sm:text-xl font-normal tracking-[0.16em] text-white leading-none">
              SOLVEIG’S
            </span>
            <span className="text-[7px] sm:text-[8.5px] font-bold tracking-[0.3em] text-[#edd088] uppercase mt-0.5">
              PRESTIGE SERVICE
            </span>
          </div>

          {/* Quick WhatsApp Action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#25D366] hover:bg-[#20b858] text-black text-xs font-bold shadow-md shadow-[#25D366]/20 transition-all hover:scale-105"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">WhatsApp Direct</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-8 lg:px-12">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c29a52]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#4f7f80]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-border/40 bg-[#c29a52]/10 text-[#fbe8b5] text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#edd088]" />
              {content.badge}
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-white">
              {content.title} <br />
              <span className="italic text-[#edd088] text-3xl sm:text-4xl lg:text-5xl">
                {content.subtitle}
              </span>
            </h1>

            <p className="text-base sm:text-lg font-serif italic text-[#edd088]/90">
              {content.tagline}
            </p>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
              {content.heroDescription}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 sm:gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black font-semibold text-xs sm:text-sm shadow-xl shadow-gold/20 hover:scale-105 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Échanger avec Solveig sur WhatsApp</span>
              </a>

              <a
                href="tel:+34623626724"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#edd088]" />
                <span>+34 623 626 724</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/10">
              {content.stats.map((s, idx) => (
                <div key={idx} className="p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="font-serif text-lg sm:text-2xl font-bold text-[#fbe8b5] leading-tight">
                    {s.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-white/70 mt-1 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-gold-border/40 shadow-2xl bg-black/50 group">
              <div className="relative h-[320px] sm:h-[460px] overflow-hidden">
                <img
                  src={content.heroImage}
                  alt={content.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-[#c29a52]/40">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#c29a52]/20 border border-[#c29a52]/50 flex items-center justify-center text-[#edd088] shrink-0">
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white leading-tight">
                        Excellence certifiée Solveig’s Prestige
                      </p>
                      <p className="text-[10px] text-white/70 mt-0.5">
                        Interventions discrètes & confidentielles à Marbella et Mijas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 CORE PILLARS / PRESTIGE DETAILS */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-[#0c171b]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#edd088]">
              Standards d’Excellence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium mt-1">
              {serviceId === 'chef-a-domicile' ? 'Les 3 Piliers de Notre Protocole' : 'Les 4 Piliers de Notre Protocole'}
            </h2>
            <p className="text-xs sm:text-sm text-white/70 mt-2">
              Chaque détail est anticipé pour vous délivrer un accompagnement sur-mesure d’exception.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {content.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#13232a] border border-gold-border/30 hover:border-gold-border transition-all duration-300 shadow-xl group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#c29a52]/15 border border-[#c29a52]/40 flex items-center justify-center text-[#fbe8b5] group-hover:scale-110 transition-transform">
                    {pillar.icon === 'shield' && <ShieldCheck className="w-6 h-6" />}
                    {pillar.icon === 'clock' && <Clock className="w-6 h-6" />}
                    {pillar.icon === 'star' && <Star className="w-6 h-6" />}
                    {pillar.icon === 'file' && <FileText className="w-6 h-6" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#edd088]">
                      Pilier 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-medium leading-tight">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/75 mb-5 font-light leading-relaxed">
                  {pillar.desc}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-white/10">
                  {pillar.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs text-white/85">
                      <div className="w-4 h-4 rounded-full bg-[#c29a52]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#edd088]">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {serviceId !== 'chef-a-domicile' && (
      <>
      {/* PROCESS TIMELINE */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-[#101e24]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#edd088]">
              Méthodologie & Déroulement
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium mt-1">
              Comment se déroule notre intervention
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#edd088]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#c29a52]/50 mb-3">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-white text-base sm:text-lg mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
      )}

      {serviceId !== 'rental-management' && (
      <>
      {/* PHOTO GALLERY */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-[#0c171b]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#edd088]">
                Galerie Visuelle
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium mt-1">
                L’Art de Vivre en Images
              </h2>
            </div>
            <p className="text-xs text-white/70 max-w-md">
              Des décors d’exception et un soin maniaque apporté à chaque espace confié à notre intendance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImg(img.url)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 hover:border-[#edd088] shadow-xl bg-black/40 h-64 sm:h-80"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-sm sm:text-base text-white font-medium">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
      )}

      {/* INCLUSIONS & FAQ */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-[#101e24]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
          {/* Inclusions List (5 Cols) */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-3xl bg-[#14242b] border border-gold-border/40 shadow-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#edd088]">
              Prestations Incluses
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mt-1 mb-6">
              Ce qui est compris dans notre accompagnement
            </h3>
            <ul className="space-y-3.5">
              {content.inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/85">
                  <div className="w-5 h-5 rounded-full bg-[#c29a52]/20 border border-[#c29a52]/50 flex items-center justify-center shrink-0 mt-0.5 text-[#fbe8b5]">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQs Accordion (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#edd088] mb-1">
              Questions Fréquentes
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-white font-medium mb-6">
              Tout ce que vous devez savoir
            </h3>

            <div className="space-y-3">
              {content.faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 hover:text-[#fbe8b5] transition-colors"
                    >
                      <span className="font-medium text-sm sm:text-base text-white">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#edd088] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/75 leading-relaxed font-light border-t border-white/5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#101e24] to-[#0a1418] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-border/40 bg-[#c29a52]/10 text-[#fbe8b5] text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#edd088]" />
            Votre Villa Mérite l’Excellence
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium leading-tight">
            Offrez à votre domaine l’intendance qu’il mérite.
          </h2>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light max-w-xl mx-auto">
            Contactez Solveig Hybord dès aujourd’hui pour une étude confidentielle et sans engagement de vos besoins sur Marbella ou Mijas.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-black font-semibold text-sm shadow-xl shadow-[#25D366]/20 hover:scale-105 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contacter sur WhatsApp Direct</span>
            </a>

            <button
              onClick={onBack}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l’accueil</span>
            </button>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img src={lightboxImg} alt="Vue plein écran" className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-white/20 shadow-2xl" />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 text-white hover:text-[#fbe8b5] border border-white/20"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
