"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";
import { TiltCard } from "./ui/TiltCard";
import { getTechIcon } from "./ui/TechIcons";
import { 
  Layout, 
  Cpu, 
  BarChart3, 
  Database, 
  Wrench, 
  CheckCircle,
  Zap
} from "lucide-react";

import { TechOrbShowcase } from "./TechOrbShowcase";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryIcons: Record<string, React.ReactNode> = {
    "Frontend & Frameworks": <Layout className="w-4 h-4 text-[#c8cb6d]" />,
    "State Management & Data": <Cpu className="w-4 h-4 text-[#e2e58c]" />,
    "Data Visualization & Charts": <BarChart3 className="w-4 h-4 text-[#e69832]" />,
    "Backend & Database": <Database className="w-4 h-4 text-[#7e8a42]" />,
    "Tools & Development Practices": <Wrench className="w-4 h-4 text-[#c8cb6d]" />,
  };

  const categories = ["All", ...skillsData.map((s) => s.title)];

  const displayedCategories =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.title === selectedCategory);

  const categoryPaths: Record<string, string> = {
    "Frontend & Frameworks": "src/components/ui",
    "State Management & Data": "src/store/state",
    "Data Visualization & Charts": "src/analytics/charts",
    "Backend & Database": "src/server/database",
    "Tools & Development Practices": "src/config/devtools",
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden bg-grid-pattern scroll-mt-20">
      {/* Glow Backdrop */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-[#c8cb6d]/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tech Stack & Skills"
          title="Interactive Tech Ecosystem &"
          gradientText="Modern Architecture"
          description="Continuous interactive technology core connecting frontend, full-stack, and database systems."
        />

        {/* 3D Orbiting Tech Core & Energy Beams Interactive Showcase */}
        <TechOrbShowcase />

        {/* Directory Categorized View Header */}
        <div className="mt-8 mb-6 text-center">
          <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-stone-900 mb-2">
            Explore By <span className="text-gradient-primary">Engineering Domain</span>
          </h3>
          <p className="text-xs sm:text-sm dark:text-stone-400 text-stone-600 max-w-xl mx-auto font-medium">
            Categorized directory modules with production-tested proficiency levels
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#7e8a42] to-[#c8cb6d] text-stone-950 font-bold shadow-lg shadow-[#c8cb6d]/20 scale-105 border border-[#c8cb6d]/40"
                  : "dark:bg-white/[0.04] bg-stone-100 dark:text-stone-400 text-stone-700 hover:dark:text-white hover:text-stone-950 dark:border-white/10 border-stone-200 hover:bg-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayedCategories.map((categoryGroup, groupIdx) => (
            <motion.div
              key={categoryGroup.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="h-full"
            >
              <TiltCard
                className="h-full glass-card p-5 sm:p-7 rounded-3xl border dark:border-white/10 border-stone-200 flex flex-col justify-between relative overflow-hidden hover:border-[#c8cb6d]/40 transition-all duration-300 group shadow-sm"
              >
                <div>
                  {/* Folder Tab Notch */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full dark:bg-[#c8cb6d]/10 bg-[#5c6b2f]/10 border dark:border-[#c8cb6d]/20 border-[#5c6b2f]/30 text-[10px] font-mono dark:text-[#c8cb6d] text-[#344415] font-semibold mb-4">
                    <span>📂</span>
                    <span>{categoryPaths[categoryGroup.title] || "src/modules"}</span>
                  </div>

                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl dark:bg-white/[0.06] bg-stone-100 border dark:border-white/10 border-stone-200 flex items-center justify-center shrink-0">
                      {categoryIcons[categoryGroup.title] || <Zap className="w-4 h-4 text-[#c8cb6d]" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold dark:text-white text-stone-900 tracking-tight">
                        {categoryGroup.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs dark:text-stone-400 text-stone-700 mb-6 leading-relaxed font-normal">
                    {categoryGroup.description}
                  </p>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {categoryGroup.skills.map((skill) => {
                      const techIcon = getTechIcon(skill.name, { className: "w-3.5 h-3.5 shrink-0" });
                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Badge
                            variant={skill.highlight ? "accent" : "default"}
                            size="md"
                            icon={
                              techIcon || (
                                skill.highlight ? (
                                  <Zap className="w-3 h-3 text-[#c8cb6d]" />
                                ) : (
                                  <CheckCircle className="w-3 h-3 text-stone-500" />
                                )
                              )
                            }
                            className="py-1.5 px-3"
                          >
                            <span className="font-semibold text-xs">{skill.name}</span>
                            <span className="text-[10px] dark:text-stone-400 text-stone-600 font-mono ml-1">
                              {skill.level}
                            </span>
                          </Badge>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Subtle Bar */}
                <div className="mt-8 pt-4 border-t dark:border-white/[0.06] border-stone-200 flex items-center justify-between text-[11px] font-mono dark:text-stone-500 text-stone-600 font-semibold">
                  <span>{categoryGroup.skills.length} Technologies</span>
                  <span className="dark:text-[#c8cb6d] text-[#344415]">Production Tested</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
