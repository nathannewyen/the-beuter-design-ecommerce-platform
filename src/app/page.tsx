import type { Metadata } from "next";
import { CampaignHero } from "@/components/home/campaign-hero";
import { FeaturedProducts } from "@/components/home/featured-products";
import { CampaignSplit } from "@/components/home/campaign-split";
import { BrandStatement } from "@/components/home/brand-statement";
import { NewsletterTeaser } from "@/components/home/newsletter-teaser";
import { Reveal } from "@/components/motion/reveal";
import { campaigns, getFeaturedProducts } from "@/data";

export const metadata: Metadata = {
  title: "BEUTER® · Summer 26",
  description:
    "BEUTER® Summer 26 — silk satin shirts, washed denim and pleated shorts cut for long, warm seasons.",
};

export default function HomePage() {
  const featured = getFeaturedProducts(8);
  const secondary = campaigns.find((c) => c.id === "spring-26-intermission");

  return (
    <>
      <CampaignHero campaigns={campaigns} />
      <Reveal>
        <FeaturedProducts products={featured} />
      </Reveal>
      {secondary && (
        <Reveal>
          <CampaignSplit campaign={secondary} />
        </Reveal>
      )}
      <Reveal>
        <BrandStatement />
      </Reveal>
      <Reveal>
        <NewsletterTeaser />
      </Reveal>
    </>
  );
}
