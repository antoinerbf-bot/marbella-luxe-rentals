import React from 'react';
import { X, ArrowRight, MessageCircle, Phone, Mail, Globe } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenMorocco: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, onOpenMorocco }) => {
  const [activeFlag, setActiveFlag] = React.useState('🇫🇷');
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-sm sm:max-w-md h-full bg-[#122026] border-l border-gold-border/40 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
        {/* Top bar with Brand & Close */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-wider text-white font-semibold">
                SOLVEIG’S
              </span>
              <span className="text-[8px] tracking-[0.3em] text-[#edd088] uppercase font-medium">
                PRESTIGE SERVICE
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full border border-white/15 bg-white/5 text-white hover:border-[#f1d291] transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Morocco Universe Highlight with Camel Icon 🐪 */}
          <div className="mt-6 mb-4">
            <button
              onClick={() => {
                onClose();
                onOpenMorocco();
              }}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl border border-[#c29a52]/60 bg-gradient-to-r from-[#34241b]/80 to-[#1e1511]/80 text-white shadow-lg shadow-[#c29a52]/10"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🐪</span>
                <div className="text-left">
                  <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-[#edd088]">
                    Découvrir l’autre univers
                  </span>
                  <span className="text-sm font-semibold tracking-wide">
                    Univers Marocain
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[#f1d291]" />
            </button>
          </div>

          {/* Direct Country Flags Selector (100% Flags Only - No Letters) */}
          <div className="mb-6 p-2 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-around">
            {['🇫🇷', '🇬🇧', '🇪🇸', '🇲🇦'].map((flag) => (
              <button
                key={flag}
                onClick={() => setActiveFlag(flag)}
                className={`text-xl p-2 rounded-xl transition-all ${
                  activeFlag === flag
                    ? 'bg-[#c29a52]/40 ring-1 ring-[#f1d291] scale-110 shadow-sm'
                    : 'opacity-65 hover:opacity-100 hover:scale-105'
                }`}
              >
                <span className="leading-none">{flag}</span>
              </button>
            ))}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 text-base font-semibold tracking-[0.16em] uppercase text-white/90">
            <a
              href="#hero"
              onClick={onClose}
              className="py-2 border-b border-white/5 hover:text-[#f4dfa5] transition-colors flex items-center justify-between"
            >
              <span>Accueil</span>
              <span className="text-xs text-gold">01</span>
            </a>
            <a
              href="#marbella"
              onClick={onClose}
              className="py-2 border-b border-white/5 hover:text-[#f4dfa5] transition-colors flex items-center justify-between"
            >
              <span>Marbella & Mijas</span>
              <span className="text-xs text-gold">02</span>
            </a>
            <a
              href="#services"
              onClick={onClose}
              className="py-2 border-b border-white/5 hover:text-[#f4dfa5] transition-colors flex items-center justify-between"
            >
              <span>Nos Services</span>
              <span className="text-xs text-gold">03</span>
            </a>
            <a
              href="#properties"
              onClick={onClose}
              className="py-2 border-b border-white/5 hover:text-[#f4dfa5] transition-colors flex items-center justify-between"
            >
              <span>Propriétés</span>
              <span className="text-xs text-gold">04</span>
            </a>
            <a
              href="#about"
              onClick={onClose}
              className="py-2 border-b border-white/5 hover:text-[#f4dfa5] transition-colors flex items-center justify-between"
            >
              <span>À Propos</span>
              <span className="text-xs text-gold">05</span>
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="py-2 border-b border-white/5 hover:text-[#f4dfa5] transition-colors flex items-center justify-between"
            >
              <span>Contact</span>
              <span className="text-xs text-gold">06</span>
            </a>
          </nav>
        </div>

        {/* Footer Contact Info */}
        <div className="pt-6 border-t border-white/10 mt-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#edd088] mb-3">
            Conciergerie Privée Directe
          </p>

          <div className="space-y-2.5">
            <a
              href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20je%20souhaite%20un%20renseignement."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black font-semibold text-xs py-3 px-4 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href="tel:+34623626724"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 text-white font-medium text-xs py-3 px-4 hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#edd088]" />
              <span>+34 623 626 724</span>
            </a>
          </div>

          <p className="text-[10px] text-white/40 text-center mt-5 tracking-wider">
            © 2026 Solveig’s Prestige Service · Marbella & Mijas
          </p>
        </div>
      </div>
    </div>
  );
};
