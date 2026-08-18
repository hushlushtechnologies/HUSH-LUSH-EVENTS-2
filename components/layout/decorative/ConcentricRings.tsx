export function ConcentricRings() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 m-auto -z-10 aspect-square w-full max-w-[900px] opacity-80"
      viewBox="0 0 1400 1400"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <circle cx="700" cy="700" r="650" stroke="var(--color-dark-border)" strokeWidth="1" />
      <circle cx="700" cy="700" r="500" stroke="var(--color-dark-border)" strokeWidth="1" />
      <circle cx="700" cy="700" r="350" stroke="var(--color-dark-border)" strokeWidth="1" />
    </svg>
  );
}