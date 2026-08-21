"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error Boundary caught:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#0B0C10] flex flex-col items-center justify-center text-white px-6 text-center relative overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center text-red-400 mb-6 border border-red-500/20">
          <AlertTriangle size={32} />
        </div>

        <span className="text-red-400 font-serif tracking-[0.3em] uppercase text-xs mb-3">
          Temporary Interruption
        </span>
        <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-white">
          Something went wrong
        </h1>
        <p className="text-gray-400 text-sm font-light mb-8 leading-relaxed">
          We encountered an unexpected issue while loading this view. You can retry loading or return to the main dashboard.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => reset()}
            className="px-8 py-3.5 bg-emerald-aqua text-gray-900 font-semibold text-xs tracking-widest uppercase rounded-full hover:bg-emerald-aqua/80 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-aqua/10"
          >
            <RefreshCw size={16} /> Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-3.5 border border-white/20 text-white font-medium text-xs tracking-widest uppercase rounded-full hover:border-emerald-aqua hover:text-emerald-aqua transition-all flex items-center justify-center gap-2"
          >
            <Home size={16} /> Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
