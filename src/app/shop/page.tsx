import type { Metadata } from "next";
import { CategorySidebar } from "@/components/shop/category-sidebar";
import { ProductCard } from "@/components/product/product-card";
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
    <div className="px-6 sm:px-10 pt-10 pb-20 flex flex-col lg:flex-row gap-10 lg:gap-16">
      <CategorySidebar />
      <div className="flex-1">
        {items.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-14">
            {items.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={i < 3}
              />
            ))}
          </div>
        ) : (
          <div className="border border-line py-24 text-center">
            <p className="text-2xl font-semibold tracking-tight">
              Nothing matches that combination.
            </p>
            <p className="mt-3 bd-eyebrow opacity-60">
              Try removing a filter or browse the whole shop.
            </p>
          </div>
        )}
      </div>
    </div>
  );
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
