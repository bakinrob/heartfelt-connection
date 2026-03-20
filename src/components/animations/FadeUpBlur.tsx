import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpBlurProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

const FadeUpBlur = ({ children, delay = 0, className = "", duration = 0.7 }: FadeUpBlurProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {children}
  </motion.div>
);

export default FadeUpBlur;
