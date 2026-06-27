"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-store";
import { products } from "@/data";
import { CartLineItem } from "./cart-line-item";
import { CartSummary } from "./cart-summary";
import { CartEmpty } from "./cart-empty";

export function CartDrawer() {
  const isOpen = useCart((s) => s.isOpen);
  const close = useCart((s) => s.close);
  const lines = useCart((s) => s.lines);
  const router = useRouter();

  function goToCheckout() {
    close();
    router.push("/checkout");
  }

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const enriched = useMemo(
    () =>
      lines
        .map((line) => ({
          line,
          product: products.find((p) => p.id === line.productId),
        }))
        .filter((entry): entry is { line: typeof entry.line; product: NonNullable<typeof entry.product> } =>
          Boolean(entry.product),
        ),
    [lines],
  );

  const subtotal = enriched.reduce(
    (total, { line, product }) => total + product.price * line.quantity,
    0,
  );
  const itemCount = lines.reduce((t, l) => t + l.quantity, 0);

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
                Cart · {itemCount} item{itemCount === 1 ? "" : "s"}
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

            {enriched.length === 0 ? (
              <CartEmpty onClose={close} />
            ) : (
              <>
                <ul className="flex-1 overflow-y-auto px-6">
                  {enriched.map(({ line, product }) => (
                    <CartLineItem
                      key={`${line.productId}-${line.size}`}
                      line={line}
                      product={product}
                      onNavigate={close}
                    />
                  ))}
                </ul>
                <CartSummary subtotal={subtotal} onCheckout={goToCheckout} />
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
