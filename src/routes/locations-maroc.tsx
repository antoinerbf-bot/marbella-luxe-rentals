import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  House,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { MoroccoStayLayout } from "@/components/MoroccoStayLayout";
import { Button } from "@/components/ui/button";

const images = {
  hero: "https://upload.wikimedia.org/wikipedia/commons/4/47/Marrakech_Riad_%2852189355675%29.jpg",
  marrakech: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Laksiba_Courtyard.jpg",
  essaouira:
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Blue_Fishing_Boat_and_Medina_Walls%2C_Essaouira%2C_Morocco.jpg",
};

const enquiryLink =
  "https://wa.me/34623626724?text=Bonjour%2C%20je%20souhaite%20d%C3%A9couvrir%20vos%20locations%20d%E2%80%99appartements%20et%20villas%20au%20Maroc.%20Voici%20mes%20dates%20et%20mes%20envies%20%3A";

export const Route = createFileRoute("/locations-maroc")({
  head: () => ({
    meta: [
      {
        title: "Maisons du Maroc — Appartements & villas de charme",
      },
      {
        name: "description",
        content:
          "Découvrez des idées de séjours en appartements et villas de charme au Maroc. Partagez vos dates et vos envies pour recevoir une sélection adaptée.",
      },
      {
        property: "og:title",
        content: "Maisons du Maroc — Appartements & villas",
      },
      {
        property: "og:description",
        content:
          "Patios de Marrakech, lumière d’Essaouira et maisons de vacances sélectionnées selon votre façon de voyager.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MoroccoStaysPage,
});

const stays = [
  {
    icon: Building2,
    title: "Appartements de caractère",
    text: "Une adresse à taille humaine, à choisir selon vos dates, votre quartier préféré et la façon dont vous aimez découvrir une ville.",
  },
  {
    icon: House,
    title: "Villas pour se retrouver",
    text: "De l’espace pour partager les vacances en famille ou entre amis, avec les équipements et le niveau d’intimité dont vous avez besoin.",
  },
];

const destinations = [
  {
    name: "Marrakech",
    mood: "Patios, jardins et lumière ocre",
    text: "Pour vivre la ville à votre rythme et retrouver le calme d’une adresse privée après vos découvertes.",
    image: images.marrakech,
    alt: "Cour intérieure d’un riad traditionnel à Marrakech",
    credit: "Maverickhawkesley · CC BY-SA 3.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Laksiba_Courtyard.jpg",
  },
  {
    name: "Essaouira",
    mood: "Médina blanche et air atlantique",
    text: "Une parenthèse au bord de l’océan, entre ruelles, remparts et journées qui s’étirent.",
    image: images.essaouira,
    alt: "Bateau bleu et remparts d’Essaouira au bord de l’Atlantique",
    credit: "CastlesCatalog · CC BY-SA 4.0",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:Blue_Fishing_Boat_and_Medina_Walls,_Essaouira,_Morocco.jpg",
  },
];

function MoroccoStaysPage() {
  return (
    <MoroccoStayLayout>
      <section className="relative isolate flex min-h-[min(790px,100svh)] items-end overflow-hidden bg-[#38251c] text-[#fff8ed]">
        <img
          src={images.hero}
          alt="Patio chaleureux d’un riad à Marrakech"
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(47,31,22,.78)_0%,rgba(47,31,22,.48)_50%,rgba(47,31,22,.12)_100%),linear-gradient(0deg,rgba(42,27,20,.68),transparent_60%)]" />
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-40 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#f2d49d] sm:text-xs">
              <span className="h-px w-10 bg-[#e5bd77]" />
              Séjours de charme · Maroc
            </p>
            <h1 className="mt-7 font-display text-6xl font-medium leading-[.88] text-balance sm:text-7xl md:text-[6.5rem]">
              Le Maroc,
              <br />
              <em className="font-normal text-[#f0c989]">comme chez vous.</em>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Appartements de charme et villas accueillantes pour découvrir le Maroc à votre rythme,
              entre art de vivre, lumière chaude et douceur des maisons privées.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="xl" className="rounded-full">
                <a href={enquiryLink} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" />
                  Imaginer mon séjour
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="coastal"
                size="xl"
                className="rounded-full border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
              >
                <a href="#adresses">
                  Explorer les adresses
                  <ArrowDown aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[.19em] text-white/68">
              Marrakech · Essaouira · Maroc
            </p>
            <a
              href="https://commons.wikimedia.org/wiki/File:Marrakech_Riad_(52189355675).jpg"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-[9px] text-white/60 underline decoration-white/30 underline-offset-4"
            >
              Photo : William John Gauthier · CC BY-SA 2.0
            </a>
          </div>
        </div>
      </section>

      <section id="esprit" className="bg-[#fbf6eb]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#987543]">
                L’adresse donne le ton
              </p>
              <h2 className="mt-5 max-w-2xl font-display text-5xl font-medium leading-[.92] text-[#34271e] text-balance sm:text-6xl md:text-7xl">
                Une maison à soi, le temps d’un voyage.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#66584c] lg:justify-self-end sm:text-base">
              Un appartement bien choisi pour explorer, une villa où se retrouver : nous cherchons
              une adresse en accord avec vos dates, votre groupe et l’atmosphère que vous imaginez.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {stays.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="relative overflow-hidden rounded-[1.4rem] border border-[#78664c]/15 bg-white/80 p-7 shadow-[0_22px_60px_-48px_rgba(53,39,28,.5)] sm:p-9"
              >
                <span className="absolute right-5 top-2 font-display text-7xl text-[#b9935a]/15">
                  0{index + 1}
                </span>
                <span className="flex size-12 items-center justify-center rounded-full border border-[#b9935a]/35 text-[#987543]">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3 className="mt-7 font-display text-3xl font-semibold text-[#34271e] sm:text-4xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#74665a]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="adresses" className="scroll-mt-24 bg-[#efe3d2]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#987543]">
              Deux inspirations, un même art de vivre
            </p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[.93] text-[#34271e] text-balance sm:text-6xl md:text-7xl">
              Choisir son décor marocain.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {destinations.map((destination) => (
              <article
                key={destination.name}
                className="group relative min-h-[470px] overflow-hidden rounded-[1.6rem] bg-[#38251c] text-white"
              >
                <img
                  src={destination.image}
                  alt={destination.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2119]/90 via-[#2d2119]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                  <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#f0c989]">
                    {destination.mood}
                  </p>
                  <h3 className="mt-3 font-display text-5xl font-medium">{destination.name}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/78">
                    {destination.text}
                  </p>
                  <a
                    href={destination.creditUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block text-[9px] text-white/65 underline decoration-white/30 underline-offset-4"
                  >
                    Photo : {destination.credit}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-maroc" className="scroll-mt-24 bg-[#7d4933] text-[#fff8ed]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-12 lg:py-28">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.23em] text-[#f0c989]">
              <Sparkles size={15} aria-hidden="true" />
              Un séjour qui vous ressemble
            </p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[.92] text-balance sm:text-6xl">
              Vos dates. Vos envies. La bonne adresse.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/75">
              Décrivez le nombre de voyageurs, le type de maison et l’ambiance recherchée. Une
              sélection adaptée vous sera proposée selon les disponibilités à confirmer.
            </p>
          </div>
          <div className="rounded-[1.4rem] border border-white/20 bg-[#613a2a]/70 p-6 sm:p-8">
            {[
              "Dates et durée du séjour",
              "Appartement ou villa, nombre de voyageurs",
              "Ville, quartier et équipements souhaités",
            ].map((item) => (
              <p
                key={item}
                className="flex gap-3 border-b border-white/15 py-4 text-sm last:border-0"
              >
                <Check size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-[#f0c989]" />
                {item}
              </p>
            ))}
            <a
              href={enquiryLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#f4e7d1] px-6 py-3 text-sm font-semibold text-[#34271e] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Parler de mon séjour <ArrowRight size={16} aria-hidden="true" />
            </a>
            <p className="mt-4 text-xs leading-5 text-white/60">
              Chaque adresse, son tarif et ses disponibilités sont confirmés avant toute
              réservation.
            </p>
          </div>
        </div>
      </section>
    </MoroccoStayLayout>
  );
}
