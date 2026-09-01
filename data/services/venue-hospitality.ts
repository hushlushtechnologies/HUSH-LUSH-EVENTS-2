import type { BrowserTab } from "@/data/browser-mockup";
import type { FeatureGridItem } from "@/components/ui/ServiceFeatures";
import type { PortfolioItem } from "@/data/portfolio";
import type { FAQItem } from "@/data/faq";
import type { ProcessStep } from "@/components/ui/ServiceProcessSteps";
 
export const venueHospitalityHero = {
  number: "02",
  label: "Venue & Hospitality",
  headingHighlight: "THE RIGHT PLACE",
  headingRest: "CHANGES EVERYTHING",
  description:
    "From intimate spaces to grand celebrations, we help you find the right setting and create a hospitality experience that makes every guest feel considered.",
  primaryCta: "Find your Venue",
  secondaryCta: "Explore our Work",
  // Positions are absolute (%) within a square canvas, arranged
  // roughly in a circle around the center logo mark.
  images: [
    { id: "v1", src: "/images/services/venue-hospitality/photo-3.jpg", top: "8%", left: "28%", width: "150px", height: "190px" },
    { id: "v2", src: "/images/services/venue-hospitality/photo-2.jpg", top: "20%", left: "58%", width: "150px", height: "190px" },
    { id: "v3", src: "/images/services/venue-hospitality/photo-1.jpg", top: "38%", left: "0%", width: "150px", height: "190px" },
    { id: "v4", src: "/images/services/venue-hospitality/photo-5.jpg", top: "50%", left: "90%", width: "150px", height: "190px" },
    { id: "v5", src: "/images/services/venue-hospitality/photo-4.jpg", top: "68%", left: "24%", width: "150px", height: "190px" },
    { id: "v6", src: "/images/services/venue-hospitality/photo-6.jpg", top: "72%", left: "62%", width: "150px", height: "190px" },
  ],
};

// ── Experience section content (browser-mockup section) ──────────

export const venueHospitalityBrowserTabs: BrowserTab[] = [
  { title: "Hush Lush Events", favicon: "/images/browser-icons/favicon-events.svg", active: false },
  { title: "Venue & Hospitality", favicon: "/images/browser-icons/favicon-tech.svg", active: true },
  { title: "Afaq Al Khaleej Group of Companies", favicon: "/images/browser-icons/favicon-afaq.svg", active: false },
];

export const venueHospitalityAddressText = "Search Hush Lush Events or type a URL";

export const venueHospitalityExperienceContent = {
  headingLines: ["Find a Space", "That Feels like Yours"],
  description:
    "The venue isn't simply where an event happens. It creates the first impression, shapes the atmosphere, influences the guest journey, and becomes part of the memory.",
  videoPoster: "/images/services/venue-hospitality/experience-video-poster.jpg",
  testimonial: {
    icon: "/images/icons/brand-mark.svg",
    prefix: "",
    highlight: "",
    suffix: "",
    heartIcon: "",
    description:
      "We help you discover spaces that align with your vision, guest count, style, location, and practical requirements.",
   avatarsImage: "/images/icons/avatarsImage.svg",
    reviewLabel: "10K Reviews",
  },
};



// ── Features section content ──────────────────────────────────────

export const venueHospitalityFeaturesHeading = ["From Venue", "to Everything Around It"];

export const venueHospitalityFeaturesFooterLabel = "Perfect Places";

export const venueHospitalityFeatureItems: FeatureGridItem[] = [
  // Column 1, rows 1–2 — tall archway/courtyard image, no caption
  {
    id: "courtyard",
    image: "/images/services/venue-hospitality/feature-courtyard.jpg",
    colStart: 1,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 2,
  },
  // Column 2, row 1 — waterfront ceremony setup, no caption
  {
    id: "waterfront-setup",
    image: "/images/services/venue-hospitality/feature-waterfront.jpg",
    colStart: 2,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 2, row 2 — barn reception, no caption
  {
    id: "barn-reception",
    image: "/images/services/venue-hospitality/feature-barn.jpg",
    colStart: 2,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
  // Column 1, row 3 — Hospitality
  {
    id: "hospitality",
    image: "/images/services/venue-hospitality/feature-hospitality.jpg",
    title: "Hospitality",
    description: "Creating a welcoming and comfortable experience from arrival to departure.",
    colStart: 1,
    colSpan: 1,
    rowStart: 3,
    rowSpan: 1,
  },
  // Column 2, row 3 — On Site Management
  {
    id: "onsite-management",
    image: "/images/services/venue-hospitality/feature-onsite.jpg",
    title: "On Site Management",
    description: "Coordinating venue and hospitality teams throughout the event.",
    colStart: 2,
    colSpan: 1,
    rowStart: 3,
    rowSpan: 1,
  },
  // Column 3, row 1 — Venue Selection
  {
    id: "venue-selection",
    image: "/images/services/venue-hospitality/feature-selection.jpg",
    title: "Venue Selection",
    description: "Finding spaces that match your event style, size, location and budget.",
    colStart: 3,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 4, row 1 — Venue Sourcing
  {
    id: "venue-sourcing",
    image: "/images/services/venue-hospitality/feature-sourcing.jpg",
    title: "Venue Sourcing",
    description: "Exploring suitable venues and coordinating initial requirements.",
    colStart: 4,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 3, row 2 — Site Visits
  {
    id: "site-visits",
    image: "/images/services/venue-hospitality/feature-sitevisit.jpg",
    title: "Site Visits",
    description: "Helping evaluate the space, layout, facilities and possibilities.",
    colStart: 3,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
  // Column 4, row 2 — Catering
  {
    id: "catering",
    image: "/images/services/venue-hospitality/feature-catering.jpg",
    title: "Catering",
    description: "Coordinating menus and catering experiences that complement the event.",
    colStart: 4,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
];


// ── Portfolio section content ──────────────────────────────────────

export const venueHospitalityPortfolioHeading = ["Our Work"];

export const venueHospitalityPortfolioDescription =
  "A curated selection of celebrations, gatherings, and moments we've brought to life with intention, creativity, and a little Hush Lush magic.";

export const venueHospitalityPortfolioItems: PortfolioItem[] = [
  {
    id: "grand-estate-wedding",
    title: "The Grand Estate Wedding",
    subtitle: "Venue",
    image: "/images/services/venue-hospitality/portfolio-1.png",
    categories: ["venue"],
    span: "large",
  },
  {
    id: "annual-gala",
    title: "Annual Gala",
    subtitle: "Venue",
    image: "/images/services/venue-hospitality/portfolio-2.png",
    categories: ["venue"],
    span: "stacked",
  },
  {
    id: "garden-soiree",
    title: "Garden Soirée",
    subtitle: "Venue",
    image: "/images/services/venue-hospitality/portfolio-3.png",
    categories: ["venue"],
    span: "stacked",
  },
  {
    id: "dinner-party",
    title: "Dinner Party",
    subtitle: "Venue",
    image: "/images/services/venue-hospitality/portfolio-4.png",
    categories: ["venue"],
    span: "third",
  },
  {
    id: "product-launch",
    title: "Product Launch",
    subtitle: "Venue",
    image: "/images/services/venue-hospitality/portfolio-5.png",
    categories: ["venue"],
    span: "third",
  },
  {
    id: "milestone-birthday",
    title: "Milestone Birthday",
    subtitle: "Venue",
    image: "/images/services/venue-hospitality/portfolio-6.png",
    categories: ["venue"],
    span: "third",
  },
  {
    id: "wedding-film",
    title: "Wedding Film",
    subtitle: "Venue",
    image: "/images/services/venue-hospitality/portfolio-7.png",
    categories: ["venue"],
    span: "third",
  },
  {
    id: "behind-the-scenes",
    title: "Behind The Scenes",
    subtitle: "Venue",
    image: "/images/services/venue-hospitality/portfolio-8.png",
    categories: ["venue"],
    span: "third",
  },
  {
    id: "event-reel",
    title: "Event Reel",
    subtitle: "Venue",
    image: "/images/services/venue-hospitality/portfolio-9.png",
    categories: ["venue"],
    span: "third",
  },
];

export const venueHospitalityFaqItems: FAQItem[] = [
  {
    id: "find-right-venue",
    question: "Can Hush Lush help us find the right venue?",
    answer:
      "Yes. We help you discover venues that match your event type, guest count, style, location, budget, and overall vision.",
  },
  {
    id: "venue-visits",
    question: "Do you arrange venue visits?",
    answer:
      "Yes, we coordinate site visits so you can evaluate the space, layout, facilities and overall feel before deciding.",
  },
  {
    id: "catering-menu",
    question: "Can you help with catering and menu selection?",
    answer:
      "Absolutely — we coordinate menus and catering experiences that complement your event and guest preferences.",
  },
  {
    id: "existing-venue",
    question: "Can you work with a venue we have already selected?",
    answer:
      "Yes, we're happy to work with a venue you've chosen and help coordinate everything around it.",
  },
  {
    id: "guest-hospitality",
    question: "Do you manage guest hospitality during the event?",
    answer:
      "Yes, we coordinate on-site hospitality teams to make sure every guest feels welcomed and taken care of throughout.",
  },
  {
    id: "transform-venue",
    question: "Can you transform an existing venue to match our vision?",
    answer:
      "Yes — through decor, styling and thoughtful design, we can transform an existing space to reflect your vision.",
  },
];

// ── Process steps section content ──────────────────────────────────

export const venueHospitalityProcessImage = "/images/services/venue-hospitality/process-reception.jpg";
export const venueHospitalityProcessEyebrow = "Our Process";
export const venueHospitalityProcessHeading = "Make Every Guest Feel Welcome";

export const venueHospitalityProcessSteps: ProcessStep[] = [
  {
    id: "arrival",
    icon: "/images/icons/process-arrival.svg",
    title: "Arrival",
    description: "Welcoming guests and creating the right first impression.",
  },
  {
    id: "dining",
    icon: "/images/icons/process-dining.svg",
    title: "Dining",
    description: "Thoughtful menus, presentation and service.",
  },
  {
    id: "comfort",
    icon: "/images/icons/process-comfort.svg",
    title: "Comfort",
    description: "Seating, flow, accessibility and guest needs.",
  },
  {
    id: "farewell",
    icon: "/images/icons/process-farewell.svg",
    title: "Farewell",
    description: "Ending the experience with the same attention it began with.",
  },
];