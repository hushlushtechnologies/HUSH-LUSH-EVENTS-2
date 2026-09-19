export interface ExperienceCard {
  id: string;
  /** Local video file — takes priority over youtubeId when both are present. */
  video?: string;
  youtubeId?: string;
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
    { id: "exp-1", video: "/videos/our-work/experiences-1.mp4" },
    { id: "exp-2", video: "/videos/our-work/experiences-2.mp4" },
    { id: "exp-3", video: "/videos/our-work/experiences-3.mp4" },
    { id: "exp-4", video: "/videos/our-work/experiences-4.mp4" },
    { id: "exp-5", video: "/videos/our-work/experiences-5.mp4" },
  ] satisfies ExperienceCard[],
};