"use client";

import { useEffect, useRef, useState } from "react";
import type { GalleryVideo } from "@/data/about-hero";

interface GalleryThumbProps extends GalleryVideo {
  size?: "sm" | "md";
}

const sizeStyles = {
  sm: { box: "w-20", button: "h-6 w-6", icon: 9 },
  md: { box: "w-full", button: "h-9 w-9", icon: 12 },
} as const;

export function GalleryThumb({ video, size = "md" }: GalleryThumbProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const styles = sizeStyles[size];

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const handleLoadedMetadata = () => {
      el.currentTime = 0.1;
    };
    el.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => el.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play().catch(() => {});
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current?.pause();
  };

  return (
    <div className={`group relative aspect-square ${styles.box} overflow-hidden rounded-xl`}>
      <video
        ref={videoRef}
        src={video}
        muted={!isPlaying}
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Resting state: play button only, always visible */}
      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Play video"
          className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark-button-gradient shadow-md transition-transform hover:scale-110 ${styles.button}`}
        >
          <svg width={styles.icon} height={styles.icon} viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M4 3L11 7L4 11V3Z" fill="var(--color-dark-bg)" />
          </svg>
        </button>
      )}

      {/* Playing state: pause button, only shown on hover — fades in/out
          over the darkened video so it doesn't compete for attention
          while the viewer is just watching. */}
      {isPlaying && (
        <>
          <div className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/30" />
          <button
            type="button"
            onClick={handlePause}
            aria-label="Pause video"
            className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark-button-gradient opacity-0 shadow-md transition-all duration-200 hover:scale-110 group-hover:opacity-100 ${styles.button}`}
          >
            <svg width={styles.icon} height={styles.icon} viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="3" y="2" width="3" height="10" fill="var(--color-dark-bg)" />
              <rect x="8" y="2" width="3" height="10" fill="var(--color-dark-bg)" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}