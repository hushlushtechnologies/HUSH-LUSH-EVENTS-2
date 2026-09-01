 import Image from "next/image";
import type { PortfolioItem } from "@/data/portfolio";

const spanClasses: Record<string, string> = {
  large: "aspect-[16/11]",
  stacked: "h-full",
  third: "aspect-[4/3]",
  half: "aspect-[16/9]",
};

interface PortfolioCardProps extends PortfolioItem {
  /** Overrides the default aspect-ratio class for this span value (e.g. a taller reel row). */
  className?: string;
}

export function PortfolioCard({ title, subtitle, image, span, className }: PortfolioCardProps) {
  return (
    <div className={`group relative w-full overflow-hidden rounded-2xl ${className ?? spanClasses[span]}`}>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(min-width: 1024px) 500px, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4">
        <p className="font-display text-lg text-white">{title}</p>
        <p className="font-body text-sm text-white/80">{subtitle}</p>
      </div>
    </div>
  );
}