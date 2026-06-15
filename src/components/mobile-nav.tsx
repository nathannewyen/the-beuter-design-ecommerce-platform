"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { primaryNav, footerNav } from "@/lib/site";
import { Logo } from "@/components/brand/logo";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-foreground/40 md:hidden"
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-y-0 left-0 z-50 w-[88%] max-w-xs bg-background flex flex-col md:hidden"
            role="dialog"
            aria-modal
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-line">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 -mr-2"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-5 py-8 flex flex-col gap-1">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="text-2xl beuter-display py-3 border-b border-line/60"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 beuter-eyebrow text-muted">
                {footerNav.studio.map((item) => (
                  <Link key={item.href} href={item.href} onClick={onClose}>
                    {item.label}
                  </Link>
                ))}
                {footerNav.support.map((item) => (
                  <Link key={item.href} href={item.href} onClick={onClose}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
            <div className="px-5 py-5 border-t border-line text-[11px] tracking-[0.18em] uppercase text-muted">
              EN / VN
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
