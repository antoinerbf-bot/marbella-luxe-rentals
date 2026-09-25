import { ArrowRight, Check, MessageCircle, ShieldCheck } from "lucide-react";
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

export function ServiceDetailPage({ eyebrow, title, description, intro, points, steps, cta }: ServiceDetailProps) {
  return (
    <SolveigLayout>
      <PageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-28">
          <div className="overflow-hidden rounded-[1.5rem] shadow-elegant">
            <img src={villaImage} alt="Villa de prestige à Marbella" width={1600} height={1104} className="aspect-[4/3] w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">L’approche Solveig</p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.95] text-balance md:text-6xl">{intro}</h2>
            <div className="mt-8 space-y-4">
              {points.map((point) => (
                <div key={point} className="flex gap-3">
                  <Check className="mt-1 shrink-0 text-coast" size={18} aria-hidden="true" />
                  <p className="leading-7 text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Notre méthode</p>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.95] md:text-6xl">Simple pour vous. Précise sur le terrain.</h2>
            </div>
            <div className="space-y-0 border-t border-border">
              {steps.map((step, index) => (
                <div key={step} className="grid gap-4 border-b border-border py-7 sm:grid-cols-[80px_1fr]">
                  <span className="font-display text-3xl text-gold">0{index + 1}</span>
                  <p className="text-lg font-semibold leading-8 text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] text-gold">
                  <ShieldCheck size={18} aria-hidden="true" />
                  Un accompagnement sur mesure
                </div>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">{cta}</h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Button asChild variant="prestige" size="xl">
                  <Link to="/contact">Parler de votre projet <ArrowRight aria-hidden="true" /></Link>
                </Button>
                <Button asChild variant="coastal" size="xl">
                  <Link to="/contact"><MessageCircle aria-hidden="true" /> Échanger avec Solveig</Link>
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
