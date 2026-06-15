import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  ariaLabel?: string;
}

export function Logo({ className, ariaLabel = "BEUTER home" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-baseline gap-[2px] font-semibold tracking-[0.04em]",
        "text-foreground text-[22px] sm:text-[24px] leading-none",
        className,
      )}
    >
      <span>BEUTER</span>
      <span className="text-foreground/70 text-[14px] -translate-y-1">®</span>
    </Link>
  );
}
