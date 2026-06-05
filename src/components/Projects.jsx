import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import ecommerceProjectImg from "../assets/ecommerce-project.png";
import tourTravelProjectImg from "../assets/tour-travel-project.png";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A high-performance modern e-commerce web application with seamless checkout, real-time inventory management, and a beautiful user interface.",
    tech: ["Next.js", "React", "Tailwind", "Node.js"],
    github: "#",
    external: "#",
    featured: true,
    image: ecommerceProjectImg,
  },
  {
    title: "Tour and Travel",
    description: "A complete Tour and Travel website/Web Application for travel lovers with booking, payment, and management features.",
    tech: ["React", "Node.js", "Flask/Django", "Supabase"],
    github: "#",
    external: "#",
    featured: true,
    image: tourTravelProjectImg,
  },
  {
    title: "My Portfolio",
    description: "A modern, responsive, and interactive portfolio website built with React, Tailwind CSS, and Framer Motion to showcase my projects and skills.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Rajan-4900/Personal_Portfolio.git",
    external: "#",
    featured: false,
    category: "frontend",
  },
  {
    title: "Spotify Clone",
    description: "A Spotify Clone built with HTML, CSS, and JavaScript to showcase my projects and skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Rajan-4900/js_simple_SpotifyClone.git",
    external: "https://rajan-4900.github.io/js_simple_SpotifyClone/",
    featured: false,
    category: "frontend",
  },
  {
    title: "Navigation Bar",
    description: "A Navigation Bar built with HTML, CSS, and JavaScript to showcase my projects and skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Rajan-4900/PRODIGY_WD_01.git",
    external: "https://rajan-4900.github.io/PRODIGY_WD_01/",
    featured: false,
    category: "frontend",
  },
  {
    title: "Tic Tac Toe Game",
    description: "A Tic Tac Toe Game built with HTML, CSS, and JavaScript to showcase my projects and play with AI",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Rajan-4900/PRODIGY_WD_03.git",
    external: "https://rajan-4900.github.io/PRODIGY_WD_03/",
    featured: false,
    category: "frontend",
  },
  {
    title: "Weather App",
    description: "A Weather App built with HTML, CSS, and JavaScript to showcase my projects and skill with the realtime weather data",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Rajan-4900/PRODIGY_WD_05.git",
    external: "https://rajan-4900.github.io/PRODIGY_WD_05/",
    featured: false,
    category: "frontend",
  },
  {
    title: "Study Management - FlashCard",
    description: "A study management app that helps you create and manage your flashcards for studying.",
    tech: ["React", "Flask/Django", "Supabase"],
    github: "https://github.com/Rajan-4900/FlashCard_Study_Tool_GenAI_Project.git",
    external: "https://study-flashcards-game.vercel.app/",
    featured: false,
    category: "fullstack",
  },
  {
    title: "Business Intelligence",
    description: "This Business Intelligence Is Used To Analyse the Crowd and Ai Recomendation Business Location Finder In Crowded and famous Places",
    tech: ["React", "Flask/Django", "Supabase"],
    github: "https://github.com/Rajan-4900/Business_Intelligence.git",
    external: "#",
    featured: false,
    category: "fullstack",
  },
];

const projectCategories = [
  { id: "frontend", title: "Web Development Projects" },
  { id: "fullstack", title: "Full Stack Projects" },
];

const isExternalUrl = (url) => url && url !== "#";

const externalLinkProps = (url) =>
  isExternalUrl(url)
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
    : { href: url || "#" };

function ProjectCard({ project, index }) {
  return (
    <motion.div
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
          <a
            {...externalLinkProps(project.github)}
            aria-label={`${project.title} GitHub repository`}
            className="dark:text-gray-400 text-gray-500 hover:text-primary-orange dark:hover:text-sky-500 transition-colors"
          >
            <FiGithub size={20} />
          </a>
          {isExternalUrl(project.external) && (
            <a
              {...externalLinkProps(project.external)}
              aria-label={`${project.title} live demo`}
              className="dark:text-gray-400 text-gray-500 hover:text-primary-orange dark:hover:text-sky-500 transition-colors"
            >
              <FiExternalLink size={20} />
            </a>
          )}
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
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeProjects = projects.filter(
    (p) => !p.featured && p.category === activeCategory
  );

  return (
    <Section id="projects" className="relative">
      <SectionTitle title="Futured Projects" subtitle="Some Things I've Built" />

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
            {/* Project Image */}
            <div className="w-full lg:w-3/5 group relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-primary-orange/20 dark:bg-sky-500/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-screen pointer-events-none"></div>
              <div className="aspect-video dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border shadow-2xl overflow-hidden transform transition-transform duration-700 group-hover:scale-105">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xl font-medium dark:text-gray-500 text-gray-400">Project Screenshot Placeholder</span>
                  </div>
                )}
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
                <a
                  {...externalLinkProps(project.github)}
                  aria-label={`${project.title} GitHub repository`}
                  className="dark:text-gray-300 text-gray-600 hover:text-primary-orange dark:hover:text-sky-500 transition-colors p-2"
                >
                  <FiGithub size={22} />
                </a>
                {isExternalUrl(project.external) && (
                  <a
                    {...externalLinkProps(project.external)}
                    aria-label={`${project.title} live demo`}
                    className="dark:text-gray-300 text-gray-600 hover:text-primary-orange dark:hover:text-sky-500 transition-colors p-2"
                  >
                    <FiExternalLink size={22} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Projects I've Worked On — category tabs */}
      <div className="pt-12">
        <h3 className="text-2xl font-bold dark:text-white text-dark-bg text-center mb-10">
          Projects I&apos;ve Worked On
        </h3>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 sm:px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-dark dark:bg-gradient-to-r dark:from-sky-500 dark:to-purple-500 text-white shadow-lg dark:shadow-glow-dark-primary"
                  : "dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border dark:text-gray-400 text-gray-600 hover:opacity-90"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
