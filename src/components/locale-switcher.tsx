"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LOCALES, LOCALE_COOKIE, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface LocaleSwitcherProps {
  className?: string;
}

const LABEL: Record<Locale, string> = {
  en: "English",
  vi: "Tiếng Việt",
};

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const current = useLocale() as Locale;
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function set(next: Locale) {
    if (next === current) return;
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${oneYear}; samesite=lax`;
    startTransition(() => router.refresh());
  }

  return (
    <div
      className={cn(
        "flex gap-3 bd-eyebrow",
        pending && "opacity-60",
        className,
      )}
    >
      {LOCALES.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => set(locale)}
          aria-pressed={current === locale}
          className={cn(
            "transition-opacity hover:opacity-60",
            current === locale ? "opacity-100" : "opacity-50",
          )}
        >
          {LABEL[locale]}
        </button>
      ))}
    </div>
  );
}
