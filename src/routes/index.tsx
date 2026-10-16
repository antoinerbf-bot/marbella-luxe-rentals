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


const SITE_URL =
  import.meta.env["VITE_SITE_URL"] ?? "https://solveigconciergeriemarbella.vercel.app";

const media = {
  hero: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=90",
  oldTown:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Marbella_-_Plaza_de_los_Naranjos_8.jpg",
  mijas:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mijas_Pueblo_from_the_south_(Mijas,_Dec_2012).jpg",
  coast: "https://commons.wikimedia.org/wiki/Special:Redirect/file/PLAYAS_DE_MIJAS.jpg",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solveig’s Prestige Service — Property Management in Marbella & Mijas" },
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
        content: "A discreet local presence for exceptional properties on the Costa del Sol.",
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
      ["01", "Presencia", "Un apoyo local que conoce su casa y su entorno."],
      ["02", "Precisión", "Rutinas, controles y estándares adaptados a la propiedad."],
      ["03", "Discreción", "Una relación sencilla, humana y confidencial."],
    ],
    finalEyebrow: "Su próximo capítulo en Marbella",
    eyebrow: "Gestión de propiedades y estilo de vida · Marbella · Mijas",
    hero: (
      <>
        Su propiedad.
        <br />
        <em>Perfectamente cuidada.</em>
      </>
    ),
    intro:
      "Solveig’s Prestige Service acompaña a propietarios y huéspedes que esperan algo más que una gestión: presencia, gusto, discreción y conocimiento real del territorio.",
    primary: "Hablemos de su propiedad",
    secondary: "Descubrir los servicios",
    scroll: "Entrar en la experiencia",
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
        "Preparación, huéspedes, control y coordinación para proteger la calidad de la estancia y del inmueble.",
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
      ["Marbella", "Casco antiguo, mar y una dirección internacional.", media.oldTown],
      ["Mijas", "El blanco andaluz, las colinas y las vistas al Mediterráneo.", media.mijas],
      [
        "Costa del Sol",
        "Un territorio pensado para estancias y residencias excepcionales.",
        media.coast,
      ],
    ],
    whyEyebrow: "La firma Solveig",
    whyTitle: "No vendemos una promesa de lujo. Organizamos todo lo necesario para cumplirla.",
    whyText:
      "Presencia real, método claro, atención al detalle y comunicación discreta. Esta combinación convierte la gestión en tranquilidad.",
    why: [
      ["01", "Presencia", "Un apoyo local que conoce su casa y su entorno."],
      ["02", "Precisión", "Rutinas, controles y estándares adaptados a la propiedad."],
      ["03", "Discreción", "Una relación sencilla, humana y confidencial."],
    ],
    finalTitle: "¿Y si su propiedad ya estuviera en buenas manos?",
    finalText: "Háblenos de su propiedad, de su presencia y del nivel de acompañamiento que busca.",
  },
  ar: {
    reserve: "لنتحدث عن عقارك",
    quote: "اكتشف خدماتنا",
    call: "اتصل بسولفيغ",
    discoverLabel: "اكتشف",
    exploreLabel: "استكشف",
    whatsappLabel: "واتساب سولفيغ",
    emailLabel: "البريد الإلكتروني",
    whatsappMessage: "مرحباً، أود التحدث عن مشروعي في ماربيا أو ميخاس.",
    servicesEyebrow: "فنّ التفاصيل",
    servicesTitle: (
      <>
        خدمة تلاحظها.
        <br />
        <span>وحضور تشعر به.</span>
      </>
    ),
    servicesIntro:
      "من العناية بمنزلك إلى استقبال ضيوفك، صُممت كل خدمة لتكون امتداداً طبيعياً لعقارك.",
    featureEyebrow: "منزلك، بعنايتنا",
    featureTitle: (
      <>
        تبدأ الفخامة
        <br />
        حين يصبح كل شيء <span>سهلاً.</span>
      </>
    ),
    featureText:
      "العقار الجميل أكثر من أربعة جدران؛ إنه مكان يعيش ويُعتنى به ويستقبل ضيوفه. نحافظ على جودته ونجعل كل تجربة أكثر سهولة.",
    featurePoints: [
      "زيارات دورية تناسب إيقاعك",
      "تنسيق مزودي الخدمات الموثوقين",
      "تهيئة دقيقة قبل كل وصول",
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
    destinationText: "معرفة محلية دقيقة تمتد من البلدة القديمة في ماربيا إلى تلال ميخاس والساحل.",
    signatureEyebrow: "بصمة سولفيغ",
    signatureTitle: "لا نبيع وعداً بالفخامة؛ بل ننظم كل ما يتيح تحقيقها.",
    signatureText:
      "حضور فعلي، ومنهج واضح، واهتمام بالتفاصيل، وتواصل هادئ. هكذا تتحول الإدارة إلى راحة بال.",
    signaturePoints: [
      ["01", "الحضور", "شريك محلي يعرف منزلك ومحيطه."],
      ["02", "الدقة", "روتين ومتابعة بمعايير تناسب العقار."],
      ["03", "الخصوصية", "علاقة بسيطة وإنسانية وسرية."],
    ],
    finalEyebrow: "فصل جديد في ماربيا",
    eyebrow: "إدارة العقارات وأسلوب الحياة · ماربيا · ميخاس",
    hero: (
      <>
        عقارك.
        <br />
        <em>بعناية تليق به.</em>
      </>
    ),
    intro:
      "ترافق سولفيغ أصحاب العقارات والضيوف الباحثين عن أكثر من الإدارة: حضوراً وذوقاً وخصوصية وخبرة محلية حقيقية.",
    primary: "لنتحدث عن عقارك",
    secondary: "اكتشف الخدمات",
    scroll: "ادخل إلى التجربة",
    serviceEyebrow: "فنّ التفاصيل",
    serviceTitle: (
      <>
        خدمة تلاحظها.
        <br />
        <span>وحضور تشعر به.</span>
      </>
    ),
    serviceIntro:
      "من العناية بمنزلك إلى استقبال ضيوفك، صُممت كل خدمة لتكون امتداداً طبيعياً لعقارك.",
    allServices: "عرض كل الخدمات",
    services: [
      [
        "01",
        "إدارة العقارات",
        "متابعة وصيانة وتنسيق وتجهيز. يبقى منزلك مستعداً حتى أثناء غيابك.",
        "/gestion-propriete",
        KeyRound,
      ],
      [
        "02",
        "كونسيرج خاص",
        "استقبال ومساعدة وطلبات مخصصة بحضور هادئ وإنساني.",
        "/conciergerie",
        Sparkles,
      ],
      [
        "03",
        "إيجارات موسمية",
        "تجهيز الضيوف والمتابعة والتنسيق لحماية جودة الإقامة والعقار.",
        "/location-saisonniere",
        CalendarDays,
      ],
      [
        "04",
        "التنظيف والصيانة",
        "تنظيف ومفروشات ومراقبة جودة وصيانة خفيفة؛ تفاصيل تصنع الفرق.",
        "/services/housekeeping",
        Wrench,
      ],
    ],
    propertyEyebrow: "منزلك، بعنايتنا",
    propertyTitle: (
      <>
        تبدأ الفخامة
        <br />
        حين يصبح كل شيء <span>سهلاً.</span>
      </>
    ),
    propertyText:
      "العقار الجميل أكثر من أربعة جدران؛ إنه مكان يعيش ويُعتنى به ويستقبل ضيوفه. نحافظ على جودته ونجعل كل تجربة أكثر سهولة.",
    propertyPoints: [
      "زيارات دورية تناسب إيقاعك",
      "تنسيق مزودي الخدمات الموثوقين",
      "تهيئة دقيقة قبل كل وصول",
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
    placeText: "معرفة محلية دقيقة تمتد من البلدة القديمة في ماربيا إلى تلال ميخاس والساحل.",
    places: [
      ["ماربيا", "البلدة القديمة والبحر ووجهة عالمية.", media.oldTown],
      ["ميخاس", "قرى أندلسية بيضاء وتلال وإطلالات متوسطية.", media.mijas],
      ["كوستا ديل سول", "منطقة لإقامات ومنازل استثنائية.", media.coast],
    ],
    whyEyebrow: "بصمة سولفيغ",
    whyTitle: "لا نبيع وعداً بالفخامة؛ بل ننظم كل ما يتيح تحقيقها.",
    whyText:
      "حضور فعلي، ومنهج واضح، واهتمام بالتفاصيل، وتواصل هادئ. هكذا تتحول الإدارة إلى راحة بال.",
    why: [
      ["01", "الحضور", "شريك محلي يعرف منزلك ومحيطه."],
      ["02", "الدقة", "روتين ومتابعة بمعايير تناسب العقار."],
      ["03", "الخصوصية", "علاقة بسيطة وإنسانية وسرية."],
    ],
    finalTitle: "ماذا لو كان عقارك بين أيدٍ أمينة بالفعل؟",
    finalText: "أخبرنا عن عقارك وإيقاع حضورك ومستوى الدعم الذي تبحث عنه.",
  },
} as const;

function Index() {
  const locale = useSolveigLocale();
  const c = copy[locale];
  const whatsappLink = `https://wa.me/34623626724?text=${encodeURIComponent(c.whatsappMessage)}`;
  const services = c.services;

  return (
    <SolveigLayout>
      <section className="solveig-hero relative min-h-[100svh] overflow-hidden bg-[#2f241c] text-white">
        <ScrollParallaxImage
          src={media.hero}
          alt="Villa de prestige sur la Costa del Sol au coucher du soleil"
          loading="eager"
          fetchPriority="high"
          className="hero-kenburns absolute inset-0"
          imageClassName="h-full w-full"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,25,30,.22),rgba(30,23,18,.06)_38%,rgba(24,18,13,.65))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,transparent_5%,rgba(24,18,13,.18)_100%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col items-center justify-center px-5 pb-36 pt-28 text-center sm:px-8 sm:pb-40">
          <div className="solveig-hero-copy max-w-5xl">
            <div className="mb-4 flex flex-col items-center">
              <span aria-hidden="true" className="solveig-hero-monogram">SP</span>
              <span className="solveig-custom-wordmark">Solveig’s</span>
              <span className="solveig-custom-sub">PRESTIGE SERVICE</span>
            </div>
            <p className="solveig-hero-location">MARBELLA &amp; MIJAS</p>
            <h1 className="solveig-hero-statement">
              <span>Une présence locale discrète</span>
              <span>pour des propriétés d’exception sur la Costa del Sol</span>
            </h1>

          </div>
        </div>
        <nav aria-label="Accès rapides aux services" className="solveig-hero-services">
          <Link to="/gestion-propriete" className="solveig-hero-service">
            <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M5 22 24 6l19 16M11 19v23h26V19M20 42V28h8v14" /></svg>
            <span>Gestion<br />de propriété</span><span className="solveig-service-arrow">↗</span>
          </Link>
          <Link to="/conciergerie" className="solveig-hero-service">
            <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 32h32M12 32v-7a12 12 0 0 1 24 0v7M5 38h38M24 7v4" /></svg>
            <span>Services<br />de conciergerie</span><span className="solveig-service-arrow">↗</span>
          </Link>
          <Link to="/location-saisonniere" className="solveig-hero-service">
            <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="31" cy="15" r="9"/><path d="m25 21-18 18 5 5 18-18M8 35l5 5M31 11v8M27 15h8" /></svg>
            <span>Gestion<br />locative</span><span className="solveig-service-arrow">↗</span>
          </Link>
          <Link to="/services/housekeeping" className="solveig-hero-service">
            <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 42V22M24 29C9 29 5 18 5 10c12 0 19 7 19 19M24 24C24 11 31 5 43 5c0 13-6 21-19 21M24 36C14 36 9 30 8 23c10 0 16 5 16 13" /></svg>
            <span>Chef<br />à domicile</span><span className="solveig-service-arrow">↗</span>
          </Link>
        </nav>
        <a href="#services" className="solveig-hero-scroll" aria-label={c.scroll}><span>Défiler pour découvrir</span><ArrowDown size={15} /></a>
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
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([number, title, text, link, Icon]) => (
              <Link key={title} to={link} className="solveig-service-card group">
                <div className="flex items-start justify-between">
                  <span className="solveig-service-icon">
                    <Icon size={17} />
                  </span>
                  <span className="font-display text-3xl text-[#b9935a]/65">{number}</span>
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-3xl font-medium text-[#34271e]">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-[#74665a]">{text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.2em] text-[#4f7f80]">
                    {c.discoverLabel} <ArrowRight size={13} />
                  </span>
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

      <section className="relative bg-[#fbf6eb]">
        <svg
          aria-hidden="true"
          viewBox="0 0 150 220"
          className="coastal-palm pointer-events-none absolute right-1 top-2 h-24 w-16 text-[#b28a50]/15 sm:right-3 sm:h-52 sm:w-36 sm:text-[#b28a50]/25 lg:right-16"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path strokeWidth="2.4" d="M104 218C105 157 94 111 78 48" />
          <path
            strokeWidth="2.1"
            d="M78 48C62 31 41 24 14 25c23 4 39 14 57 23-20-25-42-33-67-37 27 2 50 7 76 33-8-25-16-38-31-52 20 14 31 29 39 52 2-26 10-44 23-59-10 20-15 38-16 58 17-22 34-34 54-40-20 10-38 25-55 47 24-14 43-18 61-17-23 2-43 10-64 26"
          />
          <path strokeWidth="1.4" d="M0 218h150" />
        </svg>
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[.26em] text-[#b28a50]">
              {c.destinationEyebrow}
            </p>
            <h2 className="mt-4 font-display text-5xl font-medium leading-[.9] text-[#34271e] sm:text-6xl md:text-7xl">
              {c.destinationTitle}
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#74665a]">{c.destinationText}</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {c.places.map(([name, text, image], index) => (
              <Link
                key={name}
                to="/zones"
                className={"solveig-destination group " + (index === 1 ? "md:translate-y-10" : "")}
              >
                <ScrollParallaxImage
                  src={image}
                  alt=""
                  className="absolute inset-0"
                  imageClassName="transition-[filter] duration-700 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2119]/85 via-[#2d2119]/20 to-transparent" />
                <div className="relative flex min-h-[470px] flex-col justify-end p-7 text-white">
                  <span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#e8c986]">
                    Costa del Sol
                  </span>
                  <h3 className="mt-2 font-display text-4xl">{name}</h3>
                  <p className="mt-2 max-w-sm text-xs leading-6 text-white/72">{text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.18em]">
                    {c.exploreLabel} <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#33251b] text-[#f8efdf]">
        <ScrollParallaxImage src={media.coast} alt="" className="absolute inset-0 opacity-25" />
        <div className="absolute inset-0 bg-[#33251b]/78" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.26em] text-[#e5c17b]">
                {c.signatureEyebrow}
              </p>
              <h2 className="mt-5 font-display text-5xl font-medium leading-[.9] sm:text-6xl md:text-7xl">
                {c.signatureTitle}
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/66">{c.signatureText}</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 md:grid-cols-3">
              {c.signaturePoints.map(([n, t, d]) => (
                <article key={n} className="bg-[#33251b]/75 p-7 backdrop-blur-sm">
                  <span className="font-display text-3xl text-[#e2bd75]">{n}</span>
                  <h3 className="mt-9 font-display text-3xl">{t}</h3>
                  <p className="mt-2 text-xs leading-6 text-white/58">{d}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f0e3]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#34271e] px-7 py-16 text-center text-[#f8efdf] shadow-elegant sm:px-12 lg:py-24">
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_50%_10%,rgba(224,188,116,.45),transparent_30%)]" />
            <div className="relative mx-auto max-w-4xl">
              <div className="flex flex-col items-center">
                <span className="solveig-custom-wordmark">Solveig’s</span>
                <span className="solveig-custom-sub">PRESTIGE SERVICE</span>
              </div>
              <p className="mt-8 text-[10px] font-bold uppercase tracking-[.26em] text-[#e5c17b]">
                {c.finalEyebrow}
              </p>
              <h2 className="mt-5 font-display text-5xl font-medium leading-[.9] sm:text-6xl md:text-7xl">
                {c.finalTitle}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65">
                {c.finalText}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#f4e7d1] px-7 text-sm font-semibold text-[#34271e]"
                >
                  {c.whatsappLabel}
                </a>
                <a
                  href="mailto:solveighybord@gmail.com"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold"
                >
                  {c.emailLabel}
                </a>
                <a
                  href="tel:+34623626724"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold"
                >
                  +34 623 626 724
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-[60] flex size-14 items-center justify-center rounded-full bg-[#2e8068] text-white shadow-2xl ring-2 ring-white/30 transition hover:-translate-y-1 hover:scale-105"
        aria-label={c.whatsappLabel}
      >
        <MessageCircle size={21} />
      </a>
      <ContactBand />
    </SolveigLayout>
  );
}
