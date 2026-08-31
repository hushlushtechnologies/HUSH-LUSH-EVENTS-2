import Image from "next/image";
import type { ArticleDetail } from "@/data/journal-articles";

export function ArticleDetailBody({ heroImage, title, body }: ArticleDetail) {
  return (
    <div>
      <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 800px, 100vw"
        />
      </div>

      <div className="mt-10 flex flex-col gap-5">
        {body.map((block, i) =>
          block.type === "heading" ? (
            <h2 key={i} className="font-display mt-2 text-2xl text-light-primary">
              {block.text}
            </h2>
          ) : (
            <p key={i} className="font-body text-base leading-relaxed text-light-secondary">
              {block.text}
            </p>
          )
        )}
      </div>
    </div>
  );
}