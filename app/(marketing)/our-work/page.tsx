import { OurWorkGallery } from "@/components/sections/OurWorkGallery/OurWorkGallery";
import { OurWorkHero } from "@/components/sections/OurWorkHero/OurWorkHero";
import { OurWorkPortfolio } from "@/components/sections/OurWorkPortfolio/OurWorkPortfolio";
import { PromoBanner } from "@/components/sections/PromoBanner/PromoBanner";

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