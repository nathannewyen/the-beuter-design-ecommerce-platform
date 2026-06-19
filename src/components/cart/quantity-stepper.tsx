"use client";

import { Minus, Plus } from "lucide-react";

interface QuantityStepperProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (next: number) => void;
}

export function QuantityStepper({
  value,
  min = 1,
  max = 99,
  onChange,
}: QuantityStepperProps) {
  return (
    <div className="inline-flex items-center border border-line">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-8 h-8 inline-flex items-center justify-center text-foreground/80 hover:text-foreground disabled:opacity-40"
        disabled={value <= min}
      >
        <Minus size={14} strokeWidth={1.5} />
      </button>
      <span className="w-8 text-center text-[13px] tabular-nums">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="w-8 h-8 inline-flex items-center justify-center text-foreground/80 hover:text-foreground disabled:opacity-40"
        disabled={value >= max}
      >
        <Plus size={14} strokeWidth={1.5} />
      </button>
    </div>
  );
}
