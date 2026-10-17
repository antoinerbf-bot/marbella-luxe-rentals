import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, MessageCircle, Phone, Calendar, Users, MapPin, Sparkles, Home, Building2, Check, Star, ShieldCheck } from 'lucide-react';

interface MoroccoUniversePageProps {
  onBackToCostaDelSol: () => void;
}

interface MoroccanProperty {
  id: string;
  name: string;
  category: 'apartment' | 'villa';
  city: string;
  tagline: string;
  description: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  features: string[];
  image: string;
  priceIndicator: string;
}

const moroccanProperties: MoroccanProperty[] = [
  // 5 APPARTEMENTS
  {
    id: 'apt-majorelle',
    name: 'L’Appartement Majorelle',
    category: 'apartment',
    city: 'Marrakech · Guéliz',
    tagline: 'Terrasse privée & lumière ocre au cœur de Guéliz',
    description: 'À deux pas des jardins Majorelle, un appartement contemporain aux touches marocaines subtiles, bénéficiant d’une terrasse baignée de soleil et d’un calme absolu.',
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    features: ['Terrasse arborée', 'Climatisation réversible', 'Piscine résidence', 'Wi-Fi haut débit', 'Ascenseur'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=85',
    priceIndicator: 'À partir de 180 € / nuit',
  },
  {
    id: 'apt-hivernage',
    name: 'Le Penthouse Hivernage',
    category: 'apartment',
    city: 'Marrakech · Hivernage',
    tagline: 'Rooftop panoramique avec vue sur l’Atlas',
    description: 'Perché au dernier étage dans le quartier prisé de l’Hivernage, ce penthouse d’exception offre un jacuzzi privé en terrasse et un panorama saisissant sur les monts enneigés de l’Atlas.',
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    features: ['Jacuzzi privé sur le toit', 'Vue Atlas 360°', 'Service conciergerie 24/7', 'Parking sécurisé', 'Décoration zellige chic'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85',
    priceIndicator: 'À partir de 280 € / nuit',
  },
  {
    id: 'apt-corniche',
    name: 'Le Belvédère de la Corniche',
    category: 'apartment',
    city: 'Casablanca · Corniche',
    tagline: 'Surplombant l’océan Atlantique à perte de vue',
    description: 'Une adresse prestigieuse face à la mer à Casablanca. Grands volumes baignés de lumière, design épuré en marbre et parquet, idéal pour séjours d’affaires ou de villégiature.',
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    features: ['Vue mer panoramique', 'Terrasse plein sud', 'Cuisine équipée Miele', 'Gouvernante sur demande', 'Sécurisé 24/7'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=85',
    priceIndicator: 'À partir de 220 € / nuit',
  },
  {
    id: 'apt-essaouira',
    name: 'L’Atelier Océanique',
    category: 'apartment',
    city: 'Essaouira · Médina',
    tagline: 'Face aux remparts et à la brise marine',
    description: 'Au cœur de la médina blanche d’Essaouira, un duplex d’artiste aux plafonds en thuya, cheminée en pierre et salon ouvrant sur le bleu infini de l’Atlantique.',
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    features: ['Face aux remparts', 'Cheminée en hiver', 'Baignoire en tadelakt', 'Cuisinière locale sur demande', 'Charme historique'],
    image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&w=1000&q=85',
    priceIndicator: 'À partir de 160 € / nuit',
  },
  {
    id: 'apt-tanger',
    name: 'La Suite Tanger Baie',
    category: 'apartment',
    city: 'Tanger · Baie de Tanger',
    tagline: 'Élégance face au détroit de Gibraltar',
    description: 'Surplombant la marina et la baie mythique de Tanger, cet appartement spacieux marie l’esprit cosmopolite de la ville à une décoration raffinée aux tons lin et cuivre.',
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    features: ['Vue détroit de Gibraltar', 'Balcon filant', 'Accès direct marina', 'Climatisation', 'Prestations hôtelières'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=85',
    priceIndicator: 'À partir de 190 € / nuit',
  },

  // 5 VILLAS & RIADS
  {
    id: 'villa-palmeraie',
    name: 'Le Riad Palace de la Palmeraie',
    category: 'villa',
    city: 'Marrakech · Palmeraie',
    tagline: 'Parc d’un hectare, piscine chauffée & majordome dédié',
    description: 'Un palais privatif niché au cœur de la Palmeraie de Marrakech. Six suites magistrales, cour arborée de palmiers centenaires, hammam traditionnel privé et personnel complet à demeure.',
    guests: 14,
    bedrooms: 6,
    bathrooms: 6,
    features: ['Personnel complet (Chef, Majordome)', 'Piscine chauffée 20m', 'Hammam & Spa privé', 'Parc clos 1 hectare', 'Chauffeur VIP'],
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1000&q=85',
    priceIndicator: 'À partir de 950 € / nuit',
  },
  {
    id: 'villa-beldi',
    name: 'La Villa Beldi des Oliviers',
    category: 'villa',
    city: 'Marrakech · Route de l’Ourika',
    tagline: 'Charme berbère chic & tranquillité absolue',
    description: 'Une somptueuse villa en pisé et tadelakt ocre, entourée d’un champ d’oliviers face aux cimes de l’Atlas. Cuisinière émérite pour des repas marocains authentiques.',
    guests: 10,
    bedrooms: 5,
    bathrooms: 5,
    features: ['Cuisinière marocaine dédiée', 'Piscine privée au sel', 'Terrasse ombragée sous pergola', 'Terrain de pétanque', 'Brasero d’extérieur'],
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1000&q=85',
    priceIndicator: 'À partir de 720 € / nuit',
  },
  {
    id: 'villa-atlas',
    name: 'Le Domaine Atlas View',
    category: 'villa',
    city: 'Marrakech · Amizmiz',
    tagline: 'Piscine à débordement miroir face à l’Atlas',
    description: 'Une propriété architecturale spectaculaire conjuguant baies vitrées monumentales et savoir-faire artisanal marocain. Vue panoramique à 360° sur toute la chaîne de l’Atlas.',
    guests: 16,
    bedrooms: 7,
    bathrooms: 7,
    features: ['Piscine à débordement 25m', 'Héliport privé', 'Court de tennis', 'Chef privé et brigade de service', 'Ciné-théâtre privé'],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85',
    priceIndicator: 'À partir de 1 400 € / nuit',
  },
  {
    id: 'villa-essaouira',
    name: 'Le Riad Alizés & Patio d’Or',
    category: 'villa',
    city: 'Essaouira · Médina Historique',
    tagline: 'Patio traditionnel en zellige & solarium privé',
    description: 'Riad historique du XVIIIe siècle entièrement restauré selon les règles de l’art. Fontaine chantante, patio intérieur luxuriant et immense terrasse rooftop abritée du vent.',
    guests: 8,
    bedrooms: 4,
    bathrooms: 4,
    features: ['Privatisation exclusive', 'Petits-déjeuners gourmands inclus', 'Fontaine centrale en zellige', 'Hammam privé', 'À 5 min de la plage'],
    image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1000&q=85',
    priceIndicator: 'À partir de 450 € / nuit',
  },
  {
    id: 'villa-palais-sables',
    name: 'Le Palais des Sables',
    category: 'villa',
    city: 'Ouarzazate / Palmeraie de Skoura',
    tagline: 'Une forteresse de sérénité aux portes du désert',
    description: 'Kasbah de prestige privative au cœur de l’oasis de Skoura. Matériaux nobles, jardins de grenadiers et d’oliviers, piscine entourée de palmiers et dîners sous les étoiles.',
    guests: 12,
    bedrooms: 6,
    bathrooms: 6,
    features: ['Oasis privée', 'Piscine lagon', 'Dîners aux chandelles sous les étoiles', 'Excursions désert en 4x4 privé', 'Service majordome'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85',
    priceIndicator: 'À partir de 850 € / nuit',
  },
];

export const MoroccoUniversePage: React.FC<MoroccoUniversePageProps> = ({ onBackToCostaDelSol }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'apartment' | 'villa'>('all');
  const [selectedProperty, setSelectedProperty] = useState<MoroccanProperty | null>(null);

  // Booking Form State
  const [formData, setFormData] = useState({
    destination: 'Marrakech',
    propertyType: 'villa',
    arrival: '',
    departure: '',
    guests: 2,
    chefService: true,
    notes: '',
  });

  const filteredProperties = moroccanProperties.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour Solveig, je souhaite réserver un séjour dans l'Univers Marocain :
- Destination : ${formData.destination}
- Type : ${formData.propertyType}
- Arrivée : ${formData.arrival || 'À définir'}
- Départ : ${formData.departure || 'À définir'}
- Nombre de voyageurs : ${formData.guests}
- Service Cuisinière / Chef : ${formData.chefService ? 'Oui' : 'Non'}
${formData.notes ? `- Précisions : ${formData.notes}` : ''}`;

    window.open(`https://wa.me/34623626724?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleBookSpecificProperty = (property: MoroccanProperty) => {
    const text = `Bonjour Solveig, je souhaite réserver la propriété marocaine suivante :
« ${property.name} » (${property.city})
- Capacité : jusqu'à ${property.guests} personnes
Merci de me confirmer les disponibilités et le tarif pour mes dates.`;

    window.open(`https://wa.me/34623626724?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#1f130e] text-[#fff8ed] selection:bg-[#e5a872]/40 selection:text-white overflow-x-hidden">
      {/* Top Banner & Switcher Back to Costa del Sol */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#160d09]/95 backdrop-blur-md border-b border-[#e5a872]/25 py-3.5 px-4 sm:px-8">
        <div className="max-w-[1520px] mx-auto flex items-center justify-between">
          {/* Back button to Costa del Sol with Palm Tree */}
          <button
            onClick={onBackToCostaDelSol}
            className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#e5a872]/60 bg-[#2b1710] hover:bg-[#3d2015] px-3 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-sm font-semibold tracking-wider text-[#ffd8b3] transition-all shadow-md hover:scale-105 shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-1 shrink-0" />
            <span className="hidden sm:inline">🌴 Univers Costa del Sol (Marbella & Mijas)</span>
            <span className="sm:hidden">🌴 Costa del Sol</span>
          </button>

          {/* Morocco Brand title with Camel icon */}
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">🐪</span>
            <span className="font-serif text-lg sm:text-2xl font-semibold text-[#f8debb] tracking-wide hidden min-[500px]:inline">
              Solveig’s · Univers Marocain
            </span>
          </div>

          {/* Quick WhatsApp */}
          <a
            href="https://wa.me/34623626724?text=Bonjour%20Solveig,%20je%20souhaite%20des%20renseignements%20sur%20les%20s%C3%A9jours%20au%20Maroc."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] text-black text-xs font-bold px-3.5 py-1.5 sm:px-4 sm:py-2 hover:scale-105 transition-all shadow-md"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp Concierge</span>
          </a>
        </div>
      </header>

      {/* Hero Section: Warm, Atmospheric & Traditional Palace Luxury */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-5 sm:px-8 overflow-hidden">
        {/* Background Image: Authentic Moroccan Palace Riad with Zellige & Central Basin */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1920&q=85')`,
          }}
        />
        {/* Warm Terracotta and Palace Night Shading */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b0d08]/80 via-[#2d160e]/55 to-[#1f130e] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(229,168,114,0.18),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center mt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e5a872]/45 bg-[#2b1710]/80 text-[#fbe8b5] text-[11px] font-bold tracking-[0.25em] uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#e5a872]" />
            Séjours & Villas de Prestige au Maroc
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.92] text-white">
            Le Maroc,<br />
            <span className="italic text-[#f4cb99]">comme chez vous.</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-white/90 font-light leading-relaxed">
            Appartements de caractère et riads d’exception pour explorer le Maroc à votre rythme.
            Lumière ocre, douceur des patios andalous et service de conciergerie privée sur-mesure.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#catalogue"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d38b4d] to-[#f4cb99] text-black font-semibold text-xs sm:text-sm px-7 py-4 shadow-xl shadow-[#d38b4d]/25 hover:scale-105 transition-all"
            >
              <span>Découvrir nos 10 Adresses</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#reservation"
              className="inline-flex items-center gap-2 rounded-full border border-[#f4cb99]/60 bg-[#2b1710]/70 hover:bg-[#3d2015] text-[#fff8ed] text-xs sm:text-sm font-semibold px-7 py-4 backdrop-blur-md transition-all"
            >
              <Calendar className="w-4 h-4 text-[#f4cb99]" />
              <span>Réserver mon Séjour</span>
            </a>
          </div>

          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.22em] text-[#f4cb99]/80">
            Marrakech · Essaouira · Casablanca · Tanger · Ouarzazate
          </p>
        </div>
      </section>

      {/* Property Showcase Section: 5 Apartments & 5 Villas */}
      <section id="catalogue" className="relative px-5 py-20 sm:px-8 lg:px-12 max-w-[1520px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#e5a872]/20 pb-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e5a872]">
              Collection Confidentielle
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-medium mt-1">
              Nos Appartements & Villas de Prestige
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mt-4 md:mt-0 p-1.5 rounded-full bg-[#2a1710] border border-[#e5a872]/30">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#d38b4d] to-[#f4cb99] text-black shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Tout voir (10)
            </button>
            <button
              onClick={() => setActiveTab('apartment')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === 'apartment'
                  ? 'bg-gradient-to-r from-[#d38b4d] to-[#f4cb99] text-black shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>5 Appartements</span>
            </button>
            <button
              onClick={() => setActiveTab('villa')}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === 'villa'
                  ? 'bg-gradient-to-r from-[#d38b4d] to-[#f4cb99] text-black shadow-md'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>5 Villas & Riads</span>
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="group rounded-3xl overflow-hidden bg-[#261510] border border-[#e5a872]/25 shadow-xl hover:border-[#f4cb99]/70 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Banner with Tag & City */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#261510] via-transparent to-black/30" />
                
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#e5a872]/40 text-[#fbe8b5] text-[10px] font-bold uppercase tracking-wider">
                  {prop.category === 'apartment' ? 'Appartement de Caractère' : 'Villa / Riad Privatif'}
                </span>

                <span className="absolute bottom-3 left-4 flex items-center gap-1 text-xs font-bold text-[#f4cb99] drop-shadow">
                  <MapPin className="w-3.5 h-3.5" />
                  {prop.city}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#f4cb99] transition-colors">
                    {prop.name}
                  </h3>
                  <p className="text-xs text-[#f4cb99]/90 italic mt-0.5 mb-3 font-serif">
                    « {prop.tagline} »
                  </p>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light mb-4">
                    {prop.description}
                  </p>

                  {/* Specs & Capacity */}
                  <div className="flex items-center gap-4 py-3 border-y border-white/10 text-xs text-white/75 mb-4">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Users className="w-3.5 h-3.5 text-[#e5a872]" />
                      Jusqu'à {prop.guests} pers.
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Home className="w-3.5 h-3.5 text-[#e5a872]" />
                      {prop.bedrooms} ch. · {prop.bathrooms} sdb
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-1.5 mb-6">
                    {prop.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-white/85">
                        <Check className="w-3.5 h-3.5 text-[#d38b4d] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#f4cb99]">
                    {prop.priceIndicator}
                  </span>

                  <button
                    onClick={() => handleBookSpecificProperty(prop)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#d38b4d] to-[#f4cb99] text-black text-xs font-bold px-4 py-2.5 hover:scale-105 active:scale-95 transition-all shadow-md"
                  >
                    <span>Réserver ce bien</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrated Moroccan Booking Engine */}
      <section id="reservation" className="relative px-5 py-24 sm:px-8 lg:px-12 bg-[#170c08] border-t border-[#e5a872]/20">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#e5a872] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#d38b4d]" />
              Organisation Sur-Mesure
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-white leading-tight">
              Vos dates. Vos envies. La bonne adresse.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed font-light">
              Indiquez-nous votre destination préférée, vos dates et le nombre de convives. Solveig’s Prestige Service sélectionne pour vous la demeure idéale et confirme les disponibilités sous 2 heures.
            </p>

            <div className="mt-8 space-y-3 text-xs sm:text-sm text-white/85">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#e5a872]" />
                <span>Accueil privatif à l'aéroport avec chauffeur VIP</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#e5a872]" />
                <span>Personnel de maison & cuisinière marocaine sur demande</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-[#e5a872]" />
                <span>Tarifs transparents négociés en direct sans commission cachée</span>
              </div>
            </div>
          </div>

          {/* Booking Form Card */}
          <div className="rounded-3xl bg-[#25140e] border border-[#e5a872]/40 p-7 sm:p-9 shadow-2xl">
            <h3 className="font-serif text-2xl text-white font-semibold mb-2">
              Demande de Séjour au Maroc
            </h3>
            <p className="text-xs text-white/70 mb-6">
              Remplissez ce formulaire pour recevoir une proposition personnalisée.
            </p>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#f4cb99] mb-1">
                    Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full rounded-xl bg-[#180d09] border border-white/20 px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#f4cb99]"
                  >
                    <option value="Marrakech">Marrakech (Médina / Palmeraie)</option>
                    <option value="Essaouira">Essaouira (Médina / Océan)</option>
                    <option value="Casablanca">Casablanca (Corniche)</option>
                    <option value="Tanger">Tanger (Baie & Détroit)</option>
                    <option value="Ouarzazate">Ouarzazate / Désert</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#f4cb99] mb-1">
                    Type de Logement
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full rounded-xl bg-[#180d09] border border-white/20 px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#f4cb99]"
                  >
                    <option value="villa">Villa ou Riad Privatisé</option>
                    <option value="apartment">Appartement de Caractère</option>
                    <option value="flexible">À définir selon disponibilités</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#f4cb99] mb-1">
                    Date d’Arrivée
                  </label>
                  <input
                    type="date"
                    value={formData.arrival}
                    onChange={(e) => setFormData({ ...formData, arrival: e.target.value })}
                    className="w-full rounded-xl bg-[#180d09] border border-white/20 px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#f4cb99]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#f4cb99] mb-1">
                    Date de Départ
                  </label>
                  <input
                    type="date"
                    value={formData.departure}
                    onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
                    className="w-full rounded-xl bg-[#180d09] border border-white/20 px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#f4cb99]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#f4cb99] mb-1">
                    Nombre de Voyageurs
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
                    className="w-full rounded-xl bg-[#180d09] border border-white/20 px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#f4cb99]"
                  />
                </div>

                <div className="flex items-center pt-6">
                  <label className="flex items-center gap-2.5 text-xs text-white/90 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.chefService}
                      onChange={(e) => setFormData({ ...formData, chefService: e.target.checked })}
                      className="w-4 h-4 rounded text-[#d38b4d] focus:ring-0 bg-[#180d09]"
                    />
                    <span>Service Cuisinière / Chef privé</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#f4cb99] mb-1">
                  Précisions / Demandes Particulières
                </label>
                <textarea
                  rows={2}
                  placeholder="Piscine chauffée, berceau bébé, transferts..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-xl bg-[#180d09] border border-white/20 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#f4cb99]"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d38b4d] to-[#f4cb99] text-black font-semibold text-sm py-4 px-6 shadow-xl shadow-[#d38b4d]/25 hover:scale-[1.01] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Envoyer ma Demande sur WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Maroc */}
      <footer className="bg-[#120a06] border-t border-white/10 py-12 px-5 sm:px-8 text-center text-xs text-white/60">
        <p className="font-serif text-xl text-white font-medium mb-2">Solveig’s Prestige Service · Univers Marocain</p>
        <p className="max-w-md mx-auto mb-6 text-white/70">
          Séjours d’exception, appartements de caractère et riads privatifs au Maroc.
        </p>
        <button
          onClick={onBackToCostaDelSol}
          className="inline-flex items-center gap-1.5 text-xs text-[#f4cb99] hover:underline uppercase tracking-widest font-bold"
        >
          <span>← Revenir à l'Univers Costa del Sol (Marbella & Mijas)</span>
        </button>
        <p className="mt-8 text-[10px] text-white/40">© 2026 Solveig’s Prestige Service. Tous droits réservés.</p>
      </footer>
    </div>
  );
};
