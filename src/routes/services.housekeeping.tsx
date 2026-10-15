import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { useSolveigLocale } from "@/lib/locale";
import villaImage from "@/assets/marbella-prestige-villa.jpg";

export const Route = createFileRoute("/services/housekeeping")({
  head: () => ({
    meta: [
      { title: "Housekeeping & maintenance à Marbella & Mijas — Solveig’s Prestige Service" },
      {
        name: "description",
        content:
          "Housekeeping, linge, contrôle qualité et maintenance légère pour les propriétés à Marbella, Mijas et sur la Costa del Sol.",
      },
      { property: "og:title", content: "Housekeeping & maintenance — Solveig’s Prestige Service" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HousekeepingPage,
});

const copy = {
  fr: {
    eyebrow: "Housekeeping & maintenance",
    title: "Chaque détail doit être prêt avant que vous arriviez.",
    description:
      "Ménage, linge, contrôle qualité et petites interventions coordonnées avec rigueur pour garder votre propriété impeccable entre deux séjours.",
    intro:
      "La qualité d’un séjour se joue souvent dans les détails que personne ne remarque — parce qu’ils ont été parfaitement préparés.",
    points: [
      "Ménage et remise en état entre les séjours.",
      "Gestion du linge, consommables et préparation du logement.",
      "Contrôle qualité avant chaque arrivée.",
      "Coordination de petites interventions et maintenance légère.",
    ],
    steps: [
      "Définir les standards de votre propriété.",
      "Organiser ménage, linge et consommables selon le calendrier.",
      "Contrôler chaque pièce et signaler les besoins d’intervention.",
      "Valider la remise en état avant votre arrivée ou celle de vos invités.",
    ],
    cta: "Vous souhaitez un standard constant pour votre propriété ?",
  },
  en: {
    eyebrow: "Housekeeping & maintenance",
    title: "Every detail ready before you arrive.",
    description:
      "Housekeeping, linen, quality checks and carefully coordinated minor works keep your property in excellent condition between stays.",
    intro:
      "The quality of a stay often comes down to details guests never notice—because they have been prepared perfectly.",
    points: [
      "Cleaning and resetting the property between stays.",
      "Linen, supplies and property preparation.",
      "Quality checks before every arrival.",
      "Coordination of small jobs and light maintenance.",
    ],
    steps: [
      "Agree on the standards for your property.",
      "Schedule housekeeping, linen and supplies around each stay.",
      "Inspect every room and flag any work that may be needed.",
      "Confirm the property is ready before you or your guests arrive.",
    ],
    cta: "Would you like a consistent standard of care for your property?",
  },
  es: {
    eyebrow: "Limpieza y mantenimiento",
    title: "Cada detalle, listo antes de su llegada.",
    description:
      "Limpieza, ropa de hogar, controles de calidad y pequeñas intervenciones coordinadas con rigor para mantener su propiedad impecable entre estancias.",
    intro:
      "La calidad de una estancia suele depender de detalles que nadie percibe, precisamente porque se han preparado a la perfección.",
    points: [
      "Limpieza y puesta a punto entre estancias.",
      "Gestión de la ropa de hogar, consumibles y preparación de la vivienda.",
      "Control de calidad antes de cada llegada.",
      "Coordinación de pequeños trabajos y mantenimiento ligero.",
    ],
    steps: [
      "Definir los estándares de su propiedad.",
      "Organizar la limpieza, la ropa de hogar y los consumibles según el calendario.",
      "Revisar cada estancia y señalar las intervenciones necesarias.",
      "Confirmar que todo está listo antes de su llegada o la de sus invitados.",
    ],
    cta: "¿Busca mantener un nivel de cuidado constante en su propiedad?",
  },
  ar: {
    eyebrow: "التنظيف والصيانة",
    title: "كل التفاصيل جاهزة قبل وصولك.",
    description:
      "تنظيف ومفروشات وفحوصات جودة وأعمال بسيطة منسقة بعناية للحفاظ على العقار في أفضل حال بين فترات الإقامة.",
    intro: "غالباً ما تتوقف جودة الإقامة على تفاصيل لا يلاحظها الضيف، لأنها أُعدّت على أكمل وجه.",
    points: [
      "تنظيف العقار وإعادة تهيئته بين فترات الإقامة.",
      "إدارة المفروشات والمستلزمات وتجهيز المنزل.",
      "فحص الجودة قبل كل وصول.",
      "تنسيق الأعمال البسيطة والصيانة الخفيفة.",
    ],
    steps: [
      "تحديد معايير العناية الخاصة بعقارك.",
      "تنظيم التنظيف والمفروشات والمستلزمات وفق جدول الإقامة.",
      "فحص كل غرفة وتحديد الأعمال التي تحتاج إلى متابعة.",
      "التأكد من جاهزية العقار قبل وصولك أو وصول ضيوفك.",
    ],
    cta: "هل ترغب في الحفاظ على مستوى ثابت من العناية بعقارك؟",
  },
} as const;

function HousekeepingPage() {
  const locale = useSolveigLocale();
  const text = copy[locale];
  return (
    <ServiceDetailPage
      {...text}
      points={[...text.points]}
      steps={[...text.steps]}
      image={villaImage}
    />
  );
}
