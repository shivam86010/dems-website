import React, { useState } from "react";

interface AuditLog {
  timestamp: string;
  action: string;
  node: string;
  status: "verified" | "secured" | "purged";
}

export default function CourtroomReadyExports() {
  const [activeTab, setActiveTab] = useState<"pdf" | "signatures" | "custody">(
    "pdf",
  );

  const liveLogs: AuditLog[] = [
    {
      timestamp: "14:23:02 UTC",
      action: "Cryptographic Wrap",
      node: "NODE_ALPHA_01",
      status: "verified",
    },
    {
      timestamp: "14:23:05 UTC",
      action: "Asymmetric Handshake",
      node: "AUTH_PROT_v4",
      status: "secured",
    },
    {
      timestamp: "14:24:11 UTC",
      action: "NIST Wiping Sequence",
      node: "DISP_HUB_EAST",
      status: "purged",
    },
  ];

  return (
    <section className="py-24 bg-[#07060f] text-slate-100 relative overflow-hidden font-sans">
      {/* Background Matrix & Tech Blueprint Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-[radial-gradient(#4edea3_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#4edea3]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-[32px] relative z-10">
        {/* ================= UPPER ROW: COMPACT HEADER BLOCK ================= */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            FRE_COMPLIANT_PROTOCOL_702
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Courtroom-Ready Exports
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
            Transform complex structural metadata pipelines into simplified,
            legally admissible brief packages. Every exported ledger artifact
            includes an embedded cryptographic verification fingerprint.
          </p>
        </div>

        {/* ================= CENTRAL ROW: LAYERED COMPOSITE ENGINE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT INTERACTIVE PANEL: NAVIGATION CONTROLS & CONTENT DESCRIPTION */}
          <div className="lg:col-span-4 space-y-4">
            <div
              onClick={() => setActiveTab("pdf")}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                activeTab === "pdf"
                  ? "bg-[#121124] border-indigo-500/40 shadow-[0_4px_20px_rgba(99,102,241,0.1)]"
                  : "bg-[#0d0c16]/60 border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`material-symbols-outlined text-lg ${activeTab === "pdf" ? "text-indigo-400" : "text-slate-500"}`}
                >
                  picture_as_pdf
                </span>
                <h3 className="text-sm font-bold tracking-wide">
                  One-Click Portability Engine
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Generate high-fidelity, indexed PDF and XLSX matrices with
                complete ledger histories ready for evidence submission.
              </p>
            </div>

            <div
              onClick={() => setActiveTab("signatures")}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                activeTab === "signatures"
                  ? "bg-[#121124] border-indigo-500/40 shadow-[0_4px_20px_rgba(99,102,241,0.1)]"
                  : "bg-[#0d0c16]/60 border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`material-symbols-outlined text-lg ${activeTab === "signatures" ? "text-indigo-400" : "text-slate-500"}`}
                >
                  fingerprint
                </span>
                <h3 className="text-sm font-bold tracking-wide">
                  Asymmetric Signatures
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Embed permanent, tamper-evident cryptographic keys tied verified
                to author identities and agency root certificates.
              </p>
            </div>

            <div
              onClick={() => setActiveTab("custody")}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                activeTab === "custody"
                  ? "bg-[#121124] border-indigo-500/40 shadow-[0_4px_20px_rgba(99,102,241,0.1)]"
                  : "bg-[#0d0c16]/60 border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`material-symbols-outlined text-lg ${activeTab === "custody" ? "text-indigo-400" : "text-slate-500"}`}
                >
                  account_tree
                </span>
                <h3 className="text-sm font-bold tracking-wide">
                  Custody Visualization Stream
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Maps chain of custody flows into chronological graphical
                matrices directly on the face of the document.
              </p>
            </div>
          </div>

          {/* RIGHT VIEWPORT: THE CENTRALIZED BLUEPRINT BOARD */}
          <div className="lg:col-span-8 bg-[#0e0d1a] border border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden min-h-[480px] flex flex-col justify-between">
            {/* Ambient Background Grid for Blueprint Look */}
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:14px_14px]" />

            {/* Viewport Header */}
            <div className="relative z-10 flex justify-between items-center border-b border-white/5 pb-4 font-mono text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>TERMINAL_OUTPUT // ADMISSIBILITY_VERIFIER</span>
              </div>
              <span className="text-slate-500">
                HASH: D8392-AABB-8839-FF21-002
              </span>
            </div>

            {/* Dynamic Middle Sandbox View */}
            <div className="relative z-10 my-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Sandbox Content: Holo Verification Pass card */}
              <div className="md:col-span-7 bg-[#141324] border border-white/10 rounded-2xl p-6 shadow-xl relative group">
                <div className="absolute top-3 right-3 text-emerald-400 font-mono text-[9px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  LIVE_LEDGER_PASS
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center border border-white/10 text-emerald-400">
                      <span className="material-symbols-outlined text-xl">
                        gavel
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono tracking-wider uppercase text-slate-400">
                        Forensic Audit Report
                      </h4>
                      <span className="text-[10px] font-mono text-slate-500">
                        FORMAT: ISO_27037_COMPLIANT
                      </span>
                    </div>
                  </div>

                  {/* Micro simulated text blocks */}
                  <div className="space-y-2 opacity-80 pt-2">
                    <div className="h-2 bg-white/5 w-11/12 rounded" />
                    <div className="h-2 bg-white/5 w-full rounded" />
                    <div className="h-2 bg-white/5 w-2/3 rounded" />
                  </div>

                  {/* Horizontal Connector Element for Tab values */}
                  <div className="border-t border-white/5 pt-3 mt-4 flex items-center justify-between font-mono text-[10px]">
                    <span className="text-indigo-400 font-bold">
                      TYPE: {activeTab.toUpperCase()}_EXP
                    </span>
                    <span className="text-slate-500">VERIFICATION: SECURE</span>
                  </div>
                </div>
              </div>

              {/* Right Sandbox Content: Holographic QR Anchor node */}
              <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-4 bg-gradient-to-b from-[#16152a] to-transparent border border-white/5 rounded-2xl">
                <div className="p-3 bg-white rounded-xl shadow-2xl relative mb-3 group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-slate-950 text-5xl font-light block">
                    qr_code_2
                  </span>
                  {/* Digital Tech Scan Line effect */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-indigo-500 shadow-[0_0_10px_#6366f1] animate-bounce" />
                </div>
                <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                  Dynamic Seal
                </span>
                <p className="text-[9px] font-mono text-slate-500 max-w-[150px] mx-auto leading-tight">
                  Scan to reference historical ledger nodes instantly.
                </p>
              </div>
            </div>

            {/* Viewport Bottom Live System Logs Stream */}
            <div className="relative z-10 bg-slate-950/80 rounded-xl border border-white/5 p-4 font-mono text-[11px]">
              <div className="text-slate-500 uppercase font-bold text-[9px] tracking-wider mb-2 flex justify-between">
                <span>SYSTEM_STREAM_MONITOR</span>
                <span className="text-indigo-400">STATE: IDLE</span>
              </div>
              <div className="space-y-1.5">
                {liveLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-slate-400"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600">[{log.timestamp}]</span>
                      <span className="text-slate-300">{log.action}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600">{log.node}</span>
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          log.status === "verified"
                            ? "bg-emerald-400"
                            : log.status === "secured"
                              ? "bg-indigo-400"
                              : "bg-rose-400"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
