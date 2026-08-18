 export function ConnectorLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1000 1000"
      fill="none"
      aria-hidden="true"
    >
      {/* NW — your corrected version, unchanged */}
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

      {/* NE — your corrected version, unchanged */}
      <path
        d="M595 420 C 700 260, 790 170, 860 230"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M575 410 C 680 230, 740 130, 800 175"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M555 405 C 640 230, 680 150, 715 195"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* SW — same arch style as NW, mirrored vertically (arching down instead of up) */}
      <path
        d="M420 580 C 300 740, 170 820, 80 800"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M440 590 C 320 770, 220 870, 150 870"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M460 595 C 360 770, 290 850, 245 840"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* SE — same arch style as NE, mirrored vertically */}
      <path
        d="M595 580 C 700 740, 790 830, 860 770"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M575 590 C 680 770, 740 870, 800 825"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M555 595 C 640 770, 680 850, 715 805"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}