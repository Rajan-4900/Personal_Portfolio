import SocialIcons from "./ui/SocialIcons";
import { FiArrowUp, FiMail, FiMapPin } from "react-icons/fi";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="dark:bg-dark-card bg-light-card border-t dark:border-dark-border border-light-border pt-16 pb-8 relative" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-5">
            <a href="#home" className="inline-block text-2xl font-bold dark:text-white text-dark-bg tracking-tighter hover:opacity-80 transition-opacity">
              Dev<span className="text-gradient">Portfolio</span>
            </a>
            <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed max-w-sm">
              Creating high-performance, accessible, and pixel-perfect web applications with clean architecture and modern designs.
            </p>
            <div className="pt-2">
              <SocialIcons className="gap-4" iconSize={18} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest dark:text-white text-dark-bg">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm font-medium">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="dark:text-gray-400 text-gray-600 hover:text-primary-orange dark:hover:text-sky-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details & Status */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest dark:text-white text-dark-bg">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-center gap-3 dark:text-gray-400 text-gray-600">
                <FiMail className="text-primary-orange dark:text-sky-500" />
                <a href="mailto:hello@example.com" className="hover:text-primary-orange dark:hover:text-sky-500 transition-colors">
                  hello@example.com
                </a>
              </li>
              <li className="flex items-center gap-3 dark:text-gray-400 text-gray-600">
                <FiMapPin className="text-primary-orange dark:text-sky-500" />
                <span>Remote / Worldwide</span>
              </li>
            </ul>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-green-500/10 bg-green-500/5 border dark:border-green-500/30 border-green-500/20 text-green-600 dark:text-green-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for Freelance & Roles
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="border-t dark:border-dark-border border-light-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs dark:text-gray-500 text-gray-400 font-mono text-center sm:text-left">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-xs dark:text-gray-500 text-gray-400 font-mono">
              Designed & Built with React + Tailwind
            </span>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full dark:bg-dark-bg bg-white border dark:border-dark-border border-light-border dark:text-gray-400 text-gray-600 hover:text-white dark:hover:text-white hover:bg-primary-orange dark:hover:bg-sky-500 hover:border-primary-orange dark:hover:border-sky-500 transition-all shadow-md group"
              aria-label="Scroll back to top"
            >
              <FiArrowUp className="transform group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
