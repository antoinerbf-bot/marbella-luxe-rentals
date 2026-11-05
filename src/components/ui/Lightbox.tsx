import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ src, alt, onClose }) => {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-night/90 p-4 backdrop-blur-sm animate-fadeUp"
    >
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] max-w-full rounded-lg object-contain shadow-2xl"
      />
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-ink"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};
