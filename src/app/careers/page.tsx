import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Job Opportunities",
  description: "Open positions at BEUTER® studio in Ho Chi Minh City.",
};

const ROLES = [
  {
    title: "Pattern Maker",
    type: "Full-time · On-site",
    location: "Ho Chi Minh City",
    blurb:
      "Lead pattern development for tops and outerwear across two collections per year. Tailoring background required.",
  },
  {
    title: "UI/UX Designer",
    type: "Contract · Remote ok",
    location: "Anywhere",
    blurb:
      "Own webstore design from product page through checkout. Comfortable with Figma, brand systems and Shopify or headless commerce.",
  },
  {
    title: "Studio Coordinator",
    type: "Full-time · On-site",
    location: "Ho Chi Minh City",
    blurb:
      "Run weekly studio operations: appointments, inventory cycle counts, sample tracking and showroom prep.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studio"
        title="Job opportunities"
        description="We hire slowly. When we do, we're looking for craft, taste and a long horizon."
      />
      <Container size="narrow" className="py-16 sm:py-20 divide-y divide-line border-y border-line">
        {ROLES.map((role) => (
          <article
            key={role.title}
            className="py-8 grid sm:grid-cols-[1fr_auto] gap-6 items-start"
          >
            <div>
              <h2 className="beuter-display text-3xl">{role.title}</h2>
              <p className="beuter-eyebrow text-muted mt-2">
                {role.type} · {role.location}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-strong max-w-lg">
                {role.blurb}
              </p>
            </div>
            <a
              href={`mailto:hiring@beuter.design?subject=${encodeURIComponent(role.title)}`}
              className="beuter-eyebrow border-b border-foreground/40 hover:border-foreground pb-0.5 self-end"
            >
              Apply →
            </a>
          </article>
        ))}
      </Container>
    </>
  );
}
