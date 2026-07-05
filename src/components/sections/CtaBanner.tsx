import { ArrowRight, Phone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import PaintDripButton from "@/components/ui/PaintDripButton";
import { SITE } from "@/lib/constants";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
}

export default function CtaBanner({
  title = "Ready to Transform Your Space?",
  subtitle = "Get a free, no-obligation quote and see why homeowners and businesses across Metro Vancouver trust Eco Pacific Painting.",
}: CtaBannerProps) {
  return (
    <section className="section bg-navy-900 relative overflow-hidden">
      <div
        className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-primary-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container max-w-content relative text-center max-w-2xl mx-auto">
        <Reveal>
          <h2 className="text-display-md text-white text-balance">{title}</h2>
          <p className="mt-4 text-white/60 text-lg leading-relaxed text-balance">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <PaintDripButton
              variant="primary"
              icon={<ArrowRight className="w-4 h-4" />}
              href="/quote"
            >
              Get Free Quote
            </PaintDripButton>
            <PaintDripButton variant="light" icon={<Phone className="w-4 h-4" />} href={`tel:${SITE.phoneRaw}`}>
              Call Now
            </PaintDripButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
