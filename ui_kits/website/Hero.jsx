// Eco Pacific Painting — Hero section (ui kit composition)
// Uses design-system Button + ImagePlaceholder. Copy for hero matches src/components/sections/Hero.tsx.
function Hero() {
  const { Button, ImagePlaceholder } = window.EcoPacificPaintingDesignSystem_026966;
  const badges = [
    "Licensed & Insured",
    "Free Estimates",
    "Residential & Commercial",
    "Satisfaction Guaranteed",
  ];

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "9rem",
        paddingBottom: "5rem",
        overflow: "hidden",
        background: "linear-gradient(to bottom, rgba(230,244,255,0.6), #fff 60%)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10rem",
          right: "-10rem",
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: "rgba(214,233,255,0.5)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3.5rem",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary-500)", marginBottom: "1.25rem" }}>
            Bringing Colour to Life
          </p>
          <h1 style={{ fontSize: "3.25rem", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--navy-900)", margin: 0 }}>
            Premium Painting. <span style={{ color: "var(--primary-500)" }}>Exceptional Results.</span>
          </h1>
          <p style={{ marginTop: "1.5rem", fontSize: "1.125rem", color: "var(--navy-500)", lineHeight: 1.6, maxWidth: "32rem" }}>
            Transform your home or business with expert residential and commercial painting services. Delivering premium craftsmanship, reliable service and exceptional finishes across the Greater Vancouver area.
          </p>
          <div style={{ marginTop: "2.25rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button variant="primary" icon={<ArrowIcon />}>Get Free Quote</Button>
            <Button variant="secondary" icon={<PhoneIcon />}>Call Now</Button>
          </div>
          <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
            {badges.map((b) => (
              <div key={b} style={{ display: "flex", flexDirection: "column", gap: "0.5rem", borderRadius: "1.5rem", border: "1px solid var(--border-default)", background: "rgba(255,255,255,0.7)", padding: "1rem" }}>
                <CheckShieldIcon />
                <span style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: "var(--navy-700)", lineHeight: 1.3 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }} className="eco-hero-image-col">
          <div style={{ borderRadius: "2rem", overflow: "hidden", boxShadow: "var(--shadow-lift)" }}>
            <ImagePlaceholder label="Luxury home exterior — freshly painted" ratio="portrait" />
          </div>
          <div style={{ position: "absolute", top: "699px", left: "356px", display: "flex", alignItems: "center", gap: "0.75rem", background: "#fff", boxShadow: "var(--shadow-lift)", border: "1px solid var(--navy-50, #EEF3F8)", borderRadius: "1rem", padding: "1rem 1.25rem" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--primary-50)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CheckShieldIcon small />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--navy-900)" }}>850+ Projects</p>
              <p style={{ margin: 0, fontSize: "var(--text-xs)", color: "var(--navy-400)" }}>Completed with care</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 1025px) {
          .eco-hero-image-col { margin-top: -90px; }
        }
      `}</style>
    </section>
  );
}

function ArrowIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}
function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
}
function CheckShieldIcon({ small }) {
  const s = small ? 18 : 20;
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="var(--primary-500)" strokeWidth="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="M9 12l2 2 4-4" /></svg>;
}

window.Hero = Hero;
