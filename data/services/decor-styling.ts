import type { BrowserTab } from "@/data/browser-mockup";
import type { FeatureGridItem } from "@/components/ui/ServiceFeatures";
import type { PortfolioItem } from "@/data/portfolio";

export const decorStylingHero = {
  number: "04",
  label: "Decor & Styling",
  headingHighlight: "Set the Mood.",
  headingRest: "Create the Moment.",
  description:
    "From intimate details to complete venue transformations, we create visual environments that capture the feeling, personality and story behind every celebration.",
  primaryCta: "Style Your Events",
  secondaryCta: "Explore our Work",
  verticalWord: "DECOR & STYLING",
  images: {
    main: "/images/services/decor-styling/hero-chandelier.jpg",
    circle: "/images/services/decor-styling/hero-balloons.jpg",
    small: "/images/services/decor-styling/hero-tablescape.jpg",
  },
};




// ── Experience section content (browser-mockup section) ──────────

export const decorStylingBrowserTabs: BrowserTab[] = [
  { title: "Hush Lush Events", favicon: "/images/browser-icons/favicon-events.svg", active: false },
  { title: "Decor & Styling", favicon: "/images/browser-icons/favicon-tech.svg", active: true },
  { title: "Afaq Al Khaleej Group of Companies", favicon: "/images/browser-icons/favicon-afaq.svg", active: false },
];

// This service's screenshot shows a google.com/search address bar,
// unlike every other service page's "Search Hush Lush Events or type a URL".
export const decorStylingAddressText = "google.com/search";

export const decorStylingExperienceContent = {
  headingLines: ["Every Event", "Has a Look"],
  description:
    "Great styling isn't about adding more. It's about creating a visual language where every element belongs.",
  videoPoster: "/images/services/decor-styling/experience-video-poster.jpg",
  testimonial: {
    icon: "/images/icons/brand-mark.svg",
    prefix: "",
    highlight: "",
    suffix: "",
    heartIcon: "",
    description:
      "We translate your personality, occasion and vision into a considered aesthetic—one that feels cohesive from the first impression to the smallest detail.",
    avatarsImage: "/images/icons/avatarsImage.svg",
    reviewLabel: "10K Reviews",
  },
};

 

  // ── Features section content ──────────────────────────────────────

  export const decorStylingFeaturesHeading = ["Set the Mood.", "Create the Moment."];

  export const decorStylingFeaturesFooterLabel = "Perfect Decor";

  export const decorStylingFeatureItems: FeatureGridItem[] = [
    // Column 1, rows 1–2 — tall image (reusing Concept & Creative's photo, no caption here)
    {
      id: "tall-visual",
      image: "/images/services/decor-styling/feature-concept.jpg",
      colStart: 1,
      colSpan: 1,
      rowStart: 1,
      rowSpan: 2,
    },
    // Column 2, row 1 — no caption (reusing Floral Design's photo)
    {
      id: "uncaptioned-1",
      image: "/images/services/decor-styling/feature-floral.jpg",
      colStart: 2,
      colSpan: 1,
      rowStart: 1,
      rowSpan: 1,
    },
    // Column 2, row 2 — no caption (reusing Stage & Backdrops' photo)
    {
      id: "uncaptioned-2",
      image: "/images/services/decor-styling/feature-stage.jpg",
      colStart: 2,
      colSpan: 1,
      rowStart: 2,
      rowSpan: 1,
    },
    // Column 1, row 3 — Concept & Creative
    {
      id: "concept-creative",
      image: "/images/services/decor-styling/feature-concepts.jpg",
      title: "Concept & Creative",
      description: "Developing the overall direction, mood and personality of your celebration.",
      colStart: 1,
      colSpan: 1,
      rowStart: 3,
      rowSpan: 1,
    },
    // Column 2, row 3 — Floral Design
    {
      id: "floral-design",
      image: "/images/services/decor-styling/feature-floral.jpg",
      title: "Floral Design",
      description:
        "Creating floral arrangements, installations and botanical details that complement the concept.",
      colStart: 2,
      colSpan: 1,
      rowStart: 3,
      rowSpan: 1,
    },
    // Column 3, row 1 — Stage & Backdrops
    {
      id: "stage-backdrops",
      image: "/images/services/decor-styling/feature-stage.jpg",
      title: "Stage & Backdrops",
      description: "Creating focal points, ceremony structures, stages and statement installations.",
      colStart: 3,
      colSpan: 1,
      rowStart: 1,
      rowSpan: 1,
    },
    // Column 4, row 1 — Lighting
    {
      id: "lighting",
      image: "/images/services/decor-styling/feature-lighting.jpg",
      title: "Lighting",
      description: "Using ambient, architectural and decorative lighting to shape the atmosphere.",
      colStart: 4,
      colSpan: 1,
      rowStart: 1,
      rowSpan: 1,
    },
    // Column 3, row 2 — Venue Transformation
    {
      id: "venue-transformation",
      image: "/images/services/decor-styling/feature-transformation.jpg",
      title: "Venue Transformation",
      description: "Turning existing spaces into environments that feel completely different.",
      colStart: 3,
      colSpan: 1,
      rowStart: 2,
      rowSpan: 1,
    },
    // Column 4, row 2 — Installation
    {
      id: "installation",
      image: "/images/services/decor-styling/feature-installation.jpg",
      title: "Installation",
      description: "Managing the setup, placement and final styling of every visual element.",
      colStart: 4,
      colSpan: 1,
      rowStart: 2,
      rowSpan: 1,
    },
  ];

 

// ── Portfolio section content ──────────────────────────────────────

export const decorStylingPortfolioHeading = ["Our Work"];

export const decorStylingPortfolioDescription =
  "A curated selection of celebrations, gatherings, and moments we've brought to life with intention, creativity, and a little Hush Lush magic.";

export const decorStylingPortfolioItems: PortfolioItem[] = [
  {
    id: "grand-estate-wedding",
    title: "The Grand Estate Wedding",
    subtitle: "Venue",
    image: "/images/services/decor-styling/portfolio-1.jpg",
    categories: ["decor-styling"],
    span: "large",
  },
  {
    id: "annual-gala",
    title: "Annual Gala",
    subtitle: "Venue",
    image: "/images/services/decor-styling/portfolio-2.jpg",
    categories: ["decor-styling"],
    span: "stacked",
  },
  {
    id: "garden-soiree",
    title: "Garden Soirée",
    subtitle: "Venue",
    image: "/images/services/decor-styling/portfolio-3.jpg",
    categories: ["decor-styling"],
    span: "stacked",
  },
  {
    id: "dinner-party",
    title: "Dinner Party",
    subtitle: "Venue",
    image: "/images/services/decor-styling/portfolio-4.jpg",
    categories: ["decor-styling"],
    span: "third",
  },
  {
    id: "product-launch",
    title: "Product Launch",
    subtitle: "Venue",
    image: "/images/services/decor-styling/portfolio-5.jpg",
    categories: ["decor-styling"],
    span: "third",
  },
  {
    id: "milestone-birthday",
    title: "Milestone Birthday",
    subtitle: "Venue",
    image: "/images/services/decor-styling/portfolio-6.jpg",
    categories: ["decor-styling"],
    span: "third",
  },
  {
    id: "wedding-film",
    title: "Wedding Film",
    subtitle: "Venue",
    image: "/images/services/decor-styling/portfolio-7.jpg",
    categories: ["decor-styling"],
    span: "third",
  },
  {
    id: "behind-the-scenes",
    title: "Behind The Scenes",
    subtitle: "Venue",
    image: "/images/services/decor-styling/portfolio-8.jpg",
    categories: ["decor-styling"],
    span: "third",
  },
  {
    id: "event-reel",
    title: "Event Reel",
    subtitle: "Venue",
    image: "/images/services/decor-styling/portfolio-9.jpg",
    categories: ["decor-styling"],
    span: "third",
  },
];