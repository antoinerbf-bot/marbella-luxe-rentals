import React, { useEffect, useState } from 'react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { waLink } from '../lib/site';

interface FloatingWhatsAppProps {
  message: string;
}

/** Bouton discret qui n'apparaît qu'après le premier écran, pour ne pas concurrencer les appels à l'action du hero. */
export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire à Solveig sur WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-travertine shadow-[0_10px_30px_rgba(28,26,23,0.25)] transition-all duration-500 hover:bg-bronze-deep sm:bottom-7 sm:right-7 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
};
