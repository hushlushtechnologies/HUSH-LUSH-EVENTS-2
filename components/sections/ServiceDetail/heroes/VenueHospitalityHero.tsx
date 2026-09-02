 "use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { venueHospitalityHero } from "@/data/services/venue-hospitality";

const ORBIT_DURATION_SECONDS = 40;

export function VenueHospitalityHero() {
  const { number, label, headingHighlight, headingRest, description, primaryCta, secondaryCta, images } =
    venueHospitalityHero;
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-light py-14 sm:py-20 md:py-28 bg-light-card">
      <Container className="relative">
        {/* Centered top text block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-body whitespace-nowrap text-xs font-semibold tracking-[0.15em] text-light-brand sm:text-sm sm:tracking-[0.2em]">
              {number} / {label.toUpperCase()}
            </span>
            <div className="relative h-[12px] w-20 sm:h-[15px] sm:w-36">
              <Image src="/images/icons/arrow-line.svg" alt="" fill className="object-contain" />
            </div>
          </div>

          <h1 className="font-display mt-4 text-3xl uppercase leading-[1.2] tracking-wide sm:text-4xl md:text-5xl">
            <span className="block text-light-brand">{headingHighlight}</span>
            <span className="block">{headingRest}</span>
          </h1>

          <p className="font-body mt-4 max-w-lg px-2 text-sm leading-relaxed text-light-secondary sm:mt-5 sm:px-0 sm:text-base">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
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

        {/* Circular photo arrangement — hidden below sm. No
            overflow-hidden here: fix for images getting hard-clipped at
            the composition's edges. */}
        <div className="relative mx-auto mt-10 hidden aspect-square w-full max-w-4xl sm:mt-0 sm:block">
          {/* The whole group (rings + photos) orbits continuously
              around the shared center. Original top/left positions are
              untouched — the group simply rotates as one rigid unit. */}
          <motion.div
            className="absolute inset-0 origin-center scale-[0.65] sm:scale-[0.65] md:scale-[0.85] lg:scale-100"
            initial={{ rotate: 0 }}
            animate={reducedMotion ? { rotate: 0 } : { rotate: 360 }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: ORBIT_DURATION_SECONDS, repeat: Infinity, ease: "linear" }
            }
          >
            {/* Faint concentric rings — orbit along with the photos */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <svg viewBox="0 0 700 700" className="h-full w-full" fill="none" aria-hidden="true">
                <circle cx="350" cy="350" r="340" stroke="var(--color-light-border)" strokeWidth="1" opacity="0.5" />
                <circle cx="350" cy="350" r="260" stroke="var(--color-light-border)" strokeWidth="1" opacity="0.4" />
                <circle cx="350" cy="350" r="180" stroke="var(--color-light-border)" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>

           {images.map((img, index) => (
  <motion.div
    key={img.id}
    className="absolute  "
    style={{ top: img.top, left: img.left, width: img.width, height: img.height }}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
  >
    {/* Counter-rotates against the parent's spin at the
        same speed, opposite direction — this is what keeps
        the PHOTO ITSELF upright and non-rotating, even
        though it's traveling around the orbit. */}
    <motion.div
      className="relative h-full w-full"
      initial={{ rotate: 0 }}
      animate={reducedMotion ? { rotate: 0 } : { rotate: -360 }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { duration: ORBIT_DURATION_SECONDS, repeat: Infinity, ease: "linear" }
      }
    >
      <Image src={img.src} alt="" fill className="object-cover" sizes="170px" />
    </motion.div>
  </motion.div>
))}
          </motion.div>

          {/* Center logo mark — outside the rotating group, stays fixed */}
          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2">
            <Image src="/images/logo-mark.svg" alt="" fill className="object-contain" />
          </div>
        </div>
      </Container>
    </section>
  );
}