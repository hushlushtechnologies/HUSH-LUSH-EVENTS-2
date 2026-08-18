import {
  BackIcon,
  ForwardIcon,
  RefreshIcon,
  LockIcon,
  StarIcon,
  ExtensionsIcon,
  SidePanelIcon,
  AvatarBadge,
  MenuDotsIcon,
} from "./icons";

export function BrowserToolbar({ addressText }: { addressText: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-light  px-3 py-1.5 sm:gap-3 sm:px-4 sm:py-2">
      <BackIcon className="h-3.5 w-3.5 text-light-muted" />
      <ForwardIcon className="h-3.5 w-3.5 text-light-muted" />
      <RefreshIcon className="h-3.5 w-3.5 text-light-muted" />

      {/* Address pill: lighter cream, not pure white — sits closer to the toolbar's own peach tone */}
      <div className="flex flex-1 items-center gap-2 rounded-full bg-light-card/60 px-3 py-1.5 sm:px-4">
        <LockIcon className="h-2.5 w-2.5 shrink-0 text-light-brand" />
        <span className="flex-1 truncate text-[10px] text-light-muted sm:text-xs">{addressText}</span>
        {/* Star moved inside the pill, right edge */}
        <StarIcon className="h-3 w-3 shrink-0 text-light-muted" />
      </div>

      {/* Star removed from here — replaced with SidePanelIcon */}
      <div className="hidden items-center gap-2 sm:flex">
        <ExtensionsIcon className="h-3.5 w-3.5 text-light-muted" />
        <SidePanelIcon className="h-3.5 w-3.5 text-light-muted" />
        <AvatarBadge />
        <MenuDotsIcon className="h-3.5 w-3.5 text-light-muted" />
      </div>
    </div>
  );
}