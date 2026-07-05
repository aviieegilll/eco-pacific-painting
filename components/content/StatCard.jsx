import React from "react";
import { Card } from "../surfaces/Card.jsx";

/**
 * Eco Pacific Painting — StatCard
 * Recreates the StatCard pattern inside Stats.tsx: an icon chip, a big
 * count-up figure with suffix, and a label — used in the 4-up stats strip
 * beneath the hero.
 */
export function StatCard({ icon, value, suffix = "", label }) {
  return (
    <Card padding="2rem" style={{ textAlign: "center" }}>
      <div
        style={{
          width: "3rem",
          height: "3rem",
          margin: "0 auto",
          borderRadius: "var(--radius-xl)",
          background: "var(--primary-50)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          color: "var(--primary-500)",
        }}
      >
        {icon}
      </div>
      <p style={{ fontSize: "2rem", fontWeight: "var(--weight-extrabold)", color: "var(--navy-900)", margin: 0 }}>
        {value}
        {suffix}
      </p>
      <p style={{ marginTop: "0.5rem", fontSize: "var(--text-sm)", color: "var(--navy-500)", fontWeight: "var(--weight-medium)" }}>
        {label}
      </p>
    </Card>
  );
}
