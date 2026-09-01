"use client";

import { useId } from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type HeadingTone = "light" | "dark";

interface SectionHeadingProps {
  headingLines: string[];
  description?: string;
  decoration?: string;
  align?: "center" | "left";
  underline?: boolean;
  headingClassName?: string;
  className?: string;
  /** "light" (default): dark heading text, light-secondary description — matches every existing usage. "dark": white heading + description, for sections on a dark background. */
  tone?: HeadingTone;
}

const EASE = [0.76, 0, 0.24, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const decorationVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE },
  },
};

const linesVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

// Each line sits inside an overflow-hidden mask; the line itself wipes
// up from fully below the mask into place — a classic cinematic reveal,
// not a fade.
const lineVariants: Variants = {
  hidden: { y: "115%" },
  visible: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

const underlineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.9,
    transition: { duration: 0.9, ease: EASE, delay: 0.2 },
  },
};

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const TONE_STYLES: Record<HeadingTone, { heading: string; description: string }> = {
  light: { heading: "", description: "text-light-secondary" },
  dark: { heading: "text-white", description: "text-white/80" },
};

export function SectionHeading({
  headingLines,
  description,
  decoration,
  align = "center",
  underline = false,
  headingClassName = "",
  className = "",
  tone = "light",
}: SectionHeadingProps) {
  const gradientId = useId();
  const lastIndex = headingLines.length - 1;
  const reducedMotion = useReducedMotion();
  const toneStyles = TONE_STYLES[tone];

  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
      className={`relative isolate flex flex-col ${alignment} ${className}`}
    >
      <div
        className={`relative flex w-full flex-col items-center justify-center ${
          decoration ? "min-h-[180px] sm:min-h-[220px] md:min-h-[260px]" : ""
        }`}
      >
        {decoration && (
          <motion.div
            variants={decorationVariants}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
          >
            <div className="relative h-[180px] w-[165px] sm:h-[220px] sm:w-[205px] md:h-[260px] md:w-[245px]">
              <Image src={decoration} alt="" fill className="object-contain" sizes="260px" />
            </div>
          </motion.div>
        )}

        <motion.h2
          variants={linesVariants}
          className={`font-display relative z-10 text-[32px] font-medium leading-[1.15] sm:text-[38px] md:text-[46px] lg:text-[52px] ${toneStyles.heading} ${headingClassName}`}
        >
          {headingLines.map((line, index) => (
            // Outer span: positioning context for the underline (NOT
            // clipped). Inner span: the actual reveal mask, scoped to
            // just the text so it doesn't clip anything below it.
            <span key={line} className="relative block">
              <span className="block overflow-hidden">
                <motion.span variants={lineVariants} className="block">
                  {line}
                </motion.span>
              </span>

              {underline && index === lastIndex && (
                <svg
                  width="280"
                  height="20"
                  viewBox="0 0 280 20"
                  fill="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-full mt-0.5 w-[75%] max-w-[240px] min-w-[150px]"
                >
                  <motion.path
                    variants={underlineVariants}
                    d="M2 9C75 2 205 2 278 9"
                    stroke={`url(#${gradientId})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id={gradientId}
                      gradientUnits="userSpaceOnUse"
                      x1="2"
                      y1="0"
                      x2="278"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#8B7863" />
                      <stop offset="55%" stopColor="#DCBA23" />
                      <stop offset="100%" stopColor="#E0E03D" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </span>
          ))}
        </motion.h2>

        {description && (
          <motion.p
            variants={descriptionVariants}
            className={`font-body font-medium relative z-10 mt-5 max-w-[500px] text-[13px] leading-relaxed sm:text-sm ${toneStyles.description}`}
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}