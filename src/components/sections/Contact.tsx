import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";

const contactCards = [
  { icon: Phone, label: "Phone", value: SITE.phoneDisplay, href: `tel:${SITE.phoneRaw}` },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Address", value: `${SITE.address.street}, ${SITE.address.region}`, href: undefined },
  { icon: Clock, label: "Business Hours", value: `${SITE.hours.days} · ${SITE.hours.time}`, href: undefined },
];

export default function Contact() {
  return (
    <section id="contact" className="section bg-mist">
      <div className="container max-w-content">
        <div className="grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactCards.map((card) =>
              card.href ? (
                <a key={card.label} href={card.href} className="surface-card p-6 flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary-50 flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-primary-500" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-navy-400">
                      {card.label}
                    </p>
                    <p className="mt-1 font-semibold text-navy-900 text-sm break-words">
                      {card.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div key={card.label} className="surface-card p-6 flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary-50 flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-primary-500" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-navy-400">
                      {card.label}
                    </p>
                    <p className="mt-1 font-semibold text-navy-900 text-sm break-words">
                      {card.value}
                    </p>
                  </div>
                </div>
              )
            )}
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden shadow-card aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] relative">
              {/*
                Google Map placeholder. Replace the src below with a real
                embed URL (see .env.example → NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL)
                once the client provides their exact business location.
              */}
              <iframe
                title="Eco Pacific Painting service area map"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Surrey,British+Columbia,Canada&output=embed"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
