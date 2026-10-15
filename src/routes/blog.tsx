import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock3, MapPin } from "lucide-react";

import { ContactBand, PageHero, SolveigLayout } from "@/components/SolveigLayout";
import { blogArticles } from "@/data/blogArticles";
import { useSolveigLocale } from "@/lib/locale";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title: "Le carnet Solveig — Maisons, séjours & art de recevoir",
      },
      {
        name: "description",
        content:
          "Inspirations pour choisir une maison de vacances au Maroc, découvrir Marrakech et Essaouira et savourer l’art de recevoir.",
      },
      { property: "og:title", content: "Le carnet Solveig — Séjours & art de vivre" },
      {
        property: "og:description",
        content: "Des idées pour choisir une adresse de charme et habiter le voyage à votre façon.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BlogPage,
});

const copy = {
  fr: {
    eyebrow: "Le carnet Solveig · Maisons · Voyages · Art de vivre",
    title: "Des adresses à rêver. Des idées à emporter.",
    description:
      "Un carnet de voyage et de maison pour choisir votre séjour, trouver le bon rythme et profiter pleinement des moments partagés.",
    label: "Carnet d’inspiration",
    heading: "À lire au fil de vos envies.",
    intro:
      "Maisons de charme, destinations marocaines et art de recevoir : quelques repères pour imaginer un séjour qui vous ressemble.",
    reading: "de lecture",
    readArticle: "Lire l’article",
    photo: "Photo",
    morocco: "Séjours privés au Maroc",
    cta: "Envie de trouver votre adresse ?",
    explore: "Explorer les locations",
    articles: {
      "riad-ou-villa-au-maroc": {
        category: "Bien choisir son séjour",
        title: "Riad ou villa au Maroc : quelle adresse vous ressemble ?",
        excerpt:
          "Le charme d’un patio à l’abri de la médina ou l’espace d’une maison ouverte sur le jardin : deux façons de vivre le voyage.",
        imageAlt: "Patio et bassin au cœur d’un riad de Marrakech",
        paragraphs: [
          "Au Maroc, l’adresse donne le ton du séjour. Un riad traditionnel s’organise autour d’un patio, souvent protégé de l’agitation extérieure. On s’y retrouve pour prendre le petit-déjeuner, lire à l’ombre ou simplement retrouver le calme après une promenade.",
          "Une villa répond à une autre envie : plus d’espace, des pièces de vie généreuses et, selon l’adresse, un jardin ou une terrasse. C’est une option appréciée quand on voyage à plusieurs ou que l’on souhaite vivre à son propre rythme, sans renoncer à l’intimité.",
          "Pour choisir, pensez d’abord à votre groupe et à vos journées. Préférez-vous être au cœur d’un quartier vivant, ou retrouver un refuge plus tranquille en fin de journée ? Avez-vous besoin de plusieurs chambres, d’espaces communs, d’un extérieur ? Ces détails comptent davantage qu’une simple catégorie.",
          "Les caractéristiques et services varient d’une maison à l’autre. Avant de confirmer, vérifiez les couchages, l’accès, les équipements inclus et les conditions de réservation. Une demande précisant vos dates et vos habitudes permet de rechercher une adresse réellement adaptée.",
        ],
      },
      "marrakech-et-essaouira": {
        category: "Inspirations marocaines",
        title: "Marrakech ou Essaouira : deux rythmes pour s’évader",
        excerpt:
          "Une escapade urbaine aux couleurs chaudes ou une parenthèse sur l’Atlantique : imaginez le séjour qui vous ressemble.",
        imageAlt: "Bateau bleu devant les remparts d’Essaouira",
        paragraphs: [
          "Marrakech et Essaouira invitent à des séjours différents. La première séduit par l’énergie de ses quartiers, ses jardins et ses patios. La seconde offre une atmosphère atlantique, des remparts et une médina à parcourir à pied.",
          "Plutôt que de vouloir tout faire, choisissez le tempo qui vous convient. Pour un court séjour, une adresse bien située peut simplifier les journées. Pour une pause plus longue, un logement confortable devient un point d’ancrage où l’on aime revenir.",
          "La saison, la composition du groupe et les déplacements envisagés influencent aussi le choix. Renseignez-vous sur l’emplacement exact, les accès et les services disponibles avant de réserver : une belle photo ne remplace pas les détails pratiques.",
          "Et si le temps le permet, associer plusieurs étapes peut donner une autre profondeur au voyage. L’essentiel reste de garder assez de place dans le programme pour savourer chaque adresse.",
        ],
      },
      "art-de-recevoir-a-la-maison": {
        category: "L’art de recevoir",
        title: "L’art de recevoir à la maison, tout simplement",
        excerpt:
          "Quelques attentions suffisent à transformer un repas partagé en souvenir : un rythme choisi, une table accueillante et le plaisir d’être ensemble.",
        imageAlt: "Préparation d’un repas dans une cuisine lumineuse",
        paragraphs: [
          "Recevoir chez soi n’a pas besoin de devenir une mise en scène. Commencez par penser au moment : un déjeuner qui s’étire, un dîner de retrouvailles ou une soirée plus intime. Le format aide à choisir le menu, la table et l’ambiance.",
          "Une lumière douce, une table simple et un espace où chacun se sent à l’aise créent déjà une atmosphère. Préparer quelques éléments à l’avance permet de rester disponible et de profiter de ses invités.",
          "Pour vivre le repas autrement, un chef à domicile peut imaginer un menu selon vos envies et cuisiner sur place. Le service est présenté séparément sur notre page dédiée ; les détails pratiques se précisent avec la demande et selon la destination.",
          "Le plus beau souvenir d’une réception tient souvent à cela : le temps passé ensemble, sans regarder l’heure ni se préoccuper de la cuisine.",
        ],
      },
    },
  },
  en: {
    eyebrow: "The Solveig journal · Homes · Travel · The art of living",
    title: "Places to dream of. Ideas to take with you.",
    description:
      "A journal about homes and travel to help you choose a stay, find your own pace and make the most of time spent together.",
    label: "Notes of inspiration",
    heading: "Read what inspires you.",
    intro:
      "Characterful homes, Moroccan destinations and the art of hospitality: a few thoughtful ideas for a stay that feels like your own.",
    reading: "read",
    readArticle: "Read article",
    photo: "Photo",
    morocco: "Private stays in Morocco",
    cta: "Looking for the right place?",
    explore: "Explore our rentals",
    articles: {
      "riad-ou-villa-au-maroc": {
        category: "Choosing your stay",
        title: "A riad or a villa in Morocco: which feels like you?",
        excerpt:
          "The charm of a courtyard tucked away in the medina or the space of a home opening onto a garden: two ways to experience a journey.",
        imageAlt: "Courtyard and pool in a Marrakech riad",
        paragraphs: [
          "In Morocco, where you stay sets the tone for your trip. A traditional riad is arranged around a courtyard, often sheltered from the bustle outside. It is a place to have breakfast, read in the shade or simply find a little calm after a walk.",
          "A villa answers a different wish: more space, generous living areas and, depending on the property, a garden or terrace. It is a popular choice for travelling together or keeping your own pace without giving up privacy.",
          "Start by thinking about your group and how you like to spend your days. Would you rather be in the heart of a lively neighbourhood, or return to a quieter retreat in the evening? Do you need several bedrooms, shared living space or an outdoor area? These details matter more than a label.",
          "Features and services vary from one home to another. Before confirming, check the sleeping arrangements, access, included amenities and booking terms. Sharing your dates and preferences makes it easier to find a property that truly suits you.",
        ],
      },
      "marrakech-et-essaouira": {
        category: "Moroccan inspiration",
        title: "Marrakech or Essaouira: two different ways to get away",
        excerpt:
          "A city break in warm colours or a pause beside the Atlantic: imagine the kind of stay that feels right for you.",
        imageAlt: "Blue boat in front of Essaouira’s ramparts",
        paragraphs: [
          "Marrakech and Essaouira invite you to experience two very different stays. The first draws you in with the energy of its neighbourhoods, gardens and courtyards. The second has an Atlantic spirit, historic ramparts and a medina made for exploring on foot.",
          "Rather than trying to do everything, choose a pace that suits you. For a short break, a well-located home can make each day easier. For a longer stay, a comfortable property becomes a welcoming base to return to.",
          "The season, the size of your group and your plans for getting around all help shape the choice. Before booking, check the precise location, access and available services: a beautiful photograph cannot replace practical details.",
          "If time allows, combining several stops can add another dimension to a trip. The most important thing is to leave enough room in your plans to enjoy each place.",
        ],
      },
      "art-de-recevoir-a-la-maison": {
        category: "The art of hospitality",
        title: "The simple pleasure of welcoming people at home",
        excerpt:
          "A few thoughtful touches can turn a shared meal into a lasting memory: an unhurried pace, a welcoming table and the pleasure of being together.",
        imageAlt: "Preparing a meal in a light-filled kitchen",
        paragraphs: [
          "Welcoming people at home does not need to become a performance. Begin with the occasion: a long lunch, a dinner with old friends or a more intimate evening. The format can guide the menu, table and atmosphere.",
          "Soft lighting, a simple table and a space where everyone feels at ease already create a mood. Preparing a few things in advance helps you stay present and enjoy your guests.",
          "For a different kind of meal, a private chef can create a menu around your preferences and cook in your home. This service is described separately on its dedicated page; practical details can be discussed with your enquiry and depend on the destination.",
          "Often, the loveliest memory of a gathering is simply the time spent together, without watching the clock or worrying about the cooking.",
        ],
      },
    },
  },
  es: {
    eyebrow: "El cuaderno de Solveig · Hogares · Viajes · Estilo de vida",
    title: "Lugares para soñar. Ideas para llevarse.",
    description:
      "Un cuaderno de viajes y hogares para elegir su estancia, encontrar el ritmo adecuado y disfrutar de los momentos compartidos.",
    label: "Cuaderno de inspiración",
    heading: "Lecturas para cada momento.",
    intro:
      "Casas con encanto, destinos marroquíes y el arte de recibir: algunas ideas para imaginar una estancia a su medida.",
    reading: "de lectura",
    readArticle: "Leer el artículo",
    photo: "Foto",
    morocco: "Estancias privadas en Marruecos",
    cta: "¿Busca el lugar ideal?",
    explore: "Explorar alojamientos",
    articles: {
      "riad-ou-villa-au-maroc": {
        category: "Cómo elegir su estancia",
        title: "¿Un riad o una villa en Marruecos? ¿Qué lugar va con usted?",
        excerpt:
          "El encanto de un patio resguardado en la medina o el espacio de una casa abierta al jardín: dos formas de vivir el viaje.",
        imageAlt: "Patio y alberca en un riad de Marrakech",
        paragraphs: [
          "En Marruecos, el alojamiento marca el tono de la estancia. Un riad tradicional se organiza en torno a un patio, a menudo protegido del ajetreo exterior. Allí se puede desayunar, leer a la sombra o simplemente disfrutar de la calma después de un paseo.",
          "Una villa responde a otro deseo: más espacio, amplias zonas de estar y, según el alojamiento, un jardín o una terraza. Es una opción apreciada para viajar en grupo o disfrutar de su propio ritmo sin renunciar a la intimidad.",
          "Para elegir, piense primero en su grupo y en cómo quiere pasar los días. ¿Prefiere estar en un barrio animado o volver al final del día a un refugio tranquilo? ¿Necesita varios dormitorios, zonas comunes o un espacio exterior? Estos detalles importan más que una categoría.",
          "Las características y los servicios varían de una casa a otra. Antes de confirmar, compruebe las camas, el acceso, el equipamiento incluido y las condiciones de reserva. Si comparte sus fechas y preferencias, será más fácil encontrar un alojamiento que realmente se adapte a usted.",
        ],
      },
      "marrakech-et-essaouira": {
        category: "Inspiración marroquí",
        title: "Marrakech o Esauira: dos ritmos para desconectar",
        excerpt:
          "Una escapada urbana de colores cálidos o una pausa junto al Atlántico: imagine la estancia que mejor encaja con usted.",
        imageAlt: "Barca azul ante las murallas de Esauira",
        paragraphs: [
          "Marrakech y Esauira invitan a vivir estancias distintas. La primera cautiva por la energía de sus barrios, sus jardines y sus patios. La segunda ofrece ambiente atlántico, murallas históricas y una medina que se recorre a pie.",
          "En lugar de querer verlo todo, elija un ritmo que le resulte agradable. Para una estancia corta, un alojamiento bien situado puede facilitar cada jornada. En una pausa más larga, una casa cómoda se convierte en un lugar al que apetece volver.",
          "La temporada, el número de viajeros y los desplazamientos previstos también influyen en la elección. Antes de reservar, infórmese sobre la ubicación exacta, los accesos y los servicios disponibles: una bonita fotografía no sustituye los detalles prácticos.",
          "Si dispone de tiempo, combinar varias etapas puede dar otra profundidad al viaje. Lo esencial es dejar espacio en el programa para disfrutar de cada lugar.",
        ],
      },
      "art-de-recevoir-a-la-maison": {
        category: "El arte de recibir",
        title: "El sencillo placer de recibir en casa",
        excerpt:
          "Unos pocos detalles pueden convertir una comida compartida en un recuerdo: un ritmo tranquilo, una mesa acogedora y el placer de estar juntos.",
        imageAlt: "Preparación de una comida en una cocina luminosa",
        paragraphs: [
          "Recibir en casa no tiene por qué convertirse en una puesta en escena. Empiece por pensar en la ocasión: un almuerzo sin prisas, una cena de reencuentro o una velada íntima. El formato ayuda a elegir el menú, la mesa y el ambiente.",
          "Una luz cálida, una mesa sencilla y un espacio donde todos se sientan cómodos ya crean una atmósfera especial. Preparar algunas cosas con antelación le permitirá estar presente y disfrutar de sus invitados.",
          "Para vivir la comida de otra manera, un chef a domicilio puede crear un menú a su gusto y cocinar en la vivienda. El servicio se presenta por separado en su página específica; los detalles prácticos se concretan al solicitarlo y según el destino.",
          "A menudo, el mejor recuerdo de una reunión es sencillamente el tiempo compartido, sin mirar el reloj ni preocuparse por la cocina.",
        ],
      },
    },
  },
  ar: {
    eyebrow: "دفتر Solveig · منازل · سفر · أسلوب حياة",
    title: "وجهات تدعو إلى الحلم، وأفكار ترافقك.",
    description:
      "دفتر عن المنازل والسفر يساعدك على اختيار إقامتك وإيجاد إيقاع يناسبك والاستمتاع باللحظات المشتركة.",
    label: "مساحة للإلهام",
    heading: "اقرأ ما يلهمك.",
    intro: "منازل مميزة ووجهات مغربية وفن الضيافة: أفكار تساعدك على تخيل إقامة تناسبك.",
    reading: "للقراءة",
    readArticle: "اقرأ المقال",
    photo: "الصورة",
    morocco: "إقامات خاصة في المغرب",
    cta: "هل تبحث عن المكان المناسب؟",
    explore: "استكشف أماكن الإقامة",
    articles: {
      "riad-ou-villa-au-maroc": {
        category: "اختيار الإقامة المناسبة",
        title: "رياض أم فيلا في المغرب؟ أيهما يناسبك؟",
        excerpt:
          "سحر فناء هادئ داخل المدينة القديمة، أم رحابة منزل يطل على حديقة؟ طريقتان مختلفتان لاكتشاف الرحلة.",
        imageAlt: "فناء وبركة في قلب رياض بمراكش",
        paragraphs: [
          "في المغرب، يحدد مكان الإقامة طابع الرحلة. فالرياض التقليدي يتمحور حول فناء داخلي يحميه غالباً من صخب الخارج. ويمكن للمرء أن يتناول فيه الفطور أو يقرأ في الظل أو يستعيد هدوءه بعد جولة في المدينة.",
          "أما الفيلا فتناسب رغبة مختلفة: مساحة أوسع وغرف معيشة رحبة، وقد تضم حديقة أو شرفة بحسب العقار. وهي خيار محبب للعائلات والمجموعات أو لمن يفضلون قضاء الوقت بإيقاعهم الخاص مع الحفاظ على الخصوصية.",
          "ابدأ الاختيار بالتفكير في أفراد المجموعة وطريقة قضاء أيامكم. هل تفضلون الإقامة في حي حيوي أم العودة مساءً إلى مكان أكثر هدوءاً؟ وهل تحتاجون إلى عدة غرف نوم أو مساحات مشتركة أو مكان في الهواء الطلق؟ لهذه التفاصيل أهمية أكبر من التصنيف وحده.",
          "تختلف خصائص كل منزل وخدماته. قبل تأكيد الحجز، تحقق من أماكن النوم وسهولة الوصول والتجهيزات المشمولة وشروط الحجز. ويساعد تحديد التواريخ والتفضيلات في العثور على مكان يلائم احتياجاتكم فعلاً.",
        ],
      },
      "marrakech-et-essaouira": {
        category: "إلهام من المغرب",
        title: "مراكش أم الصويرة؟ إيقاعان للاسترخاء",
        excerpt: "رحلة حضرية بألوان دافئة أم استراحة على ساحل الأطلسي؟ تخيل الإقامة التي تناسبك.",
        imageAlt: "قارب أزرق أمام أسوار الصويرة",
        paragraphs: [
          "تقدم مراكش والصويرة تجربتين مختلفتين. تجذبك الأولى بحيوية أحيائها وحدائقها وأفنيتها الداخلية، أما الثانية فتتميز بأجوائها الأطلسية وأسوارها ومدينتها القديمة التي يسهل التجول فيها سيراً على الأقدام.",
          "بدلاً من محاولة رؤية كل شيء، اختر إيقاعاً يناسبك. ففي الإقامة القصيرة، يسهل المكان الجيد الموقع تفاصيل اليوم. أما في الرحلة الأطول، فيصبح المنزل المريح قاعدة محببة للعودة إليها.",
          "كما تؤثر على الاختيار طبيعة الموسم وعدد المسافرين والتنقلات المخطط لها. استفسر عن الموقع الدقيق وسبل الوصول والخدمات المتاحة قبل الحجز؛ فالصورة الجميلة لا تغني عن معرفة التفاصيل العملية.",
          "وإذا أتاح الوقت، فإن الجمع بين عدة محطات قد يمنح الرحلة عمقاً إضافياً. والأهم أن تترك في برنامجك متسعاً للاستمتاع بكل مكان.",
        ],
      },
      "art-de-recevoir-a-la-maison": {
        category: "فن الضيافة",
        title: "متعة استقبال الضيوف في المنزل ببساطة",
        excerpt:
          "قد تحول لمسات بسيطة وجبة مشتركة إلى ذكرى جميلة: إيقاع هادئ ومائدة مرحبة ومتعة اللقاء.",
        imageAlt: "تحضير وجبة في مطبخ مضيء",
        paragraphs: [
          "لا يحتاج استقبال الضيوف في المنزل إلى تكلف. ابدأ بتحديد المناسبة: غداء هادئ يمتد وقته، أو عشاء يجمع الأصدقاء، أو أمسية أكثر خصوصية. ويساعدك شكل اللقاء على اختيار الطعام والمائدة والأجواء.",
          "تكفي إضاءة هادئة ومائدة بسيطة ومساحة يشعر فيها الجميع بالراحة لتهيئة أجواء جميلة. كما يتيح تحضير بعض الأمور مسبقاً أن تتفرغ لضيوفك وتستمتع بوقتك معهم.",
          "ولإضفاء طابع مختلف على الوجبة، يمكن لطاهٍ خاص إعداد قائمة تناسب ذوقك والطهي في المنزل. وقد خصصنا للخدمة صفحة مستقلة؛ أما التفاصيل العملية فتُناقش عند تقديم الطلب وتختلف بحسب الوجهة.",
          "غالباً ما تكون أجمل ذكرى للقاء هي الوقت الذي أمضيناه معاً، من دون استعجال أو انشغال بأمور المطبخ.",
        ],
      },
    },
  },
} as const;

function getReadingTime(readingTime: string, locale: keyof typeof copy, label: string) {
  if (locale === "ar") {
    return readingTime.startsWith("4") ? "٤ دقائق للقراءة" : "٣ دقائق للقراءة";
  }

  return `${readingTime} ${label}`;
}

function BlogPage() {
  const locale = useSolveigLocale();
  const text = copy[locale];

  return (
    <SolveigLayout>
      <PageHero eyebrow={text.eyebrow} title={text.title} description={text.description} />

      <section className="bg-[#fbf6eb]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-10 flex flex-col gap-4 border-b border-[#78664c]/20 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#987543]">
                <BookOpen size={15} aria-hidden="true" />
                {text.label}
              </p>
              <h2 className="mt-3 font-display text-4xl font-medium text-[#34271e] sm:text-5xl">
                {text.heading}
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-[#74665a]">{text.intro}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {blogArticles.map((article) => (
              <article
                key={article.slug}
                className="group overflow-hidden rounded-[1.4rem] border border-[#78664c]/15 bg-white/80 shadow-[0_20px_60px_-48px_rgba(53,39,28,.5)]"
              >
                <a
                  href={`#${article.slug}`}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4f7f70]"
                >
                  <div className="relative aspect-[1.45] overflow-hidden bg-[#e8dccb]">
                    <img
                      src={article.image}
                      alt={text.articles[article.slug as keyof typeof text.articles].imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[#fbf6eb]/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.16em] text-[#735836]">
                      {text.articles[article.slug as keyof typeof text.articles].category}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="flex items-center gap-2 text-[10px] uppercase tracking-[.14em] text-[#8a7969]">
                      <Clock3 size={13} aria-hidden="true" />
                      {getReadingTime(article.readingTime, locale, text.reading)}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-[#34271e] group-hover:text-[#4f7f70]">
                      {text.articles[article.slug as keyof typeof text.articles].title}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-[#74665a]">
                      {text.articles[article.slug as keyof typeof text.articles].excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.18em] text-[#4f7f70]">
                      {text.readArticle} <ArrowRight size={13} aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#efe3d2]">
        {blogArticles.map((article, index) => (
          <article
            key={article.slug}
            id={article.slug}
            className="scroll-mt-24 border-b border-[#78664c]/20 last:border-b-0"
          >
            <div className="mx-auto grid max-w-[1440px] gap-9 px-5 py-16 sm:px-8 md:grid-cols-[.68fr_1.32fr] md:gap-14 lg:px-12 lg:py-24">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative aspect-[1.2] overflow-hidden rounded-[1.4rem] bg-[#ddc9ac]">
                  <img
                    src={article.image}
                    alt={text.articles[article.slug as keyof typeof text.articles].imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                  <a
                    href={article.imageCreditUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-3 left-3 rounded-full bg-[#2d2119]/65 px-3 py-2 text-[9px] text-white backdrop-blur-sm hover:bg-[#2d2119]/85"
                  >
                    {text.photo} : {article.imageCredit}
                  </a>
                </div>
              </div>
              <div
                className={`max-w-3xl ${index % 2 === 1 ? "md:order-1 md:justify-self-end" : ""}`}
              >
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#987543]">
                  {text.articles[article.slug as keyof typeof text.articles].category} ·{" "}
                  {getReadingTime(article.readingTime, locale, text.reading)}
                </p>
                <h2 className="mt-4 font-display text-4xl font-medium leading-[.98] text-[#34271e] text-balance sm:text-5xl md:text-6xl">
                  {text.articles[article.slug as keyof typeof text.articles].title}
                </h2>
                <p className="mt-5 border-l-2 border-[#b9935a] pl-4 text-base leading-7 text-[#66584c]">
                  {text.articles[article.slug as keyof typeof text.articles].excerpt}
                </p>
                <div className="mt-6 space-y-4 text-sm leading-7 text-[#5f554a]">
                  {text.articles[article.slug as keyof typeof text.articles].paragraphs.map(
                    (paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ),
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="bg-[#33251b] px-5 py-16 text-[#f8efdf] sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#e5c17b]">
              <MapPin size={14} aria-hidden="true" />
              {text.morocco}
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">{text.cta}</h2>
          </div>
          <Link
            to="/locations-maroc"
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-[#f4e7d1] px-6 py-3 text-sm font-semibold text-[#34271e] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {text.explore} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}
