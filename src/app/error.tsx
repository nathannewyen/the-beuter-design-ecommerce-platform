"use client";

import { useEffect } from "react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[beuter] runtime error", error);
  }, [error]);

  return (
    <Container size="narrow" className="min-h-[60vh] py-24 flex flex-col items-center justify-center text-center">
      <p className="beuter-eyebrow text-muted">Something went wrong</p>
      <h1 className="beuter-display text-5xl sm:text-6xl mt-4">
        Studio hiccup.
      </h1>
      <p className="mt-5 text-muted-strong max-w-md">
        We hit an unexpected error. Refresh to try again, or head back to the
        homepage.
      </p>
      <div className="mt-8 flex gap-3">
        <Button size="md" onClick={() => reset()}>
          Try again
        </Button>
        <Button size="md" variant="secondary" onClick={() => window.location.assign("/") }>
          Return home
        </Button>
      </div>
    </Container>
  );
}
