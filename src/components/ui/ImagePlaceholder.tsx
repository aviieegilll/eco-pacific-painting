import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  gradient?: string;
  ratio?: "square" | "video" | "portrait" | "wide";
}

const ratioClasses: Record<NonNullable<ImagePlaceholderProps["ratio"]>, string> = {
  square: "aspect-square",
  video: "aspect-[16/10]",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

/**
 * Stand-in for real client photography. Swap by dropping a <Image> (next/image)
 * in place of this component — the aspect-ratio wrapper keeps layout stable so
 * no other styles need to change when real photos are added.
 */
export default function ImagePlaceholder({
  label = "Project Photo",
  className,
  gradient = "from-navy-100 via-skyfaint to-primary-100",
  ratio = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "img-placeholder bg-gradient-to-br",
        gradient,
        ratioClasses[ratio],
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 opacity-60">
        <ImageIcon strokeWidth={1.5} className="w-8 h-8" />
        <span className="text-xs font-medium">{label}</span>
      </div>
    </div>
  );
}
