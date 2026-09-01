 "use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion as useFramerReducedMotion } from "framer-motion";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";
import { galleryIntro, galleryTiles } from "@/data/our-work-gallery";

if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable, InertiaPlugin);
}

const CANVAS_WIDTH = 1920;
const AUTO_SCROLL_SPEED = 40;

export function OurWorkGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const framerReducedMotion = useFramerReducedMotion();

  useGSAP(
    () => {
      if (framerReducedMotion || !trackRef.current) return;

      const track = trackRef.current;
      const wrap = gsap.utils.wrap(-CANVAS_WIDTH, 0);

      let x = 0;
      let interacting = false;
      gsap.set(track, { x: 0 });

      const [draggable] = Draggable.create(track, {
        type: "x",
        inertia: true,
        cursor: "grab",
        activeCursor: "grabbing",
        onPress() {
          interacting = true;
        },
        onDrag() {
          x = this.x;
          gsap.set(track, { x: wrap(x) });
        },
        onThrowUpdate() {
          x = this.x;
          gsap.set(track, { x: wrap(x) });
        },
        onThrowComplete() {
          interacting = false;
        },
        onRelease() {
          if (!this.isThrowing) interacting = false;
        },
      });

const ticker = (_time: number, deltaMs: number) => {
  if (interacting) return;
  x -= AUTO_SCROLL_SPEED * (deltaMs / 1000);
  gsap.set(track, { x: wrap(x) });
  draggable.update();
};
      gsap.ticker.add(ticker);

      return () => {
        gsap.ticker.remove(ticker);
        draggable.kill();
      };
    },
    { dependencies: [framerReducedMotion] }
  );

  return (
    // isolate is the fix for "rendering above the navbar" — it contains
    // every stacking context created inside this section (framer-motion
    // and GSAP both introduce them via transform/will-change) so nothing
    // in here can ever escape and paint above the header's z-50,
    // regardless of what internal z-index values exist below.
    <section className="relative isolate h-screen min-h-[600px] w-full overflow-hidden bg-light-card">
      {/* Background layer — the rolling/draggable collage, filling the
          entire section behind the heading. Capped at z-0 so it always
          stays under the foreground content (z-10) and, crucially,
          under the isolate boundary above — never above the navbar. */}
      <div
        className={
          framerReducedMotion
            ? "absolute inset-0 z-0 flex items-center gap-4 overflow-x-auto px-6"
            : "absolute inset-0 z-0"
        }
      >
        <div
          ref={trackRef}
          className={
            framerReducedMotion
              ? "flex h-full gap-4"
              : "absolute inset-0 top-0 cursor-grab active:cursor-grabbing"
          }
          style={framerReducedMotion ? undefined : { width: CANVAS_WIDTH * 2, height: "100%" }}
        >
          {framerReducedMotion
            ? galleryTiles.map((tile) => (
                <div
                  key={tile.id}
                  className="relative h-full shrink-0 overflow-hidden rounded-2xl"
                  style={{ width: tile.width, aspectRatio: tile.aspectRatio }}
                >
                  <Image src={tile.src} alt="" fill className="object-cover" sizes="300px" />
                </div>
              ))
            : [0, 1].flatMap((copy) =>
                galleryTiles.map((tile) => (
                  <div
                    key={`${tile.id}-${copy}`}
                    className="pointer-events-none absolute overflow-hidden rounded-2xl"
                    style={{
                      top: tile.top,
                      left: `calc(${tile.left} + ${copy * CANVAS_WIDTH}px)`,
                      width: tile.width,
                      height: tile.height,
                      aspectRatio: tile.aspectRatio,
                    }}
                  >
                    <Image src={tile.src} alt="" fill className="object-cover" sizes="300px" />
                  </div>
                ))
              )}
        </div>
      </div>

      {/* Scrim — softens the moving photos behind the text so the
          heading/script stay legible against a busy, shifting
          background rather than fighting with it for contrast. */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-light-card/90 via-light-card/50 to-light-card/20" />

      {/* Foreground — heading overlays the moving collage, vertically
          centered within the full-height section. */}
      <Container className="relative z-10 flex h-full items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md"
        >
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            {galleryIntro.headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p className="font-script mt-8 text-xl italic text-light-secondary">
            {galleryIntro.script}
            <br />
            {galleryIntro.scriptLine2} <span aria-hidden="true">💜</span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}