import { AboutHero } from "@/components/AboutHero/AboutHero";
import { AboutBeliefs } from "@/components/sections/AboutBeliefs/AboutBeliefs";
import { AboutPhilosophy } from "@/components/sections/AboutPhilosophy/AboutPhilosophy";
import { AboutProcess } from "@/components/sections/AboutProcess/AboutProcess";
import { AboutStatsCard } from "@/components/sections/AboutStats/AboutStatsCard";
import { AboutStory } from "@/components/sections/AboutStory/AboutStory";
import { PromoBanner } from "@/components/sections/PromoBanner/PromoBanner";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Hush Lush Events and learn how we approach weddings, corporate events, and private celebrations.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Hush Lush Events",
    description:
      "Meet the team behind Hush Lush Events and learn how we approach weddings, corporate events, and private celebrations.",
    url: "https://www.hushlushevents.com/about",
  },
};

 

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStatsCard />
      <AboutStory />
      <PromoBanner />
       <AboutBeliefs />
      <AboutProcess />
        <AboutPhilosophy />
    </>
  );
}