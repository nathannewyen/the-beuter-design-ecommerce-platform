"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Campaign } from "@/types";
import { cn } from "@/lib/utils";

interface CampaignHeroProps {
  campaigns: Campaign[];
  autoplayMs?: number;
}

export function CampaignHero({ campaigns, autoplayMs = 6500 }: CampaignHeroProps) {
  const [index, setIndex] = useState(0);
  const safeIndex = ((index % campaigns.length) + campaigns.length) % campaigns.length;
  const active = campaigns[safeIndex];

  useEffect(() => {
    if (campaigns.length <= 1) return;
    const id = window.setInterval(() => setIndex((i) => i + 1), autoplayMs);
    return () => window.clearInterval(id);
  }, [autoplayMs, campaigns.length]);

  return (
    <section className="relative bg-black text-white">
      <div className="relative h-[80vh] min-h-[560px] w-full">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={active.hero.src}
              alt={active.hero.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block">
          <p className="text-xl italic text-[#f0c25b] font-serif">{active.eyebrow}</p>
        </div>

        <Link
          href={active.link ?? "/shop"}
          className="absolute bottom-7 right-8 italic text-3xl font-serif text-white/95 hover:opacity-80"
          style={{ fontFamily: 'Brush Script MT, "Snell Roundhand", cursive' }}
        >
          {active.season.toLowerCase()}
        </Link>

        {campaigns.length > 1 && (
          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-2">
            {campaigns.map((c, i) => (
              <button
                key={c.id}
                type="button"
                aria-label={`Show ${c.title}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-[2px] w-7 transition-colors",
                  i === safeIndex ? "bg-white" : "bg-white/40",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
