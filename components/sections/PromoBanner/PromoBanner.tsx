 "use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  defaultPromoBanner,
  type PromoBannerContent,
} from "@/data/promo-banner";

interface PromoBannerProps extends Partial<PromoBannerContent> {}

// Scattered accent dots, now spread across the FULL banner card as a
// background layer (see -z-10 on the wrapper below) instead of being
// confined to the right-side collage. Positions redistributed across
// the entire 0-100% card area rather than the narrower collage region
// they were originally tuned for.
const dots = [
  { top: "10%", left: "8%", size: 10, color: "var(--color-dark-secondary)" },
  { top: "18%", left: "28%", size: 9, color: "#B5657A" },
  { top: "8%", left: "48%", size: 11, color: "var(--color-dark-secondary)" },
  { top: "14%", left: "68%", size: 10, color: "#B5657A" },
  { top: "6%", left: "90%", size: 13, color: "var(--color-dark-secondary)" },
  { top: "48%", left: "16%", size: 9, color: "#B5657A" },
  { top: "55%", left: "40%", size: 12, color: "var(--color-dark-secondary)" },
  { top: "60%", left: "60%", size: 10, color: "#B5657A" },
  { top: "50%", left: "82%", size: 11, color: "var(--color-dark-secondary)" },
  { top: "85%", left: "22%", size: 9, color: "#B5657A" },
  { top: "88%", left: "50%", size: 13, color: "var(--color-dark-secondary)" },
  { top: "80%", left: "75%", size: 10, color: "#B5657A" },
];

function splitIntoColumns<T>(items: T[], columnCount: number): T[][] {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  items.forEach((item, i) => columns[i % columnCount].push(item));
  return columns;
}

// direction: 1 = down (new images enter above, exit below)
//           -1 = up (new images enter below, exit above)
const columnConfig = [
  { direction: 1 as const, speedPxPerSec: 16, aspectRatio: "1 / 1.1" },
  { direction: -1 as const, speedPxPerSec: 20, aspectRatio: "1 / 1.4" },
  { direction: 1 as const, speedPxPerSec: 14, aspectRatio: "1 / 1.1" },
];

interface RollingColumnProps {
  images: string[];
  colIndex: number;
  reducedMotion: boolean;
}

function RollingColumn({ images, colIndex, reducedMotion }: RollingColumnProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [singleListHeight, setSingleListHeight] = useState<number | null>(null);
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);
  const { aspectRatio } = columnConfig[colIndex];

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

      const { direction, speedPxPerSec } = columnConfig[colIndex];
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
    <div
      key={key}
      className="relative w-full overflow-hidden rounded-2xl shadow-lg"
      style={{ aspectRatio }}
    >
      <Image src={src} alt="" fill className="object-cover" sizes="160px" />
    </div>
  );

  if (reducedMotion) {
    return (
      <div className="flex h-full min-h-0 flex-col gap-4 overflow-hidden">
        {images.map((src, i) => renderCard(src, `${src}-${i}`))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-full min-h-0 overflow-hidden">
      <div ref={trackRef} className="flex flex-col gap-4" style={{ minHeight: "100%" }}>
        {Array.from({ length: repeatCount }).flatMap((_, setIndex) =>
          images.map((src, i) => renderCard(src, `${src}-set${setIndex}-${i}`))
        )}
      </div>

      <div
        ref={measureRef}
        className="pointer-events-none absolute left-0 top-0 -z-10 flex w-full flex-col gap-4 opacity-0"
      >
        {images.map((src, i) => renderCard(src, `measure-${src}-${i}`))}
      </div>
    </div>
  );
}

export function PromoBanner(props: PromoBannerProps) {
  const content: PromoBannerContent = { ...defaultPromoBanner, ...props };
  const {
    badgeLabel,
    headingLines,
    description,
    primaryCta,
    secondaryCta,
    images,
  } = content;
  const reducedMotion = Boolean(useReducedMotion());
  const columns = splitIntoColumns(images, 3);

  return (
    <section className="py-12 md:py-16 bg-light-card">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate overflow-hidden rounded-[40px] bg-dark"
          style={{
            backgroundImage:
              "radial-gradient(120% 100% at 15% 100%, rgba(148,93,14,0.35) 0%, rgba(8,6,5,0) 60%)",
          }}
        >
          <div className="absolute left-[10%] top-[70%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold opacity-40 blur-[90px]" />
          <div className="absolute left-[50%] top-[10%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold opacity-40 blur-[90px]" />

          {/* Dots — now a full-card background layer, behind the badge/
              heading/collage grid (which all sit at z-0/z-10 by default
              or explicitly), not confined to the right-side collage. */}
          {!reducedMotion && (
            <div className="pointer-events-none absolute inset-0 -z-10">
              {dots.map((dot, i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    top: dot.top,
                    left: dot.left,
                    height: dot.size,
                    width: dot.size,
                    background: dot.color,
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 items-center gap-10 px-8 py-12 md:grid-cols-2 md:px-14 md:py-14">
            {/* Left — copy */}
            <div className="relative z-10">
              <span
                className="font-body inline-block rounded-lg border border-brand-gold/40 bg-dark-card/60 px-4 py-2 text-xs font-medium text-brand-gold sm:text-sm"
                style={{
                  boxShadow:
                    "inset 2px 2px 20px 0px rgba(204, 193, 170, 0.5), inset 1px 1px 10px 0px rgba(204, 185, 170, 0.25)",
                }}
              >
                {badgeLabel}
              </span>

              <h2 className="font-display mt-5 text-4xl leading-[1.1] text-dark-text-primary sm:text-5xl">
                <span className="block">{headingLines[0]}</span>
                <span className="relative inline-block">
                  {headingLines[1]}
                  <svg
                    width="280"
                    height="16"
                    viewBox="0 0 280 16"
                    fill="none"
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-full mt-1 w-full max-w-[260px]"
                  >
                    <path
                      d="M2 8C75 2 205 2 278 8"
                      stroke="url(#promo-underline)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="promo-underline"
                        x1="2"
                        y1="0"
                        x2="278"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#945D0E" />
                        <stop offset="55%" stopColor="#DCBA23" />
                        <stop offset="100%" stopColor="#E0E03D" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>

              <p className="font-body mt-6 max-w-md text-sm leading-relaxed text-dark-text-secondary sm:text-base">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href={secondaryCta.href} variant="white">
                  {secondaryCta.label}
                </Button>
                <Button
                  href={primaryCta.href}
                  variant="solid"
                  className="!bg-dark-button-gradient !text-dark-bg"
                >
                  {primaryCta.label}
                </Button>
              </div>
            </div>

            {/* Right — tilted, independently-rolling 3-column collage.
                Split into 3 flex columns via splitIntoColumns (round-robin,
                same as the hero collages), each an independent
                RollingColumn instead of a static grid. */}
            <div className="relative z-10 hidden   md:block">
              <motion.div
                initial={{ opacity: 0, rotate: -6, scale: 0.95 }}
                whileInView={{ opacity: 1, rotate: 10, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-6 top-1/2 flex h-[560px] w-[420px] -translate-y-1/2 origin-center gap-4"
              >
                {columns.map((columnImages, colIndex) => (
                  <div key={colIndex} className="h-full flex-1">
                    <RollingColumn images={columnImages} colIndex={colIndex} reducedMotion={reducedMotion} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}