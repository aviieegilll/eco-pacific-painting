import React from "react";

/**
 * Eco Pacific Painting — Button
 * Recreates the .btn / .btn-primary / .btn-secondary / .btn-light / .btn-outline-navy
 * utility classes from globals.css, plus the signature "paint-drip" liquid SVG
 * fused to the bottom edge (see PaintDripButton.tsx in the source codebase).
 *
 * IMPORTANT: per the source README, the drip effect is reserved for exactly
 * four CTAs sitewide — Get Free Quote, Call Now, Learn More About Us, View All
 * Services. Do not apply `drip` to ordinary buttons.
 */

const VARIANTS = {
  primary: { bg: "var(--primary-500)", bgHover: "var(--primary-600)", color: "#fff", border: "none", shadow: "var(--shadow-glow)" },
  secondary: { bg: "var(--navy-700)", bgHover: "var(--navy-800)", color: "#fff", border: "none", shadow: "var(--shadow-soft)" },
  light: { bg: "#fff", bgHover: "var(--primary-50)", color: "var(--primary-600)", border: "1px solid var(--primary-200)", shadow: "var(--shadow-soft)" },
  "outline-navy": { bg: "transparent", bgHover: "var(--navy-50)", color: "var(--navy-800)", border: "1px solid var(--navy-200)", shadow: "none" },
};

const SIZES = {
  md: { padding: "0.875rem 1.75rem", fontSize: "var(--text-sm)" },
  sm: { padding: "0.625rem 1.25rem", fontSize: "var(--text-xs)" },
};

function DripSvg({ fill }) {
  return (
    <svg
      viewBox="0 0 220 16"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ position: "absolute", left: 0, right: 0, bottom: -1, width: "100%", height: 14, pointerEvents: "none", overflow: "visible" }}
    >
      <path d="M0,0 H60 C62,6 56,13 49,13 C43,13 40,7 40,3 C40,7 36,10 31,10 C25,10 22,5 24,0 Z" fill={fill} />
      <path d="M85,0 H130 C132,4 128,9 123,9 C119,9 117,5 118,2 C116,5 111,7 107,5 C104,3.5 104,1 106,0 Z" fill={fill} />
      <path d="M155,0 H220 V0 C205,0 202,11 194,11 C188,11 186,6 188,2 C185,5 180,6 177,3 C175,1 176,0 178,0 Z" fill={fill} />
      <rect x="0" y="0" width="220" height="4" fill={fill} />
    </svg>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  drip = false,
  icon = null,
  iconPosition = "right",
  disabled = false,
  as = "button",
  href,
  onClick,
  style,
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const dripFill = variant === "light" ? "#FFFFFF" : v.bg;

  const [hover, setHover] = React.useState(false);

  const buttonStyle = {
    position: "relative",
    zIndex: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "var(--radius-full)",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-semibold)",
    padding: s.padding,
    fontSize: s.fontSize,
    color: v.color,
    background: hover && !disabled ? v.bgHover : v.bg,
    border: v.border,
    boxShadow: hover && !disabled ? "var(--shadow-lift)" : v.shadow,
    transform: hover && !disabled ? "translateY(-2px)" : "translateY(0)",
    transition: "all 400ms var(--ease-premium)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.7 : 1,
    userSelect: "none",
    ...style,
  };

  const inner = (
    <>
      {icon && iconPosition === "left" ? icon : null}
      {children}
      {icon && iconPosition === "right" ? icon : null}
    </>
  );

  const Tag = href ? "a" : "button";

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <Tag
        href={href}
        onClick={onClick}
        disabled={Tag === "button" ? disabled : undefined}
        style={buttonStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {inner}
      </Tag>
      {drip && <DripSvg fill={dripFill} />}
    </span>
  );
}
