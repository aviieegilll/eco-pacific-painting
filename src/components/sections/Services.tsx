import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PaintDripButton from "@/components/ui/PaintDripButton";
import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="section bg-mist">
      <div className="container max-w-content">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete Painting Solutions"
          subtitle="From single rooms to full commercial properties, our team delivers premium finishes tailored to your space."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06}>
              <div className="surface-card p-8 h-full group">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors duration-400">
                  <service.icon
                    className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-400"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="text-h3 text-navy-900">{service.title}</h3>
                <p className="mt-2.5 text-navy-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <PaintDripButton variant="primary" href="#projects">
            View All Services
          </PaintDripButton>
        </Reveal>
      </div>
    </section>
  );
}
