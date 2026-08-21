import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0B0C10] flex flex-col items-center justify-center text-white px-6 text-center relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-aqua/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        <span className="text-emerald-aqua font-serif tracking-[0.3em] uppercase text-sm mb-4">
          Error 404
        </span>
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-6 text-white">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-base font-light mb-10 leading-relaxed">
          The residence or page you are looking for might have been moved, renamed, or is currently exclusive to another sector of Godrej Park World.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className="px-8 py-3.5 bg-emerald-aqua text-gray-900 font-semibold text-xs tracking-widest uppercase rounded-full hover:bg-emerald-aqua/80 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-aqua/10"
          >
            <Home size={16} /> Return Home
          </Link>
          <Link
            href="/godrej-park-world-pune-masterplan"
            className="px-8 py-3.5 border border-white/20 text-white font-medium text-xs tracking-widest uppercase rounded-full hover:border-emerald-aqua hover:text-emerald-aqua transition-all flex items-center justify-center gap-2"
          >
            <Compass size={16} /> Master Plan
          </Link>
        </div>
      </div>
    </main>
  );
}
