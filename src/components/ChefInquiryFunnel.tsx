import { useState, type FormEvent } from "react";
import { ArrowRight, CalendarDays, ChefHat, MapPin, Users } from "lucide-react";
import { useSolveigLocale } from "@/lib/locale";

const copy = {
  fr: { eyebrow: "Votre expérience commence ici", title: "Imaginons votre prochain repas.", intro: "Quelques informations suffisent pour préparer un premier échange personnalisé. Chaque demande est étudiée selon votre occasion, vos envies et votre lieu de séjour.", occasion: "Quelle occasion préparez-vous ?", occasions: ["Dîner privé", "Repas en famille", "Réception / événement", "Déjeuner", "Autre occasion"], date: "Date souhaitée", guests: "Nombre de convives", guestOptions: ["2 personnes", "3–4 personnes", "5–8 personnes", "9–12 personnes", "13 personnes ou plus", "À définir"], location: "Lieu du repas", locationPlaceholder: "Marbella, Mijas, nom de la villa…", preferences: "Envies, allergies ou préférences (facultatif)", preferencesPlaceholder: "Ambiance souhaitée, cuisine appréciée, contraintes alimentaires…", submit: "Préparer ma demande sur WhatsApp", note: "Votre demande ouvrira WhatsApp avec ces informations préremplies. Aucun créneau n’est réservé automatiquement.", required: "Veuillez renseigner l’occasion, la date et le lieu pour préparer votre demande.", pastDate: "Choisissez une date à partir d’aujourd’hui." },
  en: { eyebrow: "Your experience starts here", title: "Let’s imagine your next meal.", intro: "A few details help us prepare a personalised first conversation. Each enquiry is considered around your occasion, preferences and location.", occasion: "What are you planning?", occasions: ["Private dinner", "Family meal", "Reception / event", "Lunch", "Another occasion"], date: "Preferred date", guests: "Number of guests", guestOptions: ["2 guests", "3–4 guests", "5–8 guests", "9–12 guests", "13 or more", "To be decided"], location: "Meal location", locationPlaceholder: "Marbella, Mijas, villa name…", preferences: "Preferences, allergies or ideas (optional)", preferencesPlaceholder: "Atmosphere, favourite cuisine, dietary requirements…", submit: "Prepare my WhatsApp enquiry", note: "WhatsApp will open with these details prefilled. No date is automatically booked.", required: "Please add the occasion, date and location to prepare your enquiry.", pastDate: "Please choose today or a future date." },
  es: { eyebrow: "Su experiencia empieza aquí", title: "Imaginemos su próxima comida.", intro: "Con unos pocos datos podremos preparar una primera conversación personalizada. Cada solicitud se estudia según la ocasión, sus preferencias y el lugar.", occasion: "¿Qué ocasión está preparando?", occasions: ["Cena privada", "Comida familiar", "Recepción / evento", "Almuerzo", "Otra ocasión"], date: "Fecha deseada", guests: "Número de comensales", guestOptions: ["2 personas", "3–4 personas", "5–8 personas", "9–12 personas", "13 o más", "Por definir"], location: "Lugar de la comida", locationPlaceholder: "Marbella, Mijas, nombre de la villa…", preferences: "Preferencias, alergias o ideas (opcional)", preferencesPlaceholder: "Ambiente, cocina preferida, necesidades alimentarias…", submit: "Preparar solicitud por WhatsApp", note: "WhatsApp se abrirá con estos datos preparados. No se reserva ninguna fecha automáticamente.", required: "Indique la ocasión, la fecha y el lugar para preparar su solicitud.", pastDate: "Elija hoy o una fecha futura." },
  ar: { eyebrow: "تبدأ تجربتك من هنا", title: "لنتخيل وجبتك القادمة.", intro: "تكفي بعض التفاصيل لتهيئة تواصل أولي يناسبك. تتم دراسة كل طلب وفق المناسبة وتفضيلاتك ومكان الإقامة.", occasion: "ما المناسبة التي تخطط لها؟", occasions: ["عشاء خاص", "وجبة عائلية", "استقبال / مناسبة", "غداء", "مناسبة أخرى"], date: "التاريخ المفضل", guests: "عدد الضيوف", guestOptions: ["شخصان", "3–4 أشخاص", "5–8 أشخاص", "9–12 شخصاً", "13 شخصاً أو أكثر", "لم يُحدد بعد"], location: "مكان الوجبة", locationPlaceholder: "ماربيا، ميخاس، اسم الفيلا…", preferences: "التفضيلات أو الحساسية أو الأفكار (اختياري)", preferencesPlaceholder: "الأجواء المرغوبة، المطبخ المفضل، الاحتياجات الغذائية…", submit: "إعداد الطلب عبر واتساب", note: "سيُفتح واتساب مع هذه المعلومات جاهزة. لا يتم تأكيد أي حجز تلقائياً.", required: "يرجى إدخال المناسبة والتاريخ والمكان لإعداد الطلب.", pastDate: "يرجى اختيار تاريخ اليوم أو تاريخ لاحق." }
} as const;

const fieldClass = "mt-2 min-h-12 w-full rounded-xl border border-[#b9a88f]/45 bg-white/80 px-4 py-3 text-sm text-[#34271e] outline-none transition placeholder:text-[#938575] focus:border-[#987543] focus:ring-2 focus:ring-[#987543]/15";

export function ChefInquiryFunnel() {
  const locale = useSolveigLocale();
  const content = copy[locale];
  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [location, setLocation] = useState("");
  const [preferences, setPreferences] = useState("");
  const [error, setError] = useState("");

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!occasion || !date || !location.trim()) { setError(content.required); return; }
    if (date < minDate) { setError(content.pastDate); return; }
    setError("");
    const labels = {
      fr: ["Bonjour, je souhaite étudier une expérience de chef à domicile.", "Occasion", "Date souhaitée", "Convives", "Lieu", "Préférences / allergies"],
      en: ["Hello, I’d like to enquire about a private chef experience.", "Occasion", "Preferred date", "Guests", "Location", "Preferences / allergies"],
      es: ["Hola, me gustaría consultar una experiencia de chef a domicilio.", "Ocasión", "Fecha deseada", "Comensales", "Lugar", "Preferencias / alergias"],
      ar: ["مرحباً، أود الاستفسار عن تجربة طاهٍ خاص.", "المناسبة", "التاريخ المفضل", "الضيوف", "المكان", "التفضيلات / الحساسية"]
    }[locale];
    const guestFallback = locale === "fr" ? "À définir" : locale === "es" ? "Por definir" : locale === "ar" ? "لم يُحدد بعد" : "To be decided";
    const message = [
      labels[0], "",
      labels[1] + ": " + occasion,
      labels[2] + ": " + date,
      labels[3] + ": " + (guests || guestFallback),
      labels[4] + ": " + location.trim(),
      preferences.trim() ? labels[5] + ": " + preferences.trim() : ""
    ].filter(Boolean).join("\n");
    window.open("https://wa.me/34623626724?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="demande-chef" dir={locale === "ar" ? "rtl" : "ltr"} className="scroll-mt-24 bg-[#f1e6d5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div className="flex flex-col justify-center">
          <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-[#987543]"><span className="h-px w-9 bg-[#b9935a]" />{content.eyebrow}</p>
          <h2 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[.94] text-[#34271e] text-balance sm:text-6xl">{content.title}</h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#66584c] sm:text-base">{content.intro}</p>
          <div className="mt-8 grid gap-3 text-sm text-[#66584c]">
            <p className="flex items-center gap-3"><ChefHat size={18} className="text-[#987543]" />{locale === "fr" ? "Une proposition adaptée à votre occasion" : locale === "es" ? "Una propuesta adaptada a su ocasión" : locale === "ar" ? "اقتراح يناسب مناسبتك" : "A proposal tailored to your occasion"}</p>
            <p className="flex items-center gap-3"><CalendarDays size={18} className="text-[#987543]" />{locale === "fr" ? "Une date et un format à préciser ensemble" : locale === "es" ? "Una fecha y un formato por definir juntos" : locale === "ar" ? "تحديد التاريخ والتفاصيل معاً" : "Date and format discussed together"}</p>
            <p className="flex items-center gap-3"><MapPin size={18} className="text-[#987543]" />{locale === "fr" ? "Marbella, Mijas et environs selon disponibilité" : locale === "es" ? "Marbella, Mijas y alrededores según disponibilidad" : locale === "ar" ? "ماربيا وميخاس والمناطق القريبة حسب التوفر" : "Marbella, Mijas and nearby areas, subject to availability"}</p>
          </div>
        </div>
        <form onSubmit={submitEnquiry} className="rounded-[1.75rem] border border-[#b9a88f]/45 bg-[#fbf7ef] p-5 shadow-[0_24px_70px_-48px_rgba(53,39,28,.55)] sm:p-8 lg:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs font-semibold text-[#514236] sm:col-span-2">{content.occasion}
              <select required value={occasion} onChange={(event) => setOccasion(event.target.value)} className={fieldClass}><option value="">—</option>{content.occasions.map((item) => <option key={item} value={item}>{item}</option>)}</select>
            </label>
            <label className="text-xs font-semibold text-[#514236]">{content.date}
              <input required type="date" min={minDate} value={date} onChange={(event) => setDate(event.target.value)} className={fieldClass} />
            </label>
            <label className="text-xs font-semibold text-[#514236]"><span className="inline-flex items-center gap-2"><Users size={14} />{content.guests}</span>
              <select value={guests} onChange={(event) => setGuests(event.target.value)} className={fieldClass}><option value="">—</option>{content.guestOptions.map((item) => <option key={item} value={item}>{item}</option>)}</select>
            </label>
            <label className="text-xs font-semibold text-[#514236] sm:col-span-2">{content.location}
              <input required value={location} onChange={(event) => setLocation(event.target.value)} placeholder={content.locationPlaceholder} className={fieldClass} />
            </label>
            <label className="text-xs font-semibold text-[#514236] sm:col-span-2">{content.preferences}
              <textarea value={preferences} onChange={(event) => setPreferences(event.target.value)} placeholder={content.preferencesPlaceholder} rows={3} className={fieldClass + " resize-y"} />
            </label>
          </div>
          {error && <p role="alert" className="mt-4 text-sm font-medium text-red-700">{error}</p>}
          <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#34271e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4b392b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#987543] focus-visible:ring-offset-2">{content.submit}<ArrowRight size={17} aria-hidden="true" /></button>
          <p className="mt-4 text-center text-[11px] leading-5 text-[#806f5d]">{content.note}</p>
        </form>
      </div>
    </section>
  );
}
