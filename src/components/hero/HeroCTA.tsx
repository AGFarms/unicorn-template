import * as React from "react";
import { CTA } from "@/components/primitives/CTA";

export interface HeroCTAProps {
  label: string;
  href: string;
  caption?: string;
}

export function HeroCTA({ label, href, caption }: HeroCTAProps) {
  return (
    <div className="flex flex-col items-start gap-3">
      <CTA label={label} href={href} />
      {caption ? (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-basalt)]/60">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
