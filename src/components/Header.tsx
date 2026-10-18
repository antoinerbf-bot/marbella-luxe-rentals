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
        {/* Left Side: Full prestigious brand wordmark on all screen sizes */}
        <div className="flex items-center">
          <a
            href="#hero"
            className="group flex flex-col text-left focus:outline-none"
            aria-label="Solveig's Prestige Service"
          >
            <span className="font-serif text-lg sm:text-2xl font-normal tracking-[0.14em] text-white leading-none group-hover:text-[#f4dfa5] transition-colors">
              SOLVEIG’S
            </span>
            <span className="text-[7.5px] sm:text-[9.5px] font-bold tracking-[0.32em] text-[#edd088] uppercase mt-0.5 group-hover:text-white transition-colors">
              PRESTIGE SERVICE
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

        {/* Right Side: Contact Button, Univers Marocain with Camel, Direct Flags & Mobile Menu */}
        <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-4">
          {/* Distinct Contact Button - desktop only */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center justify-center px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-[#f1d291]/50 bg-black/40 hover:bg-[#f1d291]/15 text-[#f4dfa5] text-[11px] font-bold tracking-[0.18em] uppercase transition-all duration-300 shadow-sm hover:border-[#f1d291] hover:scale-105"
          >
            Contact
          </a>

          {/* Univers Marocain Button with Camel icon 🐪 and no 'MA' */}
          <button
            onClick={onOpenMoroccoUniverse}
            className="group relative overflow-hidden inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#e5a872]/70 bg-gradient-to-r from-[#873e1c]/85 via-[#a34f24]/80 to-[#732f12]/85 backdrop-blur-md px-2.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[#fff7e8] shadow-[0_4px_18px_rgba(163,79,36,0.35)] transition-all duration-300 hover:border-[#ffd6aa] hover:scale-[1.02]"
          >
            <span className="text-sm sm:text-base">🐪</span>
            <span className="hidden min-[480px]:inline">Univers Marocain</span>
            <span className="min-[480px]:hidden">Maroc</span>
            <ArrowRight className="w-3 h-3 text-[#f9d7b4] hidden min-[360px]:inline transition-transform duration-300 group-hover:translate-x-0.5" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          </button>

          {/* Flag Dropdown Selector (100% Flags Only - No Letters) */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 rounded-full border border-white/20 bg-black/50 hover:border-[#f1d291] text-base backdrop-blur-md transition-all duration-200 shadow-sm"
              aria-label="Changer de pays / langue"
            >
              <span className="leading-none text-base sm:text-lg">{selectedLang.flag}</span>
              <ChevronDown className={`w-3 h-3 text-[#edd088] transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 py-1.5 px-1.5 rounded-2xl bg-[#101c22]/98 border border-[#f1d291]/50 shadow-[0_10px_30px_rgba(0,0,0,0.85)] backdrop-blur-2xl flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200 min-w-[50px] items-center">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-xl transition-all duration-200 ${
                      selectedLang.code === lang.code
                        ? 'bg-[#c29a52]/40 ring-1 ring-[#f1d291] scale-105'
                        : 'opacity-65 hover:opacity-100 hover:bg-white/10 hover:scale-110'
                    }`}
                  >
                    <span className="leading-none">{lang.flag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile hamburger menu */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden flex items-center justify-center w-8 h-8 min-[380px]:w-9 min-[380px]:h-9 rounded-full border border-white/20 bg-black/35 text-white hover:border-[#f1d291] hover:text-[#f1d291] backdrop-blur-md transition-all duration-200"
            aria-label="Ouvrir le menu mobile"
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
