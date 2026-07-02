import { Quote, Star } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { REVIEWS } from "@/data/content";

export default function Reviews() {
  return (
    <section id="reviews" className="section bg-white">
      <div className="container max-w-content">
        <SectionHeading
          eyebrow="Client Reviews"
          title="What Our Clients Say"
          subtitle="Real feedback from homeowners and businesses across Metro Vancouver."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.1}>
              <div className="surface-card p-8 h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary-200" fill="currentColor" strokeWidth={0} />
                <div className="flex gap-1 mt-4">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-amber-400" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 text-navy-600 leading-relaxed flex-1">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">{review.name}</p>
                    <p className="text-xs text-navy-400">{review.location}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
