import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPinned, Sailboat, Trees, Waves } from "lucide-react";

import { ContactBand, PageHero, SolveigLayout } from "@/components/SolveigLayout";
import { useSolveigLocale } from "@/lib/locale";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/zones")({
  head: () => ({
    meta: [
      { title: "Marbella & Mijas — Zones couvertes par Solveig’s Prestige Service" },
      {
        name: "description",
        content:
          "Gestion locative locale à Marbella, Mijas, Mijas Costa, La Cala, Calahonda et Riviera del Sol.",
      },
      { property: "og:title", content: "Marbella & Mijas — Zones couvertes" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ZonesPage,
});

const areas = [
  {
    icon: Sailboat,
    name: "Marbella",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Marbella_-_Plaza_de_los_Naranjos_8.jpg",
  },
  {
    icon: Trees,
    name: "Mijas Pueblo",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mijas_Pueblo_from_the_south_(Mijas,_Dec_2012).jpg",
  },
  {
    icon: Waves,
    name: "La Cala de Mijas",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/PLAYAS_DE_MIJAS.jpg",
  },
  {
    icon: MapPinned,
    name: "Calahonda & Riviera del Sol",
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/PLAYAS_DE_MIJAS.jpg",
  },
];

const copy = {
  fr: {
    eyebrow: "Marbella · Mijas · Costa del Sol",
    title: "La proximité change tout.",
    description:
      "Une connaissance locale précise permet d’intervenir plus vite, de mieux anticiper et de comprendre les attentes propres à chaque quartier.",
    areas: [
      [
        "Le cœur international",
        "Villas, appartements premium, résidences proches de la mer et propriétés du centre historique.",
      ],
      [
        "L’Andalousie en hauteur",
        "Maisons de charme, vues ouvertes et propriétés intimistes au cœur du village blanc.",
      ],
      [
        "Le littoral",
        "Séjours balnéaires, familles, locations saisonnières et résidences entre village et Méditerranée.",
      ],
      [
        "La côte résidentielle",
        "Une présence régulière pour les propriétaires absents et les biens à usage saisonnier.",
      ],
    ],
    territory: "Un territoire vivant",
    sectionTitle: "Du check de votre villa au dernier détail d’un séjour.",
    neighborhoods: [
      "Marbella Old Town & Golden Mile",
      "Nueva Andalucía & Puerto Banús",
      "Mijas Pueblo & Mijas Costa",
      "La Cala, Calahonda & Riviera del Sol",
    ],
    address: "Votre adresse",
    question: "Votre propriété est-elle dans notre périmètre ?",
    addressText:
      "Si votre bien se trouve dans Marbella, Mijas ou un secteur voisin, échangeons sur le niveau de présence dont vous avez besoin.",
    button: "Vérifier mon secteur",
  },
  en: {
    eyebrow: "Marbella · Mijas · Costa del Sol",
    title: "Being nearby makes all the difference.",
    description:
      "In-depth local knowledge means we can respond sooner, plan ahead and understand what makes each neighbourhood—and each property—different.",
    areas: [
      [
        "An international heart",
        "Villas, premium apartments, homes close to the sea and properties in the historic centre.",
      ],
      [
        "Andalusia in the hills",
        "Character homes, open views and intimate properties in the heart of the white village.",
      ],
      [
        "The coast",
        "Beach stays, family homes, seasonal rentals and residences between the village and the Mediterranean.",
      ],
      [
        "A residential coastline",
        "Regular local support for overseas owners and properties used for seasonal stays.",
      ],
    ],
    territory: "A living landscape",
    sectionTitle: "From a villa check to the final detail of a stay.",
    neighborhoods: [
      "Marbella Old Town & Golden Mile",
      "Nueva Andalucía & Puerto Banús",
      "Mijas Pueblo & Mijas Costa",
      "La Cala, Calahonda & Riviera del Sol",
    ],
    address: "Your location",
    question: "Is your property within our service area?",
    addressText:
      "If your property is in Marbella, Mijas or a nearby area, let’s discuss the level of local presence you need.",
    button: "Check my area",
  },
  es: {
    eyebrow: "Marbella · Mijas · Costa del Sol",
    title: "La proximidad lo cambia todo.",
    description:
      "Conocer bien la zona permite actuar con más rapidez, anticiparse y comprender lo que necesita cada barrio y cada propiedad.",
    areas: [
      [
        "El corazón internacional",
        "Villas, apartamentos de alto nivel, residencias junto al mar y propiedades en el casco histórico.",
      ],
      [
        "Andalucía en las alturas",
        "Casas con encanto, vistas despejadas y propiedades acogedoras en el corazón del pueblo blanco.",
      ],
      [
        "El litoral",
        "Estancias junto al mar, familias, alquileres vacacionales y residencias entre el pueblo y el Mediterráneo.",
      ],
      [
        "La costa residencial",
        "Presencia periódica para propietarios que viven fuera y propiedades destinadas a estancias vacacionales.",
      ],
    ],
    territory: "Un territorio vivo",
    sectionTitle: "Desde revisar su villa hasta cuidar el último detalle de una estancia.",
    neighborhoods: [
      "Casco antiguo de Marbella y Golden Mile",
      "Nueva Andalucía y Puerto Banús",
      "Mijas Pueblo y Mijas Costa",
      "La Cala, Calahonda y Riviera del Sol",
    ],
    address: "Su ubicación",
    question: "¿Está su propiedad dentro de nuestra zona de servicio?",
    addressText:
      "Si su propiedad está en Marbella, Mijas o una zona cercana, hablemos del nivel de presencia que necesita.",
    button: "Consultar mi zona",
  },
  ar: {
    eyebrow: "ماربيا · ميخاس · كوستا ديل سول",
    title: "القرب يصنع فرقاً حقيقياً.",
    description:
      "تساعدنا المعرفة الدقيقة بالمنطقة على سرعة الاستجابة والتخطيط المسبق وفهم احتياجات كل حي وعقار.",
    areas: [
      ["قلب دولي نابض", "فلل وشقق راقية ومساكن قريبة من البحر وعقارات في المركز التاريخي."],
      [
        "الأندلس في أعالي التلال",
        "منازل ذات طابع مميز وإطلالات مفتوحة وعقارات هادئة في قلب القرية البيضاء.",
      ],
      ["الساحل", "إقامات شاطئية ومنازل للعائلات وإيجارات موسمية ومساكن بين القرية والبحر المتوسط."],
      [
        "ساحل سكني",
        "متابعة محلية منتظمة للمالكين المقيمين بعيداً وللعقارات المستخدمة للإقامة الموسمية.",
      ],
    ],
    territory: "منطقة نابضة بالحياة",
    sectionTitle: "من معاينة الفيلا إلى أدق تفاصيل الإقامة.",
    neighborhoods: [
      "البلدة القديمة في ماربيا والميل الذهبي",
      "نويفا أندالوسيا وبويرتو بانوس",
      "قرية ميخاس وساحل ميخاس",
      "لا كالا وكالاهوندا وريفيرا ديل سول",
    ],
    address: "موقع عقارك",
    question: "هل يقع عقارك ضمن نطاق خدماتنا؟",
    addressText:
      "إذا كان عقارك في ماربيا أو ميخاس أو في منطقة مجاورة، فلنتحدث عن مستوى الحضور المحلي الذي تحتاج إليه.",
    button: "تحقق من منطقتي",
  },
} as const;

function ZonesPage() {
  const locale = useSolveigLocale();
  const text = copy[locale];

  return (
    <SolveigLayout>
      <PageHero eyebrow={text.eyebrow} title={text.title} description={text.description} />

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-5 md:grid-cols-2">
            {areas.map((area, index) => {
              const Icon = area.icon;
              const [kicker, description] = text.areas[index]!;
              return (
                <article
                  key={area.name}
                  className="group relative min-h-[470px] overflow-hidden rounded-[2rem] bg-primary text-white"
                >
                  <img
                    src={area.image}
                    alt={area.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                  <div className="relative flex min-h-[470px] flex-col justify-between p-7 sm:p-10">
                    <div className="flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/10 backdrop-blur-md">
                        <Icon size={18} className="text-gold" />
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                        Costa del Sol
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                        {kicker}
                      </p>
                      <h2 className="mt-3 font-display text-5xl font-semibold">{area.name}</h2>
                      <p className="mt-4 max-w-lg text-sm leading-7 text-white/68">{description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-32">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
              {text.territory}
            </p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[.9] md:text-7xl">
              {text.sectionTitle}
            </h2>
          </div>
          <div className="space-y-0 border-t border-border">
            {text.neighborhoods.map((item, i) => (
              <div
                key={item}
                className="flex items-center justify-between gap-5 border-b border-border py-6"
              >
                <div className="flex items-center gap-5">
                  <span className="font-display text-2xl text-gold">0{i + 1}</span>
                  <span className="font-semibold">{item}</span>
                </div>
                <ArrowRight size={17} className="text-coast" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="rounded-[2rem] border border-border bg-card p-8 md:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                  {text.address}
                </p>
                <h2 className="mt-4 font-display text-5xl font-semibold leading-[.9] md:text-6xl">
                  {text.question}
                </h2>
                <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{text.addressText}</p>
              </div>
              <Button asChild variant="prestige" size="xl">
                <Link to="/contact">
                  {text.button} <ArrowRight />
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
