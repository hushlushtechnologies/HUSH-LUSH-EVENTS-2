 "use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1] as const;

const svgVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.9,
    transition: { duration: 1.1, ease: EASE },
  },
};

export function ConnectorLines() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={svgVariants}
    >
      {/* NW */}
      <motion.path
        variants={pathVariants}
        d="M420 420 C 300 260, 170 180, 80 200"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <motion.path
        variants={pathVariants}
        d="M440 410 C 320 230, 220 130, 150 130"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <motion.path
        variants={pathVariants}
        d="M460 405 C 360 230, 290 150, 245 160"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* NE */}
      <motion.path
        variants={pathVariants}
        d="M595 420 C 715 260, 845 180, 935 200"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <motion.path
        variants={pathVariants}
        d="M575 410 C 695 230, 795 130, 865 130"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <motion.path
        variants={pathVariants}
        d="M555 405 C 655 230, 725 150, 770 160"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* SW */}
      <motion.path
        variants={pathVariants}
        d="M421 564 C 340 610, 220 640, 90 650"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <motion.path
        variants={pathVariants}
        d="M429 579 C 410 650, 320 690, 250 700"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <motion.path
        variants={pathVariants}
        d="M454 580 C 515 360, 420 720, 300 760"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* SE — exact mirror of SW (x' = 1015 - x, y unchanged) */}
      <motion.path
        variants={pathVariants}
        d="M594 564 C 675 610, 795 640, 925 650"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <motion.path
        variants={pathVariants}
        d="M586 579 C 605 650, 695 690, 765 700"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <motion.path
        variants={pathVariants}
        d="M561 580 C 500 360, 595 720, 715 760"
        stroke="var(--color-dark-border)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}