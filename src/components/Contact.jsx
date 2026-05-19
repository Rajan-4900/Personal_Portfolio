import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import { FiSend, FiCheckCircle } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Clear success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Section id="contact" className="dark:bg-dark-bg/50 bg-light-bg/50">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Get In Touch" subtitle="Let's build something together" alignment="center" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="dark:bg-dark-card bg-light-card border dark:border-dark-border border-light-border rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Success Message Banner */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                className="mb-8 p-4 rounded-xl dark:bg-green-500/10 bg-green-500/5 border dark:border-green-500/30 border-green-500/20 text-green-600 dark:text-green-400 flex items-center gap-3"
              >
                <FiCheckCircle className="text-xl flex-shrink-0" />
                <span className="text-sm font-medium">Thank you! Your message has been sent successfully.</span>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold dark:text-gray-300 text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border dark:bg-dark-bg bg-white dark:border-dark-border border-light-border dark:text-white text-dark-bg focus:outline-none focus:ring-2 focus:ring-primary-orange/20 dark:focus:ring-sky-500/20 focus:border-primary-orange dark:focus:border-sky-500 transition-all font-medium text-sm"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold dark:text-gray-300 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border dark:bg-dark-bg bg-white dark:border-dark-border border-light-border dark:text-white text-dark-bg focus:outline-none focus:ring-2 focus:ring-primary-orange/20 dark:focus:ring-sky-500/20 focus:border-primary-orange dark:focus:border-sky-500 transition-all font-medium text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-semibold dark:text-gray-300 text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border dark:bg-dark-bg bg-white dark:border-dark-border border-light-border dark:text-white text-dark-bg focus:outline-none focus:ring-2 focus:ring-primary-orange/20 dark:focus:ring-sky-500/20 focus:border-primary-orange dark:focus:border-sky-500 transition-all font-medium text-sm"
                placeholder="How can I help you?"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold dark:text-gray-300 text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border dark:bg-dark-bg bg-white dark:border-dark-border border-light-border dark:text-white text-dark-bg focus:outline-none focus:ring-2 focus:ring-primary-orange/20 dark:focus:ring-sky-500/20 focus:border-primary-orange dark:focus:border-sky-500 transition-all font-medium text-sm resize-none"
                placeholder="Write your message here..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-dark dark:bg-gradient-to-r dark:from-sky-500 dark:to-purple-500 text-white font-bold text-base hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] dark:hover:shadow-glow-sky transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
