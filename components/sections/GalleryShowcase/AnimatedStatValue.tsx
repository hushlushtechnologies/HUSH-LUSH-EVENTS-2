"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface AnimatedStatValueProps {
  value: string;
  className?: string;
  /** How long the count-up takes, in ms. */
  duration?: number;
}

// Splits something like "150+", "10K", "98%", "24/7" into a numeric
// core to animate and the surrounding prefix/suffix text to keep static
// — so "150+" counts 0→150 while the "+" stays put the whole time.
function parseStatValue(value: string) {
  const match = value.match(/^(\D*)([\d,.]+)(\D*)$/);
  if (!match) return { prefix: "", numeric: null, suffix: value, decimals: 0 };

  const [, prefix, numericRaw, suffix] = match;
  const numeric = parseFloat(numericRaw.replace(/,/g, ""));
  const decimals = numericRaw.includes(".") ? numericRaw.split(".")[1].length : 0;

  return { prefix, numeric, suffix, decimals };
}

export function AnimatedStatValue({ value, className, duration = 1400 }: AnimatedStatValueProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();
  const { prefix, numeric, suffix, decimals } = parseStatValue(value);
  const [displayValue, setDisplayValue] = useState(numeric === null ? value : "0");

  useEffect(() => {
    if (numeric === null) return;

    if (!isInView) return;

    if (reducedMotion) {
      setDisplayValue(numeric.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }));
      return;
    }

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic — starts fast, settles gently rather than a
      // linear mechanical tick.
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;
      setDisplayValue(current.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, numeric, duration, decimals, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}