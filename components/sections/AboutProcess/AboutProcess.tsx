"use client";

import { Container } from "@/components/ui/Container";
import { BeliefCard } from "@/components/sections/AboutBeliefs/BeliefCard";
import { ProcessStepRow } from "./ProcessStepRow";
import { VerticalBadge } from "./VerticalBadge";
import { leftSteps, rightSteps, extraSteps } from "@/data/about-process";
import { FloralBottomDecoration } from "../AboutBeliefs/FloralBottomDecoration";
import { FloatingDots } from "@/components/layout/decorative/FloatingDots";

export function AboutProcess() {
  return (
    <section className="relative isolate overflow-hidden bg-dark py-20 md:py-28">
      <FloralBottomDecoration />
      <FloatingDots />
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_260px_1fr] lg:gap-10">
          {/* Left column */}
          <div className="flex flex-col justify-between gap-16 pl-4 lg:pl-6">
            {leftSteps.map((step, i) => (
              <ProcessStepRow
                key={step.id}
                step={step}
                align="left"
                index={i}
                isLast={i === leftSteps.length - 1}
              />
            ))}
          </div>

          {/* Center badge — hidden on mobile, shown only at lg+ */}
          <div className="hidden lg:block">
            <VerticalBadge />
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between gap-16 pr-4 lg:pr-6">
            {rightSteps.map((step, i) => (
              <ProcessStepRow
                key={step.id}
                step={step}
                align="right"
                index={i}
                isLast={i === rightSteps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Coordinate / Celebrate — bottom row, styled like belief cards */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {extraSteps.map((step) => (
            <div key={step.id} className="w-[240px]">
              <BeliefCard
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
