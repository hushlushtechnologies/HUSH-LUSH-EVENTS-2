"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  navRollTransition,
  navEntranceItem,
  dropdownVariants,
  dropdownItemVariants,
} from "@/lib/motion/nav";

interface ServicesNavItemProps {
  href: string;
  label: string;
  isActive: boolean;
  items: readonly { label: string; href: string }[];
  activeHref: string;
}

export function ServicesNavItem({ href, label, isActive, items, activeHref }: ServicesNavItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={navEntranceItem}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        aria-expanded={open}
        aria-haspopup="true"
        className={`group flex items-center gap-1.5 py-1 font-body text-sm font-medium uppercase tracking-wide ${
          isActive ? "text-brand-secondary" : "text-light-secondary"
        }`}
      >
        <span className="relative block h-[1.1em] overflow-hidden">
          <motion.span
            className="flex flex-col"
            initial={{ y: 0 }}
            whileHover={{ y: "-50%" }}
            transition={navRollTransition}
          >
            <span className="block h-[1.1em] leading-[1.1em] group-hover:text-brand-secondary">
              {label}
            </span>
            <span className="block h-[1.1em] leading-[1.1em] text-brand-secondary">
              {label}
            </span>
          </motion.span>
        </span>

        <motion.svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={navRollTransition}
        >
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </Link>

      {isActive && (
        <motion.span
          layoutId="nav-active-underline"
          className="absolute -bottom-2 left-0 h-[1.5px] w-full bg-brand-secondary"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}

      <AnimatePresence>
        {open && (
          <motion.ul
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{ originY: 0 }}
            className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl border border-light bg-light-card p-2 shadow-lg"
          >
            {items.map((child) => {
              const isChildActive = activeHref === child.href;
              return (
                <motion.li key={child.href} variants={dropdownItemVariants}>
                  <Link
                    href={child.href}
                    aria-current={isChildActive ? "page" : undefined}
                    className={`block rounded-xl px-4 py-2.5 font-body text-sm transition-colors duration-200 ${
                      isChildActive
                        ? "bg-light-surface text-brand-secondary"
                        : "text-light-secondary hover:bg-light-surface hover:text-brand-secondary"
                    }`}
                  >
                    {child.label}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}