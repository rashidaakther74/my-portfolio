"use client";

import { useState } from "react";
import { FaPlay, FaCheck, FaCopy } from "react-icons/fa";
import { HiOutlineCommandLine, HiSparkles } from "react-icons/hi2";

export default function ApiPlayground() {
    const [loading, setLoading] = useState(false);
    const [executed, setExecuted] = useState(false);
    const [copied, setCopied] = useState(false);

    const mockResponse = {
        status: 200,
        success: true,
        message: "Hire request received! 🚀",
        data: {
            candidate: "Rashida Akther",
            role: "Full-Stack Software Engineer",
            core_stack: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
            ready_to_interview: true,
            contact: {
                email: "rashida.akther.dev@gmail.com",
                github: "https://github.com",
                status: "Open to Remote & Global Relocation"
            }
        },
        latency: "28ms"
    };

    const handleExecute = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setExecuted(true);
        }, 400);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(mockResponse, null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative mt-16 pt-16 border-t border-zinc-900/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="text-center max-w-xl mx-auto mb-10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 bg-teal-950/40 border border-teal-500/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                        <HiSparkles className="text-xs" /> Interactive API Sandbox
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
                        Test the Candidate API
                    </h2>
                    <p className="text-zinc-400 text-xs sm:text-sm">
                        Trigger a live simulated POST request to fetch my candidate profile and availability payload.
                    </p>
                </div>

                {/* API Playground Card */}
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-2xl overflow-hidden backdrop-blur-md">

                    {/* Endpoint Bar */}
                    <div className="p-3 sm:p-4 bg-zinc-900/60 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-xs font-mono">
                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                                POST
                            </span>
                            <span className="text-zinc-400 hidden sm:inline">https://rashida.dev</span>
                            <span className="text-zinc-200">/api/v1/hire-candidate</span>
                        </div>

                        <button
                            onClick={handleExecute}
                            disabled={loading}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 active:scale-95 text-zinc-950 font-bold text-xs transition-all shadow-md shadow-teal-500/20 disabled:opacity-50"
                        >
                            <FaPlay className={`text-[10px] ${loading ? "animate-spin" : ""}`} />
                            <span>{loading ? "Sending..." : "Send Request"}</span>
                        </button>
                    </div>

                    {/* Response Window */}
                    <div className="p-4 sm:p-6 font-mono text-xs relative">
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-900 text-zinc-500 text-[11px]">
                            <span className="flex items-center gap-1.5">
                                <HiOutlineCommandLine className="text-sm text-teal-400" />
                                Response Payload (JSON)
                            </span>
                            {executed && (
                                <div className="flex items-center gap-3">
                                    <span className="text-emerald-400 font-bold">200 OK • 28ms</span>
                                    <button
                                        onClick={handleCopy}
                                        className="hover:text-zinc-300 transition-colors flex items-center gap-1"
                                        title="Copy JSON"
                                    >
                                        {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                                        <span>{copied ? "Copied" : "Copy"}</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Output Box */}
                        <div className="bg-[#050811] rounded-xl p-4 border border-zinc-900 min-h-[180px] overflow-x-auto text-zinc-300 leading-relaxed">
                            {executed ? (
                                <pre className="text-emerald-300 text-[11px] sm:text-xs">
                                    {JSON.stringify(mockResponse, null, 2)}
                                </pre>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center py-8 text-zinc-600">
                                    <p className="text-xs font-sans mb-2 text-zinc-500">
                                        Click <span className="text-teal-400 font-semibold">"Send Request"</span> to test the endpoint live.
                                    </p>
                                    <p className="text-[11px] text-zinc-700">Payload will render here in real-time JSON format.</p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}