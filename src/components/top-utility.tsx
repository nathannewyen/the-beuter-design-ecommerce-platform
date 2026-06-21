"use client";

import Link from "next/link";
import { Search, User } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function TopUtility() {
  const itemCount = useCart((s) =>
    s.lines.reduce((total, line) => total + line.quantity, 0),
  );
  const openCart = useCart((s) => s.open);

  return (
    <div className="hidden md:flex fixed top-7 right-7 z-30 items-center gap-8">
      <Link href="/account" aria-label="Account" className="hover:opacity-60">
        <User size={18} strokeWidth={1.5} />
      </Link>
      <Link href="/search" className="bd-nav-link inline-flex items-center gap-2 hover:opacity-60">
        Search a product
        <Search size={14} strokeWidth={1.5} />
      </Link>
      <button
        type="button"
        onClick={openCart}
        className="bd-nav-link hover:opacity-60"
      >
        Shopping Bag ({itemCount})
      </button>
    </div>
  );
}
