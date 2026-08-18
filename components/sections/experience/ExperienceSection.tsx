"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { BrowserMockup } from "./BrowserMockup";
import {
  browserTabs,
  addressBarText,
  experienceContent,
} from "@/data/browser-mockup";
import { socialLinks } from "@/data/socials";
import Image from "next/image";

export function ExperienceSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { headingLines, description, videoPoster, testimonial } =
    experienceContent;

  return (
    <section className="section-light py-20 md:py-28">
      <Container>
        <SectionHeading
          decoration="/images/decorations/heart-orbit.png"
          headingLines={headingLines}
          description={description}
          underline
           headingClassName="mt-16"
        />
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          {/* Social toolbar — outside the frame, left side */}
          <div className="absolute left-[13%] top-1/4 z-20 hidden -translate-x-full -translate-y-1/2 items-center gap-4 rounded-xl border border-white/40 bg-white/10 p-2 shadow-lg backdrop-blur-md md:flex">
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

          <BrowserMockup
            tabs={browserTabs}
            addressText={addressBarText}
            image={videoPoster}
            imageAlt="Bride and groom sharing an intimate moment at a candlelit reception table"
            isPlaying={isPlaying}
            onPlay={() => setIsPlaying(true)}
          />

          {/* Testimonial card — overlaps lower-right corner of the frame */}
          <div className="absolute bottom-[4%] -right-[6%] hidden max-w-[400px] rounded-lg border border-light bg-light-card p-3 shadow-md md:block">
            <div className="flex items-start gap-2">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
                <Image src={testimonial.icon} alt="" width={28} height={28} />
              </div>
              <div>
                <p className="font-display text-md leading-snug ">
                  {testimonial.prefix}{" "}
                  <span className="text-light-brand">
                    {testimonial.highlight}
                  </span>{" "}
                  {testimonial.suffix} 💖
                </p>
                <p className="font-body mt-1 text-[10px] leading-relaxed text-light-secondary">
                  {testimonial.description}
                </p>
                <div className="mt-2 flex items-center gap-1.5">
                  <div className="flex -space-x-1.5">
                    <div className="h-4 w-fit overflow-hidden rounded-full border border-light-card">
                      <Image
                        src={testimonial.avatarsImage}
                        alt=""
                        width={64}
                        height={16}
                        className="h-4 w-auto object-cover"
                      />
                    </div>
                  </div>
                  <span className="font-body text-[9px] text-light-muted">
                    {testimonial.reviewLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
