import { Link } from "@tanstack/react-router";
import { ChevronDown, Compass } from "lucide-react";
import { useSolveigLocale, type AppLocale } from "@/lib/locale";

export type { AppLocale } from "@/lib/locale";
export type AppUniverse = "costa" | "morocco";

const localeOptions: { code: AppLocale; flag: string; label: string; native: string }[] = [
  { code: "fr", flag: "🇫🇷", label: "Français", native: "FR" },
  { code: "en", flag: "🇬🇧", label: "English", native: "EN" },
  { code: "es", flag: "🇪🇸", label: "Español", native: "ES" },
  { code: "ar", flag: "🇲🇦", label: "العربية (المغرب)", native: "AR" },
];

const menuCopy: Record<
  AppLocale,
  { costa: string; morocco: string; switch: string; language: string; aria: string }
> = {
  fr: {
    costa: "Costa del Sol",
    morocco: "Maisons du Maroc",
    switch: "Changer d’univers",
    language: "Langue",
    aria: "Choisir une destination ou une langue",
  },
  en: {
    costa: "Costa del Sol",
    morocco: "Morocco stays",
    switch: "Explore another world",
    language: "Language",
    aria: "Choose a destination or language",
  },
  es: {
    costa: "Costa del Sol",
    morocco: "Estancias en Marruecos",
    switch: "Cambiar de universo",
    language: "Idioma",
    aria: "Elegir destino o idioma",
  },
  ar: {
    costa: "كوستا ديل سول",
    morocco: "إقامات المغرب",
    switch: "اكتشف عالماً آخر",
    language: "اللغة",
    aria: "اختر الوجهة أو اللغة",
  },
};

export function UniverseLanguageMenu({
  universe,
  mobile = false,
  compact = false,
}: {
  universe: AppUniverse;
  mobile?: boolean;
  compact?: boolean;
}) {
  const locale = useSolveigLocale();
  const copy = menuCopy[locale];
  const otherHref = universe === "costa" ? "/locations-maroc" : "/";
  const otherLabel = universe === "costa" ? copy.morocco : copy.costa;
  const otherFlag = universe === "costa" ? "🇲🇦" : "🇪🇸";
  const compactLabel = {
    costa: { fr: "Costa", en: "Coast", es: "Costa", ar: "كوستا" },
    morocco: { fr: "Maroc", en: "Morocco", es: "Marruecos", ar: "المغرب" },
  }[universe][locale];

  const changeLocale = (nextLocale: AppLocale, details: HTMLDetailsElement | null) => {
    window.localStorage.setItem("solveig-locale", nextLocale);
    window.dispatchEvent(
      new CustomEvent<AppLocale>("solveig-locale-change", { detail: nextLocale }),
    );
    if (details) details.open = false;
  };

  return (
    <details
      className={`universe-language-menu group relative ${mobile ? "w-full" : ""}`}
      dir="ltr"
      onMouseEnter={(event) => {
        if (!mobile) event.currentTarget.open = true;
      }}
      onMouseLeave={(event) => {
        if (!mobile && !event.currentTarget.contains(document.activeElement)) {
          event.currentTarget.open = false;
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.currentTarget.open = false;
          event.currentTarget.querySelector("summary")?.focus();
        }
      }}
    >
      <summary
        aria-label={`${copy.aria}: ${universe === "costa" ? copy.costa : copy.morocco}`}
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`flex min-h-10 cursor-pointer list-none items-center justify-center gap-2 rounded-full border border-[#b28a50]/35 bg-[#f7f0e3] px-3 text-[11px] font-bold text-[#634c31] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#b28a50]/70 hover:bg-[#efe2cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b28a50] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden ${
          mobile ? "w-full justify-between rounded-2xl px-4 py-3 text-sm" : ""
        }`}
      >
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="text-base leading-none">
            {universe === "costa" ? "🇪🇸" : "🇲🇦"}
          </span>
          <span className={compact ? "min-[375px]:hidden" : ""}>
            {compact ? compactLabel : universe === "costa" ? copy.costa : copy.morocco}
          </span>
          {compact && (
            <span className="hidden min-[375px]:inline">
              {universe === "costa" ? copy.costa : copy.morocco}
            </span>
          )}
        </span>
        <ChevronDown
          size={15}
          aria-hidden="true"
          className="shrink-0 transition-transform duration-300 group-open:rotate-180"
        />
      </summary>

      <div
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`universe-language-popover absolute z-[70] mt-2 w-[min(19rem,calc(100vw-2rem))] rounded-2xl border border-[#b28a50]/20 bg-[#fffdf8] p-3 text-[#493a2a] shadow-[0_24px_70px_-30px_rgba(39,28,17,.5)] ${
          mobile ? "static mt-2 w-full shadow-none" : "right-0"
        }`}
      >
        <p className="px-2 pb-2 text-[9px] font-bold uppercase tracking-[.18em] text-[#9a7a4e]">
          {copy.switch}
        </p>
        <Link
          to={otherHref}
          onClick={(event) => {
            const details = event.currentTarget.closest("details");
            if (details) details.open = false;
          }}
          className="flex min-h-11 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition hover:bg-[#f6eddf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b28a50]"
        >
          <span aria-hidden="true" className="text-lg">
            {otherFlag}
          </span>
          {otherLabel}
          <Compass size={15} aria-hidden="true" className="ml-auto text-[#a77b3e]" />
        </Link>

        <div className="my-2 border-t border-[#806747]/15" />
        <p className="px-2 pb-2 text-[9px] font-bold uppercase tracking-[.18em] text-[#9a7a4e]">
          {copy.language}
        </p>
        <div className="grid grid-cols-2 gap-1">
          {localeOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              aria-pressed={locale === option.code}
              onClick={(event) => changeLocale(option.code, event.currentTarget.closest("details"))}
              className={`flex min-h-10 items-center gap-2 rounded-xl px-3 text-start text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b28a50] ${
                locale === option.code
                  ? "bg-[#e9ddc9] text-[#453321]"
                  : "text-[#76634f] hover:bg-[#f6eddf]"
              }`}
            >
              <span aria-hidden="true" className="text-base">
                {option.flag}
              </span>
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </details>
  );
}
