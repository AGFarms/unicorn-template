/**
 * Site-level config. Override this file in your fork — every component reads
 * from here.
 */
export const SITE_CONFIG = {
  name: "Unicorn Template",
  description: "A YC-grade reusable Next.js site scaffold by AGFarms.",
  url: "https://example.com",
  locale: "en-US",
  social: {
    twitter: "@agfarms",
    github: "https://github.com/AGFarms/unicorn-template",
  },
  org: {
    name: "AGFarms",
    url: "https://agfarms.dev",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
