"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient" | "glow";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      sm: "h-9 px-4 text-xs rounded-xl gap-2",
      md: "h-11 px-5 text-sm rounded-xl gap-2.5",
      lg: "h-12 px-7 text-base rounded-2xl gap-3 font-medium",
      xl: "h-14 px-8 text-lg rounded-2xl gap-3 font-semibold",
    };

    const variantStyles = {
      primary:
        "bg-[#c8cb6d] text-stone-950 hover:bg-[#d8db81] active:scale-[0.98] shadow-lg shadow-[#c8cb6d]/20 font-semibold",
      secondary:
        "bg-white/[0.06] text-stone-200 hover:bg-white/[0.12] border border-white/10 active:scale-[0.98]",
      outline:
        "bg-transparent text-stone-200 border border-[#c8cb6d]/30 hover:border-[#c8cb6d]/60 hover:bg-[#c8cb6d]/[0.08] active:scale-[0.98]",
      ghost:
        "bg-transparent text-stone-400 hover:text-stone-100 hover:bg-white/[0.06] active:scale-[0.98]",
      gradient:
        "bg-gradient-to-r from-[#7e8a42] via-[#9bae4f] to-[#c8cb6d] text-stone-950 font-bold hover:opacity-95 shadow-lg shadow-[#c8cb6d]/25 active:scale-[0.98] border border-white/20",
      glow: "bg-[#c8cb6d]/15 text-[#e2e58c] border border-[#c8cb6d]/40 hover:bg-[#c8cb6d]/25 shadow-[0_0_25px_-5px_rgba(200,203,109,0.4)] active:scale-[0.98]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "relative inline-flex items-center justify-center cursor-pointer select-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8cb6d] disabled:opacity-50 disabled:pointer-events-none group",
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
                {icon}
              </span>
            )}
            <span>{children}</span>
            {icon && iconPosition === "right" && (
              <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                {icon}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
