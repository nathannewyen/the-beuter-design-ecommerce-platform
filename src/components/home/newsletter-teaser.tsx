"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export function NewsletterTeaser() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="mt-24 sm:mt-32 bg-foreground text-background">
      <Container size="wide" className="py-20 sm:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="beuter-eyebrow text-background/70">Newsletter</p>
          <h2 className="beuter-display text-4xl sm:text-5xl mt-4 max-w-md">
            Quiet drops, early access.
          </h2>
          <p className="mt-5 text-background/75 max-w-md text-sm leading-relaxed">
            One short note per drop — early access to capsule releases, archive
            pieces and studio notes.
          </p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-3 max-w-md w-full md:justify-self-end">
          <label className="beuter-eyebrow text-background/70">Email</label>
          <div className="flex items-center border-b border-background/40">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@studio.com"
              className="flex-1 bg-transparent py-3 text-base text-background placeholder:text-background/40 focus:outline-none"
            />
            <Button type="submit" variant="secondary" size="sm" className="border-background text-background hover:bg-background hover:text-foreground">
              {submitted ? "Thanks" : "Subscribe"}
            </Button>
          </div>
          <p className="text-[11px] tracking-[0.18em] uppercase text-background/55">
            No more than twice a month.
          </p>
        </form>
      </Container>
    </section>
  );
}
