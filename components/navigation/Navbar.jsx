import React from "react";
import { Button } from "../buttons/Button.jsx";

/**
 * Eco Pacific Painting — Navbar
 * Recreates Navbar.tsx: fixed header, transparent-over-hero until scrolled
 * (then a frosted glass-nav), wordmark, link row, phone + drip CTA, and a
 * slide-in mobile drawer.
 */
export function Navbar({ links = [], phone = "+1 (604) 716-9395", scrolled = false }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header
      style={{
        position: "relative",
        width: "100%",
        padding: scrolled ? "0.75rem 2rem" : "1.5rem 2rem",
        background: scrolled ? "rgba(255,255,255,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(var(--blur-nav))" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.4)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-soft)" : "none",
        transition: "all 500ms var(--ease-premium)",
        boxSizing: "border-box",
        fontFamily: "var(--font-sans)",
      }}
    >
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <a href="#home" style={{ display: "flex", flexDirection: "column", lineHeight: 1, textDecoration: "none" }}>
          <span style={{ fontSize: "1.125rem", fontWeight: "var(--weight-extrabold)", color: "var(--navy-900)", letterSpacing: "var(--tracking-tight)" }}>
            ECO PACIFIC
          </span>
          <span style={{ fontSize: "0.6875rem", fontWeight: "var(--weight-medium)", letterSpacing: "var(--tracking-wide)", color: "var(--primary-500)" }}>
            PAINTING
          </span>
        </a>

        <ul style={{ display: "flex", alignItems: "center", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }} className="eco-navbar-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-medium)", color: "var(--navy-700)", textDecoration: "none" }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="eco-navbar-actions">
          <Button variant="outline-navy" size="sm">{phone}</Button>
          <Button variant="primary" size="sm">Book Appointment</Button>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
          className="eco-navbar-toggle"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--navy-800)" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </nav>

      <style>{`
        @media (max-width: 1024px) {
          .eco-navbar-links, .eco-navbar-actions { display: none !important; }
          .eco-navbar-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
