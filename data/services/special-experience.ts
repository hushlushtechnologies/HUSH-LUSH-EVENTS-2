import { FeatureGridItem } from "@/components/ui/ServiceFeatures";
import { BrowserTab } from "../browser-mockup";
import { FAQItem } from "../faq";

import { ProcessStepItem } from "../about-process";
import type { ProcessStep } from "@/components/ui/ServiceProcessSteps";

export const specialExperienceHero = {
  number: "08",
  label: "Special Experience",
  headingHighlight: "Make the",
  headingRest: "Unexpected Happen.",
  description:
    "Some moments don't belong to a standard package. We create bespoke experiences, surprises and immersive moments designed to make your celebration feel extraordinary.",
  primaryCta: "Create Something Special",
  secondaryCta: "Explore our Work",
  verticalWord: "SPECIAL EXPERIENCE",
  heroImage: "/images/services/special-experience/hero-runway.jpg",
};

// ── Features section content ──────────────────────────────────────

// NOTE: heading and footer label transcribed exactly as shown in the
// Figma — but both look like leftovers from other service pages
// ("From the First Idea to the Last Dance" / "Perfect Wedding" are
// identical to Corporate Events' and don't reference Special
// Experience at all). Same copy-paste-leftover pattern flagged on
// Corporate Events and Invitation & Print earlier — worth confirming
// before this ships. See the note at the bottom of this file for a
// suggested replacement if it turns out to be unintentional.
export const specialExperienceFeaturesHeading = ["From the First Idea", "to the Last Dance"];
export const specialExperienceFeaturesFooterLabel = "Perfect Wedding";

export const specialExperienceFeatureItems: FeatureGridItem[] = [
  // Column 1, rows 1–2 — tall image, no caption (purple/gold draped lounge)
  {
    id: "tall-visual",
    image: "/images/services/special-experience/feature-lounge.jpg",
    colStart: 1,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 2,
  },
  // Column 2, row 1 — no caption (candle/floral closeup)
  {
    id: "uncaptioned-1",
    image: "/images/services/special-experience/feature-candles.jpg",
    colStart: 2,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 2, row 2 — no caption (string-light tent party)
  {
    id: "uncaptioned-2",
    image: "/images/services/special-experience/feature-tent-party.jpg",
    colStart: 2,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
  // Column 1, row 3 — Love Moment
  {
    id: "love-moment",
    image: "/images/services/special-experience/feature-love-moment.jpg",
    title: "Love Moment",
    description: "Thoughtfully designed experiences for proposals, anniversaries and meaningful milestones.",
    colStart: 1,
    colSpan: 1,
    rowStart: 3,
    rowSpan: 1,
  },
  // Column 2, row 3 — Destination Experience
  {
    id: "destination-experience",
    image: "/images/services/special-experience/feature-destination.jpg",
    title: "Destination Experience",
    description: "Unique experiences created around locations, travel and celebrations.",
    colStart: 2,
    colSpan: 1,
    rowStart: 3,
    rowSpan: 1,
  },
  // Column 3, row 1 — Bespoke Celebration
  {
    id: "bespoke-celebration",
    image: "/images/services/special-experience/feature-bespoke.jpg",
    title: "Bespoke Celebration",
    description: "Unique celebrations designed around a personal story, milestone or idea.",
    colStart: 3,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 4, row 1 — Surprise Experience
  {
    id: "surprise-experience",
    image: "/images/services/special-experience/feature-surprise.jpg",
    title: "Surprise Experience",
    description: "Unexpected moments, reveals and experiences designed to create genuine reactions.",
    colStart: 4,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 3, row 2 — Immersive Experience
  {
    id: "immersive-experience",
    image: "/images/services/special-experience/feature-immersive.jpg",
    title: "Immersive Experience",
    description: "Multi-sensory environments that transport guests into a different world.",
    colStart: 3,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
  // Column 4, row 2 — Private Dinning
  {
    id: "private-dinning",
    image: "/images/services/special-experience/feature-private-dining.jpg",
    title: "Private Dinning",
    description: "Intimate dining experiences created around exceptional locations, menus and atmosphere.",
    colStart: 4,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
];

// ── Experience section content (browser-mockup section) ──────────

// NOTE: the tab label in the Figma reads "Wedding Planning", not
// "Special Experience" — same leftover pattern as above. Using the
// correct service name here; swap back to "Wedding Planning" if that
// was actually intentional for some reason.
export const specialExperienceBrowserTabs: BrowserTab[] = [
  { title: "Hush Lush Events", favicon: "/images/browser-icons/favicon-events.svg", active: false },
  { title: "Special Experience", favicon: "/images/browser-icons/favicon-tech.svg", active: true },
  { title: "Afaq Al Khaleej Group of Companies", favicon: "/images/browser-icons/favicon-afaq.svg", active: false },
];

export const specialExperienceAddressText = "google.com/search";

export const specialExperienceContent = {
  headingLines: ["Not Everything", "Needs a Template"],
  description:
    "A private dinner in an unexpected setting. A surprise performance. A personalised guest journey. A celebration built around one unforgettable idea.",
  videoPoster: "/images/services/special-experience/experience-video-poster.jpg",
  testimonial: {
    icon: "/images/icons/brand-mark.svg",
    prefix: "",
    highlight: "",
    suffix: "",
    heartIcon: "",
    description: "We create experiences that begin with your imagination rather than a predefined package.",
    avatarsImage: "/images/icons/avatarsImage.svg",
    reviewLabel: "10K Reviews",
  },
};

// ── Process steps section content ──────────────────────────────────

 // ── Process steps section content ──────────────────────────────────

export const specialExperienceProcessImage = "/images/services/special-experience/process-hands.jpg";
export const specialExperienceProcessEyebrow = "Our Process";
export const specialExperienceProcessHeading = "Create the Moment They Didn't See Coming";

export const specialExperienceProcessSteps: ProcessStep[] = [
  {
    id: "surprise",
    icon: "/images/icons/process-surprise.svg",
    title: "Surprise",
    description: "Create moments that genuinely catch people off guard.",
  },
  {
    id: "personal",
    icon: "/images/icons/process-personal.svg",
    title: "Personal",
    description: "Build details around the people who matter.",
  },
  {
    id: "atmosphere",
    icon: "/images/icons/process-atmosphere.svg",
    title: "Atmosphere",
    description: "Use lighting, sound, styling and environment to create emotion.",
  },
  {
    id: "reveal",
    icon: "/images/icons/process-reveal.svg",
    title: "Reveal",
    description: "Design the timing and presentation of the moment so it lands perfectly.",
  },
];

// ── FAQ section content ──────────────────────────────────────────

export const specialExperienceFaqItems: FAQItem[] = [
  {
    id: "what-is-special-experience",
    question: "What is a Special Experience?",
    answer:
      "It's a bespoke experience created around an idea, occasion or moment rather than a predefined event format.",
  },
  {
    id: "fully-customised",
    question: "Can you create something completely customised?",
    answer:
      "Absolutely. This service is specifically designed for experiences that require a unique concept rather than a standard package.",
  },
  {
    id: "develop-idea-from-scratch",
    question: "Can you help us develop an idea from scratch?",
    answer:
      "Yes. You can come to us with a simple idea — or even just a feeling — and we'll explore how to turn it into an experience.",
  },
  {
    id: "surprise-experiences",
    question: "Do you create surprise experiences?",
    answer:
      "Yes. We can design surprise reveals, personalised moments, unexpected entertainment and other experiences designed around genuine reactions.",
  },
  {
    id: "private-dining",
    question: "Can you organise private dining experiences?",
    answer:
      "Yes. We can create intimate dining experiences around unique locations, styling, menus, entertainment and atmosphere.",
  },
  {
    id: "outside-uae",
    question: "Can you create experiences outside the UAE?",
    answer:
      "Depending on the project, we can explore destination and travel-based experiences and coordinate the required partners and logistics.",
  },
];