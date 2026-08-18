 "use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/data/services";

export function ServicesMegaMenu() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-4"
    >
      <div className="rounded-2xl border border-light bg-light-card p-6 shadow-xl">
        <div className="grid grid-cols-2 gap-8">
          <div className="relative   w-full overflow-hidden">
            <Image
              src="/images/services/services-showcase.png"
              alt="Hush Lush Events"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 336px, 50vw"
            />
          </div>
          <ul className="flex flex-col justify-center gap-4">
            <li className="font-display mb-1 text-sm font-bold text-light-muted">
              Service
            </li>
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={service.href}
                  className="font-body text-base font-medium  transition-colors hover:text-light-brand"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}