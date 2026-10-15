import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Languages } from "lucide-react";

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

export function UniverseLanguageMenu({ universe }: { universe: AppUniverse }) {
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
    <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
      <Link
        to={otherHref}
        aria-label={`${copy.explore}: ${otherLabel}`}
        title={`${copy.explore}: ${otherLabel}`}
        className={`group inline-flex min-h-10 items-center gap-1.5 rounded-2xl border px-2 py-1.5 shadow-[0_7px_20px_-13px_rgba(52,39,30,.65)] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6a56f] focus-visible:ring-offset-2 sm:min-h-11 sm:gap-2 sm:px-3 ${
          universe === "costa"
            ? "border-[#a66b47]/35 bg-[linear-gradient(135deg,#fffaf1,#f1e3d0)] text-[#68452f] hover:border-[#a66b47]/65 hover:shadow-[0_12px_28px_-14px_rgba(100,57,34,.5)]"
            : "border-[#577b6b]/35 bg-[linear-gradient(135deg,#fbf8ed,#e7eee3)] text-[#385b4d] hover:border-[#577b6b]/65 hover:shadow-[0_12px_28px_-14px_rgba(45,86,68,.4)]"
        }`}
      >
        <span
          aria-hidden="true"
          className={`grid size-7 shrink-0 place-items-center rounded-full text-base shadow-inner transition-transform duration-500 group-hover:rotate-[12deg] sm:size-8 sm:text-lg ${
            universe === "costa" ? "bg-[#ead2b8]" : "bg-[#d7e5d8]"
          }`}
        >
          {otherFlag}
        </span>
        <span className="flex min-w-0 flex-col items-start leading-tight">
          <span className="hidden text-[7px] font-bold uppercase tracking-[.16em] opacity-65 min-[480px]:block sm:text-[8px]">
            {copy.explore}
          </span>
          <span className="hidden whitespace-nowrap text-[10px] font-bold min-[480px]:block sm:text-[11px]">
            {otherLabel}
          </span>
          <span className="hidden whitespace-nowrap text-[10px] font-bold min-[370px]:inline min-[480px]:hidden">
            {shortLabel}
          </span>
        </span>
        <ArrowRight
          size={13}
          aria-hidden="true"
          className="hidden shrink-0 transition-transform group-hover:translate-x-0.5 min-[480px]:block"
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
          className="flex min-h-10 cursor-pointer list-none items-center gap-1 rounded-2xl border border-[#b28a50]/30 bg-[#fffdf8]/90 px-2 text-[10px] font-bold text-[#594833] shadow-sm transition hover:border-[#b28a50]/60 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b28a50] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden sm:min-h-11 sm:gap-1.5 sm:px-2.5"
        >
          <Languages
            size={13}
            aria-hidden="true"
            className="hidden text-[#9a7a4e] min-[480px]:block"
          />
          <span
            aria-hidden="true"
            className="inline-block text-base leading-none transition-transform duration-300 group-hover:-rotate-6 sm:text-lg"
          >
            {selectedLanguage.flag}
          </span>
          <span className="hidden sm:inline">{selectedLanguage.native}</span>
          <ChevronDown
            size={12}
            aria-hidden="true"
            className="transition-transform duration-300 group-open:rotate-180"
          />
        </summary>

        <div
          dir={locale === "ar" ? "rtl" : "ltr"}
          className="absolute right-[-1.5rem] z-[70] mt-2 w-[min(19rem,calc(100vw-4rem))] origin-top-right rounded-2xl border border-[#b28a50]/20 bg-[#fffdf8] p-3 text-[#493a2a] shadow-[0_24px_70px_-30px_rgba(39,28,17,.5)] min-[375px]:right-[-1rem] sm:right-0"
        >
          <p className="px-2 pb-2 text-[9px] font-bold uppercase tracking-[.18em] text-[#9a7a4e]">
            {copy.language}
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {localeOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                aria-pressed={locale === option.code}
                onClick={(event) =>
                  changeLocale(option.code, event.currentTarget.closest("details"))
                }
                className={`flex min-h-11 items-center gap-2 rounded-xl px-3 text-start text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b28a50] ${
                  locale === option.code
                    ? "bg-[#e9ddc9] text-[#453321]"
                    : "text-[#76634f] hover:bg-[#f6eddf]"
                }`}
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  {option.flag}
                </span>
                <span className="min-w-0 truncate">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </details>
    </div>
  );
}
