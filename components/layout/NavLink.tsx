"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navRollTransition, navEntranceItem } from "@/lib/motion/nav";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  /** Extra content rendered after the rolling label (e.g. a dropdown chevron). */
  trailing?: React.ReactNode;
}

export function NavLink({ href, label, isActive, trailing }: NavLinkProps) {
  return (
    <motion.div variants={navEntranceItem} className="relative">
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={`group flex items-center gap-1 py-1 font-body text-sm font-medium uppercase tracking-wide ${
          isActive ? "text-brand-secondary" : "text-light-secondary"
        }`}
      >
        {/* Vertical rolling text: two stacked identical labels inside an
            overflow-hidden mask. On hover the stack translates up by
            exactly one line height, revealing the duplicate from below. */}
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
        {trailing}
      </Link>

      {isActive && (
        <motion.span
          layoutId="nav-active-underline"
          className="absolute -bottom-2 left-0 h-[1.5px] w-full bg-brand-secondary"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
    </motion.div>
  );
}