import * as React from "react";
import { cn } from "@/lib/cn";

export interface Metric {
  label: string;
  value: number | string;
  /** Optional formatter; defaults to Intl-grouped integer. */
  format?: (v: number | string) => string;
}

export interface NumberStripProps extends React.HTMLAttributes<HTMLDivElement> {
  metrics: Metric[];
}

const defaultFormat = (v: number | string) =>
  typeof v === "number" ? new Intl.NumberFormat("en-US").format(v) : v;

/**
 * LOCKED rule: numbers must be REAL. If a metric is 0, show 0 honestly — never
 * fake. Wire `value` to a live source (ISR / edge revalidate).
 */
export function NumberStrip({ metrics, className, ...rest }: NumberStripProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-y-10 border-y border-[var(--color-basalt)]/15 py-10 md:grid-cols-4",
        className,
      )}
      {...rest}
    >
      {metrics.map((m) => (
        <div key={m.label} className="flex flex-col items-start gap-1">
          <span className="font-display text-4xl text-[var(--color-basalt)] md:text-5xl">
            {(m.format ?? defaultFormat)(m.value)}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-basalt)]/60">
            {m.label}
          </span>
        </div>
      ))}
    </div>
  );
}
