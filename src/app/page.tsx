import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Projects from "@/components/sections/Projects";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Reviews from "@/components/sections/Reviews";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Stats overlapHero />
      <About variant="preview" />
      <Services variant="preview" />
      <WhyChooseUs />
      <Projects variant="preview" />
      <BeforeAfter />
      <Reviews limit={3} />
      <CtaBanner />
    </main>
  );
}
