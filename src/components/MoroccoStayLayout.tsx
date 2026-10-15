import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, type ReactNode } from "react";

const enquiryLink =
  "https://wa.me/34623626724?text=Bonjour%2C%20je%20souhaite%20d%C3%A9couvrir%20vos%20locations%20au%20Maroc.";

export function MoroccoStayLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = "fr";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbf6eb] text-[#34271e]">
      <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/45 bg-[#fbf6eb]/90 px-4 py-3 shadow-[0_14px_50px_-34px_rgba(35,25,17,.7)] backdrop-blur-xl sm:rounded-full sm:px-6">
          <a href="#accueil-maroc" className="flex min-h-10 flex-col justify-center">
            <span className="font-display text-2xl font-semibold leading-none text-[#493123] sm:text-3xl">
              Maisons du Maroc
            </span>
            <span className="mt-1.5 text-[8px] font-bold uppercase tracking-[.22em] text-[#967547]">
              Appartements · Villas · Séjours de charme
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation Maroc">
            <a
              href="#esprit"
              className="rounded-full px-3 py-2 text-xs font-semibold text-[#66584c] transition hover:bg-[#efe3d2]"
            >
              L’esprit
            </a>
            <a
              href="#adresses"
              className="rounded-full px-3 py-2 text-xs font-semibold text-[#66584c] transition hover:bg-[#efe3d2]"
            >
              Destinations
            </a>
            <a
              href="#contact-maroc"
              className="rounded-full px-3 py-2 text-xs font-semibold text-[#66584c] transition hover:bg-[#efe3d2]"
            >
              Votre séjour
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/"
              className="hidden rounded-full px-3 py-2 text-[10px] font-semibold text-[#76634f] transition hover:bg-[#efe3d2] sm:inline-flex"
            >
              Costa del Sol
            </a>
            <a
              href={enquiryLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Demander un séjour au Maroc sur WhatsApp"
              className="inline-flex size-10 items-center justify-center rounded-full bg-[#557668] text-white transition hover:bg-[#405f52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#557668] focus-visible:ring-offset-2"
            >
              <MessageCircle size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main id="accueil-maroc">{children}</main>

      <footer className="bg-[#30251e] text-[#fbf6eb]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
          <div>
            <p className="font-display text-3xl">Maisons du Maroc</p>
            <p className="mt-2 max-w-lg text-xs leading-6 text-white/65">
              Des appartements et villas choisis pour découvrir le Maroc avec le sentiment d’être
              chez soi.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs">
            <a className="text-white/75 transition hover:text-white" href="/">
              Découvrir Solveig’s Prestige Service
            </a>
            <a
              className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[#f1dfc4] px-5 font-semibold text-[#34271e] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              href={enquiryLink}
              target="_blank"
              rel="noreferrer"
            >
              Imaginer mon séjour <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
