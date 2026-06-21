import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ProductGrid } from "@/components/product/product-grid";
import { Button } from "@/components/ui/button";
import { campaigns, findCampaignBySlug, products } from "@/data";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return campaigns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const campaign = findCampaignBySlug(slug);
  if (!campaign) return { title: "Not found" };
  return {
    title: campaign.title,
    description: campaign.description,
    openGraph: { images: [{ url: campaign.hero.src }] },
  };
}

export default async function CampaignPage({ params }: { params: Params }) {
  const { slug } = await params;
  const campaign = findCampaignBySlug(slug);
  if (!campaign) notFound();

  const items = products.filter((p) => p.campaignId === campaign.id);

  return (
    <>
      <section className="relative bg-foreground text-background">
        <div className="relative aspect-[4/5] sm:aspect-[16/9]">
          <Image
            src={campaign.hero.src}
            alt={campaign.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          <Container size="wide" className="relative z-10 h-full flex items-end pb-14">
            <div>
              <p className="beuter-eyebrow text-background/80">{campaign.season}</p>
              <h1 className="beuter-display text-background text-5xl sm:text-7xl mt-3">
                {campaign.title}
              </h1>
              <p className="mt-5 max-w-md text-background/85 text-sm sm:text-base leading-relaxed">
                {campaign.description}
              </p>
            </div>
          </Container>
        </div>
      </section>

      <Container size="wide" className="py-20">
        {items.length > 0 ? (
          <ProductGrid products={items} columns={{ base: 2, md: 3, lg: 4 }} />
        ) : (
          <div className="text-center border border-line py-16">
            <p className="beuter-display text-3xl">Coming soon.</p>
            <Link href="/shop" className="mt-6 inline-block">
              <Button size="md">Browse the shop</Button>
            </Link>
          </div>
        )}
      </Container>
    </>
  );
}
