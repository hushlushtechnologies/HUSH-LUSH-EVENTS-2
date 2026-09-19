"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PlayIcon } from "./icons";

type BrowserTone = "light" | "dark" | "vibrant";

interface BrowserContentProps {
  image: string;
  video?: string;
  youtubeId?: string;
  alt: string;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  tone?: BrowserTone;
}

const PLAY_BUTTON: Record<BrowserTone, string> = {
  light: "bg-light-primary-gradient",
  dark: "bg-dark-button-gradient",
  vibrant: "bg-gradient-to-br from-fuchsia-500 to-dark-secondary",
};

export function BrowserContent({
  image,
  video,
  youtubeId,
  alt,
  isPlaying,
  onPlay,
  onPause,
  tone = "light",
}: BrowserContentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayableMedia = Boolean(video || youtubeId);

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
    onPlay();
    videoRef.current?.play().catch(() => {});
  };

  const handlePause = () => {
    onPause();
    videoRef.current?.pause();
  };

  if (video) {
    return (
      <div className="group relative aspect-[16/9] max-h-[680px] w-full overflow-hidden">
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
            className={`absolute cursor-pointer left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-transform hover:scale-110 sm:h-11 sm:w-11 ${PLAY_BUTTON[tone]}`}
          >
            <PlayIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </button>
        )}

        {isPlaying && (
          <>
            <div className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/30" />
            <button
              type="button"
              onClick={handlePause}
              aria-label="Pause video"
              className={`absolute cursor-pointer left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full opacity-0 shadow-md transition-all duration-200 hover:scale-110 group-hover:opacity-100 sm:h-11 sm:w-11 ${PLAY_BUTTON[tone]}`}
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

  return (
    <div className="group relative aspect-[16/9] max-h-[680px] w-full overflow-hidden">
      {isPlaying && youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={alt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <>
          <Image
            src={image}
            alt={alt}
            fill
            priority
            className="object-cover object-[center_30%] transition-transform duration-[3000ms] ease-out group-hover:scale-[1.03] md:object-[center_25%]"
            sizes="(min-width: 1024px) 640px, 100vw"
          />

          {hasPlayableMedia && (
            <button
              type="button"
              onClick={onPlay}
              aria-label="Play video"
              className={`absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-transform hover:scale-110 sm:h-11 sm:w-11 ${PLAY_BUTTON[tone]}`}
            >
              <PlayIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </button>
          )}
        </>
      )}
    </div>
  );
}