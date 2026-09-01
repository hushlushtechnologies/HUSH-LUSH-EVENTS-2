 "use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryVideo } from "@/data/about-hero";

interface GalleryThumbProps extends GalleryVideo {
  /** Thumbnail box size and play-button scale. Defaults to "md" (previous behavior). */
  size?: "sm" | "md";
}

const sizeStyles = {
  sm: { box: "w-20", button: "h-6 w-6", icon: 9 },
  md: { box: "w-full", button: "h-9 w-9", icon: 12 },
} as const;

export function GalleryThumb({ thumbnail, size = "md" }: GalleryThumbProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const styles = sizeStyles[size];

  return (
    <div className={`relative aspect-square ${styles.box} overflow-hidden rounded-xl`}>
      <Image src={thumbnail} alt="" fill className="object-cover" sizes="140px" />
      {!isPlaying && (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label="Play video"
          className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark-button-gradient shadow-md transition-transform hover:scale-110 ${styles.button}`}
        >
          <svg width={styles.icon} height={styles.icon} viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M4 3L11 7L4 11V3Z" fill="var(--color-dark-bg)" />
          </svg>
        </button>
      )}
    </div>
  );
}