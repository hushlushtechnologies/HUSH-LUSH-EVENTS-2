 import type { NavLink } from "@/types/navigation";
import { services } from "@/data/services";

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    children: services.map((service) => ({
      label: service.label,
      href: service.href,
    })),
  },
  { label: "Our Work", href: "/our-work" },
  { label: "Journal", href: "/journal" },
];

export const ctaLink: NavLink = {
  label: "Plan your Events",
  href: "/plan-your-event",
};