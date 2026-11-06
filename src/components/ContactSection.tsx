import React, { useState } from 'react';
import { Phone, Mail, Sparkles, Send } from 'lucide-react';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, waLink } from '../lib/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Reveal } from './ui/Reveal';
import { useLanguage } from '../lib/LanguageContext';

export const ContactSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const c = t.contactSection;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'property',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = c.serviceOptions[formData.service] || formData.service;
    const text =
      lang === 'en'
        ? `Hello Solveig, I am contacting you via Solveig's Prestige Services website:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Requested Service: ${serviceName}
${formData.message ? `- Notes: ${formData.message}` : ''}`
        : lang === 'es'
        ? `Hola Solveig, me pongo en contacto a través de la web Solveig's Prestige Services:
- Nombre: ${formData.name}
- Teléfono: ${formData.phone}
- Servicio solicitado: ${serviceName}
${formData.message ? `- Observaciones: ${formData.message}` : ''}`
        : `Bonjour Solveig, je souhaite vous contacter via le site Solveig's Prestige Services :
- Nom : ${formData.name}
- Téléphone : ${formData.phone}
- Service souhaité : ${serviceName}
${formData.message ? `- Précisions : ${formData.message}` : ''}`;

    window.open(waLink(text), '_blank');
  };

  const directWaMessage =
    lang === 'en'
      ? 'Hello Solveig, I would like to connect directly with you.'
      : lang === 'es'
      ? 'Hola Solveig, deseo hablar directamente con usted.'
      : 'Bonjour Solveig, je souhaite échanger directement avec vous.';

  return (
    <section id="contact" className="relative border-t border-ink/5 bg-travertine py-24 sm:py-32">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
          {/* Colonne gauche éditoriale */}
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-bronze/30 bg-sand px-3.5 py-1 text-xs font-semibold text-bronze-deep">
              <Sparkles className="h-3.5 w-3.5 text-bronze" />
              <span>{c.eyebrow}</span>
            </div>

            <h2 className="font-serif text-3xl font-medium leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              {c.title}
            </h2>

            <p className="text-sm font-light leading-relaxed text-ink-soft sm:text-base max-w-xl">
              {c.description}
            </p>

            {/* Accès directs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-2">
              <a
                href={waLink(directWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon />
                <span>{c.directWhatsApp} : {PHONE_DISPLAY}</span>
              </a>

              <a href={PHONE_TEL} className="btn-secondary">
                <Phone className="h-4 w-4 text-bronze" />
                <span>{c.directCall} : {PHONE_DISPLAY}</span>
              </a>

              <a href={`mailto:${EMAIL}`} className="btn-secondary">
                <Mail className="h-4 w-4 text-bronze" />
                <span>{EMAIL}</span>
              </a>
            </div>

            <div className="pt-4 border-t border-ink/5">
              <p className="text-xs text-ink-muted">
                Solveig’s Prestige Services · Marbella & Mijas · {c.availability}
              </p>
            </div>
          </Reveal>

          {/* Colonne droite : Formulaire relié à WhatsApp */}
          <Reveal className="card-luxury p-7 sm:p-10 shadow-[0_24px_50px_rgba(28,26,23,0.08)]" delay={150}>
            <div className="flex items-center justify-between mb-2">
              <p className="eyebrow">{c.formEyebrow}</p>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-0.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  {lang === 'en' ? 'Under 2h response' : lang === 'es' ? 'Respuesta < 2h' : 'Réponse < 2h'}
                </span>
              </span>
            </div>
            <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl mt-1 mb-2">
              {c.formTitle}
            </h3>
            <p className="text-xs font-light text-ink-soft mb-6">
              {c.formDesc}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink mb-1.5">
                  {c.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={c.namePlaceholder}
                  className="w-full rounded-xl border border-ink/15 bg-travertine/70 px-4 py-3 text-sm text-ink placeholder-ink-muted/50 focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/15 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink mb-1.5">
                  {c.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={c.phonePlaceholder}
                  className="w-full rounded-xl border border-ink/15 bg-travertine/70 px-4 py-3 text-sm text-ink placeholder-ink-muted/50 focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/15 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink mb-1.5">
                  {c.serviceLabel}
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-xl border border-ink/15 bg-travertine/70 px-4 py-3 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/15 transition-all"
                >
                  <option value="property">{c.serviceOptions.property}</option>
                  <option value="concierge">{c.serviceOptions.concierge}</option>
                  <option value="rental">{c.serviceOptions.rental}</option>
                  <option value="chef">{c.serviceOptions.chef}</option>
                  <option value="morocco">{c.serviceOptions.morocco}</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink mb-1.5">
                  {c.messageLabel}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={c.messagePlaceholder}
                  className="w-full rounded-xl border border-ink/15 bg-travertine/70 px-4 py-3 text-sm text-ink placeholder-ink-muted/50 focus:border-bronze focus:bg-white focus:outline-none focus:ring-2 focus:ring-bronze/15 transition-all"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 text-xs tracking-wider uppercase mt-2 shadow-lg hover:shadow-xl"
              >
                <Send className="h-4 w-4" />
                <span>{c.submitCta}</span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
