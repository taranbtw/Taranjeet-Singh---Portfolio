import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export type TextSegment = {
  text: string;
  className?: string;
};

export function WordsPullUpMultiStyle({ segments, className = "" }: { segments: TextSegment[]; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Flatten words into an array while keeping their class
  const flatWords: { word: string; className: string }[] = [];
  segments.forEach((segment) => {
    const words = segment.text.split(" ");
    words.forEach((w) => {
      if (w.trim() !== "") {
        flatWords.push({ word: w, className: segment.className || "" });
      }
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {flatWords.map((item, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.8,
            delay: i * 0.08,
            ease: [0.16, 1, 0.3, 1]
          }}
          className={`mr-[0.25em] last:mr-0 inline-block ${item.className}`}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  );
}
