import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * GlowBackground Component
 * Renders an animated, interactive background with glowing orbs that subtly follow the mouse.
 */
export default function GlowBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for smoother performance
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 20 - 10,
          y: (e.clientY / window.innerHeight) * 20 - 10,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-orange/20 dark:bg-sky-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob"
      />
      <motion.div
        animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-yellow/20 dark:bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-blob animation-delay-2000"
      />
    </div>
  );
}
