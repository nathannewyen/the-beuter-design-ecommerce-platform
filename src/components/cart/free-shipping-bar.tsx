import { cn } from "@/lib/utils";

interface FreeShippingBarProps {
  subtotal: number;
  threshold?: number;
  className?: string;
}

export function FreeShippingBar({
  subtotal,
  threshold = 250,
  className,
}: FreeShippingBarProps) {
  const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
  return (
    <div className={cn("space-y-2", className)}>
      <div className="h-[2px] bg-line overflow-hidden">
        <div
          className="h-full bg-foreground transition-[width] duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
