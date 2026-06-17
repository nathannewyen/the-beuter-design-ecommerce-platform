import { Container } from "@/components/container";

export function BrandStatement() {
  return (
    <section className="mt-24 sm:mt-32 border-t border-line">
      <Container size="narrow" className="py-20 text-center">
        <p className="beuter-eyebrow text-muted">A note from the studio</p>
        <p className="beuter-display text-3xl sm:text-4xl mt-6 leading-tight">
          BEUTER® works in small runs and considered tailoring. We design pieces
          for long seasons — soft hands, weight you can feel, finishes you only
          notice on the second wear.
        </p>
        <p className="mt-6 text-sm text-muted">Ho Chi Minh City · Est. 2022</p>
      </Container>
    </section>
  );
}
