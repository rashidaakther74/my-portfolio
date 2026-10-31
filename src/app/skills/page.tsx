"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiRedis,
  SiDocker,
  SiGit,
  SiPostman,
  SiVercel,
  SiLinux
} from "react-icons/si";
import {
  HiCommandLine,
  HiSparkles,
  HiOutlineServerStack,
  HiOutlineCircleStack,
  HiOutlineCpuChip,
  HiOutlineWrenchScrewdriver
} from "react-icons/hi2";

interface SkillItem {
  name: string;
  level: "Advanced" | "Proficient" | "Working";
  role: string;
  icon: React.ElementType;
}

interface SkillCategory {
  title: string;
  tag: string;
  icon: React.ElementType;
  description: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    tag: "Client-Side Architecture",
    icon: HiOutlineCpuChip,
    description: "Building accessible, fast, and type-safe user interfaces with server-driven rendering.",
    skills: [
      { name: "Next.js 15", level: "Advanced", role: "App Router, SSR, Server Actions", icon: SiNextdotjs },
      { name: "React 19", level: "Advanced", role: "Hooks, Context, State Flow", icon: SiReact },
      { name: "TypeScript", level: "Proficient", role: "Strict Typing, Generics, Zod", icon: SiTypescript },
      { name: "JavaScript", level: "Advanced", role: "ES6+, Async/Await, DOM", icon: SiJavascript },
      { name: "Tailwind CSS", level: "Advanced", role: "Responsive Design, Glassmorphism", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Systems",
    tag: "Server-Side Logic",
    icon: HiOutlineServerStack,
    description: "Architecting modular REST APIs, authentication security, and scalable server workflows.",
    skills: [
      { name: "Node.js", level: "Proficient", role: "Event Loop, Streams, Core APIs", icon: SiNodedotjs },
      { name: "Express.js", level: "Proficient", role: "MVC, Middlewares, Routing", icon: SiExpress },
      { name: "RESTful APIs", level: "Advanced", role: "Endpoint Design, Error Handling", icon: HiCommandLine },
      { name: "JWT & Security", level: "Proficient", role: "RBAC, Token Refresh, Bcrypt", icon: HiCommandLine },
    ],
  },
  {
    title: "Databases & In-Memory Cache",
    tag: "Data Persistence & Speed",
    icon: HiOutlineCircleStack,
    description: "Designing normalized schemas, relational indexes, and high-speed in-memory layers.",
    skills: [
      { name: "PostgreSQL", level: "Proficient", role: "Relational Queries, Indexing", icon: SiPostgresql },
      { name: "Prisma ORM", level: "Advanced", role: "Schema Modeling, Migrations", icon: SiPrisma },
      { name: "Redis", level: "Working", role: "Key-Value Cache, Rate Limiting", icon: SiRedis },
      { name: "MongoDB", level: "Proficient", role: "Document Modeling, Mongoose", icon: SiMongodb },
    ],
  },
  {
    title: "DevOps & Engineering Toolchain",
    tag: "Workflow & Infrastructure",
    icon: HiOutlineWrenchScrewdriver,
    description: "Ensuring cross-environment consistency, version control, and production deployments.",
    skills: [
      { name: "Docker", level: "Working", role: "Containerization, Multi-service", icon: SiDocker },
      { name: "Git & GitHub", level: "Advanced", role: "Version Control, Branching, PRs", icon: SiGit },
      { name: "Postman", level: "Proficient", role: "API Testing & Automation", icon: SiPostman },
      { name: "Vercel & CI/CD", level: "Proficient", role: "Zero-Downtime Cloud Deploys", icon: SiVercel },
      { name: "Linux CLI", level: "Working", role: "Shell Scripting & Server Config", icon: SiLinux },
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="w-full min-h-screen bg-[#070b14] text-slate-100 pt-24 sm:pt-32 pb-24 overflow-x-hidden selection:bg-teal-500/30 selection:text-teal-300">

      {/* Background Soft Lighting */}
      <div className="fixed top-20 left-1/4 w-[500px] h-[350px] bg-teal-500/5 blur-[170px] pointer-events-none rounded-full" />
      <div className="fixed bottom-20 right-1/4 w-[450px] h-[350px] bg-indigo-500/5 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/40 text-teal-300 text-xs font-mono uppercase tracking-widest mb-3 backdrop-blur-md">
            <HiSparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Technical Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Technical Stack & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-cyan-300">
              Core Competencies
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            A battle-tested full-stack toolchain focused on clean code, database performance, and scalable web architectures.
          </p>
        </div>

        {/* 4-Category Grid: 1 Col on Mobile, 2 Cols on Tablet & Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((cat, idx) => {
            const HeaderIcon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-xl hover:border-teal-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 group-hover:scale-105 transition-all">
                        <HeaderIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                          {cat.title}
                        </h2>
                        <span className="text-[11px] font-mono text-teal-400/90 tracking-wider uppercase">
                          {cat.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-400 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills List in this Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.skills.map((skill, sIdx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={sIdx}
                          className="flex items-center gap-3 p-3 rounded-2xl border border-slate-800 bg-slate-950/60 hover:border-teal-500/30 hover:bg-slate-950 transition-all"
                        >
                          <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 flex-shrink-0">
                            <SkillIcon className="w-4 h-4" />
                          </div>
                          <div className="overflow-hidden">
                            <div className="flex items-center gap-1.5">
                              <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                                {skill.name}
                              </h3>
                            </div>
                            <p className="text-[10px] font-mono text-slate-400 truncate">
                              {skill.role}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Micro Level Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Stack Status</span>
                  <span className="inline-flex items-center gap-1.5 text-teal-300 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                    Production Ready
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 sm:mt-18 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950 p-6 sm:p-10 text-center max-w-4xl mx-auto shadow-2xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 bg-teal-950/50 border border-teal-500/20 px-3 py-1 rounded-full inline-block mb-3">
            Continuous Learning
          </span>
          <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-2">
            Always expanding and refining my engineering toolkit
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            Proficient in writing maintainable code, adhering to SOLID principles, and building full-stack applications with optimal database query execution.
          </p>
        </div>

      </div>
    </main>
  );
}