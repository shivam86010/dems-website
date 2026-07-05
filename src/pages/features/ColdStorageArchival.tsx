import React, { useState } from "react";

export default function ColdStorageArchival() {
  const [selectedVault, setSelectedVault] = useState<"V-01" | "V-02" | "V-03">(
    "V-01",
  );

  const vaultTelemetry = {
    "V-01": {
      label: "AIR_GAP_VAULT_01",
      status: "OFFLINE_ISOLATED",
      entropy: "99.9994%",
      hardwareState: "CRYO_MUTATION_LOCKED",
      signature: "PQC-CRYPTO-SECURE",
    },
    "V-02": {
      label: "QUANTUM_CORE_02",
      status: "CRYPTO_SEALED",
      entropy: "100.0000%",
      hardwareState: "LATTICE_MATH_ACTIVE",
      signature: "KYBER_1024_ENFORCED",
    },
    "V-03": {
      label: "CENTENNIAL_RETAIN_03",
      status: "PERSISTENCE_STEADY",
      entropy: "99.9989%",
      hardwareState: "DEEP_STASIS_WRITE_0",
      signature: "WORM_MEDIA_ENGAGED",
    },
  };

  return (
    <section className="py-24 bg-[#06050a] text-white relative overflow-hidden font-sans border-t border-white/5">
      {/* Background Micro Cryptographic Grid Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-500/5 to-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        {/* ================= UPPER SECTION: HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 tracking-widest uppercase">
            ❄️ Cryptographic Cold Stasis
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Cold Storage &amp; Immutable Archival
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            The ultimate mitigation sequence of the evidence lifecycle. Data
            packets are cryptographically compressed and permanently sealed in
            physical air-gapped vaults with an absolute 100-year structural
            integrity guarantee.
          </p>
        </div>

        {/* ================= MIDDLE SECTION: 3-COLUMN PREMIUM CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* CARD 1: AIR-GAPPED VAULTS */}
          <div
            onClick={() => setSelectedVault("V-01")}
            className={`cursor-pointer bg-[#11101a]/80 backdrop-blur-xl border p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group ${
              selectedVault === "V-01"
                ? "border-blue-500/40 shadow-[0_10px_30px_rgba(59,130,246,0.1)]"
                : "border-white/5 hover:border-white/10"
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl font-light">
                  ac_unit
                </span>
              </div>
              <h3 className="text-xl font-black tracking-wide mb-2 text-white">
                Air-Gapped Vaults
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Absolute physical disconnection matrices from all local and
                external public network fabrics to mitigate remote validation
                tampering attempts.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>SECURITY LEVEL</span>
              <span className="text-blue-400 font-bold">PHYSICAL LAYER 0</span>
            </div>
          </div>

          {/* CARD 2: QUANTUM-RESISTANT */}
          <div
            onClick={() => setSelectedVault("V-02")}
            className={`cursor-pointer bg-[#11101a]/80 backdrop-blur-xl border p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group ${
              selectedVault === "V-02"
                ? "border-[#4edea3]/40 shadow-[0_10px_30px_rgba(78,222,163,0.1)]"
                : "border-white/5 hover:border-white/10"
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#4edea3]/10 border border-[#4edea3]/20 flex items-center justify-center text-[#4edea3] mb-6 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl font-light">
                  lock_reset
                </span>
              </div>
              <h3 className="text-xl font-black tracking-wide mb-2 text-white">
                Quantum-Resistant
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Post-quantum cryptographic algorithms (PQC) engineered to
                permanently resist brute decryption processing from future
                computing threats.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>POLYNOMIAL PROTECTION</span>
              <span className="text-[#4edea3] font-bold">
                LATTICE ENCRYPTED
              </span>
            </div>
          </div>

          {/* CARD 3: 100-YEAR RETENTION */}
          <div
            onClick={() => setSelectedVault("V-03")}
            className={`cursor-pointer bg-[#11101a]/80 backdrop-blur-xl border p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group ${
              selectedVault === "V-03"
                ? "border-purple-500/40 shadow-[0_10px_30px_rgba(168,85,247,0.1)]"
                : "border-white/5 hover:border-white/10"
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-2xl font-light">
                  history_edu
                </span>
              </div>
              <h3 className="text-xl font-black tracking-wide mb-2 text-white">
                100-Year Retention
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Persistent, write-once-read-many (WORM) hardware storage
                parameters built for generational structural longevity and
                historical legal auditing requirements.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>HARDWARE MATRIX</span>
              <span className="text-purple-400 font-bold">WORM SEALS</span>
            </div>
          </div>
        </div>

        {/* ================= LOWER SECTION: NEW COMMAND LINE TERMINAL DISPLAY ================= */}
        <div className="bg-slate-950 border border-white/10 rounded-2xl p-5 font-mono text-xs max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Inner Grid decorative visual element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] border-l border-b border-white/5 flex items-center justify-center text-slate-800 text-[10px] select-none pointer-events-none">
            CORE_VAULT_STAT
          </div>

          {/* Shell Top Header Controls */}
          <div className="border-b border-white/5 pb-3 mb-4 flex justify-between items-center text-[10px] text-slate-500">
            <span className="text-blue-400 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              $&gt; vault-core-status --inspect
            </span>
            <span className="text-slate-400">
              ACTIVE REGISTRY INDEX: #0821-C
            </span>
          </div>

          {/* Main Reading Matrix Content */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Terminal Parameter Blocks (7 Columns) */}
            <div className="sm:col-span-8 grid grid-cols-2 gap-y-3 gap-x-4">
              <div>
                <span className="text-slate-600 block text-[9px] uppercase tracking-wider">
                  Target Vault Slot
                </span>
                <span className="text-white font-bold">
                  {vaultTelemetry[selectedVault].label}
                </span>
              </div>
              <div>
                <span className="text-slate-600 block text-[9px] uppercase tracking-wider">
                  Stasis Configuration
                </span>
                <span className="text-indigo-300 font-medium">
                  {vaultTelemetry[selectedVault].hardwareState}
                </span>
              </div>
              <div>
                <span className="text-slate-600 block text-[9px] uppercase tracking-wider">
                  Air-Gap Status
                </span>
                <span className="px-1.5 py-0.2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] rounded inline-block font-bold">
                  {vaultTelemetry[selectedVault].status}
                </span>
              </div>
              <div>
                <span className="text-slate-600 block text-[9px] uppercase tracking-wider">
                  Hardware Entropy Index
                </span>
                <span className="text-slate-200 font-bold">
                  {vaultTelemetry[selectedVault].entropy}
                </span>
              </div>
            </div>

            {/* Micro Explainer Note Box (4 Columns) */}
            <div className="sm:col-span-4 bg-white/[0.02] border border-dashed border-white/5 p-3 rounded-xl text-[10px] text-slate-500 leading-relaxed sm:border-l sm:pl-4">
              <span className="text-slate-400 font-bold block mb-1">
                🔐 Immutable Verification Seal
              </span>
              Each vault card slot corresponds directly to dedicated physical
              infrastructure keys. Click cards above to cross-inspect specific
              security properties dynamically.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
