// Système d'internationalisation (i18n) professionnel pour Solveig’s Prestige Services
// Langues supportées : Français (défaut), English, Español

export type Language = 'fr' | 'en' | 'es';

export interface TranslationDictionary {
  lang: Language;
  nav: {
    services: string;
    chef: string;
    territory: string;
    about: string;
    contact: string;
    morocco: string;
    moroccoShort: string;
    backToHome: string;
    backToCostaDelSol: string;
    whatsappCta: string;
    callCta: string;
  };
  hero: {
    locationTag: string;
    brandName: string;
    brandSubtitle: string;
    tagline: string;
    whatsappCta: string;
    exploreCta: string;
    scrollHint: string;
    slides: {
      title: string;
      caption: string;
    }[];
  };
  reassurance: {
    expValue: string;
    expLabel: string;
    michelinValue: string;
    michelinLabel: string;
    presenceValue: string;
    presenceLabel: string;
    discretionValue: string;
    discretionLabel: string;
  };
  servicesSection: {
    eyebrow: string;
    titleMain: string;
    titleItalic: string;
    description: string;
    discoverCta: string;
    items: Record<string, {
      title: string;
      category: string;
      summary: string;
      tagline: string;
      badge: string;
    }>;
  };
  chefSection: {
    eyebrow: string;
    titleMain: string;
    titleItalic: string;
    description: string;
    chefName: string;
    chefDistinction: string;
    legacyBadge: string;
    headline: string;
    biography: string;
    pillars: {
      title: string;
      desc: string;
    }[];
    experiencesTitle: string;
    experiencesSubtitle: string;
    experiences: {
      title: string;
      subtitle: string;
      desc: string;
      guests: string;
    }[];
    galleryEyebrow: string;
    galleryTitle: string;
    galleryHint: string;
    reserveCta: string;
    detailsCta: string;
    disclaimer: string;
  };
  territorySection: {
    eyebrow: string;
    titleMain: string;
    titleItalic: string;
    description: string;
    manifestoEyebrow: string;
    manifestoTitle: string;
    manifestoDesc: string;
    manifestoCta: string;
    coveredZones: string;
    zones: Record<string, {
      name: string;
      kicker: string;
      description: string;
      badge: string;
    }>;
  };
  aboutSection: {
    eyebrow: string;
    titleMain: string;
    titleItalic: string;
    paragraph1: string;
    paragraph2: string;
    quote: string;
    quoteAuthor: string;
    pressEyebrow: string;
    pressTitle: string;
    pressDesc: string;
    readArticle: string;
  };
  contactSection: {
    eyebrow: string;
    title: string;
    description: string;
    formEyebrow: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    serviceOptions: Record<string, string>;
    messageLabel: string;
    messagePlaceholder: string;
    submitCta: string;
    directWhatsApp: string;
    directCall: string;
    availability: string;
  };
  footer: {
    brandTagline: string;
    servicesColTitle: string;
    houseColTitle: string;
    contactColTitle: string;
    rightsReserved: string;
    locationNote: string;
    preFooterTitle: string;
    preFooterDesc: string;
    preFooterWhatsApp: string;
    preFooterCall: string;
    founderDirect: string;
    areasCovered: string;
    discretionNote: string;
    directWhatsApp: string;
  };
  moroccoPage: {
    topBadge: string;
    titleMain: string;
    titleItalic: string;
    description: string;
    waitlistCta: string;
    backCostaDelSol: string;
    destinationsEyebrow: string;
    destinationsTitle: string;
    destinationsSubtitle: string;
    deliveryEstimate: string;
    formEyebrow: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    phoneLabel: string;
    cityLabel: string;
    timeframeLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitCta: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  fr: {
    lang: 'fr',
    nav: {
      services: 'Services',
      chef: 'Chef à domicile',
      territory: 'Marbella & Mijas',
      about: 'La maison',
      contact: 'Contact',
      morocco: 'Univers Marocain · 2027',
      moroccoShort: 'Maroc 2027',
      backToHome: 'Retour à l’accueil',
      backToCostaDelSol: '🌴 Univers Costa del Sol',
      whatsappCta: 'Échanger avec Solveig',
      callCta: 'Appeler',
    },
    hero: {
      locationTag: 'Marbella & Mijas · Costa del Sol',
      brandName: 'SOLVEIG’S',
      brandSubtitle: 'PRESTIGE SERVICES',
      tagline: 'Une présence locale discrète pour des propriétés d’exception sur la Costa del Sol.',
      whatsappCta: 'Demande Confidentielle',
      exploreCta: 'Découvrir nos 4 services',
      scrollHint: 'Faites défiler pour explorer',
      slides: [
        {
          title: 'Villas d’Exception',
          caption: 'Golden Mile · Sierra Blanca · La Zagaleta',
        },
        {
          title: 'Intendance de Domaine',
          caption: 'Veille attentive et sérénité toute l’année',
        },
        {
          title: 'Moments Privilégiés',
          caption: 'Yacht charter, golf et conciergerie 7j/7',
        },
        {
          title: 'Art de Vivre Méditerranéen',
          caption: 'Vues plongeantes entre mer et montagne',
        },
        {
          title: 'Gestion Locative Haute Gamme',
          caption: 'Accueil VIP et valorisation soignée de votre bien',
        },
      ],
    },
    reassurance: {
      expValue: '30+ Ans',
      expLabel: 'D’exigence et de savoir-faire',
      michelinValue: 'Guide Michelin',
      michelinLabel: 'Bib Gourmand & 2 Toques Gault & Millau',
      presenceValue: '7j / 7',
      presenceLabel: 'Présence locale Marbella & Mijas',
      discretionValue: '100 %',
      discretionLabel: 'Discrétion et secret professionnel',
    },
    servicesSection: {
      eyebrow: 'Collection de Services',
      titleMain: 'L’art de vivre méditerranéen,',
      titleItalic: 'veillé dans les moindres détails.',
      description: 'Quatre expertises haut de gamme conçues pour préserver votre bien, fluidifier vos séjours et vous offrir une tranquillité absolue sur la Costa del Sol.',
      discoverCta: 'Découvrir la prestation complète',
      items: {
        'property-management': {
          title: 'Property Management',
          category: 'Intendance & Domaine',
          summary: 'Surveillance attentive de votre villa, gestion technique, coordination des artisans locaux et compte-rendu HD après chaque visite.',
          tagline: 'Votre maison, entre de bonnes mains même lorsque vous êtes loin.',
          badge: 'Veille active 365j / an',
        },
        'concierge-services': {
          title: 'Concierge Services 7/7',
          category: 'Conciergerie Privée & Lifestyle',
          summary: 'Une présence locale discrète pour rendre chaque séjour fluide : réservations prioritaires, golf, yacht privé à Puerto Banús ou chauffeur dédié.',
          tagline: 'Le sens du détail, sans jamais en faire trop.',
          badge: 'Ligne directe 7j / 7',
        },
        'rental-management': {
          title: 'Rental Management',
          category: 'Gestion Locative Haute Gamme',
          summary: 'Deux formules modulables : intendance et accueil soigné sur place pour vos propres réservations, ou gestion locative intégrale clé en main.',
          tagline: 'Valoriser votre bien tout en préservant son intégrité.',
          badge: '2 Formules sur-mesure',
        },
        'chef-a-domicile': {
          title: 'Chef à Domicile',
          category: 'Gastronomie Privée en Villa',
          summary: 'Le Chef Dominique Hybord imagine avec vous un menu sur mesure, cuisine dans votre villa et s’occupe de tout jusqu’au rangement étincelant.',
          tagline: '30 ans d’expérience, une cuisine sincère et le plaisir de recevoir.',
          badge: 'Chef Dominique Hybord',
        },
      },
    },
    chefSection: {
      eyebrow: 'Gastronomie en Villa Privée',
      titleMain: 'Le savoir-faire d’un grand chef,',
      titleItalic: 'dans l’intimité de votre table.',
      description: 'Recevez vos proches sans quitter votre villa. Le Chef Dominique Hybord imagine votre menu avec vous, sélectionne les plus beaux produits du matin et cuisine directement chez vous.',
      chefName: 'Chef Dominique Hybord',
      chefDistinction: 'Distinction Bib Gourmand du Guide Michelin · 2 Toques Gault & Millau',
      legacyBadge: '30 ans d’histoire culinaire',
      headline: 'Une cuisine d’auteur sincère, inspirée par la Méditerranée et les beaux produits.',
      biography: 'Formé auprès de grandes tables d’exception (dont Michel Rostang, 2 étoiles Michelin) puis récompensé au restaurant La Fleur de Sel par le Guide Michelin (Bib Gourmand) et le Gault & Millau (2 Toques), Dominique Hybord met aujourd’hui son exigence au service des plus belles demeures de Marbella et Mijas.',
      pillars: [
        {
          title: 'Menu imaginé avec vous',
          desc: 'Un échange préalable pour composer un menu adapté à vos goûts, à vos envies et à vos convives.',
        },
        {
          title: 'Produits nobles et de saison',
          desc: 'Pêche locale du jour, viandes sélectionnées, herbes fraîches et légumes cueillis à maturité.',
        },
        {
          title: 'Service & cuisine étincelante',
          desc: 'Service à table discret et prévenant. La cuisine est entièrement nettoyée et remise à neuf.',
        },
      ],
      experiencesTitle: 'Les Formats Culinaires Proposés',
      experiencesSubtitle: 'Des prestations sur mesure pensées pour chaque moment de votre séjour sur la Costa del Sol.',
      experiences: [
        {
          title: 'Dîner Gastronomique d’Auteur',
          subtitle: 'Le raffinement d’un menu dégustation en terrasse',
          desc: 'Un menu raffiné en 4 ou 5 temps, dressé minute sous vos yeux avec accords mets et vins sur demande. L’expérience d’une grande table privée sous les étoiles.',
          guests: 'De 6 à 15 convives',
        },
        {
          title: 'Déjeuner Méditerranéen & Plancha',
          subtitle: 'La fraîcheur au bord de la piscine',
          desc: 'Poissons nobles grillés à la plancha, gambas d’Andalousie, légumes marinés et desserts fruités de saison pour un moment décontracté et généreux.',
          guests: 'De 6 à 20 convives',
        },
        {
          title: 'Cocktail Dînatoire & Réception',
          subtitle: 'L’élégance pour vos réceptions privées',
          desc: 'Bouchées salées et sucrées raffinées servies au plateau, animations culinaires en direct et service attentionné pour célébrer un anniversaire ou un événement intime.',
          guests: 'De 10 à 35 convives',
        },
        {
          title: 'Chef Résident durant Votre Séjour',
          subtitle: 'Sérénité absolue jour après jour',
          desc: 'Prise en charge intégrale de vos petits-déjeuners gourmands, déjeuners légers et dîners festifs tout au long de votre villégiature.',
          guests: 'Sur devis personnalisé',
        },
      ],
      galleryEyebrow: 'Dans l’assiette',
      galleryTitle: 'Les créations du Chef Dominique Hybord',
      galleryHint: 'Cliquez sur une assiette pour l’agrandir en haute résolution.',
      reserveCta: 'Réserver un repas privé avec le Chef',
      detailsCta: 'Découvrir la prestation complète',
      disclaimer: 'Prestations sur mesure de 6 à 15 convives (ou sur devis). Réservation anticipée recommandée en haute saison.',
    },
    territorySection: {
      eyebrow: 'Ancrage Géographique',
      titleMain: 'La proximité locale',
      titleItalic: 'change tout.',
      description: 'Une présence physique permanente à Marbella et Mijas permet d’intervenir en quelques minutes, d’anticiper les imprévus et de mobiliser les meilleurs artisans locaux.',
      manifestoEyebrow: 'Présence Locale 7j/7',
      manifestoTitle: 'Du contrôle régulier de votre villa au moindre détail d’un séjour.',
      manifestoDesc: 'Que votre propriété soit située sur le Golden Mile de Marbella, dans le village blanc de Mijas Pueblo ou sur la côte à La Cala, Solveig’s Prestige Services est votre interlocuteur privilégié sur place.',
      manifestoCta: 'Vérifier mon secteur avec Solveig',
      coveredZones: 'Secteurs clés :',
      zones: {
        marbella: {
          name: 'Marbella',
          kicker: 'Le cœur international',
          description: 'Demeures andalouses de prestige, villas contemporaines du Golden Mile, Sierra Blanca, Nueva Andalucía et résidences privées de Puerto Banús.',
          badge: 'Golden Mile & Banús',
        },
        'mijas-pueblo': {
          name: 'Mijas Pueblo',
          kicker: 'L’Andalousie en hauteur',
          description: 'Maisons de charme blanchies à la chaux, cortijos de caractère, terrasses fleuries et panoramas plongeants sur toute la Méditerranée.',
          badge: 'Village Blanc d’Artistes',
        },
        'la-cala': {
          name: 'La Cala de Mijas',
          kicker: 'Le littoral vivant',
          description: 'Villas côtières les pieds dans l’eau, demeures familiales en front de mer et résidences baignées par la brise marine le long de la Senda Litoral.',
          badge: 'Plages & Art de Vivre',
        },
        calahonda: {
          name: 'Calahonda & Riviera del Sol',
          kicker: 'La côte résidentielle',
          description: 'Domaines paisibles nichés dans les pinèdes maritimes, villas avec jardins arborés et vues panoramiques sur les golfs réputés.',
          badge: 'Résidences & Golfs',
        },
      },
    },
    aboutSection: {
      eyebrow: 'Héritage & Savoir-Faire',
      titleMain: 'Trente ans d’exigence.',
      titleItalic: 'Une présence confidentielle.',
      paragraph1: 'Des prestigieuses maisons étoilées parisiennes (dont Michel Rostang, 2★ Michelin) aux distinctions du Guide Michelin (Bib Gourmand au restaurant La Fleur de Sel) et de Gault & Millau (2 Toques), Dominique et Solveig Hybord cultivent depuis plus de trois décennies un sens absolu du service.',
      paragraph2: 'Aujourd’hui installés entre Marbella et Mijas, ils orchestrent pour les propriétaires de résidences secondaires une intendance irréprochable, une conciergerie privée 7/7 et des dîners d’auteur en villa.',
      quote: '« Le véritable luxe ne s’impose pas : il se ressent dans la perfection invisible de chaque instant. »',
      quoteAuthor: 'Solveig & Dominique Hybord · Fondateurs',
      pressEyebrow: 'Archives & Reconnaissance Presse',
      pressTitle: 'Trente ans de parcours dans la presse officielle',
      pressDesc: 'Publications authentiques consacrées à Dominique et Solveig Hybord (Le Dauphiné Libéré, La Savoie, Schuss Magazine, Tarentaise Hebdo). Cliquez sur un article pour l’agrandir.',
      readArticle: 'Lire l’article agrandi →',
    },
    contactSection: {
      eyebrow: 'Échange Privilégié & Confidentiel',
      title: 'Votre propriété mérite une présence à sa hauteur.',
      description: 'Partagez-nous vos exigences, votre calendrier de présence et la nature de vos besoins sur la Costa del Sol. Solveig Hybord vous répondra personnellement avec discrétion.',
      formEyebrow: 'Formulaire Confidentiel',
      formTitle: 'Demande d’accompagnement',
      formDesc: 'Transmettez-nous vos coordonnées pour une prise de contact confidentielle sous 2 heures.',
      nameLabel: 'Nom complet',
      namePlaceholder: 'Votre nom et prénom',
      phoneLabel: 'Numéro de téléphone (WhatsApp)',
      phonePlaceholder: '+33 6 00 00 00 00',
      serviceLabel: 'Prestation souhaitée',
      serviceOptions: {
        property: '01 · Intendance & Property Management',
        concierge: '02 · Conciergerie Privée & Lifestyle 7/7',
        rental: '03 · Location Saisonnière (2 Formules)',
        chef: '04 · Chef à Domicile (Dominique Hybord)',
        morocco: '🐪 · Univers Marocain (Projet Horizon Fin 2027)',
      },
      messageLabel: 'Précisions / Attentes particulières',
      messagePlaceholder: 'Localisation de votre villa, dates envisagées, souhaits particuliers...',
      submitCta: 'Transmettre ma demande sur WhatsApp',
      directWhatsApp: 'WhatsApp Direct',
      directCall: 'Appel Téléphonique',
      availability: 'Solveig’s Prestige Services · Présence locale 7j/7 à Marbella & Mijas.',
    },
    footer: {
      brandTagline: 'Une présence locale discrète pour des propriétés d’exception sur la Costa del Sol. Intendance de domaine, conciergerie privée 7/7, gestion locative et chef à domicile.',
      servicesColTitle: 'Nos Services',
      houseColTitle: 'La Maison',
      contactColTitle: 'Contact Direct',
      rightsReserved: 'Tous droits réservés.',
      locationNote: 'Marbella · Mijas · Puerto Banús · Costa del Sol',
      preFooterTitle: 'Confier votre domaine ou sublimer votre séjour',
      preFooterDesc: 'Une intendance attentive et une conciergerie dévouée 7 jours sur 7. Échangez dès aujourd’hui avec Solveig.',
      preFooterWhatsApp: 'Échanger sur WhatsApp 7/7',
      preFooterCall: 'Appeler la conciergerie',
      founderDirect: 'Accueil direct par Solveig Hybord · Confidentialité garantie',
      areasCovered: 'Interventions sur la Golden Mile, Nueva Andalucía, Puerto Banús, Sierra Blanca, La Cala de Mijas et environs.',
      discretionNote: 'Discrétion & Secret Professionnel',
      directWhatsApp: 'WhatsApp direct 7j/7',
    },
    moroccoPage: {
      topBadge: 'Projet en cours de réalisation · Sortie de terre & Livraison Fin 2027',
      titleMain: 'Le Maroc d’Exception,',
      titleItalic: 'horizon fin 2027.',
      description: 'Nos appartements de prestige et résidences privées au Maroc commencent actuellement à sortir de terre. Conçus dans les règles de l’art pour une livraison fin 2027, ils proposeront une expérience exclusive alliant noblesse architecturale, artisanat raffiné et intendance sur-mesure signée Solveig’s Prestige Services.',
      waitlistCta: 'Rejoindre la liste d’attente privilégiée',
      backCostaDelSol: 'Découvrir nos services Costa del Sol',
      destinationsEyebrow: 'Implantations en cours',
      destinationsTitle: 'Les destinations prévues pour fin 2027',
      destinationsSubtitle: 'Des adresses d’exception choisies pour leur caractère, leur calme et leur atmosphère.',
      deliveryEstimate: 'Livraison estimée :',
      formEyebrow: 'Avant-Première',
      formTitle: 'Liste d’Attente Privilégiée',
      formDesc: 'Soyez informé(e) en priorité de l’avancement des travaux et de l’ouverture des disponibilités pour fin 2027.',
      nameLabel: 'Nom complet',
      phoneLabel: 'Numéro de téléphone (WhatsApp)',
      cityLabel: 'Destination souhaitée',
      timeframeLabel: 'Période envisagée',
      notesLabel: 'Précisions / Type de séjour souhaité',
      notesPlaceholder: 'Nombre de chambres, durée de séjour envisagée, demandes particulières...',
      submitCta: 'Rejoindre la liste privilégiée sur WhatsApp',
    },
  },

  en: {
    lang: 'en',
    nav: {
      services: 'Services',
      chef: 'Private Chef',
      territory: 'Marbella & Mijas',
      about: 'About Us',
      contact: 'Contact',
      morocco: 'Morocco 2027',
      moroccoShort: 'Morocco 2027',
      backToHome: 'Back to home',
      backToCostaDelSol: '🌴 Costa del Sol Universe',
      whatsappCta: 'Connect on WhatsApp',
      callCta: 'Call',
    },
    hero: {
      locationTag: 'Marbella & Mijas · Costa del Sol',
      brandName: 'SOLVEIG’S',
      brandSubtitle: 'PRESTIGE SERVICES',
      tagline: 'A discreet local presence for exceptional estates on the Costa del Sol.',
      whatsappCta: 'Confidential Inquiry',
      exploreCta: 'Explore our 4 services',
      scrollHint: 'Scroll to explore',
      slides: [
        {
          title: 'Prime Mediterranean Estates',
          caption: 'Golden Mile · Sierra Blanca · La Zagaleta',
        },
        {
          title: 'Dedicated Property Management',
          caption: 'Attentive oversight and complete peace of mind',
        },
        {
          title: 'Bespoke Lifestyle & Concierge',
          caption: 'Yacht charter, golf bookings & 7/7 concierge',
        },
        {
          title: 'Andalusian Art of Living',
          caption: 'Breathtaking panoramas between sea and mountain',
        },
        {
          title: 'Luxury Vacation Rental Care',
          caption: 'VIP personalized hosting and property yield enhancement',
        },
      ],
    },
    reassurance: {
      expValue: '30+ Years',
      expLabel: 'Hospitality & culinary excellence',
      michelinValue: 'Michelin Guide',
      michelinLabel: 'Bib Gourmand & 2 Toques Gault & Millau',
      presenceValue: '7/7',
      presenceLabel: 'Local presence in Marbella & Mijas',
      discretionValue: '100%',
      discretionLabel: 'Absolute discretion & confidentiality',
    },
    servicesSection: {
      eyebrow: 'Our Services Collection',
      titleMain: 'Mediterranean Art of Living,',
      titleItalic: 'curated down to the finest detail.',
      description: 'Four high-end services designed to protect your estate, elevate your stays, and provide complete peace of mind on the Costa del Sol.',
      discoverCta: 'Discover complete service',
      items: {
        'property-management': {
          title: 'Property Management',
          category: 'Estate Care & Oversight',
          summary: 'Attentive surveillance of your villa, regular technical checks, supervision of trusted local artisans, and HD photo reports after every visit.',
          tagline: 'Your home in trusted hands, even when you are miles away.',
          badge: 'Active care 365 days / year',
        },
        'concierge-services': {
          title: 'Concierge Services 7/7',
          category: 'Private Concierge & Lifestyle',
          summary: 'A discreet local presence to ensure smooth stays: priority table reservations, championship golf, private yacht charters in Puerto Banús, or elite chauffeurs.',
          tagline: 'A sense of detail, without ever overdoing it.',
          badge: 'Direct line 7 days / week',
        },
        'rental-management': {
          title: 'Rental Management',
          category: 'Luxury Vacation Rental Care',
          summary: 'Two adaptable formulas: attentive on-site care and guest check-in for your own bookings, or complete turnkey rental management from A to Z.',
          tagline: 'Enhance your property yield while protecting its integrity.',
          badge: '2 Bespoke formulas',
        },
        'chef-a-domicile': {
          title: 'Private Chef in Villa',
          category: 'Haute Gastronomy at Home',
          summary: 'Chef Dominique Hybord crafts a bespoke menu with you, prepares the dinner in your villa kitchen, and leaves everything sparkling clean.',
          tagline: '30 years of culinary mastery, genuine cuisine, and the joy of hosting.',
          badge: 'Chef Dominique Hybord',
        },
      },
    },
    chefSection: {
      eyebrow: 'Gastronomy in Your Private Villa',
      titleMain: 'The mastery of a celebrated chef,',
      titleItalic: 'in the privacy of your own table.',
      description: 'Host your guests without leaving your villa. Chef Dominique Hybord designs your bespoke menu with you, selects fresh morning market produce, and cooks directly at your estate.',
      chefName: 'Chef Dominique Hybord',
      chefDistinction: 'Michelin Guide Bib Gourmand Distinction · 2 Toques Gault & Millau',
      legacyBadge: '30 years of culinary heritage',
      headline: 'Authentic signature cuisine, inspired by the Mediterranean and seasonal treasures.',
      biography: 'Trained in prestigious Parisian culinary institutions (including Michel Rostang, 2 Michelin stars) and awarded the Michelin Guide Bib Gourmand and Gault & Millau (2 Toques) at restaurant La Fleur de Sel, Dominique Hybord now brings his exacting standards to the finest villas of Marbella and Mijas.',
      pillars: [
        {
          title: 'Menu designed with you',
          desc: 'A personalized consultation to craft a menu tailored to your taste, dietary preferences, and guests.',
        },
        {
          title: 'Noble seasonal ingredients',
          desc: 'Fresh morning catch, selected tender meats, organic herbs, and hand-picked local Andalusian produce.',
        },
        {
          title: 'Discrete service & spotless kitchen',
          desc: 'Attentive, quiet table service. The kitchen is thoroughly cleaned and restored to pristine condition.',
        },
      ],
      experiencesTitle: 'Culinary Experiences Offered',
      experiencesSubtitle: 'Tailor-made gastronomic formats designed for each moment of your stay on the Costa del Sol.',
      experiences: [
        {
          title: 'Signature Gastronomic Dinner',
          subtitle: 'The refinement of a multi-course tasting menu on the terrace',
          desc: 'A sophisticated 4 or 5-course tasting menu prepared live with optional fine wine pairings. A private fine-dining experience under the Mediterranean stars.',
          guests: '6 to 15 guests',
        },
        {
          title: 'Mediterranean Poolside Lunch',
          subtitle: 'Fresh coastal flavours by the pool',
          desc: 'Wild catch grilled on the plancha, succulent Andalusian prawns, fresh marinated vegetables, and seasonal fruit desserts for a relaxed, sun-filled gathering.',
          guests: '6 to 20 guests',
        },
        {
          title: 'Cocktail Reception & Canapés',
          subtitle: 'Elegance for private celebrations',
          desc: 'Gourmet savoury and sweet finger foods, live cooking presentations, and attentive service to celebrate an anniversary, family milestone, or special evening.',
          guests: '10 to 35 guests',
        },
        {
          title: 'Resident Chef During Your Stay',
          subtitle: 'Complete culinary freedom day after day',
          desc: 'Full culinary care covering gourmet breakfasts, light fresh lunches, and celebratory dinners throughout your vacation.',
          guests: 'Bespoke quotation',
        },
      ],
      galleryEyebrow: 'On the plate',
      galleryTitle: 'Creations by Chef Dominique Hybord',
      galleryHint: 'Click on any dish to view in high resolution.',
      reserveCta: 'Book a Private Chef Experience',
      detailsCta: 'Explore Complete Service',
      disclaimer: 'Bespoke service for 6 to 15 guests (or custom events). Advance booking highly recommended during high season.',
    },
    territorySection: {
      eyebrow: 'Local Footprint',
      titleMain: 'Local proximity',
      titleItalic: 'makes all the difference.',
      description: 'A permanent local presence in Marbella and Mijas allows us to respond within minutes, anticipate needs, and mobilize the finest trusted local craftsmen.',
      manifestoEyebrow: 'Local Presence 7/7',
      manifestoTitle: 'From routine estate checks to the last detail of your stay.',
      manifestoDesc: 'Whether your home is on Marbella’s Golden Mile, in the whitewashed village of Mijas Pueblo, or on the coast in La Cala, Solveig’s Prestige Services is your dedicated on-site partner.',
      manifestoCta: 'Verify your area with Solveig',
      coveredZones: 'Key locations:',
      zones: {
        marbella: {
          name: 'Marbella',
          kicker: 'The International Core',
          description: 'Prestigious Andalusian estates, contemporary villas on the Golden Mile, Sierra Blanca, Nueva Andalucía, and beachfront properties in Puerto Banús.',
          badge: 'Golden Mile & Banús',
        },
        'mijas-pueblo': {
          name: 'Mijas Pueblo',
          kicker: 'Authentic Hilltop Village',
          description: 'Charming whitewashed village houses, historic cortijos, flower-draped patios, and sweeping panoramic views across the Mediterranean sea.',
          badge: 'Whitewashed Village',
        },
        'la-cala': {
          name: 'La Cala de Mijas',
          kicker: 'Lively Coastal Living',
          description: 'Waterfront coastal villas, family holiday homes, and sunny terraces along the scenic Mediterranean boardwalk (Senda Litoral).',
          badge: 'Beaches & Lifestyle',
        },
        calahonda: {
          name: 'Calahonda & Riviera del Sol',
          kicker: 'The Residential Coast',
          description: 'Quiet estates nestled among pine groves, private villas with lush gardens, and panoramic views over renowned Costa del Sol golf clubs.',
          badge: 'Golf & Residences',
        },
      },
    },
    aboutSection: {
      eyebrow: 'Heritage & Craftsmanship',
      titleMain: 'Thirty years of dedication.',
      titleItalic: 'A confidential presence.',
      paragraph1: 'From celebrated Parisian Michelin-starred restaurants (including Michel Rostang, 2★ Michelin) to official Michelin Guide distinctions (Bib Gourmand at restaurant La Fleur de Sel) and Gault & Millau (2 Toques), Dominique and Solveig Hybord have cultivated a passion for high hospitality for over three decades.',
      paragraph2: 'Now based between Marbella and Mijas, they provide secondary homeowners with impeccable estate oversight, 7/7 private concierge services, and bespoke private chef dining in villas.',
      quote: '“True luxury never imposes itself: it is felt in the seamless perfection of every moment.”',
      quoteAuthor: 'Solveig & Dominique Hybord · Founders',
      pressEyebrow: 'Archives & Press Recognition',
      pressTitle: 'Thirty years of culinary excellence in official press',
      pressDesc: 'Authentic press publications featuring Dominique and Solveig Hybord (Le Dauphiné Libéré, La Savoie, Schuss Magazine, Tarentaise Hebdo). Click to view full articles.',
      readArticle: 'View enlarged article →',
    },
    contactSection: {
      eyebrow: 'Privileged & Confidential Exchange',
      title: 'Your estate deserves a presence up to its standards.',
      description: 'Share your requirements, your stay schedule, and the nature of your needs on the Costa del Sol. Solveig Hybord will personally answer with absolute discretion.',
      formEyebrow: 'Confidential Form',
      formTitle: 'Inquiry & Consultation',
      formDesc: 'Submit your contact details for a confidential response within 2 hours.',
      nameLabel: 'Full name',
      namePlaceholder: 'Your first and last name',
      phoneLabel: 'Phone number (WhatsApp)',
      phonePlaceholder: '+44 7000 000000',
      serviceLabel: 'Service required',
      serviceOptions: {
        property: '01 · Property Management & Estate Oversight',
        concierge: '02 · Private Concierge & Lifestyle 7/7',
        rental: '03 · Vacation Rental Management (2 Formulas)',
        chef: '04 · Private Chef in Villa (Dominique Hybord)',
        morocco: '🐪 · Moroccan Universe (Delivery Late 2027)',
      },
      messageLabel: 'Specific requests or details',
      messagePlaceholder: 'Villa location, anticipated dates, specific wishes...',
      submitCta: 'Send inquiry via WhatsApp',
      directWhatsApp: 'Direct WhatsApp',
      directCall: 'Direct Phone Call',
      availability: 'Solveig’s Prestige Services · Local presence 7/7 in Marbella & Mijas.',
    },
    footer: {
      brandTagline: 'A discreet local presence for exceptional estates on the Costa del Sol. Estate care, 7/7 private concierge, rental management, and private chef in villa.',
      servicesColTitle: 'Our Services',
      houseColTitle: 'The House',
      contactColTitle: 'Direct Contact',
      rightsReserved: 'All rights reserved.',
      locationNote: 'Marbella · Mijas · Puerto Banús · Costa del Sol',
      preFooterTitle: 'Entrust your estate or elevate your stay',
      preFooterDesc: 'Attentive property oversight and dedicated concierge services 7 days a week. Connect directly with Solveig today.',
      preFooterWhatsApp: 'Chat on WhatsApp 7/7',
      preFooterCall: 'Call our Concierge',
      founderDirect: 'Personal consultation by Solveig Hybord · Complete confidentiality',
      areasCovered: 'Serving the Golden Mile, Nueva Andalucía, Puerto Banús, Sierra Blanca, La Cala de Mijas, and surroundings.',
      discretionNote: 'Absolute Discretion & Professional Secrecy',
      directWhatsApp: 'Direct WhatsApp 7/7',
    },
    moroccoPage: {
      topBadge: 'Project currently breaking ground · Scheduled delivery late 2027',
      titleMain: 'Exceptional Morocco,',
      titleItalic: 'horizon late 2027.',
      description: 'Our collection of prime apartments and private residences in Morocco is currently breaking ground. Designed with timeless elegance for delivery in late 2027, they will offer an exclusive sanctuary blending architectural nobility, authentic craftsmanship, and bespoke intendance by Solveig’s Prestige Services.',
      waitlistCta: 'Join the privileged waitlist',
      backCostaDelSol: 'Explore Costa del Sol services',
      destinationsEyebrow: 'Upcoming Destinations',
      destinationsTitle: 'Locations planned for late 2027',
      destinationsSubtitle: 'Prime addresses chosen for their heritage, serenity, and distinctive atmosphere.',
      deliveryEstimate: 'Estimated delivery:',
      formEyebrow: 'Preview Access',
      formTitle: 'Privileged Waitlist Registration',
      formDesc: 'Receive priority updates regarding construction progress and early reservations for late 2027.',
      nameLabel: 'Full name',
      phoneLabel: 'Phone number (WhatsApp)',
      cityLabel: 'Preferred destination',
      timeframeLabel: 'Anticipated timeframe',
      notesLabel: 'Stay preferences or details',
      notesPlaceholder: 'Number of suites, anticipated stay length, special requests...',
      submitCta: 'Join the VIP waitlist on WhatsApp',
    },
  },

  es: {
    lang: 'es',
    nav: {
      services: 'Servicios',
      chef: 'Chef privado',
      territory: 'Marbella & Mijas',
      about: 'Quiénes somos',
      contact: 'Contacto',
      morocco: 'Marruecos 2027',
      moroccoShort: 'Marruecos 2027',
      backToHome: 'Volver al inicio',
      backToCostaDelSol: '🌴 Universo Costa del Sol',
      whatsappCta: 'Hablar con Solveig',
      callCta: 'Llamar',
    },
    hero: {
      locationTag: 'Marbella & Mijas · Costa del Sol',
      brandName: 'SOLVEIG’S',
      brandSubtitle: 'PRESTIGE SERVICES',
      tagline: 'Una presencia local discreta para propiedades excepcionales en la Costa del Sol.',
      whatsappCta: 'Consulta Confidencial',
      exploreCta: 'Descubrir nuestros 4 servicios',
      scrollHint: 'Desplácese para explorar',
      slides: [
        {
          title: 'Villas de Excepción',
          caption: 'Milla de Oro · Sierra Blanca · La Zagaleta',
        },
        {
          title: 'Cuidado y Gestión de Fincas',
          caption: 'Atención continua y serenidad los 365 días del año',
        },
        {
          title: 'Estilo de Vida y Exclusividad',
          caption: 'Alquiler de yates, golf y conserjería 7/7',
        },
        {
          title: 'Arte de Vivir Mediterráneo',
          caption: 'Vistas panorámicas entre el mar y la montaña',
        },
        {
          title: 'Gestión de Alquiler Vacacional VIP',
          caption: 'Atención personalizada y revalorización de su propiedad',
        },
      ],
    },
    reassurance: {
      expValue: '30+ Años',
      expLabel: 'De excelencia culinaria y hotelera',
      michelinValue: 'Guía Michelin',
      michelinLabel: 'Bib Gourmand & 2 Toques Gault & Millau',
      presenceValue: '7d / 7',
      presenceLabel: 'Presencia local en Marbella y Mijas',
      discretionValue: '100 %',
      discretionLabel: 'Discreción y secreto profesional',
    },
    servicesSection: {
      eyebrow: 'Colección de Servicios',
      titleMain: 'El arte de vivir mediterráneo,',
      titleItalic: 'cuidado hasta el último detalle.',
      description: 'Cuatro servicios de alto nivel diseñados para preservar su patrimonio, sublimar sus estancias y ofrecerle una tranquilidad absoluta en la Costa del Sol.',
      discoverCta: 'Descubrir el servicio completo',
      items: {
        'property-management': {
          title: 'Property Management',
          category: 'Cuidado y Mantenimiento de Villas',
          summary: 'Supervisión atenta de su villa, revisiones técnicas periódicas, coordinación de artesanos de confianza y reportes fotográficos HD tras cada visita.',
          tagline: 'Su hogar en las mejores manos, incluso cuando esté lejos.',
          badge: 'Atención activa 365 días / año',
        },
        'concierge-services': {
          title: 'Concierge Services 7/7',
          category: 'Conserjería Privada & Lifestyle',
          summary: 'Presencia local discreta para que cada estancia sea fluida: reservas prioritarias, golf, alquiler de yates en Puerto Banús o chóferes privados.',
          tagline: 'El sentido del detalle, sin excesos innecesarios.',
          badge: 'Línea directa 7 días / semana',
        },
        'rental-management': {
          title: 'Rental Management',
          category: 'Gestión de Alquiler Vacacional VIP',
          summary: 'Dos fórmulas adaptables: cuidado presencial y check-in personalizado para sus reservas, o gestión de alquiler integral llave en mano.',
          tagline: 'Maximizar el rendimiento de su villa preservando su excelencia.',
          badge: '2 Fórmulas a medida',
        },
        'chef-a-domicile': {
          title: 'Chef Privado en Villa',
          category: 'Alta Gastronomía a Domicilio',
          summary: 'El Chef Dominique Hybord diseña un menú a medida con usted, cocina en su villa y se ocupa de todo hasta dejar la cocina impecable.',
          tagline: '30 años de maestría, cocina sincera y el placer de recibir en casa.',
          badge: 'Chef Dominique Hybord',
        },
      },
    },
    chefSection: {
      eyebrow: 'Gastronomía en su Villa Privada',
      titleMain: 'La maestría de un gran chef,',
      titleItalic: 'en la intimidad de su propia mesa.',
      description: 'Reciba a sus seres queridos sin salir de su villa. El Chef Dominique Hybord diseña su menú con usted, selecciona productos frescos del mercado y cocina directamente en su residencia.',
      chefName: 'Chef Dominique Hybord',
      chefDistinction: 'Distinción Bib Gourmand de la Guía Michelin · 2 Toques Gault & Millau',
      legacyBadge: '30 años de trayectoria gastronómica',
      headline: 'Una cocina de autor sincera, inspirada en el Mediterráneo y los productos de temporada.',
      biography: 'Formado en prestigiosas mesas parisinas (entre ellas Michel Rostang, 2 estrellas Michelin) y reconocido en el restaurante La Fleur de Sel con el Bib Gourmand de la Guía Michelin y 2 Toques Gault & Millau, Dominique Hybord pone hoy su rigor culinario al servicio de las mejores villas de Marbella y Mijas.',
      pillars: [
        {
          title: 'Menú diseñado con usted',
          desc: 'Una conversación previa para componer un menú adaptado a sus gustos, preferencias y comensales.',
        },
        {
          title: 'Ingredientes nobles de temporada',
          desc: 'Pesca local del día, carnes seleccionadas, verduras de huerta y hierbas aromáticas frescas.',
        },
        {
          title: 'Servicio discreto y cocina impecable',
          desc: 'Servicio atento y discreto en mesa. La cocina queda completamente limpia e impecable al finalizar.',
        },
      ],
      experiencesTitle: 'Formatos Gastronómicos Disponibles',
      experiencesSubtitle: 'Experiencias personalizadas pensadas para cada momento de su estancia en la Costa del Sol.',
      experiences: [
        {
          title: 'Cena Gastronómica de Autor',
          subtitle: 'La distinción de un menú degustación en la terraza',
          desc: 'Menú degustación refinado en 4 o 5 tiempos, emplatado en directo ante sus ojos con opción de maridaje de vinos. Una gran mesa privada bajo las estrellas.',
          guests: 'De 6 a 15 comensales',
        },
        {
          title: 'Almuerzo Mediterráneo & Plancha',
          subtitle: 'Frescura al borde de la piscina',
          desc: 'Pescados nobles a la plancha, gambas de la costa, verduras marinadas y postres de frutas de temporada para un encuentro veraniego distendido.',
          guests: 'De 6 a 20 comensales',
        },
        {
          title: 'Cóctel Privado & Celebración',
          subtitle: 'Elegancia para sus recepciones íntimas',
          desc: 'Bocados selectos dulces y salados servidos en bandeja, cocina en directo y servicio atento para aniversarios o veladas familiares.',
          guests: 'De 10 a 35 comensales',
        },
        {
          title: 'Chef Residente Durante su Estancia',
          subtitle: 'Serenidad absoluta día tras día',
          desc: 'Atención culinaria completa: desayunos gourmet, comidas ligeras y cenas especiales a lo largo de todas sus vacaciones.',
          guests: 'Presupuesto a medida',
        },
      ],
      galleryEyebrow: 'En el plato',
      galleryTitle: 'Creaciones del Chef Dominique Hybord',
      galleryHint: 'Haga clic en un plato para ampliarlo en alta resolución.',
      reserveCta: 'Reservar un almuerzo o cena con el Chef',
      detailsCta: 'Descubrir el servicio en detalle',
      disclaimer: 'Servicio personalizado de 6 a 15 comensales (o eventos a medida). Se recomienda reserva anticipada en temporada alta.',
    },
    territorySection: {
      eyebrow: 'Presencia Territorial',
      titleMain: 'La cercanía local',
      titleItalic: 'lo cambia todo.',
      description: 'Una presencia permanente en Marbella y Mijas permite actuar con rapidez, anticipar imprevistos y movilizar a los mejores profesionales locales.',
      manifestoEyebrow: 'Presencia Local 7d/7',
      manifestoTitle: 'Desde la revisión periódica de su villa hasta el último detalle de su estancia.',
      manifestoDesc: 'Ya sea propietario de una finca en la Milla de Oro, de una casa con encanto en Mijas Pueblo o de una villa en La Cala, Solveig’s Prestige Services es su interlocutor de confianza.',
      manifestoCta: 'Consultar mi zona con Solveig',
      coveredZones: 'Zonas destacadas:',
      zones: {
        marbella: {
          name: 'Marbella',
          kicker: 'El corazón internacional',
          description: 'Villas de prestigio, fincas andaluzas en la Milla de Oro, Sierra Blanca, Nueva Andalucía y residencias exclusivas en Puerto Banús.',
          badge: 'Milla de Oro & Banús',
        },
        'mijas-pueblo': {
          name: 'Mijas Pueblo',
          kicker: 'La Andalucía de montaña',
          description: 'Casas blancas de arquitectura tradicional, cortijos de carácter, patios floridos y vistas panorámicas sobre todo el Mediterráneo.',
          badge: 'Pueblo Blanco de Artistas',
        },
        'la-cala': {
          name: 'La Cala de Mijas',
          kicker: 'El litoral vivo',
          description: 'Villas costeras junto a la playa, residencias familiares y terrazas soleadas a lo largo de la Senda Litoral.',
          badge: 'Playas y Estilo de Vida',
        },
        calahonda: {
          name: 'Calahonda & Riviera del Sol',
          kicker: 'La costa residencial',
          description: 'Fincas tranquilas entre pinares marítimos, villas con amplios jardines y vistas panorámicas a prestigiosos campos de golf.',
          badge: 'Golf y Residencias',
        },
      },
    },
    aboutSection: {
      eyebrow: 'Herencia y Saber Hacer',
      titleMain: 'Treinta años de exigencia.',
      titleItalic: 'Una presencia confidencial.',
      paragraph1: 'Desde prestigiosas mesas parisinas con estrellas Michelin (entre ellas Michel Rostang, 2★ Michelin) hasta los reconocimientos de la Guía Michelin (Bib Gourmand en La Fleur de Sel) y Gault & Millau (2 Toques), Dominique y Solveig Hybord cultivan desde hace más de tres décadas la excelencia en el servicio.',
      paragraph2: 'Instalados entre Marbella y Mijas, gestionan para los propietarios de segundas residencias un cuidado integral de fincas, conserjería privada 7/7 y gastronomía de autor en villa.',
      quote: '«El verdadero lujo no se impone: se siente en la perfección invisible de cada instante.»',
      quoteAuthor: 'Solveig & Dominique Hybord · Fundadores',
      pressEyebrow: 'Archivos y Prensa Oficial',
      pressTitle: 'Treinta años de trayectoria en la prensa gastronómica',
      pressDesc: 'Publicaciones oficiales sobre Dominique y Solveig Hybord (Le Dauphiné Libéré, La Savoie, Schuss Magazine, Tarentaise Hebdo). Haga clic para ampliar.',
      readArticle: 'Ver artículo ampliado →',
    },
    contactSection: {
      eyebrow: 'Contacto Privilegiado y Confidencial',
      title: 'Su propiedad merece una atención a su altura.',
      description: 'Comparta con nosotros sus preferencias, calendario de estancia y necesidades en la Costa del Sol. Solveig Hybord le responderá personalmente con total discreción.',
      formEyebrow: 'Formulario Confidencial',
      formTitle: 'Solicitud de asesoramiento',
      formDesc: 'Envíenos sus datos para una atención confidencial en menos de 2 horas.',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Su nombre y apellidos',
      phoneLabel: 'Teléfono (WhatsApp)',
      phonePlaceholder: '+34 600 000 000',
      serviceLabel: 'Servicio deseado',
      serviceOptions: {
        property: '01 · Mantenimiento y Property Management',
        concierge: '02 · Conserjería Privada & Lifestyle 7/7',
        rental: '03 · Gestión de Alquiler Vacacional (2 Fórmulas)',
        chef: '04 · Chef Privado en Villa (Dominique Hybord)',
        morocco: '🐪 · Universo Marruecos (Entrega Finales 2027)',
      },
      messageLabel: 'Detalles o requisitos particulares',
      messagePlaceholder: 'Ubicación de la villa, fechas previstas, solicitudes especiales...',
      submitCta: 'Enviar solicitud por WhatsApp',
      directWhatsApp: 'WhatsApp Directo',
      directCall: 'Llamada Telefónica',
      availability: 'Solveig’s Prestige Services · Presencia local 7 días a la semana en Marbella y Mijas.',
    },
    footer: {
      brandTagline: 'Una presencia local discreta para propiedades de excepción en la Costa del Sol. Cuidado de fincas, conserjería privada 7/7, gestión de alquiler y chef en villa.',
      servicesColTitle: 'Nuestros Servicios',
      houseColTitle: 'La Casa',
      contactColTitle: 'Contacto Directo',
      rightsReserved: 'Todos los derechos reservados.',
      locationNote: 'Marbella · Mijas · Puerto Banús · Costa del Sol',
      preFooterTitle: 'Confíe su propiedad o sublime su estancia',
      preFooterDesc: 'Atención personalizada y conserjería dedicada los 7 días de la semana. Hable directamente con Solveig hoy mismo.',
      preFooterWhatsApp: 'Escribir por WhatsApp 7/7',
      preFooterCall: 'Llamar a la conserjería',
      founderDirect: 'Atención directa por Solveig Hybord · Confidencialidad absoluta',
      areasCovered: 'Servicio en la Milla de Oro, Nueva Andalucía, Puerto Banús, Sierra Blanca, La Cala de Mijas y alrededores.',
      discretionNote: 'Discreción y Secreto Profesional',
      directWhatsApp: 'WhatsApp directo 7d/7',
    },
    moroccoPage: {
      topBadge: 'Proyecto en construcción · Obras en curso & Entrega Finales 2027',
      titleMain: 'Marruecos de Excepción,',
      titleItalic: 'horizonte finales de 2027.',
      description: 'Nuestra colección de residencias privadas y apartamentos exclusivos en Marruecos se encuentra actualmente en fase de edificación. Diseñados con nobleza arquitectónica y artesanía tradicional para finales de 2027, ofrecerán un refugio único con la atención personalizada de Solveig’s Prestige Services.',
      waitlistCta: 'Unirse a la lista de espera VIP',
      backCostaDelSol: 'Descubrir servicios en Costa del Sol',
      destinationsEyebrow: 'Destinos en Preparación',
      destinationsTitle: 'Ubicaciones previstas para finales de 2027',
      destinationsSubtitle: 'Direcciones exclusivas seleccionadas por su autenticidad, calma y ubicación privilegiada.',
      deliveryEstimate: 'Entrega estimada:',
      formEyebrow: 'Acceso Prioritario',
      formTitle: 'Registro en Lista de Espera Privilegiada',
      formDesc: 'Reciba información prioritaria sobre el avance de las obras y la apertura de reservas para finales de 2027.',
      nameLabel: 'Nombre completo',
      phoneLabel: 'Teléfono (WhatsApp)',
      cityLabel: 'Destino deseado',
      timeframeLabel: 'Periodo previsto',
      notesLabel: 'Detalles o tipo de estancia',
      notesPlaceholder: 'Número de dormitorios, duración de la estancia, preferencias...',
      submitCta: 'Unirse a la lista VIP por WhatsApp',
    },
  },
};

export const getTranslation = (lang: Language): TranslationDictionary =>
  translations[lang] || translations.fr;
