"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaDownload,
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaServer
} from "react-icons/fa";
import { HiSparkles, HiCommandLine } from "react-icons/hi2";

const stats = [
  { label: "Architecture", value: "Full-Stack", icon: FaServer },
  { label: "Core Mindset", value: "Clean Code", icon: FaCode },
  { label: "API & Backend", value: "Scalable", icon: FaRocket },
  { label: "Academics", value: "CST Graduate", icon: FaGraduationCap },
];

const highlights = [
  {
    title: "End-to-End System Design",
    desc: "Architecting full-stack web platforms with Next.js App Router on the client and robust Express/Node.js on the server."
  },
  {
    title: "Database Optimization & Cache",
    desc: "Designing normalized PostgreSQL schemas with Prisma ORM and integrating Redis caching layers to reduce latency."
  },
  {
    title: "Modern UI/UX & Responsive Flow",
    desc: "Writing type-safe, fluid interfaces tailored for ultra-fast load times, mobile smoothness, and accessibility."
  }
];

const About = () => {
  return (
    <main className="w-full min-h-screen bg-[#070b14] text-white pt-24 sm:pt-32 pb-20 overflow-x-hidden selection:bg-teal-500/30 selection:text-teal-300">

      {/* Background Soft Ambient Lights */}
      <div className="fixed top-20 left-1/4 w-[450px] h-[300px] bg-teal-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="fixed bottom-20 right-1/4 w-[450px] h-[350px] bg-indigo-500/5 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-950/40 text-teal-400 text-xs font-mono uppercase tracking-widest mb-3 backdrop-blur-md">
            <HiSparkles className="text-sm" />
            <span>Engineering Mindset & Story</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Bridging Logic & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-300">Fluid Design</span>
          </h1>
        </div>

        {/* Top Split Hero: Picture + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">

          {/* Profile Card with Glow Frame (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">

              {/* Back Soft Glowing Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-teal-500/30 via-emerald-500/20 to-indigo-500/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Container */}
              <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950/90 p-4 shadow-2xl backdrop-blur-md">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-900">
                  <Image
                    src="/assets/Rashida2.png.jpeg"
                    alt="Rashida Akther - Full Stack Engineer"
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
                    priority
                  />
                  {/* Subtle vignette layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Micro Badge on Picture Bottom */}
                <div className="mt-3 px-2 py-1 flex items-center justify-between font-mono text-[11px] text-zinc-400 border-t border-zinc-900">
                  <span className="flex items-center gap-1.5 text-teal-400">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    Full-Stack Engineer
                  </span>
                  <span>Moulvibazar, BD</span>
                </div>
              </div>

            </div>
          </div>

          {/* Detailed Narrative & Philosophy (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
              <HiCommandLine className="text-teal-400 text-sm" />
              <span>const developer = new Engineer('Rashida Akther');</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 mb-4 leading-snug">
              Crafting reliable software with clean architecture and intentional execution.
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              <p>
                Hello! I'm <strong className="text-zinc-100 font-semibold">Rashida Akther</strong>, a Full-Stack Software Engineer who enjoys transforming complex backend business logic into fast, accessible, and intuitive digital applications.
              </p>
              <p>
                My educational journey in <span className="text-teal-300">Computer Science & Technology (CST)</span> at Moulvibazar Polytechnic Institute solidified my foundations in data structures, relational database design, and network fundamentals.
              </p>
              <p>
                Whether designing REST APIs with <span className="text-zinc-200">Express.js</span>, structuring type-safe database models with <span className="text-zinc-200">Prisma & PostgreSQL</span>, or building reactive user interfaces in <span className="text-zinc-200">Next.js & TypeScript</span>—I prioritize code clarity, performance, and maintainability.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-zinc-950 font-bold text-xs tracking-wide transition-all shadow-md shadow-teal-500/20 active:scale-95"
              >
                <span>Explore Projects</span>
                <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:text-white text-zinc-200 font-semibold text-xs tracking-wide transition-all active:scale-95"
              >
                <FaDownload className="text-xs text-teal-400" />
                <span>Resume / CV</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Interactive Stats Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-16 sm:mb-20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-teal-500/30 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-2.5 group-hover:scale-110 transition-transform">
                  <Icon className="text-sm" />
                </div>
                <span className="text-base sm:text-lg font-bold text-zinc-100 font-mono">
                  {stat.value}
                </span>
                <span className="text-[11px] text-zinc-400 font-mono mt-0.5">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* What Drives Me / Engineering Pillars */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6 sm:p-10 backdrop-blur-md">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 bg-teal-950/40 border border-teal-500/20 px-3 py-1 rounded-full">
              Core Principles
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
              How I Approach Every Project
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 hover:border-teal-500/40 hover:bg-zinc-900/50 transition-all duration-300"
              >
                <span className="text-xs font-mono text-teal-400 font-bold block mb-2">
                  0{idx + 1}.
                </span>
                <h4 className="text-sm font-bold text-zinc-100 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default About;