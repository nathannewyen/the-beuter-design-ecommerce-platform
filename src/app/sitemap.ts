import type { MetadataRoute } from "next";
import { campaigns, products } from "@/data";
import { siteConfig } from "@/lib/site";

const STATIC_ROUTES = [
  "",
  "/shop",
  "/about",
  "/policy",
  "/shipping",
  "/careers",
  "/contact",
  "/account",
  "/wishlist",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url.replace(/\/$/, "");

  return [
    ...STATIC_ROUTES.map((path) => ({
      url: `${base}${path || "/"}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...products.map((p) => ({
      url: `${base}/shop/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...campaigns.map((c) => ({
      url: `${base}/campaigns/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
