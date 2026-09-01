 "use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { corporateEventsHero } from "@/data/services/corporate-events";

function splitIntoColumns<T>(items: T[], columnCount: number): T[][] {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  items.forEach((item, i) => columns[i % columnCount].push(item));
  return columns;
}

const columnOffsets = [
  { marginTop: "0%", translateX: "0px" },
  { marginTop: "0%", translateX: "0px" },
  { marginTop: "0px", translateX: "0px" },
];

// direction: 1 = DOWN (new images enter above, exit below)
//            -1 = UP (new images enter below, exit above)
const columnMotion = [
  { direction: 1 as const, speedPxPerSec: 18 },
  { direction: -1 as const, speedPxPerSec: 22 },
  { direction: 1 as const, speedPxPerSec: 15 },
];

interface MarqueeColumnProps {
  images: string[];
  colIndex: number;
  reducedMotion: boolean;
}

function MarqueeColumn({ images, colIndex, reducedMotion }: MarqueeColumnProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [singleListHeight, setSingleListHeight] = useState<number | null>(null);
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    const measureEl = measureRef.current;
    const containerEl = containerRef.current;
    if (!measureEl || !containerEl) return;

    const measure = () => {
      setSingleListHeight(measureEl.offsetHeight);
      setViewportHeight(containerEl.offsetHeight);
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(measureEl);
    observer.observe(containerEl);
    return () => observer.disconnect();
  }, []);

  const repeatCount =
    singleListHeight && viewportHeight
      ? Math.max(3, Math.ceil((viewportHeight * 3) / singleListHeight))
      : 6;

  useGSAP(
    () => {
      if (reducedMotion || !trackRef.current || !singleListHeight) return;

      const { direction, speedPxPerSec } = columnMotion[colIndex];
      const distance = singleListHeight;
      const wrap = gsap.utils.wrap(-distance, 0);

      let progress = direction === 1 ? -distance : 0;
      gsap.set(trackRef.current, { y: progress });

      const ticker = (_time: number, deltaMs: number) => {
        progress += direction * speedPxPerSec * (deltaMs / 1000);
        gsap.set(trackRef.current, { y: wrap(progress) });
      };

      gsap.ticker.add(ticker);
      return () => {
        gsap.ticker.remove(ticker);
      };
    },
    { dependencies: [reducedMotion, singleListHeight, colIndex] }
  );

  const renderCard = (src: string, key: string) => (
    <div key={key} className="relative aspect-square w-full overflow-hidden rounded-xl shadow-lg">
      <Image src={src} alt="" fill className="object-cover" sizes="240px" />
    </div>
  );

  if (reducedMotion) {
    return (
      <div className="flex h-full min-h-0 flex-col gap-5 overflow-hidden">
        {images.map((src, i) => renderCard(src, `${src}-${i}`))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-full min-h-0 overflow-hidden">
      <div ref={trackRef} className="flex flex-col gap-5" style={{ minHeight: "100%" }}>
        {Array.from({ length: repeatCount }).flatMap((_, setIndex) =>
          images.map((src, i) => renderCard(src, `${src}-set${setIndex}-${i}`))
        )}
      </div>

      <div ref={measureRef} className="pointer-events-none absolute left-0 top-0 -z-10 flex w-full flex-col gap-5 opacity-0">
        {images.map((src, i) => renderCard(src, `measure-${src}-${i}`))}
      </div>
    </div>
  );
}

export function CorporateEventsHero() {
  const { number, label, headingHighlight, headingRest, description, primaryCta, secondaryCta, verticalWord, images } =
    corporateEventsHero;

  const reducedMotion = useReducedMotion();
  const columns = splitIntoColumns(images, 3);

  return (
    <section className="relative isolate overflow-hidden bg-light py-20 md:py-28 bg-light-card">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4">
              <span className="font-body whitespace-nowrap text-sm font-semibold tracking-[0.2em] text-light-brand">
                {number} / {label.toUpperCase()}
              </span>
              <div className="relative h-[10px] max-w-[220px] flex-1">
                <Image src="/images/icons/arrow-line.svg" alt="" fill className="object-contain" />
              </div>
            </div>

            <h1 className="font-display mt-6 text-4xl uppercase leading-[1.15] tracking-wide md:text-5xl">
              <span className="block text-light-brand">{headingHighlight}</span>
              <span className="block text-light-primary">{headingRest}</span>
            </h1>

            <p className="font-body mt-6 max-w-md text-base leading-relaxed text-light-secondary">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/plan-your-event" variant="solid">
                <span className="flex items-center gap-2">
                  {primaryCta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </Button>
              <Button href="/our-work" variant="outline">
                {secondaryCta}
              </Button>
            </div>
          </motion.div>

          {/* Right column: vertical outlined text + staggered marquee collage */}
          <div className="relative hidden h-[640px] lg:block">
            <div className="pointer-events-none absolute -left-4 top-0 flex h-full w-16 items-center justify-center">
              <span
                className="font-display w-[640px] -rotate-90 whitespace-nowrap text-center text-7xl font-bold uppercase tracking-widest opacity-90"
                style={{ WebkitTextStroke: "1.5px var(--color-light-border)", color: "transparent" }}
                aria-hidden="true"
              >
                {verticalWord}
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, rotate: -16, scale: 0.95 }}
              animate={{ opacity: 1, rotate: 20, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[24%] -top-20 flex h-[920px] w-[720px] origin-center items-stretch gap-5"
            >
              {columns.map((columnImages, colIndex) => {
                const offset = columnOffsets[colIndex];
                return (
                  <div
                    key={colIndex}
                    className="relative h-full min-h-0 flex-1"
                    style={{
                      marginTop: offset.marginTop,
                      transform: `translateX(${offset.translateX})`,
                    }}
                  >
                    <MarqueeColumn images={columnImages} colIndex={colIndex} reducedMotion={reducedMotion} />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}