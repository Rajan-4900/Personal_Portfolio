import { motion } from "framer-motion";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

export default function Contact() {
  return (
    <Section id="contact" className="dark:bg-dark-bg/50 bg-light-bg/50">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle title="Get In Touch" subtitle="What's Next?" alignment="center" />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg dark:text-gray-400 text-gray-600 mb-10 leading-relaxed"
        >
          Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="mailto:hello@example.com"
            className="inline-block px-10 py-5 rounded-full bg-transparent border-2 border-primary-orange text-primary-orange font-medium text-lg hover:bg-primary-orange hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
