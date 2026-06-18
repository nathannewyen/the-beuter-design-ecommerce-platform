"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ProductImage } from "@/types";

interface ProductGalleryProps {
  images: ProductImage[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const safe = images[active] ?? images[0];

  return (
    <div className="grid gap-4 lg:grid-cols-[80px_1fr]">
      <div className="hidden lg:flex flex-col gap-3 max-h-[640px] overflow-y-auto pr-1">
        {images.map((image, i) => (
          <button
            key={image.src + i}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative aspect-[3/4] w-full overflow-hidden bg-off-white border transition-colors",
              i === active ? "border-foreground" : "border-transparent hover:border-line",
            )}
            aria-label={`View image ${i + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <div className="relative aspect-[3/4] w-full overflow-hidden bg-off-white">
        <Image
          src={safe.src}
          alt={safe.alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex lg:hidden gap-2 col-start-1 -col-end-1 overflow-x-auto">
        {images.map((image, i) => (
          <button
            key={image.src + i}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative w-14 aspect-[3/4] shrink-0 overflow-hidden border",
              i === active ? "border-foreground" : "border-transparent",
            )}
            aria-label={`View image ${i + 1}`}
          >
            <Image src={image.src} alt={image.alt} fill sizes="56px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
