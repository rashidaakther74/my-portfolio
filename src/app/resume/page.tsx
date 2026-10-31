"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaArrowLeft,
    FaPrint,
    FaDownload,
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaExternalLinkAlt,
    FaServer,
    FaDatabase,
    FaLayerGroup,
    FaTools
} from "react-icons/fa";
import { HiCommandLine, HiSparkles } from "react-icons/hi2";

export default function ResumePage() {
    useEffect(() => {
        document.title = "Rashida Akther | Full-Stack Software Engineer";
    }, []);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-[#070b14] text-zinc-100 pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 selection:bg-teal-500/30 selection:text-teal-300 print:bg-white print:p-0 print:m-0 print:text-black">

            {/* STRICT 1-PAGE A4 FULL-FILL PRINT RULES */}
            <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 10mm 12mm;
          }
          html, body {
            background: #ffffff !important;
            color: #111827 !important;
            font-size: 12.5px !important;
            line-height: 1.45 !important;
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          header, nav, footer, .print-hide {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .resume-main-card {
            border: none !important;
            background: #ffffff !important;
            color: #111827 !important;
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
            max-width: 100% !important;
          }
          .resume-block {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }
      `}</style>

            {/* Background Soft Lighting (Web Only) */}
            <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-teal-500/5 blur-[180px] pointer-events-none rounded-full print:hidden" />

            <div className="max-w-4xl mx-auto relative z-10 w-full">

                {/* Top Control Bar (Hidden on Print) */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-zinc-800/80 print-hide print:hidden">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:text-white text-zinc-300 text-xs font-mono transition-all"
                    >
                        <FaArrowLeft className="text-teal-400" />
                        <span>Home</span>
                    </Link>

                    <div className="flex items-center gap-2">
                        {/* ১. শুধুই মোবাইলে দেখাবে (ল্যাপটপ বা বড় স্ক্রিনে হিডেন থাকবে) */}
                        <a
                            href="/resume.pdf"
                            download="Rashida_Akther_Resume.pdf"
                            className="inline-flex sm:hidden items-center gap-2 px-4 py-2.5 rounded-xl border border-teal-500/30 bg-teal-950/40 hover:bg-teal-900/50 text-teal-300 font-semibold text-xs transition-all shadow-sm active:scale-95"
                        >
                            <FaDownload className="text-xs" />
                            <span>Download PDF</span>
                        </a>

                        {/* ২. শুধুই ল্যাপটপ/ডেস্কটপে দেখাবে (মোবাইলে হিডেন থাকবে) */}
                        <button
                            onClick={handlePrint}
                            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-zinc-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-teal-500/20 active:scale-95"
                        >
                            <FaPrint />
                            <span>Print / Save as PDF</span>
                        </button>
                    </div>
                </div>

                {/* Main Resume Canvas Card */}
                <div className="resume-main-card rounded-2xl border border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl p-6 sm:p-9 shadow-2xl relative overflow-hidden print:border-none print:bg-white print:text-black print:p-0 print:shadow-none">

                    {/* Header Section */}
                    <div className="resume-block flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5 pb-5 border-b border-zinc-800/80 print:border-zinc-300 print:pb-4 text-center sm:text-left">

                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                            {/* Profile Avatar */}
                            <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-2xl p-[1.5px] bg-gradient-to-tr from-teal-500 to-indigo-500 flex-shrink-0 shadow-lg print:border print:border-zinc-300 print:p-0">
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[14px] overflow-hidden bg-zinc-900">
                                    <Image
                                        src="/assets/rashi.png"
                                        alt="Rashida Akther - Full-Stack Software Engineer"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                        sizes="90px"
                                    />
                                </div>
                            </div>

                            {/* Title & Name */}
                            <div>
                                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-teal-400 mb-1 print:text-teal-800 font-bold">
                                    <HiCommandLine className="text-sm" />
                                    <span>Full-Stack Software Engineer</span>
                                </div>
                                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white print:text-black mb-1.5">
                                    Rashida Akther
                                </h1>
                                <p className="text-xs sm:text-[13px] text-zinc-300 print:text-zinc-700 max-w-lg leading-relaxed">
                                    Specialized in architecting robust, scalable backends and fluid, type-safe full-stack web applications using Next.js, Node.js, and Cloud Databases.
                                </p>
                            </div>
                        </div>

                        {/* Quick Contact Info */}
                        <div className="flex flex-col gap-1.5 text-xs sm:text-[13px] font-mono text-zinc-200 print:text-zinc-800 items-center sm:items-end">
                            <span className="flex items-center gap-1.5">
                                <FaMapMarkerAlt className="text-teal-400 text-xs print:text-teal-700" /> Moulvibazar, Bangladesh
                            </span>
                            <span className="flex items-center gap-1.5">
                                <FaEnvelope className="text-teal-400 text-xs print:text-teal-700" /> rashida.codehub@gmail.com
                            </span>
                            <span className="flex items-center gap-1.5">
                                <FaPhoneAlt className="text-teal-400 text-xs print:text-teal-700" /> +880 1870531774
                            </span>
                        </div>
                    </div>

                    {/* Links Bar */}
                    <div className="resume-block py-3 border-b border-zinc-800/80 print:border-zinc-300 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs sm:text-[13px] font-mono print:py-2">
                        <span className="text-zinc-400 uppercase tracking-widest text-xs print:text-zinc-600 font-bold">Profiles:</span>
                        <a href="https://github.com/rashidaakther74" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-zinc-200 hover:text-teal-400 print:text-zinc-800 font-medium">
                            <FaGithub className="text-teal-400 print:text-teal-700" /> github.com/rashidaakther74
                        </a>
                        <span className="text-zinc-600 print:text-zinc-400 hidden sm:inline">•</span>
                        <a href="https://www.linkedin.com/in/rashida-akther-2014503a2/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-zinc-200 hover:text-teal-400 print:text-zinc-800 font-medium">
                            <FaLinkedinIn className="text-teal-400 print:text-teal-700" /> linkedin.com/in/rashida-akther
                        </a>
                        <span className="text-zinc-600 print:text-zinc-400 hidden sm:inline">•</span>
                        <Link href="/" className="flex items-center gap-1.5 text-zinc-200 hover:text-teal-400 print:text-zinc-800 font-medium">
                            <FaExternalLinkAlt className="text-teal-400 text-[11px] print:text-teal-700" /> rashida.dev
                        </Link>
                    </div>

                    {/* Technical Skills Grid */}
                    <div className="resume-block py-5 border-b border-zinc-800/80 print:border-zinc-300 print:py-3.5">
                        <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-teal-400 mb-3.5 flex items-center gap-1.5 print:text-teal-800 font-bold">
                            <HiSparkles /> Technical Arsenal & Competencies
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 print:grid-cols-2 print:gap-3">
                            <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 print:bg-zinc-50 print:border-zinc-200 print:p-2.5">
                                <span className="text-xs sm:text-[13px] font-bold text-zinc-100 print:text-zinc-900 flex items-center gap-2 mb-1.5">
                                    <FaLayerGroup className="text-teal-400 print:text-teal-700 text-xs" /> Frontend Systems
                                </span>
                                <p className="text-xs sm:text-[12.5px] text-zinc-300 print:text-zinc-700 leading-relaxed font-mono">
                                    Next.js 14/15 (App Router), React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Redux Toolkit
                                </p>
                            </div>

                            <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 print:bg-zinc-50 print:border-zinc-200 print:p-2.5">
                                <span className="text-xs sm:text-[13px] font-bold text-zinc-100 print:text-zinc-900 flex items-center gap-2 mb-1.5">
                                    <FaServer className="text-teal-400 print:text-teal-700 text-xs" /> Backend & System Design
                                </span>
                                <p className="text-xs sm:text-[12.5px] text-zinc-300 print:text-zinc-700 leading-relaxed font-mono">
                                    Node.js, Express.js, RESTful APIs, JWT Authentication, Microservices, Middleware & MVC Architecture
                                </p>
                            </div>

                            <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 print:bg-zinc-50 print:border-zinc-200 print:p-2.5">
                                <span className="text-xs sm:text-[13px] font-bold text-zinc-100 print:text-zinc-900 flex items-center gap-2 mb-1.5">
                                    <FaDatabase className="text-teal-400 print:text-teal-700 text-xs" /> Databases & In-Memory Cache
                                </span>
                                <p className="text-xs sm:text-[12.5px] text-zinc-300 print:text-zinc-700 leading-relaxed font-mono">
                                    PostgreSQL, MongoDB, Prisma ORM, Mongoose, Redis (Caching & Key-Value Storage)
                                </p>
                            </div>

                            <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 print:bg-zinc-50 print:border-zinc-200 print:p-2.5">
                                <span className="text-xs sm:text-[13px] font-bold text-zinc-100 print:text-zinc-900 flex items-center gap-2 mb-1.5">
                                    <FaTools className="text-teal-400 print:text-teal-700 text-xs" /> DevOps & Engineering Tools
                                </span>
                                <p className="text-xs sm:text-[12.5px] text-zinc-300 print:text-zinc-700 leading-relaxed font-mono">
                                    Docker (Containerization), Git & GitHub, Postman, Vercel, Linux CLI, Clean Code Practices
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Featured Projects */}
                    <div className="resume-block py-5 border-b border-zinc-800/80 print:border-zinc-300 print:py-3.5">
                        <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-teal-400 mb-3.5 flex items-center gap-1.5 print:text-teal-800 font-bold">
                            <HiSparkles /> Featured Engineering Projects
                        </h2>

                        <div className="space-y-4 print:space-y-3">

                            {/* Project 1 */}
                            <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60 print:bg-transparent print:border-zinc-200 print:p-2.5">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                                    <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                                        Full-Stack E-Commerce & Service Platform
                                    </h3>
                                    <span className="text-xs font-mono text-teal-300 bg-teal-950/60 border border-teal-500/20 px-2.5 py-0.5 rounded print:bg-transparent print:text-teal-800 print:p-0 font-semibold">
                                        Next.js • TypeScript • PostgreSQL • Prisma
                                    </span>
                                </div>
                                <ul className="list-disc list-inside text-xs sm:text-[12.5px] text-zinc-300 print:text-zinc-800 space-y-1.5 leading-relaxed">
                                    <li>Engineered a high-performance server-rendered application utilizing Next.js App Router and type-safe Prisma ORM models.</li>
                                    <li>Implemented robust session authentication, JWT security tokens, and Role-Based Access Control (RBAC).</li>
                                    <li>Optimized relational database queries in PostgreSQL with strategic indexing, improving API response times by 30%.</li>
                                </ul>
                            </div>

                            {/* Project 2 */}
                            <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60 print:bg-transparent print:border-zinc-200 print:p-2.5">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                                    <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                                        Scalable Task Management & Scheduling System
                                    </h3>
                                    <span className="text-xs font-mono text-teal-300 bg-teal-950/60 border border-teal-500/20 px-2.5 py-0.5 rounded print:bg-transparent print:text-teal-800 print:p-0 font-semibold">
                                        React • Node.js • Express • MongoDB • Redis • Docker
                                    </span>
                                </div>
                                <ul className="list-disc list-inside text-xs sm:text-[12.5px] text-zinc-300 print:text-zinc-800 space-y-1.5 leading-relaxed">
                                    <li>Designed modular REST APIs with Express.js supporting request validation, error boundaries, and token-based auth.</li>
                                    <li>Integrated Redis in-memory caching for frequently queried dashboard records, significantly decreasing DB workload.</li>
                                    <li>Containerized application services using Docker for consistent local development workflows and cloud production deployment.</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* Education & Academic Background */}
                    <div className="resume-block pt-4 print:pt-3">
                        <h2 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-teal-400 mb-2.5 flex items-center gap-1.5 print:text-teal-800 font-bold">
                            <HiSparkles /> Education & Academic Background
                        </h2>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 p-3.5 rounded-xl bg-zinc-900/30 border border-zinc-800/60 print:bg-transparent print:border-zinc-200 print:p-2">
                            <div>
                                <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                                    Diploma in Computer Science & Technology (CST)
                                </h3>
                                <p className="text-xs sm:text-[13px] text-zinc-300 print:text-zinc-700">
                                    Moulvibazar Polytechnic Institute, Bangladesh
                                </p>
                            </div>
                            <span className="text-xs sm:text-[13px] font-mono text-teal-400 print:text-teal-800 font-bold">
                                Session 2022 – 2026
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}