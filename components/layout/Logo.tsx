// src/components/layout/Logo.tsx
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Hush Lush Events — Home">
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="shrink-0">
        <path
          d="M20 6c3 3 8 4 13 3-3 4-8 6-13 5.5 4 1 8 .5 11-1.5-2 4-6.5 6.5-11.5 6 3 1.5 6.5 1.5 9.5 0-3 4-8 6-13 5-3.5-.7-6-2.7-7.5-5.5C6.5 21 6 18 7 15c.5 3 2 5 4.5 6.3C9 18.5 8 15 9 11.5c1.3 2.7 3.3 4.7 6 5.8C13.5 14 14 10.5 16 8c.3 2.3 1.7 4 4 5-1-2.5-.7-4.7 0-7z"
          fill="var(--color-dark-secondary)"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-wide text-brand-secondary">
          Hush Lush
        </span>
        <span className="mt-1 self-center font-body text-[10px] font-medium uppercase tracking-[0.25em] text-brand-secondary">
          Events
        </span>
      </span>
    </Link>
  );
}