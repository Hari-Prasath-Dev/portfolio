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
        "bg-[#c8cb6d] text-stone-950 hover:bg-[#d8db81] active:scale-[0.98] shadow-lg shadow-[#c8cb6d]/20 font-bold",
      secondary:
        "dark:bg-white/[0.06] bg-stone-100 dark:text-stone-200 text-stone-800 hover:dark:bg-white/[0.12] hover:bg-stone-200 dark:border-white/10 border-stone-300 font-semibold active:scale-[0.98]",
      outline:
        "dark:bg-transparent bg-white/95 dark:text-stone-200 text-stone-800 dark:border-[#c8cb6d]/35 border-stone-300 hover:dark:border-[#c8cb6d]/60 hover:border-[#5c6b2f] hover:dark:bg-[#c8cb6d]/[0.08] hover:bg-stone-100 font-semibold active:scale-[0.98] shadow-sm",
      ghost:
        "bg-transparent dark:text-stone-400 text-stone-700 hover:dark:text-stone-100 hover:text-stone-950 hover:dark:bg-white/[0.06] hover:bg-stone-100 active:scale-[0.98]",
      gradient:
        "bg-gradient-to-r from-[#7e8a42] via-[#9bae4f] to-[#c8cb6d] text-stone-950 font-black hover:opacity-95 shadow-lg shadow-[#c8cb6d]/25 active:scale-[0.98] border border-white/20",
      glow: "dark:bg-[#c8cb6d]/15 bg-[#5c6b2f]/15 dark:text-[#e2e58c] text-[#344415] dark:border-[#c8cb6d]/40 border-[#5c6b2f]/40 hover:dark:bg-[#c8cb6d]/25 hover:bg-[#5c6b2f]/25 font-bold shadow-sm active:scale-[0.98]",
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
