import { Container } from "@/components/container";

export default function HomePage() {
  return (
    <Container size="wide" className="py-24 sm:py-32">
      <p className="beuter-eyebrow text-muted">Summer 26</p>
      <h1 className="beuter-display text-5xl sm:text-7xl mt-4 max-w-3xl">
        Quiet pieces. Long seasons.
      </h1>
      <p className="mt-6 max-w-xl text-muted-strong leading-relaxed">
        BEUTER® works in elevated essentials, seasonal capsules and considered
        tailoring made in Ho Chi Minh City. The full storefront lands in the
        next pass.
      </p>
    </Container>
  );
}
