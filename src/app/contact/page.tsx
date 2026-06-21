import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the BEUTER® studio team.",
};

const CHANNELS = [
  { label: "General", value: "studio@beuter.design" },
  { label: "Press", value: "press@beuter.design" },
  { label: "Wholesale", value: "wholesale@beuter.design" },
  { label: "Careers", value: "hiring@beuter.design" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studio"
        title="Contact"
        description="The studio replies within two working days."
      />
      <Container size="narrow" className="py-16 sm:py-20">
        <dl className="grid sm:grid-cols-2 gap-8 border-y border-line py-10">
          {CHANNELS.map((channel) => (
            <div key={channel.label}>
              <dt className="beuter-eyebrow text-muted">{channel.label}</dt>
              <dd className="mt-2 text-lg">
                <a
                  href={`mailto:${channel.value}`}
                  className="underline underline-offset-4 hover:no-underline"
                >
                  {channel.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-12 text-[15px] leading-relaxed text-muted-strong space-y-3">
          <p>
            <span className="beuter-eyebrow text-muted block">Studio</span>
            12B Le Loi · District 1 · Ho Chi Minh City
          </p>
          <p>
            <span className="beuter-eyebrow text-muted block">Hours</span>
            Tue–Sat · 11:00 – 19:00 ICT (by appointment)
          </p>
        </div>
      </Container>
    </>
  );
}
