import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Worldwide Shipping",
  description: "Flat-rate worldwide shipping from Ho Chi Minh City.",
};

const ZONES = [
  { zone: "Vietnam", time: "1–2 days", price: "Free over $100" },
  { zone: "Southeast Asia", time: "3–5 days", price: "$22" },
  { zone: "East Asia / Oceania", time: "4–6 days", price: "$28" },
  { zone: "Europe", time: "5–7 days", price: "$36" },
  { zone: "North America", time: "5–7 days", price: "$38" },
  { zone: "Rest of world", time: "7–10 days", price: "$42" },
];

export default function ShippingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Logistics"
        title="Worldwide shipping"
        description="Flat-rate shipping via DHL Express. All duties and taxes calculated at checkout."
      />
      <Container size="narrow" className="py-16 sm:py-20">
        <div className="border border-line divide-y divide-line">
          <div className="grid grid-cols-3 px-4 py-3 beuter-eyebrow text-muted">
            <span>Zone</span>
            <span>Delivery</span>
            <span className="text-right">Rate</span>
          </div>
          {ZONES.map((row) => (
            <div key={row.zone} className="grid grid-cols-3 px-4 py-4 text-[14px]">
              <span className="text-foreground">{row.zone}</span>
              <span className="text-muted-strong">{row.time}</span>
              <span className="text-right text-foreground tabular-nums">{row.price}</span>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-strong leading-relaxed">
          Orders placed before 12pm ICT ship the same day. Final-sale items
          ship together with full-price items. Tracking is emailed on
          dispatch.
        </p>
      </Container>
    </>
  );
}
