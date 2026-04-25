import * as React from "react";
import { cn } from "@/lib/cn";

export interface HeroDemoSlotProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Render-prop slot for the product demo (e.g. an interactive iPhone prototype).
 * Template ships an empty placeholder card; consumers drop their demo here.
 */
export function HeroDemoSlot({ className, children }: HeroDemoSlotProps) {
  return (
    <div
      className={cn(
        "flex aspect-[9/16] w-full max-w-sm items-center justify-center rounded-2xl border border-dashed border-[var(--color-basalt)]/25 bg-[var(--color-ramp-100)]",
        className,
      )}
    >
      {children ?? (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-basalt)]/40">
          {/* TODO: drop your product demo (R3F / iframe / video) here */}
          Demo Slot
        </span>
      )}
    </div>
  );
}
