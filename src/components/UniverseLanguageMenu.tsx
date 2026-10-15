import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Languages } from "lucide-react";

import { useSolveigLocale, type AppLocale } from "@/lib/locale";

export type { AppLocale } from "@/lib/locale";
export type AppUniverse = "costa" | "morocco";

const localeOptions: { code: AppLocale; flag: string; label: string; native: string }[] = [
  { code: "fr", flag: "🇫🇷", label: "Français", native: "FR" },
  { code: "en", flag: "🇬🇧", label: "English", native: "EN" },
  { code: "es", flag: "🇪🇸", label: "Español", native: "ES" },
  { code: "ar", flag: "🇲🇦", label: "العربية · المغرب", native: "AR" },
];

const menuCopy: Record<
  AppLocale,
  {
    morocco: string;
    costa: string;
    shortMorocco: string;
    shortCosta: string;
    explore: string;
    language: string;
    chooseLanguage: string;
  }
> = {
  fr: {
    morocco: "Maisons du Maroc",
    costa: "Costa del Sol",
    shortMorocco: "Maroc",
    shortCosta: "Costa",
    explore: "Découvrir l’autre univers",
    language: "Langue",
    chooseLanguage: "Choisir une langue",
  },
  en: {
    morocco: "Morocco stays",
    costa: "Costa del Sol",
    shortMorocco: "Morocco",
    shortCosta: "Costa",
    explore: "Discover the other destination",
    language: "Language",
    chooseLanguage: "Choose a language",
  },
  es: {
    morocco: "Estancias en Marruecos",
    costa: "Costa del Sol",
    shortMorocco: "Marruecos",
    shortCosta: "Costa",
    explore: "Descubrir el otro destino",
    language: "Idioma",
    chooseLanguage: "Elegir idioma",
  },
  ar: {
    morocco: "إقامات في المغرب",
    costa: "كوستا ديل سول",
    shortMorocco: "المغرب",
    shortCosta: "كوستا",
    explore: "اكتشف الوجهة الأخرى",
    language: "اللغة",
    chooseLanguage: "اختر اللغة",
  },
};

export function UniverseLanguageMenu({
  universe,
  compact = false,
}: {
  universe: AppUniverse;
  compact?: boolean;
}) {
  const locale = useSolveigLocale();
  const copy = menuCopy[locale];
  const otherHref = universe === "costa" ? "/locations-maroc" : "/";
  const otherLabel = universe === "costa" ? copy.morocco : copy.costa;
  const shortLabel = universe === "costa" ? copy.shortMorocco : copy.shortCosta;
  const otherFlag = universe === "costa" ? "🇲🇦" : "🇪🇸";
  const selectedLanguage = localeOptions.find((option) => option.code === locale)!;

  const changeLocale = (nextLocale: AppLocale, details: HTMLDetailsElement | null) => {
    window.localStorage.setItem("solveig-locale", nextLocale);
    window.dispatchEvent(
      new CustomEvent<AppLocale>("solveig-locale-change", { detail: nextLocale }),
    );
    if (details) details.open = false;
  };

  return (
    <div className="flex shrink-0 items-center gap-2">
      <Link
        to={otherHref}
        aria-label={`${copy.explore}: ${otherLabel}`}
        title={`${copy.explore}: ${otherLabel}`}
        className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-[#9a6b34]/35 bg-[#8e5638] px-3.5 text-[11px] font-bold text-[#fff9ef] shadow-[0_8px_24px_-14px_rgba(61,36,20,.8)] transition duration-300 hover:-translate-y-0.5 hover:border-[#d9b781] hover:bg-[#70422e] hover:shadow-[0_12px_28px_-14px_rgba(61,36,20,.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b28a50] focus-visible:ring-offset-2 sm:px-4 sm:text-xs"
      >
        <span aria-hidden="true" className="text-base leading-none">
          {otherFlag}
        </span>
        <span className={compact ? "hidden min-[430px]:inline" : ""}>{otherLabel}</span>
        {compact && <span className="min-[430px]:hidden">{shortLabel}</span>}
        <ArrowUpRight
          size={14}
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>

      <details
        className="language-picker group relative"
        dir="ltr"
        onMouseEnter={(event) => {
          if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
            event.currentTarget.open = true;
          }
        }}
        onMouseLeave={(event) => {
          if (
            window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
            !event.currentTarget.contains(document.activeElement)
          ) {
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
          aria-label={`${copy.chooseLanguage}. ${copy.language}: ${selectedLanguage.label}`}
          className="flex min-h-10 cursor-pointer list-none items-center gap-1.5 rounded-full border border-white/60 bg-white/75 px-2.5 text-[10px] font-bold text-[#493a2a] shadow-sm transition hover:border-[#b28a50]/50 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b28a50] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden sm:gap-2 sm:px-3"
        >
          <Languages
            size={14}
            aria-hidden="true"
            className="hidden text-[#9a7a4e] min-[370px]:block"
          />
          <span aria-hidden="true" className="text-base leading-none">
            {selectedLanguage.flag}
          </span>
          <span>{selectedLanguage.native}</span>
          <ChevronDown
            size={13}
            aria-hidden="true"
            className="transition-transform duration-300 group-open:rotate-180"
          />
        </summary>

        <div
          dir={locale === "ar" ? "rtl" : "ltr"}
          className="absolute right-0 z-[70] mt-2 w-[min(19rem,calc(100vw-2rem))] rounded-2xl border border-[#b28a50]/20 bg-[#fffdf8] p-3 text-[#493a2a] shadow-[0_24px_70px_-30px_rgba(39,28,17,.5)]"
        >
          <p className="px-2 pb-2 text-[9px] font-bold uppercase tracking-[.18em] text-[#9a7a4e]">
            {copy.language}
          </p>
          <div className="grid grid-cols-2 gap-1">
            {localeOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                aria-pressed={locale === option.code}
                onClick={(event) =>
                  changeLocale(option.code, event.currentTarget.closest("details"))
                }
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
    </div>
  );
}
