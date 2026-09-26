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
  coast: "https://commons.wikimedia.org/wiki/Special:Redirect/file/PLAYAS_DE_MIJA.jpg",
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

  return (
    <SolveigLayout>
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-primary text-white">
        <div className="absolute inset-0">
          <img src={media.hero} alt="Villa de prestige sur la Costa del Sol" className="h-full w-full scale-[1.035] object-cover animate-[heroZoom_16s_ease-out_forwards]" />
          <video className="absolute inset-0 hidden h-full w-full object-cover lg:block" autoPlay muted loop playsInline poster={villaImage}>
            <source src="/solveig-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,35,31,.96)_0%,rgba(8,35,31,.72)_38%,rgba(8,35,31,.15)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,35,31,.94)_0%,transparent_48%,rgba(8,35,31,.2)_100%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:90px_90px] mix-blend-overlay" />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-between px-5 pb-8 pt-32 sm:px-8 lg:px-12 lg:pb-10">
          <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.24em] text-white/65">
            <span>{c.eyebrow}</span>
            <span className="hidden sm:block">Discreet · Local · Personal</span>
          </div>

          <div className="max-w-6xl pb-5 lg:pb-12">
            <p className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/72">
              <span className="h-px w-12 bg-gold" />Solveig’s Prestige Service
            </p>
            <h1 className="font-display text-[4.15rem] font-semibold leading-[.76] tracking-[-.035em] sm:text-7xl md:text-[8.3rem] lg:text-[9.5rem]">
              {c.hero}
            </h1>
            <p className="mt-9 max-w-2xl text-base leading-7 text-white/76 sm:text-lg sm:leading-8">{c.intro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="xl" className="group">
                <Link to="/contact">{c.primary}<ArrowRight className="transition-transform group-hover:translate-x-1" /></Link>
              </Button>
              <Button asChild variant="coastal" size="xl" className="border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/18 hover:text-white">
                <Link to="/services">{c.secondary}</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 border-t border-white/18 pt-5 sm:grid-cols-3">
            {[
              ["01","Présence locale","Local presence"],
              ["02","Service sur mesure","Tailored service"],
              ["03","Marbella & Mijas","Costa del Sol"],
            ].map(([n, fr, en]) => (
              <div key={n} className="flex gap-4 sm:border-r sm:border-white/12 last:border-0">
                <span className="font-display text-2xl text-gold">{n}</span>
                <div><p className="text-xs font-bold">{locale === "fr" ? fr : locale === "es" ? fr : en}</p><p className="mt-1 text-[10px] text-white/48">{locale === "fr" ? en : "Solveig’s Prestige Service"}</p></div>
              </div>
            ))}
          </div>

          <a href="#services" className="absolute bottom-9 right-8 hidden items-center gap-3 text-[9px] font-bold uppercase tracking-[0.22em] text-white/55 lg:flex">
            {c.scroll}<ArrowDown size={15} className="animate-bounce" />
          </a>
        </div>
      </section>

      <TrustStrip />

      <section id="services" className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">{c.serviceEyebrow}</p>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[.88] tracking-tight md:text-7xl lg:text-[6.6rem]">{c.serviceTitle}</h2>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-lg leading-8 text-muted-foreground">{c.serviceIntro}</p>
              <Link to="/services" className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-foreground underline decoration-gold decoration-2 underline-offset-8">{c.allServices}<ChevronRight size={16} /></Link>
            </div>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {c.services.map(([number, title, text, link, image]) => (
              <Link key={title} to={link as never} className="group relative min-h-[520px] overflow-hidden rounded-[2rem] bg-primary text-white shadow-elegant">
                <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] group-hover:scale-[1.07]" aria-hidden="true" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,28,25,.95),rgba(5,28,25,.12)_70%)]" />
                <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_80%_20%,rgba(214,174,92,.22),transparent_28%)]" />
                <div className="relative flex min-h-[520px] flex-col justify-between p-7 sm:p-10">
                  <div className="flex items-start justify-between"><span className="font-display text-2xl text-gold">{number}</span><span className="flex size-12 items-center justify-center rounded-full border border-white/25 bg-black/10 backdrop-blur-md transition group-hover:border-gold group-hover:bg-gold group-hover:text-gold-foreground"><Sparkles size={19} /></span></div>
                  <div className="max-w-xl">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">{number} / Solveig</p>
                    <h3 className="font-display text-4xl font-semibold leading-none sm:text-5xl">{title}</h3>
                    <p className="mt-5 max-w-lg text-sm leading-7 text-white/68">{text}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white">Découvrir <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-surface">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-12 lg:py-36">
          <div className="relative">
            <div className="absolute -left-5 -top-5 z-10 rounded-full border border-gold/55 bg-background/92 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] shadow-soft backdrop-blur">Marbella · Mijas</div>
            <div className="overflow-hidden rounded-[2rem] shadow-elegant">
              <img src={villaImage} alt="Villa méditerranéenne de prestige" className="aspect-[4/3] w-full object-cover transition duration-1000 hover:scale-[1.025]" />
            </div>
            <div className="absolute -bottom-7 right-5 max-w-[250px] rounded-2xl border border-border bg-background/96 p-5 shadow-elegant backdrop-blur sm:right-8">
              <p className="font-display text-2xl font-semibold">Discrétion.</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">Précision. Réactivité. Sens du détail.</p>
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">{c.propertyEyebrow}</p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[.88] tracking-tight md:text-7xl">{c.propertyTitle}</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">{c.propertyText}</p>
            <ul className="mt-8 space-y-4">{c.propertyPoints.map((item) => <li key={item} className="flex gap-3 text-sm font-semibold"><Check className="mt-0.5 shrink-0 text-coast" size={18} />{item}</li>)}</ul>
            <Button asChild variant="prestige" size="xl" className="mt-9"><Link to="/gestion-propriete">{c.propertyCta}<ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">{c.placeEyebrow}</p>
              <h2 className="mt-5 font-display text-6xl font-semibold leading-[.85] md:text-[7rem]">{c.placeTitle}</h2>
              <p className="mt-7 max-w-md text-base leading-7 text-white/62">{c.placeText}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {c.places.map(([name, text, image]) => (
                <Link key={name} to="/zones" className="group relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10">
                  <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end p-6">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold">Costa del Sol</span>
                    <h3 className="mt-2 font-display text-3xl font-semibold">{name}</h3>
                    <p className="mt-2 text-xs leading-5 text-white/62">{text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="max-w-4xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">{c.whyEyebrow}</p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[.9] md:text-7xl">{c.whyTitle}</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{c.whyText}</p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border md:grid-cols-3">
            {c.why.map(([number,title,text]) => (
              <article key={number} className="group bg-card p-8 transition hover:bg-surface md:p-10">
                <span className="font-display text-4xl text-gold/75 group-hover:text-gold">{number}</span>
                <h3 className="mt-14 font-display text-4xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_50%,rgba(28,88,78,.35),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(214,174,92,.28),transparent_25%)]" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-12 lg:py-32">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold"><MessageCircle size={15} />Marbella & Mijas</p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[.9] md:text-7xl">{c.finalTitle}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{c.finalText}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild variant="prestige" size="xl"><Link to="/contact">{c.primary}<ArrowRight /></Link></Button>
            <Button asChild variant="coastal" size="xl"><Link to="/services"><CalendarCheck />{c.secondary}</Link></Button>
          </div>
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}

