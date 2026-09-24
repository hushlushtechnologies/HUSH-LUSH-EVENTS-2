interface ContactInfoCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  href?: string;
  external?: boolean;
}

export function ContactInfoCard({ label, value, icon, href, external }: ContactInfoCardProps) {
  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-dark-border/50 text-white">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-display text-lg leading-tight text-dark-text-primary">{label}</p>
        <p className="font-body mt-1 text-sm leading-relaxed text-dark-text-secondary break-words">
          {value}
        </p>
      </div>
    </>
  );

  const className =
    "flex items-center gap-4 rounded-2xl border border-dark-border/40 bg-dark-card/80 p-5 transition-colors hover:border-dark-border";

  if (href) {
    const externalProps = external ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
    return (
      <a href={href} {...externalProps} className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}