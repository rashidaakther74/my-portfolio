"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaDownload,
  FaServer,
  FaDatabase,
  FaLayerGroup,
  FaPlay,
  FaCheck,
  FaCopy
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit
} from "react-icons/si";
import { HiSparkles, HiOutlineCodeBracketSquare, HiOutlineCommandLine } from "react-icons/hi2";

const skillCategories = [
  {
    title: "Frontend Architecture",
    icon: FaLayerGroup,
    skills: [
      { name: "Next.js 15", icon: SiNextdotjs, level: "Advanced" },
      { name: "React", icon: SiReact, level: "Advanced" },
      { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
      { name: "JavaScript", icon: SiJavascript, level: "Expert" },
      { name: "HTML5 & CSS3", icon: SiHtml5, level: "Expert" },
    ],
  },
  {
    title: "Backend & Systems",
    icon: FaServer,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: "Advanced" },
      { name: "Express.js", icon: SiExpress, level: "Advanced" },
      { name: "REST APIs", icon: HiOutlineCodeBracketSquare, level: "Advanced" },
      { name: "System Architecture", icon: HiSparkles, level: "Proficient" },
    ],
  },
  {
    title: "Databases & DevOps",
    icon: FaDatabase,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced" },
      { name: "MongoDB", icon: SiMongodb, level: "Advanced" },
      { name: "Redis", icon: SiRedis, level: "Proficient" },
      { name: "Docker", icon: SiDocker, level: "Proficient" },
    ],
  },
];

const codingSequences = [
  "const engineer = { name: 'Rashida Akther', role: 'Full-Stack' };",
  "await db.connect('postgresql://user:***@host:5432/main');",
  "docker run -d -p 3000:3000 --name portfolio-prod;",
  "console.log('Building resilient modern systems...');",
];

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [seqIndex, setSeqIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [catSpeech, setCatSpeech] = useState(false);

  // API Playground States
  const [apiLoading, setApiLoading] = useState(false);
  const [apiExecuted, setApiExecuted] = useState(false);
  const [apiCopied, setApiCopied] = useState(false);

  const mockApiResponse = {
    status: 200,
    success: true,
    message: "Hire request received successfully! 🚀",
    candidate: {
      name: "Rashida Akther",
      title: "Full-Stack Software Engineer",
      status: "Available for Remote & Full-Time Roles",
      ready_to_interview: true,
      core_technologies: [
        "Next.js 15",
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "Docker"
      ],
      social_connects: {
        github: "https://github.com/rashidaakther74",
        linkedin: "https://www.linkedin.com/in/rashida-akther-2014503a2/"
      }
    },
    latency: "24ms"
  };

  const handleSendApiRequest = () => {
    setApiLoading(true);
    setTimeout(() => {
      setApiLoading(false);
      setApiExecuted(true);
    }, 450);
  };

  const handleCopyApiResponse = () => {
    navigator.clipboard.writeText(JSON.stringify(mockApiResponse, null, 2));
    setApiCopied(true);
    setTimeout(() => setApiCopied(false), 2000);
  };

  useEffect(() => {
    const currentSeq = codingSequences[seqIndex];
    if (charIndex < currentSeq.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + currentSeq[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
        setSeqIndex((prev) => (prev + 1) % codingSequences.length);
      }, 2400);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, seqIndex]);

  return (
    <main className="w-full min-h-screen bg-[#070b14] text-white pt-20 pb-20 overflow-x-hidden">

      {/* CSS Injected Keyframes for Continuous Smooth Cat Animation */}
      <style jsx global>{`
        @keyframes catTailWag {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(18deg); }
        }
        @keyframes catEarTwitch {
          0%, 90%, 100% { transform: rotate(0deg); }
          93% { transform: rotate(-8deg); }
          96% { transform: rotate(6deg); }
        }
        @keyframes catBlink {
          0%, 94%, 98%, 100% { transform: scaleY(1); }
          96% { transform: scaleY(0.1); }
        }
        @keyframes catFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-cat-tail {
          transform-origin: 80px 75px;
          animation: catTailWag 2.4s ease-in-out infinite;
        }
        .animate-cat-ear-left {
          transform-origin: 32px 35px;
          animation: catEarTwitch 3.8s ease-in-out infinite;
        }
        .animate-cat-ear-right {
          transform-origin: 68px 35px;
          animation: catEarTwitch 4.2s ease-in-out infinite 0.4s;
        }
        .animate-cat-blink {
          transform-origin: 50% 52%;
          animation: catBlink 3.2s infinite;
        }
        .animate-cat-body {
          animation: catFloat 3s ease-in-out infinite;
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center min-h-[calc(100vh-5rem)]">

        {/* Soft Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[300px] bg-teal-500/10 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-[550px] h-[450px] bg-indigo-500/10 blur-[170px] pointer-events-none rounded-full" />

        {/* 12-Column Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Compact, Sleek Typography (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left z-20">

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-950/40 text-teal-300 text-[11px] font-mono mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-zinc-400">Status:</span>
              <span className="font-semibold text-zinc-100">Available for Roles</span>
            </div>

            {/* Compact Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold tracking-tight text-white leading-snug mb-3">
              Architecting reliable backends &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-300">
                fluid interfaces.
              </span>
            </h1>

            {/* Clean Bio */}
            <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed max-w-md mb-5">
              Hi, I'm <strong className="text-white font-semibold">Rashida Akther</strong>. Full-stack software engineer crafting production-ready web apps with clean architecture, API design, and highly responsive user interfaces.
            </p>

            {/* Live Typing Terminal */}
            <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-950/90 p-3 mb-5 font-mono text-[11px] text-left shadow-xl relative overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-zinc-800/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold">sh - terminal.js</span>
              </div>

              <div className="min-h-[34px] flex items-center text-teal-300">
                <span className="text-zinc-500 mr-2 font-bold">$</span>
                <span className="break-all">{typedText}</span>
                <span className="animate-ping ml-1 text-teal-400 font-bold">|</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-zinc-950 font-bold text-xs tracking-wide transition-all shadow-md shadow-teal-500/20 hover:shadow-teal-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-700/80 bg-zinc-900/60 hover:bg-zinc-800 hover:text-white text-zinc-200 font-semibold text-xs sm:text-sm tracking-wide transition-all backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
              >
                <FaDownload className="text-xs text-zinc-400" />
                <span>Resume</span>
              </Link>

              <div className="flex items-center gap-1.5 ml-1">
                <a
                  href="https://github.com/rashidaakther74"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white hover:border-teal-500/50 hover:bg-zinc-800/80 transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rashida-akther-2014503a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-teal-400 hover:border-teal-500/50 hover:bg-zinc-800/80 transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent, Big & Elevated Image + ANIMATED CUTE CAT (7 Cols) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative -translate-y-8 lg:-translate-y-16">

            {/* Image + Cat Wrapper */}
            <div className="relative w-full max-w-[580px] lg:max-w-[700px] flex flex-col items-center">

              {/* === THE SUPER CUTE ANIMATED NORACHORA CAT === */}
              <div
                onClick={() => { setCatSpeech(true); setTimeout(() => setCatSpeech(false), 2400); }}
                className="absolute -top-10 sm:-top-8 right-6 sm:right-16 z-50 cursor-pointer select-none group/cat"
                title="Click me! Meow~"
              >
                {/* Speech Bubble */}
                <div className={`absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-teal-400 text-zinc-950 font-mono text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xl transition-all duration-300 ${catSpeech ? "opacity-100 -translate-y-1 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}>
                  Meow! Let's code together! 🐾
                </div>

                {/* Animated Cat Figure (Ears twitch, eyes blink, tail wags) */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 relative animate-cat-body drop-shadow-[0_8px_18px_rgba(20,184,166,0.6)]">
                  <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">

                    {/* Wagging Animated Tail */}
                    <path
                      d="M72 70 C88 68, 98 48, 88 38 C80 30, 72 44, 76 56"
                      stroke="#14b8a6"
                      strokeWidth="5"
                      strokeLinecap="round"
                      fill="none"
                      className="animate-cat-tail"
                    />

                    {/* Cat Back Paws / Body */}
                    <ellipse cx="50" cy="68" rx="26" ry="18" fill="#090d16" stroke="#14b8a6" strokeWidth="2.5" />

                    {/* Twitching Left Ear */}
                    <g className="animate-cat-ear-left">
                      <polygon points="26,38 14,14 42,24" fill="#090d16" stroke="#14b8a6" strokeWidth="2.5" />
                      <polygon points="27,34 18,18 38,25" fill="#f472b6" />
                    </g>

                    {/* Twitching Right Ear */}
                    <g className="animate-cat-ear-right">
                      <polygon points="74,38 86,14 58,24" fill="#090d16" stroke="#14b8a6" strokeWidth="2.5" />
                      <polygon points="73,34 82,18 62,25" fill="#f472b6" />
                    </g>

                    {/* Cat Head */}
                    <circle cx="50" cy="46" r="25" fill="#0d1527" stroke="#14b8a6" strokeWidth="2.5" />

                    {/* Cute Big Blinking Eyes */}
                    <g className="animate-cat-blink">
                      <ellipse cx="39" cy="44" rx="4.5" ry="5.5" fill="#2dd4bf" />
                      <circle cx="37.5" cy="42" r="1.5" fill="#ffffff" />
                      <ellipse cx="61" cy="44" rx="4.5" ry="5.5" fill="#2dd4bf" />
                      <circle cx="59.5" cy="42" r="1.5" fill="#ffffff" />
                    </g>

                    {/* Cute Pink Blush Cheeks */}
                    <circle cx="32" cy="52" r="3.5" fill="#fb7185" opacity="0.6" />
                    <circle cx="68" cy="52" r="3.5" fill="#fb7185" opacity="0.6" />

                    {/* Cute Tiny Nose & W-mouth */}
                    <polygon points="50,50 47,47 53,47" fill="#fb7185" />
                    <path d="M46 52 Q50 55 54 52" stroke="#e2e8f0" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                    {/* Whiskers */}
                    <line x1="16" y1="46" x2="30" y2="48" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="15" y1="52" x2="30" y2="52" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="84" y1="46" x2="70" y2="48" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="85" y1="52" x2="70" y2="52" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />

                    {/* Front Paws Rested Forward */}
                    <ellipse cx="42" cy="68" rx="4.5" ry="3.5" fill="#14b8a6" />
                    <ellipse cx="58" cy="68" rx="4.5" ry="3.5" fill="#14b8a6" />
                  </svg>
                </div>
              </div>

              {/* Glowing Aura Behind Person */}
              <div className="absolute inset-0 m-auto w-[460px] h-[460px] bg-gradient-to-tr from-teal-500/25 via-emerald-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Large & Elevated Cutout Picture */}
              <div className="relative z-10 w-full flex justify-center items-center">
                <Image
                  src="/assets/rashi.png"
                  alt="Rashida Akther - Full Stack Engineer"
                  width={720}
                  height={880}
                  className="w-full h-auto max-h-[640px] lg:max-h-[720px] object-contain drop-shadow-[0_20px_50px_rgba(20,184,166,0.25)] transition duration-500 hover:scale-[1.02]"
                  priority
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= SKILLS & TECHNICAL ARSENAL ================= */}
      <section className="relative mt-8 pt-16 border-t border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 bg-teal-950/40 border border-teal-500/20 px-3 py-1 rounded-full">
              Core Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
              Tech Stack & Expertise
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Frameworks, languages, databases, and DevOps tools I use daily.
            </p>
          </div>

          {/* Categorized Competency Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => {
              const CategoryIcon = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-teal-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-zinc-800/80">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                      <CategoryIcon size={15} />
                    </div>
                    <h3 className="font-semibold text-zinc-100 text-sm">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {cat.skills.map((skill, sIdx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-2 rounded-xl bg-zinc-950/50 border border-zinc-800/60"
                        >
                          <div className="flex items-center gap-2">
                            <SkillIcon className="text-teal-400 text-xs" />
                            <span className="text-xs font-medium text-zinc-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= NEW: INTERACTIVE CANDIDATE API PLAYGROUND ================= */}
      <section className="relative mt-16 pt-16 border-t border-zinc-900/80">
        <div className="max-w-4xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 bg-teal-950/40 border border-teal-500/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <HiSparkles className="text-xs" /> Interactive API Sandbox
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
              Test the Candidate API
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Trigger a live simulated POST request to fetch my candidate profile, availability, and architecture payload.
            </p>
          </div>

          {/* API Playground Console Card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-2xl overflow-hidden backdrop-blur-md">

            {/* Endpoint Bar */}
            <div className="p-3 sm:p-4 bg-zinc-900/60 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  POST
                </span>
                <span className="text-zinc-500 hidden sm:inline">https://rashida.dev</span>
                <span className="text-zinc-200 font-medium">/api/v1/hire-candidate</span>
              </div>

              <button
                onClick={handleSendApiRequest}
                disabled={apiLoading}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 active:scale-95 text-zinc-950 font-bold text-xs transition-all shadow-md shadow-teal-500/20 disabled:opacity-50"
              >
                <FaPlay className={`text-[10px] ${apiLoading ? "animate-spin" : ""}`} />
                <span>{apiLoading ? "Fetching..." : "Send Request"}</span>
              </button>
            </div>

            {/* Response Area */}
            <div className="p-4 sm:p-6 font-mono text-xs relative">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-900 text-zinc-500 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <HiOutlineCommandLine className="text-sm text-teal-400" />
                  Response Payload (JSON)
                </span>
                {apiExecuted && (
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-bold">200 OK • 24ms</span>
                    <button
                      onClick={handleCopyApiResponse}
                      className="hover:text-zinc-300 transition-colors flex items-center gap-1 text-[11px]"
                      title="Copy JSON Payload"
                    >
                      {apiCopied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                      <span>{apiCopied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* JSON Output Container */}
              <div className="bg-[#050811] rounded-xl p-4 border border-zinc-900 min-h-[190px] overflow-x-auto text-zinc-300 leading-relaxed">
                {apiExecuted ? (
                  <pre className="text-emerald-300 text-[11px] sm:text-xs">
                    {JSON.stringify(mockApiResponse, null, 2)}
                  </pre>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10 text-zinc-600">
                    <p className="text-xs font-sans mb-1.5 text-zinc-400 font-medium">
                      Click <span className="text-teal-400 font-bold">"Send Request"</span> to execute the candidate endpoint.
                    </p>
                    <p className="text-[11px] text-zinc-600">
                      Live profile & availability JSON payload will be rendered in real-time.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;