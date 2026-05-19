import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ui/ThemeToggle";
import MobileMenu from "./ui/MobileMenu";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section highlight
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 dark:glass glass-light shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={(e) => handleSmoothScroll(e, "#home")}
          >
            <span className="text-2xl font-bold dark:text-white text-dark-bg tracking-tighter hover:opacity-80 transition-opacity">
              Dev<span className="text-gradient">Portfolio</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop Navigation">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative text-sm font-medium transition-colors py-2 group ${
                        isActive 
                          ? "dark:text-white text-dark-bg" 
                          : "dark:text-gray-400 text-gray-500 hover:text-primary-orange dark:hover:text-sky-500"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-dark rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      {/* Hover Underline Animation */}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-orange dark:bg-sky-500 transform origin-left scale-x-0 transition-transform duration-300 ${!isActive && 'group-hover:scale-x-100'}`}></span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4 border-l dark:border-dark-border border-light-border pl-6">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Controls */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="dark:text-gray-300 text-gray-600 hover:text-primary-orange dark:hover:text-sky-500 focus:outline-none p-2"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="relative w-6 h-6 flex items-center justify-center"
              >
                {isMobileMenuOpen ? <FiX size={24} aria-hidden="true" /> : <FiMenu size={24} aria-hidden="true" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Slide-down Mobile Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        navLinks={navLinks}
        activeSection={activeSection}
        onLinkClick={handleSmoothScroll}
      />
    </motion.header>
  );
}
