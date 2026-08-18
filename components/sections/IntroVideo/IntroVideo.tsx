"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { introVideoContent } from "@/data/intro-video";
import { socialLinks } from "@/data/socials";

export function IntroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const {
    headingLines,
    description,
    browserTabs,
    addressBarText,
    videoPoster,
    testimonial,
  } = introVideoContent;

  return (
    <section className="section-light py-20 md:py-28">
      <Container>
        <SectionHeading
          decoration="/images/decorations/heart-orbit.png"
          headingLines={headingLines}
          description={description}
          underline
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-7xl "
        >
          {/* Social toolbar — compact horizontal pill, OUTSIDE the frame on the left */}
          <div className="absolute left-[14%] top-1/4 z-20 hidden -translate-x-full -translate-y-1/2 items-center gap-4 rounded-xl border border-white/40 bg-white/10 p-2 shadow-lg backdrop-blur-md md:flex">
            {socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-light-card/80 text-light-secondary transition-colors hover:bg-light-primary hover:text-white"
              >
                <SocialIcon id={social.id} className="h-4 w-4" />
              </Link>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border-2 border-amber-300 shadow-md">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-light bg-light-card px-2.5 py-1.5">
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              </div>
              <div className="flex gap-1 overflow-x-auto">
                {browserTabs.map((tab) => (
                  <span
                    key={tab.label}
                    className={`whitespace-nowrap rounded-t px-2 py-0.5 text-[10px] ${
                      tab.active
                        ? "bg-light text-light-brand"
                        : "text-light-muted"
                    }`}
                  >
                    {tab.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Address bar */}
            <div className="flex items-center gap-1.5 border-b border-light bg-light-card px-2.5 py-1">
              <span aria-hidden="true" className="text-[10px] text-light-muted">
                ←
              </span>
              <span aria-hidden="true" className="text-[10px] text-light-muted">
                →
              </span>
              <span aria-hidden="true" className="text-[10px] text-light-muted">
                ⟳
              </span>
              <div className="flex-1 truncate rounded-full bg-light px-3 py-1 text-[10px] text-light-muted">
                {addressBarText}
              </div>
            </div>

            {/* Video area — wider aspect + adjusted crop so less zoomed-in than before */}
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={videoPoster}
                alt="Bride and groom sharing an intimate moment at a candlelit reception table"
                fill
                className="object-cover object-[center_30%]"
                sizes="(min-width: 1024px) 640px, 100vw"
              />

              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label="Play video"
                className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-light-primary-gradient shadow-md transition-transform hover:scale-105"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M4 3L11 7L4 11V3Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonial card — compact, overlapping the lower-right corner */}
          <div className="absolute -bottom-4 right-3 hidden max-w-[220px] rounded-lg border border-light bg-light-card p-3 shadow-md sm:right-4 md:block">
            <p className="font-display text-xs leading-snug text-light-primary">
              {testimonial.prefix}{" "}
              <span className="text-light-brand">{testimonial.highlight}</span>{" "}
              {testimonial.suffix} 💖
            </p>
            <p className="font-body mt-1 text-[10px] leading-relaxed text-light-secondary">
              {testimonial.description}
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <div className="flex -space-x-1.5">
                {[1, 2, 3].map((n) => (
                  <span
                    key={n}
                    className="h-4 w-4 rounded-full border border-light-card bg-light-border"
                  />
                ))}
              </div>
              <span className="font-body text-[9px] text-light-muted">
                {testimonial.reviewLabel}
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
