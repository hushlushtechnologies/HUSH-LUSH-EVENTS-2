"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { eventPlanningHero } from "@/data/services/event-planning";

export function EventsPlanningHero() {
  const { number, label, headingPrefix, headingRest, headingLine2, description, verticalWord, images } =
    eventPlanningHero;

  return (
    <section className="relative isolate overflow-hidden bg-light py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4">
              <span className="font-body whitespace-nowrap text-sm font-semibold tracking-[0.2em] text-light-brand">
                {number} / {label.toUpperCase()}
              </span>
              <span className="h-px flex-1 bg-light-primary" />
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true" className="shrink-0 text-light-primary">
                <path d="M0 5H10M10 5L6 1M10 5L6 9" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>

            <h1 className="font-display mt-6 text-4xl font-bold uppercase leading-[1.15] tracking-wide md:text-5xl">
              <span className="text-light-brand">{headingPrefix}</span>{" "}
              <span className="text-light-primary">{headingRest}</span>
              <br />
              <span className="text-light-primary">{headingLine2}</span>
            </h1>

            <p className="font-body mt-6 max-w-md text-base leading-relaxed text-light-secondary">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/plan-your-event" variant="solid">
                <span className="flex items-center gap-2">
                  Plan your Events
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </Button>
              <Button href="/our-work" variant="outline">
                Explore our Work
              </Button>
            </div>
          </motion.div>

          {/* Right column: rotated masonry grid + vertical outlined wordmark */}
          <div className="relative hidden h-[640px] lg:block">
            {/* Vertical outlined text, positioned to the left of the grid */}
            <span
              className="font-display pointer-events-none absolute left-0 top-1/2 origin-left -translate-y-1/2 -rotate-90 whitespace-nowrap text-6xl font-bold uppercase tracking-widest"
              style={{
                WebkitTextStroke: "1px var(--color-light-border)",
                color: "transparent",
              }}
              aria-hidden="true"
            >
              {verticalWord}
            </span>

            {/* Rotated masonry grid */}
            <motion.div
              initial={{ opacity: 0, rotate: 8, scale: 0.95 }}
              animate={{ opacity: 1, rotate: -12, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-16 top-0 h-[780px] w-[520px] origin-center"
            >
              <div className="grid grid-cols-3 gap-4">
                {images.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-square w-full overflow-hidden rounded-xl shadow-lg"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="180px"
                      priority={i < 3}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}