import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { MAROC_HREF, sectionHref } from '../lib/router';
import { DEFAULT_WA_MESSAGE, waLink } from '../lib/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

interface HeaderProps {
  /** « overlay » : transparent sur la vidéo d'accueil, puis opaque au défilement. */
  variant: 'overlay' | 'solid';
  onOpenMenu: () => void;
}

export const NAV_LINKS = [
  { label: 'Services', href: sectionHref('services') },
  { label: 'Chef à domicile', href: sectionHref('chef') },
  { label: 'Marbella & Mijas', href: sectionHref('territoire') },
  { label: 'La maison', href: sectionHref('maison') },
  { label: 'Contact', href: sectionHref('contact') },
];

export const Header: React.FC<HeaderProps> = ({ variant, onOpenMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = variant === 'overlay' && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-gradient-to-b from-black/40 to-transparent py-5'
          : 'border-b border-ink/5 bg-travertine/90 py-3 shadow-[0_1px_24px_rgba(28,26,23,0.06)] backdrop-blur-md'
      }`}
    >
      <div className="container-site flex items-center justify-between gap-6">
        <a href="#/" className="group flex flex-col leading-none" aria-label="Solveig’s Prestige Services — Accueil">
          <span
            className={`font-serif text-[22px] tracking-[0.12em] transition-colors sm:text-[26px] ${
              transparent ? 'text-white' : 'text-ink'
            }`}
          >
            SOLVEIG’S
          </span>
          <span
            className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.34em] transition-colors ${
              transparent ? 'text-white/80' : 'text-bronze'
            }`}
          >
            Prestige Services
          </span>
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => (
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
          <a
            href={MAROC_HREF}
            className={`text-[13px] font-medium tracking-wide transition-colors ${
              transparent ? 'text-white/70 hover:text-white' : 'text-ink-muted hover:text-bronze'
            }`}
          >
            Maroc · 2027
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 sm:inline-flex ${
              transparent
                ? 'bg-white/95 text-ink hover:bg-white'
                : 'bg-ink text-travertine hover:bg-bronze-deep'
            }`}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Échanger avec Solveig
          </a>
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Ouvrir le menu"
            className={`flex h-11 w-11 items-center justify-center rounded-full transition xl:hidden ${
              transparent ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-ink/5'
            }`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
