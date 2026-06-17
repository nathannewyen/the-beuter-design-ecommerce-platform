"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  className?: string;
}

export function ProductCard({ product, priority, className }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const showHover = hovered && product.hoverImage;
  const primary = product.images[0];

  return (
    <Link
      href={`/shop/${product.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn("group block", className)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-off-white">
        <Image
          src={primary.src}
          alt={primary.alt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
          priority={priority}
          className={cn(
            "object-cover transition-opacity duration-500",
            showHover ? "opacity-0" : "opacity-100",
          )}
        />
        {product.hoverImage && (
          <Image
            src={product.hoverImage.src}
            alt={product.hoverImage.alt}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
            className={cn(
              "object-cover transition-opacity duration-500",
              showHover ? "opacity-100" : "opacity-0",
            )}
          />
        )}
        {product.isNew && (
          <span className="absolute top-3 left-3 beuter-eyebrow bg-background/90 backdrop-blur px-2 py-1">
            New
          </span>
        )}
        {product.compareAtPrice && (
          <span className="absolute top-3 right-3 beuter-eyebrow bg-foreground text-background px-2 py-1">
            Sale
          </span>
        )}
      </div>
      <div className="pt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[13px] text-foreground leading-snug truncate">
            {product.name}
          </p>
          <p className="text-[12px] text-muted mt-0.5 tracking-wide uppercase">
            {product.color}
          </p>
        </div>
        <div className="text-right shrink-0">
          {product.compareAtPrice ? (
            <p className="text-[13px]">
              <span className="text-foreground">
                {formatPrice(product.price)}
              </span>
              <span className="ml-2 text-muted line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            </p>
          ) : (
            <p className="text-[13px] text-foreground">
              {formatPrice(product.price)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
