"use client";

import React, { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";

interface KineticTextProps {
  text: string;
  className?: string;
  el?: React.ElementType;
  once?: boolean;
}

const defaultContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 * i },
  }),
};

const defaultChild: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: -90,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function KineticText({
  text,
  el: Wrapper = "p",
  className = "",
  once = true,
}: KineticTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  // Split text into words, then words into characters
  const words = text.split(" ").map((word, wordIndex, array) => {
    const characters = word.split("").map((char, charIndex) => (
      <motion.span
        variants={defaultChild}
        key={charIndex}
        className="inline-block origin-bottom"
      >
        {char}
      </motion.span>
    ));
    
    return (
      <span key={wordIndex} className="inline-block whitespace-nowrap">
        {characters}
        {wordIndex !== array.length - 1 && <span className="inline-block">&nbsp;</span>}
      </span>
    );
  });

  return (
    <Wrapper className={`${className} perspective-1000`} style={{ perspective: "1000px" }}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={defaultContainer}
        aria-hidden
        className="inline-block"
      >
        {words}
      </motion.span>
    </Wrapper>
  );
}
