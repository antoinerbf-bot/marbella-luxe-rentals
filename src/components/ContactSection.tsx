import React, { useState } from 'react';
import { Phone, Mail, Sparkles, Send, CheckCircle2, Home, Compass } from 'lucide-react';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, waLink } from '../lib/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Reveal } from './ui/Reveal';
import { useLanguage } from '../lib/LanguageContext';

export const ContactSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const c = t.contactSection;

  const [profile, setProfile] = useState<'owner' | 'traveler'>('owner');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'property',
    message: '',
  });

  const profileLabel =
    profile === 'owner'
      ? lang === 'en'
        ? 'Property Owner'
        : lang === 'es'
        ? 'Propietario de Villa'
        : 'Propriétaire d’une résidence'
      : lang === 'en'
      ? 'Traveler / Private Experience'
      : lang === 'es'
      ? 'Viajero / Experiencia Privada'
      : 'Voyageur / Expérience privée';

  const buildContactMessage = () => {
    const serviceName = c.serviceOptions[formData.service] || formData.service;
    return lang === 'en'
      ? `Hello Solveig, I am contacting you via Solveig's Prestige Services website:
- Profile: ${profileLabel}
- Name: ${formData.name}
- Phone: ${formData.phone}
${formData.email ? `- Email: ${formData.email}\n` : ''}- Requested Service: ${serviceName}
${formData.message ? `- Notes: ${formData.message}` : ''}`
      : lang === 'es'
      ? `Hola Solveig, me pongo en contacto a través de la web Solveig's Prestige Services:
- Perfil: ${profileLabel}
- Nombre: ${formData.name}
- Teléfono: ${formData.phone}
${formData.email ? `- Email: ${formData.email}\n` : ''}- Servicio solicitado: ${serviceName}
${formData.message ? `- Observaciones: ${formData.message}` : ''}`
      : `Bonjour Solveig, je souhaite vous contacter via le site Solveig's Prestige Services :
- Profil : ${profileLabel}
- Nom : ${formData.name}
- Téléphone : ${formData.phone}
${formData.email ? `- Email : ${formData.email}\n` : ''}- Service souhaité : ${serviceName}
${formData.message ? `- Précisions : ${formData.message}` : ''}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.open(waLink(buildContactMessage()), '_blank');
  };

  const directWaMessage =
    lang === 'en'
      ? 'Hello Solveig, I would like to connect directly with you.'
      : lang === 'es'
      ? 'Hola Solveig, deseo hablar directamente con usted.'
      : 'Bonjour Solveig, je souhaite échanger directement avec vous.';

  return (
    <section
      id="contact"
      className="relative border-t border-[#C9A869]/20 bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE0] to-[#EAE0CE] py-24 sm:py-32"
    >
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 items-center">
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

            {/* Encadré de réassurance humaine */}
            <div className="rounded-2xl border border-bronze/25 bg-white/80 p-5 shadow-sm max-w-xl space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-bronze-deep">
                {lang === 'en'
                  ? 'Single Dedicated Point of Contact · 7/7'
                  : lang === 'es'
                  ? 'Interlocutora Única y Dedicada · 7d/7'
                  : 'Interlocutrice Unique & Dédiée · 7j/7'}
              </p>
              <p className="text-xs font-light leading-relaxed text-ink-soft">
                {lang === 'en'
                  ? 'Every request is handled personally by Solveig in French, English, or Spanish with complete confidentiality across Marbella, Mijas, and the Costa del Sol.'
                  : lang === 'es'
                  ? 'Cada solicitud es atendida personalmente por Solveig en francés, inglés o español con total confidencialidad en Marbella, Mijas y la Costa del Sol.'
                  : 'Chaque demande est traitée personnellement par Solveig en français, anglais ou espagnol avec une discrétion absolue à Marbella, Mijas et sur la Costa del Sol.'}
              </p>
            </div>

            {/* Accès directs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-2">
              <a
                href={waLink(directWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon />
                <span>
                  {c.directWhatsApp} : {PHONE_DISPLAY}
                </span>
              </a>

              <a href={PHONE_TEL} className="btn-secondary">
                <Phone className="h-4 w-4 text-bronze" />
                <span>
                  {c.directCall} : {PHONE_DISPLAY}
                </span>
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

          {/* Colonne droite : Formulaire sur mesure relié à WhatsApp & Email */}
          <Reveal
            className="card-luxury p-7 sm:p-10 shadow-[0_24px_50px_rgba(28,26,23,0.08)]"
            delay={150}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="eyebrow">{c.formEyebrow}</p>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-0.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  {lang === 'en'
                    ? 'Direct 7/7 Response'
                    : lang === 'es'
                    ? 'Respuesta Directa 7d/7'
                    : 'Réponse Directe 7j/7'}
                </span>
              </span>
            </div>
            <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl mt-1 mb-2">
              {c.formTitle}
            </h3>
            <p className="text-xs font-light text-ink-soft mb-6">{c.formDesc}</p>

            {isSubmitted ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/60 p-6 sm:p-8 text-center space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="font-serif text-2xl font-medium text-ink">
                  {lang === 'en'
                    ? 'Your Request is Ready for Solveig'
                    : lang === 'es'
                    ? 'Su Solicitud está Lista para Solveig'
                    : 'Votre Demande est Prête pour Solveig'}
                </h4>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                  {lang === 'en'
                    ? `Thank you ${formData.name}. Your personalized message has been prepared. Click below to send it directly via WhatsApp or Email.`
                    : lang === 'es'
                    ? `Gracias ${formData.name}. Su mensaje personalizado ha sido preparado. Haga clic abajo para enviarlo por WhatsApp o Email.`
                    : `Merci ${formData.name}. Votre demande personnalisée a été préparée. Cliquez ci-dessous pour la transmettre directement via WhatsApp ou par Email.`}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={waLink(buildContactMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full sm:w-auto"
                  >
                    <WhatsAppIcon />
                    <span>
                      {lang === 'en'
                        ? 'Send on WhatsApp'
                        : lang === 'es'
                        ? 'Enviar por WhatsApp'
                        : 'Envoyer sur WhatsApp'}
                    </span>
                  </a>

                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                      `Demande Solveig's Prestige - ${formData.name}`
                    )}&body=${encodeURIComponent(buildContactMessage())}`}
                    className="btn-secondary w-full sm:w-auto"
                  >
                    <Mail className="h-4 w-4 text-bronze" />
                    <span>
                      {lang === 'en'
                        ? 'Send by Email'
                        : lang === 'es'
                        ? 'Enviar por Email'
                        : 'Envoyer par Email'}
                    </span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-ink-muted underline pt-2"
                >
                  {lang === 'en'
                    ? 'Edit my request'
                    : lang === 'es'
                    ? 'Modificar mi solicitud'
                    : 'Modifier ma demande'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Sélecteur de profil : Propriétaire vs Voyageur */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink mb-1.5">
                    {lang === 'en'
                      ? 'Your Profile'
                      : lang === 'es'
                      ? 'Su Perfil'
                      : 'Votre Profil'}
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => {
                        setProfile('owner');
                        setFormData((prev) => ({ ...prev, service: 'property' }));
                      }}
                      className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all ${
                        profile === 'owner'
                          ? 'border-bronze bg-sand text-ink shadow-sm'
                          : 'border-ink/10 bg-travertine/50 text-ink-soft hover:border-bronze/40'
                      }`}
                    >
                      <Home className="h-3.5 w-3.5 text-bronze" />
                      <span>
                        {lang === 'en'
                          ? 'Property Owner'
                          : lang === 'es'
                          ? 'Propietario'
                          : 'Propriétaire'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setProfile('traveler');
                        setFormData((prev) => ({ ...prev, service: 'concierge' }));
                      }}
                      className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold transition-all ${
                        profile === 'traveler'
                          ? 'border-bronze bg-sand text-ink shadow-sm'
                          : 'border-ink/10 bg-travertine/50 text-ink-soft hover:border-bronze/40'
                      }`}
                    >
                      <Compass className="h-3.5 w-3.5 text-bronze" />
                      <span>
                        {lang === 'en'
                          ? 'Traveler / Guest'
                          : lang === 'es'
                          ? 'Viajero / Huésped'
                          : 'Voyageur / Séjour'}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
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
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink mb-1.5">
                    {lang === 'en'
                      ? 'Email Address (Optional)'
                      : lang === 'es'
                      ? 'Correo Electrónico (Opcional)'
                      : 'Adresse Email (Optionnel)'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@exemple.com"
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
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};
