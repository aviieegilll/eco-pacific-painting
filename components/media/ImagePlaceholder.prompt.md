Labeled gradient placeholder standing in for real client photography — preserves the exact aspect ratio each spot needs so a real `<img>`/`next/image` can drop in later with zero layout changes.

```jsx
<ImagePlaceholder label="Luxury home exterior — freshly painted" ratio="portrait" />
<ImagePlaceholder label="Modern Home Exterior" ratio="video" gradient="linear-gradient(to bottom right, #EAF4FF, #ADD3FF)" />
```

Notable variants/props:
- `ratio`: square (1/1), video (16/10, default — most sections), portrait (3/4, hero image), wide (21/9).
- This is a real, intentional production component — not a mockup convenience. **No photography currently exists for this brand**; every image slot on the live site renders this component. Do not invent or generate photos to replace it.
