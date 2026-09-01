import Image from "next/image";
import { verticalBadgeText, verticalBadgeImage } from "@/data/about-process";

export function VerticalBadge() {
  return (
    <div className="relative mx-auto h-[900px] w-[260px] overflow-hidden rounded-[130px] border-1 border-brand-gold">
      <Image
        src={verticalBadgeImage}
        alt="Floral arrangement with soft ambient lighting border"
        fill
        className="object-cover"
        sizes="260px"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50" />

      <div className="absolute left-1/2 top-16 h-14 w-14 -translate-x-1/2">
        <Image src="/images/logo-mark.svg" alt="" fill className="object-contain" />
      </div>

      {/* Vertical letter stack — one letter per line, matching the reference */}
      <div className="absolute left-1/2 top-32 flex -translate-x-1/2 flex-col items-center gap-3">
        {verticalBadgeText.split("").map((char, i) =>
          char === " " ? (
            <span key={i} className="h-5" aria-hidden="true" />
          ) : (
            <span key={i} className="font-display text-xl font-bold text-white drop-shadow">
              {char}
            </span>
          )
        )}
      </div>
    </div>
  );
}