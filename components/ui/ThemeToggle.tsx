"use client";

import React from "react";
import { useTheme } from "../ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`relative p-2 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer ${
        theme === "light"
          ? "bg-stone-200/90 hover:bg-stone-300 text-stone-800 border border-stone-300 shadow-sm"
          : "bg-stone-900/90 hover:bg-stone-800 text-[#e2e58c] border border-white/15 shadow-md"
      } ${className}`}
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <motion.div
        key={theme}
        initial={{ scale: 0.6, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.6, rotate: 90, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {theme === "light" ? (
          <Moon className="w-4 h-4 text-stone-800" />
        ) : (
          <Sun className="w-4 h-4 text-[#e2e58c]" />
        )}
      </motion.div>
    </button>
  );
}
