# Fonts

This template ships with **system fallbacks only**. Licensed faces are not
checked into the public repo for legal reasons.

To wire up the canonical Kala stack (Arizona / Söhne / Berkeley Mono):

1. Buy/license the fonts and drop the `.woff2` files in this directory.
2. Use `next/font/local` in `app/layout.tsx`:

   ```tsx
   import localFont from "next/font/local";

   const arizona = localFont({
     src: "../src/fonts/Arizona-Regular.woff2",
     variable: "--font-display",
     display: "swap",
   });
   ```

3. Update `--font-display`, `--font-body`, `--font-mono` in `app/globals.css`
   if the font names changed.

Until then, the system fallbacks (`Iowan Old Style` / `system-ui` /
`ui-monospace`) keep the design close enough for prototyping.
