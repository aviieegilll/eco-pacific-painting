// Eco Pacific Painting — Stats strip (uses design-system StatCard)
function StatsSection() {
  const { StatCard } = window.EcoPacificPaintingDesignSystem_026966;
  const STATS = [
    { icon: <TrophyIcon />, value: 500, suffix: "+", label: "Projects Completed" },
    { icon: <CalendarIcon />, value: 10, suffix: "+", label: "Years Experience" },
    { icon: <SmileIcon />, value: 100, suffix: "%", label: "Customer Satisfaction" },
    { icon: <ClockIcon />, value: 24, suffix: " Hrs", label: "Quote Response" },
  ];
  return (
    <section style={{ position: "relative", marginTop: "-4rem", zIndex: 10 }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
        {STATS.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
    </section>
  );
}
function TrophyIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z" /><path d="M17 5h3a2 2 0 0 1-2 4M7 5H4a2 2 0 0 0 2 4" /></svg>; }
function CalendarIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>; }
function SmileIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg>; }
function ClockIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>; }

window.StatsSection = StatsSection;
