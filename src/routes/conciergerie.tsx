import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { useSolveigLocale } from "@/lib/locale";

export const Route = createFileRoute("/conciergerie")({
  head: () => ({
    meta: [
      { title: "Conciergerie privée à Marbella & Mijas — Solveig’s Prestige Service" },
      {
        name: "description",
        content:
          "Conciergerie privée à Marbella et Mijas : accueil, assistance locale et organisation sur mesure pour propriétaires et voyageurs.",
      },
      { property: "og:title", content: "Conciergerie privée à Marbella & Mijas" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ConciergePage,
});

const image =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Marbella_-_Plaza_de_los_Naranjos_8.jpg";

const copy = {
  fr: {
    eyebrow: "Conciergerie privée",
    title: "Le sens du détail, sans jamais en faire trop.",
    description:
      "Une conciergerie locale pensée pour rendre les séjours plus fluides et les demandes plus simples, avec discrétion et attention.",
    intro:
      "Le vrai luxe est souvent invisible : quelqu’un a déjà pensé au détail avant même que vous le demandiez.",
    points: [
      "Accueil et assistance adaptés au profil de chaque séjour.",
      "Coordination des demandes courantes et des intervenants locaux.",
      "Préparation attentive du logement avant l’arrivée.",
      "Une relation humaine, réactive et discrète.",
    ],
    steps: [
      "Comprendre vos habitudes, vos attentes et celles de vos invités.",
      "Préparer les détails qui rendent l’arrivée immédiate et naturelle.",
      "Rester disponible pendant le séjour selon le niveau d’accompagnement choisi.",
      "Clore chaque séjour avec le même niveau d’attention.",
    ],
    cta: "Parlons du niveau de service que vous souhaitez offrir.",
  },
  en: {
    eyebrow: "Private concierge",
    title: "A thoughtful eye for detail, never overdone.",
    description:
      "Local concierge support designed to make stays flow smoothly and requests easier to manage, always with discretion and care.",
    intro:
      "True luxury is often invisible: someone has taken care of the details before you even need to ask.",
    points: [
      "A welcome and assistance tailored to each stay.",
      "Coordination of everyday requests and local service providers.",
      "Careful preparation of the property before arrival.",
      "A responsive, personal and discreet relationship.",
    ],
    steps: [
      "Understand your routines, expectations and those of your guests.",
      "Prepare the details that make arrival feel effortless and natural.",
      "Remain available during the stay at the level of support you choose.",
      "Conclude every stay with the same thoughtful attention.",
    ],
    cta: "Let’s discuss the level of service you would like to offer.",
  },
  es: {
    eyebrow: "Conserjería privada",
    title: "Atención al detalle, sin excesos.",
    description:
      "Un servicio local de conserjería pensado para que cada estancia sea más cómoda y cada petición más sencilla, con discreción y atención.",
    intro:
      "El verdadero lujo suele ser invisible: alguien se ha ocupado de los detalles antes incluso de que tenga que pedirlo.",
    points: [
      "Recepción y asistencia adaptadas a cada estancia.",
      "Coordinación de solicitudes habituales y profesionales locales.",
      "Preparación cuidadosa de la vivienda antes de la llegada.",
      "Un trato personal, atento y discreto.",
    ],
    steps: [
      "Conocer sus hábitos, sus expectativas y las de sus invitados.",
      "Preparar los detalles para que la llegada sea cómoda y natural.",
      "Estar disponibles durante la estancia según el nivel de apoyo elegido.",
      "Cerrar cada estancia con la misma atención.",
    ],
    cta: "Hablemos del nivel de servicio que desea ofrecer.",
  },
  ar: {
    eyebrow: "خدمات كونسيرج خاصة",
    title: "اهتمام بالتفاصيل من دون مبالغة.",
    description:
      "خدمة محلية لتسهيل الإقامة والاستجابة للطلبات بسلاسة، مع الحرص على الخصوصية والعناية.",
    intro:
      "غالباً ما يكون الرفاه الحقيقي غير ملحوظ: فهناك من اعتنى بالتفاصيل قبل أن تضطر إلى طلب ذلك.",
    points: [
      "استقبال ومساعدة يتناسبان مع طبيعة كل إقامة.",
      "تنسيق الطلبات اليومية والتواصل مع مزودي الخدمات المحليين.",
      "تهيئة العقار بعناية قبل الوصول.",
      "تعامل إنساني وسريع الاستجابة يحترم الخصوصية.",
    ],
    steps: [
      "التعرّف إلى عاداتك وتوقعاتك وتوقعات ضيوفك.",
      "الاهتمام بالتفاصيل التي تجعل الوصول سهلاً ومريحاً.",
      "البقاء على تواصل أثناء الإقامة وفق مستوى الدعم الذي تختاره.",
      "إنهاء كل إقامة بالمستوى نفسه من العناية.",
    ],
    cta: "لنتحدث عن مستوى الخدمة الذي ترغب في تقديمه.",
  },
} as const;

function ConciergePage() {
  const locale = useSolveigLocale();
  const text = copy[locale];
  return (
    <ServiceDetailPage {...text} points={[...text.points]} steps={[...text.steps]} image={image} />
  );
}
