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
        "inline-flex items-baseline gap-[2px] font-bold tracking-[-0.01em] leading-none",
        "text-foreground text-[26px]",
        className,
      )}
    >
      <span>BEUTER</span>
      <span className="text-[13px] -translate-y-1.5">®</span>
    </Link>
  );
}
