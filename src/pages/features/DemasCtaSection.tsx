import React, { useState } from "react";

export default function DemasCtaSection() {
  const [terminalStep, setTerminalStep] = useState<number>(1);

  return (
    <section className="py-32 bg-[#06050a] text-white relative overflow-hidden font-sans border-t border-white/5">
      {/* Background Micro Vector & Glow Infrastructure */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#3626ce]/10 via-[#4edea3]/5 to-transparent blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle Matrix Layout Accents */}
      <div className="absolute top-12 left-12 font-mono text-[9px] text-slate-700 select-none hidden lg:block uppercase tracking-widest">
        SECURE_CHAIN_INIT // v2.4.0
      </div>
      <div className="absolute bottom-12 right-12 font-mono text-[9px] text-slate-700 select-none hidden lg:block uppercase tracking-widest">
        ESTABLISHING_TRUST_ROOT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center px-4 md:px-8 space-y-12">
        {/* ================= UPPER SECTION: HEADER & TEXTS ================= */}
        <div className="space-y-6 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3626ce]/10 border border-[#3626ce]/20 text-xs font-mono text-indigo-400 tracking-widest uppercase">
            ⚡ Upgrade to Immutable Truth
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Eliminate Doubt from Your Investigations.
          </h2>
          <p className="text-slate-400 text-base sm:text-xl max-w-4xl mx-auto leading-relaxed">
            Join the global elite of federal agency bodies and enterprise
            forensic clusters utilizing DEMS+ to systematically secure, verify,
            and lock chain-of-custody tracking fields.
          </p>
        </div>

        {/* ================= MIDDLE SECTION: INTERACTIVE ACTION ACTIONS ================= */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            className="
      whitespace-nowrap
      px-10 py-3
      bg-gradient-to-r from-[#3626ce] to-indigo-700
      text-white rounded-xl font-bold text-base
      hover:shadow-[0_0_25px_rgba(54,38,206,0.3)]
      hover:-translate-y-0.5 active:translate-y-0
      transition-all
    "
          >
            Request Enterprise Demo
          </button>

          <button
            className="
      whitespace-nowrap
      px-10 py-3
      bg-[#11101a]
      border border-white/10
      text-slate-300
      rounded-xl font-bold text-base
      hover:bg-slate-900 hover:text-white
      hover:border-white/20
      transition-all
      flex items-center gap-2
    "
          >
            <span className="material-symbols-outlined text-lg">
              description
            </span>
            Download Whitepaper
          </button>
        </div>
        {/* ================= LOWER SECTION: NEW COMMAND LINE SYSTEM TERMINAL ================= */}
        <div className="max-w-2xl mx-auto bg-slate-950/80 border border-white/5 rounded-2xl p-4 font-mono text-[11px] text-slate-400 shadow-2xl space-y-3 text-left">
          {/* Terminal Console Title Bar */}
          <div className="border-b border-white/5 pb-2.5 flex justify-between items-center text-[10px] text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
              <span>$&gt; /root/dems_auth_handshake</span>
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => setTerminalStep(1)}
                className={`px-1.5 py-0.5 rounded text-[9px] uppercase font-bold ${terminalStep === 1 ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "hover:text-slate-300"}`}
              >
                LOG_01
              </button>
              <button
                onClick={() => setTerminalStep(2)}
                className={`px-1.5 py-0.5 rounded text-[9px] uppercase font-bold ${terminalStep === 2 ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "hover:text-slate-300"}`}
              >
                LOG_02
              </button>
            </div>
          </div>

          {/* Terminal Log Output Window */}
          {terminalStep === 1 ? (
            <div className="space-y-1 transition-opacity duration-200">
              <p>
                <span className="text-slate-600">[CONNECT]</span> Requesting
                cryptographic handshake with secure node network cluster...
              </p>
              <p>
                <span className="text-[#4edea3]">[SUCCESS]</span> Cluster
                identity validated via SHA-512 architecture protocols.
              </p>
              <p>
                <span className="text-slate-600">[METRIC]</span> Latency
                stabilized at <span className="text-white font-bold">14ms</span>{" "}
                across active validation layers.
              </p>
            </div>
          ) : (
            <div className="space-y-1 transition-opacity duration-200">
              <p>
                <span className="text-slate-600">[COMPLY]</span> Checking legal
                bound status for sovereign boundaries...
              </p>
              <p>
                <span className="text-indigo-400">[ENFORCED]</span> Hard
                physical isolation active on FIPS 140-3 architecture hardware
                loops.
              </p>
              <p>
                <span className="text-slate-600">[STATUS]</span> Zero internal
                or external timeline mutation vectors identified.
              </p>
            </div>
          )}

          {/* Shell Micro Footnote */}
          <div className="bg-white/[0.01] border border-white/5 p-2 rounded text-[10px] text-slate-500 flex items-center justify-between">
            <span>READY FOR ENTERPRISE INTEGRATION DEPLOYMENT</span>
            <span className="text-slate-600">SECURE // SECURE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
