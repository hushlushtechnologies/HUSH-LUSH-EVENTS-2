import { FeatureGridItem } from "@/components/ui/ServiceFeatures";
import { BrowserTab } from "../browser-mockup";

export const entertainmentProductionHero = {
  headingLine1: "Turn Up",
  headingLine2: "The Moment",
  description:
    "From live performances and immersive entertainment to lighting, sound, staging and visual production, we create experiences that move people, command attention and make every moment count.",
  primaryCta: "Create the Experience",
  secondaryCta: "Explore our Work",
  backgroundImage: "/images/services/entertainment-production/hero-concert.png",
};

// ── Experience section content (browser-mockup section) ──────────

export const entertainmentBrowserTabs: BrowserTab[] = [
  { title: "Hush Lush Technologies", favicon: "/images/browser-icons/favicon-events.svg", active: false },
  { title: "Entertainments", favicon: "/images/browser-icons/favicon-tech.svg", active: true },
  { title: "Afaq Al Khaleej Group of Companies", favicon: "/images/browser-icons/favicon-afaq.svg", active: false },
];

export const entertainmentAddressText = "Search Hush Lush Events or type a URL";

export const entertainmentExperienceContent = {
  headingLines: ["Some Moments", "Should be Felt"],
  description:
    "Entertainment has the power to change the energy of a room. The right performance can create anticipation, bring people together, surprise an audience or turn an ordinary moment into the highlight of the night.",
  videoPoster: "/images/services/entertainment-production/experience-confetti.jpg",
  testimonial: {
    icon: "/images/icons/brand-mark.svg",
    prefix: "",
    highlight: "",
    suffix: "",
    heartIcon: "",
    description:
      "We design entertainment around the event—not as something added at the end, but as part of the experience from the beginning.",
    avatarsImage: "/images/icons/avatarsImage.svg",
    reviewLabel: "10K Reviews",
  },
};



// ── Features section content ──────────────────────────────────────

// NOTE: same leftover-copy pattern flagged on Corporate Events, Invitation
// & Print, and Special Experience — this heading is byte-identical to
// Corporate Events' and Special Experience's Features heading, and the
// footer label is byte-identical to Decor & Styling's. Transcribed
// exactly as shown; worth confirming against your Figma source whether
// these are intentionally shared or leftover placeholders.
export const entertainmentFeaturesHeading = ["From the First", "Idea to the Last Dance"];
export const entertainmentFeaturesFooterLabel = "Perfect Decor";

export const entertainmentFeatureItems: FeatureGridItem[] = [
  // Column 1, rows 1–2 — tall image, no caption (confetti crowd, blue/pink)
  {
    id: "tall-visual",
    image: "/images/services/entertainment-production/feature-confetti-crowd.jpg",
    colStart: 1,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 2,
  },
  // Column 2, row 1 — no caption (raised hands crowd, purple)
  {
    id: "uncaptioned-1",
    image: "/images/services/entertainment-production/feature-crowd-hands.jpg",
    colStart: 2,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 2, row 2 — no caption (friends group photo)
  {
    id: "uncaptioned-2",
    image: "/images/services/entertainment-production/feature-friends-group.jpg",
    colStart: 2,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
  // Column 1, row 3 — Lighting Design
  {
    id: "lighting-design",
    image: "/images/services/entertainment-production/feature-lighting-design.jpg",
    title: "Lighting Design",
    description: "Architectural, atmospheric and performance lighting that shapes the experience.",
    colStart: 1,
    colSpan: 1,
    rowStart: 3,
    rowSpan: 1,
  },
  // Column 2, row 3 — Audio & Sound
  {
    id: "audio-sound",
    image: "/images/services/entertainment-production/feature-audio-sound.jpg",
    title: "Audio & Sound",
    description: "Professional sound systems designed for clarity, impact and audience comfort.",
    colStart: 2,
    colSpan: 1,
    rowStart: 3,
    rowSpan: 1,
  },
  // Column 3, row 1 — DJs & Music
  {
    id: "djs-music",
    image: "/images/services/entertainment-production/feature-djs-music.jpg",
    title: "DJs & Music",
    description: "Music programming and DJs designed around the energy and format of the event.",
    colStart: 3,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 4, row 1 — Live Entertainment
  {
    id: "live-entertainment",
    image: "/images/services/entertainment-production/feature-live-entertainment.jpg",
    title: "Live Entertainment",
    description: "Bands, singers, instrumentalists and live performers curated around your event.",
    colStart: 4,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 3, row 2 — Artists & Performers
  {
    id: "artists-performers",
    image: "/images/services/entertainment-production/feature-artists-performers.jpg",
    title: "Artists & Performers",
    description: "Speciality acts, dancers, cultural performers and entertainment experiences.",
    colStart: 3,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
  // Column 4, row 2 — Stage Production
  {
    id: "stage-production",
    image: "/images/services/entertainment-production/feature-stage-production.jpg",
    title: "Stage Production",
    description: "Stage design, structures, screens and technical production.",
    colStart: 4,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
];