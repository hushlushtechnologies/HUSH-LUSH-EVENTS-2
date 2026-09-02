 "use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ProcessStepItem } from "@/data/about-process";

interface ProcessStepRowProps {
  step: ProcessStepItem;
  align: "left" | "right";
  isLast: boolean;
  index: number;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProcessStepRow({ step, align, isLast, index }: ProcessStepRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  // Line fill is tied directly to scroll position (not a fixed-duration
  // one-shot animation) — starts growing as the row's top edge nears the
  // bottom of the viewport, finishes as its bottom edge nears the top.
  // Scrolling back up shrinks it again, since it's driven by live scroll
  // progress rather than a triggered-once whileInView animation.
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start 0.85", "end 0.35"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const textAlign = align === "left" ? "text-left items-start" : "text-right items-end";
  const sidePosition = align === "left" ? "-left-8" : "-right-8";
  const stepDelay = index * 0.1;

  return (
    <div ref={rowRef} className={`relative flex flex-col ${textAlign}`}>
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
          style={{ scaleY: lineScale, originY: 0 }}
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