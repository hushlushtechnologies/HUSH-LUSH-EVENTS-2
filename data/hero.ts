 export interface HeroSlide {
  id: string;
  eyebrow: string;
  headingLines: string[];
  description: string;
  video: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "unforgettable",
    eyebrow: "Made to be Remembered",
    headingLines: ["Make It", "Unforgettable"],
    description:
      "Thoughtfully Designed Events that Reflect your Story, your Style and the Moments that Matter Most.",
    video: "/videos/hero/slide-1.mp4",
  },
  {
    id: "experiences",
    eyebrow: "Made to be Remembered",
    headingLines: ["WE TURN SPACES", "INTO EXPERIENCES"],
    description:
      "From elegant weddings to spectacular celebrations, we transform every venue with thoughtful décor, beautiful details, and a creative vision that feels uniquely yours.",
    video: "/videos/hero/slide-2.mp4",
  },
  {
    id: "life",
    eyebrow: "Made to be Remembered",
    headingLines: ["BRING THE", " ENERGY TO LIFE"],
    description:
      "Live performances, music, entertainment, and unforgettable moments — carefully curated to keep your guests engaged from the first moment to the last.",
    video: "/videos/hero/slide-3.mp4",
  },
];