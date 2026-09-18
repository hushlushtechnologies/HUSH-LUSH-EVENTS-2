export interface GalleryVideo {
  id: string;
  video: string;
}

export const aboutHeroContent = {
  headingLines: ["Behind Every", "Unforgettable", "Moment"],
  description:
    "Behind every beautiful celebration is a story, a vision and a team dedicated to bringing it to life.",
  heroImage: "/images/about/hero-fountain.jpg",
  galleryLabel: "Short Gallery",
  galleryDescription: "A glimpse into the moments, details, and creativity behind Hush Lush.",
  galleryVideos: [
    { id: "gallery-1", video: "/videos/journal/gallery-8.mp4" },
    { id: "gallery-2", video: "/videos/journal/gallery-3.mp4" },
  ] satisfies GalleryVideo[],
  testimonial: {
    prefix: "Loved by the",
    highlight: "People We Create",
    suffix: "For",
    avatarsImage: "/images/icons/avatarsImage.svg",
    reviewLabel: "10K Reviews",
  },
};