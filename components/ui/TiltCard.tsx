"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
  neonBorder?: boolean;
  onClick?: () => void;
}

export function TiltCard({
  children,
  className,
  maxTilt = 10,
  glowColor = "rgba(200, 203, 109, 0.22)",
  neonBorder = true,
  onClick,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-maxTilt, maxTilt]);

  // Dynamic glare coordinates
  const glareX = useTransform(mouseXSpring, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRatio = (e.clientX - rect.left) / width;
    const mouseYRatio = (e.clientY - rect.top) / height;

    x.set(mouseXRatio);
    y.set(mouseYRatio);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className="relative h-full w-full select-none"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative rounded-3xl transition-all duration-300 will-change-transform group cursor-pointer overflow-hidden",
          className
        )}
      >
        {/* 1. Neon Glowing Iridescent Animated Border */}
        {neonBorder && (
          <div
            className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30"
            style={{
              background:
                "linear-gradient(135deg, rgba(200, 203, 109, 0.7) 0%, rgba(16, 185, 129, 0.6) 35%, rgba(56, 189, 248, 0.6) 70%, rgba(230, 152, 50, 0.7) 100%)",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              padding: "1.5px",
            }}
          />
        )}

        {/* 2. Dynamic Radial Spotlight / Cursor Glow Follower */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          style={{
            background: isHovered
              ? `radial-gradient(450px circle at calc(${x.get()} * 100%) calc(${y.get()} * 100%), ${glowColor}, transparent 65%)`
              : "none",
          }}
        />

        {/* 3. Holographic Rainbow Foil Sheen (Diagonal reflection) */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-20 mix-blend-color-dodge"
          style={{
            background:
              "linear-gradient(115deg, transparent 20%, rgba(200, 203, 109, 0.4) 40%, rgba(56, 189, 248, 0.4) 50%, rgba(236, 72, 153, 0.3) 60%, transparent 80%)",
            backgroundPosition: `${glareX} ${glareY}`,
            backgroundSize: "200% 200%",
          }}
        />

        {/* 4. Ambient Neon Drop Shadow Glow behind card */}
        <div
          className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none -z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(200, 203, 109, 0.25) 0%, rgba(16, 185, 129, 0.15) 50%, transparent 70%)",
          }}
        />

        {/* 5. Futuristic Corner Tech HUD Crosshairs */}
        <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-[#c8cb6d]/30 group-hover:border-[#c8cb6d] transition-colors pointer-events-none z-20" />
        <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-[#c8cb6d]/30 group-hover:border-[#c8cb6d] transition-colors pointer-events-none z-20" />
        <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-[#c8cb6d]/30 group-hover:border-[#c8cb6d] transition-colors pointer-events-none z-20" />
        <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-[#c8cb6d]/30 group-hover:border-[#c8cb6d] transition-colors pointer-events-none z-20" />

        {/* Card Content with 3D Depth */}
        <div
          className="relative z-10 h-full w-full"
          style={{ transform: isHovered ? "translateZ(18px)" : "translateZ(0px)", transition: "transform 0.3s ease-out" }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
