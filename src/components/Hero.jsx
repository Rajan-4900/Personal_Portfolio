import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlowBackground from "./ui/GlowBackground";
import SocialIcons from "./ui/SocialIcons";

/**
 * Custom Typewriter Component
 * Handles the animated typing and deleting effect for job titles.
 */
const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (index === words.length) setIndex(0);

    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, Math.max(isDeleting ? 50 : 100, parseInt(Math.random() * 50)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words]);

  return (
    <>
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100" : "opacity-0"} transition-opacity duration-100`} aria-hidden="true">|</span>
    </>
  );
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-start lg:items-center justify-center pt-6 pb-16 lg:py-20 overflow-hidden"
      aria-label="Hero Section"
    >
      <GlowBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-8 mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-xl md:text-2xl font-medium dark:text-gray-400 text-gray-500 mb-4 tracking-wide" role="doc-subtitle">
              Hello, world! I am
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold dark:text-white text-dark-bg tracking-tight leading-tight mb-6">
              <span className="text-gradient">Rajan L</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-primary-yellow dark:from-sky-500 dark:to-purple-500 min-h-[48px]" aria-live="polite">
              <Typewriter words={[
                "Full Stack Developer",
                "Web Developer",
                "UI/UX Designer",
                "AI - Prompt Engineer",
                "AI - Powered Full Stack Developer",
              ]} />
              <span className="sr-only">Full Stack Developer</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl dark:text-gray-400 text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate Full Stack Web Developer focused on building modern web applications, creative UI/UX designs, and AI-powered digital experiences with real-world project expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-gradient-dark dark:bg-gradient-to-r dark:from-sky-500 dark:to-purple-500 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] dark:hover:shadow-glow-dark-primary transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center relative overflow-hidden group"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" aria-hidden="true"></div>
            </a>
            <a
              href="/resume.pdf"
              download="Resume.pdf"
              className="px-8 py-4 rounded-full dark:bg-dark-card bg-light-card border border-primary-orange/50 dark:border-sky-500/50 dark:text-white text-dark-bg font-bold text-lg hover:bg-primary-orange/10 dark:hover:bg-sky-500/10 transition-all w-full sm:w-auto text-center"
            >
              Download Resume
            </a>
          </motion.div>

          <SocialIcons className="pt-8 justify-center lg:justify-start" />
        </div>

        {/* Right Side: Animated Design / Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 relative w-full max-w-lg lg:max-w-none hidden md:block"
          aria-hidden="true"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] mx-auto">
            {/* Outer Rotating Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-orange via-transparent to-primary-yellow dark:from-sky-500 dark:via-transparent dark:to-purple-500 p-1 animate-spin-slow opacity-50 blur-md"></div>

            {/* Main Visual Container */}
            <div className="absolute inset-4 rounded-full dark:bg-dark-card/80 bg-light-card/80 backdrop-blur-3xl border dark:border-white/10 border-black/5 overflow-hidden flex items-center justify-center shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 to-primary-yellow/10 dark:from-sky-500/10 dark:to-purple-500/10 group-hover:scale-110 transition-transform duration-700"></div>
              <span className="text-8xl text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-primary-yellow dark:from-sky-500 dark:to-purple-500 font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                DEV
              </span>
            </div>

            {/* Floating Glow Cards */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-12 px-6 py-4 rounded-2xl dark:glass glass-light shadow-glow-orange-lg dark:shadow-glow-dark-primary border border-primary-orange/20 dark:border-sky-500/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="font-bold dark:text-white text-dark-bg text-sm">Available for work</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 -right-8 px-6 py-4 rounded-2xl dark:glass glass-light shadow-glow-yellow dark:shadow-glow-dark-secondary border border-primary-yellow/20 dark:border-purple-500/20 backdrop-blur-xl"
            >
              <div className="flex flex-col">
                <span className="font-bold text-primary-yellow dark:text-purple-500 text-2xl">Fresher</span>
                <span className="dark:text-gray-400 text-gray-500 text-xs font-medium uppercase tracking-wider">Open To Work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest dark:text-gray-500 text-gray-400 font-medium">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 dark:border-gray-500 border-gray-400 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-primary-orange dark:bg-sky-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
