"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, User, Heart, ShoppingBag, Menu } from "lucide-react";
import { Container } from "@/components/container";
import { Logo } from "@/components/brand/logo";
import { primaryNav } from "@/lib/site";
import { useCart } from "@/lib/cart-store";
import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const lineCount = useCart((state) =>
    state.lines.reduce((total, line) => total + line.quantity, 0),
  );
  const openCart = useCart((state) => state.open);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur border-b border-line"
          : "bg-background border-b border-transparent",
      )}
    >
      <div className="hidden md:block border-b border-line/60 bg-background/50">
        <Container size="wide">
          <p className="beuter-eyebrow text-muted py-2 text-center">
            Worldwide shipping · Final sale items not eligible for return
          </p>
        </Container>
      </div>

      <Container size="wide">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden p-2 -ml-2 text-foreground"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>

          <nav className="hidden md:flex items-center gap-7 flex-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="beuter-eyebrow text-muted-strong hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex-1 flex justify-center md:flex-none">
            <Logo />
          </div>

          <div className="flex-1 flex items-center justify-end gap-1 sm:gap-2">
            <button
              type="button"
              aria-label="Search"
              className="hidden sm:inline-flex p-2 text-foreground/80 hover:text-foreground"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <Link
              href="/account"
              aria-label="Account"
              className="hidden sm:inline-flex p-2 text-foreground/80 hover:text-foreground"
            >
              <User size={18} strokeWidth={1.5} />
            </Link>
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="hidden sm:inline-flex p-2 text-foreground/80 hover:text-foreground"
            >
              <Heart size={18} strokeWidth={1.5} />
            </Link>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart (${lineCount} items)`}
              className="relative p-2 text-foreground hover:text-foreground"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {lineCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-foreground text-background text-[10px] font-medium rounded-full min-w-[16px] h-4 px-1 inline-flex items-center justify-center">
                  {lineCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </Container>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
