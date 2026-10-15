import { Link } from "@tanstack/react-router";
import { ArrowRight, ChefHat, Check } from "lucide-react";

import { useSolveigLocale } from "@/components/SolveigLayout";
import { Button } from "@/components/ui/button";
import image from "@/assets/chef-culinary-archive-01.jpg";

const copy = {
  fr: {
    eyebrow: "L’art de recevoir · Marbella · Mijas",
    title: "Et si le chef venait chez vous ?",
    description:
      "Dans l’intimité de votre villa, savourez un repas imaginé selon vos envies et préparé sur place. Vous profitez de vos invités ; nous nous occupons du reste.",
    benefits: ["Un menu pensé pour vous", "Le plaisir de recevoir sans contraintes"],
    action: "Découvrir le chef à domicile",
    imageAlt: "Un repas préparé dans une cuisine lumineuse",
  },
  en: {
    eyebrow: "The art of hosting · Marbella · Mijas",
    title: "What if the chef came to you?",
    description:
      "Enjoy a meal created around your tastes and prepared in the privacy of your villa. Spend time with your guests while we take care of the rest.",
    benefits: ["A menu created around you", "The pleasure of hosting, made effortless"],
    action: "Discover the private chef experience",
    imageAlt: "A meal being prepared in a bright kitchen",
  },
  es: {
    eyebrow: "El arte de recibir · Marbella · Mijas",
    title: "¿Y si el chef viniera a su casa?",
    description:
      "Disfrute de una comida pensada según sus gustos y preparada en la intimidad de su villa. Comparta el momento con sus invitados; nosotros nos ocupamos del resto.",
    benefits: ["Un menú pensado para usted", "El placer de recibir sin preocupaciones"],
    action: "Descubrir el chef a domicilio",
    imageAlt: "Preparación de una comida en una cocina luminosa",
  },
} as const;

export function ChefServiceSpotlight() {
  const content = copy[useSolveigLocale()];

  return (
    <section
      aria-labelledby="chef-service-spotlight-title"
      className="bg-[#f7f0e3] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[1.6rem] border border-[#78664c]/15 bg-[#fbf6eb] shadow-[0_24px_70px_-48px_rgba(53,39,28,.55)] md:grid-cols-[1.05fr_.95fr]">
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-[#987543]">
            <span className="flex size-9 items-center justify-center rounded-full border border-[#b9935a]/35 text-[#987543]">
              <ChefHat size={17} aria-hidden="true" />
            </span>
            {content.eyebrow}
          </p>
          <h2
            id="chef-service-spotlight-title"
            className="mt-6 max-w-xl font-display text-4xl font-medium leading-[.95] text-[#34271e] text-balance sm:text-5xl lg:text-6xl"
          >
            {content.title}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#66584c] sm:text-base">
            {content.description}
          </p>
          <ul className="mt-6 grid gap-3 text-xs font-semibold text-[#4e5145] sm:text-sm">
            {content.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5">
                <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-[#4f7f70]" />
                {benefit}
              </li>
            ))}
          </ul>
          <Button asChild variant="prestige" size="lg" className="mt-8 w-fit rounded-full px-6">
            <Link to="/services/chef-a-domicile">
              {content.action}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="relative min-h-64 md:min-h-full">
          <img
            src={image}
            alt={content.imageAlt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2d2119]/35 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 rounded-full border border-white/35 bg-[#2d2119]/40 px-4 py-2 text-[9px] font-bold uppercase tracking-[.2em] text-white backdrop-blur-sm sm:bottom-7 sm:left-7">
            Solveig’s Prestige Service
          </p>
        </div>
      </div>
    </section>
  );
}
