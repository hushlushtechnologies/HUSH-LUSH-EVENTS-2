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
        gridColumn: `${item.colStart} / span ${item.colSpan}`,
        gridRow: `${item.rowStart} / span ${item.rowSpan}`,
      }}
    >
      <div
        className={`relative w-full overflow-hidden rounded-2xl ${
          item.rowSpan > 1 ? "h-full" : (item.aspect ?? "aspect-square")
        }`}
      >
        <Image
          src={item.image}
          alt={item.title ?? ""}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 320px, 45vw"
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

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-6">
            {leftItems.map((item, index) => (
              <FeatureCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <div className="flex h-full flex-col justify-between">
            <div className="grid grid-cols-2 gap-6">
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
                className="flex items-center justify-end gap-4"
              >
                <div className="relative h-[16px] w-60">
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
