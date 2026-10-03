"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, Code2, Cpu, CheckCircle2, Zap, Layers } from "lucide-react";

interface PreloaderProps {
  onComplete?: () => void;
}

const introStages = [
  {
    tag: "SYSTEM_INIT",
    title: "DEVELOPER PROFILE",
    subtitle: "INITIALIZING PRODUCTION ENVIRONMENT",
  },
  {
    tag: "IDENTITY",
    title: "HARI PRASATH",
    subtitle: "SENIOR FRONTEND ENGINEER",
    highlight: true,
  },
  {
    tag: "CORE_SPECIALTY",
    title: "REACT & NEXT.JS SPECIALIST",
    subtitle: "3+ YEARS ENTERPRISE WEB ARCHITECTURE",
    role: true,
  },
];

const buildLogs = [
  "✓ Next.js 16 & Turbopack ready",
  "✓ TypeScript Strict Architecture loaded",
  "✓ Enterprise UI Design System compiled",
  "✓ Ready to launch",
];

const COLUMN_COUNT = 6;

export function Preloader({ onComplete }: PreloaderProps) {
  const [currentStage, setCurrentStage] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isCurtainFalling, setIsCurtainFalling] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Stage switcher (smooth transition through 3 core professional stages)
    const stage1 = setTimeout(() => setCurrentStage(1), 600);
    const stage2 = setTimeout(() => setCurrentStage(2), 1500);

    // Build logs sequence
    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev < buildLogs.length - 1 ? prev + 1 : prev));
    }, 550);

    // Progress counter: 0% -> 100% in 2.5s
    const startTime = Date.now();
    const duration = 2400;

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculated = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(calculated);

      if (calculated >= 100) {
        clearInterval(progressTimer);
        clearInterval(logInterval);
        setTimeout(() => {
          setIsCurtainFalling(true);
        }, 220);
      }
    }, 25);

    return () => {
      clearTimeout(stage1);
      clearTimeout(stage2);
      clearInterval(logInterval);
      clearInterval(progressTimer);
    };
  }, []);

  const handleFinish = () => {
    setIsFinished(true);
    if (onComplete) onComplete();
  };

  const handleSkip = () => {
    setIsCurtainFalling(true);
  };

  if (isFinished) return null;

  return (
    <div className="fixed inset-0 z-[999999] pointer-events-auto select-none overflow-hidden bg-transparent">
      {/* 
        CURTAIN EFFECT: Multi-column vertical rectangle panels
        When triggered, each panel falls down in a staggered wave revealing the portfolio!
      */}
      <div className="absolute inset-0 flex w-full h-full pointer-events-none">
        {Array.from({ length: COLUMN_COUNT }).map((_, i) => (
          <motion.div
            key={`curtain-col-${i}`}
            initial={{ y: "0%" }}
            animate={
              isCurtainFalling
                ? {
                    y: "100%",
                    transition: {
                      duration: 0.85,
                      delay: i * 0.065,
                      ease: [0.77, 0, 0.175, 1],
                    },
                  }
                : { y: "0%" }
            }
            onAnimationComplete={
              i === COLUMN_COUNT - 1 && isCurtainFalling ? handleFinish : undefined
            }
            className="relative h-full flex-1 border-r border-[#c8cb6d]/15 last:border-r-0 overflow-hidden"
            style={{
              background:
                i % 2 === 0
                  ? "linear-gradient(180deg, #050806 0%, #0d160f 45%, #070c08 100%)"
                  : "linear-gradient(180deg, #080d09 0%, #111d13 45%, #0a100b 100%)",
            }}
          >
            {/* Tech Column Matrix ID */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest text-[#c8cb6d]/30">
              MODULE_0{i + 1}
            </div>

            {/* Glowing neon green & sage bottom falling edge */}
            <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#10b981]/30 via-[#c8cb6d]/20 to-transparent blur-xl" />
            <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#7e8a42] via-[#c8cb6d] to-[#10b981] shadow-[0_0_25px_#10b981]" />

            {/* Subtle background grid pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#c8cb6d_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Main Content Overlay */}
      <AnimatePresence>
        {!isCurtainFalling && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -50,
              scale: 0.95,
              filter: "blur(12px)",
              transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
            }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-between p-6 sm:p-10 md:p-14"
          >
            {/* Top Bar Header */}
            <div className="w-full max-w-5xl flex items-center justify-between">
              <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#101912]/90 border border-[#c8cb6d]/30 backdrop-blur-xl shadow-[0_0_20px_rgba(200,203,109,0.15)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]"></span>
                </span>
                <span className="text-xs font-mono font-semibold tracking-wider text-[#c8cb6d] uppercase flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>HARI PRASATH // PRODUCTION OS</span>
                </span>
              </div>

              <button
                onClick={handleSkip}
                className="group flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono text-stone-300 hover:text-white bg-[#142017]/80 hover:bg-[#1a291f] border border-[#c8cb6d]/20 hover:border-[#c8cb6d]/50 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.4)]"
              >
                <span>ENTER SITE</span>
                <span className="text-[#c8cb6d] group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </button>
            </div>

            {/* Center Stage: High-Impact Typography & Developer Identity */}
            <div className="flex flex-col items-center justify-center text-center max-w-4xl my-auto px-4 w-full">
              {/* Terminal status pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0e1610]/90 border border-[#c8cb6d]/20 mb-6 text-xs font-mono text-stone-300 shadow-inner">
                <Terminal className="w-3.5 h-3.5 text-[#10b981]" />
                <span className="text-[#c8cb6d] font-semibold">{introStages[currentStage].tag}</span>
                <span className="text-stone-500">//</span>
                <span className="text-stone-300">LIVE BUILD</span>
              </div>

              {/* Main Animated Stage Content */}
              <div className="min-h-[140px] sm:min-h-[170px] flex flex-col items-center justify-center w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStage}
                    initial={{ opacity: 0, y: 25, filter: "blur(10px)", scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, y: -25, filter: "blur(10px)", scale: 0.96 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    {introStages[currentStage].highlight ? (
                      <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-stone-100 uppercase">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#e2e58c] to-[#c8cb6d] drop-shadow-[0_0_40px_rgba(200,203,109,0.45)]">
                          Hari Prasath
                        </span>
                      </h1>
                    ) : introStages[currentStage].role ? (
                      <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-3 justify-center flex-wrap">
                          <Code2 className="w-8 h-8 sm:w-12 sm:h-12 text-[#10b981] animate-pulse" />
                          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c8cb6d] via-[#10b981] to-[#38bdf8] uppercase">
                            React Developer
                          </h1>
                        </div>
                      </div>
                    ) : (
                      <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-stone-100 via-stone-200 to-stone-400 uppercase">
                        {introStages[currentStage].title}
                      </h1>
                    )}

                    {/* Subtitle */}
                    <p className="mt-4 text-xs sm:text-sm md:text-base font-mono tracking-widest text-[#c8cb6d] uppercase">
                      {introStages[currentStage].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Developer Credentials Badges */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <div className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-[#142017]/80 border border-[#c8cb6d]/30 text-[#e2e58c] flex items-center gap-2 shadow-sm">
                  <Zap className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>3+ Years Experience</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-[#142017]/80 border border-[#10b981]/30 text-[#10b981] flex items-center gap-2 shadow-sm">
                  <Layers className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Enterprise React & Next.js</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-[#142017]/80 border border-white/15 text-stone-200 flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c8cb6d]" />
                  <span>Syncraze ERP Architect</span>
                </div>
              </div>

              {/* Build Log Terminal Output */}
              <div className="mt-6 flex items-center gap-2 text-xs font-mono text-stone-400 bg-black/40 px-4 py-2 rounded-md border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                <span className="text-stone-300">{buildLogs[logIndex]}</span>
              </div>
            </div>

            {/* Bottom Progress Bar & Diagnostics */}
            <div className="w-full max-w-lg flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-2 text-stone-300 font-medium">
                  <Sparkles className="w-4 h-4 text-[#c8cb6d] animate-spin" />
                  <span className="tracking-wide">COMPILING ENTERPRISE UI</span>
                </span>
                <span className="text-[#c8cb6d] font-bold text-sm tracking-wider">{progress}%</span>
              </div>

              {/* Progress track */}
              <div className="w-full h-2 bg-[#0d140f] rounded-full overflow-hidden border border-[#c8cb6d]/30 relative p-[1px] shadow-[0_0_20px_rgba(200,203,109,0.15)]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#7e8a42] via-[#c8cb6d] to-[#10b981] rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_12px_#10b981]" />
                </motion.div>
              </div>

              <div className="flex justify-between items-center text-[11px] font-mono text-stone-500">
                <span>PORTFOLIO OS // SENIOR FRONTEND</span>
                <span className="text-[#10b981] font-semibold">STATUS: OPTIMIZED</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
