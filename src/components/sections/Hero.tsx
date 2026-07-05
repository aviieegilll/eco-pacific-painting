"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, ClipboardCheck, Building, BadgeCheck } from "lucide-react";
import PaintDripButton from "@/components/ui/PaintDripButton";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { SITE } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: ClipboardCheck, label: "Free Estimates" },
  { icon: Building, label: "Residential & Commercial" },
  { icon: BadgeCheck, label: "Satisfaction Guaranteed" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const base = shouldReduceMotion ? 0 : undefined;

  return (
    <section
      id="home"
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-skyfaint/60 via-white to-white"
    >
      <div
        className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-primary-100/50 blur-3xl"
        aria-hidden="true"
      />
      <div className="container max-w-content relative grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: base ?? 0.1, ease: EASE }}
            className="section-eyebrow mb-5"
          >
            Bringing Colour to Life
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: base ?? 0.2, ease: EASE }}
            className="text-display-lg md:text-display-xl text-navy-900 text-balance"
          >
            Premium Painting.{" "}
            <span className="text-primary-500">Exceptional Results.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: base ?? 0.35, ease: EASE }}
            className="mt-6 text-lg text-navy-500 leading-relaxed max-w-lg"
          >
            Transform your home or business with expert residential and
            commercial painting services. Delivering premium craftsmanship,
            reliable service and exceptional finishes across the Greater
            Vancouver area.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: base ?? 0.5, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <PaintDripButton
              variant="primary"
              icon={<ArrowRight className="w-4 h-4" />}
              href="/quote"
            >
              Get Free Quote
            </PaintDripButton>
            <PaintDripButton variant="secondary" icon={<Phone className="w-4 h-4" />} href={`tel:${SITE.phoneRaw}`}>
              Call Now
            </PaintDripButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: base ?? 0.65, ease: EASE }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group cursor-pointer flex flex-col items-start gap-2 rounded-2xl border border-navy-100/60 hover:border-primary-300/70 bg-white/70 backdrop-blur-sm p-4 shadow-soft hover:shadow-lift transition-all duration-300 ease-premium will-change-transform hover:-translate-y-2.5 hover:scale-[1.03] hover:ring-1 hover:ring-primary-200/50"
              >
                <Icon
                  className="w-5 h-5 text-primary-500 transition-transform duration-300 ease-premium group-hover:scale-110 group-hover:-rotate-6"
                  strokeWidth={1.75}
                />
                <span className="text-xs font-medium text-navy-700 leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: base ?? 0.3, ease: EASE }}
          className="relative"
        >
          <ImagePlaceholder
            label="Luxury home exterior — freshly painted"
            ratio="portrait"
            className="rounded-3xl shadow-lift w-full"
          />
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-white shadow-lift border border-navy-50 px-5 py-4">
            <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
              <BadgeCheck className="w-5 h-5 text-primary-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-900">850+ Projects</p>
              <p className="text-xs text-navy-400">Completed with care</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
