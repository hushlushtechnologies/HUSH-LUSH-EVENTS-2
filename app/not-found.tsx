 "use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function NotFound() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-dark py-20">
      {/* Same blur-blob glow technique used throughout this build */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[140px]"
        style={{ background: "var(--color-dark-secondary)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full opacity-30 blur-[140px]"
        style={{ background: "#8B2942" }}
      />

      <Container className="relative z-10">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto flex max-w-xl flex-col items-center text-center"
        >
          {/* Logo mark — same asset used across CircularBadge, Preloader, Hero */}
          <div className="relative mb-6 h-11 w-11">
            <Image src="/images/logo-mark.svg" alt="" fill className="object-contain" />
          </div>

          {/* Large outlined 404 numeral */}
          <h1
            className="font-display text-[110px] font-bold leading-none tracking-wide sm:text-[150px]"
            style={{ WebkitTextStroke: "1.5px var(--color-dark-border)", color: "transparent" }}
          >
            404
          </h1>

          <h2 className="font-display mt-4 text-3xl text-dark-text-primary sm:text-4xl">
            This Moment Wasn&apos;t Planned
          </h2>

          <p className="font-body mt-4 max-w-md text-sm leading-relaxed text-dark-text-secondary sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist, may have moved, or the link
            might be outdated. Let&apos;s get you back to where the celebration is.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Button href="/" variant="solid" className="w-full sm:w-auto sm:flex-none">
              <span className="flex items-center justify-center gap-2">
                Back to Home
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </Button>
            <Button href="/our-work" variant="outline" className="w-full sm:w-auto sm:flex-none">
              Explore Our Work
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-2 text-xs text-dark-text-muted">
            <span>Looking for something specific?</span>
            <Link href="/plan-your-event" className="font-semibold text-dark-secondary underline underline-offset-2">
              Plan your event
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}