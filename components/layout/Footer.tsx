 "use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { Container } from "@/components/ui/Container";
import { ConcentricRings } from "./decorative/ConcentricRings";
import { FloatingDots } from "./decorative/FloatingDots";
import { exploreLinks, serviceLinks, contactInfo } from "@/data/footer";
import { socialLinks } from "@/data/socials";

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M3 2h2.5l1 3-1.5 1a8 8 0 004 4l1-1.5 3 1V13a1 1 0 01-1 1C6.5 14 2 9.5 2 4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M8 1a5 5 0 00-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 00-5-5z" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="8" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");

  const phoneHref = `tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`;
  const mailHref = `mailto:${contactInfo.email}`;
  const mapHref = `https://maps.app.goo.gl/E6rTGpXKbGgcsA3x5`;

  return (
    <footer className="relative isolate overflow-hidden bg-dark">
      <ConcentricRings />
      <FloatingDots />

      {/* CTA block */}
      <div className="relative pt-28">
        <Container className="relative flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display relative text-4xl leading-tight text-dark-text-primary sm:text-5xl md:text-6xl"
          >
            <span className="block">Let&apos;s Create</span>
            <span className="relative inline-block">
              Something Extraordinary
              <svg
                width="280"
                height="20"
                viewBox="0 0 280 20"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-full mt-1 w-[70%] max-w-[240px] min-w-[150px] opacity-90"
              >
                <path d="M2 9C75 2 205 2 278 9" stroke="url(#cta-underline)" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <linearGradient id="cta-underline" gradientUnits="userSpaceOnUse" x1="2" y1="0" x2="278" y2="0">
                    <stop offset="0%" stopColor="#8B7863" />
                    <stop offset="55%" stopColor="#DCBA23" />
                    <stop offset="100%" stopColor="#E0E03D" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h2>

          <p className="font-body mt-8 max-w-md text-base text-dark-text-secondary">
            Have an idea, a date, or simply a dream?
            <br />
            Tell us what you&apos;re imagining
          </p>

          
           <a  href="/plan-your-event"
            className="font-body mt-8 rounded-full bg-dark-button-gradient px-8 py-3 text-sm font-medium text-dark-bg transition-transform hover:scale-105"
         >
            Let&apos;s Start the Work
          </a>
        </Container>
      </div>

      {/* Footer content block */}
      <div className="relative pb-10 pt-16">
        <Container className="relative">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
            <div>
              <div className="relative h-10 w-32">
                <Image src="/images/logo-dark.svg" alt="Hush Lush Events" fill className="object-contain" />
              </div>
              <p className="font-display mt-6 text-lg leading-snug text-dark-text-primary sm:text-2xl">
                We Create Moments.
                <br />
                You Keep the Memories
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            <div>
              <p className="font-body text-xs text-dark-text-muted sm:text-sm">Explore</p>
              <ul className="mt-4 flex flex-col gap-2.5 sm:gap-3">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-body text-xs text-dark-text-primary hover:text-light-brand sm:text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-body text-xs text-dark-text-muted sm:text-sm">Service</p>
              <ul className="mt-4 flex flex-col gap-2.5 sm:gap-3">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-body text-xs text-dark-text-primary hover:text-light-brand sm:text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-body text-xs text-dark-text-muted sm:text-sm">Media</p>
              <ul className="mt-4 flex flex-col gap-2.5 sm:gap-3">
                {socialLinks.map((social) => (
                  <li key={social.id} className="flex items-center gap-2">
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-dark-border/50 text-dark-text-primary"
                    >
                      <SocialIcon id={social.id} className="h-3.5 w-3.5" />
                    </Link>
                    <span className="font-body text-xs text-dark-text-primary sm:text-sm">{social.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-body text-xs text-dark-text-muted sm:text-sm">Get in Touch</p>
              <ul className="mt-4 flex flex-col gap-3 sm:gap-4">
                <li className="flex items-center gap-2 text-dark-text-primary">
                  <a href={phoneHref} className="flex items-center gap-2 hover:text-light-brand">
                    <PhoneIcon />
                    <span className="font-body text-xs sm:text-sm">{contactInfo.phone}</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-dark-text-primary">
                  <a href={mailHref} className="flex items-center gap-2 hover:text-light-brand">
                    <MailIcon />
                    <span className="font-body break-all text-xs sm:text-sm">{contactInfo.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-2 text-dark-text-primary">
                  
                 <a   href={mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 hover:text-light-brand"
                  >
                    <span className="mt-0.5 shrink-0"><PinIcon /></span>
                    <span className="font-body text-xs leading-relaxed sm:text-sm">{contactInfo.address}</span>
                  </a>
                </li>
              </ul>

              <Link href="/plan-your-event" className="font-body mt-6 inline-block rounded-full bg-light-card px-6 py-2 text-sm font-medium text-dark-bg">
                Plan your Event
              </Link>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-dark-border/30 pt-6 sm:flex-row">
            <p className="font-body text-xs text-dark-text-muted">
              © 2026 Hush Lush Events. All Rights Reserved. Designed by:{" "}
              <span className="text-dark-text-secondary">Hush Lush Technologies</span>
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="font-body text-xs text-dark-text-muted hover:text-light-brand">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-body text-xs text-dark-text-muted hover:text-light-brand">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}