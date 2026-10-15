import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock3, MapPin } from "lucide-react";

import { ContactBand, PageHero, SolveigLayout } from "@/components/SolveigLayout";
import { blogArticles } from "@/data/blogArticles";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title: "Le carnet Solveig — Maisons, séjours & art de recevoir",
      },
      {
        name: "description",
        content:
          "Inspirations pour choisir une maison de vacances au Maroc, découvrir Marrakech et Essaouira et savourer l’art de recevoir.",
      },
      { property: "og:title", content: "Le carnet Solveig — Séjours & art de vivre" },
      {
        property: "og:description",
        content: "Des idées pour choisir une adresse de charme et habiter le voyage à votre façon.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SolveigLayout>
      <PageHero
        eyebrow="Le carnet Solveig · Maisons · Voyages · Art de vivre"
        title="Des adresses à rêver. Des idées à emporter."
        description="Un carnet de voyage et de maison pour choisir votre séjour, trouver le bon rythme et profiter pleinement des moments partagés."
      />

      <section className="bg-[#fbf6eb]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-10 flex flex-col gap-4 border-b border-[#78664c]/20 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#987543]">
                <BookOpen size={15} aria-hidden="true" />
                Carnet d’inspiration
              </p>
              <h2 className="mt-3 font-display text-4xl font-medium text-[#34271e] sm:text-5xl">
                À lire au fil de vos envies.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-[#74665a]">
              Maisons de charme, destinations marocaines et art de recevoir : quelques repères pour
              imaginer un séjour qui vous ressemble.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {blogArticles.map((article) => (
              <article
                key={article.slug}
                className="group overflow-hidden rounded-[1.4rem] border border-[#78664c]/15 bg-white/80 shadow-[0_20px_60px_-48px_rgba(53,39,28,.5)]"
              >
                <a
                  href={`#${article.slug}`}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4f7f70]"
                >
                  <div className="relative aspect-[1.45] overflow-hidden bg-[#e8dccb]">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[#fbf6eb]/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.16em] text-[#735836]">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="flex items-center gap-2 text-[10px] uppercase tracking-[.14em] text-[#8a7969]">
                      <Clock3 size={13} aria-hidden="true" />
                      {article.readingTime} de lecture
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-[#34271e] group-hover:text-[#4f7f70]">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-[#74665a]">{article.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.18em] text-[#4f7f70]">
                      Lire l’article <ArrowRight size={13} aria-hidden="true" />
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#efe3d2]">
        {blogArticles.map((article, index) => (
          <article
            key={article.slug}
            id={article.slug}
            className="scroll-mt-24 border-b border-[#78664c]/20 last:border-b-0"
          >
            <div className="mx-auto grid max-w-[1440px] gap-9 px-5 py-16 sm:px-8 md:grid-cols-[.68fr_1.32fr] md:gap-14 lg:px-12 lg:py-24">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative aspect-[1.2] overflow-hidden rounded-[1.4rem] bg-[#ddc9ac]">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                  <a
                    href={article.imageCreditUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-3 left-3 rounded-full bg-[#2d2119]/65 px-3 py-2 text-[9px] text-white backdrop-blur-sm hover:bg-[#2d2119]/85"
                  >
                    Photo : {article.imageCredit}
                  </a>
                </div>
              </div>
              <div
                className={`max-w-3xl ${index % 2 === 1 ? "md:order-1 md:justify-self-end" : ""}`}
              >
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#987543]">
                  {article.category} · {article.readingTime} de lecture
                </p>
                <h2 className="mt-4 font-display text-4xl font-medium leading-[.98] text-[#34271e] text-balance sm:text-5xl md:text-6xl">
                  {article.title}
                </h2>
                <p className="mt-5 border-l-2 border-[#b9935a] pl-4 text-base leading-7 text-[#66584c]">
                  {article.excerpt}
                </p>
                <div className="mt-6 space-y-4 text-sm leading-7 text-[#5f554a]">
                  {article.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="bg-[#33251b] px-5 py-16 text-[#f8efdf] sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#e5c17b]">
              <MapPin size={14} aria-hidden="true" />
              Séjours privés au Maroc
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">
              Envie de trouver votre adresse ?
            </h2>
          </div>
          <Link
            to="/locations-maroc"
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-[#f4e7d1] px-6 py-3 text-sm font-semibold text-[#34271e] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Explorer les locations <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ContactBand />
    </SolveigLayout>
  );
}
