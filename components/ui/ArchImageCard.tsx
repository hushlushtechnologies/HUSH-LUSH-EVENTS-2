 "use client";

import { useEffect, useRef, useState } from "react";

interface ArchImageCardProps {
  video: string;
  width?: number;
  height?: number;
}

export function ArchImageCard({ video, width = 220, height = 380 }: ArchImageCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Some browsers (notably Chrome/Firefox in certain versions) paint a
  // blank/black frame on load until the video is nudged to a nonzero
  // timestamp — seeking to a tiny offset forces the first real frame
  // to render as the resting "thumbnail" state, with no separate
  // poster image needed.
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
    <div
      style={{ width, height }}
      className="group relative shrink-0 overflow-hidden rounded-t-full border-2 border-light-primary"
    >
      <video
        ref={videoRef}
        src={video}
        muted={!isPlaying}
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {!isPlaying && (
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

      {isPlaying && (
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
  );
}