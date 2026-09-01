"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioCard } from "@/components/sections/OurWorkPortfolio/PortfolioCard";
import type { PortfolioItem } from "@/data/portfolio";

interface ServicePortfolioProps {
  headingLines: string[];
  description?: string;
  items: PortfolioItem[];
}

export function ServicePortfolio({ headingLines, description, items }: ServicePortfolioProps) {
  // First 3 items form the large+stacked row, remaining items split into
  // 3-across rows — matches the fixed reference layout for this section.
  const [large, stackedA, stackedB, ...rest] = items;

  const gridRows: PortfolioItem[][] = [];
  for (let i = 0; i < rest.length; i += 3) {
    gridRows.push(rest.slice(i, i + 3));
  }

  const lastRowIndex = gridRows.length - 1;

  return (
    <section className="section-light py-20 md:py-28 bg-light-card">
      <Container>
        <SectionHeading
          decoration="/images/decorations/heart-orbit.png"
          headingLines={headingLines}
          description={description}
        />

        <div className="mt-16 flex flex-col gap-6">
          {/* Row 1: large + stacked pair */}
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2"
            >
              <PortfolioCard {...large} />
            </motion.div>

            <div className="flex h-full flex-col gap-6">
              {[stackedA, stackedB].map((item, i) => (
                <motion.div
                  key={item.id}
                  className="flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <PortfolioCard {...item} span="stacked" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Remaining rows: 3 across. The final row is reserved for
              video reels — the card's aspect ratio is overridden to be
              taller than the standard "third" (4:3) grid rows above it. */}
          {gridRows.map((row, rowIndex) => {
            const isReelRow = rowIndex === lastRowIndex;
            return (
              <div key={rowIndex} className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {row.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                   <PortfolioCard {...item} span="third" className={isReelRow ? "aspect-[3/4]" : undefined} />
                  </motion.div>
                ))}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}