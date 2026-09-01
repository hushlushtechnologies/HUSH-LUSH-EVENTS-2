"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { socialLinks } from "@/data/socials";
import { journalHeroContent } from "@/data/journal-hero";

export function JournalHero() {
  const { backgroundImage, heading, description } = journalHeroContent;

  return (
    <section className="relative isolate h-[90vh] min-h-[640px] w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Outdoor gala dinner setup among palm trees at dusk"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Toolbar + card, stacked in one flex column with a real gap
          between them — the gap can't collapse regardless of card
          height or animation timing, since it's not independently
          positioned against a measured/guessed coordinate. */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 rounded-2xl border border-white/40 bg-white/10 p-2 shadow-lg backdrop-blur-md"
        >
          {socialLinks.map((social) => (
            <Link
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-light-card/80 text-light-primary transition-colors hover:bg-light-primary hover:text-white"
            >
              <SocialIcon id={social.id} className="h-4 w-4" />
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-lg rounded-t-3xl border border-white/20 bg-dark/70 px-8 pb-8 pt-10 text-center backdrop-blur-md"
        >
          <h1 className="font-display text-3xl text-dark-text-primary md:text-4xl">{heading}</h1>
          <p className="font-body mt-4 text-sm leading-relaxed text-dark-text-secondary">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button href="/our-work" variant="solid">
              <span className="flex items-center gap-2">
                View Live Events
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </Button>
            <Button href="/services" variant="light">
              Explore Our Service
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}