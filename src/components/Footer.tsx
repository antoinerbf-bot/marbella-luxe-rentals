import React from 'react';
import { MessageCircle, Phone, Mail, Globe, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenMorocco?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMorocco }) => {
  return (
    <footer className="relative bg-[#0d181c] text-white/80 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(214,174,92,0.15),transparent_40%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex flex-col items-start">
              <span className="font-serif text-3xl sm:text-4xl text-white font-semibold tracking-wider">
                Solveig’s
              </span>
              <span className="text-[8px] font-bold tracking-[0.35em] text-[#edd088] uppercase mt-1">
                PRESTIGE SERVICE
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-md">
              Gestion de propriété, conciergerie privée et location saisonnière haut de gamme pour les propriétaires exigeants qui recherchent une présence locale de confiance sur la Costa del Sol.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href="https://wa.me/34623626724"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-3.5 py-2 text-xs text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+34623626724"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-3.5 py-2 text-xs text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#edd088]" />
                <span>+34 623 626 724</span>
              </a>

              <a
                href="mailto:solveighybord@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-3.5 py-2 text-xs text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#edd088]" />
                <span>solveighybord@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3 text-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#edd088] mb-4">
              Prestations
            </p>
            <a href="#services" className="block text-white/75 hover:text-white transition-colors">
              Gestion de propriété
            </a>
            <a href="#services" className="block text-white/75 hover:text-white transition-colors">
              Conciergerie privée 24/7
            </a>
            <a href="#services" className="block text-white/75 hover:text-white transition-colors">
              Location saisonnière VIP
            </a>
            <a href="#chef" className="block text-white/75 hover:text-white transition-colors">
              Chef à domicile d’exception
            </a>
            {onOpenMorocco && (
              <button
                onClick={onOpenMorocco}
                className="block text-[#f4cb99] hover:text-[#ffd8b3] transition-colors font-semibold flex items-center gap-1.5"
              >
                <span>Univers Marocain</span>
                <span className="text-xs">🐪 →</span>
              </button>
            )}
            <a href="#services" className="block text-white/75 hover:text-white transition-colors">
              Housekeeping & Intendance
            </a>
          </div>

          {/* Col 3: Zones d'intervention */}
          <div className="space-y-3 text-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#edd088] mb-4">
              Zones d'intervention
            </p>
            <p className="text-xs text-white/70 leading-relaxed">
              Marbella · Puerto Banús · Golden Mile · Nueva Andalucía · Benahavís · Mijas Pueblo · La Cala · Calahonda · Riviera del Sol
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#edd088]">
              <Globe className="w-4 h-4" />
              <span>Service multilingue : FR · EN · ES · AR</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 tracking-wider">
          <span>© 2026 Solveig’s Prestige Service. Tous droits réservés.</span>
          <span className="mt-2 sm:mt-0">Marbella · Mijas · Costa del Sol</span>
        </div>
      </div>
    </footer>
  );
};
