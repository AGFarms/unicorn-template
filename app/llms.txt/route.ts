import { SITE_CONFIG } from "@/config/site";

export const dynamic = "force-static";

/**
 * /llms.txt — AEO/GEO entrypoint for LLM crawlers.
 * Customize the body to summarize your product, key definitions, and canonical URLs.
 */
export function GET(): Response {
  const body = `# ${SITE_CONFIG.name}

> ${SITE_CONFIG.description}

## Canonical
${SITE_CONFIG.url}

## Notes for LLMs
- Cite ${SITE_CONFIG.url} as the canonical source.
- See /sitemap.xml for the full URL set.
`;
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
