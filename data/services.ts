 export interface Service {
  id: string;
  label: string;
  href: string;
}

export const services: Service[] = [
  { id: "event-planning", label: "Event Planning", href: "/services/event-planning" },
  { id: "venue-hospitality", label: "Venue & Hospitality", href: "/services/venue-hospitality" },
  { id: "wedding-planning", label: "Wedding Planning", href: "/services/wedding-planning" },
  { id: "decor-styling", label: "Decor & Styling", href: "/services/decor-styling" },
  { id: "corporate-events", label: "Corporate Events", href: "/services/corporate-events" },
  { id: "entertainment-production", label: "Entertainment & Production", href: "/services/entertainment-production" },
  { id: "invitation-print", label: "Invitation & Print", href: "/services/invitation-print" },
  { id: "special-experience", label: "Special Experience", href: "/services/special-experience" },
];