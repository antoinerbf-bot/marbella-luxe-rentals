// Informations de contact et catalogue des services — source unique pour tout le site.

export const BRAND = 'Solveig’s Prestige Services';
export const PHONE_DISPLAY = '+34 623 626 724';
export const PHONE_TEL = 'tel:+34623626724';
export const EMAIL = 'solveighybord@gmail.com';

export const waLink = (message: string) =>
  `https://wa.me/34623626724?text=${encodeURIComponent(message)}`;

export const DEFAULT_WA_MESSAGE =
  'Bonjour Solveig, je souhaite échanger avec vous au sujet de ma propriété sur la Costa del Sol.';

export type ServiceId =
  | 'property-management'
  | 'concierge-services'
  | 'rental-management'
  | 'chef-a-domicile';

export interface ServiceSummary {
  id: ServiceId;
  number: string;
  title: string;
  english: string;
  summary: string;
  image: string;
  imagePosition: string;
  alt: string;
}

export const SERVICES: ServiceSummary[] = [
  {
    id: 'property-management',
    number: '01',
    title: 'Gestion de propriété',
    english: 'Property Management',
    summary:
      'Visites régulières, coordination des artisans et compte-rendu photo après chaque passage.',
    image: '/property-management-charm.jpg',
    imagePosition: 'object-[60%_center]',
    alt: 'Villa andalouse avec piscine et jardin méditerranéen',
  },
  {
    id: 'concierge-services',
    number: '02',
    title: 'Conciergerie privée & lifestyle 7/7',
    english: 'Concierge Services',
    summary:
      'Une table, un golf, une échappée en mer ou un chauffeur dès votre arrivée à l’aéroport.',
    image: '/concierge-yacht-vip.jpg',
    imagePosition: 'object-[30%_center]',
    alt: 'Échappée en mer au coucher du soleil face à Puerto Banús',
  },
  {
    id: 'rental-management',
    number: '03',
    title: 'Gestion locative',
    english: 'Rental Management',
    summary:
      'Deux formules : intendance sur place pour vos réservations, ou gestion intégrale clé en main.',
    image: '/rental-management-charm.jpg',
    imagePosition: 'object-[35%_center]',
    alt: 'Terrasse de villa avec piscine et vue sur la Méditerranée',
  },
  {
    id: 'chef-a-domicile',
    number: '04',
    title: 'Chef à domicile',
    english: 'Private Chef',
    summary:
      'Le Chef Dominique Hybord imagine votre menu et cuisine directement dans votre villa.',
    image: '/chef-dominique-cepes.jpg',
    imagePosition: 'object-[center_20%]',
    alt: 'Le Chef Dominique Hybord portant un bac de cèpes frais',
  },
];

export const isServiceId = (value: string): value is ServiceId =>
  SERVICES.some((s) => s.id === value);
