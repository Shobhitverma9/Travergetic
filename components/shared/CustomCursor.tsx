"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const mouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseout", mouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseout", mouseLeave);
    };
  }, [isVisible]);

  // Don't render cursor on mobile touch devices
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/50 pointer-events-none z-[100] flex items-center justify-center mix-blend-screen"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div className="w-1 h-1 bg-white rounded-full" />
    </motion.div>
  );
}
