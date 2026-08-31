"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ExperienceCard } from "./ExperienceCard";
import { ourWorkHeroContent } from "@/data/our-work-hero";

export function OurWorkHero() {
  const {
    headingLines,
    description,
    backgroundImage,
    dancerImage,
    experienceLabel,
    experienceCards,
  } = ourWorkHeroContent;

  return (
    <section className="relative isolate overflow-hidden">
      {/* Full-bleed abstract background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dancer figure, positioned right side, blending into the background */}
      <div className="pointer-events-none grayscale-50 absolute right-0 top-0 -z-[5] hidden h-full w-[38%] md:block">
        <Image
          src={dancerImage}
          alt=""
          fill
          className="object-contain object-top"
          sizes="38vw"
        />
      </div>

      <Container className="relative pb-0 pt-12 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg"
        >
          <h1 className="font-display text-3xl uppercase leading-[1.3] tracking-wide md:text-5xl">
            {headingLines.map((line, i) => (
              <span
                key={i}
                className={`block ${line.accent ? "text-light-brand" : "text-light- "}`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p className="font-body mt-4 max-w-md text-sm text-light-secondary">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
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

        {/* Logo + "Some Experience" label, sits above the card strip */}
      </Container>

      {/* Experience cards — horizontal strip, bleeding off the right edge */}
      <div className="scrollbar-hide mt-5 overflow-x-auto pb-4">
        <div className="flex items-center gap-8 pl-6 md:pl-10 lg:pl-[max(2.5rem,calc((100vw-1400px)/2))]">
          {/* Logo + line + label — now inline, vertically centered with the cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex shrink-0 flex-col items-center gap-2"
          >
            <div className="relative h-12 w-12">
              <Image
                src="/images/logo-mark.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <Image
              src="/images/icons/arrow-line.svg"
              alt=""
              width={220}
              height={10}
              className="h-auto w-[220px]"
            />

            <p className="font-display text-center text-lg text-light-primary">
              Some Experience
            </p>
          </motion.div>

          {/* Card strip */}
          {experienceCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ExperienceCard {...card} />
            </motion.div>
          ))}
          <div className="w-6 shrink-0 md:w-10" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
