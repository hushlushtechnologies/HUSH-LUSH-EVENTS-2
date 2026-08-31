 import { backgroundWordmark } from "@/data/about-philosophy";

export function BackgroundWordmark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none overflow-hidden whitespace-nowrap text-center"
    >
      <span
        className="font-display bg-clip-text text-[6vw] font-bold leading-none text-transparent"
        style={{ backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #D4D4D4 100%)" }}
      >
        {backgroundWordmark}
      </span>
    </div>
  );
}