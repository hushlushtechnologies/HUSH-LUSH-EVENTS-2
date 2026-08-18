import Image from "next/image";
import Link from "next/link";
import type { ServiceShowcaseItem } from "@/data/services-showcase";

export function ServiceShowcaseCard({ title, description, image, ctaLabel, href }: ServiceShowcaseItem) {
  return (
    <div className="w-full max-w-[360px] rounded-4xl border border-light-primary/30 bg-card shadow-light-inner p-3">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="360px"
        />
      </div>

      <div className="px-2 pb-2 pt-4">
        <h3 className="font-display text-xl  ">{title}</h3>
        <p className="font-body mt-2 text-sm leading-relaxed text-light-secondary">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="h-3 w-3 rounded-full bg-dot-gradient" />
          <Link
            href={href}
            className="font-body rounded-full border border-dark-secondary px-4 py-1.5 text-xs font-medium text-dark-secondary  transition-colors hover:bg-light-primary hover:text-white"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}