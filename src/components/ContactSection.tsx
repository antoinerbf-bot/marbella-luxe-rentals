import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Sparkles, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'conciergerie',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour Solveig, je souhaite vous contacter via le site Solveig's Prestige Services :
- Nom : ${formData.name}
- Téléphone : ${formData.phone}
- Nature de la demande : ${formData.service}
${formData.message ? `- Message : ${formData.message}` : ''}`;

    window.open(`https://wa.me/34623626724?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#070e11] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-14 border-t border-white/10">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(194,154,82,0.12),transparent_60%)]" />

      <div className="relative z-10 max-w-[1440px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left Editorial Info */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c29a52]/40 bg-[#c29a52]/10 text-[#fbe8b5] text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#edd088]" />
            Échange Privilégié & Confidentiel
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.02] text-white">
            Votre propriété mérite une présence à sa hauteur.
          </h2>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light max-w-xl">
            Partagez-nous vos exigences, votre rythme de présence et la nature de vos besoins sur la Costa del Sol. Solveig Hybord vous répondra personnellement avec la plus stricte discrétion.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20je%20souhaite%20%C3%A9changer%20avec%20vous%20concernant%20ma%20propri%C3%A9t%C3%A9%20sur%20la%20Costa%20del%20Sol."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] text-black font-semibold text-xs sm:text-sm px-7 py-4 shadow-xl shadow-[#25D366]/20 hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct : +34 623 626 724</span>
            </a>

            <a
              href="tel:+34623626724"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold px-6 py-4 transition-all"
            >
              <Phone className="w-4 h-4 text-[#edd088]" />
              <span>+34 623 626 724</span>
            </a>
          </div>
        </div>

        {/* Right Contact Card Form */}
        <div className="bg-[#0f1b20] border border-[#c29a52]/35 rounded-[2rem] p-7 sm:p-10 shadow-2xl backdrop-blur-md">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#edd088]">
            Formulaire Confidentiel
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mt-1 mb-2">
            Demande d’accompagnement
          </h3>
          <p className="text-xs text-white/70 mb-6 font-light">
            Transmettez-nous vos coordonnées pour une prise de contact confidentielle sous 2 heures.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold tracking-widest uppercase text-[#edd088] mb-1.5">
                Nom complet
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Votre nom"
                className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#edd088] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-widest uppercase text-[#edd088] mb-1.5">
                Numéro de Téléphone (WhatsApp)
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+33 6 00 00 00 00"
                className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#edd088] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-widest uppercase text-[#edd088] mb-1.5">
                Nature de la demande
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full rounded-xl bg-[#0a1317] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#edd088]"
              >
                <option value="Intendance de propriété (Marbella / Mijas)">01 · Intendance & Property Management</option>
                <option value="Conciergerie privée et Lifestyle 7/7">02 · Conciergerie Privée et Lifestyle 7/7</option>
                <option value="Location saisonnière & Gestion locative">03 · Location Saisonnière VIP</option>
                <option value="Chef à domicile (Dominique Hybord)">04 · Chef Privé en Villa (Dominique Hybord)</option>
                <option value="Univers Marocain (Livraison fin 2027)">🐪 · Univers Marocain (Projet Horizon 2027)</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-widest uppercase text-[#edd088] mb-1.5">
                Précisions / Attentes particulières
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Dates de séjour, localisation de la villa, souhaits particuliers..."
                className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#edd088] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black font-semibold text-xs sm:text-sm py-4 px-6 shadow-xl shadow-[#c29a52]/25 hover:scale-[1.01] active:scale-[0.99] transition-all tracking-wider uppercase mt-2"
            >
              <Send className="w-4 h-4" />
              <span>Transmettre ma demande sur WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
