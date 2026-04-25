import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { buttonVariants } from "./Button";

export interface CTAProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export function CTA({ label, href, variant = "primary", className }: CTAProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size: "lg" }), className)}
    >
      {label}
    </Link>
  );
}
