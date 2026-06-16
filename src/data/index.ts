import type { Product, ProductCategory, ProductGender } from "@/types";
import { products } from "./products";
import { campaigns } from "./campaigns";

export { products, campaigns };

export function findProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(limit?: number): Product[] {
  const filtered = products.filter((p) => p.isFeatured);
  return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

export interface CatalogFilters {
  gender?: ProductGender;
  category?: ProductCategory;
  onSale?: boolean;
}

export function filterProducts(filters: CatalogFilters = {}): Product[] {
  return products.filter((p) => {
    if (filters.gender && p.gender !== filters.gender) return false;
    if (filters.category && p.category !== filters.category) return false;
    if (filters.onSale && !p.compareAtPrice) return false;
    return true;
  });
}

export function findCampaignBySlug(slug: string) {
  return campaigns.find((c) => c.slug === slug);
}
