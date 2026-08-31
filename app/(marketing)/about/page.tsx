import { AboutHero } from "@/components/AboutHero/AboutHero";
import { AboutBeliefs } from "@/components/sections/AboutBeliefs/AboutBeliefs";
import { AboutPhilosophy } from "@/components/sections/AboutPhilosophy/AboutPhilosophy";
import { AboutProcess } from "@/components/sections/AboutProcess/AboutProcess";
import { AboutStatsCard } from "@/components/sections/AboutStats/AboutStatsCard";
import { AboutStory } from "@/components/sections/AboutStory/AboutStory";

 

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStatsCard />
      <AboutStory />
       <AboutBeliefs />
      <AboutProcess />
        <AboutPhilosophy />
    </>
  );
}