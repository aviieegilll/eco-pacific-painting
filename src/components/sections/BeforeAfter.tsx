"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      updateFromClientX(e.clientX);
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging.current) return;
      const touch = e.touches[0];
      if (touch) updateFromClientX(touch.clientX);
    };
    const onUp = () => (dragging.current = false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [updateFromClientX]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
  };

  return (
    <section className="section bg-mist">
      <div className="container max-w-content">
        <SectionHeading
          eyebrow="Before & After"
          title="See the Transformation"
          subtitle="Drag the handle to reveal the difference premium painting makes."
        />

        <Reveal delay={0.15} className="mt-12 max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-lift select-none cursor-ew-resize"
            onMouseDown={(e) => { dragging.current = true; updateFromClientX(e.clientX); }}
            onTouchStart={(e) => {
              dragging.current = true;
              const t = e.touches[0];
              if (t) updateFromClientX(t.clientX);
            }}
          >
            {/* "After" layer (base) */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-skyfaint to-primary-200 flex items-center justify-center">
              <span className="text-navy-400 text-sm font-medium">AFTER — Freshly Painted</span>
            </div>

            {/* "Before" layer (clipped) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-navy-200 via-navy-100 to-navy-300 flex items-center justify-center overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <span className="text-navy-500 text-sm font-medium">BEFORE — Original Condition</span>
            </div>

            {/* Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lift"
              style={{ left: `${position}%` }}
            >
              <div
                role="slider"
                tabIndex={0}
                aria-label="Before and after comparison slider"
                aria-valuenow={Math.round(position)}
                aria-valuemin={0}
                aria-valuemax={100}
                onKeyDown={onKeyDown}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lift flex items-center justify-center focus-visible:outline-2 focus-visible:outline-primary-400"
              >
                <MoveHorizontal className="w-5 h-5 text-primary-500" />
              </div>
            </div>

            <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wide bg-white/90 text-navy-700 px-3 py-1.5 rounded-full">
              Before
            </span>
            <span className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-wide bg-primary-500/90 text-white px-3 py-1.5 rounded-full">
              After
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
