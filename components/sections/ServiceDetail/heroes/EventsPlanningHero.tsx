"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { eventPlanningHero } from "@/data/services/event-planning";

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
      ? Math.max(4, Math.ceil(viewportHeight / singleListHeight) + 2)
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
      <div ref={trackRef} className="flex flex-col gap-5">
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

export function EventsPlanningHero() {
  const {
    number,
    label,
    headingPrefix,
    headingRest,
    headingLine2,
    description,
    verticalWord,
    images,
  } = eventPlanningHero;

  const reducedMotion = useReducedMotion();
  const columns = splitIntoColumns(images, 3);

  return (
  <section className="relative isolate overflow-hidden bg-light-card py-32 md:py-44">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4">
              <span className="font-body whitespace-nowrap text-sm font-semibold tracking-[0.2em] text-light-brand">
                {number} / {label.toUpperCase()}
              </span>

              <div className="relative h-[13px] max-w-[220px] flex-1">
                <Image src="/images/icons/arrow-line.svg" alt="" fill className="object-contain" />
              </div>
            </div>

            <h1 className="font-display mt-6 text-4xl font-semibold uppercase leading-[1.15] tracking-wide md:text-5xl">
              <span className="text-light-brand">{headingPrefix}</span>{" "}
              <span className=" ">{headingRest}</span>
              <br />
              <span className=" ">{headingLine2}</span>
            </h1>

            <p className="font-body mt-6 max-w-md text-base leading-relaxed text-light-secondary">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/plan-your-event" variant="solid">
                <span className="flex items-center gap-2">
                  Plan your Events
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </Button>
              <Button href="/our-work" variant="outline">
                Explore our Work
              </Button>
            </div>
          </motion.div>

          {/* No fixed height here at all — same technique as PromoBanner.
              This zero-height box gets centered at the row's vertical
              midpoint by the parent grid's items-center, and the
              collage/vertical-word below self-center against THEIR OWN
              height via top-1/2 -translate-y-1/2, not against this
              parent. No need to hand-calculate a container tall enough
              to fit the rotated bounding box. */}
          <div className="relative hidden lg:block">
            <div className="pointer-events-none absolute -left-4 top-1/2 flex h-[920px] w-16 -translate-y-1/2 items-center justify-center">
              <span
                className="font-display w-[920px] -rotate-90 whitespace-nowrap text-center text-6xl font-bold uppercase tracking-widest opacity-90"
                style={{ WebkitTextStroke: "1.5px var(--color-light-border)", color: "transparent" }}
                aria-hidden="true"
              >
                {verticalWord}
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, rotate: -16, scale: 0.95 }}
              animate={{ opacity: 1, rotate: 15, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[24%] top-1/2 flex h-[920px] w-[720px] -translate-y-1/2 origin-center items-stretch gap-5"
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