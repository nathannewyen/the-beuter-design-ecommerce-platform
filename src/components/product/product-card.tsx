import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  className?: string;
}

export function ProductCard({ product, priority, className }: ProductCardProps) {
  const primary = product.images[0];
  return (
    <Link
      href={`/shop/${product.slug}`}
      className={cn("group block", className)}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-white">
        <Image
          src={primary.src}
          alt={primary.alt}
          fill
          sizes="(min-width: 1280px) 28vw, (min-width: 768px) 32vw, 50vw"
          priority={priority}
          className="object-contain"
        />
      </div>
      <div className="pt-5 px-2 text-center space-y-1">
        <p className="bd-product-name">
          {product.name} - {product.color}
        </p>
        <p className="bd-product-price">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
