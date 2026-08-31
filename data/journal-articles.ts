 export interface Article {
  id: string;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  categories: string[];
}

export const articleFilters = [
  { id: "all", label: "All" },
  { id: "images", label: "Images" },
  { id: "video", label: "Video" },
  { id: "wedding", label: "Wedding" },
  { id: "corporate", label: "Corporate" },
  { id: "private", label: "Private" },
  { id: "celebration", label: "Celebration" },
  { id: "decor", label: "Decor" },
  { id: "entertainment", label: "Entertainment" },
  { id: "events", label: "Events" },
];

export const articles: Article[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `article-${i + 1}`,
  image: `/images/journal/article.png`,
  date: "16-06-24; 1:23 PM",
  title: "UAE announces fee for cafes, hotels, malls for playing music from December",
  excerpt:
    "The UAE's Ministry of Economy and Tourism has launched a new guide regulating the collective management of music rights, introducing licensing fees for businesses that play music commercially.",
  categories: ["events", "images"],
}));

export const sidebarContent = {
  subscribeText:
    "Be a part of our community. Follow us on social media and subscribe to our newsletter for exclusive deals and insights.",
  followLabel: "Follow our social media",
  telegramHeading: "Join Our Telegram Channel for Exclusive Offers",
  telegramText: "Stay updated with the latest deals and discounts. Join our Telegram channel to get:",
  telegramBullets: ["Real-Time Deals", "Exclusive Offers", "Trending Discounts"],
  telegramCta: "Join Our Telegram Channel",
  telegramHref: "https://t.me/hushlushevents",
  telegramImage: "/images/journal/telegram-promo.png",
};

// ── Article detail page content ──────────────────────────────────

export interface ArticleBodyBlock {
  type: "paragraph" | "heading";
  text: string;
}

export interface ArticleDetail extends Article {
  slug: string;
  lastUpdated: string;
  readTime: string;
  heroImage: string;
  body: ArticleBodyBlock[];
}

// Shared across all articles for now — every article in the screenshot
// shows identical body copy. Replace with real per-article content
// once available.
const sharedBody: ArticleBodyBlock[] = [
  {
    type: "paragraph",
    text: "Dubai: Restaurants, cafés, hotels, shopping malls, fitness centres and airlines across the UAE will come under a new music licensing fee framework from December 2026, following the launch of rules governing the commercial use of music.",
  },
  {
    type: "paragraph",
    text: "The Ministry of Economy and Tourism said on Tuesday that the Collective Management Guide for Music will also cover floating hotels, radio stations, television channels, concerts and similar events where the use of music is linked to copyright and related rights.",
  },
  {
    type: "paragraph",
    text: "Fee brackets will vary according to the nature of the music use and the size of the economic activity, although the Ministry did not provide individual fee amounts in its announcement.",
  },
  {
    type: "paragraph",
    text: "The framework was issued under Ministerial Resolution No. 136 of 2026 and is intended to standardise licensing criteria while setting out how payments linked to music rights will be collected and distributed.",
  },
  { type: "heading", text: "Fees begin in December" },
  {
    type: "paragraph",
    text: "Implementation will begin at the start of December, with the Emirates Music Rights Association and Music Nation responsible for collecting the fees and managing the associated rights.",
  },
  {
    type: "paragraph",
    text: "Both organisations have received permits from the Ministry to conduct collective management activities in music, including the collection and distribution of payments to creators and rights holders in the UAE.",
  },
  { type: "heading", text: "10% of collections to support music sector" },
  {
    type: "paragraph",
    text: "The guide also establishes a Cultural Support Fund for Music, which will receive 10% of the total amounts collected under the framework.",
  },
  {
    type: "paragraph",
    text: "The fund will provide financial, technical and artistic support for music composition, production, distribution and live performances, while also supporting emerging talent and the wider music industry.",
  },
  {
    type: "paragraph",
    text: "It will be overseen by the Ministry of Economy and Tourism and managed through a joint committee involving representatives from the Ministry and the Ministry of Culture.",
  },
];

export const articleDetails: ArticleDetail[] = articles.map((article, i) => ({
  ...article,
  slug: article.id,
  lastUpdated: "August 11, 2026",
  readTime: "3 Min Read",
  heroImage: `/images/journal/article-hero.png`,
  body: sharedBody,
}));

export function getArticleBySlug(slug: string) {
  return articleDetails.find((a) => a.slug === slug);
}