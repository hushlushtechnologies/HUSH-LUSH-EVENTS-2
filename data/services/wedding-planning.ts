import type { BrowserTab } from "@/data/browser-mockup";
import type { FeatureGridItem } from "@/components/ui/ServiceFeatures";
import type { PortfolioItem } from "@/data/portfolio";
import type { FAQItem } from "@/data/faq";
import type { ProcessStep } from "@/components/ui/ServiceProcessSteps";

export const weddingPlanningHero = {
  number: "03",
  label: "Wedding Planning",
  headingHighlight: "Your Story.",
  headingRest: "Beautifully Planned.",
  description:
    "From the first idea to the final celebration, we bring together every detail, decision and moving part to create a wedding that feels effortless, meaningful and completely yours.",
  primaryCta: "Plan your Wedding",
  secondaryCta: "Explore our Work",
  verticalWord: "WEDDING PLANNING",
  heroImage: "/images/services/wedding-planning/hero-ceremony.jpg",
};

// ── Experience section content (browser-mockup section) ──────────

export const weddingPlanningBrowserTabs: BrowserTab[] = [
  { title: "Hush Lush Events", favicon: "/images/browser-icons/favicon-events.svg", active: false },
  { title: "Wedding Planning", favicon: "/images/browser-icons/favicon-tech.svg", active: true },
  { title: "Afaq Al Khaleej Group of Companies", favicon: "/images/browser-icons/favicon-afaq.svg", active: false },
];

export const weddingPlanningAddressText = "Search Hush Lush Events or type a URL";

export const weddingPlanningExperienceContent = {
  headingLines: ["More Than a Day", "A Story Worth Telling"],
  description:
    "Every wedding has its own rhythm, personality and meaning. The people you bring together, the traditions you carry, the places that matter and the moments you want to remember all shape the celebration.",
  videoPoster: "/images/services/wedding-planning/experience-video-poster.jpg",
  testimonial: {
    icon: "/images/icons/brand-mark.svg",
    prefix: "",
    highlight: "",
    suffix: "",
    heartIcon: "",
    description:
      "We take the time to understand what makes your wedding yours, then build the planning, design and experience around it.",
    avatarsImage: "/images/icons/avatarsImage.svg",
    reviewLabel: "10K Reviews",
  },
};

// ── Features section content ──────────────────────────────────────

export const weddingPlanningFeaturesHeading = ["From the First", "Idea to the Last Dance"];

export const weddingPlanningFeaturesFooterLabel = "Perfect Wedding";

export const weddingPlanningFeatureItems: FeatureGridItem[] = [
  // Column 1, rows 1–2 — tall bride/groom cliffside image, no caption
  {
    id: "cliffside-couple",
    image: "/images/services/wedding-planning/feature-cliffside.jpg",
    colStart: 1,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 2,
  },
  // Column 2, row 1 — rings in hands, no caption
  {
    id: "rings",
    image: "/images/services/wedding-planning/feature-rings.jpg",
    colStart: 2,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 2, row 2 — couple in field, no caption
  {
    id: "couple-field",
    image: "/images/services/wedding-planning/feature-field.jpg",
    colStart: 2,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
  // Column 1, row 3 — Wedding Design
  {
    id: "wedding-design",
    image: "/images/services/wedding-planning/feature-design.jpg",
    title: "Wedding Design",
    description: "Bringing together décor, styling, colour, florals, lighting and visual details.",
    colStart: 1,
    colSpan: 1,
    rowStart: 3,
    rowSpan: 1,
  },
  // Column 2, row 3 — On Day Coordination
  {
    id: "on-day-coordination",
    image: "/images/services/wedding-planning/feature-coordination.jpg",
    title: "On Day Coordination",
    description:
      "Managing the people, schedules and details behind the scenes while you enjoy the moment.",
    colStart: 2,
    colSpan: 1,
    rowStart: 3,
    rowSpan: 1,
  },
  // Column 3, row 1 — Wedding Concept
  {
    id: "wedding-concept",
    image: "/images/services/wedding-planning/feature-concept.jpg",
    title: "Wedding Concept",
    description: "Developing the overall direction, mood and personality of your celebration.",
    colStart: 3,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 4, row 1 — Budget Planning
  {
    id: "budget-planning",
    image: "/images/services/wedding-planning/feature-budget.jpg",
    title: "Budget Planning",
    description: "Helping structure priorities, allocations and decisions around your wedding investment.",
    colStart: 4,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 3, row 2 — Venue & Date
  {
    id: "venue-date",
    image: "/images/services/wedding-planning/feature-venue.jpg",
    title: "Venue & Date",
    description: "Supporting venue selection, availability and date coordination.",
    colStart: 3,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
  // Column 4, row 2 — Guest Management
  {
    id: "guest-management",
    image: "/images/services/wedding-planning/feature-guests.jpg",
    title: "Guest Management",
    description: "Considering invitations, RSVPs, seating, arrivals and the overall guest journey.",
    colStart: 4,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
];

// ── Portfolio section content ──────────────────────────────────────

export const weddingPlanningPortfolioHeading = ["Our Work"];

export const weddingPlanningPortfolioDescription =
  "A curated selection of celebrations, gatherings, and moments we've brought to life with intention, creativity, and a little Hush Lush magic.";

export const weddingPlanningPortfolioItems: PortfolioItem[] = [
  {
    id: "grand-estate-wedding",
    title: "The Grand Estate Wedding",
    subtitle: "Wedding",
    image: "/images/services/wedding-planning/portfolio-1.jpg",
    categories: ["wedding-planning"],
    span: "large",
  },
  {
    id: "annual-gala",
    title: "Annual Gala",
    subtitle: "Wedding",
    image: "/images/services/wedding-planning/portfolio-2.jpg",
    categories: ["wedding-planning"],
    span: "stacked",
  },
  {
    id: "garden-soiree",
    title: "Garden Soirée",
    subtitle: "Wedding",
    image: "/images/services/wedding-planning/portfolio-3.jpg",
    categories: ["wedding-planning"],
    span: "stacked",
  },
  {
    id: "dinner-party",
    title: "Dinner Party",
    subtitle: "Wedding",
    image: "/images/services/wedding-planning/portfolio-4.jpg",
    categories: ["wedding-planning"],
    span: "third",
  },
  {
    id: "product-launch",
    title: "Product Launch",
    subtitle: "Wedding",
    image: "/images/services/wedding-planning/portfolio-5.jpg",
    categories: ["wedding-planning"],
    span: "third",
  },
  {
    id: "milestone-birthday",
    title: "Milestone Birthday",
    subtitle: "Wedding",
    image: "/images/services/wedding-planning/portfolio-6.jpg",
    categories: ["wedding-planning"],
    span: "third",
  },
  {
    id: "wedding-film",
    title: "Wedding Film",
    subtitle: "Wedding",
    image: "/images/services/wedding-planning/portfolio-7.jpg",
    categories: ["wedding-planning"],
    span: "third",
  },
  {
    id: "behind-the-scenes",
    title: "Behind The Scenes",
    subtitle: "Wedding",
    image: "/images/services/wedding-planning/portfolio-8.jpg",
    categories: ["wedding-planning"],
    span: "third",
  },
  {
    id: "event-reel",
    title: "Event Reel",
    subtitle: "Wedding",
    image: "/images/services/wedding-planning/portfolio-9.jpg",
    categories: ["wedding-planning"],
    span: "third",
  },
];


// ── FAQ section content ────────────────────────────────────────────

export const weddingPlanningFaqItems: FAQItem[] = [
  {
    id: "whats-included",
    question: "What does your wedding planning service include?",
    answer:
      "We can support everything from initial planning and vendor coordination to timelines, guest experience and on-day management, depending on the scope of your wedding.",
  },
  {
    id: "start-to-finish",
    question: "Can Hush Lush plan the entire wedding from start to finish?",
    answer:
      "Yes — from the first conversation to the final dance, we can manage every part of the planning and coordination process.",
  },
  {
    id: "choosing-vendors",
    question: "Do you help with choosing wedding vendors?",
    answer:
      "Yes, we help identify and coordinate trusted vendors that match your style, budget and vision.",
  },
  {
    id: "existing-vendors",
    question: "Can you work with vendors we have already selected?",
    answer:
      "Absolutely — we're happy to work alongside vendors you've already chosen and coordinate everything together.",
  },
  {
    id: "wedding-budgets",
    question: "Do you help with wedding budgets?",
    answer:
      "Yes, we help structure priorities, allocations and decisions around your wedding investment from the start.",
  },
  {
    id: "destination-weddings",
    question: "Can you help with destination or multi-day weddings?",
    answer:
      "Yes — we support destination and multi-day weddings, coordinating logistics, timelines and details across every part of the celebration.",
  },
];

// ── Process steps section content ──────────────────────────────────

export const weddingPlanningProcessImage = "/images/services/wedding-planning/process-hands.jpg";
export const weddingPlanningProcessEyebrow = "Our Process";
export const weddingPlanningProcessHeading = "You Live the Moment We Handle the Rest";

export const weddingPlanningProcessSteps: ProcessStep[] = [
  {
    id: "clarity",
    icon: "/images/icons/process-clarity.svg",
    title: "Clarity",
    description: "Know what's happening, when it's happening and what needs your attention.",
  },
  {
    id: "confidence",
    icon: "/images/icons/process-confidence.svg",
    title: "Confidence",
    description: "Make decisions knowing the details are being considered.",
  },
  {
    id: "calm",
    icon: "/images/icons/process-calm.svg",
    title: "Calm",
    description: "Let us manage the timelines, vendors and unexpected moments behind the scenes.",
  },
  {
    id: "celebration",
    icon: "/images/icons/process-celebration.svg",
    title: "Celebration",
    description: "Be present with the people you love instead of worrying about what's next.",
  },
];