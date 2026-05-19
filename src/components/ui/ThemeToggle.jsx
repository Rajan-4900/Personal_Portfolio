import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

/**
 * ThemeToggle Component
 * Handles the animated transition between dark and light modes.
 * Accessible with aria-labels and keyboard support.
 */
export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`relative p-2 rounded-full dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border overflow-hidden shadow-sm flex items-center justify-center w-10 h-10 ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "dark" ? (
            <FiSun className="text-yellow-400" size={18} aria-hidden="true" />
          ) : (
            <FiMoon className="text-primary-orange dark:text-sky-500" size={18} aria-hidden="true" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
