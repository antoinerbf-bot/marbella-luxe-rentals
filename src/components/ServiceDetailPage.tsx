import {
  ArrowRight,
  Check,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

import { ContactBand, PageHero, SolveigLayout } from "@/components/SolveigLayout";
import { useSolveigLocale } from "@/lib/locale";
import { ScrollParallaxImage } from "@/components/ScrollParallaxImage";
import { Button } from "@/components/ui/button";

type ServiceDetailProps = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  points: string[];
  steps: string[];
  cta: string;
  image: string;
};

export function ServiceDetailPage({
  eyebrow,
  title,
  description,
  intro,
  points,
  steps,
  cta,
  image,
}: ServiceDetailProps) {
  const locale = useSolveigLocale();
  const copy = {
    fr: {
      imageAlt: "Villa de prestige sur la Costa del Sol",
      approach: "L’approche Solveig",
      presence: ["Présence", "Locale et concrète"],
      method: ["Méthode", "Claire et documentée"],
      attention: ["Attention", "Sur mesure"],
      methodTitle: "Notre méthode",
      methodHeading: (
        <>
          Simple pour vous.
          <br />
          Précise sur le terrain.
        </>
      ),
      methodText:
        "Une organisation lisible, des routines adaptées à votre propriété et une attention constante aux détails qui font la différence.",
      accompaniment: "Accompagnement sur mesure",
      ctaText:
        "Décrivez simplement votre propriété et votre niveau d’attente. Nous pourrons ensuite définir le périmètre le plus pertinent.",
      contact: "Parler de votre projet",
      nextContact: "Écrire sur WhatsApp",
      whatsappMessage: "Bonjour, je souhaite échanger au sujet de votre service pour ma propriété.",
    },
    en: {
      imageAlt: "Prestige villa on the Costa del Sol",
      approach: "The Solveig approach",
      presence: ["Presence", "Local and hands-on"],
      method: ["Method", "Clear and documented"],
      attention: ["Care", "Tailored to you"],
      methodTitle: "How we work",
      methodHeading: (
        <>
          Straightforward for you.
          <br />
          Thorough on the ground.
        </>
      ),
      methodText:
        "A clear plan, routines tailored to your property and consistent attention to the details that make a difference.",
      accompaniment: "Tailored support",
      ctaText:
        "Tell us about your property and the level of support you expect. We can then define the scope that makes the most sense.",
      contact: "Discuss your property",
      nextContact: "Message us on WhatsApp",
      whatsappMessage: "Hello, I would like to discuss your service for my property.",
    },
    es: {
      imageAlt: "Villa de prestigio en la Costa del Sol",
      approach: "El enfoque Solveig",
      presence: ["Presencia", "Local y cercana"],
      method: ["Método", "Claro y documentado"],
      attention: ["Atención", "A su medida"],
      methodTitle: "Nuestra forma de trabajar",
      methodHeading: (
        <>
          Sencillo para usted.
          <br />
          Preciso sobre el terreno.
        </>
      ),
      methodText:
        "Una organización clara, rutinas adaptadas a su propiedad y atención constante a los detalles que marcan la diferencia.",
      accompaniment: "Acompañamiento a medida",
      ctaText:
        "Cuéntenos cómo es su propiedad y qué nivel de atención espera. A partir de ahí, podremos definir el alcance más adecuado.",
      contact: "Hablar de su proyecto",
      nextContact: "Escribir por WhatsApp",
      whatsappMessage: "Hola, me gustaría hablar sobre su servicio para mi propiedad.",
    },
    ar: {
      imageAlt: "فيلا فاخرة على كوستا ديل سول",
      approach: "نهج Solveig",
      presence: ["الحضور", "محلي وفعلي"],
      method: ["المنهج", "واضح وموثق"],
      attention: ["العناية", "مصممة وفق احتياجاتك"],
      methodTitle: "منهجية العمل",
      methodHeading: (
        <>
          سهولة في التعامل.
          <br />
          ودقة في المتابعة الميدانية.
        </>
      ),
      methodText: "تنظيم واضح وروتين يناسب عقارك واهتمام مستمر بالتفاصيل التي تصنع الفرق.",
      accompaniment: "دعم مصمم وفق احتياجاتك",
      ctaText: "أخبرنا عن عقارك ومستوى العناية الذي تتوقعه، وسنحدد معاً نطاق الخدمة الأنسب.",
      contact: "لنتحدث عن عقارك",
      nextContact: "تواصل عبر واتساب",
      whatsappMessage: "مرحباً، أود الاستفسار عن خدماتكم للعناية بعقاري.",
    },
  }[locale];
  const standards = [copy.presence, copy.method, copy.attention];
  const whatsappLink = `https://wa.me/34623626724?text=${encodeURIComponent(copy.whatsappMessage)}`;

  return (
    <SolveigLayout>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <ScrollParallaxImage
              src={image}
              alt={copy.imageAlt}
              loading="eager"
              className="group aspect-[4/3] rounded-[1.5rem] shadow-elegant"
              imageClassName="transition-[filter] duration-700 group-hover:brightness-105"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-2 rounded-full border border-white/20 bg-primary/45 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md sm:inset-x-auto sm:bottom-5 sm:left-5 sm:px-4 sm:text-[10px] sm:tracking-[0.15em]">
                <span className="size-1.5 shrink-0 rounded-full bg-gold" />
                <span className="truncate">Marbella · Mijas · Costa del Sol</span>
              </div>
            </ScrollParallaxImage>

            <div>
              <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-gold">
                <span className="h-px w-8 bg-gold" />
                {copy.approach}
              </p>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.94] text-balance md:text-6xl">
                {intro}
              </h2>
              <div className="mt-8 space-y-4">
                {points.map((point) => (
                  <div key={point} className="flex gap-3 border-b border-border pb-4">
                    <Check className="mt-1 shrink-0 text-coast" size={18} aria-hidden="true" />
                    <p className="leading-7 text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {standards.map(([title, text]) => (
              <div key={title} className="bg-card p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">{title}</p>
                <p className="mt-2 font-display text-2xl font-semibold">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-gold">
                <Sparkles size={16} aria-hidden="true" />
                {copy.methodTitle}
              </p>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.95] md:text-6xl">
                {copy.methodHeading}
              </h2>
              <p className="mt-6 max-w-md leading-7 text-muted-foreground">{copy.methodText}</p>
            </div>

            <div className="space-y-0 border-t border-border">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="group grid gap-4 border-b border-border py-7 sm:grid-cols-[90px_1fr_auto] sm:items-center"
                >
                  <span className="font-display text-4xl font-semibold text-gold/80 transition-colors group-hover:text-gold">
                    0{index + 1}
                  </span>
                  <p className="text-lg font-semibold leading-8 text-foreground">{step}</p>
                  <ChevronRight
                    className="hidden text-coast transition-transform group-hover:translate-x-1 sm:block"
                    size={19}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft md:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-gold/20" />
            <div className="relative flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] text-gold">
                  <ShieldCheck size={18} aria-hidden="true" />
                  {copy.accompaniment}
                </div>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  {cta}
                </h2>
                <p className="mt-4 leading-7 text-muted-foreground">{copy.ctaText}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
                <Button asChild variant="prestige" size="xl">
                  <Link to="/contact">
                    {copy.contact}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="coastal" size="xl">
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    <MessageCircle aria-hidden="true" />
                    {copy.nextContact}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}
