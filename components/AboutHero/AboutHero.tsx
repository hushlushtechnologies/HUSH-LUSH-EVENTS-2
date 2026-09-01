"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CircularBadge } from "./CircularBadge";
import { GalleryThumb } from "./GalleryThumb";
import { aboutHeroContent } from "@/data/about-hero";

export function AboutHero() {
  const {
    headingLines,
    description,
    heroImage,
    galleryLabel,
    galleryDescription,
    galleryVideos,
    testimonial,
  } = aboutHeroContent;

  return (
    <section className="section bg-light-card  overflow-hidden py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-14 w-14">
              <Image
                src="/images/logo-mark.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex max-w-[280px] items-center">
              <Image
                src="/images/icons/arrow-line.svg"
                alt=""
                width={280}
                height={10}
                className="h-auto w-full"
              />
            </div>

            <h1 className="font-display mt-6 text-5xl leading-[1.1]   md:text-6xl">
              {headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="font-body mt-6 max-w-md text-base text-light-secondary">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
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
              <Button href="/services" variant="outline">
                Explore Our Service
              </Button>
            </div>
          </motion.div>

          {/* Center image */}
         
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative isolate mx-auto h-[560px] w-[340px]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[90%] z-10 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src="/images/decorations/heart-orbit.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="relative h-full w-full overflow-hidden rounded-[170px] border-2 border-light-primary">
              <Image
                src={heroImage}
                alt="Wedding fountain decorated with florals"
                fill
                className="object-cover"
                sizes="340px"
              />
            </div>

            <CircularBadge />
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-end text-right pt-28  "
          >
            <p className="font-display text-2xl text-light-brand">
              {galleryLabel}
            </p>
            <p className="font-body mt-2 max-w-xs text-sm text-light-secondary">
              {galleryDescription}
            </p>

            <div className="mt-6 flex gap-3">
              {galleryVideos.map((video) => (
                <div key={video.id} className="w-[80px]">
                  <GalleryThumb {...video} />
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="font-display text-base ">
                {testimonial.prefix}{" "}
                <span className="text-light-brand">
                  {testimonial.highlight}
                </span>{" "}
                {testimonial.suffix} 💖
              </p>
              <div className="mt-3 flex items-center justify-end gap-2">
                <div className="relative h-6 w-16">
                  <Image
                    src={testimonial.avatarsImage}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-body text-sm text-light-muted">
                  {testimonial.reviewLabel}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
