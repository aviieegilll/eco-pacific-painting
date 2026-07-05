import React from "react";

/**
 * Eco Pacific Painting — SectionHeading
 * Recreates SectionHeading.tsx: an eyebrow label, a display-md title, and an
 * optional subtitle, centered or left-aligned.
 */
export function SectionHeading({ eyebrow, title, subtitle, align = "center", inverse = false, style }) {
  return (
    <div
      style={{
        maxWidth: "42rem",
        margin: align === "center" ? "0 auto" : 0,
        textAlign: align === "center" ? "center" : "left",
        ...style,
      }}
    >
      {eyebrow && (
        <p
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "var(--text-xs)",
            fontWeight: "var(--weight-semibold)",
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-eyebrow)",
            color: inverse ? "var(--primary-400)" : "var(--primary-500)",
            marginBottom: "0.75rem",
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          fontSize: "var(--text-display-md)",
          fontWeight: "var(--weight-bold)",
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-tight)",
          color: inverse ? "#fff" : "var(--navy-900)",
          margin: 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: "1rem",
            fontSize: "var(--text-lg)",
            lineHeight: "var(--leading-relaxed)",
            color: inverse ? "rgba(255,255,255,0.7)" : "var(--navy-500)",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
