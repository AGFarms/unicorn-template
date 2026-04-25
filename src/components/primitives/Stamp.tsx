import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * The gold "verified" treatment. ONLY used for verification proof — never as
 * a generic button or link. (CANON: gold = proof, teal = action.)
 */
export interface StampProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
}

export function Stamp({ label = "Verified", className, ...rest }: StampProps) {
  return (
    <span
      role="img"
      aria-label={label}
      className={cn(
        "inline-flex items-center gap-2 rounded-sm border border-[var(--color-gold)] bg-[var(--color-gold)]/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]",
        className,
      )}
      {...rest}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
      {label}
    </span>
  );
}
