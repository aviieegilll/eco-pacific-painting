import React from "react";

/**
 * Eco Pacific Painting — LoadingScreen
 * Recreates LoadingScreen.tsx: a full-screen white overlay shown for ~2.2s on
 * first load, with the wordmark wiped in via clip-path and a blurred cyan
 * light-sweep bar traveling across it.
 */
export function LoadingScreen({ visible = true }) {
  if (!visible) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ position: "relative", height: "3.5rem", overflow: "hidden" }}>
          <span style={{ fontSize: "3rem", fontWeight: "var(--weight-extrabold)", letterSpacing: "var(--tracking-tight)", color: "var(--navy-900)" }}>
            ECO PACIFIC
          </span>
          <span
            style={{
              position: "absolute",
              top: 0,
              left: "40%",
              height: "100%",
              width: "0.75rem",
              borderRadius: "var(--radius-full)",
              filter: "blur(1px)",
              background: "linear-gradient(to right, var(--primary-300), var(--primary-500), var(--primary-300))",
              display: "none",
            }}
          />
        </div>
        <span style={{ marginTop: "0.5rem", fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wide)", fontWeight: "var(--weight-medium)", color: "var(--primary-500)" }}>
          PAINTING
        </span>
      </div>
    </div>
  );
}
