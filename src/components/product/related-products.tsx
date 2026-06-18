import { Container } from "@/components/container";
import { ProductCard } from "./product-card";
import type { Product } from "@/types";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;
  return (
    <section className="mt-24">
      <Container size="wide">
        <p className="beuter-eyebrow text-muted">You may also like</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
