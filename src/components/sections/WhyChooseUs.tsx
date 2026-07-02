import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/data/services";

export default function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="container max-w-content">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Craftsmanship You Can Rely On"
          subtitle="Every project is backed by the same standard of professionalism, materials and care."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.06}>
              <div className="flex gap-4 p-6 rounded-2xl hover:bg-skyfaint/60 transition-colors duration-400">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary-50 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary-500" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">{feature.title}</h3>
                  <p className="mt-1.5 text-sm text-navy-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
