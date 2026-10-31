"use client";

import Link from "next/link";
import {
  FiLayers,
  FiServer,
  FiDatabase,
  FiCpu,
  FiLock,
  FiCloud,
  FiArrowRight,
  FiCheckCircle
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const services = [
  {
    icon: FiLayers,
    title: "Full-Stack Web Applications",
    desc: "End-to-end development of dynamic, production-ready web platforms using Next.js 15, React, and TypeScript with ultra-fast SSR/SSG rendering.",
    deliverables: ["Type-safe Architecture", "Fluid Responsive UI", "SEO & Core Web Vitals"],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: FiServer,
    title: "REST APIs & Backend Architecture",
    desc: "Designing secure, resilient backend microservices and RESTful API endpoints using Node.js and Express with robust request validation and error boundaries.",
    deliverables: ["Modular MVC Architecture", "Rate Limiting & CORS", "High Concurrent Handling"],
    tags: ["Node.js", "Express.js", "REST APIs", "Zod"],
  },
  {
    icon: FiDatabase,
    title: "Database Modeling & Caching",
    desc: "Structuring relational and non-relational database schemas, indexing for high performance, and implementing Redis in-memory cache layers.",
    deliverables: ["Normalized Schema Design", "Query Optimization", "In-Memory Data Caching"],
    tags: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis"],
  },
  {
    icon: FiLock,
    title: "Authentication & Security",
    desc: "Engineering enterprise-grade auth systems with encrypted JWT tokens, session cookies, and Role-Based Access Control (RBAC) to keep endpoints safe.",
    deliverables: ["JWT & Refresh Token Flow", "RBAC Permissions", "Data Hashing (Bcrypt)"],
    tags: ["Auth Systems", "JWT", "NextAuth", "Security"],
  },
  {
    icon: FiCloud,
    title: "Containerization & Cloud Deployment",
    desc: "Containerizing services with Docker for frictionless cross-environment consistency and deploying production applications with zero-downtime CI/CD workflows.",
    deliverables: ["Dockerized Microservices", "Automated Cloud Builds", "Server Health Monitoring"],
    tags: ["Docker", "Vercel", "Git/GitHub", "Linux"],
  },
  {
    icon: FiCpu,
    title: "API Integration & Performance Tuning",
    desc: "Integrating 3rd-party services (payment gateways like Stripe, email providers, and webhooks) while eliminating database and UI latency bottlenecks.",
    deliverables: ["Stripe / Payment Gateways", "Database Load Reduction", "Fast 60fps Client Speed"],
    tags: ["Stripe", "Webhooks", "Performance", "Optimization"],
  },
];

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-[#070b14] text-white pt-24 sm:pt-32 pb-20 overflow-x-hidden selection:bg-teal-500/30 selection:text-teal-300">

      {/* Background Ambient Lights */}
      <div className="fixed top-20 right-1/4 w-[450px] h-[350px] bg-teal-500/5 blur-[170px] pointer-events-none rounded-full" />
      <div className="fixed bottom-20 left-1/4 w-[450px] h-[350px] bg-indigo-500/5 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-950/40 text-teal-400 text-xs font-mono uppercase tracking-widest mb-3 backdrop-blur-md">
            <HiSparkles className="text-sm" />
            <span>Specialized Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-300">Technical Solutions</span>
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Delivering production-grade software solutions with clean architecture, robust backends, and responsive, high-performing user interfaces.
          </p>
        </div>

        {/* 6-Card Responsive Grid: 1 Col on Mobile, 2 on Tablet, 3 on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-7 backdrop-blur-md hover:border-teal-500/40 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-teal-500/10"
              >
                <div>
                  {/* Service Icon with Glow */}
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-5 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-300">
                    <Icon className="text-xl" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-teal-300 transition-colors mb-2.5">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed font-normal mb-5">
                    {svc.desc}
                  </p>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-zinc-900">
                    {svc.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                        <FiCheckCircle className="text-teal-400 text-xs flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-900/80">
                  {svc.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-zinc-400 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-950 via-zinc-900/90 to-zinc-950 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-3">
            Have a project in mind or need an engineer on your team?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto mb-6">
            I am currently open to freelance contracts, remote software developer roles, and engineering collaborations.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-teal-500/25 active:scale-95"
          >
            <span>Start a Conversation</span>
            <FiArrowRight className="text-xs" />
          </Link>
        </div>

      </div>
    </main>
  );
}