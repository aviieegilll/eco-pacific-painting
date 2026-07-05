// Eco Pacific Painting — Services grid (design-system Card + SectionHeading + Button)
function ServicesSection() {
  const { Card, SectionHeading, Button } = window.EcoPacificPaintingDesignSystem_026966;
  const SERVICES = [
    { icon: <HomeIcon />, title: "Residential Painting", description: "Full-home interior and exterior painting delivered with meticulous prep and a flawless, lasting finish." },
    { icon: <BuildingIcon />, title: "Commercial Painting", description: "Minimal-disruption painting programs for offices, retail and industrial properties, scheduled around your hours." },
    { icon: <RollerIcon />, title: "Interior Painting", description: "Walls, ceilings, trim and feature accents finished with premium, low-VOC coatings for a refined result." },
    { icon: <SunIcon />, title: "Exterior Painting", description: "Weather-resistant systems that protect your property while elevating its curb appeal for years to come." },
    { icon: <ArchiveIcon />, title: "Cabinet Painting", description: "Factory-smooth cabinet refinishing for kitchens and bathrooms — a fraction of the cost of full replacement." },
    { icon: <FenceIcon />, title: "Deck & Fence Staining", description: "Protective staining that guards outdoor wood against Vancouver's climate while enhancing natural grain." },
  ];
  return (
    <section id="services" style={{ padding: "5rem 0", background: "var(--color-mist)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeading eyebrow="Our Services" title="Complete Painting Solutions" subtitle="From single rooms to full commercial properties, our team delivers premium finishes tailored to your space." />
        <div style={{ marginTop: "3.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {SERVICES.map((s) => (
            <Card key={s.title}>
              <div style={{ width: 48, height: 48, borderRadius: "1rem", background: "var(--primary-50)", color: "var(--primary-500)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                {s.icon}
              </div>
              <h3 style={{ margin: 0, fontSize: "var(--text-h3)", fontWeight: 600, color: "var(--navy-900)" }}>{s.title}</h3>
              <p style={{ marginTop: "0.625rem", color: "var(--navy-500)", lineHeight: 1.6 }}>{s.description}</p>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}>
          <Button variant="primary">View All Services</Button>
        </div>
      </div>
    </section>
  );
}
function HomeIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9v11h14V9" /></svg>; }
function BuildingIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" /></svg>; }
function RollerIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="4" width="14" height="7" rx="1" /><path d="M8 11v9M8 20h6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H8" /></svg>; }
function SunIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>; }
function ArchiveIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="4" width="18" height="5" rx="1" /><path d="M5 9v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M10 13h4" /></svg>; }
function FenceIcon() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M4 4v16M9 4v16M14 4v16M19 4v16M2 9h6M2 15h6M7 9h6M7 15h6M12 9h6M12 15h6" /></svg>; }

window.ServicesSection = ServicesSection;
