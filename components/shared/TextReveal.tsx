"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TextReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: string | React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // If it's a string, we can split it into words for a staggered word-by-word reveal
  if (typeof children === "string") {
    const words = children.split(" ");
    return (
      <div ref={ref} className={className} style={{ display: "inline-block" }}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-2 md:mr-3 lg:mr-4">
            <motion.span
              className="inline-block"
              initial={{ y: "120%", rotateZ: 5 }}
              animate={inView ? { y: 0, rotateZ: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom cubic bezier for snap
                delay: delay + i * 0.05,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </div>
    );
  }

  // If it's complex HTML (like text with a gradient span), just reveal the whole block
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "120%", rotateZ: 2 }}
        animate={inView ? { y: 0, rotateZ: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
