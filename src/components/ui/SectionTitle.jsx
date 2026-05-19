import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, alignment = "center" }) {
  const isCenter = alignment === "center";
  
  return (
    <div className={`mb-16 ${isCenter ? "text-center" : "text-left"}`}>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-lg md:text-xl font-medium text-primary-orange mb-3 tracking-wider uppercase"
      >
        {subtitle}
      </motion.h3>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold dark:text-white text-dark-bg tracking-tight"
      >
        {title}
      </motion.h2>
      {isCenter && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1 w-24 bg-gradient-dark mx-auto mt-6 rounded-full"
        />
      )}
    </div>
  );
}
