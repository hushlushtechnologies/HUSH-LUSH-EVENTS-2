interface ContactInfoCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export function ContactInfoCard({ label, value, icon }: ContactInfoCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-dark-border/40 bg-dark-card/80 p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-dark-border/50 text-white">
        {icon}
      </div>
      <div>
        <p className="font-display text-lg text-dark-text-primary">{label}</p>
        <p className="font-body mt-1 text-sm leading-relaxed text-dark-text-secondary">{value}</p>
      </div>
    </div>
  );
}