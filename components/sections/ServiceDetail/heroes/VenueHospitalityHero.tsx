"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { venueHospitalityHero } from "@/data/services/venue-hospitality";

export function VenueHospitalityHero() {
  const { number, label, headingHighlight, headingRest, description, primaryCta, secondaryCta, images } =
    venueHospitalityHero;

  return (
    <section className="relative isolate overflow-hidden bg-light py-20 md:py-28">
      <Container className="relative">
        {/* Centered top text block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <div className="flex items-center gap-4">
            <span className="font-body whitespace-nowrap text-sm font-semibold tracking-[0.2em] text-light-brand">
              {number} / {label.toUpperCase()}
            </span>
            <span className="h-px w-24 bg-light-primary" />
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true" className="shrink-0 text-light-primary">
              <path d="M0 5H10M10 5L6 1M10 5L6 9" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>

          <h1 className="font-display mt-4 text-4xl uppercase leading-[1.2] tracking-wide md:text-5xl">
            <span className="block text-light-brand">{headingHighlight}</span>
            <span className="block text-light-primary">{headingRest}</span>
          </h1>

          <p className="font-body mt-5 max-w-lg text-base leading-relaxed text-light-secondary">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
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

        {/* Circular photo arrangement, centered below the text */}
        <div className="relative mx-auto mt-16 aspect-square w-full max-w-2xl">
          {/* Faint concentric rings behind the photos */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <svg viewBox="0 0 700 700" className="h-full w-full" fill="none" aria-hidden="true">
              <circle cx="350" cy="350" r="340" stroke="var(--color-light-border)" strokeWidth="1" opacity="0.5" />
              <circle cx="350" cy="350" r="260" stroke="var(--color-light-border)" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>

          {/* Center logo mark */}
          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2">
            <Image src="/images/logo-mark.svg" alt="" fill className="object-contain" />
          </div>

          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="absolute overflow-hidden rounded-xl shadow-lg"
              style={{ top: img.top, left: img.left, width: img.width, height: img.height }}
            >
              <Image src={img.src} alt="" fill className="object-cover" sizes="170px" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}