import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Menu } from 'lucide-react';

interface HeaderProps {
  onOpenMobileMenu: () => void;
  onOpenMoroccoUniverse: () => void;
}

const languages = [
  { code: 'FR', label: 'Français', flag: '🇫🇷' },
  { code: 'EN', label: 'English', flag: '🇬🇧' },
  { code: 'ES', label: 'Español', flag: '🇪🇸' },
  { code: 'AR', label: 'العربية', flag: '🇲🇦' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenMobileMenu, onOpenMoroccoUniverse }) => {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#101b20]/92 backdrop-blur-md shadow-2xl py-3 border-b border-gold-border/20'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left Side: Minimalist luxury discreet watermark (doesn't clash with bougainvillea) */}
        <div className="flex items-center">
          <a
            href="#hero"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Solveig's Prestige Service"
          >
            {/* Subtle luxury seal symbol */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#f1d291]/50 bg-black/40 backdrop-blur-md flex items-center justify-center text-[#f1d291] group-hover:border-[#f4dfa5] group-hover:scale-105 transition-all">
              <span className="font-serif text-xs sm:text-sm font-semibold tracking-tighter">SP</span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-white/80 group-hover:text-white uppercase transition-colors hidden min-[400px]:inline">
              Solveig’s
            </span>
          </a>
        </div>

        {/* Center: Clean 4 Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-[12px] font-semibold tracking-[0.2em] uppercase text-white/90">
          <a
            href="#hero"
            className="relative py-1 text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#f1d291]"
          >
            Accueil
          </a>
          <a
            href="#services"
            className="hover:text-[#f4dfa5] transition-colors duration-200"
          >
            Nos Services
          </a>
          <a
            href="#chef"
            className="hover:text-[#f4dfa5] transition-colors duration-200"
          >
            Chef à Domicile
          </a>
          <a
            href="#about"
            className="hover:text-[#f4dfa5] transition-colors duration-200"
          >
            À Propos de Nous
          </a>
        </nav>

        {/* Right Side: Distinct Contact Button, Univers Marocain with Camel, Direct Flags & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {/* Distinct Contact Button - clearly separated with dedicated luxury styling */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-[#f1d291]/50 bg-black/40 hover:bg-[#f1d291]/15 text-[#f4dfa5] text-[11px] font-bold tracking-[0.18em] uppercase transition-all duration-300 shadow-sm hover:border-[#f1d291] hover:scale-105"
          >
            Contact
          </a>

          {/* Univers Marocain Button with Camel icon 🐪 and no 'MA' */}
          <button
            onClick={onOpenMoroccoUniverse}
            className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full border border-[#e5a872]/70 bg-gradient-to-r from-[#873e1c]/80 via-[#a34f24]/75 to-[#732f12]/80 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-[#fff7e8] shadow-[0_4px_18px_rgba(163,79,36,0.35)] transition-all duration-300 hover:border-[#ffd6aa] hover:shadow-[0_0_24px_rgba(229,168,114,0.5)] hover:scale-[1.02]"
          >
            <span className="text-base sm:text-lg drop-shadow">🐪</span>
            <span className="hidden min-[500px]:inline">Univers Marocain</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#f9d7b4] transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          </button>

          {/* Direct Country Flags for Language Selection (France, UK, Espagne, Maroc) */}
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-full border border-white/20 bg-black/45 backdrop-blur-md shadow-sm">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLang(lang)}
                title={`${lang.label} (${lang.code})`}
                aria-label={`Sélectionner ${lang.label}`}
                className={`relative px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-sm sm:text-base transition-all duration-200 flex items-center justify-center ${
                  selectedLang.code === lang.code
                    ? 'bg-[#c29a52]/40 shadow-[0_0_10px_rgba(241,210,145,0.4)] ring-1 ring-[#f1d291] scale-110'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <span className="leading-none">{lang.flag}</span>
              </button>
            ))}
          </div>

          {/* Mobile hamburger menu */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-black/35 text-white hover:border-[#f1d291] hover:text-[#f1d291] backdrop-blur-md transition-all duration-200"
            aria-label="Ouvrir le menu mobile"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
