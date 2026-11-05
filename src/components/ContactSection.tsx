import React, { useState } from 'react';
import { Phone, Mail, Sparkles, Send } from 'lucide-react';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, waLink } from '../lib/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Reveal } from './ui/Reveal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Intendance & Property Management',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour Solveig, je souhaite vous contacter via le site Solveig's Prestige Services :
- Nom : ${formData.name}
- Téléphone : ${formData.phone}
- Service souhaité : ${formData.service}
${formData.message ? `- Précisions : ${formData.message}` : ''}`;

    window.open(waLink(text), '_blank');
  };

  return (
    <section id="contact" className="relative border-t border-ink/5 bg-travertine py-24 sm:py-32">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
          {/* Colonne gauche éditoriale */}
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-bronze/30 bg-sand px-3.5 py-1 text-xs font-semibold text-bronze-deep">
              <Sparkles className="h-3.5 w-3.5 text-bronze" />
              <span>Échange Privilégié & Confidentiel</span>
            </div>

            <h2 className="font-serif text-3xl font-medium leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Votre propriété mérite une présence à sa hauteur.
            </h2>

            <p className="text-sm font-light leading-relaxed text-ink-soft sm:text-base max-w-xl">
              Partagez-nous vos exigences, votre rythme de présence et la nature de vos besoins sur la Costa del Sol. Solveig Hybord vous répondra personnellement avec la plus stricte discrétion.
            </p>

            {/* Accès directs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 pt-2">
              <a
                href={waLink('Bonjour Solveig, je souhaite échanger directement avec vous.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon />
                <span>WhatsApp : {PHONE_DISPLAY}</span>
              </a>

              <a href={PHONE_TEL} className="btn-secondary">
                <Phone className="h-4 w-4 text-bronze" />
                <span>{PHONE_DISPLAY}</span>
              </a>

              <a href={`mailto:${EMAIL}`} className="btn-secondary">
                <Mail className="h-4 w-4 text-bronze" />
                <span>{EMAIL}</span>
              </a>
            </div>

            <div className="pt-4 border-t border-ink/5">
              <p className="text-xs text-ink-muted">
                Solveig’s Prestige Services · Marbella, Mijas et Costa del Sol · Réponse assurée 7j/7.
              </p>
            </div>
          </Reveal>

          {/* Colonne droite : Formulaire relié à WhatsApp */}
          <Reveal className="rounded-[2.2rem] border border-ink/10 bg-white p-7 sm:p-10 shadow-[0_16px_40px_rgba(28,26,23,0.06)]" delay={150}>
            <p className="eyebrow">Formulaire Confidentiel</p>
            <h3 className="font-serif text-2xl font-medium text-ink sm:text-3xl mt-1 mb-2">
              Demande d’accompagnement
            </h3>
            <p className="text-xs font-light text-ink-soft mb-6">
              Transmettez-nous vos coordonnées pour une prise de contact confidentielle sous 2 heures.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink mb-1.5">
                  Nom complet
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Votre nom et prénom"
                  className="w-full rounded-xl border border-ink/15 bg-travertine px-4 py-3 text-sm text-ink placeholder-ink-muted/50 focus:border-bronze focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink mb-1.5">
                  Numéro de téléphone (WhatsApp)
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+33 6 00 00 00 00"
                  className="w-full rounded-xl border border-ink/15 bg-travertine px-4 py-3 text-sm text-ink placeholder-ink-muted/50 focus:border-bronze focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink mb-1.5">
                  Prestation souhaitée
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-xl border border-ink/15 bg-travertine px-4 py-3 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none transition-colors"
                >
                  <option value="Intendance & Property Management">01 · Intendance & Property Management</option>
                  <option value="Conciergerie privée et lifestyle 7/7">02 · Conciergerie Privée & Lifestyle 7/7</option>
                  <option value="Location saisonnière (Formule Sur-Place ou Clé en Main)">03 · Location Saisonnière (2 Formules)</option>
                  <option value="Chef à domicile (Dominique Hybord)">04 · Chef à Domicile (Dominique Hybord)</option>
                  <option value="Univers Marocain (Livraison fin 2027)">🐪 · Univers Marocain (Projet Horizon Fin 2027)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink mb-1.5">
                  Précisions / Attentes particulières
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Localisation de la villa, dates envisagées, souhaits particuliers..."
                  className="w-full rounded-xl border border-ink/15 bg-travertine px-4 py-3 text-sm text-ink placeholder-ink-muted/50 focus:border-bronze focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 text-xs tracking-wider uppercase mt-2"
              >
                <Send className="h-4 w-4" />
                <span>Transmettre ma demande sur WhatsApp</span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
