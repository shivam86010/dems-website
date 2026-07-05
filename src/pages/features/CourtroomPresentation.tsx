import React, { useState } from "react";

export default function CourtroomPresentation() {
  const [activeStep, setActiveStep] = useState(1);

  const timelineSteps = [
    {
      id: 1,
      title: "Evidence Ingestion",
      time: "14:32:01 UTC",
      desc: "Secure write-once hash generated at source node.",
    },
    {
      id: 2,
      title: "Consensus Lock",
      time: "14:32:05 UTC",
      desc: "Validated across 1,240+ independent cluster signatures.",
    },
    {
      id: 3,
      title: "AI Facial Enrichment",
      time: "14:34:12 UTC",
      desc: "Non-destructive analytical layer appended.",
    },
  ];

  return (
    <section className="py-24 bg-[#07060b] text-white relative overflow-hidden font-sans border-t border-white/5">
      {/* Structural Ambient Geometric Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#4edea3]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ================= LEFT SIDE: DOCUMENTATION & KEY FEATURES ================= */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 tracking-widest uppercase">
                ⚖️ Legal Admissibility Core
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Courtroom-Ready Presentation Mode
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                Simplify complex, multi-threaded decentralized forensic audit
                trails into absolute, high-fidelity visual exhibits designed to
                instantly anchor comprehension for judges and juries.
              </p>
            </div>

            {/* Feature Checklist Breakdown */}
            <ul className="space-y-6">
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 shrink-0 group-hover:border-purple-500/40 transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    present_to_all
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base tracking-wide">
                    One-Click Exhibit Generation
                  </h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Instantly transform structural metadata rows and consensus
                    chains into an accessible sequential visual narrative.
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-[#4edea3]/10 border border-[#4edea3]/20 flex items-center justify-center text-[#4edea3] shrink-0 group-hover:border-[#4edea3]/40 transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    verified
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-base tracking-wide">
                    Live Integrity Verification
                  </h4>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                    Recalculate and assert secure blockchain hash verifications
                    instantly on-stage during active witness testimony.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* ================= RIGHT SIDE: HIGH FIDELITY EXHIBIT SYSTEM PANEL ================= */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#11101a] border border-white/10 rounded-3xl p-5 md:p-6 shadow-2xl space-y-6 relative overflow-hidden">
              {/* Media Container Top Sub-Header Bar */}
              <div className="flex flex-wrap justify-between items-center gap-4 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4edea3]" />
                  <span className="font-mono text-xs font-bold tracking-wider text-indigo-300 uppercase">
                    EXHIBIT_A // FORENSIC_TIMELINE
                  </span>
                </div>
                <span className="px-2.5 py-0.5 font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[10px] rounded uppercase font-bold tracking-widest">
                  Presentation View
                </span>
              </div>

              {/* Dynamic Step Interactive Visualization Screen */}
              <div className="bg-slate-950/60 border border-white/5 rounded-2xl p-6 relative min-h-[160px] flex flex-col justify-between">
                {/* Horizontal Progress Track */}
                <div className="w-full h-[2px] bg-white/5 relative my-auto">
                  {timelineSteps.map((step) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(step.id)}
                      style={{ left: `${(step.id - 1) * 50}%` }}
                      className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 bg-slate-950 transition-all flex items-center justify-center ${
                        activeStep === step.id
                          ? "border-[#4edea3] scale-110 shadow-[0_0_12px_rgba(78,222,163,0.3)]"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${activeStep === step.id ? "bg-[#4edea3]" : "bg-slate-700"}`}
                      />
                    </button>
                  ))}
                </div>

                {/* Micro Description Card Context */}
                <div className="mt-6 pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <div className="sm:col-span-1">
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">
                      Phase Identifier
                    </span>
                    <span className="font-mono text-xs font-bold text-[#4edea3]">
                      {timelineSteps[activeStep - 1].title}
                    </span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">
                      Timestamp Mapping
                    </span>
                    <p className="text-xs text-slate-300">
                      {timelineSteps[activeStep - 1].time} —{" "}
                      <span className="text-slate-400 font-light">
                        {timelineSteps[activeStep - 1].desc}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* NEW ADMISSIBILITY LOG SCREEN (CMD-TYPE VIEW REMOVING EMPTY SPACE) */}
              <div className="bg-slate-950 border border-white/5 rounded-xl p-4 font-mono text-[11px] text-slate-400 space-y-2.5">
                <div className="flex justify-between items-center text-[10px] border-b border-white/5 pb-2 text-slate-500">
                  <span>$&gt; CUSTODY_AUDIT_LOG --VERIFY</span>
                  <span className="text-[#4edea3]">SHA_512 // SECURE</span>
                </div>

                <div className="space-y-1">
                  <p>
                    <span className="text-slate-600">[01]</span> ADMISSIBILITY
                    CHECK:{" "}
                    <span className="text-indigo-300">
                      FEDERAL_RULE_901(b)(9) Satisfied
                    </span>
                  </p>
                  <p>
                    <span className="text-slate-600">[02]</span> ORIGIN
                    SIGNATURE:{" "}
                    <span className="text-amber-300">
                      &quot;Node-Cluster-882_Validated&quot;
                    </span>
                  </p>
                  <p>
                    <span className="text-slate-600">[03]</span> TELEMETRY
                    SHIFT:{" "}
                    <span className="text-emerald-400">
                      0E_MUTATIONS_DETECTED (Static Hash Match)
                    </span>
                  </p>
                </div>

                <div className="bg-white/[0.02] border border-dashed border-white/5 p-2 rounded text-[10px] text-slate-500 leading-relaxed">
                  Notice: This machine data packet compiles completely with
                  systemic verification matrices. Visual transformation layers
                  hold no computational alterations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
