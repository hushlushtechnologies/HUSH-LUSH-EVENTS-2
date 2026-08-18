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
import { services } from "@/data/services";

export function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const t = { duration: shouldReduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] as const };

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
            const isActive = pathname === link.href;
            const isServices = link.label === "Services";

            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => isServices && setOpenDropdown(link.label)}
                onMouseLeave={() => isServices && setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`font-body flex items-center gap-1 font-medium text-sm tracking-wide transition-colors ${
                    isActive
                      ? "text-dark-secondary"
                      : "text-light-text-primary hover:text-dark-secondary"
                  }`}
                >
                  {link.label.toUpperCase()}
                  {isServices && (
                    <motion.svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      aria-hidden="true"
                      animate={{ rotate: openDropdown === "Services" ? 180 : 0 }}
                      transition={t}
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </motion.svg>
                  )}
                </Link>

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-px w-full bg-dark-secondary"
                    transition={t}
                  />
                )}

                <AnimatePresence>
                  {isServices && openDropdown === "Services" && <ServicesMegaMenu />}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button href={ctaLink.href} variant="outline">
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
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke="currentColor"
                strokeWidth="1.5"
              />
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
                const isServices = link.label === "Services";

                if (isServices) {
                  return (
                    <div key={link.href} className="border-b border-light/60 py-1">
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
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
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
                            {services.map((service) => (
                              <li key={service.id}>
                                <Link
                                  href={service.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="font-body block py-1.5 text-sm text-light-muted hover:text-light-brand"
                                >
                                  {service.label}
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
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`font-body py-2 text-sm ${
                      pathname === link.href
                        ? "text-light-brand"
                        : "text-light-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button
                href={ctaLink.href}
                variant="outline"
                className="mt-3 w-full"
              >
                {ctaLink.label}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}