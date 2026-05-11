import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function WordsPullUp({ 
  text, 
  className = "", 
  showAsterisk = false 
}: { 
  text: string; 
  className?: string;
  showAsterisk?: boolean;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const words = text.split(" ");
  
  return (
    <div ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLastWord = i === words.length - 1;
        return (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mr-[0.25em] last:mr-0 inline-block relative"
          >
            {word}
            {showAsterisk && isLastWord && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                *
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
