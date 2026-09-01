"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { socialLinks } from "@/data/socials";

export function FloatingWhatsApp() {
  const reducedMotion = useReducedMotion();
  const whatsapp = socialLinks.find((social) => social.id === "whatsapp");

  if (!whatsapp) return null;

  return (
    <Link
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg"
        animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Pulsing ring — a second, delayed copy expands and fades,
            reads as a subtle "ping" rather than a rigid loop */}
        {!reducedMotion && (
          <motion.span
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        )}

        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="relative z-10">
          <path
            d="M17.6 6.32A8.86 8.86 0 0012 4a8.94 8.94 0 00-7.75 13.4L3 21l3.72-1.22A8.93 8.93 0 0012 21a8.94 8.94 0 006.32-15.28l-.72.6z"
            fill="white"
          />
          <path
            d="M12 4a8.94 8.94 0 00-7.75 13.4L3 21l3.72-1.22A8.93 8.93 0 0012 21a8.94 8.94 0 000-17z"
            stroke="none"
          />
          <path
            d="M16.6 14.3c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.8.98-.15.17-.29.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.13.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"
            fill="#25D366"
          />
        </svg>
      </motion.div>
    </Link>
  );
}