"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-stone-900/90 backdrop-blur-xl border border-white/15 text-stone-300 shadow-2xl shadow-black/80 hover:text-stone-950 hover:border-[#c8cb6d]/60 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Hover Gradient Fill Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7e8a42] via-[#9bae4f] to-[#c8cb6d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Glowing Accent Ring */}
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-[#7e8a42] to-[#c8cb6d] opacity-20 blur-sm group-hover:opacity-75 transition-opacity duration-300 -z-10" />

            {/* Circular Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 p-0.5 pointer-events-none" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="2"
              />
              <motion.circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="#c8cb6d"
                strokeWidth="2"
                strokeDasharray="131.95"
                style={{
                  pathLength: scale,
                }}
                strokeLinecap="round"
              />
            </svg>

            {/* Arrow Icon with Bounce Animation on Hover */}
            <ArrowUp className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
