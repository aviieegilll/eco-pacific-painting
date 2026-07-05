"use client";

import { forwardRef } from "react";
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
 * Renders a button whose bottom edge is fused to a small, asymmetrical liquid-paint
 * drip silhouette. The drip SVG shares the exact fill colour of the button background
 * and sits with a negative offset so there is no visible seam — the button reads as
 * one continuous shape "made of paint."
 *
 * Reserved for exactly four CTAs across the site: Call Now, Get Free Quote,
 * Learn More About Us, View All Services.
 */
const PaintDripButton = forwardRef<HTMLButtonElement, PaintDripButtonProps>(
  ({ variant = "primary", className, children, icon, href, ...props }, ref) => {
    const styles = variantStyles[variant];

    const content = (
      <span className="btn-drip-wrap">
        <span
          className={cn(
            "btn relative z-10",
            styles.bg,
            className
          )}
        >
          {children}
          {icon}
        </span>
        <svg
          className="btn-drip-svg"
          viewBox="0 0 220 16"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="drip-blob"
            d="M0,0 H60 C62,6 56,13 49,13 C43,13 40,7 40,3 C40,7 36,10 31,10 C25,10 22,5 24,0 Z"
            fill={styles.fill}
          />
          <path
            className="drip-blob"
            d="M85,0 H130 C132,4 128,9 123,9 C119,9 117,5 118,2 C116,5 111,7 107,5 C104,3.5 104,1 106,0 Z"
            fill={styles.fill}
          />
          <path
            className="drip-blob"
            d="M155,0 H220 V0 C205,0 202,11 194,11 C188,11 186,6 188,2 C185,5 180,6 177,3 C175,1 176,0 178,0 Z"
            fill={styles.fill}
          />
          <rect x="0" y="0" width="220" height="4" fill={styles.fill} />
        </svg>
      </span>
    );

    if (href) {
      return (
        <a href={href} className="inline-block">
          <span className="btn-drip-wrap">
            <span className={cn("btn relative z-10", styles.bg, className)}>
              {children}
              {icon}
            </span>
            <svg
              className="btn-drip-svg"
              viewBox="0 0 220 16"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="drip-blob"
                d="M0,0 H60 C62,6 56,13 49,13 C43,13 40,7 40,3 C40,7 36,10 31,10 C25,10 22,5 24,0 Z"
                fill={styles.fill}
              />
              <path
                className="drip-blob"
                d="M85,0 H130 C132,4 128,9 123,9 C119,9 117,5 118,2 C116,5 111,7 107,5 C104,3.5 104,1 106,0 Z"
                fill={styles.fill}
              />
              <path
                className="drip-blob"
                d="M155,0 H220 V0 C205,0 202,11 194,11 C188,11 186,6 188,2 C185,5 180,6 177,3 C175,1 176,0 178,0 Z"
                fill={styles.fill}
              />
              <rect x="0" y="0" width="220" height="4" fill={styles.fill} />
            </svg>
          </span>
        </a>
      );
    }

    return (
      <button ref={ref} {...props}>
        {content}
      </button>
    );
  }
);

PaintDripButton.displayName = "PaintDripButton";

export default PaintDripButton;
