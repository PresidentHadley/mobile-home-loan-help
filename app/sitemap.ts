import type { MetadataRoute } from "next";
import { PRIORITY_STATES } from "@/lib/state-landings";
import { BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const pages = [
    "/",
    "/calculator",
    "/requirements",
    "/leased-land",
    "/bad-credit",
    "/new-vs-used",
    "/get-help",
    "/states",
    "/resources",
    "/blog",
    "/about",
    "/privacy",
    "/terms"
  ];

  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/get-help" ? 0.9 : path === "/states" ? 0.85 : 0.7
  }));

  const stateRoutes: MetadataRoute.Sitemap = PRIORITY_STATES.map((s) => ({
    url: `${siteUrl}/states/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticRoutes, ...stateRoutes, ...blogRoutes];
}

