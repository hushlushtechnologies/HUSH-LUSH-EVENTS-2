export interface GalleryImage {
  id: string;
  src: string;
}

export const journalGalleryIntro = {
  headingLines: ["The Art of Creating a Wedding", "that Feel Like You"],
  description:
    "From the atmosphere to the smallest detail, discover how thoughtful design can turn a wedding into something deeply personal.",
};

export const instagramHref = "https://instagram.com/hushlushevents";

// Two rows, each independently horizontally scrollable — cards bleed
// past both container edges, matching the reference.
export const galleryRowOne: GalleryImage[] = [
  { id: "r1-1", src: "/images/journal/gallery-1.jpg" },
  { id: "r1-2", src: "/images/journal/gallery-2.jpg" },
  { id: "r1-3", src: "/images/journal/gallery-3.jpg" },
  { id: "r1-4", src: "/images/journal/gallery-4.jpg" },
  { id: "r1-5", src: "/images/journal/gallery-5.jpg" },
];

export const galleryRowTwo: GalleryImage[] = [
  { id: "r2-1", src: "/images/journal/gallery-1.jpg" },
  { id: "r2-2", src: "/images/journal/gallery-2.jpg" },
  { id: "r2-3", src: "/images/journal/gallery-3.jpg" },
  { id: "r2-4", src: "/images/journal/gallery-4.jpg" },
  { id: "r2-5", src: "/images/journal/gallery-5.jpg" },
];