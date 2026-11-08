import React, { useState } from 'react';
import { ArrowRight, Check, ChefHat, MessageCircle, ZoomIn } from 'lucide-react';
import { ServiceId, waLink } from '../lib/site';
import { Lightbox } from './ui/Lightbox';
import { useLanguage } from '../lib/LanguageContext';

interface ChefHomeSectionProps {
  onSelectService: (serviceId: ServiceId) => void;
}

const culinaryGallery = [
  '/archives-cuisine/2023-09-12 13.09.35.jpg',
  '/archives-cuisine/2022-10-05 12.42.03.jpg',
  '/archives-cuisine/2018-07-05 09.50.45.jpg',
  '/archives-cuisine/2017-12-01 19.51.19.jpg',
  '/archives-cuisine/2018-07-05 09.51.09.jpg',
  '/archives-cuisine/2019-02-14 21.11.08.jpg',
  '/archives-cuisine/2018-01-21 08.25.03.jpg',
  '/archives-cuisine/2016-07-21 21.02.39.jpg',
  '/archives-cuisine/2015-09-16 11.01.18.jpg',
  '/archives-cuisine/2015-09-16 11.01.56.jpg',
  '/archives-cuisine/2019-08-01 10.10.16-1.jpg',
  '/archives-cuisine/2024-01-23 16.31.12.jpg',
];

const pressClippingsGallery = [
  '/archives-cuisine/le-dauphine-5-fevrier-2015.jpg',
  '/archives-cuisine/article de La Savoie 001.jpg',
  '/archives-cuisine/pub schuss magazine 2011 001.jpg',
  '/archives-cuisine/tarentaise hebdo du 29 janvier 2015 001.jpg',
  '/archives-cuisine/infosnews 001.jpg',
  '/archives-cuisine/la vie nouvelle 001.jpg',
];

export const ChefHomeSection: React.FC<ChefHomeSectionProps> = ({ onSelectService }) => {
  const { lang } = useLanguage();
  const [zoomedDish, setZoomedDish] = useState<{ src: string; alt: string } | null>(null);

  const chefWaMessage =
    lang === 'en'
      ? 'Hello Solveig, I would like to arrange a private dinner with Chef Dominique Hybord in our villa.'
      : lang === 'es'
      ? 'Hola Solveig, deseo organizar una cena privada con el Chef Dominique Hybord en nuestra villa.'
      : 'Bonjour Solveig, je souhaite organiser un dîner privé avec le chef à domicile.';

  return (
    <section
      id="chef"
      className="relative overflow-hidden bg-[#f6f0e6] px-5 py-16 text-[#29231c] sm:px-8 sm:py-24 lg:px-12 border-t border-[#78664c]/15"
    >
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#d9bd82]/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          {/* Colonne Gauche : Grande photo chaleureuse du Chef Dominique Hybord aux cèpes */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[1.8rem] bg-[#ddd0ba] shadow-2xl shadow-[#34271e]/15">
              <img
                src="/chef-dominique-cepes.jpg"
                alt="Le chef Dominique Hybord avec une caisse de cèpes d'exception"
                className="h-[380px] w-full object-cover object-[center_20%] sm:h-[530px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1711]/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-5 sm:p-7">
                <span className="w-fit rounded-full border border-white/35 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f6dfaa] backdrop-blur">
                  Marbella · Mijas · Costa del Sol
                </span>
                <p className="font-serif text-2xl text-white sm:text-3xl">Dominique Hybord</p>
                <p className="text-sm text-white/85">
                  {lang === 'en'
                    ? 'Private Chef · The passion for exceptional produce at your table'
                    : lang === 'es'
                    ? 'Chef privado · La pasión por los productos excepcionales en su mesa'
                    : 'Chef privé · La passion des produits d’exception chez vous'}
                </p>
              </div>
            </div>

            {/* Vignette d'assiette superposée en bas à droite */}
            <div
              onClick={() =>
                setZoomedDish({
                  src: '/archives-cuisine/2023-09-12 13.09.35.jpg',
                  alt: 'Assiette préparée par le chef Dominique Hybord',
                })
              }
              className="cursor-pointer absolute -bottom-5 right-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-[#f6f0e6] shadow-xl sm:block lg:-right-5 group"
            >
              <img
                src="/archives-cuisine/2023-09-12 13.09.35.jpg"
                alt="Assiette préparée par le chef"
                className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Colonne Droite : Texte simple, chaleureux et direct */}
          <div className="py-2 lg:py-8">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#987543] sm:text-xs">
              <ChefHat className="h-4 w-4" />
              {lang === 'en'
                ? 'A private table, at your own pace'
                : lang === 'es'
                ? 'Una mesa privada, a su propio ritmo'
                : 'Une table privée, à votre rythme'}
            </span>

            <h2 className="mt-4 max-w-xl font-serif text-4xl font-medium leading-[1.05] text-[#2b241d] sm:text-5xl lg:text-6xl">
              {lang === 'en' ? (
                <>
                  The pleasure of a chef
                  <span className="block italic text-[#987543]">at home.</span>
                </>
              ) : lang === 'es' ? (
                <>
                  El placer de un chef
                  <span className="block italic text-[#987543]">en su casa.</span>
                </>
              ) : (
                <>
                  Le plaisir d’un chef
                  <span className="block italic text-[#987543]">chez vous.</span>
                </>
              )}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#62564a] sm:text-base">
              {lang === 'en'
                ? 'Chef Dominique Hybord designs your menu with you, then cooks directly in your villa. Seasonal produce, Mediterranean inspiration, and the joy of spending time with your loved ones while he takes care of the meal.'
                : lang === 'es'
                ? 'El Chef Dominique Hybord diseña su menú con usted y cocina directamente en su villa. Productos de temporada, inspiración mediterránea y el placer de disfrutar de los suyos mientras él se encarga de todo.'
                : 'Le Chef Dominique Hybord imagine votre menu avec vous, puis cuisine directement dans votre villa. Des produits de saison, une inspiration méditerranéenne et le plaisir de profiter de vos proches pendant qu’il s’occupe du repas.'}
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e7d7b4] text-[#795d30]">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#30271e] sm:text-base">
                    {lang === 'en'
                      ? 'A menu designed with you'
                      : lang === 'es'
                      ? 'Un menú diseñado con usted'
                      : 'Un menu imaginé avec vous'}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#716355] sm:text-sm">
                    {lang === 'en'
                      ? 'A proposal tailored to the occasion, your desires, and your budget.'
                      : lang === 'es'
                      ? 'Una propuesta adaptada a la ocasión, a sus deseos y a su presupuesto.'
                      : 'Une proposition adaptée à l’occasion, à vos envies et à votre budget.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e7d7b4] text-[#795d30]">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#30271e] sm:text-base">
                    {lang === 'en'
                      ? 'The chef cooks in your villa'
                      : lang === 'es'
                      ? 'El chef cocina en su villa'
                      : 'Le chef cuisine dans votre villa'}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#716355] sm:text-sm">
                    {lang === 'en'
                      ? 'On-site preparation and restaurant-style plating at mealtime.'
                      : lang === 'es'
                      ? 'Preparación in situ y emplatado al momento de servir.'
                      : 'Préparation sur place et dressage des assiettes au moment du repas.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e7d7b4] text-[#795d30]">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#30271e] sm:text-base">
                    {lang === 'en'
                      ? 'A moment to share'
                      : lang === 'es'
                      ? 'Un momento para compartir'
                      : 'Un moment à partager'}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#716355] sm:text-sm">
                    {lang === 'en'
                      ? 'From 6 to 15 guests, with the chef and dedicated table service.'
                      : lang === 'es'
                      ? 'De 6 a 15 comensales, con el chef y una persona dedicada al servicio.'
                      : 'De 6 à 15 convives, avec le chef et une personne dédiée au service.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onSelectService('chef-a-domicile')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c29a52] to-[#edd088] px-6 py-3.5 text-sm font-semibold text-[#21180d] shadow-lg shadow-[#987543]/20 transition hover:-translate-y-0.5"
              >
                <span>
                  {lang === 'en'
                    ? 'Discover the service'
                    : lang === 'es'
                    ? 'Descubrir el servicio'
                    : 'Découvrir le service'}
                </span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href={waLink(chefWaMessage)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b9a98f] bg-white/60 px-6 py-3.5 text-sm font-semibold text-[#403328] transition hover:bg-white"
              >
                <MessageCircle className="h-4 w-4 text-[#2b9a63]" />
                <span>
                  {lang === 'en'
                    ? 'Chat on WhatsApp'
                    : lang === 'es'
                    ? 'Hablar por WhatsApp'
                    : 'Échanger sur WhatsApp'}
                </span>
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#cbbda7] pt-5 text-xs text-[#756653]">
              <span>
                {lang === 'en'
                  ? '30 years of experience'
                  : lang === 'es'
                  ? '30 años de experiencia'
                  : '30 ans d’expérience'}
              </span>
              <span>
                {lang === 'en'
                  ? 'Bib Gourmand Michelin · Gault & Millau'
                  : lang === 'es'
                  ? 'Bib Gourmand Michelin · Gault & Millau'
                  : 'Bib Gourmand Michelin · Gault & Millau'}
              </span>
              <span>
                {lang === 'en'
                  ? 'At your home in Marbella & Mijas'
                  : lang === 'es'
                  ? 'En su villa en Marbella y Mijas'
                  : 'Chez vous, à Marbella & Mijas'}
              </span>
            </div>
          </div>
        </div>

        {/* Galerie épurée des créations authentiques de Dominique Hybord (sans noms de plats ni fiches produits) */}
        <div className="mt-16 border-t border-[#cbbda7]/60 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#987543]">
                {lang === 'en'
                  ? 'Authentic Creations by Dominique Hybord'
                  : lang === 'es'
                  ? 'Las creaciones auténticas de Dominique Hybord'
                  : 'Les créations authentiques de Dominique Hybord'}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2b241d] mt-1">
                {lang === 'en'
                  ? 'Prepared on site and plated at the moment of dining'
                  : lang === 'es'
                  ? 'Preparadas en su villa y emplatadas al momento'
                  : 'Préparées sur place et dressées au moment de passer à table'}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {culinaryGallery.map((src, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() =>
                  setZoomedDish({
                    src,
                    alt: 'Création gastronomique du Chef Dominique Hybord',
                  })
                }
                aria-label="Agrandir la photographie"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-[#78664c]/15 bg-white shadow-sm focus:outline-none"
              >
                <img
                  src={src}
                  alt="Création gastronomique du Chef Dominique Hybord"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </div>
              </button>
            ))}

            {pressClippingsGallery.map((src, idx) => (
              <button
                key={`press-${idx}`}
                type="button"
                onClick={() =>
                  setZoomedDish({
                    src,
                    alt: 'Archive de presse officielle — Chef Dominique Hybord',
                  })
                }
                aria-label="Agrandir l'article de presse"
                className="group relative aspect-square overflow-hidden rounded-2xl border border-[#78664c]/20 bg-[#FAF7F2] p-1.5 shadow-sm focus:outline-none"
              >
                <img
                  src={src}
                  alt="Archive de presse officielle — Chef Dominique Hybord"
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {zoomedDish && (
        <Lightbox
          src={zoomedDish.src}
          alt={zoomedDish.alt}
          onClose={() => setZoomedDish(null)}
        />
      )}
    </section>
  );
};
