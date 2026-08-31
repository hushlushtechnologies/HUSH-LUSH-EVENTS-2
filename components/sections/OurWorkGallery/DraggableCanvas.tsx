"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { galleryTiles } from "@/data/our-work-gallery";

export function DraggableCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [dragConstraint, setDragConstraint] = useState(0);

  useEffect(() => {
    const measure = () => {
      const containerWidth = containerRef.current?.offsetWidth ?? 0;
      const canvasWidth = canvasRef.current?.scrollWidth ?? 0;
      setDragConstraint(Math.max(0, canvasWidth - containerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[900px] w-full cursor-grab overflow-hidden active:cursor-grabbing">
      <motion.div
        ref={canvasRef}
        drag={shouldReduceMotion ? false : "x"}
        dragConstraints={{ left: -dragConstraint, right: 0 }}
        dragElastic={0.05}
        dragTransition={{ power: 0.3, timeConstant: 200 }}
        className="relative h-full w-[1900px]"
      >
        {galleryTiles.map((tile) => (
          <div
            key={tile.id}
            className="pointer-events-none absolute overflow-hidden rounded-2xl"
            style={{ top: tile.top, left: tile.left, width: tile.width, height: tile.height }}
          >
            <Image
              src={tile.src}
              alt=""
              fill
              className="object-cover"
              draggable={false}
              sizes="300px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}