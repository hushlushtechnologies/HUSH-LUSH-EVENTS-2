import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export function FollowButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-body inline-flex shrink-0 items-center gap-3 rounded-full border border-light-primary/60 px-5 py-2.5 text-sm font-medium text-light-brand transition-colors hover:bg-light-primary hover:text-white"
    >
      Follow us on Instagram
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-dark-button-gradient text-dark-bg">
        <FaInstagram className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}