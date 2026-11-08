import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { MAROC_HREF, sectionHref } from '../lib/router';
import { DEFAULT_WA_MESSAGE, waLink } from '../lib/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { LanguageSelector } from './ui/LanguageSelector';
import { useLanguage } from '../lib/LanguageContext';

interface HeaderProps {
  /** « overlay » : transparent sur la vidéo d'accueil, puis opaque au défilement. */
  variant: 'overlay' | 'solid';
  onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ variant, onOpenMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = variant === 'overlay' && !scrolled;

  const navLinks = [
    { label: t.nav.services, href: sectionHref('services') },
    { label: t.nav.chef, href: sectionHref('chef') },
    { label: t.nav.about, href: sectionHref('maison') },
    { label: t.nav.territory, href: sectionHref('territoire') },
    { label: t.nav.contact, href: sectionHref('contact') },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-gradient-to-b from-black/50 via-black/25 to-transparent py-4 sm:py-5'
          : 'border-b border-ink/5 bg-travertine/95 py-3 shadow-[0_1px_24px_rgba(28,26,23,0.06)] backdrop-blur-md'
      }`}
    >
      <div className="container-site flex items-center justify-between gap-4">
        {/* Logo de la marque */}
        <a href="#/" className="group flex flex-col leading-none" aria-label="Solveig’s Prestige Services — Accueil">
          <span
            className={`font-serif text-[22px] tracking-[0.14em] font-medium transition-colors sm:text-[26px] ${
              transparent ? 'text-white' : 'text-ink'
            }`}
          >
            SOLVEIG’S
          </span>
          <span
            className={`mt-1 text-[9.5px] font-semibold uppercase tracking-[0.36em] transition-colors ${
              transparent ? 'text-[#F3DEB0]' : 'text-bronze'
            }`}
          >
            Prestige Services
          </span>
        </a>

        {/* Navigation principale Desktop */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-[13px] font-medium tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                transparent ? 'text-white/90 hover:text-white' : 'text-ink-soft hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions : Sélecteur de langue + WhatsApp + Menu mobile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sélecteur de langue discret avec drapeaux 🇫🇷 🇬🇧 🇪🇸 */}
          <LanguageSelector variant={transparent ? 'transparent' : 'light'} />

          {/* Bouton WhatsApp */}
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-[12.5px] font-semibold transition-all duration-300 md:inline-flex shadow-sm ${
              transparent
                ? 'bg-white/95 text-ink hover:bg-white hover:shadow-md'
                : 'bg-ink text-travertine hover:bg-bronze-deep'
            }`}
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            <span>{t.nav.whatsappCta}</span>
          </a>

          {/* Déclencheur Menu mobile */}
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Ouvrir le menu"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition xl:hidden ${
              transparent ? 'text-white hover:bg-white/15' : 'text-ink hover:bg-ink/5'
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
