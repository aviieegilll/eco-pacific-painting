"use client";

import Link from "next/link";
import { useState, useMemo, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { PROJECTS, type ProjectCategory } from "@/data/content";

const CATEGORIES: ("All" | ProjectCategory)[] = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Exterior",
  "Cabinets",
  "Decks",
];

interface ProjectsProps {
  variant?: "preview" | "full";
}

export default function Projects({ variant = "full" }: ProjectsProps) {
  const isPreview = variant === "preview";
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const base = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
    return isPreview ? base.slice(0, 3) : base;
  }, [filter, isPreview]);

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + filtered.length) % filtered.length
      ),
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, next, prev]);

  const active = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section id="projects" className="section bg-navy-900 text-white">
      <div className="container max-w-content">
        <SectionHeading
          eyebrow="Our Projects"
          title={<span className="text-white">Recent Painting Projects</span>}
          subtitle="A look at the craftsmanship and transformations we deliver across Metro Vancouver."
          className="[&_p.section-eyebrow]:text-primary-400"
        />
        <p className="sr-only">Recent painting projects gallery</p>

        {!isPreview && (
          <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary-500 text-white shadow-glow"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>
        )}

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.08}>
              <button
                onClick={() => setLightboxIndex(i)}
                className="group relative block w-full rounded-2xl overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-primary-400"
              >
                <ImagePlaceholder
                  label={project.title}
                  ratio="video"
                  gradient={project.placeholderHue}
                  className="group-hover:scale-[1.04] transition-transform duration-700 ease-premium"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/0 to-navy-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="text-white font-semibold">{project.title}</p>
                  <p className="text-white/70 text-sm">{project.location}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {isPreview && (
          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="btn text-white bg-white/10 hover:bg-white/15 border border-white/15 hover:-translate-y-0.5 transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        )}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-navy-950/95 backdrop-blur-md flex items-center justify-center p-6"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close lightbox"
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="absolute left-4 md:left-8 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="absolute right-4 md:right-8 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <ImagePlaceholder
                label={active.title}
                ratio="video"
                gradient={active.placeholderHue}
                className="rounded-2xl w-full"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-semibold text-lg">{active.title}</p>
                <p className="text-white/60 text-sm">{active.location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
