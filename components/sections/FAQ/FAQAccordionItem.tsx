"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { FAQItem } from "@/data/faq";

interface FAQAccordionItemProps {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQAccordionItem({ item, index, isOpen, onToggle }: FAQAccordionItemProps) {
  return (
    <div className="rounded-2xl border border-dark-border/40 bg-dark-card/60">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-body flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-dark-primary/40 text-xs font-medium text-dark-primary">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="font-display flex-1 text-lg text-dark-text-primary">{item.question}</span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-dark-border/50 text-dark-text-secondary"
        >
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body px-6 pb-5 pl-[4.5rem] text-sm leading-relaxed text-dark-text-secondary">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}