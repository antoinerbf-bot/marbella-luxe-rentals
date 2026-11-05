import React, { useState } from 'react';
import { Award, Newspaper, Star, ShieldCheck, ChevronRight, ChevronLeft, ZoomIn } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { Lightbox } from './ui/Lightbox';
import { useLanguage } from '../lib/LanguageContext';

interface PressArticle {
  title: string;
  source: string;
  date: string;
  headline: string;
  snippet: string;
  image: string;
}

export const AboutSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const ab = t.aboutSection;
  const [selectedArticle, setSelectedArticle] = useState<PressArticle | null>(null);

  const pressArticles: PressArticle[] = [
    {
      title: 'Le Dauphiné Libéré',
      source: 'Guide Michelin',
      date: 'Février 2015',
      headline: '« La Fleur de sel retrouve son Bib gourmand »',
      snippet: '« Le chef Dominique Hybord et sa compagne Solveig savourent. Le restaurant La Fleur de sel, qui vient de fêter ses 10 ans, a reçu un Bib Gourmand de la part du Guide Michelin. Passé par des restaurants étoilés parisiens, le chef s’appuie sur une brigade de huit personnes et des produits d’exception. »',
      image: '/archives-cuisine/le-dauphine-5-fevrier-2015.jpg',
    },
    {
      title: 'La Savoie',
      source: 'Gault & Millau 2 Toques',
      date: 'Édition Gastronomie',
      headline: '« Une cuisine de la mer... à la montagne »',
      snippet: '« Apprenti à 14 ans à Aix-les-Bains chez le père Lille, puis formé chez Michel Rostang (2 étoiles à Paris) et à l’Auberge du Père Bise à Talloires, Dominique Hybord sublime les poissons nobles et les coquillages de Normandie, en hommage à son épouse Solveig. »',
      image: '/archives-cuisine/article de La Savoie 001.jpg',
    },
    {
      title: 'Schuss Magazine',
      source: 'Recette de Chefs',
      date: 'Courchevel & Savoie',
      headline: '« Dominique Hybord : Haute Cuisine d’Auteur »',
      snippet: '« Filet de pigeon rôti, navet farci à la crème de courge et éclats de marrons, cannelloni d’abats et tuile châtaigne foie gras : la virtuosité technique et le raffinement au sommet des Alpes. »',
      image: '/archives-cuisine/pub schuss magazine 2011 001.jpg',
    },
    {
      title: 'Tarentaise Hebdo',
      source: 'Chronique du Terroir',
      date: 'Janvier 2015',
      headline: '« Dominique et Solveig Hybord, l’excellence partagée »',
      snippet: '« Le succès de leur table repose sur une alliance terre-mer passionnée et un sens inné de l’hospitalité. Dominique et Solveig innovent sans cesse : service traiteur d’exception, foies gras maison et réception privée sur-mesure. »',
      image: '/archives-cuisine/tarentaise hebdo du 29 janvier 2015 001.jpg',
    },
    {
      title: 'InfosNews Prestige',
      source: 'Magazine Art de Vivre',
      date: 'Courchevel & Tarentaise',
      headline: '« L’Art de la Table en Chalets Privés »',
      snippet: '« Une présence discrète et des dîners d’exception orchestrés dans les plus beaux intérieurs alpins : un savoir-faire aujourd’hui déployé sous le soleil de la Costa del Sol. »',
      image: '/archives-cuisine/infosnews 001.jpg',
    },
    {
      title: 'La Vie Nouvelle',
      source: 'Actualité Gourmande',
      date: 'Revue de Presse',
      headline: '« Rigueur et Générosité Gastronomique »',
      snippet: '« Une exigence forgée par plus de 20 ans d’institutions gastronomiques parisiennes et savoyardes, mise au service d’une clientèle internationale exigeante. »',
      image: '/archives-cuisine/la vie nouvelle 001.jpg',
    },
  ];

  return (
    <section id="maison" className="relative border-t border-ink/5 bg-sand py-24 sm:py-32">
      <div className="container-site">
        {/* Histoire des fondateurs */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7 space-y-6">
            <p className="eyebrow">{ab.eyebrow}</p>

            <h2 className="font-serif text-3xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              {ab.titleMain} <br />
              <span className="italic text-bronze">{ab.titleItalic}</span>
            </h2>

            <p className="text-sm font-light leading-relaxed text-ink-soft sm:text-base">
              {ab.paragraph1}
            </p>

            <p className="text-sm font-light leading-relaxed text-ink-soft sm:text-base">
              {ab.paragraph2}
            </p>

            {/* 3 Badges de réassurance */}
            <div className="grid gap-4 sm:grid-cols-3 pt-2">
              <div className="rounded-2xl border border-ink/10 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-bronze mb-1">
                  <Award className="h-4 w-4" />
                  <span className="font-serif text-xl font-bold text-ink">30+ Ans</span>
                </div>
                <p className="text-xs font-light text-ink-soft">
                  {lang === 'en'
                    ? 'Hospitality & culinary excellence.'
                    : lang === 'es'
                    ? 'Excelencia hotelera y culinaria.'
                    : 'D’excellence hôtelière et gastronomique.'}
                </p>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-bronze mb-1">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-serif text-xl font-bold text-ink">Michelin</span>
                </div>
                <p className="text-xs font-light text-ink-soft">Bib Gourmand & 2 Toques Gault & Millau.</p>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-bronze mb-1">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="font-serif text-xl font-bold text-ink">
                    {lang === 'en' ? 'Discretion' : lang === 'es' ? 'Discreción' : 'Discrétion'}
                  </span>
                </div>
                <p className="text-xs font-light text-ink-soft">
                  {lang === 'en'
                    ? 'Total confidentiality guaranteed.'
                    : lang === 'es'
                    ? 'Confidencialidad y secreto profesional.'
                    : 'Confidentialité et secret professionnel.'}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Visuel Domaine & Citation */}
          <Reveal className="lg:col-span-5" delay={150}>
            <div className="relative overflow-hidden rounded-[2.2rem] border border-ink/10 bg-white shadow-[0_20px_45px_rgba(28,26,23,0.08)]">
              <div className="relative h-72 overflow-hidden bg-linen sm:h-96">
                <img
                  src="/about-villa-charm.jpg"
                  alt="Demeure andalouse de prestige sur la Costa del Sol"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/70 p-4 backdrop-blur-md text-white">
                  <p className="font-serif italic text-sm sm:text-base leading-snug">
                    {ab.quote}
                  </p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#F3DEB0]">
                    {ab.quoteAuthor}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Revue de presse officielle */}
        <div className="mt-20 border-t border-ink/10 pt-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-8">
            <div>
              <p className="eyebrow flex items-center gap-2">
                <Newspaper className="h-3.5 w-3.5 text-bronze" />
                {ab.pressEyebrow}
              </p>
              <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl lg:text-4xl mt-1">
                {ab.pressTitle}
              </h3>
              <p className="text-sm font-light text-ink-soft mt-1 max-w-xl">
                {ab.pressDesc}
              </p>
            </div>

            {/* Flèches de défilement horizontal */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('press-shelf-container');
                  if (el) el.scrollBy({ left: -340, behavior: 'smooth' });
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition hover:border-bronze hover:bg-ink hover:text-white"
                aria-label="Article précédent"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('press-shelf-container');
                  if (el) el.scrollBy({ left: 340, behavior: 'smooth' });
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white text-ink transition hover:border-bronze hover:bg-ink hover:text-white"
                aria-label="Article suivant"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Défilement horizontal des articles (format 3:4 journal authentique) */}
          <div
            id="press-shelf-container"
            className="flex gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
          >
            {pressArticles.map((art, idx) => (
              <div
                key={idx}
                className="w-[280px] sm:w-[320px] shrink-0 rounded-2xl border border-ink/10 bg-white p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(art)}
                    className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-ink/10 bg-[#FAF7F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                    aria-label={`Agrandir l'article : ${art.title}`}
                  >
                    <img
                      src={art.image}
                      alt={`Article de presse : ${art.title}`}
                      className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/20">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-ink opacity-0 transition-opacity group-hover:opacity-100 shadow-md">
                        <ZoomIn className="h-5 w-5" />
                      </span>
                    </div>
                  </button>

                  <div className="mt-4">
                    <div className="flex items-center justify-between text-[11px] text-ink-muted">
                      <span className="font-semibold text-bronze">{art.source}</span>
                      <span>{art.date}</span>
                    </div>
                    <h4 className="font-serif text-lg font-medium text-ink mt-1 leading-snug">
                      {art.title}
                    </h4>
                    <p className="text-xs font-semibold text-ink mt-1">
                      {art.headline}
                    </p>
                    <p className="text-xs font-light text-ink-soft mt-2 line-clamp-3 leading-relaxed">
                      {art.snippet}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-ink/5">
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(art)}
                    className="text-xs font-semibold text-bronze hover:text-ink transition-colors"
                  >
                    {ab.readArticle}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        src={selectedArticle ? selectedArticle.image : null}
        alt={selectedArticle ? selectedArticle.headline : ''}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
