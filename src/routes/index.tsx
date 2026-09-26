// Vercel retry after deployment-rate-limit window.
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronRight,
  Home,
  KeyRound,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactBand, SolveigLayout, TrustStrip, useSolveigLocale } from "@/components/SolveigLayout";
import villaImage from "@/assets/marbella-prestige-villa.jpg";

const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://solveigconciergeriemarbella.vercel.app";

const media = {
  hero: villaImage,
  oldTown: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Marbella_-_Plaza_de_los_Naranjos_8.jpg",
  mijas: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mijas_Pueblo_from_the_south_(Mijas,_Dec_2012).jpg",
  coast: "https://commons.wikimedia.org/wiki/Special:Redirect/file/PLAYAS_DE_MIJAS.jpg",
};

const serviceImages = {
  property: villaImage,
  concierge: media.oldTown,
  seasonal: media.coast,
  housekeeping: media.mijas,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Solveig’s Prestige Service — Property Management in Marbella & Mijas" },
      { name: "description", content: "Premium property management, private concierge and seasonal rental support in Marbella, Mijas and the Costa del Sol." },
      { property: "og:title", content: "Solveig’s Prestige Service — Marbella & Mijas" },
      { property: "og:description", content: "A discreet local presence for exceptional properties on the Costa del Sol." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-video-preview:-1" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "Solveig’s Prestige Service", url: SITE_URL, description: "Gestion de propriété, conciergerie privée et location saisonnière à Marbella, Mijas et sur la Costa del Sol.", publisher: { "@type": "Organization", name: "Solveig’s Prestige Service", telephone: "+34623626724", email: "solveighybord@gmail.com", areaServed: ["Marbella","Mijas","Costa del Sol"] } }) }],
  }),
  component: Index,
});

const copy = {
  fr: {
    reserve: "Parlons de votre propriété",
    quote: "Découvrir les services",
    call: "Appeler Solveig",
    servicesEyebrow: "L’art du détail",
    servicesTitle: <>Un service qui se voit.<br /><span>Une présence qui se ressent.</span></>,
    servicesIntro: "De la surveillance de votre maison à l’accueil de vos invités, chaque intervention est pensée comme une extension naturelle de votre propriété.",
    featureEyebrow: "Votre maison, notre attention",
    featureTitle: <>Le luxe commence<br />quand tout semble <span>simple.</span></>,
    featureText: "Une belle propriété ne se résume pas à quatre murs. Elle vit, elle s’entretient, elle accueille. Notre rôle est de préserver cette qualité dans le temps et de rendre chaque interaction plus fluide.",
    featurePoints: ["Contrôles réguliers adaptés à votre rythme", "Coordination des prestataires et interventions", "Préparation avant chaque arrivée", "Communication claire avec le propriétaire"],
    featureCta: "Découvrir la gestion de propriété",
    destinationEyebrow: "La destination",
    destinationTitle: <>Marbella.<br /><span>Mijas. Costa del Sol.</span></>,
    destinationText: "Une connaissance locale précise, du vieux Marbella aux collines de Mijas et au littoral.",
    signatureEyebrow: "La signature Solveig",
    signatureTitle: "Nous ne vendons pas une promesse de luxe. Nous organisons ce qui permet de la tenir.",
    signatureText: "Présence réelle, méthode claire, attention aux détails et communication sans bruit. C’est cette combinaison qui transforme une gestion en tranquillité.",
    signaturePoints: [["01","Présence","Un relais local qui connaît votre maison et son environnement."],["02","Précision","Des routines, des contrôles et des standards adaptés au bien."],["03","Discrétion","Une relation simple, humaine et confidentielle."]],
    finalEyebrow: "Votre prochain chapitre à Marbella",
    eyebrow: "Property & lifestyle management · Marbella · Mijas",
    hero: <>Votre propriété.<br /><em>Parfaitement accompagnée.</em></>,
    intro: "Solveig’s Prestige Service accompagne les propriétaires et voyageurs qui attendent plus qu’une gestion : une présence, du goût, de la discrétion et une vraie maîtrise du terrain.",
    primary: "Parlons de votre propriété",
    secondary: "Découvrir les services",
    scroll: "Entrer dans l’univers",
    serviceEyebrow: "L’art du détail",
    serviceTitle: <>Un service qui se voit.<br /><span>Une présence qui se ressent.</span></>,
    serviceIntro: "De la surveillance de votre maison à l’accueil de vos invités, chaque intervention est pensée comme une extension naturelle de votre propriété.",
    allServices: "Voir tous les services",
    services: [
      ["01", "Gestion de propriété", "Surveillance, entretien, coordination et préparation. Votre maison reste prête, même lorsque vous êtes loin.", "/gestion-propriete", serviceImages.property],
      ["02", "Conciergerie privée", "Accueil, assistance et demandes sur mesure avec une présence discrète et profondément humaine.", "/conciergerie", serviceImages.concierge],
      ["03", "Location saisonnière", "Préparation, voyageurs, contrôle et coordination pour préserver la qualité du séjour et du bien.", "/location-saisonniere", serviceImages.seasonal],
      ["04", "Housekeeping & maintenance", "Ménage, linge, contrôle qualité et maintenance légère : les détails invisibles qui font la différence.", "/services/housekeeping", serviceImages.housekeeping],
    ],
    propertyEyebrow: "Votre maison, notre attention",
    propertyTitle: <>Le luxe commence<br />quand tout semble <span>simple.</span></>,
    propertyText: "Une belle propriété ne se résume pas à quatre murs. Elle vit, elle s’entretient, elle accueille. Notre rôle est de préserver cette qualité dans le temps et de rendre chaque interaction plus fluide.",
    propertyPoints: ["Contrôles réguliers adaptés à votre rythme", "Coordination des prestataires et interventions", "Préparation avant chaque arrivée", "Communication claire avec le propriétaire"],
    propertyCta: "Découvrir la gestion de propriété",
    placeEyebrow: "La destination",
    placeTitle: <>Marbella.<br /><span>Mijas. Costa del Sol.</span></>,
    placeText: "Une connaissance locale précise, du vieux Marbella aux collines de Mijas et au littoral.",
    places: [["Marbella", "Le vieux centre, la mer et une adresse internationale.", media.oldTown], ["Mijas", "Le blanc andalou, les collines et les vues Méditerranée.", media.mijas], ["Costa del Sol", "Un territoire pensé pour les séjours et les résidences d’exception.", media.coast]],
    whyEyebrow: "La signature Solveig",
    whyTitle: "Nous ne vendons pas une promesse de luxe. Nous organisons ce qui permet de la tenir.",
    whyText: "Présence réelle, méthode claire, attention aux détails et communication sans bruit. C’est cette combinaison qui transforme une gestion en tranquillité.",
    why: [["01","Présence","Un relais local qui connaît votre maison et son environnement."],["02","Précision","Des routines, des contrôles et des standards adaptés au bien."],["03","Discrétion","Une relation simple, humaine et confidentielle."]],
    finalTitle: "Et si votre propriété était déjà entre de bonnes mains ?",
    finalText: "Parlons de votre bien, de votre rythme de présence et du niveau d’accompagnement que vous souhaitez.",
  },
  en: {
    reserve: "Discuss your property",
    quote: "Explore our services",
    call: "Call Solveig",
    servicesEyebrow: "The art of detail",
    servicesTitle: <>A service you notice.<br /><span>A presence you feel.</span></>,
    servicesIntro: "From watching over your home to welcoming your guests, every intervention is designed as a natural extension of your property.",
    featureEyebrow: "Your home, our attention",
    featureTitle: <>Luxury begins<br />when everything feels <span>simple.</span></>,
    featureText: "A beautiful property is more than four walls. It lives, it is maintained, it welcomes. Our role is to preserve that quality over time and make every interaction effortless.",
    featurePoints: ["Regular checks adapted to your rhythm", "Coordination of trusted providers", "Careful preparation before every arrival", "Clear owner communication"],
    featureCta: "Discover property management",
    destinationEyebrow: "The destination",
    destinationTitle: <>Marbella.<br /><span>Mijas. Costa del Sol.</span></>,
    destinationText: "Precise local knowledge, from Marbella Old Town to the hills of Mijas and the coastline.",
    signatureEyebrow: "The Solveig signature",
    signatureTitle: "We do not sell a promise of luxury. We organise what allows it to be delivered.",
    signatureText: "Real presence, clear method, attention to detail and quiet communication. This is what turns management into peace of mind.",
    signaturePoints: [["01","Presence","A local relay that knows your home and its surroundings."],["02","Precision","Routines, checks and standards adapted to the property."],["03","Discretion","A simple, human and confidential relationship."]],
    finalEyebrow: "Your next chapter in Marbella",
    eyebrow: "Property & lifestyle management · Marbella · Mijas",
    hero: <>Your property.<br /><em>Perfectly cared for.</em></>,
    intro: "Solveig’s Prestige Service supports owners and guests who expect more than management: presence, taste, discretion and genuine local expertise.",
    primary: "Discuss your property",
    secondary: "Explore our services",
    scroll: "Enter the experience",
    serviceEyebrow: "The art of detail",
    serviceTitle: <>A service you notice.<br /><span>A presence you feel.</span></>,
    serviceIntro: "From watching over your home to welcoming your guests, every intervention is designed as a natural extension of your property.",
    allServices: "View all services",
    services: [
      ["01","Property management","Monitoring, maintenance, coordination and preparation. Your home stays ready, even when you are away.","/gestion-propriete",serviceImages.property],
      ["02","Private concierge","Arrival, assistance and tailored requests with a discreet, genuinely human presence.","/conciergerie",serviceImages.concierge],
      ["03","Seasonal rentals","Preparation, guests, quality checks and coordination to protect both the stay and the property.","/location-saisonniere",serviceImages.seasonal],
      ["04","Housekeeping & maintenance","Housekeeping, linen, quality control and light maintenance — the invisible details that make the difference.","/services/housekeeping",serviceImages.housekeeping],
    ],
    propertyEyebrow: "Your home, our attention",
    propertyTitle: <>Luxury begins<br />when everything feels <span>simple.</span></>,
    propertyText: "A beautiful property is more than four walls. It lives, it is maintained, it welcomes. Our role is to preserve that quality over time and make every interaction effortless.",
    propertyPoints: ["Regular checks adapted to your rhythm","Coordination of trusted providers","Careful preparation before every arrival","Clear owner communication"],
    propertyCta: "Discover property management",
    placeEyebrow: "The destination",
    placeTitle: <>Marbella.<br /><span>Mijas. Costa del Sol.</span></>,
    placeText: "Precise local knowledge, from Marbella Old Town to the hills of Mijas and the coastline.",
    places: [["Marbella","Old Town, sea and an international address.",media.oldTown],["Mijas","Andalusian white villages, hills and Mediterranean views.",media.mijas],["Costa del Sol","A territory made for exceptional stays and residences.",media.coast]],
    whyEyebrow: "The Solveig signature",
    whyTitle: "We do not sell a promise of luxury. We organise what allows it to be delivered.",
    whyText: "Real presence, clear method, attention to detail and quiet communication. This is what turns management into peace of mind.",
    why: [["01","Presence","A local relay that knows your home and its surroundings."],["02","Precision","Routines, checks and standards adapted to the property."],["03","Discretion","A simple, human and confidential relationship."]],
    finalTitle: "What if your property were already in the right hands?",
    finalText: "Tell us about your property, your presence and the level of support you expect.",
  },
  es: {
    reserve: "Hablemos de su propiedad",
    quote: "Descubrir los servicios",
    call: "Llamar a Solveig",
    servicesEyebrow: "El arte del detalle",
    servicesTitle: <>Un servicio que se ve.<br /><span>Una presencia que se siente.</span></>,
    servicesIntro: "Desde la supervisión de su vivienda hasta la bienvenida de sus invitados, cada intervención se concibe como una extensión natural de su propiedad.",
    featureEyebrow: "Su casa, nuestra atención",
    featureTitle: <>El lujo comienza<br />cuando todo parece <span>simple.</span></>,
    featureText: "Una propiedad hermosa es mucho más que cuatro paredes. Vive, se mantiene y recibe. Nuestro papel es preservar esa calidad y hacer que cada interacción sea más sencilla.",
    featurePoints: ["Controles periódicos adaptados a su ritmo", "Coordinación de proveedores e intervenciones", "Preparación cuidada antes de cada llegada", "Comunicación clara con el propietario"],
    featureCta: "Descubrir la gestión de propiedad",
    destinationEyebrow: "El destino",
    destinationTitle: <>Marbella.<br /><span>Mijas. Costa del Sol.</span></>,
    destinationText: "Un conocimiento local preciso, desde el casco antiguo de Marbella hasta las colinas de Mijas y la costa.",
    signatureEyebrow: "La firma Solveig",
    signatureTitle: "No vendemos una promesa de lujo. Organizamos todo lo necesario para cumplirla.",
    signatureText: "Presencia real, método claro, atención al detalle y comunicación discreta. Esta combinación convierte la gestión en tranquilidad.",
    signaturePoints: [["01","Presencia","Un apoyo local que conoce su casa y su entorno."],["02","Precisión","Rutinas, controles y estándares adaptados a la propiedad."],["03","Discreción","Una relación sencilla, humana y confidencial."]],
    finalEyebrow: "Su próximo capítulo en Marbella",
    eyebrow: "Gestión de propiedades y estilo de vida · Marbella · Mijas",
    hero: <>Su propiedad.<br /><em>Perfectamente cuidada.</em></>,
    intro: "Solveig’s Prestige Service acompaña a propietarios y huéspedes que esperan algo más que una gestión: presencia, gusto, discreción y conocimiento real del territorio.",
    primary: "Hablemos de su propiedad",
    secondary: "Descubrir los servicios",
    scroll: "Entrar en la experiencia",
    serviceEyebrow: "El arte del detalle",
    serviceTitle: <>Un servicio que se ve.<br /><span>Una presencia que se siente.</span></>,
    serviceIntro: "Desde la supervisión de su vivienda hasta la bienvenida de sus invitados, cada intervención se concibe como una extensión natural de su propiedad.",
    allServices: "Ver todos los servicios",
    services: [
      ["01","Gestión de propiedad","Supervisión, mantenimiento, coordinación y preparación. Su casa permanece lista, incluso cuando está lejos.","/gestion-propriete",serviceImages.property],
      ["02","Conserjería privada","Recepción, asistencia y solicitudes a medida con una presencia discreta y profundamente humana.","/conciergerie",serviceImages.concierge],
      ["03","Alquiler de temporada","Preparación, huéspedes, control y coordinación para proteger la calidad de la estancia y del inmueble.","/location-saisonniere",serviceImages.seasonal],
      ["04","Housekeeping & mantenimiento","Limpieza, ropa de cama, control de calidad y mantenimiento ligero: los detalles invisibles que marcan la diferencia.","/services/housekeeping",serviceImages.housekeeping],
    ],
    propertyEyebrow: "Su casa, nuestra atención",
    propertyTitle: <>El lujo comienza<br />cuando todo parece <span>simple.</span></>,
    propertyText: "Una propiedad hermosa es mucho más que cuatro paredes. Vive, se mantiene y recibe. Nuestro papel es preservar esa calidad y hacer que cada interacción sea más sencilla.",
    propertyPoints: ["Controles periódicos adaptados a su ritmo","Coordinación de proveedores e intervenciones","Preparación cuidada antes de cada llegada","Comunicación clara con el propietario"],
    propertyCta: "Descubrir la gestión de propiedad",
    placeEyebrow: "El destino",
    placeTitle: <>Marbella.<br /><span>Mijas. Costa del Sol.</span></>,
    placeText: "Un conocimiento local preciso, desde el casco antiguo de Marbella hasta las colinas de Mijas y la costa.",
    places: [["Marbella","Casco antiguo, mar y una dirección internacional.",media.oldTown],["Mijas","El blanco andaluz, las colinas y las vistas al Mediterráneo.",media.mijas],["Costa del Sol","Un territorio pensado para estancias y residencias excepcionales.",media.coast]],
    whyEyebrow: "La firma Solveig",
    whyTitle: "No vendemos una promesa de lujo. Organizamos todo lo necesario para cumplirla.",
    whyText: "Presencia real, método claro, atención al detalle y comunicación discreta. Esta combinación convierte la gestión en tranquilidad.",
    why: [["01","Presencia","Un apoyo local que conoce su casa y su entorno."],["02","Precisión","Rutinas, controles y estándares adaptados a la propiedad."],["03","Discreción","Una relación sencilla, humana y confidencial."]],
    finalTitle: "¿Y si su propiedad ya estuviera en buenas manos?",
    finalText: "Háblenos de su propiedad, de su presencia y del nivel de acompañamiento que busca.",
  },
} as const;

function Index() {
  const locale = useSolveigLocale();
  const c = copy[locale];
  const extraServices = {
    fr: [["05", "Contrôles propriétaires", "Un regard local régulier, adapté au rythme de votre propriété.", "/gestion-propriete", ShieldCheck], ["06", "Relation voyageurs", "Une présence avant, pendant et après le séjour.", "/conciergerie", Sparkles]],
    en: [["05", "Owner checks", "A regular local eye, adapted to your property’s rhythm.", "/gestion-propriete", ShieldCheck], ["06", "Guest relations", "A discreet local presence before, during and after every stay.", "/conciergerie", Sparkles]],
    es: [["05", "Controles de propietarios", "Una mirada local regular, adaptada al ritmo de la propiedad.", "/gestion-propriete", ShieldCheck], ["06", "Relación con huéspedes", "Una presencia discreta antes, durante y después.", "/conciergerie", Sparkles]],
  } as const;
  const services = [...c.services, ...extraServices[locale]];

  return (
    <SolveigLayout>
      <style>{"@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap'); .glass-nav .font-display,footer .font-display{font-family:Allura,cursive;font-weight:400}.glass-nav .font-display{font-size:1.65rem}.solveig-custom-wordmark{font-family:Allura,cursive;font-size:clamp(2.7rem,5vw,4.8rem);line-height:.8;letter-spacing:-.02em;color:#fff7e8;text-shadow:0 5px 24px rgba(0,0,0,.28)}.solveig-custom-sub{margin-top:.7rem;font:700 .42rem/1 var(--font-body);letter-spacing:.42em;color:#dcc9aa}.solveig-service-card{min-height:330px;border:1px solid rgba(75,60,43,.13);border-radius:1.35rem;background:rgba(255,255,255,.86);padding:1.55rem;box-shadow:0 22px 65px -48px rgba(53,39,28,.45);transition:transform .55s cubic-bezier(.2,.75,.2,1),box-shadow .55s ease}.solveig-service-card:hover{transform:translateY(-8px);box-shadow:0 30px 75px -45px rgba(53,39,28,.55)}.solveig-service-icon{display:flex;width:2.7rem;height:2.7rem;align-items:center;justify-content:center;border-radius:999px;border:1px solid rgba(79,127,128,.2);background:rgba(127,210,220,.16);color:#4f7f80}.solveig-parallax{position:relative;overflow:hidden}.solveig-parallax img{height:110%;width:100%;object-fit:cover;transform:scale(1.08);animation:solveigParallax linear both;animation-timeline:view();animation-range:entry 0% cover 100%}@keyframes solveigParallax{from{transform:scale(1.08) translateY(-2%)}to{transform:scale(1.08) translateY(2%)}}.solveig-destination{position:relative;min-height:470px;overflow:hidden;border-radius:1.6rem}@media(prefers-reduced-motion:reduce){.solveig-service-card{transition:none}.solveig-parallax img{animation:none}}"}</style>

      <section className="relative min-h-[100svh] overflow-hidden bg-[#2f241c] text-white">
        <div className="absolute inset-0 scale-[1.035] hero-kenburns"><img src={media.hero} alt="Villa de prestige à Marbella sur la Costa del Sol" className="h-full w-full object-cover" fetchPriority="high" decoding="async" /></div>
        <video className="absolute inset-0 h-full w-full object-cover opacity-80" autoPlay muted loop playsInline poster={media.hero} preload="metadata" aria-hidden="true"><source src="/solveig-hero.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(37,27,20,.34),rgba(37,27,20,.22)_35%,rgba(37,27,20,.76))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_10%,rgba(24,18,13,.34)_100%)]" />
        <div className="absolute inset-0 opacity-[.14] hero-grid" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] flex-col items-center justify-center px-5 pb-20 pt-32 text-center sm:px-8">
          <div className="hero-fade-in max-w-5xl">
            <div className="mb-7 flex flex-col items-center"><span className="solveig-custom-wordmark">Solveig’s</span><span className="solveig-custom-sub">PRESTIGE SERVICE</span></div>
            <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-white/72 sm:text-[10px]">{c.eyebrow}</p>
            <h1 className="mt-7 font-display text-[3.4rem] font-medium leading-[.86] tracking-[-.025em] text-balance sm:text-6xl md:text-[6.4rem]">{c.hero}</h1>
            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">{c.intro}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              <Button asChild variant="secondary" size="lg" className="rounded-full px-6 shadow-xl"><Link to="/contact">{c.reserve}</Link></Button>
              <Button asChild variant="coastal" size="lg" className="rounded-full border border-white/25 bg-white/10 px-6 text-white backdrop-blur-xl hover:bg-white/20 hover:text-white"><Link to="/services">{c.quote}</Link></Button>
              <a href="tel:+34623626724" className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 bg-black/10 px-6 text-sm font-semibold backdrop-blur-xl transition hover:bg-white/15">{c.call}</a>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/58"><span>Marbella</span><span>·</span><span>Mijas</span><span>·</span><span>Costa del Sol</span></div>
          </div>
        </div>
        <a href="#services" className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white/62" aria-label={c.scroll}><span>{c.scroll}</span><ArrowDown size={15} className="animate-bounce" /></a>
      </section>

      <section id="services" className="relative bg-[#f7f0e3]">
        <div className="absolute inset-0 soft-grid opacity-40" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.26em] text-[#b28a50]">{c.servicesEyebrow}</p><h2 className="mt-4 font-display text-5xl font-medium leading-[.9] text-[#34271e] sm:text-6xl md:text-7xl">{c.servicesTitle}</h2></div><p className="max-w-xl text-sm leading-7 text-[#66584c] lg:justify-self-end">{c.servicesIntro}</p></div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([number,title,text,link,Icon], index) => <Link key={title} to={link as never} className={"solveig-service-card group " + (index === 1 ? "md:translate-y-8 " : "") + (index === 4 ? "lg:-translate-y-4" : "")}><div className="flex items-start justify-between"><span className="solveig-service-icon"><Icon size={17} /></span><span className="font-display text-3xl text-[#b9935a]/65">{number}</span></div><div className="mt-8"><h3 className="font-display text-3xl font-medium text-[#34271e]">{title}</h3><p className="mt-3 text-xs leading-6 text-[#74665a]">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.2em] text-[#4f7f80]">Découvrir <ArrowRight size={13} /></span></div></Link>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#7fd2dc] text-[#173b3d]">
        <div className="absolute inset-0 aqua-grid opacity-40" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-12 lg:py-32">
          <div className="max-w-xl"><p className="text-[10px] font-bold uppercase tracking-[.26em] text-[#e5c17b]">{c.featureEyebrow}</p><h2 className="mt-5 font-display text-5xl font-medium leading-[.9] sm:text-6xl md:text-7xl">{c.featureTitle}</h2><p className="mt-6 text-sm leading-7 text-[#285b5f]/85">{c.featureText}</p><ul className="mt-7 grid gap-3 sm:grid-cols-2">{c.featurePoints.map(item => <li key={item} className="flex items-start gap-2 text-xs font-semibold"><Check size={15} />{item}</li>)}</ul><Button asChild variant="prestige" size="lg" className="mt-8 rounded-full"><Link to="/gestion-propriete">{c.featureCta}<ArrowRight /></Link></Button></div>
          <div className="grid grid-cols-[1.35fr_.65fr] gap-3 sm:gap-4"><div className="solveig-parallax row-span-2 min-h-[430px] rounded-[1.6rem]"><img src={media.hero} alt="Villa de prestige à Marbella" loading="lazy" /></div><div className="solveig-parallax min-h-[205px] rounded-[1.6rem]"><img src={media.oldTown} alt="Marbella historique" loading="lazy" /></div><div className="solveig-parallax min-h-[205px] rounded-[1.6rem]"><img src={media.mijas} alt="Mijas, Andalousie" loading="lazy" /></div></div>
        </div>
      </section>

      <section className="relative bg-[#fbf6eb]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32"><div className="max-w-3xl"><p className="text-[10px] font-bold uppercase tracking-[.26em] text-[#b28a50]">{c.destinationEyebrow}</p><h2 className="mt-4 font-display text-5xl font-medium leading-[.9] text-[#34271e] sm:text-6xl md:text-7xl">{c.destinationTitle}</h2><p className="mt-6 max-w-xl text-sm leading-7 text-[#74665a]">{c.destinationText}</p></div><div className="mt-14 grid gap-4 md:grid-cols-3">{c.places.map(([name,text,image], index) => <Link key={name} to="/zones" className={"solveig-destination group " + (index === 1 ? "md:translate-y-10" : "")}><div className="solveig-parallax absolute inset-0"><img src={image} alt={name} loading="lazy" /></div><div className="absolute inset-0 bg-gradient-to-t from-[#2d2119]/85 via-[#2d2119]/20 to-transparent" /><div className="relative flex min-h-[470px] flex-col justify-end p-7 text-white"><span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#e8c986]">Costa del Sol</span><h3 className="mt-2 font-display text-4xl">{name}</h3><p className="mt-2 max-w-sm text-xs leading-6 text-white/72">{text}</p><span className="mt-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.18em]">Explorer <ArrowRight size={13} /></span></div></Link>)}</div></div>
      </section>

      <section className="relative overflow-hidden bg-[#33251b] text-[#f8efdf]">
        <div className="solveig-parallax absolute inset-0 opacity-25"><img src={media.coast} alt="Costa del Sol" loading="lazy" /></div><div className="absolute inset-0 bg-[#33251b]/78" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.26em] text-[#e5c17b]">{c.signatureEyebrow}</p><h2 className="mt-5 font-display text-5xl font-medium leading-[.9] sm:text-6xl md:text-7xl">{c.signatureTitle}</h2><p className="mt-6 max-w-lg text-sm leading-7 text-white/66">{c.signatureText}</p></div><div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 md:grid-cols-3">{c.signaturePoints.map(([n,t,d]) => <article key={n} className="bg-[#33251b]/75 p-7 backdrop-blur-sm"><span className="font-display text-3xl text-[#e2bd75]">{n}</span><h3 className="mt-9 font-display text-3xl">{t}</h3><p className="mt-2 text-xs leading-6 text-white/58">{d}</p></article>)}</div></div></div>
      </section>

      <section className="bg-[#f7f0e3]"><div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="relative overflow-hidden rounded-[2rem] bg-[#34271e] px-7 py-16 text-center text-[#f8efdf] shadow-elegant sm:px-12 lg:py-24"><div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_50%_10%,rgba(224,188,116,.45),transparent_30%)]" /><div className="relative mx-auto max-w-4xl"><div className="flex flex-col items-center"><span className="solveig-custom-wordmark">Solveig’s</span><span className="solveig-custom-sub">PRESTIGE SERVICE</span></div><p className="mt-8 text-[10px] font-bold uppercase tracking-[.26em] text-[#e5c17b]">{c.finalEyebrow}</p><h2 className="mt-5 font-display text-5xl font-medium leading-[.9] sm:text-6xl md:text-7xl">{c.finalTitle}</h2><p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65">{c.finalText}</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="https://wa.me/34623626724" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-[#f4e7d1] px-7 text-sm font-semibold text-[#34271e]">WhatsApp</a><a href="mailto:solveighybord@gmail.com" className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold">Email</a><a href="tel:+34623626724" className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold">+34 623 626 724</a></div></div></div></div></section>
      <a href="https://wa.me/34623626724" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-[60] flex size-14 items-center justify-center rounded-full bg-[#2e8068] text-white shadow-2xl ring-2 ring-white/30 transition hover:-translate-y-1 hover:scale-105" aria-label="WhatsApp Solveig"><MessageCircle size={21} /></a>
      <ContactBand />
    </SolveigLayout>
  );
}
