// Eco Pacific Painting — Projects gallery with category filter + lightbox
function ProjectsSection() {
  const { SectionHeading, ImagePlaceholder } = window.EcoPacificPaintingDesignSystem_026966;
  const { useState, useMemo } = React;

  const PROJECTS = [
    { id: "p1", title: "Modern Home Exterior", location: "Vancouver, BC", category: "Exterior" },
    { id: "p2", title: "Kitchen Cabinet Refinish", location: "Surrey, BC", category: "Cabinets" },
    { id: "p3", title: "Commercial Office Building", location: "Richmond, BC", category: "Commercial" },
    { id: "p4", title: "Coastal Family Residence", location: "Burnaby, BC", category: "Residential" },
    { id: "p5", title: "Living Room Interior Refresh", location: "Langley, BC", category: "Interior" },
    { id: "p6", title: "Cedar Deck Restoration", location: "Coquitlam, BC", category: "Decks" },
  ];
  const CATEGORIES = ["All", "Residential", "Commercial", "Interior", "Exterior", "Cabinets", "Decks"];

  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const filtered = useMemo(() => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)), [filter]);

  return (
    <section id="projects" style={{ padding: "5rem 0", background: "var(--navy-900)", color: "#fff" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeading eyebrow="Our Projects" title={<span style={{ color: "#fff" }}>Recent Painting Projects</span>} subtitle="A look at the craftsmanship and transformations we deliver across Metro Vancouver." inverse />
        <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center", gap: "0.625rem", flexWrap: "wrap" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                fontSize: "var(--text-sm)",
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                transition: "all 300ms var(--ease-premium)",
                background: filter === cat ? "var(--primary-500)" : "rgba(255,255,255,0.05)",
                color: filter === cat ? "#fff" : "rgba(255,255,255,0.7)",
                boxShadow: filter === cat ? "var(--shadow-glow)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              style={{ all: "unset", cursor: "pointer", borderRadius: "1rem", overflow: "hidden", position: "relative", display: "block" }}
            >
              <ImagePlaceholder ratio="video" label={p.title} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,30,54,0.85), transparent 60%)", display: "flex", alignItems: "flex-end", padding: "1.25rem" }}>
                <div>
                  <p style={{ margin: 0, color: "#fff", fontWeight: 600 }}>{p.title}</p>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: "var(--text-sm)" }}>{p.location}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(8,30,54,0.95)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: 720, width: "100%" }}>
            <div style={{ borderRadius: "1rem", overflow: "hidden" }}>
              <ImagePlaceholder ratio="video" label={active.title} />
            </div>
            <div style={{ marginTop: "1rem", textAlign: "center" }}>
              <p style={{ margin: 0, color: "#fff", fontWeight: 600, fontSize: "1.125rem" }}>{active.title}</p>
              <p style={{ margin: 0, color: "rgba(255,255,255,0.6)", fontSize: "var(--text-sm)" }}>{active.location}</p>
            </div>
            <button onClick={() => setActive(null)} style={{ position: "absolute", top: "1.5rem", right: "1.5rem", width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", cursor: "pointer" }}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
}

window.ProjectsSection = ProjectsSection;
