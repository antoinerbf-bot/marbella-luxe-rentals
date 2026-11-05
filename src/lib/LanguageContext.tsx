import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationDictionary, getTranslation } from './i18n';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationDictionary;
}

const STORAGE_KEY = 'sps_lang_pref';

const LanguageContext = createContext<LanguageContextType>({
  lang: 'fr',
  setLang: () => {},
  t: getTranslation('fr'),
});

const titlesByLang: Record<Language, { title: string; desc: string }> = {
  fr: {
    title: 'Solveig’s Prestige Services — Conciergerie de prestige à Marbella & Mijas',
    desc: 'Une présence locale discrète pour des propriétés exceptionnelles sur la Costa del Sol. Conciergerie privée 7/7, gestion de propriété, intendance locative et chef à domicile.',
  },
  en: {
    title: 'Solveig’s Prestige Services — Luxury Estate Care & Concierge in Marbella',
    desc: 'A discreet local presence for exceptional estates on the Costa del Sol. 7/7 private concierge, property management, luxury vacation rental care, and private chef.',
  },
  es: {
    title: 'Solveig’s Prestige Services — Conserjería de prestigio en Marbella y Mijas',
    desc: 'Una presencia local discreta para propiedades excepcionales en la Costa del Sol. Conserjería privada 7/7, gestión de fincas, alquiler vacacional y chef privado.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved && (saved === 'fr' || saved === 'en' || saved === 'es')) {
        return saved;
      }
      const navLang = navigator.language.slice(0, 2);
      if (navLang === 'en' || navLang === 'es') return navLang as Language;
    }
    return 'fr';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang;

      // Mise à jour dynamique des métadonnées SEO pour la langue
      const meta = titlesByLang[newLang];
      if (meta) {
        document.title = meta.title;
        const descEl = document.querySelector('meta[name="description"]');
        if (descEl) descEl.setAttribute('content', meta.desc);
        const ogTitleEl = document.querySelector('meta[property="og:title"]');
        if (ogTitleEl) ogTitleEl.setAttribute('content', meta.title);
        const ogDescEl = document.querySelector('meta[property="og:description"]');
        if (ogDescEl) ogDescEl.setAttribute('content', meta.desc);
      }
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = getTranslation(lang);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
