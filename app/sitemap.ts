import type { MetadataRoute } from "next";
import { servicePages } from "@/content/servicePages";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
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
    ...servicePages.map(({ slug }) => ({
      url: `${site.url}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
