/**
 * Stone-grain SVG noise overlay, base64-encoded for use as a CSS background.
 * Kept tiny (<2KB) and low-opacity so it stays within the perf budget.
 */
const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'>
  <filter id='n'>
    <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/>
    <feColorMatrix values='0 0 0 0 0.05  0 0 0 0 0.05  0 0 0 0 0.05  0 0 0 0.18 0'/>
  </filter>
  <rect width='100%' height='100%' filter='url(#n)'/>
</svg>`;

export const stoneTextureDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

export const texture = {
  stone: stoneTextureDataUri,
  /** Default opacity for the bg overlay (low — performance + legibility). */
  opacity: 0.35,
} as const;

export type TextureToken = typeof texture;
