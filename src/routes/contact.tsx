import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { PageHero, SolveigLayout } from "@/components/SolveigLayout";
import { Button } from "@/components/ui/button";
import { useSolveigLocale } from "@/lib/locale";
import villaImage from "@/assets/marbella-prestige-villa.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Solveig’s Prestige Service | Marbella & Mijas" },
      {
        name: "description",
        content:
          "Échangez avec Solveig’s Prestige Service au sujet de votre propriété à Marbella, Mijas ou sur la Costa del Sol.",
      },
      { property: "og:title", content: "Contact — Solveig’s Prestige Service" },
      {
        property: "og:description",
        content:
          "Parlons de votre propriété, de vos attentes et du niveau de présence locale dont vous avez besoin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const copy = {
  fr: {
    heroEyebrow: "Premier échange",
    heroTitle: "Parlons de votre propriété à Marbella ou Mijas.",
    heroDescription:
      "Que vous soyez propriétaire absent, investisseur ou à la recherche d’un accompagnement pour vos locations, commençons par comprendre vos besoins.",
    imageAlt: "Villa de prestige sur la Costa del Sol",
    bannerEyebrow: "Solveig’s Prestige Service",
    bannerTitle: "Une conversation peut commencer simplement.",
    bannerText:
      "Votre propriété, votre rythme, vos priorités. Donnez-nous le contexte ; nous vous aiderons à définir le niveau de présence pertinent.",
    reasons: [
      [
        "Une présence sur le terrain",
        "Marbella, Mijas, Mijas Costa et les secteurs voisins sont au cœur de notre accompagnement.",
      ],
      [
        "Un premier échange simple",
        "Commencez par nous expliquer votre bien, votre situation et ce que vous souhaitez déléguer.",
      ],
      [
        "Une approche confidentielle",
        "Chaque propriété a ses contraintes. Nous privilégions un accompagnement discret et réellement sur mesure.",
      ],
    ],
    project: "Votre projet",
    important: "Parlons de ce qui compte vraiment.",
    projectText:
      "Type de propriété, localisation, fréquence d’occupation, location saisonnière, besoins d’entretien ou simple présence à distance : quelques éléments suffisent pour commencer.",
    checklist: [
      "Votre localisation",
      "Votre niveau de présence souhaité",
      "Vos priorités et contraintes",
    ],
    next: "Choisir la suite",
    nextTitle: "Parlons directement de votre projet.",
    nextText:
      "Choisissez votre canal préféré et partagez quelques détails sur votre propriété. Solveig vous répondra pour définir la suite.",
    contactWhatsapp: "Écrire sur WhatsApp",
    contactEmail: "Envoyer un email",
    contactPhone: "Appeler Solveig",
    emailSubject: "Votre projet à Marbella ou Mijas",
    whatsappMessage: "Bonjour, je souhaite discuter de mon projet à Marbella ou Mijas.",
    services: "Explorer les services",
    zones: "Découvrir Marbella & Mijas",
    note: "Un premier échange, sans engagement, pour comprendre vos besoins et vous orienter vers le bon accompagnement.",
  },
  en: {
    heroEyebrow: "A first conversation",
    heroTitle: "Let’s talk about your property in Marbella or Mijas.",
    heroDescription:
      "Whether you are an overseas owner, an investor or looking for support with your rentals, let’s start by understanding what you need.",
    imageAlt: "Prestige villa on the Costa del Sol",
    bannerEyebrow: "Solveig’s Prestige Service",
    bannerTitle: "Every conversation can start simply.",
    bannerText:
      "Your property, your pace, your priorities. Tell us a little about your situation and we’ll help you define the right level of local support.",
    reasons: [
      [
        "On-the-ground presence",
        "Marbella, Mijas, Mijas Costa and the surrounding areas are at the heart of our service.",
      ],
      [
        "A straightforward first conversation",
        "Tell us about your property, your circumstances and what you would like to delegate.",
      ],
      [
        "A discreet approach",
        "Every property has its own requirements. We provide thoughtful, genuinely tailored support with discretion.",
      ],
    ],
    project: "Your plans",
    important: "Let’s focus on what matters most.",
    projectText:
      "Property type, location, how often it is occupied, holiday rentals, maintenance needs or simply a local point of contact: a few details are all we need to get started.",
    checklist: [
      "Your location",
      "The level of local presence you need",
      "Your priorities and constraints",
    ],
    next: "Choose your next step",
    nextTitle: "Let’s talk directly about your plans.",
    nextText:
      "Choose your preferred channel and share a few details about your property. Solveig will get back to you to discuss the next steps.",
    contactWhatsapp: "Message us on WhatsApp",
    contactEmail: "Send an email",
    contactPhone: "Call Solveig",
    emailSubject: "Your Marbella or Mijas property",
    whatsappMessage: "Hello, I’d like to discuss my property in Marbella or Mijas.",
    services: "Explore our services",
    zones: "Discover Marbella & Mijas",
    note: "No made-up numbers and no pretend contact form: the next step is to connect the official contact details and WhatsApp channel.",
  },
  es: {
    heroEyebrow: "Una primera conversación",
    heroTitle: "Hablemos de su propiedad en Marbella o Mijas.",
    heroDescription:
      "Tanto si es propietario y vive fuera, como inversor o si busca apoyo para sus alquileres, empecemos por conocer sus necesidades.",
    imageAlt: "Villa de prestigio en la Costa del Sol",
    bannerEyebrow: "Solveig’s Prestige Service",
    bannerTitle: "Podemos empezar con una conversación sencilla.",
    bannerText:
      "Su propiedad, su ritmo y sus prioridades. Cuéntenos su situación y le ayudaremos a definir el nivel de presencia local más adecuado.",
    reasons: [
      [
        "Presencia sobre el terreno",
        "Marbella, Mijas, Mijas Costa y las zonas cercanas son el centro de nuestro servicio.",
      ],
      [
        "Una primera conversación sencilla",
        "Cuéntenos cómo es su propiedad, cuál es su situación y qué desea delegar.",
      ],
      [
        "Un trato confidencial",
        "Cada propiedad tiene sus particularidades. Ofrecemos un acompañamiento discreto y verdaderamente a medida.",
      ],
    ],
    project: "Su proyecto",
    important: "Hablemos de lo que de verdad importa.",
    projectText:
      "El tipo de propiedad, su ubicación, la frecuencia de uso, el alquiler vacacional, las necesidades de mantenimiento o simplemente contar con alguien local: basta con algunos datos para empezar.",
    checklist: [
      "La ubicación de su propiedad",
      "El nivel de presencia que necesita",
      "Sus prioridades y necesidades",
    ],
    next: "El siguiente paso",
    nextTitle: "Hablemos directamente de su proyecto.",
    nextText:
      "Elija su canal preferido y cuéntenos algunos detalles de su propiedad. Solveig le responderá para definir los siguientes pasos.",
    contactWhatsapp: "Escribir por WhatsApp",
    contactEmail: "Enviar un correo",
    contactPhone: "Llamar a Solveig",
    emailSubject: "Su propiedad en Marbella o Mijas",
    whatsappMessage: "Hola, me gustaría hablar sobre mi propiedad en Marbella o Mijas.",
    services: "Explorar los servicios",
    zones: "Descubrir Marbella y Mijas",
    note: "Una primera conversación sin compromiso para conocer sus necesidades y orientarle hacia el servicio adecuado.",
  },
  ar: {
    heroEyebrow: "محادثة أولى",
    heroTitle: "لنتحدث عن عقارك في ماربيا أو ميخاس.",
    heroDescription:
      "سواء كنت مالكاً تقيم خارج المنطقة أو مستثمراً أو تبحث عن دعم لتأجير عقارك، فلنبدأ بفهم احتياجاتك.",
    imageAlt: "فيلا فاخرة على كوستا ديل سول",
    bannerEyebrow: "Solveig’s Prestige Service",
    bannerTitle: "يمكن أن تبدأ المحادثة ببساطة.",
    bannerText:
      "عقارك وإيقاعك وأولوياتك. أخبرنا بظروفك، وسنساعدك على تحديد مستوى الحضور المحلي المناسب.",
    reasons: [
      ["حضور فعلي على الأرض", "تقع ماربيا وميخاس وميخاس كوستا والمناطق المجاورة في صميم خدماتنا."],
      ["محادثة أولى واضحة", "ابدأ بإخبارنا عن عقارك وظروفك والمهام التي ترغب في إسنادها إلينا."],
      [
        "نهج يحترم الخصوصية",
        "لكل عقار متطلباته الخاصة. نحرص على تقديم دعم متأنٍ ومصمم وفق احتياجاتك، مع الحفاظ على السرية.",
      ],
    ],
    project: "مشروعك",
    important: "لنتحدث عمّا يهمك حقاً.",
    projectText:
      "يكفي أن تخبرنا بنوع العقار وموقعه ومواعيد الإقامة فيه، أو باحتياجات التأجير الموسمي والصيانة، أو برغبتك في وجود جهة محلية موثوقة لمتابعته.",
    checklist: [
      "موقع عقارك",
      "مستوى الحضور المحلي الذي تفضله",
      "أولوياتك والقيود التي ينبغي مراعاتها",
    ],
    next: "اختر الخطوة التالية",
    nextTitle: "لنتحدث مباشرة عن مشروعك.",
    nextText:
      "اختر وسيلة التواصل المناسبة لك، وأخبرنا ببعض التفاصيل عن عقارك. ستتواصل معك Solveig لمناقشة الخطوات التالية.",
    contactWhatsapp: "راسلنا عبر واتساب",
    contactEmail: "أرسل بريداً إلكترونياً",
    contactPhone: "اتصل بسولفيغ",
    emailSubject: "عقارك في ماربيا أو ميخاس",
    whatsappMessage: "مرحباً، أود التحدث عن عقاري في ماربيا أو ميخاس.",
    services: "استكشف الخدمات",
    zones: "اكتشف ماربيا وميخاس",
    note: "محادثة أولى بلا التزام لفهم احتياجاتك وإرشادك إلى الخدمة المناسبة.",
  },
} as const;

function ContactPage() {
  const locale = useSolveigLocale();
  const text = copy[locale];
  const whatsappLink = `https://wa.me/34623626724?text=${encodeURIComponent(text.whatsappMessage)}`;
  const emailLink = `mailto:solveighybord@gmail.com?subject=${encodeURIComponent(text.emailSubject)}`;

  return (
    <SolveigLayout>
      <PageHero
        eyebrow={text.heroEyebrow}
        title={text.heroTitle}
        description={text.heroDescription}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 pt-8 sm:px-8 lg:px-12 lg:pt-12">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary text-white shadow-elegant">
            <img
              src={villaImage}
              alt={text.imageAlt}
              className="absolute inset-0 h-full w-full object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
            <div className="relative max-w-3xl p-8 sm:p-12 lg:p-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                {text.bannerEyebrow}
              </p>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[.9] md:text-7xl">
                {text.bannerTitle}
              </h2>
              <p className="mt-6 max-w-xl leading-7 text-white/65">{text.bannerText}</p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-5 md:grid-cols-3">
            {text.reasons.map(([title, description], index) => {
              const Icon = [MapPin, Clock3, ShieldCheck][index]!;
              return (
                <article key={title} className="border border-border bg-card p-7 shadow-soft">
                  <Icon className="text-coast" size={24} aria-hidden="true" />
                  <h2 className="mt-7 font-display text-3xl font-semibold">{title}</h2>
                  <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 grid overflow-hidden rounded-2xl border border-border bg-primary shadow-elegant lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative overflow-hidden p-8 text-primary-foreground md:p-12">
              <div className="absolute -right-24 -top-24 size-72 rounded-full border border-gold/25" />
              <div className="absolute -bottom-28 -left-24 size-72 rounded-full border border-primary-foreground/10" />
              <div className="relative">
                <Sparkles className="text-gold" size={28} aria-hidden="true" />
                <p className="mt-10 text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/60">
                  {text.project}
                </p>
                <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95]">
                  {text.important}
                </h2>
                <p className="mt-6 leading-7 text-primary-foreground/70">{text.projectText}</p>
                <div className="mt-8 space-y-3 text-sm text-primary-foreground/80">
                  {text.checklist.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex size-6 items-center justify-center rounded-full border border-gold/50 text-gold">
                        ✓
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div id="demande" className="bg-background p-8 md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">{text.next}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight">
                {text.nextTitle}
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">{text.nextText}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2e8068] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#266b57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e8068] focus-visible:ring-offset-2"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  {text.contactWhatsapp}
                </a>
                <a
                  href={emailLink}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-xs font-semibold text-foreground transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coast"
                >
                  <Mail size={15} aria-hidden="true" />
                  {text.contactEmail}
                </a>
                <a
                  href="tel:+34623626724"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-xs font-semibold text-foreground transition hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coast"
                >
                  <Phone size={15} aria-hidden="true" />
                  {text.contactPhone}
                </a>
              </div>

              <div className="mt-8 grid gap-3">
                <Button asChild variant="prestige" size="xl">
                  <Link to="/services">
                    {text.services}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="coastal" size="xl">
                  <Link to="/zones">
                    {text.zones}
                    <MapPin aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex items-start gap-3 border-t border-border pt-6 text-xs leading-5 text-muted-foreground">
                <MessageCircle
                  className="mt-0.5 shrink-0 text-coast"
                  size={17}
                  aria-hidden="true"
                />
                <span>{text.note}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SolveigLayout>
  );
}
