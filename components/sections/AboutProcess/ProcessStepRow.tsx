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

  return (
    <div className={`relative flex flex-col ${textAlign}`}>
      {/* Dot + connecting line, positioned on the outer edge of this column */}
      <div className={`absolute top-1 ${align === "left" ? "-left-4" : "-right-4"} flex flex-col items-center`}>
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="h-3 w-3 rounded-full bg-dot-gradient"
        />
        {!isLast && <span className="mt-1 w-px flex-1 bg-dark-border/40" style={{ minHeight: "180px" }} />}
      </div>

      <h3 className="font-display text-2xl text-dark-text-primary">{step.title}</h3>
      <p className="font-body mt-2 max-w-xs text-sm leading-relaxed text-dark-text-secondary">
        {step.description}
      </p>
    </div>
  );
}