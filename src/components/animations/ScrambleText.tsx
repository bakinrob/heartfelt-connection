import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

const ScrambleText = ({ text, className = "", delay = 0, speed = 40, as: Tag = "h1" }: ScrambleTextProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [display, setDisplay] = useState(text.replace(/[^ ]/g, " "));
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let frame = 0;
    const totalFrames = text.length + 12;

    const tick = () => {
      frame++;
      const resolved = Math.floor((frame / totalFrames) * text.length);

      const chars = text.split("").map((char, i) => {
        if (char === " ") return " ";
        if (i < resolved) return char;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      });

      setDisplay(chars.join(""));

      if (frame < totalFrames) {
        setTimeout(tick, speed);
      } else {
        setDisplay(text);
      }
    };

    setTimeout(tick, delay);
  }, [text, delay, speed]);

  useEffect(() => {
    if (isInView) animate();
  }, [isInView, animate]);

  return (
    <Tag ref={ref as any} className={className}>
      {display}
    </Tag>
  );
};

export default ScrambleText;
