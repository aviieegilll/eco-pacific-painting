import {
  Home,
  Building2,
  PaintRoller,
  SunMedium,
  Archive,
  Fence,
  ShieldCheck,
  Gem,
  Users,
  Receipt,
  Clock,
  ThumbsUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: Home,
    title: "Residential Painting",
    description:
      "Full-home interior and exterior painting delivered with meticulous prep and a flawless, lasting finish.",
  },
  {
    icon: Building2,
    title: "Commercial Painting",
    description:
      "Minimal-disruption painting programs for offices, retail and industrial properties, scheduled around your hours.",
  },
  {
    icon: PaintRoller,
    title: "Interior Painting",
    description:
      "Walls, ceilings, trim and feature accents finished with premium, low-VOC coatings for a refined result.",
  },
  {
    icon: SunMedium,
    title: "Exterior Painting",
    description:
      "Weather-resistant systems that protect your property while elevating its curb appeal for years to come.",
  },
  {
    icon: Archive,
    title: "Cabinet Painting",
    description:
      "Factory-smooth cabinet refinishing for kitchens and bathrooms — a fraction of the cost of full replacement.",
  },
  {
    icon: Fence,
    title: "Deck & Fence Staining",
    description:
      "Protective staining that guards outdoor wood against Vancouver's climate while enhancing natural grain.",
  },
];

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Full coverage on every project, so your property is always protected.",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    description: "We use only trusted, professional-grade paints and finishes.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled painters with over a decade of hands-on craftsmanship.",
  },
  {
    icon: Receipt,
    title: "Transparent Pricing",
    description: "Clear, itemized quotes with no hidden fees or surprises.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description: "We respect your schedule and deliver projects when promised.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "If it's not right, we make it right — that's our promise.",
  },
];

export const ABOUT_BENEFITS = [
  "Professional Team",
  "Premium Materials",
  "Attention to Detail",
  "Clean Workmanship",
  "Reliable Scheduling",
  "Customer Satisfaction",
];
