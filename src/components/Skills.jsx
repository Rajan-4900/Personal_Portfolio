import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import { FiCode, FiTerminal, FiTool } from "react-icons/fi";
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiFirebase, 
  SiGithub, 
  SiDocker, 
  SiFigma, 
  SiVite 
} from "react-icons/si";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <FiCode className="text-lg" />,
    skills: [
      { name: "React.js", level: "Expert", desc: "Hooks, Context API, Redux Toolkit, Performance", icon: <SiReact className="text-3xl text-sky-400" /> },
      { name: "Next.js", level: "Advanced", desc: "App Router, SSR, SSG, ISR, API Routes", icon: <SiNextdotjs className="text-3xl dark:text-white text-dark-bg" /> },
      { name: "JavaScript", level: "Expert", desc: "ES6+, Async/Await, Closures, DOM Manipulation", icon: <SiJavascript className="text-3xl text-yellow-400" /> },
      { name: "TypeScript", level: "Advanced", desc: "Strict types, Generics, Interfaces, Custom types", icon: <SiTypescript className="text-3xl text-blue-500" /> },
      { name: "Tailwind CSS", level: "Expert", desc: "Utility-first design, custom configs, animations", icon: <SiTailwindcss className="text-3xl text-sky-400" /> },
    ],
  },
  {
    id: "backend",
    title: "Backend & Databases",
    icon: <FiTerminal className="text-lg" />,
    skills: [
      { name: "Node.js", level: "Advanced", desc: "Event loop, Stream pipelines, File System APIs", icon: <SiNodedotjs className="text-3xl text-green-500" /> },
      { name: "Express.js", level: "Advanced", desc: "REST APIs, Custom middlewares, CORS, Security", icon: <SiExpress className="text-3xl dark:text-white text-dark-bg" /> },
      { name: "MongoDB", level: "Advanced", desc: "Aggregation frameworks, Schema design, Indexing", icon: <SiMongodb className="text-3xl text-green-600" /> },
      { name: "PostgreSQL", level: "Intermediate", desc: "Relational schemas, Joins, Transactions, Queries", icon: <SiPostgresql className="text-3xl text-blue-400" /> },
      { name: "Firebase", level: "Advanced", desc: "Cloud Firestore, Cloud Functions, OAuth logins", icon: <SiFirebase className="text-3xl text-orange-500" /> },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: <FiTool className="text-lg" />,
    skills: [
      { name: "Git & GitHub", level: "Advanced", desc: "Branching strategies, CI/CD Actions, Hooks", icon: <SiGithub className="text-3xl dark:text-white text-dark-bg" /> },
      { name: "Docker", level: "Intermediate", desc: "Dockerfiles, Docker-compose, Container hosting", icon: <SiDocker className="text-3xl text-blue-500" /> },
      { name: "Figma", level: "Intermediate", desc: "UI prototyping, Design-to-code conversions", icon: <SiFigma className="text-3xl text-purple-400" /> },
      { name: "Vite / Webpack", level: "Advanced", desc: "Bundling, code splitting, environment configs", icon: <SiVite className="text-3xl text-purple-500" /> },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <Section id="skills" className="relative">
      <SectionTitle 
        title="My Skills" 
        subtitle="Professional skills & tech stack expertise" 
        alignment="center" 
      />

      <div className="max-w-5xl mx-auto px-4">
        {/* Navigation Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-gradient-dark dark:bg-gradient-to-r dark:from-sky-500 dark:to-purple-500 text-white shadow-lg dark:shadow-glow-sky/20"
                  : "dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border dark:text-gray-400 text-gray-600 hover:opacity-90"
              }`}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.title}</span>
              <span className="sm:hidden">{category.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Skill Card Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {skillCategories.map((category) => {
              if (category.id !== activeTab) return null;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border rounded-3xl p-6 shadow-md flex items-start gap-5 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
                    >
                      {/* Left Sidebar Accent Accent Line */}
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-orange to-primary-yellow dark:from-sky-500 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Icon */}
                      <div className="p-3.5 rounded-2xl dark:bg-white/5 bg-black/5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>

                      {/* Info */}
                      <div className="space-y-1 flex-1">
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-bold dark:text-white text-dark-bg group-hover:text-primary-orange dark:group-hover:text-sky-400 transition-colors">
                            {skill.name}
                          </h4>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            skill.level === "Expert"
                              ? "dark:bg-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400"
                              : skill.level === "Advanced"
                              ? "dark:bg-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-400"
                              : "dark:bg-yellow-500/20 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed font-medium">
                          {skill.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
