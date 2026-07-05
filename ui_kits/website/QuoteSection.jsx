// Eco Pacific Painting — Quote form (design-system Card variant=glass, Input, Button)
function QuoteSection() {
  const { Card, SectionHeading, Input, Button } = window.EcoPacificPaintingDesignSystem_026966;
  const { useState } = React;
  const [status, setStatus] = useState("idle");

  if (status === "success") {
    return (
      <section id="quote" style={{ padding: "5rem 0", background: "linear-gradient(to bottom, rgba(230,244,255,0.5), #fff)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 2rem" }}>
          <Card variant="glass" style={{ textAlign: "center", padding: "3.5rem" }}>
            <div style={{ color: "var(--primary-500)" }}><CheckCircleIcon /></div>
            <h3 style={{ marginTop: "1.25rem", fontSize: "1.25rem", fontWeight: 600, color: "var(--navy-900)" }}>Thank you for contacting Eco Pacific Painting</h3>
            <p style={{ marginTop: "0.5rem", color: "var(--navy-500)", maxWidth: 420, marginLeft: "auto", marginRight: "auto" }}>
              Your quote request has been received. Our team will review your information and get back to you as soon as possible.
            </p>
            <div style={{ marginTop: "1.5rem" }}><Button variant="outline-navy" onClick={() => setStatus("idle")}>Submit Another Request</Button></div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" style={{ padding: "5rem 0", background: "linear-gradient(to bottom, rgba(230,244,255,0.5), #fff)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeading eyebrow="Get A Free Quote" title="Request Your Free, No-Obligation Quote" subtitle="Tell us about your project and our team will get back to you within 24 hours." />
        <div style={{ maxWidth: 720, margin: "3rem auto 0" }}>
          <Card variant="glass" padding="2.5rem">
            <form onSubmit={(e) => { e.preventDefault(); setStatus("success"); }} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <Input id="fullName" label="Full Name" required placeholder="Jane Doe" />
                <Input id="phone" type="tel" label="Phone Number" required placeholder="(604) 555-0100" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <Input id="email" type="email" label="Email Address" required placeholder="jane@email.com" />
                <Input id="address" label="Property Address" required placeholder="123 Main St, Surrey" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem" }}>
                <Input as="select" label="Property Type" required options={["Residential", "Commercial"]} />
                <Input as="select" label="Service Required" required options={["Residential Painting", "Commercial Painting", "Cabinet Painting", "Deck & Fence Staining"]} />
                <Input as="select" label="Project Size" required options={["Small", "Medium", "Large", "Not Sure"]} />
              </div>
              <Input as="textarea" label="Additional Notes" rows={4} placeholder="Tell us about your project…" />
              <div>
                <Button variant="primary" type="submit">Request My Free Quote</Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
function CheckCircleIcon() { return <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M8 12.5l2.5 2.5L16 9" /></svg>; }

window.QuoteSection = QuoteSection;
