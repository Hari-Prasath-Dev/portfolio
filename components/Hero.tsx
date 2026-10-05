"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personalData } from "@/lib/data";
import { Button } from "./ui/Button";
import { MagneticButton } from "./ui/MagneticButton";
import { LinkedInIcon } from "./ui/Icons";
import {
  ReactIcon,
  NextjsIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  MuiIcon,
  ReduxIcon,
  ReactQueryIcon,
  GitIcon,
  GithubIcon,
  NodejsIcon,
  TailwindIcon,
  MongodbIcon,
  ExpressIcon,
  MysqlIcon,
  PhpIcon,
} from "./ui/TechIcons";
import { 
  ArrowDown, 
  Mail, 
  Phone, 
  Code, 
  ExternalLink,
  ChevronDown,
  Layers,
  Zap,
  Globe2,
  Download,
  Folder,
  FolderOpen,
  FileCode,
  Terminal,
  ChevronRight
} from "lucide-react";
import Image from "next/image";

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeFolder, setActiveFolder] = useState<"frontend" | "backend" | "tools">("frontend");

  const techFolders = {
    frontend: {
      folderName: "frontend",
      path: "src/frontend",
      label: "Frontend",
      files: [
        { file: "React.tsx", name: "React.js", icon: <ReactIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
        { file: "Next.app", name: "Next.js", icon: <NextjsIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
        { file: "Types.ts", name: "TypeScript", icon: <TypeScriptIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
        { file: "Index.js", name: "JavaScript", icon: <JavaScriptIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
        { file: "Style.css", name: "Tailwind CSS", icon: <TailwindIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
      ],
    },
    backend: {
      folderName: "backend-db",
      path: "src/backend-db",
      label: "Backend & DB",
      files: [
        { file: "Server.js", name: "Node.js", icon: <NodejsIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
        { file: "App.ts", name: "Express.js", icon: <ExpressIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
        { file: "Data.db", name: "MongoDB", icon: <MongodbIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
        { file: "Schema.sql", name: "MySQL", icon: <MysqlIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
        { file: "Core.php", name: "PHP", icon: <PhpIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
      ],
    },
    tools: {
      folderName: "state-tools",
      path: "src/state-tools",
      label: "Tools & Store",
      files: [
        { file: "Store.ts", name: "Redux", icon: <ReduxIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
        { file: "Query.ts", name: "React Query", icon: <ReactQueryIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
        { file: "Theme.tsx", name: "MUI", icon: <MuiIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
        { file: "VCS.git", name: "Git", icon: <GitIcon className="w-5 h-5 sm:w-6 sm:h-6" /> },
        { file: "Repo.hub", name: "GitHub", icon: <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" /> },
      ],
    },
  };

  // Typewriter effect logic
  useEffect(() => {
    const currentTagline = personalData.taglines[taglineIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTagline.length) {
          setDisplayText(currentTagline.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTagline.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % personalData.taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex]);

  // Mouse tilt parallax for hero avatar
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [12, -12]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-12, 12]), {
    stiffness: 200,
    damping: 20,
  });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleHeroMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-36 pb-20 md:pt-40 md:pb-24 lg:pt-36 lg:pb-20 overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glows (Sage Gold & Deep Olive) */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#c8cb6d]/15 rounded-full blur-[140px] -z-10" />
      <div className="pointer-events-none absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#7e8a42]/12 rounded-full blur-[130px] -z-10" />
      <div className="pointer-events-none absolute bottom-10 -right-40 w-[600px] h-[600px] bg-[#e69832]/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full dark:bg-white/[0.05] bg-stone-100/90 border dark:border-white/10 border-stone-200 backdrop-blur-md mb-6 shadow-sm hover:border-[#c8cb6d]/40 transition-all duration-300"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]" />
              </span>
              <span className="text-xs font-semibold dark:text-stone-300 text-stone-800">
                Available for New Projects & Opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg font-mono dark:text-stone-400 text-stone-700 mb-2 flex items-center gap-2 justify-center lg:justify-start font-semibold"
            >
              <span>Hey, I&apos;m</span>
              <span className="inline-block w-8 h-[1px] dark:bg-stone-600 bg-stone-400" />
            </motion.p>

            {/* Main Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight dark:text-white text-stone-950 leading-[1.08] mb-4"
            >
              <span className="text-gradient-primary">Hari Prasath</span>
            </motion.h1>

            {/* Typewriter Role Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-6 min-h-[40px] h-auto"
            >
              <span className="dark:text-stone-400 text-stone-700 font-bold">Crafting as a</span>
              <span className="text-gradient-accent text-left">
                {displayText}
                <span className="inline-block w-[3px] h-5 sm:h-8 bg-[#c8cb6d] ml-1 animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* Subtext One-Liner */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-sm sm:text-lg dark:text-stone-300 text-stone-800 max-w-xl mb-8 leading-relaxed px-2 sm:px-0 font-medium"
            >
              Building scalable, buttery-smooth web applications with <span className="dark:text-stone-100 text-stone-950 font-bold">3+ years of experience</span>. Specializing in <span className="dark:text-[#c8cb6d] text-[#3e501d] font-bold">React.js</span>, <span className="dark:text-[#e2e58c] text-[#4d5e24] font-bold">Next.js</span>, and enterprise platforms engineered for global reach.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8 w-full sm:w-auto"
            >
              <MagneticButton strength={25}>
                <a href="#projects" className="w-full sm:w-auto block">
                  <Button
                    variant="gradient"
                    size="lg"
                    icon={<ArrowDown className="w-4 h-4" />}
                    className="w-full sm:w-auto shadow-xl shadow-[#c8cb6d]/20"
                  >
                    View My Work
                  </Button>
                </a>
              </MagneticButton>

              <MagneticButton strength={20}>
                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Hari_Prasath_Resume.pdf"
                  className="w-full sm:w-auto block"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    icon={<Download className="w-4 h-4 dark:text-[#c8cb6d] text-[#4d5e24]" />}
                    className="w-full sm:w-auto shadow-sm"
                  >
                    Download CV
                  </Button>
                </a>
              </MagneticButton>

              <MagneticButton strength={20}>
                <a href="#experience" className="w-full sm:w-auto block">
                  <Button
                    variant="outline"
                    size="lg"
                    icon={<Code className="w-4 h-4 dark:text-[#c8cb6d] text-[#4d5e24]" />}
                    className="w-full sm:w-auto shadow-sm"
                  >
                    Work Experience
                  </Button>
                </a>
              </MagneticButton>
            </motion.div>

            {/* Interactive Tech Stack Nexus Deck */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="w-full mb-8 max-w-[480px] mx-auto lg:mx-0"
            >
              <a
                href="#skills"
                className="group block p-4 rounded-3xl dark:bg-zinc-950/80 bg-white dark:border-white/10 border-stone-200 hover:border-[#c8cb6d]/60 shadow-xl backdrop-blur-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Ambient Corner Glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-[#c8cb6d]/15 blur-2xl group-hover:bg-[#c8cb6d]/30 transition-all pointer-events-none" />

                {/* Top Deck Status Bar */}
                <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b dark:border-white/10 border-stone-100">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
                    </span>
                    <span className="text-[11px] font-mono font-bold dark:text-[#e2e58c] text-[#344415]">
                      CORE TECH ECOSYSTEM
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-mono dark:text-stone-400 text-stone-600 group-hover:text-[#c8cb6d] transition-colors">
                    <span>Explore Galaxy</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                {/* Animated Floating Core Stack Icons Row with Connecting Beams */}
                <div className="flex items-center justify-between gap-1.5 pt-1 pb-1">
                  {[
                    { name: "React", icon: <ReactIcon className="w-5 h-5" />, color: "#61DAFB" },
                    { name: "Next.js", icon: <NextjsIcon className="w-5 h-5" />, color: "#0ea5e9" },
                    { name: "TypeScript", icon: <TypeScriptIcon className="w-5 h-5" />, color: "#3178C6" },
                    { name: "Node.js", icon: <NodejsIcon className="w-5 h-5" />, color: "#339933" },
                    { name: "MongoDB", icon: <MongodbIcon className="w-5 h-5" />, color: "#13AA52" },
                    { name: "Tailwind", icon: <TailwindIcon className="w-5 h-5" />, color: "#06B6D4" },
                  ].map((tech, idx) => (
                    <motion.div
                      key={tech.name}
                      animate={{ y: [-3, 3, -3] }}
                      transition={{
                        duration: 3 + idx * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.2,
                      }}
                      className="flex flex-col items-center group/icon"
                    >
                      <div
                        className="w-10 h-10 rounded-2xl dark:bg-zinc-900 bg-stone-50 border dark:border-white/10 border-stone-200 group-hover/icon:border-[#c8cb6d] group-hover/icon:scale-110 flex items-center justify-center transition-all duration-200 shadow-md relative"
                        style={{
                          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                        }}
                      >
                        {tech.icon}
                        <span
                          className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: tech.color }}
                        />
                      </div>
                      <span className="text-[9px] font-mono font-medium dark:text-stone-400 text-stone-600 mt-1 truncate">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Architecture Highlight Pill */}
                <div className="mt-3 pt-2.5 border-t dark:border-white/5 border-stone-100 flex items-center justify-between text-[10px] font-mono dark:text-stone-400 text-stone-600">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8cb6d]" />
                    Frontend & Full-Stack Engine
                  </span>
                  <span className="dark:text-[#c8cb6d] text-[#4d5e24] font-semibold">
                    15+ Production Modules
                  </span>
                </div>
              </a>
            </motion.div>

            {/* Social Icons Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <span className="text-xs font-mono text-stone-500 mr-1">CONNECT:</span>

              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-stone-400 hover:text-[#c8cb6d] hover:border-[#c8cb6d]/50 hover:bg-[#c8cb6d]/10 hover:shadow-[0_0_20px_rgba(200,203,109,0.35)] transition-all duration-300"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalData.contact.email}`}
                aria-label="Send Email"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-stone-400 hover:text-[#e2e58c] hover:border-[#c8cb6d]/50 hover:bg-[#c8cb6d]/10 hover:shadow-[0_0_20px_rgba(200,203,109,0.35)] transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${personalData.contact.phone}`}
                aria-label="Phone Call"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-stone-400 hover:text-[#e69832] hover:border-[#e69832]/50 hover:bg-[#e69832]/10 hover:shadow-[0_0_20px_rgba(230,152,50,0.35)] transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Profile Showpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative w-full overflow-visible"
          >
            {/* 3D Tilt Container */}
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-[270px] h-[270px] xs:w-[300px] xs:h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] max-w-full"
            >
              {/* Soft Pulsing Glow Blob Behind Avatar */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7e8a42] via-[#9bae4f] to-[#c8cb6d] blur-3xl -z-10 opacity-70"
              />

              {/* Floating Container (Gentle up-down loop) */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full p-2 flex items-center justify-center"
              >
                {/* Rotating Conic Gradient Outer Border (Sage Gold to Olive) */}
                <div className="absolute inset-0 rounded-[38%_62%_63%_37%/41%_44%_56%_59%] p-[3px] overflow-hidden">
                  <div className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2 bg-[conic-gradient(from_0deg,#c8cb6d,#e2e58c,#7e8a42,#e69832,#c8cb6d)] animate-spin-conic opacity-90" />
                </div>

                {/* Inner Profile Image Frame */}
                <div className="relative w-full h-full rounded-[38%_62%_63%_37%/41%_44%_56%_59%] overflow-hidden bg-stone-950 p-1 border-2 border-white/10 shadow-2xl">
                  <Image
                    src="/assets/hari-avatar.jpg"
                    alt={personalData.name}
                    fill
                    sizes="(max-width: 768px) 300px, 420px"
                    priority
                    className="object-cover object-[center_18%] rounded-[38%_62%_63%_37%/41%_44%_56%_59%] contrast-[1.03] brightness-[1.02] hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Superpower Pill 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-1 left-0 sm:bottom-4 sm:-left-6 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl glass-panel border border-white/15 shadow-2xl flex items-center gap-2.5 sm:gap-3 backdrop-blur-xl z-10"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#c8cb6d]/20 text-[#e2e58c] flex items-center justify-center border border-[#c8cb6d]/30 shrink-0">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] sm:text-[10px] uppercase font-mono text-stone-400">Experience</p>
                    <p className="text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">3+ Years Pro</p>
                  </div>
                </motion.div>

                {/* Floating Superpower Pill 2 */}
                {/* <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute top-1 right-0 sm:top-4 sm:-right-6 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl glass-panel border border-white/15 shadow-2xl flex items-center gap-2.5 sm:gap-3 backdrop-blur-xl z-10"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#7e8a42]/25 text-[#c8cb6d] flex items-center justify-center border border-[#7e8a42]/40 shrink-0">
                    <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  {/* <div className="text-left">
                    <p className="text-[9px] sm:text-[10px] uppercase font-mono text-stone-400">Global Client</p>
                    <p className="text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">Dubai Collab</p>
                  </div> 
                </motion.div>*/}
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors">
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-zinc-700 flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
