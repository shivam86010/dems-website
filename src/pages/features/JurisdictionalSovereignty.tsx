import React, { useState } from "react";

export default function JurisdictionalSovereignty() {
  const [selectedRegion, setSelectedRegion] = useState<"EU" | "US" | "AP">(
    "EU",
  );

  const regionData = {
    EU: {
      zone: "EU-WEST-1 (DUBLIN)",
      policy: "GDPR Article 45 Compliant",
      fencing: "HARDWARE_ISOLATION_ACTIVE",
      latency: "4.2ms",
      status: "BOUNDED",
    },
    US: {
      zone: "US-EAST-2 (OHIO)",
      policy: "HIPAA / CJIS Vault Secured",
      fencing: "FEDRAMP_HIGH_ENFORCED",
      latency: "11.8ms",
      status: "BOUNDED",
    },
    AP: {
      zone: "AP-SOUTH-1 (MUMBAI)",
      policy: "Local Forensic Act Sec 43",
      fencing: "REGIONAL_MIRROR_RESTRICTED",
      latency: "24.1ms",
      status: "BOUNDED",
    },
  };

  return (
    <section className="py-24 bg-[#07060b] text-white relative overflow-hidden font-sans border-y border-white/5">
      {/* Background Matrix Blueprint Layering */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        {/* ================= UPPER ROW: COMPACT SECTION TEXTS ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 tracking-widest uppercase">
            🌐 Boundary Isolation Protocols
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Jurisdictional Data Sovereignty
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Real-time geographical tracking and hard cryptographic border
            fencing of evidence packets ensures absolute compliance with GDPR,
            CCPA, and regional validation standards.
          </p>
        </div>

        {/* ================= LOWER ROW: COMMAND-CENTER DISPLAY BOX ================= */}
        <div className="bg-[#100f1a] border border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT COMPONENT: GLOBAL TRACKING MAP CANVAS (Takes 7 cols) */}
            <div className="lg:col-span-7 bg-slate-950/60 border border-white/5 rounded-2xl p-6 relative flex flex-col justify-between min-h-[320px]">
              {/* Graphic Wireframe Map Canvas Background Icon */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
                <span className="material-symbols-outlined text-[240px] font-thin">
                  public
                </span>
              </div>

              {/* Top Control Label */}
              <div className="relative z-10 font-mono text-[10px] text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                Live Orbital Ping Map // Select Node
              </div>

              {/* Dynamic Interactive Pin Layer */}
              <div className="relative z-10 flex flex-wrap justify-center gap-8 sm:gap-16 my-auto py-8">
                {/* Node Pin 1 */}
                <button
                  onClick={() => setSelectedRegion("EU")}
                  className={`flex flex-col items-center gap-2 group transition-transform active:scale-95 ${selectedRegion === "EU" ? "scale-105" : "opacity-60"}`}
                >
                  <div
                    className={`w-3 h-3 rounded-full animate-pulse transition-all shadow-lg ${selectedRegion === "EU" ? "bg-[#4edea3] ring-4 ring-[#4edea3]/20" : "bg-slate-600"}`}
                  />
                  <span
                    className={`font-mono text-[11px] font-bold ${selectedRegion === "EU" ? "text-[#4edea3]" : "text-slate-400"}`}
                  >
                    EU-WEST-1
                  </span>
                </button>

                {/* Node Pin 2 */}
                <button
                  onClick={() => setSelectedRegion("US")}
                  className={`flex flex-col items-center gap-2 group transition-transform active:scale-95 ${selectedRegion === "US" ? "scale-105" : "opacity-60"}`}
                >
                  <div
                    className={`w-3 h-3 rounded-full animate-pulse transition-all shadow-lg ${selectedRegion === "US" ? "bg-indigo-400 ring-4 ring-indigo-500/20" : "bg-slate-600"}`}
                  />
                  <span
                    className={`font-mono text-[11px] font-bold ${selectedRegion === "US" ? "text-indigo-400" : "text-slate-400"}`}
                  >
                    US-EAST-2
                  </span>
                </button>

                {/* Node Pin 3 */}
                <button
                  onClick={() => setSelectedRegion("AP")}
                  className={`flex flex-col items-center gap-2 group transition-transform active:scale-95 ${selectedRegion === "AP" ? "scale-105" : "opacity-60"}`}
                >
                  <div
                    className={`w-3 h-3 rounded-full animate-pulse transition-all shadow-lg ${selectedRegion === "AP" ? "bg-amber-400 ring-4 ring-amber-500/20" : "bg-slate-600"}`}
                  />
                  <span
                    className={`font-mono text-[11px] font-bold ${selectedRegion === "AP" ? "text-amber-400" : "text-slate-400"}`}
                  >
                    AP-SOUTH-1
                  </span>
                </button>
              </div>

              {/* Bottom Config Label */}
              <div className="relative z-10 flex gap-4 text-[10px] font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" />{" "}
                  Active Sovereign Locks
                </span>
              </div>
            </div>

            {/* RIGHT COMPONENT: FUTURISTIC CMD TERMINAL SYSTEM READOUT (Takes 5 cols) */}
            <div className="lg:col-span-5 bg-slate-950 border border-white/5 rounded-2xl p-5 flex flex-col justify-between font-mono text-xs text-slate-300">
              {/* CMD Top Header Controls */}
              <div className="border-b border-white/5 pb-3 mb-4 flex justify-between items-center text-[10px] text-slate-500">
                <span className="text-indigo-400 font-bold uppercase tracking-wider">
                  [ SYSTEM_BORDER_RELIANCE ]
                </span>
                <span>STATE: ENFORCED</span>
              </div>

              {/* Terminal Readout Log Stream */}
              <div className="space-y-3 flex-1">
                <div>
                  <span className="text-slate-600">
                    $&gt; ready_zone_metrics --target
                  </span>
                  <p className="text-white font-bold mt-0.5 text-sm tracking-wide">
                    {regionData[selectedRegion].zone}
                  </p>
                </div>

                <div className="h-[1px] bg-white/5 w-full" />

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase tracking-widest">
                      Compliance Rule
                    </span>
                    <span className="text-indigo-300 font-medium">
                      {regionData[selectedRegion].policy}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase tracking-widest">
                      Fencing Guard
                    </span>
                    <span className="text-emerald-400 font-medium font-mono text-[11px]">
                      {regionData[selectedRegion].fencing}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase tracking-widest">
                      Routing Weight
                    </span>
                    <span className="text-slate-200">
                      {regionData[selectedRegion].latency} Latency
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase tracking-widest">
                      Telemetry Status
                    </span>
                    <span className="px-1.5 py-0.2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded text-[10px] font-bold uppercase tracking-wide inline-block">
                      {regionData[selectedRegion].status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Micro Shell Footer Note */}
              <div className="border-t border-white/5 pt-3 mt-4 text-[9px] text-slate-600 leading-tight">
                CRITICAL NOTICE: Hardware cryptographic isolation anchors
                prevent data extraction loops across foreign territories
                automatically.
              </div>
            </div>
          </div>

          {/* Bottom Compliance Framework Row Badge */}
          <div className="mt-6 pt-5 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-slate-400">
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#4edea3] rounded-full" /> GDPR
                Sovereign Archiving
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" /> NIST
                800-53 Control Set
              </div>
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest">
              LATENCY_OPTIMIZED_ROUTING: ACTIVE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
