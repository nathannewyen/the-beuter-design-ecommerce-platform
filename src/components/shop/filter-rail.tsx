"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  CATEGORY_LABEL,
  GENDER_LABEL,
} from "@/lib/labels";
import type { ProductCategory, ProductGender } from "@/types";

const GENDERS: ProductGender[] = ["womens", "mens", "unisex"];
const CATEGORIES: ProductCategory[] = [
  "tops",
  "shirts",
  "knitwear",
  "outerwear",
  "denim",
  "shorts",
  "trousers",
];

export function FilterRail() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const gender = params.get("gender") as ProductGender | null;
  const category = params.get("category") as ProductCategory | null;
  const onSale = params.get("on_sale") === "1";

  const setParam = useCallback(
    (key: string, value: string | null) => {
      const next = new URLSearchParams(params.toString());
      if (value === null) {
        next.delete(key);
      } else {
        next.set(key, value);
      }
      const query = next.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [params, pathname, router],
  );

  return (
    <aside className="flex flex-col gap-8 md:sticky md:top-28">
      <FilterGroup title="Gender">
        {GENDERS.map((g) => (
          <FilterButton
            key={g}
            active={gender === g}
            onClick={() => setParam("gender", gender === g ? null : g)}
          >
            {GENDER_LABEL[g]}
          </FilterButton>
        ))}
      </FilterGroup>

      <FilterGroup title="Category">
        {CATEGORIES.map((c) => (
          <FilterButton
            key={c}
            active={category === c}
            onClick={() => setParam("category", category === c ? null : c)}
          >
            {CATEGORY_LABEL[c]}
          </FilterButton>
        ))}
      </FilterGroup>

      <FilterGroup title="Other">
        <FilterButton
          active={onSale}
          onClick={() => setParam("on_sale", onSale ? null : "1")}
        >
          On sale
        </FilterButton>
      </FilterGroup>
    </aside>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="beuter-eyebrow text-muted mb-3">{title}</p>
      <div className="flex flex-col gap-1.5 items-start">{children}</div>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "text-[13px] text-left transition-colors",
        active
          ? "text-foreground underline underline-offset-4"
          : "text-muted-strong hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
