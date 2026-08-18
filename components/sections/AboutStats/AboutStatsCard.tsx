"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { StatCard } from "@/components/sections/OurImpact/StatCard";
import { stats } from "@/data/stats";
import { statsCardContent } from "@/data/about-story";

export function AboutStatsCard() {
  const { headingLine1, headingHighlight, headingTrailing } = statsCardContent;

  return (
    <section className="bg-light-card py-16 ">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[32px] bg-light px-8 py-12 text-center border border-gray-200 "
        >
          <p className="font-display text-2xl   md:text-3xl">
            {headingLine1}
            <br />
            <span className="text-light-brand font-medium">{headingHighlight}</span> {headingTrailing}
          </p>

          <div className="mt-8 flex flex-wrap items-stretch justify-center gap-4 sm:gap-5 ">
            {stats.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}