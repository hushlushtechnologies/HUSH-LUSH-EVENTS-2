 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BackgroundWordmark } from "./BackgroundWordmark";
import {
  philosophyIntro,
  philosophyBlocks,
  philosophyPoints,
  leftColumnImages,
  rightColumnLeftImages,
  rightColumnTallImage,
} from "@/data/about-philosophy";

export function AboutPhilosophy() {
  const [block1, block2] = philosophyBlocks;

  return (
    <section className="relative overflow-hidden bg-light py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="flex h-full flex-col justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="max-w-[320px] flex-1">
                  <Image
                    src="/images/icons/arrow-line.svg"
                    alt=""
                    width={320}
                    height={10}
                    className="h-auto w-full"
                  />
                </div>
                <span className="font-body text-xs font-semibold tracking-[0.2em]">
                  {philosophyIntro.eyebrow.toUpperCase()}
                </span>
              </div>

              <h2 className="font-display mt-6 text-3xl">{block1.heading}</h2>
              <p className="font-body mt-4 max-w-lg text-sm leading-relaxed text-light-secondary">
                {block1.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-display text-3xl">{block2.heading}</h2>

              <div className="mt-4 grid grid-cols-2 items-start gap-4">
                <p className="font-body text-sm leading-relaxed text-light-secondary">
                  {block2.description}
                </p>

                <div className="flex flex-col gap-2">
                  {leftColumnImages.map((img) => (
                    <div key={img.id} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                      <Image src={img.src} alt="" fill className="object-cover" sizes="50vw" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — stretches to match left column's height via
              items-stretch on the outer grid + h-full here, instead of a
              hardcoded pixel guess. */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid h-full grid-rows-2 gap-6"
          >
            <div className="grid grid-cols-2 items-stretch gap-6">
              <div className="flex flex-col gap-4">
                {rightColumnLeftImages.slice(0, 2).map((img) => (
                  <div key={img.id} className="relative w-full flex-1 overflow-hidden rounded-xl">
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 260px, 45vw"
                    />
                  </div>
                ))}
              </div>

              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={rightColumnTallImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 260px, 45vw"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 items-stretch gap-6">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={rightColumnLeftImages[3].src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 260px, 45vw"
                />
              </div>

              <div className="flex flex-col justify-center gap-3">
                {philosophyPoints.map((point) => (
                  <div key={point.id}>
                    <p className="font-display text-lg text-light-brand font-medium">{point.title}</p>
                    <p className="font-body mt-1 text-sm leading-relaxed text-light-secondary">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      <div className="mt-16">
        <BackgroundWordmark />
      </div>
    </section>
  );
}