import * as React from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  bleed?: boolean;
}

export function Section({ className, children, bleed, ...rest }: SectionProps) {
  return (
    <section className={cn("py-24 md:py-40", className)} {...rest}>
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
