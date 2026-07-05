import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Eco Pacific Painting — a trusted residential and commercial painting company serving Metro Vancouver with premium craftsmanship and reliable service.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="About Eco Pacific Painting"
        title="Craftsmanship, Care, and a Decade of Trust"
        subtitle="A trusted painting company serving Metro Vancouver with premium materials and honest, reliable service."
      />
      <About variant="full" />
      <Stats />
      <WhyChooseUs />
      <CtaBanner
        title="Let's Work Together"
        subtitle="Whether it's a single room or a full commercial property, our team is ready to bring your vision to life."
      />
    </main>
  );
}
