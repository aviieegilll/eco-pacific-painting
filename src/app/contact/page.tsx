import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Contact from "@/components/sections/Contact";
import ServiceArea from "@/components/sections/ServiceArea";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Eco Pacific Painting — call, email, or visit us. Proudly serving Vancouver, Surrey, Burnaby, Richmond, Langley, Coquitlam and Delta.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start Your Project"
        subtitle="Reach out by phone, email, or the form below — we're happy to answer questions and provide a free estimate."
      />
      <Contact />
      <ServiceArea />
    </main>
  );
}
