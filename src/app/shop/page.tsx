import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProductGrid } from "@/components/product/product-grid";
import { FilterRail } from "@/components/shop/filter-rail";
import { SortSelect } from "@/components/shop/sort-select";
import { filterProducts } from "@/data";
import type { Product, ProductCategory, ProductGender } from "@/types";

export const metadata: Metadata = {
  title: "Webstore",
  description: "Shop the full BEUTER® catalog.",
};

type SearchParams = Promise<{
  gender?: string;
  category?: string;
  on_sale?: string;
  sort?: string;
}>;

export default async function ShopPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const gender = params.gender as ProductGender | undefined;
  const category = params.category as ProductCategory | undefined;
  const onSale = params.on_sale === "1";
  const sort = params.sort;

  let items = filterProducts({ gender, category, onSale });
  items = sortProducts(items, sort);

  return (
    <Container size="wide" className="py-12 sm:py-16">
      <header className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="beuter-eyebrow text-muted">Webstore</p>
          <h1 className="beuter-display text-4xl sm:text-5xl mt-3">
            {titleFor(gender, category)}
          </h1>
          <p className="mt-3 text-sm text-muted-strong">
            {items.length} {items.length === 1 ? "piece" : "pieces"}
          </p>
        </div>
        <SortSelect />
      </header>

      <div className="mt-10 grid md:grid-cols-[200px_1fr] gap-10">
        <FilterRail />
        {items.length > 0 ? (
          <ProductGrid products={items} columns={{ base: 2, md: 2, lg: 3 }} />
        ) : (
          <div className="border border-line p-12 text-center">
            <p className="beuter-display text-2xl">Nothing matches that combination.</p>
            <p className="mt-3 text-sm text-muted">
              Try removing a filter — or browse the whole shop.
            </p>
          </div>
        )}
      </div>
    </Container>
  );
}

function titleFor(gender?: ProductGender, category?: ProductCategory) {
  if (gender === "womens") return "Women";
  if (gender === "mens") return "Men";
  if (gender === "unisex") return "Unisex";
  if (category === "denim") return "Denim";
  if (category) return category[0].toUpperCase() + category.slice(1);
  return "All pieces";
}

function sortProducts(items: Product[], sort?: string): Product[] {
  switch (sort) {
    case "price-asc":
      return [...items].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...items].sort((a, b) => b.price - a.price);
    case "newest":
      return [...items].sort(
        (a, b) => Number(Boolean(b.isNew)) - Number(Boolean(a.isNew)),
      );
    default:
      return items;
  }
}
