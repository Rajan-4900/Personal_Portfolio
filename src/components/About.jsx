import { motion } from "framer-motion";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const skills = [
  "JavaScript (ES6+)",
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
];

export default function About() {
  return (
    <Section id="about" className="dark:bg-dark-bg/50 bg-light-bg/50 relative">
      <SectionTitle title="About Me" subtitle="Who I Am" />

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Image/Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Decorative background for the image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-orange to-primary-yellow dark:from-sky-500 dark:to-purple-500 rounded-3xl transform rotate-6 opacity-50 blur-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-orange to-primary-yellow dark:from-sky-500 dark:to-purple-500 rounded-3xl transform rotate-3 transition-transform hover:rotate-6 duration-300"></div>
            <div className="absolute inset-0 dark:bg-dark-card bg-light-card rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl">
              <span className="text-4xl text-gray-500/50 font-bold px-8 text-center">
                Your Professional Photo Here
              </span>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <p className="text-lg md:text-xl dark:text-gray-300 text-gray-600 leading-relaxed">
            I am a passionate <span className="text-gradient font-semibold">Full Stack Developer</span> and Computer Science Engineering student with a strong interest in modern web technologies, AI-powered applications, and creative UI/UX design. I enjoy building responsive, user-friendly, and interactive web applications that solve real-world problems and improve user experience.
          </p>
          <p className="text-lg dark:text-gray-400 text-gray-500 leading-relaxed">
            I have completed internships in Web Development and Full Stack Development, where I worked on real-world projects such as portfolio websites, weather applications, responsive landing pages, and interactive web apps. I have also successfully developed and deployed 2 full stack websites, which helped me gain practical experience in frontend development, backend integration, database management, and deployment workflows.
          </p>
          <p className="text-lg dark:text-gray-400 text-gray-500 leading-relaxed">
            I continuously explore new technologies and AI tools to improve productivity, creativity, and development efficiency. My goal is to become a skilled software developer who creates innovative and impactful digital solutions.
          </p>

          <div className="pt-6">
            <h4 className="text-lg font-semibold dark:text-white text-dark-bg mb-4">Here are a few technologies I've been working with recently:</h4>
            <ul className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2 dark:text-gray-300 text-gray-600"
                >
                  <span className="text-primary-orange dark:text-sky-500">▹</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
