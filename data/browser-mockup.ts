export interface BrowserTab {
  title: string;
  favicon: string;
  active: boolean;
}

export const browserTabs: BrowserTab[] = [
  { title: "Hush Lush Technologies", favicon: "/images/browser-icons/favicon-tech.svg", active: false },
  { title: "Hush Lush Events", favicon: "/images/browser-icons/favicon-tech.svg", active: true },
  { title: "Afaq Al Khaleej Group of Companies", favicon: "/images/browser-icons/favicon-afaq.svg", active: false },
];

export const addressBarText = "Search Hush Lush Events or type a URL";

 export const experienceContent = {
  headingLines: ["An event lasts a day.", "An experience stays with you."],
  description:
    "At Hush Lush, we bring together creativity, elegance and precise planning to turn your vision into moments worth remembering.",
  videoPoster: "/images/intro/video-poster.jpg",
  testimonial: {
    icon: "/images/icons/brand-mark.svg",
    prefix: "Loved by the",
    highlight: "People We Create",
    suffix: "For",
    avatarsImage: "/images/icons/avatarsImage.svg",
    description:
      "From unforgettable weddings to extraordinary celebrations, our clients trust us to turn their vision into moments worth remembering.",
    reviewLabel: "10K Reviews",
  },
};