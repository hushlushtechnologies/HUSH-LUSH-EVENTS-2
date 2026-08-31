"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navEntranceItem, NAV_EASE } from "@/lib/motion/nav";

const sweepVariants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1 },
};

const textVariants = {
  rest: { color: "#945D0E" }, // --color-dark-secondary
  hover: { color: "#FAF5F2" }, // --color-dark-text-primary
};

const scaleVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.015 },
};

export function HeaderCtaButton({ href, label }: { href: string; label: string }) {
  return (
    <motion.div variants={navEntranceItem}>
      <motion.div initial="rest" whileHover="hover" animate="rest" variants={scaleVariants}>
        <Link
          href={href}
          className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-brand-secondary px-6 py-2.5 font-body text-sm font-medium tracking-wide"
        >
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 origin-left rounded-full bg-brand-secondary"
            variants={sweepVariants}
            transition={{ duration: 0.35, ease: NAV_EASE }}
          />
          <motion.span
            className="relative z-10"
            variants={textVariants}
            transition={{ duration: 0.25, ease: NAV_EASE }}
          >
            {label}
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}