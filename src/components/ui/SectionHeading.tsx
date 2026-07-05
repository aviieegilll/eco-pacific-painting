import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && <p className="section-eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-display-md text-navy-900 text-balance">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-navy-500 text-lg leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
