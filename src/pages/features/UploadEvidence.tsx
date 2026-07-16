import React, { useState, useEffect } from "react";

export default function UploadEvidence() {
  // Local state for basic interactive elements
  const [countdown, setCountdown] = useState("07:59:59");

  const [timeLeft, setTimeLeft] = useState(28800); // 8 Hours in seconds

  // 2. Animated Upload Simulation States
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<
    "IDLE" | "HASHING" | "ENCRYPTING" | "SIGNED"
  >("IDLE");
  const [currentFile, setCurrentFile] = useState(
    "telegram_chat_export_71b.tar.gz",
  );

  // Timer Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 28800));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Upload Simulation Cycle Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          // Progress complete, cycle the file/status to keep UI active
          setTimeout(() => {
            const files = [
              "whatsapp_db_dump_09c.enc",
              "voip_metadata_session_4.json",
              "cloud_drive_img_pack.zip",
            ];
            setCurrentFile(files[Math.floor(Math.random() * files.length)]);
            setUploadStatus("IDLE");
            setUploadProgress(0);
          }, 3000);
          return 100;
        }

        // Dynamic status updates based on progress percentage
        const nextProgress = prev + 5;
        if (nextProgress < 30) setUploadStatus("HASHING");
        else if (nextProgress < 80) setUploadStatus("ENCRYPTING");
        else setUploadStatus("SIGNED");

        return nextProgress;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // Format seconds to HH:MM:SS
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  // Simple countdown ticker simulation for the Urgent Production Order panel
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = String(23 - now.getHours()).padStart(2, "0");
      const minutes = String(59 - now.getMinutes()).padStart(2, "0");
      const seconds = String(59 - now.getSeconds()).padStart(2, "0");
      setCountdown(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#131316] text-[#e5e1e6] font-sans antialiased selection:bg-[#3626ce] selection:text-white min-h-screen relative overflow-x-hidden">
      {/* Global CSS Injecting Custom Keyframes & Font Variables */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap');
        
        .font-mono-technical { font-family: 'JetBrains Mono', monospace; }
        .font-sans { font-family: 'Inter', sans-serif; }
        
        @keyframes forensicScan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        .animate-scanline {
          position: absolute;
          width: 100%;
          height: 2px;
          background: rgba(78, 222, 163, 0.25);
          animation: forensicScan 6s linear infinite;
        }
      `,
        }}
      />

      {/* Hero section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0C]">
        {/* --- Deep Background Layer: Dynamic Grid & Noise --- */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
            linear-gradient(#c4c1fb 1px, transparent 1px),
            linear-gradient(90deg, #c4c1fb 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
            transform:
              "perspective(1000px) rotateX(60deg) translateY(-200px) scale(2)",
          }}
        />

        {/* --- Mid Background Layer: Cryptographic Stream --- */}
        <div className="absolute inset-0 font-mono-technical text-[10px] text-[#c4c1fb]/5 overflow-hidden select-none whitespace-nowrap leading-none pt-4 opacity-40">
          {Array.from({ length: 40 }).map((_, i) => {
            // Helper to generate a random 16-character hex string in the browser
            const randomHex = () =>
              Math.random().toString(16).substring(2, 10).padEnd(8, "0");

            return (
              <div
                key={i}
                className="animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                SHA256:{randomHex()}
                {randomHex()}...
                {randomHex()}
                {randomHex()}...
                {randomHex()}
                {randomHex()}
              </div>
            );
          })}
        </div>

        {/* --- Ambient Lighting Blurs --- */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#1e1b4b] rounded-full blur-[150px] opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c4c1fb]/5 rounded-full blur-[180px]"></div>
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#1e1b4b] rounded-full blur-[140px] opacity-50"></div>
        </div>

        {/* --- Content Area --- */}
        <div className="max-w-[1440px] mx-auto px-8 relative z-10 w-full py-20">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 xl:gap-24 items-center">
            {/* Left Column: Text & CTA */}
            <div className="text-left relative">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#c4c1fb]/5 border border-[#c4c1fb]/10 text-[#c4c1fb] mb-10 shadow-[inset_0_0_12px_rgba(196,193,251,0.05)]">
                <span className="material-symbols-outlined text-base animate-pulse">
                  gavel
                </span>
                <span className="font-mono-technical text-[11px] uppercase tracking-[0.25em] font-medium">
                  EU e-Evidence Regulation (2023/1543)
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 tracking-[-0.04em] leading-[0.95] font-sans">
                Ingest with <br />
                <span className="bg-gradient-to-br from-[#c4c1fb] via-[#e0deff] to-[#4edea3] bg-clip-text text-transparent ">
                  Cryptographic <br />
                  Certainty.
                </span>
              </h1>

              <p className="text-[#c8c5d0]/90 text-2xl max-w-2xl mb-14 leading-relaxed font-light">
                SentinelForensics delivers the tamper-proof bridge for CSPs to
                manage
                <strong className="text-white font-medium">
                  {" "}
                  Production
                </strong>{" "}
                and
                <strong className="text-white font-medium">
                  {" "}
                  Preservation
                </strong>{" "}
                orders with native zero-trust integrity.
              </p>

              {/* Redesigned Button Group */}
              <div className="flex flex-wrap gap-6 mb-20">
                <button className="group relative bg-[#c4c1fb] text-[#0A0A0C] px-10 py-4 rounded-full font-extrabold hover:bg-white transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(196,193,251,0.3)] hover:shadow-[0_0_40px_rgba(196,193,251,0.5)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="material-symbols-outlined">analytics</span>
                  Get Ingest Analysis
                </button>

                <button className="relative group overflow-hidden border border-[#c4c1fb]/20 text-[#c4c1fb] px-10 py-4 rounded-full font-bold hover:border-[#c4c1fb]/50 transition-all flex items-center gap-2.5">
                  <div className="absolute inset-0 bg-[#c4c1fb]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative z-10">The 2026 Roadmap</span>
                  <span className="material-symbols-outlined text-sm relative z-10 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>

              {/* Redesigned Stats with subtle containers */}
              <div className="flex gap-4 border-t border-[#c4c1fb]/10 pt-10">
                {[
                  { value: "<10ms", label: "Ingest Latency", color: "#4edea3" },
                  {
                    value: "Verified",
                    label: "Chain of Custody",
                    color: "#c4c1fb",
                  },
                  {
                    value: "AES-256-GCM",
                    label: "End-to-End Encryption",
                    color: "white",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[#131316] border border-[#c4c1fb]/5 p-5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                  >
                    <div
                      className="font-mono-technical text-2xl font-bold tracking-tight"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-widest text-[#c8c5d0] mt-1.5 font-sans font-medium opacity-80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Right Column: The Cryptographic Bridge (Redesigned Visual) --- */}
            <div className="hidden lg:block relative perspective-[1500px]">
              <div className="relative aspect-[4/5] bg-[#0A0A0C] border border-[#c4c1fb]/10 p-2 rounded-3xl overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Inner stylized container */}
                <div className="relative w-full h-full bg-[#131316] rounded-2xl overflow-hidden flex flex-col items-center justify-center p-10 border border-[#c4c1fb]/5">
                  {/* 1. The CSP Node (Top) */}
                  <div className="absolute top-10 flex flex-col items-center gap-2 z-20">
                    <div className="w-16 h-16 rounded-2xl border border-[#c4c1fb]/20 bg-[#0A0A0C] flex items-center justify-center shadow-[0_0_15px_rgba(196,193,251,0.1)]">
                      <span className="material-symbols-outlined text-[#c4c1fb]/70 text-3xl">
                        cloud
                      </span>
                    </div>
                    <div className="font-mono-technical text-[10px] text-[#c4c1fb]/70 tracking-wider">
                      CSP_INFRASTRUCTURE
                    </div>
                  </div>

                  {/* 2. The Cryptographic Core (Center - animated) */}
                  <div className="relative z-10 w-full flex justify-center items-center h-40">
                    {/* Rotating rings with perspective */}
                    <div
                      className="absolute w-60 h-60 rounded-full border border-dashed border-[#c4c1fb]/20 animate-[spin_30s_linear_infinite]"
                      style={{ transform: "rotateX(70deg)" }}
                    ></div>
                    <div
                      className="absolute w-48 h-48 rounded-full border border-[#4edea3]/20 animate-[spin_15s_linear_infinite_reverse]"
                      style={{ transform: "rotateX(70deg)" }}
                    ></div>

                    {/* The Bridge/Data Flow (Perspective lines) */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 200 200"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="bridgeGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#c4c1fb"
                            stopOpacity="0"
                          />
                          <stop
                            offset="50%"
                            stopColor="#c4c1fb"
                            stopOpacity="0.6"
                          />
                          <stop
                            offset="100%"
                            stopColor="#c4c1fb"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      {/* Perspective data lines */}
                      {[-40, -20, 0, 20, 40].map((x) => (
                        <path
                          key={x}
                          d={`M ${100 + x} 40 L ${100 + x * 1.5} 160`}
                          stroke="url(#bridgeGradient)"
                          strokeWidth="0.5"
                          fill="none"
                          className="animate-pulse"
                        />
                      ))}

                      {/* Animated data packets */}
                      <circle
                        r="1.5"
                        fill="#4edea3"
                        className="animate-[dataFlow_2s_linear_infinite]"
                      >
                        <animateMotion
                          path="M 80 40 L 70 160"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle
                        r="1.5"
                        fill="#c4c1fb"
                        className="animate-[dataFlow_2.5s_linear_infinite]"
                        begin="1s"
                      >
                        <animateMotion
                          path="M 120 40 L 130 160"
                          dur="2.5s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>

                    {/* Core Icon */}
                    <div className="relative flex items-center justify-center w-24 h-24 bg-[#0A0A0C] rounded-full border-2 border-[#c4c1fb]/30 shadow-[0_0_30px_rgba(196,193,251,0.2)]">
                      <span className="material-symbols-outlined text-[#c4c1fb] text-6xl">
                        swap_calls
                      </span>
                    </div>
                  </div>

                  {/* 3. The Regulator Node (Bottom) */}
                  <div className="absolute bottom-10 flex flex-col items-center gap-2 z-20">
                    <div className="font-mono-technical text-[10px] text-[#4edea3]/70 tracking-wider">
                      REGULATORY_BODY
                    </div>
                    <div className="w-16 h-16 rounded-2xl border border-[#4edea3]/20 bg-[#0A0A0C] flex items-center justify-center shadow-[0_0_15px_rgba(78,222,163,0.1)]">
                      <span className="material-symbols-outlined text-[#4edea3]/70 text-3xl">
                        account_balance
                      </span>
                    </div>
                  </div>

                  {/* Subtle Scanline Overlay */}
                  <div className="absolute inset-0 bg-scanlines opacity-[0.02] pointer-events-none"></div>
                </div>

                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#c4c1fb]/30 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#4edea3]/30 rounded-br-2xl"></div>
              </div>

              {/* Floating Integrity Label */}
              <div className="absolute -top-6 -right-6 bg-[#131316] backdrop-blur-xl border border-[#4edea3]/30 p-3.5 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.4)] z-30">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-pulse"></div>
                  <span className="font-mono-technical text-xs font-bold text-[#4edea3] tracking-wider">
                    CHAIN_OF_CUSTODY: LOCKED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Required CSS for custom animations (add to your global CSS or style tag) */}
        <style>{`
        @keyframes dataFlow {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
        }
        .bg-scanlines {
            background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 51%);
            background-size: 100% 4px;
        }
      `}</style>
      </section>

      <section className="py-24 bg-[#0A0A0C] border-y border-[#c4c1fb]/10 relative overflow-hidden">
        {/* Background Subtle Accents */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c4c1fb]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4edea3]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr,1.3fr] gap-16 xl:gap-24 items-center">
            {/* LEFT COLUMN: Regulatory Context & Upload Features */}
            <div>
              <div className="flex items-center gap-2 text-[#4edea3] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping"></span>
                <span className="font-mono-technical text-xs uppercase tracking-[0.2em] font-semibold">
                  2026 Legal Enforcement Standards
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight font-sans">
                The EU e-Evidence Mandate <br />
                &amp; Secure Upload Pipeline
              </h2>

              <p className="text-[#c8c5d0] mb-10 text-lg leading-relaxed font-light">
                With over{" "}
                <strong className="text-white font-medium">
                  85% of criminal investigations
                </strong>{" "}
                relying on dynamic digital evidence, the EU e-Evidence Directive
                (2023/1544) imposes highly compressed SLAs on CSPs.
                SentinelForensics digitizes the entire processing life cycle,
                ensuring lightning-fast secure uploads while maintaining
                absolute legal compliance.
              </p>

              {/* Feature Cards Grid */}
              <div className="grid gap-4">
                {/* Feature 1 */}
                <div className="flex gap-4 p-5 bg-[#131316] border border-[#c4c1fb]/5 rounded-xl hover:border-[#c4c1fb]/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-[#c4c1fb]/5 border border-[#c4c1fb]/10 flex items-center justify-center text-[#c4c1fb] shrink-0">
                    <span className="material-symbols-outlined text-2xl">
                      speed
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1 font-sans">
                      Compressed 8-Hour Emergencies
                    </h4>
                    <p className="text-sm text-[#c8c5d0] leading-relaxed">
                      Automated workflows ingest, process, and package digital
                      evidence within the strict 10-day standard and emergency
                      8-hour limits.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Secure Evidence Upload Focus */}
                <div className="flex gap-4 p-5 bg-[#131316] border border-[#c4c1fb]/5 rounded-xl hover:border-[#c4c1fb]/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-[#4edea3]/5 border border-[#4edea3]/10 flex items-center justify-center text-[#4edea3] shrink-0">
                    <span className="material-symbols-outlined text-2xl">
                      cloud_upload
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1 font-sans">
                      Zero-Trust Cryptographic Ingestion
                    </h4>
                    <p className="text-sm text-[#c8c5d0] leading-relaxed">
                      Evidence uploads undergo client-side zero-knowledge
                      hashing. Your raw infrastructure never exposes data before
                      encryption, securing a bulletproof chain of custody.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4 p-5 bg-[#131316] border border-[#c4c1fb]/5 rounded-xl hover:border-[#c4c1fb]/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-[#ffb4ab]/5 border border-[#ffb4ab]/10 flex items-center justify-center text-[#ffb4ab] shrink-0">
                    <span className="material-symbols-outlined text-2xl">
                      gavel
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1 font-sans">
                      Regulatory Risk Mitigation
                    </h4>
                    <p className="text-sm text-[#c8c5d0] leading-relaxed">
                      Instantly validates incoming EPOC certificates against the
                      official EU registry database, guarding against fraudulent
                      or illegal jurisdiction requests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Compliance Control Center */}
            <div className="relative">
              {/* Outer Box Layer */}
              <div className="relative bg-[#131316] border border-[#c4c1fb]/10 rounded-2xl p-6 shadow-2xl overflow-hidden">
                {/* Header Bar */}
                <div className="flex justify-between items-center pb-4 mb-6 border-b border-[#c4c1fb]/10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                    <span className="font-mono-technical text-[11px] text-[#c8c5d0] ml-2 tracking-wider">
                      SENTINEL_EVIDENCE_GATEWAY_V2.6
                    </span>
                  </div>
                  <div className="bg-[#4edea3]/10 border border-[#4edea3]/20 text-[#4edea3] text-[9px] font-mono-technical px-2.5 py-1 rounded">
                    SECURE LINK ACTIVE
                  </div>
                </div>

                {/* Console Output log */}
                <div className="font-mono-technical text-[12px] space-y-2 text-[#e5e1e6] bg-[#0A0A0C] p-4 rounded-lg border border-[#c4c1fb]/5 mb-6">
                  <div className="text-[#c4c1fb]/70">
                    &gt; [EPOC_CONNECT] Handshake established with EU DecentNet.
                  </div>
                  <div>
                    &gt; <span className="text-[#4edea3]">ACCESS_TOKEN:</span>{" "}
                    authenticated_csp_node_909x_eu
                  </div>
                  <div>
                    &gt; <span className="text-white">ENCRYPTION:</span>{" "}
                    AES-256-GCM Ephemeral Keys Loaded
                  </div>
                </div>

                {/* DYNAMIC UPLOAD INTERACTION PANEL */}
                <div className="bg-[#18181C] border border-[#c4c1fb]/5 rounded-xl p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-lg text-[#c4c1fb]">
                        upload_file
                      </span>
                      <span className="font-mono-technical text-xs text-white">
                        ACTIVE_INGEST_PIPELINE
                      </span>
                    </div>
                    <div className="text-[10px] font-mono-technical text-white/50">
                      STATUS:{" "}
                      <span
                        className={
                          uploadStatus === "SIGNED"
                            ? "text-[#4edea3]"
                            : "text-[#c4c1fb] animate-pulse"
                        }
                      >
                        {uploadStatus}
                      </span>
                    </div>
                  </div>

                  {/* Simulated file upload status block */}
                  <div className="bg-[#0A0A0C] border border-[#c4c1fb]/10 p-4 rounded-lg relative overflow-hidden">
                    <div className="flex justify-between items-start mb-2 z-10 relative">
                      <div className="truncate pr-4">
                        <div className="font-sans font-semibold text-xs text-white truncate max-w-[280px]">
                          {currentFile}
                        </div>
                        <div className="font-mono-technical text-[10px] text-[#c8c5d0]/60 mt-1">
                          {uploadStatus === "HASHING" &&
                            "Calculating Client-side SHA-256..."}
                          {uploadStatus === "ENCRYPTING" &&
                            "Enveloping payloads using Key-Wrap..."}
                          {uploadStatus === "SIGNED" &&
                            "Evidence signed & fully sealed!"}
                        </div>
                      </div>
                      <div className="font-mono-technical text-xs font-bold text-[#c4c1fb]">
                        {uploadProgress}%
                      </div>
                    </div>

                    {/* Micro Progress Bar */}
                    <div className="w-full bg-[#18181C] h-1.5 rounded-full overflow-hidden relative z-10">
                      <div
                        className={`h-full transition-all duration-300 ease-out ${
                          uploadStatus === "SIGNED"
                            ? "bg-[#4edea3]"
                            : "bg-[#c4c1fb]"
                        }`}
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>

                    {/* Progress background glow */}
                    <div
                      className="absolute inset-0 bg-[#c4c1fb]/5 transition-opacity duration-300"
                      style={{ opacity: uploadProgress / 100 }}
                    />
                  </div>
                </div>

                {/* DYNAMIC COUNTDOWN & SLA ALERT PANEL */}
                <div className="bg-red-500/5 border border-[#ffb4ab]/20 rounded-xl p-6 relative">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ffb4ab] text-lg animate-bounce">
                        priority_high
                      </span>
                      <span className="font-sans font-bold text-xs text-white">
                        SLA Deadline (EPOC-PR Emergency)
                      </span>
                    </div>
                    <span className="font-mono-technical text-[10px] bg-red-500/20 text-[#ffb4ab] px-2 py-0.5 rounded font-bold tracking-wider">
                      CRITICAL
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="font-mono-technical text-3xl font-extrabold tracking-widest text-[#ffb4ab] drop-shadow-[0_0_10px_rgba(255,180,171,0.2)]">
                      {formatTime(timeLeft)}
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-widest text-[#c8c5d0]/70 font-sans font-medium">
                        Time Elapsed
                      </div>
                      <div className="text-xs text-white font-semibold mt-0.5">
                        88% of Limit Left
                      </div>
                    </div>
                  </div>

                  {/* Progress bar representing time depletion */}
                  <div className="w-full bg-[#18181C] h-1 rounded-full mt-4 overflow-hidden">
                    <div className="bg-[#ffb4ab] h-full w-[88%] transition-all duration-1000"></div>
                  </div>
                </div>
              </div>

              {/* Micro Decorative Badges under card */}
              <div className="absolute -bottom-5 -left-5 bg-[#0A0A0C] border border-[#c4c1fb]/10 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-[#4edea3]">
                  verified_user
                </span>
                <span className="font-mono-technical text-[9px] text-[#4edea3] tracking-widest">
                  CHAIN_OF_CUSTODY: VALIDATED
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Production vs Preservation Orders & Evidence Upload Pipeline */}
      <section className="py-24 relative overflow-hidden bg-[#0a0a0c]">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#c4c1fb]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#4edea3]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#c4c1fb] uppercase font-bold bg-[#c4c1fb]/10 px-3 py-1 rounded-full">
              EU e-Evidence Framework (Reg. 2023/1543)
            </span>
            <h2 className="text-4xl font-extrabold text-white font-sans mt-4 tracking-tight">
              Production vs. Preservation Orders
            </h2>
            <p className="text-[#c8c5d0] mt-3 text-lg leading-relaxed">
              Complying with legally binding cross-border mandates while
              maintaining strict data custody and cryptographic integrity.
            </p>
          </div>

          {/* Two Column Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Production Orders Card (EPOC) */}
            <div className="bg-[#121118]/80 backdrop-blur-xl border border-[#47464f]/30 p-10 rounded-xl border-t-4 border-t-[#c4c1fb] shadow-2xl hover:border-t-[#d3d1fc] transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-3 text-white mb-2">
                    <span className="material-symbols-outlined text-[#c4c1fb] text-3xl">
                      gavel
                    </span>
                    <h3 className="text-2xl font-bold font-sans">
                      Production Order (EPOC)
                    </h3>
                  </div>
                  <p className="text-xs text-[#c8c5d0]">
                    Compels immediate disclosure of stored electronic evidence.
                  </p>
                </div>
                <span className="px-3 py-1 bg-[#c4c1fb]/10 text-[#c4c1fb] text-[10px] rounded-md uppercase font-bold tracking-wider font-mono">
                  Mandatory Handover
                </span>
              </div>

              {/* Workflow Timeline */}
              <div className="space-y-6 relative border-l border-[#c4c1fb]/10 pl-6 ml-3">
                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-[#c4c1fb] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c4c1fb]"></div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    1. Decentralized Ingestion
                  </h4>
                  <p className="text-xs text-[#c8c5d0]">
                    Authority issues an EPOC directly via the secure EU-wide
                    decentralized IT system, bypassing slow MLAT diplomatic
                    loops.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-[#c4c1fb]/50 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c4c1fb]/50"></div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    2. Identity & Sig Validation
                  </h4>
                  <p className="text-xs text-[#c8c5d0]">
                    The system automatically validates the issuer's electronic
                    signature, certificate authorities, and officer credentials.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-[#c4c1fb]/50 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c4c1fb]/50"></div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    3. Automated Compilation
                  </h4>
                  <p className="text-xs text-[#c8c5d0]">
                    Specific transactional, traffic, or subscriber metadata is
                    safely queried, compiled, and prepared for shipping.
                  </p>
                </div>

                <div className="p-4 bg-[#c4c1fb]/5 rounded-lg border border-[#c4c1fb]/20 flex items-center justify-between mt-6">
                  <div>
                    <span className="block text-[10px] text-[#c4c1fb] uppercase tracking-widest font-mono font-bold">
                      Strict SLA window
                    </span>
                    <span className="text-lg font-bold text-white">
                      10 Days{" "}
                      <span className="text-xs text-[#c8c5d0] font-normal">
                        Standard
                      </span>{" "}
                      / 8 Hrs{" "}
                      <span className="text-xs text-red-400 font-normal">
                        Emergency
                      </span>
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[#c4c1fb] text-2xl animate-pulse">
                    alarm
                  </span>
                </div>
              </div>
            </div>

            {/* Preservation Orders Card (EPOC-PR) */}
            <div className="bg-[#121118]/80 backdrop-blur-xl border border-[#47464f]/30 p-10 rounded-xl border-t-4 border-t-[#4edea3] shadow-2xl hover:border-t-[#6efca7] transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-3 text-white mb-2">
                    <span className="material-symbols-outlined text-[#4edea3] text-3xl">
                      lock
                    </span>
                    <h3 className="text-2xl font-bold font-sans">
                      Preservation Order (EPOC-PR)
                    </h3>
                  </div>
                  <p className="text-xs text-[#c8c5d0]">
                    Freezes specified electronic data to prevent alteration or
                    deletion.
                  </p>
                </div>
                <span className="px-3 py-1 bg-[#4edea3]/10 text-[#4edea3] text-[10px] rounded-md uppercase font-bold tracking-wider font-mono">
                  60-Day Legal Hold
                </span>
              </div>

              {/* Preservation Specific Workflow */}
              <div className="space-y-6 relative border-l border-[#4edea3]/10 pl-6 ml-3">
                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-[#4edea3] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Instant Snapshot Mirroring
                  </h4>
                  <p className="text-xs text-[#c8c5d0]">
                    To prevent data purging or active modification, target
                    datasets are isolated, snapshotted, and locked immediately
                    on receipt.
                  </p>
                </div>

                <div className="p-5 bg-[#15251f]/50 rounded-lg border border-[#4edea3]/20 relative">
                  <div className="absolute top-3 right-3 text-[#4edea3]">
                    <span className="material-symbols-outlined text-[18px] animate-pulse">
                      security
                    </span>
                  </div>
                  <div className="font-mono text-[10px] text-[#4edea3] mb-1.5 tracking-wider font-bold">
                    SECURE_STORAGE_RESTRICTION
                  </div>
                  <p className="text-xs text-[#c8c5d0] leading-relaxed">
                    Data is written to write-once-read-many (WORM) storage
                    volumes. Standard retention window is 60 days, with a
                    possible 30-day extension.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-[#4edea3]/50 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4edea3]/50"></div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Automatic Deletion Safety Net
                  </h4>
                  <p className="text-xs text-[#c8c5d0]">
                    If no valid European Production Order is received before the
                    preservation window expires, the data is automatically
                    unheld and securely purged.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Integrated Section: Secure Evidence Upload Pipeline */}
          <div className="bg-[#121118]/80 backdrop-blur-xl border border-[#47464f]/30 rounded-xl p-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c4c1fb]/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#47464f]/30 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#c4c1fb]">
                    cloud_upload
                  </span>
                  <h3 className="text-xl font-bold text-white font-sans">
                    Secure Evidence Upload Pipeline
                  </h3>
                </div>
                <p className="text-xs text-[#c8c5d0] mt-1">
                  Standardized data packaging, hashing, and secure transit
                  channel for production deliveries.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-ping"></span>
                <span className="text-xs font-mono text-[#4edea3] font-bold uppercase tracking-wider">
                  Pipeline: Active & Encrypted
                </span>
              </div>
            </div>

            {/* Upload Pipeline visualizer */}
            <div className="grid md:grid-cols-4 gap-6 relative">
              {/* Step 1 */}
              <div className="bg-[#0a0a0c]/60 p-5 rounded-lg border border-[#47464f]/20 relative">
                <div className="absolute top-4 right-4 text-xs font-mono text-[#c4c1fb]/40 font-bold">
                  01
                </div>
                <span className="material-symbols-outlined text-[#c4c1fb] mb-3 text-2xl">
                  description
                </span>
                <h4 className="text-sm font-bold text-white mb-1">
                  Pack Evidence
                </h4>
                <p className="text-[11px] text-[#c8c5d0] leading-relaxed">
                  Raw logs, IP data, and communications are parsed into
                  compliant JSON/PDF structures.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-[#0a0a0c]/60 p-5 rounded-lg border border-[#47464f]/20 relative">
                <div className="absolute top-4 right-4 text-xs font-mono text-[#c4c1fb]/40 font-bold">
                  02
                </div>
                <span className="material-symbols-outlined text-[#4edea3] mb-3 text-2xl">
                  fingerprint
                </span>
                <h4 className="text-sm font-bold text-white mb-1">
                  Cryptographic Hashing
                </h4>
                <p className="text-[11px] text-[#c8c5d0] leading-relaxed">
                  Data packages are run through a local SHA-256 process to
                  guarantee strict chain-of-custody.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-[#0a0a0c]/60 p-5 rounded-lg border border-[#47464f]/20 relative">
                <div className="absolute top-4 right-4 text-xs font-mono text-[#c4c1fb]/40 font-bold">
                  03
                </div>
                <span className="material-symbols-outlined text-[#c4c1fb] mb-3 text-2xl">
                  vpn_lock
                </span>
                <h4 className="text-sm font-bold text-white mb-1">
                  Channel Encryption
                </h4>
                <p className="text-[11px] text-[#c8c5d0] leading-relaxed">
                  Packages are payload-encrypted using the public key of the
                  receiving judicial authority.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-[#0a0a0c]/60 p-5 rounded-lg border border-[#c4c1fb]/20 relative">
                <div className="absolute top-4 right-4 text-xs font-mono text-[#c4c1fb]/40 font-bold">
                  04
                </div>
                <span className="material-symbols-outlined text-[#c4c1fb] mb-3 text-2xl">
                  mark_email_read
                </span>
                <h4 className="text-sm font-bold text-white mb-1">
                  Handshake Receipt
                </h4>
                <p className="text-[11px] text-[#c8c5d0] leading-relaxed">
                  The decentralized IT node signs a receipt back to the platform
                  confirming safe delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Automated Ingestion & Secure Evidence Upload Pipeline */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-[#47464f]/20">
        {/* Subtle radial background glow to tie the dark theme together */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#c4c1fb]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#4edea3] uppercase font-bold bg-[#4edea3]/10 px-3.5 py-1.5 rounded-full">
              Zero-Trust Compliance Engine
            </span>
            <h2 className="text-4xl font-extrabold text-white font-sans mt-5 tracking-tight">
              The Automated Ingestion Pipeline
            </h2>
            <p className="text-[#c8c5d0] mt-3 text-lg leading-relaxed">
              From secure cross-border reception to cryptographic payload
              delivery, our pipeline handles e-Evidence with zero human
              exposure.
            </p>
          </div>

          {/* Horizontal / Grid Pipeline Steps */}
          <div className="grid md:grid-cols-4 gap-6 mb-16 relative">
            {/* Decorative connecting pipeline line for larger screens */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#47464f]/40 to-transparent z-0" />

            {[
              {
                num: "01",
                title: "Order Intake",
                tag: "e-CODEX Node",
                desc: "Centralized ingestion point for all cross-border EU requests, natively connected to the decentralized e-Evidence Exchange system.",
                icon: "leak_add",
                status: "Active",
              },
              {
                num: "02",
                title: "Auto-Validation",
                tag: "ETSI TS 104 144",
                desc: "Rigid programmatic vetting of issuer signatures, mandate authority levels, and compliance with the 10-day / 8-hour SLA thresholds.",
                icon: "verified_user",
                status: "Enforcing",
              },
              {
                num: "03",
                title: "Parallel Extraction",
                tag: "Sandboxed Worker",
                desc: "Isolated serverless tasks compile requested traffic, transactional, or subscriber data while hashing datasets at the bit-level.",
                icon: "settings_input_component",
                status: "Isolated",
              },
              {
                num: "04",
                title: "Secure Delivery",
                tag: "Payload Handshake",
                desc: "End-to-end encrypted payload bundling delivered directly back to the requesting judicial authority with dual-signed receipt logging.",
                icon: "forward_to_inbox",
                status: "Ready",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#121118]/90 backdrop-blur-xl border border-[#47464f]/30 rounded-xl text-left hover:border-[#c4c1fb]/40 transition-all duration-300 relative z-10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-mono text-[#c4c1fb]/20 text-5xl font-extrabold leading-none transition-colors group-hover:text-[#c4c1fb]/30">
                      {step.num}
                    </span>
                    <span className="material-symbols-outlined text-[#c4c1fb] text-2xl bg-[#c4c1fb]/5 p-2 rounded-lg border border-[#c4c1fb]/10">
                      {step.icon}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono tracking-wider text-[#c4c1fb] font-bold uppercase block mb-1">
                    {step.tag}
                  </span>
                  <h3 className="font-bold text-white mb-3 text-lg font-sans tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#c8c5d0] leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-[#47464f]/20 mt-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                  <span className="text-[9px] font-mono text-[#c8c5d0] uppercase tracking-wider">
                    {step.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Secure Evidence Upload Pipeline Interface */}
          <div className="bg-[#121118]/80 backdrop-blur-xl border border-[#47464f]/30 rounded-xl p-8 shadow-2xl relative overflow-hidden">
            {/* Structural glow effect inside the dashboard container */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#4edea3]/5 rounded-full blur-2xl pointer-events-none" />

            {/* Header Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#47464f]/30 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] text-2xl">
                    cloud_upload
                  </span>
                  <h3 className="text-xl font-bold text-white font-sans">
                    Secure Evidence Upload Pipeline
                  </h3>
                </div>
                <p className="text-xs text-[#c8c5d0] mt-1.5">
                  Cryptographic delivery interface to package, hash, and upload
                  legally produced evidence to European authorities.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-[#0a0a0c] border border-[#47464f]/40 px-3.5 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping" />
                  <span className="text-[10px] font-mono text-[#4edea3] uppercase font-bold tracking-widest">
                    EPOC-Gateway-01 // Online
                  </span>
                </div>
                <span className="text-xs font-mono text-[#c8c5d0]">
                  Version 2.4.1-LTS
                </span>
              </div>
            </div>

            {/* Interactive-looking technical status columns */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Step-by-Step Security Pipeline Details */}
              <div className="lg:col-span-2 space-y-4">
                <div className="p-5 bg-[#0a0a0c]/60 rounded-lg border border-[#47464f]/20 hover:border-[#c4c1fb]/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-[#c4c1fb] text-lg">
                      key_visualizer
                    </span>
                    <h4 className="text-sm font-bold text-white font-sans">
                      01. Cryptographic Package Seals (SHA-256)
                    </h4>
                  </div>
                  <p className="text-xs text-[#c8c5d0] pl-7 leading-relaxed">
                    Every package uploaded is dynamically assigned a distinct
                    SHA-256 hash before data transfer begins. This
                    mathematically seals the dataset, ensuring the digital
                    chain-of-custody remains completely audit-ready.
                  </p>
                </div>

                <div className="p-5 bg-[#0a0a0c]/60 rounded-lg border border-[#47464f]/20 hover:border-[#c4c1fb]/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-[#c4c1fb] text-lg">
                      shield_with_heart
                    </span>
                    <h4 className="text-sm font-bold text-white font-sans">
                      02. Judicial Recipient End-to-End Encryption
                    </h4>
                  </div>
                  <p className="text-xs text-[#c8c5d0] pl-7 leading-relaxed">
                    Files are automatically payload-encrypted on-the-fly using
                    the verified public key of the targeted cross-border
                    judicial body. No intermediate cloud servers can intercept
                    or inspect the produced communications data.
                  </p>
                </div>

                <div className="p-5 bg-[#0a0a0c]/60 rounded-lg border border-[#47464f]/20 hover:border-[#c4c1fb]/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-[#c4c1fb] text-lg">
                      rule_folder
                    </span>
                    <h4 className="text-sm font-bold text-white font-sans">
                      03. Verification & Digital Receipts (e-CODEX Signature)
                    </h4>
                  </div>
                  <p className="text-xs text-[#c8c5d0] pl-7 leading-relaxed">
                    Once transmission is completed through the decentralized IT
                    system, a cryptographically signed handshake receipt is
                    returned, legally resolving the service provider's
                    obligation to the EPOC.
                  </p>
                </div>
              </div>

              {/* Live Upload Status Widget Mock */}
              <div className="bg-[#181622]/90 border border-[#47464f]/30 p-6 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-xs font-mono text-[#c4c1fb] font-bold uppercase tracking-wider">
                      Active Upload Session
                    </h4>
                    <span className="text-[10px] font-mono text-[#4edea3] bg-[#4edea3]/10 px-2.5 py-0.5 rounded">
                      COMPLY_SLA
                    </span>
                  </div>

                  {/* File Info */}
                  <div className="space-y-4 mb-8">
                    <div>
                      <div className="text-[10px] text-[#c8c5d0] uppercase tracking-wider font-mono">
                        Evidence ID
                      </div>
                      <div className="text-sm font-mono font-bold text-white tracking-tight mt-0.5">
                        EPOC-2026-EU-99201
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] text-[#c8c5d0] uppercase tracking-wider font-mono">
                        Payload Size
                      </div>
                      <div className="text-sm font-mono font-bold text-white tracking-tight mt-0.5">
                        14.82 MB (ZIP, Gzip Archive)
                      </div>
                    </div>

                    {/* Pseudo Progress bar */}
                    <div>
                      <div className="flex justify-between text-[10px] text-[#c8c5d0] font-mono mb-1">
                        <span>Uploading to Member State Authority Node</span>
                        <span className="text-[#4edea3] font-bold">
                          100% Encrypted
                        </span>
                      </div>
                      <div className="w-full h-2 bg-[#0a0a0c] rounded-full overflow-hidden p-[2px] border border-[#47464f]/30">
                        <div
                          className="h-full bg-gradient-to-r from-[#c4c1fb] to-[#4edea3] rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#0a0a0c]/80 border border-[#47464f]/30 rounded-lg text-center font-mono">
                  <span className="block text-[9px] text-[#c8c5d0] uppercase tracking-widest mb-1">
                    SHA-256 Checksum
                  </span>
                  <span className="text-[10px] text-[#4edea3] font-semibold break-all leading-relaxed">
                    f81e8c4e09f58dc981ef458a2d1e53ec9103e5a59f1c7d24ab97072a392de49b
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Security by Design & Cryptographic Proof */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-[#47464f]/20">
        {/* Cybernetic background graphic */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none break-all select-none hidden lg:block font-mono text-[60px] leading-none text-[#c8c5d0] max-w-[40%]">
          01100101 01110110 01101001 01100100 01100101 01101110 01100011
          01100101
        </div>

        {/* Ambient gradient glow */}
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-[#c4c1fb]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Column 1: Live Cryptographic Upload & Hash Terminal */}
            <div className="relative bg-[#121118]/90 backdrop-blur-xl border border-[#47464f]/40 rounded-xl p-6 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[460px] group hover:border-[#c4c1fb]/30 transition-all duration-300">
              {/* Terminal Header */}
              <div>
                <div className="flex items-center justify-between border-b border-[#47464f]/30 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                    <span className="font-mono text-xs text-[#4edea3] font-bold tracking-wider">
                      SECURE_UPLOAD_VAL_DAEMON_v2
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#47464f]/60"></span>
                    <span className="w-2 h-2 rounded-full bg-[#47464f]/60"></span>
                    <span className="w-2 h-2 rounded-full bg-[#47464f]/60"></span>
                  </div>
                </div>

                {/* Cryptographic Command Logs */}
                <div className="font-mono text-[11px] text-[#c4c1fb]/90 space-y-2.5 leading-relaxed">
                  <div className="flex items-center gap-2">
                    <span className="text-[#c4c1fb]/40">&gt;&gt;</span>
                    <span>INITIATING SECURE DATA TRANSIT TO GATEWAY_EU_09</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#c4c1fb]/40">&gt;&gt;</span>
                    <span className="text-white">READING FILE:</span>
                    <span className="text-[#c8c5d0]">
                      evid_archive_99201.zip.gpg
                    </span>
                  </div>
                  <div className="pl-6 border-l border-[#47464f]/30 space-y-1 text-[#c8c5d0]/75">
                    <div>[DATA_BLOCK_01] Payload size: 14.82 MB</div>
                    <div>
                      [DATA_BLOCK_02] Compression: Gzip archive format (v1.12)
                    </div>
                    <div>
                      [DATA_BLOCK_03] Cryptographic wrapper: OpenPGP Standard
                      (RFC 4880)
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#4edea3]">
                    <span className="material-symbols-outlined text-[14px]">
                      done
                    </span>
                    <span>PRE-UPLOAD INTEGRITY HASH DETERMINED (SHA-256):</span>
                  </div>
                  <div className="bg-[#0a0a0c] p-2.5 rounded border border-[#47464f]/30 font-mono text-[10px] text-[#4edea3] break-all leading-normal">
                    SHA256:
                    f81e8c4e09f58dc981ef458a2d1e53ec9103e5a59f1c7d24ab97072a392de49b
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#c4c1fb]/40">&gt;&gt;</span>
                    <span>
                      MUTUAL TLS HANDSHAKE ESTABLISHED: 256-bit AES-GCM
                      (TLS_1_3)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-[#c4c1fb]/40">&gt;&gt;</span>
                    <span className="animate-pulse">
                      STREAMING DATA ENVELOPE... OK [RECEIPT ACQUIRED]
                    </span>
                  </div>
                </div>
              </div>

              {/* Sync Footer */}
              <div className="mt-8 pt-4 border-t border-[#47464f]/30">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8c5d0]">
                    e-Evidence Receipt Logging
                  </span>
                  <span className="text-[#4edea3] text-[10px] font-mono font-bold tracking-widest flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] animate-spin">
                      sync
                    </span>
                    ANCHORED // IMMUTABLE
                  </span>
                </div>
                <div className="h-1.5 w-full bg-[#0a0a0c] rounded-full overflow-hidden border border-[#47464f]/30">
                  <div className="h-full bg-gradient-to-r from-[#c4c1fb] to-[#4edea3] w-full shadow-[0_0_8px_#4edea3]/50"></div>
                </div>
              </div>
            </div>

            {/* Column 2: Pillars and Value Description */}
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#c4c1fb] uppercase font-bold bg-[#c4c1fb]/10 px-3 py-1 rounded-full">
                Chain-of-Custody Assurance
              </span>
              <h2 className="text-3xl font-extrabold text-white mb-6 font-sans tracking-tight mt-4">
                Security by Design
              </h2>
              <p className="text-[#c8c5d0] mb-10 leading-relaxed text-lg">
                We completely eliminate the risk of chain-of-custody
                contamination. Every byte of evidence entering, processed
                within, or uploaded from the ecosystem undergoes immediate
                programmatic anchoring and validation.
              </p>

              {/* Security Pillars List */}
              <ul className="space-y-6">
                {[
                  {
                    icon: "verified",
                    title: "Pre-Upload SHA-256 Checksums",
                    desc: "Before transfer occurs, a hardware-level cryptographic hash is run locally. This establishes a baseline fingerprint, ensuring identical files are matched and verified at destination.",
                  },
                  {
                    icon: "vpn_lock",
                    title: "Encrypted Transmission Pipelines",
                    desc: "Payloads travel within TLS 1.3 mutual-authenticated tunnels, ensuring all uploaded evidence files are kept invisible to bad actors and third parties.",
                  },
                  {
                    icon: "history_toggle_off",
                    title: "LIMA-Compliant Audit Ledger",
                    desc: "All activities—from upload requests to system validation signatures—are recorded on an unalterable log, delivering seamless compliance with LIMA and European judicial auditing specs.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 group">
                    <div className="p-2.5 bg-[#121118] border border-[#47464f]/40 rounded-lg text-[#c4c1fb] shrink-0 flex items-center justify-center w-11 h-11 group-hover:bg-[#c4c1fb]/10 group-hover:border-[#c4c1fb]/30 transition-all duration-300">
                      <span className="material-symbols-outlined text-xl">
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm font-sans tracking-tight">
                        {item.title}
                      </div>
                      <p className="text-xs text-[#c8c5d0] mt-1.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Challenges CSPs Face & The Platform Solution */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-[#47464f]/20">
        {/* Left & Right peripheral glow overlays */}
        <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-[#4edea3]/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#c4c1fb]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#c4c1fb] uppercase font-bold bg-[#c4c1fb]/10 px-3.5 py-1.5 rounded-full">
              Enterprise Problem Solved
            </span>
            <h2 className="text-4xl font-extrabold text-white font-sans mt-5 tracking-tight">
              Overcoming Critical CSP Compliance Hurdles
            </h2>
            <p className="text-[#c8c5d0] mt-3 text-lg leading-relaxed">
              Manual uploads, arbitrary file size limits, and fragmented portals
              introduce severe compliance risks. We automate the friction away.
            </p>
          </div>

          {/* Challenges & Ingestion Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "alarm",
                title: "8h Emergency Deadlines",
                challenge:
                  "Manual monitoring risks miss-classified priority cases.",
                solution:
                  "Intelligent AI-triage categorizes, isolates, and flags incoming EPOCs instantly.",
                accentColor: "border-t-[#c4c1fb]",
              },
              {
                icon: "upload_file",
                title: "Unstable Upload Portals",
                challenge:
                  "Uploading multi-GB data breaks on fragile judicial portals.",
                solution:
                  "Our resilient pipeline utilizes chunked, resumable uploads with automatic retries.",
                accentColor: "border-t-[#4edea3]",
              },
              {
                icon: "hub",
                title: "Fragmented EU Systems",
                challenge:
                  "Interfacing with 27 unique regional secure communications setups.",
                solution:
                  "A unified, compliant gateway mapping directly into the decentralized EU e-CODEX protocol.",
                accentColor: "border-t-[#c4c1fb]",
              },
              {
                icon: "privacy_tip",
                title: "GDPR Exposure Risks",
                challenge:
                  "Broad bulk exports accidentally over-disclose non-target PII.",
                solution:
                  "Precision data redaction tools filter outputs to guarantee strict legal data minimization.",
                accentColor: "border-t-[#4edea3]",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`p-8 bg-[#121118]/90 backdrop-blur-xl border border-[#47464f]/30 rounded-xl ${card.accentColor} border-t-4 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-2xl hover:border-t-white`}
              >
                <div>
                  {/* Icon & Label */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="material-symbols-outlined text-[#c4c1fb] text-3xl group-hover:scale-110 transition-transform">
                      {card.icon}
                    </span>
                    <span className="font-mono text-[10px] text-[#c8c5d0]/40 font-extrabold">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-white font-extrabold mb-4 font-sans text-lg tracking-tight">
                    {card.title}
                  </h4>

                  {/* Visual Problem/Solution Breakdowns */}
                  <div className="space-y-4 text-xs">
                    <div className="border-l-2 border-[#ef4444]/40 pl-3">
                      <span className="block text-[9px] font-mono text-[#ef4444] uppercase tracking-wider font-bold mb-0.5">
                        The Friction
                      </span>
                      <p className="text-[#c8c5d0] leading-relaxed">
                        {card.challenge}
                      </p>
                    </div>

                    <div className="border-l-2 border-[#4edea3]/40 pl-3">
                      <span className="block text-[9px] font-mono text-[#4edea3] uppercase tracking-wider font-bold mb-0.5">
                        Platform Resolution
                      </span>
                      <p className="text-white font-medium leading-relaxed">
                        {card.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer Tag */}
                <div className="pt-6 border-t border-[#47464f]/20 mt-6 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#c8c5d0] uppercase tracking-widest">
                    Pipeline Integration
                  </span>
                  <span className="material-symbols-outlined text-[14px] text-[#4edea3] opacity-0 group-hover:opacity-100 transition-opacity">
                    check_circle
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Supplementary Callout Highlight */}
          <div className="mt-12 p-6 bg-[#121118]/50 border border-[#47464f]/30 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#c4c1fb] text-3xl bg-[#c4c1fb]/10 p-2.5 rounded-lg">
                shield_lock
              </span>
              <div>
                <h4 className="text-white font-bold text-sm">
                  Need to audit an active production order's transfer session?
                </h4>
                <p className="text-xs text-[#c8c5d0] mt-0.5">
                  Every evidence upload process triggers a parallel tamper-proof
                  transfer log for compliance officers.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#4edea3] bg-[#4edea3]/5 border border-[#4edea3]/20 px-4 py-2 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping" />
              CRYPTO_SECURE_BY_DEFAULT
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Surgical Extraction & Upload Pipeline Feature */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-[#47464f]/20">
        {/* Radial glow background effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1e1b4b]/20 blur-[150px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Proposition & Core Steps */}
            <div className="lg:col-span-5">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#4edea3] uppercase font-bold bg-[#4edea3]/10 px-3.5 py-1.5 rounded-full">
                Deep Forensics Ingestion
              </span>
              <h2 className="text-4xl font-extrabold text-white font-sans mt-5 mb-6 tracking-tight leading-tight">
                Surgical Extraction & Automated Verification
              </h2>
              <p className="text-[#c8c5d0] mb-8 leading-relaxed text-base">
                As soon as files land in our secure bucket, Sentinel executes
                parallel extraction protocols. Our pipeline identifies source
                origins, validates container files, and seals metadata without
                altering a single bit of the original file payload.
              </p>

              {/* Feature Checklists with metadata highlights */}
              <div className="space-y-4">
                {[
                  {
                    title: "Automated Chain-of-Custody (SHA-256)",
                    desc: "Every payload is cryptographically sealed upon hot-ingest.",
                  },
                  {
                    title: "EXIF & Geospatial Parsing",
                    desc: "Locates precise physical origins using embedded EXIF records.",
                  },
                  {
                    title: "Device Fingerprinting (Serial/OS)",
                    desc: "Identifies hardware sources, host OS versions, and camera hardware.",
                  },
                  {
                    title: "Temporal Artifact Alignment",
                    desc: "Cross-checks system create times against global network NTP logs.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#121118]/80 rounded-lg border border-[#47464f]/30 flex items-start gap-3 hover:border-[#c4c1fb]/50 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[#4edea3] mt-0.5 text-xl select-none">
                      check_circle
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#e5e1e6] font-sans">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#c8c5d0] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Terminal & Upload Sandbox Visualizer */}
            <div className="lg:col-span-7 bg-[#121118] border border-[#47464f]/30 rounded-xl p-6 relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#47464f]/30 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#eab308]" />
                  <span className="w-3 h-3 rounded-full bg-[#4edea3]" />
                  <span className="text-xs font-mono text-[#c8c5d0] ml-2">
                    sentinel_ingest_daemon.sh
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#4edea3] bg-[#4edea3]/10 px-2.5 py-1 rounded">
                  ACTIVE PIPELINE
                </span>
              </div>

              {/* Live-action Mock Upload Console */}
              <div className="space-y-6 font-mono text-xs text-white">
                {/* Step 1: Upload File Ingestion */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[#c8c5d0]">
                    <span>[1/3] Uploading evidence payload...</span>
                    <span className="text-[#4edea3]">98.4%</span>
                  </div>
                  <div className="w-full bg-[#1c1b22] h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#c4c1fb] to-[#4edea3] h-full w-[98%] animate-pulse" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-[#c8c5d0]/60">
                    <span>IMG_8841_RAW.HEIC (12.4 MB)</span>
                    <span>Speed: 45.2 MB/s</span>
                  </div>
                </div>

                {/* Step 2: Integrity & Sealing */}
                <div className="p-4 bg-[#1c1b22]/80 border border-[#47464f]/20 rounded-lg space-y-2.5">
                  <div className="flex items-center gap-2 text-[#4edea3]">
                    <span className="material-symbols-outlined text-sm animate-spin">
                      sync
                    </span>
                    <span className="font-bold text-[11px] tracking-wide uppercase">
                      Verifying Cryptographic Lock
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px] text-[#c8c5d0]">
                    <div className="col-span-1">SHA-256 Hash:</div>
                    <div className="col-span-2 text-white truncate font-bold bg-[#121118] px-2 py-0.5 rounded border border-[#47464f]/10">
                      f3e1a89c7b52011d4e5f6a2c...
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px] text-[#c8c5d0]">
                    <div className="col-span-1">Chain of Custody:</div>
                    <div className="col-span-2 text-[#4edea3] font-bold">
                      ✓ Recorded on Ledger (Time: 2026-07-16 22:45 UTC)
                    </div>
                  </div>
                </div>

                {/* Step 3: Extracted Artifact Cards */}
                <div className="space-y-3">
                  <div className="text-[10px] text-[#c8c5d0]/60 uppercase tracking-wider font-bold">
                    [2/3] Extraction Output Nodes
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Node A: Spatial Map */}
                    <div className="p-4 bg-[#121118] border border-[#47464f]/40 hover:border-[#c4c1fb] transition-colors rounded-lg flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#c4c1fb]/10 flex items-center justify-center text-[#c4c1fb] shrink-0">
                        <span className="material-symbols-outlined text-xl">
                          location_on
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-[9px] text-[#c8c5d0] uppercase tracking-wider font-bold">
                          Geospatial Lock
                        </div>
                        <div className="text-xs font-bold text-white truncate mt-0.5">
                          52.3676° N, 4.9041° E
                        </div>
                        <div className="text-[10px] text-[#4edea3] mt-0.5 font-medium">
                          Amsterdam, NL
                        </div>
                      </div>
                    </div>

                    {/* Node B: Hardware fingerprint */}
                    <div className="p-4 bg-[#121118] border border-[#47464f]/40 hover:border-[#4edea3] transition-colors rounded-lg flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#4edea3]/10 flex items-center justify-center text-[#4edea3] shrink-0">
                        <span className="material-symbols-outlined text-xl">
                          devices
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-[9px] text-[#c8c5d0] uppercase tracking-wider font-bold">
                          Device Fingerprint
                        </div>
                        <div className="text-xs font-bold text-white truncate mt-0.5">
                          iPhone 15 Pro Max
                        </div>
                        <div className="text-[10px] text-[#c8c5d0]/70 mt-0.5 font-medium">
                          iOS 17.4 // Serial #F8...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Action State */}
                <div className="flex items-center justify-between text-[11px] pt-4 border-t border-[#47464f]/30 mt-4 text-[#c8c5d0]/60">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4edea3]" />
                    Metadata sealed in escrow
                  </span>
                  <span className="text-[#4edea3] font-bold">
                    READY TO EXPORT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Hardware Write-Blocker & Direct Ingest */}
      <section className="py-24 bg-[#0d0c11] relative overflow-hidden border-t border-[#47464f]/20">
        {/* Peripheral backdrop glows */}
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-[#c4c1fb]/5 blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-[300px] h-[300px] rounded-full bg-[#4edea3]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Forensic Hardware Interface HUD */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative aspect-video bg-[#121118] border border-[#47464f]/40 rounded-xl overflow-hidden group">
                {/* Hardware Visual Layer */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgJU5RBhtJk79pIUI4984DKQwytO8dcuCAtLkeLvmRyvEmcaARgMhSvNpJlq9G_dMhQPRtg0Q3TjJfl-PMzJHNLBqPXpBOPINiJNGGktsicLB2WTENNEcfDq8sunhFGXqzAOvd2ZgUncB5tZmB42IIf2VdwNrSRpD-EiBtpfR7BKT77G-fZ-k_fBLqDA9havOgjU38s6GOMbFtO6AMt9nLc6t2DylqDSIS6948Kb7ZISj6D6WDV7Cr')",
                  }}
                />

                {/* Absolute Overlays (Status Badges) */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-[#4edea3] text-[#0d0c11] text-[10px] font-mono font-extrabold rounded uppercase tracking-wider">
                      Hardware Block Active
                    </span>
                    <span className="text-[10px] font-mono text-[#c8c5d0] bg-[#121118]/90 border border-[#47464f]/50 px-2.5 py-1 rounded backdrop-blur">
                      Device: /dev/sdb1 (Raw Image)
                    </span>
                  </div>

                  {/* Simulated Live Block Buffer Console */}
                  <div className="bg-[#0c0a0f]/95 border border-[#47464f]/50 p-4 rounded-lg backdrop-blur-md font-mono text-[11px] text-[#c8c5d0] space-y-2">
                    <div className="flex items-center justify-between text-white border-b border-[#47464f]/20 pb-1.5 mb-1.5">
                      <span className="flex items-center gap-1.5 font-bold">
                        <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping" />
                        BIT-STREAM STREAMING
                      </span>
                      <span className="text-[#4edea3]">512 KB Blocks</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Inbound Rate:</span>
                      <span className="text-white font-bold">482 MB/s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Write Commands Rejected:</span>
                      <span className="text-[#ef4444] font-bold">
                        4,192 (BLOCKED)
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-[#47464f]/20 pt-1.5 text-[10px]">
                      <span>E01 Evidence Container:</span>
                      <span className="text-[#c4c1fb] font-bold truncate max-w-[150px]">
                        SECURE_CASE_902_IMAGE.E01
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic upload indicator bar below image container */}
              <div className="p-4 bg-[#121118]/80 border border-[#47464f]/30 rounded-lg flex items-center justify-between text-xs font-mono">
                <span className="text-[#c8c5d0] flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-[#4edea3]">
                    cloud_upload
                  </span>
                  Direct Tunneling to cloud EvidenceVault
                </span>
                <span className="text-[#4edea3] font-bold">TUNNEL SECURE</span>
              </div>
            </div>

            {/* Right Column: Copywriting & Compliance Badges */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#c4c1fb] uppercase font-bold bg-[#c4c1fb]/10 px-3.5 py-1.5 rounded-full">
                  Zero-Write Integrity Protection
                </span>
                <h2 className="text-4xl font-extrabold text-white font-sans mt-5 mb-6 tracking-tight leading-tight">
                  Direct Physical-to-Cloud Ingest Engine
                </h2>
                <p className="text-[#c8c5d0] text-base leading-relaxed mb-6">
                  When handling raw storage media, hard drives, or system cards,
                  Sentinel integrates natively with enterprise write-block
                  hardware. Stream bit-perfect disk images directly into the
                  encrypted EvidenceVault while keeping a cryptographic ledger
                  record of the transfer from block zero.
                </p>
                <p className="text-[#c8c5d0] text-sm leading-relaxed">
                  By avoiding intermediary temporary operating systems during
                  disk imaging, our platform eliminates filesystem auto-mount
                  risks, keeping target file modification metadata absolutely
                  untouched.
                </p>
              </div>

              {/* Trust Badges & Compliances */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "FIPS 140-3 Cryptography",
                    desc: "Military-grade data protection parameters active on ingestion links.",
                  },
                  {
                    title: "NIST SP 800-88 Standards",
                    desc: "Ensures media storage handling, sanitization, and imaging align with defense directives.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#121118]/60 border border-[#c4c1fb]/20 rounded-lg group hover:border-[#4edea3]/50 transition-all duration-300"
                  >
                    <h4 className="text-[#c4c1fb] font-bold text-sm tracking-tight group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#c8c5d0] mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: ROI / Admissibility Stats */}
      <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-[#47464f]/20">
        {/* Left peripheral decorative glow */}
        <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-[#4edea3]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#4edea3] uppercase font-bold bg-[#4edea3]/10 px-3.5 py-1.5 rounded-full">
              Performance Metrics
            </span>
            <h2 className="text-3xl font-extrabold text-white font-sans mt-5 tracking-tight">
              Proven Integrity at Scale
            </h2>
            <p className="text-sm text-[#c8c5d0] mt-3 leading-relaxed">
              Our automated upload and extraction systems eliminate user
              bottlenecks, proving bulletproof admissibility inside the
              courtroom.
            </p>
          </div>

          {/* Metric Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Metric Cards Column */}
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
              {[
                {
                  metric: "99.9%",
                  title: "Network Loss Recovery",
                  desc: "Resumable chunked upload mechanics bypass unstable WANs, preventing corrupted file streams.",
                  color: "text-[#4edea3]",
                  subtext: "Auto-retry active",
                  badgeIcon: "wifi_tethering",
                },
                {
                  metric: "100%",
                  title: "Court Admissibility",
                  desc: "Every upload is instantly sealed with SHA-256 and stored on an immutable, unalterable log.",
                  color: "text-[#c4c1fb]",
                  subtext: "NIST-compliant seal",
                  badgeIcon: "gavel",
                },
                {
                  metric: "0ms",
                  title: "Processing Blockers",
                  desc: "Deep file extraction runs concurrently alongside data ingestion to avoid cold queues.",
                  color: "text-[#4edea3]",
                  subtext: "Parallel pipeline",
                  badgeIcon: "bolt",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-[#121118]/80 border border-[#47464f]/30 rounded-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header Badge */}
                    <div className="flex items-center justify-between mb-6 text-[#c8c5d0]/50">
                      <span className="material-symbols-outlined text-lg">
                        {stat.badgeIcon}
                      </span>
                      <span className="text-[9px] font-mono tracking-widest uppercase">
                        {stat.subtext}
                      </span>
                    </div>

                    {/* Large Metric */}
                    <div
                      className={`${stat.color} text-5xl font-extrabold mb-4 font-sans tracking-tight`}
                    >
                      {stat.metric}
                    </div>

                    {/* Title */}
                    <h4 className="text-white font-bold mb-3 font-sans text-sm tracking-tight">
                      {stat.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#c8c5d0] leading-relaxed mt-2">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Side: Key Ingestion Admissibility Callout */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#121118] to-[#1e1b4b]/20 border border-[#c4c1fb]/20 rounded-xl p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#c4c1fb]/10 flex items-center justify-center text-[#c4c1fb]">
                  <span className="material-symbols-outlined text-2xl">
                    verified_user
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white font-sans tracking-tight">
                  Real-Time Integrity Certificates
                </h4>

                <p className="text-xs text-[#c8c5d0] leading-relaxed">
                  Every upload payload is instantly checked for cryptographic
                  consistency against the initial intake parameters. A digital
                  verification cert is generated on-the-fly, giving defense
                  counsel and prosecuting bodies an immediate verified audit
                  trail.
                </p>
              </div>

              {/* Live Mock Verification Box */}
              <div className="mt-8 pt-6 border-t border-[#47464f]/30 space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#c8c5d0]/60">Verification Hash</span>
                  <span className="text-[#4edea3]">PASSED</span>
                </div>
                <div className="p-3 bg-[#0c0a0f] rounded border border-[#47464f]/30 font-mono text-[10px] text-white break-all">
                  AES256::e01_checksum_667b938c41de0
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Regulatory FAQ */}
      <section className="py-24 bg-[#0d0c11] relative overflow-hidden border-t border-[#47464f]/20">
        {/* Peripheral glow effects */}
        <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-[#1e1b4b]/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#4edea3]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#4edea3] uppercase font-bold bg-[#4edea3]/10 px-3.5 py-1.5 rounded-full">
              Legal & Ingest Guardrails
            </span>
            <h2 className="text-4xl font-extrabold text-white font-sans mt-5 tracking-tight">
              Regulatory & Upload FAQ
            </h2>
            <p className="text-[#c8c5d0] mt-3 text-lg leading-relaxed">
              Everything you need to know about processing judicial mandates,
              securing chain of custody, and resolving transport anomalies.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                q: "Which data types can be requested and uploaded?",
                a: "Subscriber, traffic, and content data depending on the order. Our interface accepts direct file drops of database dumps, target server logs, raw disk images (.E01, .raw), or chat logs, mapping each payload to the specific scope of the judicial order.",
              },
              {
                q: "What happens if a giant evidence upload drops mid-transfer?",
                a: "Our network stack utilizes resumable, chunked upload mechanics. If a connection fails while transferring a 100GB target drive image, the pipeline pauses and automatically picks up at the exact block offset when communication is re-established—preventing data corruption.",
              },
              {
                q: "What are the legal compliance timeframes for uploads?",
                a: "You must fully process and upload verified outputs within 10 days for standard orders. Critical emergency orders involving immediate risk to life (EPOCs) must be completely uploaded, sealed, and delivered within a strict 8-hour window.",
              },
              {
                q: "How does the platform prove evidence wasn't altered post-upload?",
                a: "At the millisecond of complete upload ingestion, Sentinel automatically issues a cryptographically secure, SHA-256 matched metadata cert. This digital fingerprint is recorded to an unalterable immutable ledger, acting as concrete admissibility proof in court.",
              },
              {
                q: "How long must target data be preserved on our servers?",
                a: "Data must be preserved locally or in cold secure cloud storage for up to 90 days under a Preservation Order. If a formal Production Order is finalized, our pipeline handles the automatic promotion and secure upload of that data to the requesting court.",
              },
              {
                q: "What are the penalties for delayed or broken upload compliance?",
                a: "Failure to produce evidence, missing deadlines, or transmitting broken data chains can lead to immediate contempt actions, legal liability, and regulatory fines reaching up to 2% of global annual corporate revenues.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#121118]/80 backdrop-blur-xl border border-[#47464f]/30 hover:border-[#c4c1fb]/50 rounded-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Question Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <span className="w-6 h-6 rounded bg-[#c4c1fb]/10 flex items-center justify-center text-[#c4c1fb] font-mono text-xs font-bold shrink-0 mt-0.5">
                      Q
                    </span>
                    <h4 className="text-white font-extrabold font-sans text-base leading-tight tracking-tight group-hover:text-[#c4c1fb] transition-colors">
                      {item.q}
                    </h4>
                  </div>

                  {/* Answer Content */}
                  <p className="text-xs text-[#c8c5d0] leading-relaxed pl-10">
                    {item.a}
                  </p>
                </div>

                {/* Secure Verified Badge Footer */}
                <div className="pl-10 mt-6 pt-4 border-t border-[#47464f]/20 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#c8c5d0]/50 uppercase tracking-wider">
                    Protocol Audit Reference
                  </span>
                  <div className="flex items-center gap-1 text-[#4edea3] font-bold">
                    <span className="material-symbols-outlined text-[12px]">
                      security
                    </span>
                    SECURED_NODE
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Need help callout box */}
          <div className="mt-16 p-6 bg-[#121118]/40 border border-[#47464f]/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#c4c1fb] text-3xl">
                help_outline
              </span>
              <div className="text-left">
                <h4 className="text-white font-bold text-sm">
                  Have specific local regulatory compliance queries?
                </h4>
                <p className="text-xs text-[#c8c5d0] mt-0.5">
                  Our legal engineering group can assist in configuring local
                  sovereign region rules for custom edge deployments.
                </p>
              </div>
            </div>
            <button className="px-5 py-2.5 bg-white text-black font-bold text-xs rounded hover:bg-neutral-200 transition-colors whitespace-nowrap">
              Contact Compliance Team
            </button>
          </div>
        </div>
      </section>

      {/* Section 11: Compliance & Evidence Handshake Badges */}
      <section className="py-20 border-y border-[#47464f]/20 bg-[#0a0a0c] relative overflow-hidden">
        {/* Micro glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#4edea3]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          {/* Micro-header explaining the certs */}
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#c8c5d0]/50 uppercase font-bold">
              Certified Ingest & Storage Architecture
            </span>
          </div>

          {/* Responsive Compliance Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                icon: "verified",
                text: "NIST SP 800-88",
                sub: "Sanitized Storage Media",
                color: "group-hover:text-[#4edea3] group-hover:bg-[#4edea3]/10",
              },
              {
                icon: "policy",
                text: "GDPR ARTICLE 32",
                sub: "Data Transmit Redaction",
                color: "group-hover:text-[#c4c1fb] group-hover:bg-[#c4c1fb]/10",
              },
              {
                icon: "cloud_done",
                text: "ISO/IEC 27037",
                sub: "Digital Evidence Handling",
                color: "group-hover:text-[#4edea3] group-hover:bg-[#4edea3]/10",
              },
              {
                icon: "security",
                text: "FIPS 140-3 L4",
                sub: "Hardware-Level Encryption",
                color: "group-hover:text-[#c4c1fb] group-hover:bg-[#c4c1fb]/10",
              },
              {
                icon: "gavel",
                text: "CJS COMPLIANT",
                sub: "Admissible Legal Standards",
                color: "group-hover:text-[#4edea3] group-hover:bg-[#4edea3]/10",
              },
              {
                icon: "dns",
                text: "SOC 2 TYPE II",
                sub: "Secure Upload Vaulting",
                color: "group-hover:text-[#c4c1fb] group-hover:bg-[#c4c1fb]/10",
              },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center p-6 bg-[#121118]/40 border border-[#47464f]/20 hover:border-[#47464f]/60 hover:bg-[#121118]/90 hover:-translate-y-1 rounded-xl transition-all duration-300 select-none cursor-default"
              >
                {/* Icon Container */}
                <div
                  className={`w-12 h-12 rounded-lg bg-[#47464f]/10 text-[#c8c5d0] flex items-center justify-center mb-4 transition-all duration-300 ${badge.color}`}
                >
                  <span className="material-symbols-outlined text-2xl transition-transform group-hover:scale-110">
                    {badge.icon}
                  </span>
                </div>

                {/* Compliance Name */}
                <span className="font-sans font-extrabold text-[11px] uppercase tracking-wider text-white">
                  {badge.text}
                </span>

                {/* Upload Security Scope */}
                <span className="font-mono text-[9px] text-[#c8c5d0]/60 mt-1.5 leading-snug">
                  {badge.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section with Live Secure Upload Visualizer */}
      <section className="py-32 relative overflow-hidden bg-[#07060a] border-t border-[#47464f]/30">
        {/* Modern dot-matrix and radial gradient background overlay */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "radial-gradient(#c4c1fb 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Giant ambient peripheral glows */}
        <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#1e1b4b]/45 blur-[140px] pointer-events-none" />
        <div className="absolute top-12 right-12 w-96 h-96 rounded-full bg-[#4edea3]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Direct Action & Compliance Callout */}
            <div className="lg:col-span-7 text-left space-y-8">
              <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-[#4edea3] uppercase font-bold bg-[#4edea3]/10 px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping" />
                EU Regulation Enforcement Countdown
              </span>

              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter font-sans leading-tight">
                Ready for the September 2026 Mandates?
              </h2>

              <p className="text-[#c8c5d0] text-lg max-w-xl leading-relaxed">
                The countdown has begun. Secure your ingestion pipeline now,
                automate high-volume legal uploads, and ensure absolute
                compliance with the new EU e-Evidence regulations before the
                deadline sweeps.
              </p>

              {/* Dynamic CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-4 rounded-lg font-bold text-base transition-all duration-300 shadow-lg shadow-[#4f46e5]/20 hover:-translate-y-0.5 whitespace-nowrap">
                  Start Compliance Audit
                </button>
                <button className="border border-[#47464f]/80 text-white bg-[#121118]/50 hover:bg-[#121118] px-8 py-4 rounded-lg font-bold text-base transition-all duration-300 hover:border-white whitespace-nowrap">
                  Request Technical Demo
                </button>
              </div>
            </div>

            {/* Right Column: Immersive Upload Dropzone Simulator */}
            <div className="lg:col-span-5">
              <div className="p-6 bg-[#121118]/90 border border-[#c4c1fb]/20 rounded-xl relative overflow-hidden group hover:border-[#4edea3]/40 transition-all duration-500 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4edea3]/5 rounded-full blur-2xl pointer-events-none" />

                {/* Internal Drag-and-Drop Area */}
                <div className="border-2 border-dashed border-[#47464f]/60 group-hover:border-[#4edea3]/40 rounded-lg p-6 bg-[#0c0a0f]/80 transition-colors text-center space-y-4">
                  {/* Upload Icon Loop */}
                  <div className="w-12 h-12 rounded-full bg-[#c4c1fb]/10 text-[#c4c1fb] group-hover:text-[#4edea3] group-hover:bg-[#4edea3]/10 flex items-center justify-center mx-auto transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
                      cloud_upload
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-white font-bold text-sm">
                      Secure Evidence Dropzone
                    </h4>
                    <p className="text-[11px] text-[#c8c5d0]/70">
                      Drag raw disk images, logs, or payload dumps here
                    </p>
                  </div>

                  {/* Micro-Verification Tags */}
                  <div className="pt-2 flex flex-wrap justify-center gap-2 text-[9px] font-mono">
                    <span className="bg-[#1c1b22] border border-[#47464f]/30 text-[#c8c5d0] px-2.5 py-1 rounded">
                      SHA-256 CHECK
                    </span>
                    <span className="bg-[#1c1b22] border border-[#47464f]/30 text-[#c8c5d0] px-2.5 py-1 rounded">
                      E01 COMPLIANT
                    </span>
                    <span className="bg-[#1c1b22] border border-[#47464f]/30 text-[#4edea3] px-2.5 py-1 rounded font-bold">
                      AES-256 VAULTED
                    </span>
                  </div>
                </div>

                {/* Real-Time Queue Ingest Status */}
                <div className="mt-6 pt-4 border-t border-[#47464f]/30 space-y-3 font-mono text-[11px] text-[#c8c5d0]">
                  <div className="flex justify-between items-center text-[10px] text-[#c8c5d0]/50 uppercase tracking-wider">
                    <span>Active Intake Connection</span>
                    <span className="text-[#4edea3] animate-pulse flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
                      STANDBY
                    </span>
                  </div>

                  <div className="p-3 bg-[#0c0a0f] border border-[#47464f]/20 rounded-md flex justify-between items-center text-xs text-white">
                    <div className="flex items-center gap-2 truncate max-w-[200px]">
                      <span className="material-symbols-outlined text-sm text-[#c4c1fb]">
                        draft
                      </span>
                      <span className="truncate">EPOC_MANDATE_009.E01</span>
                    </div>
                    <span className="text-[10px] text-[#4edea3] font-bold">
                      READY TO STREAM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
