 "use client";

import { motion } from "framer-motion";
import type { ProcessStepItem } from "@/data/about-process";

interface ProcessStepRowProps {
  step: ProcessStepItem;
  align: "left" | "right";
  isLast: boolean;
  index: number;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProcessStepRow({ step, align, isLast, index }: ProcessStepRowProps) {
  const textAlign = align === "left" ? "text-left items-start" : "text-right items-end";
  const sidePosition = align === "left" ? "-left-8" : "-right-8";
  const stepDelay = index * 0.1;

  return (
    <div className={`relative flex flex-col ${textAlign}`}>
      <div
        className={`absolute top-1 ${sidePosition} flex flex-col items-center ${
          isLast ? "" : "bottom-[-12rem]"
        }`}
      >
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, delay: stepDelay, ease: EASE }}
          className="h-3 w-3 shrink-0 rounded-full bg-dot-gradient"
        />
        <motion.span
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: stepDelay + 0.25, ease: EASE }}
          style={{ originY: 0 }}
          className={`my-1 w-1 rounded-full bg-brand-gold/60 ${isLast ? "h-48" : "flex-1"}`}
        />
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: stepDelay + 0.15, ease: EASE }}
        className="font-display text-2xl text-dark-text-primary"
      >
        {step.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: stepDelay + 0.25, ease: EASE }}
        className="font-body mt-2 max-w-xs text-sm leading-relaxed text-dark-text-secondary"
      >
        {step.description}
      </motion.p>
    </div>
  );
}