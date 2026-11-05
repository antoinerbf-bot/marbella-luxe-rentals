import React from 'react';
import { MAROC_HREF, sectionHref, serviceHref } from '../lib/router';
import { BRAND, DEFAULT_WA_MESSAGE, EMAIL, PHONE_DISPLAY, PHONE_TEL, SERVICES, waLink } from '../lib/site';

export const Footer: React.FC = () => (
  <footer className="bg-night text-[#EDE6DA]">
    <div className="container-site grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="flex flex-col leading-none">
          <span className="font-serif text-3xl tracking-[0.12em] text-white">SOLVEIG’S</span>
          <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.34em] text-bronze-light">Prestige Services</span>
        </div>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#EDE6DA]/70">
          Une présence locale discrète pour des propriétés d’exception à Marbella et Mijas, sur la Costa del Sol.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-bronze-light">Services</p>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a href={serviceHref(s.id)} className="text-[#EDE6DA]/75 transition hover:text-white">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-bronze-light">La maison</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={sectionHref('territoire')} className="text-[#EDE6DA]/75 transition hover:text-white">Marbella & Mijas</a></li>
            <li><a href={sectionHref('maison')} className="text-[#EDE6DA]/75 transition hover:text-white">Solveig & Dominique</a></li>
            <li><a href={MAROC_HREF} className="text-[#EDE6DA]/75 transition hover:text-white">Univers marocain · 2027</a></li>
            <li><a href={sectionHref('contact')} className="text-[#EDE6DA]/75 transition hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-bronze-light">Contact</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer" className="text-[#EDE6DA]/75 transition hover:text-white">
                WhatsApp
              </a>
            </li>
            <li><a href={PHONE_TEL} className="text-[#EDE6DA]/75 transition hover:text-white">{PHONE_DISPLAY}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="break-all text-[#EDE6DA]/75 transition hover:text-white">{EMAIL}</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="container-site flex flex-col gap-2 py-6 text-xs text-[#EDE6DA]/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {BRAND}. Tous droits réservés.</p>
        <p>Marbella · Mijas · Costa del Sol</p>
      </div>
    </div>
  </footer>
);
