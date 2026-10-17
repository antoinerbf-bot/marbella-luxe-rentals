import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';

interface NotificationItem {
  id: number;
  icon: string;
  category: string;
  location: string;
  action: string;
  timeAgo: string;
  type?: 'maroc' | 'chef' | 'concierge' | 'property';
}

interface LiveConciergeNotificationsProps {
  onNavigateMorocco?: () => void;
  onNavigateChef?: () => void;
}

const notifications: NotificationItem[] = [
  {
    id: 1,
    icon: '🥂',
    category: 'Haute Gastronomie Privée',
    location: 'Marbella · Golden Mile',
    action: 'Dîner 8 convives en cours de dressage par le Chef Dominique Hybord : homard bleu et émulsion safranée.',
    timeAgo: 'Il y a 4 min',
    type: 'chef',
  },
  {
    id: 2,
    icon: '🗝️',
    category: 'Arrivée Propriétaire VIP',
    location: 'Mijas Pueblo · Domaine Privé',
    action: 'Villa entièrement préparée : champagne millésimé au frais, fleurs fraîches coupées et contrôle technique validé.',
    timeAgo: 'Il y a 12 min',
    type: 'property',
  },
  {
    id: 3,
    icon: '🇲🇦',
    category: 'Univers Marocain',
    location: 'Marrakech · Riad de la Palmeraie',
    action: 'Accueil privatisé dans un palais arabo-andalou avec majordome dédié et cuisinière à demeure.',
    timeAgo: 'Il y a 28 min',
    type: 'maroc',
  },
  {
    id: 4,
    icon: '🛥️',
    category: 'Art de Vivre & Mer',
    location: 'Puerto Banús · Marina Privée',
    action: 'Yacht Riva privatisé pour une escapade crépusculaire face aux falaises de Gibraltar.',
    timeAgo: 'Il y a 45 min',
    type: 'concierge',
  },
  {
    id: 5,
    icon: '🌿',
    category: 'Intendance & Sérénité',
    location: 'Marbella · Sierra Blanca',
    action: 'Entretien paysager, pisciniste et surveillance méticuleuse finalisés avec rapport photo envoyé au propriétaire.',
    timeAgo: 'Il y a 58 min',
    type: 'property',
  },
];

export const LiveConciergeNotifications: React.FC<LiveConciergeNotificationsProps> = ({
  onNavigateMorocco,
  onNavigateChef,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show initial notification after 3.5 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 3500);

    // Rotate notification every 12 seconds
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 700);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !visible) return null;

  const current = notifications[currentIndex];

  const handleClick = () => {
    if (current.type === 'maroc' && onNavigateMorocco) {
      onNavigateMorocco();
    } else if (current.type === 'chef' && onNavigateChef) {
      onNavigateChef();
    }
  };

  return (
    <aside
      aria-label="Notification conciergerie en direct"
      className="fixed bottom-5 left-4 sm:bottom-7 sm:left-7 z-40 max-w-[340px] sm:max-w-[420px] animate-in fade-in slide-in-from-bottom-5 duration-500 pointer-events-auto"
    >
      <div
        onClick={handleClick}
        className={`relative rounded-2xl border border-[#f1d291]/60 bg-gradient-to-br from-[#101c22]/98 via-[#14232a]/95 to-[#0b1418]/98 backdrop-blur-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.75)] text-left flex items-start gap-3.5 transition-all duration-300 ${
          current.type === 'maroc' || current.type === 'chef' ? 'cursor-pointer hover:border-[#f4dfa5] hover:scale-[1.02]' : ''
        }`}
      >
        {/* Luxury Wax Seal Emblem */}
        <div className="relative shrink-0">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#3d2b1d] via-[#24170f] to-[#140c08] border border-[#f1d291]/80 flex items-center justify-center text-xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform">
            <span>{current.icon}</span>
          </div>
          {/* Subtle pulsating gold dot */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f1d291] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e5a872]"></span>
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center justify-between gap-1 mb-1">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#edd088] bg-[#edd088]/10 px-2.5 py-0.5 rounded-full border border-[#edd088]/30">
              {current.category}
            </span>
            <span className="text-[9px] text-white/50 tracking-wider">
              {current.timeAgo}
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-white/95 font-medium leading-snug mt-1.5">
            {current.action}
          </p>

          <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5">
            <span className="text-[9.5px] text-[#f4cb99]/85 font-semibold tracking-wide">
              📍 {current.location}
            </span>
            {(current.type === 'maroc' || current.type === 'chef') && (
              <span className="text-[9.5px] text-[#edd088] font-bold uppercase tracking-wider flex items-center gap-1 hover:underline">
                <span>Découvrir</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
            )}
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setDismissed(true);
          }}
          className="absolute top-2.5 right-2.5 p-1 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Fermer la notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
