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

  const pressArticlesByLang: Record<'fr' | 'en' | 'es', PressArticle[]> = {
    fr: [
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
    ],
    en: [
      {
        title: 'Le Dauphiné Libéré',
        source: 'Michelin Guide',
        date: 'February 2015',
        headline: '“La Fleur de Sel regains its Bib Gourmand”',
        snippet: '“Chef Dominique Hybord and his partner Solveig celebrate. Restaurant La Fleur de Sel, marking its 10th anniversary, was awarded a Bib Gourmand by the Michelin Guide. Trained in Michelin-starred Parisian houses, the chef leads a brigade of eight around exceptional produce.”',
        image: '/archives-cuisine/le-dauphine-5-fevrier-2015.jpg',
      },
      {
        title: 'La Savoie',
        source: 'Gault & Millau 2 Toques',
        date: 'Gastronomy Edition',
        headline: '“Seafood cuisine... in the heart of the mountains”',
        snippet: '“An apprentice at 14 in Aix-les-Bains, then trained at Michel Rostang (2 Michelin stars in Paris) and Auberge du Père Bise in Talloires, Dominique Hybord elevates noble fish and Normandy shellfish in tribute to his wife Solveig.”',
        image: '/archives-cuisine/article de La Savoie 001.jpg',
      },
      {
        title: 'Schuss Magazine',
        source: 'Chefs’ Signature Recipes',
        date: 'Courchevel & Savoy',
        headline: '“Dominique Hybord: Signature Haute Cuisine”',
        snippet: '“Roasted pigeon fillet, turnip stuffed with squash cream and chestnut shards, foie gras chestnut tuile: technical mastery and culinary refinement at the summit of the Alps.”',
        image: '/archives-cuisine/pub schuss magazine 2011 001.jpg',
      },
      {
        title: 'Tarentaise Hebdo',
        source: 'Culinary Feature',
        date: 'January 2015',
        headline: '“Dominique and Solveig Hybord, shared excellence”',
        snippet: '“The success of their table rests on a passionate land-and-sea alliance and an innate sense of hospitality. Dominique and Solveig continually innovate with bespoke private dining and house-made delicacies.”',
        image: '/archives-cuisine/tarentaise hebdo du 29 janvier 2015 001.jpg',
      },
      {
        title: 'InfosNews Prestige',
        source: 'Lifestyle Magazine',
        date: 'Courchevel & Tarentaise',
        headline: '“The Art of Dining in Private Chalets”',
        snippet: '“A discreet presence and exceptional dinners orchestrated in the finest private interiors: a savoir-faire now brought to the sun-drenched villas of the Costa del Sol.”',
        image: '/archives-cuisine/infosnews 001.jpg',
      },
      {
        title: 'La Vie Nouvelle',
        source: 'Gastronomic News',
        date: 'Press Review',
        headline: '“Gastronomic Precision and Generosity”',
        snippet: '“Exacting standards forged over more than twenty years in Parisian and Savoyard culinary institutions, dedicated to a discerning international clientele.”',
        image: '/archives-cuisine/la vie nouvelle 001.jpg',
      },
    ],
    es: [
      {
        title: 'Le Dauphiné Libéré',
        source: 'Guía Michelin',
        date: 'Febrero de 2015',
        headline: '«La Fleur de Sel recupera su Bib Gourmand»',
        snippet: '«El chef Dominique Hybord y su compañera Solveig celebran este reconocimiento. El restaurante La Fleur de Sel, en su décimo aniversario, ha recibido el Bib Gourmand de la Guía Michelin. Formado en restaurantes parisinos con estrellas Michelin, trabaja con productos de excepción.»',
        image: '/archives-cuisine/le-dauphine-5-fevrier-2015.jpg',
      },
      {
        title: 'La Savoie',
        source: 'Gault & Millau 2 Toques',
        date: 'Edición Gastronomía',
        headline: '«Cocina del mar... en el corazón de la montaña»',
        snippet: '«Aprendiz a los 14 años en Aix-les-Bains y formado junto a Michel Rostang (2 estrellas en París) y en L’Auberge du Père Bise en Talloires, Dominique Hybord sublima los pescados nobles y mariscos de Normandía en homenaje a su esposa Solveig.»',
        image: '/archives-cuisine/article de La Savoie 001.jpg',
      },
      {
        title: 'Schuss Magazine',
        source: 'Recetas de Autor',
        date: 'Courchevel y Saboya',
        headline: '«Dominique Hybord: Alta Cocina de Autor»',
        snippet: '«Filete de pichón asado, nabo relleno de crema de calabaza y castañas, teja de castaña y foie gras: virtuosismo técnico y refinamiento en la cumbre de los Alpes.»',
        image: '/archives-cuisine/pub schuss magazine 2011 001.jpg',
      },
      {
        title: 'Tarentaise Hebdo',
        source: 'Crónica Gastronómica',
        date: 'Enero de 2015',
        headline: '«Dominique y Solveig Hybord, la excelencia compartida»',
        snippet: '«El éxito de su mesa reside en una apasionada alianza entre mar y tierra y un sentido innato de la hospitalidad. Dominique y Solveig crean recepciones privadas a medida con total dedicación.»',
        image: '/archives-cuisine/tarentaise hebdo du 29 janvier 2015 001.jpg',
      },
      {
        title: 'InfosNews Prestige',
        source: 'Revista Estilo de Vida',
        date: 'Courchevel y Tarentaise',
        headline: '«El Arte de la Mesa en Residencias Privadas»',
        snippet: '«Una presencia discreta y cenas excepcionales orquestadas en las residencias más exclusivas: un saber hacer que hoy brilla bajo el sol de la Costa del Sol.»',
        image: '/archives-cuisine/infosnews 001.jpg',
      },
      {
        title: 'La Vie Nouvelle',
        source: 'Actualidad Gourmet',
        date: 'Revista de Prensa',
        headline: '«Rigor y Generosidad Gastronómica»',
        snippet: '«Una exigencia forjada durante más de veinte años en prestigiosas instituciones gastronómicas de París y Saboya, al servicio de una clientela internacional.»',
        image: '/archives-cuisine/la vie nouvelle 001.jpg',
      },
    ],
  };

  const pressArticles = pressArticlesByLang[lang] || pressArticlesByLang.fr;

  return (
    <section id="maison" className="relative border-t border-[#C9A869]/20 bg-gradient-to-b from-[#EAE0CE] via-[#F4EEE4] to-[#FAF7F2] py-24 sm:py-32">
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
              <div className="rounded-2xl border border-ink/10 bg-white/95 p-4 shadow-sm hover:border-[#C9A869]/60 transition-colors">
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

              <div className="rounded-2xl border border-ink/10 bg-white/95 p-4 shadow-sm hover:border-[#C9A869]/60 transition-colors">
                <div className="flex items-center gap-2 text-bronze mb-1">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-serif text-xl font-bold text-ink">Michelin</span>
                </div>
                <p className="text-xs font-light text-ink-soft">Bib Gourmand & 2 Toques Gault & Millau.</p>
              </div>

              <div className="rounded-2xl border border-ink/10 bg-white/95 p-4 shadow-sm hover:border-[#C9A869]/60 transition-colors">
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

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/75 p-5 backdrop-blur-xl text-white shadow-lg">
                  <p className="font-serif italic text-sm sm:text-base leading-snug text-white/95">
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
                className="card-luxury w-[285px] sm:w-[325px] shrink-0 p-4 flex flex-col justify-between"
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
