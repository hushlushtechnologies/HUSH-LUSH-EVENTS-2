"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const ELEVATE_AT = 24;

export function useNavbarScrollState() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled((prev) => {
      const next = y > ELEVATE_AT;
      return prev === next ? prev : next;
    });
  });

  return scrolled;
}