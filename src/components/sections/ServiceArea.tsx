import { MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section className="section bg-white">
      <div className="container max-w-content">
        <SectionHeading
          eyebrow="Service Area"
          title="Proudly Serving Metro Vancouver"
          subtitle="Wherever you are across the region, our team is ready to bring your project to life."
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {SITE.serviceAreas.map((area, i) => (
            <Reveal key={area} delay={i * 0.05}>
              <div className="flex items-center gap-3 rounded-2xl border border-navy-100/60 bg-mist px-5 py-4 hover:bg-primary-50 hover:border-primary-200 transition-colors duration-300">
                <MapPin className="w-4.5 h-4.5 text-primary-500 shrink-0" strokeWidth={1.75} />
                <span className="text-sm font-medium text-navy-700">{area}</span>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <div className="flex items-center gap-3 rounded-2xl border border-dashed border-navy-200 px-5 py-4">
              <span className="text-sm font-medium text-navy-400">& surrounding areas</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
