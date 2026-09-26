// import Image from "next/image";
// import type { PortfolioItem } from "@/data/portfolio";

// const spanClasses: Record<string, string> = {
//   large: "aspect-[16/11]",
//   stacked: "h-full",
//   third: "aspect-[4/3]",
// };

// interface PortfolioCardProps extends PortfolioItem {
//   className?: string;
//   onClick?: () => void;
// }

// export function PortfolioCard({ title, subtitle, image, span, className, onClick }: PortfolioCardProps) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`group relative block w-full cursor-pointer overflow-hidden rounded-2xl text-left shadow-sm transition-shadow duration-500 hover:shadow-xl ${className ?? spanClasses[span]}`}
//     >
//       <Image
//         src={image}
//         alt={title}
//         fill
//         className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
//         sizes="(min-width: 1024px) 500px, 100vw"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
//       <div className="absolute bottom-0 left-0 p-4">
//         {/* <p className="font-display text-lg text-white">{title}</p>
//         <p className="font-body text-sm text-white/80">{subtitle}</p> */}
//       </div>
//     </button>
//   );
// }

 import Image from "next/image";
import type { PortfolioItem } from "@/data/portfolio";

function getAspectClass(span: PortfolioItem["span"], orientation: PortfolioItem["orientation"]) {
  const isPortrait = orientation === "portrait";

  switch (span) {
    case "large":
      return isPortrait ? "aspect-[3/4]" : "aspect-[4/3] lg:aspect-[16/11]";
    case "third":
      return isPortrait ? "aspect-[3/4]" : "aspect-[4/3]";
    case "stacked":
    default:
      return "h-full";
  }
}

function getSizes(span: PortfolioItem["span"]) {
  switch (span) {
    case "large":
      return "(min-width: 1024px) 900px, 100vw";
    case "stacked":
      return "(min-width: 1024px) 430px, 100vw";
    case "third":
    default:
      return "(min-width: 1024px) 450px, (min-width: 640px) 50vw, 100vw";
  }
}

interface PortfolioCardProps extends PortfolioItem {
  className?: string;
  onClick?: () => void;
}

export function PortfolioCard({ title, subtitle, image, span, orientation, className, onClick }: PortfolioCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative block w-full cursor-pointer overflow-hidden rounded-xl text-left shadow-sm transition-shadow duration-500 hover:shadow-xl sm:rounded-2xl ${className ?? getAspectClass(span, orientation)}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        quality={90}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        sizes={getSizes(span)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 p-4">
        {/* <p className="font-display text-lg text-white">{title}</p>
        <p className="font-body text-sm text-white/80">{subtitle}</p> */}
      </div>
    </button>
  );
}