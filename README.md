# Eco Pacific Painting — Website

Production-ready marketing site built with **Next.js 15 (App Router)**,
**TypeScript**, **Tailwind CSS**, and **Framer Motion**, matching the
approved premium visual concept.

## Stack

- Next.js 15 (App Router, React 19)
- TypeScript (strict mode)
- Tailwind CSS 3 (custom design-token theme — colors, type scale, shadows, radii)
- Framer Motion (page/scroll/interaction animation)
- React Hook Form + Zod (form state & validation)
- Lucide React (icon system)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint     # ESLint
npm run type-check  # TypeScript, no emit
```

> Note: the build fetches "Plus Jakarta Sans" from Google Fonts at build
> time via `next/font/google`. This requires outbound internet access to
> `fonts.googleapis.com` — it will work automatically in any normal dev
> machine, CI runner, or hosting provider (Vercel, etc.).

## Project Structure

```
src/
  app/
    layout.tsx        Root layout, SEO metadata, JSON-LD schema, font loading
    page.tsx           Assembles all sections in the spec's page order
    globals.css         Design tokens, paint-drip button system, glass/card styles
    sitemap.ts / robots.ts
    api/
      quote/route.ts        Quote form submission endpoint (validates + logs; wire to email provider)
      appointment/route.ts  Appointment request endpoint (validates + logs; wire to email provider)
  components/
    layout/    Navbar, Footer, LoadingScreen
    sections/  One component per landing-page section (Hero, Stats, About, Services, …)
    ui/        Reusable primitives: PaintDripButton, Reveal, SectionHeading, ImagePlaceholder
  data/        Static content: services, reviews, projects, process steps, stats
  lib/         constants.ts (site info), schemas.ts (Zod), utils.ts
```

Every section is its own component, and all editable content (services,
reviews, projects, business info) lives in `src/data/` and
`src/lib/constants.ts` — not hardcoded inline — so future edits don't
require touching layout code.

## Replacing Placeholder Images

Every image on the site currently renders via `<ImagePlaceholder />`
(`src/components/ui/ImagePlaceholder.tsx`), a labeled gradient block that
preserves the exact aspect ratio each spot needs. To swap in real
photography:

1. Add your image files to `public/images/`.
2. In the relevant section component, replace:
   ```tsx
   <ImagePlaceholder label="..." ratio="video" />
   ```
   with:
   ```tsx
   <Image src="/images/your-photo.jpg" alt="..." fill className="object-cover rounded-3xl" />
   ```
   (wrap in a `relative` container with the same aspect-ratio class if needed).

No layout, spacing, or animation changes are required — placeholders were
built to be drop-in replaceable.

## Updating Business Information

All contact info, service areas, hours, and nav links are centralized in:

```
src/lib/constants.ts
```

Update `SITE.phoneDisplay`, `SITE.email`, `SITE.address`, `SITE.hours`,
and `SITE.serviceAreas` there — every section (Hero, Footer, Contact,
JSON-LD schema, `tel:`/`mailto:` links) pulls from this single source.

Editable content collections (services, reviews, gallery projects, process
steps, stats) live in `src/data/services.ts` and `src/data/content.ts`.

## Connecting Email (Quote + Appointment Forms)

Both forms POST to internal API routes that currently **validate and log**
submissions server-side (see the `console.log` calls) — this lets you test
the full UI flow (loading, success, error states) with zero configuration.

To deliver real emails to `ecopacificpainting04@gmail.com`:

1. Pick a transactional email provider (Resend, SendGrid, Postmark, AWS SES).
2. Add credentials to `.env.local` (see `.env.example`).
3. In `src/app/api/quote/route.ts` and `src/app/api/appointment/route.ts`,
   replace the `// TODO: send email` block with your provider's send call.

Both routes already validate input with Zod and return typed error
responses, so the frontend requires no changes when you wire this up.

## Configuring Google Maps

The Contact section embeds a generic Google Maps iframe
(`src/components/sections/Contact.tsx`). Replace the `src` URL with the
client's real Google Maps "Embed a map" link (Google Maps → Share →
Embed a map) once their exact business address/pin is confirmed.

## Paint-Drip Buttons

The signature liquid-paint effect is implemented once in
`src/components/ui/PaintDripButton.tsx` and used **only** on the four
approved CTAs: *Get Free Quote*, *Call Now*, *Learn More About Us*, and
*View All Services*. All other buttons use the plain `.btn-primary` /
`.btn-secondary` / `.btn-outline-navy` utility classes in `globals.css`,
with no drip effect — this separation is intentional per spec and should
be preserved.

## Accessibility & Performance Notes

- Respects `prefers-reduced-motion` (loading screen, scroll reveals).
- Skip-to-content link, visible focus states, semantic headings.
- Lightbox and before/after slider support keyboard and touch.
- Images use `next/image`-ready placeholder components (swap-in optimized
  by default once real photography is added).
- `npm run build` produces a static/prerendered page for `/` — verified
  clean build with zero TypeScript and zero ESLint errors.

## Deployment

Any Next.js host works (Vercel is the path of least friction):

```bash
vercel deploy
```

Set the environment variables from `.env.example` in your host's
dashboard before going live (email provider keys, Maps embed URL, site URL).

## Future Expansion

The architecture (typed data files, isolated section components, Zod
schemas, API routes) is intentionally set up so the following can be
added without restructuring:

- Blog (`src/app/blog/[slug]/page.tsx`)
- CMS integration (swap `src/data/*` static arrays for CMS fetches)
- Real online scheduling (replace the appointment API route's stub logic)
- Google Reviews API (replace `REVIEWS` in `src/data/content.ts`)
- Customer portal / admin dashboard (new route groups under `src/app/`)
- Multi-language support (Next.js `i18n` routing)
