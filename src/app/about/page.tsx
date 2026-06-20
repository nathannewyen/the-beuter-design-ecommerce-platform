import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "About Us",
  description: "BEUTER® is an independent contemporary label from Ho Chi Minh City.",
};

export default function AboutPage() {
  return (
    <Container size="narrow" className="py-20 sm:py-28">
      <p className="beuter-eyebrow text-muted">About</p>
      <h1 className="beuter-display text-5xl sm:text-6xl mt-4">
        A label that works in long seasons.
      </h1>
      <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-muted-strong">
        <p>
          BEUTER® is an independent contemporary label founded in Ho Chi Minh
          City in 2022. We work in small runs, considered tailoring and a
          studio palette of ash blue, sand, off-white and woodburn brown.
        </p>
        <p>
          Each season is short. Pieces are designed to outlive a single
          summer — washed cotton twill, silk satin, brushed jacquard knits and
          a tightly held selvedge denim program.
        </p>
        <p>
          The studio is open Tuesday through Saturday by appointment.
          The webstore ships worldwide via DHL Express, in flat-rate
          tiers, with carbon-balanced packaging.
        </p>
      </div>

      <dl className="mt-16 grid sm:grid-cols-3 gap-10 border-t border-line pt-10">
        <Stat label="Founded" value="2022" />
        <Stat label="City" value="Ho Chi Minh" />
        <Stat label="Pieces per season" value="< 40" />
      </dl>
    </Container>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="beuter-eyebrow text-muted">{label}</dt>
      <dd className="beuter-display text-3xl mt-2">{value}</dd>
    </div>
  );
}
