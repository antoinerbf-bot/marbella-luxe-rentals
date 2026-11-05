import React from 'react';
import { ArrowUpRight, Mail, Phone, ShieldCheck } from 'lucide-react';
import { MAROC_HREF, sectionHref, serviceHref } from '../lib/router';
import { BRAND, DEFAULT_WA_MESSAGE, EMAIL, PHONE_DISPLAY, PHONE_TEL, SERVICES, waLink } from '../lib/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { useLanguage } from '../lib/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#0E1315] text-[#EDE6DA] overflow-hidden border-t border-[#C9A869]/20">
      {/* Halo architectural d'ambiance doré subtil */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C9A869]/15 via-transparent to-transparent opacity-60"
        aria-hidden="true"
      />

      {/* BANNIÈRE PRÉ-FOOTER : APPEL À L'ACTION HAUT DE GAMME */}
      <div className="relative border-b border-white/10 bg-white/[0.02]">
        <div className="container-site py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A869]/30 bg-[#C9A869]/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#F3DEB0]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#C9A869]" />
                Marbella & Mijas · Costa del Sol
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-tight">
                {t.footer.preFooterTitle}
              </h3>
              <p className="text-sm font-light leading-relaxed text-[#EDE6DA]/75 max-w-xl">
                {t.footer.preFooterDesc}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A869] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0E1315] transition-all hover:bg-[#d8b77a] hover:shadow-[0_4px_20px_rgba(201,168,105,0.35)]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>{t.footer.preFooterWhatsApp}</span>
              </a>

              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#C9A869] hover:bg-white/10"
              >
                <Phone className="h-3.5 w-3.5 text-[#C9A869]" />
                <span>{t.footer.preFooterCall}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CORPS PRINCIPAL DU FOOTER */}
      <div className="container-site grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
        {/* Colonne 1 : Identité de marque et promesse */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-3xl sm:text-4xl tracking-[0.14em] font-medium text-white">
              SOLVEIG’S
            </span>
            <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#C9A869]">
              Prestige Services
            </span>
          </div>

          <p className="max-w-md text-sm font-light leading-relaxed text-[#EDE6DA]/75">
            {t.footer.brandTagline}
          </p>

          <div className="pt-2 text-xs text-[#EDE6DA]/60 space-y-1">
            <p className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.contactSection.availability}</span>
            </p>
            <p>Accueil direct par Solveig Hybord · Confidentialité garantie</p>
          </div>
        </div>

        {/* Colonnes 2, 3, 4 : Navigation structurée */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
          {/* Services */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9A869]">
              {t.footer.servicesColTitle}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href={serviceHref(s.id)}
                    className="text-[#EDE6DA]/75 transition hover:text-[#C9A869]"
                  >
                    {t.servicesSection.items[s.id]?.title || s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* La Maison */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9A869]">
              {t.footer.houseColTitle}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={sectionHref('territoire')}
                  className="text-[#EDE6DA]/75 transition hover:text-[#C9A869]"
                >
                  Marbella & Mijas
                </a>
              </li>
              <li>
                <a
                  href={sectionHref('chef')}
                  className="text-[#EDE6DA]/75 transition hover:text-[#C9A869]"
                >
                  Chef Dominique Hybord
                </a>
              </li>
              <li>
                <a
                  href={sectionHref('maison')}
                  className="text-[#EDE6DA]/75 transition hover:text-[#C9A869]"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href={MAROC_HREF}
                  className="inline-flex items-center gap-1 text-[#F3DEB0] transition hover:text-white font-medium"
                >
                  <span>{t.nav.morocco}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={sectionHref('contact')}
                  className="text-[#EDE6DA]/75 transition hover:text-[#C9A869]"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact privilégié */}
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9A869]">
              {t.footer.contactColTitle}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#EDE6DA]/85 transition hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#C9A869]" />
                  <span>WhatsApp direct 7j/7</span>
                </a>
              </li>
              <li>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2 text-[#EDE6DA]/85 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#C9A869]" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 break-all text-[#EDE6DA]/85 transition hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[#C9A869]" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li className="pt-2 text-xs text-[#EDE6DA]/50">
                Interventions sur la Golden Mile, Nueva Andalucía, Puerto Banús, Sierra Blanca, La Cala de Mijas et environs.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* LIGNE INFÉRIEURE : MENTIONS LÉGALES & COPYRIGHT */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-[#EDE6DA]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND}. {t.footer.rightsReserved}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[#EDE6DA]/60">
            <span>{t.footer.locationNote}</span>
            <span>·</span>
            <span>Discrétion & Secret Professionnel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
