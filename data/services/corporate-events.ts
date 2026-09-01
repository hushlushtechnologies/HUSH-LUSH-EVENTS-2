import type { BrowserTab } from "@/data/browser-mockup";
import type { PortfolioItem } from "@/data/portfolio";
import type { FeatureGridItem } from "@/components/ui/ServiceFeatures";
import type { FAQItem } from "@/data/faq";
import type { ProcessStep } from "@/components/ui/ServiceProcessSteps";

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
    avatarsImage: "/images/icons/avatarsImage.svg",
    reviewLabel: "10K Reviews",
  },
};

// ── Features section content ──────────────────────────────────────

export const corporateEventsFeaturesHeading = ["From the First Idea", "to the Last Dance"];

export const corporateEventsFeaturesFooterLabel = "Perfect Decor";

export const corporateEventsFeatureItems: FeatureGridItem[] = [
  // Column 1, rows 1–2 — tall image, no caption (immersive screen/lounge event)
  {
    id: "tall-visual",
    image: "/images/services/corporate-events/feature-immersive.png",
    colStart: 1,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 2,
  },
  // Column 2, row 1 — no caption (couple walking through corridor)
  {
    id: "uncaptioned-1",
    image: "/images/services/corporate-events/feature-corridor.png",
    colStart: 2,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 2, row 2 — no caption (bar/reception scene)
  {
    id: "uncaptioned-2",
    image: "/images/services/corporate-events/feature-bar.png",
    colStart: 2,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
  // Column 1, row 3 — Brand Activations
  {
    id: "brand-activations",
    image: "/images/services/corporate-events/feature-brand-activations.png",
    title: "Brand Activations",
    description: "Bringing brand stories to life through immersive event experiences.",
    colStart: 1,
    colSpan: 1,
    rowStart: 3,
    rowSpan: 1,
  },
  // Column 2, row 3 — Award Ceremonies
  {
    id: "award-ceremonies",
    image: "/images/services/corporate-events/feature-award-ceremonies.jpg",
    title: "Award Ceremonies",
    description: "Creating memorable experiences around recognition and achievement.",
    colStart: 2,
    colSpan: 1,
    rowStart: 3,
    rowSpan: 1,
  },
  // Column 3, row 1 — Corporate Gathering
  {
    id: "corporate-gathering",
    image: "/images/services/corporate-events/feature-corporate-gathering.jpg",
    title: "Corporate Gathering",
    description: "Planning professional events that bring teams, clients and partners together.",
    colStart: 3,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 4, row 1 — Conference & Summit
  {
    id: "conference-summit",
    image: "/images/services/corporate-events/feature-conference-summit.jpg",
    title: "Conference & Summit",
    description: "Managing speakers, sessions, stages, schedules and attendee experiences.",
    colStart: 4,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 3, row 2 — Product Launch
  {
    id: "product-launch",
    image: "/images/services/corporate-events/feature-product-launch.jpg",
    title: "Product Launch",
    description: "Creating launch experiences that introduce products and brands with impact.",
    colStart: 3,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
  // Column 4, row 2 — Gala Dinners
  {
    id: "gala-dinners",
    image: "/images/services/corporate-events/feature-gala-dinners.jpg",
    title: "Gala Dinners",
    description: "Designing sophisticated dining experiences for clients, partners and teams.",
    colStart: 4,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
];






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



export const corporateEventsFaqItems: FAQItem[] = [
  {
    id: "corporate-event-manage",
    question: "What types of corporate events do you manage?",
    answer:
      "We manage conferences, corporate gatherings, product launches, gala dinners, award ceremonies, team experiences, brand activations and corporate celebrations.",
  },
   {
  id: "manage-entire-event",
  question: "Can you manage the entire corporate event?",
  answer:
    "Yes. We can coordinate the event from initial concept and planning through production, vendor management and on-site execution.",
},
{
  id: "internal-teams",
  question: "Can you work with our internal events or marketing team?",
  answer:
    "Absolutely. We can work alongside your internal team and take responsibility for specific areas or the complete event.",
},
{
  id: "branding-design",
  question: "Do you handle branding and event design?",
  answer:
    "Yes. We can coordinate event branding, creative direction, décor, signage, stage design and other visual elements.",
},
{
  id: "conferences-speakers",
  question: "Can you manage conferences and speakers?",
  answer:
    "Yes. We can coordinate stage requirements, speaker schedules, production, technical requirements and attendee flow.",
},
{
  id: "av-production",
  question: "Do you provide audio-visual and production support?",
  answer:
    "Yes. Production, lighting, sound, staging, screens and other technical requirements can be incorporated into the event plan.",
},
{
  id: "large-guest-numbers",
  question: "Can you organise events for large numbers of guests?",
  answer:
    "Yes. We can plan and coordinate events across different scales, from intimate executive gatherings to large corporate experiences.",
},
];


// ── Process steps section content ──────────────────────────────────

export const corporateEventsProcessImage = "/images/services/corporate-events/process-gala.jpg";
export const corporateEventsProcessEyebrow = "Our Process";
export const corporateEventsProcessHeading = "Your Brand in the Room";

export const corporateEventsProcessSteps: ProcessStep[] = [
  {
    id: "arrival",
    icon: "/images/icons/process-arrivall.svg",
    title: "Arrival",
    description: "Create a strong first impression through registration.",
  },
  {
    id: "environment",
    icon: "/images/icons/process-environment.svg",
    title: "Environment",
    description: "Use space, lighting, décor and production to create the right atmosphere.",
  },
  {
    id: "engagement",
    icon: "/images/icons/process-engagement.svg",
    title: "Engagement",
    description: "Design moments that encourage interaction, participation and connection.",
  },
  {
    id: "brand",
    icon: "/images/icons/process-brand.svg",
    title: "Brand",
    description: "Make your identity visible through thoughtful creative direction, content and event design.",
  },
];