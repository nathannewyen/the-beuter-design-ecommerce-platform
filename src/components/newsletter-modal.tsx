"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "beuter-newsletter-dismissed";

export function NewsletterModal({ delayMs = 9000 }: { delayMs?: number }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY)) return;
    const id = window.setTimeout(() => setOpen(true), delayMs);
    return () => window.clearTimeout(id);
  }, [delayMs]);

  function close() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "1");
    }
    setOpen(false);
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(close, 1400);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-foreground/40 p-4"
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="bg-background w-full sm:max-w-md p-8 sm:p-10 relative"
            role="dialog"
            aria-modal
            aria-label="Newsletter"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Dismiss"
              className="absolute top-4 right-4 p-2 text-muted hover:text-foreground"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
            <p className="beuter-eyebrow text-muted">Newsletter</p>
            <h2 className="beuter-display text-3xl mt-3">
              Early access to drops.
            </h2>
            <p className="mt-3 text-sm text-muted-strong leading-relaxed">
              One short note per drop. Receive a 10% welcome credit on your
              first order.
            </p>
            <form onSubmit={onSubmit} className="mt-6 flex border-b border-foreground/40">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@studio.com"
                className="flex-1 bg-transparent py-3 text-sm placeholder:text-muted focus:outline-none"
              />
              <Button type="submit" variant="ghost" size="sm">
                {submitted ? "Thanks" : "Subscribe"}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
