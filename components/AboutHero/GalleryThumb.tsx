 "use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryVideo } from "@/data/about-hero";

interface GalleryThumbProps extends GalleryVideo {
  size?: "sm" | "md";
}

const sizeStyles = {
  sm: { box: "w-20", button: "h-6 w-6", icon: 9 },
  md: { box: "w-full", button: "h-9 w-9", icon: 12 },
} as const;

export function GalleryThumb({ video, size = "md" }: GalleryThumbProps) {
  const thumbVideoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const styles = sizeStyles[size];

  // Nudge the thumbnail video to a real frame once metadata loads, so
  // it shows a proper resting "poster" frame instead of a blank box —
  // the thumbnail itself never actually plays, it's static.
  useEffect(() => {
    const el = thumbVideoRef.current;
    if (!el) return;

    const handleLoadedMetadata = () => {
      el.currentTime = 0.1;
    };
    el.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => el.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, []);

  const handleExpand = () => setIsExpanded(true);
  const handleClose = () => setIsExpanded(false);

  // Escape key closes the expanded view, and page scroll is locked
  // while it's open — same pattern as the Lightbox used elsewhere.
  useEffect(() => {
    if (!isExpanded) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    // Autoplay the real video once the overlay mounts.
    expandedVideoRef.current?.play().catch(() => {});

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  return (
    <>
      <div className={`group relative aspect-square ${styles.box} overflow-hidden rounded-xl`}>
        <video
          ref={thumbVideoRef}
          src={video}
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <button
          type="button"
          onClick={handleExpand}
          aria-label="Expand video"
          className={`absolute cursor-pointer left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark-button-gradient shadow-md transition-transform hover:scale-110 ${styles.button}`}
        >
          <svg width={styles.icon} height={styles.icon} viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M4 3L11 7L4 11V3Z" fill="var(--color-dark-bg)" />
          </svg>
        </button>
      </div>

      {/* Full-screen expanded view — the video actually plays here,
          large and centered, not in the small thumbnail box. */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={expandedVideoRef}
                src={video}
                controls
                playsInline
                className="max-h-[80vh] w-full rounded-xl"
              />

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="absolute cursor-pointer -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}