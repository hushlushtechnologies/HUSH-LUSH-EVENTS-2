 "use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { BrowserMockup } from "./BrowserMockup";
import {
  browserTabs as defaultTabs,
  addressBarText as defaultAddressText,
  experienceContent as defaultContent,
} from "@/data/browser-mockup";
import { socialLinks } from "@/data/socials";
import type { BrowserTab } from "@/data/browser-mockup";

interface ExperienceSectionProps {
  tabs?: BrowserTab[];
  addressText?: string;
  content?: typeof defaultContent;
  /** Section background. Accepts an existing design-system class (e.g. "section-light", "bg-dark", "bg-light-card") or a raw CSS color/gradient. Defaults to "section-light", matching current behavior. */
  bgColor?: string;
}

// Design-system utility classes this component already knows about —
// if bgColor matches one of these, apply it as a className (so it
// picks up whatever that token actually resolves to, including any
// paired text-color rules section-light/section-dark define). Anything
// else is treated as a raw CSS color/gradient value via inline style.
const KNOWN_BG_CLASSES = new Set([
  "section-light",
  "section-dark",
  "bg-light",
  "bg-light-card",
  "bg-light-surface",
  "bg-dark",
  "bg-dark-card",
  "bg-dark-surface",
]);

export function ExperienceSection({
  tabs = defaultTabs,
  addressText = defaultAddressText,
  content = defaultContent,
  bgColor = "section-light",
}: ExperienceSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { headingLines, description, videoPoster, testimonial } = content;
  const hasTestimonialHeading = Boolean(testimonial.prefix || testimonial.highlight || testimonial.suffix);

  const isKnownClass = KNOWN_BG_CLASSES.has(bgColor);

  return (
    <section
      className={`py-20 md:py-28 ${isKnownClass ? bgColor : ""}`}
      style={isKnownClass ? undefined : { background: bgColor }}
    >
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
            tabs={tabs}
            addressText={addressText}
            image={videoPoster}
            imageAlt="Event venue decorated with floral chandelier and draped ceiling"
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
                {hasTestimonialHeading && (
                  <p className="font-display text-md leading-snug">
                    {testimonial.prefix}{" "}
                    <span className="text-light-brand">{testimonial.highlight}</span>{" "}
                    {testimonial.suffix} 💖
                  </p>
                )}
                <p
                  className={`font-body text-[10px] leading-relaxed text-light-secondary ${
                    hasTestimonialHeading ? "mt-1" : ""
                  }`}
                >
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
                  <span className="font-body text-[9px] text-light-muted">{testimonial.reviewLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}