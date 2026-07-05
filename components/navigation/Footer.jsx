import React from "react";

/**
 * Eco Pacific Painting — Footer
 * Recreates Footer.tsx: navy-900 footer with wordmark + blurb + social row,
 * quick links, services list, and contact details, plus a legal bar.
 */
export function Footer({ links = [], services = [], phone, email, address, hours }) {
  const col = { fontWeight: "var(--weight-semibold)", color: "#fff", fontSize: "var(--text-sm)", marginBottom: "1rem" };
  const item = { color: "rgba(255,255,255,0.6)", fontSize: "var(--text-sm)", textDecoration: "none", display: "block", padding: "0.3rem 0" };

  return (
    <footer style={{ background: "var(--navy-900)", color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-sans)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "4rem 2rem", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "2.5rem" }}>
        <div>
          <span style={{ fontSize: "1.25rem", fontWeight: "var(--weight-extrabold)", color: "#fff" }}>ECO PACIFIC</span>
          <span style={{ display: "block", fontSize: "0.6875rem", letterSpacing: "var(--tracking-widest)", color: "var(--primary-400)", fontWeight: "var(--weight-medium)", marginTop: "0.25rem" }}>
            PAINTING
          </span>
          <p style={{ marginTop: "1rem", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", maxWidth: "20rem", color: "rgba(255,255,255,0.6)" }}>
            Bringing colour to life with quality painting you can trust — serving homes and businesses across Metro Vancouver.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
            {["f", "i", "★"].map((glyph, i) => (
              <span key={i} style={{ width: "2.25rem", height: "2.25rem", borderRadius: "var(--radius-full)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem" }}>
                {glyph}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p style={col}>Quick Links</p>
          {links.map((l) => <a key={l.href} href={l.href} style={item}>{l.label}</a>)}
        </div>
        <div>
          <p style={col}>Services</p>
          {services.map((s) => <a key={s} href="#services" style={item}>{s}</a>)}
        </div>
        <div>
          <p style={col}>Contact</p>
          <a href={`tel:${phone}`} style={item}>{phone}</a>
          <a href={`mailto:${email}`} style={item}>{email}</a>
          <span style={item}>{address}</span>
          <span style={item}>{hours}</span>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "1.5rem 2rem", display: "flex", justifyContent: "space-between", maxWidth: "var(--container-max)", margin: "0 auto", fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.5)" }}>
        <span>© 2026 Eco Pacific Painting. All Rights Reserved.</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}
