import type { BrowserTab } from "@/data/browser-mockup";
import { BrowserTabs } from "./BrowserTabs";
import { BrowserToolbar } from "./BrowserToolbar";
import { BrowserContent } from "./BrowserContent";

interface BrowserMockupProps {
  tabs: BrowserTab[];
  addressText: string;
  image: string;
  imageAlt: string;
  isPlaying: boolean;
  onPlay: () => void;
}

export function BrowserMockup({
  tabs,
  addressText,
  image,
  imageAlt,
  isPlaying,
  onPlay,
}: BrowserMockupProps) {
  return (
    <div className="overflow-hidden rounded-xl border-2 border-amber-300/50 shadow-lg">
      <BrowserTabs tabs={tabs} />
      <BrowserToolbar addressText={addressText} />
      <BrowserContent image={image} alt={imageAlt} isPlaying={isPlaying} onPlay={onPlay} />
    </div>
  );
}