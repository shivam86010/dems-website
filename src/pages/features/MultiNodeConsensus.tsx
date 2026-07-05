import React from "react";

export default function MultiNodeConsensus() {
  const nodeLogs = [
    {
      target: "NODE_US_EAST_01",
      region: "VA, USA",
      hash: "8fA12..FF90",
      status: "CONFIRMED",
    },
    {
      target: "NODE_EU_CENT_02",
      region: "FRA, DE",
      hash: "4bE88..A102",
      status: "CONFIRMED",
    },
    {
      target: "NODE_AP_SE_04",
      region: "SGP",
      hash: "9c771..BC44",
      status: "VOTING",
    },
  ];

  return (
    <section className="py-24 bg-[#08070d] text-white relative overflow-hidden font-sans border-t border-white/5">
      {/* Structural Decorative Radial Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-950/20 via-[#08070d] to-[#08070d] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT SIDE: DECENTRALIZED NODE TRACKER VISUAL ================= */}
          <div className="relative bg-[#11101a] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-between group">
            {/* Background Grid Pattern inside viewport */}
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:16px_16px]" />

            {/* Panel Header */}
            <div className="relative z-10 flex justify-between items-center border-b border-white/5 pb-4">
              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
                <span>CONSENSUS_CLUSTER // ACTIVE_VALIDATORS</span>
              </div>
              <span className="font-mono text-[10px] text-slate-600">
                CLUSTER_SIZE: 1,240+
              </span>
            </div>

            {/* Central Stream Content Stack */}
            <div className="relative z-10 my-6 space-y-3">
              {nodeLogs.map((log, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/60 border border-white/5 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:border-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#4edea3]/10 border border-[#4edea3]/20 flex items-center justify-center text-[#4edea3]">
                      <span className="material-symbols-outlined text-base">
                        dns
                      </span>
                    </div>
                    <div>
                      <div className="font-mono text-xs font-bold text-white">
                        {log.target}
                      </div>
                      <div className="font-mono text-[10px] text-slate-500">
                        {log.region} •{" "}
                        <span className="text-slate-400">{log.hash}</span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-bold border ${
                      log.status === "CONFIRMED"
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                        : "bg-indigo-500/10 border-indigo-500/20 text-indigo-400 animate-pulse"
                    }`}
                  >
                    {log.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Panel Footer */}
            <div className="relative z-10 pt-4 border-t border-white/5 font-mono text-[10px] text-slate-500 flex justify-between items-center">
              <span className="text-[#4edea3]">
                PROTOCOL: BYZANTINE_FAULT_TOLERANT
              </span>
              <span>EPOCH_CONFIRMED</span>
            </div>

            {/* Ambient Background Glow behind Card */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#4edea3]/5 blur-3xl rounded-full pointer-events-none" />
          </div>

          {/* ================= RIGHT SIDE: DESCRIPTION AND STATS GRID ================= */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4edea3] bg-[#4edea3]/10 border border-[#4edea3]/20 px-3 py-1 rounded-full">
                Immutable Ledger Cryptography
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                Multi-Node Consensus Verification
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                Every cryptographic forensic event generated is simultaneously
                calculated and cross-verified across a heavily segmented global
                network of 1,240+ processing nodes. This prevents malicious
                modification, rendering any unsanctioned timeline alterations
                mathematically impossible.
              </p>
            </div>

            <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />

            {/* Metrics Configuration Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#12111d] rounded-2xl border border-emerald-500/20 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 blur-xl rounded-full" />
                <div className="text-2xl font-black font-mono tracking-tight text-emerald-400 mb-1">
                  99.999%
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                  Consensus Agreement Rate
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Fault-tolerant execution across all active networks.
                </p>
              </div>

              <div className="p-5 bg-[#12111d] rounded-2xl border border-white/5 relative group overflow-hidden">
                <div className="text-2xl font-black font-mono tracking-tight text-indigo-400 mb-1">
                  SHA-512
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                  Validation Hash Standard
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  High-order hashing integrity architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
