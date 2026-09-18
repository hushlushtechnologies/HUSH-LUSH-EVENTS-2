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
  tone?: BrowserTone;
}

const PLAY_BUTTON: Record<BrowserTone, string> = {
  light: "bg-light-primary-gradient",
  dark: "bg-dark-button-gradient",
  vibrant: "bg-gradient-to-br from-fuchsia-500 to-dark-secondary",
};

export function BrowserContent({ image, video, youtubeId, alt, isPlaying, onPlay, tone = "light" }: BrowserContentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasNudged, setHasNudged] = useState(false);
  const hasPlayableMedia = Boolean(video || youtubeId);

  // Local video only: nudge to a tiny nonzero timestamp once metadata
  // loads, so the browser paints a real frame as the resting
  // "thumbnail" instead of a blank/black box — no separate poster
  // image needed for this case.
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !video) return;

    const handleLoadedMetadata = () => {
      el.currentTime = 0.1;
      setHasNudged(true);
    };
    el.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => el.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, [video]);

  const handlePlay = () => {
    onPlay();
    videoRef.current?.play().catch(() => {});
  };

  if (video) {
    return (
      <div className="group relative aspect-[16/9] max-h-[680px] w-full overflow-hidden">
        <video
          ref={videoRef}
          src={video}
          muted={!isPlaying}
          controls={isPlaying}
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label="Play video"
            className={`absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-transform hover:scale-110 sm:h-11 sm:w-11 ${PLAY_BUTTON[tone]} ${
              hasNudged ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            <PlayIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </button>
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