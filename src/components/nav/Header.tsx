import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { CTA } from "@/components/primitives/CTA";
import { SITE_CONFIG } from "@/config/site";

export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  items?: NavItem[];
  cta?: { label: string; href: string };
  brand?: string;
}

/**
 * Header (LOCKED): minimal — wordmark + N nav items + 1 CTA. Nothing else.
 */
export function Header({ items = [], cta, brand = SITE_CONFIG.name }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-basalt)]/10 bg-[var(--color-bone)]/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-[var(--color-basalt)]"
        >
          {brand}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="font-mono text-sm uppercase tracking-[0.18em] text-[var(--color-basalt)] hover:text-[var(--color-teal)]"
            >
              {it.label}
            </Link>
          ))}
        </nav>
        {cta ? <CTA label={cta.label} href={cta.href} /> : null}
      </Container>
    </header>
  );
}
