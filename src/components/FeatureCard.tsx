import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

type FeatureCardProps = {
  type: "video" | "list";
  videoUrl?: string;
  videoText?: string;
  title?: string;
  subtitle?: string;
  techStack?: string;
  items?: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  delay?: number;
};

export function FeatureCard({
  type,
  videoUrl,
  videoText,
  title,
  subtitle,
  techStack,
  items,
  githubUrl,
  liveDemoUrl,
  delay = 0
}: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full h-full min-h-[400px] lg:h-[480px] rounded-2xl overflow-hidden flex flex-col ${type === "list" ? "bg-gradient-to-br from-[#252525] to-[#1a1a1a] p-6 sm:p-8" : ""}`}
    >
      {type === "video" ? (
        <>
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10">
            <span className="text-[#E1E0CC] text-lg font-medium">{videoText}</span>
          </div>
        </>
      ) : (
        <div className="flex flex-col h-full relative z-10">
          <div className="mt-auto">
            <h3 className="text-[#E1E0CC] text-lg sm:text-xl mb-1">
              {title}
            </h3>
            {subtitle && <p className="text-gray-500 text-xs sm:text-sm mb-2">{subtitle}</p>}
            {techStack && <p className="text-primary text-xs sm:text-sm mb-4 sm:mb-6">{techStack}</p>}

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {items?.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 mt-auto">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E1E0CC] text-xs sm:text-sm hover:text-white transition-colors group"
                >
                  GitHub
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}
              {liveDemoUrl && (
                <a
                  href={liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary text-xs sm:text-sm hover:text-white transition-colors group"
                >
                  Live Demo
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
