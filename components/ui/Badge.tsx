"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "glow" | "accent" | "cyan" | "purple" | "sage" | "olive";
  className?: string;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "default",
  className,
  size = "md",
  icon,
}: BadgeProps) {
  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 gap-1.5",
    md: "text-xs font-medium px-3 py-1 gap-2",
    lg: "text-sm font-medium px-3.5 py-1.5 gap-2",
  };

  const variantStyles = {
    default:
      "bg-white/[0.05] text-stone-300 border border-white/10 hover:border-[#c8cb6d]/30",
    outline: "bg-transparent text-stone-400 border border-[#c8cb6d]/25 hover:border-[#c8cb6d]/50",
    glow: "bg-[#c8cb6d]/15 text-[#e2e58c] border border-[#c8cb6d]/35 shadow-[0_0_15px_-3px_rgba(200,203,109,0.35)]",
    accent:
      "bg-gradient-to-r from-[#7e8a42]/20 via-[#c8cb6d]/20 to-[#e69832]/20 text-[#e2e58c] border border-[#c8cb6d]/35",
    cyan: "bg-[#c8cb6d]/15 text-[#e2e58c] border border-[#c8cb6d]/25 shadow-[0_0_15px_-3px_rgba(200,203,109,0.25)]",
    purple:
      "bg-[#7e8a42]/15 text-[#c8cb6d] border border-[#7e8a42]/30 shadow-[0_0_15px_-3px_rgba(126,138,66,0.25)]",
    sage: "bg-[#c8cb6d]/15 text-[#e2e58c] border border-[#c8cb6d]/30 shadow-[0_0_15px_-3px_rgba(200,203,109,0.25)]",
    olive: "bg-[#7e8a42]/15 text-[#c8cb6d] border border-[#7e8a42]/30 shadow-[0_0_15px_-3px_rgba(126,138,66,0.25)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full transition-all duration-200 select-none",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
