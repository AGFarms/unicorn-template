/**
 * Color tokens.
 *
 * Defaults are seeded with Kala brand canon. Downstream sites should override
 * this file (or set CSS variables on `<html>`) to re-theme.
 *
 * RULES (locked from CANON):
 *  - teal  -> action / CTA / links
 *  - gold  -> "verified" stamps ONLY (never on buttons or links)
 *  - basalt-> ink (text)
 *  - bone  -> page background
 */
export const color = {
  /** Aegean Teal — interactive accent (buttons, links, focus rings). */
  teal: "#0E82CC",
  /** Hot Gold — reserved for verification stamps. TODO: confirm hex w/ designer. */
  gold: "#E8B228",
  /** Basalt — primary ink. */
  basalt: "#0D0D0D",
  /** Bone — default page background. */
  bone: "#F7F0EC",
  /** Monochrome ramp (Basalt -> Bone). */
  ramp: {
    900: "#0D0D0D",
    700: "#2B2B2B",
    500: "#6B6660",
    300: "#C9C2BC",
    100: "#F0E9E4",
    50: "#F7F0EC",
  },
} as const;

export type ColorToken = typeof color;
