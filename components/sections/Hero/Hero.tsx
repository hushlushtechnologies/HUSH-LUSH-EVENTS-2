"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useReducedMotion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { heroSlides } from "@/data/hero";

const AUTOPLAY_DELAY = 5000;

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
          <p className="font-body mb-4 text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.4em] text-light-brand">
            {slide.eyebrow.toUpperCase()}
          </p>

          <h1 className="font-display text-3xl sm:text-5xl leading-[1.25] sm:leading-[1.4] tracking-widest md:text-6xl uppercase">
            {slide.headingLines.map((line, index) => (
              <span
                key={line}
                className={`block ${index === 0 ? "font-medium" : "font-extrabold"}`}
              >
                {line}
              </span>
            ))}
          </h1>

          <div className="my-6 h-0.5 w-1/2 rounded-full bg-light-primary" />

          <p className="font-body mb-8 max-w-xl text-sm sm:text-base font-medium text-light-secondary">
            {slide.description}
          </p>

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