"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData, Project } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { ProjectCard } from "./ui/../ProjectCard";
import { ProjectModal } from "./ui/../ProjectModal";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { TiltCard } from "./ui/TiltCard";
import { 
  ArrowUpRight, 
  ExternalLink,
  CheckCircle2, 
  Globe2, 
  LayoutDashboard, 
  FileSpreadsheet, 
  BarChart3,
  Layers,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const flagshipProject = projectsData.find((p) => p.isFeatured) || projectsData[0];
  const gridProjects = projectsData.filter((p) => p.id !== flagshipProject.id);

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden bg-grid-pattern scroll-mt-20">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#c8cb6d]/10 rounded-full blur-[160px] -z-10" />
      <div className="pointer-events-none absolute bottom-10 -right-40 w-[600px] h-[600px] bg-[#7e8a42]/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Work"
          title="Engineered for Impact &"
          gradientText="Enterprise Scale"
          description="A curated selection of mission-critical web applications, real-time dashboards, and high-performance frontend solutions."
        />

        {/* ========================================================================= */}
        {/* FLAGSHIP HERO PROJECT SHOWCASE: SYNCRAZE (The Showpiece Card)            */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border border-[#c8cb6d]/30 hover:border-[#c8cb6d]/50 shadow-2xl relative overflow-hidden group">
            {/* Subtle Gradient Glow at Header */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#c8cb6d]/15 via-[#7e8a42]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Top Bar: Superpower Badge & International Client Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#7e8a42] to-[#c8cb6d] text-stone-950 shadow-lg shadow-[#c8cb6d]/30">
                  <Layers className="w-3.5 h-3.5" />
                  Flagship Enterprise Project
                </span>
                <Badge variant="glow" size="md">
                  {flagshipProject.superpower}
                </Badge>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c8cb6d]/10 text-[#e2e58c] border border-[#c8cb6d]/25 text-xs font-medium">
                <Globe2 className="w-3.5 h-3.5 text-[#c8cb6d]" />
                <span>Dubai Client Collaboration</span>
              </div>
            </div>

            {/* Main Content Grid: Preview on Left/Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Details & Highlights */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black dark:text-white text-stone-900 tracking-tight mb-2">
                    {flagshipProject.title}
                  </h3>
                  <p className="text-sm sm:text-base font-bold dark:text-[#e2e58c] text-[#344415] mb-4">
                    {flagshipProject.subtitle}
                  </p>
                  <p className="text-sm sm:text-base dark:text-stone-300 text-stone-700 leading-relaxed mb-6 font-normal">
                    {flagshipProject.description}
                  </p>

                  {/* Highlight Bullets from Resume */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3 text-xs sm:text-sm dark:text-stone-300 text-stone-700">
                      <div className="w-5 h-5 rounded-full dark:bg-[#c8cb6d]/20 bg-[#5c6b2f]/15 dark:text-[#c8cb6d] text-[#5c6b2f] flex items-center justify-center shrink-0 mt-0.5">
                        <LayoutDashboard className="w-3 h-3" />
                      </div>
                      <span>
                        <strong className="dark:text-white text-stone-900 font-bold">9+ Integrated Modules:</strong> Executive Dashboard, HR, Inventory, Fleet Tracking, HSE Safety & License Management.
                      </span>
                    </div>

                    <div className="flex items-start gap-3 text-xs sm:text-sm dark:text-stone-300 text-stone-700">
                      <div className="w-5 h-5 rounded-full dark:bg-[#7e8a42]/20 bg-[#5c6b2f]/15 dark:text-[#e2e58c] text-[#5c6b2f] flex items-center justify-center shrink-0 mt-0.5">
                        <FileSpreadsheet className="w-3 h-3" />
                      </div>
                      <span>
                        <strong className="dark:text-white text-stone-900 font-bold">Excel Bulk Upload Engine:</strong> High-throughput multi-record data ingestion, schema validation, and error reporting.
                      </span>
                    </div>

                    <div className="flex items-start gap-3 text-xs sm:text-sm dark:text-stone-300 text-stone-700">
                      <div className="w-5 h-5 rounded-full dark:bg-[#e69832]/20 bg-[#d97706]/15 text-[#e69832] flex items-center justify-center shrink-0 mt-0.5">
                        <BarChart3 className="w-3 h-3" />
                      </div>
                      <span>
                        <strong className="dark:text-white text-stone-900 font-bold">Dynamic ApexCharts Telemetry:</strong> Real-time KPI charts, live state caching with React Query, and Redux data store.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="mb-8">
                  <p className="text-xs font-mono uppercase tracking-wider dark:text-stone-500 text-stone-600 mb-3 font-semibold">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {flagshipProject.techStack.map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA Action Button */}
                <div className="flex flex-wrap items-center gap-3.5">
                  <Button
                    variant="gradient"
                    size="lg"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                    onClick={() => setSelectedProject(flagshipProject)}
                  >
                    View Full Case Study
                  </Button>
                  {flagshipProject.liveDemoUrl && (
                    <a
                      href={flagshipProject.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl dark:bg-white/[0.06] bg-stone-100 hover:dark:bg-white/[0.12] hover:bg-stone-200 dark:border-white/10 border-stone-300 dark:text-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm group/btn"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4 dark:text-[#c8cb6d] text-[#5c6b2f] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Hero Mockup with 3D Tilt */}
              <div className="lg:col-span-6">
                <TiltCard
                  onClick={() => setSelectedProject(flagshipProject)}
                  maxTilt={6}
                  className="rounded-2xl overflow-hidden border dark:border-white/15 border-stone-200 shadow-2xl bg-zinc-900 group cursor-pointer"
                >
                  <div className="relative w-full h-72 sm:h-96 md:h-[420px]">
                    <Image
                      src={flagshipProject.image}
                      alt={flagshipProject.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Interactive Click Cue */}
                    <div className="absolute bottom-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/95 text-stone-950 text-xs font-bold shadow-lg group-hover:bg-white transition-colors">
                        <span>Explore Case Study</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* BENTO GRID: REMAINING 5 ENTERPRISE & WEB PROJECTS                        */}
        {/* ========================================================================= */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-stone-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#c8cb6d]" />
            More Selected Work ({gridProjects.length})
          </h3>
          <span className="text-xs font-mono dark:text-stone-500 text-stone-600 font-semibold">
            Click any card to inspect full architecture
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gridProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
