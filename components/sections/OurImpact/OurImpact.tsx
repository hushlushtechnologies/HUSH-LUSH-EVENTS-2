"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "./StatCard";
import { stats } from "@/data/stats";

export function OurImpact() {
  return (
    <section className="bg-section py-20 md:py-28">
      <Container>
        <SectionHeading
          decoration="/images/decorations/heart-orbit.png"
          headingLines={["Your Moments Inspire Us.", "Your Memories Define Us."]}
          underline
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="  flex flex-wrap items-stretch justify-center gap-4 sm:gap-5"
        >
          {stats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}