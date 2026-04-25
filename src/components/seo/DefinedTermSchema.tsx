import * as React from "react";
import { Schema } from "./Schema";

export interface DefinedTermProps {
  name: string;
  description: string;
  url: string;
  inDefinedTermSet?: string;
}

export function DefinedTermSchema({
  name,
  description,
  url,
  inDefinedTermSet,
}: DefinedTermProps) {
  return (
    <Schema
      data={{
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        name,
        description,
        url,
        ...(inDefinedTermSet ? { inDefinedTermSet } : {}),
      }}
    />
  );
}
