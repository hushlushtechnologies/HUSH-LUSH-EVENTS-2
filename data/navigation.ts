import type { NavLink } from "@/types/navigation";

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    children: [
      { label: "Weddings", href: "/services/weddings" },
      { label: "Corporate Events", href: "/services/corporate-events" },
    ],
  },
  { label: "Our Work", href: "/our-work" },
  { label: "Journal", href: "/journal" },
];

export const ctaLink: NavLink = {
  label: "Plan your Events",
  href: "/plan-your-event",
};