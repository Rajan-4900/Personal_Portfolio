import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A high-performance modern e-commerce web application with seamless checkout, real-time inventory management, and a beautiful user interface.",
    tech: ["Next.js", "React", "Tailwind", "Stripe"],
    github: "#",
    external: "#",
    featured: true,
  },
  {
    title: "AI Dashboard SaaS",
    description: "An analytics dashboard tailored for AI models, providing real-time metrics, elegant charts, and a dark-mode optimized glassmorphic design.",
    tech: ["React", "Framer Motion", "Recharts", "Firebase"],
    github: "#",
    external: "#",
    featured: true,
  },
  {
    title: "Portfolio Template",
    description: "A minimal, premium developer portfolio template designed for speed and modern aesthetics.",
    tech: ["Vite", "React", "Tailwind"],
    github: "#",
    external: "#",
    featured: false,
  },
  {
    title: "Task Management API",
    description: "A robust backend REST API for handling complex task management workflows with role-based access control.",
    tech: ["Node.js", "Express", "MongoDB", "Jest"],
    github: "#",
    external: "#",
    featured: false,
  }
];

export default function Projects() {
  return (
    <Section id="projects" className="relative">
      <SectionTitle title="Featured Projects" subtitle="Some Things I've Built" />

      {/* Featured Projects */}
      <div className="space-y-24 mb-24">
        {projects.filter(p => p.featured).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12 relative`}
          >
            {/* Project Image Placeholder */}
            <div className="w-full lg:w-3/5 group relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-primary-orange/20 dark:bg-sky-500/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-screen"></div>
              <div className="aspect-video dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border shadow-2xl flex items-center justify-center transform transition-transform duration-700 group-hover:scale-105">
                <span className="text-xl font-medium dark:text-gray-500 text-gray-400">Project Screenshot Placeholder</span>
              </div>
            </div>

            {/* Project Details */}
            <div className={`w-full lg:w-2/5 flex flex-col ${index % 2 !== 0 ? 'lg:items-start text-left' : 'lg:items-end lg:text-right text-left'} relative z-20`}>
              <p className="text-primary-orange dark:text-sky-500 font-mono text-sm mb-2">Featured Project</p>
              <h3 className="text-2xl md:text-3xl font-bold dark:text-white text-dark-bg mb-6 hover:text-primary-orange dark:hover:text-sky-500 transition-colors cursor-pointer">
                {project.title}
              </h3>
              
              <div className="dark:glass glass-light p-6 md:p-8 rounded-2xl shadow-xl dark:text-gray-300 text-gray-600 mb-6">
                <p className="leading-relaxed">{project.description}</p>
              </div>

              <ul className={`flex flex-wrap gap-4 mb-8 font-mono text-sm dark:text-gray-400 text-gray-500 ${index % 2 !== 0 ? 'justify-start' : 'lg:justify-end justify-start'}`}>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>

              <div className={`flex items-center gap-4 ${index % 2 !== 0 ? 'justify-start' : 'lg:justify-end justify-start'}`}>
                <a href={project.github} className="dark:text-gray-300 text-gray-600 hover:text-primary-orange dark:hover:text-sky-500 transition-colors p-2">
                  <FiGithub size={22} />
                </a>
                <a href={project.external} className="dark:text-gray-300 text-gray-600 hover:text-primary-orange dark:hover:text-sky-500 transition-colors p-2">
                  <FiExternalLink size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Projects Grid */}
      <div className="pt-12">
        <h3 className="text-2xl font-bold dark:text-white text-dark-bg text-center mb-12">Other Noteworthy Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="dark:bg-dark-card bg-light-card rounded-2xl p-8 border dark:border-dark-border border-light-border hover:-translate-y-2 transition-transform duration-300 flex flex-col group shadow-lg"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="text-primary-orange dark:text-sky-500">
                  <FiFolder size={40} strokeWidth={1} />
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="dark:text-gray-400 text-gray-500 hover:text-primary-orange dark:hover:text-sky-500 transition-colors">
                    <FiGithub size={20} />
                  </a>
                  <a href={project.external} className="dark:text-gray-400 text-gray-500 hover:text-primary-orange dark:hover:text-sky-500 transition-colors">
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h4 className="text-xl font-bold dark:text-white text-dark-bg mb-3 group-hover:text-primary-orange dark:group-hover:text-sky-500 transition-colors">
                {project.title}
              </h4>
              <p className="dark:text-gray-400 text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-3 font-mono text-xs dark:text-gray-500 text-gray-400 mt-auto">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
