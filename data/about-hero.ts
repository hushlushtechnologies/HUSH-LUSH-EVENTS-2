export interface GalleryVideo {
  id: string;
  thumbnail: string;
}

export const aboutHeroContent = {
  headingLines: ["Behind Every", "Unforgettable", "Moment"],
  description:
    "Behind every beautiful celebration is a story, a vision and a team dedicated to bringing it to life.",
  heroImage: "/images/about/hero-fountain.jpg",
  galleryLabel: "Short Gallery",
  galleryDescription: "A glimpse into the moments, details, and creativity behind Hush Lush.",
  galleryVideos: [
    { id: "gallery-1", thumbnail: "/images/about/gallery-thumb-1.jpg" },
    { id: "gallery-2", thumbnail: "/images/about/gallery-thumb-2.jpg" },
  ] satisfies GalleryVideo[],
  testimonial: {
    prefix: "Loved by the",
    highlight: "People We Create",
    suffix: "For",
    avatarsImage: "/images/icons/avatarsImage.svg",
    reviewLabel: "10K Reviews",
  },
};