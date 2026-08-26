import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { LinkedInEmbed } from "@/components/articles/LinkedInEmbed";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { articleExcerpt, getPublishedArticles } from "@/lib/articles";
import { site } from "@/content/site";

// ISR : la liste se rafraîchit au plus tard 5 min après une publication ;
// les actions du backoffice appellent revalidatePath pour un effet immédiat.
export const revalidate = 300;

const PAGE_TITLE = "Articles & publications — Expertise 360";
const PAGE_DESCRIPTION =
  "Analyses, tribunes et publications LinkedIn de Djibril Mbengue : finance inclusive, gestion des risques, financement des PME et institutions financières africaines.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/articles" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${site.url}/articles`,
  },
};

const dateFormatter = new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" });

export default async function ArticlesPage() {
  const articles = await getPublishedArticles();

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow="Publications"
          title="Articles & publications"
          intro="Les analyses du cabinet et les prises de parole de Djibril Mbengue — articles de fond publiés ici, et posts LinkedIn sélectionnés."
          breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Articles" }]}
        />

        <Section id="publications" tone="light">
          {articles.length === 0 ? (
            <p className="mx-auto max-w-xl text-center text-lg leading-relaxed text-slate">
              Les premières publications arrivent bientôt. En attendant, retrouvez Djibril
              Mbengue sur{" "}
              <a
                href="https://www.linkedin.com/in/djibril-mbengue-asmec-4b7a0442/"
                rel="noopener noreferrer"
                target="_blank"
                className="font-semibold text-gold-deep underline"
              >
                LinkedIn
              </a>
              .
            </p>
          ) : (
            <ul className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2">
              {articles.map((article, i) => (
                <li key={article.id} className={article.type === "linkedin" ? "sm:row-span-2" : ""}>
                  <Reveal delay={(i % 2) * 80} className="h-full">
                    {article.type === "linkedin" && article.linkedin_url ? (
                      <article className="flex h-full flex-col gap-3 rounded-2xl bg-white p-4 shadow-md shadow-navy/5 ring-1 ring-navy/5">
                        <p className="flex items-center justify-between gap-2 px-1 text-xs font-semibold tracking-widest text-gold-deep uppercase">
                          <span>Post LinkedIn</span>
                          {article.published_at && (
                            <time dateTime={article.published_at} className="font-medium text-slate normal-case tracking-normal">
                              {dateFormatter.format(new Date(article.published_at))}
                            </time>
                          )}
                        </p>
                        <LinkedInEmbed url={article.linkedin_url} title={article.title} />
                      </article>
                    ) : (
                      <article className="flex h-full flex-col gap-3 rounded-2xl bg-white p-6 shadow-md shadow-navy/5 ring-1 ring-navy/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10 hover:ring-gold/40">
                        <p className="flex items-center justify-between gap-2 text-xs font-semibold tracking-widest text-gold-deep uppercase">
                          <span>Article</span>
                          {article.published_at && (
                            <time dateTime={article.published_at} className="font-medium text-slate normal-case tracking-normal">
                              {dateFormatter.format(new Date(article.published_at))}
                            </time>
                          )}
                        </p>
                        <h2 className="font-display text-xl leading-snug font-semibold">
                          <Link href={`/articles/${article.slug}`} className="transition-colors hover:text-gold-deep">
                            {article.title}
                          </Link>
                        </h2>
                        <p className="text-sm leading-relaxed text-slate">{articleExcerpt(article)}</p>
                        <Link
                          href={`/articles/${article.slug}`}
                          className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-gold-deep transition-colors hover:text-gold"
                        >
                          Lire l&apos;article
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </article>
                    )}
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </Section>

        <CtaBand
          title="Un sujet à approfondir ensemble ?"
          text="Chaque mission démarre par un échange direct : décrivez votre problématique."
        />
      </main>
      <Footer />
    </>
  );
}
