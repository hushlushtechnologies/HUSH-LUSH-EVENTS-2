import Link from "next/link";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { socialLinks } from "@/data/socials";
import type { ArticleDetail } from "@/data/journal-articles";

export function ArticleDetailHeader({ title, lastUpdated, readTime }: ArticleDetail) {
  return (
    <div>
      <h1 className="font-display text-4xl leading-tight text-light-primary md:text-5xl">
        {title}
      </h1>

      <p className="font-body mt-4 text-sm text-light-secondary">Last updated: {lastUpdated}</p>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-light-border pt-6">
        <span className="font-display text-lg text-light-primary">{readTime}</span>

        <div className="flex items-center gap-3">
          <span className="font-body text-xs font-semibold tracking-[0.15em] text-light-primary">
            FOLLOW OUR SOCIAL MEDIA
          </span>
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-light-card text-light-primary transition-colors hover:bg-light-primary hover:text-white"
              >
                <SocialIcon id={social.id} className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}