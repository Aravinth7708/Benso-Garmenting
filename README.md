# Benso Garment website

A responsive Next.js App Router website for Benso Garment Pvt Ltd.

## Run locally

Use Node.js 20.9 or later.

```bash
npm install
npm run dev
```

The development server listens on port 4173. `npm run build` generates a static website in `out/`. `npm run typecheck` checks TypeScript.

## Structure

- `app/page.tsx`: Company homepage.
- `app/products/[slug]/page.tsx`: Four statically generated product category pages.
- `components/Gallery.tsx`: Expandable gallery and accessible native-dialog photo viewer.
- `lib/content.ts`: Product descriptions and gallery captions.
- `app/globals.css`: Visual design and responsive breakpoints.
- `public/images`: Optimized, locally served WebP images.

## Content and assets

Company details and the product, factory, and team photographs were provided by the user through bensogarmenting.com. The hero textile still life is an original AI-generated editorial image, not documentary photography of Benso products. No certification, capacity, pricing, customer-logo or product-stock claims have been added. The supplied placeholder phone number is intentionally omitted; contact links use `bala@benso.com` and open the visitor’s email application.

Fonts are locally hosted Manrope from Google Fonts. The website does not require API keys, a database, remote font calls or an enquiry-form backend.
