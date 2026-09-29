"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  gradientText?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  gradientText,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div
      className={cn(
        "flex flex-col mb-12 sm:mb-16 md:mb-20 max-w-3xl",
        alignmentClass,
        className
      )}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#c8cb6d]/15 text-[#e2e58c] border border-[#c8cb6d]/35 shadow-[0_0_18px_-3px_rgba(200,203,109,0.35)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8cb6d] animate-pulse" />
            &lt;{badge}&gt;
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-stone-100 leading-[1.15]"
      >
        {title}{" "}
        {gradientText && (
          <span className="text-gradient-primary inline-block">
            {gradientText}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-stone-400 leading-relaxed max-w-2xl font-normal"
        >
          {description}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={cn(
          "h-1 w-28 bg-gradient-to-r from-[#c8cb6d] via-[#e2e58c] to-[#e69832] rounded-full mt-6 shadow-[0_0_12px_rgba(200,203,109,0.45)]",
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        )}
      />
    </div>
  );
}
