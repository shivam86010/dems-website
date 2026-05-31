// // // components/sections/Hero.tsx
// // import React from "react";
// // import {
// //   Fingerprint,
// //   Shield,
// //   PlayCircle,
// //   Lock,
// //   CheckCircle,
// //   Database,
// //   FileText,
// //   Clock,
// // } from "lucide-react";

// // const Hero: React.FC = () => {
// //   return (
// //     <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 max-w-7xl mx-auto">
// //       <div className="grid lg:grid-cols-2 gap-14 items-center">
// //         <div>
// //           <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-1.5 rounded-full text-indigo-800 text-sm font-medium mb-6">
// //             <Fingerprint size={16} /> Chain-of-Custody · Zero Trust Ready
// //           </div>
// //           <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
// //             Secure Evidence &{" "}
// //             <span className="text-indigo-800">Case Management</span> Platform
// //           </h1>
// //           <p className="text-gray-500 text-lg mt-6">
// //             Enterprise-grade DEMS+ unifies fragmented evidence, SHA-256
// //             integrity, audit logs, and RBAC for legal, forensics & compliance.
// //           </p>
// //           <div className="flex gap-4 mt-8 flex-wrap">
// //             <button className="bg-indigo-900 text-white px-7 py-3 rounded-xl font-semibold shadow-lg flex items-center gap-2">
// //               <Lock size={18} /> Start Free Trial
// //             </button>
// //             <button className="border border-gray-300 bg-white px-7 py-3 rounded-xl font-medium flex items-center gap-2">
// //               <PlayCircle size={18} /> Watch Demo
// //             </button>
// //           </div>
// //         </div>
// //         <div className="relative">
// //           <div className="bg-white rounded-2xl shadow-premium border p-5">
// //             <div className="flex justify-between border-b pb-3">
// //               <div className="flex gap-1.5">
// //                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
// //                 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
// //                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
// //               </div>
// //               <span className="text-xs font-mono">
// //                 dashboard.demsplus.com/cases/CR-2409
// //               </span>
// //               <Shield size={16} className="text-indigo-500" />
// //             </div>
// //             <div className="pt-4 space-y-3">
// //               <div className="flex justify-between text-sm">
// //                 <span>Case ID: CR-2409-INTEL</span>
// //                 <span className="text-green-600 text-xs flex items-center gap-1">
// //                   <CheckCircle size={12} /> SHA-256 verified
// //                 </span>
// //               </div>
// //               <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
// //                 <span className="flex items-center gap-2">
// //                   <Database size={14} /> evidence.mp4
// //                 </span>
// //                 <span>12.4 MB</span>
// //                 <span className="text-indigo-600 text-xs">custody logged</span>
// //               </div>
// //               <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center">
// //                 <span className="flex items-center gap-2">
// //                   <FileText size={14} /> witness_statement.pdf
// //                 </span>
// //                 <span>2.1 MB</span>
// //                 <span className="text-indigo-600 text-xs">signed URL</span>
// //               </div>
// //               <div className="border-t pt-2 text-[11px] text-gray-400 flex items-center gap-1">
// //                 <Clock size={12} /> Last audit: 2026-05-19T14:32:11Z · RBAC:
// //                 investigator
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// // components/sections/Hero.tsx
// import React, { useState, useEffect } from "react";
// import {
//   Fingerprint,
//   Shield,
//   PlayCircle,
//   Lock,
//   CheckCircle,
//   Database,
//   FileText,
//   Clock,
//   Eye,
//   Download,
//   UserCheck,
//   Calendar,
//   FileSignature,
//   Hash,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// const Hero: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const cards = [
//     {
//       id: 1,
//       title: "Case ID: CR-2409-INTEL",
//       status: "SHA-256 verified",
//       items: [
//         {
//           icon: Database,
//           name: "evidence.mp4",
//           size: "12.4 MB",
//           tag: "custody logged",
//         },
//         {
//           icon: FileText,
//           name: "witness_statement.pdf",
//           size: "2.1 MB",
//           tag: "signed URL",
//         },
//       ],
//       audit: "Last audit: 2026-05-19T14:32:11Z · RBAC: investigator",
//       url: "dashboard.demsplus.com/cases/CR-2409",
//     },
//     {
//       id: 2,
//       title: "Case ID: FIN-2234-AUDIT",
//       status: "Blockchain Verified",
//       items: [
//         {
//           icon: Eye,
//           name: "surveillance_footage.mov",
//           size: "156 MB",
//           tag: "chain logged",
//         },
//         {
//           icon: FileSignature,
//           name: "financial_records.xlsx",
//           size: "4.8 MB",
//           tag: "immutable",
//         },
//       ],
//       audit: "Last audit: 2026-05-19T09:15:22Z · RBAC: forensic auditor",
//       url: "dashboard.demsplus.com/cases/FIN-2234",
//     },
//     {
//       id: 3,
//       title: "Case ID: HR-5678-INT",
//       status: "Court Admissible",
//       items: [
//         {
//           icon: UserCheck,
//           name: "interview_recording.mp3",
//           size: "8.2 MB",
//           tag: "biometric",
//         },
//         {
//           icon: Calendar,
//           name: "timeline_evidence.pdf",
//           size: "1.5 MB",
//           tag: "timestamped",
//         },
//       ],
//       audit: "Last audit: 2026-05-18T22:05:47Z · RBAC: legal counsel",
//       url: "dashboard.demsplus.com/cases/HR-5678",
//     },
//     {
//       id: 4,
//       title: "Case ID: CYB-8901-FR",
//       status: "Hash Integrity 100%",
//       items: [
//         {
//           icon: Hash,
//           name: "forensic_image.E01",
//           size: "2.1 GB",
//           tag: "SHA-256",
//         },
//         {
//           icon: Download,
//           name: "log_analysis.json",
//           size: "345 KB",
//           tag: "exported",
//         },
//       ],
//       audit: "Last audit: 2026-05-19T11:42:03Z · RBAC: cyber examiner",
//       url: "dashboard.demsplus.com/cases/CYB-8901",
//     },
//   ];

//   // Auto-rotate every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev + 1) % cards.length);
//   };

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
//   };

//   // Strategic layout matching the visual screenshot structure
//   const getCardStyle = (index: number) => {
//     const diff = (index - activeIndex + cards.length) % cards.length;

//     if (diff === 0) {
//       // Main Center Card
//       return {
//         zIndex: 40,
//         opacity: 1,
//         transform: "translateX(0px) scale(1)",
//         cardClass: "shadow-2xl border-gray-200 ring-1 ring-black/5",
//       };
//     } else if (diff === 1) {
//       // Right Card peaking behind
//       return {
//         zIndex: 20,
//         opacity: 0.4,
//         transform: "translateX(140px) scale(0.9)",
//         cardClass: "shadow-md pointer-events-none",
//       };
//     } else if (diff === cards.length - 1) {
//       // Left Card peaking behind
//       return {
//         zIndex: 20,
//         opacity: 0.4,
//         transform: "translateX(-140px) scale(0.9)",
//         cardClass: "shadow-md pointer-events-none",
//       };
//     } else {
//       // Any other card hidden completely
//       return {
//         zIndex: 10,
//         opacity: 0,
//         transform: "translateX(0px) scale(0.8)",
//         cardClass: "pointer-events-none",
//       };
//     }
//   };

//   return (
//     <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 max-w-7xl mx-auto overflow-hidden">
//       <div className="grid lg:grid-cols-2 gap-14 items-center">
//         {/* Left Side - Content */}
//         <div>
//           <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-1.5 rounded-full text-indigo-800 text-sm font-medium mb-6">
//             <Fingerprint size={16} /> Chain-of-Custody · Zero Trust Ready
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
//             Secure Evidence &{" "}
//             <span className="text-indigo-800">Case Management</span> Platform
//           </h1>
//           <p className="text-gray-500 text-lg mt-6">
//             Enterprise-grade DEMS+ unifies fragmented evidence, SHA-256
//             integrity, audit logs, and RBAC for legal, forensics & compliance.
//           </p>
//           <div className="flex gap-4 mt-8 flex-wrap">
//             <button className="bg-indigo-900 text-white px-7 py-3 rounded-xl font-semibold shadow-lg flex items-center gap-2 hover:bg-indigo-800 transition-all">
//               <Lock size={18} /> Start Free Trial
//             </button>
//             <button className="border border-gray-300 bg-white px-7 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-gray-50 transition-all">
//               <PlayCircle size={18} /> Watch Demo
//             </button>
//           </div>
//         </div>

//         {/* Right Side - Screen-Accurate Card Carousel Slider */}
//         <div className="relative min-h-[450px] flex items-center justify-center w-full">
//           <div className="relative w-full max-w-md flex items-center justify-center">
//             {/* Cards Mapping */}
//             {cards.map((card, idx) => {
//               const style = getCardStyle(idx);
//               return (
//                 <div
//                   key={card.id}
//                   className={`absolute transition-all duration-500 ease-in-out ${style.cardClass}`}
//                   style={{
//                     zIndex: style.zIndex,
//                     opacity: style.opacity,
//                     transform: style.transform,
//                   }}
//                 >
//                   <div className="bg-white rounded-3xl p-6 border w-full max-w-md md:w-[400px] min-h-[360px] flex flex-col justify-between">
//                     <div>
//                       {/* Card Header */}
//                       <div className="flex justify-between border-b pb-3 mb-4">
//                         <div className="flex gap-1.5 items-center">
//                           <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
//                           <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
//                           <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
//                         </div>
//                         <span className="text-xs font-mono text-gray-400 truncate max-w-[180px]">
//                           {card.url}
//                         </span>
//                         <Shield
//                           size={16}
//                           className="text-indigo-500 flex-shrink-0"
//                         />
//                       </div>

//                       {/* Card Body Title */}
//                       <div className="space-y-4">
//                         <div className="flex justify-between items-start gap-2 flex-wrap">
//                           <h3 className="font-bold text-xl text-gray-900">
//                             {card.title}
//                           </h3>
//                           <span className="text-green-600 text-xs font-medium flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full">
//                             <CheckCircle size={11} /> {card.status}
//                           </span>
//                         </div>

//                         {/* Items Nested */}
//                         <div className="space-y-2.5">
//                           {card.items.map((item, itemIdx) => (
//                             <div
//                               key={itemIdx}
//                               className="bg-gray-50 p-3 rounded-xl flex justify-between items-center text-sm border border-gray-100"
//                             >
//                               <span className="flex items-center gap-2 font-medium text-gray-700">
//                                 <item.icon
//                                   size={15}
//                                   className="text-gray-400"
//                                 />{" "}
//                                 {item.name}
//                               </span>
//                               <div className="flex items-center gap-2">
//                                 <span className="text-xs text-gray-400">
//                                   {item.size}
//                                 </span>
//                                 <span className="bg-indigo-50 text-indigo-700 text-[11px] font-semibold px-2 py-0.5 rounded">
//                                   {item.tag}
//                                 </span>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Card Footer Audit Trail */}
//                     <div className="border-t pt-3 mt-4 text-[11px] text-gray-400 flex items-center gap-1">
//                       <Clock size={12} /> {card.audit}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}

//             {/* Interface Overlay Controls (The arrows on top of the active card edges) */}
//             <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 z-50 pointer-events-none">
//               <button
//                 onClick={handlePrev}
//                 className="w-11 h-11 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:scale-105 transition-all pointer-events-auto"
//                 aria-label="Previous case"
//               >
//                 <ChevronLeft size={20} strokeWidth={2.5} />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="w-11 h-11 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:scale-105 transition-all pointer-events-auto"
//                 aria-label="Next case"
//               >
//                 <ChevronRight size={20} strokeWidth={2.5} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import {
  Fingerprint,
  Shield,
  PlayCircle,
  Lock,
  CheckCircle,
  Database,
  FileText,
  Clock,
  Eye,
  Download,
  UserCheck,
  Calendar,
  FileSignature,
  Hash,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Server,
  Activity,
  Key,
  Layers,
  Scale,
  ShieldAlert,
  Cpu,
  RefreshCw,
  Terminal,
  FileSpreadsheet,
  Workflow,
  Cpu as ProcessIcon,
  HardDrive,
  Radio,
  Sliders,
  Maximize2,
} from "lucide-react";

export default function Home() {
  // Active Interactive States
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredProblem, setHoveredProblem] = useState<number | null>(null);
  const [activeSectionView, setActiveSectionView] = useState(0);

  // States for 5 New Sections JavaScript Animations / Interactive States
  const [selectedNode, setSelectedNode] = useState(0);
  const [metricMultiplier, setMetricMultiplier] = useState(1.0);
  const [activeStreamId, setActiveStreamId] = useState("node-alpha");
  const [complianceProgress, setComplianceProgress] = useState(87);
  const [selectedKeyType, setSelectedKeyType] = useState("RSA-4096");

  // Auto-rotate Hero Cards Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Simulating live telemetry updates via JS Hooks for new section blocks
  useEffect(() => {
    const streamInterval = setInterval(() => {
      setMetricMultiplier((prev) => +(prev === 1.0 ? 1.04 : 1.0));
    }, 2000);
    return () => clearInterval(streamInterval);
  }, []);

  // --- COMPONENT DATA CONFIGURATIONS ---
  const cards = [
    {
      id: 1,
      title: "Case: CR-2409-INTEL",
      status: "SHA-256 verified",
      items: [
        {
          icon: Database,
          name: "evidence.mp4",
          size: "12.4 MB",
          tag: "custody logged",
        },
        {
          icon: FileText,
          name: "witness_statement.pdf",
          size: "2.1 MB",
          tag: "signed URL",
        },
      ],
      audit: "Audit: 2026-05-19 · RBAC: investigator",
      url: "dashboard.demsplus.com/cases/CR-2409",
    },
    {
      id: 2,
      title: "Case: FIN-2234-AUDIT",
      status: "Blockchain Verified",
      items: [
        {
          icon: Eye,
          name: "surveillance_footage.mov",
          size: "156 MB",
          tag: "chain logged",
        },
        {
          icon: FileSignature,
          name: "financial_records.xlsx",
          size: "4.8 MB",
          tag: "immutable",
        },
      ],
      audit: "Audit: 2026-05-19 · RBAC: forensic auditor",
      url: "dashboard.demsplus.com/cases/FIN-2234",
    },
    {
      id: 3,
      title: "Case: HR-5678-INT",
      status: "Court Admissible",
      items: [
        {
          icon: UserCheck,
          name: "interview_recording.mp3",
          size: "8.2 MB",
          tag: "biometric",
        },
        {
          icon: Calendar,
          name: "timeline_evidence.pdf",
          size: "1.5 MB",
          tag: "timestamped",
        },
      ],
      audit: "Audit: 2026-05-18 · RBAC: legal counsel",
      url: "dashboard.demsplus.com/cases/HR-5678",
    },
  ];

  const problems = [
    {
      id: "01",
      title: "Fragmented Repositories",
      desc: "Evidence lands scattered across unsecured local devices, personal cloud accounts, and chats.",
      tag: "Data Leakage Risk",
    },
    {
      id: "02",
      title: "Broken Custody Chains",
      desc: "Lack of unalterable structural tracking logs means data integrity is compromised before trial.",
      tag: "Admissibility Failure",
    },
    {
      id: "03",
      title: "Blind Access Control",
      desc: "Coarse-grained systems provide over-privileged file pathways with zero context limits.",
      tag: "Privilege Escalation",
    },
    {
      id: "04",
      title: "Passive Storage Models",
      desc: "Static data buckets fail to detect modifications or compute inline block-level hashing hashes.",
      tag: "Tamper Exposure",
    },
  ];

  const capabilities = [
    {
      icon: Hash,
      title: "SHA-256 Block Verification",
      desc: "Generates explicit file cryptographs instantly upon network entry. Any downstream structural variation flags an immediate tamper event inside administration modules.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Key,
      title: "Dynamic Access Tokenization",
      desc: "Leverages Zero-Trust architectures with granular, contextual privilege roles restricting viewing spaces down to item levels based on active credentials.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Server,
      title: "Immutable Audit Vaulting",
      desc: "Keeps an continuous, read-only system ledger detailing individual viewing vectors, metadata rotations, and archival state conversions.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: ShieldAlert,
      title: "Ephemeral Signed Gateways",
      desc: "Generates time-fused URL parameters for safe asset distribution to external stakeholders, protecting underlying storage arrays.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  // Expanded 6-Step Core Lifecycle Timeline Data
  const interactiveFlows = [
    {
      title: "1. Encrypted Asset Ingestion",
      subtitle: "Zero-Trust Perimeter Secure Entry",
      log: "SYSTEM: Received packet stream via TLS 1.3... Computing block matrix allocation... Allocating hardware vault space... Done.",
      icon: Database,
    },
    {
      title: "2. Cryptographic Fingerprinting",
      subtitle: "Real-time SHA-256 Signature Isolation",
      log: "HASH ENGINE: sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\nStatus: Integrity Verified [100%]",
      icon: Hash,
    },
    {
      title: "3. Immutable Custody Binding",
      subtitle: "Ledger-Locked Sequence Log",
      log: "AUDIT LOG: Bound to token investigator_id_99x.\nAccess path state set to IMMUTABLE.\nBlock consensus sequence confirmation sequence initialized.",
      icon: Fingerprint,
    },
    {
      title: "4. Tamper Detection & Verification",
      subtitle: "Continuous Hash Integrity Scanning",
      log: "CRON_ENGINE: Initializing secondary sector integrity scan...\nZero modifications flagged across 14,204 runtime verification blocks.",
      icon: RefreshCw,
    },
    {
      title: "5. Authorized Legal Discovery",
      subtitle: "RBAC Content Clearance",
      log: "GATEWAY: Ephemeral secure signed token delivered to routing address 'Legal Counsel'.\n300s decay parameter successfully attached.",
      icon: Scale,
    },
    {
      title: "6. Court-Admissible Compliance Archiving",
      subtitle: "Long-term Immutable System Logs",
      log: "VAULT: Packaging master structural metadata bundle... Generating archival signature hash...\nAsset locked for statutory retention timeline.",
      icon: Server,
    },
  ];

  // Asymmetric Dynamic Content Display Data (Layout Features)
  const featuresList = [
    {
      title: "Granular Case Analytics & Mapping Matrix",
      tag: "Command Control",
      desc: "Supervise deep organizational threat perimeters from a single node. Track operational capacity metrics, open legal cases, forensic processing rates, and system alerts via localized, security-first dashboard architecture blocks.",
      component: (
        <div className="w-full bg-[#090e1a] border border-white/[0.08] rounded-2xl p-5 space-y-4 font-sans shadow-2xl">
          <div className="flex justify-between items-center border-b border-white/[0.05] pb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 flex items-center gap-2">
              <Activity size={14} /> Analytics Node v1.26
            </span>
            <span className="bg-emerald-950 text-emerald-400 border border-emerald-500/20 text-[9px] font-bold px-2 py-0.5 rounded">
              ONLINE
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-950 p-3 rounded-xl border border-white/[0.02]">
              <div className="text-[10px] text-slate-500">Active Cases</div>
              <div className="text-xl font-bold text-white mt-1">1,482</div>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-white/[0.02]">
              <div className="text-[10px] text-slate-500">Integrity Rate</div>
              <div className="text-xl font-bold text-emerald-400 mt-1">
                100.0%
              </div>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-white/[0.02]">
              <div className="text-[10px] text-slate-500">System Alerts</div>
              <div className="text-xl font-bold text-rose-400 mt-1">0</div>
            </div>
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-white/[0.03] space-y-2">
            <div className="text-[10px] font-mono text-slate-500 flex justify-between">
              <span>Evidentiary Ingestion Rate</span>
              <span className="text-indigo-400 font-bold">48.2 MB/s</span>
            </div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-[72%] rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Unalterable Auditing Ledger Tracking Engine",
      tag: "Zero-Trust Records",
      desc: "Every interaction, read request, and download token emission produces a localized tracking block. Absolute logging architecture ensures third-party verification parameters are completely court-admissible at all times.",
      component: (
        <div className="w-full bg-[#070b14] border border-white/[0.08] rounded-2xl p-5 font-mono text-xs space-y-3 shadow-2xl">
          <div className="flex items-center gap-1.5 text-slate-500 border-b border-white/[0.05] pb-2 text-[10px]">
            <Terminal size={12} className="text-indigo-400" />{" "}
            SECURE_AUDIT_STREAM_CORE
          </div>
          <div className="space-y-1.5 text-[11px] leading-relaxed">
            <div className="text-slate-400">
              <span className="text-indigo-500">[14:02:11]</span> USER_VIEW:
              'investigator_09' fetched asset{" "}
              <span className="text-amber-400">'surveillance.mov'</span>
            </div>
            <div className="text-emerald-500">
              <span className="text-indigo-500">[14:02:11]</span> HASH_MATCH:
              sha256 match validated on sector allocation arrays.
            </div>
            <div className="text-slate-400">
              <span className="text-indigo-500">[14:15:32]</span> TOKEN_DECAY:
              Ephemeral url pathway string closed for address group
              'Legal_Counsel'.
            </div>
            <div className="text-rose-400">
              <span className="text-indigo-500">[14:22:01]</span> AUTH_WARN:
              Denied root write operations to role token investigator_09.
            </div>
          </div>
          <div className="bg-slate-950 p-2 rounded-lg text-center text-[10px] text-slate-500 border border-white/[0.02]">
            Total Log Block Weight: 148.902 Cryptographic Nodes
          </div>
        </div>
      ),
    },
    {
      title: "Deep Search Cross-Reference & Metadata Extraction",
      tag: "AI Discovery Index",
      desc: "Instantly parse terabytes of legal discovery material. Extract operational parameters, locate cross-referenced signatures, match computed hashes, and query system nodes cleanly using multi-tenant indexing structures.",
      component: (
        <div className="w-full bg-[#0a0f1d] border border-white/[0.08] rounded-2xl p-5 space-y-3 shadow-2xl">
          <div className="bg-slate-950 p-2.5 rounded-xl border border-white/[0.05] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> query:
              "case_intel_sha256"
            </div>
            <span className="text-[10px] font-mono text-slate-600">0.002s</span>
          </div>
          <div className="space-y-2">
            <div className="p-2 bg-slate-950 rounded-lg border border-white/[0.02] flex justify-between items-center text-[11px]">
              <span className="text-slate-300 flex items-center gap-2">
                <FileSpreadsheet size={12} className="text-slate-500" />{" "}
                corporate_ledger.xlsx
              </span>
              <span className="text-indigo-400 font-mono font-bold">
                98.4% Match
              </span>
            </div>
            <div className="p-2 bg-slate-950 rounded-lg border border-white/[0.02] flex justify-between items-center text-[11px]">
              <span className="text-slate-300 flex items-center gap-2">
                <FileText size={12} className="text-slate-500" />{" "}
                forensic_log_dump.json
              </span>
              <span className="text-indigo-400 font-mono font-bold">
                89.1% Match
              </span>
            </div>
          </div>
          <div className="text-[10px] text-slate-500 text-right font-mono">
            Found 14 targeted files across 3 system datastores.
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#030712] text-slate-200 min-h-screen font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* GLOBAL BACKGROUND PREMIUM MESH GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370d_1px,transparent_1px),linear-gradient(to_bottom,#1f29370d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 px-6 max-w-7xl mx-auto">
        <div className="absolute top-[-10%] right-[5%] w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-left relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-950/80 to-purple-950/80 border border-indigo-500/20 px-3.5 py-1.5 rounded-full text-indigo-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Sovereign Evidence Infrastructure
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              The Gold Standard for <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
                Digital Evidence Integrity
              </span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-xl font-normal leading-relaxed">
              Unify fragmented data streams under high-security defense
              protocols. DEMS+ secures legal assets with real-time SHA-256
              validation and absolute custody tracking.
            </p>
            <div className="flex gap-4 pt-4 flex-wrap">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-indigo-600/20 hover:bg-indigo-500 hover:-translate-y-0.5 transition-all duration-200 text-xs uppercase tracking-wider flex items-center gap-2">
                <Lock size={14} /> Request Operational Access
              </button>
              <button className="border border-white/[0.08] bg-white/[0.03] backdrop-blur px-8 py-4 rounded-xl font-semibold text-slate-300 hover:bg-white/[0.08] hover:text-white transition-all duration-200 text-xs uppercase tracking-wider flex items-center gap-2">
                <PlayCircle size={14} /> Technical Walkthrough
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[440px] flex items-center justify-center w-full">
            <div className="relative w-full max-w-sm md:max-w-md flex items-center justify-center">
              {cards.map((card, idx) => {
                const diff = (idx - activeIndex + cards.length) % cards.length;
                let cardStyle = {};
                if (diff === 0)
                  cardStyle = {
                    zIndex: 40,
                    opacity: 1,
                    transform: "translateX(0px) scale(1) rotate(0deg)",
                  };
                else if (diff === 1)
                  cardStyle = {
                    zIndex: 20,
                    opacity: 0.35,
                    transform: "translateX(100px) scale(0.9) rotate(2deg)",
                    filter: "blur(0.5px)",
                  };
                else if (diff === cards.length - 1)
                  cardStyle = {
                    zIndex: 20,
                    opacity: 0.35,
                    transform: "translateX(-100px) scale(0.9) rotate(-2deg)",
                    filter: "blur(0.5px)",
                  };
                else
                  cardStyle = {
                    zIndex: 10,
                    opacity: 0,
                    transform: "translateX(0px) scale(0.8)",
                  };

                return (
                  <div
                    key={card.id}
                    className="absolute transition-all duration-700 ease-out"
                    style={cardStyle}
                  >
                    <div className="bg-[#0d1321]/90 backdrop-blur-2xl rounded-3xl p-6 border border-white/[0.08] w-[310px] sm:w-[370px] min-h-[350px] flex flex-col justify-between shadow-2xl shadow-black/80">
                      <div>
                        <div className="flex justify-between border-b border-white/[0.05] pb-3 mb-4">
                          <div className="flex gap-1.5 items-center">
                            <span className="w-2 h-2 rounded-full bg-red-500/60" />
                            <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                            <span className="w-2 h-2 rounded-full bg-green-500/60" />
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 truncate max-w-[150px]">
                            {card.url}
                          </span>
                          <Shield size={14} className="text-indigo-400/80" />
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="font-bold text-sm text-slate-100 tracking-wide">
                              {card.title}
                            </h3>
                            <span className="text-emerald-400 text-[9px] font-extrabold uppercase tracking-widest bg-emerald-950/50 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                              {card.status}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {card.items.map((item, i) => (
                              <div
                                key={i}
                                className="bg-slate-950/40 border border-white/[0.03] p-2.5 rounded-xl flex justify-between items-center text-xs"
                              >
                                <span className="flex items-center gap-2 font-medium text-slate-300">
                                  <item.icon
                                    size={13}
                                    className="text-slate-500"
                                  />{" "}
                                  {item.name}
                                </span>
                                <span className="bg-indigo-950/80 text-indigo-400 border border-indigo-900/30 text-[9px] font-bold px-1.5 py-0.5 rounded">
                                  {item.tag}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-white/[0.05] pt-3 text-[9px] font-mono text-slate-500 flex items-center gap-1">
                        <Clock size={11} /> {card.audit}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between -px-6 z-50 pointer-events-none">
                <button
                  onClick={() =>
                    setActiveIndex((p) => (p - 1 + cards.length) % cards.length)
                  }
                  className="w-9 h-9 rounded-full bg-slate-900/80 border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all pointer-events-auto shadow-md"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setActiveIndex((p) => (p + 1) % cards.length)}
                  className="w-9 h-9 rounded-full bg-slate-900/80 border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all pointer-events-auto shadow-md"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OPERATIONAL FRAGILITY MATRIX */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest font-black text-indigo-400 mb-2">
            Operational Fragility
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Systemic Critical Failures
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((prob, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${hoveredProblem === idx ? "bg-red-950/20 border-red-500/30 -translate-y-1" : "bg-white/[0.01] border-white/[0.04]"}`}
              onMouseEnter={() => setHoveredProblem(idx)}
              onMouseLeave={() => setHoveredProblem(null)}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono text-slate-600 font-bold">
                  {prob.id}
                </span>
                <AlertTriangle
                  size={15}
                  className={
                    hoveredProblem === idx
                      ? "text-red-400 animate-pulse"
                      : "text-slate-600"
                  }
                />
              </div>
              <h3 className="font-bold text-slate-200 mb-2 text-sm tracking-wide">
                {prob.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {prob.desc}
              </p>
              <div className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
                {prob.tag}
              </div>
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${hoveredProblem === idx ? "bg-red-500/50" : "bg-transparent"}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 3. CORE CRYPTOGRAPHIC PILLARS */}
      <section className="py-24 bg-gradient-to-b from-transparent via-slate-900/10 to-transparent px-6 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest font-black text-indigo-400 mb-2">
            Security Verification
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Technical Security Infrastructure
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:border-indigo-500/20 hover:bg-slate-900/30 transition-all duration-300 flex gap-6 items-start relative overflow-hidden"
            >
              <div
                className={`p-3.5 rounded-xl bg-gradient-to-br ${cap.color} bg-opacity-10 text-white flex-shrink-0 group-hover:scale-105 transition-transform`}
              >
                <cap.icon size={20} />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-200 tracking-wide">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EXPANDED 6-STEP EVIDENCE LIFECYCLE ENGINE */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest font-black text-indigo-400 mb-2">
            Ingestion Flow Engine
          </p>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Evidence Lifecycle Timeline
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side Tab System */}
          <div className="lg:col-span-5 flex flex-col gap-2.5 justify-center">
            {interactiveFlows.map((flow, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-200 flex items-center gap-4 ${
                  activeTab === idx
                    ? "bg-indigo-950/40 border-indigo-500/40 translate-x-1.5 shadow-lg shadow-indigo-950/50"
                    : "bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.02]"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${activeTab === idx ? "bg-indigo-600 text-white" : "bg-slate-900 text-slate-500"}`}
                >
                  <flow.icon size={15} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-200 tracking-wide">
                    {flow.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    {flow.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Monitor Console Terminal */}
          <div className="lg:col-span-7 bg-[#070b14] border border-white/[0.06] rounded-2xl p-6 font-mono flex flex-col justify-between shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-white/[0.05] pb-3 mb-4">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/40" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/40" />
                <span className="w-2 h-2 rounded-full bg-green-500/40" />
              </div>
              <span className="text-[9px] text-slate-600 tracking-widest uppercase font-bold">
                DEMS+ Core Monitor v1.02
              </span>
            </div>
            <div className="flex-1 space-y-4 text-xs">
              <div className="text-slate-600">
                // Executing simulated asset sequence trace...
              </div>
              <div className="text-indigo-400 font-bold">
                &gt; {interactiveFlows[activeTab].title}
              </div>
              <div className="bg-slate-950/80 p-4 rounded-xl border border-white/[0.03] text-emerald-400 font-mono text-[11px] overflow-x-auto whitespace-pre-wrap leading-relaxed min-h-[110px]">
                {interactiveFlows[activeTab].log}
              </div>
            </div>
            <div className="border-t border-white/[0.05] pt-3 mt-6 flex justify-between text-[10px] text-slate-600">
              <span>STATUS: SYSTEM_CLEAR</span>
              <span className="animate-pulse text-indigo-400 font-bold">
                ● INLINE STREAMING READY
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ASYMMETRIC CONTROL VIEWPORTS (Interactive Interface Feature Mapping) */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.04] bg-gradient-to-b from-transparent via-purple-950/[0.02] to-transparent">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest font-black text-indigo-400 mb-2">
            Platform Matrix
          </p>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Secure Management Viewports
          </h2>
        </div>

        <div className="space-y-12">
          {featuresList.map((feat, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Block Selection (Swaps position based on row balance index) */}
                <div
                  className={`lg:col-span-6 space-y-4 ${!isEven ? "lg:order-2" : ""}`}
                >
                  <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase bg-indigo-950/50 border border-indigo-500/20 px-2.5 py-1 rounded-md">
                    {feat.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>

                {/* Right Mock UI Rendering System Block */}
                <div
                  className={`lg:col-span-6 flex items-center justify-center p-2 rounded-2xl bg-white/[0.01] border border-white/[0.03] transition-transform duration-300 hover:scale-[1.01] ${!isEven ? "lg:order-1" : ""}`}
                >
                  {feat.component}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          NEW SECTION 1: ASYMMETRIC IMAGE PORTAL (LEFT IMAGE - RIGHT CONTENT)
          ========================================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side Interactive Image Module */}
          <div className="lg:col-span-6 group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-slate-900/40 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
            <div className="absolute top-4 left-4 z-20 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/[0.05] text-[10px] font-mono tracking-wider text-indigo-300 uppercase flex items-center gap-1.5">
              <ProcessIcon size={12} className="animate-spin text-indigo-400" />{" "}
              Layer 1 Ingestion Matrix
            </div>
            <div className="relative h-[380px] w-full rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="Secure High Density Datacenter Arrays"
                className="w-full h-full object-cover grayscale brightness-[0.4] contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:brightness-[0.5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />

              {/* Dynamic JS Overlay Component simulation */}
              <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2">
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>Datastore Core Mapping</span>
                  <span className="text-emerald-400 font-bold">
                    {(98.4 * metricMultiplier).toFixed(2)}% Operational
                  </span>
                </div>
                <div className="w-full bg-slate-950/60 border border-white/[0.05] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full transition-all duration-500"
                    style={{ width: `${82 * metricMultiplier}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content Architecture */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-[10px] font-mono tracking-widest uppercase font-bold text-indigo-400 bg-indigo-950/40 border border-indigo-900/40 px-3 py-1 rounded">
              Infrastructure Node Scaling
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
              Isolated Hardware Isolation Stack For Absolute File Secrecy
            </h2>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
              Every data byte flowing into DEMS+ avoids public cloud routes.
              Sub-system requests transfer directly into localized hardware
              cryptographic perimeters, rendering individual assets invisible to
              unauthorized tenants.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white/[0.01] border border-white/[0.03] rounded-xl font-mono">
                <div className="text-slate-500 text-[10px]">
                  Active Port Allocation
                </div>
                <div className="text-base font-bold text-white mt-1">
                  4,096 Crypt-Nodes
                </div>
              </div>
              <div className="p-4 bg-white/[0.01] border border-white/[0.03] rounded-xl font-mono">
                <div className="text-slate-500 text-[10px]">
                  Processing Isolation
                </div>
                <div className="text-base font-bold text-emerald-400 mt-1">
                  &lt; 1.4ms Ingress
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEW SECTION 2: ASYMMETRIC IMAGE PORTAL (RIGHT IMAGE - LEFT CONTENT)
          ========================================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.04] bg-slate-900/[0.02]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side Content Architecture */}
          <div className="lg:col-span-6 space-y-6 lg:order-1">
            <div className="inline-block text-[10px] font-mono tracking-widest uppercase font-bold text-purple-400 bg-purple-950/40 border border-purple-900/40 px-3 py-1 rounded">
              Cryptographic Key Bounds
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
              Multi-Layer Key Rotation Matrices & Access Hardening
            </h2>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
              DEMS+ abstracts security layers using ephemeral key parameters.
              Click through individual algorithm blocks to test simulated
              encryption strengths and signature verification environments in
              real time.
            </p>

            {/* JavaScript Interactive Tab Controls */}
            <div className="flex gap-2 font-mono text-[10px]">
              {["RSA-4096", "ECDSA-P384", "Ed25519"].map((keyType) => (
                <button
                  key={keyType}
                  onClick={() => setSelectedKeyType(keyType)}
                  className={`px-3 py-1.5 border rounded transition-all duration-150 ${selectedKeyType === keyType ? "bg-purple-950/60 border-purple-500/50 text-purple-300" : "bg-transparent border-white/[0.05] text-slate-500"}`}
                >
                  {keyType}
                </button>
              ))}
            </div>

            <div className="bg-slate-950 border border-white/[0.04] p-3.5 rounded-xl text-xs font-mono text-slate-400">
              <span className="text-purple-400">
                # Current Config Structure:
              </span>
              <div className="text-[11px] mt-1 text-slate-500">
                {selectedKeyType === "RSA-4096" &&
                  "System standard deployment. Optimized for long-term legal ledger admissibility parameters."}
                {selectedKeyType === "ECDSA-P384" &&
                  "High throughput, lightweight signature space mapping. Used for sub-second video ingestion pools."}
                {selectedKeyType === "Ed25519" &&
                  "Advanced high-speed EdDSA configuration offering maximum resistance against edge side-channel profiling inputs."}
              </div>
            </div>
          </div>

          {/* Right Side Image Module */}
          <div className="lg:col-span-6 group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-slate-900/40 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.01] lg:order-2">
            <div className="absolute top-4 right-4 z-20 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/[0.05] text-[10px] font-mono tracking-wider text-purple-300 uppercase flex items-center gap-1.5">
              <Sliders size={12} className="text-purple-400" /> Active Entropy
              Array
            </div>
            <div className="relative h-[380px] w-full rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80"
                alt="Abstract Cryptographic Coding Visualizer"
                className="w-full h-full object-cover grayscale brightness-[0.35] contrast-150 transition-transform duration-700 group-hover:scale-105 group-hover:brightness-[0.45]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEW SECTION 3: ASYMMETRIC IMAGE PORTAL (LEFT IMAGE - RIGHT CONTENT)
          ========================================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side Image Module */}
          <div className="lg:col-span-6 group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-slate-900/40 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
            <div className="absolute top-4 left-4 z-20 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/[0.05] text-[10px] font-mono tracking-wider text-blue-300 uppercase flex items-center gap-1.5">
              <Radio size={12} className="text-blue-400 animate-pulse" />{" "}
              Telemetry Stream Alpha
            </div>
            <div className="relative h-[380px] w-full rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                alt="Microprocessing Board Architecture Circuit"
                className="w-full h-full object-cover grayscale brightness-[0.4] contrast-115 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />

              {/* Dynamic Stream Tracker using JS State */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[240px] bg-slate-950/90 border border-white/[0.08] p-3 rounded-xl font-mono text-[10px] space-y-1.5 shadow-xl">
                <div className="text-slate-500 border-b border-white/[0.05] pb-1 font-bold">
                  NETWORK SECTOR MAP
                </div>
                <div
                  onClick={() => setActiveStreamId("node-alpha")}
                  className={`cursor-pointer px-1.5 py-0.5 rounded ${activeStreamId === "node-alpha" ? "bg-blue-950 text-blue-400 font-bold" : "text-slate-400"}`}
                >
                  &gt; node-alpha.dems.internal
                </div>
                <div
                  onClick={() => setActiveStreamId("node-omega")}
                  className={`cursor-pointer px-1.5 py-0.5 rounded ${activeStreamId === "node-omega" ? "bg-blue-950 text-blue-400 font-bold" : "text-slate-400"}`}
                >
                  &gt; node-omega.dems.internal
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content Architecture */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-[10px] font-mono tracking-widest uppercase font-bold text-blue-400 bg-blue-950/40 border border-blue-100/10 px-3 py-1 rounded">
              Chain-of-Custody Real-Time Logs
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
              Immutable Audit Sequencing Across Shared Datacenters
            </h2>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
              Every digital footprint generates an irreversible consensus
              verification signature within local disk clusters. Auditors
              leverage cryptographic traces to prove that evidence profiles
              haven’t been read or restructured out of designated trial
              timelines.
            </p>
            <div className="bg-slate-950/40 border border-white/[0.03] rounded-2xl p-4 font-mono text-[11px] text-slate-400 space-y-1">
              <div className="text-slate-500 font-bold mb-1">
                // Selected Datastore Target Output:
              </div>
              {activeStreamId === "node-alpha" ? (
                <div className="text-blue-300">
                  SYSTEM: Connection verified on cluster ALPHA. Integrity
                  factor: 1.0000x nominal.
                </div>
              ) : (
                <div className="text-indigo-400">
                  SYSTEM: Redundant mapping initialized on cluster OMEGA.
                  Synchronization active.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEW SECTION 4: ASYMMETRIC IMAGE PORTAL (RIGHT IMAGE - LEFT CONTENT)
          ========================================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.04] bg-slate-900/[0.02]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side Content Architecture */}
          <div className="lg:col-span-6 space-y-6 lg:order-1">
            <div className="inline-block text-[10px] font-mono tracking-widest uppercase font-bold text-amber-400 bg-amber-950/40 border border-amber-900/40 px-3 py-1 rounded">
              High-Compliance Standards
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
              CJIS & GDPR Algorithmic Enforcement Boundaries
            </h2>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
              Regulatory metrics are verified via runtime assertions inside API
              pathways. Instead of performing audits manually at end-of-year
              points, compliance reporting states are calculated iteratively on
              each database write event.
            </p>

            <div className="space-y-3 font-mono">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-400">
                  Automated Audit Passing Rate
                </span>
                <span className="text-amber-400 font-bold">
                  {complianceProgress}%
                </span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden p-0.5 border border-white/[0.05]">
                <div
                  className="bg-amber-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${complianceProgress}%` }}
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setComplianceProgress(94)}
                  className="text-[9px] bg-white/[0.02] border border-white/[0.05] text-slate-400 px-2 py-1 rounded hover:text-white transition-colors"
                >
                  Force Strict Validation
                </button>
                <button
                  onClick={() => setComplianceProgress(87)}
                  className="text-[9px] bg-white/[0.02] border border-white/[0.05] text-slate-400 px-2 py-1 rounded hover:text-white transition-colors"
                >
                  Reset Baseline
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Image Module */}
          <div className="lg:col-span-6 group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-slate-900/40 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.01] lg:order-2">
            <div className="absolute top-4 right-4 z-20 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/[0.05] text-[10px] font-mono tracking-wider text-amber-300 uppercase flex items-center gap-1.5">
              <CheckCircle size={12} className="text-amber-400" /> Statutory
              Compliance Safe
            </div>
            <div className="relative h-[380px] w-full rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                alt="Global Network Hub Grid Map View"
                className="w-full h-full object-cover grayscale brightness-[0.35] contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:brightness-[0.4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEW SECTION 5: ASYMMETRIC IMAGE PORTAL (LEFT IMAGE - RIGHT CONTENT)
          ========================================================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side Image Module */}
          <div className="lg:col-span-6 group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-slate-900/40 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
            <div className="absolute top-4 left-4 z-20 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/[0.05] text-[10px] font-mono tracking-wider text-emerald-300 uppercase flex items-center gap-1.5">
              <HardDrive size={12} className="text-emerald-400 animate-pulse" />{" "}
              Cold Vault Array
            </div>
            <div className="relative h-[380px] w-full rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80"
                alt="Mainframe Computing Nodes Secure Core"
                className="w-full h-full object-cover grayscale brightness-[0.35] contrast-135 transition-transform duration-700 group-hover:scale-105 group-hover:brightness-[0.45]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
            </div>
          </div>

          {/* Right Side Content Architecture */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-[10px] font-mono tracking-widest uppercase font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-900/40 px-3 py-1 rounded">
              Long-Term Storage Protocols
            </div>
            <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
              Cryptographic Deep-Freeze Vaulting For Lifetime Archival Bounds
            </h2>
            <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
              When an active case file timeline concludes, storage segments
              convert to high-density cold data blocks. Deep-freeze archives
              verify asset block headers continuously every 24 hours,
              guaranteeing zero degradation or modification occurs over long
              retention lifetimes.
            </p>
            <div className="space-y-2 font-mono text-xs">
              <div className="p-3 bg-slate-950/60 border border-white/[0.03] rounded-xl flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-2">
                  <Server size={13} className="text-slate-600" /> Deep-Freeze
                  Consensus State
                </span>
                <span className="text-emerald-400 font-bold">LOCKED</span>
              </div>
              <div className="p-3 bg-slate-950/60 border border-white/[0.03] rounded-xl flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-2">
                  <Workflow size={13} className="text-slate-600" /> Minimum
                  Archival Term Bound
                </span>
                <span className="text-slate-300 font-bold">
                  7 Statutory Years
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUSINESS SCALING & ROLLOUT LAYER */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.04]">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest font-black text-indigo-400">
              Strategic Alignment
            </p>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Market Scaling Matrix
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              DEMS+ unifies high-compliance commercial operations before
              deploying decentralized security stacks directly into sovereign
              municipal architectures.
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-slate-900/20 transition-all duration-300">
              <Scale className="text-indigo-400 mb-3" size={24} />
              <h3 className="font-bold text-sm text-slate-100 mb-1">
                Phase 01: Enterprise Private Law
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Corporate forensics, litigation groups, private investigators,
                internal regulatory compliance nodes, and defense hubs.
              </p>
              <div className="inline-block text-[9px] font-extrabold tracking-widest uppercase bg-indigo-950 text-indigo-400 border border-indigo-500/20 px-2.5 py-1 rounded">
                Active Enrollment
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-slate-900/20 transition-all duration-300">
              <Layers className="text-purple-400 mb-3" size={24} />
              <h3 className="font-bold text-sm text-slate-100 mb-1">
                Phase 02: Public Sovereign Sector
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Central law enforcement networks, municipal courts, state
                security archives, and regulatory ministries.
              </p>
              <div className="inline-block text-[9px] font-extrabold tracking-widest uppercase bg-purple-950 text-purple-400 border border-purple-500/20 px-2.5 py-1 rounded">
                Roadmap Target
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LUXURY CALL TO ACTION (CTA) */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto relative border-t border-white/[0.04]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.05] rounded-3xl p-12 relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Initialize Cryptographic Security
          </h2>
          <p className="text-slate-400 mt-4 text-xs max-w-md mx-auto leading-relaxed">
            Protect your organization from systemic evidentiary tampering.
            Deploy an isolated demo pipeline instantly.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-xl transition-all duration-200">
              Deploy Sandbox Stack
            </button>
            <button className="bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 border border-white/[0.05] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-200">
              Consult Security Architect
            </button>
          </div>
          <div className="mt-12 text-slate-600 font-mono text-[9px] tracking-widest uppercase">
            SECURE DEPLOYMENT RUNTIME PROTOCOL V1.0.26 · JUNE 2026
          </div>
        </div>
      </section>
    </div>
  );
}