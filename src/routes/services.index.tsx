import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  ClipboardCheck,
  KeyRound,
  MessageCircle,
  Sparkles,
  Wrench,
} from "lucide-react";

import { ContactBand, PageHero, SolveigLayout } from "@/components/SolveigLayout";
import { useSolveigLocale } from "@/lib/locale";
import { ChefServiceSpotlight } from "@/components/ChefServiceSpotlight";
import { Button } from "@/components/ui/button";
import villaImage from "@/assets/marbella-prestige-villa.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services de gestion locative à Marbella & Mijas — Solveig’s Prestige Service" },
      {
        name: "description",
        content:
          "Gestion de propriété, conciergerie privée, location saisonnière, housekeeping et maintenance à Marbella, Mijas et sur la Costa del Sol.",
      },
      { property: "og:title", content: "Services — Solveig’s Prestige Service" },
      {
        property: "og:description",
        content:
          "Un accompagnement premium pour protéger votre propriété, accueillir vos voyageurs et simplifier chaque séjour.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ServicesPage,
});

const images = {
  property: villaImage,
  concierge:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Marbella_-_Plaza_de_los_Naranjos_8.jpg",
  seasonal: "https://commons.wikimedia.org/wiki/Special:Redirect/file/PLAYAS_DE_MIJAS.jpg",
  housekeeping:
    "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mijas_Pueblo_from_the_south_(Mijas,_Dec_2012).jpg",
};

const offers = [
  { icon: KeyRound, link: "/gestion-propriete", image: images.property },
  { icon: Sparkles, link: "/conciergerie", image: images.concierge },
  { icon: BadgeCheck, link: "/location-saisonniere", image: images.seasonal },
  { icon: Wrench, link: "/services/housekeeping", image: images.housekeeping },
  { icon: ClipboardCheck, link: "/gestion-propriete", image: images.property },
  { icon: BedDouble, link: "/conciergerie", image: images.concierge },
];

const copy = {
  fr: {
    eyebrow: "Services · Marbella · Mijas",
    title: "Tout ce qui permet à une propriété d’exception de rester impeccable.",
    description:
      "Une offre pensée comme une maison de services : gestion, hospitalité, préparation et coordination. Vous choisissez le niveau de présence. Nous organisons le reste.",
    directory: "La carte des services",
    answer: "Une réponse pour chaque moment.",
    combination:
      "Chaque service peut être combiné pour construire un accompagnement cohérent autour de votre propriété.",
    discover: "Découvrir",
    offers: [
      [
        "Gestion de propriété",
        "Présence locale, contrôles, coordination et suivi pour les propriétaires qui ne sont pas toujours sur place.",
      ],
      [
        "Conciergerie privée",
        "Accueil, assistance locale et organisation sur mesure pour propriétaires, familles et invités.",
      ],
      [
        "Location saisonnière",
        "Préparation, voyageurs, contrôle du logement et coordination entre chaque séjour.",
      ],
      [
        "Housekeeping & maintenance",
        "Ménage, linge, contrôle qualité et petites interventions coordonnées avec rigueur.",
      ],
      [
        "Contrôles propriétaires",
        "Des visites et points de contrôle conçus autour du rythme réel de votre propriété.",
      ],
      [
        "Relation voyageurs",
        "Une présence humaine et discrète avant, pendant et après chaque séjour.",
      ],
    ],
    team: "Une seule équipe",
    standard: (
      <>
        Une propriété.
        <br />
        Un standard.
      </>
    ),
    goal: "L’objectif n’est pas de multiplier les prestataires, mais de rendre la gestion plus lisible, plus cohérente et plus sereine.",
    steps: [
      ["Observer", "Contrôler le bien, identifier les besoins et anticiper."],
      ["Préparer", "Organiser ménage, linge, consommables et interventions."],
      ["Accueillir", "Créer une arrivée fluide et une présence adaptée."],
      ["Rendre compte", "Vous tenir informé sans vous imposer la gestion quotidienne."],
    ],
    yourProperty: "Votre propriété",
    cta: "Construisons le niveau de service qui vous ressemble.",
    ctaText:
      "Pas de formule rigide. Nous partons de votre bien, de votre rythme et de vos priorités.",
    contact: "Parler de mon projet",
  },
  en: {
    eyebrow: "Services · Marbella · Mijas",
    title: "Everything an exceptional property needs to stay at its best.",
    description:
      "A considered collection of property care, hospitality, preparation and coordination. You choose the level of local presence; we take care of the arrangements.",
    directory: "Our service offering",
    answer: "Support for every moment.",
    combination: "Each service can be combined to create joined-up support around your property.",
    discover: "Discover",
    offers: [
      [
        "Property management",
        "Local presence, inspections, coordination and updates for owners who are not always nearby.",
      ],
      [
        "Private concierge",
        "A warm welcome, local assistance and tailored arrangements for owners, families and guests.",
      ],
      [
        "Seasonal rentals",
        "Property preparation, guest support, inspections and coordination between stays.",
      ],
      [
        "Housekeeping & maintenance",
        "Cleaning, linen, quality checks and carefully coordinated minor works.",
      ],
      [
        "Owner property checks",
        "Visits and inspections planned around the way you actually use your property.",
      ],
      [
        "Guest relations",
        "A personal, discreet point of contact before, during and after every stay.",
      ],
    ],
    team: "One dedicated team",
    standard: (
      <>
        One property.
        <br />
        One standard.
      </>
    ),
    goal: "The aim is not to add more providers, but to make property care clearer, more consistent and more reassuring.",
    steps: [
      ["Assess", "Inspect the property, identify needs and plan ahead."],
      ["Prepare", "Arrange housekeeping, linen, supplies and maintenance visits."],
      ["Welcome", "Make arrival effortless and provide the right local presence."],
      ["Keep you informed", "Share clear updates without making you manage the day-to-day."],
    ],
    yourProperty: "Your property",
    cta: "Let’s shape a level of service that suits you.",
    ctaText: "No rigid packages. We start with your property, your routine and your priorities.",
    contact: "Discuss my property",
  },
  es: {
    eyebrow: "Servicios · Marbella · Mijas",
    title: "Todo lo necesario para mantener impecable una propiedad excepcional.",
    description:
      "Una propuesta integral que reúne gestión, hospitalidad, preparación y coordinación. Usted elige el nivel de presencia local; nosotros organizamos el resto.",
    directory: "Nuestros servicios",
    answer: "Una solución para cada momento.",
    combination:
      "Puede combinar los servicios para crear un acompañamiento coherente en torno a su propiedad.",
    discover: "Descubrir",
    offers: [
      [
        "Gestión de propiedades",
        "Presencia local, revisiones, coordinación y seguimiento para propietarios que no siempre están en la zona.",
      ],
      [
        "Conserjería privada",
        "Recepción, asistencia local y organización a medida para propietarios, familias e invitados.",
      ],
      [
        "Alquiler vacacional",
        "Preparación, atención a huéspedes, revisión de la vivienda y coordinación entre estancias.",
      ],
      [
        "Limpieza y mantenimiento",
        "Limpieza, ropa de hogar, control de calidad y pequeñas intervenciones coordinadas con rigor.",
      ],
      [
        "Revisiones para propietarios",
        "Visitas y controles organizados según el uso real que hace de su propiedad.",
      ],
      [
        "Atención a huéspedes",
        "Un trato personal y discreto antes, durante y después de cada estancia.",
      ],
    ],
    team: "Un solo equipo",
    standard: (
      <>
        Una propiedad.
        <br />
        Un estándar.
      </>
    ),
    goal: "No se trata de sumar proveedores, sino de hacer que la gestión sea más clara, coherente y tranquila.",
    steps: [
      ["Observar", "Revisar la propiedad, detectar necesidades y anticiparse."],
      ["Preparar", "Organizar limpieza, ropa de hogar, consumibles e intervenciones."],
      ["Recibir", "Facilitar la llegada y ofrecer la presencia adecuada."],
      ["Informar", "Mantenerle al tanto sin trasladarle la gestión cotidiana."],
    ],
    yourProperty: "Su propiedad",
    cta: "Diseñemos el nivel de servicio que mejor encaje con usted.",
    ctaText: "Sin fórmulas rígidas. Partimos de su propiedad, su ritmo y sus prioridades.",
    contact: "Hablar de mi proyecto",
  },
  ar: {
    eyebrow: "الخدمات · ماربيا · ميخاس",
    title: "كل ما يلزم للحفاظ على تميز عقارك وجاهزيته.",
    description:
      "مجموعة متكاملة من خدمات إدارة العقار والضيافة والتجهيز والتنسيق. تختار مستوى الحضور المحلي، ونتولى تنظيم التفاصيل.",
    directory: "دليل الخدمات",
    answer: "دعم يناسب كل مرحلة.",
    combination: "يمكن الجمع بين الخدمات لبناء متابعة متكاملة تناسب عقارك.",
    discover: "اكتشف الخدمة",
    offers: [
      [
        "إدارة العقارات",
        "حضور محلي ومعاينات وتنسيق ومتابعة للمالكين الذين لا يقيمون في المنطقة باستمرار.",
      ],
      ["خدمات كونسيرج خاصة", "استقبال ومساعدة محلية وترتيبات مصممة للمالكين والعائلات والضيوف."],
      ["التأجير الموسمي", "تجهيز العقار ومتابعة الضيوف ومعاينة المنزل والتنسيق بين فترات الإقامة."],
      ["التنظيف والصيانة", "تنظيف ومفروشات وفحوصات جودة وأعمال بسيطة تُنسق بعناية."],
      ["معاينات المالك", "زيارات وفحوصات تُرتب وفق طريقة استخدامك الفعلية للعقار."],
      ["العناية بالضيوف", "جهة تواصل شخصية تحترم الخصوصية قبل الإقامة وأثناءها وبعدها."],
    ],
    team: "فريق واحد",
    standard: (
      <>
        عقار واحد.
        <br />
        ومعيار واحد.
      </>
    ),
    goal: "الهدف ليس زيادة عدد مزودي الخدمات، بل جعل متابعة العقار أوضح وأكثر اتساقاً وراحة.",
    steps: [
      ["المعاينة", "فحص العقار وتحديد الاحتياجات والتخطيط مسبقاً."],
      ["التجهيز", "تنظيم التنظيف والمفروشات والمستلزمات وأعمال الصيانة."],
      ["الاستقبال", "تيسير الوصول وتوفير الحضور المحلي المناسب."],
      ["إطلاعك", "موافاتك بالمستجدات من دون تحميلك إدارة التفاصيل اليومية."],
    ],
    yourProperty: "عقارك",
    cta: "لنصمم مستوى الخدمة الملائم لك.",
    ctaText: "لا باقات جامدة؛ نبدأ من عقارك وإيقاعك وأولوياتك.",
    contact: "لنتحدث عن مشروعي",
  },
} as const;

function ServicesPage() {
  const locale = useSolveigLocale();
  const text = copy[locale];

  return (
    <SolveigLayout>
      <PageHero eyebrow={text.eyebrow} title={text.title} description={text.description} />

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-12 flex flex-col gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                {text.directory}
              </p>
              <h2 className="mt-3 font-display text-5xl font-semibold leading-[.9] md:text-6xl">
                {text.answer}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">{text.combination}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {offers.map((offer, index) => {
              const [title, description] = text.offers[index]!;
              const Icon = offer.icon;
              return (
                <Link
                  key={title}
                  to={offer.link}
                  className="group relative min-h-[410px] overflow-hidden rounded-[1.7rem] bg-primary text-white"
                >
                  <img
                    src={offer.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/5" />
                  <div className="relative flex min-h-[410px] flex-col justify-between p-7 sm:p-9">
                    <div className="flex items-start justify-between">
                      <span className="font-display text-2xl text-gold">0{index + 1}</span>
                      <span className="flex size-11 items-center justify-center rounded-full border border-white/25 bg-black/10 backdrop-blur-md transition group-hover:border-gold group-hover:bg-gold group-hover:text-gold-foreground">
                        <Icon size={18} />
                      </span>
                    </div>
                    <div className="max-w-xl">
                      <h3 className="font-display text-4xl font-semibold leading-none sm:text-5xl">
                        {title}
                      </h3>
                      <p className="mt-4 max-w-lg text-sm leading-7 text-white/68">{description}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                        {text.discover}{" "}
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ChefServiceSpotlight />

      <section className="bg-surface">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-32">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              {text.team}
            </p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[.9] md:text-7xl">
              {text.standard}
            </h2>
            <p className="mt-6 max-w-md leading-7 text-muted-foreground">{text.goal}</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {text.steps.map(([title, description], index) => (
              <article key={index} className="bg-card p-7 sm:p-8">
                <span className="font-display text-3xl text-gold">0{index + 1}</span>
                <h3 className="mt-8 font-display text-3xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary p-8 text-white shadow-elegant md:p-12 lg:p-16">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_85%_20%,rgba(214,174,92,.3),transparent_25%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  <MessageCircle size={14} />
                  {text.yourProperty}
                </p>
                <h2 className="mt-5 font-display text-5xl font-semibold leading-[.9] md:text-7xl">
                  {text.cta}
                </h2>
                <p className="mt-6 max-w-xl leading-7 text-white/65">{text.ctaText}</p>
              </div>
              <Button asChild variant="secondary" size="xl">
                <Link to="/contact">
                  {text.contact} <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}
