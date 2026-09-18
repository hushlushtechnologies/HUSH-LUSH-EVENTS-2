export interface GalleryVideo {
  id: string;
  video: string;
}

export const journalGalleryIntro = {
  headingLines: ["The Art of Creating a Wedding", "that Feel Like You"],
  description:
    "From the atmosphere to the smallest detail, discover how thoughtful design can turn a wedding into something deeply personal.",
};

export const instagramHref = "https://www.instagram.com/hushlush_events/";

// Two rows, each independently horizontally scrollable — cards bleed
// past both container edges, matching the reference.
export const galleryRowOne: GalleryVideo[] = [
  { id: "r1-1", video: "/videos/journal/gallery-1.mp4" },
  { id: "r1-2", video: "/videos/journal/gallery-2.mp4" },
  { id: "r1-3", video: "/videos/journal/gallery-3.mp4" },
  { id: "r1-4", video: "/videos/journal/gallery-4.mp4" },
  { id: "r1-5", video: "/videos/journal/gallery-5.mp4" },
];

export const galleryRowTwo: GalleryVideo[] = [
  { id: "r2-1", video: "/videos/journal/gallery-6.mp4" },
  { id: "r2-2", video: "/videos/journal/gallery-7.mp4" },
  { id: "r2-3", video: "/videos/journal/gallery-8.mp4" },
  { id: "r2-4", video: "/videos/journal/gallery-9.mp4" },
  { id: "r2-5", video: "/videos/journal/gallery-10.mp4" },
];