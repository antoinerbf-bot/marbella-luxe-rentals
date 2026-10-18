import React, { useState, useRef } from 'react';
import { Award, Newspaper, Star, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Eye, UtensilsCrossed, Sparkles, X, ChevronRight, ChevronLeft } from 'lucide-react';

interface PressArticle {
  title: string;
  source: string;
  date: string;
  headline: string;
  snippet: string;
  image: string;
}

export const AboutSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<PressArticle | null>(null);

  const pressArticles: PressArticle[] = [
    {
      title: 'Le Dauphiné Libéré',
      source: 'Guide Michelin',
      date: 'Février 2015',
      headline: '« La Fleur de sel retrouve son Bib gourmand »',
      snippet: '« Le chef Dominique Hybord et sa compagne Solveig savourent. Le restaurant La Fleur de sel, qui vient de fêter ses 10 ans, a reçu un Bib Gourmand de la part du Guide Michelin. Passé par des restaurants étoilés parisiens, le chef s’appuie sur une brigade de huit personnes et des produits d’exception. »',
      image: '/archives-cuisine/le dauphiné 5 fevrier 2015 001.jpg',
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
    <section id="about" className="relative px-5 py-20 sm:px-8 lg:px-12 bg-[#0e1a1f] text-white overflow-hidden">
      {/* Background radial luxury glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#c29a52]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#c29a52]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        {/* Editorial 2-Column: Minimalist Story & Palace Villa Visual */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Left: Refined, Light, Elegant Manifesto (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-border/40 bg-[#c29a52]/10 text-[#fbe8b5] text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#edd088]" />
              Héritage & Savoir-Faire
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.08] text-white">
              Trente ans d’exigence. <br />
              <span className="italic text-[#edd088]">Une présence confidentielle.</span>
            </h2>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light">
              Des prestigieuses maisons étoilées parisiennes (Michel Rostang 2★ Michelin) aux distinctions du <span className="text-[#fbe8b5] font-medium">Guide Michelin (Bib Gourmand)</span> et de <span className="text-[#fbe8b5] font-medium">Gault & Millau (2 Toques)</span>, Dominique et Solveig Hybord cultivent depuis plus de trois décennies un dévouement absolu au service d'hôtes exigeants.
            </p>

            <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light">
              Aujourd’hui installés entre Marbella et Mijas, ils orchestrent pour les propriétaires de domaines privés une intendance irréprochable, une conciergerie 24/7 et des expériences gastronomiques exclusives dans l’intimité de leur villa.
            </p>

            {/* 3 Minimalist Prestige Badges */}
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-[#edd088] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="font-serif text-lg font-bold text-white">30+ Ans</span>
                </div>
                <p className="text-[11px] text-white/70 leading-snug">Au sommet de la gastronomie et de l’hôtellerie de luxe.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-[#edd088] mb-1">
                  <Star className="w-4 h-4" />
                  <span className="font-serif text-lg font-bold text-white">Michelin</span>
                </div>
                <p className="text-[11px] text-white/70 leading-snug">Distinction Bib Gourmand & 2 Toques Gault & Millau.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-[#edd088] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-serif text-lg font-bold text-white">Discrétion</span>
                </div>
                <p className="text-[11px] text-white/70 leading-snug">Confidentialité absolue et rigueur de service 7j/7.</p>
              </div>
            </div>
          </div>

          {/* Right: Palace Architectural Visual with Clean Floating Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-gold-border/40 shadow-2xl bg-black/40">
              <div className="relative h-[280px] sm:h-[440px] overflow-hidden">
                <img
                  src="/about-villa-charm.jpg"
                  alt="Demeure andalouse historique et art de vivre d'exception à Marbella"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Discrete Floating Signature Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-5 rounded-2xl bg-black/75 backdrop-blur-md border border-[#c29a52]/40">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#c29a52]/20 border border-[#c29a52]/50 flex items-center justify-center text-[#edd088] shrink-0">
                      <UtensilsCrossed className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-sm font-serif italic text-white/95 leading-snug">
                        « Le véritable luxe ne s’impose pas : il se ressent dans la perfection invisible de chaque instant. »
                      </p>
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#edd088] mt-1 block">
                        Solveig & Dominique Hybord · Fondateurs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Press Mentions: Sleek Horizontal Showcase with Parallax Cards */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#edd088] flex items-center gap-2">
                <Newspaper className="w-3.5 h-3.5 text-[#e5a872]" />
                Archives & Reconnaissance Presse
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium mt-1">
                Trente Ans de Gastronomie dans la Presse
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
                Articles authentiques consacrés au parcours d'excellence de Dominique et Solveig Hybord. Faites défiler horizontalement pour feuilleter les publications originales.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  const el = document.getElementById('press-shelf-container');
                  if (el) el.scrollBy({ left: -340, behavior: 'smooth' });
                }}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-[#c29a52]/20 hover:border-[#edd088] text-white flex items-center justify-center transition-all shadow-md active:scale-95"
                aria-label="Article précédent"
              >
                <ChevronLeft className="w-5 h-5 text-[#fbe8b5]" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('press-shelf-container');
                  if (el) el.scrollBy({ left: 340, behavior: 'smooth' });
                }}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-[#c29a52]/20 hover:border-[#edd088] text-white flex items-center justify-center transition-all shadow-md active:scale-95"
                aria-label="Article suivant"
              >
                <ChevronRight className="w-5 h-5 text-[#fbe8b5]" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrolling Shelf with Natural 3:4 Vertical Newspaper Aspect Ratio */}
          <div
            id="press-shelf-container"
            className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6 pt-2 px-1 snap-x snap-mandatory"
          >
            {pressArticles.map((article, index) => (
              <div
                key={index}
                onClick={() => setSelectedArticle(article)}
                className="group relative cursor-pointer w-[270px] sm:w-[320px] shrink-0 rounded-3xl bg-gradient-to-b from-[#16272e] to-[#0e191d] border border-white/15 p-4 hover:border-[#edd088] hover:shadow-[0_20px_45px_rgba(241,210,145,0.2)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between snap-start"
              >
                {/* Vertical Magazine Card Header */}
                <div>
                  <div className="relative h-[340px] sm:h-[400px] rounded-2xl overflow-hidden bg-black/60 mb-4 border border-white/10 shadow-inner group-hover:border-[#edd088]/40 transition-colors">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    {/* Gradient shading */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    {/* Source Badge on top */}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#edd088] text-[9.5px] font-bold tracking-widest uppercase border border-[#edd088]/40 shadow-lg">
                      {article.source}
                    </span>

                    {/* Hover Zoom Prompt */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-black/90 backdrop-blur-md border border-[#edd088] text-[#edd088] text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                        <Eye className="w-4 h-4" />
                        Lire l'Article Original
                      </span>
                    </div>

                    {/* Bottom overlay snippet */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[10px] text-white/60 font-semibold tracking-wider block">
                        {article.title} · {article.date}
                      </span>
                      <h4 className="font-serif text-sm sm:text-base text-white font-medium line-clamp-2 mt-0.5 group-hover:text-[#edd088] transition-colors leading-snug">
                        {article.headline}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-white/70 line-clamp-3 leading-relaxed italic px-1">
                    {article.snippet}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-semibold text-[#edd088] px-1">
                  <span>Feuilleter le scan original</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Press Articles with Detailed Transcripts */}
      {selectedArticle && (
        <div
          onClick={() => setSelectedArticle(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[92vh] w-full overflow-hidden bg-[#15262c] rounded-3xl border border-gold-border/70 shadow-2xl flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#101c22]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#edd088]">
                  {selectedArticle.title} · {selectedArticle.date}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-white font-semibold">
                  {selectedArticle.headline}
                </h4>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-full border border-white/20 bg-black/40 text-white hover:border-[#edd088] hover:text-[#edd088] transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Scanned Article Image & Extracted Quote */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/60 max-h-[55vh] flex items-center justify-center">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="max-h-[55vh] w-auto object-contain mx-auto"
                />
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed italic">
                  {selectedArticle.snippet}
                </p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#edd088] block mt-2">
                  Source certifiée : {selectedArticle.source}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
