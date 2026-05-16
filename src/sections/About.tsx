import { WordsPullUpMultiStyle } from "../components/WordsPullUpMultiStyle";
import { AnimatedTextReveal } from "../components/AnimatedTextReveal";

export function About() {
  return (
    <section id="about" className="bg-black py-20 px-4 md:px-6">
      <div className="bg-[#101010] rounded-3xl max-w-6xl mx-auto p-8 sm:p-12 md:p-20 text-center flex flex-col items-center">

        <WordsPullUpMultiStyle
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] mb-16 sm:mb-24"
          segments={[
            { text: "I am Taranjeet Singh, ", className: "font-normal text-[#E1E0CC]" },
            { text: "a full stack developer. ", className: "font-serif italic text-[#E1E0CC]" },
            { text: "I specialize in scalable architectures and immersive interfaces.", className: "font-normal text-[#E1E0CC]" }
          ]}
        />

        <div className="max-w-2xl mx-auto">
          <AnimatedTextReveal
            text="With a deep passion for modern web technologies, I have built scalable applications, intuitive user interfaces, and high-performance backends. I thrive on solving complex engineering challenges to deliver seamless, premium digital experiences."
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed"
          />
        </div>
      </div>
    </section>
  );
}
