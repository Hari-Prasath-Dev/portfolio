"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { personalData } from "@/lib/data";
import { 
  Menu, 
  X, 
  Sparkles, 
  ArrowUpRight, 
  Download, 
  Code2, 
  Briefcase, 
  User, 
  Layers, 
  GraduationCap, 
  Mail 
} from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Layers },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: Code2 },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ["hero", "about", "skills", "experience", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Viewport Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#7e8a42] via-[#c8cb6d] to-[#e69832] origin-left z-50"
      />

      {/* Floating Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-stone-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3 px-4 sm:px-6 lg:px-8"
            : "bg-transparent py-4 sm:py-5 px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-stone-900/90 hover:bg-stone-800/95 border border-white/15 shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-200"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7e8a42] via-[#9bae4f] to-[#c8cb6d] flex items-center justify-center text-stone-950 font-black text-sm shadow-md shadow-[#c8cb6d]/30 group-hover:scale-105 transition-transform">
              HP
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-stone-100 tracking-tight flex items-center gap-1.5">
                {personalData.name}
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8cb6d] animate-pulse" />
              </span>
              <span className="text-[10px] text-stone-400 uppercase tracking-widest font-mono">
                Frontend Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-stone-900/90 backdrop-blur-md border border-white/15 shadow-xl shadow-black/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-stone-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-[#c8cb6d]/[0.18] border border-[#c8cb6d]/40 shadow-inner"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Hari_Prasath_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-200 hover:text-[#e2e58c] px-3.5 py-2 rounded-xl bg-stone-900/90 hover:bg-stone-800/95 border border-[#c8cb6d]/30 hover:border-[#c8cb6d]/60 shadow-lg backdrop-blur-md transition-all duration-200 group"
            >
              <Download className="w-3.5 h-3.5 text-[#c8cb6d] group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>

            <a
              href={`mailto:${personalData.contact.email}`}
              className="inline-flex items-center gap-2 text-xs font-medium text-stone-300 hover:text-white px-3.5 py-2 rounded-xl bg-stone-900/90 hover:bg-stone-800/95 border border-white/15 shadow-lg backdrop-blur-md transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c8cb6d]" />
              <span>Available for Hire</span>
            </a>

            <a href="#contact">
              <Button
                variant="gradient"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Let&apos;s Connect
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-stone-900/90 backdrop-blur-md border border-white/15 text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay for outside tap dismissal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-x-4 top-20 z-50 p-5 rounded-2xl glass-panel border border-white/15 shadow-2xl lg:hidden flex flex-col gap-4 backdrop-blur-2xl bg-zinc-950/95 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-[#c8cb6d]/15 text-[#e2e58c] border border-[#c8cb6d]/30 font-semibold"
                          : "text-stone-300 hover:text-white hover:bg-white/[0.08]"
                      }`}
                    >
                      <Icon className="w-4 h-4 text-[#c8cb6d]" />
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Hari_Prasath_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-stone-900 border border-[#c8cb6d]/40 text-white font-semibold text-sm hover:bg-[#c8cb6d]/10 transition-colors"
                >
                  <Download className="w-4 h-4 text-[#c8cb6d]" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button
                    variant="gradient"
                    size="md"
                    className="w-full"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Get In Touch
                  </Button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
