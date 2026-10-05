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
      "dark:bg-white/[0.05] bg-stone-100 dark:text-stone-300 text-stone-800 dark:border-white/10 border-stone-200 hover:border-[#c8cb6d]/40",
    outline: "bg-transparent dark:text-stone-400 text-stone-700 dark:border-[#c8cb6d]/25 border-[#5c6b2f]/35 hover:border-[#c8cb6d]/50",
    glow: "dark:bg-[#c8cb6d]/15 bg-[#5c6b2f]/15 dark:text-[#e2e58c] text-[#344415] dark:border-[#c8cb6d]/35 border-[#5c6b2f]/35 dark:shadow-[0_0_15px_-3px_rgba(200,203,109,0.35)] shadow-sm font-semibold",
    accent:
      "dark:bg-gradient-to-r dark:from-[#7e8a42]/20 dark:via-[#c8cb6d]/20 dark:to-[#e69832]/20 bg-[#5c6b2f]/15 dark:text-[#e2e58c] text-[#344415] dark:border-[#c8cb6d]/35 border-[#5c6b2f]/35 font-semibold",
    cyan: "dark:bg-[#c8cb6d]/15 bg-[#5c6b2f]/15 dark:text-[#e2e58c] text-[#344415] dark:border-[#c8cb6d]/25 border-[#5c6b2f]/30 font-medium",
    purple:
      "dark:bg-[#7e8a42]/15 bg-[#5c6b2f]/15 dark:text-[#c8cb6d] text-[#344415] dark:border-[#7e8a42]/30 border-[#5c6b2f]/30 font-medium",
    sage: "dark:bg-[#c8cb6d]/15 bg-[#5c6b2f]/15 dark:text-[#e2e58c] text-[#344415] dark:border-[#c8cb6d]/30 border-[#5c6b2f]/30 font-medium",
    olive: "dark:bg-[#7e8a42]/15 bg-[#5c6b2f]/15 dark:text-[#c8cb6d] text-[#344415] dark:border-[#7e8a42]/30 border-[#5c6b2f]/30 font-medium",
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
