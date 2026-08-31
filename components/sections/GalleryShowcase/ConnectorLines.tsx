export function ConnectorLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      {/* NW — unchanged */}
      <path
        d="M420 420 C 300 260, 170 180, 80 200"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M440 410 C 320 230, 220 130, 150 130"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M460 405 C 360 230, 290 150, 245 160"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* NE — unchanged */}
      <path
        d="M595 420 C 715 260, 845 180, 935 200"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M575 410 C 695 230, 795 130, 865 130"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M555 405 C 655 230, 725 150, 770 160"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />

  {/* SW */}
<path
  d="M421 564 C 340 610, 220 640, 90 650"
  stroke="var(--color-dark-border)"
  strokeWidth="1"
  strokeLinecap="round"
/>
<path
  d="M429 579 C 410 650, 320 690, 250 700"
  stroke="var(--color-dark-border)"
  strokeWidth="1"
  strokeLinecap="round"
/>
<path
  d="M454 580 C 515 360, 420 720, 300 760"
  stroke="var(--color-dark-border)"
  strokeWidth="1"
  strokeLinecap="round"
/>

{/* SE — exact mirror of SW (x' = 1015 - x, y unchanged) */}
<path
  d="M594 564 C 675 610, 795 640, 925 650"
  stroke="var(--color-dark-border)"
  strokeWidth="1"
  strokeLinecap="round"
/>
<path
  d="M586 579 C 605 650, 695 690, 765 700"
  stroke="var(--color-dark-border)"
  strokeWidth="1"
  strokeLinecap="round"
/>
<path
  d="M561 580 C 500 360, 595 720, 715 760"
  stroke="var(--color-dark-border)"
  strokeWidth="1"
  strokeLinecap="round"
/>
    </svg>
  );
}