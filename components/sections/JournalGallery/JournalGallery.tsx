"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArchImageCard } from "@/components/ui/ArchImageCard";
import { FollowButton } from "./FollowButton";
import { journalGalleryIntro, galleryRowOne, galleryRowTwo, instagramHref } from "@/data/journal-gallery";

export function JournalGallery() {
  return (
    <section className="section-light py-20 md:py-28">
      <Container>
        <SectionHeading
          decoration="/images/decorations/heart-orbit.png"
          headingLines={journalGalleryIntro.headingLines}
          description={journalGalleryIntro.description}
          headingClassName="mt-16"
          underline
        />
      </Container>

      {/* Row 1 — Follow button fixed on the far left, cards scroll/bleed right */}
      <div className="scrollbar-hide mt-16 flex items-center gap-8 overflow-x-auto pb-4 pl-6 md:pl-10 lg:pl-[max(2.5rem,calc((100vw-1400px)/2))]">
        <FollowButton href={instagramHref} />
        {galleryRowOne.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArchImageCard thumbnail={img.src} />
          </motion.div>
        ))}
        <div className="w-6 shrink-0" aria-hidden="true" />
      </div>

      {/* Row 2 — cards scroll/bleed left, Follow button fixed on the right */}
      <div className="scrollbar-hide mt-8 flex items-center gap-8 overflow-x-auto pb-4 pr-6 md:pr-10 lg:pr-[max(2.5rem,calc((100vw-1400px)/2))]">
        <div className="w-6 shrink-0" aria-hidden="true" />
        {galleryRowTwo.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArchImageCard thumbnail={img.src} />
          </motion.div>
        ))}
        <FollowButton href={instagramHref} />
      </div>
    </section>
  );
}