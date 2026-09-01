import { FAQSection } from "@/components/sections/FAQ/FAQSection";
import { GalleryShowcase } from "@/components/sections/GalleryShowcase/GalleryShowcase";
import { PlanYourEventHero } from "@/components/sections/PlanYourEvent/PlanYourEventHero";

export default function PlanYourEventPage() {
  return (
    <>
      <PlanYourEventHero />
       <FAQSection />
         <GalleryShowcase />
    </>
  );
}