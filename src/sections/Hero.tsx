import { WordsPullUp } from "../components/WordsPullUp";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="h-screen w-full p-4 md:p-6 bg-black relative">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        <video
          src="https://res.cloudinary.com/ddcxxmhth/video/upload/video_kqmhh0.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 noise-overlay mix-blend-overlay opacity-[0.7] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 z-20">
          <nav className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                data-scroll-to
                className="text-[10px] sm:text-xs md:text-sm transition-colors duration-300"
                style={{ color: "rgba(225, 224, 204, 0.8)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-end">
            <div className="md:col-span-8">
              <WordsPullUp
                text="Taran"
                showAsterisk={true}
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] text-[#E1E0CC]"
              />
            </div>
            <div className="md:col-span-4 flex flex-col items-start md:items-end md:text-right pb-4 md:pb-8">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] mb-8 max-w-sm md:text-right text-left"
              >
                Taranjeet Singh is a Full Stack Developer, Gamer, Designer, Weeb, basically an all in one package.
              </motion.p>

              <motion.a
                href="#projects"
                data-scroll-to
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-primary rounded-full pl-6 pr-2 py-2 flex items-center gap-4 hover:gap-6 transition-all duration-300 group text-black font-medium text-sm sm:text-base cursor-pointer"
              >
                <span>View Projects</span>
                <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#DEDBC8]" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
