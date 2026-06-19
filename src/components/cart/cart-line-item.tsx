"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { QuantityStepper } from "./quantity-stepper";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/lib/cart-store";
import type { CartLine, Product } from "@/types";

interface CartLineItemProps {
  line: CartLine;
  product: Product;
  onNavigate?: () => void;
}

export function CartLineItem({ line, product, onNavigate }: CartLineItemProps) {
  const setQuantity = useCart((s) => s.setQuantity);
  const remove = useCart((s) => s.remove);
  const image = product.images[0];

  return (
    <li className="flex gap-4 py-5 border-b border-line">
      <Link
        href={`/shop/${product.slug}`}
        onClick={onNavigate}
        className="relative w-20 aspect-[3/4] shrink-0 overflow-hidden bg-off-white"
      >
        <Image src={image.src} alt={image.alt} fill sizes="80px" className="object-cover" />
      </Link>
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              href={`/shop/${product.slug}`}
              onClick={onNavigate}
              className="text-[13px] hover:underline underline-offset-4"
            >
              {product.name}
            </Link>
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted mt-1">
              {product.color} · Size {line.size}
            </p>
          </div>
          <button
            type="button"
            aria-label="Remove from cart"
            onClick={() => remove(line.productId, line.size)}
            className="text-muted hover:text-foreground"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>
        <div className="mt-auto pt-3 flex items-end justify-between">
          <QuantityStepper
            value={line.quantity}
            onChange={(value) => setQuantity(line.productId, line.size, value)}
          />
          <p className="text-[13px] tabular-nums">
            {formatPrice(product.price * line.quantity)}
          </p>
        </div>
      </div>
    </li>
  );
}
