import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { useSolveigLocale } from "@/lib/locale";
import villaImage from "@/assets/marbella-prestige-villa.jpg";

export const Route = createFileRoute("/gestion-propriete")({
  head: () => ({
    meta: [
      { title: "Gestion de propriété à Marbella & Mijas — Solveig’s Prestige Service" },
      {
        name: "description",
        content:
          "Gestion de propriété à Marbella et Mijas : contrôles, entretien, coordination des prestataires et suivi propriétaire à distance.",
      },
      { property: "og:title", content: "Gestion de propriété à Marbella & Mijas" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PropertyManagementPage,
});

const copy = {
  fr: {
    eyebrow: "Gestion de propriété",
    title: "Votre maison, entre de bonnes mains même lorsque vous êtes loin.",
    description:
      "Une présence locale pour surveiller, entretenir et préserver votre propriété à Marbella, Mijas et sur la Costa del Sol.",
    intro: "La tranquillité commence par savoir que quelqu’un veille réellement sur votre bien.",
    points: [
      "Visites et contrôles réguliers adaptés à votre rythme.",
      "Coordination des interventions et prestataires locaux.",
      "Préparation du logement avant votre arrivée ou celle de vos invités.",
      "Communication claire avec comptes rendus et suivi des besoins.",
    ],
    steps: [
      "Définir le niveau de présence souhaité et les priorités du bien.",
      "Mettre en place une routine de contrôle et les interlocuteurs nécessaires.",
      "Anticiper les interventions plutôt que subir les urgences.",
      "Vous tenir informé avec une communication simple et régulière.",
    ],
    cta: "Vous souhaitez un relais fiable pour votre propriété à Marbella ou Mijas ?",
  },
  en: {
    eyebrow: "Property management",
    title: "Your home in trusted hands, even when you are away.",
    description:
      "A local presence to monitor, maintain and protect your property in Marbella, Mijas and across the Costa del Sol.",
    intro:
      "Peace of mind begins with knowing that someone is genuinely looking after your property.",
    points: [
      "Regular visits and property checks tailored to your schedule.",
      "Coordination of maintenance visits and local service providers.",
      "Preparing the home before you or your guests arrive.",
      "Clear updates, visit reports and follow-up on any needs.",
    ],
    steps: [
      "Agree on the level of local presence and the property’s priorities.",
      "Set up a suitable inspection routine and the right local contacts.",
      "Plan maintenance ahead instead of reacting to urgent problems.",
      "Keep you informed with clear, regular communication.",
    ],
    cta: "Would you value a trusted local contact for your property in Marbella or Mijas?",
  },
  es: {
    eyebrow: "Gestión de propiedades",
    title: "Su hogar, en buenas manos incluso cuando está lejos.",
    description:
      "Presencia local para supervisar, mantener y proteger su propiedad en Marbella, Mijas y la Costa del Sol.",
    intro: "La tranquilidad empieza al saber que alguien cuida de verdad de su propiedad.",
    points: [
      "Visitas y revisiones periódicas adaptadas a su ritmo.",
      "Coordinación de intervenciones y profesionales locales.",
      "Preparación de la vivienda antes de su llegada o la de sus invitados.",
      "Información clara, informes de visita y seguimiento de las necesidades.",
    ],
    steps: [
      "Definir el nivel de presencia local y las prioridades de la propiedad.",
      "Establecer una rutina de revisión y los contactos necesarios.",
      "Anticipar las intervenciones en lugar de reaccionar ante urgencias.",
      "Mantenerle al tanto con una comunicación clara y periódica.",
    ],
    cta: "¿Busca un contacto local de confianza para su propiedad en Marbella o Mijas?",
  },
  ar: {
    eyebrow: "إدارة العقارات",
    title: "منزلك في أيدٍ أمينة، حتى أثناء غيابك.",
    description:
      "حضور محلي لمعاينة عقارك وصيانته والحفاظ عليه في ماربيا وميخاس وسائر كوستا ديل سول.",
    intro: "يبدأ الاطمئنان حين تعرف أن هناك من يتولى العناية بعقارك فعلياً.",
    points: [
      "زيارات ومعاينات دورية تناسب جدولك واحتياجات العقار.",
      "تنسيق أعمال الصيانة والتواصل مع مزودي الخدمات المحليين.",
      "تهيئة المنزل قبل وصولك أو وصول ضيوفك.",
      "إطلاعك بوضوح على المستجدات وتوثيق الزيارات ومتابعة الاحتياجات.",
    ],
    steps: [
      "تحديد مستوى الحضور المحلي المطلوب وأولويات العقار.",
      "وضع جدول معاينات مناسب وتحديد جهات الاتصال اللازمة.",
      "التخطيط لأعمال الصيانة مسبقاً بدلاً من انتظار الحالات الطارئة.",
      "إبقاؤك على اطلاع من خلال تواصل واضح ومنتظم.",
    ],
    cta: "هل تحتاج إلى جهة محلية موثوقة لمتابعة عقارك في ماربيا أو ميخاس؟",
  },
} as const;

function PropertyManagementPage() {
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
