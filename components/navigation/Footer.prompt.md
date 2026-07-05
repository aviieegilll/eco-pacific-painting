Navy-900 site footer: wordmark + blurb + social row, quick links, services list, contact details, and a legal bar with copyright + policy links.

```jsx
<Footer
  links={[{label:"Home",href:"#home"},{label:"Services",href:"#services"}]}
  services={["Residential Painting","Commercial Painting","Cabinet Painting"]}
  phone="+1 (604) 716-9395"
  email="ecopacificpainting04@gmail.com"
  address="10670 132A Street, British Columbia"
  hours="Monday – Saturday, 7:00 AM – 7:00 PM"
/>
```

Notable variants/props:
- Fixed navy-900 background — this is the one place the site goes fully dark besides the Projects gallery section.
- Social icons are rendered as plain glyphs in this recreation — swap for real Facebook/Instagram/Google icons from the brand's icon set (see Iconography in the readme).
