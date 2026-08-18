export interface Belief {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const beliefs: Belief[] = [
  {
    id: "imagination",
    title: "Imagination",
    description: "Think beyond the expected.",
    icon: "/images/icons/belief-imagination.svg",
  },
  {
    id: "intention",
    title: "Intention",
    description: "Every detail has a reason.",
    icon: "/images/icons/belief-intention.svg",
  },
  {
    id: "precision",
    title: "Precision",
    description: "Make extraordinary feel effortless.",
    icon: "/images/icons/belief-precision.svg",
  },
  {
    id: "emotion",
    title: "Emotion",
    description: "Create something people feel.",
    icon: "/images/icons/belief-emotion.svg",
  },
];

export const beliefIntro = {
  eyebrow: "Our Belief",
  headingLines: ["Everything Starts with a", "Story."],
  description:
    "At Hush Lush Events, we believe those moments deserve more than ordinary planning. They deserve imagination, intention, and a team that cares about every detail.",
  image: "/images/about/story-lanterns.jpg",
};