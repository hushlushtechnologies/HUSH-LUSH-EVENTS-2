 import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-light-card">
      <div className="flex flex-col items-center">
        {/* Same logo mark used elsewhere in the site — keeps this
            consistent with the rest of the brand rather than a generic
            spinner. */}
        <div className="relative h-14 w-14 animate-pulse">
          <Image src="/images/logo-mark.svg" alt="" fill className="object-contain" />
        </div>

        {/* Thin spinning ring around the mark — pure CSS animation,
            works even before any JS hydrates. */}
        <div className="relative mt-6 h-8 w-8">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-dark-border/30 border-t-dark-secondary" />
        </div>
      </div>
    </div>
  );
}