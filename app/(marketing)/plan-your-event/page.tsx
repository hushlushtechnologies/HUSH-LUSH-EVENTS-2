import type { Metadata } from "next";
import { FAQSection } from "@/components/sections/FAQ/FAQSection";
import { GalleryShowcase } from "@/components/sections/GalleryShowcase/GalleryShowcase";
import { PlanYourEventHero } from "@/components/sections/PlanYourEvent/PlanYourEventHero";

export const metadata: Metadata = {
  title: "Plan Your Event",
  description:
    "Ready to start planning? Tell us about your vision and let Hush Lush Events bring your event to life — from the first idea to the final detail.",
  alternates: {
    canonical: "/plan-your-event",
  },
  openGraph: {
    title: "Plan Your Event | Hush Lush Events",
    description:
      "Ready to start planning? Tell us about your vision and let Hush Lush Events bring your event to life — from the first idea to the final detail.",
    url: "https://www.hushlushevents.com/plan-your-event",
  },
};

export default function PlanYourEventPage() {
  return (
    <>
      <PlanYourEventHero />
      <FAQSection />
      <GalleryShowcase />
    </>
  );
}