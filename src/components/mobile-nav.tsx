"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { primaryNav, siteConfig } from "@/lib/site";
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
            <div className="flex items-center justify-between px-6 h-14 border-b border-line">
              <Logo className="text-[20px]" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 -mr-2"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-2">
              {primaryNav.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  onClick={onClose}
                  className="bd-nav-link py-2"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 py-5 border-t border-line text-[11px] tracking-[0.12em] uppercase opacity-60 space-y-1">
              <p>Tiếng Việt / English</p>
              <p>{siteConfig.legal.copyright}</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
