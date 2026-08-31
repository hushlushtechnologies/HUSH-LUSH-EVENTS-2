export interface ContactInfo {
  id: string;
  label: string;
  value: string;
}

export const planYourEventContent = {
  backgroundWord: "CONTACT",
  eyebrow: "Contact",
  heading: "Get in Touch",
  // Flagged: this subheading is generic template copy ("AI Automation")
  // that doesn't match an events business — replace before launch.
  description: "Have question or ready to transform your business with AI Automation",
};

export const contactInfo: ContactInfo[] = [
  { id: "email", label: "Email", value: "info@hushlushevents.com" },
  { id: "call", label: "Call Us", value: "+971 50 495 6725" },
  {
    id: "visit",
    label: "Visit Us",
    value: "Office No. 501 Al Zarouni Business center Al Barsha 1, Sheikh Zayed Road, Dubai",
  },
];

export const locationOptions = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Other"];

export const mapImage = "/images/plan-your-event/map.jpg";