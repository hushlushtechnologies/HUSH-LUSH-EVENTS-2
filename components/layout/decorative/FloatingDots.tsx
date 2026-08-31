 "use client";

import { motion, useReducedMotion } from "framer-motion";

const dots = [
  { top: "10%", left: "8%", size: "h-3.5 w-3.5", color: "bg-dot-gradient", duration: 5.5, delay: 0 },
  { top: "17%", left: "27%", size: "h-3 w-3", color: "bg-dot-gradient", duration: 4.8, delay: 0.6 },
  { top: "22%", left: "12%", size: "h-4 w-4", color: "bg-dark-ball-gradient", duration: 6.2, delay: 1.2 },
  { top: "58%", left: "6%", size: "h-3 w-3", color: "bg-dot-gradient", duration: 5, delay: 0.3 },
  { top: "6%", left: "88%", size: "h-4 w-4", color: "bg-dark-ball-gradient", duration: 6.8, delay: 0.9 },
  { top: "13%", left: "75%", size: "h-3 w-3", color: "bg-dot-gradient", duration: 4.5, delay: 1.5 },
  { top: "38%", left: "92%", size: "h-4 w-4", color: "bg-dark-ball-gradient", duration: 5.8, delay: 0.4 },
];

export function FloatingDots() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {dots.map((dot, i) => (
        <motion.span
          key={i}
          className={`absolute rounded-full ${dot.size} ${dot.color}`}
          style={{ top: dot.top, left: dot.left }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -14, 0],
                  opacity: [0.6, 1, 0.6],
                }
          }
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}