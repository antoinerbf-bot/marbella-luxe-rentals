import React, { useState } from 'react';
import { ArrowRight, Check, Award, Star, UtensilsCrossed, ZoomIn, Sparkles } from 'lucide-react';
import { ServiceId, waLink } from '../lib/site';
import { serviceHref } from '../lib/router';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Reveal } from './ui/Reveal';
import { Lightbox } from './ui/Lightbox';
import { useLanguage } from '../lib/LanguageContext';

interface ChefHomeSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
}

const dishes = [
  { src: '/archives-cuisine/2022-10-05 12.42.03.jpg', alt: 'Dressage gastronomique du Chef Dominique Hybord' },
  { src: '/archives-cuisine/2023-09-12 13.09.35.jpg', alt: 'Création du Chef aux saveurs marines' },
  { src: '/archives-cuisine/2018-07-05 09.50.45.jpg', alt: 'Produits nobles et inspirations de saison' },
  { src: '/archives-cuisine/2017-12-01 19.51.19.jpg', alt: 'Assiette d’auteur dressée minute' },
  { src: '/archives-cuisine/2016-07-21 21.02.39.jpg', alt: 'Cuisine méditerranéenne en villa' },
  { src: '/archives-cuisine/2024-01-23 16.31.12.jpg', alt: 'Le soin du détail et l’élégance du dressage' },
];

export const ChefHomeSection: React.FC<ChefHomeSectionProps> = ({ onSelectService }) => {
  const [activePhoto, setActivePhoto] = useState<{ src: string; alt: string } | null>(null);
  const { t } = useLanguage();

  const chefWaMessage =
    'Bonjour Solveig, je souhaite organiser un repas privé avec le Chef Dominique Hybord dans notre villa.';

  return (
    <section id="chef" className="relative border-t border-ink/5 bg-sand py-24 sm:py-32">
      <div className="container-site">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{t.chefSection.eyebrow}</p>
          <h2 className="mt-2 font-serif text-3xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            {t.chefSection.titleMain} <br />
            <span className="italic text-bronze">{t.chefSection.titleItalic}</span>
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-ink-soft sm:text-base">
            {t.chefSection.description}
          </p>
        </Reveal>

        {/* Bloc éditorial 2 colonnes */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-12 lg:gap-14 sm:mt-20">
          {/* Colonne gauche : La vraie photo portrait du Chef aux cèpes */}
          <Reveal className="lg:col-span-5" delay={100}>
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[2.2rem] border border-ink/10 bg-white shadow-[0_20px_45px_rgba(28,26,23,0.08)]">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-linen">
                <img
                  src="/chef-dominique-cepes.jpg"
                  alt="Le Chef Dominique Hybord portant une caisse de cèpes frais"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                {/* Badge officiel de distinction gastronomique */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/70 p-4 backdrop-blur-md text-white">
                  <p className="font-serif text-lg font-medium leading-snug">{t.chefSection.chefName}</p>
                  <p className="mt-0.5 text-xs font-light text-[#F3DEB0]">
                    {t.chefSection.chefDistinction}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Colonne droite : Histoire, promesses et réservations */}
          <Reveal className="lg:col-span-7 space-y-6" delay={200}>
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-bronze/30 bg-travertine px-3.5 py-1 text-xs font-semibold text-bronze-deep">
                <UtensilsCrossed className="h-3.5 w-3.5" />
                {t.chefSection.legacyBadge}
              </span>

              <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl lg:text-4xl">
                {t.chefSection.headline}
              </h3>

              <p className="text-sm font-light leading-relaxed text-ink-soft sm:text-base">
                {t.chefSection.biography}
              </p>
            </div>

            {/* 3 piliers concrets */}
            <div className="grid gap-4 sm:grid-cols-3 pt-2">
              {t.chefSection.pillars.map((pillar, idx) => (
                <div key={idx} className="rounded-2xl border border-ink/10 bg-white p-4 shadow-sm">
                  <p className="font-serif text-lg font-medium text-ink">{pillar.title}</p>
                  <p className="mt-1 text-xs font-light leading-relaxed text-ink-soft">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col gap-3 sm:flex-row pt-3">
              <a
                href={waLink(chefWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon />
                <span>{t.chefSection.reserveCta}</span>
              </a>

              <a
                href={serviceHref('chef-a-domicile')}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectService('chef-a-domicile');
                }}
                className="btn-secondary"
              >
                <span>{t.chefSection.detailsCta}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <p className="text-xs text-ink-muted">
              {t.chefSection.disclaimer}
            </p>
          </Reveal>
        </div>

        {/* 4 Formules Gastronomiques Signature */}
        <div className="mt-20 border-t border-ink/10 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">{t.chefSection.experiencesTitle}</span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-ink mt-2">
              {t.chefSection.experiencesSubtitle}
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.chefSection.experiences.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sand px-2.5 py-1 text-[11px] font-semibold text-bronze-deep mb-3">
                    <Sparkles className="h-3 w-3 text-bronze" />
                    <span>0{idx + 1}</span>
                  </span>
                  <h4 className="font-serif text-xl font-medium text-ink leading-snug mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-xs font-semibold text-bronze mb-3">{exp.subtitle}</p>
                  <p className="text-xs font-light text-ink-soft leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-ink/5 flex items-center justify-between text-[11px] text-ink-muted">
                  <span>{exp.guests}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Galerie des créations du Chef */}
        <div className="mt-20 border-t border-ink/10 pt-16">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">{t.chefSection.galleryEyebrow}</p>
              <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl">
                {t.chefSection.galleryTitle}
              </h3>
            </div>
            <p className="text-xs text-ink-muted">{t.chefSection.galleryHint}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4">
            {dishes.map((dish, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActivePhoto(dish)}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-ink/10 bg-linen focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                aria-label={`Agrandir : ${dish.alt}`}
              >
                <img
                  src={dish.src}
                  alt={dish.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/30">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 transition-opacity group-hover:opacity-100 shadow-md">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        src={activePhoto ? activePhoto.src : null}
        alt={activePhoto ? activePhoto.alt : ''}
        onClose={() => setActivePhoto(null)}
      />
    </section>
  );
};
