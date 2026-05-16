import { useState, useEffect } from "react";
import { WordsPullUpMultiStyle } from "../components/WordsPullUpMultiStyle";
import { FeatureCard } from "../components/FeatureCard";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  const [showMessage, setShowMessage] = useState(false);
  const projectCount = 3;

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <section
      id="projects"
      className="min-h-screen bg-black relative py-20 px-4 md:px-6"
    >
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-16">
          <WordsPullUpMultiStyle
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal !justify-start max-w-4xl"
            segments={[
              { text: "Selected Works. ", className: "text-[#E1E0CC]" },
              {
                text: "Built for scale. Powered by code.",
                className: "text-gray-500",
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          <FeatureCard
            type="list"
            delay={0}
            title="PlayGround – Gaming Café SaaS"
            subtitle="May 2026"
            techStack="React, TypeScript, Firebase, Tailwind CSS, Framer Motion"
            items={[
              "Full-stack SaaS for gaming café ops: PC sessions, bookings, billing, CRM, inventory.",
              "Authenticated admin dashboard with real-time PC tracking, KPIs, role-based access.",
              "Responsive UI with Tailwind CSS, Framer Motion, and Firestore integration.",
            ]}
            githubUrl=""
            liveDemoUrl="https://play-ground-xi.vercel.app/"
          />
          <FeatureCard
            type="list"
            delay={0.15}
            title="Notes App"
            subtitle="May 2026"
            techStack="MongoDB, Express.js, React.js, Node.js"
            items={[
              "Full-stack note-taking app with create, edit, delete.",
              "JWT authentication with secure login.",
              "5 RESTful API endpoints with MongoDB/Mongoose.",
            ]}
            githubUrl="https://github.com/taranbtw/mern-notes"
            liveDemoUrl="https://mern-notes-o5c3.onrender.com"
          />
          <FeatureCard
            type="list"
            delay={0.3}
            title="Practice Portfolio"
            subtitle="January 2026"
            techStack="HTML, CSS, JavaScript, GSAP, Locomotive JS"
            items={[
              "Personal developer portfolio for recruiters.",
              "Responsive layout with GSAP & Locomotive.js.",
              "Custom animation timeline, deployed on GitHub Pages.",
            ]}
            githubUrl="https://github.com/taranbtw/front-end-revision/"
            liveDemoUrl="https://taranbtw.github.io/front-end-revision"
          />
        </div>

        <div className="flex justify-center">
          {showMessage ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-500 text-sm"
            >
              Only {projectCount} projects available to display.
            </motion.p>
          ) : (
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setShowMessage(true)}
              className="bg-[#212121] rounded-full pl-6 pr-2 py-2 flex items-center gap-4 hover:gap-6 transition-all duration-300 group text-[#E1E0CC] font-medium text-sm sm:text-base border border-white/5 hover:bg-[#2a2a2a]"
            >
              <span>Show more</span>
              <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
