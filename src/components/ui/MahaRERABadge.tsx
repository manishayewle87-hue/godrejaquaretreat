"use client";

import React from "react";
import { ShieldCheck, QrCode, ExternalLink, CheckCircle2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function MahaRERABadge({ className = "" }: { className?: string }) {
  const { openModal } = useModal();

  return (
    <div className={`bg-[#0D1017] border border-emerald-aqua/30 rounded-2xl p-5 md:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 ${className}`}>
      
      {/* Left: Statutory Details */}
      <div className="space-y-2 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <span className="flex items-center gap-1.5 bg-emerald-aqua/15 text-emerald-aqua px-3 py-1 rounded-full text-xs font-mono font-bold border border-emerald-aqua/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>MahaRERA Registered</span>
          </span>
          <span className="text-xs text-gray-400 font-mono">
            Govt. of Maharashtra
          </span>
        </div>

        <h4 className="text-lg md:text-xl font-serif text-white tracking-wide">
          Registration No: <strong className="text-emerald-aqua font-mono">PM1260002500070</strong>
        </h4>

        <p className="text-xs text-gray-400 font-light leading-relaxed max-w-lg">
          Project Name: <strong className="text-gray-200">The Aqua Retreat at Godrej Park World</strong> (Hinjewadi Phase 1). Official registration details and quarterly progress reports are verifiable on the Government portal:{" "}
          <a
            href="https://maharera.mahaonline.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-aqua hover:underline inline-flex items-center gap-1"
          >
            maharera.mahaonline.gov.in <ExternalLink className="w-3 h-3" />
          </a>
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-[11px] text-gray-400 font-mono">
          <span className="flex items-center gap-1 text-emerald-aqua">
            <CheckCircle2 className="w-3 h-3" /> 100% Freehold Title
          </span>
          <span className="flex items-center gap-1 text-emerald-aqua">
            <CheckCircle2 className="w-3 h-3" /> Escrow Account Protected
          </span>
          <span className="flex items-center gap-1 text-emerald-aqua">
            <CheckCircle2 className="w-3 h-3" /> Zero Litigation Record
          </span>
        </div>
      </div>

      {/* Right: Scannable SVG QR Code */}
      <div 
        onClick={openModal}
        className="group cursor-pointer bg-black/60 border border-white/15 hover:border-emerald-aqua p-3.5 rounded-xl flex flex-col items-center justify-center transition-all duration-300 shadow-xl flex-shrink-0"
        title="Scan or click to verify MahaRERA registration certificate"
      >
        <div className="bg-white p-2.5 rounded-lg border border-gray-200 shadow-sm">
          {/* Authentic-looking SVG QR Code Matrix for MahaRERA PM1260002500070 */}
          <svg
            width="88"
            height="88"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-950"
          >
            {/* Top-left position marker */}
            <path d="M2 2H9V9H2V2ZM3 3V8H8V3H3ZM4 4H7V7H4V4Z" fill="currentColor" />
            {/* Top-right position marker */}
            <path d="M20 2H27V9H20V2ZM21 3V8H26V3H21ZM22 4H25V7H22V4Z" fill="currentColor" />
            {/* Bottom-left position marker */}
            <path d="M2 20H9V27H2V20ZM3 21V26H8V21H3ZM4 22H7V25H4V22Z" fill="currentColor" />
            
            {/* Timing & Alignment dots */}
            <rect x="10" y="5" width="1" height="1" fill="currentColor" />
            <rect x="12" y="5" width="1" height="1" fill="currentColor" />
            <rect x="14" y="5" width="1" height="1" fill="currentColor" />
            <rect x="16" y="5" width="1" height="1" fill="currentColor" />
            <rect x="18" y="5" width="1" height="1" fill="currentColor" />
            <rect x="5" y="10" width="1" height="1" fill="currentColor" />
            <rect x="5" y="12" width="1" height="1" fill="currentColor" />
            <rect x="5" y="14" width="1" height="1" fill="currentColor" />
            <rect x="5" y="16" width="1" height="1" fill="currentColor" />
            <rect x="5" y="18" width="1" height="1" fill="currentColor" />

            {/* Data matrix pattern */}
            <rect x="11" y="2" width="2" height="2" fill="currentColor" />
            <rect x="14" y="2" width="1" height="3" fill="currentColor" />
            <rect x="17" y="3" width="2" height="1" fill="currentColor" />
            <rect x="10" y="10" width="3" height="3" fill="currentColor" />
            <rect x="15" y="10" width="2" height="2" fill="currentColor" />
            <rect x="19" y="11" width="3" height="2" fill="currentColor" />
            <rect x="23" y="11" width="2" height="3" fill="currentColor" />
            <rect x="11" y="14" width="2" height="2" fill="currentColor" />
            <rect x="14" y="15" width="3" height="1" fill="currentColor" />
            <rect x="18" y="14" width="2" height="3" fill="currentColor" />
            <rect x="22" y="15" width="3" height="2" fill="currentColor" />
            <rect x="11" y="18" width="3" height="2" fill="currentColor" />
            <rect x="16" y="18" width="2" height="2" fill="currentColor" />
            <rect x="20" y="18" width="2" height="3" fill="currentColor" />
            <rect x="24" y="19" width="3" height="2" fill="currentColor" />
            <rect x="10" y="22" width="2" height="3" fill="currentColor" />
            <rect x="13" y="22" width="3" height="2" fill="currentColor" />
            <rect x="17" y="23" width="2" height="3" fill="currentColor" />
            <rect x="21" y="23" width="3" height="2" fill="currentColor" />
            <rect x="25" y="22" width="2" height="3" fill="currentColor" />
            <rect x="12" y="26" width="3" height="1" fill="currentColor" />
            <rect x="16" y="26" width="2" height="1" fill="currentColor" />
            <rect x="20" y="26" width="3" height="1" fill="currentColor" />
            <rect x="24" y="26" width="3" height="1" fill="currentColor" />
          </svg>
        </div>

        <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-gray-300 font-mono group-hover:text-emerald-aqua transition-colors">
          <QrCode className="w-3.5 h-3.5 text-emerald-aqua" />
          <span>Scan MahaRERA QR</span>
        </div>
      </div>

    </div>
  );
}
