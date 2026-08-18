export interface ServiceShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  href: string;
}

export const servicesShowcase: ServiceShowcaseItem[] = [
  {
    id: "event-planning",
    title: "Event Planning",
    description:
      "Everything starts with a plan. We take care of the logistics, timelines and coordination so you can focus on enjoying the moment.",
    image: "/images/services-showcase/event-planning.jpg",
    ctaLabel: "Explore Events",
    href: "/services/event-planning",
  },
  {
    id: "venue-hospitality",
    title: "Venue & Hospitality",
    description:
      "From intimate venues to grand celebrations, we help you find the right space and create a seamless hospitality experience.",
    image: "/images/services-showcase/venue-hospitality.jpg",
    ctaLabel: "Explore Venue",
    href: "/services/venue-hospitality",
  },
  {
    id: "wedding-planning",
    title: "Wedding Planning",
    description:
      "From the first ceremony idea to the final celebration, we bring every wedding detail together.",
    image: "/images/services-showcase/wedding-planning.jpg",
    ctaLabel: "Explore Weddings",
    href: "/services/wedding-planning",
  },
  {
    id: "decor-styling",
    title: "Decor & Styling",
    description:
      "We turn ordinary venues into immersive environments that reflect your theme, personality and mood.",
    image: "/images/services-showcase/decor-styling.jpg",
    ctaLabel: "Explore Decor",
    href: "/services/decor-styling",
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    description:
      "Professional, polished, and purpose-driven events designed to connect, inspire, and leave a lasting impression.",
    image: "/images/services-showcase/corporate-events.jpg",
    ctaLabel: "Explore Corporate",
    href: "/services/corporate-events",
  },
  {
    id: "entertainment-production",
    title: "Entertainment & Production",
    description: "We create the energy. The right entertainment can completely change the atmosphere of an event.",
    image: "/images/services-showcase/entertainment-production.jpg",
    ctaLabel: "Explore Entertainments",
    href: "/services/entertainment-production",
  },
  {
    id: "invitation-print",
    title: "Invitation & Print",
    description: "The celebration begins before the event. Your invitation is the first impression of your celebration.",
    image: "/images/services-showcase/invitation-print.jpg",
    ctaLabel: "Explore Invitation",
    href: "/services/invitation-print",
  },
  {
    id: "special-experience",
    title: "Special Experience",
    description: "Because some events need more. This is our flexible category for custom requirements.",
    image: "/images/services-showcase/special-experience.jpg",
    ctaLabel: "Explore Experience",
    href: "/services/special-experience",
  },
];