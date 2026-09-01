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
  /** "light" (default): light-card background, orange titles — matches every existing usage. "dark": black background, gold titles, light body text. */
  tone?: "light" | "dark";
}

const TONE_STYLES = {
  light: {
    section: "section-light bg-light-card",
    title: "text-light-brand",
    description: "text-light-secondary",
    footerLabel: "text-light-brand",
    arrowImage: "/images/icons/arrow-line.svg",
  },
  dark: {
    section: "bg-dark",
    // No exact design-system token matches this bright gold — closest
    // existing tokens (text-brand-secondary #945D0E, text-dark-brand
    // #d8630a) both read too brown/orange next to this design's true
    // yellow-gold. Using the literal value directly, same approach
    // taken for CircularBadge/ConcentricRings earlier when no token fit.
    title: "text-[#DCBA23]",
    description: "text-dark-text-secondary",
    footerLabel: "text-[#DCBA23]",
    arrowImage: "/images/icons/arrow-line-yellow.svg",
  },
} as const;

function FeatureCard({
  item,
  index,
  tone,
}: {
  item: FeatureGridItem;
  index: number;
  tone: "light" | "dark";
}) {
  const styles = TONE_STYLES[tone];

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
          <p className={`font-display text-xl ${styles.title}`}>{item.title}</p>
          {item.description && (
            <p className={`font-body mt-1 text-sm leading-relaxed ${styles.description}`}>
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
  tone = "light",
}: ServiceFeaturesProps) {
  const styles = TONE_STYLES[tone];
  const leftItems = items.filter((item) => item.colStart <= 2);
  const rightItems = items
    .filter((item) => item.colStart >= 3)
    .map((item) => ({ ...item, colStart: item.colStart - 2 }));

  return (
    <section className={`py-20 md:py-28 ${styles.section}`}>
      <Container>
        <SectionHeading
          decoration="/images/decorations/heart-orbit.png"
          headingLines={headingLines}
          underline
          tone={tone}
        />

        <div className="mt-12 flex flex-col gap-10 sm:mt-16 lg:grid lg:grid-cols-2 lg:items-start lg:gap-6">
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
            {leftItems.map((item, index) => (
              <FeatureCard key={item.id} item={item} index={index} tone={tone} />
            ))}
          </div>

          <div className="flex h-full flex-col justify-between gap-10 sm:gap-6">
            <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
              {rightItems.map((item, index) => (
                <FeatureCard
                  key={item.id}
                  item={item}
                  index={leftItems.length + index}
                  tone={tone}
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
                    src={styles.arrowImage}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span className={`font-body text-sm font-semibold tracking-[0.2em] ${styles.footerLabel}`}>
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