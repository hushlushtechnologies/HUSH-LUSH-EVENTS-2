// src/components/sections/PlanYourEvent/CinematicBackdrop.tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Particle {
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
}

// Fixed positions, not Math.random() — a randomly-generated array would
// differ between server and client render, causing a hydration mismatch.
// Scattered by hand to look irregular; upper 45% of the section only,
// matching the reference (dust concentrated near the ghost typography,
// not spread evenly across the whole hero).
const particles: Particle[] = [
  { top: "8%", left: "12%", size: 2, duration: 3.2, delay: 0 },
  { top: "14%", left: "22%", size: 3, duration: 2.6, delay: 0.4 },
  { top: "5%", left: "34%", size: 2, duration: 3.8, delay: 1.1 },
  { top: "20%", left: "45%", size: 2, duration: 2.9, delay: 0.2 },
  { top: "10%", left: "58%", size: 3, duration: 3.4, delay: 1.6 },
  { top: "26%", left: "66%", size: 2, duration: 2.7, delay: 0.8 },
  { top: "6%", left: "74%", size: 2, duration: 3.1, delay: 1.9 },
  { top: "16%", left: "83%", size: 3, duration: 2.5, delay: 0.6 },
  { top: "30%", left: "18%", size: 2, duration: 3.6, delay: 1.3 },
  { top: "34%", left: "52%", size: 2, duration: 2.8, delay: 2.1 },
  { top: "22%", left: "90%", size: 2, duration: 3.3, delay: 0.9 },
  { top: "38%", left: "8%", size: 3, duration: 2.9, delay: 1.7 },
  { top: "3%", left: "50%", size: 2, duration: 3.5, delay: 0.3 },
  { top: "42%", left: "70%", size: 2, duration: 3.0, delay: 2.4 },
  { top: "12%", left: "5%", size: 2, duration: 2.6, delay: 1.5 },
  { top: "28%", left: "38%", size: 3, duration: 3.7, delay: 0.5 },
  { top: "18%", left: "94%", size: 2, duration: 2.8, delay: 2.0 },
  { top: "45%", left: "28%", size: 2, duration: 3.2, delay: 1.0 },
];

// Centered as a group around the 50% midline, widened bars. Height
// values below are now relative to the clipping wrapper (see
// LIGHT_BAR_WRAPPER_HEIGHT), not the whole section — each bar's "height"
// is a percentage of "reaches down to the word," not "reaches down the
// whole hero."
 const LIGHT_BAR_WIDTH = "50px";
const LIGHT_BAR_HEIGHT = "80%";
const LIGHT_BAR_GAP = 5; // percentage points between each bar's `left`

const lightBars = Array.from({ length: 9 }, (_, i) => ({
  left: `${26 + i * LIGHT_BAR_GAP}%`,
  width: LIGHT_BAR_WIDTH,
  opacity: 0.1,
  height: LIGHT_BAR_HEIGHT,
}));

// The word sits at top-[3%]; this is roughly how much vertical space its
// glyphs occupy at text-[16vw] leading-none. Bars are clipped to this
// band so they read as light falling onto the word from above, then
// cutting off there — not continuing past it down the rest of the hero.
// This is an estimate, not a measured value — adjust if the bars still
// visibly extend past or stop short of the word once you see it rendered.
const LIGHT_BAR_WRAPPER_HEIGHT = "30%";

export function CinematicBackdrop({ word }: { word: string }) {
  const scope = useRef<HTMLDivElement>(null);
  const particleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      particleRefs.current.forEach((el, i) => {
        if (!el) return;
        const p = particles[i];

        // Twinkle, not float — a subtle opacity/scale pulse per dot,
        // independently timed so they never blink in visible unison.
        gsap.to(el, {
          opacity: 1,
          scale: 1.4,
          duration: p.duration,
          delay: p.delay,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope, dependencies: [reducedMotion] },
  );

  return (
    <div
      ref={scope}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Vignette — darkens the edges, keeps the center content area clean */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Radial atmospheric glow, upper-center — same blur-blob technique
          and gold token used in the Footer's ConcentricRings */}
      <div
        className="absolute left-1/2 top-[10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-[160px]"
        // style={{ background: "var(--color-brand-gold)" }}
      />

      {/* Vertical translucent light columns — clipped to a band that
          reaches down to roughly where the word sits, then cuts off
          (not visible past that point), instead of running the bars
          the full height of the section. z-0 (implicit) keeps this
          layer below the word. */}
      <div
        className="absolute inset-x-0 top-0 overflow-hidden"
        style={{ height: LIGHT_BAR_WRAPPER_HEIGHT }}
      >
        {lightBars.map((bar, i) => (
          <div
            key={i}
            className="absolute top-0 bg-gradient-to-b from-brand-gold to-transparent"
            style={{
              left: bar.left,
              width: bar.width,
              height: bar.height,
              opacity: bar.opacity,
            }}
          />
        ))}
      </div>

      {/* Oversized ghost typography — explicit z-10 so it always sits
          above the light bars regardless of DOM order changes later */}
      <div className="absolute left-0 top-[3%] z-10 w-full select-none overflow-hidden text-center">
        <span
          className="font-display bg-clip-text text-[16vw] font-bold leading-none text-transparent opacity-90"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #3a2f1a 0%, #0a0805 100%)",
          }}
        >
          {word}
        </span>
      </div>

      {/* Floating golden dust particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          ref={(el) => {
            particleRefs.current[i] = el;
          }}
          className="absolute rounded-full bg-brand-gold opacity-40"
          style={{ top: p.top, left: p.left, height: p.size, width: p.size }}
        />
      ))}
    </div>
  );
}
