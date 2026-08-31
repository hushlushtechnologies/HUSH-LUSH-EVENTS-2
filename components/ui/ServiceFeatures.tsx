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

export function ServiceFeatures({ headingLines, items, footerLabel }: ServiceFeaturesProps) {
  return (
    <section className="section-light py-20 md:py-28">
      <Container>
        <SectionHeading
          decoration="/images/decorations/heart-orbit.png"
          headingLines={headingLines}
          underline
        />

        <div
          className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
          style={{ gridAutoRows: "minmax(0, 1fr)" }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
              style={{
                gridColumn: `${item.colStart} / span ${item.colSpan}`,
                gridRow: `${item.rowStart} / span ${item.rowSpan}`,
              }}
            >
<div
  className={`relative w-full overflow-hidden rounded-2xl ${
    item.rowSpan > 1 ? "h-full" : "aspect-square"
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
          ))}

          {footerLabel && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="col-span-2 mt-4 flex items-center justify-end gap-4 self-end md:col-start-3 md:col-span-2 md:row-start-3 md:mt-0"
            >
              <span className="h-px w-32 bg-light-primary" />
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true" className="text-light-primary">
                <path d="M0 5H10M10 5L6 1M10 5L6 9" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span className="font-body text-sm font-semibold tracking-[0.2em] text-light-brand">
                {footerLabel.toUpperCase()}
              </span>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}