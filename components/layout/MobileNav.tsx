// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { AnimatePresence, motion } from "framer-motion";
// import { Button } from "@/components/ui/Button";
// import {
//   navRollTransition,
//   mobilePanelVariants,
//   mobileListVariants,
//   mobileItemVariants,
// } from "@/lib/motion/nav";
// import type { NAV_LINKS, HEADER_CTA } from "@/data/navigation";

// interface MobileNavProps {
//   open: boolean;
//   navLinks: typeof NAV_LINKS;
//   ctaLink: typeof HEADER_CTA;
//   pathname: string;
//   onNavigate: () => void;
// }

// export function MobileNav({ open, navLinks, ctaLink, pathname, onNavigate }: MobileNavProps) {
//   const [servicesOpen, setServicesOpen] = useState(false);

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           variants={mobilePanelVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="overflow-hidden border-t border-light bg-light md:hidden"
//         >
//           <motion.ul
//             variants={mobileListVariants}
//             initial="hidden"
//             animate="visible"
//             className="flex flex-col gap-1 px-6 py-4"
//           >
//             {navLinks.map((link) => {
//               const isServices = "children" in link;

//               if (isServices) {
//                 return (
//                   <motion.li key={link.label} variants={mobileItemVariants} className="border-b border-light/60 py-1">
//                     <button
//                       type="button"
//                       className="flex w-full items-center justify-between py-2 font-body text-sm uppercase tracking-wide text-light-secondary"
//                       aria-expanded={servicesOpen}
//                       onClick={() => setServicesOpen((v) => !v)}
//                     >
//                       {link.label}
//                       <motion.svg
//                         width="10"
//                         height="6"
//                         viewBox="0 0 10 6"
//                         fill="none"
//                         aria-hidden="true"
//                         animate={{ rotate: servicesOpen ? 180 : 0 }}
//                         transition={navRollTransition}
//                       >
//                         <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//                       </motion.svg>
//                     </button>

//                     <AnimatePresence>
//                       {servicesOpen && (
//                         <motion.ul
//                           variants={mobilePanelVariants}
//                           initial="hidden"
//                           animate="visible"
//                           exit="exit"
//                           className="flex flex-col gap-1 overflow-hidden pb-2 pl-3"
//                         >
//                           {link.children.map((child) => (
//                             <li key={child.href}>
//                               <Link
//                                 href={child.href}
//                                 onClick={onNavigate}
//                                 className="block py-1.5 font-body text-xs text-light-muted transition-colors duration-200 hover:text-brand-secondary"
//                               >
//                                 {child.label}
//                               </Link>
//                             </li>
//                           ))}
//                         </motion.ul>
//                       )}
//                     </AnimatePresence>
//                   </motion.li>
//                 );
//               }

//               const isActive = pathname === link.href;
//               return (
//                 <motion.li key={link.href} variants={mobileItemVariants}>
//                   <Link
//                     href={link.href}
//                     onClick={onNavigate}
//                     className={`block py-3 font-body text-sm uppercase tracking-wide transition-colors duration-200 hover:text-brand-secondary ${
//                       isActive ? "text-brand-secondary" : "text-light-secondary"
//                     }`}
//                   >
//                     {link.label}
//                   </Link>
//                 </motion.li>
//               );
//             })}

//             <motion.li variants={mobileItemVariants} className="pt-2">
//               <Button href={ctaLink.href} variant="outline-brand" className="w-full" onClick={onNavigate}>
//                 {ctaLink.label}
//               </Button>
//             </motion.li>
//           </motion.ul>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  navRollTransition,
  mobilePanelVariants,
  mobileListVariants,
  mobileItemVariants,
} from "@/lib/motion/nav";
import { primaryNav, ctaLink } from "@/data/navigation";
import type { NavLink } from "@/types/navigation";

interface MobileNavProps {
  open: boolean;
  navLinks: typeof primaryNav;
  ctaLink: typeof ctaLink;
  pathname: string;
  onNavigate: () => void;
}

export function MobileNav({ open, navLinks, ctaLink, pathname, onNavigate }: MobileNavProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={mobilePanelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="overflow-hidden border-t border-light bg-light md:hidden"
        >
          <motion.ul
            variants={mobileListVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-1 px-6 py-4"
          >
            {navLinks.map((link: NavLink) => {
              const isServices = !!link.children?.length;

              if (isServices) {
                return (
                  <motion.li key={link.label} variants={mobileItemVariants} className="border-b border-light/60 py-1">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-2 font-body text-sm uppercase tracking-wide text-light-secondary"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      {link.label}
                      <motion.svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        aria-hidden="true"
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={navRollTransition}
                      >
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.svg>
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.ul
                          variants={mobilePanelVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="flex flex-col gap-1 overflow-hidden pb-2 pl-3"
                        >
                          {link.children!.map((child: NavLink) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onNavigate}
                                className="block py-1.5 font-body text-xs text-light-muted transition-colors duration-200 hover:text-light-brand"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              }

              const isActive = pathname === link.href;
              return (
                <motion.li key={link.href} variants={mobileItemVariants}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className={`block py-3 font-body text-sm uppercase tracking-wide transition-colors duration-200 hover:text-light-brand ${
                      isActive ? "text-light-brand" : "text-light-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              );
            })}

            <motion.li variants={mobileItemVariants} className="pt-2">
              <Button href={ctaLink.href} variant="outline" className="w-full">
                {ctaLink.label}
              </Button>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}