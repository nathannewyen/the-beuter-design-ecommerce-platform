import type { Product } from "@/types";
import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  className?: string;
  columns?: { base?: number; md?: number; lg?: number };
}

const COL_BASE = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
} as const;
const COL_MD = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
} as const;
const COL_LG = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
} as const;

export function ProductGrid({
  products,
  className,
  columns = { base: 2, md: 3, lg: 4 },
}: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid gap-x-4 gap-y-12",
        COL_BASE[columns.base as keyof typeof COL_BASE] ?? "grid-cols-2",
        COL_MD[columns.md as keyof typeof COL_MD] ?? "md:grid-cols-3",
        COL_LG[columns.lg as keyof typeof COL_LG] ?? "lg:grid-cols-4",
        className,
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
