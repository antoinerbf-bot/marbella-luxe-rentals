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
import { useSolveigLocale } from "@/lib/locale";
import { ScrollParallaxImage } from "@/components/ScrollParallaxImage";
import chefArchiveOne from "@/assets/chef-culinary-archive-01.jpg";
import chefArchiveTwo from "@/assets/chef-culinary-archive-02.jpg";
import chefArchiveThree from "@/assets/chef-culinary-archive-03.jpg";
import chefArchiveFour from "@/assets/chef-culinary-archive-04.jpg";

const chefImage = chefArchiveOne;

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

const copy = {
  fr: {
    heroEyebrow: "L’art de recevoir · Marbella · Mijas",
    heroFirst: "La belle table,",
    heroSecond: "chez vous.",
    heroDescription:
      "Un chef à domicile pour savourer une cuisine de saison dans l’intimité de votre villa — et profiter de chaque instant avec vos invités.",
    heroAction: "Imaginer mon expérience",
    whatsappMessage:
      "Bonjour, je souhaite imaginer une expérience de chef à domicile à Marbella ou Mijas.",
    heroDiscover: "Découvrir le service",
    heroNote: "Une expérience privée, chez vous, à votre rythme.",
    benefitsEyebrow: "Le luxe de se retrouver",
    benefitsTitle: "La cuisine vient à vous. Le moment vous appartient.",
    benefitsIntro:
      "Pas de trajet, pas de cuisine à organiser, pas d’invités à laisser seuls. Profitez de votre maison et de vos proches pendant qu’un chef s’occupe du repas avec attention.",
    benefits: [
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
    ],
    storyEyebrow: "Une histoire de cuisine",
    storyTitle: "Quarante ans de métier, le goût du partage.",
    storyText:
      "Dominique Hybord entre en apprentissage à 14 ans et fait ses premières armes à Paris, avant de poursuivre son parcours dans des maisons reconnues, dont l’Auberge du Père Bise à Talloires. À Cevins, son village natal, il ouvre ensuite La Fleur de Sel. Quarante années de carrière ont été saluées par la presse.",
    storyQuote:
      "Aujourd’hui, ce savoir-faire et cette générosité inspirent une cuisine à savourer chez vous, à Marbella ou Mijas.",
    galleryLabel: "Archives photographiques du chef",
    archiveAlt: "Photographie des archives de cuisine de Dominique Hybord",
    occasionEyebrow: "Une expérience à votre image",
    occasionTitle: "Chaque occasion mérite sa propre saveur.",
    occasionIntro:
      "Un service pensé pour les beaux moments, qu’ils soient spontanés ou préparés de longue date.",
    occasions: [
      {
        icon: Sparkles,
        title: "Un dîner à deux",
        description:
          "Une belle table, un menu imaginé pour l’occasion et le plaisir de prendre son temps.",
      },
      {
        icon: UtensilsCrossed,
        title: "Un repas en famille",
        description:
          "Retrouvez-vous autour d’une cuisine généreuse, pensée selon les goûts de chacun.",
      },
      {
        icon: ChefHat,
        title: "Une réception privée",
        description:
          "Recevez vos invités dans votre villa, avec une expérience culinaire à votre image.",
      },
    ],
    project: "Parlons de votre projet",
    simpleEyebrow: "En toute simplicité",
    stepsTitle: "De vos envies au dernier service.",
    steps: [
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
    ],
    contactEyebrow: "Votre table à Marbella ou Mijas",
    contactTitle: "Parlons du moment que vous souhaitez créer.",
    contactText:
      "Partagez-nous votre date, votre lieu et vos envies. Nous vous aiderons à imaginer une expérience sur mesure.",
    whatsapp: "Écrire sur WhatsApp",
    contactDetails: "Voir nos coordonnées",
  },
  en: {
    heroEyebrow: "The art of hosting · Marbella · Mijas",
    heroFirst: "A beautiful table,",
    heroSecond: "at home.",
    heroDescription:
      "A private chef brings seasonal cooking to the intimacy of your villa, so you can savour every moment with your guests.",
    heroAction: "Plan my experience",
    whatsappMessage: "Hello, I would like to plan a private chef experience in Marbella or Mijas.",
    heroDiscover: "Discover the service",
    heroNote: "A private experience, in your home, at your pace.",
    benefitsEyebrow: "The pleasure of coming together",
    benefitsTitle: "The kitchen comes to you. The moment is yours.",
    benefitsIntro:
      "No travel, no meal to organise, no leaving your guests alone. Enjoy your home and your company while a chef takes care of the meal with care.",
    benefits: [
      {
        icon: Leaf,
        title: "Made around you",
        text: "A menu imagined with you, inspired by the season and adapted to your dietary preferences.",
      },
      {
        icon: Clock3,
        title: "At your pace",
        text: "An intimate dinner, family lunch or private reception: the experience fits the occasion.",
      },
      {
        icon: Check,
        title: "No logistics",
        text: "The chef cooks and serves at home, leaving you free to be with your guests.",
      },
    ],
    storyEyebrow: "A culinary story",
    storyTitle: "Forty years in the kitchen, a lifelong love of sharing.",
    storyText:
      "Dominique Hybord began his apprenticeship at 14 and learned his trade in Paris, before continuing in renowned kitchens including Auberge du Père Bise in Talloires. He later opened La Fleur de Sel in Cevins, his home village. Forty years of work were celebrated in the press.",
    storyQuote:
      "Today, this experience and generosity inspire a meal to savour in your own home in Marbella or Mijas.",
    galleryLabel: "The chef’s photographic archive",
    archiveAlt: "Photograph from Dominique Hybord’s culinary archive",
    occasionEyebrow: "An experience that feels like yours",
    occasionTitle: "Every occasion deserves its own flavour.",
    occasionIntro: "A service for special moments, whether spontaneous or long planned.",
    occasions: [
      {
        icon: Sparkles,
        title: "A dinner for two",
        description: "A beautiful table, a menu imagined for the occasion and time to savour it.",
      },
      {
        icon: UtensilsCrossed,
        title: "A family meal",
        description: "Come together over generous cooking, considered around everyone’s tastes.",
      },
      {
        icon: ChefHat,
        title: "A private reception",
        description:
          "Welcome your guests at the villa with a culinary experience that feels like you.",
      },
    ],
    project: "Let’s discuss your plans",
    simpleEyebrow: "Effortlessly arranged",
    stepsTitle: "From your first idea to the final course.",
    steps: [
      [
        "01",
        "Your wishes come first",
        "We talk through the occasion, your preferences and the pace you want for the meal.",
      ],
      [
        "02",
        "A menu created for you",
        "The menu follows your tastes and seasonal produce, with dietary requirements taken into account.",
      ],
      [
        "03",
        "Enjoy being the host",
        "The chef prepares and serves at home, so you can be fully present with your guests.",
      ],
    ],
    contactEyebrow: "Your table in Marbella or Mijas",
    contactTitle: "Let’s plan the moment you want to create.",
    contactText:
      "Share your date, location and wishes. We’ll help you imagine an experience made around you.",
    whatsapp: "Message us on WhatsApp",
    contactDetails: "View contact details",
  },
  es: {
    heroEyebrow: "El arte de recibir · Marbella · Mijas",
    heroFirst: "Una mesa especial,",
    heroSecond: "en su casa.",
    heroDescription:
      "Un chef a domicilio lleva la cocina de temporada a la intimidad de su villa para que disfrute cada momento con sus invitados.",
    heroAction: "Imaginar mi experiencia",
    whatsappMessage:
      "Hola, me gustaría organizar una experiencia de chef a domicilio en Marbella o Mijas.",
    heroDiscover: "Descubrir el servicio",
    heroNote: "Una experiencia privada, en su casa y a su ritmo.",
    benefitsEyebrow: "El placer de reunirse",
    benefitsTitle: "La cocina viene a usted. El momento es suyo.",
    benefitsIntro:
      "Sin desplazamientos ni comidas que organizar y sin dejar solos a sus invitados. Disfrute de su casa y los suyos mientras el chef se ocupa del menú.",
    benefits: [
      {
        icon: Leaf,
        title: "A su gusto",
        text: "Un menú pensado con usted, inspirado en la temporada y adaptado a sus preferencias alimentarias.",
      },
      {
        icon: Clock3,
        title: "A su ritmo",
        text: "Cena íntima, comida familiar o recepción privada: la experiencia se adapta a la ocasión.",
      },
      {
        icon: Check,
        title: "Sin logística",
        text: "El chef cocina y sirve en su casa para que pueda estar plenamente con sus invitados.",
      },
    ],
    storyEyebrow: "Una historia de cocina",
    storyTitle: "Cuarenta años de oficio y pasión por compartir.",
    storyText:
      "Dominique Hybord empezó su aprendizaje a los 14 años y se formó en París, antes de continuar en casas reconocidas, entre ellas Auberge du Père Bise en Talloires. Después abrió La Fleur de Sel en Cevins, su pueblo natal. La prensa celebró sus cuarenta años de carrera.",
    storyQuote:
      "Hoy, su experiencia y generosidad inspiran una cocina para disfrutar en su casa de Marbella o Mijas.",
    galleryLabel: "Archivo fotográfico del chef",
    archiveAlt: "Fotografía del archivo culinario de Dominique Hybord",
    occasionEyebrow: "Una experiencia a su medida",
    occasionTitle: "Cada ocasión merece su propio sabor.",
    occasionIntro:
      "Un servicio pensado para los buenos momentos, espontáneos o preparados con tiempo.",
    occasions: [
      {
        icon: Sparkles,
        title: "Una cena para dos",
        description:
          "Una mesa especial, un menú ideado para la ocasión y el placer de disfrutar sin prisa.",
      },
      {
        icon: UtensilsCrossed,
        title: "Una comida en familia",
        description: "Reunirse alrededor de una cocina generosa, pensada para los gustos de todos.",
      },
      {
        icon: ChefHat,
        title: "Una recepción privada",
        description:
          "Reciba a sus invitados en la villa con una experiencia culinaria a su medida.",
      },
    ],
    project: "Hablemos de su idea",
    simpleEyebrow: "Con toda sencillez",
    stepsTitle: "De sus deseos al último plato.",
    steps: [
      [
        "01",
        "Primero, sus preferencias",
        "Hablamos de la ocasión, sus gustos y el ritmo que desea para la comida.",
      ],
      [
        "02",
        "Un menú pensado para usted",
        "El menú se inspira en sus gustos y en los productos de temporada, respetando sus hábitos alimentarios.",
      ],
      [
        "03",
        "El placer de recibir",
        "El chef prepara y sirve en su casa para que disfrute plenamente de sus invitados.",
      ],
    ],
    contactEyebrow: "Su mesa en Marbella o Mijas",
    contactTitle: "Hablemos del momento que quiere crear.",
    contactText:
      "Comparta la fecha, el lugar y sus deseos. Le ayudaremos a imaginar una experiencia a medida.",
    whatsapp: "Escribir por WhatsApp",
    contactDetails: "Ver nuestros datos de contacto",
  },
  ar: {
    heroEyebrow: "فنّ الضيافة · ماربيا · ميخاس",
    heroFirst: "مائدة جميلة،",
    heroSecond: "في منزلك.",
    heroDescription: "طاهٍ خاص يقدّم أطباق الموسم في خصوصية فيلتك، لتستمتع بكل لحظة مع ضيوفك.",
    heroAction: "خطط لتجربتك",
    whatsappMessage: "مرحباً، أود تنظيم تجربة طاهٍ خاص في ماربيا أو ميخاس.",
    heroDiscover: "اكتشف الخدمة",
    heroNote: "تجربة خاصة في منزلك وعلى إيقاعك.",
    benefitsEyebrow: "متعة اللقاء",
    benefitsTitle: "المطبخ يأتي إليك. واللحظة لك.",
    benefitsIntro:
      "لا تنقلات ولا إعداد للطعام ولا حاجة لترك ضيوفك وحدهم. استمتع بمنزلك وبصحبة أحبائك، ودع الطاهي يهتم بالوجبة.",
    benefits: [
      {
        icon: Leaf,
        title: "حسب ذوقك",
        text: "قائمة نبتكرها معك، مستوحاة من الموسم ومراعية لتفضيلاتك الغذائية.",
      },
      {
        icon: Clock3,
        title: "على إيقاعك",
        text: "عشاء حميم أو غداء عائلي أو استقبال خاص؛ التجربة تناسب مناسبتك.",
      },
      {
        icon: Check,
        title: "بلا عناء التنظيم",
        text: "يطبخ الطاهي ويقدّم الطعام في منزلك لتبقى قريباً من ضيوفك.",
      },
    ],
    storyEyebrow: "حكاية من المطبخ",
    storyTitle: "أربعون عاماً من الخبرة وحبّ المشاركة.",
    storyText:
      "بدأ دومينيك هيبور التدريب المهني في الرابعة عشرة، وتعلّم أصول المهنة في باريس قبل أن يواصل مسيرته في مطاعم معروفة، منها أوبيرج دو بير بيز في تالوار. ثم افتتح لا فلور دو سيل في قريته سيفان. واحتفت الصحافة بأربعين عاماً من عمله.",
    storyQuote: "اليوم، تلهم هذه الخبرة والكرم وجبات تُستمتع بها في منزلك في ماربيا أو ميخاس.",
    galleryLabel: "أرشيف الطاهي المصوّر",
    archiveAlt: "صورة من أرشيف الطهي لدومينيك هيبور",
    occasionEyebrow: "تجربة تشبهك",
    occasionTitle: "لكل مناسبة مذاقها الخاص.",
    occasionIntro: "خدمة للحظات الجميلة، سواء جاءت عفوية أو خُطط لها منذ وقت.",
    occasions: [
      {
        icon: Sparkles,
        title: "عشاء لشخصين",
        description: "مائدة جميلة وقائمة خاصة بالمناسبة ومتعة الاستمتاع بالوقت.",
      },
      {
        icon: UtensilsCrossed,
        title: "وجبة عائلية",
        description: "لقاء حول أطباق سخية تراعي أذواق الجميع.",
      },
      {
        icon: ChefHat,
        title: "استقبال خاص",
        description: "استقبل ضيوفك في الفيلا بتجربة طعام تعبّر عنك.",
      },
    ],
    project: "لنتحدث عن فكرتك",
    simpleEyebrow: "بكل سهولة",
    stepsTitle: "من رغبتك الأولى حتى آخر طبق.",
    steps: [
      ["01", "رغباتك أولاً", "نتحدث عن المناسبة وتفضيلاتك والإيقاع الذي تريده للوجبة."],
      ["02", "قائمة صُممت لك", "تستلهم القائمة ذوقك ومكونات الموسم، مع مراعاة عاداتك الغذائية."],
      ["03", "استمتع بالضيافة", "يحضّر الطاهي الطعام ويقدّمه في منزلك لتتفرغ لضيوفك."],
    ],
    contactEyebrow: "مائدتك في ماربيا أو ميخاس",
    contactTitle: "لنتحدث عن اللحظة التي ترغب في صنعها.",
    contactText: "أخبرنا بالتاريخ والمكان وما تحب. سنساعدك على ابتكار تجربة خاصة بك.",
    whatsapp: "راسلنا عبر واتساب",
    contactDetails: "عرض بيانات التواصل",
  },
} as const;

function ChefAtHomePage() {
  const content = copy[useSolveigLocale()];
  const whatsappLink = `https://wa.me/34623626724?text=${encodeURIComponent(content.whatsappMessage)}`;

  return (
    <SolveigLayout>
      <section className="relative isolate flex min-h-[min(820px,100svh)] items-end overflow-hidden bg-primary text-white">
        <ScrollParallaxImage
          src={chefImage}
          alt={content.archiveAlt}
          fetchPriority="high"
          loading="eager"
          className="absolute inset-0 -z-20"
          imageClassName="object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(25,48,44,.82)_0%,rgba(25,48,44,.55)_48%,rgba(25,48,44,.1)_100%),linear-gradient(0deg,rgba(20,36,33,.62),transparent_55%)]" />
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-40 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/80 sm:text-xs">
              <span className="h-px w-10 bg-gold" />
              {content.heroEyebrow}
            </p>
            <h1 className="mt-7 font-display text-6xl font-medium leading-[.88] tracking-[-.025em] text-balance sm:text-7xl md:text-[6.5rem]">
              {content.heroFirst}
              <br />
              <em className="font-normal text-[#e5c992]">{content.heroSecond}</em>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {content.heroDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="xl" className="rounded-full">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  {content.heroAction} <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="coastal"
                size="xl"
                className="rounded-full border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
              >
                <a href="#experience">
                  {content.heroDiscover} <ArrowDown aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="mt-7 text-xs font-medium tracking-wide text-white/65">
              {content.heroNote}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                {content.benefitsEyebrow}
              </p>
              <h2 className="mt-5 max-w-2xl font-display text-5xl font-medium leading-[.92] text-balance md:text-7xl">
                {content.benefitsTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">
              {content.benefitsIntro}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {content.benefits.map(({ icon: Icon, title, text }) => (
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
              {content.storyEyebrow}
            </p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[.92] text-[#34271e] text-balance md:text-6xl">
              {content.storyTitle}
            </h2>
            <p className="mt-6 text-sm leading-7 text-[#66584c] sm:text-base">
              {content.storyText}
            </p>
            <p className="mt-5 border-l-2 border-[#b9935a] pl-4 text-sm leading-6 text-[#74665a]">
              {content.storyQuote}
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
                <ScrollParallaxImage
                  src={image}
                  alt={`${content.archiveAlt}, ${year}`}
                  loading="lazy"
                  className="absolute inset-0"
                  imageClassName="transition-[filter] duration-700 hover:brightness-105"
                />
              </figure>
            ))}
            <p className="col-span-2 text-right text-[9px] font-semibold uppercase tracking-[.18em] text-[#806b55]">
              {content.galleryLabel}
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
                {content.occasionEyebrow}
              </p>
              <h2 className="mt-5 font-display text-5xl font-medium leading-[.92] md:text-7xl">
                {content.occasionTitle}
              </h2>
              <p className="mt-6 max-w-lg leading-7 text-muted-foreground">
                {content.occasionIntro}
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-coast transition-colors hover:text-primary"
              >
                {content.project} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-3">
              {content.occasions.map(({ icon: Icon, title, description }) => (
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
              {content.simpleEyebrow}
            </p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[.92] md:text-6xl">
              {content.stepsTitle}
            </h2>
          </div>
          <div className="border-t border-border">
            {content.steps.map(([number, title, description]) => (
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
                <MessageCircle size={15} aria-hidden="true" /> {content.contactEyebrow}
              </p>
              <h2 className="mt-5 font-display text-5xl font-medium leading-[.92] text-balance md:text-7xl">
                {content.contactTitle}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                {content.contactText}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild variant="secondary" size="xl" className="rounded-full">
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  {content.whatsapp} <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="coastal"
                size="xl"
                className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Link to="/contact">{content.contactDetails}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}
