import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Premium Residential & Commercial Painting in Vancouver, BC`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Eco Pacific Painting delivers premium residential and commercial painting services across Metro Vancouver — interior, exterior, cabinet refinishing and deck staining, backed by licensed, insured craftsmanship and a satisfaction guarantee.",
  keywords: [
    "painting company Vancouver",
    "residential painters BC",
    "commercial painting Vancouver",
    "interior painting",
    "exterior painting",
    "cabinet painting",
    "deck staining Vancouver",
    "Eco Pacific Painting",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Premium Painting Excellence You Can Trust`,
    description:
      "Licensed, insured painting craftsmanship for homes and businesses across Metro Vancouver. Free quotes, transparent pricing, exceptional finishes.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Premium Painting Excellence`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Premium Painting Excellence You Can Trust`,
    description:
      "Licensed, insured painting craftsmanship for homes and businesses across Metro Vancouver.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PaintingContractor",
  name: SITE.name,
  image: `${SITE.url}/images/og-cover.jpg`,
  url: SITE.url,
  telephone: SITE.phoneRaw,
  email: SITE.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: "CA",
  },
  areaServed: SITE.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "07:00",
    closes: "19:00",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={plusJakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
