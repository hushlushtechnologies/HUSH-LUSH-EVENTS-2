"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SESSION_KEY = "hushlush-preloaded";
// Minimum time the preloader stays visible, so it never feels like a
// flash even on a fast connection — the animation is the point.
const MIN_DISPLAY_MS = 2200;

export function Preloader() {
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    // Only plays once per browser session — internal client-side
    // navigation in Next.js never remounts the root layout anyway, but
    // this also skips it on a hard refresh within the same session, so
    // it doesn't feel repetitive on every reload while browsing.
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (alreadyShown) {
      setHasChecked(true);
      return;
    }

    setIsVisible(true);
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem(SESSION_KEY, "true");
    }, reducedMotion ? 400 : MIN_DISPLAY_MS);

    setHasChecked(true);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [reducedMotion]);

  // Avoids a flash of the preloader on subsequent same-session loads
  // before the sessionStorage check resolves.
  if (!hasChecked) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-bg"
        >
          <motion.div
            initial={{ scale: 1 }}
            exit={{ scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Phoenix mark — same path used across CircularBadge, Hero,
                etc. Stroke draws in first, then the fill fades on top,
                echoing a cinematic "reveal" rather than a static logo pop. */}
            <svg width="72" height="72" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <motion.path
                d="M20 6c3 3 8 4 13 3-3 4-8 6-13 5.5 4 1 8 .5 11-1.5-2 4-6.5 6.5-11.5 6 3 1.5 6.5 1.5 9.5 0-3 4-8 6-13 5-3.5-.7-6-2.7-7.5-5.5C6.5 21 6 18 7 15c.5 3 2 5 4.5 6.3C9 18.5 8 15 9 11.5c1.3 2.7 3.3 4.7 6 5.8C13.5 14 14 10.5 16 8c.3 2.3 1.7 4 4 5-1-2.5-.7-4.7 0-7z"
                stroke="var(--color-dark-secondary)"
                strokeWidth="0.6"
                fill="transparent"
                initial={reducedMotion ? false : { pathLength: 0, opacity: 1 }}
                animate={reducedMotion ? undefined : { pathLength: 1 }}
                transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
              />
              <motion.path
                d="M20 6c3 3 8 4 13 3-3 4-8 6-13 5.5 4 1 8 .5 11-1.5-2 4-6.5 6.5-11.5 6 3 1.5 6.5 1.5 9.5 0-3 4-8 6-13 5-3.5-.7-6-2.7-7.5-5.5C6.5 21 6 18 7 15c.5 3 2 5 4.5 6.3C9 18.5 8 15 9 11.5c1.3 2.7 3.3 4.7 6 5.8C13.5 14 14 10.5 16 8c.3 2.3 1.7 4 4 5-1-2.5-.7-4.7 0-7z"
                fill="var(--color-dark-secondary)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>

            {/* Wordmark — letters stagger up, matching the reveal
                vocabulary used in SectionHeading elsewhere in this build. */}
            <motion.div
              className="font-display mt-5 flex overflow-hidden text-2xl uppercase tracking-[0.35em] text-dark-text-primary"
              initial="hidden"
              animate="visible"
            >
              {"HUSH LUSH".split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  variants={{
                    hidden: { y: "110%" },
                    visible: {
                      y: "0%",
                      transition: {
                        duration: 0.6,
                        delay: reducedMotion ? 0 : 1.1 + i * 0.03,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  {char === " " ? "\u00A0\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>

            {/* Thin gold underline — draws in last, same gradient as
                SectionHeading's underline for visual continuity. */}
            <motion.div
              className="mt-4 h-[2px] w-24 origin-center"
              style={{
                background:
                  "linear-gradient(90deg, #8B7863 0%, #DCBA23 55%, #E0E03D 100%)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: reducedMotion ? 0 : 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}