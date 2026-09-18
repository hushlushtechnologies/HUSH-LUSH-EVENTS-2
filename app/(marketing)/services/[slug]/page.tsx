import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventsPlanningHero } from "@/components/sections/ServiceDetail/heroes/EventsPlanningHero";
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection";
import { ServiceFeatures } from "@/components/ui/ServiceFeatures";
import { FAQSection } from "@/components/sections/FAQ/FAQSection";
import { ServiceProcessSteps } from "@/components/ui/ServiceProcessSteps";
import { services } from "@/data/services";
import {
  eventPlanningBrowserTabs,
  eventPlanningAddressText,
  eventPlanningExperienceContent,
  eventPlanningFeaturesHeading,
  eventPlanningFeatureItems,
  eventPlanningFeaturesFooterLabel,
  eventPlanningFaqItems,
  eventPlanningProcessImage,
  eventPlanningProcessEyebrow,
  eventPlanningProcessHeading,
  eventPlanningProcessSteps,
} from "@/data/services/event-planning";
import { VenueHospitalityHero } from "@/components/sections/ServiceDetail/heroes/VenueHospitalityHero";
import {
  venueHospitalityAddressText,
  venueHospitalityBrowserTabs,
  venueHospitalityExperienceContent,
  venueHospitalityFaqItems,
  venueHospitalityFeatureItems,
  venueHospitalityFeaturesFooterLabel,
  venueHospitalityFeaturesHeading,
  venueHospitalityPortfolioDescription,
  venueHospitalityPortfolioHeading,
  venueHospitalityPortfolioItems,
  venueHospitalityProcessEyebrow,
  venueHospitalityProcessHeading,
  venueHospitalityProcessImage,
  venueHospitalityProcessSteps,
} from "@/data/services/venue-hospitality";
import { ServicePortfolio } from "@/components/ui/ServicePortfolio";
import { WeddingPlanningHero } from "@/components/sections/ServiceDetail/heroes/WeddingPlanningHero";
import {
  weddingPlanningAddressText,
  weddingPlanningBrowserTabs,
  weddingPlanningExperienceContent,
  weddingPlanningFaqItems,
  weddingPlanningFeatureItems,
  weddingPlanningFeaturesFooterLabel,
  weddingPlanningFeaturesHeading,
  weddingPlanningPortfolioDescription,
  weddingPlanningPortfolioHeading,
  weddingPlanningPortfolioItems,
  weddingPlanningProcessEyebrow,
  weddingPlanningProcessHeading,
  weddingPlanningProcessImage,
  weddingPlanningProcessSteps,
} from "@/data/services/wedding-planning";
import { DecorStylingHero } from "@/components/sections/ServiceDetail/heroes/DecorStylingHero";
import {
  decorStylingBrowserTabs,
  decorStylingAddressText,
  decorStylingExperienceContent,
  decorStylingFeaturesHeading,
  decorStylingFeatureItems,
  decorStylingFeaturesFooterLabel,
  decorStylingPortfolioHeading,
  decorStylingPortfolioDescription,
  decorStylingPortfolioItems,
} from "@/data/services/decor-styling";
import { CorporateEventsHero } from "@/components/sections/ServiceDetail/heroes/CorporateEventsHero";
import {
  corporateEventsAddressText,
  corporateEventsBrowserTabs,
  corporateEventsExperienceContent,
  corporateEventsFaqItems,
  corporateEventsFeatureItems,
  corporateEventsFeaturesFooterLabel,
  corporateEventsFeaturesHeading,
  corporateEventsPortfolioDescription,
  corporateEventsPortfolioHeading,
  corporateEventsPortfolioItems,
  corporateEventsProcessEyebrow,
  corporateEventsProcessHeading,
  corporateEventsProcessImage,
  corporateEventsProcessSteps,
} from "@/data/services/corporate-events";
import { EntertainmentProductionHero } from "@/components/sections/ServiceDetail/heroes/EntertainmentProductionHero";
import { InvitationPrintHero } from "@/components/sections/ServiceDetail/heroes/InvitationPrintHero";
import { SpecialExperienceHero } from "@/components/sections/ServiceDetail/heroes/SpecialExperienceHero";
import {
  invitationprintFaqItems,
  invitationPrintFeatureItems,
  invitationPrintFeaturesFooterLabel,
  invitationPrintFeaturesHeading,
  invitationPrintProcessEyebrow,
  invitationPrintProcessHeading,
  invitationPrintProcessImage,
  invitationPrintProcessSteps,
} from "@/data/services/invitation-print";
import {
  specialExperienceAddressText,
  specialExperienceBrowserTabs,
  specialExperienceContent,
  specialExperienceFaqItems,
  specialExperienceFeatureItems,
  specialExperienceFeaturesFooterLabel,
  specialExperienceFeaturesHeading,
  specialExperienceProcessEyebrow,
  specialExperienceProcessHeading,
  specialExperienceProcessImage,
  specialExperienceProcessSteps,
} from "@/data/services/special-experience";
import { portfolioItems } from "@/data/portfolio";
import {
  entertainmentAddressText,
  entertainmentBrowserTabs,
  entertainmentExperienceContent,
  entertainmentFeatureItems,
  entertainmentFeaturesFooterLabel,
  entertainmentFeaturesHeading,
} from "@/data/services/entertainment-production";
import { PromoBanner } from "@/components/sections/PromoBanner/PromoBanner";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const weddingPortfolioItems = portfolioItems.filter((item) =>
  item.categories.includes("wedding"),
);

const specialPortfolioItems = portfolioItems.filter((item) =>
  item.categories.includes("special"),
);
const corporatePortfolioItems = portfolioItems.filter((item) =>
  item.categories.includes("corporate"),
);

const decorPortfolioItems = portfolioItems.filter((item) =>
  item.categories.includes("decor-styling")
);

const pageBySlug: Record<string, () => React.ReactNode> = {
  "event-planning": () => (
    <>
      <EventsPlanningHero />
      <ExperienceSection
        tabs={eventPlanningBrowserTabs}
        addressText={eventPlanningAddressText}
        content={eventPlanningExperienceContent}
        bgColor="bg-light-card"
      />
      <ServiceFeatures
        headingLines={eventPlanningFeaturesHeading}
        items={eventPlanningFeatureItems}
        footerLabel={eventPlanningFeaturesFooterLabel}
      />
      <ServicePortfolio
        headingLines={["Our Work"]}
        description="A curated selection of celebrations, gatherings, and moments we've brought to life with intention, creativity, and a little Hush Lush magic."
        items={weddingPortfolioItems}
      />
      <FAQSection items={eventPlanningFaqItems} />
      <ServiceProcessSteps
        image={eventPlanningProcessImage}
        eyebrow={eventPlanningProcessEyebrow}
        heading={eventPlanningProcessHeading}
        steps={eventPlanningProcessSteps}
      />
    </>
  ),
  "venue-hospitality": () => (
    <>
      <VenueHospitalityHero />
      <ExperienceSection
        tabs={venueHospitalityBrowserTabs}
        addressText={venueHospitalityAddressText}
        content={venueHospitalityExperienceContent}
        bgColor="bg-light-card"
      />
        <PromoBanner/>
      <ServiceFeatures
        headingLines={venueHospitalityFeaturesHeading}
        items={venueHospitalityFeatureItems}
        footerLabel={venueHospitalityFeaturesFooterLabel}
      />
      <ServicePortfolio
        headingLines={venueHospitalityPortfolioHeading}
        description={venueHospitalityPortfolioDescription}
        items={venueHospitalityPortfolioItems}
      />
      <FAQSection items={venueHospitalityFaqItems} />
      <ServiceProcessSteps
        image={venueHospitalityProcessImage}
        eyebrow={venueHospitalityProcessEyebrow}
        heading={venueHospitalityProcessHeading}
        steps={venueHospitalityProcessSteps}
      />
    </>
  ),
  "wedding-planning": () => (
    <>
      <WeddingPlanningHero />
      <ExperienceSection
        tabs={weddingPlanningBrowserTabs}
        addressText={weddingPlanningAddressText}
        content={weddingPlanningExperienceContent}
      />
        <PromoBanner/>
      <ServiceFeatures
        headingLines={weddingPlanningFeaturesHeading}
        items={weddingPlanningFeatureItems}
        footerLabel={weddingPlanningFeaturesFooterLabel}
      />
      <ServicePortfolio
        headingLines={["Our Work"]}
        description="A curated selection of celebrations, gatherings, and moments we've brought to life with intention, creativity, and a little Hush Lush magic."
        items={weddingPortfolioItems}
      />
      <FAQSection items={weddingPlanningFaqItems} />
      <ServiceProcessSteps
        image={weddingPlanningProcessImage}
        eyebrow={weddingPlanningProcessEyebrow}
        heading={weddingPlanningProcessHeading}
        steps={weddingPlanningProcessSteps}
      />
    </>
  ),
  "decor-styling": () => (
    <>
      <DecorStylingHero />
      <ExperienceSection
        tabs={decorStylingBrowserTabs}
        addressText={decorStylingAddressText}
        content={decorStylingExperienceContent}
        bgColor="bg-light-card"
      />
      <PromoBanner/>
      <ServiceFeatures
        headingLines={decorStylingFeaturesHeading}
        items={decorStylingFeatureItems}
        footerLabel={decorStylingFeaturesFooterLabel}
      />
         <ServicePortfolio
        headingLines={["Our Work"]}
        description="A curated selection of celebrations, gatherings, and moments we've brought to life with intention, creativity, and a little Hush Lush magic."
        items={decorPortfolioItems}
      />
      <FAQSection items={venueHospitalityFaqItems} />
      <ServiceProcessSteps
        image={weddingPlanningProcessImage}
        eyebrow={weddingPlanningProcessEyebrow}
        heading={weddingPlanningProcessHeading}
        steps={weddingPlanningProcessSteps}
      />
    </>
  ),
  "corporate-events": () => (
    <>
      <CorporateEventsHero />
      <ExperienceSection
        tabs={corporateEventsBrowserTabs}
        addressText={corporateEventsAddressText}
        content={corporateEventsExperienceContent}
        bgColor="bg-light-card"
      />
      <PromoBanner/>
      <ServiceFeatures
        headingLines={corporateEventsFeaturesHeading}
        items={corporateEventsFeatureItems}
        footerLabel={corporateEventsFeaturesFooterLabel}
      />
       <ServicePortfolio
        headingLines={["Our Work"]}
        description="A curated selection of celebrations, gatherings, and moments we've brought to life with intention, creativity, and a little Hush Lush magic."
        items={corporatePortfolioItems}
      />
      <FAQSection items={corporateEventsFaqItems} />
      <ServiceProcessSteps
        image={corporateEventsProcessImage}
        eyebrow={corporateEventsProcessEyebrow}
        heading={corporateEventsProcessHeading}
        steps={corporateEventsProcessSteps}
      />
    </>
  ),
  "entertainment-production": () => (
    <>
      <EntertainmentProductionHero />
      <ExperienceSection
        tabs={entertainmentBrowserTabs}
        addressText={entertainmentAddressText}
        content={entertainmentExperienceContent}
        bgColor="bg-dark"
        decorative
      />
        <PromoBanner />
      <ServiceFeatures
        headingLines={entertainmentFeaturesHeading}
        items={entertainmentFeatureItems}
        footerLabel={entertainmentFeaturesFooterLabel}
        tone="dark"
      />
    </>
  ),
  "invitation-print": () => (
    <>
      <InvitationPrintHero />
        <PromoBanner />
      <ServiceFeatures
        headingLines={invitationPrintFeaturesHeading}
        items={invitationPrintFeatureItems}
        footerLabel={invitationPrintFeaturesFooterLabel}
      />
      <FAQSection items={invitationprintFaqItems} />
      <ServiceProcessSteps
        image={invitationPrintProcessImage}
        eyebrow={invitationPrintProcessEyebrow}
        heading={invitationPrintProcessHeading}
        steps={invitationPrintProcessSteps}
      />
    </>
  ),
  "special-experience": () => (
    <>
      <SpecialExperienceHero />

      <ExperienceSection
        tabs={specialExperienceBrowserTabs}
        addressText={specialExperienceAddressText}
        content={specialExperienceContent}
      />
      <PromoBanner />
      <ServiceFeatures
        headingLines={specialExperienceFeaturesHeading}
        items={specialExperienceFeatureItems}
        footerLabel={specialExperienceFeaturesFooterLabel}
      />
      <ServicePortfolio
        headingLines={["Our Work"]}
        description="A curated selection of celebrations, gatherings, and moments we've brought to life with intention, creativity, and a little Hush Lush magic."
        items={specialPortfolioItems}
      />
      <FAQSection items={specialExperienceFaqItems} />
      <ServiceProcessSteps
        image={specialExperienceProcessImage}
        eyebrow={specialExperienceProcessEyebrow}
        heading={specialExperienceProcessHeading}
        steps={specialExperienceProcessSteps}
      />
    </>
  ),
};

export function generateStaticParams() {
  return Object.keys(pageBySlug).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const description = `Discover how Hush Lush Events approaches ${service.label.toLowerCase()} — from first concept to flawless execution.`;

  return {
    title: service.label,
    description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: service.label,
      description,
      url: `https://www.hushlushevents.com/services/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: service.label,
      description,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const renderPage = pageBySlug[slug];

  if (!renderPage) {
    notFound();
  }

  return <>{renderPage()}</>;
}