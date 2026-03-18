import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = ["/", "/hizmetler", "/misyonumuz", "/hakkimizda", "/iletisim", "/gizlilik"] as const;
  const articleRoutes = articles.map((a) => `/makale/${a.slug}`);

  return [...routes, ...articleRoutes].map((path) => ({
    url: new URL(path, siteConfig.siteUrl).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

