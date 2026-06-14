export type ProductGender = "womens" | "mens" | "unisex";

export type ProductCategory =
  | "tops"
  | "shirts"
  | "knitwear"
  | "outerwear"
  | "denim"
  | "shorts"
  | "trousers"
  | "accessories";

export type ProductSize = "XS" | "S" | "M" | "L" | "XL";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  color: string;
  gender: ProductGender;
  category: ProductCategory;
  price: number;
  compareAtPrice?: number;
  sizes: ProductSize[];
  images: ProductImage[];
  description: string;
  details: string[];
  composition: string;
  isNew?: boolean;
  isFeatured?: boolean;
  campaignId?: string;
}

export interface Campaign {
  id: string;
  slug: string;
  title: string;
  season: string;
  eyebrow: string;
  description: string;
  hero: ProductImage;
  secondary?: ProductImage;
}

export interface CartLine {
  productId: string;
  size: ProductSize;
  quantity: number;
}
