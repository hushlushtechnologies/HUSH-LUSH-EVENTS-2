"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CelebrationCard } from "./CelebrationCard";
import { celebrations } from "@/data/celebrations";

export function WhatWeCelebrate() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < maxScroll - 4);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollState();

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    // Re-check once images/layout settle (card images load async and can
    // change scrollWidth after the initial measurement).
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-card-gradient py-20 md:py-28">
      <Container>
        {/* Two-column header — left heading, right-aligned description.
            Deliberately not using SectionHeading here: no underline,
            no decoration, no centered layout — a different pattern entirely. */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-start">
          <h2 className="font-display text-4xl leading-tight font-bold md:text-5xl">
            <span className="block">What are</span>
            <span className="block">We Celebrating?</span>
          </h2>
          <p className="font-body max-w-md text-sm text-light-secondary md:text-right md:text-base">
            From intimate gatherings to grand occasions, every celebration deserves its own
            character, atmosphere and story.
          </p>
        </div>
      </Container>

      {/* Card row bleeds past the right edge to hint at scrollability —
          aligns to Container's left padding, no matching right padding.
          Arrow buttons sit on top of the row, at its left/right edges,
          and only render when there's actually somewhere to scroll to. */}
      <div className="relative mt-12">
        <div
  ref={scrollerRef}
  className="overflow-x-auto overflow-y-visible pb-2 scrollbar-hide [touch-action:pan-x]"
>
          <div className="flex items-stretch gap-6 pl-6 md:pl-10 lg:pl-[max(2.5rem,calc((100vw-1400px)/2))]">
            {celebrations.map((celebration, index) => (
              <motion.div
                key={celebration.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex"
              >
                <CelebrationCard {...celebration} />
              </motion.div>
            ))}
            {/* Trailing spacer so the last card can peek without hard-clipping at the exact edge */}
            <div className="w-6 shrink-0 md:w-10" aria-hidden="true" />
          </div>
        </div>

        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            aria-label="Scroll left"
            className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-light-primary bg-white/90 text-light-primary shadow-md backdrop-blur-sm transition-colors hover:bg-light-primary hover:text-white sm:flex md:left-4"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 2L4 8L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}

        {canScrollRight && (
          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            aria-label="Scroll right"
            className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-light-primary bg-white/90 text-light-primary shadow-md backdrop-blur-sm transition-colors hover:bg-light-primary hover:text-white sm:flex md:right-4"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 2L12 8L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}