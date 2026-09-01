  // OurWorkGallery.tsx — replaces both the old OurWorkGallery.tsx and DraggableCanvas.tsx
  "use client";

  import { useLayoutEffect, useRef, useState } from "react";
  import Image from "next/image";
  import { motion, useReducedMotion as useFramerReducedMotion } from "framer-motion";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { useGSAP } from "@gsap/react";
  import { Container } from "@/components/ui/Container";
  import { galleryIntro, galleryTiles } from "@/data/our-work-gallery";

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Canvas width must exceed the widest tile's right edge with some
  // breathing room — matches the original DraggableCanvas's fixed 1900px
  // track width, kept as a constant here since tile positions are
  // hand-placed (absolute top/left) rather than derived from natural flow.
  const CANVAS_WIDTH = 1900;

  export function OurWorkGallery() {
    const pinRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const framerReducedMotion = useFramerReducedMotion();
    const [scrollDistance, setScrollDistance] = useState(0);

    useLayoutEffect(() => {
      const measure = () => {
        const viewportWidth = pinRef.current?.offsetWidth ?? 0;
        setScrollDistance(Math.max(0, CANVAS_WIDTH - viewportWidth));
      };
      measure();
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }, []);

    useGSAP(
      () => {
        if (framerReducedMotion || !pinRef.current || !trackRef.current || scrollDistance <= 0) return;

        const trigger = ScrollTrigger.create({
          trigger: pinRef.current,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          animation: gsap.to(trackRef.current, {
            x: -scrollDistance,
            ease: "none",
          }),
        });

        return () => trigger.kill();
      },
      { dependencies: [scrollDistance, framerReducedMotion] }
    );

    return (
      <section className="relative overflow-hidden bg-light-card py-3">
        <div
          ref={pinRef}
          className={`relative w-full ${
            framerReducedMotion ? "h-auto overflow-x-auto py-20 md:py-28" : "h-screen"
          }`}
        >
          {/* Heading — lives inside the pinned frame but is never part of
              the horizontally-translating track, so it stays put on screen
              for the whole scroll-driven sequence. */}
          <Container className="pointer-events-none relative z-10 pt-20 md:pt-28">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md"
            >
              <h2 className="font-display text-4xl leading-tight  md:text-5xl">
                {galleryIntro.headingLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <p className="font-script mt-24 text-xl italic text-light-secondary">
                {galleryIntro.script}
                <br />
                {galleryIntro.scriptLine2} <span aria-hidden="true">💜</span>
              </p>
            </motion.div>
          </Container>

          {/* Horizontal track — GSAP-scrubbed x translation when motion is
              allowed; falls back to a plain scrollable row (native touch/
              trackpad scroll, no forced pin) under reduced motion. */}
          <div
            ref={trackRef}
            className={
              framerReducedMotion
                ? "relative mt-8 flex h-[500px] gap-4 px-6"
                : "absolute inset-0 top-0"
            }
            style={framerReducedMotion ? undefined : { width: CANVAS_WIDTH }}
          >
            {galleryTiles.map((tile) =>
              framerReducedMotion ? (
                <div
                  key={tile.id}
                  className="relative h-full shrink-0 overflow-hidden rounded-2xl"
                  style={{ width: tile.width }}
                >
                  <Image src={tile.src} alt="" fill className="object-cover" sizes="300px" />
                </div>
              ) : (
                <div
                  key={tile.id}
                  className="pointer-events-none absolute overflow-hidden rounded-2xl"
                  style={{ top: tile.top, left: tile.left, width: tile.width, height: tile.height }}
                >
                  <Image src={tile.src} alt="" fill className="object-cover" sizes="300px" />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    );
  }