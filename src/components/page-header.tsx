import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("border-b border-line", className)}>
      <Container size="wide" className="py-16 sm:py-20">
        {eyebrow && (
          <p className="beuter-eyebrow text-muted">{eyebrow}</p>
        )}
        <h1 className="beuter-display text-5xl sm:text-6xl mt-3 max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base text-muted-strong max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </Container>
    </header>
  );
}
