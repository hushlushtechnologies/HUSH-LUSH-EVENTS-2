import { JournalHero } from "@/components/JournalHero/JournalHero";
import { JournalArticles } from "@/components/sections/JournalArticles/JournalArticles";
import { JournalGallery } from "@/components/sections/JournalGallery/JournalGallery";

 

export default function JournalPage() {
  return (
    <>
      <JournalHero />
      <JournalGallery />
        <JournalArticles />
    </>
  );
}