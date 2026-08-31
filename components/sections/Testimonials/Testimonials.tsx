"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialItemCard } from "./TestimonialItemCard";
import { testimonials } from "@/data/testimonials";

const INITIAL_COUNT = 6;

export function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  return (
    <section className="section-light py-20 md:py-28">
      <Container>
        <SectionHeading
          decoration="/images/decorations/heart-orbit.png"
          headingLines={["Trusted to Create the", "Extraordinary Testimonial"]}
          underline
        />

        <div className="relative mx-auto mt-6 h-18 w-48">
          <Image
            src="/images/logo.svg"
            alt="Hush Lush Events"
            fill
            className="object-contain"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6   pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false}>
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % INITIAL_COUNT) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <TestimonialItemCard {...testimonial} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + 3)}
              className="font-body rounded-full border border-light-primary/60 px-6 py-2 text-sm font-medium text-light-brand transition-colors hover:bg-light-primary hover:text-white"
            >
              View More
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}