// import type { Variants, Transition } from "framer-motion";

// /** Shared premium easing — smooth, editorial, not bouncy. */
// export const NAV_EASE = [0.76, 0, 0.24, 1] as const;

// export const navRollTransition: Transition = {
//   duration: 0.35,
//   ease: NAV_EASE,
// };

// export const navEntranceContainer: Variants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.06,
//       delayChildren: 0.05,
//     },
//   },
// };

// export const navEntranceItem: Variants = {
//   hidden: {
//     opacity: 0,
//     y: -20,
//     filter: "blur(6px)",
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     filter: "blur(0px)",
//     transition: {
//       duration: 0.6,
//       ease: NAV_EASE,
//     },
//   },
// };

// export const dropdownVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: -8,
//     scale: 0.98,
//     transition: { duration: 0.2, ease: NAV_EASE },
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.3, ease: NAV_EASE },
//   },
// };

// export const dropdownItemVariants: Variants = {
//   hidden: { opacity: 0, y: -6 },
//   visible: { opacity: 1, y: 0 },
// };

// export const mobilePanelVariants: Variants = {
//   hidden: { height: 0, opacity: 0 },
//   visible: {
//     height: "auto",
//     opacity: 1,
//     transition: { duration: 0.35, ease: NAV_EASE },
//   },
//   exit: {
//     height: 0,
//     opacity: 0,
//     transition: { duration: 0.3, ease: NAV_EASE },
//   },
// };

// export const mobileListVariants: Variants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.05, delayChildren: 0.08 },
//   },
// };

// export const mobileItemVariants: Variants = {
//   hidden: { opacity: 0, y: 14 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: NAV_EASE } },
// };

 import type { Variants, Transition } from "framer-motion";

export const NAV_EASE = [0.22, 1, 0.36, 1] as const;

export const navRollTransition: Transition = {
  duration: 0.25,
  ease: NAV_EASE,
};

export const navEntranceItem: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: NAV_EASE } },
};

export const mobilePanelVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: navRollTransition },
  exit: { height: 0, opacity: 0, transition: navRollTransition },
};

export const mobileListVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

export const mobileItemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: navRollTransition },
};

export const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: NAV_EASE } },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.15, ease: NAV_EASE } },
};

export const dropdownItemVariants: Variants = {
  hidden: { opacity: 0, x: -4 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: NAV_EASE } },
};