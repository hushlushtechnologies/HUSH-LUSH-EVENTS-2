import type { BrowserTab } from "@/data/browser-mockup";
import type { FeatureGridItem } from "@/components/ui/ServiceFeatures";
import type { ProcessStep } from "@/components/ui/ServiceProcessSteps";
   import type { FAQItem } from "@/data/faq";
// ── Hero section content ─────────────────────────────────────────

export const eventPlanningHero = {
  number: "01",
  label: "Events Planning",
  headingPrefix: "Every Great",
  headingRest: "Event",
  headingLine2: "Starts with a Plan",
  description:
    "From the first idea to the final guest departure, we bring together the people, details and moving parts needed to create an event that feels effortless.",
  verticalWord: "EVENTS PLANNING",
  images: [
    "/images/services/event-planning/photo-1.jpg",
    "/images/services/event-planning/photo-2.jpg",
    "/images/services/event-planning/photo-3.jpg",
    "/images/services/event-planning/photo-4.jpg",
    "/images/services/event-planning/photo-5.jpg",
    "/images/services/event-planning/photo-9.jpg",
    "/images/services/event-planning/photo-7.jpg",
    "/images/services/event-planning/photo-8.jpg",
    "/images/services/event-planning/photo-9.jpg",
    "/images/services/event-planning/photo-10.jpg",
    "/images/services/event-planning/photo-11.jpg",
    "/images/services/event-planning/photo-12.jpg",
  ],
};

// ── Experience section content (browser-mockup section) ──────────

export const eventPlanningBrowserTabs: BrowserTab[] = [
  { title: "Hush Lush Events", favicon: "/images/browser-icons/favicon-events.svg", active: false },
  { title: "Events Planning", favicon: "/images/browser-icons/favicon-tech.svg", active: true },
  { title: "Afaq Al Khaleej Group of Companies", favicon: "/images/browser-icons/favicon-afaq.svg", active: false },
];

export const eventPlanningAddressText = "Search Hush Lush Events or type a URL";

export const eventPlanningExperienceContent = {
  headingLines: ["You Bring the Vision", "We Build the Experience"],
  description:
    "An unforgettable event doesn't happen by accident. It begins with understanding what you want to create and carefully turning that vision into a clear, achievable plan.",
  videoPoster: "/images/services/event-planning/experience-video-poster.jpg",
  testimonial: {
    icon: "/images/icons/brand-mark.svg",
    prefix: "",
    highlight: "",
    suffix: "",
    heartIcon: "",
    description:
      "From intimate celebrations to large-scale productions, we manage the details behind the scenes so you can focus on the moments that matter.",
    avatarsImage: "/images/icons/avatarsImage.svg",
    reviewLabel: "10K Reviews",
  },
};


// ── Features section content ──────────────────────────────────────

export const eventPlanningFeaturesHeading = ["Every Moving Part.", "One Seamless Experience"];

export const eventPlanningFeaturesFooterLabel = "Perfect Moments";

export const eventPlanningFeatureItems: FeatureGridItem[] = [
  // Column 1, rows 1–2 — tall image, no caption
{
  id: "concert-crowd",
  image: "/images/services/event-planning/feature-concert.jpg",
  aspect: "aspect-[4/5]",
  colStart: 1,
  colSpan: 1,
  rowStart: 1,
  rowSpan: 2,
},
  // Column 2, row 1 — no caption
  {
    id: "event-hall",
    image: "/images/services/event-planning/feature-hall.jpg",
    colStart: 2,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 2, row 2 — no caption
  {
    id: "reception-decor",
    image: "/images/services/event-planning/feature-reception.jpg",
    colStart: 2,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
  // Column 1, row 3 — Timeline & Logistics
  {
    id: "timeline-logistics",
    image: "/images/services/event-planning/feature-logistics.jpg",
    title: "Timeline & Logistics",
    description: "Managing schedules, deliveries, setup and event-day logistics.",
    colStart: 1,
    colSpan: 1,
    rowStart: 3,
    rowSpan: 1,
  },
  // Column 2, row 3 — Guest Experience
  {
    id: "guest-experience",
    image: "/images/services/event-planning/feature-guest.jpg",
    title: "Guest Experience",
    description: "Making sure every touchpoint feels intentional and effortless.",
    colStart: 2,
    colSpan: 1,
    rowStart: 3,
    rowSpan: 1,
  },
  // Column 3, row 1 — Events Concept
  {
    id: "events-concept",
    image: "/images/services/event-planning/feature-concept.jpg",
    title: "Events Concept",
    description: "Developing the creative direction and overall event vision.",
    colStart: 3,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 4, row 1 — Budget & Planning
  {
    id: "budget-planning",
    image: "/images/services/event-planning/feature-budget.jpg",
    title: "Budget & Planning",
    description: "Building practical plans around your priorities and budget.",
    colStart: 4,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 3, row 2 — Venue Coordination
  {
    id: "venue-coordination",
    image: "/images/services/event-planning/feature-venue.jpg",
    title: "Venue Coordination",
    description: "Helping select, prepare and coordinate the right venue.",
    colStart: 3,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
  // Column 4, row 2 — Vendor Management
  {
    id: "vendor-management",
    image: "/images/services/event-planning/feature-vendor.jpg",
    title: "Vendor Management",
    description: "Bringing together trusted creative and production partners.",
    colStart: 4,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
];


// ── FAQ section content ────────────────────────────────────────────

export const eventPlanningFaqItems: FAQItem[] = [
  {
    id: "types-of-events",
    question: "What types of events do you plan?",
    answer:
      "We plan and coordinate a wide range of events, including private celebrations, birthdays, weddings, corporate gatherings, gala nights, launches, and bespoke experiences.",
  },
  {
    id: "manage-entire-event",
    question: "Can Hush Lush manage my entire event from start to finish?",
    answer:
      "Yes — from the first conversation to the final celebration, our team handles planning, design, vendor coordination and on-the-day execution.",
  },
  {
    id: "own-concept",
    question: "Can you work with a concept or theme I already have?",
    answer:
      "Absolutely. We're happy to build on your existing vision, or refine it further with our own creative direction.",
  },
  {
    id: "venue-vendor",
    question: "Do you help with venue and vendor selection?",
    answer:
      "Yes, we help identify and coordinate the right venues and vendors to match your event's style, scale and budget.",
  },
  {
    id: "how-early",
    question: "How early should I contact Hush Lush?",
    answer:
      "We recommend reaching out as early as possible, ideally several months in advance, especially for larger events or peak-season dates.",
  },
  {
    id: "specific-budget",
    question: "Can you plan an event within a specific budget?",
    answer:
      "Yes — we work within a range of budgets and will always be transparent about what's achievable within yours.",
  },
];

// ── Process steps section content ──────────────────────────────────

export const eventPlanningProcessImage = "/images/services/event-planning/process-venue.jpg";
export const eventPlanningProcessEyebrow = "Our Process";
export const eventPlanningProcessHeading = "From First Idea to Final Moment";

export const eventPlanningProcessSteps: ProcessStep[] = [
  {
    id: "discover",
    icon: "/images/icons/process-discover.svg",
    title: "Discover",
    description: "Understand your vision, occasion, audience and expectations.",
  },
  {
    id: "define",
    icon: "/images/icons/process-define.svg",
    title: "Define",
    description: "Establish the concept, scope, budget and direction.",
  },
  {
    id: "plan",
    icon: "/images/icons/process-plan.svg",
    title: "Plan",
    description: "Build the timeline, team, venue and production requirements.",
  },
  {
    id: "create",
    icon: "/images/icons/process-create.svg",
    title: "Create",
    description: "Bring the creative direction and experience to life.",
  },
  {
    id: "coordinate",
    icon: "/images/icons/process-coordinate.svg",
    title: "Coordinate",
    description: "Manage every detail before and throughout the event.",
  },
  {
    id: "deliver",
    icon: "/images/icons/process-deliver.svg",
    title: "Deliver",
    description: "Make sure everything comes together exactly when it should.",
  },
];