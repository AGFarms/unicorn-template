import * as React from "react";

/**
 * Generic JSON-LD wrapper. Pass any schema.org object as `data`.
 */
export function Schema({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be inlined as raw JSON; this is the documented Next.js pattern.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
