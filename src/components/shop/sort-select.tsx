"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { ChangeEvent } from "react";

const OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price · low to high" },
  { value: "price-desc", label: "Price · high to low" },
] as const;

export type ShopSortValue = (typeof OPTIONS)[number]["value"];

export function SortSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const current = params.get("sort") ?? "featured";

  function onChange(event: ChangeEvent<HTMLSelectElement>) {
    const next = new URLSearchParams(params.toString());
    if (event.target.value === "featured") {
      next.delete("sort");
    } else {
      next.set("sort", event.target.value);
    }
    const query = next.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <label className="flex items-center gap-3 text-[12px] tracking-[0.18em] uppercase text-muted-strong">
      <span>Sort</span>
      <select
        value={current}
        onChange={onChange}
        className="bg-transparent border-b border-foreground/30 py-1 focus:outline-none focus:border-foreground"
      >
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value} className="text-foreground">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
