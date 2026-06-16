"use client";

import { create } from "zustand";

interface WishlistState {
  ids: Set<string>;
  toggle: (productId: string) => void;
  has: (productId: string) => boolean;
  clear: () => void;
}

export const useWishlist = create<WishlistState>((set, get) => ({
  ids: new Set<string>(),
  toggle: (productId) =>
    set((state) => {
      const next = new Set(state.ids);
      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
      }
      return { ids: next };
    }),
  has: (productId) => get().ids.has(productId),
  clear: () => set({ ids: new Set<string>() }),
}));
