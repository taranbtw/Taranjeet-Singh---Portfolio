import { WordsPullUpMultiStyle } from "../components/WordsPullUpMultiStyle";
import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Dpack Solutions",
      period: "Feb 2025 - March 2025",
      description: "Built and customized e-commerce website using Shopify with theme configuration, layout adjustments, and storefront setup."
    },
    {
      role: "Student",
      company: "Bhagwan Parshuram Institute of Technology",
      period: "2024 - Present",
      description: "Pursuing Bachelor of Technology in Information Technology."
    }
  ];

  return (
    <section id="experience" className="bg-black py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <WordsPullUpMultiStyle
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal !justify-start mb-16"
          segments={[
            { text: "Career Journey. ", className: "text-[#E1E0CC]" },
            { text: "Where I've been.", className: "text-gray-500" }
          ]}
        />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-4 md:gap-12 border-b border-white/10 pb-12 last:border-0"
            >
              <div className="md:w-1/3 text-gray-500 text-sm mt-1">{exp.period}</div>
              <div className="md:w-2/3">
                <h3 className="text-[#E1E0CC] text-xl md:text-2xl mb-2">{exp.role}</h3>
                <h4 className="text-primary text-sm md:text-base mb-4">{exp.company}</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
