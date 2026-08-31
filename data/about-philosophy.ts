 export interface PhilosophyBlock {
  id: string;
  heading: string;
  description: string;
}

export interface PhilosophyPoint {
  id: string;
  title: string;
  description: string;
}

export const philosophyIntro = {
  eyebrow: "Our Story & Philosophy",
};

export const philosophyBlocks: PhilosophyBlock[] = [
  {
    id: "every-design",
    heading: "Every Design has a Story",
    description:
      "At Hush Lush, we believe every design tells a story — a reflection of passion, creativity, and the subtle details that make each piece truly unique. Our journey is about capturing emotions and transforming them into experiences.",
  },
  {
    id: "first-idea",
    heading: "From the First Idea to Final Detail",
    description:
      "From the first sketch to the final stitch, every step of our process is infused with care, precision, and a commitment to excellence.",
  },
];

export const philosophyPoints: PhilosophyPoint[] = [
  { id: "personal", title: "Personal", description: "Every creation should feel like it belongs to you." },
  {
    id: "impeccable",
    title: "Impeccable",
    description: "Every detail deserves care, precision and craftsmanship.",
  },
  {
    id: "extraordinary",
    title: "Extraordinary",
    description: "Every experience should leave you feeling something.",
  },
];

// Images tied to LEFT column text (block 2 — "From the First Idea to Final Detail")
export const leftColumnImages = [
  { id: "left-img-1", src: "/images/about/philosophy-left-1.jpg" },
  { id: "left-img-2", src: "/images/about/philosophy-left-2.jpg" },
];

// Images tied to RIGHT column
export const rightColumnLeftImages = [
  { id: "right-img-1", src: "/images/about/philosophy-right-1.jpg", aspect: "aspect-[4/3]" },
  { id: "right-img-2", src: "/images/about/philosophy-right-2.jpg", aspect: "aspect-[4/3]" },
  { id: "right-img-3", src: "/images/about/philosophy-right-3.jpg", aspect: "aspect-[16/10]" },
  { id: "right-img-3", src: "/images/about/philosophy-right-4.jpg", aspect: "aspect-[16/10]" },
];

export const rightColumnTallImage = "/images/about/philosophy-right-3.jpg";

export const backgroundWordmark = "VISION.MOMENT.STORY.";