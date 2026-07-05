import React from "react";

/**
 * Eco Pacific Painting — Card
 * Recreates .surface-card (solid, hover-lift) and .glass-card (frosted, used
 * for the Quote form panel) from globals.css.
 */
export function Card({ children, variant = "surface", hoverLift = true, style, padding = "2rem" }) {
  const [hover, setHover] = React.useState(false);

  const base = {
    borderRadius: "var(--radius-2xl)",
    padding,
    transition: "all 500ms var(--ease-premium)",
    ...style,
  };

  const variantStyle =
    variant === "glass"
      ? {
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(var(--blur-card))",
          WebkitBackdropFilter: "blur(var(--blur-card))",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow: "var(--shadow-card)",
        }
      : {
          background: "#fff",
          border: "1px solid var(--border-default)",
          boxShadow: hover && hoverLift ? "var(--shadow-lift)" : "var(--shadow-soft)",
          transform: hover && hoverLift ? "translateY(-4px)" : "translateY(0)",
        };

  return (
    <div
      style={{ ...base, ...variantStyle }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </div>
  );
}
