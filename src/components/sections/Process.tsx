import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/data/content";

export default function Process() {
  return (
    <section className="section bg-mist overflow-hidden">
      <div className="container max-w-content">
        <SectionHeading
          eyebrow="Our Process"
          title="From First Call to Finished Space"
          subtitle="A clear, dependable process designed around your schedule and peace of mind."
        />

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden lg:block relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-navy-100" />
          <div className="grid grid-cols-6 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-glow">
                    <step.icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-semibold text-navy-900 text-sm">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-navy-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile/tablet: vertical timeline */}
        <div className="mt-14 lg:hidden relative pl-8">
          <div className="absolute top-2 bottom-2 left-[23px] w-px bg-navy-100" />
          <div className="space-y-8">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <div className="relative flex gap-4">
                  <div className="relative z-10 -ml-8 w-12 h-12 shrink-0 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-glow">
                    <step.icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">{step.title}</h3>
                    <p className="mt-1 text-sm text-navy-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
