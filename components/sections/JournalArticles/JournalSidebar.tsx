"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { socialLinks } from "@/data/socials";
import { sidebarContent } from "@/data/journal-articles";

export function JournalSidebar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const {
    subscribeText,
    followLabel,
    telegramHeading,
    telegramText,
    telegramBullets,
    telegramCta,
    telegramHref,
    telegramImage,
  } = sidebarContent;

  return (
    <aside className="flex flex-col gap-8">
      {/* Subscribe card */}
      <div className="rounded-2xl border border-light-border p-6">
        <div className="relative h-8 w-28">
          <Image src="/images/logo.svg" alt="Hush Lush Events" fill className="object-contain" />
        </div>

        <p className="font-body mt-4 text-sm leading-relaxed text-light-secondary">{subscribeText}</p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex flex-col gap-3">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            className="font-body w-full rounded-lg border border-light-border bg-light-card px-4 py-2.5 text-sm text-light-primary placeholder:text-light-muted focus:border-light-primary/60 focus:outline-none"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            className="font-body w-full rounded-lg border border-light-border bg-light-card px-4 py-2.5 text-sm text-light-primary placeholder:text-light-muted focus:border-light-primary/60 focus:outline-none"
          />
          <button
            type="submit"
            className="font-body mt-1 w-full rounded-full border border-light-primary/60 py-2.5 text-sm font-medium text-light-brand transition-colors hover:bg-light-primary hover:text-white"
          >
            Subscribe
          </button>
        </form>

        <div className="mt-6 flex justify-center gap-3">
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
        <p className="font-body mt-3 text-center text-xs font-semibold tracking-wide text-light-primary">
          {followLabel.toUpperCase()}
        </p>
      </div>

      {/* Telegram promo card */}
      <div>
        <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full">
          <Image src={telegramImage} alt="" fill className="object-cover" sizes="112px" />
        </div>

        <h3 className="font-display mt-5 text-center text-2xl leading-snug text-light-primary">
          {telegramHeading}
        </h3>

        <p className="font-body mt-3 text-center text-sm leading-relaxed text-light-secondary">
          {telegramText}
        </p>

        <ul className="mt-3 flex flex-col gap-1">
          {telegramBullets.map((bullet) => (
            <li key={bullet} className="font-body flex items-center gap-2 text-sm text-light-primary">
              <span className="h-1 w-1 rounded-full bg-light-primary" />
              {bullet}
            </li>
          ))}
        </ul>

        <Link
          href={telegramHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-light-primary/60 py-2.5 text-sm font-medium text-light-brand transition-colors hover:bg-light-primary hover:text-white"
        >
          {telegramCta}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7L12 2L8 12L6 8L2 7Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </aside>
  );
}