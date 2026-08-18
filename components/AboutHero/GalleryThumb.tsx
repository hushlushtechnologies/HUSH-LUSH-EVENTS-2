"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryVideo } from "@/data/about-hero";

export function GalleryThumb({ thumbnail }: GalleryVideo) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl">
      <Image src={thumbnail} alt="" fill className="object-cover" sizes="140px" />
      {!isPlaying && (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark-button-gradient shadow-md transition-transform hover:scale-110"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M4 3L11 7L4 11V3Z" fill="var(--color-dark-bg)" />
          </svg>
        </button>
      )}
    </div>
  );
}