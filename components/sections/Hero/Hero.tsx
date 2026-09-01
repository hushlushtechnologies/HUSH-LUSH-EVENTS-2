 "use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { heroSlides } from "@/data/hero";

const AUTOPLAY_DELAY = 5000;
const EASE = [0.22, 1, 0.36, 1] as const;

const contentContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const contentItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  exit: { opacity: 0, y: -14, transition: { duration: 0.3, ease: EASE } },
};

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const slide = heroSlides[activeIndex];
  const total = heroSlides.length;

  return (
    <section className="relative h-screen h-[100dvh] min-h-[560px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={
          prefersReducedMotion
            ? false
            : { delay: AUTOPLAY_DELAY, disableOnInteraction: false }
        }
        loop
        speed={800}
        grabCursor
        allowTouchMove
        touchRatio={1}
        simulateTouch
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {heroSlides.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="relative h-full w-full">
              <Image
                src={s.image}
                alt={s.headingLines.join(" ")}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/10 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Container className="pointer-events-none absolute inset-0 z-10 flex items-center">
        <div className="max-w-3xl px-1">
          <AnimatePresence mode="wait" initial={!prefersReducedMotion}>
            <motion.div
              key={slide.id}
              variants={prefersReducedMotion ? undefined : contentContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.p
                variants={prefersReducedMotion ? undefined : contentItemVariants}
                className="font-body mb-4 text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.4em] text-light-brand"
              >
                {slide.eyebrow.toUpperCase()}
              </motion.p>

              <h1 className="font-display text-3xl sm:text-5xl leading-[1.25] sm:leading-[1.4] tracking-widest md:text-6xl uppercase">
                {slide.headingLines.map((line, index) => (
                  <motion.span
                    key={line}
                    variants={prefersReducedMotion ? undefined : contentItemVariants}
                    className={`block ${index === 0 ? "font-medium" : "font-extrabold"}`}
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>

              <motion.div
                variants={prefersReducedMotion ? undefined : contentItemVariants}
                className="my-6 h-0.5 w-1/2 origin-left rounded-full bg-light-primary"
              />

              <motion.p
                variants={prefersReducedMotion ? undefined : contentItemVariants}
                className="font-body mb-8 max-w-xl text-sm sm:text-base font-medium text-light-secondary"
              >
                {slide.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="pointer-events-auto mb-12 flex flex-wrap items-center gap-4">
            <Button href="/plan-your-event" variant="solid">
              <span className="flex items-center gap-2">
                Plan your Events
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 11L11 3M11 3H4M11 3V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
            </Button>
            <Button href="/our-work" variant="outline">
              Explore our Work
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-display flex items-baseline gap-1 text-light-brand">
              <span className="text-2xl">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-light-muted">
                / {String(total).padStart(2, "0")}
              </span>
            </span>

            <div className="flex items-center gap-2">
              {heroSlides.map((s, index) => (
                <div
                  key={s.id}
                  className={`overflow-hidden rounded-full bg-light-border transition-all duration-300 ${
                    index === activeIndex ? "h-1 w-16" : "h-1 w-16"
                  }`}
                >
                  {index < activeIndex ? (
                    <div className="h-full w-full bg-light-primary" />
                  ) : index === activeIndex ? (
                    prefersReducedMotion ? (
                      <div className="h-full w-full bg-light-primary" />
                    ) : (
                      <div
                        key={activeIndex}
                        className="h-full origin-left animate-hero-progress bg-light-primary [animation-duration:5000ms]"
                      />
                    )
                  ) : (
                    <div className="h-full w-0 bg-light-primary" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}