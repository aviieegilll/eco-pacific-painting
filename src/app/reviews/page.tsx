import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Stats from "@/components/sections/Stats";
import Reviews from "@/components/sections/Reviews";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See what homeowners and businesses across Metro Vancouver say about working with Eco Pacific Painting.",
};

export default function ReviewsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Testimonials"
        title="Trusted by Homeowners & Businesses Alike"
        subtitle="Real feedback from real clients across Vancouver, Surrey, Burnaby, Richmond, Langley, Coquitlam and Delta."
      />
      <Stats />
      <Reviews />
      <CtaBanner
        title="Join Our List of Happy Clients"
        subtitle="Get a free quote today and experience the Eco Pacific Painting standard for yourself."
      />
    </main>
  );
}
