import { motion } from "framer-motion";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import { FiDownload, FiBriefcase, FiBookOpen } from "react-icons/fi";

const experiences = [
  {
    role: "Full Stack Web Development",
    company: "Future Interns - Intern",
    period: "1 Month Internship 2026",
    description: "Completed a 1-month Full Stack Web Development internship at Future Interns by developing real-world projects and improving frontend and backend development skills.",
  },
  {
    role: "Web Development Intern",
    company: "Prodigy InfoTech ",
    period: "1 Month Internship 2026",
    description: "Completed a 1-month web development internship at Prodigy InfoTech by successfully building 5 responsive and interactive frontend projects using HTML, CSS, and JavaScript.",
  },
  // {
  //   role: "Frontend Engineer",
  //   company: "Creative Web Agency",
  //   period: "2021 - 2023",
  //   description: "Built beautiful, interactive landing pages and responsive dashboards. Collaborated with UI/UX designers to implement design systems using Tailwind CSS.",
  // },
  // {
  //   role: "Junior Web Developer",
  //   company: "StartUp Hub",
  //   period: "2020 - 2021",
  //   description: "Developed and maintained e-commerce websites and client portals. Integrated payment processors and built secure REST APIs.",
  // },
];

const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "City Engineering College, Bangalore",
    period: "2024 - 2027",
    description: "Major in Computer Science. Built strong foundation in data structures, algorithms, and software engineering.",
  },
  {
    degree: "Diploma",
    institution: "The Oxford Polytechnic, Bangalore",
    period: "2021 - 2024",
    description: "Completed a diploma in Computer Science, gaining foundational knowledge in programming, web development, and software concepts",
  },
  {
    degree: "10th",
    institution: "Karnataka Public School, Bangalore",
    period: "2020",
    description: "Successfully completed secondary education, and developed interest in Robotics and programming.",
  },
];

export default function Resume() {
  return (
    <Section id="resume" className="relative">
      <SectionTitle title="Resume" subtitle="My Journey & Experience" />

      {/* Download Button */}
      <div className="flex justify-center mb-16">
        <motion.a
          href="/resume.pdf"
          download="Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-dark dark:bg-gradient-to-r dark:from-sky-500 dark:to-purple-500 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] dark:hover:shadow-glow-sky transition-all transform hover:-translate-y-1"
        >
          <FiDownload /> Download Full CV
        </motion.a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Experience Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <FiBriefcase className="text-primary-orange dark:text-sky-500 text-2xl" />
            <h3 className="text-2xl font-bold dark:text-white text-dark-bg">Work Experience</h3>
          </div>

          <div className="relative border-l-2 dark:border-dark-border border-light-border pl-6 ml-3 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[33px] top-1.5 w-4.5 h-4.5 rounded-full dark:bg-dark-bg bg-light-bg border-4 border-primary-orange dark:border-sky-500" />

                <span className="font-mono text-sm text-primary-orange dark:text-sky-500 font-semibold">
                  {exp.period}
                </span>
                <h4 className="text-xl font-bold dark:text-white text-dark-bg mt-1">
                  {exp.role}
                </h4>
                <p className="text-sm dark:text-gray-400 text-gray-500 font-semibold mb-3">
                  {exp.company}
                </p>
                <p className="dark:text-gray-300 text-gray-600 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <FiBookOpen className="text-primary-orange dark:text-sky-500 text-2xl" />
            <h3 className="text-2xl font-bold dark:text-white text-dark-bg">Education</h3>
          </div>

          <div className="relative border-l-2 dark:border-dark-border border-light-border pl-6 ml-3 space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree + edu.institution}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[33px] top-1.5 w-4.5 h-4.5 rounded-full dark:bg-dark-bg bg-light-bg border-4 border-primary-orange dark:border-sky-500" />

                <span className="font-mono text-sm text-primary-orange dark:text-sky-500 font-semibold">
                  {edu.period}
                </span>
                <h4 className="text-xl font-bold dark:text-white text-dark-bg mt-1">
                  {edu.degree}
                </h4>
                <p className="text-sm dark:text-gray-400 text-gray-500 font-semibold mb-3">
                  {edu.institution}
                </p>
                <p className="dark:text-gray-300 text-gray-600 leading-relaxed text-sm">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
