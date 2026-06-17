import Link from "next/link";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  link?: { href: string; label: string };
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  link,
  align = "left",
  as = "h2",
  className,
}: SectionHeaderProps) {
  const TitleTag = as;
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <p className="beuter-eyebrow text-muted">{eyebrow}</p>}
      <TitleTag className="beuter-display text-3xl sm:text-4xl md:text-5xl max-w-2xl">
        {title}
      </TitleTag>
      {description && (
        <p className="text-sm sm:text-base text-muted-strong max-w-xl leading-relaxed">
          {description}
        </p>
      )}
      {link && (
        <Link
          href={link.href}
          className="beuter-eyebrow mt-2 inline-flex border-b border-foreground/40 hover:border-foreground pb-0.5 self-start"
        >
          {link.label}
        </Link>
      )}
    </div>
  );
}
