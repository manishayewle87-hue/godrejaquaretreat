"use client";

import { Home, LayoutGrid, MessageCircle, PhoneCall } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileTabBar() {
  const pathname = usePathname();

  // Hide the tab bar if we are on a specific route where we don't want it, though typically we want it everywhere.
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-black/80 backdrop-blur-xl border-t border-white/10 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center px-6 py-3">
        
        <Link href="/" className="flex flex-col items-center gap-1 text-gray-400 hover:text-emerald-aqua transition-colors w-16">
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Home</span>
        </Link>
        
        <Link href="/#residences" className="flex flex-col items-center gap-1 text-gray-400 hover:text-emerald-aqua transition-colors w-16">
          <LayoutGrid className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">Plans</span>
        </Link>
        
        <a href="https://wa.me/917744009295?text=Hi%2C%20I%20am%20interested%20in%20Godrej%20The%20Retreat%20Hinjewadi.%20Please%20share%20the%20brochure%2C%20floor%20plans%2C%20and%20price%20list." 
           target="_blank" 
           rel="noopener noreferrer" 
           className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#25D366] transition-colors w-16"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366]" />
          <span className="text-[10px] font-semibold tracking-wider uppercase text-[#25D366]">Chat</span>
        </a>
        
        <a href="tel:+917744009295" className="flex flex-col items-center gap-1 text-emerald-aqua hover:text-white transition-colors w-16">
          <div className="bg-emerald-aqua/20 p-1.5 rounded-full border border-emerald-aqua/30">
            <PhoneCall className="w-4 h-4 text-emerald-aqua" />
          </div>
          <span className="text-[10px] font-semibold tracking-wider uppercase mt-0.5">Call</span>
        </a>
        
      </div>
    </div>
  );
}
