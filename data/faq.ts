export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "types-of-events",
    question: "What types of events do you plan?",
    answer:
      "We plan and coordinate a wide range of events, including private celebrations, birthdays, weddings, corporate gatherings, gala nights, launches, and bespoke experiences.",
  },
  {
    id: "manage-entire-event",
    question: "Can Hush Lush manage my entire event from start to finish?",
    answer:
      "Yes — from the first conversation to the final celebration, our team handles planning, design, vendor coordination and on-the-day execution.",
  },
  {
    id: "own-concept",
    question: "Can you work with a concept or theme I already have?",
    answer:
      "Absolutely. We're happy to build on your existing vision, or refine it further with our own creative direction.",
  },
  {
    id: "venue-vendor",
    question: "Do you help with venue and vendor selection?",
    answer:
      "Yes, we help identify and coordinate the right venues and vendors to match your event's style, scale and budget.",
  },
  {
    id: "how-early",
    question: "How early should I contact Hush Lush?",
    answer:
      "We recommend reaching out as early as possible, ideally several months in advance, especially for larger events or peak-season dates.",
  },
  {
    id: "specific-budget",
    question: "Can you plan an event within a specific budget?",
    answer:
      "Yes — we work within a range of budgets and will always be transparent about what's achievable within yours.",
  },
];