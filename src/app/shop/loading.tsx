import { Container } from "@/components/container";
import { ProductCardSkeleton } from "@/components/product/product-card-skeleton";

export default function ShopLoading() {
  return (
    <Container size="wide" className="py-12 sm:py-16">
      <div className="space-y-4">
        <div className="h-3 w-24 bg-line animate-pulse" />
        <div className="h-10 w-72 bg-line animate-pulse" />
      </div>
      <div className="mt-10 grid md:grid-cols-[200px_1fr] gap-10">
        <div className="hidden md:flex flex-col gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-3 w-32 bg-line animate-pulse" />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
          {Array.from({ length: 9 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </Container>
  );
}
