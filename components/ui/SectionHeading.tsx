 "use client";

import { useId } from "react";
import Image from "next/image";

interface SectionHeadingProps {
  headingLines: string[];
  description?: string;
  decoration?: string;
  align?: "center" | "left";
  underline?: boolean;
  headingClassName?: string;
  className?: string;
}

export function SectionHeading({
  headingLines,
  description,
  decoration,
  align = "center",
  underline = false,
  headingClassName = "",
  className = "",
}: SectionHeadingProps) {
  const gradientId = useId();
  const lastIndex = headingLines.length - 1;

  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`relative isolate flex flex-col ${alignment} ${className}`}>
      <div className="relative flex min-h-[180px] w-full flex-col items-center justify-center sm:min-h-[220px] md:min-h-[260px]">
        {decoration && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
          >
            <div className="relative h-[180px] w-[165px] sm:h-[220px] sm:w-[205px] md:h-[260px] md:w-[245px]">
              <Image src={decoration} alt="" fill className="object-contain" sizes="260px" />
            </div>
          </div>
        )}

        <h2
          className={`font-display relative z-10 text-[32px] font-medium leading-[1.15] sm:text-[38px] md:text-[46px] lg:text-[52px] ${headingClassName}`}
        >
          {headingLines.map((line, index) => (
            <span key={line} className="relative block">
              {line}
              {underline && index === lastIndex && (
                <svg
                  width="280"
                  height="20"
                  viewBox="0 0 280 20"
                  fill="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-full mt-0.5 w-[75%] max-w-[240px] min-w-[150px] opacity-90"
                >
                  <path
                    d="M2 9C75 2 205 2 278 9"
                    stroke={`url(#${gradientId})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id={gradientId}
                      gradientUnits="userSpaceOnUse"
                      x1="2"
                      y1="0"
                      x2="278"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#8B7863" />
                      <stop offset="55%" stopColor="#DCBA23" />
                      <stop offset="100%" stopColor="#E0E03D" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </span>
          ))}
        </h2>

        {description && (
          <p className="font-body font-medium relative z-10 mt-5 max-w-[500px] text-[13px] leading-relaxed text-light-secondary sm:text-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}