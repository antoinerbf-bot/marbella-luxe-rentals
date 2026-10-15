import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ChefHat,
  Check,
  Clock3,
  Leaf,
  MessageCircle,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

import { ContactBand, SolveigLayout } from "@/components/SolveigLayout";
import { Button } from "@/components/ui/button";
import chefArchiveOne from "@/assets/chef-culinary-archive-01.jpg";
import chefArchiveTwo from "@/assets/chef-culinary-archive-02.jpg";
import chefArchiveThree from "@/assets/chef-culinary-archive-03.jpg";
import chefArchiveFour from "@/assets/chef-culinary-archive-04.jpg";

const chefImage = chefArchiveOne;
const whatsappLink =
  "https://wa.me/34623626724?text=Bonjour%2C%20je%20souhaite%20imaginer%20une%20exp%C3%A9rience%20de%20chef%20%C3%A0%20domicile%20%C3%A0%20Marbella%20ou%20Mijas.";

export const Route = createFileRoute("/services/chef-a-domicile")({
  head: () => ({
    meta: [
      { title: "Chef à domicile à Marbella & Mijas — Solveig’s Prestige Service" },
      {
        name: "description",
        content:
          "Offrez-vous une expérience culinaire privée dans votre villa à Marbella ou Mijas : une cuisine de saison, imaginée autour de vos envies et servie chez vous.",
      },
      {
        property: "og:title",
        content: "Chef à domicile à Marbella & Mijas — Solveig’s Prestige Service",
      },
      {
        property: "og:description",
        content:
          "Un repas privé dans l’intimité de votre villa, imaginé autour de vos envies et de la douceur de vivre méditerranéenne.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChefAtHomePage,
});

const occasions = [
  {
    icon: Sparkles,
    title: "Un dîner à deux",
    description:
      "Une belle table, un menu imaginé pour l’occasion et le plaisir de prendre son temps.",
  },
  {
    icon: UtensilsCrossed,
    title: "Un repas en famille",
    description: "Retrouvez-vous autour d’une cuisine généreuse, pensée selon les goûts de chacun.",
  },
  {
    icon: ChefHat,
    title: "Une réception privée",
    description:
      "Recevez vos invités dans votre villa, avec une expérience culinaire à votre image.",
  },
];

const experienceSteps = [
  [
    "01",
    "Vos envies d’abord",
    "Nous échangeons sur l’occasion, vos préférences et le rythme que vous souhaitez donner au repas.",
  ],
  [
    "02",
    "Un menu imaginé pour vous",
    "Le menu s’inspire de vos goûts et des produits de saison, avec vos habitudes alimentaires prises en compte.",
  ],
  [
    "03",
    "Le plaisir de recevoir",
    "Le chef prépare et sert le repas chez vous pour que vous puissiez profiter pleinement de vos invités.",
  ],
];

function ChefAtHomePage() {
  return (
    <SolveigLayout>
      <section className="relative isolate flex min-h-[min(820px,100svh)] items-end overflow-hidden bg-primary text-white">
        <img
          src={chefImage}
          alt="Préparation d’un repas dans une cuisine lumineuse"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(25,48,44,.82)_0%,rgba(25,48,44,.55)_48%,rgba(25,48,44,.1)_100%),linear-gradient(0deg,rgba(20,36,33,.62),transparent_55%)]" />
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-40 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/80 sm:text-xs">
              <span className="h-px w-10 bg-gold" />
              L’art de recevoir · Marbella · Mijas
            </p>
            <h1 className="mt-7 font-display text-6xl font-medium leading-[.88] tracking-[-.025em] text-balance sm:text-7xl md:text-[6.5rem]">
              La belle table,
              <br />
              <em className="font-normal text-[#e5c992]">chez vous.</em>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Un chef à domicile pour savourer une cuisine de saison dans l’intimité de votre villa
              — et profiter de chaque instant avec vos invités.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="xl" className="rounded-full">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Imaginer mon expérience <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="coastal"
                size="xl"
                className="rounded-full border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
              >
                <a href="#experience">
                  Découvrir le service <ArrowDown aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="mt-7 text-xs font-medium tracking-wide text-white/65">
              Une expérience privée, chez vous, à votre rythme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                Le luxe de se retrouver
              </p>
              <h2 className="mt-5 max-w-2xl font-display text-5xl font-medium leading-[.92] text-balance md:text-7xl">
                La cuisine vient à vous. Le moment vous appartient.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              Pas de trajet, pas de cuisine à organiser, pas d’invités à laisser seuls. Profitez de
              votre maison et de vos proches pendant qu’un chef s’occupe du repas avec attention.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Leaf,
                title: "Selon vos envies",
                text: "Un menu pensé avec vous, inspiré par la saison et adapté à vos préférences alimentaires.",
              },
              {
                icon: Clock3,
                title: "À votre rythme",
                text: "Dîner intime, déjeuner en famille ou réception privée : l’expérience s’accorde à votre occasion.",
              },
              {
                icon: Check,
                title: "Sans logistique",
                text: "Le chef cuisine et sert chez vous. Vous restez pleinement présent auprès de vos invités.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-coast/10 text-coast">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <h3 className="mt-7 font-display text-3xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f1e6d5]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-12 lg:py-28">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#987543]">
              Une histoire de cuisine
            </p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[.92] text-[#34271e] text-balance md:text-6xl">
              Quarante ans de métier, le goût du partage.
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#66584c] sm:text-base">
              Dominique Hybord entre en apprentissage à 14 ans et fait ses premières armes à Paris,
              avant de poursuivre son parcours dans des maisons reconnues, dont l’Auberge du Père
              Bise à Talloires. À Cevins, son village natal, il ouvre ensuite La Fleur de Sel.
              Quarante années de carrière ont été saluées par la presse.
            </p>
            <p className="mt-5 border-l-2 border-[#b9935a] pl-4 text-sm leading-6 text-[#74665a]">
              Aujourd’hui, ce savoir-faire et cette générosité inspirent une cuisine à savourer chez
              vous, à Marbella ou Mijas.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { image: chefArchiveTwo, year: "2016" },
              { image: chefArchiveThree, year: "2024" },
              { image: chefArchiveFour, year: "2019" },
            ].map(({ image, year }, index) => (
              <figure
                key={image}
                className={`relative overflow-hidden rounded-2xl bg-[#d6c6ae] ${
                  index === 0
                    ? "row-span-2 min-h-[330px] sm:min-h-[450px]"
                    : "min-h-[158px] sm:min-h-[218px]"
                }`}
              >
                <img
                  src={image}
                  alt={`Photographie des archives de cuisine de Dominique Hybord, ${year}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-[1.035]"
                />
              </figure>
            ))}
            <p className="col-span-2 text-right text-[9px] font-semibold uppercase tracking-[.18em] text-[#806b55]">
              Archives photographiques du chef
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 bg-surface">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                <span className="h-px w-8 bg-gold" />
                Une expérience à votre image
              </p>
              <h2 className="mt-5 font-display text-5xl font-medium leading-[.92] md:text-7xl">
                Chaque occasion mérite sa propre saveur.
              </h2>
              <p className="mt-6 max-w-lg leading-7 text-muted-foreground">
                Un service pensé pour les beaux moments, qu’ils soient spontanés ou préparés de
                longue date.
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-coast transition-colors hover:text-primary"
              >
                Parlons de votre projet <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-3">
              {occasions.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="flex gap-5 rounded-2xl border border-border bg-background p-6 sm:items-center sm:p-7"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:px-12 lg:py-28">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
              En toute simplicité
            </p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[.92] md:text-6xl">
              De vos envies au dernier service.
            </h2>
          </div>
          <div className="border-t border-border">
            {experienceSteps.map(([number, title, description]) => (
              <article
                key={number}
                className="grid gap-3 border-b border-border py-6 sm:grid-cols-[64px_1fr] sm:gap-5 sm:py-7"
              >
                <span className="font-display text-3xl text-gold">{number}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] bg-primary px-7 py-12 text-white shadow-elegant sm:px-10 md:px-14 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                <MessageCircle size={15} aria-hidden="true" /> Votre table à Marbella ou Mijas
              </p>
              <h2 className="mt-5 font-display text-5xl font-medium leading-[.92] text-balance md:text-7xl">
                Parlons du moment que vous souhaitez créer.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Partagez-nous votre date, votre lieu et vos envies. Nous vous aiderons à imaginer
                une expérience sur mesure.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild variant="secondary" size="xl" className="rounded-full">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Écrire sur WhatsApp <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="coastal"
                size="xl"
                className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Link to="/contact">Voir nos coordonnées</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}
