import { ArrowRight, Check, ChevronRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { ContactBand, PageHero, SolveigLayout } from "@/components/SolveigLayout";
import { Button } from "@/components/ui/button";
import villaImage from "@/assets/marbella-prestige-villa.jpg";

type ServiceDetailProps = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  points: string[];
  steps: string[];
  cta: string;
};

export function ServiceDetailPage({
  eyebrow,
  title,
  description,
  intro,
  points,
  steps,
  cta,
}: ServiceDetailProps) {
  return (
    <SolveigLayout>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="group relative overflow-hidden rounded-[1.5rem] shadow-elegant">
              <img
                src={villaImage}
                alt="Villa de prestige sur la Costa del Sol"
                width={1600}
                height={1104}
                className="aspect-[4/3] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/20 bg-primary/45 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-gold" />
                Marbella · Mijas · Costa del Sol
              </div>
            </div>

            <div>
              <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-gold">
                <span className="h-px w-8 bg-gold" />
                L’approche Solveig
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
            {[
              ["Présence", "Locale et concrète"],
              ["Méthode", "Claire et documentée"],
              ["Attention", "Sur mesure"],
            ].map(([title, text]) => (
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
                Notre méthode
              </p>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.95] md:text-6xl">
                Simple pour vous.
                <br />
                Précise sur le terrain.
              </h2>
              <p className="mt-6 max-w-md leading-7 text-muted-foreground">
                Une organisation lisible, des routines adaptées à votre propriété et une attention constante aux détails qui font la différence.
              </p>
            </div>

            <div className="space-y-0 border-t border-border">
              {steps.map((step, index) => (
                <div key={step} className="group grid gap-4 border-b border-border py-7 sm:grid-cols-[90px_1fr_auto] sm:items-center">
                  <span className="font-display text-4xl font-semibold text-gold/80 transition-colors group-hover:text-gold">
                    0{index + 1}
                  </span>
                  <p className="text-lg font-semibold leading-8 text-foreground">{step}</p>
                  <ChevronRight className="hidden text-coast transition-transform group-hover:translate-x-1 sm:block" size={19} aria-hidden="true" />
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
                  Accompagnement sur mesure
                </div>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">{cta}</h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  Décrivez simplement votre propriété et votre niveau d’attente. Nous pourrons ensuite définir le périmètre le plus pertinent.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
                <Button asChild variant="prestige" size="xl">
                  <Link to="/contact">
                    Parler de votre projet
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="coastal" size="xl">
                  <Link to="/contact">
                    <MessageCircle aria-hidden="true" />
                    Choisir mon prochain contact
                  </Link>
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
