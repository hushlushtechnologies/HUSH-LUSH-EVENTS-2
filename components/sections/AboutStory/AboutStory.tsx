"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { storyContent } from "@/data/about-story";

export function AboutStory() {
  const { eyebrow, headingLines, paragraph1, paragraph2, largeImage, smallImage } = storyContent;

  return (
    <section className="bg-light-card py-16 md:py-24">
      <Container>
        {/* Eyebrow + line, right-aligned */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-center justify-end gap-4"
        >
          <span className="font-body text-xs font-semibold tracking-[0.2em]">
            {eyebrow.toUpperCase()}
          </span>
          <div className="max-w-[320px] flex-1">
            <Image
              src="/images/icons/arrow-line.svg"
              alt=""
              width={320}
              height={10}
              className="h-auto w-full"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {/* Large image, left — now stretches to match the FULL right
              column height, including paragraph2, since paragraph2 has
              moved inside the same grid row. */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[400px]"
          >
            <Image
              src={largeImage}
              alt="Outdoor wedding ceremony at sunset with hanging lanterns"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </motion.div>

          {/* Right column: small image + heading + paragraph1, then paragraph2 —
              all in one column now, so its full height (including paragraph2)
              is what the large image stretches to match. */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-2 items-stretch gap-6">
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src={smallImage}
                  alt="Couple cutting their wedding cake with sparklers"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>

              <div className="flex flex-col justify-center gap-4">
                <h2 className="font-display text-3xl font-medium leading-tight">
                  {headingLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>

                <p className="font-body text-base leading-relaxed text-light-secondary">
                  {paragraph1}
                </p>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-body text-base leading-relaxed text-light-secondary"
            >
              {paragraph2}
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}