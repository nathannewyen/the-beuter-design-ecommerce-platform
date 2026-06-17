import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/types";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="mt-24 sm:mt-32">
      <Container size="wide">
        <SectionHeader
          eyebrow="Now in stock"
          title="Pieces shaping the season"
          description="A short edit from the current floor — cuts that read well across heat, light and the office desk."
          link={{ href: "/shop", label: "Shop all" }}
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={i < 2}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
