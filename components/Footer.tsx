"use client";

import React from "react";
import { personalData } from "@/lib/data";
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  Heart, 
  Sparkles,
  Code2 
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950/80 backdrop-blur-xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Brand & Summary */}
          <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7e8a42] to-[#c8cb6d] flex items-center justify-center text-stone-950 font-black text-sm shadow-md shadow-[#c8cb6d]/20">
                HP
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalData.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed mb-4">
              Frontend Developer specializing in high-performance React.js, Next.js, and enterprise-grade web architectures.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <span className="w-2 h-2 rounded-full bg-[#c8cb6d] animate-pulse" />
              <span>Available for freelance contracts & full-time roles</span>
            </div>
          </div>

          {/* Quick Nav Links & Back to Top */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-6 sm:gap-10">
            <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-stone-400">
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-white transition-colors">
                Skills
              </a>
              <a href="#experience" className="hover:text-white transition-colors">
                Experience
              </a>
              <a href="#projects" className="hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Hari_Prasath_Resume.pdf"
                className="text-[#c8cb6d] hover:text-[#e2e58c] font-semibold transition-colors"
              >
                Resume (PDF)
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl glass-card border border-white/10 hover:border-[#c8cb6d]/50 text-stone-400 hover:text-white transition-all duration-300 group flex items-center gap-2 text-xs font-mono cursor-pointer"
              aria-label="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-[#c8cb6d]" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {currentYear} Hari Prasath. Crafted with React, Next.js & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c8cb6d] transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={`mailto:${personalData.contact.email}`}
              className="hover:text-[#c8cb6d] transition-colors"
            >
              Email
            </a>
            <span>•</span>
            <a
              href={`tel:${personalData.contact.phone}`}
              className="hover:text-[#c8cb6d] transition-colors"
            >
              Phone
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
