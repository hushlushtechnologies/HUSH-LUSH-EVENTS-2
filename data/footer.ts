export interface FooterLink {
  label: string;
  href: string;
}

export const exploreLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Journal", href: "/journal" },
];

export const serviceLinks: FooterLink[] = [
  { label: "Event Planning", href: "/services/event-planning" },
  { label: "Wedding Planning", href: "/services/wedding-planning" },
  { label: "Decor & Styling", href: "/services/decor-styling" },
  { label: "Photography & Films", href: "/services/photography-films" },
  { label: "Entertainment", href: "/services/entertainment-production" },
];

export const contactInfo = {
  phone: "+971 50 495 6725",
  email: "info@afaqalmanzilproperties.com",
  address: "Office No. 501 Al Zarouni Business center Al Barsha 1, Sheikh Zayed Road, Dubai",
};