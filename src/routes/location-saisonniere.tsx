import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { useSolveigLocale } from "@/lib/locale";

export const Route = createFileRoute("/location-saisonniere")({
  head: () => ({
    meta: [
      { title: "Location saisonnière à Marbella & Mijas — Solveig’s Prestige Service" },
      {
        name: "description",
        content:
          "Accompagnement de location saisonnière à Marbella et Mijas : préparation, voyageurs, coordination terrain et suivi du bien.",
      },
      { property: "og:title", content: "Location saisonnière à Marbella & Mijas" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SeasonalRentalPage,
});

const image = "https://commons.wikimedia.org/wiki/Special:Redirect/file/PLAYAS_DE_MIJAS.jpg";

const copy = {
  fr: {
    eyebrow: "Location saisonnière",
    title: "Une expérience de séjour pensée avant même l’arrivée.",
    description:
      "De la préparation du logement au départ des voyageurs, chaque étape est orchestrée pour préserver votre bien et la qualité du séjour.",
    intro:
      "Une location premium ne se joue pas uniquement au moment de la réservation : elle se prépare dans les détails.",
    points: [
      "Préparation complète entre deux séjours.",
      "Check-in, check-out et contrôle du logement.",
      "Coordination ménage, linge, consommables et maintenance légère.",
      "Suivi local pour les propriétaires qui ne vivent pas sur place.",
    ],
    steps: [
      "Établir les standards de préparation propres à votre propriété.",
      "Préparer le logement et contrôler chaque détail avant l’arrivée.",
      "Accompagner le séjour avec une présence adaptée.",
      "Contrôler le bien après le départ et préparer la suite.",
    ],
    cta: "Vous souhaitez louer votre propriété avec une présence locale de confiance ?",
  },
  en: {
    eyebrow: "Seasonal rentals",
    title: "A considered stay, prepared before guests arrive.",
    description:
      "From preparing the property to guests’ departure, every stage is coordinated to protect your home and support a high-quality stay.",
    intro:
      "A premium rental experience is shaped long before check-in; it is built through attention to detail.",
    points: [
      "Thorough preparation between stays.",
      "Guest check-in, check-out and property checks.",
      "Coordination of housekeeping, linen, supplies and light maintenance.",
      "Local support for owners who are not based nearby.",
    ],
    steps: [
      "Set the preparation standards that suit your property.",
      "Prepare the home and check every detail before arrival.",
      "Support the stay with the level of local presence you choose.",
      "Inspect the property after departure and prepare for the next stay.",
    ],
    cta: "Would you like to rent your property with a trusted local presence?",
  },
  es: {
    eyebrow: "Alquiler vacacional",
    title: "Una estancia cuidada desde antes de la llegada.",
    description:
      "Desde la preparación de la vivienda hasta la salida de los huéspedes, coordinamos cada etapa para proteger su propiedad y cuidar la calidad de la estancia.",
    intro:
      "Una experiencia de alquiler de calidad no se decide solo al reservar: se prepara cuidando cada detalle.",
    points: [
      "Preparación completa entre estancias.",
      "Recepción, salida y revisión de la vivienda.",
      "Coordinación de limpieza, ropa de hogar, consumibles y mantenimiento ligero.",
      "Atención local para propietarios que no residen en la zona.",
    ],
    steps: [
      "Definir los estándares de preparación de su propiedad.",
      "Preparar la vivienda y revisar cada detalle antes de la llegada.",
      "Acompañar la estancia con la presencia adecuada.",
      "Revisar la propiedad tras la salida y preparar la siguiente estancia.",
    ],
    cta: "¿Quiere alquilar su propiedad con el respaldo de una presencia local de confianza?",
  },
  ar: {
    eyebrow: "التأجير الموسمي",
    title: "إقامة متقنة التحضير قبل وصول الضيوف.",
    description:
      "من تجهيز العقار حتى مغادرة الضيوف، ننسق كل مرحلة للحفاظ على منزلك والارتقاء بجودة الإقامة.",
    intro: "لا تتحدد جودة الإيجار المميز عند الحجز وحده، بل تُبنى بالعناية بالتفاصيل منذ وقت مبكر.",
    points: [
      "تجهيز متكامل بين فترات الإقامة.",
      "تنظيم تسجيل الوصول والمغادرة ومعاينة العقار.",
      "تنسيق التنظيف والمفروشات والمستلزمات وأعمال الصيانة البسيطة.",
      "متابعة محلية للمالكين المقيمين خارج المنطقة.",
    ],
    steps: [
      "تحديد معايير تجهيز العقار بما يناسبه.",
      "تهيئة المنزل وفحص التفاصيل قبل وصول الضيوف.",
      "متابعة الإقامة بمستوى الحضور المحلي الذي تختاره.",
      "معاينة العقار بعد المغادرة والاستعداد للإقامة التالية.",
    ],
    cta: "هل ترغب في تأجير عقارك مع دعم محلي موثوق؟",
  },
} as const;

function SeasonalRentalPage() {
  const locale = useSolveigLocale();
  const text = copy[locale];
  return (
    <ServiceDetailPage {...text} points={[...text.points]} steps={[...text.steps]} image={image} />
  );
}
