 "use client";

import { motion } from "framer-motion";
import type { ProcessStepItem } from "@/data/about-process";

interface ProcessStepRowProps {
  step: ProcessStepItem;
  align: "left" | "right";
  isLast: boolean;
  index: number;
}

export function ProcessStepRow({ step, align, isLast, index }: ProcessStepRowProps) {
  const textAlign = align === "left" ? "text-left items-start" : "text-right items-end";
  const sidePosition = align === "left" ? "-left-8" : "-right-8";

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
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="h-3 w-3 shrink-0 rounded-full bg-dot-gradient"
        />
        <span
          className={`my-1 w-1 rounded-full bg-brand-gold/60 ${isLast ? "h-48" : "flex-1"}`}
        />
      </div>

      <h3 className="font-display text-2xl text-dark-text-primary">{step.title}</h3>
      <p className="font-body mt-2 max-w-xs text-sm leading-relaxed text-dark-text-secondary">
        {step.description}
      </p>
    </div>
  );
}