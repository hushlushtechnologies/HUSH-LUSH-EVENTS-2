"use client";

import { useState } from "react";
import Image from "next/image";
import type { ExperienceCard as ExperienceCardType } from "@/data/our-work-hero";

export function ExperienceCard({ thumbnail }: ExperienceCardType) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative h-[330px] w-[220px] shrink-0 overflow-hidden rounded-t-full border-2 border-light-primary">
      <Image src={thumbnail} alt="" fill className="object-cover" sizes="220px" />

      {!isPlaying && (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark-button-gradient shadow-md transition-transform hover:scale-110"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M4 3L11 7L4 11V3Z" fill="var(--color-dark-bg)" />
          </svg>
        </button>
      )}
    </div>
  );
}