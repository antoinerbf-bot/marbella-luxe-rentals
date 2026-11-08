import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Assistance WhatsApp">
      <a
        href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20je%20souhaite%20discuter%20de%20la%20gestion%20de%20mon%20bien%20%C3%A0%20Marbella%20ou%20Mijas."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter la conciergerie sur WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 group flex items-center gap-3 focus:outline-none"
      >
        {/* Tooltip on Desktop hover */}
        <span className="hidden md:inline-block px-3.5 py-1.5 rounded-full bg-[#15262c]/90 text-white text-xs font-semibold tracking-wider uppercase border border-gold-border/60 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Conciergerie WhatsApp
        </span>

        {/* Floating Button with Golden Pulsing Glow */}
        <div className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#1b2b31] to-[#34271e] text-[#f4dfa5] border border-[#f1d291]/80 shadow-[0_10px_25px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(241,210,145,0.6)] transition-all duration-300">
          <span className="absolute inset-0 rounded-full bg-[#c29a52]/30 animate-ping opacity-75 pointer-events-none" />
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#fbe8b5] drop-shadow-md" />
        </div>
      </a>
    </aside>
  );
};
