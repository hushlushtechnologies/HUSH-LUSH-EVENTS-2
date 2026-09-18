 "use client";

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
  const hasPlayableMedia = Boolean(video || youtubeId);

  return (
    <div className="group relative aspect-[16/9] max-h-[680px] w-full overflow-hidden">
      {isPlaying && video ? (
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