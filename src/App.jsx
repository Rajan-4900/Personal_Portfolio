import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import FutureProjects from "./components/FutureProjects";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setCurrentPage(hash);
      // Scroll to top of the page on route change
      window.scrollTo(0, 0);
    };

    // Initialize on load
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-dark-bg bg-light-bg text-dark-bg dark:text-light-bg transition-colors duration-300 flex flex-col justify-between">
        <div>
          <Navbar activeSection={currentPage} />
          
          <main className="pt-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {currentPage === "home" && (
                  <>
                    <Hero />
                    <FutureProjects />
                  </>
                )}
                {currentPage === "about" && <About />}
                {currentPage === "skills" && <Skills />}
                {currentPage === "projects" && <Projects />}
                {currentPage === "resume" && <Resume />}
                {currentPage === "contact" && <Contact />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
