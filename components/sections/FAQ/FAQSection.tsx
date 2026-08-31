"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FAQAccordionItem } from "./FAQAccordionItem";
import { FAQSidebar } from "./FAQSidebar";
import { faqItems as defaultFaqItems } from "@/data/faq";
import type { FAQItem } from "@/data/faq";

interface FAQSectionProps {
  items?: FAQItem[];
}

export function FAQSection({ items = defaultFaqItems }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section className="bg-dark py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">
          <FAQSidebar />

          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="mx-auto flex flex-col items-center text-center"
            >
              <div className="relative h-16 w-16">
                <Image src="/images/decorations/heart-orbit.png" alt="" fill className="object-contain" />
              </div>
              <h2 className="font-display mt-2 text-4xl text-dark-text-primary md:text-5xl">FAQ</h2>
            </motion.div>

            <div className="mt-14 flex flex-col gap-4">
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
        </div>
      </Container>
    </section>
  );
}