import type { MetadataRoute } from "next";

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
    "/about",
    "/privacy",
    "/terms"
  ];

  const now = new Date();
  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/get-help" ? 0.9 : 0.7
  }));
}

