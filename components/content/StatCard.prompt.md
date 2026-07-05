Icon + big number + label card used in the 4-up stats strip beneath the hero (Projects Completed, Years Experience, etc). In production the number count-up animates from 0 on scroll-into-view.

```jsx
<StatCard icon={<TrophyIcon />} value={500} suffix="+" label="Projects Completed" />
<StatCard icon={<ShieldCheckIcon />} value={24} suffix=" Hrs" label="Quote Response" />
```

Notable variants/props:
- Built on top of `Card` (surface variant) — same hover-lift behavior.
- `suffix` supports both symbols ("+", "%") and short strings (" Hrs").
