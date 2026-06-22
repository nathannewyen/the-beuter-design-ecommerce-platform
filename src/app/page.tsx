import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { CampaignHero } from "@/components/home/campaign-hero";
import { ProductCard } from "@/components/product/product-card";
import { campaigns, getFeaturedProducts } from "@/data";

export const metadata: Metadata = {
  title: "BEUTER® · Summer 26",
  description:
    "BEUTER® Summer 26 — silk satin shirts, washed denim and pleated shorts cut for long, warm seasons.",
};

export default async function HomePage() {
  const t = await getTranslations("home");
  const featured = getFeaturedProducts(6);
  const intermission = campaigns.find((c) => c.id === "spring-26-intermission");

  return (
    <>
      <CampaignHero campaigns={campaigns} />

      <section className="px-6 sm:px-10 py-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="bd-section-label">{t("newArrival")}</h2>
          <Link href="/shop" className="bd-eyebrow hover:opacity-60">
            {t("viewAll")} →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-14">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} priority={i < 3} />
          ))}
        </div>
      </section>

      {intermission && (
        <section className="px-6 sm:px-10 pb-20">
          <Link href={intermission.link ?? "/shop"} className="block group">
            <div className="relative aspect-[21/9] w-full overflow-hidden bg-black">
              <Image
                src={intermission.hero.src}
                alt={intermission.hero.alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 flex items-end p-10 text-white">
                <div>
                  <p className="bd-eyebrow opacity-80">{intermission.eyebrow}</p>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight mt-3">
                    {intermission.title}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}
    </>
  );
}
