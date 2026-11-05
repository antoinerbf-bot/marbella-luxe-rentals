import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Send, MapPin, Calendar } from 'lucide-react';
import { waLink } from '../lib/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Reveal } from './ui/Reveal';

interface MoroccoUniversePageProps {
  onBackToCostaDelSol: () => void;
}

const destinations = [
  { name: 'Marrakech', tag: 'Guéliz, Hivernage & Palmeraie', desc: 'Appartements contemporains et demeures sous le soleil impérial.' },
  { name: 'Essaouira', tag: 'Médina & Front Océan', desc: 'Brise atlantique, lumière des remparts et charme authentique.' },
  { name: 'Casablanca', tag: 'Corniche & Triangle d’Or', desc: 'Pied-à-terre de prestige face à l’océan pour affaires et villégiature.' },
  { name: 'Tanger', tag: 'Baie & Détroit de Gibraltar', desc: 'Élégance cosmopolite entre Méditerranée et Atlantique.' },
  { name: 'Ouarzazate', tag: 'Palmeraie & Oasis', desc: 'Havres de sérénité et kasbahs privatives aux portes du désert.' },
];

export const MoroccoUniversePage: React.FC<MoroccoUniversePageProps> = ({ onBackToCostaDelSol }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Marrakech',
    timeframe: 'Fin 2027',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour Solveig, je souhaite rejoindre la liste d'attente privilégiée pour l'Univers Marocain (Livraison fin 2027) :
- Nom : ${formData.name}
- Téléphone : ${formData.phone}
- Destination souhaitée : ${formData.city}
- Horizon envisagé : ${formData.timeframe}
${formData.notes ? `- Précisions : ${formData.notes}` : ''}`;

    window.open(waLink(text), '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-ink selection:bg-[#C9A869]/30">
      {/* Barre de navigation supérieure */}
      <header className="sticky top-0 z-50 border-b border-ink/5 bg-[#FDFBF7]/95 backdrop-blur-md py-3.5 px-4 sm:px-8">
        <div className="container-site flex items-center justify-between">
          <button
            onClick={onBackToCostaDelSol}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-2 text-xs font-semibold text-ink transition hover:border-bronze hover:bg-sand"
          >
            <ArrowLeft className="h-4 w-4 text-bronze" />
            <span className="hidden sm:inline">Retour à la Costa del Sol (Marbella & Mijas)</span>
            <span className="sm:hidden">Costa del Sol</span>
          </button>

          <div className="flex flex-col text-center leading-none">
            <span className="font-serif text-lg tracking-[0.12em] text-ink sm:text-xl">SOLVEIG’S</span>
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-bronze">
              Univers Marocain · 2027
            </span>
          </div>

          <a
            href={waLink('Bonjour Solveig, je souhaite des renseignements sur les projets au Maroc (horizon fin 2027).')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-travertine transition hover:bg-bronze-deep"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section Maroc Solaire & Chaleureux */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="container-site max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-bronze/40 bg-sand px-4 py-1.5 text-xs font-semibold text-bronze-deep">
            <Sparkles className="h-3.5 w-3.5 text-bronze" />
            <span>Projet en cours de réalisation · Sortie de terre & Livraison Fin 2027</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium leading-[1.05] text-ink">
            Le Maroc d’Exception, <br />
            <span className="italic text-bronze">horizon fin 2027.</span>
          </h1>

          <p className="text-base sm:text-lg font-light leading-relaxed text-ink-soft max-w-2xl mx-auto">
            Nos appartements de prestige et résidences privées au Maroc commencent actuellement à sortir de terre. Conçus dans les règles de l'art pour une livraison fin 2027, ils proposeront une expérience exclusive alliant noblesse architecturale, artisanat raffiné et intendance sur-mesure signée Solveig’s Prestige Services.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#liste-attente"
              className="btn-primary w-full sm:w-auto"
            >
              <span>Rejoindre la liste d’attente privilégiée</span>
            </a>

            <button
              onClick={onBackToCostaDelSol}
              className="btn-secondary w-full sm:w-auto"
            >
              <span>Découvrir Marbella & Mijas</span>
            </button>
          </div>
        </div>
      </section>

      {/* Destinations en préparation */}
      <section className="border-t border-ink/5 bg-sand py-20">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="eyebrow">Implantations en cours</p>
            <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl mt-1">
              Les destinations prévues pour fin 2027
            </h2>
            <p className="text-sm font-light text-ink-soft mt-2">
              Des adresses choisies pour leur caractère, leur calme et leur situation d'exception.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <div
                key={i}
                className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 text-bronze mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">{d.tag}</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-ink">{d.name}</h3>
                <p className="mt-2 text-xs font-light text-ink-soft leading-relaxed">{d.desc}</p>
                <div className="mt-4 pt-3 border-t border-ink/5 flex items-center justify-between text-[11px] text-ink-muted">
                  <span>Livraison estimée</span>
                  <span className="font-semibold text-bronze">Fin 2027</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire Liste d'attente */}
      <section id="liste-attente" className="border-t border-ink/5 bg-[#FDFBF7] py-20">
        <div className="container-site max-w-2xl mx-auto">
          <div className="rounded-[2.2rem] border border-ink/10 bg-white p-8 sm:p-12 shadow-[0_16px_40px_rgba(28,26,23,0.06)]">
            <div className="text-center mb-8">
              <p className="eyebrow">Avant-Première</p>
              <h2 className="font-serif text-3xl font-medium text-ink sm:text-4xl mt-1">
                Liste d’Attente Privilégiée
              </h2>
              <p className="text-xs sm:text-sm font-light text-ink-soft mt-2">
                Soyez informé(e) en priorité de l’avancement des travaux et de l’ouverture des réservations fin 2027.
              </p>
            </div>

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
                  className="w-full rounded-xl border border-ink/15 bg-travertine px-4 py-3 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none transition-colors"
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
                  className="w-full rounded-xl border border-ink/15 bg-travertine px-4 py-3 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink mb-1.5">
                    Destination souhaitée
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full rounded-xl border border-ink/15 bg-travertine px-4 py-3 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none transition-colors"
                  >
                    <option value="Marrakech">Marrakech</option>
                    <option value="Essaouira">Essaouira</option>
                    <option value="Casablanca">Casablanca</option>
                    <option value="Tanger">Tanger</option>
                    <option value="Ouarzazate">Ouarzazate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink mb-1.5">
                    Période envisagée
                  </label>
                  <input
                    type="text"
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    placeholder="Fin 2027 / 2028"
                    className="w-full rounded-xl border border-ink/15 bg-travertine px-4 py-3 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-ink mb-1.5">
                  Précisions / Type de séjour souhaité
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Nombre de chambres souhaitées, durée de séjour envisagée..."
                  className="w-full rounded-xl border border-ink/15 bg-travertine px-4 py-3 text-sm text-ink focus:border-bronze focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-4 text-xs tracking-wider uppercase mt-2"
              >
                <Send className="h-4 w-4" />
                <span>Rejoindre la liste privilégiée sur WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
