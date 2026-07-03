// import React, { useState, useEffect } from "react";

// // Tailwind custom CSS requirements injected inline for complete drop-in compatibility
// const styleInjection = `
//   @keyframes scanline {
//     0% { transform: translateY(-100%); }
//     100% { transform: translateY(100%); }
//   }
//   .animate-scanline {
//     animation: scanline 6s linear infinite;
//   }
//   .glass-card {
//     background: rgba(32, 31, 35, 0.4);
//     backdrop-filter: blur(12px);
//     border: 1px solid rgba(71, 70, 79, 0.3);
//   }
// `;

// export const CreateCasesPage: React.FC = () => {
//   // Original FAQ State
//   const [openFaq, setOpenFaq] = useState<number | null>(0);

//   // New State variables for custom features in added sections
//   const [simulatedNode, setSimulatedNode] = useState<string>("node-us-east");
//   const [activePipelineStage, setActivePipelineStage] = useState<number>(0);
//   const [metricMultiplier, setMetricMultiplier] = useState<number>(1);
//   const [selectedLogType, setSelectedLogType] = useState<
//     "all" | "alerts" | "audits"
//   >("all");

//   // Live timestamp simulator for new telemetry logger
//   const [currentTimestamp, setCurrentTimestamp] = useState<string>(
//     "2026-07-03 00:21:02",
//   );

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       setCurrentTimestamp(now.toISOString().replace("T", " ").substring(0, 19));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="bg-[#131316] font-sans text-[#e5e1e6] antialiased min-h-screen selection:bg-[#c3c0ff] selection:text-[#0f0069]">
//       <style>{styleInjection}</style>

//       <main className="relative max-w-[1440px] mx-auto">
//         {/* ========================================== */}
//         {/* SECTION 1: HERO SECTION                    */}
//         {/* ========================================== */}
//         <section className="px-8 md:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e1b4b]/40 border border-[#c3c0ff]/30 text-[#c3c0ff] font-mono text-xs tracking-wider">
//               <span className="material-symbols-outlined text-[16px]">
//                 verified_user
//               </span>
//               ZERO-TRUST INTAKE ENGINE
//             </div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#e5e1e6] leading-tight tracking-tight">
//               Initiate Matters with{" "}
//               <span className="text-[#4edea3]">Intelligence.</span>
//             </h1>
//             <p className="text-[#c8c5d0] text-base md:text-lg max-w-xl leading-relaxed">
//               The onboarding engine that screens for conflicts, jurisdictions,
//               and complexity before the first file is ever uploaded. Ensure
//               forensic integrity from the moment of inception.
//             </p>
//             <div className="flex flex-wrap gap-4 pt-4">
//               <button className="px-8 py-4 bg-[#c3c0ff] text-[#1d00a5] font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(195,192,255,0.25)]">
//                 Standardize Your Intake Process
//               </button>
//               <button className="px-8 py-4 border border-[#928f9a] text-[#e5e1e6] font-bold rounded-xl hover:bg-[#353438] transition-all">
//                 View Interactive Demo
//               </button>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="glass-card rounded-2xl p-8 shadow-2xl relative overflow-hidden border border-[#47464f]/40">
//               <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#c4c1fb] to-transparent top-0 animate-scanline" />
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex gap-2">
//                   <div className="w-3 h-3 rounded-full bg-[#ffb4ab]"></div>
//                   <div className="w-3 h-3 rounded-full bg-[#4edea3]"></div>
//                   <div className="w-3 h-3 rounded-full bg-[#c3c0ff]"></div>
//                 </div>
//                 <div className="font-mono text-xs text-[#928f9a] uppercase tracking-widest">
//                   New Case Initiation v4.2
//                 </div>
//               </div>
//               <div className="space-y-6">
//                 <div className="space-y-2">
//                   <label className="font-mono text-xs text-[#c8c5d0] tracking-wide">
//                     MATTER TITLE
//                   </label>
//                   <div className="w-full bg-[#0e0e11] border border-[#47464f] p-3.5 rounded-lg flex justify-between items-center group transition-all hover:border-[#c4c1fb] hover:shadow-[0_0_10px_rgba(196,193,251,0.2)]">
//                     <span className="text-[#c4c1fb] text-sm md:text-base font-medium">
//                       Internal Investigation - Project Cipher
//                     </span>
//                     <span
//                       className="material-symbols-outlined text-[#4edea3] text-base"
//                       style={{ fontVariationSettings: "'FILL' 1" }}
//                     >
//                       check_circle
//                     </span>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <label className="font-mono text-xs text-[#c8c5d0] tracking-wide">
//                       JURISDICTION
//                     </label>
//                     <div className="w-full bg-[#0e0e11] border border-[#c3c0ff] p-3.5 rounded-lg text-[#e5e1e6] text-sm md:text-base flex items-center gap-2">
//                       <span className="material-symbols-outlined text-base text-[#c3c0ff]">
//                         public
//                       </span>
//                       European Union (GDPR)
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label className="font-mono text-xs text-[#c8c5d0] tracking-wide">
//                       INTAKE TYPE
//                     </label>
//                     <div className="w-full bg-[#0e0e11] border border-[#47464f] p-3.5 rounded-lg text-[#e5e1e6] text-sm md:text-base transition-all hover:border-[#c4c1fb] hover:shadow-[0_0_10px_rgba(196,193,251,0.2)]">
//                       Digital Forensics
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-4 bg-[#002819]/40 border border-[#4edea3]/20 rounded-xl flex gap-4 items-start">
//                   <span className="material-symbols-outlined text-[#4edea3] mt-0.5">
//                     auto_awesome
//                   </span>
//                   <div>
//                     <p className="text-[#4edea3] font-bold text-sm md:text-base">
//                       AI Insight
//                     </p>
//                     <p className="text-[#c8c5d0] text-xs md:text-sm mt-0.5">
//                       Cross-referencing global databases. No professional
//                       conflicts detected for "Internal Investigation - Project
//                       Cipher".
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* SECTION 2: MULTI-STEP WORKFLOW             */}
//         {/* ========================================== */}
//         <section
//           id="workflow"
//           className="bg-[#0e0e11] py-24 border-y border-[#47464f]/40"
//         >
//           <div className="px-8 md:px-12">
//             <div className="text-center mb-16">
//               <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6] mb-4">
//                 A Unified Path to Integrity
//               </h2>
//               <p className="text-[#c8c5d0] text-sm md:text-base max-w-2xl mx-auto">
//                 Five automated steps to ensure your matters start with full
//                 compliance and forensic readiness.
//               </p>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//               <div className="glass-card p-6 rounded-xl border-t-4 border-t-[#c4c1fb]">
//                 <div className="text-[#c4c1fb] font-mono text-sm mb-4 font-bold">
//                   01
//                 </div>
//                 <h4 className="font-bold text-base mb-2 text-[#e5e1e6]">
//                   Matter Intake
//                 </h4>
//                 <p className="text-xs md:text-sm text-[#c8c5d0]">
//                   Metadata-driven initiation with custom schemas.
//                 </p>
//               </div>
//               <div className="glass-card p-6 rounded-xl border-t-4 border-t-[#4edea3]">
//                 <div className="text-[#4edea3] font-mono text-sm mb-4 font-bold">
//                   02
//                 </div>
//                 <h4 className="font-bold text-base mb-2 text-[#e5e1e6]">
//                   Conflict Check
//                 </h4>
//                 <p className="text-xs md:text-sm text-[#c8c5d0]">
//                   Automated entity matching across global nodes.
//                 </p>
//               </div>
//               <div className="glass-card p-6 rounded-xl border-t-4 border-t-[#c3c0ff]">
//                 <div className="text-[#c3c0ff] font-mono text-sm mb-4 font-bold">
//                   03
//                 </div>
//                 <h4 className="font-bold text-base mb-2 text-[#e5e1e6]">
//                   Jurisdiction
//                 </h4>
//                 <p className="text-xs md:text-sm text-[#c8c5d0]">
//                   Dynamic regulatory mapping (GDPR, SOC2, CCPA).
//                 </p>
//               </div>
//               <div className="glass-card p-6 rounded-xl border-t-4 border-t-[#c4c1fb]">
//                 <div className="text-[#c4c1fb] font-mono text-sm mb-4 font-bold">
//                   04
//                 </div>
//                 <h4 className="font-bold text-base mb-2 text-[#e5e1e6]">
//                   Team Sync
//                 </h4>
//                 <p className="text-xs md:text-sm text-[#c8c5d0]">
//                   RBAC-based role assignment and secure access.
//                 </p>
//               </div>
//               <div className="glass-card p-6 rounded-xl border-t-4 border-t-[#4edea3]">
//                 <div className="text-[#4edea3] font-mono text-sm mb-4 font-bold">
//                   05
//                 </div>
//                 <h4 className="font-bold text-base mb-2 text-[#e5e1e6]">
//                   Ready
//                 </h4>
//                 <p className="text-xs md:text-sm text-[#c8c5d0]">
//                   Final validation & forensic container creation.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* SECTION 3: CONFLICT SCREENING DEEP-DIVE    */}
//         {/* ========================================== */}
//         <section
//           id="intelligence"
//           className="py-24 px-8 md:px-12 grid lg:grid-cols-2 gap-16 items-center"
//         >
//           <div className="order-2 lg:order-1">
//             <div className="space-y-4">
//               <div className="flex items-center gap-4 p-4 rounded-lg bg-[#201f23] border-l-4 border-[#ffb4ab]">
//                 <span className="material-symbols-outlined text-[#ffb4ab] text-xl">
//                   priority_high
//                 </span>
//                 <div>
//                   <div className="text-sm md:text-base font-bold text-[#e5e1e6]">
//                     Adverse Entity Flagged
//                   </div>
//                   <div className="text-xs md:text-sm text-[#c8c5d0]">
//                     Matched "Lumina Corp" in Global Conflict Database.
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4 p-4 rounded-lg bg-[#201f23] border-l-4 border-[#4edea3]">
//                 <span className="material-symbols-outlined text-[#4edea3] text-xl">
//                   verified
//                 </span>
//                 <div>
//                   <div className="text-sm md:text-base font-bold text-[#e5e1e6]">
//                     Professional Clearance
//                   </div>
//                   <div className="text-xs md:text-sm text-[#c8c5d0]">
//                     Zero-trust audit: Internal ethical wall confirmed.
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-8 p-6 glass-card rounded-xl">
//                 <div className="font-mono text-xs text-[#928f9a] mb-4 uppercase tracking-[0.2em]">
//                   Logic Flow: screening_engine_v2
//                 </div>
//                 <div className="font-mono text-xs md:text-sm text-[#c4c1fb] space-y-1.5">
//                   <div>&gt; INIT conflict_check --entity "Client A"</div>
//                   <div>
//                     &gt; SCAN database.global_records...{" "}
//                     <span className="text-[#4edea3]">OK</span>
//                   </div>
//                   <div>
//                     &gt; VERIFY immutable_logs --chain DEMS_MAIN...{" "}
//                     <span className="text-[#4edea3]">OK</span>
//                   </div>
//                   <div>&gt; RESULT: Clear to proceed.</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="order-1 lg:order-2 space-y-6">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffb4ab]/10 border border-[#ffb4ab]/30 text-[#ffb4ab] font-mono text-xs font-medium">
//               <span className="material-symbols-outlined text-[16px]">
//                 gshield
//               </span>
//               ZERO-TRUST ARCHITECTURE
//             </div>
//             <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6]">
//               Deep-Dive Conflict Logic
//             </h2>
//             <p className="text-[#c8c5d0] text-sm md:text-base leading-relaxed">
//               Our proprietary screening engine uses a Zero-Trust framework to
//               validate every entity involved. We don't just check names; we
//               verify relationships, professional histories, and internal ethical
//               walls using blockchain-verified audit trails.
//             </p>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <span className="material-symbols-outlined text-[#4edea3] mt-0.5 text-lg">
//                   check_circle
//                 </span>
//                 <span className="text-sm md:text-base text-[#e5e1e6]">
//                   Immutable screening logs recorded on-chain for defensibility.
//                 </span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="material-symbols-outlined text-[#4edea3] mt-0.5 text-lg">
//                   check_circle
//                 </span>
//                 <span className="text-sm md:text-base text-[#e5e1e6]">
//                   Real-time alerts for newly discovered potential conflicts.
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* NEW SECTION 4: INTERACTIVE NODE TELEMETRY  */}
//         {/* ========================================== */}
//         <section className="bg-[#201f23] py-20 border-y border-[#47464f]/30 px-8 md:px-12">
//           <div className="grid lg:grid-cols-12 gap-12 items-center">
//             <div className="lg:col-span-5 space-y-5">
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/20 text-[#4edea3] font-mono text-xs">
//                 <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping" />
//                 LIVE NETWORK OVERWATCH
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
//                 Active Ingestion Staging Nodes
//               </h3>
//               <p className="text-sm md:text-base text-[#c8c5d0]">
//                 Select an infrastructure storage shard to verify latency
//                 metrics, cryptographic compliance thresholds, and isolation
//                 states.
//               </p>
//               <div className="flex gap-2 font-mono text-xs">
//                 <button
//                   onClick={() => setSimulatedNode("node-us-east")}
//                   className={`px-4 py-2.5 rounded-lg border transition-all ${simulatedNode === "node-us-east" ? "bg-[#c3c0ff] text-[#1d00a5] border-transparent" : "bg-[#0e0e11] border-[#47464f] text-[#c8c5d0]"}`}
//                 >
//                   US-EAST-GOV
//                 </button>
//                 <button
//                   onClick={() => setSimulatedNode("node-eu-central")}
//                   className={`px-4 py-2.5 rounded-lg border transition-all ${simulatedNode === "node-eu-central" ? "bg-[#c3c0ff] text-[#1d00a5] border-transparent" : "bg-[#0e0e11] border-[#47464f] text-[#c8c5d0]"}`}
//                 >
//                   EU-CENTRAL-1
//                 </button>
//               </div>
//             </div>
//             <div className="lg:col-span-7 bg-[#0e0e11] p-6 rounded-2xl border border-[#47464f]/40 font-mono text-xs space-y-4">
//               <div className="flex justify-between border-b border-[#47464f]/40 pb-3 text-[#928f9a]">
//                 <span>CLUSTER OVERVIEW</span>
//                 <span>STATE: OPERATIONAL</span>
//               </div>
//               {simulatedNode === "node-us-east" ? (
//                 <div className="space-y-2 text-[#c8c5d0]">
//                   <p>
//                     📂 LOCATION:{" "}
//                     <span className="text-[#e5e1e6] font-bold">
//                       AWS GovCloud (US East)
//                     </span>
//                   </p>
//                   <p>
//                     🔒 ENCRYPTION:{" "}
//                     <span className="text-[#4edea3] font-bold">
//                       FIPS 140-3 Hardware Envelope
//                     </span>
//                   </p>
//                   <p>
//                     ⏳ LATENCY SWEEP:{" "}
//                     <span className="text-[#c3c0ff] font-bold">11ms</span>
//                   </p>
//                   <p>
//                     📜 CERTIFICATE:{" "}
//                     <span className="text-[#4edea3]">
//                       Valid (SHA-256 Validated)
//                     </span>
//                   </p>
//                 </div>
//               ) : (
//                 <div className="space-y-2 text-[#c8c5d0]">
//                   <p>
//                     📂 LOCATION:{" "}
//                     <span className="text-[#e5e1e6] font-bold">
//                       Frankfurt Shard Zone B
//                     </span>
//                   </p>
//                   <p>
//                     🔒 ENCRYPTION:{" "}
//                     <span className="text-[#4edea3] font-bold">
//                       AES-256 Sovereign Bound
//                     </span>
//                   </p>
//                   <p>
//                     ⏳ LATENCY SWEEP:{" "}
//                     <span className="text-[#c3c0ff] font-bold">24ms</span>
//                   </p>
//                   <p>
//                     📜 CERTIFICATE:{" "}
//                     <span className="text-[#4edea3]">
//                       Valid (BSI-Compliant Chain)
//                     </span>
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* SECTION 5: JURISDICTIONAL INTELLIGENCE MAP */}
//         {/* ========================================== */}
//         <section className="bg-[#201f23] py-24 border-b border-[#47464f]/40">
//           <div className="px-8 md:px-12 text-center">
//             <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6] mb-12">
//               Global Jurisdictional Intelligence
//             </h2>
//             <div className="relative w-full aspect-video md:aspect-[21/9] bg-[#0e0e11] rounded-3xl border border-[#47464f]/30 flex items-center justify-center overflow-hidden">
//               <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c4c1fb_1px,transparent_1px)] [background-size:20px_20px]"></div>
//               <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
//                 <div className="text-center group">
//                   <div className="w-16 h-16 bg-[#c4c1fb]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform cursor-pointer">
//                     <span className="material-symbols-outlined text-[#c4c1fb] text-3xl">
//                       public
//                     </span>
//                   </div>
//                   <div className="font-bold text-sm md:text-base">
//                     EU - GDPR
//                   </div>
//                   <div className="text-xs font-mono text-[#4edea3] font-bold mt-1">
//                     ENFORCED
//                   </div>
//                 </div>
//                 <div className="text-center group">
//                   <div className="w-16 h-16 bg-[#c4c1fb]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform cursor-pointer">
//                     <span className="material-symbols-outlined text-[#c4c1fb] text-3xl">
//                       flag
//                     </span>
//                   </div>
//                   <div className="font-bold text-sm md:text-base">
//                     US - CCPA/SOC2
//                   </div>
//                   <div className="text-xs font-mono text-[#4edea3] font-bold mt-1">
//                     ENFORCED
//                   </div>
//                 </div>
//                 <div className="text-center group">
//                   <div className="w-16 h-16 bg-[#c4c1fb]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform cursor-pointer">
//                     <span className="material-symbols-outlined text-[#c4c1fb] text-3xl">
//                       language
//                     </span>
//                   </div>
//                   <div className="font-bold text-sm md:text-base">
//                     APAC - APPI
//                   </div>
//                   <div className="text-xs font-mono text-[#4edea3] font-bold mt-1">
//                     ENFORCED
//                   </div>
//                 </div>
//                 <div className="text-center group">
//                   <div className="w-16 h-16 bg-[#c4c1fb]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform cursor-pointer">
//                     <span className="material-symbols-outlined text-[#c4c1fb] text-3xl">
//                       travel_explore
//                     </span>
//                   </div>
//                   <div className="font-bold text-sm md:text-base">
//                     Global Privacy
//                   </div>
//                   <div className="text-xs font-mono text-[#4edea3] font-bold mt-1">
//                     ENFORCED
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute bottom-8 right-8 font-mono text-[#928f9a] text-xs">
//                 Coverage: 140+ Jurisdictions
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* SECTION 6: MATTER TEMPLATES GALLERY        */}
//         {/* ========================================== */}
//         <section id="templates" className="py-24 px-8 md:px-12">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6] mb-2">
//                 Matter Template Gallery
//               </h2>
//               <p className="text-[#c8c5d0] text-sm md:text-base max-w-xl">
//                 Standardize initiation for every investigation type with
//                 pre-baked, legally-vetted workflow skeletons.
//               </p>
//             </div>
//             <button className="px-6 py-2.5 border border-[#928f9a] text-[#e5e1e6] rounded-lg hover:bg-[#353438] transition-colors font-medium text-sm">
//               Browse All 50+ Templates
//             </button>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="glass-card p-8 rounded-2xl group hover:border-[#c4c1fb] transition-all cursor-pointer">
//               <span className="material-symbols-outlined text-[#c4c1fb] text-4xl mb-6 block">
//                 biotech
//               </span>
//               <h4 className="text-lg md:text-xl font-bold mb-3 text-[#e5e1e6]">
//                 IP Theft Investigation
//               </h4>
//               <p className="text-xs md:text-sm text-[#c8c5d0] mb-6 leading-relaxed">
//                 Designed for rapid isolation of source code repos and email
//                 exports. NIST-compliant imaging steps included.
//               </p>
//               <div className="flex gap-2 font-mono text-xs">
//                 <span className="bg-[#201f23] text-[#c8c5d0] px-2.5 py-1 rounded">
//                   SOC2
//                 </span>
//                 <span className="bg-[#201f23] text-[#c8c5d0] px-2.5 py-1 rounded">
//                   GDPR
//                 </span>
//               </div>
//             </div>
//             <div className="glass-card p-8 rounded-2xl group hover:border-[#c4c1fb] transition-all cursor-pointer">
//               <span className="material-symbols-outlined text-[#c4c1fb] text-4xl mb-6 block">
//                 account_balance
//               </span>
//               <h4 className="text-lg md:text-xl font-bold mb-3 text-[#e5e1e6]">
//                 AML / KYC Audit
//               </h4>
//               <p className="text-xs md:text-sm text-[#c8c5d0] mb-6 leading-relaxed">
//                 Enhanced due diligence tracking with automated FinCEN report
//                 placeholders and entity mapping.
//               </p>
//               <div className="flex gap-2 font-mono text-xs">
//                 <span className="bg-[#201f23] text-[#c8c5d0] px-2.5 py-1 rounded">
//                   FINANCIAL
//                 </span>
//                 <span className="bg-[#201f23] text-[#c8c5d0] px-2.5 py-1 rounded">
//                   SEC
//                 </span>
//               </div>
//             </div>
//             <div className="glass-card p-8 rounded-2xl group hover:border-[#c4c1fb] transition-all cursor-pointer">
//               <span className="material-symbols-outlined text-[#c4c1fb] text-4xl mb-6 block">
//                 groups
//               </span>
//               <h4 className="text-lg md:text-xl font-bold mb-3 text-[#e5e1e6]">
//                 Internal Ethics / HR
//               </h4>
//               <p className="text-xs md:text-sm text-[#c8c5d0] mb-6 leading-relaxed">
//                 Focus on anonymity and chain of custody for reporter statements.
//                 Strict RBAC protocols enabled by default.
//               </p>
//               <div className="flex gap-2 font-mono text-xs">
//                 <span className="bg-[#201f23] text-[#c8c5d0] px-2.5 py-1 rounded">
//                   ANONYMOUS
//                 </span>
//                 <span className="bg-[#201f23] text-[#c8c5d0] px-2.5 py-1 rounded">
//                   HIPAA
//                 </span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* NEW SECTION 7: INTERACTIVE VALUE CALCULATOR*/}
//         {/* ========================================== */}
//         <section className="bg-[#0e0e11] py-24 border-y border-[#47464f]/40 px-8 md:px-12">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <div className="text-xs font-mono text-[#c3c0ff] tracking-widest uppercase mb-2">
//                 ROI SIMULATION TOOL
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold">
//                 Projected Risk Reduction Matrix
//               </h3>
//             </div>
//             <div className="grid md:grid-cols-2 gap-8 items-center bg-[#201f23] p-8 rounded-2xl border border-[#47464f]/30">
//               <div className="space-y-5">
//                 <p className="text-sm text-[#c8c5d0]">
//                   Adjust active case scaling to evaluate cross-border compliance
//                   efficiency index parameters:
//                 </p>
//                 <div className="space-y-2">
//                   <div className="flex justify-between text-xs font-mono font-bold text-[#928f9a]">
//                     <span>CONCURRENT MONTHLY MATTERS</span>
//                     <span className="text-[#c4c1fb]">
//                       {10 * metricMultiplier} Active mat.
//                     </span>
//                   </div>
//                   <input
//                     type="range"
//                     min="1"
//                     max="10"
//                     step="1"
//                     value={metricMultiplier}
//                     onChange={(e) =>
//                       setMetricMultiplier(Number(e.target.value))
//                     }
//                     className="w-full accent-[#c3c0ff] bg-[#0e0e11] rounded"
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 gap-4 text-center font-mono">
//                 <div className="bg-[#0e0e11] p-4 rounded-xl border border-[#47464f]/40">
//                   <span className="text-xs text-[#928f9a] block uppercase">
//                     Hours Saved
//                   </span>
//                   <span className="text-2xl font-bold text-[#4edea3] mt-1 block">
//                     {45 * metricMultiplier} hrs
//                   </span>
//                 </div>
//                 <div className="bg-[#0e0e11] p-4 rounded-xl border border-[#47464f]/40">
//                   <span className="text-xs text-[#928f9a] block uppercase">
//                     Defensibility
//                   </span>
//                   <span className="text-2xl font-bold text-[#c3c0ff] mt-1 block">
//                     99.8%
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* SECTION 8: INTEGRATION ECOSYSTEM           */}
//         {/* ========================================== */}
//         <section
//           id="integrations"
//           className="bg-[#1c1b1f] py-24 border-b border-[#47464f]/40"
//         >
//           <div className="px-8 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6] mb-6">
//                 Seamless Ecosystem Sync
//               </h2>
//               <p className="text-[#c8c5d0] text-sm md:text-base mb-8 leading-relaxed">
//                 DEMS+ doesn't live in a silo. We integrate directly with your
//                 existing identity providers and cloud infrastructure to ensure
//                 that intake data flows where it's needed—securely.
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="p-4 bg-[#353438] rounded-lg border border-[#47464f] flex items-center gap-3">
//                   <span className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-bold text-sm">
//                     Ok
//                   </span>
//                   <span className="font-mono text-sm text-[#e5e1e6]">
//                     Okta SSO
//                   </span>
//                 </div>
//                 <div className="p-4 bg-[#353438] rounded-lg border border-[#47464f] flex items-center gap-3">
//                   <span className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-bold text-sm">
//                     Az
//                   </span>
//                   <span className="font-mono text-sm text-[#e5e1e6]">
//                     Azure AD
//                   </span>
//                 </div>
//                 <div className="p-4 bg-[#353438] rounded-lg border border-[#47464f] flex items-center gap-3">
//                   <span className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-bold text-sm">
//                     Sl
//                   </span>
//                   <span className="font-mono text-sm text-[#e5e1e6]">
//                     Slack Grid
//                   </span>
//                 </div>
//                 <div className="p-4 bg-[#353438] rounded-lg border border-[#47464f] flex items-center gap-3">
//                   <span className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-bold text-sm">
//                     Aw
//                   </span>
//                   <span className="font-mono text-sm text-[#e5e1e6]">
//                     AWS S3
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="absolute inset-0 bg-[#c4c1fb]/10 blur-3xl rounded-full"></div>
//               <div className="relative glass-card p-10 rounded-3xl border-[#c4c1fb]/20 flex flex-col items-center justify-center min-h-[250px]">
//                 <div className="w-24 h-24 rounded-full bg-[#1e1b4b] border border-[#c3c0ff]/30 flex items-center justify-center shadow-[0_0_25px_rgba(195,192,255,0.2)]">
//                   <span className="material-symbols-outlined text-4xl text-[#c3c0ff]">
//                     hub
//                   </span>
//                 </div>
//                 <div className="h-12 w-px bg-gradient-to-b from-[#c3c0ff] to-transparent my-4"></div>
//                 <div className="font-mono text-xs text-[#928f9a] uppercase tracking-widest">
//                   CORE INTAKE ENGINE
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* SECTION 9: COGNITIVE PARTNER AI ASSISTANT  */}
//         {/* ========================================== */}
//         <section className="py-24 px-8 md:px-12">
//           <div className="glass-card p-12 rounded-3xl bg-gradient-to-br from-[#002819]/20 to-transparent border border-[#4edea3]/20">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="space-y-6">
//                 <div className="inline-flex items-center gap-2 text-[#4edea3] font-mono text-xs uppercase tracking-wider font-bold">
//                   <span className="material-symbols-outlined text-sm">
//                     smart_toy
//                   </span>
//                   AI COGNITIVE PARTNER
//                 </div>
//                 <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6]">
//                   Meet your Forensic Assistant.
//                 </h2>
//                 <p className="text-[#c8c5d0] text-sm md:text-base leading-relaxed">
//                   Not just a chatbot. Our AI partner analyzes matter metadata in
//                   real-time to suggest jurisdictional frameworks, identify
//                   missing required documentation, and predict potential forensic
//                   bottlenecks based on thousands of historical cases.
//                 </p>
//                 <button className="px-6 py-3 bg-[#4edea3] text-[#003824] font-bold rounded-lg shadow-[0_0_15px_rgba(78,222,163,0.25)]">
//                   Explore AI Insights
//                 </button>
//               </div>
//               <div className="bg-[#0e0e11] p-6 rounded-2xl border border-[#47464f]/40 relative">
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="w-10 h-10 rounded-full bg-[#4edea3] flex items-center justify-center text-[#003824] shrink-0">
//                     <span className="material-symbols-outlined text-base">
//                       auto_awesome
//                     </span>
//                   </div>
//                   <div className="flex-1 bg-[#201f23] p-4 rounded-xl rounded-tl-none">
//                     <p className="text-xs md:text-sm text-[#e5e1e6] leading-relaxed">
//                       "I've detected that this matter involves data from Berlin.
//                       I've automatically added the German Federal Data
//                       Protection Act (BDSG) compliance checklist to your
//                       template."
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2 text-[#928f9a] font-mono text-xs">
//                   <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
//                   AI IS ANALYZING RECENT JURISDICTIONAL UPDATES...
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* NEW SECTION 10: AUTOMATED PIPELINE VISUAL  */}
//         {/* ========================================== */}
//         <section className="bg-[#0e0e11] py-24 border-y border-[#47464f]/40 px-8 md:px-12">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <div className="text-xs font-mono text-[#4edea3] uppercase tracking-widest font-bold mb-2">
//                 PIPELINE TELEMETRY
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold">
//                 Staging Enclosure Validation Status
//               </h3>
//             </div>
//             <div className="flex flex-col sm:flex-row justify-between gap-3 font-mono text-xs border-b border-[#47464f]/30 pb-6 mb-8">
//               {[
//                 {
//                   title: "1. HASH GENERATION",
//                   desc: "SHA-256 Block Immutable Verification",
//                 },
//                 {
//                   title: "2. BOUNDARY MATCH",
//                   desc: "Logical Namespace Route Check",
//                 },
//                 {
//                   title: "3. KEY ATTESTATION",
//                   desc: "Asymmetric Pair Handshake Complete",
//                 },
//               ].map((stage, idx) => (
//                 <div
//                   key={idx}
//                   onClick={() => setActivePipelineStage(idx)}
//                   className={`p-4 rounded-xl border cursor-pointer flex-1 transition-all ${activePipelineStage === idx ? "bg-[#201f23] border-[#c4c1fb]" : "bg-transparent border-[#47464f]/40"}`}
//                 >
//                   <p
//                     className={`font-bold ${activePipelineStage === idx ? "text-[#c4c1fb]" : "text-[#e5e1e6]"}`}
//                   >
//                     {stage.title}
//                   </p>
//                   <p className="text-[#928f9a] text-[11px] mt-1">
//                     {stage.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//             <div className="bg-[#201f23] p-5 rounded-xl border border-[#47464f]/30 font-mono text-xs text-[#c8c5d0]">
//               {activePipelineStage === 0 && (
//                 <p className="leading-relaxed">
//                   » System tracking signature strings inside transient boundary
//                   states. Cryptographic collision risk parameter checked:{" "}
//                   <span className="text-[#4edea3] font-bold">
//                     0.0000% Probability Detected
//                   </span>
//                   .
//                 </p>
//               )}
//               {activePipelineStage === 1 && (
//                 <p className="leading-relaxed">
//                   » Verifying physical localization storage maps. Target sector
//                   isolated within dedicated multi-tenant secure container
//                   matrices seamlessly.
//                 </p>
//               )}
//               {activePipelineStage === 2 && (
//                 <p className="leading-relaxed">
//                   » Handshake authorization sequence written to local hardware
//                   security block logs at node interface checkpoint safely.
//                 </p>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* SECTION 11: TECHNICAL INTEGRITY SPECS      */}
//         {/* ========================================== */}
//         <section className="bg-[#131316] py-24 border-b border-[#47464f]/40 px-8 md:px-12">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6] mb-12 text-center">
//               Technical Integrity Specifications
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div className="space-y-4">
//                 <h4 className="font-bold text-[#c4c1fb] text-base md:text-lg">
//                   Encryption
//                 </h4>
//                 <ul className="text-xs md:text-sm text-[#c8c5d0] space-y-3 font-mono">
//                   <li className="flex items-center gap-2">
//                     <span className="material-symbols-outlined text-sm text-[#c4c1fb]">
//                       lock
//                     </span>{" "}
//                     AES-256-GCM at rest
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="material-symbols-outlined text-sm text-[#c4c1fb]">
//                       sync_alt
//                     </span>{" "}
//                     TLS 1.3 in transit
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="material-symbols-outlined text-sm text-[#c4c1fb]">
//                       key
//                     </span>{" "}
//                     FIPS 140-2 Level 3 HSM
//                   </li>
//                 </ul>
//               </div>
//               <div className="space-y-4">
//                 <h4 className="font-bold text-[#4edea3] text-base md:text-lg">
//                   Compliance
//                 </h4>
//                 <ul className="text-xs md:text-sm text-[#c8c5d0] space-y-3 font-mono">
//                   <li className="flex items-center gap-2">
//                     <span className="material-symbols-outlined text-sm text-[#4edea3]">
//                       verified
//                     </span>{" "}
//                     SOC2 Type II Certified
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="material-symbols-outlined text-sm text-[#4edea3]">
//                       policy
//                     </span>{" "}
//                     GDPR / CCPA Validated
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="material-symbols-outlined text-sm text-[#4edea3]">
//                       gavel
//                     </span>{" "}
//                     ISO 27001/27701
//                   </li>
//                 </ul>
//               </div>
//               <div className="space-y-4">
//                 <h4 className="font-bold text-[#c3c0ff] text-base md:text-lg">
//                   Integrity
//                 </h4>
//                 <ul className="text-xs md:text-sm text-[#c8c5d0] space-y-3 font-mono">
//                   <li className="flex items-center gap-2">
//                     <span className="material-symbols-outlined text-sm text-[#c3c0ff]">
//                       link
//                     </span>{" "}
//                     Blockchain-signed audit trails
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="material-symbols-outlined text-sm text-[#c3c0ff]">
//                       history
//                     </span>{" "}
//                     Immutable history logs
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <span className="material-symbols-outlined text-sm text-[#c3c0ff]">
//                       fingerprint
//                     </span>{" "}
//                     Per-matter forensic keys
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* SECTION 12: CUSTOMER CASE STUDY            */}
//         {/* ========================================== */}
//         <section className="py-24 px-8 md:px-12">
//           <div className="bg-[#1e1b4b]/10 border border-[#c4c1fb]/20 rounded-3xl p-12 flex flex-col md:flex-row gap-12 items-center">
//             <div className="md:w-1/3 shrink-0">
//               <div className="text-5xl font-extrabold text-[#c4c1fb] mb-2 tracking-tight">
//                 94%
//               </div>
//               <div className="text-[#c8c5d0] font-mono text-xs tracking-wider">
//                 REDUCTION IN INTAKE ERRORS
//               </div>
//             </div>
//             <div className="flex-1">
//               <p className="text-lg md:text-xl font-medium italic text-[#e5e1e6] mb-6 leading-relaxed">
//                 "Moving our case initiation to DEMS+ transformed our forensic
//                 labs. What used to take 3 days of conflict checking and
//                 jurisdictional mapping now happens in minutes—with zero manual
//                 errors."
//               </p>
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-full bg-[#201f23] border border-[#47464f]/40 flex items-center justify-center">
//                   <span className="material-symbols-outlined text-[#c4c1fb]">
//                     account_circle
//                   </span>
//                 </div>
//                 <div>
//                   <div className="font-bold text-sm md:text-base text-[#e5e1e6]">
//                     Director of eDiscovery
//                   </div>
//                   <div className="text-xs md:text-sm text-[#928f9a]">
//                     Top 10 Global Law Firm
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* NEW SECTION 13: REAL-TIME AUDIT LOG FEED   */}
//         {/* ========================================== */}
//         <section className="py-16 bg-[#0e0e11] border-y border-[#47464f]/30 px-8 md:px-12 font-mono text-xs">
//           <div className="max-w-5xl mx-auto space-y-4">
//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[#928f9a] border-b border-[#47464f]/30 pb-3">
//               <div className="flex items-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
//                 <span>TELEMETRY RECORD STREAM ({currentTimestamp})</span>
//               </div>
//               <div className="flex gap-2 text-[11px]">
//                 <button
//                   onClick={() => setSelectedLogType("all")}
//                   className={`px-2 py-0.5 rounded ${selectedLogType === "all" ? "bg-[#353438] text-white" : ""}`}
//                 >
//                   ALL_FEEDS
//                 </button>
//                 <button
//                   onClick={() => setSelectedLogType("alerts")}
//                   className={`px-2 py-0.5 rounded ${selectedLogType === "alerts" ? "bg-[#353438] text-white" : ""}`}
//                 >
//                   ALERTS
//                 </button>
//               </div>
//             </div>
//             <div className="space-y-2.5 text-[#c8c5d0]">
//               {(selectedLogType === "all" || selectedLogType === "alerts") && (
//                 <div className="p-3 bg-[#201f23]/40 border border-[#47464f]/20 rounded flex justify-between items-center text-red-300">
//                   <span>
//                     [WARNING] [INGESTION-SHARD-3] Anomaly profile scanned.
//                     Access rules assigned automatically.
//                   </span>
//                   <span>SEC_CHECK_BLOCK</span>
//                 </div>
//               )}
//               {(selectedLogType === "all" || selectedLogType === "audits") && (
//                 <div className="p-3 bg-[#201f23]/40 border border-[#47464f]/20 rounded flex justify-between items-center text-emerald-300">
//                   <span>
//                     [SUCCESS] [ROUTING-ENGINE] Asymmetric cryptographic key
//                     pairs allocated successfully.
//                   </span>
//                   <span>KEY_PROV_v4</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* SECTION 14: INDUSTRY-SPECIFIC BENEFITS     */}
//         {/* ========================================== */}
//         <section className="bg-[#0e0e11] py-24 border-b border-[#47464f]/40 px-8 md:px-12">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6] mb-12 text-center">
//               Built for Mission-Critical Sectors
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//               <div className="glass-card p-10 rounded-2xl border-l-8 border-l-[#c4c1fb]">
//                 <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#e5e1e6]">
//                   Law Firms
//                 </h3>
//                 <p className="text-[#c8c5d0] text-sm md:text-base mb-6 leading-relaxed">
//                   Protect your practice with airtight conflict screening and
//                   billable-ready matter structure from day one.
//                 </p>
//                 <ul className="space-y-3 text-xs md:text-sm text-[#c8c5d0]">
//                   <li className="flex gap-2 items-center">
//                     <span className="text-[#c4c1fb] font-bold">✓</span> Seamless
//                     Client-Matter sync
//                   </li>
//                   <li className="flex gap-2 items-center">
//                     <span className="text-[#c4c1fb] font-bold">✓</span>{" "}
//                     Immutable ethical walls
//                   </li>
//                   <li className="flex gap-2 items-center">
//                     <span className="text-[#c4c1fb] font-bold">✓</span>{" "}
//                     One-click litigation hold initiation
//                   </li>
//                 </ul>
//               </div>
//               <div className="glass-card p-10 rounded-2xl border-l-8 border-l-[#4edea3]">
//                 <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#e5e1e6]">
//                   Government &amp; GovTech
//                 </h3>
//                 <p className="text-[#c8c5d0] text-sm md:text-base mb-6 leading-relaxed">
//                   FedRAMP-ready intake for sensitive investigations with
//                   complete chain-of-custody transparency.
//                 </p>
//                 <ul className="space-y-3 text-xs md:text-sm text-[#c8c5d0]">
//                   <li className="flex gap-2 items-center">
//                     <span className="text-[#4edea3] font-bold">✓</span> NIST
//                     800-171 Compliance
//                   </li>
//                   <li className="flex gap-2 items-center">
//                     <span className="text-[#4edea3] font-bold">✓</span> PII/PHI
//                     redaction engine
//                   </li>
//                   <li className="flex gap-2 items-center">
//                     <span className="text-[#4edea3] font-bold">✓</span> Secure
//                     inter-agency collaboration
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* SECTION 15: CASE INITIATION FAQ            */}
//         {/* ========================================== */}
//         <section className="py-24 max-w-4xl mx-auto px-8 md:px-12">
//           <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6] mb-12 text-center">
//             Case Initiation FAQ
//           </h2>
//           <div className="space-y-4">
//             <div className="border-b border-[#47464f]/40 pb-6">
//               <button
//                 onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
//                 className="w-full flex justify-between items-center font-bold text-base md:text-lg text-left text-[#e5e1e6] bg-transparent outline-none focus:outline-none"
//               >
//                 <span>How does the real-time conflict screening work?</span>
//                 <span
//                   className={`material-symbols-outlined transform transition-transform duration-200 ${openFaq === 0 ? "rotate-180" : ""}`}
//                 >
//                   expand_more
//                 </span>
//               </button>
//               <div
//                 className={`transition-all duration-200 overflow-hidden ${openFaq === 0 ? "max-h-40 mt-4" : "max-h-0"}`}
//               >
//                 <p className="text-xs md:text-sm text-[#c8c5d0] leading-relaxed">
//                   Our engine crawls your historical matter database and connects
//                   to global corporate registries via API. It matches party
//                   names, aliases, and corporate hierarchies to flag potential
//                   adverse interests instantly during input.
//                 </p>
//               </div>
//             </div>

//             <div className="border-b border-[#47464f]/40 pb-6">
//               <button
//                 onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
//                 className="w-full flex justify-between items-center font-bold text-base md:text-lg text-left text-[#e5e1e6] bg-transparent outline-none focus:outline-none"
//               >
//                 <span>Can we customize the jurisdictional rules?</span>
//                 <span
//                   className={`material-symbols-outlined transform transition-transform duration-200 ${openFaq === 1 ? "rotate-180" : ""}`}
//                 >
//                   expand_more
//                 </span>
//               </button>
//               <div
//                 className={`transition-all duration-200 overflow-hidden ${openFaq === 1 ? "max-h-40 mt-4" : "max-h-0"}`}
//               >
//                 <p className="text-xs md:text-sm text-[#c8c5d0] leading-relaxed">
//                   Yes. While we provide 140+ global templates, your compliance
//                   team can override or add custom "Sentinel Checks" for specific
//                   regions or client-specific requirements.
//                 </p>
//               </div>
//             </div>

//             <div className="border-b border-[#47464f]/40 pb-6">
//               <button
//                 onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
//                 className="w-full flex justify-between items-center font-bold text-base md:text-lg text-left text-[#e5e1e6] bg-transparent outline-none focus:outline-none"
//               >
//                 <span>What happens to the data after intake?</span>
//                 <span
//                   className={`material-symbols-outlined transform transition-transform duration-200 ${openFaq === 2 ? "rotate-180" : ""}`}
//                 >
//                   expand_more
//                 </span>
//               </button>
//               <div
//                 className={`transition-all duration-200 overflow-hidden ${openFaq === 2 ? "max-h-40 mt-4" : "max-h-0"}`}
//               >
//                 <p className="text-xs md:text-sm text-[#c8c5d0] leading-relaxed">
//                   Once a case is initiated, all metadata is sealed into a
//                   forensic container. This container becomes the root for all
//                   future evidence collection, ensuring a perfect chain of
//                   custody.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* SECTION 16: FINAL CTA BAR                  */}
//         {/* ========================================== */}
//         <section className="py-24 text-center px-8 md:px-12 relative">
//           <div className="max-w-4xl mx-auto glass-card p-16 rounded-3xl relative overflow-hidden border border-[#47464f]/30">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#c3c0ff]/10 to-transparent pointer-events-none"></div>
//             <div className="relative z-10">
//               <h2 className="text-3xl md:text-4xl font-bold text-[#e5e1e6] mb-8 tracking-tight">
//                 Standardize your intake with{" "}
//                 <span className="text-[#c4c1fb]">DEMS+</span>
//               </h2>
//               <p className="text-[#c8c5d0] text-sm md:text-base mb-12 max-w-2xl mx-auto leading-relaxed">
//                 Stop starting matters in spreadsheets. Join 200+ global forensic
//                 teams who have modernized their intake with absolute
//                 transparency and Zero-Trust verification.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button className="px-10 py-5 bg-[#c3c0ff] text-[#1d00a5] font-extrabold rounded-xl hover:scale-105 transition-transform shadow-[0_0_25px_rgba(79,222,163,0.3)] text-sm md:text-base">
//                   Launch My First Matter
//                 </button>
//                 <button className="px-10 py-5 bg-[#201f23] border border-[#47464f] text-[#e5e1e6] font-bold rounded-xl hover:bg-[#353438] transition-colors text-sm md:text-base">
//                   Request Technical Specs
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ========================================== */}
//         {/* SECTION 17: BRAND TRUST / MATURITY BADGES  */}
//         {/* ========================================== */}
//         <section className="border-t border-[#47464f]/40 bg-[#0e0e11] py-16 px-8 md:px-12">
//           <div className="flex flex-wrap justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 gap-8">
//             <div className="font-mono text-xl md:text-2xl font-bold tracking-tighter text-[#e5e1e6]">
//               FEDERAL-SECURE
//             </div>
//             <div className="font-mono text-xl md:text-2xl font-bold tracking-tighter text-[#e5e1e6]">
//               GLOBAL_LEGAL_CO
//             </div>
//             <div className="font-mono text-xl md:text-2xl font-bold tracking-tighter text-[#e5e1e6]">
//               DEFENSE_ALLIANCE
//             </div>
//             <div className="font-mono text-xl md:text-2xl font-bold tracking-tighter text-[#e5e1e6]">
//               CYBER_UNIT_ONE
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";

// Tailwind custom CSS requirements injected inline for complete drop-in compatibility
const styleInjection = `
  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  .animate-scanline {
    animation: scanline 6s linear infinite;
  }
  .glass-card {
    background: rgba(32, 31, 35, 0.4);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(71, 70, 79, 0.3);
  }
  .glass-card-light {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .hover-glow:hover {
    box-shadow: 0 0 30px rgba(196, 193, 251, 0.15);
  }
`;

export const CreateCasesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [simulatedNode, setSimulatedNode] = useState<string>("node-us-east");
  const [activePipelineStage, setActivePipelineStage] = useState<number>(0);
  const [metricMultiplier, setMetricMultiplier] = useState<number>(1);
  const [selectedLogType, setSelectedLogType] = useState<
    "all" | "alerts" | "audits"
  >("all");
  const [currentTimestamp, setCurrentTimestamp] = useState<string>(
    "2026-07-03 00:21:02",
  );
  const [activeJurisdiction, setActiveJurisdiction] = useState<string>("eu");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTimestamp(now.toISOString().replace("T", " ").substring(0, 19));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const jurisdictions = {
    eu: {
      name: "European Union",
      regulation: "GDPR",
      status: "ENFORCED",
      color: "#4edea3",
      description:
        "Comprehensive data protection with strict consent requirements",
      countries: 27,
      fines: "€20M or 4% global turnover",
    },
    us: {
      name: "United States",
      regulation: "CCPA / SOC2",
      status: "ENFORCED",
      color: "#c4c1fb",
      description: "Consumer privacy rights with opt-out provisions",
      countries: 50,
      fines: "$7,500 per violation",
    },
    apac: {
      name: "Asia Pacific",
      regulation: "APPI / PDPA",
      status: "ENFORCED",
      color: "#c3c0ff",
      description: "Cross-border data transfer with localization requirements",
      countries: 11,
      fines: "Up to 2% annual revenue",
    },
    global: {
      name: "Global Privacy",
      regulation: "ISO 27701",
      status: "ENFORCED",
      color: "#ffb4ab",
      description: "International privacy framework with unified standards",
      countries: 140,
      fines: "Varies by jurisdiction",
    },
  };

  return (
    <div className="bg-[#131316] font-sans text-[#e5e1e6] antialiased min-h-screen selection:bg-[#c3c0ff] selection:text-[#0f0069]">
      <style>{styleInjection}</style>

      <main className="relative max-w-[1440px] mx-auto">
        {/* ========================================== */}
        {/* SECTION 1: HERO SECTION                    */}
        {/* ========================================== */}
        <section className="px-8 md:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e1b4b]/40 border border-[#c3c0ff]/30 text-[#c3c0ff] font-mono text-xs tracking-wider">
              <span className="material-symbols-outlined text-[16px]">
                verified_user
              </span>
              ZERO-TRUST INTAKE ENGINE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#e5e1e6] leading-tight tracking-tight">
              Initiate Matters with{" "}
              <span className="text-[#4edea3]">Intelligence.</span>
            </h1>
            <p className="text-[#c8c5d0] text-base md:text-lg max-w-xl leading-relaxed">
              The onboarding engine that screens for conflicts, jurisdictions,
              and complexity before the first file is ever uploaded. Ensure
              forensic integrity from the moment of inception.
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 max-w-xl">
              {[
                { value: "94%", label: "Faster Intake" },
                { value: "140+", label: "Jurisdictions" },
                { value: "99.8%", label: "Accuracy Rate" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-3 bg-[#1e1b4b]/20 rounded-xl border border-[#47464f]/30"
                >
                  <div className="text-xl font-bold text-[#c4c1fb]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#c8c5d0]">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-[#c3c0ff] text-[#1d00a5] font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(195,192,255,0.25)]">
                Standardize Your Intake Process
              </button>
              <button className="px-8 py-4 border border-[#928f9a] text-[#e5e1e6] font-bold rounded-xl hover:bg-[#353438] transition-all">
                View Interactive Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="glass-card rounded-2xl p-8 shadow-2xl relative overflow-hidden border border-[#47464f]/40">
              <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#c4c1fb] to-transparent top-0 animate-scanline" />
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ffb4ab]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#4edea3]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#c3c0ff]"></div>
                </div>
                <div className="font-mono text-xs text-[#928f9a] uppercase tracking-widest">
                  New Case Initiation v4.2
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-[#c8c5d0] tracking-wide">
                    MATTER TITLE
                  </label>
                  <div className="w-full bg-[#0e0e11] border border-[#47464f] p-3.5 rounded-lg flex justify-between items-center group transition-all hover:border-[#c4c1fb] hover:shadow-[0_0_10px_rgba(196,193,251,0.2)]">
                    <span className="text-[#c4c1fb] text-sm md:text-base font-medium">
                      Internal Investigation - Project Cipher
                    </span>
                    <span
                      className="material-symbols-outlined text-[#4edea3] text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-[#c8c5d0] tracking-wide">
                      JURISDICTION
                    </label>
                    <div className="w-full bg-[#0e0e11] border border-[#c3c0ff] p-3.5 rounded-lg text-[#e5e1e6] text-sm md:text-base flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-[#c3c0ff]">
                        public
                      </span>
                      European Union (GDPR)
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-[#c8c5d0] tracking-wide">
                      INTAKE TYPE
                    </label>
                    <div className="w-full bg-[#0e0e11] border border-[#47464f] p-3.5 rounded-lg text-[#e5e1e6] text-sm md:text-base transition-all hover:border-[#c4c1fb] hover:shadow-[0_0_10px_rgba(196,193,251,0.2)]">
                      Digital Forensics
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-[#002819]/40 border border-[#4edea3]/20 rounded-xl flex gap-4 items-start">
                  <span className="material-symbols-outlined text-[#4edea3] mt-0.5">
                    auto_awesome
                  </span>
                  <div>
                    <p className="text-[#4edea3] font-bold text-sm md:text-base">
                      AI Insight
                    </p>
                    <p className="text-[#c8c5d0] text-xs md:text-sm mt-0.5">
                      Cross-referencing global databases. No professional
                      conflicts detected for "Internal Investigation - Project
                      Cipher".
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 2: MULTI-STEP WORKFLOW             */}
        {/* ========================================== */}
        <section
          id="workflow"
          className="bg-[#0e0e11] py-24 border-y border-[#47464f]/40"
        >
          <div className="px-8 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6] mb-4">
                A Unified Path to Integrity
              </h2>
              <p className="text-[#c8c5d0] text-sm md:text-base max-w-2xl mx-auto">
                Five automated steps to ensure your matters start with full
                compliance and forensic readiness.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  num: "01",
                  title: "Matter Intake",
                  desc: "Metadata-driven initiation with custom schemas.",
                  color: "#c4c1fb",
                },
                {
                  num: "02",
                  title: "Conflict Check",
                  desc: "Automated entity matching across global nodes.",
                  color: "#4edea3",
                },
                {
                  num: "03",
                  title: "Jurisdiction",
                  desc: "Dynamic regulatory mapping (GDPR, SOC2, CCPA).",
                  color: "#c3c0ff",
                },
                {
                  num: "04",
                  title: "Team Sync",
                  desc: "RBAC-based role assignment and secure access.",
                  color: "#c4c1fb",
                },
                {
                  num: "05",
                  title: "Ready",
                  desc: "Final validation & forensic container creation.",
                  color: "#4edea3",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-xl border-t-4"
                  style={{ borderTopColor: step.color }}
                >
                  <div
                    className="font-mono text-sm mb-4 font-bold"
                    style={{ color: step.color }}
                  >
                    {step.num}
                  </div>
                  <h4 className="font-bold text-base mb-2 text-[#e5e1e6]">
                    {step.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[#c8c5d0]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 3: CONFLICT SCREENING DEEP-DIVE    */}
        {/* ========================================== */}
        <section
          id="intelligence"
          className="py-24 px-8 md:px-12 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#201f23] border-l-4 border-[#ffb4ab]">
                <span className="material-symbols-outlined text-[#ffb4ab] text-xl">
                  priority_high
                </span>
                <div>
                  <div className="text-sm md:text-base font-bold text-[#e5e1e6]">
                    Adverse Entity Flagged
                  </div>
                  <div className="text-xs md:text-sm text-[#c8c5d0]">
                    Matched "Lumina Corp" in Global Conflict Database.
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-[#201f23] border-l-4 border-[#4edea3]">
                <span className="material-symbols-outlined text-[#4edea3] text-xl">
                  verified
                </span>
                <div>
                  <div className="text-sm md:text-base font-bold text-[#e5e1e6]">
                    Professional Clearance
                  </div>
                  <div className="text-xs md:text-sm text-[#c8c5d0]">
                    Zero-trust audit: Internal ethical wall confirmed.
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 glass-card rounded-xl">
                <div className="font-mono text-xs text-[#928f9a] mb-4 uppercase tracking-[0.2em]">
                  Logic Flow: screening_engine_v2
                </div>
                <div className="font-mono text-xs md:text-sm text-[#c4c1fb] space-y-1.5">
                  <div>&gt; INIT conflict_check --entity "Client A"</div>
                  <div>
                    &gt; SCAN database.global_records...{" "}
                    <span className="text-[#4edea3]">OK</span>
                  </div>
                  <div>
                    &gt; VERIFY immutable_logs --chain DEMS_MAIN...{" "}
                    <span className="text-[#4edea3]">OK</span>
                  </div>
                  <div>&gt; RESULT: Clear to proceed.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ffb4ab]/10 border border-[#ffb4ab]/30 text-[#ffb4ab] font-mono text-xs font-medium">
              <span className="material-symbols-outlined text-[16px]">
                gshield
              </span>
              ZERO-TRUST ARCHITECTURE
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6]">
              Deep-Dive Conflict Logic
            </h2>
            <p className="text-[#c8c5d0] text-sm md:text-base leading-relaxed">
              Our proprietary screening engine uses a Zero-Trust framework to
              validate every entity involved. We don't just check names; we
              verify relationships, professional histories, and internal ethical
              walls using blockchain-verified audit trails.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#4edea3] mt-0.5 text-lg">
                  check_circle
                </span>
                <span className="text-sm md:text-base text-[#e5e1e6]">
                  Immutable screening logs recorded on-chain for defensibility.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#4edea3] mt-0.5 text-lg">
                  check_circle
                </span>
                <span className="text-sm md:text-base text-[#e5e1e6]">
                  Real-time alerts for newly discovered potential conflicts.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 4: INTERACTIVE NODE TELEMETRY      */}
        {/* ========================================== */}
        <section className="bg-[#201f23] py-20 border-y border-[#47464f]/30 px-8 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/20 text-[#4edea3] font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping" />
                LIVE NETWORK OVERWATCH
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Active Ingestion Staging Nodes
              </h3>
              <p className="text-sm md:text-base text-[#c8c5d0]">
                Select an infrastructure storage shard to verify latency
                metrics, cryptographic compliance thresholds, and isolation
                states.
              </p>
              <div className="flex gap-2 font-mono text-xs">
                <button
                  onClick={() => setSimulatedNode("node-us-east")}
                  className={`px-4 py-2.5 rounded-lg border transition-all ${simulatedNode === "node-us-east" ? "bg-[#c3c0ff] text-[#1d00a5] border-transparent" : "bg-[#0e0e11] border-[#47464f] text-[#c8c5d0]"}`}
                >
                  US-EAST-GOV
                </button>
                <button
                  onClick={() => setSimulatedNode("node-eu-central")}
                  className={`px-4 py-2.5 rounded-lg border transition-all ${simulatedNode === "node-eu-central" ? "bg-[#c3c0ff] text-[#1d00a5] border-transparent" : "bg-[#0e0e11] border-[#47464f] text-[#c8c5d0]"}`}
                >
                  EU-CENTRAL-1
                </button>
              </div>
            </div>
            <div className="lg:col-span-7 bg-[#0e0e11] p-6 rounded-2xl border border-[#47464f]/40 font-mono text-xs space-y-4">
              <div className="flex justify-between border-b border-[#47464f]/40 pb-3 text-[#928f9a]">
                <span>CLUSTER OVERVIEW</span>
                <span>STATE: OPERATIONAL</span>
              </div>
              {simulatedNode === "node-us-east" ? (
                <div className="space-y-2 text-[#c8c5d0]">
                  <p>
                    📂 LOCATION:{" "}
                    <span className="text-[#e5e1e6] font-bold">
                      AWS GovCloud (US East)
                    </span>
                  </p>
                  <p>
                    🔒 ENCRYPTION:{" "}
                    <span className="text-[#4edea3] font-bold">
                      FIPS 140-3 Hardware Envelope
                    </span>
                  </p>
                  <p>
                    ⏳ LATENCY SWEEP:{" "}
                    <span className="text-[#c3c0ff] font-bold">11ms</span>
                  </p>
                  <p>
                    📜 CERTIFICATE:{" "}
                    <span className="text-[#4edea3]">
                      Valid (SHA-256 Validated)
                    </span>
                  </p>
                </div>
              ) : (
                <div className="space-y-2 text-[#c8c5d0]">
                  <p>
                    📂 LOCATION:{" "}
                    <span className="text-[#e5e1e6] font-bold">
                      Frankfurt Shard Zone B
                    </span>
                  </p>
                  <p>
                    🔒 ENCRYPTION:{" "}
                    <span className="text-[#4edea3] font-bold">
                      AES-256 Sovereign Bound
                    </span>
                  </p>
                  <p>
                    ⏳ LATENCY SWEEP:{" "}
                    <span className="text-[#c3c0ff] font-bold">24ms</span>
                  </p>
                  <p>
                    📜 CERTIFICATE:{" "}
                    <span className="text-[#4edea3]">
                      Valid (BSI-Compliant Chain)
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 5: JURISDICTIONAL INTELLIGENCE MAP - ENHANCED */}
        {/* ========================================== */}
        <section className="py-24 border-b border-[#47464f]/40 px-8 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6] mb-4">
              Global Jurisdictional Intelligence
            </h2>
            <p className="text-[#c8c5d0] text-sm md:text-base max-w-2xl mx-auto">
              Real-time regulatory mapping across 140+ jurisdictions with
              automated compliance checking and risk assessment.
            </p>
          </div>

          {/* Jurisdiction Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {Object.entries(jurisdictions).map(([key, value]) => (
              <div
                key={key}
                onClick={() => setActiveJurisdiction(key)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeJurisdiction === key
                    ? "bg-[#1e1b4b]/40 border-[#c4c1fb] shadow-[0_0_20px_rgba(196,193,251,0.1)]"
                    : "bg-[#201f23] border-[#47464f]/30 hover:border-[#c4c1fb]/50"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ color: value.color }}
                  >
                    public
                  </span>
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: value.color }}
                  >
                    {value.status}
                  </span>
                </div>
                <h4 className="font-bold text-[#e5e1e6] text-sm">
                  {value.name}
                </h4>
                <p className="text-xs text-[#c4c1fb] font-mono mt-1">
                  {value.regulation}
                </p>
                <p className="text-xs text-[#c8c5d0] mt-2">
                  {value.description}
                </p>
                <div className="flex justify-between mt-3 pt-3 border-t border-[#47464f]/30 text-xs text-[#928f9a]">
                  <span>{value.countries} Countries</span>
                  <span>Fines: {value.fines}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Jurisdiction Map Visualization */}
          <div className="relative w-full aspect-video md:aspect-[21/9] bg-[#0e0e11] rounded-3xl border border-[#47464f]/30 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c4c1fb_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(jurisdictions).map(([key, value]) => (
                <div key={key} className="text-center group">
                  <div className="w-16 h-16 bg-[#c4c1fb]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                    <span
                      className="material-symbols-outlined text-3xl"
                      style={{ color: value.color }}
                    >
                      public
                    </span>
                  </div>
                  <div className="font-bold text-sm md:text-base">
                    {value.name}
                  </div>
                  <div
                    className="text-xs font-mono font-bold mt-1"
                    style={{ color: value.color }}
                  >
                    {value.status}
                  </div>
                  <div className="text-[10px] text-[#928f9a] mt-0.5">
                    {value.regulation}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-8 right-8 font-mono text-[#928f9a] text-xs">
              Coverage: 140+ Jurisdictions
            </div>
          </div>

          {/* Compliance Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
            {[
              { value: "140+", label: "Jurisdictions Covered" },
              { value: "99.8%", label: "Compliance Accuracy" },
              { value: "24/7", label: "Real-time Updates" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-4 bg-[#1e1b4b]/20 rounded-xl border border-[#47464f]/30"
              >
                <div className="text-xl font-bold text-[#4edea3]">
                  {stat.value}
                </div>
                <div className="text-xs text-[#c8c5d0]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 6: MATTER TEMPLATES GALLERY        */}
        {/* ========================================== */}
        <section id="templates" className="py-24 px-8 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6] mb-2">
                Matter Template Gallery
              </h2>
              <p className="text-[#c8c5d0] text-sm md:text-base max-w-xl">
                Standardize initiation for every investigation type with
                pre-baked, legally-vetted workflow skeletons.
              </p>
            </div>
            <button className="px-6 py-2.5 border border-[#928f9a] text-[#e5e1e6] rounded-lg hover:bg-[#353438] transition-colors font-medium text-sm">
              Browse All 50+ Templates
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "biotech",
                title: "IP Theft Investigation",
                desc: "Designed for rapid isolation of source code repos and email exports. NIST-compliant imaging steps included.",
                tags: ["SOC2", "GDPR"],
              },
              {
                icon: "account_balance",
                title: "AML / KYC Audit",
                desc: "Enhanced due diligence tracking with automated FinCEN report placeholders and entity mapping.",
                tags: ["FINANCIAL", "SEC"],
              },
              {
                icon: "groups",
                title: "Internal Ethics / HR",
                desc: "Focus on anonymity and chain of custody for reporter statements. Strict RBAC protocols enabled by default.",
                tags: ["ANONYMOUS", "HIPAA"],
              },
            ].map((template, idx) => (
              <div
                key={idx}
                className="glass-card p-8 rounded-2xl group hover:border-[#c4c1fb] transition-all cursor-pointer border border-transparent"
              >
                <span className="material-symbols-outlined text-[#c4c1fb] text-4xl mb-6 block">
                  {template.icon}
                </span>
                <h4 className="text-lg md:text-xl font-bold mb-3 text-[#e5e1e6]">
                  {template.title}
                </h4>
                <p className="text-xs md:text-sm text-[#c8c5d0] mb-6 leading-relaxed">
                  {template.desc}
                </p>
                <div className="flex gap-2 font-mono text-xs">
                  {template.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#201f23] text-[#c8c5d0] px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 7: INTERACTIVE VALUE CALCULATOR    */}
        {/* ========================================== */}
        <section className="bg-[#0e0e11] py-24 border-y border-[#47464f]/40 px-8 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-xs font-mono text-[#c3c0ff] tracking-widest uppercase mb-2">
                ROI SIMULATION TOOL
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Projected Risk Reduction Matrix
              </h3>
              <p className="text-[#c8c5d0] text-sm mt-2">
                Adjust active case scaling to evaluate cross-border compliance
                efficiency index parameters.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center bg-[#201f23] p-8 rounded-2xl border border-[#47464f]/30">
              <div className="space-y-5">
                <p className="text-sm text-[#c8c5d0]">
                  Adjust active case scaling to evaluate cross-border compliance
                  efficiency index parameters:
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold text-[#928f9a]">
                    <span>CONCURRENT MONTHLY MATTERS</span>
                    <span className="text-[#c4c1fb]">
                      {10 * metricMultiplier} Active mat.
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={metricMultiplier}
                    onChange={(e) =>
                      setMetricMultiplier(Number(e.target.value))
                    }
                    className="w-full accent-[#c3c0ff] bg-[#0e0e11] rounded"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs text-[#928f9a]">
                  <div>1x</div>
                  <div className="text-center">5x</div>
                  <div className="text-right">10x</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center font-mono">
                <div className="bg-[#0e0e11] p-4 rounded-xl border border-[#47464f]/40">
                  <span className="text-xs text-[#928f9a] block uppercase">
                    Hours Saved
                  </span>
                  <span className="text-2xl font-bold text-[#4edea3] mt-1 block">
                    {45 * metricMultiplier} hrs
                  </span>
                  <span className="text-[10px] text-[#928f9a]">
                    Per investigation
                  </span>
                </div>
                <div className="bg-[#0e0e11] p-4 rounded-xl border border-[#47464f]/40">
                  <span className="text-xs text-[#928f9a] block uppercase">
                    Defensibility
                  </span>
                  <span className="text-2xl font-bold text-[#c3c0ff] mt-1 block">
                    99.8%
                  </span>
                  <span className="text-[10px] text-[#928f9a]">
                    Audit ready
                  </span>
                </div>
                <div className="bg-[#0e0e11] p-4 rounded-xl border border-[#47464f]/40 col-span-2">
                  <span className="text-xs text-[#928f9a] block uppercase">
                    Risk Reduction
                  </span>
                  <span className="text-2xl font-bold text-[#c4c1fb] mt-1 block">
                    {15 * metricMultiplier}%
                  </span>
                  <span className="text-[10px] text-[#928f9a]">
                    Cross-border compliance errors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 8: SEAMLESS ECOSYSTEM SYNC - ENHANCED */}
        {/* ========================================== */}
        <section
          id="integrations"
          className="py-24 border-b border-[#47464f]/40 px-8 md:px-12"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#c3c0ff]/10 border border-[#c3c0ff]/30 text-[#c3c0ff] font-mono text-xs font-medium mb-4">
                <span className="material-symbols-outlined text-[16px]">
                  settings_ethernet
                </span>
                INTEGRATION ECOSYSTEM
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6] mb-6">
                Seamless Ecosystem Sync
              </h2>
              <p className="text-[#c8c5d0] text-sm md:text-base mb-8 leading-relaxed">
                DEMS+ doesn't live in a silo. We integrate directly with your
                existing identity providers and cloud infrastructure to ensure
                that intake data flows where it's needed—securely.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Okta SSO", icon: "Ok" },
                  { label: "Azure AD", icon: "Az" },
                  { label: "Slack Grid", icon: "Sl" },
                  { label: "AWS S3", icon: "Aw" },
                  { label: "Google Workspace", icon: "G" },
                  { label: "ServiceNow", icon: "SN" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#201f23] rounded-lg border border-[#47464f] flex items-center gap-3 hover:border-[#c4c1fb] transition-all hover-glow"
                  >
                    <span className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-bold text-sm text-[#e5e1e6]">
                      {item.icon}
                    </span>
                    <span className="font-mono text-sm text-[#e5e1e6]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="text-xs bg-[#1e1b4b]/40 text-[#c8c5d0] px-3 py-1.5 rounded-full border border-[#47464f]/30">
                  REST API
                </span>
                <span className="text-xs bg-[#1e1b4b]/40 text-[#c8c5d0] px-3 py-1.5 rounded-full border border-[#47464f]/30">
                  Webhooks
                </span>
                <span className="text-xs bg-[#1e1b4b]/40 text-[#c8c5d0] px-3 py-1.5 rounded-full border border-[#47464f]/30">
                  GraphQL
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#c4c1fb]/10 blur-3xl rounded-full"></div>
              <div className="relative glass-card p-10 rounded-3xl border-[#c4c1fb]/20 flex flex-col items-center justify-center min-h-[300px]">
                {/* Connection Nodes Visualization */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#c4c1fb]"></div>
                  <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-[#4edea3]"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-[#c3c0ff]"></div>
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-[#c4c1fb] animate-pulse"></div>
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 rounded-full bg-[#1e1b4b] border border-[#c3c0ff]/30 flex items-center justify-center shadow-[0_0_25px_rgba(195,192,255,0.2)] mx-auto">
                    <span className="material-symbols-outlined text-4xl text-[#c3c0ff]">
                      hub
                    </span>
                  </div>
                  <div className="h-12 w-px bg-gradient-to-b from-[#c3c0ff] to-transparent my-4 mx-auto"></div>
                  <div className="font-mono text-xs text-[#928f9a] uppercase tracking-widest">
                    CORE INTAKE ENGINE
                  </div>
                  <div className="text-xs text-[#4edea3] mt-2">
                    Connected to 50+ Enterprise Services
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 9: COGNITIVE PARTNER AI ASSISTANT  */}
        {/* ========================================== */}
        <section className="py-24 px-8 md:px-12">
          <div className="glass-card p-12 rounded-3xl bg-gradient-to-br from-[#002819]/20 to-transparent border border-[#4edea3]/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-[#4edea3] font-mono text-xs uppercase tracking-wider font-bold">
                  <span className="material-symbols-outlined text-sm">
                    smart_toy
                  </span>
                  AI COGNITIVE PARTNER
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6]">
                  Meet your Forensic Assistant.
                </h2>
                <p className="text-[#c8c5d0] text-sm md:text-base leading-relaxed">
                  Not just a chatbot. Our AI partner analyzes matter metadata in
                  real-time to suggest jurisdictional frameworks, identify
                  missing required documentation, and predict potential forensic
                  bottlenecks based on thousands of historical cases.
                </p>
                <button className="px-6 py-3 bg-[#4edea3] text-[#003824] font-bold rounded-lg shadow-[0_0_15px_rgba(78,222,163,0.25)]">
                  Explore AI Insights
                </button>
              </div>
              <div className="bg-[#0e0e11] p-6 rounded-2xl border border-[#47464f]/40 relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#4edea3] flex items-center justify-center text-[#003824] shrink-0">
                    <span className="material-symbols-outlined text-base">
                      auto_awesome
                    </span>
                  </div>
                  <div className="flex-1 bg-[#201f23] p-4 rounded-xl rounded-tl-none">
                    <p className="text-xs md:text-sm text-[#e5e1e6] leading-relaxed">
                      "I've detected that this matter involves data from Berlin.
                      I've automatically added the German Federal Data
                      Protection Act (BDSG) compliance checklist to your
                      template."
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#928f9a] font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                  AI IS ANALYZING RECENT JURISDICTIONAL UPDATES...
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 10: AUTOMATED PIPELINE VISUAL - ENHANCED */}
        {/* ========================================== */}
        <section className="bg-[#0e0e11] py-24 border-y border-[#47464f]/40 px-8 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-xs font-mono text-[#4edea3] uppercase tracking-widest font-bold mb-2">
                PIPELINE TELEMETRY
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                Staging Enclosure Validation Status
              </h3>
              <p className="text-[#c8c5d0] text-sm mt-2">
                Real-time verification of cryptographic integrity and compliance
                readiness.
              </p>
            </div>

            {/* Pipeline Progress Indicator */}
            <div className="flex items-center justify-between mb-8 relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#47464f]/30 -translate-y-1/2"></div>
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                      activePipelineStage >= idx
                        ? "border-[#4edea3] bg-[#4edea3]/20 text-[#4edea3]"
                        : "border-[#47464f] bg-[#0e0e11] text-[#928f9a]"
                    }`}
                  >
                    {activePipelineStage > idx ? (
                      <span className="material-symbols-outlined text-sm">
                        check
                      </span>
                    ) : (
                      <span className="text-sm">{idx + 1}</span>
                    )}
                  </div>
                  <span
                    className={`text-[10px] mt-2 font-mono ${activePipelineStage >= idx ? "text-[#c8c5d0]" : "text-[#928f9a]"}`}
                  >
                    {["Hash Gen", "Boundary Match", "Key Attestation"][idx]}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3 font-mono text-xs border-b border-[#47464f]/30 pb-6 mb-8">
              {[
                {
                  title: "1. HASH GENERATION",
                  desc: "SHA-256 Block Immutable Verification",
                },
                {
                  title: "2. BOUNDARY MATCH",
                  desc: "Logical Namespace Route Check",
                },
                {
                  title: "3. KEY ATTESTATION",
                  desc: "Asymmetric Pair Handshake Complete",
                },
              ].map((stage, idx) => (
                <div
                  key={idx}
                  onClick={() => setActivePipelineStage(idx)}
                  className={`p-4 rounded-xl border cursor-pointer flex-1 transition-all ${activePipelineStage === idx ? "bg-[#201f23] border-[#c4c1fb] shadow-[0_0_15px_rgba(196,193,251,0.05)]" : "bg-transparent border-[#47464f]/40"}`}
                >
                  <p
                    className={`font-bold ${activePipelineStage === idx ? "text-[#c4c1fb]" : "text-[#e5e1e6]"}`}
                  >
                    {stage.title}
                  </p>
                  <p className="text-[#928f9a] text-[11px] mt-1">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Pipeline Details */}
            <div className="bg-[#201f23] p-6 rounded-xl border border-[#47464f]/30 font-mono text-xs text-[#c8c5d0] space-y-3">
              {activePipelineStage === 0 && (
                <>
                  <p className="leading-relaxed">
                    » System tracking signature strings inside transient
                    boundary states. Cryptographic collision risk parameter
                    checked:{" "}
                    <span className="text-[#4edea3] font-bold">
                      0.0000% Probability Detected
                    </span>
                    .
                  </p>
                  <div className="flex justify-between text-[10px] text-[#928f9a] pt-2 border-t border-[#47464f]/20">
                    <span>Hash: 0x7f83b12ce4aef99011bc</span>
                    <span>
                      Status: <span className="text-[#4edea3]">VERIFIED</span>
                    </span>
                  </div>
                </>
              )}
              {activePipelineStage === 1 && (
                <>
                  <p className="leading-relaxed">
                    » Verifying physical localization storage maps. Target
                    sector isolated within dedicated multi-tenant secure
                    container matrices seamlessly.
                  </p>
                  <div className="flex justify-between text-[10px] text-[#928f9a] pt-2 border-t border-[#47464f]/20">
                    <span>Boundary: EU-CENTRAL-1</span>
                    <span>
                      Status: <span className="text-[#4edea3]">ISOLATED</span>
                    </span>
                  </div>
                </>
              )}
              {activePipelineStage === 2 && (
                <>
                  <p className="leading-relaxed">
                    » Handshake authorization sequence written to local hardware
                    security block logs at node interface checkpoint safely.
                  </p>
                  <div className="flex justify-between text-[10px] text-[#928f9a] pt-2 border-t border-[#47464f]/20">
                    <span>
                      Key: RSA-4096-
                      <span className="text-[#4edea3]">VALID</span>
                    </span>
                    <span>
                      Status: <span className="text-[#4edea3]">ATTESTED</span>
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 11: TECHNICAL INTEGRITY SPECS - ENHANCED */}
        {/* ========================================== */}
        <section className="py-24 border-b border-[#47464f]/40 px-8 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6] mb-4">
              Technical Integrity Specifications
            </h2>
            <p className="text-[#c8c5d0] text-sm md:text-base max-w-2xl mx-auto">
              Enterprise-grade security and compliance standards built into
              every layer of the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Encryption */}
            <div className="bg-[#201f23] p-8 rounded-2xl border border-[#47464f]/30 hover:border-[#c4c1fb]/50 transition-all hover-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#c4c1fb]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#c4c1fb] text-2xl">
                    lock
                  </span>
                </div>
                <h4 className="font-bold text-[#c4c1fb] text-lg">Encryption</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] text-sm">
                    check_circle
                  </span>
                  <div>
                    <div className="font-bold text-[#e5e1e6] text-sm">
                      AES-256-GCM
                    </div>
                    <div className="text-xs text-[#c8c5d0]">
                      Military-grade encryption at rest
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] text-sm">
                    check_circle
                  </span>
                  <div>
                    <div className="font-bold text-[#e5e1e6] text-sm">
                      TLS 1.3
                    </div>
                    <div className="text-xs text-[#c8c5d0]">
                      Secure data in transit
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] text-sm">
                    check_circle
                  </span>
                  <div>
                    <div className="font-bold text-[#e5e1e6] text-sm">
                      FIPS 140-2 Level 3 HSM
                    </div>
                    <div className="text-xs text-[#c8c5d0]">
                      Hardware security module certified
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Compliance */}
            <div className="bg-[#201f23] p-8 rounded-2xl border border-[#47464f]/30 hover:border-[#4edea3]/50 transition-all hover-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#4edea3]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#4edea3] text-2xl">
                    verified
                  </span>
                </div>
                <h4 className="font-bold text-[#4edea3] text-lg">Compliance</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] text-sm">
                    check_circle
                  </span>
                  <div>
                    <div className="font-bold text-[#e5e1e6] text-sm">
                      SOC2 Type II
                    </div>
                    <div className="text-xs text-[#c8c5d0]">
                      Security and availability certified
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] text-sm">
                    check_circle
                  </span>
                  <div>
                    <div className="font-bold text-[#e5e1e6] text-sm">
                      GDPR / CCPA
                    </div>
                    <div className="text-xs text-[#c8c5d0]">
                      Global privacy regulation compliance
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] text-sm">
                    check_circle
                  </span>
                  <div>
                    <div className="font-bold text-[#e5e1e6] text-sm">
                      ISO 27001/27701
                    </div>
                    <div className="text-xs text-[#c8c5d0]">
                      Information security management
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Integrity */}
            <div className="bg-[#201f23] p-8 rounded-2xl border border-[#47464f]/30 hover:border-[#c3c0ff]/50 transition-all hover-glow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#c3c0ff]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#c3c0ff] text-2xl">
                    fingerprint
                  </span>
                </div>
                <h4 className="font-bold text-[#c3c0ff] text-lg">Integrity</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] text-sm">
                    check_circle
                  </span>
                  <div>
                    <div className="font-bold text-[#e5e1e6] text-sm">
                      Blockchain Audit
                    </div>
                    <div className="text-xs text-[#c8c5d0]">
                      Immutable audit trails
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] text-sm">
                    check_circle
                  </span>
                  <div>
                    <div className="font-bold text-[#e5e1e6] text-sm">
                      Immutable History
                    </div>
                    <div className="text-xs text-[#c8c5d0]">
                      Complete historical log preservation
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] text-sm">
                    check_circle
                  </span>
                  <div>
                    <div className="font-bold text-[#e5e1e6] text-sm">
                      Per-Matter Forensic Keys
                    </div>
                    <div className="text-xs text-[#c8c5d0]">
                      Unique cryptographic identity
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Certifications */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "FedRAMP Ready",
              "HIPAA Compliant",
              "PCI DSS",
              "NIST 800-53",
              "CSA STAR",
            ].map((cert, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-[#1e1b4b]/40 border border-[#47464f]/30 rounded-full text-xs text-[#c8c5d0] font-mono"
              >
                {cert}
              </span>
            ))}
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 12: CUSTOMER CASE STUDY            */}
        {/* ========================================== */}
        <section className="py-24 px-8 md:px-12">
          <div className="bg-[#1e1b4b]/10 border border-[#c4c1fb]/20 rounded-3xl p-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 shrink-0">
              <div className="text-5xl font-extrabold text-[#c4c1fb] mb-2 tracking-tight">
                94%
              </div>
              <div className="text-[#c8c5d0] font-mono text-xs tracking-wider">
                REDUCTION IN INTAKE ERRORS
              </div>
            </div>
            <div className="flex-1">
              <p className="text-lg md:text-xl font-medium italic text-[#e5e1e6] mb-6 leading-relaxed">
                "Moving our case initiation to DEMS+ transformed our forensic
                labs. What used to take 3 days of conflict checking and
                jurisdictional mapping now happens in minutes—with zero manual
                errors."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#201f23] border border-[#47464f]/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#c4c1fb]">
                    account_circle
                  </span>
                </div>
                <div>
                  <div className="font-bold text-sm md:text-base text-[#e5e1e6]">
                    Director of eDiscovery
                  </div>
                  <div className="text-xs md:text-sm text-[#928f9a]">
                    Top 10 Global Law Firm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 13: REAL-TIME AUDIT LOG FEED       */}
        {/* ========================================== */}
        <section className="py-16 bg-[#0e0e11] border-y border-[#47464f]/30 px-8 md:px-12 font-mono text-xs">
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[#928f9a] border-b border-[#47464f]/30 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span>TELEMETRY RECORD STREAM ({currentTimestamp})</span>
              </div>
              <div className="flex gap-2 text-[11px]">
                <button
                  onClick={() => setSelectedLogType("all")}
                  className={`px-2 py-0.5 rounded ${selectedLogType === "all" ? "bg-[#353438] text-white" : ""}`}
                >
                  ALL_FEEDS
                </button>
                <button
                  onClick={() => setSelectedLogType("alerts")}
                  className={`px-2 py-0.5 rounded ${selectedLogType === "alerts" ? "bg-[#353438] text-white" : ""}`}
                >
                  ALERTS
                </button>
              </div>
            </div>
            <div className="space-y-2.5 text-[#c8c5d0]">
              {(selectedLogType === "all" || selectedLogType === "alerts") && (
                <div className="p-3 bg-[#201f23]/40 border border-[#47464f]/20 rounded flex justify-between items-center text-red-300">
                  <span>
                    [WARNING] [INGESTION-SHARD-3] Anomaly profile scanned.
                    Access rules assigned automatically.
                  </span>
                  <span>SEC_CHECK_BLOCK</span>
                </div>
              )}
              {(selectedLogType === "all" || selectedLogType === "audits") && (
                <div className="p-3 bg-[#201f23]/40 border border-[#47464f]/20 rounded flex justify-between items-center text-emerald-300">
                  <span>
                    [SUCCESS] [ROUTING-ENGINE] Asymmetric cryptographic key
                    pairs allocated successfully.
                  </span>
                  <span>KEY_PROV_v4</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 14: INDUSTRY-SPECIFIC BENEFITS - ENHANCED */}
        {/* ========================================== */}
        <section className="py-24 border-b border-[#47464f]/40 px-8 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6] mb-4">
              Built for Mission-Critical Sectors
            </h2>
            <p className="text-[#c8c5d0] text-sm md:text-base max-w-2xl mx-auto">
              Industry-specific solutions designed to meet the unique challenges
              of each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Law Firms */}
            <div className="bg-[#201f23] p-8 rounded-2xl border-l-4 border-l-[#c4c1fb] hover:shadow-[0_0_30px_rgba(196,193,251,0.05)] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c1fb] text-2xl">
                  gavel
                </span>
                <h3 className="text-xl font-bold text-[#e5e1e6]">Law Firms</h3>
              </div>
              <p className="text-[#c8c5d0] text-sm mb-6 leading-relaxed">
                Protect your practice with airtight conflict screening and
                billable-ready matter structure from day one.
              </p>
              <ul className="space-y-3 text-xs md:text-sm text-[#c8c5d0]">
                <li className="flex gap-2 items-center">
                  <span className="text-[#c4c1fb] font-bold">✓</span> Seamless
                  Client-Matter sync
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#c4c1fb] font-bold">✓</span> Immutable
                  ethical walls
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#c4c1fb] font-bold">✓</span> One-click
                  litigation hold initiation
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#c4c1fb] font-bold">✓</span> Automated
                  privilege logs
                </li>
              </ul>
            </div>

            {/* Government */}
            <div className="bg-[#201f23] p-8 rounded-2xl border-l-4 border-l-[#4edea3] hover:shadow-[0_0_30px_rgba(78,222,163,0.05)] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#4edea3] text-2xl">
                  account_balance
                </span>
                <h3 className="text-xl font-bold text-[#e5e1e6]">
                  Government & GovTech
                </h3>
              </div>
              <p className="text-[#c8c5d0] text-sm mb-6 leading-relaxed">
                FedRAMP-ready intake for sensitive investigations with complete
                chain-of-custody transparency.
              </p>
              <ul className="space-y-3 text-xs md:text-sm text-[#c8c5d0]">
                <li className="flex gap-2 items-center">
                  <span className="text-[#4edea3] font-bold">✓</span> NIST
                  800-171 Compliance
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#4edea3] font-bold">✓</span> PII/PHI
                  redaction engine
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#4edea3] font-bold">✓</span> Secure
                  inter-agency collaboration
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#4edea3] font-bold">✓</span> Classified
                  handling protocols
                </li>
              </ul>
            </div>

            {/* Corporate */}
            <div className="bg-[#201f23] p-8 rounded-2xl border-l-4 border-l-[#c3c0ff] hover:shadow-[0_0_30px_rgba(195,192,255,0.05)] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c3c0ff] text-2xl">
                  business_center
                </span>
                <h3 className="text-xl font-bold text-[#e5e1e6]">
                  Corporate Investigations
                </h3>
              </div>
              <p className="text-[#c8c5d0] text-sm mb-6 leading-relaxed">
                Internal investigation management with strict confidentiality
                and cross-functional team collaboration.
              </p>
              <ul className="space-y-3 text-xs md:text-sm text-[#c8c5d0]">
                <li className="flex gap-2 items-center">
                  <span className="text-[#c3c0ff] font-bold">✓</span>{" "}
                  Multi-department coordination
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#c3c0ff] font-bold">✓</span>{" "}
                  Whistleblower anonymity
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#c3c0ff] font-bold">✓</span> HR
                  integration workflows
                </li>
                <li className="flex gap-2 items-center">
                  <span className="text-[#c3c0ff] font-bold">✓</span>{" "}
                  Board-ready reporting
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 15: CASE INITIATION FAQ            */}
        {/* ========================================== */}
        <section className="py-24 max-w-4xl mx-auto px-8 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#e5e1e6] mb-12 text-center">
            Case Initiation FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How does the real-time conflict screening work?",
                a: "Our engine crawls your historical matter database and connects to global corporate registries via API. It matches party names, aliases, and corporate hierarchies to flag potential adverse interests instantly during input.",
              },
              {
                q: "Can we customize the jurisdictional rules?",
                a: "Yes. While we provide 140+ global templates, your compliance team can override or add custom 'Sentinel Checks' for specific regions or client-specific requirements.",
              },
              {
                q: "What happens to the data after intake?",
                a: "Once a case is initiated, all metadata is sealed into a forensic container. This container becomes the root for all future evidence collection, ensuring a perfect chain of custody.",
              },
              {
                q: "How is data sovereignty handled?",
                a: "DEMS+ supports data residency requirements by allowing you to select specific storage regions for each matter, ensuring compliance with local data protection laws.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-b border-[#47464f]/40 pb-6">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center font-bold text-base md:text-lg text-left text-[#e5e1e6] bg-transparent outline-none focus:outline-none"
                >
                  <span>{item.q}</span>
                  <span
                    className={`material-symbols-outlined transform transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`transition-all duration-200 overflow-hidden ${openFaq === idx ? "max-h-40 mt-4" : "max-h-0"}`}
                >
                  <p className="text-xs md:text-sm text-[#c8c5d0] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        

        {/* ========================================== */}
        {/* SECTION 16: FINAL CTA BAR - ASYMMETRIC REDESIGN */}
        {/* ========================================== */}
        <section className="py-28 px-6 sm:px-8 md:px-12 bg-[#f4f2f5] relative overflow-hidden">
          {/* Absolute subtle glowing backing point */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#3323cc]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <div className="bg-white border border-[#928f9a]/30 rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-12">
              {/* LEFT SURFACE: VIRTUAL INTENDED PIPELINE INTERFACE (5 Columns) */}
              <div className="lg:col-span-5 bg-[#131316] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden text-[#e5e1e6] border-b lg:border-b-0 lg:border-r border-[#47464f]/30">
                {/* Decorative subtle ambient terminal highlight */}
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#3323cc]/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-ping" />
                      <span className="text-[10px] font-mono tracking-widest text-[#928f9a] uppercase">
                        LIVE_INTAKE_STREAM
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#3323cc] bg-[#3323cc]/20 border border-[#3323cc]/30 px-2 py-0.5 rounded">
                      v2.4.0
                    </span>
                  </div>

                  {/* Simulated File Intake Visualizer */}
                  <div className="space-y-3 font-mono text-xs bg-[#201f23] p-4 rounded-xl border border-[#47464f]/30">
                    <div className="flex justify-between items-center text-[#928f9a] pb-2 border-b border-[#47464f]/20">
                      <span>LEGACY_SPREADSHEETS</span>
                      <span className="text-[#a6001a] font-bold">
                        DEPRECATED
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[#e5e1e6]/90 pt-1">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-[#3323cc]">
                          arrow_right_alt
                        </span>
                        Secure Matter Migration
                      </span>
                      <span className="text-[#4edea3]">100%</span>
                    </div>
                    <div className="w-full bg-[#47464f]/40 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#3323cc] to-[#4edea3] h-full w-full" />
                    </div>
                  </div>

                  <p className="text-xs text-[#928f9a] leading-relaxed">
                    Instantly replace unstable tracker sheets with decentralized
                    Zero-Trust matter indexing keys.
                  </p>
                </div>

                {/* Micro KPI Data Footer */}
                <div className="mt-12 pt-6 border-t border-[#47464f]/30 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xl font-bold tracking-tight text-white">
                      99.8%
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#928f9a]">
                      Verification Accuracy
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-bold tracking-tight text-white">
                      140+
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#928f9a]">
                      Supported Regions
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SURFACE: PRINCIPAL CONVERSION ACTION PANEL (7 Columns) */}
              <div className="lg:col-span-7 p-8 md:p-14 lg:p-16 flex flex-col justify-center space-y-8 bg-white text-[#131316]">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "System Standardization",
                      "24/7 Global Support Nodes",
                    ].map((badge, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono tracking-wider font-bold text-[#3323cc] bg-[#3323cc]/5 border border-[#3323cc]/10 px-2.5 py-1 rounded"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#131316] leading-tight">
                    Standardize your forensic intake with{" "}
                    <span className="text-[#3323cc]">DEMS+</span>
                  </h2>

                  <p className="text-[#47464f] text-sm md:text-base leading-relaxed max-w-xl">
                    Stop losing vital chains of evidence within un-vetted,
                    unstructured local files. Join top-tier data protection
                    teams using end-to-end telemetry validation.
                  </p>
                </div>

                {/* Main Operational Call To Action Links */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-[#3323cc] text-white font-bold rounded-xl hover:bg-[#1d00a5] hover:shadow-lg active:scale-[0.98] transition-all text-center text-sm">
                    Launch Your First Matter
                  </button>
                  <button className="px-8 py-4 bg-white border-2 border-[#928f9a]/40 text-[#131316] font-bold rounded-xl hover:bg-[#f4f2f5] hover:border-[#131316] transition-colors text-center text-sm">
                    Request Architecture Specs
                  </button>
                </div>

                {/* Trust Verification Signatures */}
                <div className="pt-6 border-t border-[#928f9a]/20 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] text-[#47464f]">
                  <span className="text-[#131316] font-bold uppercase tracking-wider text-[10px]">
                    Attested Standards:
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span
                      className="material-symbols-outlined text-[#005236] text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    SOC2 Type II
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span
                      className="material-symbols-outlined text-[#005236] text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    GDPR Compliant
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span
                      className="material-symbols-outlined text-[#005236] text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    ISO 27001
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* ========================================== */}
        {/* SECTION 17: BRAND TRUST / PARTNERSHIPS - TELEMETRY LAYOUT */}
        {/* ========================================== */}
        <section className="border-t border-[#928f9a]/20 bg-[#f4f2f5] text-[#131316] py-28 px-6 sm:px-8 md:px-12 relative overflow-hidden">
          {/* Subtly textured background grid for enterprise alignment vibe */}
          <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#3323cc_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              {/* LEFT COLUMN (Anchor & Narrative - 5 Columns) */}
              <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#3323cc]/10 text-[#3323cc] font-mono text-[10px] font-bold tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3323cc] animate-pulse" />
                    Network Ecosystem Sync
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tight text-[#131316] leading-none">
                    Validated by Authority.
                  </h3>
                  <p className="text-[#47464f] text-sm md:text-base leading-relaxed">
                    DEMS+ operations cross-reference compliance architectures
                    for over 200+ multinational firms, security bureaus, and
                    elite legal partnerships globally.
                  </p>
                </div>

                {/* Dynamic Metric Rows (Replacing basic boxes with precise performance indicators) */}
                <div className="space-y-5 pt-4 border-t border-[#928f9a]/30">
                  {[
                    {
                      label: "Active Operational Nodes",
                      value: "200+",
                      percentage: "w-[85%]",
                    },
                    {
                      label: "Jurisdictions Fully Mapped",
                      value: "45+",
                      percentage: "w-[70%]",
                    },
                    {
                      label: "Uptime SLA Attestation",
                      value: "99.9%",
                      percentage: "w-[99.9%]",
                    },
                    {
                      label: "Client Validation Rating",
                      value: "4.9/5",
                      percentage: "w-[96%]",
                    },
                  ].map((metric, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between items-end font-mono text-xs">
                        <span className="text-[#47464f] uppercase tracking-wider">
                          {metric.label}
                        </span>
                        <span className="font-bold text-[#131316] text-sm">
                          {metric.value}
                        </span>
                      </div>
                      <div className="h-1 w-full bg-[#e5e1e6] rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-[#3323cc] rounded-full ${metric.percentage}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN (Interactive Structural Cards - 7 Columns) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Federal-Secure Systems",
                      tag: "GOVERNMENT",
                      icon: "account_balance",
                      metric: "NIST SP 800-171",
                      description:
                        "Validated framework parameters built directly into dynamic air-gapped clearance nodes.",
                    },
                    {
                      name: "Global Legal Consortium",
                      tag: "ENTERPRISE LAW",
                      icon: "gavel",
                      metric: "AmLaw 50 Standard",
                      description:
                        "Handles cross-border data transfer limitations and multi-party discovery tracking effortlessly.",
                    },
                    {
                      name: "Defense Alliance Network",
                      tag: "AEROSPACE & INTEL",
                      icon: "shield_with_heart",
                      metric: "ITAR Compliant",
                      description:
                        "Strict isolation configurations monitoring critical data environments without exposure risk.",
                    },
                    {
                      name: "Cyber Unit One",
                      tag: "INCIDENT RESPONSE",
                      icon: "detector_smoke",
                      metric: "Real-time Telemetry",
                      description:
                        "Continuous validation auditing built directly into active detection and threat intelligence lines.",
                    },
                  ].map((partner, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-xl border border-[#928f9a]/20 shadow-sm hover:shadow-md hover:border-[#3323cc]/30 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                    >
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-mono font-bold tracking-widest text-[#3323cc] bg-[#3323cc]/5 px-2 py-0.5 rounded">
                            {partner.tag}
                          </span>
                          <span className="material-symbols-outlined text-[#928f9a] group-hover:text-[#3323cc] transition-colors text-lg">
                            {partner.icon}
                          </span>
                        </div>
                        <h4 className="font-bold text-base text-[#131316] group-hover:text-[#3323cc] transition-colors">
                          {partner.name}
                        </h4>
                        <p className="text-xs text-[#47464f] leading-relaxed">
                          {partner.description}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-[#f4f2f5] font-mono text-[10px] text-[#928f9a] flex justify-between">
                        <span>STANDARD:</span>
                        <span className="font-bold text-[#131316]">
                          {partner.metric}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Compliance Badge Inline Banner */}
                <div className="bg-white rounded-xl border border-[#928f9a]/20 p-4 flex flex-wrap gap-2 items-center justify-center">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#47464f] mr-2">
                    Certified Protocols:
                  </span>
                  {[
                    "SOC2 Type II",
                    "GDPR",
                    "ISO 27001",
                    "FedRAMP Ready",
                    "HIPAA",
                  ].map((badge, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono font-medium text-[#131316] bg-[#f4f2f5] border border-[#928f9a]/20 px-2.5 py-1 rounded"
                    >
                      ✓ {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* INFINITE RUNNING STRIP (Redesigned as an industrial sub-section) */}
            <div className="mt-24 pt-8 border-t border-[#928f9a]/30 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f4f2f5] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f4f2f5] to-transparent z-10 pointer-events-none" />

              <div className="flex animate-marquee gap-20 items-center opacity-30 grayscale hover:opacity-60 transition-opacity duration-300">
                {[
                  "FEDERAL-SECURE",
                  "GLOBAL_LEGAL_CO",
                  "DEFENSE_ALLIANCE",
                  "CYBER_UNIT_ONE",
                  "NOVA_LEGAL",
                  "AEGIS_SECURE",
                  "VERITAS_LAW",
                  "SENTINEL_GLOBAL",
                  "FEDERAL-SECURE",
                  "GLOBAL_LEGAL_CO",
                  "DEFENSE_ALLIANCE",
                  "CYBER_UNIT_ONE",
                  "NOVA_LEGAL",
                  "AEGIS_SECURE",
                  "VERITAS_LAW",
                  "SENTINEL_GLOBAL",
                ].map((name, idx) => (
                  <div
                    key={idx}
                    className="font-mono text-sm tracking-[0.25em] font-black text-[#131316] whitespace-nowrap"
                  >
                    {name} // SYSTEM_LINKED
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
