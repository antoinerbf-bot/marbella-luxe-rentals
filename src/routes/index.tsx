// Vercel retry after deployment-rate-limit window.
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  KeyRound,
  MessageCircle,
  Sparkles,
  CalendarDays,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactBand, SolveigLayout } from "@/components/SolveigLayout";
import { useSolveigLocale } from "@/lib/locale";
import { ChefServiceSpotlight } from "@/components/ChefServiceSpotlight";
import { ScrollParallaxImage } from "@/components/ScrollParallaxImage";
import { UniverseLanguageMenu } from "@/components/UniverseLanguageMenu";



const SITE_URL =
  import.meta.env["VITE_SITE_URL"] ?? "https://solveigconciergeriemarbella.vercel.app";

const media = {
  hero: "https://d2ol7oe51mr4n9.cloudfront.net/user_3CWyfseY5SlAB1v9O94YRIcxpSv/1e9f7f9c-850f-46a7-a5fc-d2f8886510ef.png",
  oldTown:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Marbella_-_Plaza_de_los_Naranjos_8.jpg",
  mijas:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mijas_Pueblo_from_the_south_(Mijas,_Dec_2012).jpg",
  coast: "https://commons.wikimedia.org/wiki/Special:Redirect/file/PLAYAS_DE_MIJAS.jpg",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solveig’s Prestige Service — Conciergerie de prestige à Marbella & Mijas" },
      {
        name: "description",
        content:
          "Premium property management, private concierge and seasonal rental support in Marbella, Mijas and the Costa del Sol.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Solveig’s Prestige Service" },
      { property: "og:title", content: "Solveig’s Prestige Service — Marbella & Mijas" },
      {
        property: "og:description",
        content: "Conciergerie privée, gestion de propriété et services sur mesure à Marbella, Mijas et sur la Costa del Sol.",
      },
      { property: "og:image", content: "https://solveigconciergeriemarbella.vercel.app/og-solveig.svg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Villa de prestige à Marbella — Solveig’s Prestige Service" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-video-preview:-1" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Solveig’s Prestige Service",
          url: SITE_URL,
          description:
            "Gestion de propriété, conciergerie privée et location saisonnière à Marbella, Mijas et sur la Costa del Sol.",
          publisher: {
            "@type": "Organization",
            name: "Solveig’s Prestige Service",
            telephone: "+34623626724",
            email: "solveighybord@gmail.com",
            areaServed: ["Marbella", "Mijas", "Costa del Sol"],
          },
        }),
      },
    ],
  }),
  component: Index,
});

const copy = {
  fr: {
    reserve: "Parlons de votre propriété",
    quote: "Découvrir les services",
    call: "Appeler Solveig",
    discoverLabel: "Découvrir",
    exploreLabel: "Explorer",
    whatsappLabel: "WhatsApp Solveig",
    emailLabel: "Email",
    whatsappMessage: "Bonjour, je souhaite discuter de mon projet à Marbella ou Mijas.",
    servicesEyebrow: "L’art du détail",
    servicesTitle: (
      <>
        Un service qui se voit.
        <br />
        <span>Une présence qui se ressent.</span>
      </>
    ),
    servicesIntro:
      "De la surveillance de votre maison à l’accueil de vos invités, chaque intervention est pensée comme une extension naturelle de votre propriété.",
    featureEyebrow: "Votre maison, notre attention",
    featureTitle: (
      <>
        Le luxe commence
        <br />
        quand tout semble <span>simple.</span>
      </>
    ),
    featureText:
      "Une belle propriété ne se résume pas à quatre murs. Elle vit, elle s’entretient, elle accueille. Notre rôle est de préserver cette qualité dans le temps et de rendre chaque interaction plus fluide.",
    featurePoints: [
      "Contrôles réguliers adaptés à votre rythme",
      "Coordination des prestataires et interventions",
      "Préparation avant chaque arrivée",
      "Communication claire avec le propriétaire",
    ],
    featureCta: "Découvrir la gestion de propriété",
    destinationEyebrow: "La destination",
    destinationTitle: (
      <>
        Marbella.
        <br />
        <span>Mijas. Costa del Sol.</span>
      </>
    ),
    destinationText:
      "Une connaissance locale précise, du vieux Marbella aux collines de Mijas et au littoral.",
    signatureEyebrow: "La signature Solveig",
    signatureTitle:
      "Nous ne vendons pas une promesse de luxe. Nous organisons ce qui permet de la tenir.",
    signatureText:
      "Présence réelle, méthode claire, attention aux détails et communication sans bruit. C’est cette combinaison qui transforme une gestion en tranquillité.",
    signaturePoints: [
      ["01", "Présence", "Un relais local qui connaît votre maison et son environnement."],
      ["02", "Précision", "Des routines, des contrôles et des standards adaptés au bien."],
      ["03", "Discrétion", "Une relation simple, humaine et confidentielle."],
    ],
    finalEyebrow: "Votre prochain chapitre à Marbella",
    eyebrow: "Property & lifestyle management · Marbella · Mijas",
    hero: (
      <>
        Votre propriété.
        <br />
        <em>Parfaitement accompagnée.</em>
      </>
    ),
    intro:
      "Solveig’s Prestige Service accompagne les propriétaires et voyageurs qui attendent plus qu’une gestion : une présence, du goût, de la discrétion et une vraie maîtrise du terrain.",
    primary: "Parlons de votre propriété",
    secondary: "Découvrir les services",
    scroll: "Entrer dans l’univers",
    serviceEyebrow: "L’art du détail",
    serviceTitle: (
      <>
        Un service qui se voit.
        <br />
        <span>Une présence qui se ressent.</span>
      </>
    ),
    serviceIntro:
      "De la surveillance de votre maison à l’accueil de vos invités, chaque intervention est pensée comme une extension naturelle de votre propriété.",
    allServices: "Voir tous les services",
    services: [
      [
        "01",
        "Gestion de propriété",
        "Surveillance, entretien, coordination et préparation. Votre maison reste prête, même lorsque vous êtes loin.",
        "/gestion-propriete",
        KeyRound,
      ],
      [
        "02",
        "Conciergerie privée",
        "Accueil, assistance et demandes sur mesure avec une présence discrète et profondément humaine.",
        "/conciergerie",
        Sparkles,
      ],
      [
        "03",
        "Location saisonnière",
        "Préparation, voyageurs, contrôle et coordination pour préserver la qualité du séjour et du bien.",
        "/location-saisonniere",
        CalendarDays,
      ],
      [
        "04",
        "Housekeeping & maintenance",
        "Ménage, linge, contrôle qualité et maintenance légère : les détails invisibles qui font la différence.",
        "/services/housekeeping",
        Wrench,
      ],
    ],
    propertyEyebrow: "Votre maison, notre attention",
    propertyTitle: (
      <>
        Le luxe commence
        <br />
        quand tout semble <span>simple.</span>
      </>
    ),
    propertyText:
      "Une belle propriété ne se résume pas à quatre murs. Elle vit, elle s’entretient, elle accueille. Notre rôle est de préserver cette qualité dans le temps et de rendre chaque interaction plus fluide.",
    propertyPoints: [
      "Contrôles réguliers adaptés à votre rythme",
      "Coordination des prestataires et interventions",
      "Préparation avant chaque arrivée",
      "Communication claire avec le propriétaire",
    ],
    propertyCta: "Découvrir la gestion de propriété",
    placeEyebrow: "La destination",
    placeTitle: (
      <>
        Marbella.
        <br />
        <span>Mijas. Costa del Sol.</span>
      </>
    ),
    placeText:
      "Une connaissance locale précise, du vieux Marbella aux collines de Mijas et au littoral.",
    places: [
      ["Marbella", "Le vieux centre, la mer et une adresse internationale.", media.oldTown],
      ["Mijas", "Le blanc andalou, les collines et les vues Méditerranée.", media.mijas],
      [
        "Costa del Sol",
        "Un territoire pensé pour les séjours et les résidences d’exception.",
        media.coast,
      ],
    ],
    whyEyebrow: "La signature Solveig",
    whyTitle:
      "Nous ne vendons pas une promesse de luxe. Nous organisons ce qui permet de la tenir.",
    whyText:
      "Présence réelle, méthode claire, attention aux détails et communication sans bruit. C’est cette combinaison qui transforme une gestion en tranquillité.",
    why: [
      ["01", "Présence", "Un relais local qui connaît votre maison et son environnement."],
      ["02", "Précision", "Des routines, des contrôles et des standards adaptés au bien."],
      ["03", "Discrétion", "Une relation simple, humaine et confidentielle."],
    ],
    finalTitle: "Et si votre propriété était déjà entre de bonnes mains ?",
    finalText:
      "Parlons de votre bien, de votre rythme de présence et du niveau d’accompagnement que vous souhaitez.",
  },
  en: {
    reserve: "Discuss your property",
    quote: "Explore our services",
    call: "Call Solveig",
    discoverLabel: "Discover",
    exploreLabel: "Explore",
    whatsappLabel: "Solveig on WhatsApp",
    emailLabel: "Email",
    whatsappMessage: "Hello, I’d like to discuss my project in Marbella or Mijas.",
    servicesEyebrow: "The art of detail",
    servicesTitle: (
      <>
        A service you notice.
        <br />
        <span>A presence you feel.</span>
      </>
    ),
    servicesIntro:
      "From watching over your home to welcoming your guests, every intervention is designed as a natural extension of your property.",
    featureEyebrow: "Your home, our attention",
    featureTitle: (
      <>
        Luxury begins
        <br />
        when everything feels <span>simple.</span>
      </>
    ),
    featureText:
      "A beautiful property is more than four walls. It lives, it is maintained, it welcomes. Our role is to preserve that quality over time and make every interaction effortless.",
    featurePoints: [
      "Regular checks adapted to your rhythm",
      "Coordination of trusted providers",
      "Careful preparation before every arrival",
      "Clear owner communication",
    ],
    featureCta: "Discover property management",
    destinationEyebrow: "The destination",
    destinationTitle: (
      <>
        Marbella.
        <br />
        <span>Mijas. Costa del Sol.</span>
      </>
    ),
    destinationText:
      "Precise local knowledge, from Marbella Old Town to the hills of Mijas and the coastline.",
    signatureEyebrow: "The Solveig signature",
    signatureTitle:
      "We do not sell a promise of luxury. We organise what allows it to be delivered.",
    signatureText:
      "Real presence, clear method, attention to detail and quiet communication. This is what turns management into peace of mind.",
    signaturePoints: [
      ["01", "Presence", "A local relay that knows your home and its surroundings."],
      ["02", "Precision", "Routines, checks and standards adapted to the property."],
      ["03", "Discretion", "A simple, human and confidential relationship."],
    ],
    finalEyebrow: "Your next chapter in Marbella",
    eyebrow: "Property & lifestyle management · Marbella · Mijas",
    hero: (
      <>
        Your property.
        <br />
        <em>Perfectly cared for.</em>
      </>
    ),
    intro:
      "Solveig’s Prestige Service supports owners and guests who expect more than management: presence, taste, discretion and genuine local expertise.",
    primary: "Discuss your property",
    secondary: "Explore our services",
    scroll: "Enter the experience",
    serviceEyebrow: "The art of detail",
    serviceTitle: (
      <>
        A service you notice.
        <br />
        <span>A presence you feel.</span>
      </>
    ),
    serviceIntro:
      "From watching over your home to welcoming your guests, every intervention is designed as a natural extension of your property.",
    allServices: "View all services",
    services: [
      [
        "01",
        "Property management",
        "Monitoring, maintenance, coordination and preparation. Your home stays ready, even when you are away.",
        "/gestion-propriete",
        KeyRound,
      ],
      [
        "02",
        "Private concierge",
        "Arrival, assistance and tailored requests with a discreet, genuinely human presence.",
        "/conciergerie",
        Sparkles,
      ],
      [
        "03",
        "Seasonal rentals",
        "Preparation, guests, quality checks and coordination to protect both the stay and the property.",
        "/location-saisonniere",
        CalendarDays,
      ],
      [
        "04",
        "Housekeeping & maintenance",
        "Housekeeping, linen, quality control and light maintenance — the invisible details that make the difference.",
        "/services/housekeeping",
        Wrench,
      ],
    ],
    propertyEyebrow: "Your home, our attention",
    propertyTitle: (
      <>
        Luxury begins
        <br />
        when everything feels <span>simple.</span>
      </>
    ),
    propertyText:
      "A beautiful property is more than four walls. It lives, it is maintained, it welcomes. Our role is to preserve that quality over time and make every interaction effortless.",
    propertyPoints: [
      "Regular checks adapted to your rhythm",
      "Coordination of trusted providers",
      "Careful preparation before every arrival",
      "Clear owner communication",
    ],
    propertyCta: "Discover property management",
    placeEyebrow: "The destination",
    placeTitle: (
      <>
        Marbella.
        <br />
        <span>Mijas. Costa del Sol.</span>
      </>
    ),
    placeText:
      "Precise local knowledge, from Marbella Old Town to the hills of Mijas and the coastline.",
    places: [
      ["Marbella", "Old Town, sea and an international address.", media.oldTown],
      ["Mijas", "Andalusian white villages, hills and Mediterranean views.", media.mijas],
      ["Costa del Sol", "A territory made for exceptional stays and residences.", media.coast],
    ],
    whyEyebrow: "The Solveig signature",
    whyTitle: "We do not sell a promise of luxury. We organise what allows it to be delivered.",
    whyText:
      "Real presence, clear method, attention to detail and quiet communication. This is what turns management into peace of mind.",
    why: [
      ["01", "Presence", "A local relay that knows your home and its surroundings."],
      ["02", "Precision", "Routines, checks and standards adapted to the property."],
      ["03", "Discretion", "A simple, human and confidential relationship."],
    ],
    finalTitle: "What if your property were already in the right hands?",
    finalText: "Tell us about your property, your presence and the level of support you expect.",
  },
  es: {
    reserve: "Hablemos de su propiedad",
    quote: "Descubrir los servicios",
    call: "Llamar a Solveig",
    discoverLabel: "Descubrir",
    exploreLabel: "Explorar",
    whatsappLabel: "WhatsApp de Solveig",
    emailLabel: "Correo electrónico",
    whatsappMessage: "Hola, me gustaría hablar sobre mi proyecto en Marbella o Mijas.",
    servicesEyebrow: "El arte del detalle",
    servicesTitle: (
      <>
        Un servicio que se ve.
        <br />
        <span>Una presencia que se siente.</span>
      </>
    ),
    servicesIntro:
      "Desde la supervisión de su vivienda hasta la bienvenida de sus invitados, cada intervención se concibe como una extensión natural de su propiedad.",
    featureEyebrow: "Su casa, nuestra atención",
    featureTitle: (
      <>
        El lujo comienza
        <br />
        cuando todo parece <span>simple.</span>
      </>
    ),
    featureText:
      "Una propiedad hermosa es mucho más que cuatro paredes. Vive, se mantiene y recibe. Nuestro papel es preservar esa calidad y hacer que cada interacción sea más sencilla.",
    featurePoints: [
      "Controles periódicos adaptados a su ritmo",
      "Coordinación de proveedores e intervenciones",
      "Preparación cuidada antes de cada llegada",
      "Comunicación clara con el propietario",
    ],
    featureCta: "Descubrir la gestión de propiedad",
    destinationEyebrow: "El destino",
    destinationTitle: (
      <>
        Marbella.
        <br />
        <span>Mijas. Costa del Sol.</span>
      </>
    ),
    destinationText:
      "Un conocimiento local preciso, desde el casco antiguo de Marbella hasta las colinas de Mijas y la costa.",
    signatureEyebrow: "La firma Solveig",
    signatureTitle:
      "No vendemos una promesa de lujo. Organizamos todo lo necesario para cumplirla.",
    signatureText:
      "Presencia real, método claro, atención al detalle y comunicación discreta. Esta combinación convierte la gestión en tranquilidad.",
    signaturePoints: [
      ["01", "Presencia", "Un enlace local que conoce su casa y su entorno."],
      ["02", "Precisión", "Rutinas, controles y estándares adaptados a la propiedad."],
      ["03", "Discreción", "Una relación simple, humana y confidencial."],
    ],
    finalEyebrow: "Su próximo capítulo en Marbella",
    eyebrow: "Property & lifestyle management · Marbella · Mijas",
    hero: (
      <>
        Su propiedad.
        <br />
        <em>Perfectamente acompañada.</em>
      </>
    ),
    intro:
      "Solveig’s Prestige Service acompaña a propietarios y viajeros que esperan más que una gestión: presencia, gusto, discreción y un verdadero dominio del terreno.",
    primary: "Hablemos de su propiedad",
    secondary: "Descubrir los servicios",
    scroll: "Entrar en el universo",
    serviceEyebrow: "El arte del detalle",
    serviceTitle: (
      <>
        Un servicio que se ve.
        <br />
        <span>Una presencia que se siente.</span>
      </>
    ),
    serviceIntro:
      "Desde la supervisión de su vivienda hasta la bienvenida de sus invitados, cada intervención se concibe como una extensión natural de su propiedad.",
    allServices: "Ver todos los servicios",
    services: [
      [
        "01",
        "Gestión de propiedad",
        "Supervisión, mantenimiento, coordinación y preparación. Su casa permanece lista, incluso cuando está lejos.",
        "/gestion-propriete",
        KeyRound,
      ],
      [
        "02",
        "Conserjería privada",
        "Recepción, asistencia y solicitudes a medida con una presencia discreta y profundamente humana.",
        "/conciergerie",
        Sparkles,
      ],
      [
        "03",
        "Alquiler de temporada",
        "Preparación, viajeros, control y coordinación para preservar la calidad de la estancia y del bien.",
        "/location-saisonniere",
        CalendarDays,
      ],
      [
        "04",
        "Housekeeping & mantenimiento",
        "Limpieza, ropa de cama, control de calidad y mantenimiento ligero: los detalles invisibles que marcan la diferencia.",
        "/services/housekeeping",
        Wrench,
      ],
    ],
    propertyEyebrow: "Su casa, nuestra atención",
    propertyTitle: (
      <>
        El lujo comienza
        <br />
        cuando todo parece <span>simple.</span>
      </>
    ),
    propertyText:
      "Una propiedad hermosa es mucho más que cuatro paredes. Vive, se mantiene y recibe. Nuestro papel es preservar esa calidad y hacer que cada interacción sea más sencilla.",
    propertyPoints: [
      "Controles periódicos adaptados a su ritmo",
      "Coordinación de proveedores e intervenciones",
      "Preparación cuidada antes de cada llegada",
      "Comunicación clara con el propietario",
    ],
    propertyCta: "Descubrir la gestión de propiedad",
    placeEyebrow: "El destino",
    placeTitle: (
      <>
        Marbella.
        <br />
        <span>Mijas. Costa del Sol.</span>
      </>
    ),
    placeText:
      "Un conocimiento local preciso, desde el casco antiguo de Marbella hasta las colinas de Mijas y la costa.",
    places: [
      ["Marbella", "El casco antiguo, el mar y una dirección internacional.", media.oldTown],
      ["Mijas", "El blanco andaluz, las colinas y las vistas al Mediterráneo.", media.mijas],
      [
        "Costa del Sol",
        "Un territorio pensado para estancias y residencias de excepción.",
        media.coast,
      ],
    ],
    whyEyebrow: "La firma Solveig",
    whyTitle:
      "No vendemos una promesa de lujo. Organizamos todo lo necesario para cumplirla.",
    whyText:
      "Presencia real, método claro, atención al detalle y comunicación discreta. Esta combinación convierte la gestión en tranquilidad.",
    why: [
      ["01", "Presencia", "Un enlace local que conoce su casa y su entorno."],
      ["02", "Precisión", "Rutinas, controles y estándares adaptados a la propiedad."],
      ["03", "Discreción", "Una relación simple, humana y confidencial."],
    ],
    finalTitle: "¿Y si su propiedad ya estuviera en buenas manos?",
    finalText:
      "Hablemos de su bien, de su ritmo de presencia y del nivel de acompañamiento que desea.",
  },
  ar: {
    reserve: "لنتحدث عن عقارك",
    quote: "اكتشف الخدمات",
    call: "اتصل بسولفيج",
    discoverLabel: "اكتشف",
    exploreLabel: "استكشف",
    whatsappLabel: "واتساب سولفيج",
    emailLabel: "البريد الإلكتروني",
    whatsappMessage: "مرحباً، أود التحدث عن مشروعي في ماربيا أو ميخاس.",
    servicesEyebrow: "فن التفاصيل",
    servicesTitle: (
      <>
        خدمة تُرى.
        <br />
        <span>حضور يُشعر.</span>
      </>
    ),
    servicesIntro:
      "من مراقبة منزلك إلى استقبال ضيوفك، كل تدخل يُصمم كامتداد طبيعي لعقارك.",
    featureEyebrow: "منزلك، اهتمامنا",
    featureTitle: (
      <>
        يبدأ الفخامة
        <br />
        عندما يبدو كل شيء <span>بسيطاً.</span>
      </>
    ),
    featureText:
      "العقار الجميل أكثر من أربعة جدران. يعيش، يُصان، يستقبل. دورنا هو الحفاظ على هذه الجودة مع الوقت وجعل كل تفاعل أكثر سلاسة.",
    featurePoints: [
      "فحوصات دورية متكيفة مع إيقاعك",
      "تنسيق المزودين والتدخلات",
      "تحضير دقيق قبل كل وصول",
      "تواصل واضح مع المالك",
    ],
    featureCta: "اكتشف إدارة العقارات",
    destinationEyebrow: "الوجهة",
    destinationTitle: (
      <>
        ماربيا.
        <br />
        <span>ميخاس. كوستا ديل سول.</span>
      </>
    ),
    destinationText:
      "معرفة محلية دقيقة، من البلدة القديمة في ماربيا إلى تلال ميخاس والساحل.",
    signatureEyebrow: "توقيع سولفيج",
    signatureTitle:
      "نحن لا نبيع وعداً بالفخامة. ننظم ما يسمح بتحقيقه.",
    signatureText:
      "حضور حقيقي، منهج واضح، اهتمام بالتفاصيل وتواصل هادئ. هذه التركيبة تحول الإدارة إلى طمأنينة.",
    signaturePoints: [
      ["01", "حضور", "رابط محلي يعرف منزلك ومحيطه."],
      ["02", "دقة", "روتينات وفحوصات ومعايير متكيفة مع العقار."],
      ["03", "سرية", "علاقة بسيطة وإنسانية وسرية."],
    ],
    finalEyebrow: "فصلك القادم في ماربيا",
    eyebrow: "إدارة العقارات وأسلوب الحياة · ماربيا · ميخاس",
    hero: (
      <>
        عقارك.
        <br />
        <em>مرافق بشكل مثالي.</em>
      </>
    ),
    intro:
      "سولفيج بريستيج سيرفس ترافق المالكين والمسافرين الذين ينتظرون أكثر من إدارة: حضوراً، ذوقاً، سرية وخبرة محلية حقيقية.",
    primary: "لنتحدث عن عقارك",
    secondary: "اكتشف الخدمات",
    scroll: "ادخل إلى العالم",
    serviceEyebrow: "فن التفاصيل",
    serviceTitle: (
      <>
        خدمة تُرى.
        <br />
        <span>حضور يُشعر.</span>
      </>
    ),
    serviceIntro:
      "من مراقبة منزلك إلى استقبال ضيوفك، كل تدخل يُصمم كامتداد طبيعي لعقارك.",
    allServices: "عرض جميع الخدمات",
    services: [
      [
        "01",
        "إدارة العقارات",
        "المراقبة والصيانة والتنسيق والتحضير. منزلك يبقى جاهزاً حتى وأنت بعيد.",
        "/gestion-propriete",
        KeyRound,
      ],
      [
        "02",
        "كونسيرج خاص",
        "الاستقبال والمساعدة والطلبات المخصصة بحضور سري وإنساني عميق.",
        "/conciergerie",
        Sparkles,
      ],
      [
        "03",
        "إيجارات موسمية",
        "التحضير والضيوف والرقابة والتنسيق للحفاظ على جودة الإقامة والعقار.",
        "/location-saisonniere",
        CalendarDays,
      ],
      [
        "04",
        "التنظيف والصيانة",
        "التنظيف والبياضات ومراقبة الجودة والصيانة الخفيفة: التفاصيل الخفية التي تصنع الفرق.",
        "/services/housekeeping",
        Wrench,
      ],
    ],
    propertyEyebrow: "منزلك، اهتمامنا",
    propertyTitle: (
      <>
        يبدأ الفخامة
        <br />
        عندما يبدو كل شيء <span>بسيطاً.</span>
      </>
    ),
    propertyText:
      "العقار الجميل أكثر من أربعة جدران. يعيش، يُصان، يستقبل. دورنا هو الحفاظ على هذه الجودة مع الوقت وجعل كل تفاعل أكثر سلاسة.",
    propertyPoints: [
      "فحوصات دورية متكيفة مع إيقاعك",
      "تنسيق المزودين والتدخلات",
      "تحضير دقيق قبل كل وصول",
      "تواصل واضح مع المالك",
    ],
    propertyCta: "اكتشف إدارة العقارات",
    placeEyebrow: "الوجهة",
    placeTitle: (
      <>
        ماربيا.
        <br />
        <span>ميخاس. كوستا ديل سول.</span>
      </>
    ),
    placeText:
      "معرفة محلية دقيقة، من البلدة القديمة في ماربيا إلى تلال ميخاس والساحل.",
    places: [
      ["ماربيا", "البلدة القديمة، البحر وعنوان دولي.", media.oldTown],
      ["ميخاس", "الأبيض الأندلسي، التلال ومناظر البحر المتوسط.", media.mijas],
      [
        "كوستا ديل سول",
        "إقليم مصمم للإقامات والمساكن الاستثنائية.",
        media.coast,
      ],
    ],
    whyEyebrow: "توقيع سولفيج",
    whyTitle:
      "نحن لا نبيع وعداً بالفخامة. ننظم ما يسمح بتحقيقه.",
    whyText:
      "حضور حقيقي، منهج واضح، اهتمام بالتفاصيل وتواصل هادئ. هذه التركيبة تحول الإدارة إلى طمأنينة.",
    why: [
      ["01", "حضور", "رابط محلي يعرف منزلك ومحيطه."],
      ["02", "دقة", "روتينات وفحوصات ومعايير متكيفة مع العقار."],
      ["03", "سرية", "علاقة بسيطة وإنسانية وسرية."],
    ],
    finalTitle: "ماذا لو كان عقارك بالفعل في أيدٍ أمينة؟",
    finalText:
      "أخبرنا عن عقارك وإيقاع حضورك ومستوى الدعم الذي تتوقعه.",
  },
};

function Index() {
  const locale = useSolveigLocale();
  const c = copy[locale];
  const whatsappLink = `https://wa.me/34623626724?text=${encodeURIComponent(c.whatsappMessage)}`;
  const services = c.services;
  const heroServiceLabels = {
    fr: ["Gestion de propriété", "Services de conciergerie", "Gestion locative", "Assistance lifestyle"],
    en: ["Property management", "Concierge services", "Rental management", "Lifestyle assistance"],
    es: ["Gestión de propiedades", "Servicios de conserjería", "Gestión de alquileres", "Asistencia lifestyle"],
    ar: ["إدارة العقارات", "خدمات الكونسيرج", "إدارة الإيجارات", "مساعدة أسلوب الحياة"],
  }[locale];

  return (
    <SolveigLayout hideHeader>
      <section className="solveig-hero solveig-cinematic-home" aria-label="Solveig’s Prestige Service — Marbella & Mijas">
        <div className="solveig-cinematic-backdrop" aria-hidden="true" />
        <div className="solveig-cinematic-shade" aria-hidden="true" />
        <header className="solveig-cinematic-header">
          <Link to="/" className="solveig-mini-brand" aria-label="Solveig’s Prestige Service — Accueil">
            <span>SOLVEIG’S</span><small>PRESTIGE SERVICE</small>
          </Link>
          <nav className="solveig-cinematic-nav" aria-label="Navigation principale">
            <Link to="/" className="is-current">ACCUEIL</Link>
            <Link to="/zones">MARBELLA</Link>
            <Link to="/zones">MIJAS</Link>
            <Link to="/services">NOS SERVICES</Link>
            <Link to="/location-saisonniere">PROPRIÉTÉS</Link>
            <Link to="/a-propos">À PROPOS</Link>
            <Link to="/contact">CONTACT</Link>
          </nav>
          <div className="solveig-cinematic-actions">
            <Link to="/locations-maroc" className="solveig-outline-control"><span className="solveig-morocco-flag" aria-hidden="true">🇲🇦</span><span className="solveig-morocco-label">UNIVERS MAROCAIN</span></Link>
            <div className="solveig-locale-control"><UniverseLanguageMenu universe="costa" /></div>
            <button type="button" className="solveig-mobile-menu" aria-label="Ouvrir le menu" onClick={() => document.querySelector(".solveig-mobile-drawer")?.classList.toggle("is-open")}>☰</button>
          </div>
        </header>
        <nav className="solveig-mobile-drawer" aria-label="Menu mobile">
          <Link to="/">Accueil</Link><Link to="/zones">Marbella & Mijas</Link><Link to="/services">Nos services</Link><Link to="/location-saisonniere">Propriétés</Link><Link to="/a-propos">À propos</Link><Link to="/contact">Contact</Link><Link to="/locations-maroc">Univers marocain 🇲🇦</Link>
        </nav>
        <div className="solveig-cinematic-center">
          <svg className="solveig-cinematic-monogram" viewBox="0 0 220 170" role="img" aria-label="Monogramme SP entrelacé avec branche d’olivier">
            <defs><linearGradient id="solveigGold" x1="0" y1="0" x2="0.9" y2="1"><stop offset="0" stopColor="#f4dfa5"/><stop offset=".45" stopColor="#c29a52"/><stop offset="1" stopColor="#f0d28c"/></linearGradient></defs>
            <g fill="none" stroke="url(#solveigGold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M29 145C45 121 52 88 53 29C68 61 84 87 112 113"/>
              <path d="M41 125C26 120 19 108 21 94C35 100 42 111 44 123"/>
              <path d="M48 91C34 82 32 68 37 56C49 65 52 77 50 89"/>
              <path d="M53 57C48 44 55 30 65 23C69 37 64 50 57 59"/>
              <path d="M62 72C76 78 84 92 85 104"/>
              <path d="M31 144C53 149 72 148 91 141"/>
            </g>
            <text x="49" y="128" fill="url(#solveigGold)" fontFamily="Baskerville, 'Times New Roman', serif" fontSize="118" fontWeight="400" letterSpacing="-17">S</text>
            <text x="91" y="143" fill="url(#solveigGold)" fontFamily="Baskerville, 'Times New Roman', serif" fontSize="119" fontWeight="400" letterSpacing="-17">P</text>
          </svg>
          <h1>SOLVEIG’S</h1>
          <p className="solveig-cinematic-subtitle">PRESTIGE SERVICE</p>
          <span className="solveig-cinematic-rule" />
          <p className="solveig-cinematic-region">MARBELLA &amp; MIJAS</p>
          <p className="solveig-cinematic-tagline">Une présence locale discrète pour<br className="desktop-break" /> des propriétés exceptionnelles sur la Costa del Sol</p>
        </div>
        <nav className="solveig-cinematic-services" aria-label="Découvrir nos services">
          <Link to="/gestion-propriete"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M4 22 24 5l20 17M10 19v24h28V19M20 43V29h8v14"/></svg><span>PROPERTY<br/>MANAGEMENT</span><i>→</i></Link>
          <Link to="/conciergerie"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 34h32l-4-6H12zM13 28a11 11 0 0 1 22 0M24 6v6M20 6h8"/></svg><span>CONCIERGE<br/>SERVICES</span><i>→</i></Link>
          <Link to="/location-saisonniere"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="31" cy="14" r="9"/><path d="m25 20-19 19 5 5 19-19M27 14h8"/></svg><span>RENTAL<br/>MANAGEMENT</span><i>→</i></Link>
          <Link to="/services/chef-a-domicile"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M11 27a13 13 0 1 1 26 0v4H11zM15 31v10h18V31M20 41v3h8v-3"/></svg><span>CHEF<br/>À DOMICILE</span><i>→</i></Link>
        </nav>
        <a href="#services" className="solveig-cinematic-scroll" aria-label="Découvrir la suite">DÉCOUVRIR <span>↓</span></a>
      </section>

      <section id="services" className="relative bg-[#f7f0e3]">
        <div className="absolute inset-0 soft-grid opacity-40" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.26em] text-[#b28a50]">
                {c.servicesEyebrow}
              </p>
              <h2 className="mt-4 font-display text-5xl font-medium leading-[.9] text-[#34271e] sm:text-6xl md:text-7xl">
                {c.servicesTitle}
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#66584c] lg:justify-self-end">
              {c.servicesIntro}
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map(([number, title, text, to, Icon], index) => (
              <Link key={to} to={to} className="solveig-service-card group">
                <div className="solveig-service-image-wrap">
                  <img src={[media.hero, "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=85", "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85"][index]} alt="" loading="lazy" className="solveig-service-image" />
                  <span className="solveig-service-image-number">{number}</span>
                </div>
                <div className="solveig-service-card-content">
                <div className="solveig-service-icon">
                  <Icon size={18} />
                </div>
                <div className="mt-6">
                  <span className="text-[10px] font-bold uppercase tracking-[.2em] text-[#b28a50]">
                    {number}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-[#34271e]">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-[#74665a]">{text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.2em] text-[#4f7f80]">
                    {c.discoverLabel} <ArrowRight size={13} />
                  </span>
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#7fd2dc] text-[#173b3d]">
        <div className="absolute inset-0 aqua-grid opacity-40" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-12 lg:py-32">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[.26em] text-[#e5c17b]">
              {c.featureEyebrow}
            </p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[.9] sm:text-6xl md:text-7xl">
              {c.featureTitle}
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#285b5f]/85">{c.featureText}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {c.featurePoints.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs font-semibold">
                  <Check size={15} />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="prestige" size="lg" className="mt-8 rounded-full">
              <Link to="/gestion-propriete">
                {c.featureCta}
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-[1.35fr_.65fr] gap-3 sm:gap-4">
            <ScrollParallaxImage
              src={media.hero}
              alt="Villa de prestige à Marbella"
              className="row-span-2 min-h-[300px] rounded-[1.6rem] sm:min-h-[430px]"
            />
            <ScrollParallaxImage
              src={media.oldTown}
              alt="Marbella historique"
              className="min-h-[145px] rounded-[1.6rem] sm:min-h-[205px]"
            />
            <ScrollParallaxImage
              src={media.mijas}
              alt="Mijas, Andalousie"
              className="min-h-[145px] rounded-[1.6rem] sm:min-h-[205px]"
            />
          </div>
        </div>
      </section>

      <ChefServiceSpotlight />

      <ContactBand />
    </SolveigLayout>
  );
}
