 "use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CelebrationCard } from "./CelebrationCard";
import { celebrations } from "@/data/celebrations";

export function WhatWeCelebrate() {
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
          aligns to Container's left padding, no matching right padding */}
      <div className="mt-12 overflow-x-auto pb-2 scrollbar-hide">
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
    </section>
  );
}