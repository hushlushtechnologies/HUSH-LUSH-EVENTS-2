import Image from "next/image";
import type { BrowserTab } from "@/data/browser-mockup";
import { WindowControls, CloseIcon, PlusIcon } from "./icons";

export function BrowserTabs({ tabs }: { tabs: BrowserTab[] }) {
  return (
    <div className="flex items-center gap-3 border-b border-light bg-white  px-3 py-2 sm:gap-4 sm:px-4 sm:py-2.5">
      <WindowControls />

      <div className="scrollbar-hide flex flex-1 items-center gap-1 overflow-x-auto">
        {tabs.map((tab) => (
          <span
            key={tab.title}
            className={`flex items-center gap-1.5 whitespace-nowrap rounded-t-md px-2 py-1.5 text-[10px] sm:px-3 sm:text-xs ${
              tab.active ? "bg-light-surface text-light-secondary" : "text-light-secondary    bg-light-card/50"
            }`}
          >
            <Image
              src={tab.favicon}
              alt=""
              width={10}
              height={10}
              className="shrink-0"
            />
            <span className="max-w-[70px] truncate sm:max-w-none">{tab.title}</span>
            <CloseIcon className="h-2 w-2 shrink-0 opacity-60" />
          </span>
        ))}
        <span className="hidden px-2 text-light-muted sm:inline-flex">
          <PlusIcon className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}