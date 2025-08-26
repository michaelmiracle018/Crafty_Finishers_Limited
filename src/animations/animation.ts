// animation.ts
import { Variants } from "framer-motion";

export const slideUpVariants: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 2, // ✅ fixed spelling (was "staggerChildern")
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

export const zoomInVariants: Variants = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 2, // ✅ fixed spelling
      duration: 1.2,
      ease: "easeOut",
    },
  },
};
