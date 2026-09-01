"use client";

import { articleFilters } from "@/data/journal-articles";

interface JournalFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeFilter: string;
  onFilterChange: (id: string) => void;
}

export function JournalFilters({ search, onSearchChange, activeFilter, onFilterChange }: JournalFiltersProps) {
  return (
    <div className="rounded-2xl border border-light-border">
      <div className="flex flex-col divide-y divide-light-border sm:flex-row sm:divide-x sm:divide-y-0">
        <div className="flex flex-1 items-center px-6 py-4">
          <span className="font-display text-lg  text-center">Events News</span>
        </div>
        <div className="flex flex-1 items-center gap-3 px-6 py-4">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="text-light-muted">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
            <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search review & News..."
            className="font-body w-full bg-transparent text-sm text-light-primary placeholder:text-light-muted focus:outline-none"
          />
        </div>
      </div>

      <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto border-t border-light-border px-6 py-4">
        <span className="font-body shrink-0 text-sm font-medium  border-r px-3">Filters</span>
        {articleFilters.map((filter, index) => (
          <div key={filter.id} className="flex shrink-0 items-center gap-2">
            {index === 2 && <span className="mx-1 h-5 w-px bg-light-border" />}
            <button
              type="button"
              onClick={() => onFilterChange(filter.id)}
              className={`font-body whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-colors ${
                activeFilter === filter.id
                  ? "border-light-primary bg-light-primary text-white"
                  : "border-light-border text-light-secondary hover:border-light-primary/60"
              }`}
            >
              {filter.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}