"use client";

import { cn } from "@/lib/utils";
import { sortSizes } from "@/lib/labels";
import type { ProductSize } from "@/types";

interface SizePickerProps {
  sizes: ProductSize[];
  value: ProductSize | null;
  onChange: (size: ProductSize) => void;
  error?: boolean;
}

export function SizePicker({ sizes, value, onChange, error }: SizePickerProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="beuter-eyebrow">Size</p>
        <button
          type="button"
          className="text-[12px] tracking-wide underline underline-offset-4 text-muted"
        >
          Size guide
        </button>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-2">
        {sortSizes(sizes).map((size) => {
          const isActive = value === size;
          return (
            <button
              key={size}
              type="button"
              onClick={() => onChange(size)}
              className={cn(
                "h-11 text-[13px] uppercase tracking-wide border transition-colors",
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-line text-foreground hover:border-foreground",
              )}
            >
              {size}
            </button>
          );
        })}
      </div>
      {error && (
        <p className="mt-2 text-[12px] text-red-600">Please pick a size.</p>
      )}
    </div>
  );
}
