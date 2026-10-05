"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { TiltCard } from "./ui/TiltCard";
import { Badge } from "./ui/Badge";
import { getTechIcon } from "./ui/TechIcons";
import { ArrowUpRight, Layers, Eye, ExternalLink, Globe } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index?: number;
}

export function ProjectCard({ project, onSelect, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <TiltCard
        onClick={() => onSelect(project)}
        className="h-full glass-card p-5 sm:p-6 rounded-3xl border border-white/10 hover:border-[#c8cb6d]/40 flex flex-col justify-between overflow-hidden relative group cursor-pointer"
      >
        <div>
          {/* Mockup Image Preview */}
          <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-zinc-900 mb-5 border border-white/10 group-hover:border-[#c8cb6d]/30 transition-colors">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/20" />

            {/* Top Superpower Badge & Live Pill */}
            <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between gap-2">
              <Badge variant="accent" size="sm">
                <Layers className="w-3 h-3 text-[#c8cb6d]" />
                <span>{project.superpower}</span>
              </Badge>

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 hover:bg-[#c8cb6d] text-stone-200 hover:text-stone-950 text-[11px] font-semibold border border-white/20 backdrop-blur-md transition-all duration-300 shadow-md group/live"
                  title="Open Live Website"
                >
                  <Globe className="w-3 h-3 text-[#c8cb6d] group-hover/live:text-stone-950" />
                  <span>Live</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-80" />
                </a>
              )}
            </div>

            {/* Hover Reveal Overlay */}
            <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 p-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-zinc-950 text-xs font-bold shadow-xl hover:bg-stone-100 transition-colors">
                <Eye className="w-3.5 h-3.5" />
                Case Study
              </span>
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#c8cb6d] hover:bg-[#d5d87a] text-stone-950 text-xs font-bold shadow-xl transition-colors"
                >
                  <span>Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Category */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-mono uppercase tracking-wider dark:text-[#c8cb6d] text-[#344415] font-bold">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold dark:text-white text-stone-900 mb-2 group-hover:text-[#c8cb6d] transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-[#c8cb6d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm dark:text-stone-400 text-stone-700 leading-relaxed line-clamp-2 mb-5 font-normal">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Footer */}
        <div className="pt-4 border-t dark:border-white/[0.08] border-stone-200 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              size="sm"
              icon={getTechIcon(tech, { className: "w-3 h-3 shrink-0" })}
            >
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] dark:text-stone-500 text-stone-600 font-mono self-center ml-1 font-semibold">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
      </TiltCard>
    </motion.div>
  );
}
