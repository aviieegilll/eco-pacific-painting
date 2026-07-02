export const SITE = {
  name: "Eco Pacific Painting",
  tagline: "Bringing Colour to Life",
  url: "https://www.ecopacificpainting.com",
  phoneDisplay: "+1 (604) 716-9395",
  phoneRaw: "+16047169395",
  email: "ecopacificpainting04@gmail.com",
  address: {
    street: "10670 132A Street",
    city: "Surrey",
    region: "British Columbia",
    country: "Canada",
  },
  hours: {
    days: "Monday – Saturday",
    time: "7:00 AM – 7:00 PM",
  },
  serviceAreas: [
    "Vancouver",
    "Surrey",
    "Burnaby",
    "Richmond",
    "Langley",
    "Coquitlam",
    "Delta",
  ],
  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Quote", href: "#quote" },
  { label: "Contact", href: "#contact" },
] as const;
