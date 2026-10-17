import React, { useState } from 'react';
import { Award, Newspaper, Star, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Eye, UtensilsCrossed, Sparkles, X, ChevronRight } from 'lucide-react';

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
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85"
                  alt="Propriété d’exception et art de vivre à Marbella"
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

        {/* Press Mentions: Clean & Airy Strip */}
        <div className="pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#edd088]">
                Distinctions & Archives
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mt-0.5">
                Reconnaissance de la Presse Gastronomique
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs text-white/60">
              Cliquez sur un article pour consulter le scan original
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pressArticles.map((article, index) => (
              <div
                key={index}
                onClick={() => setSelectedArticle(article)}
                className="group cursor-pointer rounded-2xl bg-[#132228] border border-white/10 p-3.5 hover:border-[#edd088] hover:bg-[#172830] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-32 rounded-xl overflow-hidden bg-black/60 mb-3 relative border border-white/10">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#edd088] text-[#edd088] text-[9px] font-bold uppercase tracking-wider transition-opacity flex items-center gap-1 shadow-lg">
                        <Eye className="w-3 h-3" />
                        Agrandir
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-bold text-[#edd088] uppercase tracking-wider mb-1">
                    <span>{article.title}</span>
                    <span className="text-white/40">{article.date}</span>
                  </div>

                  <h5 className="font-serif text-xs sm:text-sm text-white font-medium group-hover:text-[#edd088] transition-colors leading-snug line-clamp-2">
                    {article.headline}
                  </h5>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-semibold text-white/70">
                  <span className="truncate">{article.source}</span>
                  <ChevronRight className="w-3 h-3 text-[#edd088] group-hover:translate-x-0.5 transition-transform shrink-0 ml-1" />
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
