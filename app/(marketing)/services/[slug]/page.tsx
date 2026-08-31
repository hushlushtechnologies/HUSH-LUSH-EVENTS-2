import { notFound } from "next/navigation";
import { EventsPlanningHero } from "@/components/sections/ServiceDetail/heroes/EventsPlanningHero";
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection";
import { ServiceFeatures } from "@/components/ui/ServiceFeatures";
import { FAQSection } from "@/components/sections/FAQ/FAQSection";
import { ServiceProcessSteps } from "@/components/ui/ServiceProcessSteps";
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
import { corporateEventsAddressText, corporateEventsBrowserTabs, corporateEventsExperienceContent, corporateEventsPortfolioDescription, corporateEventsPortfolioHeading, corporateEventsPortfolioItems } from "@/data/services/corporate-events";
import { EntertainmentProductionHero } from "@/components/sections/ServiceDetail/heroes/EntertainmentProductionHero";
import { InvitationPrintHero } from "@/components/sections/ServiceDetail/heroes/InvitationPrintHero";
import { SpecialExperienceHero } from "@/components/sections/ServiceDetail/heroes/SpecialExperienceHero";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const pageBySlug: Record<string, () => React.ReactNode> = {
  "event-planning": () => (
    <>
      <EventsPlanningHero />
      <ExperienceSection
        tabs={eventPlanningBrowserTabs}
        addressText={eventPlanningAddressText}
        content={eventPlanningExperienceContent}
      />
      <ServiceFeatures
        headingLines={eventPlanningFeaturesHeading}
        items={eventPlanningFeatureItems}
        footerLabel={eventPlanningFeaturesFooterLabel}
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
      />
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
      <ServiceFeatures
        headingLines={weddingPlanningFeaturesHeading}
        items={weddingPlanningFeatureItems}
        footerLabel={weddingPlanningFeaturesFooterLabel}
      />
      <ServicePortfolio
        headingLines={weddingPlanningPortfolioHeading}
        description={weddingPlanningPortfolioDescription}
        items={weddingPlanningPortfolioItems}
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
    />
       <ServiceFeatures
      headingLines={decorStylingFeaturesHeading}
      items={decorStylingFeatureItems}
      footerLabel={decorStylingFeaturesFooterLabel}
    />
      <ServicePortfolio
      headingLines={decorStylingPortfolioHeading}
      description={decorStylingPortfolioDescription}
      items={decorStylingPortfolioItems}
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
    />
       <ServicePortfolio
      headingLines={corporateEventsPortfolioHeading}
      description={corporateEventsPortfolioDescription}
      items={corporateEventsPortfolioItems}
    />
  </>
  ),
  "entertainment-production": () => (
  <>
    <EntertainmentProductionHero />
  </>
),
"invitation-print": () => (
  <>
    <InvitationPrintHero />

  </>
),
"special-experience": () => (
  <>
    <SpecialExperienceHero/>
  </>
),
};

export function generateStaticParams() {
  return Object.keys(pageBySlug).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const renderPage = pageBySlug[slug];

  if (!renderPage) {
    notFound();
  }

  return <>{renderPage()}</>;
}
