"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { CartLine, ProductSize } from "@/types";

interface CartState {
  isOpen: boolean;
  lines: CartLine[];
  add: (line: CartLine) => void;
  remove: (productId: string, size: ProductSize) => void;
  setQuantity: (productId: string, size: ProductSize, quantity: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

function keyFor(productId: string, size: ProductSize) {
  return `${productId}::${size}`;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      isOpen: false,
      lines: [],
      add: (line) =>
        set((state) => {
          const existing = state.lines.find(
            (l) => keyFor(l.productId, l.size) === keyFor(line.productId, line.size),
          );
          if (existing) {
            return {
              isOpen: true,
              lines: state.lines.map((l) =>
                l === existing
                  ? { ...l, quantity: l.quantity + line.quantity }
                  : l,
              ),
            };
          }
          return { isOpen: true, lines: [...state.lines, line] };
        }),
      remove: (productId, size) =>
        set((state) => ({
          lines: state.lines.filter(
            (l) => keyFor(l.productId, l.size) !== keyFor(productId, size),
          ),
        })),
      setQuantity: (productId, size, quantity) =>
        set((state) => ({
          lines: state.lines
            .map((l) =>
              keyFor(l.productId, l.size) === keyFor(productId, size)
                ? { ...l, quantity }
                : l,
            )
            .filter((l) => l.quantity > 0),
        })),
      clear: () => set({ lines: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: "beuter-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ lines: state.lines }),
    },
  ),
);
