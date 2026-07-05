# Eco Pacific Painting — Website UI Kit

A high-fidelity, interactive recreation of the production marketing homepage (`aviieegilll/eco-pacific-painting`), composed entirely from this design system's primitives (`Button`, `Card`, `Input`, `SectionHeading`, `StatCard`, `ImagePlaceholder`, `Navbar`, `Footer`, `LoadingScreen`).

Open `index.html`. On load you'll see the branded loading screen, then the full scroll-through homepage: Hero → Stats → Services → Projects (with working category filter + lightbox) → Reviews → Quote form (submit it to see the success state) → Contact → Footer. The navbar switches from transparent to frosted glass as you scroll.

## Files

- `index.html` — shell: loading screen timing, scroll-based navbar state, section assembly.
- `Hero.jsx`, `StatsSection.jsx`, `ServicesSection.jsx`, `ProjectsSection.jsx`, `ReviewsSection.jsx`, `QuoteSection.jsx`, `ContactSection.jsx` — one file per section, each a plain global-scope React component (see the file's final `window.X = X` line) loaded via a classic Babel `<script src>` tag.

## What's abbreviated

Per the source data, Projects/Reviews arrays are trimmed to a representative few (the real site has 9 projects, 3 reviews) — same component, less repetition. The Appointment-booking section and the Process/"Why Choose Us" sections from the real site are not included in this first pass; they use the exact same `Card`/`SectionHeading`/`Input` primitives shown here and can be added the same way.
