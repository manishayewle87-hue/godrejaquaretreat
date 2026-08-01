"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    // Only enable custom cursor on desktop
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
          target.tagName.toLowerCase() === "a" ||
          target.tagName.toLowerCase() === "button" ||
          target.closest("a") ||
          target.closest("button") ||
          target.closest(".cursor-pointer")
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };

      window.addEventListener("mousemove", updateMousePosition);
      window.addEventListener("mouseover", handleMouseOver);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
        window.removeEventListener("mouseover", handleMouseOver);
        clearTimeout(timer);
      };
    }
    return () => clearTimeout(timer);
  }, []);

  // Don't render during SSR or on mobile devices
  if (!isMounted || (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches)) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-emerald-aqua rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-emerald-aqua/50 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.5,
        }}
      />
    </>
  );
}
