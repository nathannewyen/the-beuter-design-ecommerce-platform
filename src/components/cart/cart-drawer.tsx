"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function CartDrawer() {
  const isOpen = useCart((s) => s.isOpen);
  const close = useCart((s) => s.close);
  const lines = useCart((s) => s.lines);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-foreground/40"
            onClick={close}
            aria-hidden
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.32,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-md bg-background flex flex-col"
            role="dialog"
            aria-modal
            aria-label="Cart"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-line">
              <p className="beuter-eyebrow">
                Cart · {lines.reduce((t, l) => t + l.quantity, 0)} item
                {lines.length === 1 ? "" : "s"}
              </p>
              <button
                type="button"
                onClick={close}
                aria-label="Close cart"
                className="p-2 -mr-2"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-8 flex items-center justify-center text-sm text-muted">
              {lines.length === 0
                ? "Your cart is empty."
                : `${lines.length} line(s) — full UI lands in next pass.`}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
