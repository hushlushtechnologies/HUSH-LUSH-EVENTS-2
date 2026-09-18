"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FilterPills } from "./FilterPills";
import { PortfolioCard } from "./PortfolioCard";
import { Lightbox } from "./Lightbox";
import { portfolioIntro, portfolioItems, SPAN_PATTERN, type PortfolioItem } from "@/data/portfolio";

function withPositionalSpans(items: PortfolioItem[]): PortfolioItem[] {
  return items.map((item, i) => ({
    ...item,
    span: SPAN_PATTERN[i % SPAN_PATTERN.length],
  }));
}

function chunkIntoRows(items: PortfolioItem[]) {
  const rows: PortfolioItem[][] = [];
  let i = 0;
  while (i < items.length) {
    rows.push(items.slice(i, i + 3));
    i += 3;
  }
  return rows;
}

interface OurWorkPortfolioProps {
  categoryFilter?: string;
}

export function OurWorkPortfolio({ categoryFilter }: OurWorkPortfolioProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const isLockedToCategory = Boolean(categoryFilter);
  const filterId = categoryFilter ?? activeFilter;

  const filteredItems = useMemo(() => {
    if (filterId === "all") {
      return withPositionalSpans(portfolioItems);
    }
    const matched = portfolioItems.filter((item) => item.categories.includes(filterId));
    return withPositionalSpans(matched);
  }, [filterId]);

  const rows = useMemo(() => chunkIntoRows(filteredItems), [filteredItems]);
  const isEmpty = filteredItems.length === 0;

  return (
    <section className="section-light py-20 md:py-28 bg-light-card">
      <Container>
        <SectionHeading
          decoration="/images/decorations/heart-orbit.png"
          headingLines={portfolioIntro.headingLines}
          description={portfolioIntro.description}
        />

        {!isLockedToCategory && (
          <div className="mt-10">
            <FilterPills active={activeFilter} onChange={setActiveFilter} />
          </div>
        )}

        {/* Keyed on filterId — AnimatePresence crossfades the whole grid
            out and the new one in whenever the active filter changes,
            instead of items snapping instantly between states. */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filterId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {isEmpty ? (
              <div className="mt-16 flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-light-border bg-light-surface">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="1.4" className="text-light-secondary" />
                    <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.4" className="text-light-secondary" />
                    <path d="M3 16L8 11L12 14.5L16 10L21 15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-light-secondary" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-lg text-light-primary">Nothing to show here yet</p>
                  <p className="font-body mt-1 text-sm text-light-secondary">
                    We're still adding projects to this category — check back soon.
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-10 flex flex-col gap-6">
                {rows.map((row, rowIndex) => {
                  const firstSpan = row[0]?.span;
                  const gridClass =
                    firstSpan === "large"
                      ? "grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3"
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
                                  initial={{ opacity: 0, y: 16 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.4, delay: 0.05 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                                >
                                  <PortfolioCard {...stackedItem} onClick={() => setSelectedItem(stackedItem)} />
                                </motion.div>
                              ))}
                            </div>
                          );
                        }

                        return (
                          <motion.div
                            key={item.id}
                            className={wrapperClass}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.05 + itemIndex * 0.06, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <PortfolioCard {...item} onClick={() => setSelectedItem(item)} />
                          </motion.div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>

      <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}