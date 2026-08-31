"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export interface ProcessStep {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface ServiceProcessStepsProps {
  image: string;
  eyebrow: string;
  heading: string;
  steps: ProcessStep[];
}

export function ServiceProcessSteps({ image, eyebrow, heading, steps }: ServiceProcessStepsProps) {
  return (
    <section className="bg-dark py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-md flex-col items-center text-center"
        >
          <div className="relative aspect-[21/8] w-full overflow-hidden rounded-[999px] border-2 border-dark-primary">
            <Image src={image} alt="" fill className="object-cover" sizes="440px" />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-px w-24 bg-dark-primary" />
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true" className="text-dark-primary">
              <path d="M0 5H10M10 5L6 1M10 5L6 9" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-dark-text-secondary">
              {eyebrow.toUpperCase()}
            </span>
          </div>

          <h2 className="font-display mt-4 text-3xl text-dark-text-primary">{heading}</h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-dark-border/40 bg-dark-card/60 p-5 text-center"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-dark-primary/50">
                <Image src={step.icon} alt="" width={18} height={18} />
              </div>
              <p className="font-display mt-4 text-base font-semibold uppercase tracking-wide text-dark-text-primary">
                {step.title}
              </p>
              <p className="font-body mt-2 text-xs leading-relaxed text-dark-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}