"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type DripVariant = "primary" | "secondary" | "light";

interface PaintDripButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: DripVariant;
  href?: string;
  icon?: React.ReactNode;
}

const variantStyles: Record<DripVariant, { bg: string; fill: string }> = {
  primary: { bg: "bg-primary-500 text-white hover:bg-primary-600 shadow-glow", fill: "#1789FF" },
  secondary: { bg: "bg-navy-700 text-white hover:bg-navy-800 shadow-soft", fill: "#0F3863" },
  light: { bg: "bg-white text-navy-800 border border-white/70 shadow-soft hover:bg-white/90", fill: "#FFFFFF" },
};

/**
 * Renders a button with a small liquid-paint drip fused to its bottom edge.
 *
 * The button itself is a full pill shape (rounded-full): its bottom edge is
 * curved near the left/right ends and only flat across the middle. The drip
 * shapes below are therefore inset well away from those curved ends — never
 * spanning the full width — so nothing pokes out past the button's rounded
 * corners. The SVG is also nudged a few pixels *up* into the button (rather
 * than sitting flush beneath it), so its top edge is hidden behind the
 * button's own opaque background instead of creating a visible seam.
 *
 * Reserved for exactly four CTAs across the site: Call Now, Get Free Quote,
 * Learn More About Us, View All Services.
 */
function DripShape({ fill }: { fill: string }) {
  return (
    <svg
      className="btn-drip-svg"
      viewBox="0 0 220 24"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Inset ~20% from each edge so drips only ever sit under the flat
          middle of the pill, clear of its curved end-caps. */}
      <path
        className="drip-blob"
        d="M40,0 H80 C82,7 76,15 69,15 C63,15 60,9 60,5 C60,9 56,12 51,12 C45,12 42,7 44,0 Z"
        fill={fill}
      />
      <path
        className="drip-blob"
        d="M95,0 H140 C142,5 138,10 133,10 C129,10 127,6 128,3 C126,6 121,8 117,6 C114,4.5 114,2 116,0 Z"
        fill={fill}
      />
      <path
        className="drip-blob"
        d="M155,0 H180 C182,6 176,14 169,14 C163,14 161,8 163,4 C160,7 155,8 152,5 C150,3 151,0 153,0 Z"
        fill={fill}
      />
    </svg>
  );
}

function DripInner({
  variant,
  className,
  children,
  icon,
}: {
  variant: DripVariant;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  const styles = variantStyles[variant];
  return (
    <span className="btn-drip-wrap">
      <span className={cn("btn relative z-10", styles.bg, className)}>
        {children}
        {icon}
      </span>
      <DripShape fill={styles.fill} />
    </span>
  );
}

const PaintDripButton = forwardRef<HTMLButtonElement, PaintDripButtonProps>(
  ({ variant = "primary", className, children, icon, href, ...props }, ref) => {
    if (href) {
      const isInternal = href.startsWith("/") || href.startsWith("#");
      if (isInternal) {
        return (
          <Link href={href} className="inline-block">
            <DripInner variant={variant} className={className} icon={icon}>
              {children}
            </DripInner>
          </Link>
        );
      }
      return (
        <a href={href} className="inline-block">
          <DripInner variant={variant} className={className} icon={icon}>
            {children}
          </DripInner>
        </a>
      );
    }

    return (
      <button ref={ref} {...props}>
        <DripInner variant={variant} className={className} icon={icon}>
          {children}
        </DripInner>
      </button>
    );
  }
);

PaintDripButton.displayName = "PaintDripButton";

export default PaintDripButton;
