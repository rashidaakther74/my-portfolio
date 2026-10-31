"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FiArrowUpRight, FiHeart } from "react-icons/fi";
import { HiCommandLine } from "react-icons/hi2";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Resume (CV)", href: "/resume" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rashidaakther74",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rashida-akther-2014503a2",
    icon: FaLinkedinIn,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/rashida.akther.704509",
    icon: FaFacebookF,
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#070b14] border-t border-slate-800/80 text-slate-400 relative overflow-hidden print:hidden">

      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-teal-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">

          {/* Col 1: Identity & Bio (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-400 to-emerald-500 p-[1px] shadow-md shadow-teal-500/20">
                <div className="relative w-full h-full rounded-[11px] bg-slate-950 overflow-hidden">
                  <Image
                    src="/assets/rashi.png"
                    alt="Rashida Logo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="32px"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold font-mono text-white group-hover:text-teal-300 transition-colors">
                  Rashida<span className="text-teal-400">.dev</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider -mt-1">
                  Full-Stack Software Engineer
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Architecting production-ready full-stack applications with Next.js, Node.js, and PostgreSQL. Focused on clean code and reliable performance.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-950/30 text-teal-300 text-xs font-mono">
              <HiCommandLine className="text-teal-400" />
              <span>Available for Remote Roles Worldwide</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (4 Cols) */}
          <div className="lg:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold mb-4">
              Navigation Map
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-teal-300 transition-colors flex items-center gap-1 group py-1"
                  >
                    <span>{item.name}</span>
                    <FiArrowUpRight className="text-xs text-slate-600 group-hover:text-teal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Profiles & Connect (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-bold">
              Engineering Network
            </h2>
            <p className="text-xs text-slate-400">
              Follow my code commits, engineering insights, and professional activities:
            </p>

            <div className="flex items-center gap-2.5">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center justify-center text-slate-400 hover:text-teal-300 hover:border-teal-500/40 hover:bg-slate-900 transition-all hover:-translate-y-0.5 shadow-sm"
                    aria-label={social.name}
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Rashida Akther. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Engineered with Next.js & TypeScript</span>
            <span className="text-teal-400">•</span>
            <span>Moulvibazar, BD</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;