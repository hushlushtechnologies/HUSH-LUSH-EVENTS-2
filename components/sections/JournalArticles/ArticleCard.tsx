import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/journal-articles";

export function ArticleCard({ id, image, date, title, excerpt }: Article) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <Image src={image} alt={title} fill className="object-cover" sizes="(min-width: 1024px) 400px, 100vw" />
      </div>

      <p className="font-body mt-3 text-xs font-medium tracking-wide text-light-brand">{date}</p>

      <h3 className="font-display mt-2 text-lg leading-snug text-light-primary">{title}</h3>

      <p className="font-body mt-2 text-sm leading-relaxed text-light-secondary line-clamp-3">
        {excerpt}
      </p>

      <Link
        href={`/journal/${id}`}
        className="font-body mt-4 w-fit rounded-full border border-light-primary/60 px-5 py-1.5 text-sm font-medium text-light-brand transition-colors hover:bg-light-primary hover:text-white"
      >
        Read More
      </Link>
    </div>
  );
}