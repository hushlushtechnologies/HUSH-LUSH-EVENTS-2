 export interface PromoBannerContent {
  badgeLabel: string;
  headingLines: [string, string];
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  images: string[];
}

export const defaultPromoBanner: PromoBannerContent = {
  badgeLabel: "August Month Offers - Event Planning",
  headingLines: ["Your Event.", "Our 30% Extra"],
  description:
    "Planning a corporate event, celebration, launch or special occasion? Book your event planning service this month and enjoy 30% off your event package.",
  primaryCta: { label: "Plan your Events", href: "/plan-your-event" },
  secondaryCta: { label: "View Our Event Planning Service", href: "/services/event-planning" },
  images: [
    "/images/promo/collage-1.jpg",
    "/images/promo/collage-2.jpg",
    "/images/promo/collage-3.jpg",
    "/images/promo/collage-4.jpg",
    "/images/promo/collage-5.jpg",
    "/images/promo/collage-6.jpg",
    "/images/promo/collage-7.jpg",
    "/images/promo/collage-8.jpg",
    "/images/promo/collage-9.jpg",
    "/images/promo/collage-10.jpg",
    "/images/promo/collage-11.jpg",
    "/images/promo/collage-12.jpg",
  ],
};