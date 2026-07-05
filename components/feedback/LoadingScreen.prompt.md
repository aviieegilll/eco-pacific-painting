Full-screen white overlay shown for ~2.2 seconds on first load: the wordmark wipes in left-to-right behind a blurred cyan light-sweep, then the whole screen fades out. Respects `prefers-reduced-motion` (skips straight to hidden).

```jsx
<LoadingScreen visible={true} />
```

Notable variants/props:
- `visible`: parent owns the timer/state; this component is presentation-only.
- This is a branded moment, not a generic spinner — always use the wordmark wipe, never a spinner/progress bar.
