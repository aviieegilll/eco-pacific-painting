"use client";

import { motion, useReducedMotion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const y = shouldReduceMotion ? 0 : 20;

  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden bg-gradient-to-b from-skyfaint/60 via-white to-white">
      <div
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-primary-100/50 blur-3xl"
        aria-hidden="true"
      />
      <div className="container max-w-content relative text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="section-eyebrow mb-4 justify-center"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: y + 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="text-display-md md:text-display-lg text-navy-900 text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: EASE }}
            className="mt-5 text-lg text-navy-500 leading-relaxed text-balance"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34, ease: EASE }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
