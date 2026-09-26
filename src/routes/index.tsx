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
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const copy = {
  fr: {
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

  const serviceIcons = [Home, Sparkles, KeyRound, ShieldCheck];

  return (
    <SolveigLayout>
      <section className="relative min-h-[92svh] overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <img src={media.hero} alt="Villa méditerranéenne de prestige à Marbella" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,26,18,.28),rgba(35,26,18,.42)_45%,rgba(35,26,18,.76))]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,26,18,.38),transparent_65%)]" />
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(135deg,transparent_49.7%,rgba(255,255,255,.12)_50%,transparent_50.3%)] [background-size:110px_110px]" />
        </div>

        <div className="relative mx-auto flex min-h-[92svh] max-w-[1500px] flex-col items-center justify-center px-5 py-28 text-center sm:px-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/75">{c.eyebrow}</p>
          <div className="mt-7 flex size-20 items-center justify-center rounded-full border border-white/45 bg-white/10 backdrop-blur-md">
            <span className="font-display text-3xl italic">S</span>
          </div>
          <h1 className="mt-7 max-w-5xl font-display text-5xl font-medium leading-[.95] tracking-[-.02em] sm:text-6xl md:text-[5.7rem]">
            {c.hero}
          </h1>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/82 sm:text-base">{c.intro}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="secondary" size="lg" className="rounded-full px-7"><Link to="/contact">{c.primary}</Link></Button>
            <Button asChild variant="coastal" size="lg" className="rounded-full border border-white/30 bg-white/10 px-7 text-white backdrop-blur hover:bg-white/20 hover:text-white"><Link to="/services">{c.secondary}</Link></Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/65">
            <span>Marbella</span><span>·</span><span>Mijas</span><span>·</span><span>Costa del Sol</span>
          </div>
        </div>

        <a href="#services" className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.22em] text-white/65">{c.scroll}<ArrowDown size={14} /></a>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:py-28">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">{c.serviceEyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-medium leading-[.98] sm:text-5xl md:text-6xl">{c.serviceTitle}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">{c.serviceIntro}</p>
        </div>

        <div id="services" className="mx-auto grid max-w-7xl gap-4 px-5 pb-20 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:pb-28">
          {c.services.map(([number,title,text,link,image], i) => {
            const Icon = serviceIcons[i];
            return (
              <Link key={title} to={link as never} className="group rounded-[1.35rem] border border-border bg-card p-5 transition duration-500 hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-full bg-coast/10 text-coast"><Icon size={17} /></span>
                  <span className="font-display text-xl text-gold/70">{number}</span>
                </div>
                <div className="mt-5 overflow-hidden rounded-xl">
                  <img src={image} alt="" className="aspect-[1.2] w-full object-cover transition duration-700 group-hover:scale-105" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">{text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-foreground">{locale === "fr" ? "Découvrir" : locale === "en" ? "Discover" : "Descubrir"} <ArrowRight size={13} /></span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:py-28">
          <div className="overflow-hidden rounded-[1.5rem]">
            <img src={media.oldTown} alt="Marbella, Plaza de los Naranjos" className="aspect-[4/3] w-full object-cover transition duration-1000 hover:scale-105" />
          </div>
          <div className="lg:pl-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">{c.propertyEyebrow}</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[.95] sm:text-5xl md:text-6xl">{c.propertyTitle}</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground">{c.propertyText}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">{c.propertyPoints.map(item => <li key={item} className="flex gap-2 text-xs leading-6"><Check size={15} className="mt-1 shrink-0 text-coast" />{item}</li>)}</ul>
            <Button asChild variant="prestige" size="lg" className="mt-8 rounded-full"><Link to="/gestion-propriete">{c.propertyCta}<ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      <section className="bg-coast/90 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/65">{c.placeEyebrow}</p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-[.95] sm:text-5xl md:text-6xl">{c.placeTitle}</h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/72">{c.placeText}</p>
              <Link to="/zones" className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">{locale === "fr" ? "Explorer le territoire" : locale === "en" ? "Explore the area" : "Explorar el territorio"} <ArrowRight size={14} /></Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {c.places.map(([name,text,image]) => (
                <Link key={name} to="/zones" className="group overflow-hidden rounded-[1.25rem] bg-white/10">
                  <div className="overflow-hidden"><img src={image} alt={name} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" /></div>
                  <div className="p-5"><h3 className="font-display text-2xl">{name}</h3><p className="mt-2 text-xs leading-5 text-white/65">{text}</p></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">{c.whyEyebrow}</p><h2 className="mt-4 font-display text-4xl font-medium leading-[.95] sm:text-5xl md:text-6xl">{c.whyTitle}</h2></div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:justify-self-end">{c.whyText}</p>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {c.why.map(([n,t,d]) => <article key={n} className="rounded-[1.25rem] border border-border bg-background p-7"><span className="font-display text-3xl text-gold">{n}</span><h3 className="mt-10 font-display text-2xl">{t}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:py-28">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">Solveig’s Prestige Service</p>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-medium leading-[.95] sm:text-5xl md:text-6xl">{c.finalTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary-foreground/65">{c.finalText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="secondary" size="lg" className="rounded-full"><Link to="/contact">{c.primary}<ArrowRight /></Link></Button>
            <Button asChild variant="coastal" size="lg" className="rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"><Link to="/services">{c.secondary}</Link></Button>
          </div>
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}
