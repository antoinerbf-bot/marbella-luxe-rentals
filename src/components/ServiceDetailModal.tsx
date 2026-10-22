import React from 'react';
import { X, Check, MessageCircle, Phone, ArrowRight, Star, ChefHat } from 'lucide-react';
import { servicesData } from './HeroCinematic';

interface ServiceDetailModalProps {
  serviceId: string | null;
  onClose: () => void;
}

const serviceDetailsExtended: Record<
  string,
  {
    heroTag: string;
    headline: string;
    points: string[];
    whatsappText: string;
    imageUrl: string;
    isChef?: boolean;
  }
> = {
  'property-management': {
    heroTag: 'Gestion de Propriété & Intendance Privée',
    headline: 'Votre maison, entre de bonnes mains même lorsque vous êtes loin',
    points: [
      'Visites et inspections périodiques soignées avec rapport photo/vidéo détaillé',
      'Surveillance attentive de vos équipements (climatisation, plomberie, piscine, fermetures)',
      'Gestion et coordination bienveillante des artisans qualifiés (jardinier, pisciniste, techniciens)',
      'Préparation de la villa avant votre arrivée (aération, mise en température, courses)',
      'Fermeture soignée et sécurisation lors de vos départs',
    ],
    whatsappText: 'Bonjour Solveig, je souhaite des informations sur la gestion de ma villa à Marbella / Mijas.',
    imageUrl: '/property-management-charm.jpg',
  },
  'concierge-services': {
    heroTag: 'Conciergerie Privée & Lifestyle sur mesure',
    headline: 'Le sens du détail, sans jamais en faire trop',
    points: [
      'Accueil personnalisé à l’aéroport avec chauffeur privé VIP',
      'Accès privilégié aux meilleures tables et beach clubs de la Costa del Sol',
      'Organisation d’expériences maritimes (yacht privé, croisières au coucher de soleil)',
      'Assistance réactive 7j/7 et conciergerie privée confidentielle',
      'Discrétion absolue et disponibilité attentive pour chaque moment de votre séjour',
    ],
    whatsappText: 'Bonjour Solveig, je souhaiterais bénéficier de vos services de conciergerie privée.',
    imageUrl: '/candidates/option1_yacht.jpg',
  },
  'rental-management': {
    heroTag: 'Location Saisonnière & Intendance Haut de Gamme',
    headline: 'Une expérience de séjour pensée avant même l’arrivée',
    points: [
      'Option 1 : Réservations gérées par vous (propriétaires) — accueil, ménage & intendance sur place',
      'Option 2 : Gestion locative intégrale (gérée par nous) — commercialisation sélective & prise en charge A à Z',
      'Accueil physique en personne (Check-in VIP) et état des lieux minutieux',
      'Linge de qualité hôtelière 5 étoiles et gouvernance soignée de votre propriété',
      'Sélection soignée des profils de voyageurs et valorisation durable de votre patrimoine',
    ],
    whatsappText: 'Bonjour Solveig, je souhaite optimiser la location saisonnière de mon bien à Marbella.',
    imageUrl: '/rental-management-charm.jpg',
  },
  'chef-a-domicile': {
    heroTag: 'Chef privé · Dominique Hybord',
    headline: 'Le plaisir d’un chef dans l’intimité de votre villa',
    points: [
      'Un menu imaginé avec vous, selon vos envies et votre budget',
      'Sélection de produits frais et de saison auprès des producteurs et marchés locaux',
      'Préparation et dressage minute dans la cuisine de votre villa',
      'Service à table attentionné, dans le confort de votre villa',
      'Remise en état impeccable de la cuisine à l’issue du service',
      'Un parcours culinaire remarqué par la presse régionale',
    ],
    whatsappText: 'Bonjour Solveig, je souhaite réserver une expérience Chef à Domicile privée pour ma villa.',
    imageUrl: '/chef-villa-gastro.jpg',
    isChef: true,
  },
};

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ serviceId, onClose }) => {
  if (!serviceId) return null;

  const service = servicesData.find((s) => s.id === serviceId);
  const extra = serviceDetailsExtended[serviceId] || {
    heroTag: 'Service d’Excellence',
    headline: 'Accompagnement personnalisé',
    points: [],
    whatsappText: 'Bonjour Solveig, je souhaite échanger à propos de vos services.',
    imageUrl: '/property-management-charm.jpg',
  };

  if (!service) return null;

  const whatsappUrl = `https://wa.me/34623626724?text=${encodeURIComponent(extra.whatsappText)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#132228] border border-gold-border/60 rounded-3xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden my-auto max-h-[92vh] overflow-y-auto">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full border border-white/20 bg-black/50 text-white/80 hover:text-white hover:border-gold transition-colors z-20"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Visual Banner */}
        <div className="relative h-44 sm:h-52 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden">
          <img
            src={extra.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#132228] via-[#132228]/50 to-transparent" />
          
          <div className="absolute bottom-4 left-6 sm:left-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#fbe8b5] text-[10px] font-bold tracking-widest uppercase border border-gold-border/40 mb-1">
              <Star className="w-3 h-3 text-[#edd088] fill-current" />
              {extra.heroTag}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-semibold">
              {service.title} {service.subtitle}
            </h3>
          </div>
        </div>

        {/* Headline */}
        <p className="text-base sm:text-lg font-serif italic text-[#edd088] mb-3">
          « {extra.headline} »
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-6 font-light">
          {service.description}
        </p>

        {/* Extra Chef highlights if applicable */}
        {extra.isChef && (
          <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-[#c29a52]/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c29a52]/20 flex items-center justify-center text-[#fbe8b5] shrink-0">
              <ChefHat className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Archives & Savoir-Faire Dominique Hybord</p>
              <p className="text-[11px] text-white/70">Un parcours de chef reconnu par la presse régionale.</p>
            </div>
          </div>
        )}

        {/* Inclusions checklist */}
        <div className="bg-black/35 border border-white/10 rounded-2xl p-4 sm:p-5 mb-6">
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#edd088] uppercase mb-3">
            Prestations incluses sur mesure :
          </p>
          <ul className="space-y-2.5">
            {extra.points.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                <Check className="w-4 h-4 text-[#c29a52] mt-0.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c29a52] to-[#edd088] text-black font-semibold text-xs sm:text-sm py-3.5 px-6 shadow-lg shadow-gold/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Réserver / Discuter sur WhatsApp</span>
          </a>

          <a
            href="tel:+34623626724"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm py-3.5 px-6 transition-all"
          >
            <Phone className="w-4 h-4 text-[#edd088]" />
            <span>+34 623 626 724</span>
          </a>
        </div>
      </div>
    </div>
  );
};
