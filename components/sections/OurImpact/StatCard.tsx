import type { Stat } from "@/types/content";

export function StatCard({ value, label }: Stat) {
  return (
    <div className="flex w-fit shrink-0 flex-col items-center gap-1 rounded-2xl bg-light-card px-8 py-5 text-center shadow-light-inner">
      <span className="font-accent text-3xl font-normal text-light-brand sm:text-4xl">
        {value}
      </span>
      <span className="font-body whitespace-nowrap text-xs text-light-secondary sm:text-sm">
        {label}
      </span>
    </div>
  );
}