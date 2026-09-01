"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface FeatureGridItem {
  id: string;
  image: string;
  title?: string;
  description?: string;
  colStart: number;
  colSpan: number;
  rowStart: number;
  rowSpan: number;
  aspect?: string;
}

interface ServiceFeaturesProps {
  headingLines: string[];
  items: FeatureGridItem[];
  footerLabel?: string;
}

function FeatureCard({
  item,
  index,
}: {
  item: FeatureGridItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col"
      style={{
        // This inline placement has NO responsive breakpoints — it
        // applies at every screen width. It only actually takes effect
        // when the parent is display:grid (from sm+ below); on mobile,
        // the parent is display:flex, so grid-column/grid-row are
        // simply ignored by the browser and this card just stacks
        // normally in DOM order instead.
        gridColumn: `${item.colStart} / span ${item.colSpan}`,
        gridRow: `${item.rowStart} / span ${item.rowSpan}`,
      }}
    >
      <div
        className={`relative w-full overflow-hidden rounded-2xl ${
          item.rowSpan > 1
            ? "aspect-[3/4] sm:aspect-auto sm:h-full"
            : (item.aspect ?? "aspect-square")
        }`}
      >
        <Image
          src={item.image}
          alt={item.title ?? ""}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
        />
      </div>

      {item.title && (
        <div className="mt-4">
          <p className="font-display text-xl text-light-brand">{item.title}</p>
          {item.description && (
            <p className="font-body mt-1 text-sm leading-relaxed text-light-secondary">
              {item.description}
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
}

export function ServiceFeatures({
  headingLines,
  items,
  footerLabel,
}: ServiceFeaturesProps) {
  const leftItems = items.filter((item) => item.colStart <= 2);
  const rightItems = items
    .filter((item) => item.colStart >= 3)
    .map((item) => ({ ...item, colStart: item.colStart - 2 }));

  return (
    <section className="section-light py-20 md:py-28 bg-light-card">
      <Container>
        <SectionHeading
          decoration="/images/decorations/heart-orbit.png"
          headingLines={headingLines}
          underline
        />

        <div className="mt-12 flex flex-col gap-10 sm:mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-6">
          {/* display:flex below sm (NOT grid) — this is what makes the
              cards' inline grid-column/grid-row placement inert on
              mobile, so nothing can overlap. Becomes a real grid at sm+. */}
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
            {leftItems.map((item, index) => (
              <FeatureCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <div className="flex h-full flex-col justify-between gap-10 sm:gap-6">
            <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
              {rightItems.map((item, index) => (
                <FeatureCard
                  key={item.id}
                  item={item}
                  index={leftItems.length + index}
                />
              ))}
            </div>

            {footerLabel && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-4 sm:justify-end"
              >
                <div className="relative h-[16px] w-40 sm:w-60">
                  <Image
                    src="/images/icons/arrow-line.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-body text-sm font-semibold tracking-[0.2em] text-light-brand">
                  {footerLabel.toUpperCase()}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}