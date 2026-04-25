import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { SITE_CONFIG } from "@/config/site";

export interface FooterLink {
  label: string;
  href: string;
}
export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface FooterProps {
  /** Grouped sitemap. Render every column at full density (LOCKED rule). */
  sitemap?: FooterColumn[];
  tagline?: string;
}

const defaultSitemap: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Verify", href: "/verify" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Definitions",
    links: [{ label: "Glossary", href: "/glossary" }],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms", href: "/legal/terms" },
      { label: "Privacy", href: "/legal/privacy" },
    ],
  },
];

export function Footer({
  sitemap = defaultSitemap,
  tagline = "Built by AGFarms.",
}: FooterProps) {
  return (
    <footer className="mt-32 border-t border-[var(--color-basalt)]/15 py-16">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          {sitemap.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-basalt)]/70">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--color-basalt)] hover:text-[var(--color-teal)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-basalt)]/10 pt-8 md:flex-row md:items-center">
          <div className="font-display text-lg text-[var(--color-basalt)]">
            {SITE_CONFIG.name}
            <span className="ml-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-basalt)]/60">
              {tagline}
            </span>
          </div>
          <div className="font-mono text-xs text-[var(--color-basalt)]/60">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.org.name}
          </div>
        </div>
      </Container>
    </footer>
  );
}
