import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";

export interface BuildMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function buildMetadata(opts: BuildMetadataOptions = {}): Metadata {
  const title = opts.title ? `${opts.title} — ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const description = opts.description ?? SITE_CONFIG.description;
  const url = opts.path ? `${SITE_CONFIG.url}${opts.path}` : SITE_CONFIG.url;
  const image = opts.image ?? `${SITE_CONFIG.url}/og-default.png`;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      site: SITE_CONFIG.social.twitter,
    },
  };
}
