import { motion } from "framer-motion";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Firebase", level: 85 },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Docker", level: 70 },
      { name: "Postman", level: 85 },
      { name: "Vercel / Netlify", level: 90 },
      { name: "Webpack / Vite", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="relative">
      <SectionTitle title="My Skills" subtitle="What I Bring to the Table" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border rounded-3xl p-8 shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold dark:text-white text-dark-bg mb-6 border-b dark:border-dark-border border-light-border pb-4">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="dark:text-gray-300 text-gray-700">{skill.name}</span>
                      <span className="text-primary-orange dark:text-sky-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full dark:bg-dark-bg bg-light-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-primary-orange to-primary-yellow dark:from-sky-500 dark:to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
