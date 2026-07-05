import React from "react";

interface LifeCycleStep {
  id: string;
  phase: string;
  title: string;
  badge?: {
    text: string;
    variant: "issue" | "success" | "info";
  };
  description?: string;
  icon: string;
}

export default function AbsoluteLifeCycleDashboard() {
  return (
    <section className="min-h-screen bg-[#0b0a1a] bg-radial-gradient from-[#12102e] to-[#0b0a1a] text-white py-16 px-4 md:px-8 font-sans overflow-x-hidden relative">
      {/* Background Subtle Plexus Pattern Simulation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen bg-[linear-gradient(to_right,#1f1d45_1px,transparent_1px),linear-gradient(to_bottom,#1f1d45_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Top Header Navigation Mock */}
        <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-400 font-bold text-2xl">
              shield_heart
            </span>
            <span className="font-mono text-xs tracking-wider text-slate-400">
              SECURE_NODE_v4.2
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#1d2942] border border-indigo-500/30 text-indigo-300 text-xs font-medium px-4 py-1.5 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-[#253556] transition-colors">
              <span>Genitratler</span>
              <span className="material-symbols-outlined text-xs">
                keyboard_arrow_down
              </span>
            </div>
            <div className="relative cursor-pointer">
              <span className="material-symbols-outlined text-slate-400 hover:text-white transition-colors">
                notifications
              </span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Core Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            The Absolute Life-Cycle
          </h2>
        </div>

        {/* Dashboard Dynamic Grid Layout matching image strictly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative">
          {/* ================= COLUMN 1: INGESTION ================= */}
          <div className="bg-[#131224]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between shadow-2xl relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-rose-500/50 to-transparent" />

            {/* Visual Abstract Panel Container */}
            <div className="h-64 rounded-xl bg-gradient-to-b from-[#181732] to-[#0e0d1d] border border-white/5 relative flex items-center justify-center p-4 overflow-hidden mb-6">
              {/* Mock Cyberspace Pipeline */}
              <div className="absolute inset-4 border border-dashed border-indigo-500/20 rounded-lg flex flex-col justify-around p-4 font-mono text-[10px] text-rose-400/70">
                <div className="border border-rose-500/30 p-2 bg-rose-950/20 rounded backdrop-blur">
                  <div className="flex justify-between font-bold text-rose-400 mb-1">
                    <span>BIT_CONSISTENCY</span>
                    <span className="animate-pulse">⚠️ ATTN</span>
                  </div>
                  ANOMALY_DETECTED
                </div>
                <div className="w-full flex justify-center py-2">
                  <div className="w-12 h-12 rounded-lg border border-indigo-500/40 flex items-center justify-center bg-indigo-950/40 animate-bounce">
                    <span className="material-symbols-outlined text-indigo-400">
                      key_visualizer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content metadata */}
            <div className="bg-[#1a1931] border border-white/5 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold tracking-widest uppercase">
                  <span className="material-symbols-outlined text-sm">
                    cloud_upload
                  </span>
                  Ingestion
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-rose-500 animate-ping" />{" "}
                  Issue
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Secure Handshake
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Encrypted transmission protocols authenticate chain of custody
                immediately upon digital evidence intake.
              </p>
            </div>
          </div>

          {/* ================= COLUMN 2: PROCESSING ================= */}
          <div className="bg-[#131224]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between shadow-2xl relative group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500/50 to-transparent" />

            {/* Visual Micro-processor Structure */}
            <div className="h-64 rounded-xl bg-[#0e0d1d] border border-white/5 relative flex flex-col justify-between p-4 overflow-hidden mb-6">
              <div className="flex justify-between items-center font-mono text-[10px] text-indigo-300">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">
                    memory
                  </span>{" "}
                  PROCESSING
                </span>
                <span className="bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded border border-rose-500/30">
                  Issue
                </span>
              </div>
              {/* Matrix Chip Pattern */}
              <div className="my-auto grid grid-cols-4 gap-2 opacity-60">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-6 bg-indigo-950 border border-indigo-500/20 rounded flex items-center justify-center font-mono text-[9px] text-indigo-400"
                  >
                    0x{i}F
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-mono text-slate-500 leading-tight">
                Cryptapta transmission-hub and cryptographics mophic SHA-256
                signatures.
              </p>
            </div>

            {/* Core Card Info Block */}
            <div className="bg-[#1a1931] border border-white/5 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold tracking-widest uppercase">
                  <span className="material-symbols-outlined text-sm">
                    developer_board
                  </span>
                  Processing
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                  Success
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Cryptophpic processor
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Define the processor hub inline logic SHA-256 signatures within
                secure isolated data nodes.
              </p>
            </div>
          </div>

          {/* ================= COLUMN 3: REVIEW & SPLIT ================= */}
          <div className="flex flex-col gap-6 justify-between">
            {/* Top Sub-Card: Review Stage */}
            <div className="bg-[#131224]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between flex-1 shadow-2xl relative">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    visibility
                  </span>{" "}
                  Review
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  Data Verified
                </span>
              </div>
              {/* Team Review Mock Image/Visual Frame */}
              <div className="h-28 rounded-xl bg-slate-950 border border-white/5 relative overflow-hidden flex items-center justify-center p-2 mb-3">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/40 via-transparent to-transparent z-10" />
                <div className="text-center z-20">
                  <div className="flex gap-1 justify-center mb-1">
                    <span className="w-5 h-5 rounded-full bg-indigo-500 border border-white/20 text-[9px] flex items-center justify-center">
                      U1
                    </span>
                    <span className="w-5 h-5 rounded-full bg-emerald-500 border border-white/20 text-[9px] flex items-center justify-center">
                      U2
                    </span>
                    <span className="w-5 h-5 rounded-full bg-purple-500 border border-white/20 text-[9px] flex items-center justify-center">
                      U3
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-slate-500">
                    Multi-Party Audit Room Live
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Sub-Card: Admissibility */}
            <div className="bg-[#131224]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between flex-1 shadow-2xl relative">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    gavel
                  </span>{" "}
                  Admissibility
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ● Gov.el
                </span>
              </div>
              {/* Document Certificate Frame */}
              <div className="h-28 rounded-xl bg-gradient-to-b from-[#1b223c] to-[#0e0d1d] border border-white/5 relative p-3 flex flex-col justify-between">
                <div className="border border-indigo-400/20 p-2 rounded bg-slate-900/40">
                  <div className="w-full h-1 bg-indigo-400/40 rounded mb-1" />
                  <div className="w-3/4 h-1 bg-indigo-400/20 rounded" />
                </div>
                <div className="flex justify-between items-center text-[9px] font-mono text-indigo-300">
                  <span>LEGAL_COMPLIANCE</span>
                  <span className="material-symbols-outlined text-xs text-emerald-400">
                    verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 4: DISPOSAL & PURGE ================= */}
          <div className="bg-[#131224]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col justify-between shadow-2xl relative group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500/50 to-transparent" />

            <div className="flex flex-col gap-4">
              {/* Admissibility Header Block */}
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-bold">
                  Admissibility
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Data Validated
                </span>
              </div>

              {/* Court Document / Hammer Visual */}
              <div className="h-32 rounded-xl bg-gradient-to-t from-[#111026] to-[#1a1b3a] border border-white/5 p-4 relative flex flex-col justify-between overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <span className="material-symbols-outlined text-8xl text-white">
                    gavel
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest border border-white/10 px-2 py-1 rounded inline-block bg-white/5 self-start">
                  Legal Compliance Certificate
                </span>
                <div className="w-full bg-white/5 h-[1px] my-2" />
                <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                  <span className="material-symbols-outlined text-sm">
                    gavel
                  </span>
                  <span>Court Room Ready Document</span>
                </div>
              </div>
            </div>

            {/* Disposal Dynamic Micro-Purge Row Action */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="bg-[#16152b] border border-dashed border-white/10 rounded-xl p-3 flex items-center justify-between text-slate-400 hover:text-white transition-colors group cursor-pointer">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-base text-rose-400">
                    delete_sweep
                  </span>
                  Disposal
                </div>
                <span className="material-symbols-outlined text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                  arrow_forward
                </span>
              </div>

              {/* Absolute Purge Particle Frame */}
              <div className="h-28 rounded-xl bg-gradient-to-b from-[#131224] to-black border border-white/5 p-3 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between text-[9px] font-mono text-rose-400/80">
                  <span>SECURE_PURGE_SEQUENCE</span>
                  <span className="animate-pulse">RUNNING</span>
                </div>
                {/* Deconstructed Matrix Block simulation */}
                <div className="flex items-center gap-1 justify-center my-auto opacity-30">
                  <span className="w-2 h-2 bg-rose-500 rounded-sm animate-ping" />
                  <span className="w-2 h-2 bg-indigo-500 rounded-sm" />
                  <span className="w-2 h-2 bg-slate-700 rounded-sm" />
                  <span className="w-2 h-2 bg-rose-500 rounded-sm" />
                </div>
                <span className="text-[9px] text-slate-500 font-mono text-center">
                  NIST-compliant sanitization wipe configured
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Footer System Connectivity Visual Line */}
        <div className="mt-12 flex justify-between items-center text-xs font-mono text-slate-500 border-t border-white/5 pt-6">
          <div>
            DATA_LINK CONNECTION:{" "}
            <span className="text-emerald-400">ONLINE</span>
          </div>
          <div>
            COMPLIANCE CRITERIA:{" "}
            <span className="text-indigo-400">NIST 800-88 R1</span>
          </div>
        </div>
      </div>
    </section>
  );
}
