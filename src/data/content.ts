import {
  Trophy,
  CalendarDays,
  Smile,
  ShieldCheck,
  PhoneCall,
  FileText,
  Wrench,
  Paintbrush,
  Search,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface StatItem {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

export const STATS: StatItem[] = [
  { icon: Trophy, value: 500, suffix: "+", label: "Projects Completed" },
  { icon: CalendarDays, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Smile, value: 100, suffix: "%", label: "Customer Satisfaction" },
  { icon: ShieldCheck, value: 24, suffix: " Hrs", label: "Quote Response" },
];

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Interior"
  | "Exterior"
  | "Cabinets"
  | "Decks";

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  placeholderHue: string;
}

export const PROJECTS: ProjectItem[] = [
  { id: "p1", title: "Modern Home Exterior", location: "Vancouver, BC", category: "Exterior", placeholderHue: "from-primary-100 to-navy-100" },
  { id: "p2", title: "Kitchen Cabinet Refinish", location: "Surrey, BC", category: "Cabinets", placeholderHue: "from-skyfaint to-primary-100" },
  { id: "p3", title: "Commercial Office Building", location: "Richmond, BC", category: "Commercial", placeholderHue: "from-navy-100 to-skyfaint" },
  { id: "p4", title: "Coastal Family Residence", location: "Burnaby, BC", category: "Residential", placeholderHue: "from-primary-50 to-primary-200" },
  { id: "p5", title: "Living Room Interior Refresh", location: "Langley, BC", category: "Interior", placeholderHue: "from-mist to-navy-100" },
  { id: "p6", title: "Cedar Deck Restoration", location: "Coquitlam, BC", category: "Decks", placeholderHue: "from-navy-100 to-primary-100" },
  { id: "p7", title: "Retail Storefront Repaint", location: "Delta, BC", category: "Commercial", placeholderHue: "from-skyfaint to-navy-50" },
  { id: "p8", title: "Heritage Home Exterior", location: "Vancouver, BC", category: "Exterior", placeholderHue: "from-primary-100 to-mist" },
  { id: "p9", title: "Bathroom Vanity Refinish", location: "Surrey, BC", category: "Cabinets", placeholderHue: "from-mist to-primary-50" },
];

export interface ReviewItem {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    name: "Amanda R.",
    location: "Vancouver, BC",
    rating: 5,
    quote:
      "Eco Pacific Painting transformed our home. The team was professional, kept everything spotless, and finished right on schedule. The results speak for themselves.",
  },
  {
    name: "Jason T.",
    location: "Langley, BC",
    rating: 5,
    quote:
      "Great experience from the first quote to the final walkthrough. Communication was clear the whole way and the finish quality is outstanding. Highly recommended.",
  },
  {
    name: "Priya S.",
    location: "Burnaby, BC",
    rating: 5,
    quote:
      "Very professional and detail-oriented. Our office looks brand new. They worked around our business hours with zero disruption to our team.",
  },
  {
    name: "Michael C.",
    location: "Richmond, BC",
    rating: 5,
    quote:
      "Our deck looks better than the day it was built. The crew showed up on time every day and left the site spotless. Genuinely impressed with the craftsmanship.",
  },
  {
    name: "Sarah L.",
    location: "Coquitlam, BC",
    rating: 5,
    quote:
      "From the initial quote to the final coat, everything was transparent and professional. Our kitchen cabinets look like a brand-new custom install.",
  },
  {
    name: "David & Ellen W.",
    location: "Surrey, BC",
    rating: 5,
    quote:
      "We've used Eco Pacific for both our exterior and interior. Consistent quality, punctual crews, and they always clean up perfectly after each day.",
  },
];

export interface ProcessStep {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  { icon: PhoneCall, step: 1, title: "Free Consultation", description: "We discuss your vision, timeline and budget at no cost." },
  { icon: FileText, step: 2, title: "Detailed Quote", description: "A transparent, itemized estimate with no hidden fees." },
  { icon: Wrench, step: 3, title: "Preparation", description: "Surfaces are cleaned, repaired and protected before painting begins." },
  { icon: Paintbrush, step: 4, title: "Professional Painting", description: "Precision application using premium materials and proven technique." },
  { icon: Search, step: 5, title: "Final Inspection", description: "A thorough walkthrough to confirm every detail meets our standard." },
  { icon: CheckCircle2, step: 6, title: "Project Completion", description: "A clean site, a finished space, and a client who's thrilled." },
];
