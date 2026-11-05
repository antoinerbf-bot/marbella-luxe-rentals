import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Send, MapPin, Compass, Building, ShieldCheck, HeartHandshake } from 'lucide-react';
import { waLink } from '../lib/site';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { Reveal } from './ui/Reveal';
import { LanguageSelector } from './ui/LanguageSelector';
import { useLanguage } from '../lib/LanguageContext';

interface MoroccoUniversePageProps {
  onBackToCostaDelSol: () => void;
}

export const MoroccoUniversePage: React.FC<MoroccoUniversePageProps> = ({ onBackToCostaDelSol }) => {
  const { lang, t } = useLanguage();
  const m = t.moroccoPage;

  const [selectedDestination, setSelectedDestination] = useState<string>('Marrakech');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Marrakech',
    timeframe: 'Fin 2027',
    notes: '',
  });

  const destinationsList = [
    {
      name: 'Marrakech',
      tag: 'Guéliz · Hivernage · Palmeraie',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      lang === 'en'
        ? `Hello Solveig, I wish to join the VIP Priority Waitlist for the Moroccan Universe (Horizon End of 2027):
- Name: ${formData.name}
- Phone: ${formData.phone}
- Preferred destination: ${formData.city}
- Planned timeframe: ${formData.timeframe}
${formData.notes ? `- Notes: ${formData.notes}` : ''}`
        : lang === 'es'
        ? `Hola Solveig, deseo unirme a la Lista de Espera Privilegiada para el Universo Marroquí (Horizonte Fin 2027):
- Nombre: ${formData.name}
- Teléfono: ${formData.phone}
- Destino preferido: ${formData.city}
- Horizonte previsto: ${formData.timeframe}
${formData.notes ? `- Notas: ${formData.notes}` : ''}`
        : `Bonjour Solveig, je souhaite rejoindre la liste d'attente privilégiée pour l'Univers Marocain (Livraison fin 2027) :
- Nom : ${formData.name}
- Téléphone : ${formData.phone}
- Destination souhaitée : ${formData.city}
- Horizon envisagé : ${formData.timeframe}
${formData.notes ? `- Précisions : ${formData.notes}` : ''}`;

    window.open(waLink(text), '_blank');
  };

  const activeDestinationData = destinationsList.find((d) => d.name === selectedDestination) || destinationsList[0];

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#1C1A17] selection:bg-[#C9A869]/30">
      {/* Barre de navigation supérieure fixe */}
      <header className="sticky top-0 z-50 border-b border-[#1C1A17]/10 bg-[#FAF6EE]/95 backdrop-blur-md py-3.5 px-4 sm:px-8">
        <div className="container-site flex items-center justify-between gap-4">
          <button
            onClick={onBackToCostaDelSol}
            className="inline-flex items-center gap-2 rounded-full border border-[#1C1A17]/15 bg-white px-4 py-2 text-xs font-semibold text-[#1C1A17] transition hover:border-[#C9A869] hover:bg-[#F3EAD8]"
          >
            <ArrowLeft className="h-4 w-4 text-[#C9A869]" />
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

      {/* Hero Section Maroc Solaire & Chaleureux */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[#1C1A17]/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#EEDDC6]/60 via-[#FAF6EE] to-[#FAF6EE]">
        <div className="container-site max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#9E5D2A]/30 bg-[#9E5D2A]/10 px-4 py-1.5 text-xs font-semibold text-[#9E5D2A]">
            <Sparkles className="h-3.5 w-3.5 text-[#9E5D2A]" />
            <span>{m.topBadge}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium leading-[1.05] text-[#1C1A17]">
            {m.titleMain} <br />
            <span className="italic text-[#9E5D2A]">{m.titleItalic}</span>
          </h1>

          <p className="text-base sm:text-lg font-light leading-relaxed text-[#5A524A] max-w-2xl mx-auto">
            {m.description}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#liste-attente"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9E5D2A] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#7e461a] hover:shadow-lg"
            >
              <span>{m.waitlistCta}</span>
            </a>

            <button
              onClick={onBackToCostaDelSol}
              className="btn-secondary w-full sm:w-auto"
            >
              <span>{m.backCostaDelSol}</span>
            </button>
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

      {/* Sélecteur interactif des 5 destinations */}
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

          {/* Fiche détaillée de la destination sélectionnée */}
          <div className="max-w-4xl mx-auto rounded-[2.2rem] border border-[#1C1A17]/10 bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-4">
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

              <div className="lg:col-span-5 bg-[#FAF6EE] rounded-2xl p-6 border border-[#1C1A17]/10 text-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#9E5D2A] shadow-sm">
                  <Compass className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#5A524A]">
                    {m.deliveryEstimate}
                  </p>
                  <p className="font-serif text-2xl font-medium text-[#1C1A17] mt-0.5">Fin 2027</p>
                </div>
                <p className="text-xs text-[#5A524A] leading-relaxed">
                  Travaux en cours de réalisation. Réservations en avant-première réservées aux membres de la liste d’attente.
                </p>
                <a
                  href="#liste-attente"
                  onClick={() => setFormData((prev) => ({ ...prev, city: activeDestinationData.name }))}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9E5D2A] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#7e461a] w-full"
                >
                  <span>Rejoindre pour {activeDestinationData.name}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire VIP Liste d'attente */}
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

            <form onSubmit={handleSubmit} className="space-y-4">
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
          </div>
        </div>
      </section>
    </div>
  );
};
