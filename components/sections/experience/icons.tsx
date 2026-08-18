import Image from "next/image";

interface IconProps {
  className?: string;
}

export function WindowControls() {
  return (
    <div className="flex gap-1.5 sm:gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57] sm:h-3 sm:w-3" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E] sm:h-3 sm:w-3" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840] sm:h-3 sm:w-3" />
    </div>
  );
}

 

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 8 8" fill="none" aria-hidden="true" className={className}>
      <path d="M1 1L7 7M1 7L7 1" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 10 10" fill="none" aria-hidden="true" className={className}>
      <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function BackIcon({ className }: IconProps) {
  return (
    <Image
      src="/images/browser-icons/back.svg"
      alt=""
      width={14}
      height={14}
      className={className}
    />
  );
}

export function ForwardIcon({ className }: IconProps) {
  return (
    <Image
      src="/images/browser-icons/forward.svg"
      alt=""
      width={14}
      height={14}
      className={className}
    />
  );
}

export function RefreshIcon({ className }: IconProps) {
  return (
    <Image
      src="/images/browser-icons/refresh.svg"
      alt=""
      width={14}
      height={14}
      className={className}
    />
  );
}

export function LockIcon({ className }: IconProps) {
  return (
    <Image
      src="/images/browser-icons/lock.svg"
      alt=""
      width={14}
      height={14}
      className={className}
    />
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <path
        d="M7 1L8.6 5H13L9.6 7.5L11 12L7 9.3L3 12L4.4 7.5L1 5H5.4L7 1Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExtensionsIcon({ className }: IconProps) {
  return (
    <Image
      src="/images/browser-icons/extensions.svg"
      alt=""
      width={14}
      height={14}
      className={className}
    />
  );
}

export function SidePanelIcon({ className }: IconProps) {
  return (
    <Image
      src="/images/browser-icons/sidepanel.svg"
      alt=""
      width={14}
      height={14}
      className={className}
    />
  );
}
export function MenuDotsIcon({ className }: IconProps) {
  return (
    <Image
      src="/images/browser-icons/menu-dots.svg"
      alt=""
      width={14}
      height={14}
      className={className}
    />
  );
}

export function AvatarBadge() {
  return (
    <Image
      src="/images/browser-icons/avatar.svg"
      alt=""
      width={20}
      height={20}
      className="rounded-full"
    />
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <path d="M4 3L11 7L4 11V3Z" fill="white" />
    </svg>
  );
}

 