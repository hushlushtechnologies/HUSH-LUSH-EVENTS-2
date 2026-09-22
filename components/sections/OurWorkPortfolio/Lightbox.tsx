// New file — src/components/sections/OurWorkPortfolio/Lightbox.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { PortfolioItem } from "@/data/portfolio";

interface LightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export function Lightbox({ item, onClose }: LightboxProps) {
  // Escape key closes, and page scroll is locked while open so the
  // background content doesn't scroll behind the overlay.
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[80vh] w-full overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={800}
                className="h-full max-h-[80vh] w-auto object-contain"
                sizes="(min-width: 768px) 900px, 100vw"
              />
            </div>

            {/* <div className="mt-4 text-center">
              <p className="font-display text-xl text-white">{item.title}</p>
              <p className="font-body text-sm text-white/70">{item.subtitle}</p>
            </div> */}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute -top-3 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:-right-3 md:-top-3"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}