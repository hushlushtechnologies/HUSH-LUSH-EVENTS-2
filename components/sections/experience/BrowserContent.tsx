"use client";

import Image from "next/image";
import { PlayIcon } from "./icons";

interface BrowserContentProps {
  image: string;
  alt: string;
  isPlaying: boolean;
  onPlay: () => void;
}

export function BrowserContent({ image, alt, isPlaying, onPlay }: BrowserContentProps) {
  return (
   <div className="group relative aspect-[16/9] max-h-[480px] w-full overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover object-[center_30%] transition-transform duration-[3000ms] ease-out group-hover:scale-[1.03] md:object-[center_25%]"
        sizes="(min-width: 1024px) 640px, 100vw"
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={onPlay}
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-light-primary-gradient shadow-md transition-transform hover:scale-110 sm:h-11 sm:w-11"
        >
          <PlayIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </button>
      )}
    </div>
  );
}