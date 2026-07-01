// import React, { useState } from "react";
// import {
//   Lock,
//   Fingerprint,
//   Eye,
//   ShieldCheck,
//   AlertTriangle,
//   Terminal,
//   ChevronRight,
//   CheckCircle2,
//   Server,
//   Database,
//   Shield,
//   Cpu,
//   Network,
//   ArrowRight,
//   Layers,
// } from "lucide-react";

// export const SecurityPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"sha" | "rbac" | "exp">("sha");

//   return (
//     <div className="min-h-screen bg-white font-sans text-[#1E293B] selection:bg-indigo-500 selection:text-white antialiased">
//       {/* 1. DARK HERO SECTION: Forensic Security & Chain-of-Custody Integrity */}
//       <section className="relative bg-[#030712] py-32 overflow-hidden border-b border-gray-900">
//         {/* Fine vertical matrix grid lines overlay */}
//         <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px)] bg-[size:40px_100%]" />

//         <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
//           <div className="inline-flex items-center space-x-2 bg-[#111827] border border-gray-800 rounded-full px-4 py-1.5 mb-8">
//             <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
//             <span className="text-[11px] font-mono tracking-widest text-indigo-400 uppercase font-bold">
//               DEFENSE-IN-DEPTH COMPLIANCE BOUNDARY
//             </span>
//           </div>

//           <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight max-w-5xl mx-auto mb-8 leading-[1.1]">
//             Forensic Security & Chain-of-Custody Integrity
//           </h1>

//           <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
//             DEMS+ mitigates data manipulation and access exploitation vectors
//             across global investigation workflows using multi-layered zero-trust
//             encryption pipelines.
//           </p>

//           <div className="w-full max-w-md mx-auto h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6" />

//           <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono tracking-wider text-gray-500 uppercase">
//             <span>PLATFORM SPECIFICATION RUNTIME: v4.26</span>
//             <span className="text-gray-700">|</span>
//             <span>SECURE CRYPTOGRAPHIC PROTOCOLS</span>
//           </div>
//         </div>
//       </section>

//       {/* 2. STATUTORY COMPLIANCES & HARDENED LAYERS GRID */}
//       <section className="bg-[#F8FAFC] py-24 border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-12 gap-12 items-start">
//             {/* Left Content / Grid Matrix */}
//             <div className="lg:col-span-7 space-y-12">
//               <div>
//                 <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase block mb-2">
//                   HARDENED LAYERS
//                 </span>
//                 <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">
//                   Security-First Platform Design
//                 </h2>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 {/* Card 1 */}
//                 <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
//                   <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
//                     <Lock className="w-5 h-5" />
//                   </div>
//                   <h3 className="text-lg font-bold text-[#0F172A] mb-3">
//                     Encryption Matrices
//                   </h3>
//                   <p className="text-sm text-gray-500 leading-relaxed">
//                     AES-256 block protection seals data items at rest, while TLS
//                     1.3 transit networks isolate ongoing client communications.
//                   </p>
//                 </div>

//                 {/* Card 2 */}
//                 <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
//                   <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
//                     <Fingerprint className="w-5 h-5" />
//                   </div>
//                   <h3 className="text-lg font-bold text-[#0F172A] mb-3">
//                     Zero-Trust Authorization
//                   </h3>
//                   <p className="text-sm text-gray-500 leading-relaxed">
//                     No implicit asset permissions. Continuous multi-tenant user
//                     authentication checks run beside every single read/write
//                     query.
//                   </p>
//                 </div>

//                 {/* Card 3 */}
//                 <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
//                   <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
//                     <Eye className="w-5 h-5" />
//                   </div>
//                   <h3 className="text-lg font-bold text-[#0F172A] mb-3">
//                     Immutable Activity Traces
//                   </h3>
//                   <p className="text-sm text-gray-500 leading-relaxed">
//                     Platform transactions log immediately to append-only tables,
//                     establishing permanent proof of chain-of-custody tracking.
//                   </p>
//                 </div>

//                 {/* Card 4 */}
//                 <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
//                   <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
//                     <ShieldCheck className="w-5 h-5" />
//                   </div>
//                   <h3 className="text-lg font-bold text-[#0F172A] mb-3">
//                     Cryptographic Custody
//                   </h3>
//                   <p className="text-sm text-gray-500 leading-relaxed">
//                     Hardware Security Module (HSM) key boundaries enforce
//                     absolute separation between independent corporate discovery
//                     vaults.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Statutory Framework Card */}
//             <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm lg:mt-14">
//               <h3 className="text-xl font-bold text-[#0F172A] mb-3">
//                 Statutory Framework Compliances
//               </h3>
//               <p className="text-sm text-gray-500 leading-relaxed mb-8">
//                 DEMS+ engineering strategies match the requirements of heavily
//                 monitored government and commercial data systems.
//               </p>

//               <div className="flex flex-wrap gap-2.5 mb-8">
//                 {[
//                   "SOC2 Type II",
//                   "ISO 27001",
//                   "FedRAMP High Ready",
//                   "GDPR",
//                   "HIPAA",
//                   "CJIS Compliant",
//                   "PCI DSS Level 1",
//                 ].map((badge) => (
//                   <span
//                     key={badge}
//                     className="bg-[#F1F5F9] text-[#475569] border border-gray-200 text-xs font-mono px-3 py-1.5 rounded-lg font-semibold"
//                   >
//                     {badge}
//                   </span>
//                 ))}
//               </div>

//               <div className="border-t border-gray-100 pt-6">
//                 <div className="flex items-start space-x-3">
//                   <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
//                     <CheckCircle2 className="w-4 h-4" />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-bold text-[#0F172A] mb-1">
//                       Persistent Monitoring Perimeter
//                     </h4>
//                     <p className="text-xs text-gray-400 leading-relaxed">
//                       Automated detection mechanisms monitor operational
//                       endpoints around the clock to isolate external threats and
//                       prevent token exploitation attempts.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. VULNERABILITY RECTIFICATION SECTION */}
//       <section className="bg-white py-24 border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <span className="text-[11px] font-mono font-bold tracking-widest text-rose-500 bg-rose-50 border border-rose-100 px-3 py-1 rounded-md uppercase inline-block mb-4">
//             VULNERABILITY RECTIFICATION
//           </span>
//           <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight mb-4">
//             Mitigating Systemic Vulnerability Risks
//           </h2>
//           <p className="text-gray-500 max-w-3xl mx-auto mb-16 text-sm md:text-base leading-relaxed">
//             Manual evidence pipelines leak critical metadata and fail security
//             audits. DEMS+ replaces insecure storage habits with automated
//             verification workflows.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8 text-left">
//             {/* Risk Card 1 */}
//             <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-gray-200">
//               <div className="w-8 h-8 bg-rose-50 border border-rose-100 rounded-lg flex items-center justify-center mb-6 text-rose-500">
//                 <AlertTriangle className="w-4 h-4" />
//               </div>
//               <h3 className="text-lg font-bold text-[#0F172A] mb-3">
//                 Insecure Transmission Paths
//               </h3>
//               <p className="text-sm text-gray-500 leading-relaxed">
//                 Sharing files via chat clients or personal drives strips out
//                 metadata and compromises security postures. DEMS+ handles all
//                 transfers inside isolated, authenticated sessions.
//               </p>
//             </div>

//             {/* Risk Card 2 */}
//             <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-gray-200">
//               <div className="w-8 h-8 bg-rose-50 border border-rose-100 rounded-lg flex items-center justify-center mb-6 text-rose-500">
//                 <AlertTriangle className="w-4 h-4" />
//               </div>
//               <h3 className="text-lg font-bold text-[#0F172A] mb-3">
//                 Weak Client Validation
//               </h3>
//               <p className="text-sm text-gray-500 leading-relaxed">
//                 Basic password storage allows credential exploitation across
//                 enterprise groups. DEMS+ secures identities using `bcrypt` key
//                 salting alongside time-delimited JWT controls.
//               </p>
//             </div>

//             {/* Risk Card 3 */}
//             <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-gray-200">
//               <div className="w-8 h-8 bg-rose-50 border border-rose-100 rounded-lg flex items-center justify-center mb-6 text-rose-500">
//                 <AlertTriangle className="w-4 h-4" />
//               </div>
//               <h3 className="text-lg font-bold text-[#0F172A] mb-3">
//                 Undetected Asset Alternations
//               </h3>
//               <p className="text-sm text-gray-500 leading-relaxed">
//                 Standard storage platforms cannot verify if a video or document
//                 was altered after download. DEMS+ uses cryptographic checksums
//                 to detect file changes immediately.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. PLATFORM POSITIONING MATRIX COMPARE */}
//       <section className="bg-[#F8FAFC] py-24 border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="mb-12">
//             <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase block mb-2">
//               PLATFORM POSITIONING MATRIX
//             </span>
//             <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight mb-2">
//               Security & Trust Architecture Positioning
//             </h2>
//             <p className="text-sm text-gray-500">
//               See how DEMS+ compares to standard file handling systems and
//               alternative litigation applications.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Column 1 */}
//             <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
//               <div>
//                 <span className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase block mb-2">
//                   E-DISCOVERY COMPETITORS
//                 </span>
//                 <h3 className="text-base font-black text-[#0F172A] mb-3">
//                   Relativity / Everlaw
//                 </h3>
//                 <p className="text-xs text-gray-400 leading-relaxed">
//                   Built for document document indexing and research indexing,
//                   but often relies on external vendor pipelines to track primary
//                   chain-of-custody logs.
//                 </p>
//               </div>
//               <div className="pt-6 border-t border-gray-100 mt-6 text-xs font-mono font-bold text-indigo-600">
//                 DEMS+: Native Trace Verification
//               </div>
//             </div>

//             {/* Column 2 */}
//             <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
//               <div>
//                 <span className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase block mb-2">
//                   FORENSIC SOFTWARE
//                 </span>
//                 <h3 className="text-base font-black text-[#0F172A] mb-3">
//                   EnCase / CaseGuard
//                 </h3>
//                 <p className="text-xs text-gray-400 leading-relaxed">
//                   Highly capable laboratory processing platforms that lack
//                   zero-trust web sharing networks for multi-tenant collaborative
//                   access control.
//                 </p>
//               </div>
//               <div className="pt-6 border-t border-gray-100 mt-6 text-xs font-mono font-bold text-indigo-600">
//                 DEMS+: Zero-Trust Web Delivery
//               </div>
//             </div>

//             {/* Column 3 */}
//             <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
//               <div>
//                 <span className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase block mb-2">
//                   PRACTICE MANAGEMENT
//                 </span>
//                 <h3 className="text-base font-black text-[#0F172A] mb-3">
//                   Clio / iManage
//                 </h3>
//                 <p className="text-xs text-gray-400 leading-relaxed">
//                   Designed primarily around firm operations and billable hours
//                   tracking, with limited focus on forensic-grade file tamper
//                   protection rules.
//                 </p>
//               </div>
//               <div className="pt-6 border-t border-gray-100 mt-6 text-xs font-mono font-bold text-indigo-600">
//                 DEMS+: Cryptographic Vaulting
//               </div>
//             </div>

//             {/* Column 4 */}
//             <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
//               <div>
//                 <span className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase block mb-2">
//                   COLLABORATION TOOLS
//                 </span>
//                 <h3 className="text-base font-black text-[#0F172A] mb-3">
//                   SharePoint / Drives
//                 </h3>
//                 <p className="text-xs text-gray-400 leading-relaxed">
//                   Provides easy team file collaboration but lacks strict
//                   judicial chain-of-custody logging frameworks or CJIS data
//                   profiles.
//                 </p>
//               </div>
//               <div className="pt-6 border-t border-gray-100 mt-6 text-xs font-mono font-bold text-indigo-600">
//                 DEMS+: Courtroom Admissibility
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 5. INTERACTIVE TERMINAL: Runtime Cryptographic Verification Trace */}
//       <section className="bg-[#030712] py-24 overflow-hidden border-b border-gray-900">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-12 gap-12 items-center">
//             {/* Terminal Left Meta */}
//             <div className="lg:col-span-5 space-y-6">
//               <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-400 bg-indigo-950/50 border border-indigo-900/60 px-3 py-1 rounded uppercase inline-block">
//                 INTERACTIVE TERMINAL
//               </span>
//               <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
//                 Runtime Cryptographic Verification Trace
//               </h2>
//               <p className="text-sm text-gray-400 leading-relaxed">
//                 Select an infrastructure validation track below to audit active
//                 security telemetry configurations running across your platform
//                 gateway.
//               </p>

//               {/* Tabs Container */}
//               <div className="space-y-3 pt-4">
//                 <button
//                   onClick={() => setActiveTab("sha")}
//                   className={`w-full text-left p-4 rounded-xl flex items-center justify-between border transition-all ${
//                     activeTab === "sha"
//                       ? "bg-[#4F46E5] text-white border-transparent shadow-lg shadow-indigo-600/20"
//                       : "bg-[#0B0F19] text-gray-400 border-gray-800/80 hover:bg-[#111827]"
//                   }`}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Cpu className="w-4 h-4" />
//                     <span className="text-sm font-semibold">
//                       SHA-256 Validation Hash
//                     </span>
//                   </div>
//                   <ChevronRight className="w-4 h-4" />
//                 </button>

//                 <button
//                   onClick={() => setActiveTab("rbac")}
//                   className={`w-full text-left p-4 rounded-xl flex items-center justify-between border transition-all ${
//                     activeTab === "rbac"
//                       ? "bg-[#4F46E5] text-white border-transparent"
//                       : "bg-[#0B0F19] text-gray-400 border-gray-800/80 hover:bg-[#111827]"
//                   }`}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Shield className="w-4 h-4" />
//                     <span className="text-sm font-semibold">
//                       Role-Based Access Gate
//                     </span>
//                   </div>
//                   <ChevronRight className="w-4 h-4" />
//                 </button>

//                 <button
//                   onClick={() => setActiveTab("exp")}
//                   className={`w-full text-left p-4 rounded-xl flex items-center justify-between border transition-all ${
//                     activeTab === "exp"
//                       ? "bg-[#4F46E5] text-white border-transparent"
//                       : "bg-[#0B0F19] text-gray-400 border-gray-800/80 hover:bg-[#111827]"
//                   }`}
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Lock className="w-4 h-4" />
//                     <span className="text-sm font-semibold">
//                       Signed Access Expirations
//                     </span>
//                   </div>
//                   <ChevronRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Terminal Right Display Window */}
//             <div className="lg:col-span-7 bg-[#0B0F19] rounded-2xl border border-gray-800 shadow-2xl p-6 font-mono text-xs overflow-x-auto">
//               <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6 text-gray-500">
//                 <div className="flex items-center space-x-2">
//                   <Terminal className="w-4 h-4 text-gray-400" />
//                   <span>_ DEMS_SECURITY_KERNEL // TELEMETRY</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50">
//                   <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
//                   <span>99.91% NOMINAL</span>
//                 </div>
//               </div>

//               {activeTab === "sha" && (
//                 <div className="space-y-4 text-gray-400">
//                   <p className="text-indigo-400 font-bold">
//                     // ITEM INTEGRITY IDENTIFICATION CHECK
//                   </p>
//                   <p className="leading-relaxed">
//                     Platform engines generate a deterministic checksum upon data
//                     discovery, comparing values during each interaction to block
//                     modification risks.
//                   </p>
//                   <div className="bg-[#030712] p-4 rounded-lg space-y-2 border border-gray-900 text-[11px]">
//                     <p>
//                       <span className="text-gray-500">INGRESS_ASSET:</span>{" "}
//                       exhibit_9981_audio.wav
//                     </p>
//                     <p>
//                       <span className="text-gray-500">VERIFY_ALGO:</span>{" "}
//                       Bitwise SHA-256 Engine Running...
//                     </p>
//                     <p>
//                       <span className="text-gray-500">CHECKSUM:</span>{" "}
//                       <span className="text-emerald-400 font-bold break-all">
//                         a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
//                       </span>
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {activeTab === "rbac" && (
//                 <div className="space-y-4 text-gray-400">
//                   <p className="text-indigo-400 font-bold">
//                     // ROLE-BASED PRIVILEGE BOUNDARY ANALYSIS
//                   </p>
//                   <p className="leading-relaxed">
//                     Evaluates incoming session identity properties against
//                     multi-layer organizational tenancy access control manifests.
//                   </p>
//                   <div className="bg-[#030712] p-4 rounded-lg space-y-2 border border-gray-900 text-[11px]">
//                     <p>
//                       <span className="text-gray-500">
//                         RESOLVING_PRINCIPAL:
//                       </span>{" "}
//                       Det_Jenkins@metropol.gov
//                     </p>
//                     <p>
//                       <span className="text-gray-500">TARGET_SCOPE:</span>{" "}
//                       SECURE_CASE_VAULT_09
//                     </p>
//                     <p>
//                       <span className="text-gray-500">GATEWAY_RESPONSE:</span>{" "}
//                       <span className="text-indigo-400 font-bold">
//                         ACCESS_GRANTED (Clearance Tier 3 Verified)
//                       </span>
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {activeTab === "exp" && (
//                 <div className="space-y-4 text-gray-400">
//                   <p className="text-indigo-400 font-bold">
//                     // TIMED SIGNATURE EPHEMERAL TOKEN MATRIX
//                   </p>
//                   <p className="leading-relaxed">
//                     All generated external asset delivery networks deploy
//                     restricted token URLs engineered to self-expire inside
//                     absolute timelines.
//                   </p>
//                   <div className="bg-[#030712] p-4 rounded-lg space-y-2 border border-gray-900 text-[11px]">
//                     <p>
//                       <span className="text-gray-500">TOKEN_STRUCTURE:</span>{" "}
//                       HMAC-SHA512 Web Signature
//                     </p>
//                     <p>
//                       <span className="text-gray-500">TTL_EXPIRATION:</span> 600
//                       Seconds Remaining
//                     </p>
//                     <p>
//                       <span className="text-gray-500">STATUS:</span>{" "}
//                       <span className="text-amber-400 font-bold">
//                         ENFORCED // Dynamic Countdown Polling Active
//                       </span>
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 6. COURT-READY CRYPTOGRAPHIC CUSTODY FOCUS */}
//       <section className="bg-[#030712] py-24 overflow-hidden border-b border-gray-900">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-12 gap-12 items-center">
//             {/* Text details */}
//             <div className="lg:col-span-6 space-y-4">
//               <span className="text-[10px] font-mono font-bold tracking-widest text-[#4F46E5] uppercase block">
//                 LEGAL ADMISSIBILITY FOCUS
//               </span>
//               <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
//                 Court-Ready Cryptographic Custody
//               </h2>
//               <p className="text-gray-400 text-sm md:text-base leading-relaxed">
//                 DEMS+ turns standard case tracking into a verifiable,
//                 tamper-resistant record. By connecting digital storage to
//                 continuous file verification, we secure evidence from ingestion
//                 all the way to legal presentation.
//               </p>
//             </div>

//             {/* Right Side Status Panel Code Block */}
//             <div className="lg:col-span-6 bg-[#0B0F19] rounded-2xl border border-gray-800 p-6 font-mono text-xs">
//               <h4 className="text-gray-400 font-bold border-b border-gray-800 pb-3 uppercase tracking-wider">
//                 ACTIVE SYSTEM STATUS OVERVIEW
//               </h4>
//               <div className="divide-y divide-gray-800/60 text-gray-500">
//                 <div className="py-4 flex justify-between items-center">
//                   <span>» Dynamic Tracking Loops:</span>
//                   <span className="text-emerald-400 font-semibold bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30">
//                     Sealed
//                   </span>
//                 </div>
//                 <div className="py-4 flex justify-between items-center">
//                   <span>» Binary File Repositories:</span>
//                   <span className="text-indigo-400 font-semibold bg-indigo-950/20 px-2 py-0.5 rounded border border-indigo-900/30">
//                     Private
//                   </span>
//                 </div>
//                 <div className="py-4 flex justify-between items-center">
//                   <span>» User Privilege Gates:</span>
//                   <span className="text-emerald-400 font-semibold bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30">
//                     Active
//                   </span>
//                 </div>
//               </div>
//               <div className="pt-4 text-[10px] text-gray-600 tracking-wider">
//                 DOCUMENT COMPILED: 19 MAY 2026 // OFFICIAL SECURITY COMPLIANCE
//                 MANIFEST
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 7. FUTURE STRATEGIC ROADMAP SECTION */}
//       <section className="bg-white py-24 border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <span className="text-[11px] font-mono font-bold tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-md uppercase inline-block mb-4">
//             ENGINEERING HORIZONS
//           </span>
//           <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight mb-4">
//             Future Strategic Roadmap
//           </h2>
//           <p className="text-gray-500 max-w-3xl mx-auto mb-16 text-sm leading-relaxed">
//             DEMS+ is engineered with integration hooks designed to accommodate
//             future advancements in public security architectures.
//           </p>

//           <div className="max-w-4xl mx-auto space-y-4 text-left font-mono text-xs">
//             {/* Row 1 */}
//             <div className="bg-[#F8FAFC] border border-gray-200 p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//               <div className="flex items-center space-x-3 text-[#0F172A] font-bold">
//                 <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
//                 <span>Decentralized Immutable Ledger Signatures</span>
//               </div>
//               <span className="bg-gray-200 text-gray-700 font-bold px-2 py-1 rounded text-[10px] tracking-wider">
//                 HORIZON ALPHA
//               </span>
//             </div>

//             {/* Row 2 */}
//             <div className="bg-[#F8FAFC] border border-gray-200 p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//               <div className="flex items-center space-x-3 text-[#0F172A] font-bold">
//                 <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
//                 <span>AI-Driven Behavioral Threat Detection Logs</span>
//               </div>
//               <span className="bg-gray-200 text-gray-700 font-bold px-2 py-1 rounded text-[10px] tracking-wider">
//                 HORIZON BETA
//               </span>
//             </div>

//             {/* Row 3 */}
//             <div className="bg-[#F8FAFC] border border-gray-200 p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//               <div className="flex items-center space-x-3 text-[#0F172A] font-bold">
//                 <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
//                 <span>Multi-Factor Biometric Endpoint Hardening</span>
//               </div>
//               <span className="bg-gray-200 text-gray-700 font-bold px-2 py-1 rounded text-[10px] tracking-wider">
//                 HORIZON GAMMA
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 8. ISOLATED MULTI-TIER NETWORK LAYERS DIAGRAM */}
//       <section className="bg-[#F8FAFC] py-24">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <span className="text-[11px] font-mono font-bold tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-md uppercase inline-block mb-4">
//             TOPOLOGY FOOTPRINT
//           </span>
//           <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight mb-4">
//             Isolated Multi-Tier Network Layer
//           </h2>
//           <p className="text-gray-500 max-w-3xl mx-auto mb-16 text-sm leading-relaxed">
//             DEMS+ separates system responsibilities across individual
//             microservice boundaries to prevent unauthorized data visibility or
//             side-channel exploits.
//           </p>

//           {/* Interactive Topology Container Mock */}
//           <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 shadow-sm text-left">
//             {/* Top View Layer */}
//             <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
//               <div className="bg-[#0F172A] text-white font-mono text-[10px] px-3 py-2 rounded-lg font-bold flex items-center space-x-2">
//                 <Network className="w-3 h-3 text-indigo-400" />
//                 <span>CLIENT FRONTEND VIEW</span>
//               </div>
//               <p className="text-xs text-gray-500 leading-relaxed font-mono">
//                 React application dashboard rendering secure views. User request
//                 parameters stream securely down to gateway entryways alongside
//                 validated token matrices.
//               </p>
//             </div>

//             {/* Ingress Linker Arrow */}
//             <div className="py-6 text-center text-gray-400 font-mono text-[11px]">
//               ↓ Secure API Gateway Route Ingress ↓
//             </div>

//             {/* Middleware Isolated Boxes */}
//             <div className="border border-gray-200 rounded-xl p-6 bg-[#F8FAFC] space-y-4">
//               <span className="text-[9px] font-mono font-bold text-gray-400 tracking-wider uppercase block">
//                 ISOLATED SERVICE MIDDLEWARE SUBSYSTEMS
//               </span>
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center text-[11px] font-mono font-bold text-[#334155]">
//                 {[
//                   "Authentication Engine",
//                   "User Profiles",
//                   "Case Records",
//                   "Evidence Core",
//                   "Audit Ledger",
//                   "Notifications",
//                 ].map((service) => (
//                   <div
//                     key={service}
//                     className="bg-white border border-gray-200 py-4 px-2 rounded-lg shadow-sm"
//                   >
//                     {service}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Partition Layout Linker Arrow */}
//             <div className="py-6 text-center text-gray-400 font-mono text-[11px]">
//               ↓ Partitioned Storage Layout ↓
//             </div>

//             {/* Bottom Persistent DB Layers */}
//             <div className="grid md:grid-cols-2 gap-4">
//               <div className="bg-[#0B0F19] p-6 rounded-xl border border-gray-800 text-left font-mono">
//                 <span className="text-[9px] text-indigo-400 font-bold tracking-wider block uppercase mb-2">
//                   RELATIONAL PERSISTENCE DATABASE
//                 </span>
//                 <h4 className="text-white text-sm font-bold mb-2">
//                   PostgreSQL Cluster
//                 </h4>
//                 <p className="text-xs text-gray-500 leading-relaxed">
//                   Houses core relational configurations, tracking references,
//                   audit logs, and account privilege fields.
//                 </p>
//               </div>

//               <div className="bg-[#0B0F19] p-6 rounded-xl border border-gray-800 text-left font-mono">
//                 <span className="text-[9px] text-indigo-400 font-bold tracking-wider block uppercase mb-2">
//                   PROTECTED OBJECT STORE
//                 </span>
//                 <h4 className="text-white text-sm font-bold mb-2">
//                   MinIO / Private AWS S3
//                 </h4>
//                 <p className="text-xs text-gray-500 leading-relaxed">
//                   Stores flat file binary blobs within private partitions.
//                   Access keys are hidden from standard tenant visibility.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

import React, { useState } from "react";
import {
  Lock,
  Fingerprint,
  Eye,
  ShieldCheck,
  AlertTriangle,
  Terminal,
  ChevronRight,
  CheckCircle2,
  Server,
  Database,
  Shield,
  Cpu,
  Network,
  ArrowRight,
  Layers,
  Radio,
  Globe,
  RefreshCw,
  HardDrive,
  FileText,
  Download,
  Key,
  Search,
  HelpCircle,
  ChevronDown,
  Activity,
  Sliders,
  ShieldAlert,
  Binary,
} from "lucide-react";

export const SecurityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"sha" | "rbac" | "exp">("sha");
  const [activeSimulator, setActiveSimulator] = useState<number>(0);

  // States for new unique sections
  const [activeThreatCategory, setActiveThreatCategory] = useState<
    "network" | "application" | "data"
  >("network");
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const simulationLogs = [
    {
      type: "DDOS",
      name: "Layer 7 Mitigation Test",
      status: "BLOCKED",
      load: "4.2M req/sec",
      duration: "12ms",
    },
    {
      type: "INJECTION",
      name: "SQL Blind Param Audit",
      status: "SANITIZED",
      load: "Filters applied",
      duration: "2ms",
    },
    {
      type: "XSS",
      name: "DOM Cleansing Verification",
      status: "ISOLATED",
      load: "CSP Guard Triggered",
      duration: "5ms",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1E293B] selection:bg-indigo-500 selection:text-white antialiased">
      {/* 1. DARK HERO SECTION */}
      <section className="relative bg-[#030712] py-32 overflow-hidden border-b border-gray-900">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px)] bg-[size:40px_100%]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center space-x-2 bg-[#111827] border border-gray-800 rounded-full px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-[11px] font-mono tracking-widest text-indigo-400 uppercase font-bold">
              DEFENSE-IN-DEPTH COMPLIANCE BOUNDARY
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight max-w-5xl mx-auto mb-8 leading-[1.1]">
            Forensic Security & Chain-of-Custody Integrity
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
            DEMS+ mitigates data manipulation and access exploitation vectors
            across global investigation workflows using multi-layered zero-trust
            encryption pipelines.
          </p>
          <div className="w-full max-w-md mx-auto h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6" />
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono tracking-wider text-gray-500 uppercase">
            <span>PLATFORM SPECIFICATION RUNTIME: v4.26</span>
            <span className="text-gray-700">|</span>
            <span>SECURE CRYPTOGRAPHIC PROTOCOLS</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEW SECTION 5: STRUCTURAL TRUST ANCHOR TIMELINE (Vertical Node Tracking Flow) */}
      {/* Place this near your platform positioning or future horizons sections */}
      {/* ========================================================================= */}
      <section className="bg-white py-24 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase block mb-2">
              FORENSIC CHAIN OF VERIFICATION
            </span>
            <h3 className="text-3xl font-black text-[#0F172A] tracking-tight">
              Lifecycle Integrity Benchmarks
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Every packet ingest goes through three definitive cryptographic
              gates before formal entry into the immutable ledger files.
            </p>
          </div>

          {/* Vertical Custom Timeline Tree Grid Layout */}
          <div className="relative border-l-2 border-gray-100 ml-4 md:ml-32 space-y-16">
            {/* Node Step 1 */}
            <div className="relative pl-8 md:pl-12 group">
              {/* Step Marker Badge */}
              <div className="absolute -left-[17px] top-1 bg-white border-4 border-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-mono text-[10px] font-bold text-indigo-600 shadow-sm transition-transform group-hover:scale-110">
                01
              </div>
              {/* Left Floating Content Container for Desktop */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24 font-mono">
                <span className="text-[11px] font-bold text-[#0F172A] block">
                  PHASE I
                </span>
                <span className="text-[9px] text-gray-400 font-medium">
                  INGRESS EDGE
                </span>
              </div>
              {/* Box Card */}
              <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <h4 className="text-base font-bold text-[#0F172A] mb-2 flex items-center gap-2">
                  <span>Deterministic Source Serialization</span>
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
                  Inbound upload bytes match against client header frames
                  instantly. Raw network packages undergo bit-level inspections
                  to scrub tracking footprints or macro anomalies.
                </p>
              </div>
            </div>

            {/* Node Step 2 */}
            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[17px] top-1 bg-white border-4 border-[#0F172A] rounded-full w-8 h-8 flex items-center justify-center font-mono text-[10px] font-bold text-[#0F172A] shadow-sm transition-transform group-hover:scale-110">
                02
              </div>
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24 font-mono">
                <span className="text-[11px] font-bold text-[#0F172A] block">
                  PHASE II
                </span>
                <span className="text-[9px] text-gray-400 font-medium">
                  SHARD DEPLOY
                </span>
              </div>
              <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <h4 className="text-base font-bold text-[#0F172A] mb-2">
                  Asymmetric Fragment Scattering
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
                  The platform divides processed byte blocks into individual
                  distinct file slices, scattering records across storage rings
                  to ensure offline breach boundaries contain nothing coherent.
                </p>
              </div>
            </div>

            {/* Node Step 3 */}
            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[17px] top-1 bg-white border-4 border-emerald-500 rounded-full w-8 h-8 flex items-center justify-center font-mono text-[10px] font-bold text-emerald-600 shadow-sm transition-transform group-hover:scale-110">
                03
              </div>
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24 font-mono">
                <span className="text-[11px] font-bold text-[#0F172A] block">
                  PHASE III
                </span>
                <span className="text-[9px] text-gray-400 font-medium">
                  LEDGER SEAL
                </span>
              </div>
              <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <h4 className="text-base font-bold text-[#0F172A] mb-2">
                  Merkle Hash Accumulator Insertion
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed max-w-2xl">
                  Slices aggregate under a single master directory cryptographic
                  checksum block, creating timestamp assertions that match
                  regulatory courtroom visibility guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEW SECTION 6: ASYMMETRIC METRICS CONSOLE LAYOUT (Split Dashboard Window) */}
      {/* Place this right before your final Court-Ready or Footer sections */}
      {/* ========================================================================= */}
      <section className="bg-[#030712] py-24 border-b border-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Block: Bold Copy Intro */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#111827] border border-gray-800 rounded-md px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></span>
                <span className="text-[10px] font-mono tracking-wider text-gray-400 font-bold uppercase">
                  ISOLATION SCOPES
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
                Engineered to Outpace Vulnerability Frameworks
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                DEMS+ maintains multi-tenant network security barriers using
                continuous mathematical evaluation loops instead of standard
                static firewalls.
              </p>
            </div>

            {/* Right Block: Dark Asymmetric Grid Console Panel */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {/* Metric Card 01 */}
              <div className="bg-[#0B0F19] border border-gray-800/80 rounded-2xl p-6 space-y-4 relative group hover:border-gray-700 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-indigo-400 font-bold tracking-wider">
                    // PLATFORM LATENCY
                  </span>
                  <Network className="w-4 h-4 text-gray-600" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-3xl font-black text-white tracking-tight font-mono">
                    &lt; 14ms
                  </h5>
                  <p className="text-[11px] text-gray-500">
                    Global average route payload isolation validation response
                    interval.
                  </p>
                </div>
              </div>

              {/* Metric Card 02 */}
              <div className="bg-[#0B0F19] border border-gray-800/80 rounded-2xl p-6 space-y-4 relative group hover:border-gray-700 transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-wider">
                    // ANNUAL UPTIME
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-gray-600" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-3xl font-black text-white tracking-tight font-mono">
                    99.999%
                  </h5>
                  <p className="text-[11px] text-gray-500">
                    High-availability service mesh architecture replication
                    coverage threshold.
                  </p>
                </div>
              </div>

              {/* Metric Card 03 (Spans 2 columns on desktop for visual asymmetry) */}
              <div className="sm:col-span-2 bg-[#0B0F19] border border-gray-800/80 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-gray-700 transition-colors">
                <div className="space-y-2 max-w-md">
                  <span className="text-[10px] font-mono text-amber-400 font-bold tracking-wider block">
                    // COMPLIANCE PENETRATION RATE
                  </span>
                  <h5 className="text-lg font-bold text-white tracking-tight">
                    Zero Confirmed Escalate Breaches
                  </h5>
                  <p className="text-[11px] text-gray-500">
                    Independent third-party validation groups found zero
                    architectural configuration leaks across production tenants
                    during annual reviews.
                  </p>
                </div>
                <div className="bg-[#111827] border border-gray-800 px-4 py-3 rounded-xl font-mono text-center shrink-0 w-full sm:w-auto">
                  <span className="text-xs text-gray-400 block uppercase font-bold tracking-widest">
                    GRADE RATING
                  </span>
                  <span className="text-xl font-black text-emerald-400">
                    A+ SECURE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEW SECTION 1: INTERACTIVE THREAT MATRIX & MITIGATIONS (Multi-Column Drilldown) */}
      {/* Place this right below the Dark Hero section */}
      {/* ========================================================================= */}
      <section className="bg-[#F8FAFC] py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase block mb-2">
              THREAT RECTIFICATION MODEL
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">
              Threat Matrix Vector Resolutions
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-2xl">
              Select an architectural layer below to explore how DEMS+
              transforms identified environmental vulnerabilities into fully
              mitigated network segments.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Selector Tab Column */}
            <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
              {(["network", "application", "data"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveThreatCategory(cat)}
                  className={`px-5 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-left border transition-all whitespace-nowrap flex-1 lg:flex-none ${
                    activeThreatCategory === cat
                      ? "bg-white border-indigo-600 text-indigo-600 shadow-sm"
                      : "bg-transparent border-gray-200 text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {cat === "network" && "🌐 Network Ingress"}
                  {cat === "application" && "⚡ Application Layer"}
                  {cat === "data" && "🗄️ Storage & Data"}
                </button>
              ))}
            </div>

            {/* Right Content Panel */}
            <div className="lg:col-span-9 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              {activeThreatCategory === "network" && (
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-[#0F172A]">
                    Perimeter Network Defense Configurations
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-red-50/50 border border-red-100">
                      <span className="text-[10px] font-mono font-bold text-red-600 block mb-1">
                        IDENTIFIED THREAT VECTOR
                      </span>
                      <p className="text-sm font-bold text-[#0F172A] mb-2">
                        Automated Layer 7 Request Flood Attacks
                      </p>
                      <p className="text-xs text-gray-500">
                        Unmitigated APIs can face traffic exhaustion via
                        scriptable request streams.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                      <span className="text-[10px] font-mono font-bold text-emerald-600 block mb-1">
                        DEMS+ NATIVE MITIGATION
                      </span>
                      <p className="text-sm font-bold text-[#0F172A] mb-2">
                        Adaptive Rate-Limiting & WAF Rules
                      </p>
                      <p className="text-xs text-gray-500">
                        Dynamic analysis loops automatically identify anomaly
                        signatures to drop threat actors at the load balancer
                        entryway.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeThreatCategory === "application" && (
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-[#0F172A]">
                    Application Execution Isolation
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-red-50/50 border border-red-100">
                      <span className="text-[10px] font-mono font-bold text-red-600 block mb-1">
                        IDENTIFIED THREAT VECTOR
                      </span>
                      <p className="text-sm font-bold text-[#0F172A] mb-2">
                        JWT Multi-Tenant Token Spoofing
                      </p>
                      <p className="text-xs text-gray-500">
                        Compromised static access tokens can allow horizontal
                        clearance escalation across database rows.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                      <span className="text-[10px] font-mono font-bold text-emerald-600 block mb-1">
                        DEMS+ NATIVE MITIGATION
                      </span>
                      <p className="text-sm font-bold text-[#0F172A] mb-2">
                        Asymmetric Short-Lived Ephemeral Keys
                      </p>
                      <p className="text-xs text-gray-500">
                        Cryptographic authentication layers switch signing pairs
                        on rolling 15-minute intervals, enforced server-side.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeThreatCategory === "data" && (
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-[#0F172A]">
                    Cryptographic Data Protections
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-red-50/50 border border-red-100">
                      <span className="text-[10px] font-mono font-bold text-red-600 block mb-1">
                        IDENTIFIED THREAT VECTOR
                      </span>
                      <p className="text-sm font-bold text-[#0F172A] mb-2">
                        Offline Physical Volume Extractions
                      </p>
                      <p className="text-xs text-gray-500">
                        Direct disk-cloning or storage layer reading attempts
                        from structural host arrays.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                      <span className="text-[10px] font-mono font-bold text-emerald-600 block mb-1">
                        DEMS+ NATIVE MITIGATION
                      </span>
                      <p className="text-sm font-bold text-[#0F172A] mb-2">
                        Envelope AES-256 Per-File Block Locking
                      </p>
                      <p className="text-xs text-gray-500">
                        Every object ingestion element is sealed under an
                        individualized key encryption matrix, distinct from root
                        keys.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEW SECTION 2: DYNAMIC LIVE CRYPTOGRAPHIC AUDIT STREAM (Streaming Grid UI) */}
      {/* Place this right below Section 2 (Threat Simulation Log Block) */}
      {/* ========================================================================= */}
      <section className="bg-[#030712] py-20 border-b border-gray-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs mb-1">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>REAL-TIME AUDIT STREAM</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Active Platform Validation Ledger
              </h3>
            </div>
            <div className="text-right font-mono text-xs text-gray-500">
              <span>SYSTEM STATE: SYNCED // BLOCKS 1,489,112</span>
            </div>
          </div>

          <div className="bg-[#0B0F19] border border-gray-800 rounded-xl overflow-hidden font-mono text-xs">
            {/* Streaming Row Header */}
            <div className="grid grid-cols-12 gap-2 bg-[#111827] px-6 py-3 border-b border-gray-800 text-gray-400 font-bold">
              <div className="col-span-3">TIMESTAMP</div>
              <div className="col-span-3">AUDIT RESOURCE EVENT</div>
              <div className="col-span-4">SIGNING CHECKSUM SHARD</div>
              <div className="col-span-2 text-right">RESPONSE</div>
            </div>
            {/* Streams Grid Body */}
            <div className="divide-y divide-gray-800/60 px-6 text-gray-400">
              <div className="grid grid-cols-12 gap-2 py-3.5 items-center">
                <div className="col-span-3 text-gray-500">
                  2026-07-02T00:54:11Z
                </div>
                <div className="col-span-3 font-bold text-white flex items-center gap-1.5">
                  <Binary className="w-3 h-3 text-indigo-400" />
                  <span>FILE_INTEGRITY_POLL</span>
                </div>
                <div className="col-span-4 text-gray-500 truncate">
                  SHA256::e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                </div>
                <div className="col-span-2 text-right text-emerald-400 font-bold">
                  ✓ SECURE
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 py-3.5 items-center">
                <div className="col-span-3 text-gray-500">
                  2026-07-02T00:52:04Z
                </div>
                <div className="col-span-3 font-bold text-white flex items-center gap-1.5">
                  <Key className="w-3 h-3 text-amber-400" />
                  <span>KMS_KEY_ROTATION</span>
                </div>
                <div className="col-span-4 text-gray-500 truncate">
                  HSM_ID::vault-09-root-sig
                </div>
                <div className="col-span-2 text-right text-indigo-400 font-bold">
                  ↺ ROTATED
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 py-3.5 items-center">
                <div className="col-span-3 text-gray-500">
                  2026-07-02T00:49:55Z
                </div>
                <div className="col-span-3 font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-indigo-400" />
                  <span>TENANT_ISOLATION_CHECK</span>
                </div>
                <div className="col-span-4 text-gray-500 truncate">
                  POL_EXEC::org-boundary-eval
                </div>
                <div className="col-span-2 text-right text-emerald-400 font-bold">
                  ✓ VERIFIED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEW SECTION 3: ENTERPRISE KEY MANAGEMENT SOVEREIGNTY CONTROLS (Card Grid Layout) */}
      {/* Place this right below Section 3 (Statutory Framework Compliances Block) */}
      {/* ========================================================================= */}
      <section className="bg-white py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 block mb-2 uppercase">
                KEY CONTROL DOMAINS
              </span>
              <h3 className="text-3xl font-black text-[#0F172A] tracking-tight">
                Enterprise Cryptographic Sovereignty
              </h3>
            </div>
            <p className="text-gray-500 text-sm max-w-lg">
              Take absolute ownership of your runtime encryption architecture
              variables with native support for cloud infrastructure keystores.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-2xl p-6 hover:border-indigo-600/30 transition-all group">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Sliders className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#0F172A] mb-2">
                Bring Your Own Key (BYOK)
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Map your internal enterprise AWS KMS or Azure Vault keys
                directly into pipeline processes. Revoke permissions inside your
                own console to render data instantly unreadable.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 hover:border-indigo-600/30 transition-all group">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#0F172A] mb-2">
                FIPS 140-3 Hardware Level 3
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Authentication values are isolated away from common shared
                environments, run through physical hardware security boundary
                structures for anti-tampering insurance.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 hover:border-indigo-600/30 transition-all group">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#0F172A] mb-2">
                Geographic Tenancy Anchors
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Lock structural database environments exclusively to physical
                target region arrays, automatically aligning file assets with
                local sovereign data compliance guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEW SECTION 4: INTERACTIVE FAQ ACCORDION CONTAINER */}
      {/* Place this right below Section 5 (Vulnerability Rectification Block) */}
      {/* ========================================================================= */}
      <section className="bg-[#F8FAFC] py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 block mb-2 uppercase">
              ARCHITECTURE FAQ
            </span>
            <h3 className="text-3xl font-black text-[#0F172A] tracking-tight">
              Platform Defense Deep Dive
            </h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How is compliance with CJIS validation standards maintained?",
                a: "DEMS+ uses background screening parameters, isolated encryption perimeters, and immutable append-only tracking systems to satisfy Criminal Justice Information Services constraints explicitly.",
              },
              {
                q: "Can data keys be extracted by cloud infrastructure personnel?",
                a: "No. Key management layers utilize isolated envelopment methods. Root keys reside safely inside hardware storage modules away from standard file storage networks.",
              },
              {
                q: "What happens if a dynamic check validation fail is logged?",
                a: "The asset route immediately flags as toxic, revoking user permissions and prompting notifications to enterprise system administrators instantly.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full text-left p-5 font-bold text-sm text-[#0F172A] flex justify-between items-center bg-transparent hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${faqOpen === index ? "rotate-180" : ""}`}
                  />
                </button>
                {faqOpen === index && (
                  <div className="px-5 pb-5 pt-1 text-xs text-gray-500 border-t border-gray-100 leading-relaxed bg-[#F8FAFC]/40">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW ADDED SECTION 1: INTERACTIVE THREAT MATRIX & MITIGATIONS */}
      <section className="bg-[#F8FAFC] py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase block mb-2">
              THREAT RECTIFICATION MODEL
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">
              Threat Matrix Vector Resolutions
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-2xl">
              Select an architectural layer below to explore how DEMS+
              transforms identified environmental vulnerabilities into fully
              mitigated network segments.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left selector pills */}
            <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
              {(["network", "application", "data"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveThreatCategory(cat)}
                  className={`px-5 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-left border transition-all whitespace-nowrap flex-1 lg:flex-none ${
                    activeThreatCategory === cat
                      ? "bg-white border-indigo-600 text-indigo-600 shadow-sm"
                      : "bg-transparent border-gray-200 text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {cat === "network" && "🌐 Network Ingress"}
                  {cat === "application" && "⚡ Application Layer"}
                  {cat === "data" && "🗄️ Storage & Data"}
                </button>
              ))}
            </div>

            {/* Right details panel layout */}
            <div className="lg:col-span-9 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              {activeThreatCategory === "network" && (
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-[#0F172A]">
                    Perimeter Network Defense Configurations
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-red-50/50 border border-red-100">
                      <span className="text-[10px] font-mono font-bold text-red-600 block mb-1">
                        IDENTIFIED THREAT VECTOR
                      </span>
                      <p className="text-sm font-bold text-[#0F172A] mb-2">
                        Automated Layer 7 Request Flood Attacks
                      </p>
                      <p className="text-xs text-gray-500">
                        Unmitigated APIs can easily face exhaustion via
                        scriptable request structures.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                      <span className="text-[10px] font-mono font-bold text-emerald-600 block mb-1">
                        DEMS+ NATIVE MITIGATION
                      </span>
                      <p className="text-sm font-bold text-[#0F172A] mb-2">
                        Adaptive Rate-Limiting & WAF rules
                      </p>
                      <p className="text-xs text-gray-500">
                        Dynamic analysis tokens dynamically identify anomaly
                        patterns to isolate clients at the load balancer
                        entryway.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeThreatCategory === "application" && (
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-[#0F172A]">
                    Application Execution Isolation
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-red-50/50 border border-red-100">
                      <span className="text-[10px] font-mono font-bold text-red-600 block mb-1">
                        IDENTIFIED THREAT VECTOR
                      </span>
                      <p className="text-sm font-bold text-[#0F172A] mb-2">
                        JWT Multi-Tenant Token Spoofing
                      </p>
                      <p className="text-xs text-gray-500">
                        Compromised static cookies allow unauthorized access
                        escalation between organization tenants.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                      <span className="text-[10px] font-mono font-bold text-emerald-600 block mb-1">
                        DEMS+ NATIVE MITIGATION
                      </span>
                      <p className="text-sm font-bold text-[#0F172A] mb-2">
                        Asymmetric Short-Lived Ephemeral Keys
                      </p>
                      <p className="text-xs text-gray-500">
                        Session signing certificates change on strict 15-minute
                        rotation intervals, enforced by server validation loops.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeThreatCategory === "data" && (
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-[#0F172A]">
                    Cryptographic Data Protections
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-red-50/50 border border-red-100">
                      <span className="text-[10px] font-mono font-bold text-red-600 block mb-1">
                        IDENTIFIED THREAT VECTOR
                      </span>
                      <p className="text-sm font-bold text-[#0F172A] mb-2">
                        Offline Physical Drive Extractions
                      </p>
                      <p className="text-xs text-gray-500">
                        Direct disk reading attempts from hypervisor
                        infrastructure layers could expose flat case blobs.
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                      <span className="text-[10px] font-mono font-bold text-emerald-600 block mb-1">
                        DEMS+ NATIVE MITIGATION
                      </span>
                      <p className="text-sm font-bold text-[#0F172A] mb-2">
                        Envelope AES-256 Per-File Encryption
                      </p>
                      <p className="text-xs text-gray-500">
                        Every single uploaded asset uses its own unique
                        cryptographic data-key, backed by a separate root key
                        authority.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREAT SIMULATION & LIVE TACTICAL TELEMETRY */}
      <section className="bg-white py-24 border-b border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono font-bold tracking-widest text-red-600 bg-red-50 border border-red-100 px-3 py-1 rounded-md uppercase inline-block">
                REAL-TIME THREAT TESTING
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight leading-tight">
                Continuous Automated Pentesting Traces
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our active defense engines run continuous simulation profiles to
                test edge firewalls against malicious payloads, mapping
                infrastructure responses live.
              </p>

              <div className="space-y-2">
                {simulationLogs.map((sim, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveSimulator(idx)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      activeSimulator === idx
                        ? "bg-gray-900 border-transparent shadow-md"
                        : "bg-[#F8FAFC] border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${activeSimulator === idx ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-700"}`}
                      >
                        {sim.type}
                      </span>
                      <span className="text-xs font-mono font-bold text-emerald-500 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        {sim.status}
                      </span>
                    </div>
                    <p
                      className={`text-sm font-bold mt-2 ${activeSimulator === idx ? "text-white" : "text-[#0F172A]"}`}
                    >
                      {sim.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#030712] rounded-2xl border border-gray-800 p-6 font-mono text-xs shadow-2xl relative">
              <div className="absolute top-4 right-4 text-gray-600 flex items-center gap-2">
                <Radio className="w-3 h-3 text-red-500 animate-pulse" />
                <span className="text-[10px]">LIVE INJECTION BUS</span>
              </div>
              <p className="text-indigo-400 mb-4 font-bold">
                // EXECUTION FLOW KERNEL DUMP
              </p>

              <div className="space-y-2 text-gray-500 bg-[#0B0F19] p-4 rounded-lg border border-gray-800/80">
                <p>
                  <span className="text-gray-600">VECTOR_TARGET:</span>{" "}
                  api.demsplus.internal/v1/evidence/payload
                </p>
                <p>
                  <span className="text-gray-600">STRESS_VOL:</span>{" "}
                  {simulationLogs[activeSimulator].load}
                </p>
                <p>
                  <span className="text-gray-600">LATENCY:</span>{" "}
                  {simulationLogs[activeSimulator].duration}
                </p>
                <p className="text-emerald-400 font-bold border-t border-gray-800/60 pt-2 mt-2">
                  ✓ [GATEWAY_POST_VALIDATION]: Absolute isolation integrity
                  holds across active data buffers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW ADDED SECTION 2: DYNAMIC LIVE CRYPTOGRAPHIC AUDIT STREAM */}
      <section className="bg-[#030712] py-20 border-b border-gray-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs mb-1">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>REAL-TIME AUDIT STREAM</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Active Platform Validation Ledger
              </h3>
            </div>
            <div className="text-right font-mono text-xs text-gray-500">
              <span>SYSTEM STATE: SYNCED // BLOCKS 1,489,112</span>
            </div>
          </div>

          <div className="bg-[#0B0F19] border border-gray-800 rounded-xl overflow-hidden font-mono text-xs">
            {/* Header row */}
            <div className="grid grid-cols-12 gap-2 bg-[#111827] px-6 py-3 border-b border-gray-800 text-gray-400 font-bold">
              <div className="col-span-3">TIMESTAMP</div>
              <div className="col-span-3">AUDIT RESOURCE EVENT</div>
              <div className="col-span-4">SIGNING CHECKSUM SHARD</div>
              <div className="col-span-2 text-right">RESPONSE</div>
            </div>
            {/* Item Rows */}
            <div className="divide-y divide-gray-800/60 px-6 text-gray-400">
              <div className="grid grid-cols-12 gap-2 py-3.5 items-center">
                <div className="col-span-3 text-gray-500">
                  2026-07-02T00:54:11Z
                </div>
                <div className="col-span-3 font-bold text-white flex items-center gap-1.5">
                  <Binary className="w-3 h-3 text-indigo-400" />
                  <span>FILE_INTEGRITY_POLL</span>
                </div>
                <div className="col-span-4 text-gray-500 truncate">
                  SHA256::e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                </div>
                <div className="col-span-2 text-right text-emerald-400 font-bold">
                  ✓ SECURE
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 py-3.5 items-center">
                <div className="col-span-3 text-gray-500">
                  2026-07-02T00:52:04Z
                </div>
                <div className="col-span-3 font-bold text-white flex items-center gap-1.5">
                  <Key className="w-3 h-3 text-amber-400" />
                  <span>KMS_KEY_ROTATION</span>
                </div>
                <div className="col-span-4 text-gray-500 truncate">
                  HSM_ID::vault-09-root-sig
                </div>
                <div className="col-span-2 text-right text-indigo-400 font-bold">
                  ↺ ROTATED
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2 py-3.5 items-center">
                <div className="col-span-3 text-gray-500">
                  2026-07-02T00:49:55Z
                </div>
                <div className="col-span-3 font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-indigo-400" />
                  <span>TENANT_ISOLATION_CHECK</span>
                </div>
                <div className="col-span-4 text-gray-500 truncate">
                  POL_EXEC::org-boundary-eval
                </div>
                <div className="col-span-2 text-right text-emerald-400 font-bold">
                  ✓ VERIFIED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATUTORY COMPLIANCES & HARDENED LAYERS GRID */}
      <section className="bg-[#F8FAFC] py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-12">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase block mb-2">
                  HARDENED LAYERS
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">
                  Security-First Platform Design
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                    Encryption Matrices
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    AES-256 block protection seals data items at rest, while TLS
                    1.3 transit networks isolate ongoing client communications.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                    <Fingerprint className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                    Zero-Trust Authorization
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    No implicit asset permissions. Continuous multi-tenant user
                    authentication checks run beside every single read/write
                    query.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                    Immutable Activity Traces
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Platform transactions log immediately to append-only tables,
                    establishing permanent proof of chain-of-custody tracking.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                    Cryptographic Custody
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Hardware Security Module (HSM) key boundaries enforce
                    absolute separation between independent corporate discovery
                    vaults.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm lg:mt-14">
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                Statutory Framework Compliances
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                DEMS+ engineering strategies match the requirements of heavily
                monitored government and commercial data systems.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {[
                  "SOC2 Type II",
                  "ISO 27001",
                  "FedRAMP High Ready",
                  "GDPR",
                  "HIPAA",
                  "CJIS Compliant",
                  "PCI DSS Level 1",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="bg-[#F1F5F9] text-[#475569] border border-gray-200 text-xs font-mono px-3 py-1.5 rounded-lg font-semibold"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] mb-1">
                      Persistent Monitoring Perimeter
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Automated detection mechanisms monitor operational
                      endpoints around the clock to isolate external threats and
                      prevent token exploitation attempts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW ADDED SECTION 3: ENTERPRISE KEY MANAGEMENT SOVEREIGNTY CONTROLS */}
      <section className="bg-white py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 block mb-2 uppercase">
                KEY CONTROL DOMAINS
              </span>
              <h3 className="text-3xl font-black text-[#0F172A] tracking-tight">
                Enterprise Cryptographic Sovereignty
              </h3>
            </div>
            <p className="text-gray-500 text-sm max-w-lg">
              Take full ownership of your encryption lifecycle boundaries with
              native integrations into enterprise cloud keystores.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-2xl p-6 hover:border-indigo-600/30 transition-all group">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Sliders className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#0F172A] mb-2">
                Bring Your Own Key (BYOK)
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Connect external key management services directly to data
                pipelines. REVOKE root authorization keys instantaneously to
                drop file readability.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 hover:border-indigo-600/30 transition-all group">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#0F172A] mb-2">
                FIPS 140-3 Hardware Level 3
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                All platform verification tokens are evaluated within physical
                single-tenant cryptographic hardware clusters for tamper
                avoidance.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-6 hover:border-indigo-600/30 transition-all group">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-[#0F172A] mb-2">
                Geographic Tenancy Anchors
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Bind case structures exclusively to designated geographic
                jurisdiction clusters to automatically align with sovereign
                data-residency laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GEOGRAPHIC REGIONAL REPLICATION MATRIX */}
      <section className="bg-white py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#4F46E5] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded uppercase inline-block mb-3">
              FAILOVER INFRASTRUCTURE
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">
              Cross-Region Disaster Replication Matrix
            </h2>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Data protection profiles rely on distributed synchronizations
              across multiple isolated cloud sovereign target regions, reaching
              a target RPO of under 45 seconds.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-2xl relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-gray-400">
                  PRIMARY EDGE NODE
                </span>
                <Globe className="w-4 h-4 text-indigo-600" />
              </div>
              <h4 className="text-base font-black text-[#0F172A]">
                US-EAST-1 (GovCloud)
              </h4>
              <p className="text-xs text-gray-400 mt-2">
                Active state container repository engine managing hot
                configuration databases and discovery indexing matrices.
              </p>
              <div className="mt-6 flex items-center space-x-2 text-[11px] font-mono font-bold text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>STATUS: OPERATIONAL (0ms)</span>
              </div>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-2xl relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-gray-400">
                  SECONDARY HOT PASSIVE
                </span>
                <RefreshCw className="w-4 h-4 text-indigo-600" />
              </div>
              <h4 className="text-base font-black text-[#0F172A]">
                US-WEST-2 (Oregon)
              </h4>
              <p className="text-xs text-gray-400 mt-2">
                Real-time delta pipeline listener mirror synchronizing content
                logs to ensure protection during dynamic system crashes.
              </p>
              <div className="mt-6 flex items-center space-x-2 text-[11px] font-mono font-bold text-indigo-500">
                <span>REPLICATION LAG: &lt; 1.2s</span>
              </div>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-200 p-6 rounded-2xl relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-gray-400">
                  AIR-GAPPED COMPLIANCE VAULT
                </span>
                <Database className="w-4 h-4 text-[#0F172A]" />
              </div>
              <h4 className="text-base font-black text-[#0F172A]">
                EU-CENTRAL-1 (Frankfurt)
              </h4>
              <p className="text-xs text-gray-400 mt-2">
                Strict sovereignty containment layer utilizing encrypted backup
                shards to verify isolation thresholds.
              </p>
              <div className="mt-6 flex items-center space-x-2 text-[11px] font-mono font-bold text-gray-500">
                <span>CRYPTO SEAL: VERIFIED SHA-512</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VULNERABILITY RECTIFICATION SECTION */}
      <section className="bg-white py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[11px] font-mono font-bold tracking-widest text-rose-500 bg-rose-50 border border-rose-100 px-3 py-1 rounded-md uppercase inline-block mb-4">
            VULNERABILITY RECTIFICATION
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight mb-4">
            Mitigating Systemic Vulnerability Risks
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-16 text-sm md:text-base leading-relaxed">
            Manual evidence pipelines leak critical metadata and fail security
            audits. DEMS+ replaces insecure storage habits with automated
            verification workflows.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-gray-200">
              <div className="w-8 h-8 bg-rose-50 border border-rose-100 rounded-lg flex items-center justify-center mb-6 text-rose-500">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                Insecure Transmission Paths
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Sharing files via chat clients or personal drives strips out
                metadata and compromises security postures. DEMS+ handles all
                transfers inside isolated, authenticated sessions.
              </p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-gray-200">
              <div className="w-8 h-8 bg-rose-50 border border-rose-100 rounded-lg flex items-center justify-center mb-6 text-rose-500">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                Weak Client Validation
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Basic password storage allows credential exploitation across
                enterprise groups. DEMS+ secures identities using `bcrypt` key
                salting alongside time-delimited JWT controls.
              </p>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-gray-200">
              <div className="w-8 h-8 bg-rose-50 border border-rose-100 rounded-lg flex items-center justify-center mb-6 text-rose-500">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                Undetected Asset Alternations
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Standard storage platforms cannot verify if a video or document
                was altered after download. DEMS+ uses cryptographic checksums
                to detect file changes immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW ADDED SECTION 4: INTERACTIVE SECURITY FAQ ACCORDION CONTAINER */}
      <section className="bg-[#F8FAFC] py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 block mb-2 uppercase">
              ARCHITECTURE FAQ
            </span>
            <h3 className="text-3xl font-black text-[#0F172A] tracking-tight">
              Platform Defense Deep Dive
            </h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How is compliance with CJIS validation standards maintained?",
                a: "DEMS+ applies background screening parameters, isolated encryption perimeters, and immutable append-only tracking systems to satisfy Criminal Justice Information Services constraints explicitly.",
              },
              {
                q: "Can data keys be extracted by cloud infrastructure personnel?",
                a: "No. Key management layers utilize isolated envelopment methods. Root keys reside safely inside hardware storage modules away from standard file storage networks.",
              },
              {
                q: "What happens if a dynamic check validation fail is logged?",
                a: "The asset route immediately flags as toxic, revoking user permissions and prompting notifications to enterprise system administrators instantly.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full text-left p-5 font-bold text-sm text-[#0F172A] flex justify-between items-center bg-transparent hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${faqOpen === index ? "rotate-180" : ""}`}
                  />
                </button>
                {faqOpen === index && (
                  <div className="px-5 pb-5 pt-1 text-xs text-gray-500 border-t border-gray-100 leading-relaxed bg-[#F8FAFC]/40">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HARDWARE HARNESSING EDGE ACCESS PROTECTION */}
      <section className="bg-white py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-950 text-white rounded-3xl p-8 md:p-12 lg:p-16 grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono tracking-widest bg-indigo-500 text-white px-3 py-1 rounded font-bold uppercase inline-block">
                INGRESS PERIMETER SECURITY
              </span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                Hardened Edge Device Docking Protocols
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Offloading video tracks from physical body-worn hardware or
                security sensors requires verifiable local signatures before
                network staging layers can open.
              </p>
              <div className="space-y-3 font-mono text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  <span>
                    Hardware Cryptographic Key Handshake (MDM Isolation)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                  <span>
                    Automated Source Metadata Extraction Matrix Locking
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 border border-gray-800 bg-[#0B0F19] rounded-2xl p-6 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3 text-[11px] text-gray-400">
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-indigo-400" />
                  <span>STAGING_DEVICE_GATE</span>
                </div>
                <span className="text-indigo-400 font-bold">
                  READY FOR IMPORT
                </span>
              </div>
              <div className="space-y-1.5 text-gray-500 text-[11px]">
                <p>» CONNECTED_HARDWARE: Station_Dock_Beta_4</p>
                <p>» IDENTIFIER_UUID: 8f9a2-99c1a-44fe-881b</p>
                <p>
                  » DEVICE_FIRMWARE_CHECK:{" "}
                  <span className="text-emerald-500">PASSED v2.1</span>
                </p>
              </div>
              <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 text-xs">
                <span>Initialize Forensic Sync Loop</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PLATFORM POSITIONING MATRIX COMPARE */}
      <section className="bg-[#F8FAFC] py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase block mb-2">
              PLATFORM POSITIONING MATRIX
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight mb-2">
              Security & Trust Architecture Positioning
            </h2>
            <p className="text-sm text-gray-500">
              See how DEMS+ compares to standard file handling systems and
              alternative litigation applications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase block mb-2">
                  E-DISCOVERY COMPETITORS
                </span>
                <h3 className="text-base font-black text-[#0F172A] mb-3">
                  Relativity / Everlaw
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Built for document document indexing and research indexing,
                  but often relies on external vendor pipelines to track primary
                  chain-of-custody logs.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100 mt-6 text-xs font-mono font-bold text-indigo-600">
                DEMS+: Native Trace Verification
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase block mb-2">
                  FORENSIC SOFTWARE
                </span>
                <h3 className="text-base font-black text-[#0F172A] mb-3">
                  EnCase / CaseGuard
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Highly capable laboratory processing platforms that lack
                  zero-trust web sharing networks for multi-tenant collaborative
                  access control.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100 mt-6 text-xs font-mono font-bold text-indigo-600">
                DEMS+: Zero-Trust Web Delivery
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase block mb-2">
                  PRACTICE MANAGEMENT
                </span>
                <h3 className="text-base font-black text-[#0F172A] mb-3">
                  Clio / iManage
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Designed primarily around firm operations and billable hours
                  tracking, with limited focus on forensic-grade file tamper
                  protection rules.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100 mt-6 text-xs font-mono font-bold text-indigo-600">
                DEMS+: Cryptographic Vaulting
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase block mb-2">
                  COLLABORATION TOOLS
                </span>
                <h3 className="text-base font-black text-[#0F172A] mb-3">
                  SharePoint / Drives
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Provides easy team file collaboration but lacks strict
                  judicial chain-of-custody logging frameworks or CJIS data
                  profiles.
                </p>
              </div>
              <div className="pt-6 border-t border-gray-100 mt-6 text-xs font-mono font-bold text-indigo-600">
                DEMS+: Courtroom Admissibility
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE TERMINAL */}
      <section className="bg-[#030712] py-24 overflow-hidden border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-400 bg-indigo-950/50 border border-indigo-900/60 px-3 py-1 rounded uppercase inline-block">
                INTERACTIVE TERMINAL
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                Runtime Cryptographic Verification Trace
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Select an infrastructure validation track below to audit active
                security telemetry configurations running across your platform
                gateway.
              </p>
              <div className="space-y-3 pt-4">
                <button
                  onClick={() => setActiveTab("sha")}
                  className={`w-full text-left p-4 rounded-xl flex items-center justify-between border transition-all ${activeTab === "sha" ? "bg-[#4F46E5] text-white border-transparent shadow-lg shadow-indigo-600/20" : "bg-[#0B0F19] text-gray-400 border-gray-800/80 hover:bg-[#111827]"}`}
                >
                  <div className="flex items-center space-x-3">
                    <Cpu className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      SHA-256 Validation Hash
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab("rbac")}
                  className={`w-full text-left p-4 rounded-xl flex items-center justify-between border transition-all ${activeTab === "rbac" ? "bg-[#4F46E5] text-white border-transparent" : "bg-[#0B0F19] text-gray-400 border-gray-800/80 hover:bg-[#111827]"}`}
                >
                  <div className="flex items-center space-x-3">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      Role-Based Access Gate
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab("exp")}
                  className={`w-full text-left p-4 rounded-xl flex items-center justify-between border transition-all ${activeTab === "exp" ? "bg-[#4F46E5] text-white border-transparent" : "bg-[#0B0F19] text-gray-400 border-gray-800/80 hover:bg-[#111827]"}`}
                >
                  <div className="flex items-center space-x-3">
                    <Lock className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      Signed Access Expirations
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-7 bg-[#0B0F19] rounded-2xl border border-gray-800 shadow-2xl p-6 font-mono text-xs overflow-x-auto">
              <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-6 text-gray-500">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-gray-400" />
                  <span>_ DEMS_SECURITY_KERNEL // TELEMETRY</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>99.91% NOMINAL</span>
                </div>
              </div>
              {activeTab === "sha" && (
                <div className="space-y-4 text-gray-400">
                  <p className="text-indigo-400 font-bold">
                    // ITEM INTEGRITY IDENTIFICATION CHECK
                  </p>
                  <p className="leading-relaxed">
                    Platform engines generate a deterministic checksum upon data
                    discovery, comparing values during each interaction to block
                    modification risks.
                  </p>
                  <div className="bg-[#030712] p-4 rounded-lg space-y-2 border border-gray-900 text-[11px]">
                    <p>
                      <span className="text-gray-500">INGRESS_ASSET:</span>{" "}
                      exhibit_9981_audio.wav
                    </p>
                    <p>
                      <span className="text-gray-500">VERIFY_ALGO:</span>{" "}
                      Bitwise SHA-256 Engine Running...
                    </p>
                    <p>
                      <span className="text-gray-500">CHECKSUM:</span>{" "}
                      <span className="text-emerald-400 font-bold break-all">
                        a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
                      </span>
                    </p>
                  </div>
                </div>
              )}
              {activeTab === "rbac" && (
                <div className="space-y-4 text-gray-400">
                  <p className="text-indigo-400 font-bold">
                    // ROLE-BASED PRIVILEGE BOUNDARY ANALYSIS
                  </p>
                  <p className="leading-relaxed">
                    Evaluates incoming session identity properties against
                    multi-layer organizational tenancy access control manifests.
                  </p>
                  <div className="bg-[#030712] p-4 rounded-lg space-y-2 border border-gray-900 text-[11px]">
                    <p>
                      <span className="text-gray-500">
                        RESOLVING_PRINCIPAL:
                      </span>{" "}
                      Det_Jenkins@metropol.gov
                    </p>
                    <p>
                      <span className="text-gray-500">TARGET_SCOPE:</span>{" "}
                      SECURE_CASE_VAULT_09
                    </p>
                    <p>
                      <span className="text-gray-500">GATEWAY_RESPONSE:</span>{" "}
                      <span className="text-indigo-400 font-bold">
                        ACCESS_GRANTED (Clearance Tier 3 Verified)
                      </span>
                    </p>
                  </div>
                </div>
              )}
              {activeTab === "exp" && (
                <div className="space-y-4 text-gray-400">
                  <p className="text-indigo-400 font-bold">
                    // TIMED SIGNATURE EPHEMERAL TOKEN MATRIX
                  </p>
                  <p className="leading-relaxed">
                    All generated external asset delivery networks deploy
                    restricted token URLs engineered to self-expire inside
                    absolute timelines.
                  </p>
                  <div className="bg-[#030712] p-4 rounded-lg space-y-2 border border-gray-900 text-[11px]">
                    <p>
                      <span className="text-gray-500">TOKEN_STRUCTURE:</span>{" "}
                      HMAC-SHA512 Web Signature
                    </p>
                    <p>
                      <span className="text-gray-500">TTL_EXPIRATION:</span> 600
                      Seconds Remaining
                    </p>
                    <p>
                      <span className="text-gray-500">STATUS:</span>{" "}
                      <span className="text-amber-400 font-bold">
                        ENFORCED // Dynamic Countdown Polling Active
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 9. COMPLIANCE DOWNLOAD VAULT */}
      <section className="bg-[#F8FAFC] py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase block mb-2">
                ADMINISTRATIVE AUDIT
              </span>
              <h2 className="text-3xl font-black text-[#0F172A] tracking-tight">
                Trust & Compliance Attestation Center
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-md">
              Download official cryptographic letters, system boundaries
              descriptions, and independently verified auditor files.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex items-center justify-between shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center text-[#4F46E5]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    SOC 2 Type II Attestation Report
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Updated Q1 2026 • PDF • 4.2 MB
                  </p>
                </div>
              </div>
              <button className="p-2.5 hover:bg-gray-50 border border-gray-200 rounded-xl text-gray-600 transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 flex items-center justify-between shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center text-[#4F46E5]">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    CJIS Security Profile Blueprint
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Archived Version • PDF • 1.8 MB
                  </p>
                </div>
              </div>
              <button className="p-2.5 hover:bg-gray-50 border border-gray-200 rounded-xl text-gray-600 transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. COURT-READY CRYPTOGRAPHIC CUSTODY FOCUS */}
      <section className="bg-[#030712] py-24 overflow-hidden border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#4F46E5] uppercase block">
                LEGAL ADMISSIBILITY FOCUS
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Court-Ready Cryptographic Custody
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                DEMS+ turns standard case tracking into a verifiable,
                tamper-resistant record. By connecting digital storage to
                continuous file verification, we secure evidence from ingestion
                all the way to legal presentation.
              </p>
            </div>
            <div className="lg:col-span-6 bg-[#0B0F19] rounded-2xl border border-gray-800 p-6 font-mono text-xs">
              <h4 className="text-gray-400 font-bold border-b border-gray-800 pb-3 uppercase tracking-wider">
                ACTIVE SYSTEM STATUS OVERVIEW
              </h4>
              <div className="divide-y divide-gray-800/60 text-gray-500">
                <div className="py-4 flex justify-between items-center">
                  <span>» Dynamic Tracking Loops:</span>
                  <span className="text-emerald-400 font-semibold bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30">
                    Sealed
                  </span>
                </div>
                <div className="py-4 flex justify-between items-center">
                  <span>» Binary File Repositories:</span>
                  <span className="text-indigo-400 font-semibold bg-indigo-950/20 px-2 py-0.5 rounded border border-indigo-900/30">
                    Private
                  </span>
                </div>
                <div className="py-4 flex justify-between items-center">
                  <span>» User Privilege Gates:</span>
                  <span className="text-emerald-400 font-semibold bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30">
                    Active
                  </span>
                </div>
              </div>
              <div className="pt-4 text-[10px] text-gray-600 tracking-wider">
                DOCUMENT COMPILED: 19 MAY 2026 // OFFICIAL SECURITY COMPLIANCE
                MANIFEST
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FUTURE STRATEGIC ROADMAP SECTION */}
      <section className="bg-white py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[11px] font-mono font-bold tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-md uppercase inline-block mb-4">
            ENGINEERING HORIZONS
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight mb-4">
            Future Strategic Roadmap
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-16 text-sm leading-relaxed">
            DEMS+ is engineered with integration hooks designed to accommodate
            future advancements in public security architectures.
          </p>
          <div className="max-w-4xl mx-auto space-y-4 text-left font-mono text-xs">
            <div className="bg-[#F8FAFC] border border-gray-200 p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-[#0F172A] font-bold">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>Decentralized Immutable Ledger Signatures</span>
              </div>
              <span className="bg-gray-200 text-gray-700 font-bold px-2 py-1 rounded text-[10px] tracking-wider">
                HORIZON ALPHA
              </span>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-200 p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-[#0F172A] font-bold">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>AI-Driven Behavioral Threat Detection Logs</span>
              </div>
              <span className="bg-gray-200 text-gray-700 font-bold px-2 py-1 rounded text-[10px] tracking-wider">
                HORIZON BETA
              </span>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-200 p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-[#0F172A] font-bold">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>Multi-Factor Biometric Endpoint Hardening</span>
              </div>
              <span className="bg-gray-200 text-gray-700 font-bold px-2 py-1 rounded text-[10px] tracking-wider">
                HORIZON GAMMA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 12. ISOLATED MULTI-TIER NETWORK LAYERS DIAGRAM */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[11px] font-mono font-bold tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-md uppercase inline-block mb-4">
            TOPOLOGY FOOTPRINT
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight mb-4">
            Isolated Multi-Tier Network Layer
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-16 text-sm leading-relaxed">
            DEMS+ separates system responsibilities across individual
            microservice boundaries to prevent unauthorized data visibility or
            side-channel exploits.
          </p>
          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 shadow-sm text-left">
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="bg-[#0F172A] text-white font-mono text-[10px] px-3 py-2 rounded-lg font-bold flex items-center space-x-2">
                <Network className="w-3 h-3 text-indigo-400" />
                <span>CLIENT FRONTEND VIEW</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-mono">
                React application dashboard rendering secure views. User request
                parameters stream securely down to gateway entryways alongside
                validated token matrices.
              </p>
            </div>
            <div className="py-6 text-center text-gray-400 font-mono text-[11px]">
              ↓ Secure API Gateway Route Ingress ↓
            </div>
            <div className="border border-gray-200 rounded-xl p-6 bg-[#F8FAFC] space-y-4">
              <span className="text-[9px] font-mono font-bold text-gray-400 tracking-wider uppercase block">
                ISOLATED SERVICE MIDDLEWARE SUBSYSTEMS
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center text-[11px] font-mono font-bold text-[#334155]">
                {[
                  "Authentication Engine",
                  "User Profiles",
                  "Case Records",
                  "Evidence Core",
                  "Audit Ledger",
                  "Notifications",
                ].map((service) => (
                  <div
                    key={service}
                    className="bg-white border border-gray-200 py-4 px-2 rounded-lg shadow-sm"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div className="py-6 text-center text-gray-400 font-mono text-[11px]">
              ↓ Partitioned Storage Layout ↓
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#0B0F19] p-6 rounded-xl border border-gray-800 text-left font-mono">
                <span className="text-[9px] text-indigo-400 font-bold tracking-wider block uppercase mb-2">
                  RELATIONAL PERSISTENCE DATABASE
                </span>
                <h4 className="text-white text-sm font-bold mb-2">
                  PostgreSQL Cluster
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Houses core relational configurations, tracking references,
                  audit logs, and account privilege fields.
                </p>
              </div>
              <div className="bg-[#0B0F19] p-6 rounded-xl border border-gray-800 text-left font-mono">
                <span className="text-[9px] text-indigo-400 font-bold tracking-wider block uppercase mb-2">
                  PROTECTED OBJECT STORE
                </span>
                <h4 className="text-white text-sm font-bold mb-2">
                  MinIO / Private AWS S3
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Stores flat file binary blobs within private partitions.
                  Access keys are hidden from standard tenant visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
