import { Link } from "@tanstack/react-router";
import { ArrowRight, ChefHat, Check, MessageCircle } from "lucide-react";

import { useSolveigLocale } from "@/lib/locale";
import { ScrollParallaxImage } from "@/components/ScrollParallaxImage";
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
    contact: "Parler de mon dîner",
    imageAlt: "Photographie issue des archives culinaires de Dominique Hybord",
    whatsappMessage:
      "Bonjour, je souhaite organiser un dîner avec un chef à domicile à Marbella ou Mijas.",
  },
  en: {
    eyebrow: "The art of hosting · Marbella · Mijas",
    title: "What if the chef came to you?",
    description:
      "Enjoy a meal created around your tastes and prepared in the privacy of your villa. Spend time with your guests while we take care of the rest.",
    benefits: ["A menu created around you", "The pleasure of hosting, made effortless"],
    action: "Discover the private chef experience",
    contact: "Discuss my dinner",
    imageAlt: "Photograph from Dominique Hybord’s culinary archive",
    whatsappMessage: "Hello, I would like to arrange a private chef dinner in Marbella or Mijas.",
  },
  es: {
    eyebrow: "El arte de recibir · Marbella · Mijas",
    title: "¿Y si el chef viniera a su casa?",
    description:
      "Disfrute de una comida pensada según sus gustos y preparada en la intimidad de su villa. Comparta el momento con sus invitados; nosotros nos ocupamos del resto.",
    benefits: ["Un menú pensado para usted", "El placer de recibir sin preocupaciones"],
    action: "Descubrir el chef a domicilio",
    contact: "Hablar de mi cena",
    imageAlt: "Fotografía del archivo culinario de Dominique Hybord",
    whatsappMessage:
      "Hola, me gustaría organizar una cena con chef a domicilio en Marbella o Mijas.",
  },
  ar: {
    eyebrow: "فنّ الضيافة · ماربيا · ميخاس",
    title: "ماذا لو أتى الطاهي إلى منزلك؟",
    description:
      "استمتع بوجبة تُعدّ وفق أذواقك وفي خصوصية فيلتك. عش اللحظة مع ضيوفك، ودعنا نهتم بكل ما عداها.",
    benefits: ["قائمة طعام مصممة لك", "ضيافة ممتعة بلا عناء"],
    action: "اكتشف تجربة الطاهي الخاص",
    contact: "لنتحدث عن أمسيتك",
    imageAlt: "صورة من أرشيف الطهي لدومينيك هيبور",
    whatsappMessage: "مرحباً، أود تنظيم عشاء مع طاهٍ خاص في ماربيا أو ميخاس.",
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
          <a
            href={`https://wa.me/34623626724?text=${encodeURIComponent(content.whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-11 w-fit items-center gap-2 rounded-full px-2 text-xs font-semibold text-[#4f7f70] transition hover:text-[#315d50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4f7f70]"
          >
            <MessageCircle size={15} aria-hidden="true" />
            {content.contact}
          </a>
        </div>

        <ScrollParallaxImage src={image} alt={content.imageAlt} className="min-h-64 md:min-h-full">
          <svg
            aria-hidden="true"
            viewBox="0 0 240 180"
            className="culinary-motif pointer-events-none absolute right-3 top-2 w-[40%] max-w-52 text-[#fff5dc]/85 drop-shadow-lg sm:right-6 sm:top-5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="132" cy="91" r="54" strokeWidth="2" />
            <circle cx="132" cy="91" r="43" strokeWidth="1" />
            <circle cx="116" cy="79" r="11" strokeWidth="2" />
            <circle cx="145" cy="102" r="12" strokeWidth="2" />
            <path
              d="M116 68c-4-8-2-13 3-17 3 6 3 11-3 17Zm2 0c7-7 12-9 18-7-5 7-10 9-18 7Z"
              strokeWidth="1.5"
            />
            <path
              d="M142 90c5-7 11-9 16-6-4 7-9 9-16 6Zm3 2c8-4 13-3 17 2-7 4-12 3-17-2Z"
              strokeWidth="1.5"
            />
            <path
              d="M37 37v54m-8-54v20m16-20v20m-8 14v45m164-85v48m-7-48v17c0 9 14 9 14 0V21"
              strokeWidth="2"
            />
            <path d="M25 145c24-12 40-12 59 0m75 0c17-11 32-12 52-5" strokeWidth="1.2" />
          </svg>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2d2119]/35 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 rounded-full border border-white/35 bg-[#2d2119]/40 px-4 py-2 text-[9px] font-bold uppercase tracking-[.2em] text-white backdrop-blur-sm sm:bottom-7 sm:left-7">
            Solveig’s Prestige Service
          </p>
        </ScrollParallaxImage>
      </div>
    </section>
  );
}
