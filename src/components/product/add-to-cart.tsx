"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SizePicker } from "./size-picker";
import { useCart } from "@/lib/cart-store";
import { useWishlist } from "@/lib/wishlist-store";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product, ProductSize } from "@/types";

interface AddToCartProps {
  product: Product;
}

export function AddToCart({ product }: AddToCartProps) {
  const [size, setSize] = useState<ProductSize | null>(null);
  const [error, setError] = useState(false);
  const add = useCart((s) => s.add);
  const wished = useWishlist((s) => s.ids.has(product.id));
  const toggleWish = useWishlist((s) => s.toggle);

  function onAdd() {
    if (!size) {
      setError(true);
      return;
    }
    add({ productId: product.id, size, quantity: 1 });
  }

  return (
    <div className="flex flex-col gap-6">
      <SizePicker
        sizes={product.sizes}
        value={size}
        onChange={(value) => {
          setSize(value);
          setError(false);
        }}
        error={error}
      />
      <div className="flex gap-3">
        <Button size="lg" fullWidth onClick={onAdd}>
          Add to cart
        </Button>
        <button
          type="button"
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggleWish(product.id)}
          className={cn(
            "h-14 w-14 border flex items-center justify-center transition-colors",
            wished
              ? "border-foreground bg-foreground text-background"
              : "border-foreground text-foreground hover:bg-foreground hover:text-background",
          )}
        >
          <Heart size={18} strokeWidth={1.5} fill={wished ? "currentColor" : "none"} />
        </button>
      </div>
    </div>
  );
}
