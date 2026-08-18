 import Image from "next/image";
import type { Celebration } from "@/data/celebrations";

export function CelebrationCard({ title, description, image }: Celebration) {
  return (
    <div className="flex h-full w-[280px] shrink-0 flex-col rounded-4xl border border-light-primary bg-gradient p-5 sm:w-[320px]">
   <span className="mx-auto h-3 w-3 shrink-0 rounded-full bg-[linear-gradient(90deg,#EBE411_0%,#D68306_100%)]" />

      <h3 className="font-display mt-3 text-xl font-semibold  ">
        {title}
      </h3>
      <p className="font-body mt-2 text-sm leading-relaxed text-light-secondary line-clamp-4">
        {description}
      </p>

      <div className="relative mt-4 aspect-[4/3] w-full flex-1 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 320px, 280px"
        />
      </div>
    </div>
  );
}