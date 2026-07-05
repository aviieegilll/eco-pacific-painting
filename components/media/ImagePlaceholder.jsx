import React from "react";

/**
 * Eco Pacific Painting — ImagePlaceholder
 * Recreates ImagePlaceholder.tsx — the site's real, ship-as-is stand-in for
 * client photography. Every image on the production site is currently one
 * of these (no photography has been supplied yet). Preserves exact aspect
 * ratio so swapping in a real <img> requires no layout changes.
 */
const RATIOS = {
  square: "1 / 1",
  video: "16 / 10",
  portrait: "3 / 4",
  wide: "21 / 9",
};

export function ImagePlaceholder({ label = "Project Photo", ratio = "video", gradient, style }) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        aspectRatio: RATIOS[ratio] || RATIOS.video,
        background: gradient || "linear-gradient(to bottom right, var(--navy-100), var(--color-skyfaint), var(--primary-100))",
        color: "var(--navy-400)",
        ...style,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", opacity: 0.6 }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span style={{ fontSize: "var(--text-xs)", fontWeight: "var(--weight-medium)" }}>{label}</span>
      </div>
    </div>
  );
}
