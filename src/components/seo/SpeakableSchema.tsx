import * as React from "react";
import { Schema } from "./Schema";

export function SpeakableSchema({ cssSelectors }: { cssSelectors: string[] }) {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: cssSelectors,
        },
      }}
    />
  );
}
