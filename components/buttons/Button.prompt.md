Pill-shaped CTA button in four style variants, with an optional signature liquid "paint-drip" SVG for the site's four hero CTAs.

```jsx
<Button variant="primary" drip icon={<ArrowRightIcon />}>Get Free Quote</Button>
<Button variant="secondary" drip>Call Now</Button>
<Button variant="light">Learn More</Button>
<Button variant="outline-navy" size="sm">Cancel</Button>
```

Notable variants/props:
- `variant`: primary (bright cyan fill + glow), secondary (navy fill), light (white + primary border), outline-navy (transparent + navy border) — no default browser button styling.
- `drip`: only ever true on **Get Free Quote**, **Call Now**, **Learn More About Us**, **View All Services**. Every other button on the site is drip-less.
- `href` renders an `<a>` instead of a `<button>`.
- Hover state: -2px translateY + shadow escalates to `--shadow-lift`. Press/active returns to translateY(0).
