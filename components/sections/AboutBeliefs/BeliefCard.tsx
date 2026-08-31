import Image from "next/image";

interface BeliefCardProps {
  icon?: string;
  title: string;
  description: string;
}

export function BeliefCard({ icon, title, description }: BeliefCardProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-brand-gold/40 bg-[#1A1510] p-6 text-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gold/50">
        {icon && <Image src={icon} alt="" width={18} height={18} />}
      </div>
      <p className="font-display mt-4 text-sm font-semibold uppercase tracking-wide text-dark-text-primary">
        {title}
      </p>
      <p className="font-body mt-2 text-xs leading-relaxed text-dark-text-secondary">{description}</p>
    </div>
  );
}