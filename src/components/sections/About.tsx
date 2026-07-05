import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import PaintDripButton from "@/components/ui/PaintDripButton";
import { ABOUT_BENEFITS } from "@/data/services";

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container max-w-content grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <ImagePlaceholder
            label="Team at work — interior repaint"
            ratio="video"
            className="rounded-3xl shadow-card"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="section-eyebrow mb-3">About Us</p>
          <h2 className="text-display-md text-navy-900 text-balance">
            Painting Spaces.
            <br />
            Building Trust.
          </h2>
          <p className="mt-5 text-navy-500 leading-relaxed text-lg">
            Eco Pacific Painting is a trusted painting company serving
            residential and commercial clients across Metro Vancouver. We
            combine premium materials, expert craftsmanship and meticulous
            attention to detail to deliver exceptional results on every
            project, every time.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
            {ABOUT_BENEFITS.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" strokeWidth={1.75} />
                <span className="text-navy-700 text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <PaintDripButton variant="primary" href="#about">
              Learn More About Us
            </PaintDripButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
