"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  getTechIcon,
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
  ApexChartsIcon
} from "./ui/TechIcons";
import { Badge } from "./ui/Badge";
import { 
  X, 
  Code2, 
  Layers, 
  Zap, 
  ExternalLink, 
  CheckCircle2, 
  FolderOpen,
  Cpu,
  Database,
  Info,
  Radio,
  Sparkles,
  Workflow,
  Compass,
  Activity
} from "lucide-react";

export interface TechDetail {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "State & Tools";
  level: "Expert" | "Advanced" | "Intermediate";
  experience: string;
  summary: string;
  features: string[];
  usedInProjects: string[];
  color: string;
  accent: string;
  tier: "inner" | "mid" | "outer";
}

export const techDetailsData: Record<string, TechDetail> = {
  react: {
    id: "react",
    name: "React.js",
    category: "Frontend",
    level: "Expert",
    experience: "3+ Years Professional",
    summary: "Primary core framework for engineering reactive, accessible, and high-performance component architectures across complex enterprise web apps.",
    features: [
      "Custom React Hooks & Context APIs",
      "Memoization & Re-render optimization",
      "Dynamic Routing & Suspense",
      "Enterprise design systems"
    ],
    usedInProjects: ["Syncraze ERP", "Mellowplex", "Gaston", "CNI Business", "The Star Business"],
    color: "#61DAFB",
    accent: "rgba(97, 218, 251, 0.25)",
    tier: "inner"
  },
  nextjs: {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    level: "Advanced",
    experience: "2+ Years Production",
    summary: "Modern App Router architecture, Server & Client components, server-side caching, and production bundle optimization.",
    features: [
      "App Router & Server Components",
      "Code-Splitting & Dynamic Imports",
      "SEO Metadata & Structured JSON-LD",
      "Route Handlers & Edge Rendering"
    ],
    usedInProjects: ["Syncraze Enterprise", "Mellowplex Web Platform"],
    color: "#0ea5e9",
    accent: "rgba(14, 165, 233, 0.25)",
    tier: "inner"
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    level: "Advanced",
    experience: "3+ Years Strict Mode",
    summary: "Strongly-typed contracts, modular interface modeling, generic UI utilities, and zero runtime type error guarantees.",
    features: [
      "Strict type checking & generics",
      "Interface contract definitions",
      "Reusable component prop types",
      "Refactoring reliability & speed"
    ],
    usedInProjects: ["Syncraze ERP", "Mellowplex", "Modern Portfolios"],
    color: "#3178C6",
    accent: "rgba(49, 120, 198, 0.25)",
    tier: "inner"
  },
  javascript: {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: "Expert",
    experience: "3+ Years",
    summary: "Deep knowledge of async event loops, DOM manipulation, functional paradigms, closures, and browser APIs.",
    features: [
      "Async/Await & Promises",
      "ESNext modules & destructuring",
      "Event bubbling & custom listeners",
      "Zero-latency calculations"
    ],
    usedInProjects: ["All Client & Enterprise Projects"],
    color: "#F7DF1E",
    accent: "rgba(247, 223, 30, 0.25)",
    tier: "mid"
  },
  tailwind: {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Advanced",
    experience: "2.5+ Years",
    summary: "Utility-first design systems, responsive mobile-first layouts, custom theme configurations, and dark/light modes.",
    features: [
      "Responsive design breakpoints",
      "Dark / Light theme color tokens",
      "Micro-animations & transitions",
      "Minimal CSS bundle footprints"
    ],
    usedInProjects: ["Mellowplex", "Developer Portfolios"],
    color: "#06B6D4",
    accent: "rgba(6, 182, 212, 0.25)",
    tier: "outer"
  },
  mui: {
    id: "mui",
    name: "Material UI (MUI)",
    category: "Frontend",
    level: "Advanced",
    experience: "2+ Years",
    summary: "Custom theme providers, dense data grids, accessible modal workflows, and enterprise design token adaptation.",
    features: [
      "Custom palette & typography overrides",
      "Complex DataGrid filtering & sorting",
      "Nested navigation drawers & modals",
      "Responsive container systems"
    ],
    usedInProjects: ["Syncraze ERP (9+ Modules)"],
    color: "#007FFF",
    accent: "rgba(0, 127, 255, 0.25)",
    tier: "outer"
  },
  redux: {
    id: "redux",
    name: "Redux & RTK",
    category: "State & Tools",
    level: "Advanced",
    experience: "2.5+ Years",
    summary: "Predictable centralized state architecture, slice reducers, middleware dispatchers, and state normalization.",
    features: [
      "RTK slices & createAsyncThunk",
      "Normalized entity adapters",
      "Persistent state hydrations",
      "DevTools time-travel debugging"
    ],
    usedInProjects: ["Syncraze Enterprise Platform"],
    color: "#764ABC",
    accent: "rgba(118, 74, 188, 0.25)",
    tier: "mid"
  },
  reactquery: {
    id: "reactquery",
    name: "React Query",
    category: "State & Tools",
    level: "Advanced",
    experience: "2+ Years",
    summary: "Automated asynchronous server-state synchronization, query key invalidation, background polling, and optimistic updates.",
    features: [
      "Background cache revalidation",
      "Infinite scroll pagination queries",
      "Optimistic UI updates",
      "Garbage collection & retry policies"
    ],
    usedInProjects: ["Syncraze ERP", "Mellowplex Media"],
    color: "#FF4154",
    accent: "rgba(255, 65, 84, 0.25)",
    tier: "outer"
  },
  nodejs: {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    level: "Advanced",
    experience: "2+ Years",
    summary: "Building lightweight REST services, asynchronous I/O handlers, backend route integration, and server-side utilities.",
    features: [
      "Event-driven architecture",
      "JSON payload streaming & handling",
      "File I/O & Excel bulk data parsing",
      "Environment config & security"
    ],
    usedInProjects: ["Enterprise Services & Tools"],
    color: "#339933",
    accent: "rgba(51, 153, 51, 0.25)",
    tier: "inner"
  },
  express: {
    id: "express",
    name: "Express.js",
    category: "Backend",
    level: "Intermediate",
    experience: "2 Years",
    summary: "REST API route modularization, authentication middleware, error handling pipelines, and database controller binding.",
    features: [
      "Route controller patterns",
      "CORS & Auth middlewares",
      "Structured error response handlers",
      "Database schema connectors"
    ],
    usedInProjects: ["Full-Stack Dashboards & APIs"],
    color: "#64748b",
    accent: "rgba(100, 116, 139, 0.25)",
    tier: "mid"
  },
  mongodb: {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    level: "Intermediate",
    experience: "1.5+ Years",
    summary: "NoSQL document modeling, indexing, aggregation pipelines, and Mongoose schema definitions.",
    features: [
      "Document schema design",
      "CRUD operations & Aggregations",
      "Flexible data models",
      "Atlas cloud cluster connectivity"
    ],
    usedInProjects: ["Full-Stack Web Applications"],
    color: "#13AA52",
    accent: "rgba(19, 170, 82, 0.25)",
    tier: "inner"
  },
  mysql: {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    level: "Intermediate",
    experience: "2+ Years",
    summary: "Relational database schema modeling, primary/foreign key relationships, indexing, and transactional queries.",
    features: [
      "Relational schema structures",
      "Complex JOIN queries & filters",
      "Chit fund ledger transaction tables",
      "Data consistency & normalization"
    ],
    usedInProjects: ["Chit Fund Platform", "Redblox Client Apps"],
    color: "#00758F",
    accent: "rgba(0, 117, 143, 0.25)",
    tier: "mid"
  },
  php: {
    id: "php",
    name: "PHP",
    category: "Backend",
    level: "Intermediate",
    experience: "2 Years",
    summary: "Backend server scripting, database connectors, session management, and server-rendered view pipelines.",
    features: [
      "Backend business logic handlers",
      "MySQL PDO & mysqli connectors",
      "Form sanitization & processing",
      "MVC architecture patterns"
    ],
    usedInProjects: ["Chit Fund Platform", "Client Portals"],
    color: "#777BB4",
    accent: "rgba(119, 123, 180, 0.25)",
    tier: "outer"
  },
  git: {
    id: "git",
    name: "Git & GitHub",
    category: "State & Tools",
    level: "Advanced",
    experience: "3+ Years Daily Use",
    summary: "Version control branching workflows, feature branching, pull request reviews, and continuous team collaboration.",
    features: [
      "Feature branching & rebasing",
      "Merge conflict resolution",
      "GitHub pull requests & code review",
      "Release tag management"
    ],
    usedInProjects: ["All Client & Enterprise Projects"],
    color: "#F05032",
    accent: "rgba(240, 80, 50, 0.25)",
    tier: "mid"
  },
  apexcharts: {
    id: "apexcharts",
    name: "ApexCharts",
    category: "Frontend",
    level: "Advanced",
    experience: "2+ Years",
    summary: "Real-time telemetry dashboards, interactive multi-axis area/bar charts, KPI widgets, and dynamic responsive charts.",
    features: [
      "Live updating streaming charts",
      "Multi-series bar & area analytics",
      "Custom tooltip & legend formatting",
      "Theme synchronization & smooth animations"
    ],
    usedInProjects: ["Syncraze ERP", "Gaston Monitoring"],
    color: "#00E396",
    accent: "rgba(0, 227, 150, 0.25)",
    tier: "outer"
  },
};

// Layout coordinates across a dynamic arched solar constellation
const constellationNodes = [
  // Top Outer Arc
  { id: "react", x: 120, y: 110, floatDuration: 4.2, delay: 0, label: "React.js" },
  { id: "nextjs", x: 230, y: 70, floatDuration: 4.8, delay: 0.5, label: "Next.js" },
  { id: "typescript", x: 350, y: 50, floatDuration: 3.9, delay: 1.0, label: "TypeScript" },
  { id: "nodejs", x: 470, y: 50, floatDuration: 4.5, delay: 1.5, label: "Node.js" },
  { id: "mongodb", x: 590, y: 70, floatDuration: 4.1, delay: 2.0, label: "MongoDB" },
  { id: "redux", x: 700, y: 110, floatDuration: 4.6, delay: 2.5, label: "Redux RTK" },
  
  // Mid Orbit Tier
  { id: "tailwind", x: 160, y: 220, floatDuration: 3.8, delay: 0.8, label: "Tailwind CSS" },
  { id: "javascript", x: 270, y: 170, floatDuration: 4.3, delay: 1.3, label: "JS (ES6+)" },
  { id: "express", x: 410, y: 155, floatDuration: 4.0, delay: 1.8, label: "Express.js" },
  { id: "mysql", x: 550, y: 170, floatDuration: 4.4, delay: 2.3, label: "MySQL" },
  { id: "git", x: 660, y: 220, floatDuration: 3.7, delay: 2.8, label: "Git / GitHub" },

  // Lower Flank Tier
  { id: "mui", x: 80, y: 310, floatDuration: 4.7, delay: 0.3, label: "MUI Design" },
  { id: "reactquery", x: 230, y: 280, floatDuration: 4.2, delay: 1.1, label: "React Query" },
  { id: "php", x: 590, y: 280, floatDuration: 4.5, delay: 1.9, label: "PHP Server" },
  { id: "apexcharts", x: 740, y: 310, floatDuration: 4.0, delay: 2.6, label: "ApexCharts" },
];

export function TechOrbShowcase() {
  const [selectedTech, setSelectedTech] = useState<TechDetail | null>(null);
  const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const coreX = 410;
  const coreY = 380;

  const categories = [
    { key: "All", label: "All Stack (15)" },
    { key: "Frontend", label: "Frontend (7)" },
    { key: "Backend", label: "Backend & DB (5)" },
    { key: "State & Tools", label: "State & DevOps (3)" },
  ];

  const handleOpenTech = (id: string) => {
    if (techDetailsData[id]) {
      setSelectedTech(techDetailsData[id]);
    }
  };

  const isNodeActive = (nodeId: string) => {
    if (activeCategory === "All") return true;
    const tech = techDetailsData[nodeId];
    if (!tech) return false;
    if (activeCategory === "Backend") {
      return tech.category === "Backend" || tech.category === "Database";
    }
    return tech.category === activeCategory;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 pt-4 pb-16 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Category Filter Deck */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6 z-20">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer flex items-center gap-1.5 shadow-sm ${
                isActive
                  ? "dark:bg-[#c8cb6d] bg-[#5c6b2f] text-stone-950 font-black shadow-[0_0_20px_rgba(200,203,109,0.4)] scale-105"
                  : "dark:bg-white/[0.04] bg-stone-100 dark:text-stone-400 text-stone-700 dark:border-white/10 border-stone-200 hover:dark:text-white hover:text-stone-950 hover:dark:bg-white/[0.08] hover:bg-stone-200"
              }`}
            >
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-stone-950 animate-ping" />}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Helper Banner */}
      <div className="flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full dark:bg-white/[0.04] bg-stone-100 dark:border-white/10 border-stone-200 text-xs font-mono dark:text-stone-300 text-stone-700 shadow-sm z-20">
        <Activity className="w-3.5 h-3.5 text-[#10b981] animate-pulse" />
        <span>Live Constellation • Click any moving planet node to inspect engineering specs</span>
      </div>

      {/* Main Galaxy Constellation SVG & Node Canvas */}
      <div className="relative w-full max-w-5xl h-[480px] sm:h-[520px] md:h-[560px] flex items-center justify-center">
        
        {/* Ambient Core Radial Glows */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[550px] h-[340px] rounded-full bg-gradient-to-t from-[#7e8a42]/25 via-[#c8cb6d]/15 to-transparent blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[260px] h-[260px] rounded-full bg-[#10b981]/20 blur-2xl -z-10 pointer-events-none" />

        {/* ========================================================================= */}
        {/* SVG LASER ENERGY BEAMS WITH ANIMATED FLOWING CURRENT                       */}
        {/* ========================================================================= */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
          viewBox="0 0 820 540"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Standard Beaming Fiber Gradient */}
            <linearGradient id="laserBeamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#c8cb6d" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#10b981" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#c8cb6d" stopOpacity="0.15" />
            </linearGradient>

            {/* High-Energy Active Laser Gradient */}
            <linearGradient id="laserActiveBeamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="40%" stopColor="#e2e58c" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#c8cb6d" stopOpacity="0.8" />
            </linearGradient>

            {/* Glowing Laser Filter */}
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Draw connecting curved energy threads to each node */}
          {constellationNodes.map((node) => {
            const isHovered = hoveredTechId === node.id;
            const isMatch = isNodeActive(node.id);
            const midControlX = (coreX + node.x) / 2 + (node.x > coreX ? -20 : 20);
            const midControlY = (coreY + node.y) / 2 + 30;

            const pathData = `M ${coreX} ${coreY} Q ${midControlX} ${midControlY}, ${node.x} ${node.y}`;

            return (
              <g key={`laser-${node.id}`}>
                {/* Background base path */}
                <path
                  d={pathData}
                  fill="none"
                  stroke={isHovered ? "url(#laserActiveBeamGrad)" : "url(#laserBeamGrad)"}
                  strokeWidth={isHovered ? 2.5 : isMatch ? 1.2 : 0.4}
                  strokeDasharray={isHovered ? "none" : isMatch ? "4 4" : "2 6"}
                  opacity={isHovered ? 1 : isMatch ? 0.6 : 0.15}
                  filter={isHovered ? "url(#glowFilter)" : undefined}
                  className="transition-all duration-300"
                />

                {/* Animated Glowing Laser Pulse dot traveling along path */}
                {isMatch && (
                  <circle r={isHovered ? 3.5 : 2} fill={isHovered ? "#ffffff" : "#c8cb6d"}>
                    <animateMotion
                      path={pathData}
                      dur={`${3 + (node.delay % 2)}s`}
                      repeatCount="indefinite"
                      rotate="auto"
                      keyPoints="0;1"
                      keyTimes="0;1"
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* ========================================================================= */}
        {/* 3D ROTATING ORBITAL RINGS (Tilted Perspective)                             */}
        {/* ========================================================================= */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] md:w-[680px] h-[140px] sm:h-[180px] md:h-[220px] pointer-events-none -z-0">
          {/* Outer Ring with Travelling Satellite */}
          <div className="absolute inset-0 rounded-[50%] border border-[#c8cb6d]/25 shadow-[0_0_20px_rgba(200,203,109,0.15)] animate-[spin_36s_linear_infinite]" />
          
          {/* Middle Ring */}
          <div className="absolute inset-[20px] sm:inset-[35px] rounded-[50%] border border-[#10b981]/25 shadow-[0_0_15px_rgba(16,185,129,0.15)] animate-[spin_26s_linear_infinite_reverse]" />
          
          {/* Inner Ring */}
          <div className="absolute inset-[45px] sm:inset-[70px] rounded-[50%] border border-[#e2e58c]/35 shadow-[0_0_25px_rgba(226,229,140,0.2)] animate-[spin_18s_linear_infinite]" />
        </div>

        {/* ========================================================================= */}
        {/* CENTRAL GLOWING LOGO ORB (HP CORE)                                        */}
        {/* ========================================================================= */}
        <div className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 z-10">
          {/* Concentric Pulse Waves */}
          <div className="absolute inset-0 rounded-full bg-[#10b981]/20 animate-ping pointer-events-none" />
          <div className="absolute -inset-4 rounded-full bg-[#c8cb6d]/10 animate-pulse pointer-events-none" />

          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              boxShadow: [
                "0 0 35px rgba(200,203,109,0.45), 0 0 70px rgba(16,185,129,0.3)",
                "0 0 60px rgba(200,203,109,0.7), 0 0 100px rgba(16,185,129,0.5)",
                "0 0 35px rgba(200,203,109,0.45), 0 0 70px rgba(16,185,129,0.3)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-22 h-22 sm:w-26 sm:h-26 md:w-30 md:h-30 rounded-full bg-gradient-to-tr from-[#0d160f] via-[#1a281c] to-[#0a110b] border-2 border-[#c8cb6d] flex items-center justify-center shadow-2xl group cursor-pointer relative"
          >
            {/* Inner Rotating Aura Ring */}
            <div className="absolute inset-1.5 rounded-full border border-dashed border-[#e2e58c]/50 animate-spin-conic pointer-events-none" />
            
            {/* Stylized Monogram Logo */}
            <div className="flex flex-col items-center justify-center text-center select-none">
              <span className="text-2xl sm:text-3xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e2e58c] to-[#c8cb6d] drop-shadow-[0_0_15px_#c8cb6d]">
                HP
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] font-mono text-[#10b981] font-bold tracking-widest uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                CORE
              </span>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* FLOATING SATELLITE TECH NODES (Planetary Constellation Grid)               */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 pointer-events-auto">
          {constellationNodes.map((node) => {
            const tech = techDetailsData[node.id];
            if (!tech) return null;
            const techIcon = getTechIcon(tech.name, { className: "w-5 h-5 sm:w-6 sm:h-6" });
            const isHovered = hoveredTechId === node.id;
            const isMatch = isNodeActive(node.id);

            // Calculate percentage position
            const leftPercent = (node.x / 820) * 100;
            const topPercent = (node.y / 540) * 100;

            return (
              <motion.div
                key={node.id}
                style={{
                  position: "absolute",
                  left: `${leftPercent}%`,
                  top: `${topPercent}%`,
                }}
                animate={{
                  y: [-8, 8, -8],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: node.floatDuration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: node.delay,
                }}
                whileHover={{ scale: 1.3, zIndex: 40 }}
                onMouseEnter={() => setHoveredTechId(node.id)}
                onMouseLeave={() => setHoveredTechId(null)}
                onClick={() => handleOpenTech(node.id)}
                className={`group cursor-pointer -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                  isMatch ? "opacity-100" : "opacity-30 hover:opacity-100"
                }`}
              >
                {/* Glowing Aura Ring & Planet Card */}
                <div
                  className={`relative p-2.5 sm:p-3 rounded-2xl backdrop-blur-xl transition-all duration-300 flex items-center justify-center shadow-lg ${
                    isHovered
                      ? "dark:bg-zinc-900 bg-white border-2 border-[#c8cb6d] shadow-[0_0_30px_rgba(200,203,109,0.7)]"
                      : isMatch
                      ? "dark:bg-zinc-950/90 bg-white/95 border dark:border-white/15 border-stone-200 hover:border-[#c8cb6d] shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                      : "dark:bg-zinc-950/60 bg-stone-100/70 border dark:border-white/5 border-stone-200"
                  }`}
                  style={{
                    boxShadow: isHovered
                      ? `0 0 35px ${tech.color}80, 0 0 15px rgba(200,203,109,0.5)`
                      : undefined,
                  }}
                >
                  {techIcon}
                  
                  {/* Pulsing indicator dot */}
                  <span
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 dark:border-zinc-950 border-white shadow-sm"
                    style={{ backgroundColor: tech.color || "#10b981" }}
                  />
                </div>

                {/* Floating Micro Label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-85 group-hover:opacity-100 transition-opacity">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[9.5px] sm:text-[10px] font-mono shadow-md transition-colors ${
                      isHovered
                        ? "dark:bg-black bg-stone-900 text-[#e2e58c] font-bold border border-[#c8cb6d]/50"
                        : "dark:bg-black/85 bg-white/95 dark:text-stone-300 text-stone-800 dark:border-white/10 border-stone-300 font-semibold"
                    }`}
                  >
                    {node.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* POPUP TECH SPEC MODAL                                                     */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedTech && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTech(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 25 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              className="relative w-full max-w-lg rounded-3xl dark:bg-zinc-950 bg-white dark:border-white/15 border-stone-200 p-6 sm:p-8 shadow-2xl text-left my-auto overflow-hidden transition-colors"
            >
              {/* Background Accent Glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none -z-10 opacity-30"
                style={{ backgroundColor: selectedTech.color }}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedTech(null)}
                className="absolute top-5 right-5 p-2 rounded-full dark:bg-zinc-900/90 bg-stone-100 hover:dark:bg-zinc-800 hover:bg-stone-200 dark:border-white/15 border-stone-200 dark:text-stone-400 text-stone-600 hover:dark:text-white hover:text-stone-900 transition-colors cursor-pointer"
                aria-label="Close Tech Spec"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header: Icon + Name + Category */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl dark:bg-white/[0.06] bg-stone-100 dark:border-white/15 border-stone-200 flex items-center justify-center shadow-lg shrink-0">
                  {getTechIcon(selectedTech.name, { className: "w-8 h-8" })}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-black dark:text-white text-stone-900">
                      {selectedTech.name}
                    </h3>
                    <Badge variant="accent" size="sm">
                      {selectedTech.level}
                    </Badge>
                  </div>
                  <p className="text-xs font-mono dark:text-[#c8cb6d] text-[#4d5e24] font-semibold">
                    {selectedTech.category} • {selectedTech.experience}
                  </p>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm dark:text-stone-300 text-stone-700 leading-relaxed mb-6 font-normal">
                {selectedTech.summary}
              </p>

              {/* Key Technical Capabilities */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold dark:text-stone-400 text-stone-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 dark:text-[#c8cb6d] text-[#5c6b2f]" />
                  <span>Key Architecture & Capabilities</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedTech.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2 p-2 rounded-xl dark:bg-white/[0.03] bg-stone-50 dark:border-white/10 border-stone-200 text-xs dark:text-stone-300 text-stone-700 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Production Projects Utilizing This Tech */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold dark:text-stone-400 text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 dark:text-[#e2e58c] text-[#4d5e24]" />
                  <span>Shipped In Production Projects</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTech.usedInProjects.map((proj) => (
                    <span
                      key={proj}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold dark:bg-[#c8cb6d]/10 bg-[#5c6b2f]/10 dark:text-[#e2e58c] text-[#344415] border dark:border-[#c8cb6d]/25 border-[#5c6b2f]/30"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close CTA */}
              <div className="pt-4 border-t dark:border-white/10 border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedTech(null)}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#7e8a42] to-[#c8cb6d] text-stone-950 font-bold text-xs shadow-lg hover:brightness-110 transition-all cursor-pointer"
                >
                  Close Spec
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
