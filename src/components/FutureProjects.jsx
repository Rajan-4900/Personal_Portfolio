import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import { FiPlus, FiCpu, FiCompass, FiCode, FiLayers } from "react-icons/fi";

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
  const [projects, setProjects] = useState(initialFutureProjects);
  const [formData, setFormData] = useState({ title: "", description: "", category: "Web App" });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    const newProject = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      category: formData.category,
      status: "Community Idea",
      statusEmoji: "💡",
      source: "User Suggested"
    };

    setProjects((prev) => [newProject, ...prev]);
    setFormData({ title: "", description: "", category: "Web App" });
    setShowForm(false);
  };

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
        title="Future Project Roadmap" 
        subtitle="Vote or suggest upcoming projects I should build next" 
        alignment="center" 
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Suggest Button */}
        <div className="flex justify-center mb-12">
          <motion.button
            onClick={() => setShowForm(!showForm)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-dark dark:bg-gradient-to-r dark:from-sky-500 dark:to-purple-500 text-white font-bold text-base hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] dark:hover:shadow-glow-sky transition-all duration-300"
          >
            <FiPlus /> {showForm ? "Cancel Suggestion" : "Suggest Next Project"}
          </motion.button>
        </div>

        {/* Suggestion Form Panel */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-12 max-w-2xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border rounded-3xl p-6 md:p-8 space-y-5 shadow-xl">
                <h4 className="text-xl font-bold dark:text-white text-dark-bg">Submit Project Concept</h4>
                
                <div className="space-y-1">
                  <label className="text-sm font-semibold dark:text-gray-300 text-gray-700">Project Name</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border dark:bg-dark-bg bg-white dark:border-dark-border border-light-border dark:text-white text-dark-bg focus:ring-2 focus:ring-primary-orange/20 dark:focus:ring-sky-500/20 focus:border-primary-orange dark:focus:border-sky-500 transition-all text-sm font-medium"
                    placeholder="e.g. Real-Time Chat Platform"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold dark:text-gray-300 text-gray-700">Project Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl border dark:bg-dark-bg bg-white dark:border-dark-border border-light-border dark:text-white text-dark-bg focus:ring-2 focus:ring-primary-orange/20 dark:focus:ring-sky-500/20 focus:border-primary-orange dark:focus:border-sky-500 transition-all text-sm font-medium"
                    >
                      <option value="Web App">Web App</option>
                      <option value="AI / SaaS">AI / SaaS</option>
                      <option value="Web3">Web3</option>
                      <option value="Mobile App">Mobile App</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold dark:text-gray-300 text-gray-700">Project Description & Info</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border dark:bg-dark-bg bg-white dark:border-dark-border border-light-border dark:text-white text-dark-bg focus:ring-2 focus:ring-primary-orange/20 dark:focus:ring-sky-500/20 focus:border-primary-orange dark:focus:border-sky-500 transition-all text-sm font-medium resize-none"
                    placeholder="Write a brief overview of what this project does and what technologies it will use..."
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-dark dark:bg-gradient-to-r dark:from-sky-500 dark:to-purple-500 text-white font-bold text-sm hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] dark:hover:shadow-glow-sky transition-all"
                  >
                    Add Project
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Roadmap Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
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
                  
                  {project.source === "User Suggested" && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded dark:bg-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400">
                      Community
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
