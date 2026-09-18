export interface PortfolioFilter {
  id: string;
  label: string;
}

export const portfolioFilters: PortfolioFilter[] = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  { id: "venue", label: "Venue" },
  { id: "wedding", label: "Wedding" },
  { id: "decor-styling", label: "Decor & Styling" },
  { id: "corporate", label: "Corporate" },
  { id: "entertainment", label: "Entertainment" },
  { id: "invitation", label: "Invitation" },
  { id: "special", label: "Special" },
];

export type PortfolioSpan = "large" | "stacked" | "third";
export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  categories: string[];
  span: PortfolioSpan;
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
  { id: "events", label: "Event Planning", count: 12 },
  { id: "venue", label: "Venue", count: 0 },
  { id: "wedding", label: "Wedding", count: 12 },
  { id: "decor-styling", label: "Decor & Styling", count: 7 },
  { id: "corporate", label: "Corporate", count: 12 },
  { id: "entertainment", label: "Entertainment", count: 0 },
  { id: "invitation", label: "Invitation", count: 0 },
  { id: "special", label: "Special", count: 9 },
];

// Exported so OurWorkPortfolio can reassign spans by final display
// position (e.g. after interleaving categories for the "All" filter)
// rather than relying on each item's originally-generated span, which
// only makes sense in its original per-category order.
export const SPAN_PATTERN: PortfolioSpan[] = [
  "large", "stacked", "stacked",
  "third", "third", "third",
  "third", "third", "third",
  "third",
];

function buildCategoryItems(category: CategoryDef): PortfolioItem[] {
  return Array.from({ length: category.count }, (_, i) => {
    const n = i + 1;
    return {
      id: `${category.id}-${n}`,
      title: `${category.label} Project ${n}`,
      subtitle: category.label,
      image: `/images/our-work/${category.id}-${n}.jpg`,
      categories: [category.id],
      span: SPAN_PATTERN[i % SPAN_PATTERN.length],
    };
  });
}

export const portfolioItems: PortfolioItem[] = PORTFOLIO_CATEGORIES.flatMap(buildCategoryItems);