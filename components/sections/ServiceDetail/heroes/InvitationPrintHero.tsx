 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { invitationPrintHero } from "@/data/services/invitation-print";

export function InvitationPrintHero() {
  const { number, label, headingHighlight, headingRest, description, primaryCta, secondaryCta, images } =
    invitationPrintHero;

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
            <div className="relative h-[8px] w-16 sm:h-[10px] sm:w-24">
              <Image src="/images/icons/arrow-line.svg" alt="" fill className="object-contain" />
            </div>
          </div>

          <h1 className="font-display mt-4 text-3xl uppercase leading-[1.2] tracking-wide sm:text-4xl md:text-5xl">
            <span className="block text-light-brand">{headingHighlight}</span>
            <span className="block text-light-primary">{headingRest}</span>
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

        {/* Circular invitation-card arrangement — hidden below sm, same
            reasoning as VenueHospitalityHero: a scaled-down fixed-pixel
            absolute arrangement reads as cluttered on small screens. */}
        <div className="relative mx-auto mt-10 hidden aspect-square w-full max-w-3xl overflow-hidden sm:mt-16 sm:block">
          <div className="absolute inset-0 origin-center scale-[0.65] md:scale-[0.85] lg:scale-100">
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <svg viewBox="0 0 700 700" className="h-full w-full" fill="none" aria-hidden="true">
                <circle cx="350" cy="350" r="340" stroke="var(--color-light-border)" strokeWidth="1" opacity="0.5" />
                <circle cx="350" cy="350" r="260" stroke="var(--color-light-border)" strokeWidth="1" opacity="0.4" />
                <circle cx="350" cy="350" r="180" stroke="var(--color-light-border)" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>

            {/* Center logo mark — full color, no ring wrapper */}
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2">
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
                <Image src={img.src} alt="" fill className="object-cover" sizes="160px" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}