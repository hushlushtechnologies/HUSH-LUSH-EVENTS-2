 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BeliefCard } from "./BeliefCard";
import { beliefs, beliefIntro } from "@/data/about-beliefs";

export function AboutBeliefs() {
  const { eyebrow, headingLines, description, image } = beliefIntro;

  return (
    <section className="bg-dark py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2">
          {/* Left: pill image + label + heading + description */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Shorter, wider — aspect widened from 16:9 to 21:8 */}
            <div className="relative aspect-[21/8] w-full max-w-[520px] overflow-hidden rounded-[999px] border-2 border-brand-gold p-2">
              <Image
                src={image}
                alt="Outdoor wedding ceremony seating with sunset lighting"
                fill
                className="rounded-4xl object-cover"
                sizes="520px"
              />
            </div>

            <div className="mt-4 flex max-w-[440px] items-center gap-3">
              <Image
                src="/images/icons/arrow-line-yellow.svg"
                alt=""
                width={280}
                height={10}
                className="h-auto w-full"
              />
              <span className="font-body text-xs font-semibold tracking-[0.2em] text-dark-text-secondary">
                {eyebrow.toUpperCase()}
              </span>
            </div>

            <h2 className="font-display mt-6 text-3xl leading-tight text-dark-text-primary">
              {headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <p className="font-body mt-4 max-w-md text-sm leading-relaxed text-dark-text-secondary">
              {description}
            </p>
          </motion.div>

          {/* Right: 2x2 belief cards — stretches to match left column's full height */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 grid-rows-2 items-stretch gap-4"
          >
            {beliefs.map((belief) => (
              <BeliefCard key={belief.id} {...belief} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}