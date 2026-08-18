"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ProcessStep } from "./ProcessStep";
import { processSteps } from "@/data/process";

export function OurProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-light py-20 md:py-28">
      <Container>
        {/* Two-column header — same left-title/right-description pattern
                as WhatWeCelebrate; no underline or decoration here. */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-start">
          <h2 className="font-display text-4xl leading-tight    md:text-5xl">
            <span className="block">We Believe Every</span>
            <span className="block">Moments Matters</span>
          </h2>
          <p className="font-body max-w-md text-sm text-light-secondary md:text-right md:text-base">
            Great events aren&apos;t created by following a formula.
            They&apos;re created by understanding the people, the story, and the
            feeling behind every occasion.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 aspect-[16/5] w-full overflow-hidden rounded-2xl sm:aspect-[28/4]"
        >
          <Image
            src="/images/process/celebration-banner.png"
            alt="Guests celebrating with confetti at an evening event"
            fill
            className="object-cover"
            sizes="(min-width: 1400px) 1400px, 100vw"
          />
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              isActive={index === activeIndex}
              onSelect={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
