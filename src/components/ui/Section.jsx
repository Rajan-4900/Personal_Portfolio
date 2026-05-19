import { motion } from "framer-motion";

export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}
