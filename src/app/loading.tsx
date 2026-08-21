export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0B0C10] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-72 h-72 bg-emerald-aqua/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />
          <div className="absolute inset-0 rounded-full border-2 border-emerald-aqua border-t-transparent animate-spin" />
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-white font-serif tracking-[0.3em] uppercase text-xs">
            Godrej Park World
          </span>
          <span className="text-gray-500 font-light text-[11px] tracking-widest uppercase">
            The Aqua Retreat
          </span>
        </div>
      </div>
    </div>
  );
}
