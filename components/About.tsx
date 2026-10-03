"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalData } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { TiltCard } from "./ui/TiltCard";
import { StatCounter } from "./ui/StatCounter";
import { 
  Sparkles, 
  Layers, 
  Gauge, 
  Globe, 
  CheckCircle2, 
  Terminal,
  Cpu,
  Workflow,
  Download
} from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Cpu,
      title: "Scalable Component Architecture",
      desc: "Architecting modular, highly reusable UI systems with TypeScript and React.",
    },
    {
      icon: Gauge,
      title: "Sub-Second Performance",
      desc: "Fine-tuning rendering pipelines, lazy loading, and React Query cache optimization.",
    },
    {
      icon: Globe,
      title: "International Collaboration",
      desc: "Hands-on experience delivering multi-module ERP platforms for Dubai clients.",
    },
    {
      icon: Workflow,
      title: "Predictable State Management",
      desc: "Mastery over Redux, React Hooks, and asynchronous RESTful workflows.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden scroll-mt-20">
      {/* Background Accent */}
      <div className="pointer-events-none absolute top-1/2 -right-48 w-96 h-96 bg-[#c8cb6d]/10 rounded-full blur-[130px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Engineering Precision Meets"
          gradientText="Modern Aesthetics"
          description="Transforming intricate business requirements into fluid, high-conversion web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#c8cb6d]/10 to-transparent pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#c8cb6d]/15 border border-[#c8cb6d]/30 flex items-center justify-center text-[#c8cb6d] shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">The Engineering Mindset</h3>
                  <p className="text-xs font-mono text-stone-400">Frontend Developer & Specialist</p>
                </div>
              </div>

              <div className="space-y-4 text-stone-300 text-xs sm:text-base leading-relaxed">
                {personalData.aboutBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Verified Tag & Resume CTA */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c8cb6d] shrink-0" />
                    <span className="text-xs font-medium text-stone-300">Clean Code & Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e2e58c] shrink-0" />
                    <span className="text-xs font-medium text-stone-300">Agile & Cross-Functional</span>
                  </div>
                </div>

                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Hari_Prasath_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#7e8a42]/30 to-[#c8cb6d]/30 hover:from-[#7e8a42]/50 hover:to-[#c8cb6d]/50 border border-[#c8cb6d]/40 text-white font-semibold text-xs transition-all shadow-lg hover:shadow-[#c8cb6d]/20 group shrink-0"
                >
                  <Download className="w-3.5 h-3.5 text-[#c8cb6d] group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Full CV</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Stats & Core Competencies */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8">
            {/* Stat Counters Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {personalData.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <TiltCard className="h-full glass-card p-4 sm:p-7 rounded-2xl border border-white/10 hover:border-[#c8cb6d]/40 transition-all duration-300 text-center flex flex-col items-center justify-center relative group">
                    <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-gradient-primary mb-1 sm:mb-2">
                      <StatCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-[11px] sm:text-sm font-medium text-stone-400">
                      {stat.label}
                    </p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            {/* Core Competencies List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 hover:border-[#c8cb6d]/30 transition-all duration-300 flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#c8cb6d] shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-stone-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
