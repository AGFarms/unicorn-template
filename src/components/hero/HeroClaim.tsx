import * as React from "react";
import { cn } from "@/lib/cn";

export interface HeroClaimProps extends React.HTMLAttributes<HTMLDivElement> {
  brand: string;
  claim: string;
}

/**
 * Two-word category-claim treatment. e.g. `Brand. Category Claim.`
 */
export function HeroClaim({ brand, claim, className, ...rest }: HeroClaimProps) {
  return (
    <div className={cn("max-w-4xl", className)} {...rest}>
      <h1 className="font-display text-5xl leading-[1.05] text-[var(--color-basalt)] md:text-7xl lg:text-8xl">
        <span className="block">{brand}.</span>
        <span className="block text-[var(--color-basalt)]/80">{claim}.</span>
      </h1>
    </div>
  );
}
