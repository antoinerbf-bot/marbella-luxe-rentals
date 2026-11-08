import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Send,
  MapPin,
  Compass,
  Building,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Home,
  Building2,
  Users,
  BedDouble,
  Bath,
  Mail,
} from 'lucide-react';
import { EMAIL, waLink } from '../lib/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { LanguageSelector } from './ui/LanguageSelector';
import { useLanguage } from '../lib/LanguageContext';

interface MoroccoUniversePageProps {
  onBackToCostaDelSol: () => void;
}

interface MoroccanPreviewResidence {
  id: string;
  category: 'apartment' | 'villa';
  city: 'Marrakech' | 'Essaouira' | 'Casablanca' | 'Tanger' | 'Ouarzazate';
  neighborhood: string;
  image: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  name: { fr: string; en: string; es: string };
  tagline: { fr: string; en: string; es: string };
  description: { fr: string; en: string; es: string };
  features: { fr: string[]; en: string[]; es: string[] };
}

const previewResidences: MoroccanPreviewResidence[] = [
  {
    id: 'villa-palmeraie',
    category: 'villa',
    city: 'Marrakech',
    neighborhood: 'Palmeraie · Marrakech',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=85',
    guests: 12,
    bedrooms: 6,
    bathrooms: 6,
    name: {
      fr: 'Riad & Villa de la Palmeraie',
      en: 'Palmeraie Private Riad & Villa',
      es: 'Riad y Villa Privada de la Palmeraie',
    },
    tagline: {
      fr: 'Patio arboré de palmiers centenaires, bassin chauffé & intendance privée',
      en: 'Century-old palm courtyard, heated pool & private household management',
      es: 'Patio de palmeras centenarias, piscina climatizada e intendencia privada',
    },
    description: {
      fr: 'Demeure confidentielle au cœur de la Palmeraie de Marrakech mariant tadelakt traditionnel, cèdre sculpté et volumes contemporains baignés de lumière.',
      en: 'A confidential residence in the heart of Marrakech’s Palmeraie blending traditional tadelakt, carved cedarwood, and sunlit contemporary volumes.',
      es: 'Residencia confidencial en el corazón de la Palmeraie de Marrakech que combina tadelakt tradicional, cedro tallado y volúmenes contemporáneos.',
    },
    features: {
      fr: ['Piscine chauffée entourée de palmiers', 'Hammam privé en tadelakt', 'Service de maison & conciergerie 7/7'],
      en: ['Heated palm-fringed pool', 'Private tadelakt hammam', 'Household staff & 7/7 concierge'],
      es: ['Piscina climatizada entre palmeras', 'Hammam privado en tadelakt', 'Personal de casa y conserjería 7d/7'],
    },
  },
  {
    id: 'apt-hivernage',
    category: 'apartment',
    city: 'Marrakech',
    neighborhood: 'Hivernage & Guéliz · Marrakech',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85',
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    name: {
      fr: 'Penthouse Panoramique Atlas',
      en: 'Atlas Panoramic Penthouse',
      es: 'Ático Panorámico del Atlas',
    },
    tagline: {
      fr: 'Terrasse plein ciel avec vue sur les sommets enneigés de l’Atlas',
      en: 'Skyline terrace overlooking the snow-capped Atlas peaks',
      es: 'Terraza panorámica frente a las cumbres nevadas del Atlas',
    },
    description: {
      fr: 'Appartement de haut standing situé entre Guéliz et l’Hivernage, doté d’une vaste terrasse aménagée, zelliges sur mesure et prestations hôtelières.',
      en: 'High-standing apartment set between Guéliz and Hivernage, featuring an expansive landscaped terrace, bespoke zellij tilework, and hotel-grade care.',
      es: 'Apartamento de alto standing entre Guéliz y el Hivernage, con amplia terraza ajardinada, zellige artesanal y prestaciones hoteleras.',
    },
    features: {
      fr: ['Terrasse panoramique Atlas', 'Résidence sécurisée 24/7', 'Accueil personnalisé & transferts VIP'],
      en: ['Panoramic Atlas terrace', '24/7 secure residence', 'Personal welcome & VIP transfers'],
      es: ['Terraza panorámica al Atlas', 'Residencia segura 24/7', 'Recepción personalizada y traslados VIP'],
    },
  },
  {
    id: 'villa-essaouira',
    category: 'villa',
    city: 'Essaouira',
    neighborhood: 'Médina Historique & Remparts · Essaouira',
    image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1200&q=85',
    guests: 8,
    bedrooms: 4,
    bathrooms: 4,
    name: {
      fr: 'Riad Alizés & Patio d’Or',
      en: 'Riad Alizés & Golden Patio',
      es: 'Riad Alizés y Patio de Oro',
    },
    tagline: {
      fr: 'Pierre dorée des remparts, plafonds en thuya & rooftop face à l’Atlantique',
      en: 'Golden rampart stone, thuya wood ceilings & Atlantic rooftop',
      es: 'Piedra dorada de las murallas, techos de tuya y azotea frente al Atlántico',
    },
    description: {
      fr: 'Riad de caractère restauré dans le respect de l’artisanat souiri, offrant un patio lumineux à l’abri des alizés et un solarium surplombant l’océan.',
      en: 'Characterful riad restored in keeping with Essaouira craftsmanship, offering a sheltered sunlit patio and an ocean-view rooftop solarium.',
      es: 'Riad con carácter restaurado según la tradición artesana de Esauira, con patio luminoso resguardado del viento y solárium frente al mar.',
    },
    features: {
      fr: ['Rooftop vue océan Atlantique', 'Cheminée en pierre & boiseries thuya', 'Cuisinière locale sur demande'],
      en: ['Atlantic Ocean view rooftop', 'Stone fireplace & thuya woodwork', 'Private local cook on request'],
      es: ['Azotea con vistas al Atlántico', 'Chimenea de piedra y madera de tuya', 'Cocinera local bajo petición'],
    },
  },
  {
    id: 'apt-corniche',
    category: 'apartment',
    city: 'Casablanca',
    neighborhood: 'Corniche d’Aïn Diab · Casablanca',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    name: {
      fr: 'Le Belvédère de la Corniche',
      en: 'The Corniche Ocean Belvedere',
      es: 'El Mirador de la Corniche',
    },
    tagline: {
      fr: 'Pied-à-terre contemporain surplombant l’océan Atlantique',
      en: 'Contemporary pied-à-terre overlooking the Atlantic Ocean',
      es: 'Pied-à-terre contemporáneo con vistas al océano Atlántico',
    },
    description: {
      fr: 'Une adresse raffinée face à l’océan à Casablanca, pensée pour les séjours exécutifs comme pour les parenthèses balnéaires en toute sérénité.',
      en: 'A refined oceanfront address in Casablanca, designed for both executive stays and serene coastal retreats.',
      es: 'Una dirección refinada frente al océano en Casablanca, concebida tanto para estancias ejecutivas como para escapadas junto al mar.',
    },
    features: {
      fr: ['Terrasse front de mer plein sud', 'Parking privé sécurisé', 'Conciergerie privée Solveig’s'],
      en: ['South-facing oceanfront terrace', 'Secure private parking', 'Solveig’s private concierge'],
      es: ['Terraza frente al mar orientación sur', 'Estacionamiento privado seguro', 'Conserjería privada Solveig’s'],
    },
  },
  {
    id: 'apt-tanger',
    category: 'apartment',
    city: 'Tanger',
    neighborhood: 'Baie de Tanger · Détroit de Gibraltar',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=85',
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    name: {
      fr: 'La Suite du Détroit',
      en: 'The Strait of Gibraltar Suite',
      es: 'La Suite del Estrecho',
    },
    tagline: {
      fr: 'Élégance cosmopolite entre Méditerranée et Atlantique',
      en: 'Cosmopolitan elegance where the Mediterranean meets the Atlantic',
      es: 'Elegancia cosmopolita entre el Mediterráneo y el Atlántico',
    },
    description: {
      fr: 'Surplombant la baie mythique de Tanger à quelques milles nautiques de l’Andalousie, un appartement lumineux aux tonalités lin, chaux et laiton.',
      en: 'Overlooking the legendary Bay of Tangier just across from Andalusia, a luminous residence dressed in linen, limewash, and warm brass tones.',
      es: 'Con vistas a la mítica bahía de Tánger frente a las costas andaluzas, un apartamento luminoso en tonos lino, cal y latón.',
    },
    features: {
      fr: ['Panorama sur la baie & le Détroit', 'Proximité immédiate Marina', 'Liaison privilégiée Costa del Sol'],
      en: ['Bay & Strait of Gibraltar panorama', 'Steps from Tangier Marina', 'Seamless link with Costa del Sol'],
      es: ['Panorama de la bahía y el Estrecho', 'Junto a la Marina de Tánger', 'Conexión directa con la Costa del Sol'],
    },
  },
  {
    id: 'villa-ouarzazate',
    category: 'villa',
    city: 'Ouarzazate',
    neighborhood: 'Palmeraie de Skoura · Ouarzazate',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=85',
    guests: 10,
    bedrooms: 5,
    bathrooms: 5,
    name: {
      fr: 'Kasbah des Oliviers & Oasis',
      en: 'Oasis & Olive Grove Private Kasbah',
      es: 'Kasbah Privada de los Olivos y Oasis',
    },
    tagline: {
      fr: 'Architecture en pisé noble, silence minéral & nuits étoilées du Sud',
      en: 'Noble rammed-earth architecture, desert stillness & starlit southern skies',
      es: 'Arquitectura noble en adobe, silencio mineral y noches estrelladas del sur',
    },
    description: {
      fr: 'Un sanctuaire confidentiel niché au cœur d’une palmeraie préservée, entouré de grenadiers et d’oliviers pour une déconnexion absolue aux portes du désert.',
      en: 'A confidential sanctuary nestled within an unspoiled palm oasis, surrounded by pomegranate and olive trees for complete serenity at the desert gateway.',
      es: 'Un santuario confidencial en el corazón de un palmeral virgen, rodeado de granados y olivos para una desconexión absoluta a las puertas del desierto.',
    },
    features: {
      fr: ['Jardin d’oasis & bassin privé', 'Dîners privés sous les étoiles', 'Excursions désert sur mesure'],
      en: ['Oasis garden & private pool', 'Private dinners under the stars', 'Bespoke desert excursions'],
      es: ['Jardín de oasis y piscina privada', 'Cenas privadas bajo las estrellas', 'Excursiones a medida por el desierto'],
    },
  },
];

export const MoroccoUniversePage: React.FC<MoroccoUniversePageProps> = ({ onBackToCostaDelSol }) => {
  const { lang, t } = useLanguage();
  const m = t.moroccoPage;

  const [selectedDestination, setSelectedDestination] = useState<string>('Marrakech');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'villa' | 'apartment'>('all');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Marrakech',
    timeframe: 'Fin 2027',
    notes: '',
  });

  const destinationsList = [
    {
      name: 'Marrakech',
      tag: 'Guéliz · Hivernage · Palmeraie',
      image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=85',
      kicker: lang === 'en' ? 'Imperial Splendor' : lang === 'es' ? 'Esplendor Imperial' : 'Splendeur Impériale',
      desc:
        lang === 'en'
          ? 'Contemporary prestige apartments and private havens bathed in the golden ochre light of the Atlas mountains.'
          : lang === 'es'
          ? 'Apartamentos de prestigio contemporáneos y residencias privadas bajo la luz dorada de las cumbres del Atlas.'
          : 'Appartements contemporains de prestige et demeures privées baignées par la lumière ocre impériale face à l’Atlas.',
      highlights: [
        lang === 'en' ? 'Panoramic Atlas terraces' : lang === 'es' ? 'Terrazas panorámicas al Atlas' : 'Terrasses panoramiques Atlas',
        lang === 'en' ? 'Private landscaped pools' : lang === 'es' ? 'Piscinas privadas ajardinadas' : 'Piscines privées paysagées',
        lang === 'en' ? '24/7 Solveig’s estate concierge' : lang === 'es' ? 'Conserjería 24/7 Solveig’s' : 'Intendance & conciergerie 24/7',
      ],
    },
    {
      name: 'Essaouira',
      tag: 'Médina · Front de Mer & Remparts',
      image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1200&q=85',
      kicker: lang === 'en' ? 'Atlantic Poetry' : lang === 'es' ? 'Poesía Atlántica' : 'Poésie Atlantique',
      desc:
        lang === 'en'
          ? 'Refreshing ocean trade winds, sun-drenched stone ramparts, and whitewashed bohemian charm of Mogador.'
          : lang === 'es'
          ? 'Brisa del océano Atlántico, murallas de piedra dorada y el encanto bohemio y auténtico de Mogador.'
          : 'Brise atlantique iodée, pierre dorée des remparts et douceur bohème chic au bord de l’océan.',
      highlights: [
        lang === 'en' ? 'Unobstructed ocean vistas' : lang === 'es' ? 'Vistas infinitas al océano' : 'Vues imprenables sur l’océan',
        lang === 'en' ? 'Traditional cedar woodwork' : lang === 'es' ? 'Madera noble de cedro y enebro' : 'Boiseries nobles en cèdre',
        lang === 'en' ? 'Private beachfront access' : lang === 'es' ? 'Acceso directo a la costa' : 'Accès privilégié au littoral',
      ],
    },
    {
      name: 'Casablanca',
      tag: 'Corniche d’Aïn Diab · Triangle d’Or',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
      kicker: lang === 'en' ? 'Coastal Sophistication' : lang === 'es' ? 'Sofisticación Costera' : 'Cosmopolite & Océane',
      desc:
        lang === 'en'
          ? 'High-standing coastal pied-à-terre facing the Atlantic waves, designed for business and serene leisure.'
          : lang === 'es'
          ? 'Pied-à-terre de alto standing frente al Atlántico, concebidos para negocios y estancias exclusivas.'
          : 'Pied-à-terre de prestige face au grand large atlantique, mariant dynamisme économique et villégiature raffinée.',
      highlights: [
        lang === 'en' ? 'Oceanfront executive living' : lang === 'es' ? 'Ubicación privilegiada frente al mar' : 'Emplacement d’exception front de mer',
        lang === 'en' ? 'Ultra-secure underground parking' : lang === 'es' ? 'Estacionamiento privado seguro' : 'Parkings privés sécurisés',
        lang === 'en' ? 'Executive concierge support' : lang === 'es' ? 'Soporte de conserjería ejecutiva' : 'Service de conciergerie VIP',
      ],
    },
    {
      name: 'Tanger',
      tag: 'Baie de Tanger · Détroit de Gibraltar',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=85',
      kicker: lang === 'en' ? 'Mediterranean Crossroads' : lang === 'es' ? 'Encrucijada Mediterránea' : 'Entre Deux Mers',
      desc:
        lang === 'en'
          ? 'Legendary cosmopolitan elegance perched high above where the Mediterranean greets the Atlantic Ocean.'
          : lang === 'es'
          ? 'Elegancia cosmopolita legendaria con vistas al estrecho donde el Mediterráneo abraza el Atlántico.'
          : 'Élégance mythique face au détroit, offrant une vue saisissante sur les côtes andalouses et l’infini maritime.',
      highlights: [
        lang === 'en' ? 'Strait of Gibraltar panoramas' : lang === 'es' ? 'Vistas al Estrecho de Gibraltar' : 'Vues plongeantes sur le Détroit',
        lang === 'en' ? 'Seamless bridge to Andalusia' : lang === 'es' ? 'Conexión directa con Andalucía' : 'Passerelle naturelle avec l’Andalousie',
        lang === 'en' ? 'Historic & contemporary charm' : lang === 'es' ? 'Fusión histórica y contemporánea' : 'Écrin historique et moderne',
      ],
    },
    {
      name: 'Ouarzazate',
      tag: 'Palmeraie · Oasis & Portes du Désert',
      image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=85',
      kicker: lang === 'en' ? 'Desert Serenity' : lang === 'es' ? 'Serenidad del Desierto' : 'Sérénité Minérale',
      desc:
        lang === 'en'
          ? 'Private kasbahs and oasis sanctuaries under starlit southern skies, delivering unhurried quietude.'
          : lang === 'es'
          ? 'Kasbahs privadas y santuarios de oasis bajo el cielo estrellado del sur para una desconexión total.'
          : 'Kasbahs privatives et havres de quiétude aux portes du Sahara, bercés par le bruissement des palmiers.',
      highlights: [
        lang === 'en' ? 'Pure silence and desert stars' : lang === 'es' ? 'Silencio puro y cielos estrellados' : 'Silence absolu et ciels étoilés',
        lang === 'en' ? 'Authentic rammed-earth architecture' : lang === 'es' ? 'Arquitectura tradicional de adobe' : 'Architecture en pisé noble et tadelakt',
        lang === 'en' ? 'Private oasis gardens' : lang === 'es' ? 'Jardines privados con palmeras' : 'Jardins secrets et bassins d’eau fraîche',
      ],
    },
  ];

  const buildMessageText = () =>
    lang === 'en'
      ? `Hello Solveig, I wish to join the VIP Priority Waitlist for the Moroccan Universe (Horizon End of 2027):
- Name: ${formData.name}
- Phone: ${formData.phone}
${formData.email ? `- Email: ${formData.email}\n` : ''}- Preferred destination: ${formData.city}
- Planned timeframe: ${formData.timeframe}
${formData.notes ? `- Notes: ${formData.notes}` : ''}`
      : lang === 'es'
      ? `Hola Solveig, deseo unirme a la Lista de Espera Privilegiada para el Universo Marroquí (Horizonte Fin 2027):
- Nombre: ${formData.name}
- Teléfono: ${formData.phone}
${formData.email ? `- Email: ${formData.email}\n` : ''}- Destino preferido: ${formData.city}
- Horizonte previsto: ${formData.timeframe}
${formData.notes ? `- Notas: ${formData.notes}` : ''}`
      : `Bonjour Solveig, je souhaite rejoindre la liste d'attente privilégiée pour l'Univers Marocain (Livraison fin 2027) :
- Nom : ${formData.name}
- Téléphone : ${formData.phone}
${formData.email ? `- Email : ${formData.email}\n` : ''}- Destination souhaitée : ${formData.city}
- Horizon envisagé : ${formData.timeframe}
${formData.notes ? `- Précisions : ${formData.notes}` : ''}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.open(waLink(buildMessageText()), '_blank');
  };

  const activeDestinationData =
    destinationsList.find((d) => d.name === selectedDestination) || destinationsList[0];

  const filteredResidences = previewResidences.filter(
    (item) => categoryFilter === 'all' || item.category === categoryFilter
  );

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#1C1A17] selection:bg-[#C9A869]/30">
      {/* Barre de navigation supérieure fixe */}
      <header className="sticky top-0 z-50 border-b border-[#1C1A17]/10 bg-[#FAF6EE]/95 backdrop-blur-md py-3.5 px-4 sm:px-8">
        <div className="container-site flex items-center justify-between gap-4">
          <button
            onClick={onBackToCostaDelSol}
            className="inline-flex items-center gap-2 rounded-full border border-[#1C1A17]/15 bg-white px-4 py-2 text-xs font-semibold text-[#1C1A17] transition hover:border-[#9E5D2A] hover:bg-[#F3EAD8]"
          >
            <ArrowLeft className="h-4 w-4 text-[#9E5D2A]" />
            <span className="hidden sm:inline">{m.backCostaDelSol}</span>
            <span className="sm:hidden">Costa del Sol</span>
          </button>

          <div className="flex flex-col text-center leading-none">
            <span className="font-serif text-lg tracking-[0.14em] text-[#1C1A17] sm:text-xl font-medium">
              SOLVEIG’S
            </span>
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.34em] text-[#9E5D2A]">
              Maroc · 2027
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <LanguageSelector variant="light" />
            <a
              href={waLink('Bonjour Solveig, je souhaite des renseignements sur les projets au Maroc (horizon fin 2027).')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1C1A17] px-4 py-2 text-xs font-semibold text-[#FAF6EE] transition hover:bg-[#9E5D2A]"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section Maroc — Immersif Architectural & Solaire */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-b border-[#1C1A17]/10 bg-[#1F140E] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=2000&q=85"
            alt="Architecture Marocaine Riad & Palais"
            className="h-full w-full object-cover object-center opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F140E]/80 via-[#1F140E]/65 to-[#1F140E]/95" />
        </div>

        <div className="container-site relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E5B887]/40 bg-black/45 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-[#F3DEB0]">
            <Sparkles className="h-3.5 w-3.5 text-[#E5B887]" />
            <span>{m.topBadge}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium leading-[1.05] text-white">
            {m.titleMain} <br />
            <span className="italic text-[#E5B887]">{m.titleItalic}</span>
          </h1>

          <p className="text-base sm:text-lg font-light leading-relaxed text-[#EDE6DA]/90 max-w-2xl mx-auto">
            {m.description}
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#liste-attente"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C98A4B] to-[#E5B887] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#1C120C] shadow-xl transition-all hover:brightness-110 w-full sm:w-auto"
            >
              <span>{m.waitlistCta}</span>
            </a>

            <a
              href="#collection-maroc"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white/20 w-full sm:w-auto"
            >
              <span>
                {lang === 'en'
                  ? 'Preview the Residences'
                  : lang === 'es'
                  ? 'Descubrir las Residencias'
                  : 'Découvrir les Résidences'}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 3 Piliers de l'Univers Marocain */}
      <section className="border-b border-[#1C1A17]/10 bg-white py-16 sm:py-20">
        <div className="container-site">
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-[#1C1A17]/10 bg-[#FAF6EE] p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#9E5D2A]/10 text-[#9E5D2A] mb-4">
                <Building className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1C1A17] mb-2">
                {lang === 'en' ? 'Architectural Noblesse' : lang === 'es' ? 'Nobleza Arquitectónica' : 'Noblesse Architecturale'}
              </h3>
              <p className="text-xs font-light leading-relaxed text-[#5A524A]">
                {lang === 'en'
                  ? 'Refined marriage of genuine Moroccan craft (tadelakt, carved cedar, hand-chiseled zellij) with contemporary comforts.'
                  : lang === 'es'
                  ? 'Fusión refinada de artesanía marroquí (tadelakt, cedro tallado, zellige) con los estándares de confort contemporáneo.'
                  : 'Alliance raffinée de l’artisanat marocain d’exception (tadelakt, bois de cèdre, zelliges émaillés) et des exigences du confort contemporain.'}
              </p>
            </div>

            <div className="rounded-2xl border border-[#1C1A17]/10 bg-[#FAF6EE] p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#9E5D2A]/10 text-[#9E5D2A] mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1C1A17] mb-2">
                {lang === 'en' ? 'Solveig’s Signature Care' : lang === 'es' ? 'Intendencia Solveig’s' : 'L’Excellence Solveig’s'}
              </h3>
              <p className="text-xs font-light leading-relaxed text-[#5A524A]">
                {lang === 'en'
                  ? 'The very same rigor, discretion, and 7/7 concierge dedication that distinguish our service in Marbella and Mijas.'
                  : lang === 'es'
                  ? 'La misma exigencia, discreción y conserjería 7d/7 que distinguen nuestro servicio en Marbella y Mijas.'
                  : 'La même rigueur, la même discrétion et le service de conciergerie 7j/7 qui font la renommée de notre maison en Andalousie.'}
              </p>
            </div>

            <div className="rounded-2xl border border-[#1C1A17]/10 bg-[#FAF6EE] p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#9E5D2A]/10 text-[#9E5D2A] mb-4">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1C1A17] mb-2">
                {lang === 'en' ? 'VIP Priority Access' : lang === 'es' ? 'Acceso Prioritario VIP' : 'Avant-Première VIP'}
              </h3>
              <p className="text-xs font-light leading-relaxed text-[#5A524A]">
                {lang === 'en'
                  ? 'Privileged preview invitations and priority reservation access for our private clientele prior to public release.'
                  : lang === 'es'
                  ? 'Invitaciones exclusivas y reservas prioritarias para nuestros clientes antes del lanzamiento público general.'
                  : 'Présentation confidentielle de l’avancement des travaux et accès prioritaire aux premières réservations fin 2027.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sélecteur interactif des 5 destinations avec Photographie Immersive */}
      <section className="border-b border-[#1C1A17]/10 bg-[#FAF6EE] py-20">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="eyebrow">{m.destinationsEyebrow}</p>
            <h2 className="font-serif text-3xl font-medium text-[#1C1A17] sm:text-4xl mt-1">
              {m.destinationsTitle}
            </h2>
            <p className="text-sm font-light text-[#5A524A] mt-2">
              {m.destinationsSubtitle}
            </p>
          </div>

          {/* Onglets interactifs des villes */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {destinationsList.map((d) => (
              <button
                key={d.name}
                type="button"
                onClick={() => {
                  setSelectedDestination(d.name);
                  setFormData((prev) => ({ ...prev, city: d.name }));
                }}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                  selectedDestination === d.name
                    ? 'bg-[#9E5D2A] text-white shadow-md'
                    : 'bg-white border border-[#1C1A17]/15 text-[#1C1A17] hover:border-[#9E5D2A] hover:bg-[#F3EAD8]'
                }`}
              >
                <span>{d.name}</span>
              </button>
            ))}
          </div>

          {/* Fiche détaillée de la destination sélectionnée avec Photo Haute Définition */}
          <div className="max-w-5xl mx-auto rounded-[2.2rem] overflow-hidden border border-[#1C1A17]/10 bg-white shadow-lg">
            <div className="grid lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[340px] overflow-hidden bg-[#1F140E]">
                <img
                  src={activeDestinationData.image}
                  alt={activeDestinationData.name}
                  className="h-full w-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#F3DEB0]">
                    <Compass className="h-3 w-3 text-[#E5B887]" />
                    <span>{m.deliveryEstimate} · Fin 2027</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-11 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-[#9E5D2A]">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">{activeDestinationData.tag}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-[#9E5D2A] uppercase tracking-widest">
                      {activeDestinationData.kicker}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1A17]">
                      {activeDestinationData.name}
                    </h3>
                  </div>

                  <p className="text-sm font-light leading-relaxed text-[#5A524A]">
                    {activeDestinationData.desc}
                  </p>

                  <div className="pt-2 space-y-2">
                    {activeDestinationData.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#5A524A]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#9E5D2A]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1C1A17]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#5A524A] max-w-xs">
                    {lang === 'en'
                      ? 'Renovation works underway. Priority preview reserved for waitlist members.'
                      : lang === 'es'
                      ? 'Obras en curso. Acceso prioritario reservado a los miembros de la lista de espera.'
                      : 'Travaux en cours de réalisation. Avant-première réservée aux membres inscrits.'}
                  </p>
                  <a
                    href="#liste-attente"
                    onClick={() => setFormData((prev) => ({ ...prev, city: activeDestinationData.name }))}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9E5D2A] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#7e461a] shrink-0"
                  >
                    <span>
                      {lang === 'en'
                        ? `Waitlist for ${activeDestinationData.name}`
                        : lang === 'es'
                        ? `Lista VIP ${activeDestinationData.name}`
                        : `Rejoindre pour ${activeDestinationData.name}`}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Architecturale en Avant-Première (Villas, Riads & Appartements) */}
      <section id="collection-maroc" className="border-b border-[#1C1A17]/10 bg-white py-20">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow">
                {lang === 'en'
                  ? 'Architectural Preview · Horizon End of 2027'
                  : lang === 'es'
                  ? 'Avance Arquitectónico · Horizonte Fin 2027'
                  : 'Avant-Première Architecturale · Horizon Fin 2027'}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1A17] mt-1">
                {lang === 'en'
                  ? 'Private Riads, Kasbahs & Prestige Apartments'
                  : lang === 'es'
                  ? 'Riads Privados, Kasbahs y Apartamentos de Prestigio'
                  : 'Riads Privés, Kasbahs & Appartements d’Exception'}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {(
                [
                  { id: 'all', fr: 'Toute la Collection', en: 'All Residences', es: 'Toda la Colección' },
                  { id: 'villa', fr: 'Villas & Riads', en: 'Villas & Riads', es: 'Villas y Riads' },
                  { id: 'apartment', fr: 'Appartements', en: 'Apartments', es: 'Apartamentos' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setCategoryFilter(tab.id)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    categoryFilter === tab.id
                      ? 'bg-[#1C1A17] text-[#FAF6EE]'
                      : 'bg-[#FAF6EE] text-[#5A524A] hover:text-[#1C1A17]'
                  }`}
                >
                  {tab[lang]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredResidences.map((item) => (
              <div
                key={item.id}
                className="group rounded-[1.8rem] border border-[#1C1A17]/10 bg-[#FAF6EE] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-[#1F140E]">
                    <img
                      src={item.image}
                      alt={item.name[lang]}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F3DEB0]">
                      {item.category === 'villa' ? (
                        <Home className="h-3 w-3 text-[#E5B887]" />
                      ) : (
                        <Building2 className="h-3 w-3 text-[#E5B887]" />
                      )}
                      <span>
                        {item.category === 'villa'
                          ? lang === 'en'
                            ? 'Private Riad / Villa'
                            : lang === 'es'
                            ? 'Riad / Villa Privada'
                            : 'Riad / Villa Privée'
                          : lang === 'en'
                          ? 'Prestige Apartment'
                          : lang === 'es'
                          ? 'Apartamento de Prestigio'
                          : 'Appartement de Prestige'}
                      </span>
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E5B887]">
                        {item.neighborhood}
                      </p>
                      <h3 className="font-serif text-xl font-medium leading-snug mt-0.5">
                        {item.name[lang]}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs font-semibold text-[#9E5D2A]">{item.tagline[lang]}</p>
                    <p className="text-xs font-light leading-relaxed text-[#5A524A]">
                      {item.description[lang]}
                    </p>

                    <div className="flex items-center gap-4 pt-2 border-t border-[#1C1A17]/10 text-[11px] text-[#5A524A]">
                      <span className="inline-flex items-center gap-1">
                        <Users className="h-3.5 w-3.5 text-[#9E5D2A]" />
                        {item.guests} {lang === 'en' ? 'guests' : lang === 'es' ? 'huéspedes' : 'convives'}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <BedDouble className="h-3.5 w-3.5 text-[#9E5D2A]" />
                        {item.bedrooms} {lang === 'en' ? 'beds' : lang === 'es' ? 'hab.' : 'ch.'}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Bath className="h-3.5 w-3.5 text-[#9E5D2A]" />
                        {item.bathrooms} {lang === 'en' ? 'baths' : lang === 'es' ? 'baños' : 'sdb.'}
                      </span>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {item.features[lang].map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-[#1C1A17]/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#9E5D2A]" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <a
                    href="#liste-attente"
                    onClick={() => {
                      setSelectedDestination(item.city);
                      setFormData((prev) => ({
                        ...prev,
                        city: item.city,
                        notes: `${item.name[lang]} (${item.neighborhood})`,
                      }));
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#9E5D2A]/40 bg-white px-4 py-2.5 text-xs font-semibold text-[#9E5D2A] transition hover:bg-[#9E5D2A] hover:text-white w-full"
                  >
                    <span>
                      {lang === 'en'
                        ? 'Request Priority Dossier'
                        : lang === 'es'
                        ? 'Solicitar Dossier Prioritario'
                        : 'Demander le dossier en avant-première'}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire VIP Liste d'attente avec Confirmation Visuelle */}
      <section id="liste-attente" className="bg-[#FAF6EE] py-20">
        <div className="container-site max-w-2xl mx-auto">
          <div className="rounded-[2.4rem] border border-[#1C1A17]/10 bg-white p-8 sm:p-12 shadow-[0_20px_45px_rgba(28,26,23,0.06)]">
            <div className="text-center mb-8">
              <p className="eyebrow">{m.formEyebrow}</p>
              <h2 className="font-serif text-3xl font-medium text-[#1C1A17] sm:text-4xl mt-1">
                {m.formTitle}
              </h2>
              <p className="text-xs sm:text-sm font-light text-[#5A524A] mt-2">
                {m.formDesc}
              </p>
            </div>

            {isSubmitted ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/70 p-6 sm:p-8 text-center space-y-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#1C1A17]">
                  {lang === 'en'
                    ? 'Your VIP Priority Request is Ready'
                    : lang === 'es'
                    ? 'Su Solicitud Prioritaria VIP está Lista'
                    : 'Votre Demande Prioritaire VIP est Prête'}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A524A] max-w-md mx-auto leading-relaxed">
                  {lang === 'en'
                    ? `Thank you ${formData.name}. Your priority registration for ${formData.city} has been prepared for Solveig. You can finalize it via WhatsApp or Email below.`
                    : lang === 'es'
                    ? `Gracias ${formData.name}. Su inscripción prioritaria para ${formData.city} ha sido preparada para Solveig. Puede enviarla por WhatsApp o Email a continuación.`
                    : `Merci ${formData.name}. Votre inscription prioritaire pour ${formData.city} a été préparée pour Solveig. Vous pouvez la confirmer sur WhatsApp ou par Email ci-dessous.`}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={waLink(buildMessageText())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9E5D2A] px-6 py-3 text-xs font-semibold text-white shadow-md hover:bg-[#7e461a] w-full sm:w-auto"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>
                      {lang === 'en' ? 'Open in WhatsApp' : lang === 'es' ? 'Abrir en WhatsApp' : 'Ouvrir dans WhatsApp'}
                    </span>
                  </a>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                      `Liste d'attente Maroc 2027 - ${formData.city}`
                    )}&body=${encodeURIComponent(buildMessageText())}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1C1A17]/20 bg-white px-6 py-3 text-xs font-semibold text-[#1C1A17] hover:bg-[#FAF6EE] w-full sm:w-auto"
                  >
                    <Mail className="h-4 w-4 text-[#9E5D2A]" />
                    <span>
                      {lang === 'en' ? 'Send via Email' : lang === 'es' ? 'Enviar por Email' : 'Envoyer par Email'}
                    </span>
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#5A524A] underline pt-2"
                >
                  {lang === 'en' ? 'Modify my details' : lang === 'es' ? 'Modificar mis datos' : 'Modifier mes informations'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1C1A17] mb-1.5">
                      {m.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jean Dupont"
                      className="w-full rounded-xl border border-[#1C1A17]/15 bg-[#FAF6EE] px-4 py-3 text-sm text-[#1C1A17] focus:border-[#9E5D2A] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1C1A17] mb-1.5">
                      {m.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+33 6 00 00 00 00"
                      className="w-full rounded-xl border border-[#1C1A17]/15 bg-[#FAF6EE] px-4 py-3 text-sm text-[#1C1A17] focus:border-[#9E5D2A] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1C1A17] mb-1.5">
                    {lang === 'en' ? 'Email Address (Optional)' : lang === 'es' ? 'Correo Electrónico (Opcional)' : 'Adresse Email (Optionnel)'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@exemple.com"
                    className="w-full rounded-xl border border-[#1C1A17]/15 bg-[#FAF6EE] px-4 py-3 text-sm text-[#1C1A17] focus:border-[#9E5D2A] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1C1A17] mb-1.5">
                      {m.cityLabel}
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-xl border border-[#1C1A17]/15 bg-[#FAF6EE] px-4 py-3 text-sm text-[#1C1A17] focus:border-[#9E5D2A] focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="Marrakech">Marrakech</option>
                      <option value="Essaouira">Essaouira</option>
                      <option value="Casablanca">Casablanca</option>
                      <option value="Tanger">Tanger</option>
                      <option value="Ouarzazate">Ouarzazate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1C1A17] mb-1.5">
                      {m.timeframeLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      placeholder="Fin 2027 / 2028"
                      className="w-full rounded-xl border border-[#1C1A17]/15 bg-[#FAF6EE] px-4 py-3 text-sm text-[#1C1A17] focus:border-[#9E5D2A] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1C1A17] mb-1.5">
                    {m.notesLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={m.notesPlaceholder}
                    className="w-full rounded-xl border border-[#1C1A17]/15 bg-[#FAF6EE] px-4 py-3 text-sm text-[#1C1A17] focus:border-[#9E5D2A] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9E5D2A] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#7e461a] w-full mt-2"
                >
                  <Send className="h-4 w-4" />
                  <span>{m.submitCta}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
