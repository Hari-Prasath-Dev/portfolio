"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { TiltCard } from "./ui/TiltCard";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2
} from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education &"
          gradientText="Engineering Foundation"
          description="Analytical foundations bridging mathematical precision and modern software engineering."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <TiltCard className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-[#c8cb6d]/40 transition-all duration-300 shadow-2xl relative overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#c8cb6d]/10 via-[#7e8a42]/10 to-transparent pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7e8a42] to-[#c8cb6d] flex items-center justify-center text-stone-950 font-bold shadow-lg shadow-[#c8cb6d]/20">
                  <GraduationCap className="w-6 h-6 text-stone-950" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {educationData.degree}
                  </h3>
                  <p className="text-sm font-semibold text-[#e2e58c]">
                    {educationData.institution}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#c8cb6d] bg-[#c8cb6d]/10 px-3 py-1 rounded-full border border-[#c8cb6d]/20">
                  <Calendar className="w-3.5 h-3.5" />
                  {educationData.period}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-stone-400">
                  <MapPin className="w-3.5 h-3.5 text-stone-500" />
                  {educationData.location}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-stone-300 mb-6 leading-relaxed">
              {educationData.details}
            </p>

            {/* Highlights */}
            <div className="space-y-2.5 pt-6 border-t border-white/10">
              {educationData.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-stone-400"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#c8cb6d] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
