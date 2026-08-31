import { OurWorkGallery } from "@/components/sections/OurWorkGallery/OurWorkGallery";
import { OurWorkHero } from "@/components/sections/OurWorkHero/OurWorkHero";
import { OurWorkPortfolio } from "@/components/sections/OurWorkPortfolio/OurWorkPortfolio";

export default function OurWorkPage() {
  return (
    <>
      <OurWorkHero />
      <OurWorkGallery />
      <OurWorkPortfolio />
    </>
  );
}