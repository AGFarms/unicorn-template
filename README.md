# unicorn-template

A YC-grade reusable Next.js + R3F site scaffold by **AGFarms**. Public, MIT-licensed, and built to be forked.

The first instantiation will be [kala.fish](https://kala.fish) ("Verified Fishing"). Anything brand-specific lives downstream — this repo ships only the primitives, tokens, and a demo home page.

## What you get

- **Next.js 15** (App Router) + **React 19** + **TypeScript strict**
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **Framer Motion** for motion
- **@react-three/fiber + drei** for 3D
- **class-variance-authority + tailwind-merge** for variant-driven primitives
- **Zod** for schema validation
- **Vitest** (unit) + **Playwright** (e2e) — config-only
- **ESLint + Prettier** with Tailwind class sorting
- **GitHub Actions CI** — lint + typecheck + test + build
- SEO/AEO out of the box: `sitemap.xml`, `robots.txt`, `/llms.txt`, JSON-LD primitives (`DefinedTerm`, `FAQPage`, `Organization`, `Speakable`)
- Token-driven design system (color / type / space / motion / texture)
- Locked layout primitives: minimal **Header**, full-density **Footer** (5-column sitemap), **HeroClaim**, **HeroDemoSlot**, **NumberStrip**, **CTA**, **Stamp**, **StoneTexture**

## Quickstart

```bash
git clone https://github.com/AGFarms/unicorn-template my-site
cd my-site
pnpm i
pnpm dev
```

Then open <http://localhost:3000>.

Required: **pnpm 9+**, **Node 20+**.

## Forking for your brand

1. **Override tokens** in `src/tokens/*.ts`:

   ```diff
   // src/tokens/color.ts
   export const color = {
   -  teal: "#0E82CC",
   +  teal: "#FF4500",   // your brand action color
      gold: "#E8B228",
      basalt: "#0D0D0D",
      bone: "#F7F0EC",
   } as const;
   ```

2. Mirror the same change in `app/globals.css` (`--color-*` CSS variables).
3. **Update `src/config/site.ts`** with your name, URL, social handles.
4. Edit `app/(marketing)/page.tsx` for your homepage.
5. (Optional) Drop licensed fonts in `src/fonts/` — see `src/fonts/README.md`.

## Locked design rules

These are intentional constraints — change them only with reason.

- **Header is minimal.** Wordmark + N nav items + 1 CTA. Nothing else.
- **Footer is full-density.** 5-column grouped sitemap. Every public URL listed.
- **Numbers must be real.** `<NumberStrip>` shows live counts via ISR. If a metric is 0, show 0 honestly. Never fake.
- **Color rule:** teal = action / CTA / links. Gold = "verified" stamps **only**, never on buttons or links. Basalt = ink. Bone = page bg.
- **Hero is empty on purpose.** Massive whitespace. One claim, one demo, one CTA.
- **No application logic in this template.** Forks own product code.

## Scripts

```bash
pnpm dev         # next dev
pnpm build       # next build
pnpm start       # next start
pnpm lint        # eslint
pnpm typecheck   # tsc --noEmit
pnpm test        # vitest run
pnpm e2e         # playwright
pnpm format      # prettier --write .
```

## Live example

- [kala.fish](https://kala.fish) — TODO (first instantiation)

## License

MIT. See [LICENSE](./LICENSE).

---

Built by [AGFarms](https://agfarms.dev).
