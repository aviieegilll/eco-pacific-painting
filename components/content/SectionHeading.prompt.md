Standard section header: small uppercase eyebrow in primary blue, a bold display title, and an optional muted subtitle — used at the top of nearly every page section.

```jsx
<SectionHeading
  eyebrow="Our Services"
  title="Complete Painting Solutions"
  subtitle="From single rooms to full commercial properties, our team delivers premium finishes."
/>
<SectionHeading eyebrow="Our Projects" title="Recent Painting Projects" inverse />
```

Notable variants/props:
- `align="left"` for two-column layouts (e.g. About section); default is centered.
- `inverse` flips text to white/primary-400 for use on the navy-900 Projects section.
