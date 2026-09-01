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

const CARD_ROTATION = -4;

function getCardRotation(index: number): number {
  return index % 2 === 0 ? -CARD_ROTATION : CARD_ROTATION;
}

export function ServiceProcessSteps({ image, eyebrow, heading, steps }: ServiceProcessStepsProps) {
  return (
    <section className="bg-dark py-20 md:py-28">
      <Container className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-xl flex-col items-center text-center"
        >
          <div className="relative aspect-[21/8] w-full overflow-hidden rounded-[999px] border-2 border-brand-gold">
            <Image src={image} alt="" fill className="object-cover" sizes="440px" />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="relative h-[15px] w-48">
              <Image src="/images/icons/arrow-line-yellow.svg" alt="" fill className="object-contain" />
            </div>
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-dark-text-secondary">
              {eyebrow.toUpperCase()}
            </span>
          </div>

          <h2 className="font-display mt-4 text-3xl text-dark-text-primary">{heading}</h2>
        </motion.div>

        {/* flex-wrap + justify-center, NOT a fixed grid-cols count —
            a grid with a hardcoded column count (e.g. grid-cols-6)
            reserves that many tracks regardless of how many cards
            actually exist. With fewer cards than columns, auto-placement
            fills from the left and leaves the unused trailing tracks as
            dead space, visually shifting everything left. flex-wrap has
            no such mismatch: it always centers exactly as many cards as
            there are, whatever that number is. */}
        <div className="mt-14 flex w-full flex-wrap justify-center gap-8">
          {steps.map((step, index) => {
            const rotation = getCardRotation(index);
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24, rotate: rotation }}
                whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-64 w-48 flex-col items-center justify-center   rounded-2xl border border-brand-gold bg-dark-border/20 p-5 text-center"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold">
                  <Image src={step.icon} alt="" width={18} height={18} />
                </div>
                <p className="font-display mt-4 text-base font-semibold uppercase tracking-wide text-dark-text-primary">
                  {step.title}
                </p>
                <p className="font-body mt-2 text-xs leading-relaxed text-dark-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}