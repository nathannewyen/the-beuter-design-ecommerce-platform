"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { useCart } from "@/lib/cart-store";
import { MobileNav } from "@/components/mobile-nav";

export function MobileTopBar() {
  const [open, setOpen] = useState(false);
  const itemCount = useCart((s) =>
    s.lines.reduce((total, line) => total + line.quantity, 0),
  );
  const openCart = useCart((s) => s.open);

  return (
    <>
      <header className="md:hidden sticky top-0 z-30 bg-background border-b border-line">
        <div className="h-14 px-5 flex items-center justify-between">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="-ml-2 p-2"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
          <Logo className="text-[20px]" />
          <button
            type="button"
            onClick={openCart}
            className="bd-eyebrow"
          >
            Bag ({itemCount})
          </button>
        </div>
      </header>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}
