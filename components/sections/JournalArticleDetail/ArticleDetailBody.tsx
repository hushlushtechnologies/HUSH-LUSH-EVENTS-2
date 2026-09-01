 import Image from "next/image";
import type { ArticleDetail } from "@/data/journal-articles";
import { JournalSidebar } from "../JournalArticles/JournalSidebar";

export function ArticleDetailBody({ heroImage, title, body }: ArticleDetail) {
  return (
    <div>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl sm:aspect-[21/9] lg:aspect-[30/9]">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 800px, 100vw"
        />
      </div>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-5 lg:mt-10">
          {body.map((block, i) =>
            block.type === "heading" ? (
              <h2 key={i} className="font-display mt-2 text-xl font-medium sm:text-2xl">
                {block.text}
              </h2>
            ) : (
              <p
                key={i}
                className="font-body text-sm leading-relaxed text-light-secondary sm:text-base"
              >
                {block.text}
              </p>
            ),
          )}
        </div>
        <div className="lg:w-[320px] lg:shrink-0">
          <JournalSidebar />
        </div>
      </div>
    </div>
  );
}