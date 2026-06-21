"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/logo";
import { primaryNav, siteConfig } from "@/lib/site";
import { useCart } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

export function SiteSidebar() {
  const pathname = usePathname();
  const itemCount = useCart((s) =>
    s.lines.reduce((total, line) => total + line.quantity, 0),
  );
  const openCart = useCart((s) => s.open);

  return (
    <aside
      className="hidden md:flex fixed top-0 left-0 z-30 h-screen w-[var(--sidebar-width)] flex-col px-7 py-7"
      aria-label="Primary"
    >
      <Logo className="mb-8" />
      <nav className="flex flex-col gap-[6px]">
        {primaryNav.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href.split("?")[0]);
          return (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={cn(
                "bd-nav-link transition-opacity hover:opacity-60",
                isActive ? "opacity-100" : "opacity-90",
              )}
            >
              {item.label}
            </Link>
          );
        })}
        <button
          type="button"
          onClick={openCart}
          className="bd-nav-link mt-1 text-left transition-opacity hover:opacity-60"
        >
          Shopping Bag ({itemCount})
        </button>
      </nav>
      <div className="mt-auto pt-6 flex gap-3 bd-eyebrow opacity-70">
        <span className="opacity-50">Tiếng Việt</span>
        <span>/</span>
        <span>English</span>
      </div>
      <p className="mt-3 text-[10px] tracking-[0.12em] uppercase opacity-50 max-w-[160px] leading-relaxed">
        {siteConfig.legal.copyright}
      </p>
    </aside>
  );
}
