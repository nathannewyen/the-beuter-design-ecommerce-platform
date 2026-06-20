import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Policy",
  description: "Terms, privacy and return policy for BEUTER® webstore orders.",
};

const SECTIONS = [
  {
    title: "Returns",
    body: "Returns accepted within 14 days of delivery for unworn pieces in original packaging. Final sale items, undergarments and altered pieces are non-returnable. Return shipping is at the customer's expense unless the item arrived faulty or incorrect.",
  },
  {
    title: "Exchanges",
    body: "Exchanges are processed as a new order — return your original piece for a refund, then re-purchase your preferred size. We will hold sizes for up to 3 working days when contacted directly via studio@beuter.design.",
  },
  {
    title: "Repairs",
    body: "We offer minor in-house repairs on knitwear and tailoring for the lifetime of the piece. Customers cover shipping both ways. Email studio@beuter.design with photos to begin.",
  },
  {
    title: "Privacy",
    body: "We collect only the information needed to fulfil orders and improve the storefront. No third-party data sale. Newsletter unsubscribes are processed immediately.",
  },
];

export default function PolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Webstore"
        title="Policy"
        description="The fine print on returns, exchanges, repairs and privacy."
      />
      <Container size="narrow" className="py-16 sm:py-20 space-y-12">
        {SECTIONS.map((section) => (
          <article key={section.title}>
            <h2 className="beuter-display text-3xl">{section.title}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-strong">
              {section.body}
            </p>
          </article>
        ))}
      </Container>
    </>
  );
}
