 "use client";

import { useEffect, useRef, useState } from "react";
import type { ExperienceCard as ExperienceCardType } from "@/data/our-work-hero";

export function ExperienceCard({ video, youtubeId }: ExperienceCardType) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasPlayableMedia = Boolean(video || youtubeId);

  // Local video only: nudge to a tiny nonzero timestamp once metadata
  // loads, so the browser paints a real frame as the resting
  // "thumbnail" instead of a blank/black box — no separate thumbnail
  // image needed. Same technique as ArchImageCard/GalleryThumb.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !video) return;

    const handleLoadedMetadata = () => {
      el.currentTime = 0.1;
    };
    el.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => el.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, [video]);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play().catch(() => {});
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
  };

  return (
    <div
      className="h-[330px] w-[180px] shrink-0 rounded-t-full p-[1px]"
      style={{ background: "linear-gradient(90deg, #EBE411 0%, #D68306 100%)" }}
    >
      <div className="group relative h-full w-full overflow-hidden rounded-t-full">
        {video ? (
          // Local file — its own frame IS the thumbnail. One persistent
          // <video> element handles both the resting state and actual
          // playback; nothing swaps out on click.
          <video
            ref={videoRef}
            src={video}
            muted={!isPlaying}
            loop
            playsInline
            preload="metadata"
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
        ) : null}

        {!isPlaying && hasPlayableMedia && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-dark-button-gradient shadow-md transition-transform hover:scale-110"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M4 3L11 7L4 11V3Z" fill="var(--color-dark-bg)" />
            </svg>
          </button>
        )}

        {isPlaying && video && (
          <>
            <div className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/30" />
            <button
              type="button"
              onClick={handlePause}
              aria-label="Pause video"
              className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-dark-button-gradient opacity-0 shadow-md transition-all duration-200 hover:scale-110 group-hover:opacity-100"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="3" y="2" width="3" height="10" fill="var(--color-dark-bg)" />
                <rect x="8" y="2" width="3" height="10" fill="var(--color-dark-bg)" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}