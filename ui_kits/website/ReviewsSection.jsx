// Eco Pacific Painting — Client reviews (design-system Card + SectionHeading)
function ReviewsSection() {
  const { Card, SectionHeading } = window.EcoPacificPaintingDesignSystem_026966;
  const REVIEWS = [
    { name: "Amanda R.", location: "Vancouver, BC", rating: 5, quote: "Eco Pacific Painting transformed our home. The team was professional, kept everything spotless, and finished right on schedule." },
    { name: "Jason T.", location: "Langley, BC", rating: 5, quote: "Great experience from the first quote to the final walkthrough. Communication was clear the whole way through." },
    { name: "Priya S.", location: "Burnaby, BC", rating: 5, quote: "Very professional and detail-oriented. Our office looks brand new, with zero disruption to our team." },
  ];
  return (
    <section id="reviews" style={{ padding: "5rem 0", background: "#fff" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeading eyebrow="Client Reviews" title="What Our Clients Say" subtitle="Real feedback from homeowners and businesses across Metro Vancouver." />
        <div style={{ marginTop: "3.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {REVIEWS.map((r) => (
            <Card key={r.name} style={{ display: "flex", flexDirection: "column" }}>
              <QuoteIcon />
              <div style={{ display: "flex", gap: 2, marginTop: "1rem" }}>
                {Array.from({ length: r.rating }).map((_, i) => <StarIcon key={i} />)}
              </div>
              <p style={{ marginTop: "1rem", color: "var(--navy-600, #1B3F66)", lineHeight: 1.6, flex: 1 }}>&ldquo;{r.quote}&rdquo;</p>
              <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--primary-100)", color: "var(--primary-600)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600 }}>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, color: "var(--navy-900)", fontSize: "var(--text-sm)" }}>{r.name}</p>
                  <p style={{ margin: 0, color: "var(--navy-400)", fontSize: "var(--text-xs)" }}>{r.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
function QuoteIcon() { return <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--primary-200)"><path d="M7 10c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6H7v-6Zm9 0c0-3 2-5 5-5v2c-1.7 0-3 1.3-3 3h3v6h-5v-6Z" /></svg>; }
function StarIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.9-6.2 3.9 1.6-7L2 9.2l7.1-.6L12 2Z" /></svg>; }

window.ReviewsSection = ReviewsSection;
