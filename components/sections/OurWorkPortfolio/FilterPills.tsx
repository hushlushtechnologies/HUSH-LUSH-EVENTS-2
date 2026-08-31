"use client";

import { portfolioFilters } from "@/data/portfolio";

interface FilterPillsProps {
  active: string;
  onChange: (id: string) => void;
}

export function FilterPills({ active, onChange }: FilterPillsProps) {
  return (
    <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto pb-2">
      {portfolioFilters.map((filter, index) => (
        <div key={filter.id} className="flex shrink-0 items-center gap-2">
          {index === 2 && <span className="mx-1 h-5 w-px bg-light-border" />}
          <button
            type="button"
            onClick={() => onChange(filter.id)}
            className={`font-body whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === filter.id
                ? "border-light-primary bg-light-primary text-white"
                : "border-light-border text-light-secondary hover:border-light-primary/60"
            }`}
          >
            {filter.label}
          </button>
        </div>
      ))}
    </div>
  );
}