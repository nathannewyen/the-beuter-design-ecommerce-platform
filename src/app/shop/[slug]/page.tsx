import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductGallery } from "@/components/product/product-gallery";
import { AddToCart } from "@/components/product/add-to-cart";
import { ProductDetails } from "@/components/product/product-details";
import { RelatedProducts } from "@/components/product/related-products";
import { findProductBySlug, getRelatedProducts, products } from "@/data";
import { CATEGORY_LABEL, GENDER_LABEL } from "@/lib/labels";
import { formatPrice } from "@/lib/format";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = findProductBySlug(slug);
  if (!product) return { title: "Not found" };
  return {
    title: `${product.name} · ${product.color}`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.images[0].src }],
    },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = findProductBySlug(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product);

  return (
    <>
      <Container size="wide" className="pt-8 pb-16">
        <Breadcrumbs
          items={[
            { label: "Shop", href: "/shop" },
            {
              label: GENDER_LABEL[product.gender],
              href: `/shop?gender=${product.gender}`,
            },
            { label: product.name },
          ]}
        />

        <div className="mt-8 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16">
          <ProductGallery images={product.images} />

          <div className="lg:py-2 lg:max-w-md">
            <p className="beuter-eyebrow text-muted">
              {CATEGORY_LABEL[product.category]} · {GENDER_LABEL[product.gender]}
            </p>
            <h1 className="beuter-display text-3xl sm:text-4xl mt-3">
              {product.name}
            </h1>
            <p className="mt-1 text-muted-strong text-sm uppercase tracking-wide">
              {product.color}
            </p>

            <div className="mt-5 flex items-baseline gap-3">
              <p className="text-xl text-foreground">
                {formatPrice(product.price)}
              </p>
              {product.compareAtPrice && (
                <p className="text-muted line-through">
                  {formatPrice(product.compareAtPrice)}
                </p>
              )}
            </div>

            <div className="mt-10">
              <AddToCart product={product} />
            </div>

            <div className="mt-12">
              <ProductDetails
                description={product.description}
                details={product.details}
                composition={product.composition}
              />
            </div>
          </div>
        </div>
      </Container>

      <RelatedProducts products={related} />
    </>
  );
}
