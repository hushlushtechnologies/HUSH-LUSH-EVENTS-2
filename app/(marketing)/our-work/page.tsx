import type { Metadata } from "next";
import { OurWorkGallery } from "@/components/sections/OurWorkGallery/OurWorkGallery";
import { OurWorkHero } from "@/components/sections/OurWorkHero/OurWorkHero";
import { OurWorkPortfolio } from "@/components/sections/OurWorkPortfolio/OurWorkPortfolio";
import { PromoBanner } from "@/components/sections/PromoBanner/PromoBanner";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "A curated selection of celebrations, gatherings and moments Hush Lush Events has brought to life with intention, creativity and a little magic.",
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    title: "Our Work | Hush Lush Events",
    description:
      "A curated selection of celebrations, gatherings and moments Hush Lush Events has brought to life with intention, creativity and a little magic.",
    url: "https://www.hushlushevents.com/our-work",
  },
};

export default function OurWorkPage() {
  return (
    <>
      <OurWorkHero />
      <OurWorkGallery />
      <PromoBanner />
      <OurWorkPortfolio />
    </>
  );
}