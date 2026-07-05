import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PaintDripButton from "@/components/ui/PaintDripButton";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import CtaBanner from "@/components/sections/CtaBanner";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential and commercial painting services in Metro Vancouver — interior, exterior, cabinet painting, and deck & fence staining, all backed by a satisfaction guarantee.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="What We Offer"
        title="Painting Services for Every Space"
        subtitle="From a single accent wall to a full commercial repaint, every service is delivered with the same premium standard of craftsmanship."
      >
        <PaintDripButton variant="primary" icon={<ArrowRight className="w-4 h-4" />} href="/quote">
          Get Free Quote
        </PaintDripButton>
      </PageHero>
      <Services variant="full" />
      <WhyChooseUs />
      <Process />
      <CtaBanner />
    </main>
  );
}
