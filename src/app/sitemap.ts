import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { galleries } from "@/data/portfolio";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/portfolio", "/films", "/services", "/portal", "/blog", "/contact"].map(
    (p) => ({
      url: `${site.url}${p}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1 : 0.8,
    })
  );

  const galleryRoutes = galleries.map((g) => ({
    url: `${site.url}/portfolio/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...galleryRoutes, ...blogRoutes];
}
