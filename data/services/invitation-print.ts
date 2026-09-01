import type { FeatureGridItem } from "@/components/ui/ServiceFeatures";
import type { ProcessStep } from "@/components/ui/ServiceProcessSteps";
import { FAQItem } from "../faq";


export const invitationPrintHero = {
  number: "07",
  label: "Invitation & Print",
  headingHighlight: "THE FIRST",
  headingRest: "IMPRESSIONS MATTER.",
  description:
    "From elegant wedding invitations to sophisticated corporate stationery, we create beautifully considered print and digital pieces that set the tone before the event even begins.",
  primaryCta: "Create your Invitation",
  secondaryCta: "Explore our Work",
  images: [
    { id: "v1", src: "/images/services/venue-hospitality/photo-3.jpg", top: "8%", left: "28%", width: "150px", height: "190px" },
    { id: "v2", src: "/images/services/venue-hospitality/photo-2.jpg", top: "20%", left: "58%", width: "150px", height: "190px" },
    { id: "v3", src: "/images/services/venue-hospitality/photo-1.jpg", top: "38%", left: "0%", width: "150px", height: "190px" },
    { id: "v4", src: "/images/services/venue-hospitality/photo-5.jpg", top: "50%", left: "90%", width: "150px", height: "190px" },
    { id: "v5", src: "/images/services/venue-hospitality/photo-4.jpg", top: "68%", left: "24%", width: "150px", height: "190px" },
    { id: "v6", src: "/images/services/venue-hospitality/photo-6.jpg", top: "72%", left: "62%", width: "150px", height: "190px" },
  ],
};


// ── Features section content ──────────────────────────────────────

// NOTE: your screenshot's heading reads "From Venue to Everything
// Around It" — that's Venue & Hospitality's messaging, not Invitation
// & Print's. Transcribed verbatim below since that's what's in the
// Figma frame, but this looks like the same copy-paste-leftover issue
// flagged on the Corporate Events footer label — worth double-checking
// before this ships.
export const invitationPrintFeaturesHeading = ["From Venue", "to Everything Around It"];

// Same flag applies here — "Perfect Places" reads like a leftover from
// a different service page rather than copy written for Invitation & Print.
export const invitationPrintFeaturesFooterLabel = "Perfect Places";

export const invitationPrintFeatureItems: FeatureGridItem[] = [
  // Column 1, rows 1–2 — tall image, no caption (burgundy gift packaging)
  {
    id: "tall-visual",
    image: "/images/services/invitation-print/feature-packaging-hero.png",
    colStart: 1,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 2,
  },
  // Column 2, row 1 — no caption (black jewelry/stationery flatlay)
  {
    id: "uncaptioned-1",
    image: "/images/services/invitation-print/feature-flatlay.png",
    colStart: 2,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 2, row 2 — no caption (teal packaging jar/bottle set)
  {
    id: "uncaptioned-2",
    image: "/images/services/invitation-print/feature-product-packaging.png",
    colStart: 2,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
  // Column 1, row 3 — Packaging & Details
  {
    id: "packaging-details",
    image: "/images/services/invitation-print/feature-packaging-details.png",
    title: "Packaging & Details",
    description: "Brochures, cards, signage, event collateral and other printed materials.",
    colStart: 1,
    colSpan: 1,
    rowStart: 3,
    rowSpan: 1,
  },
  // Column 2, row 3 — Corporate Stationery
  {
    id: "corporate-stationery",
    image: "/images/services/invitation-print/feature-corporate-stationery.png",
    title: "Corporate Stationery",
    description: "Event invitations, branded cards, programs, name badges and corporate event materials.",
    colStart: 2,
    colSpan: 1,
    rowStart: 3,
    rowSpan: 1,
  },
  // Column 3, row 1 — Invitation Design
  {
    id: "invitation-design",
    image: "/images/services/invitation-print/feature-invitation-design.png",
    title: "Invitation Design",
    description: "Custom-designed invitations built around your event's personality and visual direction.",
    colStart: 3,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 4, row 1 — Digital Invitation
  {
    id: "digital-invitation",
    image: "/images/services/invitation-print/feature-digital-invitation.png",
    title: "Digital Invitation",
    description: "Beautiful digital invitations designed for modern sharing and communication.",
    colStart: 4,
    colSpan: 1,
    rowStart: 1,
    rowSpan: 1,
  },
  // Column 3, row 2 — Save the Dates
  {
    id: "save-the-dates",
    image: "/images/services/invitation-print/feature-save-the-dates.png",
    title: "Save the Dates",
    description: "Create anticipation and give your guests an early glimpse of the celebration.",
    colStart: 3,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
  // Column 4, row 2 — Wedding Stationery
  {
    id: "wedding-stationery",
    image: "/images/services/invitation-print/feature-wedding-stationery.png",
    title: "Wedding Stationery",
    description: "Menus, place cards, table numbers, programs, thank-you cards and supporting pieces.",
    colStart: 4,
    colSpan: 1,
    rowStart: 2,
    rowSpan: 1,
  },
];


// ── Process steps section content ──────────────────────────────────

export const invitationPrintProcessImage = "/images/services/invitation-print/process-flatlay.jpg";
export const invitationPrintProcessEyebrow = "Our Process";
export const invitationPrintProcessHeading = "Small Pieces. Big Impression.";

export const invitationPrintProcessSteps: ProcessStep[] = [
  {
    id: "paper",
    icon: "/images/icons/process-paper.svg",
    title: "Paper",
    description: "Premium stocks, textures and finishes selected for the experience.",
  },
  {
    id: "type",
    icon: "/images/icons/process-type.svg",
    title: "Type",
    description: "Typography that gives the invitation its personality and voice.",
  },
  {
    id: "finish",
    icon: "/images/icons/process-finish.svg",
    title: "Finish",
    description: "Foiling, embossing, letterpress, die-cutting and other finishing details.",
  },
  {
    id: "packaging",
    icon: "/images/icons/process-packaging.svg",
    title: "Packaging",
    description: "Envelopes, ribbons, seals, boxes and presentation that complete the reveal.",
  },
];


export const invitationprintFaqItems: FAQItem[] = [
   {
  id: "custom-invitations",
  question: "Do you design custom invitations?",
  answer:
    "Yes. Every invitation can be developed around the event's personality, theme, colours, typography and overall creative direction.",
},
{
  id: "digital-printed-invitations",
  question: "Do you provide both digital and printed invitations?",
  answer:
    "Yes. We can create digital invitations as well as fully printed invitation suites.",
},
{
  id: "complete-wedding-stationery",
  question: "Can you design the complete wedding stationery?",
  answer:
    "Yes. We can create a coordinated stationery system including invitations, menus, place cards, table numbers, programs, thank-you cards and other pieces.",
},
{
  id: "printing-and-design",
  question: "Do you provide printing as well as design?",
  answer:
    "Yes. We can coordinate the complete process from design through printing, finishing and final delivery.",
},
{
  id: "printing-finishes",
  question: "What printing finishes can you provide?",
  answer:
    "Depending on the project, options can include foil, embossing, letterpress, die-cutting, textured papers and other premium finishing techniques.",
},
{
  id: "envelopes-packaging",
  question: "Can you create matching envelopes and packaging?",
  answer:
    "Yes. Envelopes, liners, ribbons, seals, boxes, tags and other presentation elements can be designed as part of the invitation suite.",
},
];