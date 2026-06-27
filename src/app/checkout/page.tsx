import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/container";
import { Checkout } from "@/components/checkout/checkout";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("checkout");
  return {
    title: t("title"),
  };
}

export default function CheckoutPage() {
  return (
    <Container size="wide" className="py-12 sm:py-16">
      <Checkout />
    </Container>
  );
}
