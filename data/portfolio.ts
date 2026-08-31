export interface PortfolioFilter {
  id: string;
  label: string;
}

export const portfolioFilters: PortfolioFilter[] = [
  { id: "all", label: "All" },
  { id: "images", label: "Images" },
  { id: "video", label: "Video" },
  { id: "events", label: "Events" },
  { id: "venue", label: "Venue" },
  { id: "wedding", label: "Wedding" },
  { id: "decor-styling", label: "Decor & Styling" },
  { id: "corporate", label: "Corporate" },
  { id: "entertainment", label: "Entertainment" },
  { id: "invitation", label: "Invitation" },
  { id: "special", label: "Special" },
];

export type PortfolioSpan = "large" | "stacked" | "third" | "half";
export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  categories: string[];
  span: PortfolioSpan;
}

export const portfolioIntro = {
  headingLines: ["Our Work"],
  description:
    "A curated selection of celebrations, gatherings, and moments we've brought to life with intention, creativity, and a little Hush Lush magic.",
};

// Grouped into rows to mirror the reference's mixed layout:
// [large + stacked pair], [3 equal], [3 equal], [large + stacked pair], [3 equal], [2 equal]
export const portfolioItems: PortfolioItem[] = [
  // Row 1
  {
    id: "grand-estate",
    title: "The Grand Estate Wedding",
    subtitle: "Wedding",
    image: "/images/our-work/portfolio-1.png",
    categories: ["wedding", "images"],
    span: "large",
  },
  {
    id: "annual-gala",
    title: "Annual Gala",
    subtitle: "Corporate Gala",
    image: "/images/our-work/portfolio-2.png",
    categories: ["corporate", "images"],
    span: "stacked",
  },
  {
    id: "garden-soiree",
    title: "Garden Soirée",
    subtitle: "Private Celebration",
    image: "/images/our-work/portfolio-3.png",
    categories: ["special", "images"],
    span: "stacked",
  },

  // Row 2
  {
    id: "dinner-party",
    title: "Dinner Party",
    subtitle: "Private",
    image: "/images/our-work/portfolio-4.png",
    categories: ["special", "images"],
    span: "third",
  },
  {
    id: "product-launch",
    title: "Product Launch",
    subtitle: "Corporate",
    image: "/images/our-work/portfolio-5.png",
    categories: ["corporate", "images"],
    span: "third",
  },
  {
    id: "milestone-birthday",
    title: "Milestone Birthday",
    subtitle: "Celebration",
    image: "/images/our-work/portfolio-6.png",
    categories: ["special", "images"],
    span: "third",
  },

  // Row 3
  {
    id: "charity-fundraiser",
    title: "Charity Fundraiser",
    subtitle: "Corporate",
    image: "/images/our-work/portfolio-7.png",
    categories: ["corporate", "images"],
    span: "third",
  },
  {
    id: "rooftop-reception",
    title: "Rooftop Reception",
    subtitle: "Private",
    image: "/images/our-work/portfolio-8.png",
    categories: ["special", "images"],
    span: "third",
  },
  {
    id: "vineyard-celebration",
    title: "Vineyard Celebration",
    subtitle: "Wedding",
    image: "/images/our-work/portfolio-9.png",
    categories: ["wedding", "images"],
    span: "third",
  },

  // Row 4
  {
    id: "seaside-anniversary",
    title: "Seaside Anniversary",
    subtitle: "Celebration",
    image: "/images/our-work/portfolio-10.png",
    categories: ["special", "images"],
    span: "large",
  },
  {
    id: "fashion-show",
    title: "Fashion Show",
    subtitle: "Corporate",
    image: "/images/our-work/portfolio-11.png",
    categories: ["corporate", "images"],
    span: "stacked",
  },
  {
    id: "holiday-banquet",
    title: "Holiday Banquet",
    subtitle: "Private Celebration",
    image: "/images/our-work/portfolio-12.png",
    categories: ["special", "images"],
    span: "stacked",
  },

  // Row 5 — video
  {
    id: "wedding-film",
    title: "Wedding Film",
    subtitle: "Video · Portrait",
    image: "/images/our-work/portfolio-13.png",
    categories: ["wedding", "video"],
    span: "third",
  },
  {
    id: "behind-the-scenes",
    title: "Behind The Scenes",
    subtitle: "Video · Portrait",
    image: "/images/our-work/portfolio-14.png",
    categories: ["video"],
    span: "third",
  },
  {
    id: "event-reel",
    title: "Event Reel",
    subtitle: "Video · Portrait",
    image: "/images/our-work/portfolio-15.png",
    categories: ["events", "video"],
    span: "third",
  },

  // Row 6 — video, landscape pair
  {
    id: "cinematic-highlight",
    title: "Cinematic Highlight",
    subtitle: "Video · Landscape",
    image: "/images/our-work/portfolio-16.png",
    categories: ["wedding", "video"],
    span: "half" as PortfolioSpan,
  },
  {
    id: "drone-coverage",
    title: "Drone Coverage",
    subtitle: "Video · Landscape",
    image: "/images/our-work/portfolio-17.png",
    categories: ["venue", "video"],
    span: "half" as PortfolioSpan,
  },
];
