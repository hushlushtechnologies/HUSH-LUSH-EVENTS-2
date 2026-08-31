import type { BrowserTab } from "@/data/browser-mockup";
import type { PortfolioItem } from "@/data/portfolio";

export const corporateEventsHero = {
  number: "05",
  label: "Corporate Events",
  headingHighlight: "Make Business",
  headingRest: "Memorable.",
  description:
    "From executive gatherings and conferences to launches, gala dinners and corporate celebrations, we create experiences that bring your people, purpose and brand together.",
  primaryCta: "Plan Your Events",
  secondaryCta: "Explore our Work",
  verticalWord: "CORPORATE EVENTS",
  images: [
    "/images/services/corporate-events/photo-1.jpg",
    "/images/services/corporate-events/photo-2.jpg",
    "/images/services/corporate-events/photo-3.jpg",
    "/images/services/corporate-events/photo-4.jpg",
    "/images/services/corporate-events/photo-5.jpg",
    "/images/services/corporate-events/photo-6.jpg",
    "/images/services/corporate-events/photo-7.jpg",
    "/images/services/corporate-events/photo-8.jpg",
    "/images/services/corporate-events/photo-9.jpg",
    "/images/services/corporate-events/photo-10.jpg",
    "/images/services/corporate-events/photo-11.jpg",
    "/images/services/corporate-events/photo-12.jpg",
  ],
};




// ── Experience section content (browser-mockup section) ──────────

export const corporateEventsBrowserTabs: BrowserTab[] = [
  { title: "Hush Lush Events", favicon: "/images/browser-icons/favicon-events.svg", active: false },
  // NOTE: your message said "Decor & Styling" here, but this is the
  // Corporate Events page — using "Corporate Events" to match the
  // actual service. Flag if "Decor & Styling" was intentional.
  { title: "Corporate Events", favicon: "/images/browser-icons/favicon-tech.svg", active: true },
  { title: "Afaq Al Khaleej Group of Companies", favicon: "/images/browser-icons/favicon-afaq.svg", active: false },
];

// Same google.com/search address bar as Decor & Styling's Experience
// section — matches your message, not the "Search Hush Lush Events..."
// pattern every other service page uses.
export const corporateEventsAddressText = "google.com/search";

export const corporateEventsExperienceContent = {
  headingLines: ["Every Event", "Has a Reason"],
  description:
    "A corporate event should do more than fill a room. It should communicate something, bring people together and create an experience that supports your bigger objective.",
  videoPoster: "/images/services/corporate-events/experience-video-poster.jpg",
  testimonial: {
    icon: "/images/icons/brand-mark.svg",
    prefix: "",
    highlight: "",
    suffix: "",
    heartIcon: "",
    description:
      "Whether you're launching something new, celebrating your people, building relationships or bringing your industry together, we start by understanding what success looks like for you.",
    avatarsImage: "/images/testimonials/avatars-group.png",
    reviewLabel: "10K Reviews",
  },
};






// ── Portfolio section content ──────────────────────────────────────

export const corporateEventsPortfolioHeading = ["Our Work"];

export const corporateEventsPortfolioDescription =
  "A curated selection of celebrations, gatherings, and moments we've brought to life with intention, creativity, and a little Hush Lush magic.";

export const corporateEventsPortfolioItems: PortfolioItem[] = [
  {
    id: "global-summit-launch",
    title: "Global Summit Launch",
    subtitle: "Corporate",
    image: "/images/services/corporate-events/portfolio-1.jpg",
    categories: ["corporate-events"],
    span: "large",
  },
  {
    id: "annual-leadership-gala",
    title: "Annual Leadership Gala",
    subtitle: "Corporate",
    image: "/images/services/corporate-events/portfolio-2.jpg",
    categories: ["corporate-events"],
    span: "stacked",
  },
  {
    id: "product-reveal-night",
    title: "Product Reveal Night",
    subtitle: "Corporate",
    image: "/images/services/corporate-events/portfolio-3.jpg",
    categories: ["corporate-events"],
    span: "stacked",
  },
  {
    id: "executive-dinner",
    title: "Executive Dinner",
    subtitle: "Corporate",
    image: "/images/services/corporate-events/portfolio-4.jpg",
    categories: ["corporate-events"],
    span: "third",
  },
  {
    id: "brand-anniversary",
    title: "Brand Anniversary Celebration",
    subtitle: "Corporate",
    image: "/images/services/corporate-events/portfolio-5.jpg",
    categories: ["corporate-events"],
    span: "third",
  },
  {
    id: "industry-conference",
    title: "Industry Conference",
    subtitle: "Corporate",
    image: "/images/services/corporate-events/portfolio-6.jpg",
    categories: ["corporate-events"],
    span: "third",
  },
  {
    id: "team-recognition-evening",
    title: "Team Recognition Evening",
    subtitle: "Corporate",
    image: "/images/services/corporate-events/portfolio-7.jpg",
    categories: ["corporate-events"],
    span: "third",
  },
  {
    id: "partner-relations-mixer",
    title: "Partner Relations Mixer",
    subtitle: "Corporate",
    image: "/images/services/corporate-events/portfolio-8.jpg",
    categories: ["corporate-events"],
    span: "third",
  },
  {
    id: "investor-showcase",
    title: "Investor Showcase",
    subtitle: "Corporate",
    image: "/images/services/corporate-events/portfolio-9.jpg",
    categories: ["corporate-events"],
    span: "third",
  },
];