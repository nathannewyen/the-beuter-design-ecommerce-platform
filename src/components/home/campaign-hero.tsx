"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Campaign } from "@/types";
import { Container } from "@/components/container";
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
    const id = window.setInterval(
      () => setIndex((i) => i + 1),
      autoplayMs,
    );
    return () => window.clearInterval(id);
  }, [autoplayMs, campaigns.length]);

  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <div className="relative aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9] w-full">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <Container size="wide" className="relative z-10 h-full flex items-end pb-12 md:pb-20">
          <div className="max-w-2xl">
            <p className="beuter-eyebrow text-background/80">{active.eyebrow}</p>
            <h1 className="beuter-display text-background text-5xl sm:text-6xl md:text-7xl mt-4">
              {active.title}
            </h1>
            <p className="mt-5 text-background/85 max-w-md text-sm sm:text-base leading-relaxed">
              {active.description}
            </p>
            <Link
              href={active.link ?? "/shop"}
              className="mt-7 inline-flex items-center beuter-eyebrow text-background border-b border-background/60 hover:border-background pb-1"
            >
              Discover the collection
            </Link>
          </div>
        </Container>
      </div>

      {campaigns.length > 1 && (
        <div className="absolute z-10 bottom-6 right-6 sm:bottom-10 sm:right-10 flex gap-2">
          {campaigns.map((c, i) => (
            <button
              key={c.id}
              type="button"
              aria-label={`Show ${c.title}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1 w-8 transition-colors",
                i === safeIndex ? "bg-background" : "bg-background/40",
              )}
            />
          ))}
        </div>
      )}
    </section>
  );
}
