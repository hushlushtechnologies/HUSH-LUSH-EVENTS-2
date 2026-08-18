export interface HeroSlide {
  id: string;
  eyebrow: string;
  headingLines: string[];
  description: string;
  image: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "unforgettable",
    eyebrow: "Made to be Remembered",
    headingLines: ["Make It", "Unforgettable"],
    description:
      "Thoughtfully Designed Events that Reflect your Story, your Style and the Moments that Matter Most.",
    image: "/images/hero/slide-1.jpg",
  },
  // Slide 2 and 3 — placeholders until you share the copy/images for them
  {
    id: "experiences",
    eyebrow: "Made to be Remembered",
    headingLines: ["WE TURN SPACES", "INTO EXPERIENCES"],
    description: "From elegant weddings to spectacular celebrations, we transform every venue with thoughtful décor, beautiful details, and a creative vision that feels uniquely yours.",
    image: "/images/hero/slide-2.png",
  },
  {
    id: "life",
    eyebrow: "Made to be Remembered",
    headingLines: ["BRING THE", " ENERGY TO LIFE"],
    description: "Live performances, music, entertainment, and unforgettable moments — carefully curated to keep your guests engaged from the first moment to the last.",
    image: "/images/hero/slide-3.jpg",
  },
];