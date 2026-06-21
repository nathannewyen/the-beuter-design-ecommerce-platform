"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { shopCategoryNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CategorySidebar() {
  const pathname = usePathname();
  const params = useSearchParams();
  const currentQuery = params.toString();
  const currentHref = currentQuery ? `${pathname}?${currentQuery}` : pathname;

  return (
    <aside className="w-full lg:w-[220px] shrink-0 mb-12 lg:mb-0">
      <div className="space-y-7">
        {shopCategoryNav.map((section) => (
          <div key={section.title}>
            <p className="bd-section-label mb-2">{section.title}</p>
            <ul className="space-y-[2px]">
              {section.items.map((item) => {
                const isActive = item.href === currentHref;
                return (
                  <li key={item.href + item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "bd-subcategory hover:opacity-60",
                        isActive ? "opacity-100 font-semibold" : "opacity-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
