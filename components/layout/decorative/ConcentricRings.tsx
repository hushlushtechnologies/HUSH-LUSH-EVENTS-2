 export function ConcentricRings() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Center glow — subtle ambient wash behind the ring's center */}
     <div className="absolute left-1/2 top-[40%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold opacity-40 blur-[90px]" />

      {/* Left glow — warm, sits behind the logo/footer-links column */}
      <div className="absolute bottom-[40%] left-[16%] h-[320px] w-[320px] rounded-full bg-brand-gold opacity-30 blur-[90px]" />

      {/* Right glow — cooler, sits behind the subscribe box */}
      <div
  className="absolute bottom-[25%] right-[10%] h-[380px] w-[380px] rounded-full opacity-60 blur-[140px]"
  style={{ background: "rgba(255, 155, 119, 0.4)" }}
/>

      <svg
        className="absolute inset-0 m-auto aspect-square w-full max-w-[900px] opacity-80"
        viewBox="0 0 1400 1400"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="700" cy="700" r="650" stroke="var(--color-dark-border)" strokeWidth="1" />
        <circle cx="700" cy="700" r="500" stroke="var(--color-dark-border)" strokeWidth="1" />
        <circle cx="700" cy="700" r="350" stroke="var(--color-dark-border)" strokeWidth="1" />
      </svg>
    </div>
  );
}