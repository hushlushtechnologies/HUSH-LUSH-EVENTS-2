"use client";

import { useState } from "react";
import Image from "next/image";
import type { ExperienceCard as ExperienceCardType } from "@/data/our-work-hero";

export function ExperienceCard({ thumbnail, video, youtubeId }: ExperienceCardType) {
  const [isPlaying, setIsPlaying] = useState(false);
  const hasPlayableMedia = Boolean(video || youtubeId);

  return (
    <div
      className="h-[330px] w-[180px] shrink-0 rounded-t-full p-[1px]"
      style={{ background: "linear-gradient(90deg, #EBE411 0%, #D68306 100%)" }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-t-full">
        {isPlaying && video ? (
          // Local file — plain <video>, no third-party chrome/branding
          // of any kind, full control over crop/loop/controls.
          <video
            src={video}
            autoPlay
            muted
            loop
            controls
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : isPlaying && youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&controls=0&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&playsinline=1`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <Image src={thumbnail} alt="" fill className="object-cover" sizes="220px" />
        )}

        {!isPlaying && hasPlayableMedia && (
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
    </div>
  );
}