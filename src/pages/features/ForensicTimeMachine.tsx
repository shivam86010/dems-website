import React, { useState } from "react";

// Define structure for our forensic timeline events
interface LogBar {
  height: string; // Tailwind height percentage configuration
  type: "stable" | "nominal" | "alert" | "system";
}

export default function ForensicTimeMachine() {
  const [timelinePos, setTimelinePos] = useState<number>(54); // Slider position percentage
  const [selectedCase, setSelectedCase] = useState<"8829-X" | "9041-Z">(
    "8829-X",
  );

  // Simulated log metrics for Case 8829-X (Corrupted System Packets / Breach Scan)
  const caseData8829: LogBar[] = [
    { height: "h-[25%]", type: "stable" },
    { height: "h-[55%]", type: "stable" },
    { height: "h-[35%]", type: "nominal" },
    { height: "h-[75%]", type: "nominal" },
    { height: "h-[20%]", type: "system" },
    { height: "h-[90%]", type: "stable" },
    { height: "h-[45%]", type: "stable" },
    { height: "h-[65%]", type: "alert" }, // Suspicious Cluster Point 1
    { height: "h-[85%]", type: "alert" }, // Suspicious Cluster Point 2
    { height: "h-[40%]", type: "nominal" },
    { height: "h-[95%]", type: "nominal" },
    { height: "h-[60%]", type: "stable" },
    { height: "h-[30%]", type: "stable" },
    { height: "h-[15%]", type: "system" },
    { height: "h-[70%]", type: "nominal" },
    { height: "h-[100%]", type: "nominal" },
    { height: "h-[50%]", type: "stable" },
    { height: "h-[80%]", type: "stable" },
    { height: "h-[25%]", type: "system" },
    { height: "h-[40%]", type: "nominal" },
  ];

  // Simulated log metrics for Case 9041-Z (Brute Force Memory Leak / DB Injection Attempt)
  const caseData9041: LogBar[] = [
    { height: "h-[80%]", type: "nominal" },
    { height: "h-[90%]", type: "nominal" },
    { height: "h-[15%]", type: "system" },
    { height: "h-[40%]", type: "stable" },
    { height: "h-[35%]", type: "stable" },
    { height: "h-[100%]", type: "alert" }, // Direct Critical Payload Peak
    { height: "h-[95%]", type: "alert" }, // Secondary Wave Echo
    { height: "h-[20%]", type: "system" },
    { height: "h-[45%]", type: "stable" },
    { height: "h-[50%]", type: "stable" },
    { height: "h-[75%]", type: "nominal" },
    { height: "h-[60%]", type: "nominal" },
    { height: "h-[85%]", type: "alert" }, // Late Residual Breach Action
    { height: "h-[30%]", type: "stable" },
    { height: "h-[40%]", type: "stable" },
    { height: "h-[25%]", type: "system" },
    { height: "h-[65%]", type: "nominal" },
    { height: "h-[55%]", type: "nominal" },
    { height: "h-[70%]", type: "stable" },
    { height: "h-[20%]", type: "stable" },
  ];

  // Assign datasets dynamically depending on state selection
  const activeDataset = selectedCase === "8829-X" ? caseData8829 : caseData9041;

  // Change subheader micro readout dynamically based on data state
  const calculatedNanoseconds =
    selectedCase === "8829-X"
      ? Math.floor(timelinePos * 19482 + 10420)
      : Math.floor(timelinePos * 24109 + 30811);

  // Helper mapping values to clean up node color rendering based on category
  const getColorClass = (type: LogBar["type"]) => {
    switch (type) {
      case "stable":
        return "bg-[#4edea3]/40 border-[#4edea3]/20";
      case "nominal":
        return "bg-[#c4c1fb]/40 border-[#c4c1fb]/20";
      case "alert":
        return "bg-[#ff5f56]/50 border-[#ff5f56]/30";
      case "system":
        return "bg-[#353438] border-transparent";
    }
  };

  return (
    <section className="py-28 bg-[#0c0c0f] overflow-hidden border-t border-[#222129] text-[#e5e1e6]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24">
        {/* Top Header Section with Structural Metadata Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c4c1fb]" />
              <span className="font-mono text-[10px] text-[#c4c1fb] uppercase tracking-[0.3em] font-semibold">
                CHRONO-HISTORICAL SCRUBBER
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Forensic Time{" "}
              <span className="bg-gradient-to-r from-[#8de9c2] to-[#c4c1fb] bg-clip-text text-transparent">
                Machine
              </span>
            </h2>
            <p className="text-[#a5a1b0] max-w-xl text-base sm:text-lg leading-relaxed">
              Scrub back through months, years, or decades of network evidence
              logs with absolute nanosecond-precision execution snapshots.
            </p>
          </div>

          {/* Right Micro Stats Widget Panel */}
          <div className="flex gap-6 font-mono text-xs border border-[#232229] bg-[#131316]/60 p-4 rounded-xl backdrop-blur-md self-start md:self-auto">
            <div>
              <div className="text-[#8e8a99] text-[9px] uppercase tracking-wider mb-1">
                Scrub Resolution
              </div>
              <div className="text-[#4edea3] font-bold">1.02 ns / step</div>
            </div>
            <div className="w-px bg-[#2b2a33]" />
            <div>
              <div className="text-[#8e8a99] text-[9px] uppercase tracking-wider mb-1">
                Total Indexed
              </div>
              <div className="text-white font-bold">
                {selectedCase === "8829-X"
                  ? "4.2 TB Log Matrix"
                  : "8.9 TB Core Audit"}
              </div>
            </div>
          </div>
        </div>

        {/* Main Immersive Time Console Frame */}
        <div className="relative border border-[#2b2a33] bg-[#121215]/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden min-h-[500px] flex flex-col justify-between">
          {/* Decorative Terminal UI Accent Crosshairs */}
          <div className="absolute top-0 left-0 border-t-2 border-l-2 border-[#353438] w-4 h-4 rounded-tl-sm pointer-events-none" />
          <div className="absolute bottom-0 right-0 border-b-2 border-r-2 border-[#353438] w-4 h-4 rounded-br-sm pointer-events-none" />
          <div className="absolute top-6 right-6 font-mono text-[9px] text-[#8e8a99]/40 tracking-widest hidden sm:block">
            SYS_TIME_STAMP // LOCAL_REP
          </div>

          {/* Console Header Elements Row */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-[#2b2a33]/60 pb-6">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCase("8829-X")}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold tracking-wider transition-all duration-300 border ${
                  selectedCase === "8829-X"
                    ? "bg-[#353438] border-[#47464f] text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                    : "bg-transparent border-transparent text-[#8e8a99] hover:text-white"
                }`}
              >
                CASE_ID: 8829-X
              </button>
              <button
                onClick={() => setSelectedCase("9041-Z")}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold tracking-wider transition-all duration-300 border ${
                  selectedCase === "9041-Z"
                    ? "bg-[#353438] border-[#47464f] text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                    : "bg-transparent border-transparent text-[#8e8a99] hover:text-white"
                }`}
              >
                CASE_ID: 9041-Z
              </button>
              <div className="px-3 py-2 bg-[#3626ce]/10 border border-[#c4c1fb]/20 rounded-lg font-mono text-[11px] text-[#c4c1fb] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse" />
                REAL-TIME ARCHIVE_SYNCED
              </div>
            </div>

            {/* Target Variable Atomic Counter readout */}
            <div className="font-mono text-sm sm:text-base font-bold text-[#4edea3] bg-[#161a18] px-4 py-2 rounded-xl border border-[#4edea3]/20 shadow-inner flex items-center gap-3">
              <span className="text-[#8e8a99] text-[10px] tracking-wider uppercase font-normal">
                SNAPSHOT
              </span>
              <span className="tabular-nums">
                2026-05-12 14:22:01.{calculatedNanoseconds}ns
              </span>
            </div>
          </div>

          {/* Main Visual Data Component: Core Data Grid Waveform Graph */}
          <div className="relative h-48 my-10 flex items-end justify-between w-full opacity-90 group transition-opacity px-2">
            {/* Horizontal Grid Marking Guide Lines */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2b2a33]/60 to-transparent" />
            <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[#2b2a33]/30 to-transparent border-dashed border-t border-[#2b2a33]/20" />
            <div className="absolute inset-x-0 top-2/3 h-px bg-gradient-to-r from-transparent via-[#2b2a33]/30 to-transparent border-dashed border-t border-[#2b2a33]/20" />

            {/* Adaptive Interactive Highlight Bounding Window Frame wrapper */}
            <div
              className="absolute h-[115%] w-16 bg-gradient-to-b from-[#3626ce]/5 to-[#3626ce]/20 border-x border-[#c4c1fb]/30 transition-all duration-150 ease-out flex items-start justify-center pointer-events-none"
              style={{ left: `calc(${timelinePos}% - 32px)` }}
            >
              <span className="text-[8px] font-mono bg-[#3626ce] text-white px-1 py-0.5 rounded-b uppercase tracking-tight whitespace-nowrap">
                {timelinePos}% RANGE
              </span>
            </div>

            {/* Render dynamically mapped dynamic bar streams */}
            {activeDataset.map((bar, index) => (
              <div
                key={`${selectedCase}-bar-${index}`}
                className={`w-[4%] sm:w-1.5 rounded-t-sm transition-all duration-500 ease-out border ${bar.height} ${getColorClass(bar.type)}`}
              />
            ))}
          </div>

          {/* Precision Navigation Control Rack (Scrubber HUD track) */}
          <div className="relative pt-6 border-t border-[#2b2a33]/60">
            <div className="relative w-full h-3 bg-[#1c1b22] border border-[#2b2a33] rounded-full flex items-center">
              {/* Dynamic filled tracking progress indicator layer */}
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#3626ce] to-[#c4c1fb] rounded-full transition-all duration-150 ease-out"
                style={{ width: `${timelinePos}%` }}
              />

              {/* Actual Native Input Element for Fluid UI Input manipulation */}
              <input
                type="range"
                min="0"
                max="100"
                value={timelinePos}
                onChange={(e) => setTimelinePos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />

              {/* Enhanced Cyberpunk Floating Dial Handle */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 bg-[#c4c1fb] border-[5px] border-[#0c0c0f] rounded-full shadow-xl pointer-events-none z-10 transition-all duration-150 ease-out group-hover:scale-110 flex items-center justify-center"
                style={{ left: `${timelinePos}%` }}
              >
                <div className="w-1.5 h-1.5 bg-[#3626ce] rounded-full" />
              </div>
            </div>

            {/* Range Timeline Lower Legend Annotations row */}
            <div className="flex justify-between items-center font-mono text-[10px] text-[#8e8a99] pt-4 px-1">
              <span>- 90 DAYS AGO</span>
              <span className="text-[#3626ce] font-semibold tracking-wider">
                | CONSOLE FOCUS INTERVAL |
              </span>
              <span>LIVE CURRENT (UTC)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
