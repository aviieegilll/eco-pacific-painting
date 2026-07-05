Labeled form field (text/email/tel/date input, select, or textarea) matching the Quote/Appointment form styling — rounded-xl border, soft shadow, primary-tinted focus ring.

```jsx
<Input id="fullName" label="Full Name" required placeholder="Jane Doe" />
<Input as="select" label="Service Required" required options={["Residential Painting","Cabinet Painting"]} />
<Input as="textarea" label="Additional Notes" rows={4} />
<Input id="email" type="email" label="Email Address" required error="Please enter a valid email address" />
```

Notable variants/props:
- `error` renders a rose-600 message below the field and turns the border rose.
- Focus state: border → primary-400, 4px primary-100 ring (`focus:ring-4 focus:ring-primary-100`).
- `as="select"` and `as="textarea"` share the exact same field chrome as `input`.
