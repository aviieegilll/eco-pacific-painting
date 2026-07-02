"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Reveal from "@/components/ui/Reveal";
import { STATS } from "@/data/content";

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);

  return value;
}

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  active,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);
  return (
    <div className="surface-card p-8 text-center">
      <div className="w-12 h-12 mx-auto rounded-xl bg-primary-50 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary-500" strokeWidth={1.75} />
      </div>
      <p className="text-3xl md:text-4xl font-extrabold text-navy-900">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-navy-500 font-medium">{label}</p>
    </div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section className="relative -mt-10 md:-mt-16 z-10">
      <div className="container max-w-content">
        <Reveal>
          <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} active={inView} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
