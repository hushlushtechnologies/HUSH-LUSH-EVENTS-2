 "use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function CircularBadge() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>  <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <Image src="/images/decorations/heart-orbit.png" alt="" fill className="object-contain" />
      </div>
    <motion.div
      className="absolute -bottom-8 left-1/2 z-10 h-32 w-32 -translate-x-1/2"
      animate={shouldReduceMotion ? undefined : { rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    >
      {/* Heart-orbit decoration, sitting behind the text ring — same
          motif used as SectionHeading's decoration elsewhere on the
          site, layered here rather than passed as a prop since this
          badge is a self-contained SVG composition, not built on
          SectionHeading. */}
    

      <svg viewBox="0 0 130 130" className="absolute inset-0 h-full w-full">
        <defs>
          <path id="badge-circle-path" d="M 65,65 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
        </defs>
        <circle cx="65" cy="65" r="64" fill="var(--color-dark-background)" />
        <text className="fill-dark-text-primary text-[9px] uppercase tracking-[3px]">
          <textPath href="#badge-circle-path" startOffset="0%">
            Hush Lush Events • Hush Lush Events •
          </textPath>
        </text>
      </svg>

      {/* Counter-rotate the center mark so it stays upright while the ring spins */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2"
        animate={shouldReduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <Image src="/images/logo-mark.svg" alt="" fill className="object-contain" />
      </motion.div>
    </motion.div>
    </div>
  );
}