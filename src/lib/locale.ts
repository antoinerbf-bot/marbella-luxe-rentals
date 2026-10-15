import { useEffect, useState } from "react";

export type AppLocale = "fr" | "en" | "es" | "ar";

function readLocale(): AppLocale {
  if (typeof window === "undefined") return "fr";
  const saved = window.localStorage.getItem("solveig-locale");
  return saved === "en" || saved === "es" || saved === "ar" || saved === "fr" ? saved : "fr";
}

export function useSolveigLocale() {
  const [locale, setLocale] = useState<AppLocale>("fr");

  useEffect(() => {
    setLocale(readLocale());
    const update = (event: Event) => {
      const requested = (event as CustomEvent<AppLocale>).detail;
      if (requested === "fr" || requested === "en" || requested === "es" || requested === "ar") {
        setLocale(requested);
      }
    };
    window.addEventListener("solveig-locale-change", update);
    return () => window.removeEventListener("solveig-locale-change", update);
  }, []);

  return locale;
}
