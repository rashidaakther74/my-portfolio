"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  PhoneCall,
  Globe2,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
  Zap,
  AlertCircle
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const contactCards = [
  {
    title: "Direct Email",
    value: "rashida.codehub@gmail.com",
    href: "mailto:rashida.codehub@gmail.com",
    icon: Mail,
    subText: "Typical reply in 2–4 hours"
  },
  {
    title: "Phone & WhatsApp",
    value: "+880 1870531774",
    href: "tel:+8801870531774",
    icon: PhoneCall,
    subText: "Direct call & audio sync"
  },
  {
    title: "Headquarters",
    value: "Moulvibazar, Bangladesh",
    href: "#",
    icon: MapPin,
    subText: "Open to Remote Worldwide"
  },
  {
    title: "Working Model",
    value: "Timezone Agnostic",
    href: "#",
    icon: Globe2,
    subText: "Aligned with US, EU & Global hours"
  },
];

const serviceOptions = [
  "Full-Stack Web App",
  "REST API & Microservices",
  "Database & Prisma Architecture",
  "Next.js 15 SSR Frontend",
  "Redis Cache Optimization",
  "Technical Consultation"
];

const engagementOptions = [
  "Full-Time Role (Remote)",
  "Long-Term Contract",
  "MVP / Complete Product Build",
  "Technical Audit & Consultation",
  "Discuss Scope First"
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    engagement: "",
    message: ""
  });

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // Send real email via Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          // REPLACE WITH YOUR FREE KEY FROM web3forms.com:
          access_key: "409300c6-d815-4d7a-ba1e-c9ab27bc8fad",
          subject: `Portfolio Inquiry from ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          engagement_nature: formData.engagement || "Not specified",
          selected_services: selectedServices.length > 0 ? selectedServices.join(", ") : "None chosen",
          message: formData.message,
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          engagement: "",
          message: ""
        });
        setSelectedServices([]);
      } else {
        setErrorMsg(result.message || "Failed to send message. Please try again or email directly.");
      }
    } catch {
      setErrorMsg("Network error occurred. Please verify your connection or email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#070b14] text-slate-100 pt-24 sm:pt-32 pb-24 overflow-x-hidden selection:bg-teal-500/30 selection:text-teal-300">

      {/* High-Impact Ambient Lights */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-teal-500/10 blur-[180px] pointer-events-none rounded-full" />
      <div className="fixed bottom-10 right-1/4 w-[450px] h-[320px] bg-emerald-500/10 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section with Live Status Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">

          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-lg shadow-emerald-500/10 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Hire & Remote Contracts</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Let's Build Something <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-cyan-300 drop-shadow-sm">
              Impactful Together
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Have a project vision, contract role, or technical challenge? Connect directly—I prioritize fast responses and clear communication.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-16">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <a
                key={idx}
                href={card.href}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 backdrop-blur-md hover:border-teal-400/50 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-teal-500/10"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-300 mb-4 group-hover:scale-110 group-hover:bg-teal-400 group-hover:text-slate-950 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-teal-400/80 mb-1 font-semibold">
                  {card.title}
                </h3>
                <p className="text-sm font-bold text-white group-hover:text-teal-200 transition-colors truncate">
                  {card.value}
                </p>
                <span className="text-[11px] text-slate-400 font-mono mt-2 block">
                  {card.subText}
                </span>
              </a>
            );
          })}
        </div>

        {/* Standout Contact Form Console */}
        <div className="relative max-w-3xl mx-auto group">

          {/* Neon Border Glow Behind Form */}
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-teal-500/30 via-emerald-500/30 to-cyan-500/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Form Card Container */}
          <div className="relative rounded-3xl border border-slate-700/80 bg-slate-950/90 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">

            <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">Direct Message Console</h2>
                  <p className="text-xs text-teal-300 font-mono flex items-center gap-1.5 mt-0.5">
                    <Zap className="w-3.5 h-3.5 fill-teal-300" /> Direct dispatch to rashida.codehub@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="py-14 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Message Delivered!</h3>
                <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
                  Thank you for reaching out! Your message was sent directly to my inbox, and I will reply as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl border border-teal-500/40 bg-teal-950/50 hover:bg-teal-900/60 text-teal-300 text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-md active:scale-95"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {errorMsg && (
                  <div className="flex items-center gap-2 p-3.5 rounded-xl border border-rose-500/40 bg-rose-950/40 text-rose-300 text-xs font-mono">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-teal-300 font-semibold uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alexander Vance"
                      className="w-full rounded-xl bg-slate-900/90 border border-slate-700/80 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all font-mono shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-teal-300 font-semibold uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@enterprise.com"
                      className="w-full rounded-xl bg-slate-900/90 border border-slate-700/80 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all font-mono shadow-inner"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Engagement Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 18..."
                      className="w-full rounded-xl bg-slate-900/90 border border-slate-700/80 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all font-mono shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Engagement Nature
                    </label>
                    <select
                      name="engagement"
                      value={formData.engagement}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-slate-900/90 border border-slate-700/80 px-4 py-3.5 text-sm text-white outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all font-mono cursor-pointer shadow-inner"
                    >
                      <option value="" className="bg-slate-950 text-slate-400">Select Nature of Work</option>
                      {engagementOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-slate-950 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Requirement Chips */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-3">
                    Select Scope / Requirements (Optional)
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {serviceOptions.map((svc, idx) => {
                      const isSelected = selectedServices.includes(svc);
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => toggleService(svc)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all border ${isSelected
                              ? "bg-teal-400 text-slate-950 border-teal-300 shadow-md shadow-teal-500/20 font-bold scale-105"
                              : "bg-slate-900/80 text-slate-300 border-slate-700/70 hover:text-white hover:border-slate-500"
                            }`}
                        >
                          {svc}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Brief */}
                <div>
                  <label className="block text-xs font-mono text-teal-300 font-semibold uppercase tracking-wider mb-2">
                    Project Brief or Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your goals, requirements, timeline, or position details..."
                    className="w-full rounded-xl bg-slate-900/90 border border-slate-700/80 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all font-mono leading-relaxed shadow-inner"
                  />
                </div>

                {/* Action CTA & Direct Channels */}
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-slate-800">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-teal-500/25 active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    <Send className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                    <span>{loading ? "Transmitting..." : "Send Message"}</span>
                  </button>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="font-semibold text-slate-300">Quick Profiles:</span>
                    <a
                      href="https://github.com/rashidaakther74"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/80 hover:border-teal-400 text-slate-200 hover:text-teal-300 transition-all"
                    >
                      <FaGithub size={14} />
                      <span className="text-[11px]">GitHub</span>
                      <ArrowUpRight size={12} className="text-slate-500" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rashida-akther-2014503a2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/80 hover:border-teal-400 text-slate-200 hover:text-teal-300 transition-all"
                    >
                      <FaLinkedinIn size={14} />
                      <span className="text-[11px]">LinkedIn</span>
                      <ArrowUpRight size={12} className="text-slate-500" />
                    </a>
                  </div>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </main>
  );
}