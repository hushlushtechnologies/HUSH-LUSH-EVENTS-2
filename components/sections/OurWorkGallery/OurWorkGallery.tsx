"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { DraggableCanvas } from "./DraggableCanvas";
import { galleryIntro } from "@/data/our-work-gallery";

export function OurWorkGallery() {
  return (
    <section className="relative overflow-hidden bg-light-card py-20 md:py-28">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md"
        >
          <h2 className="font-display text-4xl leading-tight text-light-primary md:text-5xl">
            {galleryIntro.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p className="font-script mt-24 text-xl italic text-light-secondary">
            {galleryIntro.script}
            <br />
            {galleryIntro.scriptLine2}{" "}
            <span aria-hidden="true">💜</span>
          </p>
        </motion.div>
      </Container>

      {/* Draggable mosaic sits on top of / overlapping the heading area,
          absolutely positioned relative to the section. */}
      <div className="absolute inset-0 top-0">
        <DraggableCanvas />
      </div>
    </section>
  );
}