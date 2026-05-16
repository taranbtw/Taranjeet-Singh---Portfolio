import { WordsPullUpMultiStyle } from "../components/WordsPullUpMultiStyle";
import { motion } from "framer-motion";

const techLogos: Record<string, string> = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Framer Motion": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
  "Three.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "REST APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "CI/CD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
};

export function Skills() {
  const skillCategories = [
    { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"] },
    { title: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"] },
    { title: "DevOps & Tools", items: ["Docker", "AWS", "Vercel", "Git", "CI/CD", "Figma"] }
  ];

  // Positions for scattered background logos
  const bgPositions = [
    { top: "8%", left: "10%", size: 60, rotate: -15 },
    { top: "15%", right: "8%", size: 50, rotate: 12 },
    { top: "45%", left: "5%", size: 45, rotate: -8 },
    { top: "55%", right: "12%", size: 55, rotate: 20 },
    { top: "75%", left: "15%", size: 40, rotate: -22 },
    { top: "80%", right: "5%", size: 48, rotate: 10 },
  ];

  return (
    <section id="skills" className="relative bg-[#0a0a0a] py-24 px-4 md:px-6 rounded-[2rem] mx-4 md:mx-6 my-20 overflow-hidden border border-white/5">
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none mix-blend-overlay" />

      {/* Gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#DEDBC8]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <WordsPullUpMultiStyle
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal !justify-center mb-20 text-center"
          segments={[
            { text: "Technical Arsenal. ", className: "text-[#E1E0CC]" },
            { text: "Tools of the trade.", className: "text-gray-500" }
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center md:text-left">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative group bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.15] backdrop-blur-md rounded-3xl p-8 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#DEDBC8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              {/* Faded scattered tech logos in background */}
              {category.items.map((item, j) => {
                const pos = bgPositions[j % bgPositions.length];
                return (
                  <img
                    key={j}
                    src={techLogos[item]}
                    alt=""
                    className="absolute pointer-events-none opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-700"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      right: pos.right,
                      width: pos.size,
                      height: pos.size,
                      transform: `rotate(${pos.rotate}deg)`,
                      filter: 'brightness(0) invert(92%) sepia(8%) saturate(400%) hue-rotate(10deg)',
                    }}
                  />
                );
              })}

              <h3 className="text-primary text-lg mb-8 tracking-widest text-sm uppercase relative z-10">{category.title}</h3>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 relative z-10">
                {category.items.map((item, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] hover:border-primary/40 hover:bg-primary/[0.05] transition-colors duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(222,219,200,0.15)]"
                  >
                    <span className="text-gray-400 group-hover:text-[#DEDBC8] transition-colors duration-300 text-xs sm:text-sm font-medium tracking-wide">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
