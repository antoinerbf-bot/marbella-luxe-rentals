import React from 'react';
import { X, ArrowRight, MessageCircle, MapPin, Sparkles } from 'lucide-react';

interface MoroccoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MoroccoModal: React.FC<MoroccoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-[#2f1b13] via-[#1a110e] to-[#0f0a08] border border-[#d39e6a]/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden">
        {/* Glow & Patterns */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#a66b47]/20 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full border border-white/20 bg-black/40 text-white/80 hover:text-white hover:border-[#d39e6a] transition-colors"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🐪</span>
          <div>
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#d39e6a] uppercase">
              Échappée Privée
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-semibold">
              L’Univers Marocain
            </h3>
          </div>
        </div>

        <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-6 font-light">
          Prolongez l’expérience de Solveig’s Prestige Service au-delà de la Méditerranée.
          Découvrez notre collection confidentielle de riads privatifs, villas d’exception et séjours sur-mesure à Marrakech et sur les côtes atlantiques.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <div className="p-4 rounded-2xl bg-black/30 border border-[#d39e6a]/20">
            <span className="flex items-center gap-2 text-xs font-bold text-[#e5c17b] uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-[#d39e6a]" />
              Riads & Palais Privés
            </span>
            <p className="text-xs text-white/75 leading-relaxed">
              Propriétés de charme au cœur de la Palmeraie et de la Médina, avec personnel de maison dédié et majordome.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black/30 border border-[#d39e6a]/20">
            <span className="flex items-center gap-2 text-xs font-bold text-[#e5c17b] uppercase tracking-wider mb-1">
              <MapPin className="w-4 h-4 text-[#d39e6a]" />
              Hospitalité Haute Couture
            </span>
            <p className="text-xs text-white/75 leading-relaxed">
              Gastronomie marocaine authentique préparée par des cuisinières émérites, transferts en hélicoptère et excursions privées.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20je%20souhaite%20d%C3%A9couvrir%20vos%20propri%C3%A9t%C3%A9s%20et%20s%C3%A9jours%20au%20Maroc."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d39e6a] to-[#f4dfa5] text-black font-semibold text-xs sm:text-sm py-3.5 px-6 shadow-lg shadow-[#d39e6a]/20 hover:scale-[1.02] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Organiser mon séjour au Maroc</span>
          </a>

          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm py-3.5 px-6 transition-all"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
