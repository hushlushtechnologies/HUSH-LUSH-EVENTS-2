 
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection";
import { GalleryShowcase } from "@/components/sections/GalleryShowcase/GalleryShowcase";
import { Hero } from "@/components/sections/Hero/Hero";
import { IntroVideo } from "@/components/sections/IntroVideo/IntroVideo";
import { OurImpact } from "@/components/sections/OurImpact/OurImpact";
import { OurProcess } from "@/components/sections/OurProcess/OurProcess";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase/ServicesShowcase";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { WhatWeCelebrate } from "@/components/sections/WhatWeCelebrate/WhatWeCelebrate";
import Image from "next/image";

export default function Home() {
  return (
     <>
     <Hero/>
     <ExperienceSection  />
      <WhatWeCelebrate />
      <OurImpact />
      <ServicesShowcase />
      <OurProcess />
      <Testimonials />
       <GalleryShowcase />
      
     </>
  );
}
