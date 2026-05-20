import { motion } from "framer-motion";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import { FiCpu, FiCompass, FiCode, FiLayers } from "react-icons/fi";

const initialFutureProjects = [
  {
    id: 1,
    title: "AI Portfolio Analyzer",
    description: "An intelligent analyzer tool that provides structure, typography, and SEO feedback for developer portfolios using AI models.",
    category: "AI / SaaS",
    status: "In Progress",
    statusEmoji: "🛠️",
    source: "Planned"
  },
  {
    id: 2,
    title: "Decentralized Blogging Hub",
    description: "A censorship-resistant blogging space utilising decentralized storage (IPFS) and smart contract access control.",
    category: "Web3",
    status: "Planned",
    statusEmoji: "📋",
    source: "Planned"
  },
  {
    id: 3,
    title: "Real-time Collaboration Workspace",
    description: "A canvas-based collaborative tool enabling developers to design system architectures together with live cursors.",
    category: "Web App",
    status: "Planned",
    statusEmoji: "📋",
    source: "Planned"
  }
];

export default function FutureProjects() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI / SaaS": return <FiCpu className="text-xl" />;
      case "Web3": return <FiCompass className="text-xl" />;
      case "Web App": return <FiCode className="text-xl" />;
      default: return <FiLayers className="text-xl" />;
    }
  };

  return (
    <Section id="future-projects" className="border-t dark:border-dark-border border-light-border bg-gradient-to-b dark:from-dark-bg/20 dark:to-dark-bg/60 from-light-bg/20 to-light-bg/60">
      <SectionTitle 
        title="Future Projects" 
        alignment="center" 
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Roadmap Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialFutureProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border rounded-3xl p-6 shadow-lg flex flex-col justify-between hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-shadow duration-300 relative group overflow-hidden"
            >
              {/* Visual Accent Glow Top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-orange to-primary-yellow dark:from-sky-500 dark:to-purple-500" />
              
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl dark:bg-white/5 bg-black/5 dark:text-sky-400 text-primary-orange">
                    {getCategoryIcon(project.category)}
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full font-bold dark:bg-white/5 bg-black/5 dark:text-gray-300 text-gray-600 flex items-center gap-1">
                    <span>{project.statusEmoji}</span>
                    <span>{project.status}</span>
                  </span>
                </div>

                <h5 className="text-xl font-bold dark:text-white text-dark-bg mb-2 group-hover:text-primary-orange dark:group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h5>
                <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t dark:border-dark-border border-light-border">
                <span className="text-xs font-mono dark:text-gray-500 text-gray-400">
                  Category: <strong className="dark:text-gray-300 text-gray-600">{project.category}</strong>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
