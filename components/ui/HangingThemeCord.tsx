"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import { useTheme } from "../ThemeProvider";

// Realistic light switch pull click synthesized with Web Audio API
function playPullClickSound() {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(1600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.04);

    setTimeout(() => {
      try {
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(500, ctx.currentTime);
        osc2.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.06);
        gain2.gain.setValueAtTime(0.12, ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start();
        osc2.stop(ctx.currentTime + 0.06);
      } catch {
        // ignore
      }
    }, 40);
  } catch {
    // AudioContext not supported / disabled
  }
}

export function HangingThemeCord() {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [pullTriggered, setPullTriggered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Raw interactive Y motion value (0 = normal idle resting state)
  const y = useMotionValue(0);

  // Physics spring for chain stretching
  const springY = useSpring(y, { stiffness: 450, damping: 22 });

  // Dynamic SVG Chain Line end coordinate (always 100% connected from ceiling y=0 down to pendant)
  const baseChainLength = 95;
  const currentChainEndY = useTransform(
    springY,
    (latest) => baseChainLength + latest
  );

  // Trigger theme toggle with sound & bounce
  const triggerSwitch = () => {
    playPullClickSound();
    toggleTheme();
    setPullTriggered(true);
    setTimeout(() => setPullTriggered(false), 500);
  };

  // Click handler: pull down smoothly with physics and snap back immediately
  const handleClick = () => {
    if (isDragging) return;
    // Animate down then spring back to 0
    animate(y, 45, {
      type: "spring",
      stiffness: 700,
      damping: 18,
      onComplete: () => {
        triggerSwitch();
        animate(y, 0, {
          type: "spring",
          stiffness: 500,
          damping: 15,
        });
      },
    });
  };

  // Drag handler on release
  const handleDragEnd = (
    _: unknown,
    info: { offset: { y: number }; velocity: { y: number } }
  ) => {
    setIsDragging(false);
    if (info.offset.y > 24 || info.velocity.y > 80) {
      triggerSwitch();
    }
    // Always snap back cleanly to 0 resting position
    animate(y, 0, {
      type: "spring",
      stiffness: 500,
      damping: 15,
    });
  };

  const isDark = theme === "dark";

  return (
    <div
      className="fixed top-0 right-3 sm:right-6 md:right-10 z-[70] flex flex-col items-center pointer-events-none select-none"
      style={{ filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.38))" }}
    >
      {/* Ceiling Mounting Bracket */}
      <div className="w-5 h-2.5 bg-gradient-to-b from-amber-700 via-amber-500 to-amber-600 rounded-b-md shadow-md border-b border-amber-300/40 relative z-20">
        <div className="absolute inset-x-1 top-0 h-[1px] bg-amber-200/80" />
      </div>

      {/* Dynamic Golden Beaded Chain (SVG Connected Directly to Pendant Ring) */}
      <svg
        className="overflow-visible pointer-events-none absolute top-2 left-1/2 -translate-x-1/2"
        style={{ width: "20px", height: "180px" }}
      >
        <defs>
          <linearGradient id="beadGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="35%" stopColor="#eab308" />
            <stop offset="70%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>
          <linearGradient id="chainSpine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <filter id="chainGlowFX" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#f59e0b" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Dynamic Continuous Chain Cord Spine */}
        <motion.line
          x1="10"
          y1="0"
          x2="10"
          y2={currentChainEndY}
          stroke="url(#chainSpine)"
          strokeWidth="2.5"
          filter="url(#chainGlowFX)"
        />

        {/* 16 Golden Metallic Beads Distributed Along the Dynamic Cord Length */}
        {Array.from({ length: 16 }).map((_, i) => {
          const ratio = (i + 0.5) / 16;
          return (
            <motion.circle
              key={i}
              cx="10"
              cy={useTransform(currentChainEndY, (endY) => endY * ratio)}
              r="2.4"
              fill="url(#beadGold)"
              stroke="#78350f"
              strokeWidth="0.5"
            />
          );
        })}
      </svg>

      {/* Interactive Hanging Celestial Orb (Positioned dynamically at base of chain) */}
      <motion.div
        style={{
          y: springY,
          marginTop: `${baseChainLength}px`,
        }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 65 }}
        dragElastic={0.2}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        onClick={handleClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={
          isDragging
            ? { rotate: 0 }
            : {
                rotate: [-2, 2, -2],
                transition: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                },
              }
        }
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto cursor-grab active:cursor-grabbing relative flex flex-col items-center group -mt-1"
        title="Pull down or Click to toggle Light / Dark theme"
      >
        {/* Top Metallic Link Ring (Tethered directly to the chain) */}
        <div className="w-3 h-3 rounded-full border-2 border-amber-400 bg-amber-600/70 shadow-inner -mb-1 z-10" />

        {/* Celestial Pendant Body (Sun / Moon) */}
        <div
          className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-0.5 transition-all duration-500 flex items-center justify-center ${
            isDark
              ? "bg-gradient-to-tr from-amber-600 via-indigo-950 to-amber-300 shadow-[0_0_22px_rgba(200,203,109,0.5)]"
              : "bg-gradient-to-tr from-amber-500 via-orange-400 to-yellow-200 shadow-[0_0_24px_rgba(245,158,11,0.6)]"
          }`}
        >
          {/* Inner Glowing Disc */}
          <div
            className={`w-full h-full rounded-full flex items-center justify-center backdrop-blur-md overflow-hidden relative transition-colors duration-500 ${
              isDark
                ? "bg-stone-950/95 border border-white/20"
                : "bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-400/70"
            }`}
          >
            {/* Celestial Aura Burst on Switch */}
            <AnimatePresence>
              {pullTriggered && (
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2.6, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`absolute inset-0 rounded-full ${
                    isDark ? "bg-[#c8cb6d]/60" : "bg-amber-400/70"
                  }`}
                />
              )}
            </AnimatePresence>

            {/* Moon / Sun Visual Icon */}
            <motion.div
              key={theme}
              initial={{ rotate: -120, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 120, scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              className="relative flex items-center justify-center"
            >
              {isDark ? (
                // Glowing Crescent Moon & Twinkle Star
                <div className="relative flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#f5ea82] drop-shadow-[0_0_9px_rgba(245,234,130,0.85)]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  <motion.span
                    animate={{ scale: [0.7, 1.2, 0.7], opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute -top-1 -right-1 text-[8px] text-[#fef08a]"
                  >
                    ✦
                  </motion.span>
                </div>
              ) : (
                // Radiant Sun with Rotating Solar Flares
                <div className="relative flex items-center justify-center">
                  <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    className="w-6 h-6 text-amber-600 drop-shadow-[0_0_9px_rgba(245,158,11,0.95)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" fill="#fbbf24" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </motion.svg>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Small Bottom Tassel Bell */}
        <div className="flex flex-col items-center -mt-0.5">
          <div className="w-1.5 h-2 bg-gradient-to-b from-amber-600 to-amber-700 rounded-b-sm" />
          <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 shadow-sm border border-amber-300/60" />
        </div>

        {/* Hover Micro-Guide Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.85 }}
              transition={{ duration: 0.18 }}
              className="absolute top-full mt-2 right-1/2 translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase border backdrop-blur-md shadow-xl pointer-events-none z-30 flex items-center gap-1.5 dark:bg-stone-900/95 dark:text-[#fef08a] dark:border-[#c8cb6d]/40 bg-stone-900/90 text-amber-200 border-amber-400/40"
            >
              <span>{isDark ? "🌙 Pull for Light" : "☀️ Pull for Dark"}</span>
              <span className="text-[11px] animate-bounce">↓</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
