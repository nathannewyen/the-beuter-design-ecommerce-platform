import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CartEmptyProps {
  onClose?: () => void;
}

export function CartEmpty({ onClose }: CartEmptyProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-8 py-16 gap-6">
      <div className="w-16 h-16 rounded-full border border-line flex items-center justify-center beuter-display text-2xl text-muted">
        ✕
      </div>
      <div>
        <p className="beuter-display text-2xl">Your cart is empty.</p>
        <p className="mt-2 text-sm text-muted-strong max-w-xs">
          Browse the season floor or pick something from the archive.
        </p>
      </div>
      <Link href="/shop" onClick={onClose}>
        <Button size="md">Explore the shop</Button>
      </Link>
    </div>
  );
}
