import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Markdown } from "@/components/articles/Markdown";
import { articleExcerpt, getPublishedArticleBySlug } from "@/lib/articles";
import { site } from "@/content/site";

export const revalidate = 300;

type Props = { params: Promise<{ slug: string }> };

const dateFormatter = new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" });

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);
  if (!article) return { title: "Article introuvable — Expertise 360" };
  const description = articleExcerpt(article, 160);
  return {
    title: `${article.title} — Expertise 360`,
    description,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: {
      title: article.title,
      description,
      url: `${site.url}/articles/${slug}`,
      type: "article",
      publishedTime: article.published_at ?? undefined,
      authors: [site.founder],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getPublishedArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: articleExcerpt(article, 160),
    datePublished: article.published_at ?? undefined,
    dateModified: article.updated_at,
    inLanguage: "fr",
    author: {
      "@type": "Person",
      name: site.founder,
      url: `${site.url}/fondateur`,
    },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/articles/${slug}`,
  };

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow="Article"
          title={article.title}
          intro={
            article.published_at
              ? `Par ${site.founder} · ${dateFormatter.format(new Date(article.published_at))}`
              : `Par ${site.founder}`
          }
          breadcrumb={[
            { label: "Accueil", href: "/" },
            { label: "Articles", href: "/articles" },
            { label: article.title },
          ]}
        />

        <article aria-label={article.title} className="bg-white py-16 sm:py-20">
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
            <Markdown>{article.content ?? ""}</Markdown>
          </div>
        </article>

        <CtaBand
          title="Poursuivons la conversation"
          text="Une question sur ce sujet, un contexte proche du vôtre ? Parlons-en directement."
        />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
