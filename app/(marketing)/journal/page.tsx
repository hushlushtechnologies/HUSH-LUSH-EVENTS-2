import type { Metadata } from "next";
import { JournalHero } from "@/components/JournalHero/JournalHero";
import { JournalArticles } from "@/components/sections/JournalArticles/JournalArticles";
import { JournalGallery } from "@/components/sections/JournalGallery/JournalGallery";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Stories, ideas and behind-the-scenes moments from the weddings and events we've brought to life at Hush Lush Events.",
  alternates: {
    canonical: "/journal",
  },
  openGraph: {
    title: "Journal | Hush Lush Events",
    description:
      "Stories, ideas and behind-the-scenes moments from the weddings and events we've brought to life at Hush Lush Events.",
    url: "https://www.hushlushevents.com/journal",
  },
};

export default function JournalPage() {
  return (
    <>
      <JournalHero />
      <JournalGallery />
      <JournalArticles />
    </>
  );
}