import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Language } from '../../lib/i18n';
import { useLanguage } from '../../lib/LanguageContext';

interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export const LanguageSelector: React.FC<{ variant?: 'light' | 'dark' | 'transparent' }> = ({
  variant = 'transparent',
}) => {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const buttonStyle =
    variant === 'transparent'
      ? 'border-white/30 bg-black/30 text-white hover:bg-black/50 hover:border-white/60'
      : variant === 'dark'
      ? 'border-white/20 bg-white/10 text-white hover:bg-white/20'
      : 'border-ink/15 bg-white text-ink hover:border-bronze hover:bg-sand';

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Sélectionner la langue (actuellement ${currentOption.label})`}
        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze ${buttonStyle}`}
      >
        <span className="text-sm leading-none" role="img" aria-hidden="true">
          {currentOption.flag}
        </span>
        <span className="uppercase tracking-wider">{currentOption.code}</span>
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Langues disponibles"
          className="absolute right-0 mt-2 w-36 origin-top-right rounded-2xl border border-ink/10 bg-white p-1.5 shadow-[0_12px_30px_rgba(28,26,23,0.12)] backdrop-blur-md focus:outline-none z-50 animate-fadeUp"
        >
          {languages.map((option) => (
            <button
              key={option.code}
              role="option"
              aria-selected={option.code === lang}
              onClick={() => {
                setLang(option.code);
                setIsOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                option.code === lang
                  ? 'bg-sand font-semibold text-bronze-deep'
                  : 'text-ink hover:bg-travertine'
              }`}
            >
              <span className="text-base" role="img" aria-hidden="true">
                {option.flag}
              </span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
