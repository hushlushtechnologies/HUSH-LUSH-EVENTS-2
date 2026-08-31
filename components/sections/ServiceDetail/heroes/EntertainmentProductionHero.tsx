"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { entertainmentProductionHero } from "@/data/services/entertainment-production";

export function EntertainmentProductionHero() {
  const { headingLine1, headingLine2, description, primaryCta, secondaryCta, backgroundImage } =
    entertainmentProductionHero;

  return (
    <section className="relative isolate flex h-screen min-h-[640px] w-full items-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Concert crowd raising hands under stage lighting"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark overlay for text legibility against the busy photo */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display leading-[1.1] text-white">
            <span className="inline-flex items-center gap-4 text-5xl md:text-6xl">
              {headingLine1}
              <span className="relative inline-block h-10 w-10 md:h-14 md:w-14">
                <Image src="/images/logo-mark.svg" alt="" fill className="object-contain" />
              </span>
            </span>
            <span className="block text-6xl md:text-8xl">{headingLine2}</span>
          </h1>

          <p className="font-body mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/plan-your-event" variant="solid" className="!bg-dark-button-gradient !text-dark-bg">
              {primaryCta}
            </Button>
            <Button href="/our-work" variant="light">
              {secondaryCta}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}