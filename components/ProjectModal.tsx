"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/data";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { getTechIcon } from "./ui/TechIcons";
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Globe2, 
  Calendar, 
  LayoutDashboard,
  Cpu,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl -z-10"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-white/15 shadow-2xl text-left my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/15 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero Preview Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 bg-zinc-900 overflow-hidden border-b border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              {/* Badges on Hero */} 
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="accent" size="lg">
                    {project.superpower}
                  </Badge>
                  <Badge variant="glow" size="lg">
                    {project.category}
                  </Badge>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {project.client && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[#c8cb6d]/20 text-[#e2e58c] border border-[#c8cb6d]/30">
                      <Globe2 className="w-3.5 h-3.5 text-[#c8cb6d]" />
                      <span>{project.client}</span>
                    </div>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#c8cb6d] text-stone-950 hover:bg-[#d5d87a] shadow-lg transition-all duration-200"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 md:p-10 space-y-8">
              {/* Title & Subtitle */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-base text-stone-400 font-medium">
                  {project.subtitle}
                </p>
              </div>

              {/* Metrics Highlights (if available) */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl glass-panel border border-white/10">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center p-2">
                      <p className="text-lg sm:text-xl font-bold text-gradient-primary">
                        {m.value}
                      </p>
                      <p className="text-[11px] font-mono text-stone-400 mt-0.5">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Full Overview */}
              <div>
                <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#c8cb6d]" />
                  Overview
                </h4>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                  {project.fullOverview}
                </p>
              </div>

              {/* Modules Breakdown (for Flagship Syncraze) */}
              {project.modules && project.modules.length > 0 && (
                <div>
                  <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4 text-[#e2e58c]" />
                    Delivered Modules & Sub-systems ({project.modules.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {project.modules.map((mod) => (
                      <div
                        key={mod}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-stone-300 font-medium"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-[#c8cb6d] shrink-0" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Roles & Key Contributions */}
              <div>
                <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#c8cb6d]" />
                  Key Roles & Engineering Contributions
                </h4>
                <div className="space-y-3">
                  {project.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-stone-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#c8cb6d] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div>
                <h4 className="text-sm font-bold text-stone-400 uppercase font-mono tracking-wider mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="default"
                      size="md"
                      icon={getTechIcon(tech, { className: "w-4 h-4 shrink-0" })}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Footer Modal Actions */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-stone-500 font-mono">
                  Verified Frontend Deliverable • Production Ready
                </p>
                <div className="flex items-center gap-3">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#c8cb6d] hover:bg-[#d5d87a] text-stone-950 font-bold text-xs sm:text-sm shadow-lg shadow-[#c8cb6d]/20 transition-all duration-200"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <Button variant="secondary" size="md" onClick={onClose}>
                    Close Case Study
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
