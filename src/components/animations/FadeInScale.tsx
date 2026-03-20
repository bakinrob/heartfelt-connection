import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInScaleProps {
  children: ReactNode;
  index?: number;
  staggerDelay?: number;
  delay?: number;
  className?: string;
}

const FadeInScale = ({ children, index = 0, staggerDelay = 0.1, delay = 0, className = "" }: FadeInScaleProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{
      duration: 0.6,
      delay: delay + index * staggerDelay,
      ease: [0.25, 0.46, 0.45, 0.94],
    }}
  >
    {children}
  </motion.div>
);

export default FadeInScale;
