import React, { useEffect, useRef } from "react";

const StatusTracking: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  // Load the fonts this design depends on (Inter, JetBrains Mono, Material Symbols)
  useEffect(() => {
    const links: HTMLLinkElement[] = [];
    const add = (href: string) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
      links.push(link);
    };
    add(
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
    );
    add(
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    );
    return () => {
      links.forEach((l) => l.remove());
    };
  }, []);

  // Micro-interaction: track mouse position over each glass card for the hover glow
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>(".glass-card"));
    const handlers: Array<{ el: HTMLElement; fn: (e: MouseEvent) => void }> =
      [];

    cards.forEach((card) => {
      const fn = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      };
      card.addEventListener("mousemove", fn);
      handlers.push({ el: card, fn });
    });

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener("mousemove", fn));
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="font-['Inter'] text-[#e5e1e6] selection:bg-[#c4c1fb] selection:text-[#2d2a5b] bg-[#131316] min-h-screen"
    >
      <style>{`
        .glass-card {
          background: rgba(30, 27, 75, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(46, 42, 110, 0.5);
        }
        .security-blur-footer {
          background: linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent);
          backdrop-filter: blur(4px);
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #2E2A6E; border-radius: 2px; }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-animate { animation: ticker 40s linear infinite; }

        @keyframes pulse-ring {
          0% { transform: scale(0.33); }
          80%, 100% { opacity: 0; }
        }
        @keyframes pulse-dot {
          0% { transform: scale(0.8); }
          50% { transform: scale(1); }
          100% { transform: scale(0.8); }
        }
        .animate-pulse-ring { animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite; }
        .animate-pulse-dot { animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite; }

        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-feature-settings: 'liga';
          font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
        }
      `}</style>

      <main>
        <section className="relative min-h-screen flex items-center overflow-hidden px-8 py-24">
          <div className="absolute inset-0 z-0">
            <img
              alt="Global forensic intelligence network"
              className="w-full h-full object-cover opacity-40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjuY28OBHchQNUF7cRKlMKNnRR1OQBb3r2F8BeOER8H_ZfJoFpB_p4HnBZaS6Gg36bJnZIbe-_4hym3JqQFpijgGqbKPTJTHRN1sxr5HlM06K2Gprdk2w1kKEm-bLD5ex5KlrRrnHx6KkMAGj6NlJIT_2ftsh98s6m63CnO3iQ1jB4hNwuR3zlZteKRyV94B54wtVScxVG9Z86FexHhgMV93o6Pvdzy98SzEkaolo7YkERFZ5rtJn74w"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#131316] via-[#131316]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-[#131316]/40 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[0.75rem] bg-[#c4c1fb]/10 text-[#c4c1fb] font-['JetBrains_Mono'] text-[12px] leading-[16px] font-medium border border-[#c4c1fb]/20">
                <span className="material-symbols-outlined text-[14px] animate-spin-slow">
                  settings_backup_restore
                </span>
                SENTINEL INTEGRITY SYSTEM ACTIVE
              </div>
              <h1 className="font-['Inter'] text-[48px] leading-[56px] tracking-[-0.02em] font-bold leading-tight tracking-tight">
                Forecasting the Investigation with{" "}
                <span className="text-[#c4c1fb]">Predictive Intelligence</span>
              </h1>
              <p className="font-['Inter'] text-[14px] leading-[20px] font-normal text-[#c8c5d0] max-w-xl">
                High-fidelity executive oversight powered by predictive artifact
                analytics. Anticipate bottlenecks, verify integrity, and
                maintain absolute transparency across global forensic workflows
                with surgical precision.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-[#c4c1fb] text-[#2d2a5b] font-bold rounded-[0.125rem] hover:shadow-[0_0_20px_rgba(196,193,251,0.4)] transition-all">
                  Initialize Analysis
                </button>
                <button className="px-8 py-3 bg-[#2a292d] border border-[#47464f] font-bold rounded-[0.125rem] hover:bg-[#353438] transition-colors">
                  View Protocols
                </button>
                <button className="px-4 py-3 text-[#c4c1fb] font-['JetBrains_Mono'] text-[12px] leading-[16px] font-medium flex items-center gap-2 hover:underline">
                  <span className="material-symbols-outlined">terminal</span>
                  Access CLI
                </button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="glass-card p-8 rounded-2xl border border-[#c4c1fb]/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c4c1fb]/10 blur-3xl rounded-[0.75rem] -mr-16 -mt-16"></div>
                <h3 className="font-['JetBrains_Mono'] text-[12px] leading-[16px] font-medium text-[#c4c1fb] mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    monitoring
                  </span>
                  LIVE SYSTEM METRICS
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-[#47464f] pb-4">
                    <div>
                      <p className="text-[12px] leading-[16px] font-normal text-[#c8c5d0] uppercase tracking-widest">
                        Active Nodes
                      </p>
                      <p className="font-['JetBrains_Mono'] text-2xl font-bold">
                        4,812
                      </p>
                    </div>
                    <div className="text-[#4edea3] font-['JetBrains_Mono'] text-xs">
                      +12.4% / hr
                    </div>
                  </div>
                  <div className="flex justify-between items-end border-b border-[#47464f] pb-4">
                    <div>
                      <p className="text-[12px] leading-[16px] font-normal text-[#c8c5d0] uppercase tracking-widest">
                        Throughput
                      </p>
                      <p className="font-['JetBrains_Mono'] text-2xl font-bold">
                        1.2 PB/s
                      </p>
                    </div>
                    <div className="text-[#c4c1fb] font-['JetBrains_Mono'] text-xs">
                      PEAK LOAD
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[12px] leading-[16px] font-normal text-[#c8c5d0] uppercase tracking-widest">
                        Integrity Status
                      </p>
                      <p className="font-['JetBrains_Mono'] text-2xl font-bold text-[#4edea3]">
                        Verified
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-[#4edea3]">
                      verified_user
                    </span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-[#47464f]">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-[0.75rem] bg-[#4edea3] animate-pulse"></div>
                    <p className="text-[10px] font-['JetBrains_Mono'] text-[#928f9a] uppercase">
                      Real-time stream: Connected to Global Core
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-[#0e0e11]/80 backdrop-blur-md border-t border-[#47464f] py-3 overflow-hidden">
            <div className="flex whitespace-nowrap ticker-animate gap-12 items-center">
              <div className="flex items-center gap-4 font-['JetBrains_Mono'] text-[10px] text-[#928f9a]">
                <span className="text-[#c4c1fb]">NODE: EU-WEST-1</span> |{" "}
                <span className="text-[#4edea3]">STATUS: ENCRYPTED</span> |
                SHA-256: 8f2e...91a2
              </div>
              <div className="flex items-center gap-4 font-['JetBrains_Mono'] text-[10px] text-[#928f9a]">
                <span className="text-[#c4c1fb]">NODE: US-EAST-2</span> |{" "}
                <span className="text-[#4edea3]">STATUS: ENCRYPTED</span> |
                SHA-256: 4c11...bb09
              </div>
              <div className="flex items-center gap-4 font-['JetBrains_Mono'] text-[10px] text-[#928f9a]">
                <span className="text-[#c4c1fb]">NODE: AP-SOUTH-1</span> |{" "}
                <span className="text-[#4edea3]">STATUS: ENCRYPTED</span> |
                SHA-256: dd02...ff12
              </div>
              <div className="flex items-center gap-4 font-['JetBrains_Mono'] text-[10px] text-[#928f9a]">
                <span className="text-[#c4c1fb]">NODE: SA-EAST-1</span> |{" "}
                <span className="text-[#4edea3]">STATUS: ENCRYPTED</span> |
                SHA-256: 77ab...cc44
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-8 bg-[#0a0a0c] text-[#f4f3f6] relative overflow-hidden">
          {/* Cybernetic Ambiance Backdrop Grid */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-35">
            <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-[#3a20ff]/5 blur-[160px] rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#4edea3]/5 blur-[180px] rounded-full"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            {/* Header Control Panel */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 pb-6 border-b border-[#1f1e24]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#c4c1fb]/5 border border-[#c4c1fb]/10 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c4c1fb] animate-pulse"></span>
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#c4c1fb]">
                    Federated Orchestration Panel
                  </span>
                </div>
                <h2 className="font-['Inter'] text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                  Executive Command Center
                </h2>
                <p className="text-[#8c8a94] text-sm font-light max-w-xl">
                  High-density telemetry junction for localized legal cluster
                  health matrices and computational cross-examiner saturation
                  indices.
                </p>
              </div>

              {/* Header CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none px-4 py-2.5 bg-[#141318] hover:bg-[#1a191f] border border-[#2d2c33] hover:border-[#35343c] rounded-xl text-xs font-mono font-medium text-[#a5a3af] hover:text-white transition-all">
                  Export Master Audit (CSV)
                </button>
                <button className="flex-1 md:flex-none px-4 py-2.5 bg-[#c3c0ff] hover:bg-[#b5b1ff] text-[#1d00a5] rounded-xl text-xs font-semibold shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    tune
                  </span>{" "}
                  Global Filters
                </button>
              </div>
            </div>

            {/* Core Telemetry Layout Grid */}
            <div className="grid grid-cols-12 gap-6">
              {/* LEFT CONTAINER: Functional Saturation Coordinates Matrix */}
              <div className="col-span-12 lg:col-span-8 bg-[#111014] border border-[#232227] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_24px_50px_-12px_rgba(0,0,0,0.8)]">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-white flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#c4c1fb] text-lg">
                      analytics
                    </span>
                    Global Case Saturation Mapping
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-mono text-[#a5a3af]">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#c4c1fb]"></span>
                      Active Ingestion
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                      Indexed Vaults
                    </span>
                  </div>
                </div>

                {/* Redesigned Structural CSS Heatmap Grid */}
                <div className="flex-grow min-h-[300px] bg-[#0d0c10] border border-[#1f1e24] rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-70"></div>

                  {/* Simulated Interactive Heatmap Blocks Matrix */}
                  <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 h-full w-full relative z-10">
                    {Array.from({ length: 36 }).map((_, idx) => {
                      // Generate distinct procedural mockup fill styles for realism
                      let bgStyle = "bg-[#16151a] border-[#232227]";
                      if (idx === 7 || idx === 14 || idx === 22)
                        bgStyle =
                          "bg-[#93000a]/20 border-[#ffb4ab]/30 shadow-[inset_0_0_8px_rgba(255,180,171,0.1)]";
                      if (idx === 3 || idx === 19 || idx === 32)
                        bgStyle = "bg-[#c4c1fb]/20 border-[#c4c1fb]/30";
                      if (idx === 11 || idx === 25)
                        bgStyle = "bg-[#4edea3]/20 border-[#4edea3]/30";

                      return (
                        <div
                          key={idx}
                          className={`rounded-lg border transition-all duration-300 hover:scale-105 cursor-crosshair flex items-center justify-center ${bgStyle}`}
                        >
                          <span className="text-[8px] font-mono text-[#696775]/0 group-hover:text-[#696775]/40 transition-colors select-none">
                            +{idx}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1f1e24] flex justify-between font-mono text-[9px] text-[#696775] relative z-10">
                    <span>GRID_COORD: 51.5074° N, 0.1278° W</span>
                    <span>HEURISTIC INTERVAL V2</span>
                  </div>
                </div>
              </div>

              {/* RIGHT CONTAINER: Control Alerts Stack & Resources */}
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                {/* Hotspots Component Panel */}
                <div className="bg-[#111014] border border-[#232227] rounded-2xl p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-[11px] font-mono text-[#696775] uppercase tracking-widest mb-4">
                      // CRITICAL INSTANCE HOTSPOTS
                    </h4>
                    <div className="space-y-3">
                      {/* HOTSPOT item 1 */}
                      <div className="flex justify-between items-center p-4 bg-[#16151a] border border-[#232227] rounded-xl border-l-4 border-l-[#ffb4ab] group hover:border-l-8 transition-all">
                        <div className="space-y-0.5">
                          <p className="font-semibold text-sm text-white">
                            Project Alpha-7
                          </p>
                          <p className="text-xs text-[#8c8a94]">
                            London, UK |{" "}
                            <span className="text-[#ffb4ab]">
                              SLA Bottleneck
                            </span>
                          </p>
                        </div>
                        <span className="material-symbols-outlined text-[#ffb4ab] text-lg bg-[#93000a]/10 p-1.5 rounded-lg border border-[#93000a]/20">
                          priority_high
                        </span>
                      </div>

                      {/* HOTSPOT item 2 */}
                      <div className="flex justify-between items-center p-4 bg-[#16151a] border border-[#232227] rounded-xl border-l-4 border-l-[#4edea3] group hover:border-l-8 transition-all">
                        <div className="space-y-0.5">
                          <p className="font-semibold text-sm text-white">
                            Compliance Audit
                          </p>
                          <p className="text-xs text-[#8c8a94]">
                            Singapore |{" "}
                            <span className="text-[#4edea3]">
                              Optimized Curve
                            </span>
                          </p>
                        </div>
                        <span className="material-symbols-outlined text-[#4edea3] text-lg bg-[#00381e]/20 p-1.5 rounded-lg border border-[#00381e]/40">
                          trending_up
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resource Efficiency Tracker Block */}
                <div className="bg-gradient-to-br from-[#121026] to-[#0d0a1a] border border-[#2c2759] rounded-2xl p-6 shadow-inner relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#c4c1fb]/5 blur-[40px] pointer-events-none"></div>

                  <h4 className="text-[11px] font-mono text-[#8683ba] uppercase tracking-wider mb-2">
                    // CAP COMPUTE RATIO
                  </h4>
                  <div className="flex items-baseline gap-2">
                    <div className="text-5xl font-mono font-bold text-[#c4c1fb] tracking-tight group-hover:scale-95 transform origin-left transition-transform">
                      87.4%
                    </div>
                    <span className="text-xs font-mono text-[#4edea3]">
                      ↑ Peak Efficiency
                    </span>
                  </div>
                  <p className="text-xs text-[#8683ba]/80 leading-relaxed mt-3">
                    Maximized execution footprint projected for next 72 hours
                    based on training sets from historical load profiles.
                  </p>
                </div>
              </div>
            </div>

            {/* NEW HIGH-VALUE CONTENT BLOCK: Live Operational System Stream Log */}
            <div className="mt-6 p-4 bg-[#111014] border border-[#232227] rounded-xl font-mono text-[11px] text-[#696775] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex items-center gap-3">
                <span className="px-1.5 py-0.5 bg-[#4edea3]/5 text-[#4edea3] border border-[#4edea3]/20 rounded text-[10px]">
                  HEALTH: OPTIMAL
                </span>
                <span className="text-[#a5a3af]">
                  All forensic pipelines reporting normal shard constraints
                  across unified legal workspaces.
                </span>
              </div>
              <span>SYNC_EPOCH // 2026-07-06T12:58:15Z</span>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-8 bg-[#0a0a0c] text-[#f4f3f6] relative overflow-hidden">
          {/* Ambient Algorithmic Neon Grids */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
            <div className="absolute top-1/3 left-1/4 w-[650px] h-[650px] bg-[#4edea3]/5 blur-[160px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-[#c3c0ff]/5 blur-[140px] rounded-full"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              {/* LEFT COLUMN: Reimagined Live Inference Radar Matrix */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-[#111014] border border-[#232227] rounded-2xl p-8 sm:p-12 flex flex-col justify-between shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
                  {/* Decorative Radial Grid Calibration Marks */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff02_2px,transparent_2px)] [background-size:16px_16px] opacity-60"></div>
                  <div className="absolute inset-12 border border-[#232227] rounded-full pointer-events-none"></div>
                  <div className="absolute inset-28 border border-[#232227] border-dashed rounded-full pointer-events-none animate-spin-slow"></div>

                  {/* Top Status Header */}
                  <div className="flex justify-between items-center relative z-10 w-full border-b border-[#232227] pb-4">
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono text-[#696775] block tracking-widest">
                        // MACHINE LEARNING INFERENCE
                      </span>
                      <span className="font-mono text-xs text-[#a5a3af]">
                        MODEL_RUN: ACTIVE
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#4edea3] bg-[#4edea3]/5 border border-[#4edea3]/20 px-2 py-0.5 rounded">
                      99.4% CONVERGENCE
                    </span>
                  </div>

                  {/* Center Readout Analytics */}
                  <div className="text-center relative z-10 py-8">
                    <span className="font-mono text-xs text-[#a5a3af] uppercase tracking-[0.2em] block mb-2">
                      PROJECTED RESOLUTION
                    </span>
                    <div className="text-6xl sm:text-7xl font-bold font-mono tracking-tight text-[#4edea3] drop-shadow-[0_0_20px_rgba(78,222,163,0.15)] leading-none my-1">
                      14.2d
                    </div>
                    <span className="font-mono text-[11px] text-[#696775] block mt-2">
                      Confidence Interval: 94% // Phase 4 Threshold
                    </span>
                  </div>

                  {/* Floating Telemetry Module Component */}
                  <div className="bg-[#16151a]/95 backdrop-blur px-4 py-3.5 rounded-xl border border-[#2a292d] shadow-xl flex items-center justify-between relative z-10 w-full">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[#c4c1fb] text-lg">
                        speed
                      </span>
                      <span className="text-xs font-semibold text-white">
                        Velocity Factor
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#c4c1fb] bg-[#c4c1fb]/10 border border-[#c4c1fb]/20 px-2 py-0.5 rounded">
                      1.4x Standard
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Technical Copywriting & Factor Pipeline */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#c3c0ff]/5 border border-[#c3c0ff]/10 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c3c0ff]"></span>
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#c3c0ff]">
                      Predictive ETA Engine
                    </span>
                  </div>
                  <h2 className="font-['Inter'] text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                    Precision Forensic Time Forecasting
                  </h2>
                  <p className="text-[#c8c5d0] text-base font-light leading-relaxed">
                    Our proprietary machine learning layer maps case footprint
                    metrics against live investigator performance. By parsing
                    historical velocity slopes and location constraints, the
                    model produces highly accurate delivery assessments.
                  </p>
                </div>

                {/* Interactive Factor List */}
                <ul className="space-y-4">
                  <li className="flex gap-4 p-4 rounded-xl bg-[#111014]/60 border border-[#232227] hover:border-[#2d2c33] transition-all">
                    <div className="w-10 h-10 rounded-lg bg-[#c3c0ff]/5 border border-[#c3c0ff]/20 flex items-center justify-center text-[#c3c0ff] shrink-0">
                      <span className="material-symbols-outlined text-xl">
                        dynamic_feed
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white mb-0.5">
                        Artifact Weighted Analysis
                      </h4>
                      <p className="text-xs text-[#8c8a94] leading-relaxed">
                        Computational weight curves dynamically calculated based
                        on 400+ distinct diagnostic data volumes.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4 p-4 rounded-xl bg-[#111014]/60 border border-[#232227] hover:border-[#2d2c33] transition-all">
                    <div className="w-10 h-10 rounded-lg bg-[#4edea3]/5 border border-[#4edea3]/20 flex items-center justify-center text-[#4edea3] shrink-0">
                      <span className="material-symbols-outlined text-xl">
                        history
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white mb-0.5">
                        Velocity Normalization
                      </h4>
                      <p className="text-xs text-[#8c8a94] leading-relaxed">
                        Real-time vector optimization layers mitigating
                        environmental delay vectors and backlog anomalies.
                      </p>
                    </div>
                  </li>
                </ul>

                {/* NEW HIGH-VALUE CONTENT BLOCK: Neural Network Optimization Metrics */}
                <div className="pt-6 border-t border-[#232227]">
                  <span className="text-[10px] font-mono text-[#696775] uppercase tracking-widest block mb-3">
                    // Tensor Weights Distribution
                  </span>
                  <div className="grid grid-cols-3 gap-2 text-[11px] font-mono text-[#a5a3af]">
                    <div className="bg-[#111014] border border-[#1f1e24] px-3 py-2 rounded-lg">
                      <span className="text-[#696775] block text-[9px]">
                        REGUL_ALPHA
                      </span>
                      <span>w = 0.0812</span>
                    </div>
                    <div className="bg-[#111014] border border-[#1f1e24] px-3 py-2 rounded-lg">
                      <span className="text-[#696775] block text-[9px]">
                        LATENCY_BIAS
                      </span>
                      <span>b = +1.402</span>
                    </div>
                    <div className="bg-[#111014] border border-[#1f1e24] px-3 py-2 rounded-lg">
                      <span className="text-[#696775] block text-[9px]">
                        SIGMOID_SLOPE
                      </span>
                      <span className="text-[#4edea3]">0.9841_OK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full bg-[#1c1b1f] border-y border-[#47464f] overflow-hidden py-4">
          <div className="flex whitespace-nowrap ticker-animate gap-12 items-center">
            <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[12px] leading-[16px] font-normal">
              <span className="text-[#4edea3]">VERIFIED</span> [SHA-256:
              4e6f...2a91] Transition: In-Review → Published | Timestamp:
              14:02:11 UTC
            </div>
            <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[12px] leading-[16px] font-normal">
              <span className="text-[#4edea3]">VERIFIED</span> [SHA-256:
              91b3...dd02] Node-Sync: US-East-1 → DE-West-2 | Status: Completed
            </div>
            <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[12px] leading-[16px] font-normal text-[#ffb4ab]">
              <span>FLAGGED</span> [SHA-256: ff02...11ac] Anomaly: Metadata
              Drift Detected | Case ID: #XP-2024
            </div>
            <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[12px] leading-[16px] font-normal">
              <span className="text-[#4edea3]">VERIFIED</span> [SHA-256:
              88cc...44e1] Report: Litigation-Ready Exported | 14:01:05 UTC
            </div>
            <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[12px] leading-[16px] font-normal">
              <span className="text-[#4edea3]">VERIFIED</span> [SHA-256:
              4e6f...2a91] Transition: In-Review → Published | Timestamp:
              14:02:11 UTC
            </div>
          </div>
        </div>

        <section className="py-32 px-6 lg:px-8 bg-[#0a0a0c] text-[#f4f3f6] relative overflow-hidden">
          {/* High-Tech Tactical Mesh Grid Background */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#3a20ff]/5 blur-[200px] rounded-full animate-pulse"></div>
            <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#4edea3]/5 blur-[150px] rounded-full"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#c4c1fb]/5 border border-[#c4c1fb]/10 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c4c1fb]"></span>
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#c4c1fb]">
                  Geofencing Boundary Engine
                </span>
              </div>
              <h2 className="font-['Inter'] text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                Global Data Sovereignty
              </h2>
              <p className="text-[#8c8a94] text-base sm:text-lg font-light max-w-2xl mx-auto">
                Physical oversight of decentralized digital evidence pipelines.
                Dynamic mapping, tracking, and shielding of
                jurisdiction-specific storage matrices and network transit
                boundaries in real time.
              </p>
            </div>

            {/* Main Command Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* LEFT PANEL: Geofence Node Overlays & Map Workspace */}
              <div className="lg:col-span-8 bg-[#111014] border border-[#232227] rounded-2xl h-[650px] relative overflow-hidden shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)]">
                {/* Background Data Topography Simulation */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-70"></div>

                {/* Subtle SVG Connection lines path to mimic data routing mapping */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 120 180 Q 280 120 440 240 T 780 320"
                    fill="none"
                    stroke="#c4c1fb"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 120 180 Q 300 360 440 420"
                    fill="none"
                    stroke="#4edea3"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[#928f9a]/5 font-mono text-2xl tracking-[0.4em] select-none uppercase">
                    Geospatial Routing Active
                  </span>
                </div>

                {/* Interactive floating UI elements */}
                <div className="absolute top-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 z-20">
                  <div className="flex items-center gap-2 bg-[#16151a]/90 backdrop-blur border border-[#232227] px-3 py-1.5 rounded-lg text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                    <span className="text-[#a5a3af]">
                      Active Shards:{" "}
                      <strong className="text-white">
                        3 Regions Deployment
                      </strong>
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#696775] tracking-widest uppercase bg-[#0d0c10] px-2 py-1 rounded border border-[#1f1e24]">
                    System Mode: Strict Localization
                  </span>
                </div>

                {/* Interactive Node Cards Container */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-1 sm:grid-cols-2 gap-4 z-20">
                  {/* FRANKFURT NODE */}
                  <div className="bg-[#16151a]/95 backdrop-blur p-5 rounded-xl border border-[#232227] shadow-2xl hover:border-[#4edea3]/30 transition-all group">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#4edea3] shadow-[0_0_8px_rgba(78,222,163,0.5)]"></span>
                        <span className="font-bold text-sm text-white group-hover:text-[#4edea3] transition-colors">
                          Frankfurt Node (DE)
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#696775]">
                        ZONE-A
                      </span>
                    </div>
                    <p className="text-xs text-[#8c8a94] leading-relaxed mb-4">
                      Compliant with GDPR Chapter V Art. 44-50. Zero
                      cross-border mirroring defaults authorized.
                    </p>
                    <div className="pt-3 border-t border-[#232227] flex justify-between font-mono text-[9px] text-[#696775]">
                      <span>ENC: AES-GCM-256</span>
                      <span className="text-[#4edea3]">LOCK CONFIRMED</span>
                    </div>
                  </div>

                  {/* VIRGINIA NODE */}
                  <div className="bg-[#16151a]/95 backdrop-blur p-5 rounded-xl border border-[#232227] shadow-2xl hover:border-[#c4c1fb]/30 transition-all group">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#c4c1fb] shadow-[0_0_8px_rgba(196,193,251,0.5)]"></span>
                        <span className="font-bold text-sm text-white group-hover:text-[#c4c1fb] transition-colors">
                          Virginia Node (US)
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#696775]">
                        ZONE-F
                      </span>
                    </div>
                    <p className="text-xs text-[#8c8a94] leading-relaxed mb-4">
                      SOC2 Type II / HIPAA structural containment zone. Governed
                      via federal storage boundaries.
                    </p>
                    <div className="pt-3 border-t border-[#232227] flex justify-between font-mono text-[9px] text-[#696775]">
                      <span>FIPS 140-3 LEVEL 4</span>
                      <span className="text-[#c4c1fb]">SYNC STABLE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL: NEW HIGH-VALUE CONTENT BLOCK (Transit Control & Ledger Logs) */}
              <div className="lg:col-span-4 flex flex-col justify-between bg-[#111014] border border-[#232227] rounded-2xl p-6 sm:p-8 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)]">
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-mono text-[#696775] tracking-widest block mb-1">
                      // TRANSIT POLICY ENGINE
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      Cross-Border Compliance
                    </h3>
                  </div>

                  {/* Real-Time Border Check Items */}
                  <div className="space-y-3">
                    <div className="p-3 bg.5 bg-[#0d0c10] border border-[#232227] rounded-xl flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs text-white block font-medium">
                          EU-US Privacy Shield V3
                        </span>
                        <span className="text-[10px] text-[#696775] font-mono">
                          Dynamic Path Isolation
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#4edea3] bg-[#4edea3]/5 border border-[#4edea3]/20 px-2 py-0.5 rounded">
                        ENFORCED
                      </span>
                    </div>

                    <div className="p-3 bg.5 bg-[#0d0c10] border border-[#232227] rounded-xl flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs text-white block font-medium">
                          APEC CBPR Privacy Framework
                        </span>
                        <span className="text-[10px] text-[#696775] font-mono">
                          Asynchronous Edge Ingestion
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#4edea3] bg-[#4edea3]/5 border border-[#4edea3]/20 px-2 py-0.5 rounded">
                        ENFORCED
                      </span>
                    </div>

                    <div className="p-3 bg.5 bg-[#0d0c10] border border-[#232227] rounded-xl flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs text-white block font-medium">
                          Sovereign Cloud Isolation
                        </span>
                        <span className="text-[10px] text-[#696775] font-mono">
                          Air-gapped Cryptographic Keys
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#c4c1fb] bg-[#c4c1fb]/5 border border-[#c4c1fb]/20 px-2 py-0.5 rounded">
                        ISOLATED
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live Audit Log Feed inside the side panel */}
                <div className="pt-6 border-t border-[#232227] mt-6">
                  <span className="text-[10px] font-mono text-[#696775] tracking-widest block mb-2">
                    // BLOCKCHAIN COURIER STREAM
                  </span>
                  <div className="p-3.5 bg-[#0d0c10] border border-[#1f1e24] rounded-xl space-y-1.5 font-mono text-[10px]">
                    <div className="flex justify-between text-white">
                      <span>[ROUTE ALERT]</span>
                      <span className="text-[#4edea3]">PASSED</span>
                    </div>
                    <p className="text-[#8c8a94] text-xs leading-normal">
                      Dossier asset request origin checked against local
                      regional hardware tags. Zero exceptions registered.
                    </p>
                    <p className="text-[9px] text-[#696775] pt-1 border-t border-[#1f1e24]">
                      SIG: 0x93bf...4ede
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-8 bg-[#0a0a0c] text-[#f4f3f6] relative overflow-hidden">
          {/* Ambient Tech Grid Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
            <div className="absolute top-1/4 right-1/3 w-[650px] h-[650px] bg-[#3a20ff]/5 blur-[160px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#4edea3]/5 blur-[130px] rounded-full"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
              {/* LEFT COLUMN: Controls & Key Metric Readouts */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#4edea3]/5 border border-[#4edea3]/10 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#4edea3]">
                      Algorithmic Budget Engine
                    </span>
                  </div>

                  <h2 className="font-['Inter'] text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
                    Financial Oversight
                  </h2>

                  <p className="text-[#c8c5d0] text-base font-light leading-relaxed">
                    Experience sub-second litigation cost modeling. Predict
                    complex budget overruns before they impact operations by
                    continuously training projection profiles against historical
                    discovery timelines and storage growth metrics.
                  </p>
                </div>

                {/* Metrics Cards Restructured into High-Gloss Stack */}
                <div className="space-y-4 my-6">
                  <div className="p-5 bg-[#111014] rounded-xl border border-[#232227] flex justify-between items-center group hover:border-[#c4c1fb]/30 transition-all">
                    <div className="space-y-0.5">
                      <span className="text-xs text-[#696775] font-mono block">
                        // VOLATILITY RUN RATE
                      </span>
                      <span className="text-sm font-medium text-white">
                        Monthly Cost Target
                      </span>
                    </div>
                    <span className="text-2xl font-mono font-bold text-[#e5e1e6] tracking-tight">
                      $24,200
                    </span>
                  </div>

                  <div className="p-5 bg-[#111014] rounded-xl border border-[#232227] flex justify-between items-center group hover:border-[#ffb4ab]/30 transition-all">
                    <div className="space-y-0.5">
                      <span className="text-xs text-[#696775] font-mono block">
                        // PREDICTIVE DRIFT
                      </span>
                      <span className="text-sm font-medium text-white">
                        Projected Overrun Risk
                      </span>
                    </div>
                    <span className="text-2xl font-mono font-bold text-[#ffb4ab] bg-[#93000a]/10 px-2 py-0.5 rounded border border-[#93000a]/20">
                      4.2%
                    </span>
                  </div>
                </div>

                {/* NEW HIGH-VALUE CONTENT BLOCK: Micro Predictive Factor Breakdowns */}
                <div className="pt-6 border-t border-[#232227] grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-[11px] font-mono text-[#a5a3af] uppercase tracking-wider mb-1">
                      Compute Weights
                    </h4>
                    <p className="text-xs text-[#696775]">
                      Machine learning token generation holds stable pricing
                      parameters.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono text-[#a5a3af] uppercase tracking-wider mb-1">
                      Ingest Slopes
                    </h4>
                    <p className="text-xs text-[#696775]">
                      Artifact scaling profiles show a -2.1% decrease from
                      baseline vectors.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Reimagined Interactive Projection Graph Console */}
              <div className="lg:col-span-7 flex">
                <div className="w-full bg-[#111014] border border-[#232227] rounded-2xl flex flex-col justify-between shadow-[0_24px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden">
                  {/* Window Header */}
                  <div className="p-6 bg-[#16151a] border-b border-[#232227] flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#c4c1fb] text-lg">
                        stacked_line_chart
                      </span>
                      <span className="font-mono text-xs text-[#a5a3af] uppercase tracking-wider">
                        Burn Rate Projection
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#c4c1fb] bg-[#c4c1fb]/5 px-2.5 py-0.5 rounded border border-[#c4c1fb]/10">
                      FY26_Q3_ESTIMATE
                    </span>
                  </div>

                  {/* Chart Frame area */}
                  <div className="flex-grow p-6 sm:p-8 flex flex-col justify-end bg-[#0d0c10]/50 relative min-h-[280px]">
                    {/* Horizontal Scale Grids */}
                    <div className="absolute inset-x-6 top-12 border-b border-[#1f1e24] border-dashed text-[9px] font-mono text-[#696775] pt-1">
                      30k MAX CAP
                    </div>
                    <div className="absolute inset-x-6 top-1/2 border-b border-[#1f1e24] border-dashed text-[9px] font-mono text-[#696775] pt-1">
                      15k BASERATE
                    </div>

                    {/* Main Graphical Vectors */}
                    <div className="h-48 flex items-end gap-3 sm:gap-4 relative z-10">
                      {[
                        { h: "40%", val: "$12k", label: "M1" },
                        { h: "55%", val: "$16k", label: "M2" },
                        { h: "45%", val: "$14k", label: "M3" },
                        { h: "70%", val: "$21k", label: "M4" },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="w-full group/bar relative flex flex-col justify-end h-full"
                        >
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-[#16151a] border border-[#35343c] rounded text-[10px] font-mono px-1.5 py-0.5 text-white z-20 whitespace-nowrap">
                            {item.val}
                          </div>
                          <div
                            className="w-full bg-[#c4c1fb]/10 border-t border-[#c4c1fb]/40 rounded-t-md group-hover/bar:bg-[#c4c1fb]/20 transition-colors"
                            style={{ height: item.h }}
                          ></div>
                          <span className="text-[9px] font-mono text-[#696775] text-center mt-2 block">
                            {item.label}
                          </span>
                        </div>
                      ))}

                      {/* Anomalous Predictive Peak Column */}
                      <div className="w-full group/bar relative flex flex-col justify-end h-full">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#4edea3]/10 text-[#4edea3] text-[9px] px-2 py-0.5 rounded border border-[#4edea3]/20 font-bold whitespace-nowrap tracking-wide z-20">
                          PREDICTED
                        </div>
                        <div
                          className="w-full bg-[#4edea3]/10 border-t-2 border-[#4edea3] rounded-t-md shadow-[0_0_20px_rgba(78,222,163,0.15)]"
                          style={{ height: "85%" }}
                        ></div>
                        <span className="text-[9px] font-mono text-[#4edea3] font-bold text-center mt-2 block">
                          M5 (EST)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Secure Footer Container */}
                  <div className="p-4 sm:px-6 bg-[#16151a] border-t border-[#232227] flex flex-col sm:flex-row justify-between items-center gap-3">
                    <span className="text-xs font-mono text-[#696775] flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-[#4edea3] animate-pulse">
                        lock
                      </span>
                      Financial Cryptographic Seal: AES-GCM-256
                    </span>
                    <button className="text-[#c4c1fb] text-xs font-medium hover:text-white transition-colors flex items-center gap-1 group">
                      Download Ledger Specs
                      <span className="transform group-hover:translate-x-0.5 transition-transform">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-8 bg-[#0a0a0c] text-[#f4f3f6] relative overflow-hidden">
          {/* Fine Tech-Grid & Radial Ambiance */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#3a20ff]/5 blur-[140px] rounded-full"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            {/* Section Typography Header */}
            <div className="text-center max-w-3xl mx-auto mb-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#c3c0ff]/5 border border-[#c3c0ff]/10 mb-4">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#c3c0ff]">
                  Append-Only Chain of Custody
                </span>
              </div>
              <h2 className="font-['Inter'] text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                The Zero-Trust Audit Trail
              </h2>
              <p className="text-[#8c8a94] text-base sm:text-lg font-light max-w-xl mx-auto">
                Immutable validation matrices ensuring that every action, status
                migration, and forensic milestone remains fundamentally
                unalterable.
              </p>
            </div>

            {/* Reimagined Sequential Process Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* STEP 1 */}
              <div className="group relative bg-[#111014] border border-[#232227] rounded-2xl p-6 transition-all duration-300 hover:border-[#c3c0ff]/40 hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#c3c0ff]/5 border border-[#c3c0ff]/20 flex items-center justify-center mb-6 text-[#c3c0ff] group-hover:bg-[#c3c0ff] group-hover:text-[#1d00a5] transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl">
                      key
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#696775] tracking-widest block mb-1">
                    STAGE_01 // IDENTITY
                  </span>
                  <h4 className="text-lg font-bold text-white mb-3">
                    Cryptographic Keys
                  </h4>
                  <p className="text-xs text-[#8c8a94] leading-relaxed">
                    Each investigator footprint is cryptographically signed at
                    hardware runtime with a unique, non-exportable cryptographic
                    identity token.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#1f1e24] font-mono text-[9px] text-[#696775]">
                  PROTOCOL: ED25519_HSM
                </div>
              </div>

              {/* STEP 2 */}
              <div className="group relative bg-[#111014] border border-[#232227] rounded-2xl p-6 transition-all duration-300 hover:border-[#4edea3]/40 hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#4edea3]/5 border border-[#4edea3]/20 flex items-center justify-center mb-6 text-[#4edea3] group-hover:bg-[#4edea3] group-hover:text-[#00381e] transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl">
                      history_edu
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#696775] tracking-widest block mb-1">
                    STAGE_02 // LEDGER
                  </span>
                  <h4 className="text-lg font-bold text-white mb-3">
                    Immutable Ledger
                  </h4>
                  <p className="text-xs text-[#8c8a94] leading-relaxed">
                    Audit records are chronologically compiled into
                    decentralized blocks, making metadata modifications
                    explicitly impossible without breaking validation trees.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#1f1e24] font-mono text-[9px] text-[#696775]">
                  ANCHOR: BLOCK_HEIGHT_#884
                </div>
              </div>

              {/* STEP 3 */}
              <div className="group relative bg-[#111014] border border-[#232227] rounded-2xl p-6 transition-all duration-300 hover:border-[#c4c1fb]/40 hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#c4c1fb]/5 border border-[#c4c1fb]/20 flex items-center justify-center mb-6 text-[#c4c1fb] group-hover:bg-[#c4c1fb] group-hover:text-[#16152b] transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl">
                      visibility
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#696775] tracking-widest block mb-1">
                    STAGE_03 // CONSENSUS
                  </span>
                  <h4 className="text-lg font-bold text-white mb-3">
                    Dual Authorization
                  </h4>
                  <p className="text-xs text-[#8c8a94] leading-relaxed">
                    Migrating parameters to public or "Final" visibility tiers
                    instantly triggers a mandatory multi-signature consensus
                    workflow from executive oversight keys.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#1f1e24] font-mono text-[9px] text-[#696775]">
                  M-OF-N QUORUM REQUIRED
                </div>
              </div>

              {/* STEP 4 */}
              <div className="group relative bg-[#111014] border border-[#232227] rounded-2xl p-6 transition-all duration-300 hover:border-[#ffb4ab]/40 hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#ffb4ab]/5 border border-[#ffb4ab]/20 flex items-center justify-center mb-6 text-[#ffb4ab] group-hover:bg-[#ffb4ab] group-hover:text-[#530004] transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl">
                      gpp_maybe
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#696775] tracking-widest block mb-1">
                    STAGE_04 // MONITOR
                  </span>
                  <h4 className="text-lg font-bold text-white mb-3">
                    Integrity Monitoring
                  </h4>
                  <p className="text-xs text-[#8c8a94] leading-relaxed">
                    Persistent background integrity heuristics autonomously fire
                    network containment updates if unauthorized system actors
                    bypass endpoint gateways.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#1f1e24] font-mono text-[9px] text-[#696775]">
                  STATUS: ACTIVE WATCHDOG
                </div>
              </div>
            </div>

            {/* NEW HIGH-VALUE CONTENT BLOCK: Live Blockchain State Inspect Dock */}
            <div className="max-w-5xl mx-auto bg-[#0d0c10] border border-[#232227] rounded-xl p-6 font-mono text-xs text-[#8c8a94]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-[#1f1e24] mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                  <span className="text-white font-medium">
                    Live Ledger Verification Engine Active
                  </span>
                </div>
                <span className="text-[10px] text-[#696775]">
                  NETWORK REPLICATION THREAD // STABLE
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 bg-[#121115] rounded-lg border border-[#1f1e24] space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-white">Block #1,920,441</span>
                    <span className="text-[#4edea3]">Verified Root</span>
                  </div>
                  <p className="text-[10px] text-[#696775] break-all">
                    Hash:
                    9a4e2fbc110a56e89012bcdaef7782109923ef11a8c88dbf2e41a23990ffb104
                  </p>
                </div>
                <div className="p-3.5 bg-[#121115] rounded-lg border border-[#1f1e24] space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-white">Block #1,920,440</span>
                    <span className="text-[#4edea3]">Verified Root</span>
                  </div>
                  <p className="text-[10px] text-[#696775] break-all">
                    Hash:
                    7cc3fa21b9034edc990a415ff67be21a99d21bc4e5ef90bb24a291f00a2ef562
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-8 bg-[#0a0a0c] border-y border-[#1f1e24] text-[#f4f3f6] relative overflow-hidden">
          {/* Cyber-Tactical Background Mesh */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
            <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#93000a]/5 blur-[160px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#c4c1fb]/5 blur-[140px] rounded-full"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
              {/* LEFT COLUMN: Strategic Risk Telemetry & Descriptions */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#93000a]/10 text-[#ffb4ab] font-mono text-[11px] font-medium border border-[#93000a]/40 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffb4ab] animate-ping"></span>
                    CRITICAL DEVIATION ALERT
                  </div>

                  <h2 className="font-['Inter'] text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
                    Automated Anomaly Intelligence
                  </h2>

                  <p className="text-[#c8c5d0] text-base font-light leading-relaxed">
                    The Sentinel suite continuously scores operational velocity.
                    When a dossier or legal case drifts from its predicted
                    cryptographic timeline, or artifact ingestion surges outside
                    nominal bounds, real-time trigger vectors report to
                    executive oversight instantly.
                  </p>
                </div>

                {/* Expanded Risk Profiles (NEW CONTENT) */}
                <div className="space-y-3 flex-grow my-6">
                  <div className="flex items-start gap-4 p-4 bg-[#121115] rounded-xl border border-[#232227] hover:border-[#ffb4ab]/20 transition-all">
                    <div className="p-2 rounded-lg bg-[#93000a]/10 text-[#ffb4ab] border border-[#93000a]/20">
                      <span className="material-symbols-outlined text-sm block">
                        lock_open
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white">
                        Temporal Inconsistency Check
                      </h4>
                      <p className="text-xs text-[#8c8a94] mt-0.5">
                        Real-time asynchronous sweeps catching hidden or
                        unauthorized metadata adjustments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-[#121115] rounded-xl border border-[#232227] hover:border-[#c4c1fb]/20 transition-all">
                    <div className="p-2 rounded-lg bg-[#c4c1fb]/10 text-[#c4c1fb] border border-[#c4c1fb]/20">
                      <span className="material-symbols-outlined text-sm block">
                        waves
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-white">
                        Ingestion Burst Protection
                      </h4>
                      <p className="text-xs text-[#8c8a94] mt-0.5">
                        Flags automated scripts masquerading as manual
                        investigator uploads inside active nodes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tactical Protocol Footer Note */}
                <div className="pt-4 border-t border-[#232227]">
                  <p className="text-[11px] font-mono text-[#696775]">
                    // System Action: Escalating validation anomaly metrics to
                    Level-3 Sovereign Security Council.
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: Redesigned High-Fidelity Diagnostic Terminal */}
              <div className="lg:col-span-7 flex">
                <div className="w-full bg-[#111014] border border-[#2a292d] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_24px_50px_-12px_rgba(0,0,0,0.8)] relative overflow-hidden">
                  {/* Terminal Inner Glare */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffb4ab]/5 blur-[100px] pointer-events-none"></div>

                  {/* Monitor Header */}
                  <div className="flex flex-wrap justify-between items-center gap-4 mb-8 pb-4 border-b border-[#232227]">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span className="font-mono text-xs text-[#a5a3af] tracking-wider uppercase">
                        Telemetry Stream: Sector 4
                      </span>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-[#93000a]/10 border border-[#93000a]/30 text-xs font-mono font-bold text-[#ffb4ab]">
                      ALERT: +2.4d Drift Verified
                    </div>
                  </div>

                  {/* Reimagined Data Visualization Map */}
                  <div className="flex-grow flex items-end justify-center relative min-h-[220px] bg-[#0d0c10] border border-[#1f1e24] rounded-xl p-6 overflow-hidden">
                    {/* Background Matrix Crosshairs */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff02_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>

                    {/* Simulated Graph Wave Grid bars */}
                    <div className="w-full h-full flex items-end justify-between gap-[3px] relative z-10">
                      {[
                        24, 36, 28, 48, 62, 78, 54, 98, 140, 180, 155, 115, 90,
                        64, 42, 30, 22,
                      ].map((height, index) => {
                        const isAnomalous = index >= 7 && index <= 11;
                        return (
                          <div
                            key={index}
                            className={`w-full transition-all duration-500 rounded-t-sm ${
                              isAnomalous
                                ? "bg-gradient-to-t from-[#93000a] via-[#ffb4ab] to-white shadow-[0_0_12px_rgba(255,180,171,0.3)]"
                                : "bg-[#c4c1fb]/10 group-hover:bg-[#c4c1fb]/30"
                            }`}
                            style={{ height: `${(height / 180) * 100}%` }}
                          ></div>
                        );
                      })}
                    </div>

                    {/* Target Vector Target overlay box */}
                    <div className="absolute top-[20%] left-[45%] w-24 h-24 border border-dashed border-[#ffb4ab]/40 rounded-lg animate-pulse bg-[#93000a]/5 flex flex-col items-center justify-center p-2 pointer-events-none z-20">
                      <span className="text-[8px] font-mono text-[#ffb4ab] tracking-tight uppercase">
                        Drift Peak
                      </span>
                      <span className="text-xs font-mono font-bold text-white">
                        180 ops/s
                      </span>
                    </div>
                  </div>

                  {/* Metadata Diagnostic Status Strip */}
                  <div className="mt-6 pt-4 border-t border-[#232227] grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[10px] text-[#696775]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#ffb4ab]"></span>
                      <span>SCAN: CORE_ISOLATED</span>
                    </div>
                    <div className="text-left sm:text-center">
                      <span>TS: 2026-07-06T12:40:16Z</span>
                    </div>
                    <div className="text-left sm:text-right">
                      <span>HASH: 8f2e...91a2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-8 bg-[#0b0a0d] text-[#f4f3f6] relative overflow-hidden">
          {/* Ambient Financial-Glow Effects */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#4edea3]/5 blur-[160px] rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#c4c1fb]/5 blur-[140px] rounded-full"></div>
            {/* Structural line vector overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
              {/* LEFT COLUMN: Predictive Cost Projection Terminal */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative">
                  {/* Backdrop shadow geometry */}
                  <div className="absolute inset-0 bg-[#4edea3]/5 blur-[120px] rounded-3xl -translate-x-4 -translate-y-4 pointer-events-none"></div>

                  {/* Main Card Body */}
                  <div className="relative bg-[#111014] rounded-2xl border border-[#232227] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7)] p-6 sm:p-8 overflow-hidden backdrop-blur-md">
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-8 pb-4 border-b border-[#232227]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#4edea3]/10 border border-[#4edea3]/20 flex items-center justify-center">
                          <span className="material-symbols-outlined text-lg text-[#4edea3]">
                            query_stats
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-sm uppercase tracking-wider text-white">
                            LITIGATION COST PROJECTION
                          </h3>
                          <p className="text-[10px] font-mono text-[#696775]">
                            ALGORITHMIC BUDGET MAPPER
                          </p>
                        </div>
                      </div>
                      <div className="px-2.5 py-1 bg-[#1a191f] rounded text-[10px] font-mono border border-[#2f2e36] text-[#a5a3af]">
                        LEDGER // FY26_AUDIT
                      </div>
                    </div>

                    {/* Dynamic Cost Progress Monitors */}
                    <div className="space-y-6 mb-8">
                      <div>
                        <div className="flex justify-between items-baseline mb-2">
                          <div className="space-y-0.5">
                            <span className="text-xs font-medium text-white block">
                              Monthly Burn Allocation
                            </span>
                            <span className="text-[11px] font-mono text-[#696775]">
                              Aggregated cloud & forensic hours
                            </span>
                          </div>
                          <span className="font-mono text-sm font-bold text-[#c4c1fb]">
                            $24,200{" "}
                            <span className="text-[#696775] text-xs font-light">
                              / $38k cap
                            </span>
                          </span>
                        </div>
                        <div className="h-2.5 w-full bg-[#16151a] rounded-full overflow-hidden border border-[#232227]">
                          <div
                            className="h-full bg-gradient-to-r from-[#3a20ff] to-[#c4c1fb] rounded-full"
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-baseline mb-2">
                          <div className="space-y-0.5">
                            <span className="text-xs font-medium text-white block">
                              Projected Overrun Volatility
                            </span>
                            <span className="text-[11px] font-mono text-[#696775]">
                              Risk calculated by parameter drift
                            </span>
                          </div>
                          <span className="font-mono text-sm font-bold text-[#ffb4ab] bg-[#93000a]/10 px-2 py-0.5 rounded border border-[#93000a]/20">
                            4.2% (Low)
                          </span>
                        </div>
                        <div className="h-2.5 w-full bg-[#16151a] rounded-full overflow-hidden border border-[#232227]">
                          <div
                            className="h-full bg-[#ffb4ab] rounded-full"
                            style={{ width: "14.2%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Core Volume Telemetry Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-4 bg-[#141318] rounded-xl border border-[#232227] text-center">
                        <p className="text-[10px] text-[#696775] font-mono uppercase tracking-wider mb-1">
                          // Artifacts
                        </p>
                        <p className="text-xl font-mono font-bold text-white">
                          12.4M
                        </p>
                        <span className="text-[9px] text-[#4edea3] font-mono">
                          Indexed
                        </span>
                      </div>
                      <div className="p-4 bg-[#141318] rounded-xl border border-[#232227] text-center">
                        <p className="text-[10px] text-[#696775] font-mono uppercase tracking-wider mb-1">
                          // Storage
                        </p>
                        <p className="text-xl font-mono font-bold text-white">
                          1.2 PB
                        </p>
                        <span className="text-[9px] text-[#a5a3af] font-mono">
                          Immutable
                        </span>
                      </div>
                      <div className="p-4 bg-[#141318] rounded-xl border border-[#232227] text-center">
                        <p className="text-[10px] text-[#696775] font-mono uppercase tracking-wider mb-1">
                          // Custodians
                        </p>
                        <p className="text-xl font-mono font-bold text-white">
                          842
                        </p>
                        <span className="text-[9px] text-[#ffb4ab] font-mono">
                          Monitored
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Copywriting and Strategy Headers */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#4edea3]/5 border border-[#4edea3]/10 mb-4">
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#4edea3]">
                      Predictive Fiscal Controls
                    </span>
                  </div>
                  <h2 className="font-['Inter'] text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                    Financial Forensic Oversight
                  </h2>
                  <p className="text-[#c8c5d0] text-base font-light leading-relaxed">
                    Maintain absolute fiscal control over highly volatile legal
                    discovery workflows. Our continuous analytics engine maps
                    incoming raw unstructured data growth trends directly onto
                    existing litigation budgets, offering clear,
                    court-defensible metrics that stop financial overruns before
                    they materialize.
                  </p>
                </div>

                {/* NEW HIGH-VALUE CONTENT BLOCK: Operational Impact Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#141318]/60 border border-[#232227]">
                    <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#c4c1fb]"></span>{" "}
                      Linear Burn Models
                    </h4>
                    <p className="text-xs text-[#8c8a94]">
                      Predicts exact compute costs up to 90 days out based on
                      custodian ingest rates.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#141318]/60 border border-[#232227]">
                    <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#4edea3]"></span>{" "}
                      Threshold Kill-Switches
                    </h4>
                    <p className="text-xs text-[#8c8a94]">
                      Configure autonomous notifications to stop indexing if
                      unexpected exports bypass targets.
                    </p>
                  </div>
                </div>

                {/* Verified Signature Dock */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-3 px-4 py-3 bg-[#111014] border border-[#232227] rounded-xl shadow-inner">
                    <span className="material-symbols-outlined text-[#4edea3] text-sm animate-pulse">
                      verified
                    </span>
                    <span className="text-xs font-mono font-medium text-[#4edea3] tracking-wider uppercase">
                      Cryptographically Signed Financials (AES-GCM-256)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-8 bg-[#0a0a0c] text-[#f4f3f6] relative overflow-hidden">
          {/* Dynamic Analytical Network Backdrop */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
            <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[#c4c1fb]/5 blur-[180px] rounded-full"></div>
            <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#3a20ff]/5 blur-[160px] rounded-full"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px]"></div>
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#c4c1fb]/5 border border-[#c4c1fb]/10 mb-4">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#c4c1fb]">
                  Federated AI Search Cluster
                </span>
              </div>
              <h2 className="font-['Inter'] text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                Enterprise Cross-Case Analytics
              </h2>
              <p className="text-[#8c8a94] text-base sm:text-lg font-light max-w-2xl mx-auto">
                Identify hidden systemic patterns, trace entity correlations,
                and identify jurisdictional drift across your entire global
                investigation portfolio using structured forensic discovery
                tools.
              </p>
            </div>

            {/* Dashboard Terminal Frame */}
            <div className="max-w-5xl mx-auto bg-[#111014] border border-[#232227] rounded-2xl shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
              {/* Control Panel Header */}
              <div className="px-6 py-4 bg-[#16151a] border-b border-[#232227] flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#c4c1fb] animate-pulse"></span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#a5a3af]">
                    Cross-Index Registry Engine
                  </span>
                </div>
                <div className="flex items-center gap-6 text-xs font-mono text-[#696775]">
                  <span>
                    Nodes Connected:{" "}
                    <strong className="text-[#4edea3]">14/14</strong>
                  </span>
                  <span>
                    Sync Rate: <strong className="text-white">99.98%</strong>
                  </span>
                </div>
              </div>

              {/* Main Search Interface Console */}
              <div className="p-6 sm:p-8 bg-[#0d0c10]/90">
                <div className="relative mb-6 group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#696775] group-focus-within:text-[#c4c1fb] transition-colors">
                    search
                  </span>
                  <input
                    className="w-full bg-[#151419] border-[#2d2c33] border rounded-xl py-4 pl-12 pr-28 focus:outline-none focus:border-[#c4c1fb] focus:ring-1 focus:ring-[#c4c1fb] transition-all text-[#e5e1e6] font-['Inter'] placeholder-[#696775]"
                    placeholder="Query hashes, signatures, target entities across global dossiers..."
                    type="text"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2">
                    <span className="px-2 py-1 bg-[#232227] rounded text-[10px] font-mono border border-[#35343c] text-[#a5a3af]">
                      CMD + K
                    </span>
                  </div>
                </div>

                {/* Interactive Data Tag Clusters */}
                <div className="flex flex-wrap items-center gap-2.5 pb-6 border-b border-[#232227]">
                  <span className="text-[11px] font-mono text-[#696775] uppercase tracking-wider mr-2">
                    // Smart Facets:
                  </span>
                  <button className="px-3 py-1.5 rounded-lg bg-[#c4c1fb]/5 border border-[#c4c1fb]/20 text-[#c4c1fb] text-xs font-medium hover:bg-[#c4c1fb]/10 transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#c4c1fb]"></span>{" "}
                    High-Volume Artifacts
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-[#c3c0ff]/5 border border-[#c3c0ff]/20 text-[#c3c0ff] text-xs font-medium hover:bg-[#c3c0ff]/10 transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#c3c0ff]"></span>{" "}
                    Jurisdictional Drift
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-[#4edea3]/5 border border-[#4edea3]/20 text-[#4edea3] text-xs font-medium hover:bg-[#4edea3]/10 transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#4edea3]"></span>{" "}
                    Investigator Saturation
                  </button>
                  <button className="p-1.5 text-[#696775] hover:text-[#e5e1e6] transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      add_circle
                    </span>
                  </button>
                </div>

                {/* Telemetry Index Metrics Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 bg-[#141318] rounded-xl border border-[#232227] hover:border-[#35343c] transition-all">
                    <span className="text-[10px] font-mono text-[#696775] uppercase tracking-wider block mb-1">
                      // Metadata Variance
                    </span>
                    <p className="text-xs text-[#a5a3af] mb-2">
                      Global Correlation Index
                    </p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-mono font-bold text-[#c4c1fb]">
                        0.92
                      </p>
                      <span className="text-[10px] font-mono text-[#4edea3]">
                        ↑ 4.1%
                      </span>
                    </div>
                  </div>
                  <div className="p-5 bg-[#141318] rounded-xl border border-[#232227] hover:border-[#35343c] transition-all">
                    <span className="text-[10px] font-mono text-[#696775] uppercase tracking-wider block mb-1">
                      // Cross-Border Risk
                    </span>
                    <p className="text-xs text-[#a5a3af] mb-2">
                      Drift Probability
                    </p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-mono font-bold text-[#4edea3]">
                        1.2%
                      </p>
                      <span className="text-[10px] font-mono text-[#696775]">
                        Stable
                      </span>
                    </div>
                  </div>
                  <div className="p-5 bg-[#141318] rounded-xl border border-[#232227] hover:border-[#35343c] transition-all">
                    <span className="text-[10px] font-mono text-[#696775] uppercase tracking-wider block mb-1">
                      // Storage Footprint
                    </span>
                    <p className="text-xs text-[#a5a3af] mb-2">
                      Active Portfolio Size
                    </p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-mono font-bold text-white">
                        4.8 PB
                      </p>
                      <span className="text-[10px] font-mono text-[#a5a3af]">
                        L2 Block
                      </span>
                    </div>
                  </div>
                </div>

                {/* NEW HIGH-VALUE CONTENT BLOCK: Real-time Multi-Case Correlation Logs */}
                <div className="mt-8 pt-6 border-t border-[#232227]">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#8c8a94]">
                      // Active Cluster Anomalies Discovered
                    </h4>
                    <span className="text-[10px] font-mono text-[#696775] bg-[#16151a] px-2 py-0.5 rounded">
                      Auto-updating
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="p-3 bg-[#16151a]/40 border border-[#232227] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                      <div className="flex items-center gap-3">
                        <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px]">
                          CORR_ID #882
                        </span>
                        <span className="text-[#e5e1e6]">
                          File hash duplication discovered between European
                          Dossier & US-West Court Ledger
                        </span>
                      </div>
                      <span className="text-[#696775]">2 mins ago</span>
                    </div>
                    <div className="p-3 bg-[#16151a]/40 border border-[#232227] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                      <div className="flex items-center gap-3">
                        <span className="px-1.5 py-0.5 rounded bg-[#c4c1fb]/10 text-[#c4c1fb] border border-[#c4c1fb]/20 text-[10px]">
                          METRIC_ALT
                        </span>
                        <span className="text-[#e5e1e6]">
                          Jurisdictional sovereignty parameters within SLA
                          limits across 4.8 PB assets
                        </span>
                      </div>
                      <span className="text-[#696775]">12 mins ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-8 bg-[#0b0a0d] text-[#f4f3f6] relative overflow-hidden">
          {/* Structural grid and radial glow overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#c4c1fb]/5 blur-[160px] rounded-full"></div>
            <div className="absolute right-10 top-10 w-[400px] h-[400px] bg-[#4edea3]/5 blur-[140px] rounded-full"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
              {/* LEFT COLUMN: Controls & Deep Explanatory Content */}
              <div className="lg:col-span-6 space-y-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/20 mb-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#4edea3]">
                      Judiciary Grade Proof System
                    </span>
                  </div>
                  <h2 className="font-['Inter'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                    Courtroom-Ready Reporting Engine
                  </h2>
                  <p className="text-[#c8c5d0] text-base font-light leading-relaxed">
                    Generate exhaustive, tamper-evident stakeholder reports in
                    seconds. Our automated validation engine transforms highly
                    complex system states into structural executive summaries
                    perfect for legal counsel, forensic auditors, and immediate
                    judicial review.
                  </p>
                </div>

                {/* Interactive Export Format Triggers */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#696775] mb-4">
                    // Cryptographic Export Formats
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="group cursor-pointer p-4 bg-[#121115] border border-[#232227] rounded-xl hover:border-[#c4c1fb] hover:bg-[#c4c1fb]/5 transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-[#2a292d] border border-[#47464f] flex items-center justify-center mb-3 group-hover:border-[#c4c1fb]/40 transition-all">
                        <span className="material-symbols-outlined text-2xl text-[#a5a3af] group-hover:text-[#c4c1fb]">
                          picture_as_pdf
                        </span>
                      </div>
                      <span className="text-[11px] font-bold tracking-wider text-[#a5a3af] group-hover:text-white block">
                        PDF Archive
                      </span>
                      <span className="text-[9px] font-mono text-[#696775] block mt-0.5">
                        ISO 19005 compliant
                      </span>
                    </div>

                    <div className="group cursor-pointer p-4 bg-[#121115] border border-[#232227] rounded-xl hover:border-[#4edea3] hover:bg-[#4edea3]/5 transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-[#2a292d] border border-[#47464f] flex items-center justify-center mb-3 group-hover:border-[#4edea3]/40 transition-all">
                        <span className="material-symbols-outlined text-2xl text-[#a5a3af] group-hover:text-[#4edea3]">
                          table_view
                        </span>
                      </div>
                      <span className="text-[11px] font-bold tracking-wider text-[#a5a3af] group-hover:text-white block">
                        Spreadsheet
                      </span>
                      <span className="text-[9px] font-mono text-[#696775] block mt-0.5">
                        Raw Matrix (CSV)
                      </span>
                    </div>

                    <div className="group cursor-pointer p-4 bg-[#121115] border border-[#232227] rounded-xl hover:border-[#c3c0ff] hover:bg-[#c3c0ff]/5 transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-[#2a292d] border border-[#47464f] flex items-center justify-center mb-3 group-hover:border-[#c3c0ff]/40 transition-all">
                        <span className="material-symbols-outlined text-2xl text-[#a5a3af] group-hover:text-[#c3c0ff]">
                          analytics
                        </span>
                      </div>
                      <span className="text-[11px] font-bold tracking-wider text-[#a5a3af] group-hover:text-white block">
                        JSON-LD Specs
                      </span>
                      <span className="text-[9px] font-mono text-[#696775] block mt-0.5">
                        Linked Data Graph
                      </span>
                    </div>
                  </div>
                </div>

                {/* NEW CONTENT SECTION: Verification Metadata Pipeline */}
                <div className="pt-6 border-t border-[#232227]">
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#696775] mb-4">
                    // Continuous Immutable Proof Streams
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-[#121115]/60 p-3 rounded-lg border border-[#232227]">
                      <div className="w-2 h-2 rounded-full bg-[#4edea3]"></div>
                      <span className="font-mono text-xs text-[#a5a3af]">
                        Block #889,102 sealed successfully — Timestamp anchor
                        local
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-[#121115]/60 p-3 rounded-lg border border-[#232227]">
                      <div className="w-2 h-2 rounded-full bg-[#c4c1fb]"></div>
                      <span className="font-mono text-xs text-[#a5a3af]">
                        Hardware Security Module (HSM) asymmetrical pair checked
                        OK
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Reimagined Live Evidence Terminal */}
              <div className="lg:col-span-6 relative">
                {/* Complex background glow framework */}
                <div className="absolute inset-0 bg-[#c4c1fb]/10 blur-[100px] rounded-3xl translate-x-4 translate-y-4 pointer-events-none"></div>

                {/* Terminal Outer Body */}
                <div className="relative bg-[#111014] rounded-2xl border border-[#2a292d] shadow-2xl overflow-hidden">
                  {/* Window Header */}
                  <div className="px-6 py-4 bg-[#16151a] border-b border-[#2a292d] flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></div>
                      <span className="text-xs font-mono text-[#696775] ml-4">
                        sentinel-ledger-inspector.sh
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#4edea3]/10 border border-[#4edea3]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
                      <span className="text-[9px] font-mono text-[#4edea3] uppercase tracking-wider font-bold">
                        SECURE LIVE
                      </span>
                    </div>
                  </div>

                  {/* Terminal Inner Container */}
                  <div className="p-8 space-y-6">
                    <div className="flex justify-between items-start border-b border-[#232227] pb-4">
                      <div>
                        <span className="text-[10px] font-mono text-[#696775] block tracking-widest">
                          // TARGET DOCKET AUDIT
                        </span>
                        <h3 className="font-bold text-lg tracking-tight text-white uppercase">
                          EXECUTIVE SUMMARY
                        </h3>
                        <p className="font-mono text-[10px] text-[#a5a3af]">
                          DEMS+ FORENSIC RECORD | ID: #99201
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-3xl text-[#4edea3] bg-[#4edea3]/5 p-2 rounded-xl border border-[#4edea3]/20">
                        verified_user
                      </span>
                    </div>

                    {/* Simulated Document Skeletal Data Rows */}
                    <div className="space-y-3 font-mono text-xs text-[#8c8a94]">
                      <div className="flex justify-between p-2.5 rounded bg-[#16151a]">
                        <span>[0.00s] INITIALIZING CRYPTOGRAPHIC SYNC</span>
                        <span className="text-[#4edea3]">SUCCESS</span>
                      </div>
                      <div className="flex justify-between p-2.5 rounded bg-[#16151a]">
                        <span>[0.12s] CALCULATING SHA-256 TREE ROOTS</span>
                        <span className="text-[#4edea3]">MATCHED</span>
                      </div>
                      <div className="flex justify-between p-2.5 rounded bg-[#16151a]">
                        <span>[0.45s] CHECKING ASYMMETRICAL WRAPPERS</span>
                        <span className="text-[#c4c1fb]">VERIFIED</span>
                      </div>
                    </div>

                    {/* Scoring Blocks */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-[#c4c1fb]/5 border border-[#c4c1fb]/20 p-5 group hover:border-[#c4c1fb]/40 transition-colors">
                        <p className="text-[10px] text-[#a5a3af] font-mono uppercase tracking-wider mb-1">
                          // Integrity Score
                        </p>
                        <p className="text-3xl font-bold text-[#c4c1fb] tracking-tight">
                          99.8%
                        </p>
                      </div>
                      <div className="rounded-xl bg-[#4edea3]/5 border border-[#4edea3]/20 p-5 group hover:border-[#4edea3]/40 transition-colors">
                        <p className="text-[10px] text-[#a5a3af] font-mono uppercase tracking-wider mb-1">
                          // Chain of Custody
                        </p>
                        <p className="text-3xl font-bold text-[#4edea3] tracking-tight">
                          VALID
                        </p>
                      </div>
                    </div>

                    {/* Cryptographic Signature Footer info */}
                    <div className="pt-4 border-t border-[#232227] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#696775] font-mono text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm">
                          history_edu
                        </span>
                        <span>SHA-256: 4e6f...2a91</span>
                      </div>
                      <div className="text-right text-[#a5a3af] bg-[#232227] px-2 py-0.5 rounded text-[9px]">
                        AUTH: Sentinel-Integrity-01
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-8 bg-[#0a0a0d] text-[#f4f3f6] relative overflow-hidden">
          {/* Background Structural Grid Lines */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1440px] border-x border-[#232227]/40"></div>
            <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#232227] to-transparent"></div>
            <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#232227] to-transparent"></div>
          </div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#c4c1fb]/5 border border-[#c4c1fb]/10 mb-4">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#a5a3af]">
                  Performance Benchmarks
                </span>
              </div>
              <h2 className="font-['Inter'] text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                The Sentinel Advantage
              </h2>
              <p className="text-[#8c8a94] text-base sm:text-lg font-light">
                How standard manual reporting models break under forensic
                scrutiny compared to decentralized, instantaneous audit capture.
              </p>
            </div>

            {/* Primary Comparison Matrix Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
              {/* LEFT SIDE: LEGACY REPORTING */}
              <div className="bg-[#121115]/80 border border-[#2d1a1c] rounded-2xl overflow-hidden flex flex-col backdrop-blur-md transition-all duration-300 hover:border-[#53272b]">
                <div className="p-6 bg-[#1a1415] border-b border-[#2d1a1c] flex justify-between items-center">
                  <div>
                    <span className="font-mono text-[10px] text-[#ffb4ab]/40 uppercase tracking-widest block mb-1">
                      Infrastructure V1.0
                    </span>
                    <span className="font-bold text-[#ffb4ab] uppercase tracking-wider text-sm">
                      Legacy Reporting Models
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#93000a]/20 flex items-center justify-center border border-[#93000a]/40">
                    <span className="text-[#ffb4ab] text-xs font-mono">↓</span>
                  </div>
                </div>

                <div className="p-8 space-y-6 flex-grow">
                  <div className="flex justify-between items-start pb-4 border-b border-[#232227]">
                    <div>
                      <span className="block font-medium text-white text-sm">
                        Manual Status Updates
                      </span>
                      <span className="text-xs text-[#696775]">
                        Aggregating individual terminal entries
                      </span>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#ffb4ab] bg-[#93000a]/10 px-2 py-1 rounded border border-[#93000a]/20">
                      ~4.5 hrs / wk
                    </span>
                  </div>

                  <div className="flex justify-between items-start pb-4 border-b border-[#232227]">
                    <div>
                      <span className="block font-medium text-white text-sm">
                        Timeline Accuracy
                      </span>
                      <span className="text-xs text-[#696775]">
                        Subject to retrofitted user recall
                      </span>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#e5e1e6]">
                      ± 12 Days
                    </span>
                  </div>

                  <div className="flex justify-between items-start pb-4 border-b border-[#232227]">
                    <div>
                      <span className="block font-medium text-white text-sm">
                        Audit Verifiability
                      </span>
                      <span className="text-xs text-[#696775]">
                        Relies on static export signatures
                      </span>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#ffb4ab]">
                      Reactive Only
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <span className="block font-medium text-white text-sm">
                        Reporting Latency
                      </span>
                      <span className="text-xs text-[#696775]">
                        Time gap between event and log entry
                      </span>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#e5e1e6]">
                      High (Weekly batches)
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-[#93000a]/10 border-t border-[#2d1a1c] text-center">
                  <p className="text-[11px] text-[#ffb4ab] font-mono uppercase tracking-widest">
                    Risk Assessment: Structurally Vulnerable & Latent
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE: DEMS+ SENTINEL */}
              <div className="bg-[#121218]/90 border border-[#c4c1fb]/30 rounded-2xl overflow-hidden flex flex-col backdrop-blur-md shadow-[0_0_50px_rgba(196,193,251,0.08)] transition-all duration-300 hover:border-[#c4c1fb]/60 ring-1 ring-[#c4c1fb]/10">
                <div className="p-6 bg-[#16152b] border-b border-[#c4c1fb]/20 flex justify-between items-center">
                  <div>
                    <span className="font-mono text-[10px] text-[#c4c1fb]/60 uppercase tracking-widest block mb-1">
                      Automated Protocol v4.2
                    </span>
                    <span className="font-bold text-[#4edea3] uppercase tracking-wider text-sm">
                      DEMS+ Sentinel Integrity
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#4edea3]/10 flex items-center justify-center border border-[#4edea3]/30 animate-pulse">
                    <span className="text-[#4edea3] text-xs font-mono">✓</span>
                  </div>
                </div>

                <div className="p-8 space-y-6 flex-grow">
                  <div className="flex justify-between items-start pb-4 border-b border-[#c4c1fb]/10">
                    <div>
                      <span className="block font-medium text-white text-sm">
                        Automated Updates
                      </span>
                      <span className="text-xs text-[#a5a3af]">
                        Continuous stream tracking APIs
                      </span>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#4edea3] bg-[#4edea3]/10 px-2 py-1 rounded border border-[#4edea3]/20">
                      Real-time (0.01s)
                    </span>
                  </div>

                  <div className="flex justify-between items-start pb-4 border-b border-[#c4c1fb]/10">
                    <div>
                      <span className="block font-medium text-white text-sm">
                        Timeline Accuracy
                      </span>
                      <span className="text-xs text-[#a5a3af]">
                        Asynchronous cryptographic sync
                      </span>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#4edea3]">
                      ± 0.4 Days
                    </span>
                  </div>

                  <div className="flex justify-between items-start pb-4 border-b border-[#c4c1fb]/10">
                    <div>
                      <span className="block font-medium text-white text-sm">
                        Audit Verifiability
                      </span>
                      <span className="text-xs text-[#a5a3af]">
                        Decentralized, append-only records
                      </span>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#4edea3] bg-[#4edea3]/10 px-2 py-1 rounded border border-[#4edea3]/20">
                      Immutable Block
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <span className="block font-medium text-white text-sm">
                        Reporting Latency
                      </span>
                      <span className="text-xs text-[#a5a3af]">
                        Instantly visible via pipeline events
                      </span>
                    </div>
                    <span className="font-mono text-sm font-bold text-[#4edea3]">
                      Zero Latency (Live Feed)
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-[#4edea3]/10 border-t border-[#c4c1fb]/20 text-center">
                  <p className="text-[11px] text-[#4edea3] font-mono uppercase tracking-widest">
                    System Status: Cryptographically Guaranteed Integrity
                  </p>
                </div>
              </div>
            </div>

            {/* NEW COMPONENT CONTENT: Architecture Impact Summary */}
            <div className="p-8 bg-[#121115] border border-[#232227] rounded-xl grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-[#a5a3af] uppercase mb-2">
                  // Resource Recovery
                </h4>
                <p className="text-sm text-[#8c8a94]">
                  By shifting from manual status updates to Sentinel automate
                  streams, legal and forensic teams recover an average of{" "}
                  <span className="text-white font-semibold">
                    230+ engineering hours
                  </span>{" "}
                  annually per investigator.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-[#a5a3af] uppercase mb-2">
                  // Chain of Custody Insurance
                </h4>
                <p className="text-sm text-[#8c8a94]">
                  Legacy delays introduce window gaps where metadata could be
                  altered or misattributed. Sentinel seals the log within
                  milliseconds of activity, ensuring{" "}
                  <span className="text-white font-semibold">
                    100% legal admissibility
                  </span>
                  .
                </p>
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-[#a5a3af] uppercase mb-2">
                  // Network Fault Tolerance
                </h4>
                <p className="text-sm text-[#8c8a94]">
                  Even during physical facility offline periods, local cached
                  encrypted journals backfill asynchronously to ensure timeline
                  accuracy never slips outside your compliance SLAs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 lg:px-8 bg-[#0d0c0f] text-[#f4f3f6] relative overflow-hidden">
          {/* Ambient Cyber-Glow Effects */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] bg-[#c4c1fb]/5 blur-[150px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-[#3a20ff]/10 blur-[180px] rounded-full"></div>
            {/* Subtle digital grid background overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Micro-Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c3c0ff]/10 border border-[#c3c0ff]/20 mb-8 mx-auto backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#c3c0ff] animate-ping"></span>
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#c3c0ff]">
                v4.2 Active Protection
              </span>
            </div>

            {/* Main Heading & Subtext */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-['Inter'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Secure Your Executive Oversight
              </h2>
              <p className="text-[#c8c5d0] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
                Join the world's leading forensic agencies and global legal
                teams leveraging the{" "}
                <span className="text-white font-medium">
                  DEMS+ Sentinel Integrity
                </span>{" "}
                system for absolute operational transparency and immutable
                chain-of-custody tracking.
              </p>
            </div>

            {/* NEW CONTENT: Interactive Metrics & Dynamic Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto text-left">
              <div className="p-6 bg-[#16151a]/60 border border-[#2a292d] rounded-xl backdrop-blur-sm relative group hover:border-[#c3c0ff]/30 transition-all">
                <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-[#1d00a5] text-[#c3c0ff] text-[10px] font-mono px-2 py-0.5 rounded border border-[#c3c0ff]/20">
                  实时
                </div>
                <p className="text-xs font-mono text-[#c3c0ff]/70 uppercase tracking-wider mb-2">
                  // Chain of Custody
                </p>
                <h4 className="text-xl font-bold mb-1">Zero-Trust Logs</h4>
                <p className="text-sm text-[#8c8a94]">
                  Every executive action is cryptographically sealed and
                  decentralized instantaneously.
                </p>
              </div>

              <div className="p-6 bg-[#16151a]/60 border border-[#2a292d] rounded-xl backdrop-blur-sm hover:border-[#c3c0ff]/30 transition-all">
                <p className="text-xs font-mono text-[#c3c0ff]/70 uppercase tracking-wider mb-2">
                  // Automated Audit
                </p>
                <h4 className="text-xl font-bold mb-1">Forensic Export</h4>
                <p className="text-sm text-[#8c8a94]">
                  Generate court-admissible audit reports with one-click
                  end-to-end encryption keys.
                </p>
              </div>

              <div className="p-6 bg-[#16151a]/60 border border-[#2a292d] rounded-xl backdrop-blur-sm hover:border-[#c3c0ff]/30 transition-all">
                <p className="text-xs font-mono text-[#c3c0ff]/70 uppercase tracking-wider mb-2">
                  // Global Compliance
                </p>
                <h4 className="text-xl font-bold mb-1">
                  Fail-Safe Sovereignty
                </h4>
                <p className="text-sm text-[#8c8a94]">
                  Multi-region data containment meeting strict federal and
                  cross-border digital mandates.
                </p>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#c3c0ff] text-[#1d00a5] font-bold rounded-lg shadow-xl shadow-[#c3c0ff]/10 hover:shadow-[#c3c0ff]/20 hover:bg-white hover:scale-[1.02] active:scale-95 transition-all duration-200">
                Request Enterprise Demo
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-[#16151a] border border-[#353438] text-white font-medium rounded-lg hover:bg-[#201f24] hover:border-[#47464f] transition-all duration-200 flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Technical Specs
              </button>
            </div>

            {/* Compliance Badges - Reimagined as a Security Dock */}
            <div className="border-t border-[#2a292d] pt-10">
              <p className="text-center text-[11px] uppercase tracking-[0.25em] text-[#696775] mb-6 font-semibold">
                Regulated Security Framework Deployments
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 max-w-4xl mx-auto">
                {[
                  "SOC2 TYPE II",
                  "GDPR COMPLIANT",
                  "ISO 27001",
                  "FIPS 140-2",
                ].map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-[#16151a] border border-[#232227] px-4 py-2 rounded-md transition-all hover:border-[#47464f]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="font-mono text-xs font-bold tracking-widest text-[#a5a3af]">
                      {badge}
                    </span>
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

export default StatusTracking;
