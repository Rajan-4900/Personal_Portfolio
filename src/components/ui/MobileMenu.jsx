import { motion, AnimatePresence } from "framer-motion";

/**
 * MobileMenu Component
 * Slide-down mobile navigation menu with staggered link animations.
 */
export default function MobileMenu({ isOpen, navLinks, activeSection, onLinkClick }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden absolute top-full left-0 w-full dark:bg-dark-card/95 bg-light-card/95 backdrop-blur-xl border-b dark:border-dark-border border-light-border shadow-2xl overflow-hidden"
        >
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => onLinkClick(e, link.href)}
                  className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all ${
                    isActive
                      ? "dark:bg-white/10 bg-black/5 dark:text-white text-dark-bg border-l-4 border-primary-orange dark:border-sky-500"
                      : "dark:text-gray-400 text-gray-600 hover:dark:bg-white/5 hover:bg-black/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
