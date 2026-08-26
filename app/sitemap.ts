import type { MetadataRoute } from "next";
import { servicePages } from "@/content/servicePages";
import { site } from "@/content/site";
import { getPublishedArticles } from "@/lib/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const articles = await getPublishedArticles();
  const articleEntries: MetadataRoute.Sitemap = articles
    .filter((article) => article.type === "article" && article.slug)
    .map((article) => ({
      url: `${site.url}/articles/${article.slug}`,
      lastModified: new Date(article.updated_at),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/fondateur`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/articles`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...servicePages.map(({ slug }) => ({
      url: `${site.url}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articleEntries,
  ];
}
