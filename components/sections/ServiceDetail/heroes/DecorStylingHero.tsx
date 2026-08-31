"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroTopFloral } from "./HeroTopFloral";
import { decorStylingHero } from "@/data/services/decor-styling";

export function DecorStylingHero() {
  const {
    number,
    label,
    headingHighlight,
    headingRest,
    description,
    primaryCta,
    secondaryCta,
    verticalWord,
    images,
  } = decorStylingHero;

  return (
    <section className="relative isolate overflow-hidden bg-light py-20 md:py-28">
      <HeroTopFloral />

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

            <h1 className="font-display mt-6 text-4xl uppercase leading-[1.2] tracking-wide md:text-5xl">
              <span className="block text-light-brand">{headingHighlight}</span>
              <span className="block text-light-primary">{headingRest}</span>
            </h1>

            <p className="font-body mt-6 max-w-md text-base leading-relaxed text-light-secondary">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/plan-your-event" variant="solid">
                <span className="flex items-center gap-2">
                  {primaryCta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </Button>
              <Button href="/our-work" variant="outline">
                {secondaryCta}
              </Button>
            </div>
          </motion.div>

          {/* Right column: vertical outlined text + 3-image collage */}
          <div className="relative hidden h-[720px] lg:block">
            <span
              className="font-display pointer-events-none absolute left-0 top-1/2 origin-left -translate-y-1/2 -rotate-90 whitespace-nowrap text-5xl font-bold uppercase tracking-widest"
              style={{ WebkitTextStroke: "1px var(--color-light-border)", color: "transparent" }}
              aria-hidden="true"
            >
              {verticalWord}
            </span>

            {/* Main oval — chandelier/drapery, upper area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-0 h-[520px] w-[360px] -translate-x-1/4 overflow-hidden rounded-[999px] border-2 border-light-primary"
            >
              <Image
                src={images.main}
                alt="Draped chandelier ceremony backdrop"
                fill
                className="object-cover"
                sizes="360px"
                priority
              />
            </motion.div>

            {/* Small oval — tablescape, overlapping top-right of main image */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-16 h-[290px] w-[220px] overflow-hidden rounded-[999px] border-2 border-light-primary shadow-lg"
            >
              <Image
                src={images.small}
                alt="Floral table runner with candles"
                fill
                className="object-cover"
                sizes="220px"
              />
            </motion.div>

            {/* Circle — balloon ceiling, overlapping bottom-left of main image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-8 h-[320px] w-[320px] overflow-hidden rounded-full border-2 border-light-primary shadow-lg"
            >
              <Image
                src={images.circle}
                alt="Pink and gold balloon ceiling installation"
                fill
                className="object-cover"
                sizes="320px"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}