 "use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FAQAccordionItem } from "./FAQAccordionItem";
import { FAQSidebar } from "./FAQSidebar";
import { faqItems as defaultFaqItems } from "@/data/faq";
import type { FAQItem } from "@/data/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FAQSectionProps {
  items?: FAQItem[];
}

export function FAQSection({ items = defaultFaqItems }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section className="relative isolate overflow-hidden bg-dark py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-[40%] -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold opacity-40 blur-[140px]"
      />
          <div
  className="absolute bottom-[25%] right-[3%] h-[380px] w-[380px] rounded-full opacity-60 blur-[140px]"
  style={{ background: "rgba(255, 155, 119, 0.4)" }}
/>
      <Container>
        {/* Full width — direct child of Container, not inside the grid below */}
        <SectionHeading
          decoration="/images/decorations/heart-orbit.png"
          headingLines={["FAQ"]}
          className="text-white"
        />

        <div className="mt-14 grid grid-cols-1 items-end gap-12 lg:grid-cols-[280px_1fr]">
          <FAQSidebar />

          <div className="flex flex-col gap-4">
            {items.map((item, index) => (
              <FAQAccordionItem
                key={item.id}
                item={item}
                index={index}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}