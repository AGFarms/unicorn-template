import * as React from "react";
import { Schema } from "./Schema";
import { SITE_CONFIG } from "@/config/site";

export function OrganizationSchema() {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_CONFIG.org.name,
        url: SITE_CONFIG.org.url,
        sameAs: [SITE_CONFIG.social.github],
      }}
    />
  );
}
