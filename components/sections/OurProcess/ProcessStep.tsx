 "use client";

import type { ProcessStep as ProcessStepType } from "@/data/process";

interface ProcessStepProps {
  step: ProcessStepType;
  isActive: boolean;
  onSelect: () => void;
}

export function ProcessStep({ step, isActive, onSelect }: ProcessStepProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group flex flex-col items-start gap-4 text-left cursor-pointer"
    >
      <span
        className={`h-[3px] w-full rounded-full transition-colors duration-300 ${
          isActive ? "bg-dot-gradient" : "bg-light-border/50"
        }`}
      />

      <span className="font-body text-sm text-light-muted">{step.number}</span>

      <h3
        className={`font-display text-2xl transition-colors duration-300 ${
          isActive ? "text-black" : "text-light-subtle"
        }`}
      >
        {step.title}
      </h3>

      <p
        className={`font-body text-sm leading-relaxed transition-colors duration-300 ${
          isActive ? "text-light-secondary font-medium" : "text-light-subtle"
        }`}
      >
        {step.description}
      </p>
    </button>
  );
}