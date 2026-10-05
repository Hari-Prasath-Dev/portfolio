export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  superpower: string;
  description: string;
  fullOverview: string;
  image: string;
  techStack: string[];
  metrics?: { label: string; value: string }[];
  responsibilities: string[];
  modules?: string[];
  isFeatured?: boolean;
  client?: string;
  duration?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: string;
    iconName?: string;
    highlight?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
  highlights: string[];
}

export const personalData = {
  name: "Hari Prasath",
  title: "Frontend Developer",
  taglines: [
    "Frontend Developer",
    "React.js Specialist",
    "Next.js Architect",
    "UI/UX Engineer",
  ],
  yearsOfExperience: "3+",
  projectsCount: "6+",
  clientHighlight: "1 International Client (Dubai)",
  summary:
    "Frontend Developer with over 3 years of professional experience crafting dynamic, high-performance, and visually captivating web applications. Proficient in React.js, Next.js, TypeScript, and modern component architectures with proven experience delivering enterprise platforms for global clients.",
  aboutBio: [
    "I specialize in bridging the gap between sophisticated design and robust frontend engineering. With 3+ years in the industry, I have engineered scalable design systems, multi-module enterprise suites, and real-time interactive interfaces.",
    "My journey includes building full-scale ERP and SaaS solutions such as Syncraze — collaborating directly with Dubai-based stakeholders to ship 9+ mission-critical modules including HR, Fleet, HSE, and Analytics.",
    "Driven by performance optimization, clean component architecture, and fluid micro-interactions, I deliver digital experiences that not only look award-worthy but run at silky-smooth 60fps.",
  ],
  contact: {
    email: "hariprasath26.dev@gmail.com",
    phone: "+91 8825418298",
    displayPhone: "8825418298",
    location: "Chennai, Tamil Nadu, India",
    linkedin: "https://linkedin.com/in/v-hariprasath",
    linkedinDisplay: "linkedin.com/in/v-hariprasath",
    github: "https://github.com",
  },
  resumeUrl: "/assets/Hari_Prasath_Resume.pdf",
  stats: [
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Delivered Projects", value: 6, suffix: "+" },
    { label: "Global Clients", value: 1, suffix: " (Dubai)" },
    { label: "Performance Score", value: 99, suffix: "%" },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend & Frameworks",
    icon: "Layout",
    description: "Core technologies for constructing fast, responsive, and reactive interfaces",
    skills: [
      { name: "React.js", level: "Expert", highlight: true },
      { name: "Next.js (App Router)", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Advanced", highlight: true },
      { name: "JavaScript (ES6+)", level: "Expert", highlight: true },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "Material UI (MUI)", level: "Advanced" },
      { name: "Bootstrap", level: "Advanced" },
    ],
  },
  {
    title: "State Management & Data",
    icon: "Cpu",
    description: "Architectures for predictable state flow and efficient data caching",
    skills: [
      { name: "Redux & Redux Toolkit", level: "Advanced", highlight: true },
      { name: "React Query (TanStack)", level: "Advanced", highlight: true },
      { name: "React Hooks & Context", level: "Expert", highlight: true },
    ],
  },
  {
    title: "Data Visualization & Charts",
    icon: "BarChart3",
    description: "Interactive real-time analytics and dynamic visual data representations",
    skills: [
      { name: "ApexCharts", level: "Advanced", highlight: true },
      { name: "Dynamic KPI Dashboards", level: "Advanced" },
      { name: "Interactive Data Tables", level: "Advanced" },
    ],
  },
  {
    title: "Backend & Database",
    icon: "Database",
    description: "Foundational backend knowledge for seamless full-stack data integration",
    skills: [
      { name: "Node.js", level: "Advanced", highlight: true },
      { name: "Express.js", level: "Intermediate", highlight: true },
      { name: "MongoDB", level: "Intermediate", highlight: true },
      { name: "MySQL", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
      { name: "Laravel (Basic)", level: "Intermediate" },
      { name: "CodeIgniter (Basic)", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Development Practices",
    icon: "Wrench",
    description: "Modern workflows, version control, and performance optimization techniques",
    skills: [
      { name: "Git / GitHub", level: "Advanced", highlight: true },
      { name: "VS Code & DevTools", level: "Expert" },
      { name: "WordPress", level: "Intermediate" },
      { name: "Code-Splitting & Lazy Loading", level: "Advanced", highlight: true },
      { name: "Cross-Browser Compatibility", level: "Expert" },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Oceansoftwares Private Limited",
    role: "Frontend Developer",
    period: "Nov 2025 – Present",
    location: "Chennai, India",
    type: "Full-Time",
    description:
      "Leading modern frontend initiatives, architecting modular React/Next.js systems, and collaborating on high-impact client deliverables.",
    achievements: [
      "Engineered reusable component libraries and robust design systems reducing feature delivery times.",
      "Spearheaded client-facing module enhancements with seamless REST API integrations and state caching.",
      "Optimized bundle size and render performance through intelligent code-splitting and memoization.",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "React Query", "Git"],
  },
  {
    id: "exp-2",
    company: "Redblox Technologies Pvt Ltd",
    role: "Frontend Developer",
    period: "Dec 2022 – Jan 2025",
    location: "Chennai, India",
    type: "Full-Time",
    description:
      "Engineered mission-critical web applications, enterprise dashboards, and custom client platforms spanning multi-industry domains.",
    achievements: [
      "Built and delivered 5+ comprehensive web applications with pixel-perfect responsive layouts.",
      "Collaborated directly with international stakeholders (Dubai-based enterprise client) for requirement gathering and deployment.",
      "Implemented complex business logic, Excel bulk data imports, and dynamic ApexCharts visualizations.",
      "Integrated secure authentication, role-based license management, and asynchronous data streams.",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "MUI", "Redux", "ApexCharts", "PHP", "MySQL"],
  },
];

export const projectsData: Project[] = [
  {
    id: "syncraze",
    title: "Syncraze",
    subtitle: "Enterprise Business & Operations Management Platform",
    category: "Enterprise SaaS / ERP",
    superpower: "Enterprise Scale",
    isFeatured: true,
    client: "Dubai Enterprise Client",
    duration: "Flagship Production Deployment",
    image: "/assets/syncraze.jpg",
    liveDemoUrl: "https://syncraze.com/",
    description:
      "Flagship 9+ module enterprise operations platform with real-time KPI analytics, Excel bulk processing, and comprehensive workforce & fleet management.",
    fullOverview:
      "Syncraze is an enterprise-grade web application tailored for high-demand business operations. Engineered using React.js, Next.js, and TypeScript, it empowers executive teams with unified dashboards, automated reporting, and granular license management.",
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Material UI (MUI)",
      "Redux",
      "React Query",
      "ApexCharts",
    ],
    metrics: [
      { label: "Modules Delivered", value: "9+" },
      { label: "International Client", value: "Dubai" },
      { label: "Data Throughput", value: "Bulk Excel IO" },
      { label: "Chart Render Speed", value: "<15ms" },
    ],
    modules: [
      "Executive Dashboard",
      "User Security & Auth",
      "License Management",
      "Site Settings",
      "Inventory Control",
      "Procurement System",
      "Fleet Asset Tracking",
      "HR & Workforce Management",
      "HSE Compliance & Safety",
    ],
    responsibilities: [
      "Engineered responsive and accessible UI pages across 9 distinct modules using React.js, Next.js, TypeScript, and Material UI.",
      "Developed common component architectures and atomic design layouts for consistent experience across the entire suite.",
      "Implemented robust state management using Redux and React Query for automated API caching, background refetching, and error handling.",
      "Integrated dynamic data visualizations and interactive charts using ApexCharts to present real-time business telemetry.",
      "Architected Excel bulk upload functionality facilitating rapid multi-record data insertion and validation.",
      "Worked directly with the Dubai-based client team in agile sprints to translate intricate business workflows into frictionless UI.",
    ],
  },
  {
    id: "melloplex",
    title: "Mellowplex Web Platform",
    subtitle: "High-Performance Media & Streaming Web Solution",
    category: "Web Platform / Media",
    superpower: "Performance Optimization",
    image: "/assets/melloplex.jpg",
    liveDemoUrl: "https://www.linkedin.com/posts/mellowplex-movielovers-funandgames-share-7190955508520931328-Sxp3/",
    description:
      "Engineered with Next.js and React Query caching, achieving sub-second page transitions, lazy-loaded components, and pixel-perfect design.",
    fullOverview:
      "Mellowplex is a high-traffic web platform focusing on media delivery and interactive user engagement. The frontend was engineered from the ground up for maximum speed, minimal latency, and resilient offline-first API state handling.",
    techStack: [
      "React.js",
      "Next.js",
      "React Query",
      "TypeScript",
      "Tailwind CSS",
      "Code-Splitting",
    ],
    metrics: [
      { label: "Cache Hit Efficiency", value: "88%" },
      { label: "Network Overhead", value: "-45%" },
      { label: "Lighthouse Score", value: "98/100" },
    ],
    responsibilities: [
      "Architected scalable and maintainable UI components using React.js and Next.js App Router.",
      "Implemented React Query for real-time API integrations with smart caching, eliminating redundant network payloads.",
      "Delivered a mobile-first, cross-browser experience responsive across all screen dimensions.",
      "Applied advanced Next.js optimization techniques including dynamic imports, lazy loading, and asset preloading.",
      "Collaborated closely with UI/UX teams to translate Figma wireframes into high-fidelity components.",
    ],
  },
  {
    id: "gaston",
    title: "Gaston Web Application",
    subtitle: "Real-Time Telemetry & Data Stream Dashboard",
    category: "Real-time Web App",
    superpower: "Real-time Data",
    image: "/assets/gaston.jpg",
    description:
      "Modular real-time web application engineered with custom React Hooks, low-latency API handling, and optimized re-render prevention.",
    fullOverview:
      "Gaston is an interactive operations portal designed for real-time monitoring. The application handles high-frequency data streams smoothly through fine-tuned state dispatching, custom memoized hooks, and isolated component rendering.",
    techStack: [
      "React.js",
      "React Hooks",
      "JavaScript (ES6+)",
      "CSS3 / Flexbox / Grid",
    ],
    metrics: [
      { label: "Re-render Reduction", value: "60%" },
      { label: "API Sync Latency", value: "<50ms" },
    ],
    responsibilities: [
      "Built responsive, user-friendly UI components using React.js with strict focus on zero-jank scrolling.",
      "Designed custom React Hooks for encapsulated state management, ensuring clean separation of concerns.",
      "Integrated real-time REST endpoints to seamlessly stream telemetry and dynamic notifications.",
      "Optimized performance by memoizing costly computational logic and implementing component-level lazy loading.",
      "Worked with backend engineers to debug edge-case API responses and error recovery mechanisms.",
    ],
  },
  {
    id: "cni",
    title: "CNI Business Forum",
    subtitle: "Business Networking & Modular Enterprise Portal",
    category: "Enterprise Web App",
    superpower: "Reusable Architecture",
    image: "/assets/cni.jpg",
    liveDemoUrl: "https://cnibusinessforum.in/",
    description:
      "Component-driven React application featuring dynamic form engines, complex validations, and modular design patterns.",
    fullOverview:
      "CNI Business Forum is a foundational business application built around high-reusability component patterns, structured form validation pipelines, and dynamic table rendering.",
    techStack: ["React.js", "JavaScript (ES6+)", "CSS3", "State Management"],
    metrics: [
      { label: "Component Reusability", value: "85%" },
      { label: "Form Validation Coverage", value: "100%" },
    ],
    responsibilities: [
      "Developed and maintained atomic UI components for seamless cross-module reuse.",
      "Integrated REST APIs to dynamically render complex datasets with client-side filtering and sorting.",
      "Engineered comprehensive form validation and dynamic input handling.",
      "Collaborated on code reviews, bug remediation, and continuous UI enhancements.",
    ],
  },
  {
    id: "chitapp",
    title: "Chit Fund Management Platform",
    subtitle: "Financial Group & Ledger Tracking System",
    category: "Fintech / Management",
    superpower: "Financial Ledger & Flow",
    image: "/assets/chitapp.jpg",
    description:
      "Secure chit fund management web application with member ledger tracking, auction records, and payment status workflows.",
    fullOverview:
      "Chit Fund Platform provides financial administrators and members with full visibility into active chit groups, installment collections, dividend distribution, and monthly auction tracking.",
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    metrics: [
      { label: "Ledger Accuracy", value: "100%" },
      { label: "Cross-Device Support", value: "All Browsers" },
    ],
    responsibilities: [
      "Developed responsive frontend for chit fund management platform using semantic HTML5, CSS3, and JavaScript.",
      "Constructed intuitive UI flows for group creation, member onboarding, and payment subscription status tracking.",
      "Connected REST APIs to deliver instant scheme details, transaction logs, and dividend schedules.",
      "Ensured cross-browser compatibility and verified mobile responsiveness across iOS and Android browsers.",
    ],
  },
  {
    id: "star",
    title: "The Star Business",
    subtitle: "Enterprise Business Portal & Multi-Module Web System",
    category: "Web Application",
    superpower: "Responsive Engineering",
    image: "/assets/star.jpg",
    liveDemoUrl: "https://thestarbusiness.com/",
    description:
      "Responsive frontend modules built with React.js, featuring reusable components, API data connectors, and cross-browser resilience.",
    fullOverview:
      "The Star Business delivers structured business modules with intuitive navigation, fluid animations, and robust error recovery across diverse desktop and mobile devices.",
    techStack: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
    metrics: [
      { label: "Cross-Browser Score", value: "100%" },
      { label: "UI Polish", value: "Pixel-Perfect" },
    ],
    responsibilities: [
      "Constructed responsive frontend modules for the STAR application using React.js and modern JavaScript.",
      "Developed reusable UI components and integrated REST APIs for asynchronous data handling.",
      "Identified and resolved UX friction points and cross-browser layout inconsistencies.",
      "Participated actively in testing, debugging, and iterative feature rollouts.",
    ],
  },
];

export const educationData: EducationItem = {
  degree: "B.Tech in Mechanical Engineering",
  institution: "Alpha College of Engineering and Technology",
  location: "Pondicherry, India",
  period: "2017 – 2021",
  details:
    "Graduated with a strong foundation in analytical problem-solving, structural systems, and computational logic before pivoting full passion to modern Frontend & Software Engineering.",
  highlights: [
    "First Class Degree with honors in Engineering Mathematics & Design Thinking",
    "Transitioned engineering analytical discipline into scalable Frontend Architecture",
    "Active participant in technical symposiums and digital innovation workshops",
  ],
};
