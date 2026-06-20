"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ProductGrid } from "@/components/product/product-grid";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/lib/wishlist-store";
import { products } from "@/data";

export default function WishlistPage() {
  const ids = useWishlist((s) => s.ids);
  const items = products.filter((p) => ids.has(p.id));

  return (
    <>
      <PageHeader
        eyebrow="Account"
        title="Wishlist"
        description="Pieces you've saved across sessions. Add them to cart whenever you're ready."
      />
      <Container size="wide" className="py-16 sm:py-20">
        {items.length === 0 ? (
          <div className="border border-line py-20 text-center">
            <p className="beuter-display text-3xl">Nothing saved yet.</p>
            <p className="mt-3 text-muted-strong">
              Tap the heart on any product to save it here.
            </p>
            <Link href="/shop" className="mt-8 inline-block">
              <Button size="md">Browse the shop</Button>
            </Link>
          </div>
        ) : (
          <ProductGrid products={items} columns={{ base: 2, md: 3, lg: 4 }} />
        )}
      </Container>
    </>
  );
}
