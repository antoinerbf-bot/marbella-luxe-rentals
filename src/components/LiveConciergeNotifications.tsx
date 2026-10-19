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
    category: 'Gastronomie Privée',
    location: 'Marbella · Golden Mile',
    action: 'Dîner 8 convives en cours de dressage minute par le Chef Dominique Hybord.',
    timeAgo: 'Il y a 4 min',
    type: 'chef',
  },
  {
    id: 2,
    icon: '🗝️',
    category: 'Arrivée VIP',
    location: 'Mijas Pueblo · Domaine',
    action: 'Villa prête pour les propriétaires : champagne au frais et veille soignée.',
    timeAgo: 'Il y a 12 min',
    type: 'property',
  },
  {
    id: 3,
    icon: '🇲🇦',
    category: 'Univers Marocain',
    location: 'Marrakech · Palmeraie',
    action: 'Accueil privatisé en riad d’exception avec cuisinière et majordome.',
    timeAgo: 'Il y a 28 min',
    type: 'maroc',
  },
  {
    id: 4,
    icon: '🛥️',
    category: 'Lifestyle & Mer',
    location: 'Puerto Banús · Marina',
    action: 'Yacht charter privé pour une escapade crépusculaire en Méditerranée.',
    timeAgo: 'Il y a 45 min',
    type: 'concierge',
  },
  {
    id: 5,
    icon: '🌿',
    category: 'Intendance & Sérénité',
    location: 'Marbella · Sierra Blanca',
    action: 'Visite de surveillance et intendance soignée terminées avec rapport photo.',
    timeAgo: 'Il y a 55 min',
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

    // First discrete appearance after 8 seconds (letting visitor discover the hero first)
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 8000);

    // Show for 5.5s, then hide for 25s before next notification ("de temps en temps")
    let hideTimer: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setVisible(false);
      hideTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 25000);
    }, 30500);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
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
      className="hidden lg:block fixed bottom-20 right-5 sm:bottom-24 sm:right-7 z-30 max-w-[310px] animate-in fade-in slide-in-from-bottom-3 duration-500 pointer-events-auto"
    >
      <div
        onClick={handleClick}
        className={`relative rounded-2xl border border-[#f1d291]/50 bg-gradient-to-br from-[#101c22]/98 via-[#14232a]/95 to-[#0b1418]/98 backdrop-blur-xl p-3 shadow-2xl text-left flex items-start gap-2.5 transition-all duration-300 ${
          current.type === 'maroc' || current.type === 'chef' ? 'cursor-pointer hover:border-[#f4dfa5] hover:scale-[1.02]' : ''
        }`}
      >
        {/* Subtle emblem */}
        <div className="relative shrink-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#3d2b1d] via-[#24170f] to-[#140c08] border border-[#f1d291]/70 flex items-center justify-center text-sm shadow-md">
            <span>{current.icon}</span>
          </div>
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f1d291] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5a872]"></span>
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 pr-3">
          <div className="flex items-center justify-between gap-1 mb-0.5">
            <span className="text-[8px] font-bold uppercase tracking-wider text-[#edd088] bg-[#edd088]/10 px-2 py-0.5 rounded-full border border-[#edd088]/25">
              {current.category}
            </span>
            <span className="text-[8px] text-white/45">
              {current.timeAgo}
            </span>
          </div>

          <p className="text-[10.5px] text-white/90 font-medium leading-tight mt-1">
            {current.action}
          </p>

          <div className="flex items-center justify-between mt-1.5 pt-1 border-t border-white/5">
            <span className="text-[9px] text-[#f4cb99]/85 font-medium truncate">
              📍 {current.location}
            </span>
            {(current.type === 'maroc' || current.type === 'chef') && (
              <span className="text-[8.5px] text-[#edd088] font-bold uppercase tracking-wider flex items-center gap-0.5 hover:underline shrink-0">
                <span>Voir</span>
                <ArrowRight className="w-2 h-2" />
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
          className="absolute top-2 right-2 p-1 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Fermer la notification"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </aside>
  );
};
