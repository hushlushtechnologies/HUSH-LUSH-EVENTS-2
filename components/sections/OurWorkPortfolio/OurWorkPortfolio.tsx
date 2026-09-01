"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FilterPills } from "./FilterPills";
import { PortfolioCard } from "./PortfolioCard";
import { portfolioIntro, portfolioItems } from "@/data/portfolio";

// Groups items back into their intended rows for layout purposes.
// Filtering can break this pattern (fewer items than a full row expects),
// so the grid falls back to simple wrapping when a row isn't "full."
function chunkIntoRows(items: typeof portfolioItems) {
  const rows: (typeof portfolioItems)[] = [];
  let i = 0;
  while (i < items.length) {
    const span = items[i].span;
    if (span === "large") {
      rows.push(items.slice(i, i + 3));
      i += 3;
    } else if (span === "half") {
      rows.push(items.slice(i, i + 2));
      i += 2;
    } else {
      rows.push(items.slice(i, i + 3));
      i += 3;
    }
  }
  return rows;
}

export function OurWorkPortfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return portfolioItems;
    return portfolioItems.filter((item) => item.categories.includes(activeFilter));
  }, [activeFilter]);

  const rows = useMemo(() => chunkIntoRows(filteredItems), [filteredItems]);

  return (
    <section className="section-light py-20 md:py-28 bg-light-card">
      <Container>
        <SectionHeading
          decoration="/images/decorations/heart-orbit.png"
          headingLines={portfolioIntro.headingLines}
          description={portfolioIntro.description}
        />

        <div className="mt-10">
          <FilterPills active={activeFilter} onChange={setActiveFilter} />
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {rows.map((row, rowIndex) => {
            const firstSpan = row[0]?.span;
           const gridClass =
  firstSpan === "large"
    ? "grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3"
    : firstSpan === "half"
      ? "grid grid-cols-1 gap-6 sm:grid-cols-2"
      : "grid grid-cols-1 gap-6 sm:grid-cols-3";

            return (
              <div key={rowIndex} className={gridClass}>
                {row.map((item, itemIndex) => {
                  const isLargeRow = firstSpan === "large";
                  const wrapperClass =
                    isLargeRow && itemIndex === 0
                      ? "lg:col-span-2"
                      : isLargeRow
                        ? "flex flex-col gap-6"
                        : "";

              if (isLargeRow && itemIndex > 0) {
  if (itemIndex === 2) return null;
  const stackedPair = row.slice(1, 3);
  return (
    <div key={item.id} className="flex h-full flex-col gap-6">
      {stackedPair.map((stackedItem, i) => (
        <motion.div
          key={stackedItem.id}
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <PortfolioCard {...stackedItem} />
        </motion.div>
      ))}
    </div>
  );
}

                  return (
                    <motion.div
                      key={item.id}
                      className={wrapperClass}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <PortfolioCard {...item} />
                    </motion.div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}