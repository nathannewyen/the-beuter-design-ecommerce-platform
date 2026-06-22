# the-beuter-design-ecommerce-platform

[![CI](https://github.com/nathannewyen/the-beuter-design-ecommerce-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/nathannewyen/the-beuter-design-ecommerce-platform/actions/workflows/ci.yml)

Portfolio replica of the [BEUTER®](https://beuterdesign.com) webstore. Built as a Next.js 16 / React 19 / Tailwind v4 study project to demonstrate ecommerce UI/UX patterns under a restrained brand system — fixed left-sidebar nav, full-bleed campaign hero, category-driven webstore, persistent cart drawer, and EN/VN internationalization.

## Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack), React 19, TypeScript |
| Styling | Tailwind CSS v4 with `@theme inline` brand tokens |
| State | Zustand (cart + wishlist, with `persist` middleware) |
| Animation | Framer Motion (hero crossfade, drawer transitions, reveal-on-scroll) |
| Icons | lucide-react |
| Images | next/image with remote patterns for `pos.nvncdn.com` (real BEUTER CDN) |
| i18n | next-intl 4 with cookie-based EN/VN locale |
| Component docs | Storybook 9 (vite framework) |
| E2E tests | Playwright 1.61 |
| CI | GitHub Actions (lint · typecheck · build · Storybook · Playwright) |

## Routes

| Path | Notes |
| --- | --- |
| `/` | Campaign hero carousel, "New Arrival" grid, secondary editorial banner |
| `/shop` | Server-rendered listing with categorized left sidebar (Collections / Tops / Bottoms / Accessories) and URL-driven filters |
| `/shop/[slug]` | SSG product detail with gallery, size picker, add-to-cart, related products |
| `/campaigns/[slug]` | Editorial campaign landing wired to seeded campaigns |
| `/wishlist` | Client-side wishlist backed by zustand |
| `/account` | Sign-in + register entry page |
| `/about`, `/policy`, `/shipping`, `/careers`, `/contact` | Editorial content pages |

`sitemap.ts` and `robots.ts` are generated at build time.

## Local development

```bash
pnpm install
pnpm dev               # Next.js dev server on :3000
pnpm storybook         # Component docs on :6006
pnpm test:e2e          # Playwright journey tests
pnpm test:e2e:ui       # Playwright UI mode
pnpm lint              # ESLint (Next.js + Storybook configs)
pnpm typecheck         # tsc --noEmit
pnpm build             # next build
pnpm build-storybook   # static Storybook export
```

## Internationalization

EN/VN are exposed via the `LocaleSwitcher` in the sidebar and mobile drawer. The selected locale is persisted to the `BEUTER_LOCALE` cookie and resolved server-side in `src/i18n/request.ts`. All nav, footer, shop categories and content copy are translated through `next-intl`'s `useTranslations` / `getTranslations` APIs. Adding a third locale takes three steps: extend `LOCALES` in `src/i18n/config.ts`, add a `messages/<code>.json` file, and translate the keys.

## Testing

Playwright covers four user journeys:

- `tests/e2e/home.spec.ts` — campaign hero loads, primary nav renders, new arrivals grid populates
- `tests/e2e/shop.spec.ts` — webstore lists the catalog and a product card navigates to detail
- `tests/e2e/cart.spec.ts` — adding to cart opens the drawer and size validation blocks empty submits
- `tests/e2e/locale.spec.ts` — switching the LocaleSwitcher re-renders the nav in Vietnamese

CI runs these against `pnpm start` (production build) on every push to `main` and on every PR.

## Deployment

Designed to deploy to Vercel with zero configuration. After importing the repo, only the default Next.js framework preset is needed — no environment variables required.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnathannewyen%2Fthe-beuter-design-ecommerce-platform)

## Screenshots

Add screenshots to `docs/screenshots/` and reference them here:

```
docs/screenshots/
├─ home.png
├─ shop.png
├─ product.png
└─ cart-drawer.png
```

## Notes

- Product photography is fetched from the public BEUTER® CDN (`pos.nvncdn.com`). For non-portfolio use, replace with owned assets — the CDN's `?v=` cache busters can change.
- Cart persists to `localStorage` under the `beuter-cart` key. A noop storage shim keeps SSR safe.
- A welcome-credit newsletter modal mounts site-wide and self-dismisses via `localStorage`.
