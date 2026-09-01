 "use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  defaultPromoBanner,
  type PromoBannerContent,
} from "@/data/promo-banner";

interface PromoBannerProps extends Partial<PromoBannerContent> {}

// Scattered accent dots over the photo collage — fixed positions (not
// random), reusing the same gold/burgundy tones as the site's existing
// glow tokens rather than inventing new colors.
const dots = [
  { top: "8%", left: "18%", size: 12, color: "var(--color-dark-secondary)" },
  { top: "4%", left: "62%", size: 10, color: "var(--color-dark-secondary)" },
  { top: "38%", left: "82%", size: 14, color: "#B5657A" },
  { top: "40%", left: "6%", size: 12, color: "#B5657A" },
  { top: "62%", left: "48%", size: 10, color: "var(--color-dark-secondary)" },
];

export function PromoBanner(props: PromoBannerProps) {
  const content: PromoBannerContent = { ...defaultPromoBanner, ...props };
  const {
    badgeLabel,
    headingLines,
    description,
    primaryCta,
    secondaryCta,
    images,
  } = content;
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-12 md:py-16 bg-light-card">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[40px] bg-dark"
          style={{
            backgroundImage:
              "radial-gradient(120% 100% at 15% 100%, rgba(148,93,14,0.35) 0%, rgba(8,6,5,0) 60%)",
          }}
        >
          <div className="grid grid-cols-1 items-center gap-10 px-8 py-12 md:grid-cols-2 md:px-14 md:py-14">
            {/* Left — copy */}
            <div className="relative z-10">
              <span
                className="font-body inline-block rounded-lg border border-brand-gold/40 bg-dark-card/60 px-4 py-2 text-xs font-medium text-brand-gold sm:text-sm"
                style={{
                  boxShadow:
                    "inset 2px 2px 20px 0px rgba(204, 193, 170, 0.5), inset 1px 1px 10px 0px rgba(204, 185, 170, 0.25)",
                }}
              >
                {badgeLabel}
              </span>

              <h2 className="font-display mt-5 text-4xl leading-[1.1] text-dark-text-primary sm:text-5xl">
                <span className="block">{headingLines[0]}</span>
                <span className="relative inline-block">
                  {headingLines[1]}
                  <svg
                    width="280"
                    height="16"
                    viewBox="0 0 280 16"
                    fill="none"
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-full mt-1 w-full max-w-[260px]"
                  >
                    <path
                      d="M2 8C75 2 205 2 278 8"
                      stroke="url(#promo-underline)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="promo-underline"
                        x1="2"
                        y1="0"
                        x2="278"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#945D0E" />
                        <stop offset="55%" stopColor="#DCBA23" />
                        <stop offset="100%" stopColor="#E0E03D" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>

              <p className="font-body mt-6 max-w-md text-sm leading-relaxed text-dark-text-secondary sm:text-base">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href={secondaryCta.href} variant="white">
                  {secondaryCta.label}
                </Button>
                <Button
                  href={primaryCta.href}
                  variant="solid"
                  className="!bg-dark-button-gradient !text-dark-bg"
                >
                  {primaryCta.label}
                </Button>
              </div>
            </div>

            {/* Right — tilted photo collage, hidden on small screens
                where there isn't room for it alongside the copy */}
            <div className="relative hidden h-[420px] md:block">
              <motion.div
                initial={{ opacity: 0, rotate: -6, scale: 0.95 }}
                whileInView={{ opacity: 1, rotate: 10, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-6 top-1/2 h-[560px] w-[420px] -translate-y-1/2 origin-center"
              >
                <div className="grid h-full grid-cols-3 gap-4">
                  {images.map((src, i) => (
                    <div
                      key={src}
                      className="group relative overflow-hidden rounded-2xl shadow-lg"
                      style={{
                        aspectRatio: i % 3 === 1 ? "1 / 1.4" : "1 / 1.1",
                      }}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        sizes="160px"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {!reducedMotion &&
                dots.map((dot, i) => (
                  <motion.span
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      top: dot.top,
                      left: dot.left,
                      height: dot.size,
                      width: dot.size,
                      background: dot.color,
                    }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}