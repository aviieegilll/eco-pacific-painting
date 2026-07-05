Fixed top navigation: two-line wordmark, link row, phone number + primary CTA, collapsing to a hamburger below 1024px. Transparent over the hero, then becomes a frosted glass bar once the page scrolls.

```jsx
<Navbar
  links={[{label:"Home",href:"#home"},{label:"Services",href:"#services"},{label:"Contact",href:"#contact"}]}
  phone="+1 (604) 716-9395"
  scrolled={false}
/>
```

Notable variants/props:
- `scrolled`: toggles between transparent (over the hero image) and `glass-nav` (white/80 + 12px blur + soft shadow + shorter vertical padding).
- Uses the design system's `Button` (outline-navy for phone, primary for the CTA) — never re-implement button styling locally.
