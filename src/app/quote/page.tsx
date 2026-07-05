import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import QuoteForm from "@/components/sections/QuoteForm";
import Appointment from "@/components/sections/Appointment";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free, no-obligation painting quote or book an appointment with Eco Pacific Painting. We respond within 24 hours.",
};

export default function QuotePage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Get Started"
        title="Let's Bring Your Project to Life"
        subtitle="Request a free quote or book an appointment below — our team typically responds within 24 hours."
      />
      <QuoteForm />
      <Appointment />
    </main>
  );
}
