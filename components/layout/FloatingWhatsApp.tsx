 "use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { socialLinks } from "@/data/socials";

export function FloatingWhatsApp() {
  const reducedMotion = useReducedMotion();
  const whatsapp = socialLinks.find((social) => social.id === "whatsapp");
  const [isHovered, setIsHovered] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasEntered(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!whatsapp) return null;

  return (
    <AnimatePresence>
      {hasEntered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-3"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Link
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
          >
            <motion.div
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]"
              style={{ boxShadow: "0 8px 24px -4px rgba(37, 211, 102, 0.5)" }}
              animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
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

          {/* Tooltip — slides in from the left, only on hover */}
          <AnimatePresence>
            {isHovered && !reducedMotion && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-body whitespace-nowrap rounded-full bg-dark-bg px-4 py-2 text-xs font-medium text-white shadow-lg"
              >
                Chat with us
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}