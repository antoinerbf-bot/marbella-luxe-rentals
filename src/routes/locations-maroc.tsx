import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Building2, House, MessageCircle, Sparkles } from "lucide-react";
import type { FormEvent } from "react";

import { MoroccoStayLayout } from "@/components/MoroccoStayLayout";
import { useSolveigLocale } from "@/lib/locale";
import { Button } from "@/components/ui/button";

const images = {
  hero: "https://upload.wikimedia.org/wikipedia/commons/4/47/Marrakech_Riad_%2852189355675%29.jpg",
  marrakech: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Laksiba_Courtyard.jpg",
  riadRoom: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Riad_Maroc_032.JPG",
  riadCourtyard: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Riad_Maroc_034.JPG",
  essaouira:
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Blue_Fishing_Boat_and_Medina_Walls%2C_Essaouira%2C_Morocco.jpg",
};

export const Route = createFileRoute("/locations-maroc")({
  head: () => ({
    meta: [
      {
        title: "Maisons du Maroc — Appartements & villas de charme",
      },
      {
        name: "description",
        content:
          "Découvrez des idées de séjours en appartements et villas de charme au Maroc. Partagez vos dates et vos envies pour recevoir une sélection adaptée.",
      },
      {
        property: "og:title",
        content: "Maisons du Maroc — Appartements & villas",
      },
      {
        property: "og:description",
        content:
          "Patios de Marrakech, lumière d’Essaouira et maisons de vacances sélectionnées selon votre façon de voyager.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MoroccoStaysPage,
});

const stayVisuals = [
  { icon: Building2, key: "apartment" },
  { icon: House, key: "villa" },
];

const destinationVisuals = [
  {
    key: "marrakech",
    image: images.marrakech,
    credit: "Maverickhawkesley · CC BY-SA 3.0",
    creditUrl: "https://commons.wikimedia.org/wiki/File:Laksiba_Courtyard.jpg",
  },
  {
    key: "essaouira",
    image: images.essaouira,
    credit: "CastlesCatalog · CC BY-SA 4.0",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:Blue_Fishing_Boat_and_Medina_Walls,_Essaouira,_Morocco.jpg",
  },
] as const;

const translations = {
  fr: {
    heroEyebrow: "Séjours de charme · Maroc",
    heroTitle: (
      <>
        Le Maroc,
        <br />
        <em className="font-normal text-[#f0c989]">comme chez vous.</em>
      </>
    ),
    heroDescription:
      "Appartements de charme et villas accueillantes pour découvrir le Maroc à votre rythme, entre art de vivre, lumière chaude et douceur des maisons privées.",
    imagine: "Imaginer mon séjour",
    explore: "Explorer les adresses",
    destinationsLine: "Marrakech · Essaouira · Maroc",
    photoLabel: "Photo",
    spiritEyebrow: "L’adresse donne le ton",
    spiritTitle: "Une maison à soi, le temps d’un voyage.",
    spiritDescription:
      "Un appartement bien choisi pour explorer, une villa où se retrouver : nous cherchons une adresse en accord avec vos dates, votre groupe et l’atmosphère que vous imaginez.",
    apartmentTitle: "Appartements de caractère",
    apartmentText:
      "Une adresse à taille humaine, à choisir selon vos dates, votre quartier préféré et la façon dont vous aimez découvrir une ville.",
    villaTitle: "Villas pour se retrouver",
    villaText:
      "De l’espace pour partager les vacances en famille ou entre amis, avec les équipements et le niveau d’intimité dont vous avez besoin.",
    inspirationEyebrow: "Deux inspirations, un même art de vivre",
    inspirationTitle: "Choisir son décor marocain.",
    atmosphereEyebrow: "Les maisons, dans le détail",
    atmosphereTitle: "Patios ombragés, matières vivantes, lumière douce.",
    atmosphereIntro:
      "Quelques images d’inspiration pour imaginer l’atmosphère d’un riad. Elles ne correspondent pas à des logements proposés à la réservation.",
    roomCaption: "Une chambre de riad à Marrakech",
    roomAlt: "Chambre du Riad Monceau à Marrakech",
    courtyardCaption: "Un patio au cœur d’un riad",
    courtyardAlt: "Patio intérieur du Riad Monceau à Marrakech",
    marrakech: {
      name: "Marrakech",
      mood: "Patios, jardins et lumière ocre",
      text: "Pour vivre la ville à votre rythme et retrouver le calme d’une adresse privée après vos découvertes.",
      alt: "Cour intérieure d’un riad traditionnel à Marrakech",
    },
    essaouira: {
      name: "Essaouira",
      mood: "Médina blanche et air atlantique",
      text: "Une parenthèse au bord de l’océan, entre ruelles, remparts et journées qui s’étirent.",
      alt: "Bateau bleu et remparts d’Essaouira au bord de l’Atlantique",
    },
    bookingEyebrow: "Un séjour qui vous ressemble",
    bookingTitle: "Vos dates. Vos envies. La bonne adresse.",
    bookingDescription:
      "Décrivez le nombre de voyageurs, le type de maison et l’ambiance recherchée. Une sélection adaptée vous sera proposée selon les disponibilités à confirmer.",
    destinationLabel: "Destination",
    otherCity: "Autre ville au Maroc",
    propertyLabel: "Type de logement",
    apartment: "Appartement",
    villa: "Villa",
    chooseTogether: "À définir ensemble",
    arrival: "Arrivée",
    departure: "Départ",
    guests: "Voyageurs",
    sendWhatsApp: "Envoyer ma demande sur WhatsApp",
    prepareEmail: "Préparer un email",
    emailSubject: "Demande de séjour au Maroc",
    messageGreeting: "Bonjour, je souhaite organiser un séjour au Maroc.",
    departureValidation: "La date de départ doit être après la date d’arrivée.",
    arrivalValidation: "La date d’arrivée ne peut pas être passée.",
    availabilityDisclaimer:
      "Chaque adresse, son tarif et ses disponibilités sont confirmés avant toute réservation.",
  },
  en: {
    heroEyebrow: "Memorable stays · Morocco",
    heroTitle: (
      <>
        Morocco,
        <br />
        <em className="font-normal text-[#f0c989]">feel at home.</em>
      </>
    ),
    heroDescription:
      "Characterful apartments and welcoming villas for discovering Morocco at your own pace, surrounded by warm light and the ease of private living.",
    imagine: "Plan my stay",
    explore: "Explore destinations",
    destinationsLine: "Marrakech · Essaouira · Morocco",
    photoLabel: "Photo",
    spiritEyebrow: "The address sets the tone",
    spiritTitle: "A home of your own, for the length of a journey.",
    spiritDescription:
      "A thoughtfully chosen apartment for exploring, or a villa to gather in: we look for an address that fits your dates, your group and the atmosphere you imagine.",
    apartmentTitle: "Characterful apartments",
    apartmentText:
      "A personal, well-situated address chosen around your dates, preferred neighbourhood and way of discovering a city.",
    villaTitle: "Villas made for gathering",
    villaText:
      "Space to share a holiday with family or friends, with the amenities and privacy you need.",
    inspirationEyebrow: "Two inspirations, one way of life",
    inspirationTitle: "Choose your Moroccan setting.",
    atmosphereEyebrow: "Homes, in detail",
    atmosphereTitle: "Shaded courtyards, tactile materials, soft light.",
    atmosphereIntro:
      "A few images to inspire the atmosphere of a riad. They do not depict accommodation currently offered for booking.",
    roomCaption: "A riad bedroom in Marrakech",
    roomAlt: "Bedroom at Riad Monceau in Marrakech",
    courtyardCaption: "A courtyard at the heart of a riad",
    courtyardAlt: "Inner courtyard at Riad Monceau in Marrakech",
    marrakech: {
      name: "Marrakech",
      mood: "Courtyards, gardens and ochre light",
      text: "Experience the city at your own pace and return to the calm of a private address after a day of discoveries.",
      alt: "Traditional riad courtyard in Marrakech",
    },
    essaouira: {
      name: "Essaouira",
      mood: "White medina and Atlantic air",
      text: "A pause by the ocean, among winding lanes, ramparts and long, unhurried days.",
      alt: "Blue fishing boat and Essaouira’s Atlantic ramparts",
    },
    bookingEyebrow: "A stay that feels like yours",
    bookingTitle: "Your dates. Your wishes. The right address.",
    bookingDescription:
      "Tell us how many guests, what kind of home and the atmosphere you have in mind. We’ll suggest a suitable selection, subject to availability confirmation.",
    destinationLabel: "Destination",
    otherCity: "Another city in Morocco",
    propertyLabel: "Property type",
    apartment: "Apartment",
    villa: "Villa",
    chooseTogether: "To be decided together",
    arrival: "Arrival",
    departure: "Departure",
    guests: "Guests",
    sendWhatsApp: "Send my enquiry on WhatsApp",
    prepareEmail: "Prepare an email",
    emailSubject: "Morocco stay enquiry",
    messageGreeting: "Hello, I would like to plan a stay in Morocco.",
    departureValidation: "The departure date must be after the arrival date.",
    arrivalValidation: "The arrival date cannot be in the past.",
    availabilityDisclaimer:
      "Each address, its rate and availability are confirmed before any booking.",
  },
  es: {
    heroEyebrow: "Estancias con encanto · Marruecos",
    heroTitle: (
      <>
        Marruecos,
        <br />
        <em className="font-normal text-[#f0c989]">como en casa.</em>
      </>
    ),
    heroDescription:
      "Apartamentos con carácter y villas acogedoras para descubrir Marruecos a su ritmo, entre luz cálida, arte de vivir y la intimidad de una casa.",
    imagine: "Imaginar mi estancia",
    explore: "Explorar destinos",
    destinationsLine: "Marrakech · Esauira · Marruecos",
    photoLabel: "Foto",
    spiritEyebrow: "La dirección marca el tono",
    spiritTitle: "Una casa propia, durante el viaje.",
    spiritDescription:
      "Un apartamento bien elegido para explorar o una villa para reunirse: buscamos una dirección acorde con sus fechas, su grupo y el ambiente que imagina.",
    apartmentTitle: "Apartamentos con carácter",
    apartmentText:
      "Una dirección acogedora, elegida según sus fechas, el barrio que prefiere y su manera de descubrir la ciudad.",
    villaTitle: "Villas para compartir",
    villaText:
      "Espacio para disfrutar de las vacaciones en familia o con amigos, con el equipamiento y la intimidad que necesita.",
    inspirationEyebrow: "Dos inspiraciones, una misma forma de vivir",
    inspirationTitle: "Elija su paisaje marroquí.",
    atmosphereEyebrow: "Las casas, en detalle",
    atmosphereTitle: "Patios en sombra, materiales con textura y luz suave.",
    atmosphereIntro:
      "Algunas imágenes para imaginar el ambiente de un riad. No corresponden a alojamientos disponibles para reservar.",
    roomCaption: "Una habitación de riad en Marrakech",
    roomAlt: "Habitación del Riad Monceau en Marrakech",
    courtyardCaption: "Un patio en el corazón de un riad",
    courtyardAlt: "Patio interior del Riad Monceau en Marrakech",
    marrakech: {
      name: "Marrakech",
      mood: "Patios, jardines y luz ocre",
      text: "Viva la ciudad a su ritmo y recupere la calma de una dirección privada tras sus descubrimientos.",
      alt: "Patio interior de un riad tradicional en Marrakech",
    },
    essaouira: {
      name: "Esauira",
      mood: "Medina blanca y aire atlántico",
      text: "Una pausa junto al océano, entre callejuelas, murallas y días sin prisa.",
      alt: "Barca azul y murallas de Esauira junto al Atlántico",
    },
    bookingEyebrow: "Una estancia a su medida",
    bookingTitle: "Sus fechas. Sus deseos. La dirección adecuada.",
    bookingDescription:
      "Cuéntenos cuántas personas viajan, qué tipo de casa busca y qué ambiente desea. Le propondremos una selección según disponibilidad, pendiente de confirmar.",
    destinationLabel: "Destino",
    otherCity: "Otra ciudad de Marruecos",
    propertyLabel: "Tipo de alojamiento",
    apartment: "Apartamento",
    villa: "Villa",
    chooseTogether: "Lo decidimos juntos",
    arrival: "Llegada",
    departure: "Salida",
    guests: "Viajeros",
    sendWhatsApp: "Enviar mi solicitud por WhatsApp",
    prepareEmail: "Preparar un correo",
    emailSubject: "Consulta de estancia en Marruecos",
    messageGreeting: "Hola, me gustaría organizar una estancia en Marruecos.",
    departureValidation: "La fecha de salida debe ser posterior a la de llegada.",
    arrivalValidation: "La fecha de llegada no puede ser anterior a hoy.",
    availabilityDisclaimer:
      "Cada dirección, su precio y su disponibilidad se confirman antes de reservar.",
  },
  ar: {
    heroEyebrow: "إقامات مميزة · المغرب",
    heroTitle: (
      <>
        المغرب،
        <br />
        <em className="font-normal text-[#f0c989]">بيتكم الثاني.</em>
      </>
    ),
    heroDescription:
      "شقق بطابع أصيل وفلل ترحّب بكم لاكتشاف المغرب على مهل، وسط الضوء الدافئ وراحة الإقامة الخاصة.",
    imagine: "خطط لإقامتك",
    explore: "اكتشف الوجهات",
    destinationsLine: "مراكش · الصويرة · المغرب",
    photoLabel: "الصورة",
    spiritEyebrow: "المكان يصنع الأجواء",
    spiritTitle: "بيت لك، طوال رحلتك.",
    spiritDescription:
      "شقة مختارة لاستكشاف المدينة أو فيلا تجمع الأحبة؛ نبحث عن مكان يناسب مواعيدك ومجموعتك والأجواء التي تتخيلها.",
    apartmentTitle: "شقق بطابع أصيل",
    apartmentText: "إقامة حميمة نختارها بحسب مواعيدك والحي الذي تفضله وطريقتك في اكتشاف المدينة.",
    villaTitle: "فلل للّقاء والتشارك",
    villaText: "مساحة لقضاء العطلة مع العائلة أو الأصدقاء، مع التجهيزات والخصوصية التي تحتاجها.",
    inspirationEyebrow: "وجهتان وإحساس واحد",
    inspirationTitle: "اختر أجواءك المغربية.",
    atmosphereEyebrow: "تفاصيل البيوت",
    atmosphereTitle: "باحات ظليلة ومواد أصيلة وضوء هادئ.",
    atmosphereIntro: "صور للإلهام وتخيّل أجواء الرياض. لا تمثل أماكن إقامة معروضة للحجز حالياً.",
    roomCaption: "غرفة في رياض بمراكش",
    roomAlt: "غرفة في رياض مونصو في مراكش",
    courtyardCaption: "باحة في قلب رياض",
    courtyardAlt: "باحة رياض مونصو الداخلية في مراكش",
    marrakech: {
      name: "مراكش",
      mood: "باحات وحدائق وضوء بلون الطين",
      text: "اكتشف المدينة على إيقاعك، ثم عد إلى هدوء إقامتك الخاصة بعد يوم من التجوال.",
      alt: "باحة رياض تقليدي في مراكش",
    },
    essaouira: {
      name: "الصويرة",
      mood: "مدينة بيضاء ونفَس أطلسي",
      text: "استراحة قرب المحيط بين الأزقة والأسوار وأيام تمضي بلا استعجال.",
      alt: "قارب أزرق وأسوار الصويرة على المحيط الأطلسي",
    },
    bookingEyebrow: "إقامة على ذوقك",
    bookingTitle: "مواعيدك. رغباتك. المكان المناسب.",
    bookingDescription:
      "أخبرنا بعدد المسافرين ونوع الإقامة والأجواء التي تبحث عنها. سنقترح أماكن مناسبة بعد التأكد من التوفر.",
    destinationLabel: "الوجهة",
    otherCity: "مدينة أخرى في المغرب",
    propertyLabel: "نوع الإقامة",
    apartment: "شقة",
    villa: "فيلا",
    chooseTogether: "نختارها معاً",
    arrival: "تاريخ الوصول",
    departure: "تاريخ المغادرة",
    guests: "عدد المسافرين",
    sendWhatsApp: "أرسل طلبك عبر واتساب",
    prepareEmail: "جهّز رسالة بريد إلكتروني",
    emailSubject: "استفسار عن إقامة في المغرب",
    messageGreeting: "مرحباً، أود تنظيم إقامة في المغرب.",
    departureValidation: "يجب أن يكون تاريخ المغادرة بعد تاريخ الوصول.",
    arrivalValidation: "لا يمكن أن يكون تاريخ الوصول في الماضي.",
    availabilityDisclaimer: "يتم تأكيد كل عنوان وسعر وتوفر قبل إتمام أي حجز.",
  },
} as const;

function MoroccoStaysPage() {
  const locale = useSolveigLocale();
  const text = translations[locale];
  const localToday = new Date();
  localToday.setMinutes(localToday.getMinutes() - localToday.getTimezoneOffset());
  const minDate = localToday.toISOString().slice(0, 10);

  const submitStayEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const arrivalInput = form.get("arrival");
    const departureInput = form.get("departure");
    const departureControl = event.currentTarget.elements.namedItem("departure");
    const arrivalControl = event.currentTarget.elements.namedItem("arrival");
    if (
      departureControl instanceof HTMLInputElement &&
      arrivalControl instanceof HTMLInputElement
    ) {
      departureControl.setCustomValidity("");
      arrivalControl.setCustomValidity("");
      if (typeof arrivalInput === "string" && arrivalInput < minDate) {
        arrivalControl.setCustomValidity(text.arrivalValidation);
        arrivalControl.reportValidity();
        return;
      }
      if (
        typeof arrivalInput === "string" &&
        typeof departureInput === "string" &&
        departureInput <= arrivalInput
      ) {
        departureControl.setCustomValidity(text.departureValidation);
        departureControl.reportValidity();
        return;
      }
    }
    const values = {
      destination:
        form.get("destination") === "Essaouira"
          ? text.essaouira.name
          : form.get("destination") === "Autre ville au Maroc"
            ? text.otherCity
            : text.marrakech.name,
      property:
        form.get("property") === "villa"
          ? text.villa
          : form.get("property") === "flexible"
            ? text.chooseTogether
            : text.apartment,
      arrival: String(form.get("arrival")),
      departure: String(form.get("departure")),
      guests: String(form.get("guests")),
    };
    const message = [
      text.messageGreeting,
      `${text.destinationLabel}: ${values.destination}`,
      `${text.propertyLabel}: ${values.property}`,
      `${text.arrival}: ${values.arrival}`,
      `${text.departure}: ${values.departure}`,
      `${text.guests}: ${values.guests}`,
      text.availabilityDisclaimer,
    ].join("\n");
    const encodedMessage = encodeURIComponent(message);
    const submitter = (event.nativeEvent as SubmitEvent).submitter;
    const channel = submitter instanceof HTMLButtonElement ? submitter.value : "whatsapp";
    const url =
      channel === "email"
        ? `mailto:solveighybord@gmail.com?subject=${encodeURIComponent(text.emailSubject)}&body=${encodedMessage}`
        : `https://wa.me/34623626724?text=${encodedMessage}`;
    window.location.assign(url);
  };

  return (
    <MoroccoStayLayout>
      <section className="relative isolate flex min-h-[min(790px,100svh)] items-end overflow-hidden bg-[#38251c] text-[#fff8ed]">
        <img
          src={images.hero}
          alt="Patio chaleureux d’un riad à Marrakech"
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(47,31,22,.78)_0%,rgba(47,31,22,.48)_50%,rgba(47,31,22,.12)_100%),linear-gradient(0deg,rgba(42,27,20,.68),transparent_60%)]" />
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-40 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#f2d49d] sm:text-xs">
              <span className="h-px w-10 bg-[#e5bd77]" />
              {text.heroEyebrow}
            </p>
            <h1 className="mt-7 font-display text-6xl font-medium leading-[.88] text-balance sm:text-7xl md:text-[6.5rem]">
              {text.heroTitle}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {text.heroDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="xl" className="rounded-full">
                <a href="#contact-maroc">
                  <MessageCircle aria-hidden="true" />
                  {text.imagine}
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="coastal"
                size="xl"
                className="rounded-full border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
              >
                <a href="#adresses">
                  {text.explore}
                  <ArrowDown aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[.19em] text-white/68">
              {text.destinationsLine}
            </p>
            <a
              href="https://commons.wikimedia.org/wiki/File:Marrakech_Riad_(52189355675).jpg"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-[9px] text-white/60 underline decoration-white/30 underline-offset-4"
            >
              {text.photoLabel} : William John Gauthier · CC BY-SA 2.0
            </a>
          </div>
        </div>
      </section>

      <section id="esprit" className="bg-[#fbf6eb]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#987543]">
                {text.spiritEyebrow}
              </p>
              <h2 className="mt-5 max-w-2xl font-display text-5xl font-medium leading-[.92] text-[#34271e] text-balance sm:text-6xl md:text-7xl">
                {text.spiritTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#66584c] lg:justify-self-end sm:text-base">
              {text.spiritDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {stayVisuals.map(({ icon: Icon, key }, index) => (
              <article
                key={key}
                className="relative overflow-hidden rounded-[1.4rem] border border-[#78664c]/15 bg-white/80 p-7 shadow-[0_22px_60px_-48px_rgba(53,39,28,.5)] sm:p-9"
              >
                <span className="absolute right-5 top-2 font-display text-7xl text-[#b9935a]/15">
                  0{index + 1}
                </span>
                <span className="flex size-12 items-center justify-center rounded-full border border-[#b9935a]/35 text-[#987543]">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <h3 className="mt-7 font-display text-3xl font-semibold text-[#34271e] sm:text-4xl">
                  {key === "apartment" ? text.apartmentTitle : text.villaTitle}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-[#74665a]">
                  {key === "apartment" ? text.apartmentText : text.villaText}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="adresses" className="scroll-mt-24 bg-[#efe3d2]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#987543]">
              {text.inspirationEyebrow}
            </p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[.93] text-[#34271e] text-balance sm:text-6xl md:text-7xl">
              {text.inspirationTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {destinationVisuals.map((destination) => {
              const translatedDestination = text[destination.key];
              return (
                <article
                  key={translatedDestination.name}
                  className="group relative min-h-[470px] overflow-hidden rounded-[1.6rem] bg-[#38251c] text-white"
                >
                  <img
                    src={destination.image}
                    alt={translatedDestination.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d2119]/90 via-[#2d2119]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                    <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#f0c989]">
                      {translatedDestination.mood}
                    </p>
                    <h3 className="mt-3 font-display text-5xl font-medium">
                      {translatedDestination.name}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/78">
                      {translatedDestination.text}
                    </p>
                    <a
                      href={destination.creditUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-block text-[9px] text-white/65 underline decoration-white/30 underline-offset-4"
                    >
                      {text.photoLabel} : {destination.credit}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div className="max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#987543]">
                {text.atmosphereEyebrow}
              </p>
              <h3 className="mt-4 font-display text-4xl font-medium leading-[.95] text-[#34271e] text-balance sm:text-5xl">
                {text.atmosphereTitle}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#66584c]">{text.atmosphereIntro}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  image: images.riadRoom,
                  alt: text.roomAlt,
                  caption: text.roomCaption,
                  credit: "Arnaud 25 · CC BY-SA 3.0",
                  creditUrl: "https://commons.wikimedia.org/wiki/File:Riad_Maroc_032.JPG",
                },
                {
                  image: images.riadCourtyard,
                  alt: text.courtyardAlt,
                  caption: text.courtyardCaption,
                  credit: "Arnaud 25 · CC BY-SA 3.0",
                  creditUrl: "https://commons.wikimedia.org/wiki/File:Riad_Maroc_034.JPG",
                },
              ].map((inspiration) => (
                <figure
                  key={inspiration.image}
                  className="group relative min-h-[260px] overflow-hidden rounded-[1.3rem] bg-[#38251c] sm:min-h-[320px]"
                >
                  <img
                    src={inspiration.image}
                    alt={inspiration.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d2119]/85 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="font-display text-2xl">{inspiration.caption}</p>
                    <a
                      href={inspiration.creditUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-[9px] text-white/70 underline decoration-white/30 underline-offset-4"
                    >
                      {text.photoLabel} : {inspiration.credit}
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact-maroc" className="scroll-mt-24 bg-[#7d4933] text-[#fff8ed]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-12 lg:py-28">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.23em] text-[#f0c989]">
              <Sparkles size={15} aria-hidden="true" />
              {text.bookingEyebrow}
            </p>
            <h2 className="mt-5 font-display text-5xl font-medium leading-[.92] text-balance sm:text-6xl">
              {text.bookingTitle}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/75">
              {text.bookingDescription}
            </p>
          </div>
          <div className="rounded-[1.4rem] border border-white/20 bg-[#613a2a]/70 p-6 sm:p-8">
            <form onSubmit={submitStayEnquiry} className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-xs font-semibold text-white/85">
                {text.destinationLabel}
                <select
                  name="destination"
                  required
                  defaultValue="Marrakech"
                  className="min-h-11 rounded-xl border border-white/20 bg-[#493025] px-3 text-sm text-white outline-none transition focus-visible:ring-2 focus-visible:ring-[#f0c989]"
                >
                  <option value="Marrakech">{text.marrakech.name}</option>
                  <option value="Essaouira">{text.essaouira.name}</option>
                  <option value="Autre ville au Maroc">{text.otherCity}</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-xs font-semibold text-white/85">
                {text.propertyLabel}
                <select
                  name="property"
                  required
                  defaultValue="Appartement"
                  className="min-h-11 rounded-xl border border-white/20 bg-[#493025] px-3 text-sm text-white outline-none transition focus-visible:ring-2 focus-visible:ring-[#f0c989]"
                >
                  <option value="apartment">{text.apartment}</option>
                  <option value="villa">{text.villa}</option>
                  <option value="flexible">{text.chooseTogether}</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-xs font-semibold text-white/85">
                {text.arrival}
                <input
                  name="arrival"
                  type="date"
                  min={minDate}
                  required
                  onChange={(event) => {
                    const departureField =
                      event.currentTarget.form?.elements.namedItem("departure");
                    if (departureField instanceof HTMLInputElement) {
                      departureField.min = event.currentTarget.value || minDate;
                    }
                  }}
                  className="min-h-11 rounded-xl border border-white/20 bg-[#493025] px-3 text-sm text-white outline-none transition focus-visible:ring-2 focus-visible:ring-[#f0c989]"
                />
              </label>
              <label className="grid gap-1.5 text-xs font-semibold text-white/85">
                {text.departure}
                <input
                  name="departure"
                  type="date"
                  min={minDate}
                  required
                  className="min-h-11 rounded-xl border border-white/20 bg-[#493025] px-3 text-sm text-white outline-none transition focus-visible:ring-2 focus-visible:ring-[#f0c989]"
                />
              </label>
              <label className="grid gap-1.5 text-xs font-semibold text-white/85 sm:col-span-2">
                {text.guests}
                <input
                  name="guests"
                  type="number"
                  min="1"
                  max="30"
                  required
                  defaultValue="2"
                  className="min-h-11 rounded-xl border border-white/20 bg-[#493025] px-3 text-sm text-white outline-none transition focus-visible:ring-2 focus-visible:ring-[#f0c989]"
                />
              </label>
              <button
                type="submit"
                name="channel"
                value="whatsapp"
                className="mt-1 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f4e7d1] px-5 py-3 text-sm font-semibold text-[#34271e] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:col-span-2"
              >
                <MessageCircle size={16} aria-hidden="true" />
                {text.sendWhatsApp}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <button
                type="submit"
                name="channel"
                value="email"
                className="min-h-11 rounded-full border border-white/30 px-5 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:col-span-2"
              >
                {text.prepareEmail}
              </button>
            </form>
            <p className="mt-4 text-xs leading-5 text-white/60">{text.availabilityDisclaimer}</p>
          </div>
        </div>
      </section>
    </MoroccoStayLayout>
  );
}
