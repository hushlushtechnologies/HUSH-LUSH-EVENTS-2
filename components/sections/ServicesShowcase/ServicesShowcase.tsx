 "use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceShowcaseCard } from "./ServiceShowcaseCard";
import { FloralDecorations } from "./FloralDecorations";
import { servicesShowcase } from "@/data/services-showcase";

export function ServicesShowcase() {
  const leftColumn = servicesShowcase.filter((_, index) => index % 2 === 0);
  const rightColumn = servicesShowcase.filter((_, index) => index % 2 === 1);

  return (
    <section className="relative isolate overflow-hidden bg-light-card py-20 md:py-28">
      <FloralDecorations />

      <Container className="relative mt-20">
        <SectionHeading
          decoration="/images/decorations/heart-orbit.png"
          headingLines={["Everything your Event Needs.", "All in One Place"]}
          description="From the first idea to the final detail, our team brings together planning, design, production and experiences to create celebrations that feel completely yours."
          underline
          headingClassName="mt-16"
        />

        <div className="mx-auto mt-16 grid max-w-[700px] grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center gap-4 md:items-stretch md:gap-20">
            {leftColumn.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ServiceShowcaseCard {...item} />
              </motion.div>
            ))}
          </div>

          <div className="mt-0 flex flex-col items-center gap-4 md:mt-32 md:items-stretch md:gap-20">
            {rightColumn.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ServiceShowcaseCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}