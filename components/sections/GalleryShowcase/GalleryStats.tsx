import type { GalleryStat } from "@/data/gallery-showcase";

export function GalleryStats({ stats }: { stats: GalleryStat[] }) {
  return (
    <>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`pointer-events-none absolute z-20 text-center ${stat.position}`}
        >
          <p className="  text-3xl font-semibold text-brand-gold font-accent">{stat.value}</p>
          <p className="font-body mt-1 whitespace-nowrap text-sm text-dark-text-secondary">
            {stat.label}
          </p>
        </div>
      ))}
    </>
  );
}   