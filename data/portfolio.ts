// export interface PortfolioFilter {
//   id: string;
//   label: string;
// }

// export const portfolioFilters: PortfolioFilter[] = [
//   { id: "all", label: "All" },
//   { id: "events", label: "Events" },
//   // { id: "venue", label: "Venue" }, — hidden for now, no images yet (count: 0)
//   { id: "wedding", label: "Wedding" },
//   { id: "decor-styling", label: "Decor & Styling" },
//   { id: "corporate", label: "Corporate" },
//   // { id: "entertainment", label: "Entertainment" }, — hidden for now, no images yet (count: 0)
//   // { id: "invitation", label: "Invitation" }, — hidden for now, no images yet (count: 0)
//   { id: "special", label: "Special" },
// ];

// export type PortfolioSpan = "large" | "stacked" | "third";
// export interface PortfolioItem {
//   id: string;
//   title: string;
//   subtitle: string;
//   image: string;
//   categories: string[];
//   span: PortfolioSpan;
// }

// export const portfolioIntro = {
//   headingLines: ["Our Work"],
//   description:
//     "A curated selection of celebrations, gatherings, and moments we've brought to life with intention, creativity, and a little Hush Lush magic.",
// };

// interface CategoryDef {
//   id: string;
//   label: string;
//   count: number;
// }

// const PORTFOLIO_CATEGORIES: CategoryDef[] = [
//   { id: "events", label: "Event Planning", count: 12 },
//   { id: "venue", label: "Venue", count: 0 },
//   { id: "wedding", label: "Wedding", count: 12 },
//   { id: "decor-styling", label: "Decor & Styling", count: 7 },
//   { id: "corporate", label: "Corporate", count: 12 },
//   { id: "entertainment", label: "Entertainment", count: 0 },
//   { id: "invitation", label: "Invitation", count: 0 },
//   { id: "special", label: "Special", count: 9 },
// ];

// export const SPAN_PATTERN: PortfolioSpan[] = [
//   "large", "stacked", "stacked",
//   "third", "third", "third",
//   "third", "third", "third",
//   "third",
// ];

// function buildCategoryItems(category: CategoryDef): PortfolioItem[] {
//   return Array.from({ length: category.count }, (_, i) => {
//     const n = i + 1;
//     return {
//       id: `${category.id}-${n}`,
//       title: `${category.label} Project ${n}`,
//       subtitle: category.label,
//       image: `/images/our-work/${category.id}-${n}.jpg`,
//       categories: [category.id],
//       span: SPAN_PATTERN[i % SPAN_PATTERN.length],
//     };
//   });
// }

// export const portfolioItems: PortfolioItem[] = PORTFOLIO_CATEGORIES.flatMap(buildCategoryItems);

 import orientationMap from "./portfolio-orientations.json";

export interface PortfolioFilter {
  id: string;
  label: string;
}

export const portfolioFilters: PortfolioFilter[] = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  // { id: "venue", label: "Venue" }, — hidden for now, no images yet (count: 0)
  { id: "wedding", label: "Wedding" },
  { id: "decor-styling", label: "Decor & Styling" },
  { id: "corporate", label: "Corporate" },
  // { id: "entertainment", label: "Entertainment" }, — hidden for now, no images yet (count: 0)
  // { id: "invitation", label: "Invitation" }, — hidden for now, no images yet (count: 0)
  { id: "special", label: "Special" },
];

export type PortfolioSpan = "large" | "stacked" | "third";
export type PortfolioOrientation = "landscape" | "portrait";

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  categories: string[];
  span: PortfolioSpan;
  orientation?: PortfolioOrientation; // optional — defaults to "landscape" when omitted (see PortfolioCard)
}

export const portfolioIntro = {
  headingLines: ["Our Work"],
  description:
    "A curated selection of celebrations, gatherings, and moments we've brought to life with intention, creativity, and a little Hush Lush magic.",
};

interface CategoryDef {
  id: string;
  label: string;
  count: number;
}

const PORTFOLIO_CATEGORIES: CategoryDef[] = [
  { id: "events", label: "Event Planning", count: 10 },
  { id: "venue", label: "Venue", count: 0 },
  { id: "wedding", label: "Wedding", count: 12 },
  { id: "decor-styling", label: "Decor & Styling", count: 7 },
  { id: "corporate", label: "Corporate", count: 12 },
  { id: "entertainment", label: "Entertainment", count: 0 },
  { id: "invitation", label: "Invitation", count: 0 },
  { id: "special", label: "Special", count: 9 },
];

export const SPAN_PATTERN: PortfolioSpan[] = [
  "large", "stacked", "stacked",
  "third", "third", "third",
  "third", "third", "third",
  "third",
];

function buildCategoryItems(category: CategoryDef): PortfolioItem[] {
  return Array.from({ length: category.count }, (_, i) => {
    const n = i + 1;
    const id = `${category.id}-${n}`;
    return {
      id,
      title: `${category.label} Project ${n}`,
      subtitle: category.label,
      image: `/images/our-work/${id}.jpg`,
      categories: [category.id],
      span: SPAN_PATTERN[i % SPAN_PATTERN.length],
      orientation: (orientationMap as Record<string, PortfolioOrientation>)[id] ?? "landscape",
    };
  });
}

export const portfolioItems: PortfolioItem[] = PORTFOLIO_CATEGORIES.flatMap(buildCategoryItems);