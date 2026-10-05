"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";
import { getTechIcon } from "./ui/TechIcons";
import { 
  Terminal, 
  Code2, 
  Play, 
  GitBranch, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Boxes, 
  Workflow, 
  Zap, 
  Building2, 
  Calendar, 
  MapPin 
} from "lucide-react";

export function Experience() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isTerminalRunning, setIsTerminalRunning] = useState<boolean>(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  const activeExp = experienceData[activeTab];

  const codeSnippets = [
    `// Oceansoftwares Private Limited — Frontend Architecture
import { NextApp, ReactQuery, TypeScript } from "@core/frontend";
import { DubaiClientCollab } from "@enterprise/deployment";

export class OceansoftwaresEngineer implements FrontendLead {
  readonly role = "Frontend Developer";
  readonly period = "Nov 2025 – Present";
  readonly location = "Chennai, India";
  
  public async buildScalableArchitecture(): Promise<DeploymentResult> {
    const modules = await this.engineerReusableSystems({
      framework: "Next.js 14 / React.js",
      typeSafety: "TypeScript Strict",
      stateCaching: "React Query (TanStack)",
      styling: "Tailwind CSS + Glassmorphism"
    });

    // Performance optimizations: code-splitting & memoization
    const performanceScore = await modules.optimizeRendering();
    return { status: "ACTIVE_IN_PRODUCTION", score: 99 };
  }
}`,
    `// Redblox Technologies Pvt Ltd — Enterprise Multi-Module Suite
import { ReduxToolkit, MUI, ApexCharts } from "@enterprise/core";
import { ExcelEngine, LicenseSecurity } from "@syncraze/modules";

export const RedbloxContributions = {
  company: "Redblox Technologies Pvt Ltd",
  period: "Dec 2022 – Jan 2025",
  clientScope: "Dubai International Enterprise",
  
  deliverables: [
    "5+ Full-Scale Web Applications",
    "9+ Syncraze Modules: HR, Fleet, HSE, Inventory",
    "Excel Bulk Upload IO with Real-time Validation",
    "ApexCharts Live Business KPI Telemetry"
  ],
  
  stack: ["React.js", "Next.js", "TypeScript", "MUI", "Redux", "PHP", "MySQL"],
  deployTarget: "Dubai Enterprise Staging & Production"
};`
  ];

  const handleRunSimulation = () => {
    setIsTerminalRunning(true);
    setTerminalLogs([]);

    const logs = [
      `$ git checkout branch/feature-${activeExp.company.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
      `$ pnpm run build:enterprise-suite`,
      `[INFO] Validating TypeScript strict type signatures... ✔ 0 errors`,
      `[INFO] Hydrating React Query cache layers for ${activeExp.company}...`,
      `[INFO] Compiling ApexCharts data streams & Excel bulk upload engine...`,
      `[SUCCESS] Production bundle generated in 3.4s (60fps animation verified)`,
      `[DEPLOY] Shipped to Production for ${activeExp.company} (${activeExp.period})`
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setTerminalLogs((prev) => [...prev, log]);
        if (index === logs.length - 1) {
          setIsTerminalRunning(false);
        }
      }, (index + 1) * 350);
    });
  };

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden scroll-mt-20">
      {/* Background Cyber Ambient Glows */}
      <div className="pointer-events-none absolute top-1/3 -left-48 w-96 h-96 bg-[#c8cb6d]/10 rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute bottom-10 -right-48 w-96 h-96 bg-[#7e8a42]/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Work Experience"
          title="Professional Career &"
          gradientText="Engineering Journey"
          description="Review my industry experience, delivered projects, and software contributions across key engineering roles."
        />

        {/* ========================================================================= */}
        {/* INTERACTIVE CODE STUDIO CONTAINER                                         */}
        {/* ========================================================================= */}
        <div className="rounded-3xl border border-[#c8cb6d]/30 bg-zinc-950 backdrop-blur-2xl code-editor-shadow overflow-hidden shadow-2xl keep-dark">
          
          {/* Top IDE Window Header Bar */}
          <div className="px-3.5 sm:px-6 py-3 bg-zinc-900 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            {/* Window Dots & Branch Info */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/90 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/90 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/90 inline-block" />
              </div>
              <div className="h-4 w-[1px] bg-white/15 mx-0.5 sm:mx-1" />
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-[#c8cb6d] bg-[#c8cb6d]/15 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#c8cb6d]/30">
                <GitBranch className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#c8cb6d]" />
                <span className="truncate max-w-[120px] xs:max-w-none text-[#e2e58c]">main / release-v3.0</span>
              </div>
            </div>

            {/* Run Code / Simulate Action */}
            <button
              onClick={handleRunSimulation}
              disabled={isTerminalRunning}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#7e8a42] to-[#c8cb6d] hover:from-[#8d9b4b] hover:to-[#d5d87a] text-stone-950 font-bold text-[11px] sm:text-xs tracking-wide shadow-lg shadow-[#c8cb6d]/20 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
              <span>{isTerminalRunning ? "Compiling..." : "Run Dev Simulation"}</span>
            </button>
          </div>

          {/* IDE Tabs Bar */}
          <div className="flex overflow-x-auto bg-zinc-950 border-b border-white/10 px-2 sm:px-4 pt-2 gap-1.5 sm:gap-2 scrollbar-none">
            {experienceData.map((exp, idx) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-t-xl text-[11px] sm:text-xs font-mono transition-all duration-200 border-t border-x cursor-pointer shrink-0 ${
                  activeTab === idx
                    ? "bg-zinc-900 text-[#e2e58c] border-[#c8cb6d]/40 border-b-zinc-900 shadow-md font-semibold"
                    : "bg-transparent text-stone-400 border-transparent hover:text-stone-200 hover:bg-white/[0.04]"
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-[#c8cb6d]" />
                <span className="text-stone-200">{exp.company.split(" ")[0]}.tsx</span>
                <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-white/[0.08] text-stone-300">
                  {idx === 0 ? "Latest" : "Core"}
                </span>
              </button>
            ))}
          </div>

          {/* IDE Workspace Grid: Left Code/Terminal, Right Company Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Left 7 Columns: Live Code & Terminal Output */}
            <div className="lg:col-span-7 p-3.5 sm:p-6 flex flex-col justify-between bg-zinc-950">
              <div>
                {/* File Header */}
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-stone-400 mb-3 sm:mb-4 pb-2 border-b border-white/10 gap-2">
                  <span className="truncate max-w-[190px] xs:max-w-none text-stone-300">{"// ACTIVE_WORKSPACE: src/experience/"}{activeExp.company.split(" ")[0]}.tsx</span>
                  <span className="text-[#c8cb6d] shrink-0 font-semibold">● Strict 5.0</span>
                </div>

                {/* Syntax Code Display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-[11px] sm:text-[13px] leading-relaxed text-stone-200 bg-zinc-900/90 p-3.5 sm:p-5 rounded-2xl border border-white/10 overflow-x-auto shadow-inner"
                  >
                    <pre className="text-[#e2e58c] whitespace-pre-wrap">
                      <code>{codeSnippets[activeTab]}</code>
                    </pre>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Live Simulated Terminal Output */}
              <div className="mt-4 sm:mt-6 p-3.5 sm:p-4 rounded-2xl bg-black border border-[#c8cb6d]/30 font-mono text-[11px] sm:text-xs shadow-inner">
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-stone-400 mb-2 border-b border-white/10 pb-1">
                  <span className="flex items-center gap-1.5 text-[#c8cb6d] font-semibold">
                    <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    bash output
                  </span>
                  <span className="text-stone-500">PID: 4892</span>
                </div>

                <div className="space-y-1 min-h-[60px] sm:min-h-[70px] text-stone-300">
                  {terminalLogs.length === 0 ? (
                    <p className="text-stone-400 italic text-[11px]">
                      Click &ldquo;Run Dev Simulation&rdquo; above to trigger live CI/CD pipeline...
                    </p>
                  ) : (
                    terminalLogs.map((log, lIdx) => (
                      <motion.p
                        key={lIdx}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={
                          log.startsWith("[SUCCESS]")
                            ? "text-[#c8cb6d] font-bold"
                            : log.startsWith("[DEPLOY]")
                            ? "text-[#e2e58c] font-bold"
                            : log.startsWith("$")
                            ? "text-[#c8cb6d]"
                            : "text-stone-200"
                        }
                      >
                        {log}
                      </motion.p>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Experience Details & Role Highlights */}
            <div className="lg:col-span-5 p-5 sm:p-8 flex flex-col justify-between bg-zinc-900/90 text-white">
              <div>
                {/* Company & Role Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#e2e58c] bg-[#c8cb6d]/15 px-3 py-1 rounded-full border border-[#c8cb6d]/30">
                    <Calendar className="w-3.5 h-3.5 text-[#c8cb6d]" />
                    {activeExp.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-stone-300">
                    <MapPin className="w-3.5 h-3.5 text-[#c8cb6d]" />
                    {activeExp.location}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tight">
                  {activeExp.role}
                </h3>
                <div className="flex items-center gap-2 text-sm font-bold text-[#c8cb6d] mb-4">
                  <Building2 className="w-4 h-4 text-[#c8cb6d]" />
                  <span>{activeExp.company}</span>
                </div>

                <p className="text-sm text-stone-200 leading-relaxed mb-6 font-normal">
                  {activeExp.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-3 mb-6">
                  {activeExp.achievements.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-stone-100 leading-relaxed p-3 rounded-xl bg-white/[0.06] border border-white/10 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#c8cb6d] shrink-0 mt-0.5" />
                      <span className="text-stone-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Utilized */}
              <div className="pt-5 border-t border-white/10">
                <p className="text-xs font-mono uppercase text-stone-400 mb-2.5 font-semibold">
                  Production Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeExp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#c8cb6d]/15 text-[#e2e58c] border border-[#c8cb6d]/30"
                    >
                      {getTechIcon(tech, { className: "w-3.5 h-3.5 shrink-0" })}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
