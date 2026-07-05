# Eco Pacific Painting — Design System

Official design system for the **Eco Pacific Painting** marketing website — a premium residential and commercial painting company serving Metro Vancouver (interior/exterior painting, cabinet refinishing, deck & fence staining), positioned as a luxury, trustworthy, minimal-modern brand.

This system was built by reading the production codebase directly — not by guessing from screenshots — so every token, component, and layout pattern here traces back to real source files. See **Sources** below.

## Sources

- **GitHub repo (ground truth):** [`aviieegilll/eco-pacific-painting`](https://github.com/aviieegilll/eco-pacific-painting) — Next.js 15 (App Router) + TypeScript + Tailwind CSS 3 + Framer Motion marketing site. Explore this repo further for anything this design system doesn't cover (API routes, form validation schemas, SEO/JSON-LD, exact section ordering).
  - `tailwind.config.ts` — the canonical source for all color/type/shadow/radius tokens.
  - `src/app/globals.css` — button, card, form-field, and paint-drip button-system CSS.
  - `src/components/` — every section and primitive component recreated here.
  - `src/data/`, `src/lib/constants.ts` — real site copy (services, reviews, stats, process steps, business info).

No Figma file, slide deck, or additional codebase was attached — everything here derives from that one repo.

## Product surface

There is exactly **one product**: the public marketing website (`ecopacificpainting.com`) — a single long-scrolling homepage (Hero → Stats → About → Services → Why Choose Us → Projects → Before/After → Reviews → Process → Quote Form → Appointment → Service Area → Contact → Footer). There is no app, dashboard, or admin surface in the source repo.

## Index / manifest

```
styles.css                    → root stylesheet (imports only)
tokens/
  colors.css                  → primary (cyan-blue) + navy palette, neutrals, semantic aliases
  typography.css               → Plus Jakarta Sans scale, weights, tracking
  spacing.css                  → spacing scale, container widths, radii
  effects.css                  → shadows, blur, motion easing/duration
components/
  buttons/Button.jsx            → pill CTA, 4 variants + signature paint-drip effect
  forms/Input.jsx                → labeled text/select/textarea field
  surfaces/Card.jsx              → surface-card (hover-lift) + glass-card
  content/SectionHeading.jsx     → eyebrow + title + subtitle
  content/StatCard.jsx           → icon + count-up figure + label
  media/ImagePlaceholder.jsx     → photography stand-in (real production component)
  navigation/Navbar.jsx          → fixed header, transparent→glass on scroll
  navigation/Footer.jsx          → navy-900 footer
  feedback/LoadingScreen.jsx     → branded wordmark-wipe splash
guidelines/                     → foundation specimen cards (Colors, Type, Spacing, Brand, Motion)
ui_kits/website/                → click-through homepage recreation
assets/                         → (empty — no logo or photography exists yet; see Iconography)
SKILL.md                        → Claude-Code-portable skill wrapper
```

## Components

| Component | Family | What it is |
| --- | --- | --- |
| `Button` | buttons | Pill CTA — primary/secondary/light/outline-navy, optional paint-drip |
| `Input` | forms | Labeled input/select/textarea with focus + error states |
| `Card` | surfaces | Solid hover-lift card, or frosted glass panel |
| `SectionHeading` | content | Eyebrow + display title + subtitle |
| `StatCard` | content | Icon chip + big count-up number + label |
| `ImagePlaceholder` | media | Aspect-ratio-safe photography stand-in |
| `Navbar` | navigation | Fixed header with scroll-triggered glass state |
| `Footer` | navigation | Navy-900 site footer |
| `LoadingScreen` | feedback | First-load wordmark-wipe splash |

**Intentional additions:** none. Every component above has a direct 1:1 counterpart in the source codebase (`src/components/ui/*` and `src/components/layout/*`); nothing was invented. The four CSS button-utility variants (`.btn-primary/-secondary/-light/-outline-navy`) were consolidated into one `Button` component with a `variant` prop rather than four separate files, since that's how the source itself parameterizes `PaintDripButton`.

## Content fundamentals

**Tone:** Confident, plain, and reassuring — a licensed local tradesperson speaking directly to a homeowner or property manager, not a lifestyle brand. Sentences are short and benefit-first ("Free, transparent quotes with no hidden fees").

**Voice:** "We" (the company) talking to "you" (the client) — e.g. *"Transform your home or business with expert residential and commercial painting services."* Never third-person distance ("customers can expect...").

**Casing:** Sentence case for body copy and most headings; nav labels and eyebrows are Title Case. The wordmark itself is set in tracked-out ALL CAPS ("ECO PACIFIC" / "PAINTING") — this is a one-off treatment for the logotype only, not a rule for body text.

**Emoji:** Never used. Trust markers are communicated via short badge labels ("Licensed & Insured", "Free Estimates") paired with Lucide icons, not emoji.

**Vocabulary that recurs:** "premium," "craftsmanship," "transparent pricing," "satisfaction guaranteed," "licensed and insured," "free quote/estimate." Avoid hype words ("amazing," "revolutionary") — the brand earns trust through specificity (10+ years, 500+ projects, 24-hour quote response) rather than superlatives.

**CTA language:** Verb-first, low-friction, always time-bound or cost-bound: "Get Free Quote," "Call Now," "Book Appointment," "Request My Free Quote." Every CTA implies zero risk (free, no-obligation).

**Microcopy example (real, from `src/data/services.ts`):** *"Factory-smooth cabinet refinishing for kitchens and bathrooms — a fraction of the cost of full replacement."* — note the concrete comparison rather than an adjective pile-up.

## Visual foundations

**Color:** Two-hue system — a saturated **Bright Cyan Blue** (`#1789FF`, `primary`) for CTAs, links, icon chips, and accents; a **Deep Navy Blue** (`#0F3863`, `navy`) for all text and dark surfaces (footer, projects section). Neutrals are cool, not warm: `skyfaint` (#E6F4FF) and `mist` (#F5FAFF) washes rather than gray. There is no secondary/tertiary brand color — restraint is the point.

**Type:** Single family, **Plus Jakarta Sans**, weights 400–800, for everything (display, body, UI, forms) — no serif or mono pairing. Display sizes are large and tightly tracked (-0.02em) for a confident, architectural feel; body copy uses a generous 1.6 line-height and warm navy-500 (not pure black) for softness.

**Backgrounds:** Mostly flat white or `mist`/`skyfaint` washes; one soft radial blur blob behind the hero (`primary-100/50`, blurred 3xl) is the only "decorative" background effect. No photography exists yet — every image slot is a labeled gradient placeholder (see Iconography). No repeating patterns, no hand-drawn illustration, no noise/grain.

**Animation:** A single signature easing curve, `cubic-bezier(0.22, 1, 0.36, 1)` ("premium ease"), used everywhere — scroll reveals, hovers, drawer transitions. Scroll reveals are a 28px fade-up, staggered \~60-100ms per item, triggered once on viewport entry (`whileInView`, never re-triggers). The loading screen wordmark wipes in via clip-path over \~1.1s. Everything respects `prefers-reduced-motion` (durations collapse to \~0).

**Hover states:** Buttons and cards lift `-translate-y` (2px buttons / 4px cards) and escalate their shadow from `shadow-soft` → `shadow-lift`; filled buttons darken one step (primary-500→600, navy-700→800). Ghost/ ourline buttons gain a light tint background (`hover:bg-navy-50`, `hover:bg-primary-50`) rather than a border change.

**Press states:** Buttons return to `translateY(0)` on `:active` — no scale/shrink effect anywhere in the source.

**Borders:** Hairline only — `navy-100/60` (a translucent navy at \~60% used at 1px) on cards; `navy-200` solid for outline buttons and dashed-navy-200 for "coming soon" tiles (see ServiceArea's "& surrounding areas" tile). No colored/thick accent borders.

**Shadows:** Four-step system, all navy-tinted (`rgba(15,56,99,...)`) except the primary "glow" which is cyan-tinted for filled CTAs: `soft` (resting cards) → `card` (glass/quote panel) → `lift` (hover state) → `glow` (primary buttons at rest, since they're always meant to pop).

**Corner radii:** Generous and consistent — `1rem`/`1.5rem`/`2rem` for cards and image blocks, full pill (`9999px`) for every button and badge. Nothing uses a small 4-6px "default" radius; the brand reads as soft-architectural, not boxy.

**Cards:** Two types only. `surface-card`: white, hairline navy border, soft shadow, hover-lift. `glass-card`: 70%-opacity white + 12px backdrop blur + white/60 border — used exactly once, for the Quote form panel ("used sparingly" per the source's own CSS comment). Never combine the two.

**Transparency & blur:** Used in exactly three places — the scrolled navbar (`glass-nav`), the Quote form panel (`glass-card`), and the mobile-nav scrim overlay. Not used decoratively elsewhere.

**Imagery color vibe:** N/A today — no real photography has been supplied (see Iconography/Assets). The placeholder gradients that stand in for photography are cool-toned (navy/sky/primary blends), matching the brand palette; when real photography arrives, prefer bright, clean, naturally-lit exteriors/interiors — no black-and-white, no heavy grain, no warm/orange color grading (that would clash with the cyan-navy system).

**Layout rules:** A fixed `1280px` max content width, centered, with responsive gutter padding (20px mobile → 40px desktop). Sections alternate between `white` and `mist` backgrounds roughly every other section for rhythm; the Projects gallery and Footer are the only navy-900 (dark) sections on the page.

## Iconography

**System:** [Lucide](https://lucide.dev) (`lucide-react`) exclusively — every icon on the site (service icons, stat icons, process-step icons, contact-card icons, form icons, social icons) comes from this one set. Stroke width is consistently `1.5–1.75`, never filled except for star ratings and the quote-mark glyph (`fill="currentColor"` intentionally on those two).

**No emoji, no unicode glyphs, no icon font, no custom SVG icon set.** When building on this system, pull additional icons from Lucide's CDN/npm package rather than drawing new ones, so new icons match the existing stroke weight exactly.

**No PNG icons or icon sprite sheets** exist in the source.

## Assets

**No logo file exists in the source repository or anywhere else provided.** The site's "mark" is a two-line typographic wordmark — "ECO PACIFIC" (bold, tracked-tight) over "PAINTING" (small, letter-spaced, primary-blue) — set in plain type, not a drawn logo. This design system reproduces that same typographic treatment everywhere a mark is needed (Navbar, Footer, LoadingScreen) and does **not** invent a graphic logo. If a real logo exists elsewhere, attach it and this system will incorporate it.

**No photography exists yet.** Every image slot on the production site renders `ImagePlaceholder` — a labeled, aspect-ratio-correct gradient block, by design (see the source README's "Replacing Placeholder Images" section). This design system preserves that same placeholder component rather than fabricating stock photography.

The `assets/` folder is therefore currently empty. Once the client supplies a logo and photography, add them here and update the components/readme accordingly.

## Font substitution note

No substitution was needed — **Plus Jakarta Sans** is loaded directly from Google Fonts (as the source does via `next/font/google`), referenced in `tokens/typography.css`.
