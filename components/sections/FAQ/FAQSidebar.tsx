 import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { socialLinks } from "@/data/socials";

export function FAQSidebar() {
  return (
    <div className="flex flex-col gap-8">
      <div className="relative h-14 w-44">
        <Image src="/images/logo-dark.svg" alt="Hush Lush Events" fill className="object-contain" />
      </div>

      <div
        className="rounded-2xl border border-dark-border/40 p-3"
        style={{ background: "rgba(122, 70, 20, 0.1)" }}
      >
        <ul className="flex flex-col gap-1">
          {socialLinks.map((social) => (
            <li key={social.id}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-dark-border/20"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-dark-border/50 text-dark-text-primary">
                  <SocialIcon id={social.id} className="h-4 w-4" />
                </span>
                <span className="font-body text-sm text-dark-text-primary">{social.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}