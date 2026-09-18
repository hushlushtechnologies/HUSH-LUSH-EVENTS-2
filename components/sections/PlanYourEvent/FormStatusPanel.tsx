"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface FormStatusPanelProps {
  variant: "success" | "error";
  heading: string;
  subheading?: string;
  description: string;
  footnote?: string;
  primaryAction: { label: string; onClick?: () => void; href?: string };
  secondaryAction: { label: string; href: string };
}

export function FormStatusPanel({
  variant,
  heading,
  subheading,
  description,
  footnote,
  primaryAction,
  secondaryAction,
}: FormStatusPanelProps) {
  const isSuccess = variant === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate overflow-hidden rounded-3xl border border-dark-border/40 bg-dark-card p-8 text-center md:p-10"
    >
      {/* Warm glow, bleeding from the bottom — same blur-blob technique
          used elsewhere in this build (PromoBanner, FAQSection, etc.) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-64 -translate-x-1/2 translate-y-1/2 rounded-full opacity-70 blur-[70px]"
        style={{ background: isSuccess ? "var(--color-dark-secondary)" : "#3a1414" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Status icon — outlined circle with X or check */}
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full border-2"
          style={{ borderColor: isSuccess ? "#4ADE80" : "#E5484D" }}
        >
          {isSuccess ? (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
              <path
                d="M7 15.5L12 20.5L23 9"
                stroke="#4ADE80"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
              <path
                d="M5 5L21 21M21 5L5 21"
                stroke="#E5484D"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>

        <h2 className="font-display mt-6 text-2xl text-dark-text-primary md:text-3xl">
          {heading}
        </h2>
        {subheading && (
          <p className="font-display mt-1 text-xl text-dark-text-primary md:text-2xl">
            {subheading}
          </p>
        )}

        <p className="font-body mt-4 max-w-md text-sm leading-relaxed text-dark-text-secondary">
          {description}
        </p>

        {footnote && (
          <p className="font-body mt-3 max-w-md text-sm leading-relaxed text-dark-text-muted">
            {footnote}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {primaryAction.href ? (
            <Link
              href={primaryAction.href}
              className={`font-body rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                isSuccess
                  ? "bg-dark-button-gradient text-dark-bg"
                  : "bg-[#82A484] text-dark-bg"
              }`}
            >
              {primaryAction.label}
            </Link>
          ) : (
            <button
              type="button"
              onClick={primaryAction.onClick}
              className={`font-body rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                isSuccess
                  ? "bg-dark-button-gradient text-dark-bg"
                  : "bg-[#82A484] text-dark-bg"
              }`}
            >
              {primaryAction.label}
            </button>
          )}

          <Link
            href={secondaryAction.href}
            className="font-body rounded-full bg-white px-6 py-3 text-sm font-semibold text-dark-bg transition-transform hover:scale-[1.03]"
          >
            {secondaryAction.label}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}