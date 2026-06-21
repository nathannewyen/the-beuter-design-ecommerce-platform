# the-beuter-design-ecommerce-platform

Portfolio replica of the BEUTER® webstore (beuterdesign.com) built as a Next.js 16 / React 19 / Tailwind v4 study project. Focus: ecommerce UI/UX patterns — campaign hero, product grid, product detail, cart drawer and editorial content pages — under a single, restrained brand system.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** with `@theme inline` brand tokens
- **Framer Motion** for hero crossfade, drawer transitions and reveal-on-scroll
- **Zustand** (with `persist`) for cart and wishlist state
- **lucide-react** for inline iconography
- **next/image** with remote Unsplash patterns for catalog photography

## Routes

| Path | Notes |
| --- | --- |
| `/` | Campaign hero carousel, featured grid, editorial blocks, newsletter |
| `/shop` | Server-rendered listing with URL-driven gender/category/sale filters and sort |
| `/shop/[slug]` | SSG product detail with gallery, size picker, add-to-cart, related |
| `/campaigns/[slug]` | Editorial campaign landing wired to seeded campaigns |
| `/wishlist` | Client-side wishlist backed by zustand |
| `/account` | Sign-in + register entry page |
| `/about`, `/policy`, `/shipping`, `/careers`, `/contact` | Editorial content pages |

`sitemap.ts` and `robots.ts` are generated at build time.

## Local development

```bash
pnpm install
pnpm dev
```

Then open <http://localhost:3000>.

## Production build

```bash
pnpm build
pnpm start
```

The build statically renders the home page, all editorial pages, every product detail page (via `generateStaticParams`) and both campaign landings. The `/shop` route is dynamic to let filter and sort query params drive server rendering.

## Notes

- All product photography is sourced from Unsplash via `next/image` remote patterns — replace with owned assets before any non-portfolio use.
- The cart persists to `localStorage` under the `beuter-cart` key.
- A welcome-credit newsletter modal mounts site-wide and self-dismisses via `localStorage`.
