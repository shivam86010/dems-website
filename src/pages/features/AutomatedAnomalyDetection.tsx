import React, { useState } from "react";

export default function AutomatedAnomalyDetection() {
  const [activeAnomaly, setActiveAnomaly] = useState<"SIG_04" | "SIG_07">(
    "SIG_04",
  );

  const anomalyLogs = {
    SIG_04: {
      id: "ERR_TEMPORAL_DELTA_04",
      timestamp: "1715523914",
      deviation: "+4.22ms Drift",
      riskFactor: "CRITICAL (94%)",
      vector: "BLOCK_CHAIN_MUTATION",
    },
    SIG_07: {
      id: "ERR_HASH_MISMATCH_07",
      timestamp: "1715524102",
      deviation: "Invalid Hash Signature",
      riskFactor: "HIGH (81%)",
      vector: "METADATA_INJECT_ATTEMPT",
    },
  };

  return (
    <section className="py-24 bg-[#07060b] text-white relative overflow-hidden font-sans border-y border-white/5">
      {/* Background Micro Tech Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ================= LEFT SIDE: DEEPLY DETAILED VECTOR GRID & CMD SCREEN (Takes 7 cols) ================= */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4 bg-[#11101a] border border-white/10 rounded-3xl p-4 shadow-2xl relative overflow-hidden">
            {/* Live Threat Outlier Visualization Panel (7 Columns) */}
            <div className="sm:col-span-7 bg-slate-950/60 border border-white/5 rounded-2xl p-4 min-h-[280px] flex flex-col justify-between relative group">
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:14px_14px]" />

              <div className="relative z-10 font-mono text-[10px] text-slate-500 uppercase tracking-widest flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AI Vector Array Scanner
                </span>
                <span>GRID: 40-X</span>
              </div>

              {/* Dynamic Coordinate Points Visualizer */}
              <div className="relative z-10 my-auto flex justify-center gap-6 py-6">
                <button
                  onClick={() => setActiveAnomaly("SIG_04")}
                  className={`p-3 bg-rose-500/10 border rounded-xl flex flex-col items-center gap-1 transition-all ${activeAnomaly === "SIG_04" ? "border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.2)] scale-105" : "border-white/5 opacity-40"}`}
                >
                  <span className="material-symbols-outlined text-rose-400 text-lg animate-bounce">
                    error
                  </span>
                  <span className="font-mono text-[9px] text-white font-bold">
                    OUTLIER_SIG_04
                  </span>
                </button>

                <button
                  onClick={() => setActiveAnomaly("SIG_07")}
                  className={`p-3 bg-amber-500/10 border rounded-xl flex flex-col items-center gap-1 transition-all ${activeAnomaly === "SIG_07" ? "border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)] scale-105" : "border-white/5 opacity-40"}`}
                >
                  <span className="material-symbols-outlined text-amber-400 text-lg animate-pulse">
                    warning
                  </span>
                  <span className="font-mono text-[9px] text-white font-bold">
                    OUTLIER_SIG_07
                  </span>
                </button>
              </div>

              <div className="relative z-10 text-[10px] font-mono text-slate-500 flex justify-between">
                <span>[ LAYER: FORENSIC_CHAIN ]</span>
                <span className="text-rose-400 font-bold">
                  ANOMALY DETECTED
                </span>
              </div>
            </div>

            {/* CMD Readout Stream Panel (5 Columns) */}
            <div className="sm:col-span-5 bg-slate-950 border border-white/5 rounded-2xl p-4 flex flex-col justify-between font-mono text-[11px] text-slate-400">
              <div className="border-b border-white/5 pb-2 mb-3 flex justify-between text-[9px] text-slate-500">
                <span>$&gt; RISK_ASSESS_SHELL</span>
                <span className="text-rose-400 font-bold">ALERT</span>
              </div>

              <div className="space-y-3 flex-1">
                <div>
                  <span className="text-slate-600">ID:</span>
                  <p className="text-slate-200 font-bold tracking-tight">
                    {anomalyLogs[activeAnomaly].id}
                  </p>
                </div>
                <div>
                  <span className="text-slate-600">DEVIATION METRIC:</span>
                  <p className="text-rose-400 font-medium">
                    {anomalyLogs[activeAnomaly].deviation}
                  </p>
                </div>
                <div>
                  <span className="text-slate-600">THREAT VECTOR:</span>
                  <p className="text-indigo-300 text-[10px]">
                    {anomalyLogs[activeAnomaly].vector}
                  </p>
                </div>
                <div>
                  <span className="text-slate-600">RISK RATIO:</span>
                  <p className="text-white font-black">
                    {anomalyLogs[activeAnomaly].riskFactor}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-2 mt-3 text-[9px] text-slate-600 leading-tight">
                ACTION: INITIALIZING AUTOMATED FORENSIC LOCKDOWN SEQUENCE.
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: COMPACT TITLES AND PROGRESS MATRIX (Takes 5 cols) ================= */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 tracking-widest uppercase">
                🧠 Neuromorphic Engine
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Automated Anomaly Detection
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Our autonomous AI system monitors audit trail sequences 24/7 for
                temporal drift inconsistencies and unauthorized structural
                metadata shifts. Any detected sequencing breakage triggers
                immediate automated vector lockdowns.
              </p>
            </div>

            <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />

            {/* Scanning Progress Pipeline */}
            <div className="space-y-2.5 bg-[#12111d] p-4 rounded-xl border border-white/5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400 tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#4edea3] rounded-full animate-ping" />
                  SCANNING_METADATA_STREAM...
                </span>
                <span className="text-[#4edea3] font-bold">98% COMPLETED</span>
              </div>
              <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-[#4edea3] to-emerald-400 w-[98%] rounded-full shadow-[0_0_10px_rgba(78,222,163,0.3)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
