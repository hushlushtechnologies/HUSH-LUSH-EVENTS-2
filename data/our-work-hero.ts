export interface ExperienceCard {
  id: string;
  thumbnail: string;
}

export const ourWorkHeroContent = {
  headingLines: [
    { text: "Moments", accent: true },
    { text: "We've Made", accent: false },
    { text: "Matter.", accent: false },
  ],
  description:
    "A collection of celebrations, experiences, and details brought to life with creativity, intention, and a little Hush Lush magic.",
  backgroundImage: "/images/our-work/hero-background.png",
  dancerImage: "/images/our-work/hero-dancer.png",
  experienceLabel: "Some Experience",
  experienceCards: [
    { id: "exp-1", thumbnail: "/images/our-work/experience-1.jpg" },
    { id: "exp-2", thumbnail: "/images/our-work/experience-2.jpg" },
    { id: "exp-3", thumbnail: "/images/our-work/experience-3.jpg" },
    { id: "exp-4", thumbnail: "/images/our-work/experience-4.jpg" },
    { id: "exp-5", thumbnail: "/images/our-work/experience-5.jpg" },
  ] satisfies ExperienceCard[],
};