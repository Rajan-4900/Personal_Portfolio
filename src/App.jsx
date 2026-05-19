import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-dark-bg bg-light-bg text-dark-bg dark:text-light-bg transition-colors duration-300">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Hero />
          <About />
          <section id="skills" className="py-20"><div className="text-center font-bold text-2xl dark:text-gray-400 text-gray-500">Skills Section Placeholder</div></section>
          <Projects />
          <section id="resume" className="py-20"><div className="text-center font-bold text-2xl dark:text-gray-400 text-gray-500">Resume Section Placeholder</div></section>
          <Contact />
        </motion.main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
