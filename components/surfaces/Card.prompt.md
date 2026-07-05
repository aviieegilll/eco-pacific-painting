Base surface for service tiles, stat cards, reviews and contact cards, plus a frosted-glass variant for the quote-form panel.

```jsx
<Card>
  <h3>Residential Painting</h3>
  <p>Full-home interior and exterior painting…</p>
</Card>

<Card variant="glass" padding="2.5rem">
  {/* quote form contents */}
</Card>
```

Notable variants/props:
- `variant="surface"` (default): white bg, 1px navy-100/60 border, `--shadow-soft`; on hover lifts -4px and escalates to `--shadow-lift`. This is the workhorse card used everywhere (services, stats, reviews, contact, why-choose-us).
- `variant="glass"`: 70% white + 12px backdrop blur + white/60 border — reserved for the Quote form panel only ("used sparingly" per source globals.css comment).
- `hoverLift={false}` disables the hover animation for static, non-interactive cards.
