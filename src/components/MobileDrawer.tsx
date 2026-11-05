import React, { useEffect } from 'react';
import { ArrowUpRight, Mail, Phone, X } from 'lucide-react';
import { NAV_LINKS } from './Header';
import { MAROC_HREF } from '../lib/router';
import { DEFAULT_WA_MESSAGE, EMAIL, PHONE_DISPLAY, PHONE_TEL, waLink } from '../lib/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] transition-opacity duration-500 xl:hidden ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-night/40 backdrop-blur-sm" onClick={onClose} />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-travertine px-7 pb-8 pt-6 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-2xl tracking-[0.12em] text-ink">SOLVEIG’S</span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-bronze">Prestige Services</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-ink/5"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-12 flex flex-col" aria-label="Navigation mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between border-b border-ink/10 py-4 font-serif text-[28px] text-ink transition-colors hover:text-bronze"
            >
              {link.label}
            </a>
          ))}
          <a
            href={MAROC_HREF}
            onClick={onClose}
            className="flex items-center justify-between py-4 text-sm font-medium text-ink-soft hover:text-bronze"
          >
            Univers marocain · livraison fin 2027
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </nav>

        <div className="mt-auto space-y-3">
          <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
            <WhatsAppIcon /> Échanger avec Solveig
          </a>
          <div className="grid grid-cols-2 gap-3">
            <a href={PHONE_TEL} className="btn-secondary px-3 text-[13px]">
              <Phone className="h-4 w-4" /> Appeler
            </a>
            <a href={`mailto:${EMAIL}`} className="btn-secondary px-3 text-[13px]">
              <Mail className="h-4 w-4" /> E-mail
            </a>
          </div>
          <p className="pt-2 text-center text-xs text-ink-muted">{PHONE_DISPLAY} · Marbella & Mijas</p>
        </div>
      </aside>
    </div>
  );
};
