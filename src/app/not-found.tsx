import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container size="narrow" className="min-h-[60vh] py-24 flex flex-col items-center justify-center text-center">
      <p className="beuter-eyebrow text-muted">404</p>
      <h1 className="beuter-display text-5xl sm:text-6xl mt-4">
        This page is between collections.
      </h1>
      <p className="mt-5 text-muted-strong max-w-md">
        The page you're looking for may have moved or been archived with the
        last season. Head back to the storefront to keep browsing.
      </p>
      <Link href="/" className="mt-8">
        <Button size="md">Return home</Button>
      </Link>
    </Container>
  );
}
