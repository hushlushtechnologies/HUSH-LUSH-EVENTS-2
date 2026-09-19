"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ServicesMegaMenu } from "@/components/layout/ServicesMegaMenu";
import { primaryNav, ctaLink } from "@/data/navigation";
import type { NavLink } from "@/types/navigation";

const t = { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const };
const rollT = { duration: 0.35, ease: [0.76, 0, 0.24, 1] as const };

export function SiteHeader() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Whenever the route actually changes (e.g. clicking a service link
  // inside the mega menu), close whatever dropdown/drawer is open —
  // navigation itself isn't a signal the menu currently reacts to.
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-light bg-light">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMobile}>
          <Image src="/images/logo.svg" alt="Hush Lush Events" width={160} height={48} priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-12 md:flex">
          <nav className="flex items-center gap-9">
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
                  <span className="relative block h-[1em] overflow-hidden">
                    <motion.span
                      className="flex flex-col"
                      initial={{ y: 0 }}
                      whileHover={{ y: "-50%" }}
                      transition={rollT}
                    >
                      <span className="block h-[1em] leading-[1em]">{link.label.toUpperCase()}</span>
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
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={t}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />

            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
              animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-[80%] max-w-[380px] flex-col bg-light md:hidden"
            >
              <div className="flex items-center justify-between border-b border-light px-6 py-5">
                <Link href="/" onClick={closeMobile}>
                  <Image src="/images/logo.svg" alt="Hush Lush Events" width={130} height={40} />
                </Link>
                <button
                  type="button"
                  onClick={closeMobile}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-light-border bg-light-card text-light-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-1 flex-col overflow-y-auto px-6">
                {primaryNav.map((link) => {
                  const hasChildren = Boolean(link.children?.length);

                  if (hasChildren) {
                    return (
                      <div key={link.label} className="border-b border-light">
                        <button
                          type="button"
                          className="font-body flex w-full items-center justify-between py-5 text-base text-light-primary"
                          aria-expanded={mobileServicesOpen}
                          onClick={() => setMobileServicesOpen((v) => !v)}
                        >
                          {link.label}
                          <motion.svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="none"
                            aria-hidden="true"
                            animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                            transition={t}
                            className="text-light-brand"
                          >
                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </motion.svg>
                        </button>

                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.ul
                              layout
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={t}
                              className="flex flex-col gap-1 overflow-hidden pb-4 pl-2"
                            >
                              {link.children!.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href!}
                                    onClick={closeMobile}
                                    className="font-body block py-2 text-sm text-light-secondary transition-colors hover:text-light-brand"
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

                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href!}
                      onClick={closeMobile}
                      className={`font-body border-b border-light py-5 text-base transition-colors ${
                        isActive ? "text-light-brand" : "text-light-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="border-t border-light p-6">
                <Button href={ctaLink.href!} variant="solid" className="w-full">
                  {ctaLink.label}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}