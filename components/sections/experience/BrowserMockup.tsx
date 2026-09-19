import type { BrowserTab } from "@/data/browser-mockup";
import { BrowserTabs } from "./BrowserTabs";
import { BrowserToolbar } from "./BrowserToolbar";
import { BrowserContent } from "./BrowserContent";

type BrowserTone = "light" | "dark" | "vibrant";

interface BrowserMockupProps {
  tabs: BrowserTab[];
  addressText: string;
  image: string;
  video?: string;
  youtubeId?: string;
  imageAlt: string;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  tone?: BrowserTone;
}

const FRAME_BORDER: Record<BrowserTone, string> = {
  light: "border-amber-300/50",
  dark: "border-dark-border/60",
  vibrant: "border-fuchsia-400/50",
};

export function BrowserMockup({
  tabs,
  addressText,
  image,
  video,
  youtubeId,
  imageAlt,
  isPlaying,
  onPlay,
  onPause,
  tone = "light",
}: BrowserMockupProps) {
  return (
    <div className={`overflow-hidden rounded-xl border-2 shadow-lg ${FRAME_BORDER[tone]}`}>
      <BrowserTabs tabs={tabs} />
      <BrowserToolbar addressText={addressText} />
      <BrowserContent
        image={image}
        video={video}
        youtubeId={youtubeId}
        alt={imageAlt}
        isPlaying={isPlaying}
        onPlay={onPlay}
        onPause={onPause}
        tone={tone}
      />
    </div>
  );
}