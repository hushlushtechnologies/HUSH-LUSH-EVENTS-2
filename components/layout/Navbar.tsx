"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServicesMegaMenu } from "@/components/layout/ServicesMegaMenu";
import { primaryNav, ctaLink } from "@/data/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const t = { duration: shouldReduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] as const };
  const rollT = { duration: shouldReduceMotion ? 0 : 0.35, ease: [0.76, 0, 0.24, 1] as const };

  return (
    <header className="sticky top-0 z-50 border-b border-light bg-light">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/images/logo.svg"
            alt="Hush Lush Events"
            width={160}
            height={48}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {primaryNav.map((link) => {
            const hasChildren = Boolean(link.children?.length);
            const isActive = hasChildren
              ? link.children!.some((child) => pathname === child.href)
              : pathname === link.href;

            const label = (
              <span
                className={`font-body flex items-center gap-1 font-medium text-sm tracking-wide transition-colors ${
                  isActive
                    ? "text-dark-secondary"
                    : "text-light-text-primary group-hover:text-dark-secondary"
                }`}
              >
                {/* Vertical rolling text: two stacked identical labels
                    inside an overflow-hidden mask. On hover the stack
                    translates up by exactly one line height, revealing
                    the duplicate (accent-colored) label from below. */}
                <span className="relative block h-[1em] overflow-hidden">
                  <motion.span
                    className="flex flex-col"
                    initial={{ y: 0 }}
                    whileHover={{ y: "-50%" }}
                    transition={rollT}
                  >
                    <span className="block h-[1em] leading-[1em]">
                      {link.label.toUpperCase()}
                    </span>
                    <span className="block h-[1em] leading-[1em] text-dark-secondary">
                      {link.label.toUpperCase()}
                    </span>
                  </motion.span>
                </span>

                {hasChildren && (
                  <motion.svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    aria-hidden="true"
                    animate={{ rotate: openDropdown === link.label ? 180 : 0 }}
                    transition={t}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
                  </motion.svg>
                )}
              </span>
            );

            return (
              <div
                key={link.label}
                className="group relative"
                onMouseEnter={() => hasChildren && setOpenDropdown(link.label)}
                onMouseLeave={() => hasChildren && setOpenDropdown(null)}
              >
                {link.href ? (
                  <Link href={link.href}>{label}</Link>
                ) : (
                  // No page to navigate to (e.g. "Services") — the label
                  // exists only to reveal the dropdown, so it's a button,
                  // not a Link. Click also toggles it, for touch/keyboard
                  // users who can't hover.
                  <button
                    type="button"
                    aria-expanded={openDropdown === link.label}
                    onClick={() =>
                      setOpenDropdown((current) => (current === link.label ? null : link.label))
                    }
                  >
                    {label}
                  </button>
                )}

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-px w-full bg-dark-secondary"
                    transition={t}
                  />
                )}

                <AnimatePresence>
                  {hasChildren && openDropdown === link.label && <ServicesMegaMenu />}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button href={ctaLink.href!} variant="outline">
            {ctaLink.label}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex items-center md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </button>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={t}
            className="overflow-hidden border-t border-light bg-light md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {primaryNav.map((link) => {
                const hasChildren = Boolean(link.children?.length);

                if (hasChildren) {
                  return (
                    <div key={link.label} className="border-b border-light/60 py-1">
                      <button
                        className="font-body flex w-full items-center justify-between py-2 text-sm text-light-secondary"
                        aria-expanded={mobileServicesOpen}
                        onClick={() => setMobileServicesOpen((v) => !v)}
                      >
                        {link.label}
                        <motion.svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          aria-hidden="true"
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={t}
                        >
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
                        </motion.svg>
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={t}
                            className="flex flex-col gap-1 overflow-hidden pb-2 pl-3"
                          >
                            {link.children!.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href!}
                                  onClick={() => setMobileOpen(false)}
                                  className="font-body block py-1.5 text-sm text-light-muted hover:text-light-brand"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className={`font-body py-2 text-sm ${
                      pathname === link.href ? "text-light-brand" : "text-light-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button href={ctaLink.href!} variant="outline" className="mt-3 w-full">
                {ctaLink.label}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}