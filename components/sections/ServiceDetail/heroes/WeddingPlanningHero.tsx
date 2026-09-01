"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

import { weddingPlanningHero } from "@/data/services/wedding-planning";
import { CircularBadge } from "@/components/AboutHero/CircularBadge";
import { HeroTopFloral } from "./HeroTopFloral";

export function WeddingPlanningHero() {
  const {
    number,
    label,
    headingHighlight,
    headingRest,
    description,
    primaryCta,
    secondaryCta,
    verticalWord,
    heroImage,
  } = weddingPlanningHero;

  return (
    <section className="relative isolate overflow-hidden bg-light py-20 md:py-28 bg-light-card">
      {/* Floral corner decorations — soft watercolor style, top-left and top-right */}

      <HeroTopFloral />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 ">
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
              <div className="relative h-[10px] max-w-[280px] flex-1">
                <Image
                  src="/images/icons/arrow-line.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h1 className="font-display mt-6 text-4xl uppercase leading-[1.2] tracking-wide md:text-5xl">
              <span className="block text-light-brand">{headingHighlight}</span>
              <span className="block  ">{headingRest}</span>
            </h1>

            <p className="font-body mt-6 max-w-md text-base leading-relaxed text-light-secondary">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/plan-your-event" variant="solid">
                <span className="flex items-center gap-2">
                  {primaryCta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 11L11 3M11 3H4M11 3V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </Button>
              <Button href="/our-work" variant="outline">
                {secondaryCta}
              </Button>
            </div>
          </motion.div>

          {/* Right column: vertical outlined text + oval image + circular badge */}
          <div className="relative hidden h-[720px] lg:block">
            {/* Vertical outlined text, positioned left of the oval image */}
        <div className="pointer-events-none absolute  -top-[14%] flex h-full w-16 items-center justify-center">
  <span
    className="font-display w-[720px] -rotate-90 whitespace-nowrap text-center text-6xl font-bold uppercase tracking-widest"
    style={{ WebkitTextStroke: "1px var(--color-light-border)", color: "transparent" }}
    aria-hidden="true"
  >
    {verticalWord}
  </span>
</div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto h-full w-[440px]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[220px] border-2 border-brand-gold">
                <Image
                  src={heroImage}
                  alt="Bride and groom exchanging vows under a floral arch"
                  fill
                  className="object-cover"
                  sizes="440px"
                  priority
                />
              </div>

              <CircularBadge />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
