// Eco Pacific Painting — Contact section (design-system Card + SectionHeading)
function ContactSection() {
  const { Card, SectionHeading } = window.EcoPacificPaintingDesignSystem_026966;
  const CARDS = [
    { icon: <PhoneIcon2 />, label: "Phone", value: "+1 (604) 716-9395" },
    { icon: <MailIcon />, label: "Email", value: "ecopacificpainting04@gmail.com" },
    { icon: <PinIcon />, label: "Address", value: "10670 132A Street, British Columbia" },
    { icon: <ClockIcon2 />, label: "Business Hours", value: "Monday – Saturday · 7:00 AM – 7:00 PM" },
  ];
  return (
    <section id="contact" style={{ padding: "5rem 0", background: "var(--color-mist)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeading eyebrow="Contact Us" title="Let's Start Your Project" />
        <div style={{ marginTop: "3.5rem", display: "grid", gridTemplateColumns: "2fr 3fr", gap: "2.5rem" }}>
          <div style={{ display: "grid", gap: "1rem" }}>
            {CARDS.map((c) => (
              <Card key={c.label} hoverLift={false} padding="1.5rem" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: "1rem", background: "var(--primary-50)", color: "var(--primary-500)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "var(--text-xs)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.03em", color: "var(--navy-400)" }}>{c.label}</p>
                  <p style={{ margin: "0.25rem 0 0", fontWeight: 600, color: "var(--navy-900)", fontSize: "var(--text-sm)" }}>{c.value}</p>
                </div>
              </Card>
            ))}
          </div>
          <div style={{ borderRadius: "1.5rem", overflow: "hidden", boxShadow: "var(--shadow-card)", minHeight: 320, background: "linear-gradient(135deg, var(--navy-100), var(--color-skyfaint))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--navy-400)", fontSize: "var(--text-sm)", fontWeight: 500 }}>
            Map embed — service area
          </div>
        </div>
      </div>
    </section>
  );
}
function PhoneIcon2() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>; }
function MailIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>; }
function PinIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>; }
function ClockIcon2() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>; }

window.ContactSection = ContactSection;
