 import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialItemCard({ quote, avatar, name, eventType, location }: Testimonial) {
  return (
    <div className="mx-auto w-full max-w-[360px] rounded-2xl border border-light-primary/30 shadow-light-inner p-5">
      <Image
        src="/images/icons/quote-mark.svg"
        alt=""
        width={24}
        height={18}
      />

      <p className="font-body mt-3 text-sm font-medium leading-relaxed text-light-secondary">{quote}</p>

      <div className="mt-5 flex items-center gap-3">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
          <Image src={avatar} alt="" fill className="object-cover" />
        </div>
        <div>
          <p className="font-body text-sm font-medium text-light-primary">{name}</p>
          <p className="font-body text-xs text-light-muted">
            {eventType} · {location}
          </p>
        </div>
      </div>
    </div>
  );
}