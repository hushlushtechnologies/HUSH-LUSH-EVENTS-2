 "use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface DotConfig {
  top: string;
  left: string;
  size: string;
  color: string;
  /** Base duration for the vertical float cycle. */
  floatDuration: number;
  /** Independent duration for horizontal drift — deliberately not a
      clean multiple of floatDuration, so the two axes drift in and out
      of phase instead of repeating in lockstep. */
  driftDuration: number;
  delay: number;
}

const dots: DotConfig[] = [
  { top: "10%", left: "8%", size: "h-3.5 w-3.5", color: "bg-dot-gradient", floatDuration: 5.5, driftDuration: 7.2, delay: 0 },
  { top: "17%", left: "27%", size: "h-3 w-3", color: "bg-dot-gradient", floatDuration: 4.8, driftDuration: 6.3, delay: 0.6 },
  { top: "22%", left: "12%", size: "h-4 w-4", color: "bg-dark-ball-gradient", floatDuration: 6.2, driftDuration: 8.1, delay: 1.2 },
  { top: "58%", left: "6%", size: "h-3 w-3", color: "bg-dot-gradient", floatDuration: 5, driftDuration: 6.7, delay: 0.3 },
  { top: "6%", left: "88%", size: "h-4 w-4", color: "bg-dark-ball-gradient", floatDuration: 6.8, driftDuration: 5.4, delay: 0.9 },
  { top: "13%", left: "75%", size: "h-3 w-3", color: "bg-dot-gradient", floatDuration: 4.5, driftDuration: 7.9, delay: 1.5 },
  { top: "38%", left: "92%", size: "h-4 w-4", color: "bg-dark-ball-gradient", floatDuration: 5.8, driftDuration: 6.9, delay: 0.4 },
];

export function FloatingDots() {
  const scope = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      dotRefs.current.forEach((el, i) => {
        if (!el) return;
        const config = dots[i];

        // One timeline per dot, three independently-timed tracks layered
        // on it — vertical float, horizontal drift, and an opacity/scale
        // "breathe" — each on its own duration and ease so the combined
        // motion reads as organic rather than a single repeating keyframe.
        const tl = gsap.timeline({
          delay: config.delay,
          repeat: -1,
          defaults: { ease: "sine.inOut" },
        });

        tl.to(
          el,
          { y: -16, duration: config.floatDuration / 2, yoyo: true, repeat: 1 },
          0
        )
          .to(
            el,
            { x: 8, duration: config.driftDuration / 2, yoyo: true, repeat: 1, ease: "sine.inOut" },
            0
          )
          .to(
            el,
            { opacity: 1, scale: 1.15, duration: config.floatDuration / 3, yoyo: true, repeat: 2, ease: "power1.inOut" },
            0
          );
      });
    },
    { scope, dependencies: [reducedMotion] }
  );

  return (
    <div ref={scope} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {dots.map((dot, i) => (
        <span
          key={i}
          ref={(el) => {
            dotRefs.current[i] = el;
          }}
          className={`absolute rounded-full opacity-60 ${dot.size} ${dot.color}`}
          style={{ top: dot.top, left: dot.left }}
        />
      ))}
    </div>
  );
}