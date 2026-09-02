 "use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GalleryImageCluster } from "./GalleryImageCluster";
import { GalleryStats } from "./GalleryStats";
import { ConnectorLines } from "./ConnectorLines";
import { AnimatedStatValue } from "./AnimatedStatValue";
import { galleryClusters, galleryStats } from "@/data/gallery-showcase";

export function GalleryShowcase() {
  return (
    <section className="relative isolate overflow-hidden bg-dark py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[15%] top-[30%] -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold opacity-40 blur-[140px]"
      />
      <div
        className="absolute bottom-[70%] right-[10%] h-[380px] w-[380px] rounded-full opacity-40 blur-[140px] bg-brand-gold "
      />
      <div
        className="absolute bottom-[25%] right-[10%] h-[380px] w-[380px] rounded-full opacity-60 blur-[140px]"
        style={{ background: "rgba(255, 155, 119, 0.4)" }}
      />
      <Container>
        {/* Canvas increased to 1000px tall (was 900) to give the lower
            clusters room without overflowing the section. */}
        <div className="relative mx-auto hidden h-[1200px] max-w-5xl overflow-hidden   lg:block">
          <div className="absolute inset-0 z-0">
            <ConnectorLines />
          </div>

          {galleryClusters.map((cluster, index) => (
            <motion.div
              key={cluster.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <GalleryImageCluster {...cluster} />
            </motion.div>
          ))}

          <GalleryStats stats={galleryStats} />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 z-30 flex w-56 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 rounded-2xl border border-dark-border/50 bg-dark-card p-8 text-center"
          >
            <div className="relative h-12 w-36">
              <Image
                src="/images/logo-dark.svg"
                alt="Hush Lush Events"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-display text-2xl leading-snug text-dark-text-primary">
              Every detail was beautifully handled.
            </p>
            <Link
              href="/our-work"
              className="font-body rounded-full bg-dark-button-gradient px-6 py-2 text-sm font-medium text-dark-bg transition-transform hover:scale-105"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>

        {/* Mobile fallback unchanged */}
        <div className="flex flex-col items-center gap-10 lg:hidden">
          <div className="flex w-full max-w-sm flex-col items-center gap-4 rounded-2xl border border-dark-border/50 bg-dark-card p-8 text-center">
            <div className="relative h-10 w-32">
              <Image
                src="/images/logo-dark.svg"
                alt="Hush Lush Events"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-display text-xl leading-snug text-dark-text-primary">
              Every detail was beautifully handled.
            </p>
            <Link
              href="/our-work"
              className="font-body rounded-full bg-dark-button-gradient px-6 py-2 text-sm font-medium text-dark-bg"
            >
              View Our Work
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
            {galleryStats.map((stat) => (
              <div key={stat.id}>
                <AnimatedStatValue
                  value={stat.value}
                  className="font-display block text-2xl font-semibold text-dark-primary"
                />
                <p className="font-body text-xs text-dark-text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="scrollbar-hide flex w-full gap-3 overflow-x-auto pb-2">
            {galleryClusters
              .flatMap((c) => c.images)
              .map((img) => (
                <div
                  key={img.src}
                  className="relative h-40 w-32 shrink-0 overflow-hidden rounded-xl border border-dark-border/40"
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}