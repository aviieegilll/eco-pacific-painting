import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Projects from "@/components/sections/Projects";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Stats from "@/components/sections/Stats";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse recent residential and commercial painting projects completed by Eco Pacific Painting across Metro Vancouver.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Our Portfolio"
        title="Craftsmanship You Can See"
        subtitle="A look at the transformations, finishes and attention to detail we bring to every project."
      />
      <Stats />
      <Projects variant="full" />
      <BeforeAfter />
      <CtaBanner
        title="Have a Project in Mind?"
        subtitle="Let's talk about your space and put together a free, no-obligation quote."
      />
    </main>
  );
}
