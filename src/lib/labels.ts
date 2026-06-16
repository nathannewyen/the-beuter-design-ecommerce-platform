import type { ProductCategory, ProductGender, ProductSize } from "@/types";

export const GENDER_LABEL: Record<ProductGender, string> = {
  womens: "Women",
  mens: "Men",
  unisex: "Unisex",
};

export const CATEGORY_LABEL: Record<ProductCategory, string> = {
  tops: "Tops",
  shirts: "Shirts",
  knitwear: "Knitwear",
  outerwear: "Outerwear",
  denim: "Denim",
  shorts: "Shorts",
  trousers: "Trousers",
  accessories: "Accessories",
};

export const SIZE_LABEL: Record<ProductSize, string> = {
  XS: "XS",
  S: "S",
  M: "M",
  L: "L",
  XL: "XL",
};

export const SIZE_ORDER: ProductSize[] = ["XS", "S", "M", "L", "XL"];

export function sortSizes(sizes: ProductSize[]): ProductSize[] {
  return [...sizes].sort(
    (a, b) => SIZE_ORDER.indexOf(a) - SIZE_ORDER.indexOf(b),
  );
}
