import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getStaticDocsByCategory } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = ["/", "/hizmetler", "/hakkimizda", "/iletisim", "/gizlilik"] as const;
  const serviceRoutes = getStaticDocsByCategory("hizmet").map((d) => `/hizmetler/${d.slug}`);
  const regionRoutes = getStaticDocsByCategory("bolge").map((d) => `/bolgeler/${d.slug}`);

  return ["/bolgeler", ...routes, ...serviceRoutes, ...regionRoutes].map((path) => ({
    url: new URL(path, siteConfig.siteUrl).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

