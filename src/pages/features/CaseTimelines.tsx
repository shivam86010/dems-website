import React, { useEffect, useState } from "react";
import ForensicTimeMachine from "./ForensicTimeMachine";
import AbsoluteLifeCycleDashboard from "./AbsoluteLifeCycleDashboard";
import CourtroomReadyExports from "./CourtroomReadyExports";
import MultiNodeConsensus from "./MultiNodeConsensus";
import JurisdictionalSovereignty from "./JurisdictionalSovereignty";
import CourtroomPresentation from "./CourtroomPresentation";
import AutomatedAnomalyDetection from "./AutomatedAnomalyDetection";
import ColdStorageArchival from "./ColdStorageArchival";
import DemasCtaSection from "./DemasCtaSection";
const CaseTimelines: React.FC = () => {
  const [queryText, setQueryText] = useState(
    "CASE_ID:2201 AND NODE:LONDON AND TAG:'REDACTED'",
  );

  const syntaxSuggestions = [
    { label: "CASE_ID", sample: "CASE_ID:3409" },
    { label: "NODE", sample: "NODE:TOKYO" },
    { label: "TAG", sample: "TAG:'ENCRYPTED'" },
    { label: "OP", sample: "AND / OR / NOT" },
  ];
  const [activeTab, setActiveTab] = useState<"hashing" | "chaining">("hashing");
  // 1. Array of automated terminal stream states
  const terminalStates = [
    {
      title: "// IDENTITY CORE MATCHED",
      titleColor: "text-[#4edea3]",
      borderColor: "border-[#4edea3]",
      hash: "SHA256: 5e884898da28047151d0e56f8dc6292773603d0d6a",
      step1: "SYNCING BLACKBOX BLOCK_#84920...",
      step2: "INTEGRITY CHECK: PASS",
      step3: "HASH: f2ca1bb6c7e907d06dafe4687e579fce76b...",
      nodeName: "NODE ALPHA",
      nodeStatus: "ONLINE",
      metricLabel: "METRICS",
      metricValue: "94.2 Gb/s",
    },
    {
      title: "// QUANTUM DECRYPTION LAYER",
      titleColor: "text-[#c4c1fb]",
      borderColor: "border-[#3626ce]",
      hash: "SHA512: d2a91e56f8dc6292773603d0d6a5e884898da28047",
      step1: "DECRYPTING VOLATILE MEMORY DUMP...",
      step2: "PACKET RECONSTRUCTION: 89%",
      step3: "CIPHER: AES-GCM-256-PARALLEL",
      nodeName: "NODE BETA",
      nodeStatus: "COMPUTING",
      metricLabel: "THROUGHPUT",
      metricValue: "142.8 Gb/s",
    },
    {
      title: "// NETWORK INTRUSION BLOCK",
      titleColor: "text-[#ff5f56]",
      borderColor: "border-[#ff5f56]",
      hash: "IP_TRACE: 185.220.101.5 // PROXY_DETECTED",
      step1: "ISOLATING MALICIOUS PAYLOAD...",
      step2: "HONEYPOT ROUTING: SUCCESSFUL",
      step3: "THREAT LEVEL: CRITICAL // CONTAINED",
      nodeName: "NODE OMEGA",
      nodeStatus: "ISOLATED",
      metricLabel: "LATENCY",
      metricValue: "1.2 ms",
    },
    {
      title: "// BLOCKCHAIN LEDGER ANCHOR",
      titleColor: "text-[#8de9c2]",
      borderColor: "border-[#8de9c2]",
      hash: "TX_ROOT: 7d5a0930548968d0bb991af90501baad4b536302",
      step1: "BROADCASTING IMMUTABLE EVIDENCE...",
      step2: "CONSENSUS REACHED (51+ NODES)",
      step3: "BLOCK HEIGHT: #2,941,053",
      nodeName: "LEDGER_04",
      nodeStatus: "SYNCED",
      metricLabel: "GAS_FEE",
      metricValue: "0.0021 ETH",
    },
  ];

  const [currentStateIndex, setCurrentStateIndex] = useState(0);

  // 2. Automate state shifting every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStateIndex(
        (prevIndex) => (prevIndex + 1) % terminalStates.length,
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [terminalStates.length]);

  const activeStream = terminalStates[currentStateIndex];
  useEffect(() => {
    const anchors = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'),
    );

    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (!href) return;
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    anchors.forEach((a) => a.addEventListener("click", handleAnchorClick));

    const handleScroll = () => {
      const scroll = window.pageYOffset;
      const heroScene =
        document.querySelector<HTMLElement>("[data-hero-scene]");
      if (heroScene) {
        heroScene.style.transform = `translateY(${scroll * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      anchors.forEach((a) => a.removeEventListener("click", handleAnchorClick));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const securityItems = [
    {
      title: "FIPS 140-3",
      subtitle: "Validated Level 3 Security",
      status: "Validated",
      icon: "shield_lock",
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
    },
    {
      title: "SHA-256",
      subtitle: "Cryptographic Standard",
      status: "Enforced",
      icon: "enhanced_encryption",
      color: "text-[#4edea3]",
      bgColor: "bg-[#4edea3]/10",
      borderColor: "border-[#4edea3]/20",
    },
    {
      title: "SOC2 TYPE II",
      subtitle: "Enterprise Compliance",
      status: "Certified",
      icon: "verified_user",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      title: "GDPR / CCPA",
      subtitle: "Data Privacy Sovereignty",
      status: "Compliant",
      icon: "gavel",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
    },
  ];

  return (
    <div className="bg-[#131316] text-[#e5e1e6] font-body-base overflow-x-hidden">
      <main>
        {/* 1. Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0b0d] py-20 lg:py-0">
          {/* Enhanced Background Architecture with Fake 3D Landscape Elements */}
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none perspective-[1000px]">
            {/* 3D Wireframe Plane Grid */}
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] bg-[size:3rem_3rem]"
              style={{
                transform: "rotateX(70deg) translateY(-30%) translateZ(-100px)",
                transformOrigin: "top center",
                maskImage:
                  "radial-gradient(ellipse 60% 70% at 50% 50%, #000 40%, transparent 100%)",
              }}
            />

            {/* Holographic Glowing 3D Orbs / Noise Nodes */}
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#3626ce]/10 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#4edea3]/10 rounded-full blur-[140px]" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24 w-full grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Core Messaging */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#4edea3]/10 to-transparent border border-[#4edea3]/20 rounded-full backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4edea3]" />
                </span>
                <span className="font-mono text-xs text-[#4edea3] uppercase tracking-[0.2em] font-semibold">
                  Sentinel Integrity // Live
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl xl:text-[68px] font-extrabold tracking-tight leading-[1.05]">
                The Living Pulse <br />
                <span className="bg-gradient-to-r from-[#c4c1fb] via-[#4edea3] to-[#8de9c2] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(78,222,163,0.15)]">
                  of Every Investigation.
                </span>
              </h1>

              <p className="text-[#a5a1b0] text-lg sm:text-xl max-w-xl leading-relaxed font-normal">
                DEMS+ provides a high-fidelity holographic timeline stream,
                ensuring every slice of digital evidence is tracked with
                uncompromising cryptographic precision.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button className="px-8 py-4 bg-[#3626ce] hover:bg-[#4332df] text-white rounded-xl font-bold tracking-wide shadow-lg shadow-[#3626ce]/30 hover:shadow-[#3626ce]/50 hover:-translate-y-0.5 transition-all duration-200">
                  Launch Forensic Portal
                </button>
                <button className="px-8 py-4 bg-[#131316]/80 backdrop-blur-md border border-[#353438] hover:border-[#47464f] text-[#e5e1e6] rounded-xl font-bold tracking-wide hover:bg-[#1c1c22] transition-all duration-200">
                  View Specifications
                </button>
              </div>

              <div className="pt-8 flex flex-wrap gap-x-12 gap-y-6 border-t border-[#222129]">
                <div>
                  <div className="text-[#4edea3] font-mono text-3xl font-bold tracking-tight">
                    99.99<span className="text-xs text-[#4edea3]/60">%</span>
                  </div>
                  <div className="text-[#8e8a99] text-[10px] uppercase tracking-[0.15em] font-mono mt-1">
                    System Uptime
                  </div>
                </div>
                <div>
                  <div className="text-[#c4c1fb] font-mono text-3xl font-bold tracking-tight">
                    1,240<span className="text-xs text-[#c4c1fb]/60">+</span>
                  </div>
                  <div className="text-[#8e8a99] text-[10px] uppercase tracking-[0.15em] font-mono mt-1">
                    Active Nodes
                  </div>
                </div>
                <div>
                  <div className="text-[#e5e1e6] font-mono text-3xl font-bold tracking-tight flex items-center gap-2">
                    Verified
                  </div>
                  <div className="text-[#8e8a99] text-[10px] uppercase tracking-[0.15em] font-mono mt-1">
                    Blockchain Status
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Holographic Terminal Box View with State Rotator */}
            <div className="lg:col-span-5 hidden lg:block relative perspective-[1200px]">
              {/* Outer 3D Gradient Backdrop Shadow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#3626ce]/20 via-[#4edea3]/10 to-[#3626ce]/0 blur-lg pointer-events-none" />

              {/* Main Terminal Frame with explicit subtle 3D skew */}
              <div
                className="relative w-full bg-[#131316]/95 border border-[#2b2a33] rounded-2xl p-6 shadow-2xl backdrop-blur-xl overflow-hidden transition-all duration-700 ease-in-out transform hover:rotate-y-[-5deg] hover:rotate-x-[5deg]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between border-b border-[#2b2a33] pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping" />
                    <span className="text-xs font-mono text-[#8e8a99] tracking-wider">
                      LIVE_LEDGER_STREAM
                    </span>
                  </div>
                </div>

                {/* Animated Rotator Wrapper */}
                <div
                  key={currentStateIndex}
                  className="font-mono text-xs text-[#c4c1fb]/80 space-y-3 animate-[fadeIn_0.4s_ease-in-out]"
                >
                  {/* Dynamic Block Title Card */}
                  <div
                    className={`bg-[#1c1c22] p-3 rounded-lg border border-[#2b2a33] transition-all duration-300`}
                  >
                    <div
                      className={`${activeStream.titleColor} font-bold mb-1 tracking-wide text-xs`}
                    >
                      {activeStream.title}
                    </div>
                    <p className="text-[11px] text-[#8e8a99] truncate selection:bg-[#3626ce]">
                      {activeStream.hash}
                    </p>
                  </div>

                  {/* Terminal Execution Steps */}
                  <div className="space-y-1.5 pt-2 text-[11px]">
                    <div className="flex items-center gap-2 text-[#8e8a99]">
                      <span className="text-[#4edea3]">&gt;</span>{" "}
                      <span className="tracking-tight">
                        {activeStream.step1}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#8e8a99]">
                      <span className="text-[#4edea3]">&gt;</span>{" "}
                      <span className="tracking-tight">
                        {activeStream.step2}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#8e8a99]">
                      <span className="text-[#3626ce]">&gt;</span>{" "}
                      <span className="truncate text-[#c4c1fb] tracking-tight">
                        {activeStream.step3}
                      </span>
                    </div>
                  </div>

                  {/* Dual Grid Node System Metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div
                      className={`bg-[#1c1c22] p-3 rounded-lg border-l-2 ${activeStream.borderColor}`}
                    >
                      <div className="text-[10px] text-[#8e8a99] uppercase tracking-wider mb-1">
                        {activeStream.nodeName}
                      </div>
                      <div className="text-white font-bold text-sm flex items-center justify-between">
                        {activeStream.nodeStatus}
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] opacity-80" />
                      </div>
                    </div>

                    <div className="bg-[#1c1c22] p-3 rounded-lg border-l-2 border-[#47464f]">
                      <div className="text-[10px] text-[#8e8a99] uppercase tracking-wider mb-1">
                        {activeStream.metricLabel}
                      </div>
                      <div className="text-[#4edea3] font-bold text-sm">
                        {activeStream.metricValue}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Micro Stream Pagination Indicator dots */}
                <div className="flex justify-center gap-1.5 pt-4 mt-2 border-t border-[#2b2a33]/40">
                  {terminalStates.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1 rounded-full transition-all duration-300 ${idx === currentStateIndex ? "w-4 bg-[#4edea3]" : "w-1 bg-[#47464f]"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Down Arrow Action Trigger */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hidden sm:block pointer-events-none">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-white stroke-2"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </section>

        {/* 2. Immutable Serialization */}
        <section className="py-24 px-4 md:px-[32px] max-w-[1440px] mx-auto border-t border-[#47464f]/30">
          {/* Structural Background Accent Lines */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-[#353438]/30 via-transparent to-transparent pointer-events-none hidden lg:block" />

          {/* Grid container with items-stretch to make both columns equal height */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* Left Column: Contextual Messaging & Micro-Containers */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-10">
              {/* Enhanced Section Heading Group */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-px w-8 bg-[#4edea3]" />
                  <span className="font-mono text-[10px] text-[#4edea3] uppercase tracking-[0.3em] font-semibold">
                    CORE PROTOCOL // LAYER 02
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#e5e1e6] leading-tight">
                  Immutable Serialization <br />
                  <span className="bg-gradient-to-r from-[#c4c1fb] to-[#8de9c2] bg-clip-text text-transparent">
                    Architecture.
                  </span>
                </h2>

                <p className="text-[#a5a1b0] text-base sm:text-lg leading-relaxed max-w-xl">
                  Every micro-event within SentinelForensics is
                  cryptographically hashed using SHA-256 and chained into a
                  proprietary ledger. This{" "}
                  <span className="text-[#4edea3] font-mono text-sm font-semibold">
                    "Sentinel Integrity"
                  </span>{" "}
                  protocol ensures unauthorized modifications instantly fire a
                  global ecosystem lockdown.
                </p>
              </div>

              {/* Interactive Cyberpunk Data Row Cards */}
              <div className="space-y-4 max-w-xl w-full">
                {/* Card 1: Cryptographic Hashing */}
                <div
                  onClick={() => setActiveTab("hashing")}
                  className={`group relative flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-md border ${
                    activeTab === "hashing"
                      ? "bg-[#131316] border-[#4edea3] shadow-[0_0_15px_rgba(78,222,163,0.1)]"
                      : "bg-[#131316]/40 border-[#232229] hover:border-[#4edea3]/40"
                  }`}
                >
                  <div className="absolute top-3 right-4 font-mono text-[9px] text-[#4edea3]/50 tracking-wider uppercase">
                    STATUS: VERIFIED
                  </div>
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all ${
                      activeTab === "hashing"
                        ? "bg-[#4edea3]/20 border-[#4edea3]"
                        : "bg-[#4edea3]/10 border-[#4edea3]/20 group-hover:bg-[#4edea3]/20"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[#4edea3] text-xl">
                      enhanced_encryption
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm tracking-wide text-[#e5e1e6] group-hover:text-white transition-colors">
                      Cryptographic Hashing
                    </h4>
                    <p className="text-xs sm:text-sm text-[#8e8a99] leading-relaxed">
                      Each payload segment is sealed uniquely with
                      forensic-grade, multi-tenant RSA signatures matching
                      individual investigator keys.
                    </p>
                  </div>
                </div>

                {/* Card 2: Temporal Chaining */}
                <div
                  onClick={() => setActiveTab("chaining")}
                  className={`group relative flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-md border ${
                    activeTab === "chaining"
                      ? "bg-[#131316] border-[#c4c1fb] shadow-[0_0_15px_rgba(196,193,251,0.1)]"
                      : "bg-[#131316]/40 border-[#232229] hover:border-[#c4c1fb]/40"
                  }`}
                >
                  <div className="absolute top-3 right-4 font-mono text-[9px] text-[#c4c1fb]/50 tracking-wider uppercase">
                    LOCK_READY // 0xAF4
                  </div>
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all ${
                      activeTab === "chaining"
                        ? "bg-[#c4c1fb]/20 border-[#c4c1fb]"
                        : "bg-[#c4c1fb]/10 border-[#c4c1fb]/20 group-hover:bg-[#c4c1fb]/20"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[#c4c1fb] text-xl">
                      link
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm tracking-wide text-[#e5e1e6] group-hover:text-white transition-colors">
                      Temporal Chrono-Chaining
                    </h4>
                    <p className="text-xs sm:text-sm text-[#8e8a99] leading-relaxed">
                      Events are permanently tied chronologically. Reordering or
                      selective block deletions collapse the validation web
                      immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Holographic Abstract Virtual Vault (Dynamic Responsive Height) */}
            <div className="lg:col-span-6 relative w-full h-full flex flex-col">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#4edea3]/5 to-[#3626ce]/10 rounded-2xl blur-xl opacity-60 pointer-events-none" />

              {/* Main frame wrapper set to flex-1 and h-full to equalise system design bounds */}
              <div className="relative rounded-2xl border border-[#2b2a33] bg-[#121215] shadow-2xl p-6 font-mono text-xs flex-1 flex flex-col justify-between overflow-hidden">
                {/* Top Container Content */}
                <div className="w-full">
                  {/* Dynamic Header Schema Title */}
                  <div className="flex items-center justify-between border-b border-[#2b2a33] pb-4 mb-6">
                    <span className="text-[#8e8a99] text-[11px] uppercase tracking-wider animate-[fadeIn_0.3s_ease-in-out]">
                      {activeTab === "hashing"
                        ? "CRYPTOGRAPHIC_HASH_STREAM.SYS"
                        : "SERIALIZATION_SCHEMATIC.SYS"}
                    </span>
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#2b2a33]" />
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeTab === "hashing" ? "bg-[#4edea3]" : "bg-[#2b2a33]"}`}
                      />
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeTab === "chaining" ? "bg-[#c4c1fb] animate-pulse" : "bg-[#4edea3] animate-pulse"}`}
                      />
                    </div>
                  </div>

                  {/* Simulated Block Nodes Grid Map */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    <div className="p-3 rounded-lg border border-[#353438] bg-[#18181c] relative overflow-hidden">
                      <div className="text-[10px] text-[#8e8a99] mb-2">
                        PREV_BLOCK_HASH
                      </div>
                      <div className="text-white truncate font-semibold text-[11px]">
                        {activeTab === "hashing"
                          ? "0000x99a1b4d2e"
                          : "0000x84f9b8c7e"}
                      </div>
                      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#353438]" />
                    </div>

                    <div
                      className={`p-3 rounded-lg bg-[#131715] relative overflow-hidden border transition-all duration-300 ${activeTab === "hashing" ? "border-[#4edea3]/40" : "border-[#c4c1fb]/40"}`}
                    >
                      <div
                        className={`text-[10px] font-bold mb-2 ${activeTab === "hashing" ? "text-[#4edea3]" : "text-[#c4c1fb]"}`}
                      >
                        CURRENT_BLOCK
                      </div>
                      <div className="text-white truncate font-semibold text-[11px]">
                        {activeTab === "hashing"
                          ? "RSA-RSA-SIG [ACTIVE]"
                          : "SHA-256 [VERIFIED]"}
                      </div>
                      <div
                        className={`absolute bottom-0 left-0 h-0.5 w-full animate-pulse ${activeTab === "hashing" ? "bg-[#4edea3]" : "bg-[#c4c1fb]"}`}
                      />
                    </div>

                    <div className="p-3 rounded-lg border border-[#353438] bg-[#18181c] relative overflow-hidden opacity-60">
                      <div className="text-[10px] text-[#8e8a99] mb-2">
                        NEXT_BLOCK_ANCHOR
                      </div>
                      <div className="text-[#8e8a99] truncate text-[11px]">
                        {activeTab === "hashing"
                          ? "AWAITING_SIG_KEY..."
                          : "PENDING_CONSENSUS..."}
                      </div>
                      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#c4c1fb]/30" />
                    </div>
                  </div>
                </div>

                {/* Bottom Inner Visual Module: Scales automatically to fill space height perfectly */}
                <div className="relative bg-[#0b0b0d] rounded-xl border border-[#2b2a33] p-4 flex flex-col justify-between overflow-hidden flex-1 min-h-[220px]">
                  {/* Grid matrix pattern layer */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4edea3_1px,transparent_1px)] bg-[size:12px_12px]" />

                  <div className="relative z-10 flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="text-[10px] text-[#8e8a99] uppercase tracking-wider">
                        {activeTab === "hashing"
                          ? "Payload Identity Signature"
                          : "Merkle Root Sequence"}
                      </div>
                      <div className="text-[#c4c1fb] font-bold text-sm tracking-wide truncate max-w-[280px] sm:max-w-md">
                        {activeTab === "hashing"
                          ? "0x5e884898da28047151d0e56f8d"
                          : "9e1b161e5c1fa7425e73043362"}
                      </div>
                    </div>
                    <div
                      className={`px-2 py-0.5 border rounded text-[9px] font-semibold transition-all duration-300 ${
                        activeTab === "hashing"
                          ? "bg-[#4edea3]/10 border-[#4edea3]/30 text-[#4edea3]"
                          : "bg-[#c4c1fb]/10 border-[#c4c1fb]/30 text-[#c4c1fb]"
                      }`}
                    >
                      {activeTab === "hashing" ? "RSA SIGNED" : "SECURE LINK"}
                    </div>
                  </div>

                  {/* Dynamic Equalizer / Data Streams */}
                  <div className="relative w-full h-24 flex items-end gap-1 opacity-50 pt-4">
                    <div
                      className={`w-full h-8 rounded-t-sm animate-pulse ${activeTab === "hashing" ? "bg-[#4edea3]/30" : "bg-[#c4c1fb]/20"}`}
                    />
                    <div
                      className={`w-full h-16 rounded-t-sm ${activeTab === "hashing" ? "bg-[#4edea3]/50" : "bg-[#4edea3]/40"}`}
                    />
                    <div className="w-full h-20 bg-[#3626ce]/40 rounded-t-sm" />
                    <div
                      className={`w-full h-12 rounded-t-sm animate-pulse ${activeTab === "hashing" ? "bg-[#4edea3]/20" : "bg-[#4edea3]/30"}`}
                    />
                    <div
                      className={`w-full h-14 rounded-t-sm ${activeTab === "hashing" ? "bg-[#3626ce]/20" : "bg-[#4edea3]/50"}`}
                    />
                  </div>

                  <div className="relative z-10 text-[10px] text-[#8e8a99] flex justify-between items-center border-t border-[#2b2a33]/60 pt-2 mt-2">
                    <span>POLICING NODES: 1,240 ACTIVE</span>
                    <span
                      className={
                        activeTab === "hashing"
                          ? "text-[#4edea3]"
                          : "text-[#c4c1fb]"
                      }
                    >
                      {activeTab === "hashing"
                        ? "PROP_HASH_V1.0"
                        : "PROP_SERIAL_V4.2"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Forensic Time Machine */}
        <ForensicTimeMachine />

        {/* 4. Secured Collaboration Feed */}

        <section className="py-24 px-4 md:px-[32px] max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Side Context Header + Expanded Operational Specifications */}
            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-px w-8 bg-[#c4c1fb]" />
                  <span className="font-mono text-[10px] text-[#c4c1fb] uppercase tracking-[0.3em] font-semibold">
                    Multi-User Sovereignty
                  </span>
                </div>
                <h3 className="text-3xl font-extrabold tracking-tight leading-tight">
                  Secured Collaboration <br />
                  <span className="bg-gradient-to-r from-[#c4c1fb] to-[#8de9c2] bg-clip-text text-transparent">
                    Feed.
                  </span>
                </h3>
                <p className="text-[#a5a1b0] text-sm sm:text-base leading-relaxed">
                  Annotate, tag, and verify evidence as a synchronized
                  operations team. Every action is cryptographically signed with
                  the author's private investigator key, generating an immutable
                  record of human inputs.
                </p>
              </div>

              {/* New Left Content Matrix Block to equalize column height */}
              <div className="border-t border-[#2b2a33] pt-6 space-y-4">
                <div className="font-mono text-[10px] text-[#8e8a99] tracking-wider uppercase font-semibold">
                  Cryptographic Parameters
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div className="p-3.5 bg-[#131316]/40 border border-[#232229] rounded-xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#8de9c2] text-lg mt-0.5">
                      workspace_premium
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        Asymmetric Key Assertions
                      </h4>
                      <p className="text-[11px] text-[#8e8a99] mt-0.5">
                        Utilizes Ed25519 signature pairs to prevent identity
                        spoofing inside case records.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#131316]/40 border border-[#232229] rounded-xl flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#c4c1fb] text-lg mt-0.5">
                      history_toggle_off
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        Immutable Timeline Anchors
                      </h4>
                      <p className="text-[11px] text-[#8e8a99] mt-0.5">
                        Edits generate an independent cryptographic hash tied
                        into the root state block.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Cyberpunk Interactive Feed Logs Container */}
            <div className="lg:col-span-8 relative flex flex-col gap-6 pl-0 sm:pl-4">
              {/* Thread Connector Line */}
              <div className="absolute left-10 top-16 bottom-16 w-px bg-gradient-to-b from-[#4edea3]/30 via-[#2b2a33] to-transparent pointer-events-none hidden sm:block" />

              {/* Comment Node 1: Primary Investigator Entry */}
              <div className="group relative p-6 bg-[#131316]/60 border border-[#232229] hover:border-[#4edea3]/30 rounded-2xl transition-all duration-300 backdrop-blur-md shadow-xl flex flex-col sm:flex-row gap-5 items-start">
                <div className="relative w-12 h-12 bg-[#4edea3]/10 rounded-xl border border-[#4edea3]/20 flex items-center justify-center shrink-0 group-hover:bg-[#4edea3]/20 transition-all">
                  <span className="material-symbols-outlined text-[#4edea3] text-xl">
                    person
                  </span>
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#4edea3] border-2 border-[#0b0b0d] rounded-full" />
                </div>

                <div className="flex-1 w-full space-y-3">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="font-bold text-[#e5e1e6] group-hover:text-white transition-colors">
                      Chief Inv. Sarah Jenkins
                    </span>
                    <span className="font-mono text-[10px] bg-[#1a2420] border border-[#4edea3]/20 text-[#4edea3] px-2 py-0.5 rounded-md tracking-wider">
                      VERIFIED KEY // F82A...01
                    </span>
                  </div>
                  <p className="text-sm text-[#c8c5d0] leading-relaxed font-sans">
                    "Modified video frame metadata discovered at timestamp
                    12:04. Identified anomaly in environmental lighting
                    consistency. Requesting deep structural frame analysis from
                    Lab."
                  </p>
                  <div className="flex gap-4 font-mono text-[11px] text-[#8e8a99] pt-1">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-[#8e8a99]/70">
                        schedule
                      </span>
                      2m ago
                    </span>
                    <span className="flex items-center gap-1.5 text-[#4edea3] bg-[#4edea3]/5 px-1.5 py-0.5 rounded border border-[#4edea3]/10">
                      <span className="material-symbols-outlined text-sm">
                        verified_user
                      </span>
                      INTEGRITY VALID
                    </span>
                  </div>
                </div>
              </div>

              {/* Comment Node 2: Nested Lab Specialist Reply */}
              <div className="group relative p-6 bg-[#131316]/40 border border-[#232229]/70 hover:border-[#c4c1fb]/30 rounded-2xl transition-all duration-300 backdrop-blur-md shadow-lg flex flex-col sm:flex-row gap-5 items-start sm:ml-14">
                {/* Visual Node Branch Anchor Pin */}
                <div className="absolute -left-8 top-10 w-8 h-px bg-[#2b2a33] pointer-events-none hidden sm:block" />

                {/* Continuous nested track connecting node 2 to child sub-section */}
                <div className="absolute left-10 top-16 bottom-0 w-px bg-dashed border-l border-dashed border-[#c4c1fb]/20 pointer-events-none hidden sm:block" />

                <div className="relative w-12 h-12 bg-[#c4c1fb]/10 rounded-xl border border-[#c4c1fb]/20 flex items-center justify-center shrink-0 group-hover:bg-[#c4c1fb]/20 transition-all">
                  <span className="material-symbols-outlined text-[#c4c1fb] text-xl">
                    science
                  </span>
                </div>

                <div className="flex-1 w-full space-y-3">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="font-bold text-[#e5e1e6] group-hover:text-white transition-colors">
                      Lab Specialist 4 (Crypto-Ops)
                    </span>
                    <span className="font-mono text-[10px] bg-[#1d1b26] border border-[#c4c1fb]/20 text-[#c4c1fb] px-2 py-0.5 rounded-md tracking-wider">
                      VERIFIED KEY // 99B2...C4
                    </span>
                  </div>
                  <p className="text-sm text-[#c8c5d0] leading-relaxed font-sans">
                    "Deep analysis initiated on requested index array. Found
                    trace compression artifacts indicative of GAN-based
                    AI-upscaling. Marking asset index as{" "}
                    <span className="text-[#ff5f56] font-semibold">
                      MODIFIED
                    </span>{" "}
                    in the master timeline ledger."
                  </p>
                  <div className="flex gap-4 font-mono text-[11px] text-[#8e8a99] pt-1">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-[#8e8a99]/70">
                        schedule
                      </span>
                      Just now
                    </span>
                  </div>
                </div>
              </div>

              {/* New Sub-Section Node: Directly connected to Science Lab Entry above */}
              <div className="relative p-5 bg-[#17141a]/40 border border-[#ff5f56]/10 rounded-2xl sm:ml-28 flex flex-col gap-4">
                {/* Visual Sub-branch anchor pin */}
                <div className="absolute -left-6 top-8 w-6 h-px bg-gradient-to-r from-[#c4c1fb]/20 to-[#ff5f56]/20 pointer-events-none hidden sm:block" />

                <div className="flex items-center justify-between border-b border-[#2b2a33]/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f56] animate-pulse" />
                    <span className="font-mono text-[11px] tracking-wider text-white font-semibold uppercase">
                      Timeline Impact Ledger
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-[#ff5f56] bg-[#ff5f56]/5 border border-[#ff5f56]/20 px-2 py-0.5 rounded">
                    MUTATION_PENDING
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[11px]">
                  <div className="p-3 bg-[#0d0c0f] rounded-lg border border-[#232229]">
                    <div className="text-[#8e8a99] text-[9px] uppercase tracking-wider mb-1">
                      Target Object Cluster
                    </div>
                    <div className="text-[#e5e1e6] font-semibold truncate">
                      VID_FRM_IDX_1204_A.mp4
                    </div>
                  </div>
                  <div className="p-3 bg-[#0d0c0f] rounded-lg border border-[#232229]">
                    <div className="text-[#8e8a99] text-[9px] uppercase tracking-wider mb-1">
                      Assigned Severity
                    </div>
                    <div className="text-[#ff5f56] font-semibold">
                      CRITICAL // CLASS-3 MANIPULATION
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Sentinel Alert System (Bento Style) */}
        <section className="relative py-24 bg-gradient-to-b from-[#0b0a1a] via-[#12102e] to-[#0b0a1a] overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
            {/* Header Section */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold tracking-widest text-[#c3c0ff] uppercase bg-[#c3c0ff]/10 px-3 py-1 rounded-full border border-[#c3c0ff]/20">
                Security & Monitoring
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 mb-4 text-white">
                Sentinel Alert System
              </h2>
              <p className="text-[#94a3b8] text-base sm:text-lg">
                Continuous automated node validation, predictive threat
                telemetry, and instantaneous immutable lockdown protocols.
              </p>
            </div>

            {/* Grid Layout - Scaled to 6 columns for clean span math */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {/* Card 1: Integrity Breach Protocol */}
              <div className="md:col-span-4 p-8 backdrop-blur-md bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 rounded-3xl border border-white/10 border-l-4 border-l-[#ffb4ab] flex flex-col justify-between group">
                <div>
                  <span
                    className="material-symbols-outlined text-[#ffb4ab] text-3xl mb-6 inline-block transition-transform duration-300 group-hover:scale-110"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    report
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    Integrity Breach Protocol
                  </h3>
                  <p className="text-[#c8c5d0] leading-relaxed max-w-2xl">
                    Automated cryptographic mismatch detection monitors
                    bit-level consistency across all storage vectors 24/7. Any
                    variance instantly triggers an isolated, immutable hard
                    lockdown of the compromised evidence container to prevent
                    cascading tamper contamination.
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#ffb4ab]/70">
                  <span className="w-2 h-2 rounded-full bg-[#ffb4ab] animate-pulse"></span>
                  IMMEDIATE LOCKDOWN TRIGGER ENABLED
                </div>
              </div>

              {/* Card 2: Fleet Detection */}
              <div className="md:col-span-2 p-8 backdrop-blur-md bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 rounded-3xl border border-white/10 border-l-4 border-l-[#4edea3] flex flex-col justify-between group">
                <div>
                  <span className="material-symbols-outlined text-[#4edea3] text-3xl mb-6 inline-block transition-transform duration-300 group-hover:rotate-45">
                    radar
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Fleet Detection
                  </h3>
                  <p className="text-sm text-[#c8c5d0] leading-relaxed">
                    Real-time mapping and live network awareness of every
                    decentralized node within your digital forensic ecosystem.
                    Detects rogue entryways instantly.
                  </p>
                </div>
                <div className="mt-6 text-xs text-[#4edea3] font-semibold">
                  Active Nodes: 2,412
                </div>
              </div>

              {/* Card 3: Smart Notify */}
              <div className="md:col-span-2 p-8 bg-[#1a191d] hover:bg-[#222126] transition-all duration-300 rounded-3xl border border-white/5 flex flex-col justify-between group">
                <div>
                  <span className="material-symbols-outlined text-[#c3c0ff] text-3xl mb-6 inline-block transition-transform duration-300 group-hover:animate-bounce">
                    notifications_active
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    Smart Notify
                  </h3>
                  <p className="text-sm text-[#c8c5d0] leading-relaxed">
                    Context-aware alerting algorithms filter alert fatigue.
                    High-severity incident telemetry is automatically routed
                    based on role relevance, on-call schedules, and
                    cryptographic clearance tiers.
                  </p>
                </div>
                <div className="mt-6 text-xs text-[#c3c0ff] underline cursor-pointer hover:text-white transition-colors">
                  Configure Routing Rules →
                </div>
              </div>

              {/* Card 4: Automated Forensics */}
              <div className="md:col-span-4 p-8 backdrop-blur-md bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 rounded-3xl border border-white/10 border-l-4 border-l-[#c3c0ff] flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full">
                  <div className="max-w-xl">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      Predictive Automated Forensics
                    </h3>
                    <p className="text-[#c8c5d0] leading-relaxed">
                      Advanced heuristics and ML-driven behavior models audit
                      network telemetry in flight, uncovering structural
                      anomalies and identifying sophisticated advanced
                      persistent threats (APTs) before an actual breach can
                      manifest.
                    </p>
                  </div>
                  <div className="px-5 py-2.5 bg-[#c3c0ff] text-slate-900 rounded-xl font-mono text-xs font-black tracking-wider whitespace-nowrap shadow-lg shadow-[#c3c0ff]/20 animate-pulse">
                    ● ACTIVE SCAN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. The Life-Cycle of Evidence */}
        <AbsoluteLifeCycleDashboard />

        {/* 7. Courtroom-Ready Exports */}
        <section className="py-24 bg-[#0d0c15] text-white relative overflow-hidden">
          {/* Background Tech Mesh & Neon Radial Accents */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-[#0d0c15] to-[#0d0c15] pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#4edea3]/5 blur-[140px] rounded-full pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            {/* LEFT COLUMN: THE VISUAL ENGINE BLOCK (Takes 7 cols on large screens) */}
            <div className="lg:col-span-7 order-2 lg:order-1 relative group py-8">
              {/* Main Visual Terminal Window */}
              <div className="bg-[#151423]/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 transform group-hover:scale-[1.01] group-hover:border-indigo-500/30 relative z-20">
                {/* Window Top Bar decoration */}
                <div className="border-b border-white/10 pb-4 mb-6 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-rose-500/60" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/60" />
                      <span className="w-3 h-3 rounded-full bg-[#4edea3]/60" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 tracking-wide">
                      LEGAL COMPLIANCE EXPORT: FORENSIC TIMELINE
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[#4edea3] text-2xl animate-pulse">
                    qr_code_2
                  </span>
                </div>

                {/* Simulated Live Verified UI Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                  {/* Interactive Module 1 */}
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-white/5 font-mono text-[11px] text-slate-400 flex flex-col justify-between">
                    <div>
                      <span className="text-[#4edea3] font-bold block mb-1">
                        ● IMMUTABLE LEDGER
                      </span>
                      HASH MATCH VALIDATED
                    </div>
                    <div className="w-full h-1 bg-[#4edea3]/20 rounded-full mt-4 overflow-hidden">
                      <div className="w-full h-full bg-[#4edea3]" />
                    </div>
                  </div>

                  {/* Interactive Module 2 */}
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-white/5 font-mono text-[11px] text-slate-400 flex flex-col justify-between">
                    <div>
                      <span className="text-indigo-400 font-bold block mb-1">
                        ■ CRYPTO WRAPPER
                      </span>
                      DIGITAL COMPLIANCE ACTIVE
                    </div>
                    <div className="w-full h-1 bg-indigo-500/20 rounded-full mt-4 overflow-hidden">
                      <div className="w-3/4 h-full bg-indigo-400" />
                    </div>
                  </div>

                  {/* Interactive Module 3 */}
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-white/5 font-mono text-[11px] text-slate-400 flex flex-col justify-between">
                    <div>
                      <span className="text-amber-400 font-bold block mb-1">
                        ▲ CHAIN AUDIT
                      </span>
                      NIST 800-88 SANITIZED
                    </div>
                    <div className="w-full h-1 bg-amber-500/20 rounded-full mt-4 overflow-hidden">
                      <div className="w-1/2 h-full bg-amber-400" />
                    </div>
                  </div>
                </div>

                {/* Centralized Verification Hash Metadata Block */}
                <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="font-mono text-[11px] text-slate-400">
                    <span className="text-indigo-300 block text-[9px] font-bold tracking-widest uppercase mb-0.5">
                      Live Verification Key
                    </span>
                    HASH:{" "}
                    <span className="text-white font-bold select-all">
                      D8392-AABB-8839-FF21-002
                    </span>
                  </div>
                  <div className="bg-[#4edea3]/10 border border-[#4edea3]/30 text-[#4edea3] font-mono text-[10px] px-3 py-1 rounded-md tracking-wider uppercase">
                    Status: Court Admissible
                  </div>
                </div>
              </div>

              {/* FLOATING DESIGN BACKGROUND BADGES (Adds deep unique UI look) */}
              <div className="absolute -top-4 -right-6 bg-slate-900 border border-white/10 px-4 py-2 rounded-xl shadow-xl font-mono text-[11px] text-indigo-300 flex items-center gap-2 z-30 transform rotate-3 backdrop-blur pointer-events-none">
                <span className="material-symbols-outlined text-sm animate-spin">
                  sync
                </span>
                SIGNATURE IN PROGRESS
              </div>

              <div className="absolute -bottom-6 -left-4 bg-slate-900 border border-white/10 px-4 py-3 rounded-xl shadow-xl font-mono text-[11px] text-slate-400 flex flex-col gap-1.5 z-30 transform -rotate-2 backdrop-blur pointer-events-none">
                <span className="text-[9px] uppercase font-bold tracking-wider text-[#4edea3]">
                  Export Config
                </span>
                <div className="flex items-center gap-2 text-white">
                  <span className="material-symbols-outlined text-sm text-[#4edea3]">
                    picture_as_pdf
                  </span>
                  GENERATING PDF/XLSX
                </div>
              </div>

              {/* Large soft background ambient mesh glow behind cards */}
              <div className="absolute inset-0 bg-indigo-500/5 blur-3xl -z-10 scale-125 rounded-full" />
            </div>

            {/* RIGHT COLUMN: TEXT CONTENT ENGINE BLOCK (Takes 5 cols on large screens) */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4edea3] bg-[#4edea3]/10 border border-[#4edea3]/20 px-3 py-1 rounded-full">
                  Legal Validation Node
                </span>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mt-4">
                  Courtroom-Ready Exports
                </h2>
              </div>

              <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
                Transform highly dense, structural micro-events and digital
                metadata timelines into sleek, legally binding artifacts. Every
                compiled package prints with a unique dynamic verification tag,
                granting legal defense, counsel, and judges the capability to
                audit validity against an immutable ecosystem live.
              </p>

              <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />

              {/* Structured Enhanced List Elements */}
              <ul className="space-y-4">
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-lg bg-[#4edea3]/10 border border-[#4edea3]/30 group-hover:bg-[#4edea3]/20 transition-all">
                    <span className="material-symbols-outlined text-[#4edea3] text-base font-bold">
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      One-Click Advanced PDF/XLSX Portability
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Complies fully with standard archival processing
                      regulations.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 group">
                  <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-lg bg-[#4edea3]/10 border border-[#4edea3]/30 group-hover:bg-[#4edea3]/20 transition-all">
                    <span className="material-symbols-outlined text-[#4edea3] text-base font-bold">
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      Asymmetric Cryptographic Handshake Signatures
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Locks authority identity metrics directly into data
                      structures permanently.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 group">
                  <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-lg bg-[#4edea3]/10 border border-[#4edea3]/30 group-hover:bg-[#4edea3]/20 transition-all">
                    <span className="material-symbols-outlined text-[#4edea3] text-base font-bold">
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      Interactive Chain of Custody Streams
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Chronologically displays step logs map-indexed across
                      legal frameworks.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <CourtroomReadyExports />

        {/* 8. Evidence Ghosting */}
        <section className="py-24 bg-[#09080f] text-white relative overflow-hidden font-sans">
          {/* Background Decorative Tech Grids */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 tracking-widest uppercase">
                🛡️ Forensic Delta Engine
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Evidence Ghosting System
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Real-time visual delta mapping for historical version
                comparison. Track structural insertions, mutations, and
                cryptographic telemetry shifts across node updates.
              </p>
            </div>

            {/* Diff Comparison Workbench Wrapper */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-[#11101a] border border-white/10 rounded-3xl p-4 lg:p-6 shadow-2xl relative">
              {/* ================= LEFT SIDE: VERSION 1.0 (ORIGINAL MASTER) ================= */}
              <div className="bg-[#161522] border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between">
                {/* Panel Top Metadata Header */}
                <div className="flex justify-between items-center bg-slate-950/40 px-6 py-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                    <span className="font-mono text-xs font-bold tracking-wider text-purple-300 uppercase">
                      v1.0 // BASELINE_ORIGINAL
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">
                    HASH: SHA_256_8a992x
                  </span>
                </div>

                {/* Code Body Container */}
                <div className="p-6 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto space-y-2 select-none">
                  <div className="flex items-start gap-4">
                    <span className="text-slate-600 w-4 text-right select-none">
                      01
                    </span>
                    <span className="text-purple-400 font-bold">
                      &lt;metadata_node&gt;
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-slate-600 w-4 text-right select-none">
                      02
                    </span>
                    <div className="pl-4">
                      <span className="text-slate-400">creator:</span>{" "}
                      <span className="text-amber-300">
                        &quot;Node-882&quot;
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-slate-600 w-4 text-right select-none">
                      03
                    </span>
                    <div className="pl-4">
                      <span className="text-slate-400">timestamp:</span>{" "}
                      <span className="text-indigo-300">1715523721</span>{" "}
                      <span className="text-slate-500">// May 12, 2024</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-slate-600 w-4 text-right select-none">
                      04
                    </span>
                    <div className="pl-4">
                      <span className="text-slate-400">device_hash:</span>{" "}
                      <span className="text-slate-500">
                        &quot;0x7F22AB9921C&quot;
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-slate-600 w-4 text-right select-none">
                      05
                    </span>
                    <div className="pl-4">
                      <span className="text-slate-400">location:</span>{" "}
                      <span className="text-emerald-300">
                        34.0522, -118.2437
                      </span>
                    </div>
                  </div>

                  {/* Blank spacers matching line alignment with right mutated view */}
                  <div className="flex items-start gap-4 bg-white/[0.02] border-y border-dashed border-white/5 opacity-25">
                    <span className="text-slate-600 w-4 text-right select-none">
                      --
                    </span>
                    <div className="pl-4 text-slate-500 italic">
                      [ No analytical layers instantiated ]
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/[0.02] border-b border-dashed border-white/5 opacity-25">
                    <span className="text-slate-600 w-4 text-right select-none">
                      --
                    </span>
                    <div className="pl-4 text-slate-500 italic">
                      [ No enrichments recorded ]
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-slate-600 w-4 text-right select-none">
                      06
                    </span>
                    <span className="text-purple-400 font-bold">
                      &lt;/metadata_node&gt;
                    </span>
                  </div>
                </div>

                {/* Panel Bottom Meta Stats */}
                <div className="bg-slate-950/20 px-6 py-3 border-t border-white/5 text-[10px] font-mono text-slate-500 flex justify-between">
                  <span>Lines: 06</span>
                  <span>Classification: Raw Evidence</span>
                </div>
              </div>

              {/* ================= RIGHT SIDE: VERSION 1.1 (ANALYZED DELTA VIEW) ================= */}
              <div className="bg-[#161522] border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between">
                {/* Panel Top Metadata Header */}
                <div className="flex justify-between items-center bg-slate-950/40 px-6 py-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3]" />
                    <span className="font-mono text-xs font-bold tracking-wider text-[#4edea3] uppercase">
                      v1.1 // ANALYZED_MUTATION
                    </span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-[#4edea3]/10 text-[#4edea3] border border-[#4edea3]/20 rounded">
                    Δ STATUS: ENRICHED
                  </span>
                </div>

                {/* Code Body Container */}
                <div className="p-6 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto space-y-2">
                  <div className="flex items-start gap-4">
                    <span className="text-slate-600 w-4 text-right select-none">
                      01
                    </span>
                    <span className="text-purple-400 font-bold">
                      &lt;metadata_node&gt;
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-slate-600 w-4 text-right select-none">
                      02
                    </span>
                    <div className="pl-4">
                      <span className="text-slate-400">creator:</span>{" "}
                      <span className="text-amber-300">
                        &quot;Node-882&quot;
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-slate-600 w-4 text-right select-none">
                      03
                    </span>
                    <div className="pl-4">
                      <span className="text-slate-400">timestamp:</span>{" "}
                      <span className="text-indigo-300">1715523721</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-slate-600 w-4 text-right select-none">
                      04
                    </span>
                    <div className="pl-4">
                      <span className="text-slate-400">device_hash:</span>{" "}
                      <span className="text-slate-500">
                        &quot;0x7F22AB9921C&quot;
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-slate-600 w-4 text-right select-none">
                      05
                    </span>
                    <div className="pl-4">
                      <span className="text-slate-400">location:</span>{" "}
                      <span className="text-emerald-300">
                        34.0522, -118.2437
                      </span>
                    </div>
                  </div>

                  {/* MUTATION HIGHLIGHT LINE 06 */}
                  <div className="flex items-start gap-4 bg-[#4edea3]/10 border-y border-[#4edea3]/20 py-0.5 rounded px-1 -mx-1 group/line transition-all">
                    <span className="text-[#4edea3] w-4 text-right select-none font-bold">
                      +
                    </span>
                    <div className="pl-4 flex-1 flex justify-between items-center">
                      <div>
                        <span className="text-[#4edea3] font-semibold">
                          delta_status:
                        </span>{" "}
                        <span className="text-emerald-200">
                          &quot;Verified&quot;
                        </span>
                      </div>
                      <span className="text-[9px] font-mono tracking-widest px-1.5 py-0.2 bg-[#4edea3]/20 text-[#4edea3] rounded uppercase font-bold">
                        Mutation
                      </span>
                    </div>
                  </div>

                  {/* MUTATION HIGHLIGHT LINE 07 */}
                  <div className="flex items-start gap-4 bg-purple-500/10 border-b border-purple-500/20 py-0.5 rounded px-1 -mx-1 group/line transition-all">
                    <span className="text-purple-400 w-4 text-right select-none font-bold">
                      +
                    </span>
                    <div className="pl-4 flex-1 flex justify-between items-center">
                      <div>
                        <span className="text-purple-300 font-semibold">
                          enrichment:
                        </span>{" "}
                        <span className="text-purple-200">
                          [&quot;AI-Face-Match&quot;]
                        </span>
                      </div>
                      <span className="text-[9px] font-mono tracking-widest px-1.5 py-0.2 bg-purple-500/20 text-purple-300 rounded uppercase font-bold">
                        Insertion
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-slate-600 w-4 text-right select-none">
                      08
                    </span>
                    <span className="text-purple-400 font-bold">
                      &lt;/metadata_node&gt;
                    </span>
                  </div>
                </div>

                {/* Panel Bottom Meta Stats */}
                <div className="bg-slate-950/20 px-6 py-3 border-t border-white/5 text-[10px] font-mono text-slate-500 flex justify-between">
                  <span>Lines: 08 (+2 insertions)</span>
                  <span>Classification: Audited Analysis</span>
                </div>
              </div>
            </div>

            {/* Dynamic Legend Status Footer Row */}
            <div className="mt-6 flex justify-center sm:justify-end gap-6 text-xs font-mono text-slate-500 border-t border-white/5 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full" />{" "}
                Immutable Base State
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#4edea3]/80 rounded-full" />{" "}
                Verified Differential Insertion
              </div>
            </div>
          </div>
        </section>

        {/* 9. Deep Audit Search */}
        <section className="py-24 bg-[#0a0910] text-white relative overflow-hidden font-sans border-y border-white/5">
          {/* Background Cyber Mesh Glow Accents */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-indigo-500/5 to-[#4edea3]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
            {/* Section Header */}
            <div className="max-w-2xl mx-auto mb-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/20 text-xs font-mono text-[#4edea3] tracking-widest uppercase">
                ⚡ Hyper-Threaded Query Core
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                Deep Audit Search
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Execute complex boolean multi-logic queries across petabytes of
                structural digital forensic records with sub-second retrieval
                guarantees.
              </p>
            </div>

            {/* High-Fidelity Query Terminal Panel */}
            <div className="bg-[#141221]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 focus-within:border-indigo-500/40 focus-within:shadow-[0_0_30px_rgba(99,102,241,0.15)] text-left">
              {/* Main Input Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex-1 bg-slate-950/60 border border-white/5 rounded-xl px-4 py-3.5 flex items-center gap-3 transition-colors focus-within:border-white/20">
                  <span className="material-symbols-outlined text-slate-500 select-none text-xl">
                    terminal
                  </span>
                  <input
                    className="bg-transparent border-none focus:ring-0 p-0 w-full font-mono text-sm text-indigo-300 placeholder:text-slate-700 focus:outline-none"
                    placeholder="CASE_ID:2201 AND NODE:LONDON AND TAG:'REDACTED'"
                    type="text"
                    value={queryText}
                    onChange={(e) => setQueryText(e.target.value)}
                  />
                  {queryText && (
                    <button
                      onClick={() => setQueryText("")}
                      className="material-symbols-outlined text-slate-600 hover:text-slate-400 text-sm transition-colors"
                    >
                      close
                    </button>
                  )}
                </div>

                <button className="bg-[#4edea3] hover:bg-[#3ec48e] text-slate-950 font-mono text-xs font-black tracking-wider uppercase px-8 py-3.5 sm:py-auto rounded-xl shadow-lg shadow-[#4edea3]/10 transition-all active:scale-[0.98] shrink-0 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm font-black">
                    bolt
                  </span>
                  EXECUTE QUERY
                </button>
              </div>

              {/* Quick Syntax Insertion Tags */}
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] uppercase text-slate-500 mr-1 select-none">
                  Syntax Helpers:
                </span>
                {syntaxSuggestions.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      setQueryText((prev) =>
                        prev ? `${prev} AND ${item.sample}` : item.sample,
                      )
                    }
                    className="bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/10 text-slate-400 hover:text-white font-mono text-[11px] px-2.5 py-1 rounded-md transition-all"
                  >
                    <span className="text-indigo-400 font-bold">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Engine Metrics Output Block */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left border-t border-white/5 pt-6 max-w-3xl mx-auto font-mono text-xs">
              <div>
                <span className="text-slate-600 block text-[10px] uppercase tracking-wider mb-0.5">
                  Execution Latency
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />{" "}
                  &lt; 240ms
                </span>
              </div>
              <div>
                <span className="text-slate-600 block text-[10px] uppercase tracking-wider mb-0.5">
                  Target Index Pool
                </span>
                <span className="text-slate-300 font-medium">
                  8.4 Petabytes
                </span>
              </div>
              <div>
                <span className="text-slate-600 block text-[10px] uppercase tracking-wider mb-0.5">
                  Optimization Level
                </span>
                <span className="text-indigo-400 font-medium">
                  Adaptive Boolean
                </span>
              </div>
              <div>
                <span className="text-slate-600 block text-[10px] uppercase tracking-wider mb-0.5">
                  Cluster Status
                </span>
                <span className="text-slate-300 font-medium">
                  Distributed // OK
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Global Integrity Pulse */}
        <section className="py-24 bg-[#08070d] text-white relative overflow-hidden font-sans">
          {/* Structural Network Grid Vector Overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/10 via-[#08070d] to-[#08070d] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* ================= LEFT SIDE: BROAD METRIC HEADER ================= */}
              <div className="lg:col-span-3 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Pulse Active
                </div>
                <h2 className="text-3xl font-black tracking-tight bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Global Integrity Pulse
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Real-time synchronization and cryptographic health metrics of
                  the decentralized forensic cluster fleet globally.
                </p>
                <div className="pt-2 font-mono text-[11px] text-slate-500 flex items-center gap-2">
                  <span>FLEET CORE STATUS:</span>
                  <span className="text-emerald-400 font-bold">
                    100% OPERATIONAL
                  </span>
                </div>
              </div>

              {/* ================= RIGHT SIDE: HIGH FIDELITY METRICS BLOCK ================= */}
              <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* CARD 1: VALIDATION LATENCY */}
                <div className="bg-[#12111d] border border-emerald-500/20 p-6 rounded-2xl shadow-xl hover:border-emerald-500/40 transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-2xl rounded-full" />

                  <div className="flex justify-between items-start mb-3">
                    <span className="text-emerald-400 font-mono text-xs font-bold tracking-wider uppercase">
                      Validation Latency
                    </span>
                    <span className="material-symbols-outlined text-emerald-500/40 text-lg group-hover:text-emerald-400 transition-colors">
                      speed
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-black font-mono tracking-tight text-white">
                      14
                    </span>
                    <span className="text-sm font-mono text-emerald-400 font-bold">
                      ms
                    </span>
                  </div>

                  {/* Enhanced Visual Progress Micro-Bar */}
                  <div className="mt-5 space-y-1.5">
                    <div className="h-1 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[96%] rounded-full shadow-[0_0_8px_#10b981]" />
                    </div>
                    <div className="flex justify-between text-[9px] font-mono text-slate-500">
                      <span>OPTIMIZED LEVEL</span>
                      <span className="text-emerald-400 font-bold">
                        96% EFFICIENCY
                      </span>
                    </div>
                  </div>
                </div>

                {/* CARD 2: CHAIN INTEGRITY */}
                <div className="bg-[#12111d] border border-white/10 p-6 rounded-2xl shadow-xl hover:border-indigo-500/20 transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-2xl rounded-full" />

                  <div className="flex justify-between items-start mb-3">
                    <span className="text-indigo-300 font-mono text-xs font-bold tracking-wider uppercase">
                      Chain Integrity
                    </span>
                    <span className="material-symbols-outlined text-indigo-400/40 text-lg group-hover:text-indigo-400 transition-colors">
                      hub
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-black font-mono tracking-tight text-white">
                      100.0
                    </span>
                    <span className="text-sm font-mono text-indigo-400 font-bold">
                      %
                    </span>
                  </div>

                  {/* Enhanced Interactive Visual Equalizer Chart */}
                  <div className="mt-3 flex gap-1 items-end h-7 justify-between px-1 bg-slate-950/40 py-1 rounded-lg border border-white/5">
                    {[85, 100, 90, 95, 100, 75, 95, 100, 90, 100, 100, 85].map(
                      (val, idx) => (
                        <div
                          key={idx}
                          style={{ height: `${val}%` }}
                          className="w-[3px] bg-gradient-to-t from-indigo-500 to-[#4edea3] rounded-sm opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      ),
                    )}
                  </div>
                </div>

                {/* CARD 3: DETECTED BREACHES */}
                <div className="bg-[#12111d] border border-white/10 p-6 rounded-2xl shadow-xl hover:border-white/10 transition-all duration-300 relative group overflow-hidden">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-slate-400 font-mono text-xs font-bold tracking-wider uppercase">
                      Detected Breaches
                    </span>
                    <span className="material-symbols-outlined text-emerald-400 text-lg animate-pulse">
                      gpp_good
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-black font-mono tracking-tight text-white">
                      0
                    </span>
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-1.5 py-0.2 rounded border border-emerald-500/20 font-bold uppercase tracking-wider">
                      SECURE
                    </span>
                  </div>

                  {/* Live Metric Monitoring Line */}
                  <div className="mt-5 pt-2.5 border-t border-white/5 flex items-center gap-2 font-mono text-[10px] text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-slate-400 uppercase tracking-wide">
                      Zero Threat Incidents Logged
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Technical Specifications Grid */}
        <section className="py-24 bg-[#0a0910] text-white relative overflow-hidden font-sans border-t border-white/5">
          {/* Background Micro Tech Grid Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
            {/* Subtle Section Header Labels */}
            <div className="text-center mb-12 space-y-2">
              <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase block">
                Cryptographic Infrastructure Foundations
              </span>
              <div className="h-[1px] w-12 bg-white/10 mx-auto" />
            </div>

            {/* 4-Column High-Fidelity Infrastructure Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-[#12111d]/60 backdrop-blur-xl border border-white/5 hover:border-white/10 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between items-center text-center relative"
                >
                  {/* Subtle card-specific radial gradient on hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                  <div className="space-y-4 relative z-10 w-full">
                    {/* Tech Status Tag */}
                    <div className="flex justify-center">
                      <span
                        className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded border ${item.bgColor} ${item.borderColor} ${item.color} font-bold`}
                      >
                        ● {item.status}
                      </span>
                    </div>

                    {/* Central Icon Representation */}
                    <div
                      className={`w-12 h-12 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center mx-auto ${item.color} group-hover:scale-105 transition-transform`}
                    >
                      <span className="material-symbols-outlined text-2xl font-light">
                        {item.icon}
                      </span>
                    </div>

                    {/* Badge Nomenclature Metadata */}
                    <div className="space-y-1">
                      <h3 className="text-lg font-black tracking-wide text-white group-hover:text-indigo-200 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium max-w-[200px] mx-auto leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Multi-Node Consensus Verification */}
        <MultiNodeConsensus/>

        {/* 13. Jurisdictional Data Sovereignty Map */}
        <JurisdictionalSovereignty/>

        {/* 14. Courtroom-Ready Presentation Mode */}
        <CourtroomPresentation/>

        {/* 15. Automated Anomaly Detection Engine */}
        <AutomatedAnomalyDetection />

        {/* 16. Cold Storage & Immutable Archival */}
        <ColdStorageArchival />

        {/* Final CTA */}
        <DemasCtaSection />
      </main>
    </div>
  );
};

export default CaseTimelines;
