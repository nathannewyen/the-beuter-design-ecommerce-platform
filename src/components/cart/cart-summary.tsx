import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/button";

interface CartSummaryProps {
  subtotal: number;
  shipping?: number;
  onCheckout?: () => void;
  busy?: boolean;
}

export function CartSummary({
  subtotal,
  shipping = 0,
  onCheckout,
  busy,
}: CartSummaryProps) {
  const total = subtotal + shipping;
  return (
    <div className="border-t border-line bg-background p-6 space-y-4">
      <div className="flex justify-between text-[13px] text-muted">
        <span>Subtotal</span>
        <span className="tabular-nums">{formatPrice(subtotal)}</span>
      </div>
      <div className="flex justify-between text-[13px] text-muted">
        <span>Shipping</span>
        <span>{shipping === 0 ? "Calculated at checkout" : formatPrice(shipping)}</span>
      </div>
      <div className="flex justify-between text-base font-medium pt-2 border-t border-line">
        <span>Total</span>
        <span className="tabular-nums">{formatPrice(total)}</span>
      </div>
      <Button size="lg" fullWidth onClick={onCheckout} disabled={busy}>
        {busy ? "Processing…" : "Checkout"}
      </Button>
      <p className="text-[11px] tracking-[0.18em] uppercase text-muted text-center">
        Free returns within 14 days
      </p>
    </div>
  );
}
