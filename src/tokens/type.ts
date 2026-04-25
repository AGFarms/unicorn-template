/**
 * Typography tokens.
 *
 * The repo ships with system fallbacks only. To swap in licensed faces
 * (Arizona / Söhne / Berkeley Mono), see `src/fonts/README.md`.
 */
export const type = {
  display: `'Arizona', 'Iowan Old Style', Georgia, serif`,
  body: `'Söhne', Inter, system-ui, -apple-system, sans-serif`,
  mono: `'Berkeley Mono', 'JetBrains Mono', ui-monospace, monospace`,
  scale: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.5rem",
    "2xl": "2rem",
    "3xl": "3rem",
    "4xl": "4.5rem",
    "5xl": "6rem",
  },
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  leading: {
    tight: 1.05,
    snug: 1.2,
    normal: 1.5,
  },
} as const;

export type TypeToken = typeof type;
