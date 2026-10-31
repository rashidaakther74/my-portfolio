"use client";

import { useState } from "react";
import Link from "next/link";
import {
    FiExternalLink,
    FiGithub,
    FiLayers,
    FiClock,
    FiCheckCircle,
    FiArrowRight,
    FiTerminal
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

interface ProjectItem {
    id: string;
    title: string;
    category: "Full-Stack" | "Backend / API" | "Frontend Architecture";
    status: "Completed" | "Pipeline" | "Updating";
    description: string;
    architectureHighlights: string[];
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
}

const projectsData: ProjectItem[] = [
    {
        id: "power-mgmt-engine",
        title: "Load Shedding & Power Distribution Engine",
        category: "Full-Stack",
        status: "Completed",
        description: "An automated full-stack grid load-shedding and power management system built to handle concurrent schedule allocations, real-time alert dispatching, and usage analytics.",
        architectureHighlights: [
            "Optimized relational PostgreSQL models with Prisma ORM",
            "Redis in-memory caching to eliminate redundant database hits",
            "Robust REST APIs with role-based JWT authentication"
        ],
        techStack: ["Next.js", "Node.js", "Express", "Prisma", "PostgreSQL", "Redis"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: "ecommerce-platform",
        title: "Enterprise E-Commerce & Service Platform",
        category: "Full-Stack",
        status: "Updating",
        description: "A production-grade full-stack commerce web application with dynamic product catalogs, server-side search indexing, and resilient order workflows.",
        architectureHighlights: [
            "Next.js App Router for server-side rendering and fast Core Web Vitals",
            "Encrypted cookie sessions and secure authorization boundaries",
            "Normalized database schema designed for high-concurrency order spikes"
        ],
        techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: "task-mgmt-system",
        title: "Scalable Task Orchestration & Scheduling API",
        category: "Backend / API",
        status: "Pipeline",
        description: "A high-performance backend microservice architecture tailored for automated scheduling, background job execution, and team workflow management.",
        architectureHighlights: [
            "Modular MVC architecture with rigorous schema validation",
            "Containerized multi-service environment utilizing Docker Compose",
            "Structured error tracking and request rate-limiting protection"
        ],
        techStack: ["Node.js", "Express.js", "MongoDB", "Redis", "Docker"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        id: "movie-explorer",
        title: "Movie Explorer & Media Discovery Portal",
        category: "Frontend Architecture",
        status: "Completed",
        description: "High-performance digital media discovery hub featuring dynamic API query caching, lightning-fast search debounce, and smooth client routing.",
        architectureHighlights: [
            "Custom client-side cache implementation to avoid duplicate network fetches",
            "Responsive fluid layout with micro-interactions and skeleton loading states",
            "Fully type-safe props and data contracts using TypeScript"
        ],
        techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "REST API"],
        liveUrl: "#",
        githubUrl: "#"
    }
];

const categories = ["All", "Full-Stack", "Backend / API", "Frontend Architecture"] as const;

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState<string>("All");

    const filteredProjects = activeFilter === "All"
        ? projectsData
        : projectsData.filter((p) => p.category === activeFilter);

    return (
        <main className="w-full min-h-screen bg-[#070b14] text-slate-100 pt-24 sm:pt-32 pb-24 overflow-x-hidden selection:bg-teal-500/30 selection:text-teal-300">

            {/* Background Ambient Lights */}
            <div className="fixed top-24 left-1/4 w-[500px] h-[350px] bg-teal-500/5 blur-[170px] pointer-events-none rounded-full" />
            <div className="fixed bottom-20 right-1/4 w-[450px] h-[350px] bg-indigo-500/5 blur-[170px] pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/20 bg-teal-950/40 text-teal-300 text-xs font-mono uppercase tracking-widest mb-3 backdrop-blur-md">
                        <HiSparkles className="w-3.5 h-3.5 text-teal-400" />
                        <span>Engineering Showcase</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
                        Featured Works & <br className="hidden sm:inline" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-cyan-300">
                            Architectural Systems
                        </span>
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
                        A curated collection of full-stack platforms, scalable REST APIs, and database-driven web systems built with modern engineering standards.
                    </p>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${activeFilter === cat
                                    ? "bg-teal-400 text-slate-950 font-bold border-teal-300 shadow-md shadow-teal-500/20 scale-105"
                                    : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group rounded-3xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl overflow-hidden hover:border-teal-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
                        >
                            <div>
                                {/* Mock Thumbnail Preview Area */}
                                <div className="relative w-full h-52 sm:h-64 bg-slate-950 border-b border-slate-800 overflow-hidden flex items-center justify-center p-6">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:24px_24px]" />

                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-3 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all">
                                            <FiLayers className="text-2xl" />
                                        </div>
                                        <span className="text-xs font-mono text-slate-400">
                                            System Architecture • {project.category}
                                        </span>
                                    </div>

                                    {/* Status Badge */}
                                    <div className="absolute top-4 right-4 z-20">
                                        {project.status === "Completed" && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-950/70 border border-emerald-500/30 text-emerald-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                Live Prototype Ready
                                            </span>
                                        )}
                                        {project.status === "Updating" && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-amber-950/70 border border-amber-500/30 text-amber-300">
                                                <FiClock className="text-xs" />
                                                Backend Sync in Progress
                                            </span>
                                        )}
                                        {project.status === "Pipeline" && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                                                <FiTerminal className="text-xs" />
                                                In Active Pipeline
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Project Details Content */}
                                <div className="p-6 sm:p-8">
                                    <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-2">
                                        <FiTerminal />
                                        <span>{project.category}</span>
                                    </div>

                                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-teal-300 transition-colors mb-3">
                                        {project.title}
                                    </h2>

                                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                                        {project.description}
                                    </p>

                                    {/* Architecture Highlights */}
                                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                                        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2 font-bold">
                                            Architectural Highlights:
                                        </span>
                                        {project.architectureHighlights.map((highlight, hIdx) => (
                                            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                                                <FiCheckCircle className="text-teal-400 text-xs mt-0.5 flex-shrink-0" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech Stack Badges */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.techStack.map((tech, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="text-[11px] font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between gap-3 border-t border-slate-800/60 mt-4">
                                <a
                                    href={project.liveUrl}
                                    target={project.liveUrl !== "#" ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${project.liveUrl !== "#"
                                            ? "bg-teal-400 hover:bg-teal-300 text-slate-950 shadow-md shadow-teal-500/20 active:scale-95"
                                            : "bg-slate-800/80 text-slate-500 cursor-not-allowed border border-slate-700/50"
                                        }`}
                                >
                                    <span>{project.liveUrl === "#" ? "Link Coming Soon" : "Live Demo"}</span>
                                    <FiExternalLink className="text-xs" />
                                </a>

                                <a
                                    href={project.githubUrl}
                                    target={project.githubUrl !== "#" ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-mono transition-all ${project.githubUrl !== "#"
                                            ? "border-slate-700 hover:border-teal-400 text-slate-300 hover:text-white bg-slate-950"
                                            : "border-slate-800 text-slate-600 cursor-not-allowed bg-slate-950/40"
                                        }`}
                                >
                                    <FiGithub className="text-xs" />
                                    <span>Repository</span>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Bottom Callout */}
                <div className="mt-16 sm:mt-20 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

                    <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-3">
                        More systems in local development
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mb-6">
                        Currently refining multiple full-stack codebases with Next.js 15, Prisma migrations, and Dockerized microservices.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-teal-500/25 active:scale-95"
                    >
                        <span>Discuss Architecture or Roles</span>
                        <FiArrowRight className="text-xs" />
                    </Link>
                </div>

            </div>
        </main>
    );
}