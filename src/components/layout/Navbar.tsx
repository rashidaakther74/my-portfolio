"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiUser,
  FiCpu,
  FiCode,
  FiLayers,
  FiMail,
  FiMenu,
  FiX,
  FiSend
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", name: "Home", icon: FiHome },
    { path: "/about", name: "About", icon: FiUser },
    { path: "/services", name: "Services", icon: FiCpu },
    { path: "/skills", name: "Skills", icon: FiCode },
    { path: "/projects", name: "Projects", icon: FiLayers },
    { path: "/contact", name: "Contact", icon: FiMail },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Brand Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 focus:outline-none"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">
                <div className="relative w-full h-full rounded-[11px] bg-slate-950 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/assets/rashi.png"
                    alt="Rashida Logo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="36px"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors font-mono">
                  Rashida<span className="text-emerald-400">.dev</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase -mt-1">
                  Full-Stack Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 p-1 rounded-full border border-slate-800/80 bg-slate-900/40 backdrop-blur-md">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${isActive
                        ? "text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 shadow-sm shadow-emerald-500/10"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                      }`}
                  >
                    <Icon className={`text-sm ${isActive ? "text-emerald-400" : "text-slate-400"}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs tracking-wide transition-all duration-200 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Let's Talk</span>
                <FiSend className="text-xs" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors focus:outline-none"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Animated Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-2xl px-4 pt-3 pb-6 flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={toggleMenu}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                      ? "text-emerald-300 bg-emerald-500/15 border border-emerald-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                    }`}
                >
                  <Icon className={`text-base ${isActive ? "text-emerald-400" : "text-slate-400"}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-emerald-500/20"
              >
                <span>Let's Talk</span>
                <FiSend className="text-xs" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;